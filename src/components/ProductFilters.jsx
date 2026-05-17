import './ProductFilters.css'

const categories = ['All', 'Oils', 'Millets', 'Snacks', 'Pickles', 'Powders', 'Others']
const sortOptions = [
  { value: 'default', label: 'Default Order' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
]

export default function ProductFilters({ filters, onChange, totalCount }) {
  const { category, sort, search } = filters

  const update = (key, value) => onChange({ ...filters, [key]: value })

  return (
    <div className="product-filters">
      <div className="pf-search-row">
        <div className="pf-search-wrap">
          <span className="pf-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => update('search', e.target.value)}
            className="pf-search"
          />
          {search && (
            <button className="pf-clear" onClick={() => update('search', '')}>✕</button>
          )}
        </div>
      </div>

      <div className="pf-controls-row">
        <div className="pf-categories">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => update('category', cat)}
              className={`pf-cat-btn ${category === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="pf-right">
          <select
            value={sort}
            onChange={e => update('sort', e.target.value)}
            className="pf-select"
          >
            {sortOptions.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="pf-result-count">
        <span>{totalCount} product{totalCount !== 1 ? 's' : ''} found</span>
        {(category !== 'All' || search) && (
          <button
            className="pf-reset"
            onClick={() => onChange({ category: 'All', sort: 'default', search: '' })}
          >
            ✕ Clear Filters
          </button>
        )}
      </div>
    </div>
  )
}
