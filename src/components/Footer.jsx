import { Link } from 'react-router-dom'
import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Footer.css'

const categories = ['Oils', 'Millets', 'Snacks', 'Sweets', 'Pickles', 'Powders', 'Others']

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">🛢️</span>
              <div>
                <div className="footer-logo-name">{BUSINESS.name}</div>
                <div className="footer-logo-sub">Pure · Traditional · Trusted</div>
              </div>
            </div>
            <p className="footer-desc">
              Bringing you the finest traditional oils and food products backed by 40+ years of hands-on experience. Quality you can trust by just one look.
            </p>
            <div className="footer-badges">
              <span className="f-badge">✅ 40+ Years</span>
              <span className="f-badge">✅ Quality Checked</span>
              <span className="f-badge">✅ Traditional Mill</span>
            </div>
            <div className="footer-contact-btns">
              <a href={getCallLink()} className="btn btn-call btn-sm">📞 Call Now</a>
              <a href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Product Categories</h4>
            <ul className="footer-links">
              {categories.map(cat => (
                <li key={cat}>
                  <Link to={`/products?category=${cat}`}>{cat}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Contact Details</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="fc-icon">📍</span>
                <span>{BUSINESS.address}</span>
              </li>
              <li>
                <span className="fc-icon">📞</span>
                <a href={getCallLink()}>{BUSINESS.phone}</a>
              </li>
              <li>
                <span className="fc-icon">💬</span>
                <a href={getWhatsAppLink()} target="_blank" rel="noreferrer">WhatsApp Enquiry</a>
              </li>
              <li>
                <span className="fc-icon">🕐</span>
                <span>{BUSINESS.timings}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p className="footer-credit">Designed and developed by <span>Your Brand Name</span></p>
        </div>
      </div>
    </footer>
  )
}
