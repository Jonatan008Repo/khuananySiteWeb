import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { initAnalytics } from './utils/analytics'
import { initClarity } from './utils/clarity'

document.getElementById('seo-fallback-h1')?.remove()
document.getElementById('seo-static-content')?.remove()
const rootEl = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

if (rootEl.hasChildNodes()) hydrateRoot(rootEl, app)
else createRoot(rootEl).render(app)

// Google Analytics solo se carga si el visitante lo aceptó (src/utils/consent.js).
initAnalytics()
initClarity()
