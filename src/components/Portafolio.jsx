import { portfolio } from '../data/site'
import Button from './ui/Button'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

// Marcador déco mientras no exista la captura real del proyecto.
const placeholder = (
  <div className="bg-case-placeholder absolute inset-0">
    <svg viewBox="0 0 640 420" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 w-full h-full text-gold">
      <g stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" fill="none">
        <path d="M0 340h640M0 300h640M0 260h640" />
        <path d="M140 420V120a180 180 0 01360 0v300M200 420V150a120 120 0 01240 0v270M260 420V180a60 60 0 01120 0v240" />
      </g>
      <g fill="currentColor" fillOpacity="0.16">
        <rect x="60" y="360" width="60" height="60" />
        <rect x="520" y="360" width="60" height="60" />
      </g>
    </svg>
    <span className="absolute top-4 left-4 text-3xs font-semibold uppercase tracking-label text-soft-gold/60">
      Captura próximamente
    </span>
  </div>
)

export default function Portafolio() {
  return (
    <section id="obra" aria-labelledby="obra-title" className="bg-ocean px-5 lg:px-16 py-section lg:pt-section-lg lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-12 mb-8 lg:mb-16">
          <div className="flex flex-col gap-3.5 lg:gap-[18px]">
            <Eyebrow>{portfolio.eyebrow}</Eyebrow>
            <SectionTitle id="obra-title" title={portfolio.title} accent={portfolio.titleAccent} size="xl" accentBreak="desktop" />
          </div>
          <p className="text-body leading-copy text-mist lg:max-w-[400px]">{portfolio.lead}</p>
        </header>

        <ul className="flex flex-col gap-12">
          {portfolio.projects.map((project) => (
            <li key={project.id}>
              <article className="grid gap-7 lg:gap-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center">
                <div className="border border-gold/30 p-2 lg:p-2.5 bg-deep-black">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    {project.imagePending ? (
                      placeholder
                    ) : (
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        width="1200"
                        height="800"
                        loading="lazy"
                        decoding="async"
                        className="absolute inset-0 w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-4 lg:gap-5">
                  <div className="flex items-center justify-between gap-5">
                    <h3 className="normal-case tracking-hairline text-2xl lg:text-[34px] leading-tight font-bold text-soft-gold">
                      {project.name}
                    </h3>
                    <span className="whitespace-nowrap border-b border-gold/50 pb-1 text-3xs font-bold uppercase tracking-label text-gold">
                      {project.tag}
                    </span>
                  </div>
                  <p className="text-body lg:text-base leading-copy text-mist">{project.description}</p>
                  <p className="flex items-start gap-3 pt-1 text-caption font-medium tracking-hairline text-gold">
                    <span aria-hidden="true" className="w-[26px] h-px bg-gold mt-2.5 shrink-0" />
                    <span>Resultado: {project.result}</span>
                  </p>
                  <Button
                    variant="outline"
                    inline
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start mt-2 gap-3 h-btn px-7"
                  >
                    {project.linkLabel}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
                      <path d="M4 1h7v7M11 1L1 11" />
                    </svg>
                    <span className="sr-only">(se abre en otra pestaña)</span>
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
