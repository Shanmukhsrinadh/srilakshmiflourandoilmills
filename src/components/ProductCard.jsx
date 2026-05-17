import { Link } from 'react-router-dom'
import { getProductWhatsAppLink } from '../config/business'
import { getAssetUrl } from '../utils/assets'
import './ProductCard.css'

const STANDARD_TAGS = ['No Palm Oil', 'No Artificial Color', 'No Preservatives', 'Authentic Taste']

const categoryEmoji = {
  Oils: '🫙',
  Millets: '🌾',
  Snacks: '🥜',
  Sweets: '🍬',
  Pickles: '🥒',
  Powders: '🌶️',
  Others: '📦',
}

export default function ProductCard({ product }) {
  const { name, slug, category, image, shortDescription, featured } = product

  return (
    <div className="product-card">
      {featured && <div className="product-featured-tag">⭐ Featured</div>}

      <Link to={`/products/${slug}`} className="product-card-img-link">
        <div className="product-card-img">
          {image ? (
            <img
              src={getAssetUrl(image)}
              alt={`${name} - Sri Lakshmi Oil Mills`}
              className="product-card-photo"
              loading="lazy"
            />
          ) : (
            <div className="product-card-placeholder">
              <span className="ph-icon">{categoryEmoji[category] || '📦'}</span>
              <span className="ph-name">{name}</span>
            </div>
          )}
        </div>
      </Link>

      <div className="product-card-chips">
        {STANDARD_TAGS.map(tag => (
          <span key={tag} className="product-chip">✓ {tag}</span>
        ))}
      </div>

      <div className="product-card-body">
        <Link to={`/products/${slug}`} className="product-card-name-link">
          <h3 className="product-card-name">{name}</h3>
        </Link>
        <p className="product-card-desc">{shortDescription}</p>
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
  )
}
