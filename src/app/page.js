import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import HeroCarousel from '@/components/HeroCarousel';
import { products as topProducts } from '@/data/products';
import { ShieldCheck, Truck, Clock, Award } from 'lucide-react';
import './Home.css';

export default function Home() {

  return (
    <div>
      <HeroCarousel />


      {/* Why Choose Us */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="grid grid-4 features-grid">
            <div className="feature-card">
              <ShieldCheck size={48} className="feature-icon" />
              <h3>Quality Compliance</h3>
              <p>Strict focus on top-notch quality control and material testing.</p>
            </div>
            <div className="feature-card">
              <Clock size={48} className="feature-icon" />
              <h3>Timely Delivery</h3>
              <p>We ensure fast and reliable shipping for all your orders.</p>
            </div>
            <div className="feature-card">
              <Award size={48} className="feature-icon" />
              <h3>15+ Years Experience</h3>
              <p>Trusted supplier with a solid reputation on IndiaMART.</p>
            </div>
            <div className="feature-card">
              <Truck size={48} className="feature-icon" />
              <h3>Easy Shipping & Payment</h3>
              <p>Multiple secure payment modes and nationwide transport.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="grid grid-4">
            {topProducts.slice(0, 4).map((product, idx) => (
              <ProductCard
                key={idx}
                slug={product.slug}
                title={product.title}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
          <div className="center-btn mt-40">
            <Link href="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container cta-container">
          <h2>Ready to place an order?</h2>
          <p>Get in touch with us today for the best prices and bulk inquiries.</p>
          <Link href="/contact" className="btn btn-primary btn-lg">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
}
