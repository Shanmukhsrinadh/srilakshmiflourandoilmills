import ownerPhoto from '../assets/images/owner.webp'
import './OwnerExperience.css'

const points = [
  { icon: '🔍', text: 'Expert in quality judgement' },
  { icon: '🤝', text: 'Trusted by local customers' },
  { icon: '🏭', text: 'Traditional oil mill knowledge' },
  { icon: '❤️', text: 'Customer-first service' },
]

export default function OwnerExperience() {
  return (
    <section className="owner-section section-pad cream-bg">
      <div className="container owner-inner">
        <div className="owner-image-col">
          <div className="owner-img-wrap">
            <img
              src={ownerPhoto}
              alt="Owner of Sri Lakshmi Flour & Oil Mill"
              className="owner-real-img"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
            />
          </div>
          <div className="owner-exp-badge">
            <div className="oeb-num">40+</div>
            <div className="oeb-lbl">Years of Experience</div>
          </div>
        </div>
        <div className="owner-content">
          <span className="tag">About the Owner</span>
          <div className="divider"></div>
          <h2 className="section-title">Quality You Can Trust<br />by Just One Look</h2>
          <p className="owner-desc">
            With over 40 years of experience in the oil mill business, the owner of Sri Lakshmi Oil Mills has built deep knowledge in identifying product quality, freshness, and purity. His experience helps customers receive products they can trust.
          </p>
          <p className="owner-desc">
            From selecting the right seeds to ensuring every batch meets the highest quality standards, the owner's expertise is the backbone of every product sold at Sri Lakshmi Oil Mills.
          </p>
          <div className="owner-points">
            {points.map(p => (
              <div key={p.text} className="owner-point">
                <span className="owner-point-icon">{p.icon}</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
