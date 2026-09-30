import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ComplianceModal from './components/ComplianceModal'
import NotFound from './components/NotFound'
import AuditModalProvider from './components/audit/AuditModalProvider'
import Home from './pages/Home'
import TerminosCondicionesPage from './pages/TerminosCondicionesPage'
import PrivacyPage from './pages/PrivacyPage'
import CookiesPage from './pages/CookiesPage'

export default function App() {
  return (
    <BrowserRouter>
      <AuditModalProvider>
        <ScrollToTop />
        <ComplianceModal />
        <div className="deco-pattern">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terminos" element={<TerminosCondicionesPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </AuditModalProvider>
    </BrowserRouter>
  )
}
