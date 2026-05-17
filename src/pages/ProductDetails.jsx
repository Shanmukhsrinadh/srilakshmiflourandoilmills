import { useParams, Link } from 'react-router-dom'
import { getProductWhatsAppLink, getCallLink } from '../config/business'
import { getAssetUrl } from '../utils/assets'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'
import './ProductDetails.css'

const categoryIcons = {
  'Oils': '🫙', 'Millets': '🌾', 'Snacks': '🥜',
  'Sweets': '🍬', 'Pickles': '🥒', 'Powders': '🌶️', 'Others': '📦'
}

export default function ProductDetails() {
  const { slug } = useParams()
  const product = productsData.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="pd-not-found">
        <div className="container">
          <div className="pd-nf-box">
            <span className="pd-nf-icon">🔍</span>
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist or may have been removed.</p>
            <Link to="/products" className="btn btn-primary">← Browse All Products</Link>
          </div>
        </div>
      </div>
    )
  }

  const related = productsData
    .filter(p => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4)

  const icon = categoryIcons[product.category] || '📦'

  return (
    <div className="pd-page">
      {/* Breadcrumb */}
      <div className="pd-breadcrumb-bar">
        <div className="container pd-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/products">Products</Link>
          <span>/</span>
          <Link to={`/products?category=${product.category}`}>{product.category}</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>
      </div>

      <div className="section-pad">
        <div className="container">
          <div className="pd-main">
            {/* Product Image */}
            <div className="pd-image-col">
              <div className="pd-main-img">
                {product.image ? (
                  <img
                    src={getAssetUrl(product.image)}
                    alt={`${product.name} - Sri Lakshmi Flour & Oil Mill`}
                    className="pd-photo"
                  />
                ) : (
                  <div className="placeholder-img" style={{ height: '100%', borderRadius: 12 }}>
                    <span className="ph-icon" style={{ fontSize: '4rem' }}>{icon}</span>
                    <span style={{ fontWeight: 700, fontSize: '1rem' }}>{product.name}</span>
                  </div>
                )}
              </div>
              <div className="pd-img-tags">
                <span className="tag">{product.category}</span>
              </div>
            </div>

            {/* Product Info */}
            <div className="pd-info-col">
              <div className="pd-category-tag">{product.category}</div>
              <h1 className="pd-name">{product.name}</h1>

              <div className="pd-standard-tags">
                {['No Palm Oil', 'No Artificial Color', 'No Preservatives', 'Authentic Taste'].map(tag => (
                  <span key={tag} className="pd-std-tag">✓ {tag}</span>
                ))}
              </div>

              <p className="pd-short-desc">{product.shortDescription}</p>

              {/* Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <div className="pd-section">
                  <h4 className="pd-section-title">Quality Highlights</h4>
                  <ul className="pd-highlights">
                    {product.highlights.map(h => (
                      <li key={h}><span className="pd-check">✅</span> {h}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pd-actions">
                <a
                  href={getProductWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  💬 WhatsApp Enquiry
                </a>
                <a href={getCallLink()} className="btn btn-call btn-lg">
                  📞 Call Now
                </a>
              </div>

              <div className="pd-enquiry-hint">
                💡 Send a WhatsApp message with your required size and quantity for quick pricing.
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="pd-desc-section">
            <div className="pd-desc-grid">
              <div className="pd-desc-col">
                <h3 className="pd-desc-heading">Product Description</h3>
                <p className="pd-desc-text">{product.description}</p>
              </div>
              {product.usage && product.usage.length > 0 && (
                <div className="pd-desc-col">
                  <h3 className="pd-desc-heading">Suggested Uses</h3>
                  <ul className="pd-usage-list">
                    {product.usage.map(u => (
                      <li key={u}>
                        <span className="pd-use-icon">→</span> {u}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="pd-related section-pad green-bg">
          <div className="container">
            <div style={{ marginBottom: 28 }}>
              <h2 className="section-title">Related Products</h2>
              <p className="section-subtitle">More products from {product.category}</p>
            </div>
            <div className="pd-related-grid">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 28 }}>
              <Link to={`/products?category=${product.category}`} className="btn btn-outline">
                View All {product.category} →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
