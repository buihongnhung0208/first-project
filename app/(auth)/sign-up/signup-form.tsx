'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpDefaultValues } from '@/lib/constants';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { signUp } from '@/lib/actions/user.actions';

const SignUpForm = () => {
  const [data, action] = useActionState(signUp, {
    message: '',
    success: false,
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignUpButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className='w-full' variant='default'>
        {pending ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Đang tạo tài khoản...
          </div>
        ) : (
          'Tạo tài khoản'
        )}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-6'>
        <div>
          <Label htmlFor='name'>Họ và tên</Label>
          <Input
            id='name'
            name='name'
            required
            type='text'
            placeholder='Nhập họ và tên của bạn'
            defaultValue={signUpDefaultValues.name}
            autoComplete='name'
            className='mt-1'
          />
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            placeholder='Nhập email của bạn'
            defaultValue={signUpDefaultValues.email}
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
            defaultValue={signUpDefaultValues.password}
            autoComplete='new-password'
            className='mt-1'
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword'>Xác nhận mật khẩu</Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            required
            type='password'
            placeholder='Nhập lại mật khẩu'
            defaultValue={signUpDefaultValues.confirmPassword}
            autoComplete='new-password'
            className='mt-1'
          />
        </div>
        <div>
          <SignUpButton />
        </div>

        {!data.success && data.message && (
          <div className='text-center text-red-600 bg-red-50 border border-red-200 rounded-md p-3 text-sm'>
            {data.message}
          </div>
        )}

        <div className='text-sm text-center text-gray-600'>
          Đã có tài khoản?{' '}
          <Link
            target='_self'
            className='text-blue-600 hover:text-blue-800 font-medium'
            href={`/sign-in?callbackUrl=${callbackUrl}`}
          >
            Đăng nhập ngay
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
