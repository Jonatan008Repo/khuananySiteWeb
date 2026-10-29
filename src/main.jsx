import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'
import { initAnalytics } from './utils/analytics'
import { initClarity } from './utils/clarity'

document.getElementById('seo-fallback-h1')?.remove()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Google Analytics solo se carga si el visitante lo aceptó (src/utils/consent.js).
initAnalytics()
initClarity()
