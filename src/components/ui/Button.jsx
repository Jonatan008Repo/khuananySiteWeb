// Enlace con aspecto de botón. El tamaño (alto, relleno) lo decide cada uso
// con `className`; aquí vive solo lo que se repite.
const VARIANTS = {
  // Dorado sólido: acción principal
  primary: 'bg-gold text-deep-black font-bold hover:bg-soft-gold',
  // Borde tenue: acción secundaria
  outline: 'border border-gold/50 text-soft-gold font-semibold hover:border-gold hover:text-gold',
  // Borde dorado que se rellena al pasar el cursor (menú de escritorio)
  ghost: 'border border-gold text-gold font-semibold hover:bg-gold hover:text-deep-black',
}

const SIZES = {
  md: 'text-micro',
  sm: 'text-2xs',
}

// wrap: permite partir el texto en pantallas chicas (una línea desde sm).
// as: 'a' (enlace, por defecto) o 'button' para acciones en la misma página.
export default function Button({ as: Tag = 'a', variant = 'primary', size = 'md', inline = false, wrap = false, className = '', children, ...props }) {
  const display = inline ? 'inline-flex' : 'flex'
  const whitespace = wrap ? 'text-center sm:whitespace-nowrap' : 'whitespace-nowrap'
  return (
    <Tag
      {...(Tag === 'button' ? { type: 'button' } : {})}
      className={`${display} items-center justify-center ${whitespace} uppercase tracking-caps transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
