import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ProductPrice from '@/components/shared/product/product-price';
import { Star } from 'lucide-react';

const ProductCard = ({ product }: { product: any }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-3 w-3 ${
            i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <Card className='w-full max-w-sm hover:shadow-lg transition-shadow duration-300 hover-lift'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/product/${product.slug}`} className='cursor-pointer'>
          <Image
            priority={true}
            src={product.images![0] || '/placeholder-product.svg'}
            alt={product.name}
            className='aspect-square object-cover rounded-t-lg hover-scale'
            height={300}
            width={300}
          />
        </Link>
      </CardHeader>
      <CardContent className='p-4 space-y-3'>
        <div className='flex justify-between items-start'>
          <span className='text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded'>
            {product.brand}
          </span>
        </div>
        
        <Link href={`/product/${product.slug}`} className='cursor-pointer'>
          <h2 className='text-sm font-medium hover:text-blue-600 transition-colors line-clamp-2'>
            {product.name}
          </h2>
        </Link>
        
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            {renderStars(Math.round(Number(product.rating)))}
            <span className='text-xs text-gray-500 ml-1'>
              ({product.numReviews})
            </span>
          </div>
          
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <span className='text-sm text-red-500 font-medium'>Hết hàng</span>
          )}
        </div>
        
        {product.stock > 0 && (
          <div className='text-xs text-green-600'>
            ✓ Còn {product.stock} sản phẩm
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;