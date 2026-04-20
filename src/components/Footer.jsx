import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="py-16 border-t border-gold/10 bg-deep-black">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        <div className="text-4xl font-bold gold-gradient deco-font mb-10 tracking-widest">KHUANANY</div>
        <div className="flex gap-6 mb-6 flex-wrap justify-center">
          <Link
            to="/terminos"
            className="text-gold hover:text-soft-gold transition text-xs font-medium tracking-deco"
          >
            Términos y Condiciones
          </Link>
          <span className="text-gold/30">|</span>
          <Link
            to="/privacidad"
            className="text-gold hover:text-soft-gold transition text-xs font-medium tracking-deco"
          >
            Política de Privacidad
          </Link>
        </div>
        <p className="text-gray-600 text-3xs tracking-deco-lg font-medium">&copy; 2026 KHUANANY.</p>
      </div>
    </footer>
  )
}
