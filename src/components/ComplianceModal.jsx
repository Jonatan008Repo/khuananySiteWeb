import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { consent } from '../data/site'
import { getConsent, onConsentOpen, setConsent } from '../utils/consent'

// Aviso de cookies: panel inferior que no bloquea la página. Aparece si aún no
// hay decisión, o cuando se pide "Configurar cookies" (pie, página /cookies).
export default function ComplianceModal() {
  const [isVisible, setIsVisible] = useState(false)
  const panelRef = useRef(null)
  const returnFocusRef = useRef(null)

  useEffect(() => {
    let timer
    if (!getConsent()) timer = setTimeout(() => setIsVisible(true), 1500)
    const stop = onConsentOpen(() => {
      returnFocusRef.current = document.activeElement
      setIsVisible(true)
    })
    return () => {
      clearTimeout(timer)
      stop()
    }
  }, [])

  // Al reabrirlo a petición, el foco va al panel para que se anuncie.
  useEffect(() => {
    if (isVisible && returnFocusRef.current) panelRef.current?.focus()
  }, [isVisible])

  const decide = (status) => {
    setConsent(status)
    setIsVisible(false)
    const target = returnFocusRef.current
    returnFocusRef.current = null
    if (target && document.contains(target)) target.focus()
  }

  if (!isVisible) return null

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      aria-describedby="consent-text"
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 z-40 p-3 sm:p-5 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-deep-black border border-gold/30 shadow-2xl p-5 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-8">
        <div className="flex flex-col gap-2">
          <p id="consent-title" className="font-display text-lg font-bold text-ivory">{consent.title}</p>
          <p id="consent-text" className="text-sm leading-copy text-mist">
            {consent.text}{' '}
            <Link to="/cookies" className="text-gold underline underline-offset-2 hover:text-soft-gold">
              {consent.more}
            </Link>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide('rejected')}
            className="flex-1 sm:flex-none h-11 px-6 border border-gold/50 text-soft-gold text-2xs font-semibold uppercase tracking-caps hover:border-gold hover:text-gold transition-colors"
          >
            {consent.reject}
          </button>
          <button
            type="button"
            onClick={() => decide('accepted')}
            className="flex-1 sm:flex-none h-11 px-6 bg-gold text-deep-black text-2xs font-bold uppercase tracking-caps hover:bg-soft-gold transition-colors"
          >
            {consent.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
