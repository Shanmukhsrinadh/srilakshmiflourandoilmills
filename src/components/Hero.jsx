import { Link } from 'react-router-dom'
import { getWhatsAppLink, BUSINESS } from '../config/business'
import './Hero.css'

const trustBadges = [
  { icon: '🏆', label: '40 Years Experience' },
  { icon: '✅', label: 'Quality Checked' },
  { icon: '🏭', label: 'Traditional Oil Mill' },
  { icon: '🌿', label: 'Fresh Products' },
]

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-pre-tag">
            <span>🌿 Trusted Since Over 40 Years</span>
          </div>
          <h1 className="hero-headline">
            Pure Traditional Oils,<br />
            <span className="hero-highlight">Trusted for Generations</span>
          </h1>
          <p className="hero-sub">
            Sri Lakshmi Oil Mills brings you quality oils and food products backed by
            40 years of hands-on experience. From our traditional oil mill to your home.
          </p>
          <div className="hero-ctas">
            <Link to="/products" className="btn btn-primary btn-lg">
              🛒 View Products
            </Link>
            <a
              href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 Enquire on WhatsApp
            </a>
          </div>
          <div className="hero-badges">
            {trustBadges.map((b) => (
              <div key={b.label} className="trust-badge">
                <span className="trust-badge-icon">{b.icon}</span>
                <span className="trust-badge-label">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-image-wrap">
          <div className="hero-img-placeholder">
            <div className="placeholder-img" style={{ height: '100%', borderRadius: '16px' }}>
              <span className="ph-icon">🛢️</span>
              <span>Oil Mill Hero Image</span>
              <small>Replace with: src/assets/images/oil-hero.jpg</small>
            </div>
          </div>
          <div className="hero-img-badge">
            <span className="hib-icon">⭐</span>
            <div>
              <div className="hib-num">40+</div>
              <div className="hib-lbl">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
