import React from 'react'

export default function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
    }
  }

  return (
    <nav className="fixed w-full z-50 bg-racing-green/95 backdrop-blur-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <div className="text-3xl font-bold gold-gradient deco-font tracking-tighter">KHUANANY</div>
        <div className="hidden md:flex space-x-10 uppercase text-2xs tracking-deco-sm">
          <a href="#inicio" className="nav-link" onClick={(e) => handleClick(e, '#inicio')}>Inicio</a>
          <a href="#servicios" className="nav-link" onClick={(e) => handleClick(e, '#servicios')}>Servicios</a>
          <a href="#portafolio" className="nav-link" onClick={(e) => handleClick(e, '#portafolio')}>Portafolio</a>
          <a href="#contacto" className="nav-link" onClick={(e) => handleClick(e, '#contacto')}>Contacto</a>
        </div>
        <button className="md:hidden text-gold">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
