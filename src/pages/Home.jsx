import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import NewspaperFeature from '../components/NewspaperFeature'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'
import productsData from '../data/products.json'
import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Home.css'

const featuredProducts = productsData.filter(p => p.featured).slice(0, 10)

const trustPoints = [
  { icon: '🏆', title: '40+ Years of Experience', desc: 'Since our founding, we have built decades of expertise in traditional oil milling and food product quality.' },
  { icon: '🌿', title: 'Traditional Process', desc: 'Every product is made using traditional, time-tested methods that preserve natural taste and nutrition.' },
  { icon: '✅', title: 'Strict Quality Checking', desc: 'The owner personally checks every batch to ensure only the finest products reach our customers.' },
  { icon: '❤️', title: 'Local Community Trust', desc: 'Trusted by thousands of local families who rely on us every day for pure, fresh products.' },
]

const contactCards = [
  {
    icon: '📍',
    title: 'Visit Our Store',
    lines: [BUSINESS.address, 'Walk in during business hours.'],
    bg: '#E8F5E9',
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: [BUSINESS.phone, 'Happy to answer your queries.'],
    link: getCallLink(),
    linkLabel: '📞 Call Now',
    bg: '#FFF8E7',
  },
  {
    icon: '💬',
    title: 'WhatsApp',
    lines: ['Quick response guaranteed', 'Message us for prices & availability.'],
    link: getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products."),
    linkLabel: '💬 Message Us',
    external: true,
    bg: '#dcfce7',
  },
  {
    icon: '🕐',
    title: 'Business Hours',
    lines: [BUSINESS.timings],
    bg: '#fff3e0',
  },
]

export default function Home() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > 0) return
      e.preventDefault()
      el.scrollLeft += e.deltaY * 1.2
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div className="home-page">
      <Hero />

      {/* ── Featured Products — horizontal scroll ── */}
      <section className="section-pad">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="tag">Top Picks</span>
              <div className="divider"></div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Our most loved products — quality assured, traditionally made.
              </p>
            </div>
            <Link to="/products" className="btn btn-outline">View All Products →</Link>
          </div>
        </div>
        <div className="featured-scroll-wrapper">
          <div className="featured-scroll-track" ref={scrollRef}>
            {featuredProducts.map(product => (
              <div className="featured-scroll-card" key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="featured-scroll-hint">← Scroll to see more →</div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section id="about" className="section-pad cream-bg">
        <div className="container">

          {/* Story grid */}
          <div className="about-intro-grid">
            <div className="about-intro-img">
              <div className="placeholder-img about-ph">
                <span className="ph-icon">🏭</span>
                <span>Sri Lakshmi Oil Mills</span>
                <small>Replace with shop/mill image</small>
              </div>
              <div className="about-stat-box">
                <div className="asb-row">
                  <div className="asb-stat"><div className="asb-num">40+</div><div className="asb-lbl">Years Experience</div></div>
                  <div className="asb-divider" />
                  <div className="asb-stat"><div className="asb-num">100+</div><div className="asb-lbl">Products</div></div>
                  <div className="asb-divider" />
                  <div className="asb-stat"><div className="asb-num">1000+</div><div className="asb-lbl">Happy Customers</div></div>
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
                Our journey began with traditional oil milling, and over the years we expanded to include millets, snacks, sweets, pickles, and powders — all made with the same care and commitment to quality that our founder believed in from day one.
              </p>
              <p className="about-text">
                What sets us apart is not just the quality of our products, but the deep trust we have built with our customers. When you buy from Sri Lakshmi Oil Mills, you are buying from a family that truly cares.
              </p>
            </div>
          </div>

          {/* Trust Points */}
          <div className="home-subsection">
            <div className="text-center" style={{ marginBottom: 36 }}>
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

          {/* Quality Process */}
          <div className="about-quality-grid home-subsection">
            <div>
              <span className="tag">Our Process</span>
              <div className="divider"></div>
              <h2 className="section-title">Traditional Quality Checking</h2>
              <p className="about-text">
                At Sri Lakshmi Oil Mills, quality is not an afterthought — it is the foundation of everything we do. The owner personally supervises each batch, checking for freshness, color, aroma, and consistency.
              </p>
              <p className="about-text">
                Our traditional checking process has been refined over 40 years. We rely on knowledge, experience, and sensory evaluation — methods that no machine can replicate.
              </p>
              <ul className="about-quality-list">
                <li><span>✅</span> Fresh ingredients from trusted suppliers</li>
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
      <TrustBadges />

      {/* ── Contact ── */}
      <section id="contact" className="contact-strip">
        <div className="container contact-strip-inner">
          {/* Left: info */}
          <div className="cs-info">
            <span className="tag">Get in Touch</span>
            <div className="divider"></div>
            <h2 className="section-title">Contact Us</h2>

            <div className="cs-rows">
              <div className="cs-row">
                <span className="cs-icon">📍</span>
                <div>
                  <div className="cs-row-label">Address</div>
                  <div className="cs-row-val">{BUSINESS.address}</div>
                </div>
              </div>
              <div className="cs-row">
                <span className="cs-icon">📞</span>
                <div>
                  <div className="cs-row-label">Phone</div>
                  <a href={getCallLink()} className="cs-row-val cs-link">{BUSINESS.phone}</a>
                </div>
              </div>
              <div className="cs-row">
                <span className="cs-icon">🕐</span>
                <div>
                  <div className="cs-row-label">Hours</div>
                  <div className="cs-row-val">{BUSINESS.timings}</div>
                </div>
              </div>
            </div>

            <div className="cs-btns">
              <a href={getCallLink()} className="btn btn-call btn-sm">📞 Call Now</a>
              <a
                href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")}
                target="_blank" rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="cs-map">
            <iframe
              title="Sri Lakshmi Flour & Oil Mill Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d475.0237330343761!2d83.3124423!3d17.7356909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433652bd0f3d%3A0x3c2f95cb5ff8a4a2!2sSri%20Lakshmi%20Flour%20%26%20Oil%20Mill!5e0!3m2!1sen!2sin!4v1715000000000"
              width="100%" height="100%"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
