import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gold/10 bg-deep-black">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="text-4xl font-bold gold-gradient deco-font mb-10 tracking-widest">KHUANANY</div>
        <Link
          to="/terminos"
          className="text-gold hover:text-soft-gold transition text-xs mb-6 font-medium tracking-deco"
        >
          Términos y Condiciones
        </Link>
        <p className="text-gray-600 text-3xs tracking-deco-lg font-medium">&copy; 2026 KHUANANY.</p>
      </div>
    </footer>
  )
}
