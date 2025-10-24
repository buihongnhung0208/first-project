import { z } from 'zod';

export const insertProductSchema = z.object({
      name: z.string().min(3, 'Name must be at least 3 characters'),
      slug: z.string().min(3, 'Slug must be at least 3 characters'),
      category: z.string().min(3, 'Category must be at least 3 characters'),
      brand: z.string().min(3, 'Brand must be at least 3 characters'),
      description: z.string().min(3, 'Description must be at least 3 characters'),
      stock: z.coerce.number(),
      images: z.array(z.string()).min(1, 'Product must have at least one image'),
      isFeatured: z.boolean(),
      banner: z.string().nullable(),
});

export function formatNumberWithDecimal(num: number): string {
      const [int, decimal] = num.toString().split('.');
      return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`;
}

const currency = z
      .string()
      .refine(
            (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
            'Price must have exactly two decimal places (e.g., 49.99)'
      );

export const cartItemSchema = z.object({
      productId: z.string().min(1, 'Product is required'),
      name: z.string().min(1, 'Name is required'),
      slug: z.string().min(1, 'Slug is required'),
      qty: z.coerce
            .number()
            .int()
            .nonnegative('Quantity must be a non-negative number'),
      image: z.string().min(1, 'Image is required'),
      price: z.coerce
            .number()
            .refine(
                  (value) => /^\d+(\.\d{2})?$/.test(Number(value).toFixed(2)),
                  'Price must have exactly two decimal places (e.g., 49.99)'
            ),
});

export const insertCartSchema = z.object({
      items: z.array(cartItemSchema),
      itemsPrice: currency,
      totalPrice: currency,
      shippingPrice: currency,
      taxPrice: currency,
      sessionCartId: z.string().min(1, 'Session cart id is required'),
      userId: z.string().optional().nullable(),
});

// Looser schema for client input when adding to cart
export const addToCartInputSchema = z
      .object({
            productId: z.string().optional(),
            slug: z.string().optional(),
            name: z.string().optional(),
            image: z.string().optional(),
            price: z.coerce.number().optional(),
            qty: z.coerce.number().default(1),
      })
      .refine((data) => Boolean(data.productId || data.slug), {
            message: 'Product identifier is required',
            path: ['productId'],
      });

export const shippingAddressSchema = z.object({
      fullName: z.string().min(3, 'Name must be at least 3 characters'),
      streetAddress: z.string().min(3, 'Address must be at least 3 characters'),
      city: z.string().min(3, 'city must be at least 3 characters'),
      postalCode: z.string().min(3, 'Postal code must be at least 3 characters'),
      country: z.string().min(3, 'Country must be at least 3 characters'),
      lat: z.number().optional(),
      lng: z.number().optional(),
});