import ProductCard from './ProductCard'
import './ProductGrid.css'

export default function ProductGrid({ products, emptyMessage }) {
  if (!products || products.length === 0) {
    return (
      <div className="pg-empty">
        <span className="pg-empty-icon">🔍</span>
        <h3>{emptyMessage || 'No products found'}</h3>
        <p>Try adjusting your search or filters to find what you're looking for.</p>
      </div>
    )
  }
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
