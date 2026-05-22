import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>Kwality Oil & Chemicals</h3>
            <p>Established in 2012, leading manufacturer and wholesaler of premium Soya Products, Flavouring Essence, and Chemicals.</p>
            <p className="gst">GST - 23BJTPP8306F1ZY</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Our Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Products</h3>
            <ul>
              <li><Link href="/products">Soya Flour</Link></li>
              <li><Link href="/products">Soya Oil</Link></li>
              <li><Link href="/products">Flavouring Essence</Link></li>
              <li><Link href="/products">Malt Extract</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="contact-list">
              <li>
                <MapPin size={20} />
                <span>Indore - 452001, Madhya Pradesh, India</span>
              </li>
              <li>
                <Phone size={20} />
                <span>15+ Years on IndiaMART</span>
              </li>
              <li>
                <Mail size={20} />
                <a href="mailto:info@kwalityoilandchemicals.com">info@kwalityoilandchemicals.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kwality Oil & Chemicals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
