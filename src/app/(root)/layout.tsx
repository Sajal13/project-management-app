import Navbar from '@/components/navbars/Navbar';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const token = (await cookies()).get('token')?.value;

  if (!token) {
    redirect('/login');
  }
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;