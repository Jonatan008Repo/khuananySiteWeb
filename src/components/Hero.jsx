import { cta, formatMXN, hero, pricing } from '../data/site'
import { resolveFactValue } from '../utils/discounts'
import { scrollToSection } from '../utils/scrollToSection'
import Button from './ui/Button'

const CORNERS = [
  'top-0 left-0 border-t-2 border-l-2',
  'top-0 right-0 border-t-2 border-r-2',
  'bottom-0 left-0 border-b-2 border-l-2',
  'bottom-0 right-0 border-b-2 border-r-2',
]

function DecoPanel() {
  return (
    <div className="relative p-2 lg:p-3.5 bg-deep-black border border-gold/30">
      {CORNERS.map((position) => (
        <span key={position} aria-hidden="true" className={`absolute w-[30px] h-[30px] lg:w-[46px] lg:h-[46px] border-gold ${position}`} />
      ))}
      {/* Alturas del panel del diseño (Main/Movil.dc.html): valores únicos */}
      <div className="bg-hero-panel relative h-[260px] sm:h-[380px] lg:h-[546px] overflow-hidden">
        <svg viewBox="0 0 520 546" preserveAspectRatio="xMidYMax slice" role="img" aria-label={hero.imageAlt} className="absolute inset-0 w-full h-full text-gold">
          <defs>
            <linearGradient id="hero-fan" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="currentColor" stopOpacity="0.55" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.04" />
            </linearGradient>
          </defs>
          <g stroke="url(#hero-fan)" strokeWidth="1.5" fill="none">
            <path d="M260 546V150M260 546L120 196M260 546L400 196M260 546L30 268M260 546L490 268M260 546L-20 372M260 546L540 372" />
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity="0.5">
            <path d="M110 546a150 150 0 01300 0M150 546a110 110 0 01220 0M190 546a70 70 0 01140 0" />
          </g>
          <circle cx="260" cy="128" r="5" fill="currentColor" fillOpacity="0.85" />
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <section id="inicio" className="bg-hero relative overflow-hidden pt-16 lg:pt-nav">
      {/* Rosa déco de fondo: posición y opacidad propias del diseño */}
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        className="pointer-events-none absolute text-gold w-[320px] h-[320px] -right-[90px] top-6 opacity-[0.18] lg:w-[600px] lg:h-[600px] lg:right-auto lg:left-[300px] lg:-top-6 lg:opacity-[0.22]"
      >
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <circle cx="300" cy="300" r="286" />
          <circle cx="300" cy="300" r="212" />
          <circle cx="300" cy="300" r="138" />
          <path d="M300 14v572M14 300h572M98 98l404 404M502 98L98 502M300 22L443 300 300 578 157 300Z" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-16 pt-12 pb-14 lg:pt-28 lg:pb-section-lg grid gap-10 lg:gap-12 xl:gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)] items-center">
        <div className="flex flex-col items-start">
          <p className="flex items-center gap-3 lg:gap-4 mb-5 lg:mb-8">
            <span aria-hidden="true" className="w-[30px] lg:w-[52px] h-px bg-gold" />
            <span className="text-3xs lg:text-2xs font-semibold uppercase tracking-[3.5px] lg:tracking-eyebrow-lg text-gold">
              {hero.eyebrow}
            </span>
          </p>

          <h1 className="normal-case tracking-[-0.5px] text-display-xs sm:text-6xl lg:text-[60px] xl:text-[68px] leading-display lg:leading-[1.04] font-bold text-ivory mb-5 lg:mb-9">
            {hero.title}
            <span className="block italic font-normal text-gold">{hero.titleAccent}</span>
          </h1>

          <p className="text-[15.5px] lg:text-[19px] leading-copy-snug text-mist max-w-[580px] mb-7 lg:mb-10">
            {hero.lead}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-5 w-full sm:w-auto mb-10 lg:mb-[52px]">
            <Button href="#contacto" onClick={go('contacto')} className="h-btn lg:h-auto lg:py-[19px] px-11 lg:px-8 lg:tracking-label">
              {cta.audit}
            </Button>
            <Button variant="outline" href="#tarifas" onClick={go('tarifas')} className="h-btn lg:h-auto lg:py-[19px] px-10 lg:px-7 xl:px-8 lg:tracking-label">
              {cta.pricing}
            </Button>
          </div>

          <dl className="grid grid-cols-3 w-full max-w-[580px] border-t border-gold/20 pt-5 lg:pt-[26px]">
            {hero.facts.map((fact, i) => (
              <div key={fact.label} className={`flex flex-col gap-1.5 ${i > 0 ? 'border-l border-gold/20 pl-3 sm:pl-8' : 'pr-3'}`}>
                <dt className="text-3xs font-semibold uppercase tracking-label text-mist/70">{fact.label}</dt>
                <dd className="text-xs sm:text-caption text-soft-gold">{resolveFactValue(fact, pricing, formatMXN)}</dd>
              </div>
            ))}
          </dl>
        </div>

        <DecoPanel />
      </div>
    </section>
  )
}
