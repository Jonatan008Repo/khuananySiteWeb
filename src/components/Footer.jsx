import { Link } from 'react-router-dom'
import { auditFormUrl, consent, contact, cta, footer, legalLinks, nav, studio } from '../data/site'
import { openConsentSettings } from '../utils/consent'
import { useSectionNav } from '../utils/useSectionNav'
import { useAuditModal } from './audit/auditContext'
import Button from './ui/Button'
import Diamond from './ui/Diamond'

const headingClass = 'text-3xs font-bold uppercase tracking-label text-gold font-body pb-1'
const linkClass = 'text-caption text-soft-gold/80 hover:text-gold transition-colors'

export default function Footer() {
  const { goToSection, goHome } = useSectionNav()
  const { openAudit } = useAuditModal()
  const contactLines = contact.lines.filter((line) => line.id !== 'response')

  return (
    <footer className="bg-racing-green border-t border-gold/30 px-5 lg:px-16 pt-section lg:pt-[76px] pb-10 lg:pb-11">
      <div className="max-w-7xl mx-auto">
        {/* Columnas: marca 1.4fr + tres de 1fr (Main.dc.html); en lg, Contacto más ancha para el correo */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)_minmax(0,1.3fr)] xl:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-10 xl:gap-14 pb-10 lg:pb-14">
          <div className="flex flex-col gap-[18px] sm:col-span-2 lg:col-span-1">
            <a href="/" onClick={goHome} className="self-start font-display font-bold text-[28px] tracking-[7px] uppercase text-gold hover:text-soft-gold transition-colors">
              {studio.name}
            </a>
            <p className="text-sm leading-copy-snug text-soft-gold/70 max-w-xs">{footer.description}</p>
          </div>

          <nav aria-label={footer.columns.studio} className="flex flex-col gap-3.5">
            <p className={headingClass}>{footer.columns.studio}</p>
            <ul className="flex flex-col gap-3.5">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={`/#${item.id}`} onClick={(e) => goToSection(e, item.id)} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.columns.legal} className="flex flex-col gap-3.5">
            <p className={headingClass}>{footer.columns.legal}</p>
            <ul className="flex flex-col gap-3.5">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <button type="button" onClick={openConsentSettings} className={`${linkClass} font-body text-left underline underline-offset-4 decoration-gold/40`}>
                  {consent.settings}
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col gap-3.5">
            <p className={headingClass}>{footer.columns.contact}</p>
            <ul className="flex flex-col gap-3.5">
              {contactLines.map((line) => (
                <li key={line.id}>
                  {line.href ? (
                    <a href={line.href} className={`${linkClass} break-words`}>{line.value}</a>
                  ) : (
                    <span className="text-caption text-soft-gold/80">{line.value}</span>
                  )}
                </li>
              ))}
            </ul>
            <Button variant="ghost" size="sm" href={auditFormUrl} onClick={openAudit} aria-haspopup="dialog" className="self-start mt-2 px-5 py-3">
              {cta.auditShort}
            </Button>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-gold/20 pt-7">
          <p className="text-3xs font-medium uppercase tracking-[3.5px] text-soft-gold/50">{footer.copyright}</p>
          <div aria-hidden="true" className="flex items-center gap-2.5">
            <span className="w-11 h-px bg-gold/40" />
            <Diamond size={9} className="opacity-70" />
            <span className="w-11 h-px bg-gold/40" />
          </div>
        </div>
      </div>
    </footer>
  )
}
