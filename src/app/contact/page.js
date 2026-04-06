"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Added email so you can reply to them!
    product: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    // Web3Forms payload requirements
    const payload = {
      ...formData,
      // Replace this YOUR_ACCESS_KEY_HERE with the key you get from Web3Forms
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: true, error: null });
        setFormData({ name: '', email: '', product: '', message: '' }); // clear form
      } else {
        setStatus({ loading: false, success: false, error: data.message || 'Failed to send message' });
      }
    } catch (error) {
      setStatus({ loading: false, success: false, error: 'An unexpected error occurred.' });
    }
  };

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
                  <a href="tel:+917049497130" style={{ color: 'var(--secondary-color)', fontWeight: '500', textDecoration: 'none' }}>+91 7049497130 / 9229247383 (Click to Call)</a>
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

            {status.success && (
              <div style={{ backgroundColor: '#d4edda', color: '#155724', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                Thank you! Your message has been sent successfully. Our team will get back to you soon.
              </div>
            )}

            {status.error && (
              <div style={{ backgroundColor: '#f8d7da', color: '#721c24', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '16px' }}>
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Product Required</label>
                <input
                  type="text"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Message Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontSize: '1rem', resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" disabled={status.loading} className="btn btn-primary" style={{ marginTop: '8px', width: '100%', opacity: status.loading ? 0.7 : 1 }}>
                {status.loading ? 'Sending...' : 'Send Inquiry'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
