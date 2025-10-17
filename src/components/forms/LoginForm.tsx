'use client';

import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@/components/base/TextField';
import Button from '../base/Button';
import { useLoginMutation } from '@/lib/features/authApi';
import { useRouter } from 'next/navigation';

interface LoginFormValues {
  email: string;
}

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required')
});

const LoginForm = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: ''
    }
  });

  const onSubmitHandler: SubmitHandler<LoginFormValues> = async (data) => {
    await login({ email: data.email });
    console.log('Login form submitted with data:', data);
    router.push('/');
  };
  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <div className='mb-4'>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              label="Email address"
              type='email'
              value={field.value}
              onChange={field.onChange}
              placeholder="Enter your email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </div>
      <Button type="submit" color="primary" className="w-full" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      {error && <p className="text-red-500 mt-2 text-sm">Login failed.</p>}
    </form>
  );
};

export default LoginForm;
