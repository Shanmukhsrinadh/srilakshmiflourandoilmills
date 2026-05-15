import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import OwnerExperience from '../components/OwnerExperience'
import NewspaperFeature from '../components/NewspaperFeature'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'
import ProductGrid from '../components/ProductGrid'
import productsData from '../data/products.json'
import './Home.css'

const categories = ['Oils', 'Millets', 'Snacks', 'Sweets', 'Pickles', 'Powders', 'Others']
const catalogueCategories = ['All', 'Oils', 'Millets', 'Snacks', 'Sweets', 'Pickles', 'Powders', 'Others']

function getCategoryCount(cat) {
  return productsData.filter(p => p.category === cat).length
}

import { useState } from 'react'

export default function Home() {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 12)
  const [catalogueCat, setCatalogueCat] = useState('All')

  const catalogueProducts = catalogueCat === 'All'
    ? productsData
    : productsData.filter(p => p.category === catalogueCat)

  return (
    <div className="home-page">
      <Hero />

      {/* Categories Section */}
      <section className="section-pad cream-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 40 }}>
            <span className="tag">Browse Categories</span>
            <div className="divider"></div>
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              From traditional oils to nutritious millets, snacks, sweets and more — all under one roof.
            </p>
          </div>
          <div className="categories-grid">
            {categories.map(cat => (
              <CategoryCard key={cat} category={cat} count={getCategoryCount(cat)} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-pad">
        <div className="container">
          <div className="home-section-header">
            <div>
              <span className="tag">Top Picks</span>
              <div className="divider"></div>
              <h2 className="section-title">Featured Products</h2>
              <p className="section-subtitle">
                Our most loved products — quality assured, traditionally made.
              </p>
            </div>
            <Link to="/products" className="btn btn-outline">View All Products →</Link>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      <OwnerExperience />
      <NewspaperFeature />
      <TrustBadges />

      {/* Product Catalogue Preview */}
      <section className="section-pad cream-bg">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 32 }}>
            <span className="tag">Full Catalogue</span>
            <div className="divider"></div>
            <h2 className="section-title">Browse Our Products</h2>
            <p className="section-subtitle">
              Explore our full range of traditional oils, millets, snacks and more.
            </p>
          </div>
          <div className="catalogue-filters">
            {catalogueCategories.map(cat => (
              <button
                key={cat}
                className={`cat-filter-btn ${catalogueCat === cat ? 'active' : ''}`}
                onClick={() => setCatalogueCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <ProductGrid products={catalogueProducts.slice(0, 8)} />
          {catalogueProducts.length > 8 && (
            <div className="catalogue-view-more">
              <Link
                to={catalogueCat === 'All' ? '/products' : `/products?category=${catalogueCat}`}
                className="btn btn-primary btn-lg"
              >
                View All {catalogueCat === 'All' ? '' : catalogueCat} Products →
              </Link>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
