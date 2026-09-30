import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { consent, cookiePolicy, studio } from '../data/site'
import { gaSessionCookieName } from '../utils/analytics'
import { getConsent, onConsentChange, setConsent } from '../utils/consent'
import Button from '../components/ui/Button'
import Eyebrow from '../components/ui/Eyebrow'
import SectionTitle from '../components/ui/SectionTitle'

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'America/Mexico_City' })

const subheading = 'font-display normal-case tracking-hairline text-xl lg:text-2xl font-bold text-soft-gold'
const textLink = 'text-gold underline underline-offset-2 hover:text-soft-gold'

function statusText(decision) {
  if (!decision) return cookiePolicy.status.none
  return cookiePolicy.status[decision.status].replace('{fecha}', formatDate(decision.date))
}

export default function CookiesPage() {
  const [decision, setDecision] = useState(() => getConsent())
  useEffect(() => onConsentChange(setDecision), [])

  const { columns } = cookiePolicy
  const cellLabel = 'before:block md:before:hidden before:text-3xs before:font-semibold before:uppercase before:tracking-label before:text-mist/70 before:mb-1 before:content-[attr(data-label)]'

  return (
    <main className="bg-deep-black px-5 lg:px-16 pt-[calc(theme(spacing.16)+theme(spacing.section))] lg:pt-[calc(theme(spacing.nav)+theme(spacing.section))] pb-section lg:pb-section-lg">
      <div className="max-w-4xl mx-auto flex flex-col gap-10 lg:gap-14">
        <header className="flex flex-col gap-4">
          <Eyebrow>{cookiePolicy.eyebrow}</Eyebrow>
          <SectionTitle as="h1" id="cookies-title" title={cookiePolicy.title} accent={cookiePolicy.titleAccent} size="md" accentBreak="mobile" />
          <p className="text-3xs uppercase tracking-label text-mist">{cookiePolicy.updated}</p>
          {cookiePolicy.intro.map((text) => (
            <p key={text} className="text-body lg:text-body-lg leading-copy text-mist-light">{text}</p>
          ))}
        </header>

        <section aria-labelledby="cookies-status" className="border border-gold/30 p-1.5">
          <div className="border border-gold/15 p-5 lg:p-8 flex flex-col gap-4">
            <h2 id="cookies-status" className={subheading}>{cookiePolicy.status.title}</h2>
            <p className="text-body leading-copy text-ivory" aria-live="polite">{statusText(decision)}</p>
            <p className="text-sm text-mist">{cookiePolicy.status.help}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="button" variant="outline" onClick={() => setConsent('rejected')} aria-pressed={decision?.status === 'rejected'} className="h-btn px-8">
                {consent.reject}
              </Button>
              <Button as="button" onClick={() => setConsent('accepted')} aria-pressed={decision?.status === 'accepted'} className="h-btn px-8">
                {consent.accept}
              </Button>
            </div>
          </div>
        </section>

        <section aria-labelledby="cookies-table" className="flex flex-col gap-5">
          <h2 id="cookies-table" className={subheading}>{cookiePolicy.tableTitle}</h2>
          <table className="w-full text-left text-sm text-mist-light border-collapse">
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-gold/30">
                {Object.values(columns).map((label, i) => (
                  <th key={label} scope="col" className={`${i === 0 ? 'md:w-40' : ''} py-3 pr-4 text-3xs font-semibold uppercase tracking-label text-gold align-bottom`}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cookiePolicy.rows.map((row) => (
                <tr key={row.id} className="block md:table-row border-t border-gold/20 py-4 md:py-0">
                  <th scope="row" data-label={columns.name} className={`block md:table-cell md:py-4 md:pr-4 align-top font-normal pb-3 ${cellLabel}`}>
                    <code className="font-body font-semibold text-ivory break-words">{row.name.replace('{gaSession}', gaSessionCookieName)}</code>
                    <span className="block text-xs text-mist/80 mt-1">{row.kind}</span>
                  </th>
                  <td data-label={columns.owner} className={`block md:table-cell md:py-4 md:pr-4 align-top pb-3 ${cellLabel}`}>{row.owner}</td>
                  <td data-label={columns.purpose} className={`block md:table-cell md:py-4 md:pr-4 align-top pb-3 ${cellLabel}`}>
                    {row.purpose}
                    {row.link && (
                      <a href={row.link.href} target="_blank" rel="noopener noreferrer" className={`block mt-1 ${textLink}`}>
                        {row.link.label}<span className="sr-only"> (se abre en otra pestaña)</span>
                      </a>
                    )}
                  </td>
                  <td data-label={columns.duration} className={`block md:table-cell md:py-4 md:pr-4 align-top pb-3 ${cellLabel}`}>{row.duration}</td>
                  <td data-label={columns.when} className={`block md:table-cell md:py-4 align-top ${cellLabel}`}>{row.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-mist">
            <a href={cookiePolicy.googleLink.href} target="_blank" rel="noopener noreferrer" className={textLink}>
              {cookiePolicy.googleLink.label}<span className="sr-only"> (se abre en otra pestaña)</span>
            </a>
          </p>
        </section>

        <section aria-labelledby="cookies-delete" className="flex flex-col gap-4">
          <h2 id="cookies-delete" className={subheading}>{cookiePolicy.deleteTitle}</h2>
          <p className="text-body leading-copy text-mist-light">{cookiePolicy.deleteText}</p>
          <ul className="flex flex-col gap-2">
            {cookiePolicy.browsers.map((b) => (
              <li key={b.name}>
                <a href={b.href} target="_blank" rel="noopener noreferrer" className={`text-body ${textLink}`}>
                  {b.name}<span className="sr-only"> (se abre en otra pestaña)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="cookies-more" className="flex flex-col gap-4 border-t border-gold/20 pt-8">
          <h2 id="cookies-more" className={subheading}>{cookiePolicy.moreTitle}</h2>
          <p className="text-body leading-copy text-mist-light">
            {cookiePolicy.moreText}{' '}
            <Link to="/privacidad" className={textLink}>{cookiePolicy.privacyLabel}</Link>.{' '}
            {cookiePolicy.contactText}{' '}
            <a href={`mailto:${studio.email}`} className={textLink}>{studio.email}</a>.
          </p>
        </section>
      </div>
    </main>
  )
}
