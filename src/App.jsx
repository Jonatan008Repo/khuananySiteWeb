import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ComplianceModal from './components/ComplianceModal'
import NotFound from './components/NotFound'
import Home from './pages/Home'
import TerminosCondicionesPage from './pages/TerminosCondicionesPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ComplianceModal />
      <div className="deco-pattern">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminos" element={<TerminosCondicionesPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
