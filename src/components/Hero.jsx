import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../config/business'
import './Hero.css'

const stats = [
  { num: '40+', label: 'Years Experience' },
  { num: '100+', label: 'Products' },
  { num: '1000+', label: 'Happy Customers' },
  { num: '100%', label: 'Pure & Natural' },
]

const highlights = [
  'No Palm Oil',
  'Cold Pressed',
  'No Preservatives',
  'Traditional Process',
  'Fresh Every Batch',
  'Stone Ground',
]

export default function Hero() {
  return (
    <section className="hero-section">
      {/* Top accent bar */}
      <div className="hero-accent-bar">
        <div className="container hero-accent-inner">
          <span>🌿 Established for over 40 Years · Pure Traditional Oils · No Additives · Fresh Stock</span>
        </div>
      </div>

      <div className="container hero-inner">
        {/* Left: Text Content */}
        <div className="hero-content">
          <div className="hero-label-row">
            <span className="hero-label">Sri Lakshmi Oil Mills</span>
            <span className="hero-label-dot">·</span>
            <span className="hero-label">Trusted Since 40+ Years</span>
          </div>

          <h1 className="hero-headline">
            Pure Oils.<br />
            <span className="hero-h-line2">Made the Old Way.</span><br />
            <span className="hero-h-line3">For Your Family.</span>
          </h1>

          <p className="hero-sub">
            We cold-press every batch in our traditional oil mill so your family gets oil the way it was always meant to be — pure, fresh, and full of natural goodness.
          </p>

          <div className="hero-highlights-row">
            {highlights.map(h => (
              <span key={h} className="hero-highlight-chip">✓ {h}</span>
            ))}
          </div>

          <div className="hero-ctas">
            <Link to="/products" className="btn hero-btn-primary">
              View Our Products
            </Link>
            <a
              href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your oils and products.")}
              target="_blank"
              rel="noreferrer"
              className="btn hero-btn-wa"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Right: Image + overlay stats */}
        <div className="hero-visual">
          <div className="hero-img-frame">
            <div className="hero-img-inner">
              <div className="placeholder-img hero-ph">
                <span style={{ fontSize: '4rem', opacity: 0.35 }}>🛢️</span>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#5a8a6a' }}>Oil Mill Hero Image</span>
                <small style={{ color: '#8aaa9a', fontSize: '0.72rem' }}>Replace: src/assets/images/oil-hero.jpg</small>
              </div>
            </div>
            <div className="hero-frame-deco" />
          </div>

          <div className="hero-stats-row">
            {stats.map(s => (
              <div key={s.label} className="hero-stat">
                <div className="hero-stat-num">{s.num}</div>
                <div className="hero-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
