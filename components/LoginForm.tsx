'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const FormSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (response?.error) {
        setIsError(response.error);
        // Handle error (e.g., show toast notification)
      } else {
        console.log('Login successful:', response);
        router.push('/');
        router.refresh();
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 flex flex-col items-center gap-y-6"
      >
        {/* Email Field */}
        <div className="w-full">
          <label htmlFor="email" className="text-gray-800 text-sm mb-2 block">
            Email
          </label>
          <div className="relative flex items-center">
            <input
              id="email"
              type="email"
              className="w-full text-gray-800 text-sm border px-4 py-3 rounded-md outline-none border-gray-300"
              placeholder="Enter your email"
              {...register('email')}
            />
            <BiUser color="gray" className="w-5 h-5 absolute right-4" />
          </div>
        </div>

        {/* Password Field */}
        <div className="w-full">
          <label
            htmlFor="password"
            className="text-gray-800 text-sm mb-2 block"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="w-full text-gray-800 text-sm border px-4 py-3 rounded-md outline-none border-gray-300"
              placeholder="Enter password"
              {...register('password')}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4"
            >
              {showPassword ? (
                <BsEyeSlash color="gray" className="w-5 h-5" />
              ) : (
                <BsEye color="gray" className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password and Submit Button */}
        <div className="w-full flex items-center justify-between">
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            Forgot your password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition disabled:bg-gray-400"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>

        <p className="text-gray-800 text-sm text-center">
          Dont have an account?{' '}
          <a href="#" className="text-blue-600 hover:underline font-semibold">
            Register here
          </a>
        </p>
      </form>

      {isError && (
        <p className="text-red-500 text-md mt-5 w-full text-center">
          {isError}
        </p>
      )}
    </div>
  );
}
