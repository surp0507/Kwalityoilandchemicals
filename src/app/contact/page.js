import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | Kwality Oil & Chemicals',
  description: 'Get in touch with Kwality Oil & Chemicals for product inquiries, bulk orders, and support.',
};

export default function Contact() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>

        <div className="grid grid-2" style={{ gap: '60px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get In Touch</h2>
            <p style={{ marginBottom: '32px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
              Have a requirement? We would love to hear from you. Send us a message and we will get back to you as soon as possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '12px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Indore - 452001, Madhya Pradesh, India</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '12px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ color: 'var(--text-muted)' }}>Available upon request</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--bg-color)', padding: '12px', borderRadius: '50%', color: 'var(--primary-color)' }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Email</h4>
                  <a href="mailto:info@kwalityoilandchemicals.com" style={{ color: 'var(--secondary-color)', fontWeight: '500' }}>info@kwalityoilandchemicals.com</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--white)', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
            <h3 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>Send a Message</h3>

            <form action="mailto:info@kwalityoilandchemicals.com" method="post" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Product Required</label>
                <input type="text" required style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message Details</label>
                <textarea required rows="4" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>
                Send Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
