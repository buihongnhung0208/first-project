import { getOrderById } from '@/lib/actions/order.actions';
import { notFound } from 'next/navigation';
import OrderDetailsTable from './order-details-table';
import { auth } from '@/auth';
import { shippingAddressSchema } from '@/lib/validators';

export const metadata = {
  title: 'Order Details',
};

const session = await auth();

const OrderDetailsPage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const params = await props.params;

  const { id } = params;

  const order = await getOrderById(id);
  if (!order) notFound();

  let shippingAddress;
  try {
    shippingAddress = shippingAddressSchema.parse(order.shippingAddress);
  } catch {
    notFound();
  }

  const preparedOrder = {
    ...order,
    itemsPrice: order.itemsPrice?.toString(),
    shippingPrice: order.shippingPrice?.toString(),
    taxPrice: order.taxPrice?.toString(),
    totalPrice: order.totalPrice?.toString(),
    shippingAddress,
    orderItems: order.orderItems?.map((item: any) => ({
      ...item,
      price: item.price?.toString(),
    })) || [],
  };

  return (
    <OrderDetailsTable
      order={preparedOrder}
      paypalClientId={process.env.PAYPAL_CLIENT_ID || 'sb'}
      isAdmin={session?.user.role === 'ADMIN' || false}
    />
  );
};

export default OrderDetailsPage;
