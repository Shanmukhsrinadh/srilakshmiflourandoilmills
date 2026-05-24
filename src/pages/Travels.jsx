import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Travels.css'

const busImages = [
  {
    src: `${import.meta.env.BASE_URL}images/bus_front.png`,
    alt: 'Sri Lakshmi Travels bus — front view'
  },
  {
    src: `${import.meta.env.BASE_URL}images/bus_side.png`,
    alt: 'Sri Lakshmi Travels bus — side view, 2x2 A/C coach'
  },
  {
    src: `${import.meta.env.BASE_URL}images/bus_angle.png`,
    alt: 'Sri Lakshmi Travels bus — exterior angle'
  },
  {
    src: `${import.meta.env.BASE_URL}images/bus_interior.jpeg`,
    alt: 'Sri Lakshmi Travels bus — comfortable interior seating'
  },
]

const services = [
  { icon: '💍', title: 'Marriage Trips', desc: 'Elegant and comfortable buses for wedding processions, baraat, and guest transport. We handle all group sizes.' },
  { icon: '🏔️', title: 'Pilgrimage Tours', desc: 'Devotional trips to temples and pilgrimage sites across Andhra Pradesh and beyond, at affordable rates.' },
  { icon: '🏖️', title: 'Leisure & Tourism', desc: 'Family and group trips to tourist destinations. Comfortable, safe, and fully AC coaches for a relaxing journey.' },
  { icon: '🎓', title: 'School & College Trips', desc: 'Reliable transport for educational tours and institutional travel. Safety is our top priority.' },
  { icon: '🏢', title: 'Corporate Travel', desc: 'Scheduled employee transport and corporate group travel solutions tailored to your requirements.' },
  { icon: '🎉', title: 'Events & Occasions', desc: 'Party trips, family gatherings, festivals, and any special occasion — we\'ve got the right bus for you.' },
]

const features = [
  { icon: '❄️', text: '2×2 Executive A/C Coach' },
  { icon: '🛡️', text: 'Experienced & Licensed Drivers' },
  { icon: '✅', text: 'Well-Maintained Vehicles' },
  { icon: '📍', text: 'GPS Tracked Buses' },
  { icon: '💺', text: 'Push-Back Recliner Seats' },
  { icon: '📞', text: '24/7 Customer Support' },
]

export default function Travels() {
  const bookingMessage = "Hi Sri Lakshmi Travels, I'd like to book a bus. Please share availability and pricing details."

  return (
    <div className="travels-page">

      {/* Hero */}
      <section className="travels-hero">
        <div className="travels-hero-bg">
          <img
            src={`${import.meta.env.BASE_URL}images/bus_side.png`} alt="Sri Lakshmi Travels bus" className="travels-hero-img" />
          <div className="travels-hero-overlay" />
        </div>
        <div className="container travels-hero-content">
          <span className="travels-tag">Sri Lakshmi Travels</span>
          <h1 className="travels-hero-title">Your Trusted Travel Partner<br />for Every Journey</h1>
          <p className="travels-hero-sub">Premium AC bus hire for marriages, pilgrimages, tours & group travel across Andhra Pradesh</p>
          <div className="travels-hero-btns">
            <a href={getWhatsAppLink(bookingMessage)} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
              💬 Book via WhatsApp
            </a>
            <a href={getCallLink()} className="btn btn-call btn-lg">
              📞 Call to Book
            </a>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="travels-features-strip">
        <div className="container travels-features-grid">
          {features.map(f => (
            <div key={f.text} className="travels-feature-item">
              <span className="tf-icon">{f.icon}</span>
              <span className="tf-text">{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="tag">What We Offer</span>
            <div className="divider"></div>
            <h2 className="section-title">Bus Hire Services</h2>
            <p className="section-subtitle">From intimate wedding processions to large group tours — we have the right bus for every occasion.</p>
          </div>
          <div className="travels-services-grid">
            {services.map(s => (
              <div key={s.title} className="travels-service-card">
                <div className="tsc-icon">{s.icon}</div>
                <h3 className="tsc-title">{s.title}</h3>
                <p className="tsc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bus Gallery */}
      <section className="section-pad cream-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="tag">Our Fleet</span>
            <div className="divider"></div>
            <h2 className="section-title">Our Buses</h2>
            <p className="section-subtitle">Spacious, clean, and fully air-conditioned — built for a comfortable journey.</p>
          </div>
          <div className="travels-gallery">
            {busImages.map((img, i) => (
              <div key={i} className="travels-gallery-item">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="travels-cta section-pad">
        <div className="container">
          <div className="travels-cta-box">
            <div className="travels-cta-deco">🚌</div>
            <h2 className="travels-cta-title">Ready to Book Your Bus?</h2>
            <p className="travels-cta-sub">Contact us now for availability and pricing. We respond quickly on WhatsApp.</p>
            <div className="travels-cta-btns">
              <a href={getWhatsAppLink(bookingMessage)} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-lg">
                💬 WhatsApp Enquiry
              </a>
              <a href={getCallLink()} className="btn btn-call btn-lg">
                📞 Call Now — {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
