import { Button } from "@/components/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getAllOrders } from "@/lib/actions/order.actions";
import Link from "next/link";

const AdminOrdersPage = async (props: {
      searchParams: Promise<{ page: string; query: string }>;
}) => {
      const searchParams = await props.searchParams;
      const { page = '1', query: searchText } = searchParams;
      const orders = await getAllOrders({
            page: Number(page),
      });
      return <div className='flex items-center gap-3'>
            <h1 className='h2-bold'>Orders</h1>
            {searchText && (
                  <div>
                        Filtered by <i>&quot;{searchText}&quot;</i>{' '}
                        <Link href={`/admin/orders`}>
                              <Button variant='outline' size='sm'>
                                    Remove Filter
                              </Button>
                        </Link>
                  </div>
            )}
      </div>
}
export default AdminOrdersPage;