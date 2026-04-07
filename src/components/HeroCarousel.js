"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import './HeroCarousel.css';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1595856405763-7188f6153926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    title: 'Premium Quality Soya Products & Chemicals',
    subtitle: 'Established in 2012, Kwality Oil & Chemicals is your trusted partner for premium Soya Oil, Soya Flour, Flavouring Essence, and industrial chemicals.',
  },
  {
    image: 'https://images.unsplash.com/photo-1605651478144-8cb31238622c?q=80&w=1920&auto=format&fit=crop',
    title: 'High-Grade Soya Oil & Lecithin',
    subtitle: 'Sourced from the finest soybean farms, our extracts go through rigorous quality control to ensure maximum purity and excellence for industrial and food usage.',
  },
  {
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?q=80&w=1920&auto=format&fit=crop',
    title: 'Nutrient-Rich Defatted Soya Flour',
    subtitle: 'An excellent source of protein, boasting supreme binding properties ideal for the bakery, confectionery, and modern food processing industries.',
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-switch slide interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`carousel-slide ${index === current ? 'active' : ''}`}
        >
          <div 
            className="carousel-bg" 
            style={{ backgroundImage: `linear-gradient(135deg, rgba(120, 40, 0, 0.9), rgba(255, 140, 0, 0.85)), url(${slide.image})` }} 
          />
          <div className="container">
            <div className="carousel-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <div className="carousel-buttons">
                <Link href="/products" className="btn btn-primary">Explore Products</Link>
                <Link href="/contact" className="btn btn-secondary bg-white">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
