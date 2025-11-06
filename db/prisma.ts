import { PrismaClient } from '@/lib/generated/prisma';

export const prisma = new PrismaClient().$extends({
      result: {
        product: {
          price: {
            compute(product: { price?: { toString(): string } | null }) {
              return product.price?.toString() ?? '0';
            },
          },
          rating: {
            compute(product: { rating?: { toString(): string } | null }) {
              return product.rating?.toString() ?? '0';
            },
          },
        },
      },
    });
