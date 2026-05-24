import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BUSINESS, getWhatsAppLink, getCallLink } from '../config/business'
import './Header.css'
import logo from '../assets/images/logo.png'

function AnchorNavLink({ to, hash, children, onClick }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    if (onClick) onClick()
    if (location.pathname === '/') {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
    }
  }

  return (
    <a href={`/#${hash}`} className="nav-anchor" onClick={handleClick}>
      {children}
    </a>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="container header-inner">
          <Link to="/" className="logo" onClick={closeMenu}>
            <img
              src={logo}
              alt="Sri Lakshmi Pindi Mara & Oil Mills logo"
              className="footer-logo-img"
            />
            <div className="logo-text">
              <span className="logo-name">{BUSINESS.name}</span>
              <span className="logo-tagline">Pure · Traditional · Trusted</span>
            </div>
          </Link>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
            <NavLink to="/travels" onClick={closeMenu} className="nav-travels-link">Travels</NavLink>
            <AnchorNavLink hash="about" onClick={closeMenu}>About</AnchorNavLink>
            <AnchorNavLink hash="contact" onClick={closeMenu}>Contact</AnchorNavLink>

            <div className="nav-actions-mobile">
              <a href={getCallLink()} className="btn btn-call btn-sm">📞 Call Us</a>
              <a href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm">💬 WhatsApp</a>
            </div>
          </nav>

          <div className="header-actions">
            <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
              </svg>
            </button>
            <a href={getCallLink()} className="btn btn-call btn-sm header-btn">📞 Call Now</a>
            <a href={getWhatsAppLink("Hi Sri Lakshmi Oil Mills, I'd like to enquire about your products.")} target="_blank" rel="noreferrer" className="btn btn-whatsapp btn-sm header-btn">💬 WhatsApp</a>
            <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="search-bar">
            <form onSubmit={handleSearch} className="container search-form">
              <input
                type="text"
                placeholder="Search products... e.g. Groundnut Oil, Ragi, Pickle"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button type="submit" className="btn btn-primary btn-sm">Search</button>
              <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>✕</button>
            </form>
          </div>
        )}
      </div>
      {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}
    </header>
  )
}
