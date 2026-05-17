import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductFilters from '../components/ProductFilters'
import ProductGrid from '../components/ProductGrid'
import productsData from '../data/products.json'
import './Products.css'

function applyFilters(products, filters) {
  let result = [...products]
  if (filters.category && filters.category !== 'All') {
    result = result.filter(p => p.category === filters.category)
  }
  if (filters.search) {
    const q = filters.search.toLowerCase()
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q)
    )
  }
  if (filters.sort === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name))
  else if (filters.sort === 'name-desc') result.sort((a, b) => b.name.localeCompare(a.name))
  return result
}

export default function Products() {
  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'All',
    sort: 'default',
    search: searchParams.get('search') || '',
  })

  useEffect(() => {
    const cat = searchParams.get('category')
    const search = searchParams.get('search')
    if (cat || search) {
      setFilters(f => ({ ...f, category: cat || f.category, search: search || f.search }))
    }
  }, [searchParams])

  const filtered = applyFilters(productsData, filters)

  return (
    <div className="products-page">
      <div className="section-pad">
        <div className="container">
          <ProductFilters
            filters={filters}
            onChange={setFilters}
            totalCount={filtered.length}
          />

          <ProductGrid
            products={filtered}
            emptyMessage="No products match your search"
          />
        </div>
      </div>
    </div>
  )
}
