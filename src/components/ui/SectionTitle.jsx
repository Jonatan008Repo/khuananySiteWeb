// H2 de sección: texto en mayúsculas + remate en cursiva dorada.
const SIZES = {
  md: 'lg:text-display-sm leading-heading', // 30 → 46 px
  lg: 'lg:text-display-md leading-heading lg:tracking-heading-lg', // 30 → 52 px
  xl: 'lg:text-[64px] leading-display', // 30 → 64 px (solo Obra)
}

// Dónde se parte el remate: en escritorio (línea propia desde lg) o en móvil
// (línea propia hasta sm, en línea después).
const ACCENT_BREAK = {
  desktop: 'lg:block',
  mobile: 'block sm:inline',
}

export default function SectionTitle({ id, title, accent, size = 'lg', accentBreak = 'mobile' }) {
  return (
    <h2 id={id} className={`text-display-2xs ${SIZES[size]} font-bold text-ivory uppercase tracking-heading`}>
      {title}{' '}
      <span className={`${ACCENT_BREAK[accentBreak]} italic font-normal normal-case tracking-normal text-gold`}>{accent}</span>
    </h2>
  )
}
