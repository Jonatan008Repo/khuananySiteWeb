import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from './scrollToSection'

// Navega a una sección de la página de inicio desde cualquier ruta: en "/"
// desplaza directo; en /terminos, /privacidad, etc. vuelve a "/" y luego baja.
export function useSectionNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const goToSection = useCallback(
    (e, id) => {
      e?.preventDefault()
      if (pathname === '/') {
        scrollToSection(id)
        return
      }
      navigate('/')
      setTimeout(() => scrollToSection(id), 100)
    },
    [navigate, pathname],
  )

  const goHome = useCallback(
    (e) => {
      e?.preventDefault()
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
      else navigate('/')
    },
    [navigate, pathname],
  )

  return { goToSection, goHome }
}
