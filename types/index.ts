import { z } from 'zod';
import {
      cartItemSchema,
      insertCartSchema,
      insertProductSchema,
      shippingAddressSchema,
} from '@/lib/validators';

export type Cart = z.infer<typeof insertCartSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type ShippingAddress = z.infer<typeof shippingAddressSchema>;
