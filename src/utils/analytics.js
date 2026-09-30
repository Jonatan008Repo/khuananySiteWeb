// Google Analytics 4 solo con consentimiento. Nada se descarga ni se envía a
// Google hasta que el visitante pulsa "Aceptar"; al rechazar se deja de medir
// y se borran las cookies _ga del dominio.
//
// Páginas vistas en la SPA: la "medición mejorada" de GA4 (activada en la
// propiedad) detecta los cambios de ruta de React Router vía history.pushState,
// así que aquí NO se envía page_view manual para no duplicar.

import { getConsent, onConsentChange } from './consent.js'

const GA_ID = import.meta.env.VITE_GA_ID || ''
let loaded = false

function gtag() {
  // gtag.js necesita el objeto `arguments`, no un arreglo.
  window.dataLayer.push(arguments)
}

function load() {
  if (!GA_ID) return
  window[`ga-disable-${GA_ID}`] = false
  if (loaded) {
    // Volvió a aceptar después de rechazar en la misma visita.
    window.gtag('consent', 'update', { analytics_storage: 'granted' })
    return
  }
  loaded = true
  window.dataLayer = window.dataLayer || []
  window.gtag = gtag
  gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('js', new Date())
  gtag('config', GA_ID, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`
  document.head.appendChild(script)
}

// Borra _ga y _ga_* en el host actual y en el dominio padre (www.khuanany.com → .khuanany.com).
function deleteGaCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name === '_ga' || name.startsWith('_ga_'))
  const parts = window.location.hostname.split('.')
  const domains = ['', ...parts.map((_, i) => `.${parts.slice(i).join('.')}`).filter((d) => d.split('.').length > 2)]
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

function revoke() {
  if (GA_ID) window[`ga-disable-${GA_ID}`] = true
  if (window.gtag) window.gtag('consent', 'update', { analytics_storage: 'denied' })
  deleteGaCookies()
}

export function initAnalytics() {
  if (!GA_ID) return
  if (getConsent()?.status === 'accepted') load()
  onConsentChange(({ status }) => (status === 'accepted' ? load() : revoke()))
}

// Nombre de la cookie de sesión de GA4 (_ga_ + ID sin el prefijo "G-").
export const gaSessionCookieName = GA_ID ? `_ga_${GA_ID.replace(/^G-/, '')}` : '_ga_<ID>'
