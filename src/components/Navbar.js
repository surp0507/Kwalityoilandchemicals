"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplet } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          <Image src="/logo.png" alt="Kwality Oil & Chemicals Logo" width={220} height={60} className="logo-img" priority style={{ objectFit: 'contain' }} />
        </Link>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)} className={pathname === '/' ? 'active' : ''}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className={pathname?.startsWith('/products') ? 'active' : ''}>Products</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={pathname === '/about' ? 'active' : ''}>About Us</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className={`btn btn-primary btn-nav ${pathname === '/contact' ? 'active-btn' : ''}`}>Contact Us</Link>
        </nav>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
