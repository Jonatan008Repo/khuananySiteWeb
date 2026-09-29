import { about, formatMXN, pricing } from '../data/site'
import { resolveFactValue } from '../utils/discounts'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

// Bloque de entidad (GEO): definición en una frase + ficha de hechos.
// Debe coincidir con el JSON-LD de Organization (src/seo/schemas.js).
export default function EnBreve() {
  return (
    <section id="estudio" aria-labelledby="estudio-title" className="bg-deep-black px-5 lg:px-16 py-section lg:py-section-lg">
      <div className="max-w-7xl mx-auto grid gap-7 lg:gap-20 lg:grid-cols-2 items-start">
        <div className="flex flex-col gap-4 lg:gap-[26px]">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <SectionTitle id="estudio-title" title={about.title} accent={about.titleAccent} size="md" accentBreak="desktop" />
          {about.paragraphs.map((text, i) => (
            <p key={i} className={`text-body lg:text-body-lg leading-[1.78] ${i === 0 ? 'text-mist-light' : 'text-mist'}`}>
              {text}
            </p>
          ))}
        </div>

        <div className="border border-gold/30 p-1.5 lg:p-2">
          <div className="border border-gold/20 px-5 py-5 lg:px-11 lg:py-10">
            <p className="text-3xs lg:text-2xs font-semibold uppercase tracking-eyebrow text-gold pb-4 lg:pb-6">
              {about.factsTitle}
            </p>
            {/* 148 px: columna de etiquetas de la ficha (valor único del diseño) */}
            <dl className="grid grid-cols-[auto_minmax(0,1fr)] lg:grid-cols-[148px_minmax(0,1fr)]">
              {about.facts.map((fact) => (
                <div key={fact.label} className="contents">
                  <dt className="py-3.5 lg:py-[17px] pr-4 border-t border-gold/15 text-[9.5px] lg:text-2xs font-semibold uppercase tracking-caps text-mist/80">
                    {fact.label}
                  </dt>
                  <dd className="py-3.5 lg:py-[17px] border-t border-gold/15 text-sm lg:text-body leading-normal text-right lg:text-left break-words">
                    {fact.href ? (
                      <a href={fact.href} className="text-gold hover:text-soft-gold transition-colors">{fact.value}</a>
                    ) : (
                      <span className="text-ivory">{resolveFactValue(fact, pricing, formatMXN)}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
