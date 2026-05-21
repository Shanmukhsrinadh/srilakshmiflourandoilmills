import { Link } from 'react-router-dom'
import { getWhatsAppLink } from '../config/business'
import ownerPhoto from '../assets/images/owner.webp'
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
      <div className="hero-accent-bar">
        <div className="container hero-accent-inner">
          <span>🌿 Established for over 40 Years · Pure Traditional Oils · No Additives · Fresh Stock</span>
        </div>
      </div>

      <div className="container hero-inner">
        {/* ── Left: Text ── */}
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

        {/* ── Right: Owner card (full column) ── */}
        <div className="hero-visual">
          <div className="hero-owner-card">
            {/* Portrait image */}
            <div className="hoc-portrait">
              <img
                src={ownerPhoto}
                alt="Owner of Sri Lakshmi Flour & Oil Mill — 40+ years of experience"
                className="hoc-portrait-img"
              />
              <div className="hoc-exp-badge">
                <span className="hoc-badge-num">40+</span>
                <span className="hoc-badge-lbl">Years of<br/>Experience</span>
              </div>
            </div>

            {/* Content */}
            <div className="hoc-body">
              <div className="hoc-label">About the Owner</div>
              <h3 className="hoc-title">Quality You Can Trust<br />by Just One Look</h3>
              <p className="hoc-desc">
                With over 40 years of hands-on experience in traditional oil milling, the owner of Sri Lakshmi Oil Mills has built deep knowledge in identifying product quality, freshness, and purity. Every batch carries his personal stamp of approval.
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
