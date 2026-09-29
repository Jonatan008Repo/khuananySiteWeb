// Texto plano de las respuestas de preguntas frecuentes. Lo usan la sección
// (src/components/Faq.jsx) y, en T14, el JSON-LD FAQPage: por eso devuelve
// strings sin JSX. La nota (`note`) va aparte y no forma parte de la respuesta.

import { formatEndDate, getActiveDiscount, getPlanPricing } from './discounts.js'

const joinList = (items) =>
  items.length > 1 ? `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}` : items[0]

// Respuesta de "¿Cuánto cuesta…?" armada con los precios de site.js y el
// descuento vigente en la fecha `now`.
export function getPriceAnswer(pricing, formatPrice, now = new Date()) {
  const { plans, promotion } = pricing
  const priced = plans.map((plan) => ({ plan, ...getPlanPricing(plan, promotion, now) }))
  const cheapest = priced.reduce((min, p) => (p.setup < min.setup ? p : min))
  const regularCheapest = plans.reduce((min, p) => (p.setup < min.setup ? p : min))

  const list = joinList(
    plans.map((plan) => `${plan.name} (${formatPrice(plan.setup)} + ${formatPrice(plan.monthly)} al mes)`),
  )
  const growth = 'y cualquiera se puede ampliar a tu medida.'
  const lead = `Desde ${formatPrice(cheapest.setup)} de instalación más ${formatPrice(cheapest.monthly)} al mes, más IVA`

  const active = priced.filter((p) => p.discount)
  if (active.length === 0) {
    return `${lead}. Hay ${plans.length === 3 ? 'tres' : plans.length} planes: ${list}, ${growth}`
  }

  // ¿Todos los planes con el mismo descuento? Entonces se describe con detalle.
  const discount = getActiveDiscount(cheapest.plan, promotion, now) ?? active[0].discount
  const shared = active.length === plans.length && active.every((p) => p.discount === discount)
  if (!shared) {
    const names = joinList(active.map((p) => p.plan.name))
    return `${lead}. Hay descuento vigente en ${names}. Precios regulares: ${list}, ${growth}`
  }

  const scope = discount.monthly ? 'en la instalación y la renta' : 'en la instalación'
  const label = discount.label ? `, promoción ${discount.label}` : ''
  const until = discount.endsAt ? `, hasta el ${formatEndDate(discount.endsAt)}` : ''
  const offer = `con ${discount.percent} % de descuento ${scope}${label}${until}`

  return `${lead}, ${offer} (precio regular desde ${formatPrice(regularCheapest.setup)}). Precios regulares: ${list}, ${growth}`
}

// Respuesta en texto plano de cualquier pregunta.
export function getFaqAnswer(item, { pricing, formatPrice, now = new Date() }) {
  if (item.answerFrom === 'pricing') return getPriceAnswer(pricing, formatPrice, now)
  return item.answer
}
