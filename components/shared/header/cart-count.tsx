'use client';

import { useEffect, useState } from 'react';
import { getMyCart } from '@/lib/actions/cart.actions';
import { Cart } from '@/types';

const CartCount = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const cart = await getMyCart();
        if (cart && cart.items) {
          const totalItems = cart.items.reduce((sum, item) => sum + item.qty, 0);
          setCartCount(totalItems);
        } else {
          setCartCount(0);
        }
      } catch (error) {
        console.error('Error fetching cart count:', error);
        setCartCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartCount();

    // Listen for storage events to update cart count when items are added/removed
    const handleStorageChange = () => {
      fetchCartCount();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (for same-tab updates)
    window.addEventListener('cartUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  if (cartCount === 0) {
    return null;
  }

  return (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
      {cartCount > 99 ? '99+' : cartCount}
    </span>
  );
};

export default CartCount;
