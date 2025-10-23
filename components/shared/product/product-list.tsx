import { Product } from '@/lib/generated/prisma';

interface ProductListProps {
  title: string;
  data: Product[];
}

const ProductList = ({ title, data }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 space-y-2">
            {product.images.length > 0 && (
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
            )}
            <h4 className="font-medium">{product.name}</h4>
            <p className="text-sm text-gray-600">{product.brand}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="font-bold text-lg">${product.price.toString()}</p>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">★</span>
              <span className="text-sm">{product.rating.toString()}</span>
              <span className="text-sm text-gray-500">({product.numReviews} reviews)</span>
            </div>
            <p className="text-sm text-gray-600">Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
