// Desplaza suavemente a la sección con ese id. El desfase del menú fijo
// lo resuelve `scroll-margin-top` en src/styles.css.
export function scrollToSection(id) {
  const target = document.getElementById(id)
  if (!target) return false
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}
