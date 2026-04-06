import { getProductBySlug } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MessageSquare, Phone } from 'lucide-react';
import './ProductDetail.css';

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="product-detail-section">
      <div className="container">

        <div className="breadcrumb">
          <Link href="/" className="breadcrumb-link">Home</Link> &gt;{' '}
          <Link href="/products" className="breadcrumb-link">Products</Link> &gt;{' '}
          {product.title}
        </div>

        <div className="product-detail-grid">
          {/* Image Column */}
          <div className="product-detail-image-wrapper">
            {product.image ? (
              <img src={product.image} alt={product.title} className="product-detail-img" />
            ) : (
              <div style={{ color: 'var(--text-muted)' }}>Image available soon</div>
            )}
          </div>

          {/* Details Column */}
          <div className="product-detail-info">
            <span className="product-detail-category">{product.category}</span>
            <h1 className="product-detail-title">{product.title}</h1>

            <div className="product-detail-price">
              {product.price}
              <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 'normal', marginLeft: '8px' }}>
                (Approx Price)
              </span>
            </div>

            <h3 className="product-section-heading">Product Details</h3>
            <p className="product-detail-desc">{product.description}</p>

            <h3 className="product-section-heading">Key Features</h3>
            <ul className="product-features-list">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {product.specifications && (
              <>
                <h3 className="product-section-heading">Product Specifications</h3>
                <table className="product-specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={idx}>
                        <td className="spec-key">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}

            <div className="action-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg" style={{ flex: 1 }}>
                <MessageSquare size={20} /> Request a Quote
              </Link>
              <a href="tel:+917049497130" className="btn btn-secondary btn-lg" style={{ flex: 1 }}>
                <Phone size={20} /> Call Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
