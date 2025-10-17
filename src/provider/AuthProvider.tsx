'use client';

import { getCookie } from 'cookies-next';
import { createContext, useState, PropsWithChildren, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';

interface AuthProviderProps {
  isAuthenticated?: boolean;
}

const AuthContext = createContext({} as AuthProviderProps)
const AuthProvider = ({ children }: PropsWithChildren<AuthProviderProps>) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = getCookie('token');
    if (!token){
      router.push('/login');
    }
    setIsAuthenticated(!!token);
  }, []);
  return (
    <AuthContext value={{ isAuthenticated }}>
      {children}
    </AuthContext>
  );
};

export const useAuth = () => use(AuthContext);

export default AuthProvider;
