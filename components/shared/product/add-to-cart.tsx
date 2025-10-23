'use client';

import { CartItem } from '@/types';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: Omit<CartItem, 'cartId'> }) => {
      const router = useRouter();
      const handleAddToCart = async () => {
            const res = await addItemToCart(item);
            if (!res.success) {
              toast.error(res.message || "Something went wrong!!!!");
              return;
            }
            toast(`${item.name} added to the cart`, {
              action: {
                label: 'Go to cart',
                onClick: () => router.push('/cart'),
              },
            });
          };

//   return <Button className='w-full' type='button' onClick={handleAddToCart}>
//   <Plus />
//   Add to cart
// </Button>
return <div className='text-sm text-primary cursor-pointer' onClick={handleAddToCart}>Add to cart</div>
};

export default AddToCart;