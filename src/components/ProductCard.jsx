import { Link } from 'react-router-dom'
import { getProductWhatsAppLink } from '../config/business'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, slug, category, priceLabel, sizes, availability, shortDescription, featured } = product

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
            <span style={{ fontWeight: 600, fontSize: '0.85rem' }}>{name}</span>
            <small style={{ opacity: 0.7, marginTop: 4 }}>Image placeholder</small>
          </div>
        </div>
      </Link>
      <div className="product-card-body">
        <span className="tag" style={{ marginBottom: 8, display: 'inline-block' }}>{category}</span>
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
              {availability === 'Available' ? '● Available' : '● Out of Stock'}
            </span>
          </div>
          <div className="product-card-btns">
            <Link to={`/products/${slug}`} className="btn btn-outline btn-sm">View Details</Link>
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
