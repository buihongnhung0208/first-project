import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import SignUpForm from './signup-form';

export const metadata: Metadata = {
  title: 'Đăng ký',
};

const SignUp = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const searchParams = await props.searchParams;

  const { callbackUrl } = searchParams;

  const session = await auth();

  if (session?.user) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 px-4'>
      <div className='w-full max-w-md'>
        <Card className='shadow-xl border-0'>
          <CardHeader className='space-y-6 text-center pb-8'>
            <Link href='/' className='flex justify-center'>
              <Image
                priority={true}
                src='/images/logo.svg'
                width={80}
                height={80}
                alt={`${APP_NAME} logo`}
                className='hover:scale-105 transition-transform'
              />
            </Link>
            <div>
              <CardTitle className='text-2xl font-bold text-gray-900'>
                Tạo tài khoản mới
              </CardTitle>
              <CardDescription className='text-gray-600 mt-2'>
                Điền thông tin để tạo tài khoản của bạn
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className='px-8 pb-8'>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
