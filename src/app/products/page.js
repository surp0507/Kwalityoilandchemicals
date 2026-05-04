import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export const metadata = {
  title: 'Our Products | Kwality Oil & Chemicals',
  description: 'Explore our complete range of Soya Products, Flavouring Essence, Malt Extract, and Baking supplies.',
};

export default function Products() {

  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Our Products</h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
          Browse our comprehensive catalog of high-quality agricultural and chemical products. We ensure strict quality compliance and timely delivery for all bulk orders.
        </p>

        <div className="grid grid-3">
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              slug={product.slug}
              title={product.title}
              category={product.category}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
