'use client';

import React from 'react';
import Button from '@/components/base/Button';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const handleLogout = () => {
    dispatch({ type: 'auth/logout' });
    router.push('/login');
  };
  return (
    <header className="sticky top-0 left-0 h-20 flex items-center border-b border-b-secondary bg-opacity-50 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Product Management App</h1>
        <Button variant="filled" color="danger" onClick={handleLogout}>
          Logout
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
