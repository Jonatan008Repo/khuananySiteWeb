// Etiqueta pequeña en mayúsculas sobre el título de cada sección.
export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-3xs lg:text-2xs font-semibold uppercase tracking-eyebrow lg:tracking-eyebrow-lg text-gold ${className}`}>
      {children}
    </p>
  )
}
