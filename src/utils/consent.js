// Decisión del visitante sobre la medición con Google Analytics.
// Se guarda solo en este navegador (localStorage) y se avisa a quien escuche
// con el evento `consentchange`. `openConsentSettings()` vuelve a mostrar el aviso.

export const CONSENT_KEY = 'cookieConsent'
const LEGACY_KEY = 'complianceAccepted' // aviso anterior: no equivale a consentir la medición
const CHANGE_EVENT = 'consentchange'
const OPEN_EVENT = 'consentopen'

const safeStorage = {
  get: (key) => { try { return window.localStorage.getItem(key) } catch { return null } },
  set: (key, value) => { try { window.localStorage.setItem(key, value) } catch { /* sin almacenamiento */ } },
  remove: (key) => { try { window.localStorage.removeItem(key) } catch { /* sin almacenamiento */ } },
}

// { status: 'accepted' | 'rejected', date: ISO } o null si aún no decide.
export function getConsent() {
  const raw = safeStorage.get(CONSENT_KEY)
  if (!raw) return null
  try {
    const value = JSON.parse(raw)
    return value && (value.status === 'accepted' || value.status === 'rejected') ? value : null
  } catch {
    return null
  }
}

export function setConsent(status) {
  const value = { status, date: new Date().toISOString() }
  safeStorage.set(CONSENT_KEY, JSON.stringify(value))
  safeStorage.remove(LEGACY_KEY)
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: value }))
  return value
}

export const onConsentChange = (handler) => {
  const listener = (e) => handler(e.detail)
  window.addEventListener(CHANGE_EVENT, listener)
  return () => window.removeEventListener(CHANGE_EVENT, listener)
}

export const openConsentSettings = () => window.dispatchEvent(new Event(OPEN_EVENT))

export const onConsentOpen = (handler) => {
  window.addEventListener(OPEN_EVENT, handler)
  return () => window.removeEventListener(OPEN_EVENT, handler)
}
