import { useEffect, useRef, useState } from 'react'
import { auditFormUrl, cta, nav, studio } from '../data/site'
import { useAuditModal } from './audit/auditContext'
import { useSectionNav } from '../utils/useSectionNav'
import Button from './ui/Button'

export default function Navbar() {
  const { goToSection, goHome: goHomeBase } = useSectionNav()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const { openAudit } = useAuditModal()

  useEffect(() => {
    if (!isMenuOpen) return undefined
    const onKey = (e) => e.key === 'Escape' && setIsMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  const goTo = (e, id) => {
    setIsMenuOpen(false)
    goToSection(e, id)
  }

  const goHome = (e) => {
    setIsMenuOpen(false)
    goHomeBase(e)
  }

  const linkClass =
    'text-soft-gold hover:text-gold transition-colors text-2xs font-semibold uppercase tracking-[0.22em] xl:tracking-deco-sm'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-racing-green/95 backdrop-blur-lg border-b border-gold/30">
      <nav aria-label="Principal" className="max-w-7xl mx-auto h-16 lg:h-nav px-5 lg:px-16 flex items-center justify-between gap-6">
        <a href="/" onClick={goHome} className="group">
          <span className="font-display font-bold text-[19px] lg:text-[26px] tracking-[4px] lg:tracking-[6px] uppercase text-gold group-hover:text-soft-gold transition-colors">
            {studio.name}
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7 xl:gap-10">
          <ul className="flex items-center gap-6 xl:gap-8">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} onClick={(e) => goTo(e, item.id)} className={`nav-link ${linkClass}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="sm" href={auditFormUrl} onClick={openAudit} aria-haspopup="dialog" className="px-7 py-3">
            {cta.auditShort}
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden w-[46px] h-[46px] flex items-center justify-center border border-gold/40 text-gold"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
            {isMenuOpen ? <path d="M3 0l14 14M17 0L3 14" /> : <path d="M0 1h20M0 7h20M0 13h20" />}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[420px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
      >
        <ul className="px-5 pb-6 pt-1 flex flex-col">
          {nav.map((item) => (
            <li key={item.id} className="border-t border-gold/15">
              <a href={`/#${item.id}`} onClick={(e) => goTo(e, item.id)} className={`flex items-center h-btn ${linkClass}`}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button
              size="sm"
              href={auditFormUrl}
              aria-haspopup="dialog"
              onClick={(e) => {
                setIsMenuOpen(false)
                openAudit(e, menuButtonRef.current) // el botón del menú se oculta al cerrarlo
              }}
              className="h-btn"
            >
              {cta.auditShort}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
