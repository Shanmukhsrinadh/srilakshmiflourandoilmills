import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Header from './components/Header'
import CategoryBar from './components/CategoryBar'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Travels from './pages/Travels'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />
        <CategoryBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />

            <Route
              path="/products/:slug"
              element={<ProductDetails />}
            />

            <Route path="/travels" element={<Travels />} />

            <Route
              path="/about"
              element={<Navigate to="/#about" replace />}
            />

            <Route
              path="/contact"
              element={<Navigate to="/#contact" replace />}
            />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingWhatsApp />
      </div>
    </HashRouter>
  )
}

export default App