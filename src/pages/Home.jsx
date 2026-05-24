import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import NewspaperFeature from '../components/NewspaperFeature'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'
import productsData from '../data/products.json'
import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Home.css'
import './TravelsBanner.css'

const featuredProducts = productsData.filter(p => p.featured).slice(0, 10)

const trustPoints = [
  {
    icon: '🏆',
    title: '40+ Years of Experience',
    desc: 'Since our founding, we have built decades of expertise in traditional oil milling and food product quality.',
  },
  {
    icon: '🌿',
    title: 'Traditional Process',
    desc: 'Every product is made using traditional, time-tested methods that preserve natural taste and nutrition.',
  },
  {
    icon: '✅',
    title: 'Strict Quality Checking',
    desc: 'The owner personally checks every batch to ensure only the finest products reach our customers.',
  },
  {
    icon: '❤️',
    title: 'Local Community Trust',
    desc: 'Trusted by thousands of local families who rely on us every day for pure, fresh products.',
  },
]

export default function Home() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const el = scrollRef.current
    if (!el) return

    const scrollAmount = 320

    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="home-page">
      <Hero />

      {/* ── Featured Products ── */}
      <section className="section-pad">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="tag">Top Picks</span>
              <div className="divider"></div>

              <h2 className="section-title">
                Featured Products
              </h2>

              <p className="section-subtitle">
                Our most loved products — quality assured, traditionally made.
              </p>
            </div>

            <Link
              to="/products"
              className="btn btn-outline"
            >
              View All Products →
            </Link>
          </div>
        </div>

        {/* Horizontal Scroll Section */}
        <div className="featured-scroll-wrapper">

          {/* Left Arrow */}
          <button
            className="scroll-arrow left"
            onClick={() => scroll('left')}
          >
            ←
          </button>

          {/* Scrollable Cards */}
          <div
            className="featured-scroll-track"
            ref={scrollRef}
          >
            {featuredProducts.map(product => (
              <div
                className="featured-scroll-card"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="scroll-arrow right"
            onClick={() => scroll('right')}
          >
            →
          </button>
        </div>

        <div className="container">
          <div className="featured-scroll-hint">
            ← Click arrows to explore products →
          </div>
        </div>
      </section>

      {/* ── Travels Banner ── */}
      <section className="travels-banner-section">
        <div className="travels-banner-img-col">
          <img src="/images/bus_angle.png" alt="Sri Lakshmi Travels bus" className="travels-banner-bus-img" />
        </div>
        <div className="travels-banner-content">
          <span className="travels-banner-badge">🚌 New Service</span>
          <h2 className="travels-banner-title">Sri Lakshmi Travels</h2>
          <p className="travels-banner-sub">We now offer premium AC bus hire for <strong>marriages, pilgrimages, tours</strong> and group travel across Andhra Pradesh. Comfortable seats, experienced drivers, best rates.</p>
          <ul className="travels-banner-points">
            <li>💍 Marriage & Wedding Trips</li>
            <li>🏔️ Pilgrimage & Temple Tours</li>
            <li>🏖️ Family & Group Leisure Trips</li>
            <li>❄️ 2×2 Executive A/C Coach</li>
          </ul>
          <div className="travels-banner-btns">
            <Link to="/travels" className="btn btn-primary">Explore Travels →</Link>
            <a href={getWhatsAppLink("Hi Sri Lakshmi Travels, I'd like to book a bus. Please share details.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">💬 Quick Enquiry</a>
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section
        id="about"
        className="section-pad cream-bg"
      >
        <div className="container">

          {/* Story Grid */}
          <div className="about-intro-grid">

            <div className="about-intro-img">
              <img
                src="/images/shop/shop_entrnce.webp"
                alt="Sri Lakshmi Flour & Oil Mill shop"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }}
              />

              <div className="about-stat-box">
                <div className="asb-row">

                  <div className="asb-stat">
                    <div className="asb-num">40+</div>
                    <div className="asb-lbl">
                      Years Experience
                    </div>
                  </div>

                  <div className="asb-divider" />

                  <div className="asb-stat">
                    <div className="asb-num">100+</div>
                    <div className="asb-lbl">
                      Products
                    </div>
                  </div>

                  <div className="asb-divider" />

                  <div className="asb-stat">
                    <div className="asb-num">1000+</div>
                    <div className="asb-lbl">
                      Happy Customers
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="about-intro-content">
              <span className="tag">Our Story</span>
              <div className="divider"></div>

              <h2 className="section-title">
                A Legacy Built on
                <br />
                Trust and Quality
              </h2>

              <p className="about-text">
                Sri Lakshmi Oil Mills was founded with a simple
                but powerful belief — that every family deserves
                access to pure, traditional, and quality food
                products.
              </p>

              <p className="about-text">
                Over four decades, we have remained committed
                to this belief, serving our local community
                with honesty and dedication.
              </p>
            </div>
          </div>

          {/* Trust Points */}
          <div className="home-subsection">

            <div
              className="text-center"
              style={{ marginBottom: 36 }}
            >
              <h2 className="section-title">
                Our Values & Commitment
              </h2>

              <p className="section-subtitle">
                What makes Sri Lakshmi Oil Mills different
                from the rest.
              </p>
            </div>

            <div className="about-trust-grid">
              {trustPoints.map(tp => (
                <div
                  key={tp.title}
                  className="about-trust-card"
                >
                  <div className="atc-icon">
                    {tp.icon}
                  </div>

                  <h3 className="atc-title">
                    {tp.title}
                  </h3>

                  <p className="atc-desc">
                    {tp.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      <NewspaperFeature />
      <TrustBadges />
      <CTASection />
    </div>
  )
}