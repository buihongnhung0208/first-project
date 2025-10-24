'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signInDefaultValues } from '@/lib/constants';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import Link from 'next/link';

const CredentialsSignInForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    message: '',
    success: false,
  });
console.log('data1234', process.env.NEXTAUTH_SECRET);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Đang đăng nhập...
          </div>
        ) : (
          'Đăng nhập'
        )}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-6'>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            placeholder='Nhập email của bạn'
            defaultValue={signInDefaultValues.email}
            autoComplete='email'
            className='mt-1'
          />
        </div>
        <div>
          <Label htmlFor='password'>Mật khẩu</Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            placeholder='Nhập mật khẩu'
            defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
            className='mt-1'
          />
        </div>
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className='text-center text-red-600 bg-red-50 border border-red-200 rounded-md p-3 text-sm'>
            {data.message}
          </div>
        )}

        <div className='text-sm text-center text-gray-600'>
          Chưa có tài khoản?{' '}
          <Link 
            target='_self' 
            className='text-blue-600 hover:text-blue-800 font-medium' 
            href={`/sign-up?callbackUrl=${callbackUrl}`}
          >
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
