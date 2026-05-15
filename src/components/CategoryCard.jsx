import { Link } from 'react-router-dom'
import './CategoryCard.css'

const categoryIcons = {
  'Oils': '🫙',
  'Millets': '🌾',
  'Snacks': '🥜',
  'Sweets': '🍬',
  'Pickles': '🥒',
  'Powders': '🌶️',
  'Others': '📦',
}

const categoryColors = {
  'Oils': '#FFF3E0',
  'Millets': '#F1F8E9',
  'Snacks': '#FFF8E7',
  'Sweets': '#FCE4EC',
  'Pickles': '#E8F5E9',
  'Powders': '#FBE9E7',
  'Others': '#EDE7F6',
}

export default function CategoryCard({ category, count }) {
  const icon = categoryIcons[category] || '📦'
  const bg = categoryColors[category] || '#F1F8F3'

  return (
    <Link to={`/products?category=${category}`} className="category-card">
      <div className="category-card-icon" style={{ background: bg }}>
        <span>{icon}</span>
      </div>
      <div className="category-card-info">
        <h3 className="category-card-name">{category}</h3>
        {count !== undefined && (
          <span className="category-card-count">{count} product{count !== 1 ? 's' : ''}</span>
        )}
      </div>
      <span className="category-card-arrow">→</span>
    </Link>
  )
}
