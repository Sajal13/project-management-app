import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from '@/provider/StoreProvider';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    default: 'Product Management App',
    template: '%s | Product Management App'
  },
  description:
    'A modern product management dashboard built with Next.js, Redux Toolkit, and Tailwind CSS — enabling users to browse, create, edit, view, and delete products with a clean and responsive UI.',
  keywords: [
    'Next.js',
    'Redux Toolkit',
    'Product Management',
    'CRUD App',
    'Tailwind CSS',
    'React',
    'Product Dashboard',
    'Inventory Management'
  ],
  authors: [{ name: 'Sajal Das' }],
  creator: 'Sajal Das',
  publisher: 'Sajal Das',
  openGraph: {
    title: 'Product Management App',
    description:
      'A complete product management solution with CRUD operations, validations, and polished UI/UX.',
    siteName: 'Product Management App',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Management App',
    description:
      'Manage products efficiently with a sleek, responsive interface built using Next.js and Redux Toolkit.'
  },
  icons: {
    icon: '/assets/favicon/favicon.ico',
    shortcut: '/assets/favicon/favicon-16x16.png',
    apple: '/assets/favicon/apple-touch-icon.png',
    other: [
      {
        url: '/assets/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        url: '/assets/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  category: 'Web Application',
  manifest: '/assets/favicon/site.webmanifest'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
