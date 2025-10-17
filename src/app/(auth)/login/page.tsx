import React from 'react';
import { Metadata } from 'next';
import Logo from '@/assets/images/logo/logo.webp';
import Image from 'next/image';
import AnimatedLink from '@/components/base/AnimateLink';
import LoginForm from '@/components/forms/LoginForm';

export const metadata: Metadata = {
  title: "Login"
};

const Page = () => {
  return (
    <section className="container mx-auto py-3 px-4 flex justify-center items-center h-screen">
      <div className="bg-white p-8 inset-shadow-pressed-light background-blur-sm min-w-xs min-h-xs md:min-w-md md:min-h-md rounded-lg">
        <div className="mb-6 flex justify-center items-center gap-0.5">
          <Image
            src={Logo}
            alt="logo"
            width={25}
            height={25}
            className="object-contain h-auto w-auto"
          />
          <AnimatedLink
            href="/"
            className="text-lg md:text-xl text-primary-700 font-semibold"
          >
            Project Management
          </AnimatedLink>
        </div>
        <div className='mb-6 text-center'>
          <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-1">
            Welcome back
          </h3>
          <p>Please enter your details to login</p>
        </div>
        <LoginForm />
      </div>
    </section>
  );
};

export default Page;
