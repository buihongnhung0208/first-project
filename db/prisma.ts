import { neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@/lib/generated/prisma';
import ws from 'ws';

neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaNeon({ connectionString });

export const prisma = new PrismaClient({ adapter }).$extends({
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
