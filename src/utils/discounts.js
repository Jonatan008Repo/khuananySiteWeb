// Descuentos de tarifas. Configuración en src/data/site.js (pricing.promotion
// y el campo `discount` de cada plan). Fechas en hora de Ciudad de México.

const TIME_ZONE = 'America/Mexico_City'
const MX_OFFSET = '-06:00' // México no usa horario de verano desde 2022

const startOfDay = (date) => new Date(`${date}T00:00:00${MX_OFFSET}`)
const endOfDay = (date) => new Date(`${date}T23:59:59${MX_OFFSET}`)

const isValid = (discount) =>
  Boolean(discount) && Number.isFinite(discount.percent) && discount.percent > 0 && discount.percent < 100

const isActive = (discount, now) =>
  isValid(discount) &&
  !(discount.startsAt && now < startOfDay(discount.startsAt)) &&
  !(discount.endsAt && now > endOfDay(discount.endsAt))

// Descuento vigente del plan: el propio si está vigente; si no, la promoción
// general si está vigente; si ninguno, null.
export function getActiveDiscount(plan, promotion, now = new Date()) {
  if (isActive(plan.discount, now)) return plan.discount
  if (isActive(promotion, now)) return promotion
  return null
}

export const applyDiscount = (price, percent) => Math.round(price * (1 - percent / 100))

// "Hasta el 31 de octubre"
export const formatEndDate = (date) =>
  endOfDay(date).toLocaleDateString('es-MX', { day: 'numeric', month: 'long', timeZone: TIME_ZONE })

// Precios del plan con el descuento aplicado (si hay uno vigente).
export function getPlanPricing(plan, promotion, now = new Date()) {
  const discount = getActiveDiscount(plan, promotion, now)
  if (!discount) return { discount: null, setup: plan.setup, monthly: plan.monthly }
  return {
    discount,
    setup: applyDiscount(plan.setup, discount.percent),
    monthly: discount.monthly ? applyDiscount(plan.monthly, discount.percent) : plan.monthly,
  }
}

// Precio de instalación más bajo vigente entre todos los planes (con descuento
// si lo hay). Se usa en los "Desde …" de la portada y la ficha del estudio.
export function getFromPrice(pricing, now = new Date()) {
  const prices = pricing.plans.map((plan) => getPlanPricing(plan, pricing.promotion, now).setup)
  const regular = Math.min(...pricing.plans.map((plan) => plan.setup))
  const price = Math.min(...prices)
  return { price, regular, discounted: price < regular }
}

// Texto de un dato con `priceTemplate` ("{price} + IVA") usando el precio
// "Desde" vigente; si no tiene plantilla, devuelve su `value` tal cual.
export function resolveFactValue(fact, pricing, formatPrice, now = new Date()) {
  if (!fact.priceTemplate) return fact.value
  return fact.priceTemplate.replace('{price}', formatPrice(getFromPrice(pricing, now).price))
}
