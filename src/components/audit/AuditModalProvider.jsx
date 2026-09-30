import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { auditFormEmbedUrl, auditFormUrl, contact } from '../../data/site'
import { AuditContext } from './auditContext'

// Modal único de "Solicitar auditoría" con el formulario de Microsoft Forms.
// Usa <dialog> nativo: showModal() lo pone en la capa superior (encima del
// aviso de cookies), vuelve inerte el resto de la página y cierra con Esc.
export default function AuditModalProvider({ children }) {
  const dialogRef = useRef(null)
  const triggerRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false) // el iframe se crea al primer uso
  const [isLoaded, setIsLoaded] = useState(false)

  // returnFocusTo: elemento al que vuelve el foco al cerrar (por defecto, el
  // botón que abrió el modal).
  const openAudit = useCallback((event, returnFocusTo) => {
    event?.preventDefault?.()
    triggerRef.current = returnFocusTo ?? event?.currentTarget ?? document.activeElement
    setHasOpened(true)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (isOpen && !dialog.open) {
      dialog.showModal()
      document.documentElement.style.overflow = 'hidden'
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  // Se dispara con Esc, con la X, con clic fuera o al navegar a /privacidad.
  const handleClose = () => {
    setIsOpen(false)
    document.documentElement.style.overflow = ''
    const trigger = triggerRef.current
    if (trigger && document.contains(trigger)) trigger.focus()
  }

  // Clic en el fondo: el evento llega al propio <dialog>, no a su contenido.
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) close()
  }

  // Foco atrapado: el <dialog> modal vuelve inerte la página, pero el navegador
  // deja salir el foco a su propia interfaz; aquí se cicla entre los extremos.
  const handleKeyDown = (e) => {
    if (e.key !== 'Tab') return
    const focusables = [...dialogRef.current.querySelectorAll('button, a[href], iframe')]
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement
    const outside = !dialogRef.current.contains(active) || active === dialogRef.current
    if (e.shiftKey && (active === first || outside)) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && (active === last || outside)) {
      e.preventDefault()
      first.focus()
    }
  }

  const value = useMemo(() => ({ openAudit }), [openAudit])

  return (
    <AuditContext.Provider value={value}>
      {children}
      <dialog
        ref={dialogRef}
        aria-labelledby="audit-title"
        aria-describedby="audit-intro"
        onClose={handleClose}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        className="open:flex flex-col p-0 m-0 sm:m-auto w-full h-full max-w-none max-h-none sm:w-[calc(100%-2rem)] sm:max-w-3xl sm:h-[92vh] sm:max-h-[860px] bg-deep-black text-ivory sm:border border-gold/30 backdrop:bg-deep-black/80 backdrop:backdrop-blur-sm"
      >
        <header className="flex items-start justify-between gap-4 px-5 sm:px-8 pt-6 pb-4 border-b border-gold/20">
          <div className="flex flex-col gap-2">
            <h2 id="audit-title" className="text-2xl sm:text-3xl leading-heading font-bold normal-case tracking-heading text-ivory">
              {contact.modalTitle}
            </h2>
            <p id="audit-intro" className="text-sm leading-copy text-mist">{contact.modalIntro}</p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label={contact.modalClose}
            className="shrink-0 w-11 h-11 flex items-center justify-center border border-gold/40 text-gold hover:border-gold hover:bg-gold/10 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" />
            </svg>
          </button>
        </header>

        <div className="relative flex-1 min-h-0 bg-ivory">
          {!isLoaded && (
            <p className="absolute inset-0 flex items-center justify-center text-sm text-deep-black/70">{contact.modalLoading}</p>
          )}
          {hasOpened && (
            <iframe
              src={auditFormEmbedUrl}
              title={contact.modalFrameTitle}
              onLoad={() => setIsLoaded(true)}
              className="absolute inset-0 w-full h-full border-0"
            />
          )}
        </div>

        <footer className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-5 sm:px-8 py-4 border-t border-gold/20">
          <a
            href={auditFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gold underline underline-offset-4 hover:text-soft-gold transition-colors"
          >
            {contact.modalFallback}
            <span className="sr-only"> (se abre en otra pestaña)</span>
          </a>
          <p className="fine-print">
            {contact.privacyNote}{' '}
            <Link to="/privacidad" onClick={close} className="text-gold underline underline-offset-2 hover:text-soft-gold">
              {contact.privacyLinkLabel}
            </Link>
            .
          </p>
        </footer>
      </dialog>
    </AuditContext.Provider>
  )
}
