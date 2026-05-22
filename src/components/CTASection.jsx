import { getWhatsAppLink, getCallLink, BUSINESS } from '../config/business'
import './CTASection.css'

export default function CTASection({ heading, subtext }) {
  return (
    <section className="cta-section section-pad">
      <div className="container">
        <div className="cta-box">
          <div className="cta-deco">🛢️</div>
          <h2 className="cta-heading">
            {heading || 'Need pure oil or food products for your home?'}
          </h2>
          <p className="cta-sub">
            {subtext || 'Get in touch with us today for fresh, quality products. Quick WhatsApp response guaranteed.'}
          </p>
          <div className="cta-btns">
            <a href={getCallLink()} className="btn btn-call btn-lg">
              📞 Call Now
            </a>
            <a
              href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to order some products. Please share the available items.")}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              💬 WhatsApp Enquiry
            </a>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-lg"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'var(--white)' }}
            >
              📍 Visit Store
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
