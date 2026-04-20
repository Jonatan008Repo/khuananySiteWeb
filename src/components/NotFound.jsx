import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-black px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold deco-font gold-gradient tracking-widest mb-6">
            404
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gold via-soft-gold to-gold mx-auto mb-8"></div>
        </div>

        <h2 className="text-3xl md:text-4xl deco-font text-gold mb-4 tracking-widest">
          Página No Encontrada
        </h2>

        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto font-light tracking-deco">
          Lo sentimos, la página que buscas no existe o ha sido movida. Por favor, regresa al inicio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="btn-deco inline-block"
          >
            Volver al Inicio
          </Link>
          <a
            href="mailto:jonatan-008@outlook.com"
            className="btn-deco inline-block border-soft-gold text-soft-gold hover:bg-soft-gold"
          >
            Contáctanos
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10">
          <p className="text-gray-600 text-xs tracking-deco-lg font-medium mb-4">
            NAVEGACIÓN RÁPIDA
          </p>
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-soft-gold hover:text-gold transition text-sm">
              Inicio
            </Link>
            <Link to="/" className="text-soft-gold hover:text-gold transition text-sm">
              Servicios
            </Link>
            <Link to="/" className="text-soft-gold hover:text-gold transition text-sm">
              Portafolio
            </Link>
            <Link to="/" className="text-soft-gold hover:text-gold transition text-sm">
              Contacto
            </Link>
            <Link to="/terminos" className="text-soft-gold hover:text-gold transition text-sm">
              Términos
            </Link>
            <Link to="/privacidad" className="text-soft-gold hover:text-gold transition text-sm">
              Privacidad
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
