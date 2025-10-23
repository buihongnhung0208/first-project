'use client';

import { CartItem } from '@/types';
import { toast } from "sonner";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Plus, Minus, Loader } from 'lucide-react';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: Omit<CartItem, 'cartId'> }) => {
      const [isPending, startTransition] = useTransition();
      const router = useRouter();
      const handleAddToCart = async () => {
            startTransition(async () => {
                  // Execute the addItemToCart action
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
            })
      };

      //   return <Button className='w-full' type='button' onClick={handleAddToCart}>
      //   <Plus />
      //   Add to cart
      // </Button>
      return <div className='text-sm text-primary cursor-pointer' onClick={handleAddToCart}>Add to cart</div>
};

export default AddToCart;