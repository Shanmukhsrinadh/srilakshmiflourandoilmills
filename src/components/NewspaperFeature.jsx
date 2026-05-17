import { useState } from 'react'
import newspaperImg from '../assets/images/newspaper-article.png'
import './NewspaperFeature.css'

export default function NewspaperFeature() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="newspaper-section section-pad">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="tag">Press Coverage</span>
            <div className="divider"></div>
            <h2 className="section-title">Featured in Newspaper</h2>
            <p className="section-subtitle">
              A proud recognition of our work and trust in the local community.
            </p>
          </div>

          <div className="newspaper-inner">
            <div className="newspaper-img-col">
              <div className="newspaper-img-wrap" onClick={() => setModalOpen(true)} title="Click to view larger">
                <img
                  src={newspaperImg}
                  alt="Sri Lakshmi Oil Mills featured in Visakha Samacharam Telugu newspaper"
                  className="newspaper-real-img"
                />
                <div className="newspaper-overlay">
                  <span>🔍 View Larger</span>
                </div>
              </div>
            </div>

            <div className="newspaper-content">
              <div className="np-trophy">🏆</div>
              <h3 className="np-title">A Local Legacy, Recognised Publicly</h3>
              <p className="np-text">
                Sri Lakshmi Oil Mills was featured in a newspaper article for its outstanding contribution, consistent quality, and trusted service in the oil mill business. A recognition well-earned through decades of honest work.
              </p>
              <ul className="np-highlights">
                <li>✅ Recognised for quality and trust</li>
                <li>✅ Serving the local community for 40+ years</li>
                <li>✅ Featured for traditional oil mill practices</li>
                <li>✅ Appreciated by the local customer community</li>
              </ul>
              <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
                🔍 View Achievement
              </button>
            </div>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="np-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="np-modal" onClick={e => e.stopPropagation()}>
            <button className="np-modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <h3 className="np-modal-title">📰 Newspaper Feature</h3>
            <div className="np-modal-img">
              <img
                src={newspaperImg}
                alt="Sri Lakshmi Oil Mills featured in Visakha Samacharam Telugu newspaper — full article"
                style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 8 }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
