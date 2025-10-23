import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from '@/components/shared/product/product-price'
import AddToCart from '@/components/shared/product/add-to-cart';

const ProductCard = ({ product }: { product: any }) => {
      return (
            <Card className='w-full max-w-sm'>
                  <CardHeader className='p-0 items-center'>
                        <Link href={`/product/${product.slug}`}>
                              <Image
                                    priority={true}
                                    src={product.images![0]}
                                    alt={product.name}
                                    className='aspect-square object-cover rounded'
                                    height={300}
                                    width={300}
                              />
                        </Link>
                  </CardHeader>
                  <CardContent className='p-4 grid gap-4'>
                        <div className='flex justify-between'>
                              <div className='text-xs'>{product.brand}</div>

                              <AddToCart
                                    item={{
                                          productId: product.id,
                                          name: product.name,
                                          slug: product.slug,
                                          price: product.price,
                                          qty: 1,
                                          image: product.images![0],
                                    }}
                              />
                        </div>
                        <Link href={`/product/${product.slug}`}>
                              <h2 className='text-sm font-medium'>{product.name}</h2>
                        </Link>
                        <div className='flex-between gap-4'>
                              <p>{product.rating} stars</p>
                              {product.stock > 0 ? (
                                    <p className='font-bold'><ProductPrice value={Number(product.price)} />
                                    </p>
                              ) : (
                                    <p className='text-destructive'>Out of Stock</p>
                              )}
                        </div>
                  </CardContent>
            </Card>
      );
};

export default ProductCard;