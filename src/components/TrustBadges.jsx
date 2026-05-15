import './TrustBadges.css'

const trustPoints = [
  { icon: '🏆', title: '40 Years Experience', desc: 'Four decades of expertise in traditional oil milling.' },
  { icon: '🌿', title: 'Fresh Quality Products', desc: 'Every batch is freshly prepared and quality checked.' },
  { icon: '⚙️', title: 'Traditional Process', desc: 'Time-tested traditional methods for authentic taste.' },
  { icon: '💰', title: 'Honest Pricing', desc: 'Fair and transparent pricing for every customer.' },
  { icon: '❤️', title: 'Local Customer Trust', desc: 'Trusted by thousands of local families for generations.' },
  { icon: '💬', title: 'Easy WhatsApp Enquiry', desc: 'Simply message us on WhatsApp for quick response.' },
]

export default function TrustBadges() {
  return (
    <section className="trust-section section-pad green-bg">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 40 }}>
          <span className="tag">Why Choose Us</span>
          <div className="divider"></div>
          <h2 className="section-title">Why Customers Trust Sri Lakshmi Oil Mills</h2>
          <p className="section-subtitle">
            Built on trust, quality, and 40 years of honest service to our local community.
          </p>
        </div>
        <div className="trust-grid">
          {trustPoints.map(tp => (
            <div key={tp.title} className="trust-card">
              <div className="trust-card-icon">{tp.icon}</div>
              <h3 className="trust-card-title">{tp.title}</h3>
              <p className="trust-card-desc">{tp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
