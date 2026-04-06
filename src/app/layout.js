import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kwality Oil & Chemicals | Premium Soya Products & Flavouring Essence',
  description: 'Leading wholesaler and manufacturer of Soya Flour, Custard Powder, Soya Oil, and Malt Extract Powder based in Indore, India. Established in 2012.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
