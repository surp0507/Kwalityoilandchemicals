export const metadata = {
  title: 'About Us | Kwality Oil & Chemicals',
  description: 'Learn about Kwality Oil & Chemicals, a leading manufacturer and wholesaler of premium Soya Products, Flavouring Essence, and Chemicals since 2012.',
};

export default function About() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">About Kwality Oil & Chemicals</h1>

        <div className="grid grid-2" style={{ alignItems: 'center', gap: '40px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Journey</h2>
            <p style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Established in 2012, Kwality Oil And Chemicals is a leading organization engaged in the area of manufacturing, wholesaling and trading a broad plethora of Soya Flour, Custard Powder, Soya Oil, and more.
            </p>
            <p style={{ marginBottom: '16px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              In our development process, we assure that only top notch food material is used by our professionals along with ultra-modern machinery. Besides this, we check these on a variety of grounds before finally shipping them at the destination of our customers.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Working under the mentorship of Mr. M.L. Pal, we have acquired a reputed stature in the industry with over 15 years of solid trust and reliability on platforms like IndiaMART.
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '1.5rem', borderBottom: '2px solid var(--border)', paddingBottom: '12px' }}>Company Factsheet</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li><strong>Business Type:</strong> Wholesaler / Manufacturer</li>
              <li><strong>Established:</strong> 2012</li>
              <li><strong>Proprietor:</strong> Mr. M.L. Pal</li>
              <li><strong>Location:</strong> Indore, Madhya Pradesh, India</li>
              <li><strong>Total Number of Employees:</strong> Up to 10 People</li>
              <li><strong>Annual Turnover:</strong> 40 L - 1.5 Cr</li>
              <li><strong>GST Number:</strong> 23BJTPP8306F1ZY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
