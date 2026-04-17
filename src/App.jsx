import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import TerminosCondicionesPage from './pages/TerminosCondicionesPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="deco-pattern">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminos" element={<TerminosCondicionesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
