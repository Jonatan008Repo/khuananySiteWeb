import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ComplianceModal from './components/ComplianceModal'
import NotFound from './components/NotFound'
import AuditModalProvider from './components/audit/AuditModalProvider'
import Seo from './seo/Seo'
import Home from './pages/Home'
import TerminosCondicionesPage from './pages/TerminosCondicionesPage'
import PrivacyPage from './pages/PrivacyPage'
import CookiesPage from './pages/CookiesPage'

export default function App() {
  return (
    <BrowserRouter>
      <AuditModalProvider>
        <Seo />
        <ScrollToTop />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-gold focus:text-deep-black focus:px-4 focus:py-3 focus:text-2xs focus:font-bold focus:uppercase focus:tracking-caps"
        >
          Saltar al contenido
        </a>
        <ComplianceModal />
        <div className="deco-pattern">
          <Navbar />
          <main id="contenido" tabIndex={-1} className="outline-none">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/terminos" element={<TerminosCondicionesPage />} />
              <Route path="/privacidad" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuditModalProvider>
    </BrowserRouter>
  )
}
