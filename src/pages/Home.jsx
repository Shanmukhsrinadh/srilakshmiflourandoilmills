import { Link } from 'react-router-dom'
import { useState } from 'react'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import OwnerExperience from '../components/OwnerExperience'
import NewspaperFeature from '../components/NewspaperFeature'
import TrustBadges from '../components/TrustBadges'
import CTASection from '../components/CTASection'
import productsData from '../data/products.json'
import './Home.css'

export default function Home() {
  const featuredProducts = productsData.filter(p => p.featured).slice(0, 10)

  return (
    <div className="home-page">
      <Hero />

      {/* Featured Products — horizontal scroll */}
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
        </div>
        <div className="featured-scroll-track">
          {featuredProducts.map(product => (
            <div className="featured-scroll-card" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="container">
          <div className="featured-scroll-hint">← Scroll to see more →</div>
        </div>
      </section>

      <OwnerExperience />
      <NewspaperFeature />
      <TrustBadges />
      <CTASection />
    </div>
  )
}
