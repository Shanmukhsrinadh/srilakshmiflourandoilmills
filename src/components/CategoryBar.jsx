import { Link, useLocation } from 'react-router-dom'
import './CategoryBar.css'

const categories = [
  { label: 'All Products', path: '/products' },
  { label: 'Oils', path: '/products?category=Oils' },
  { label: 'Millets', path: '/products?category=Millets' },
  { label: 'Snacks', path: '/products?category=Snacks' },
  { label: 'Sweets', path: '/products?category=Sweets' },
  { label: 'Pickles', path: '/products?category=Pickles' },
  { label: 'Powders', path: '/products?category=Powders' },
  { label: 'Others', path: '/products?category=Others' },
]

export default function CategoryBar() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const activeCategory = searchParams.get('category') || ''

  const isActive = (path) => {
    if (path === '/products' && !activeCategory) return location.pathname === '/products'
    return path.includes(`category=${activeCategory}`)
  }

  return (
    <div className="category-bar">
      <div className="category-bar-inner">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.path}
            className={`cat-bar-link ${isActive(cat.path) ? 'active' : ''}`}
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
