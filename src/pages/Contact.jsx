import { getWhatsAppLink, getCallLink, BUSINESS } from '../config/business'
import './Contact.css'

const contactCards = [
  {
    icon: '📍',
    title: 'Visit Our Store',
    lines: [BUSINESS.address, 'Come visit us at our store location.'],
    bg: '#F1F8F3',
  },
  {
    icon: '📞',
    title: 'Call Us',
    lines: [BUSINESS.phone, 'We are happy to answer your queries.'],
    link: getCallLink(),
    linkLabel: 'Call Now',
    bg: '#FFF8E7',
  },
  {
    icon: '💬',
    title: 'WhatsApp Enquiry',
    lines: ['Quick response guaranteed', 'Message us for product info and pricing.'],
    link: getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products."),
    linkLabel: 'Message Us',
    bg: '#E8F5E9',
    external: true,
  },
  {
    icon: '🕐',
    title: 'Business Hours',
    lines: [BUSINESS.timings, 'We are here to serve you.'],
    bg: '#FFF3E0',
  },
]

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="about-hero">
        <div className="container">
          <span className="tag" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>Contact</span>
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you. Reach us by phone, WhatsApp, or visit our store.</p>
          <div className="products-hero-breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Contact</span>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Reach us through any of the channels below. We respond quickly on WhatsApp.
            </p>
          </div>

          <div className="contact-cards-grid">
            {contactCards.map(card => (
              <div key={card.title} className="contact-card" style={{ background: card.bg }}>
                <div className="cc-icon">{card.icon}</div>
                <h3 className="cc-title">{card.title}</h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="cc-line">{line}</p>
                ))}
                {card.link && (
                  <a
                    href={card.link}
                    target={card.external ? '_blank' : undefined}
                    rel={card.external ? 'noreferrer' : undefined}
                    className="btn btn-primary btn-sm"
                    style={{ marginTop: 12, display: 'inline-flex', width: 'fit-content' }}
                  >
                    {card.linkLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-pad cream-bg">
        <div className="container">
          <div className="contact-map-grid">
            <div>
              <span className="tag">Location</span>
              <div className="divider"></div>
              <h2 className="section-title">Find Our Store</h2>
              <p className="about-text" style={{ marginBottom: 20 }}>
                Visit Sri Lakshmi Oil Mills at our store location. We welcome walk-in customers during business hours.
              </p>
              <div className="contact-detail-list">
                <div className="cdl-item">
                  <span className="cdl-icon">📍</span>
                  <div>
                    <div className="cdl-label">Store Address</div>
                    <div className="cdl-value">{BUSINESS.address}</div>
                  </div>
                </div>
                <div className="cdl-item">
                  <span className="cdl-icon">📞</span>
                  <div>
                    <div className="cdl-label">Phone Number</div>
                    <div className="cdl-value">
                      <a href={getCallLink()} style={{ color: 'var(--green-deep)', fontWeight: 600 }}>{BUSINESS.phone}</a>
                    </div>
                  </div>
                </div>
                <div className="cdl-item">
                  <span className="cdl-icon">🕐</span>
                  <div>
                    <div className="cdl-label">Business Hours</div>
                    <div className="cdl-value">{BUSINESS.timings}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                <a href={getCallLink()} className="btn btn-call">📞 Call Now</a>
                <a href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp">💬 WhatsApp</a>
              </div>
            </div>
            <div className="contact-map-placeholder">
              <div className="placeholder-img contact-map-ph">
                <span className="ph-icon">🗺️</span>
                <span>Google Maps</span>
                <small>Embed Google Maps here</small>
                <div className="map-hint">
                  To embed: Replace this with a Google Maps iframe for your store location.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section-pad" style={{ background: 'linear-gradient(135deg, #0f3d22 0%, #1F6B3A 100%)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', fontSize: '1.8rem', marginBottom: 12 }}>Have a Product Enquiry?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: 28, fontSize: '1rem' }}>
            The quickest way to enquire is via WhatsApp. We usually respond within minutes during business hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to place an order. Please share available products and prices.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 Send WhatsApp Message
            </a>
            <a href={getCallLink()} className="btn btn-call btn-lg">📞 Call Us Directly</a>
          </div>
        </div>
      </section>
    </div>
  )
}
