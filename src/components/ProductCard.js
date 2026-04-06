import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ title, category, description, image, slug }) {
  return (
    <div className="product-card">
      {image && (
        <div className="product-image-container">
          <img src={image} alt={title} className="product-image" loading="lazy" />
        </div>
      )}
      <div className="product-card-body">
        <span className="product-category">{category}</span>
        <h3 className="product-title">{title}</h3>
        {description && <p className="product-desc">{description}</p>}
      </div>
      <div className="product-card-footer">
        <Link href={slug ? `/products/${slug}` : '/contact'} className="btn btn-primary product-btn">
          View Details <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
