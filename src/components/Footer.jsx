import { Link } from 'react-router-dom'
import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Footer.css'
import logo from '../assets/images/logo.png'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'All Products' },
  { to: '/#about', label: 'About Us' },
  { to: '/#contact', label: 'Contact Us' },
]

const categoryLinks = [
  { cat: 'Oils', label: 'Cold Pressed Oils' },
  { cat: 'Millets', label: 'Millet Products' },
  { cat: 'Snacks', label: 'Traditional Snacks' },
  { cat: 'Pickles', label: 'Homemade Pickles' },
  { cat: 'Powders', label: 'Spice Powders (Podi)' },
  { cat: 'Others', label: 'Chutneys & Mixes' },
]

export default function Footer() {
  return (
    <footer className="site-footer" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="footer-main">
        <div className="container footer-grid">

          {/* Brand col */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img
                src={logo}
                alt="Sri Lakshmi Pindi Mara & Oil Mills logo"
                className="footer-logo-img"
              />
              <div>
                <div className="footer-logo-name" itemProp="name">{BUSINESS.name}</div>
                <div className="footer-logo-sub">Pure · Traditional · Trusted</div>
              </div>
            </div>
            <p className="footer-desc" itemProp="description">
              Sri Lakshmi Flour &amp; Oil Mill has been providing traditional cold pressed oils, homemade pickles, spice powders, and authentic Andhra food products for over 40 years. Every product is made without palm oil, artificial colours, or preservatives.
            </p>
            <div className="footer-badges" aria-label="Quality assurance badges">
              <span className="f-badge">✅ 40+ Years Trusted</span>
              <span className="f-badge">✅ No Palm Oil</span>
              <span className="f-badge">✅ No Preservatives</span>
              <span className="f-badge">✅ Traditional Mill</span>
            </div>
            <div className="footer-contact-btns">
              <a href={getCallLink()} className="btn btn-call btn-sm" aria-label="Call Sri Lakshmi Oil Mills">📞 Call Now</a>
              <a
                href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")}
                target="_blank" rel="noreferrer"
                className="btn btn-whatsapp btn-sm"
                aria-label="WhatsApp Sri Lakshmi Oil Mills"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <nav aria-label="Footer quick navigation">
              <ul className="footer-links">
                {quickLinks.map(l => (
                  <li key={l.label}>
                    <Link to={l.to}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Product categories */}
          <div className="footer-col">
            <h3 className="footer-heading">Our Products</h3>
            <nav aria-label="Product categories navigation">
              <ul className="footer-links">
                {categoryLinks.map(c => (
                  <li key={c.cat}>
                    <Link to={`/products?category=${c.cat}`}>{c.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact details */}
          <div className="footer-col">
            <h3 className="footer-heading">Find Us</h3>
            <address className="footer-contact-list" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div className="fc-item">
                <span className="fc-icon" aria-hidden="true">📍</span>
                <span itemProp="streetAddress">{BUSINESS.address}</span>
              </div>
              <div className="fc-item">
                <span className="fc-icon" aria-hidden="true">📞</span>
                <a href={getCallLink()} itemProp="telephone" aria-label={`Call ${BUSINESS.phone}`}>{BUSINESS.phone}</a>
              </div>
              <div className="fc-item">
                <span className="fc-icon" aria-hidden="true">💬</span>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp enquiry">WhatsApp Enquiry</a>
              </div>
              <div className="fc-item">
                <span className="fc-icon" aria-hidden="true">🕐</span>
                <span>{BUSINESS.timings}</span>
              </div>
            </address>

            <div className="footer-seo-note">
              <p>Serving Andhra Pradesh with pure, traditional oils and homemade food products. Enquire for fresh stock.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} <span itemProp="name">{BUSINESS.name}</span>. All rights reserved. Traditional oils &amp; homemade products, Andhra Pradesh.</p>
          <nav aria-label="Footer legal links">
            <ul className="footer-bottom-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
