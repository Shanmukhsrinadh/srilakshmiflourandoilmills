import { Link } from 'react-router-dom'
import NewspaperFeature from '../components/NewspaperFeature'
import { getWhatsAppLink, getCallLink } from '../config/business'
import './About.css'

const trustPoints = [
  { icon: '🏆', title: '40+ Years of Experience', desc: 'Since our founding, we have built decades of expertise in traditional oil milling and food product quality.' },
  { icon: '🌿', title: 'Traditional Process', desc: 'Every product is made using traditional, time-tested methods that preserve natural taste and nutrition.' },
  { icon: '✅', title: 'Strict Quality Checking', desc: 'The owner personally checks every batch to ensure only the finest products reach our customers.' },
  { icon: '❤️', title: 'Local Community Trust', desc: 'We are proud to be trusted by thousands of local families who rely on us every day.' },
]

const timeline = [
  { year: 'Est.', label: '40+ Years Ago', text: 'Sri Lakshmi Oil Mills was established with a vision to provide pure, traditional oils to local customers.' },
  { year: '10+', label: 'Years', text: 'Expanded product range to include millets, snacks, sweets, pickles, and powders.' },
  { year: '40+', label: 'Years Today', text: 'Serving thousands of happy customers with the same commitment to quality and trust.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <div className="about-hero">
        <div className="container">
          <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>About Us</span>
          <h1>Sri Lakshmi Oil Mills</h1>
          <p>A family business built on trust, quality, and 40 years of dedicated service.</p>
          <div className="products-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>About</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="section-pad">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-img">
              <img
                src="/images/shop/shop_entrnce.webp"
                alt="Sri Lakshmi Flour & Oil Mill shop entrance"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
              />
              <div className="about-stat-box">
                <div className="asb-row">
                  <div className="asb-stat">
                    <div className="asb-num">40+</div>
                    <div className="asb-lbl">Years Experience</div>
                  </div>
                  <div className="asb-divider" />
                  <div className="asb-stat">
                    <div className="asb-num">100+</div>
                    <div className="asb-lbl">Products</div>
                  </div>
                  <div className="asb-divider" />
                  <div className="asb-stat">
                    <div className="asb-num">1000+</div>
                    <div className="asb-lbl">Happy Customers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-intro-content">
              <span className="tag">Our Story</span>
              <div className="divider"></div>
              <h2 className="section-title">A Legacy Built on<br />Trust and Quality</h2>
              <p className="about-text">
                Sri Lakshmi Oil Mills was founded with a simple but powerful belief — that every family deserves access to pure, traditional, and quality food products. Over four decades, we have remained committed to this belief, serving our local community with honesty and dedication.
              </p>
              <p className="about-text">
                Our journey began with traditional oil milling, and over the years we expanded our product range to include millets, snacks, sweets, pickles, and powders — all made with the same care and commitment to quality that our founder believed in from day one.
              </p>
              <p className="about-text">
                What sets us apart is not just the quality of our products, but the deep trust we have built with our customers. When you buy from Sri Lakshmi Oil Mills, you are buying from a family that truly cares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="section-pad cream-bg">
        <div className="container">
          <div className="about-owner-grid">
            <div className="about-owner-content">
              <span className="tag">Meet the Owner</span>
              <div className="divider"></div>
              <h2 className="section-title">40 Years of Hands-On Experience</h2>
              <p className="about-text">
                The owner of Sri Lakshmi Oil Mills has dedicated over 40 years of his life to the oil mill business. His deep knowledge — built from years of hands-on experience — allows him to identify product quality, freshness, and purity by just a single look.
              </p>
              <p className="about-text">
                This rare expertise is what makes our products trustworthy. No compromise, no shortcuts. Every product that leaves our mill carries the stamp of the owner's personal quality approval.
              </p>
              <div className="about-owner-badges">
                <div className="aob-item">🔍 Expert quality judgement</div>
                <div className="aob-item">🤝 Customer-first approach</div>
                <div className="aob-item">🏭 Traditional mill knowledge</div>
                <div className="aob-item">⭐ Local community trust</div>
              </div>
            </div>
            <div className="about-owner-img-col">
              <div className="about-owner-img">
                <img
                  src="/images/shop/owner_photo.webp"
                  alt="Owner of Sri Lakshmi Flour & Oil Mill"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
                />
              </div>
              <div className="owner-exp-badge" style={{ position: 'absolute', bottom: -20, right: -20 }}>
                <div className="oeb-num">40+</div>
                <div className="oeb-lbl">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section-pad green-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 className="section-title">Our Values & Commitment</h2>
            <p className="section-subtitle">What makes Sri Lakshmi Oil Mills different from the rest.</p>
          </div>
          <div className="about-trust-grid">
            {trustPoints.map(tp => (
              <div key={tp.title} className="about-trust-card">
                <div className="atc-icon">{tp.icon}</div>
                <h3 className="atc-title">{tp.title}</h3>
                <p className="atc-desc">{tp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Checking Section */}
      <section className="section-pad">
        <div className="container">
          <div className="about-quality-grid">
            <div>
              <span className="tag">Our Process</span>
              <div className="divider"></div>
              <h2 className="section-title">Traditional Quality Checking</h2>
              <p className="about-text">
                At Sri Lakshmi Oil Mills, quality is not an afterthought — it is the foundation of everything we do. The owner personally supervises each batch of products, checking for freshness, color, aroma, and consistency.
              </p>
              <p className="about-text">
                Our traditional checking process has been refined over 40 years. We rely on knowledge, experience, and sensory evaluation — methods that no machine can replicate. This is how we ensure that every product that reaches your home is of the highest quality.
              </p>
              <ul className="about-quality-list">
                <li><span>✅</span> Fresh ingredients sourced from trusted suppliers</li>
                <li><span>✅</span> Traditional processing methods preserved</li>
                <li><span>✅</span> Personal quality check by the owner</li>
                <li><span>✅</span> No artificial additives or preservatives</li>
                <li><span>✅</span> Consistent quality in every batch</li>
              </ul>
            </div>
            <div className="about-quality-img">
              <div className="placeholder-img about-ph">
                <span className="ph-icon">⚙️</span>
                <span>Quality Process Image</span>
                <small>Replace with mill/process image</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewspaperFeature />

      {/* CTA */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #0f3d22 0%, #1F6B3A 100%)' }}>
        <div className="container text-center">
          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: 12 }}>Ready to experience the difference?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28 }}>Browse our products and enquire via WhatsApp today.</p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" className="btn btn-primary btn-lg" style={{ background: 'var(--gold)', borderColor: 'var(--gold)' }}>🛒 Browse Products</Link>
            <a href={getWhatsAppLink("Hi, I'd like to know more about Sri Lakshmi Oil Mills products.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}
