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
      <Button 
        disabled={pending} 
        className='w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]' 
        variant='default'
      >
        {pending ? (
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Đang đăng nhập...
          </div>
        ) : (
          'Đăng nhập'
        )}
      </Button>
    );
  };

  return (
    <form action={action} className="space-y-6">
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      
      <div className='space-y-6'>
        <div className="space-y-2">
          <Label htmlFor='email' className="text-sm font-semibold text-gray-700">
            Email
          </Label>
          <Input
            id='email'
            name='email'
            required
            type='email'
            placeholder='Nhập email của bạn'
            defaultValue={signInDefaultValues.email}
            autoComplete='email'
            className='h-12 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor='password' className="text-sm font-semibold text-gray-700">
            Mật khẩu
          </Label>
          <Input
            id='password'
            name='password'
            required
            type='password'
            placeholder='Nhập mật khẩu'
            defaultValue={signInDefaultValues.password}
            autoComplete='current-password'
            className='h-12 px-4 text-base border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200'
          />
        </div>
        
        <div>
          <SignInButton />
        </div>

        {data && !data.success && (
          <div className='text-center text-red-600 bg-red-50 border-2 border-red-200 rounded-xl p-4 text-sm font-medium shadow-sm'>
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {data.message}
            </div>
          </div>
        )}

        <div className='text-sm text-center text-gray-600 pt-4'>
          Chưa có tài khoản?{' '}
          <Link 
            target='_self' 
            className='text-blue-600 hover:text-blue-800 font-semibold underline decoration-2 underline-offset-2 hover:decoration-blue-800 transition-all duration-200' 
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
