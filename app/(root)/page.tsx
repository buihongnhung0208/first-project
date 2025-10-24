import { Button } from '@/components/ui/button';
import ProductList from '@/components/shared/product/product-list';
import { prisma } from '@/db/prisma';

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const HomePage = async () => {
  await delay(2000);
  
  // Lấy sản phẩm từ database
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Sản phẩm mới nhất</h2>
      <ProductList title='Sản phẩm nổi bật' data={products} limit={8} />
    </div>
  );
};

export default HomePage;
