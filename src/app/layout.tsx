import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/util/Providers';
import { Analytics } from '@vercel/analytics/react';
import AppleFooter from '@/components/organisms/AppleFooter'; // Import AppleFooter

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Techie Orbit Blog Template',
  description: 'Developed by Hasala Abhilasha',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full max-w-[1200px] mx-auto ${inter.className} flex flex-col min-h-screen`}>
        <Providers>
          <div className="flex-grow"> {/* Wrapper to make footer stick to bottom */}
            <main>{children}</main>
          </div>
          <Analytics />
          <AppleFooter />
        </Providers>
      </body>
    </html>
  );
}
