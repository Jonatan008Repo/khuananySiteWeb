import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleClick = (e, id) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const target = document.querySelector(id)
        if (target) {
          window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
        }
      }, 100)
    } else {
      const target = document.querySelector(id)
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
      }
    }
  }

  const handleLogo = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-racing-green/95 backdrop-blur-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <button onClick={handleLogo} className="text-3xl font-bold gold-gradient deco-font tracking-tighter cursor-pointer hover:opacity-80 transition">KHUANANY</button>
        <div className="hidden md:flex space-x-10 uppercase text-2xs tracking-deco-sm">
          <a href="#inicio" className="nav-link" onClick={(e) => handleClick(e, '#inicio')}>Inicio</a>
          <a href="#servicios" className="nav-link" onClick={(e) => handleClick(e, '#servicios')}>Servicios</a>
          <a href="#portafolio" className="nav-link" onClick={(e) => handleClick(e, '#portafolio')}>Portafolio</a>
          <a href="#contacto" className="nav-link" onClick={(e) => handleClick(e, '#contacto')}>Contacto</a>
        </div>
        <button
          className="md:hidden text-gold"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-8 pb-6 pt-2 flex flex-col gap-4 uppercase text-xs tracking-widest">
          <a href="#inicio" className="nav-link" onClick={(e) => handleClick(e, '#inicio')}>Inicio</a>
          <a href="#servicios" className="nav-link" onClick={(e) => handleClick(e, '#servicios')}>Servicios</a>
          <a href="#portafolio" className="nav-link" onClick={(e) => handleClick(e, '#portafolio')}>Portafolio</a>
          <a href="#contacto" className="nav-link" onClick={(e) => handleClick(e, '#contacto')}>Contacto</a>
        </div>
      </div>
    </nav>
  )
}
