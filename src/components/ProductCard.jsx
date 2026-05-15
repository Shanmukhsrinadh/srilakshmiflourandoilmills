import { Link } from 'react-router-dom'
import { getProductWhatsAppLink } from '../config/business'
import './ProductCard.css'

const categoryHighlights = {
  Oils: ['Cold Pressed', 'No Palm Oil', 'No Additives', 'Fresh Stock'],
  Millets: ['Gluten Free', 'Diabetic Friendly', 'Stone Ground', 'High Fibre'],
  Snacks: ['Made in Pure Oil', 'No Maida', 'Traditional Recipe', 'Freshly Made'],
  Sweets: ['No Artificial Color', 'Pure Jaggery', 'Handmade', 'No Preservatives'],
  Pickles: ['Pure Sesame Oil', 'No Vinegar', 'Traditional Recipe', 'No Preservatives'],
  Powders: ['Freshly Ground', 'Natural Spices', 'No Fillers', 'Stone Ground'],
  Others: ['Pure Quality', 'Naturally Sourced', 'No Additives', 'Trusted Source'],
}

export default function ProductCard({ product }) {
  const { name, slug, category, priceLabel, sizes, availability, shortDescription, featured } = product
  const chips = (product.cardHighlights || categoryHighlights[category] || ['Pure Quality', 'No Additives', 'Fresh Stock', 'Traditional']).slice(0, 3)

  return (
    <div className="product-card">
      {featured && <div className="product-featured-tag">⭐ Featured</div>}
      <Link to={`/products/${slug}`} className="product-card-img-link">
        <div className="product-card-img">
          <div className="placeholder-img">
            <span className="ph-icon">
              {category === 'Oils' ? '🫙' :
               category === 'Millets' ? '🌾' :
               category === 'Snacks' ? '🥜' :
               category === 'Sweets' ? '🍬' :
               category === 'Pickles' ? '🥒' :
               category === 'Powders' ? '🌶️' : '📦'}
            </span>
            <span style={{ fontWeight: 600, fontSize: '0.82rem', color: '#4a7a5a' }}>{name}</span>
          </div>
        </div>
      </Link>

      {/* Highlight chips */}
      <div className="product-card-chips">
        {chips.map(c => (
          <span key={c} className="product-chip">✓ {c}</span>
        ))}
      </div>

      <div className="product-card-body">
        <Link to={`/products/${slug}`}>
          <h3 className="product-card-name">{name}</h3>
        </Link>
        <p className="product-card-desc">{shortDescription}</p>
        <div className="product-card-sizes">
          {sizes.slice(0, 4).map(s => (
            <span key={s} className="size-chip">{s}</span>
          ))}
        </div>
        <div className="product-card-footer">
          <div className="product-card-price-row">
            <span className="product-card-price">{priceLabel}</span>
            <span className={`avail-dot ${availability === 'Available' ? 'avail-yes' : 'avail-no'}`}>
              {availability === 'Available' ? '● In Stock' : '● Out of Stock'}
            </span>
          </div>
          <div className="product-card-btns">
            <Link to={`/products/${slug}`} className="btn btn-outline btn-sm">Details</Link>
            <a
              href={getProductWhatsAppLink(name)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              💬 Enquire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
