import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../config/business'
import './Hero.css'

const highlights = [
  'No Palm Oil', 'Cold Pressed', 'No Preservatives',
  'Traditional Process', 'Fresh Every Batch', 'Stone Ground',
]

const ownerPoints = [
  { icon: '🔍', text: 'Expert quality judgement' },
  { icon: '🤝', text: 'Trusted by local families' },
  { icon: '🏭', text: 'Traditional mill knowledge' },
  { icon: '⭐', text: 'Community favourite' },
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
        {/* ── Left: Text Content ── */}
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
            <Link to="/products" className="btn hero-btn-primary">View Our Products</Link>
            <a
              href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your oils and products.")}
              target="_blank" rel="noreferrer"
              className="btn hero-btn-wa"
            >
              💬 WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* ── Right: Mill image + Owner card ── */}
        <div className="hero-visual">
          {/* Oil mill image */}
          <div className="hero-img-frame">
            <div className="hero-img-inner">
              <div className="placeholder-img hero-ph">
                <span style={{ fontSize: '3.5rem', opacity: 0.3 }}>🛢️</span>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#5a8a6a' }}>Oil Mill Image</span>
                <small style={{ color: '#8aaa9a', fontSize: '0.7rem' }}>Replace: src/assets/images/oil-hero.jpg</small>
              </div>
            </div>
            <div className="hero-frame-deco" />
          </div>

          {/* Owner card — integrated into hero */}
          <div className="hero-owner-card">
            <div className="hoc-img">
              <div className="placeholder-img hoc-ph">
                <span style={{ fontSize: '2rem', opacity: 0.4 }}>👨‍🌾</span>
              </div>
              <div className="hoc-badge">
                <span className="hoc-badge-num">40+</span>
                <span className="hoc-badge-lbl">Yrs Exp</span>
              </div>
            </div>
            <div className="hoc-body">
              <div className="hoc-label">About the Owner</div>
              <div className="hoc-title">Quality You Can Trust<br />by Just One Look</div>
              <p className="hoc-desc">
                Over 40 years of hands-on experience in traditional oil milling. The owner personally checks every batch for purity and freshness.
              </p>
              <div className="hoc-points">
                {ownerPoints.map(p => (
                  <span key={p.text} className="hoc-point">
                    {p.icon} {p.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
