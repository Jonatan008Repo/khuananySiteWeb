import { getConsent, onConsentChange } from './consent.js'

const CLARITY_ID = 'z5fvsb90ry'
const SCRIPT_SRC = `https://www.clarity.ms/tag/${CLARITY_ID}?ref=bwt`
const SCRIPT_ID = `clarity-tag-${CLARITY_ID}`

let loaded = false

function clarity() {
  window.clarity?.apply(window, arguments)
}

function ensureClarityStub() {
  if (typeof window.clarity === 'function') return
  window.clarity = function () {
    ;(window.clarity.q = window.clarity.q || []).push(arguments)
  }
}

function clearClarityCookies() {
  const names = document.cookie
    .split(';')
    .map((c) => c.split('=')[0].trim())
    .filter((name) => name === '_clck' || name === '_clsk')

  const parts = window.location.hostname.split('.')
  const domains = ['', ...parts.map((_, i) => `.${parts.slice(i).join('.')}`).filter((d) => d.split('.').length > 2)]

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain ? `; domain=${domain}` : ''}`
    }
  }
}

function grantConsent() {
  clarity('consentv2', {
    ad_Storage: 'denied',
    analytics_Storage: 'granted',
  })
}

function load() {
  ensureClarityStub()

  if (loaded) {
    grantConsent()
    return
  }

  loaded = true
  grantConsent()

  const existing = document.getElementById(SCRIPT_ID)
  if (existing) return

  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.async = true
  script.src = SCRIPT_SRC
  document.head.appendChild(script)
}

function revoke() {
  if (typeof window.clarity === 'function') {
    clarity('consentv2', {
      ad_Storage: 'denied',
      analytics_Storage: 'denied',
    })
    clarity('consent', false)
  }
  clearClarityCookies()
}

export function initClarity() {
  const consent = getConsent()
  if (consent?.status === 'accepted') load()
  if (consent?.status === 'rejected') revoke()

  onConsentChange(({ status }) => {
    if (status === 'accepted') load()
    else revoke()
  })
}
