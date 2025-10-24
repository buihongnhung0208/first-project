import { PrismaClient } from '@/lib/generated/prisma';

export const prisma = new PrismaClient().$extends({
      result: {
        product: {
          price: {
            compute(product: { price: { toString(): string } }) {
              return product.price.toString();
            },
          },
          rating: {
            compute(product: { rating: { toString(): string } }) {
              return product.rating.toString();
            },
          },
        },
      },
    });
