import type { Metadata } from 'next';
import { Inter, Montserrat, Arapey } from 'next/font/google';
import './globals.css';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Abieyuwa Adeseiye's Portfolio",
  description: 'Abieyuwa Adeseiye',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
