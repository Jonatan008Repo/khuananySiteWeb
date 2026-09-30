import { Link } from 'react-router-dom'
import { auditFormUrl, contact, cta } from '../data/site'
import { useAuditModal } from './audit/auditContext'
import Button from './ui/Button'
import Diamond from './ui/Diamond'
import Eyebrow from './ui/Eyebrow'
import SectionTitle from './ui/SectionTitle'

const CORNERS = [
  'top-0 left-0 border-t-2 border-l-2',
  'top-0 right-0 border-t-2 border-r-2',
  'bottom-0 left-0 border-b-2 border-l-2',
  'bottom-0 right-0 border-b-2 border-r-2',
]

export default function Contacto() {
  const { openAudit } = useAuditModal()

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-ocean px-5 lg:px-16 py-section lg:pt-section-lg lg:pb-28">
      <div className="max-w-7xl mx-auto grid grid-cols-[minmax(0,1fr)] gap-10 lg:gap-20 lg:grid-cols-2 items-center">
        <div className="flex flex-col gap-4 lg:gap-[26px]">
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <SectionTitle id="contacto-title" title={contact.title} accent={contact.titleAccent} size="md" accentBreak="desktop" />
          <p className="text-body lg:text-body-lg leading-copy text-mist-light">{contact.lead}</p>
          <ul className="flex flex-col gap-4 pt-2">
            {contact.lines.map((line) => (
              <li key={line.id} className="flex items-center gap-4">
                <span aria-hidden="true" className="w-7 h-px bg-gold shrink-0" />
                {line.href ? (
                  <a href={line.href} className="text-body text-gold hover:text-soft-gold transition-colors break-all">
                    {line.value}
                  </a>
                ) : (
                  <span className="text-body text-soft-gold">{line.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative border border-gold/30 p-1.5 lg:p-2 bg-deep-black">
          {CORNERS.map((position) => (
            <span key={position} aria-hidden="true" className={`absolute w-7 h-7 lg:w-10 lg:h-10 border-gold ${position}`} />
          ))}
          <div className="border border-gold/15 flex flex-col gap-5 lg:gap-6 px-6 py-8 lg:px-11 lg:py-12">
            <p className="text-3xs lg:text-2xs font-semibold uppercase tracking-eyebrow text-gold">{contact.panelTitle}</p>
            <p className="text-body lg:text-body-lg leading-copy text-ivory">{contact.panelText}</p>
            <ul className="flex flex-col gap-bullet">
              {contact.panelSteps.map((step) => (
                <li key={step} className="flex items-start gap-bullet text-sm text-mist-light">
                  <Diamond className="mt-1.5" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <Button wrap href={auditFormUrl} onClick={openAudit} aria-haspopup="dialog" className="min-h-btn py-3 px-6 lg:px-8 mt-2">
              {cta.audit}
            </Button>
            <p className="fine-print">
              {contact.privacyNote}{' '}
              <Link to="/privacidad" className="text-gold underline underline-offset-2 hover:text-soft-gold">
                {contact.privacyLinkLabel}
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
