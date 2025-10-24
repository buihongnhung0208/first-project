'use server';

import { signIn, signOut } from '@/auth';
import { signInFormSchema, signUpFormSchema } from '../constants/validator';
import { hashSync } from 'bcrypt-ts-edge';
import { prisma } from '@/db/prisma';
import { formatError } from '../utils';
import { ShippingAddress } from '@/types';
import { auth } from '@/auth';
import { shippingAddressSchema } from '../validators';


// Sign in the user with credentials
export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  try {
    const email = formData.get('email');
    const password = formData.get('password');
    
    console.log("🔍 DEBUG: Form data received:");
    console.log("🔍 DEBUG: Email:", email);
    console.log("🔍 DEBUG: Password:", password);

    const user = signInFormSchema.parse({
      email: email,
      password: password,
    });

    console.log("🔍 DEBUG: Parsed user data:", { email: user.email, password: user.password });

    const callbackUrl = formData.get('callbackUrl') as string || '/';
    console.log("🔍 DEBUG: Callback URL:", callbackUrl);

    await signIn('credentials', { ...user, callbackUrl });

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    console.log("❌ DEBUG: Error in signInWithCredentials:", error);
    if (error instanceof Error && error.message?.includes('NEXT_REDIRECT')) {
      throw error;
    }

    return { success: false, message: 'Invalid email or password' };
  }
}

// Register a new user
export async function signUp(prevState: unknown, formData: FormData) {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      confirmPassword: formData.get('confirmPassword'),
      password: formData.get('password'),
    });

    const plainPassword = user.password;

    user.password = hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
        role: 'USER',
      },
    });

    await signIn('credentials', {
      email: user.email,
      password: plainPassword,
    });

    return { success: true, message: 'User created successfully' };
  } catch (error) {
    if (error instanceof Error && error.message?.includes('NEXT_REDIRECT')) {
      throw error;
    }

    return {
      success: false,
      message: formatError(error),
    };
  }
}

export async function signOutUser() {
  await signOut({ redirectTo: '/' });
}

export async function updateUserAddress(data: ShippingAddress) {
  try {
    const session = await auth();

    const currentUser = await prisma.user.findFirst({
      where: { id: session?.user?.id! },
    });

    if (!currentUser) throw new Error('User not found');

    const address = shippingAddressSchema.parse(data);

    await prisma.user.update({
      where: { id: currentUser.id },
      data: { address },
    });

    return {
      success: true,
      message: 'User updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
