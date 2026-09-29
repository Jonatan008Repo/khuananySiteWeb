import { services } from '../data/site'
import Diamond from './ui/Diamond'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

const ICONS = {
  globe: (
    <>
      <circle cx="20" cy="20" r="17" />
      <ellipse cx="20" cy="20" rx="7" ry="17" />
      <path d="M3 20h34M20 3v34" />
    </>
  ),
  layout: (
    <>
      <rect x="4" y="4" width="32" height="32" />
      <path d="M4 14h32M14 14v22M20 21h10M20 26h10" />
    </>
  ),
  shield: <path d="M20 4l14 5v11c0 8-6 14-14 16-8-2-14-8-14-16V9zM14 20l5 5 8-9" />,
}

export default function Servicios() {
  return (
    <section id="servicios" aria-labelledby="servicios-title" className="bg-ocean px-5 lg:px-16 py-section lg:pt-section-lg lg:pb-28">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center text-center gap-3.5 lg:gap-5 mb-7 lg:mb-[76px]">
          <Eyebrow>{services.eyebrow}</Eyebrow>
          <SectionTitle id="servicios-title" title={services.title} accent={services.titleAccent} />
          <div aria-hidden="true" className="hidden lg:flex items-center gap-3">
            <span className="w-[60px] h-px bg-gold/45" />
            <Diamond size={12} />
            <span className="w-[60px] h-px bg-gold/45" />
          </div>
        </header>

        <ul className="grid gap-[18px] lg:gap-8 lg:grid-cols-3">
          {services.items.map((item) => (
            <li key={item.id} className="border border-gold/30 p-1.5 lg:p-[7px] bg-deep-black transition-transform duration-500 hover:-translate-y-1">
              <article className="h-full flex flex-col gap-3.5 lg:gap-[22px] border border-gold/15 px-6 pt-7 pb-[30px] lg:px-9 lg:pt-11 lg:pb-12">
                <div className="flex items-center justify-between">
                  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" className="w-8 h-8 lg:w-10 lg:h-10 text-gold">
                    {ICONS[item.icon]}
                  </svg>
                  <span aria-hidden="true" className="font-display font-bold lining-nums text-display-2xs lg:text-display-xs leading-none text-gold/20">
                    {item.number}
                  </span>
                </div>
                <h3 className="text-lg lg:text-[21px] leading-[1.32] font-bold text-gold uppercase tracking-[1.8px] lg:tracking-heading-lg">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-body leading-copy-snug text-mist">{item.description}</p>
                <ul className="flex flex-col gap-bullet mt-1">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-bullet">
                      <span className="mt-1.5"><Diamond /></span>
                      <span className="text-caption text-mist-light">{bullet}</span>
                    </li>
                  ))}
                </ul>
                {item.note && <p className="fine-print mt-auto pt-2">{item.note}</p>}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
