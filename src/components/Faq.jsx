import { useEffect, useState } from 'react'
import { faq, formatMXN, pricing } from '../data/site'
import { getFaqAnswer } from '../utils/faq'
import Diamond from './ui/Diamond'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

const DESKTOP = '(min-width: 1024px)'

// En escritorio todas las respuestas están visibles; en móvil, acordeón.
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.matchMedia(DESKTOP).matches)
  useEffect(() => {
    const query = window.matchMedia(DESKTOP)
    const onChange = (e) => setIsDesktop(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])
  return isDesktop
}

const toggleIcon = (open) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true" className="shrink-0 text-gold">
    {open ? <path d="M1 7h12" /> : <path d="M7 1v12M1 7h12" />}
  </svg>
)

export default function Faq() {
  const isDesktop = useIsDesktop()
  const [openIds, setOpenIds] = useState(() => new Set([faq.items[0].id]))

  const toggle = (id) =>
    setOpenIds((current) => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })

  const questionClass = 'font-display normal-case tracking-hairline text-base lg:text-body-lg leading-snug font-bold text-soft-gold'

  return (
    <section id="respuestas" aria-labelledby="respuestas-title" className="deco-scales bg-deep-black px-5 lg:px-16 py-section lg:pt-[100px] lg:pb-28">
      {/* 340 px: columna del encabezado en el diseño (Main.dc.html); entre lg y xl va arriba */}
      <div className="max-w-7xl mx-auto grid gap-4 lg:gap-10 xl:gap-[72px] xl:grid-cols-[minmax(0,340px)_minmax(0,1fr)] items-start">
        <header className="flex flex-col gap-3.5 lg:gap-[22px]">
          <Eyebrow>{faq.eyebrow}</Eyebrow>
          <SectionTitle id="respuestas-title" title={faq.title} accent={faq.titleAccent} size="md" accentBreak="desktop" />
          <p className="hidden lg:block text-body leading-copy text-mist">{faq.lead}</p>
          <div aria-hidden="true" className="hidden lg:flex items-center gap-3 pt-1.5">
            <span className="w-10 h-px bg-gold/50" />
            <Diamond size={10} />
          </div>
        </header>

        <div className="grid lg:grid-cols-2 lg:gap-x-11 lg:gap-y-1 border-b border-gold/20 lg:border-b-0">
          {faq.items.map((item) => {
            const open = isDesktop || openIds.has(item.id)
            const answer = getFaqAnswer(item, { pricing, formatPrice: formatMXN })
            const panelId = `faq-${item.id}`
            const buttonId = `faq-${item.id}-q`
            return (
              <div key={item.id} className="border-t border-gold/20 lg:py-[30px]">
                {isDesktop ? (
                  <h3 className={`${questionClass} mb-3`}>{item.question}</h3>
                ) : (
                  <h3 className="normal-case tracking-normal">
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(item.id)}
                      className={`${questionClass} w-full min-h-btn py-[22px] flex items-center justify-between gap-4 text-left`}
                    >
                      <span>{item.question}</span>
                      {toggleIcon(open)}
                    </button>
                  </h3>
                )}
                <div
                  id={panelId}
                  role={isDesktop ? undefined : 'region'}
                  aria-labelledby={isDesktop ? undefined : buttonId}
                  hidden={!open}
                  className="pb-[22px] lg:pb-0"
                >
                  <p className="text-sm leading-copy text-mist">{answer}</p>
                  {item.note && <p className="fine-print mt-2">{item.note}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
