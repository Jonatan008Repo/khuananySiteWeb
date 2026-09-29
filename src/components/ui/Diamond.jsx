// Rombo dorado decorativo (viñetas y separadores).
export default function Diamond({ size = 9, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true" className={`shrink-0 text-gold ${className}`}>
      <path d="M6 0l6 6-6 6L0 6z" fill="currentColor" />
    </svg>
  )
}
