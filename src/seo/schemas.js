// JSON-LD (schema.org) generado desde src/data/site.js. Una sola fuente de verdad:
// lo que leen buscadores y modelos coincide con el texto visible del sitio.
// Se usa en el navegador (Seo.jsx) y al compilar (vite.config.js), por eso los
// imports llevan extensión .js (Node ESM).

import { SITE_URL, about, faq, formatMXN, pricing, seo, services, studio } from '../data/site.js'
import { getPlanPricing } from '../utils/discounts.js'
import { getFaqAnswer } from '../utils/faq.js'

const BUSINESS_ID = `${SITE_URL}/#negocio`
const WEBSITE_ID = `${SITE_URL}/#sitio`
const abs = (path) => `${SITE_URL}${path}`

// Offer de un plan. Con descuento vigente, `price` es el precio con descuento,
// `priceValidUntil` su último día y el precio regular va como ListPrice.
function planOffer(plan, now) {
  const current = getPlanPricing(plan, pricing.promotion, now)
  const specs = [
    {
      '@type': 'UnitPriceSpecification',
      name: 'Instalación',
      price: current.setup,
      priceCurrency: studio.currency,
      valueAddedTaxIncluded: false,
    },
    {
      '@type': 'UnitPriceSpecification',
      name: 'Renta mensual',
      price: current.monthly,
      priceCurrency: studio.currency,
      valueAddedTaxIncluded: false,
      referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
    },
  ]
  if (current.discount) {
    specs.push({
      '@type': 'UnitPriceSpecification',
      name: 'Instalación (precio regular)',
      priceType: 'https://schema.org/ListPrice',
      price: plan.setup,
      priceCurrency: studio.currency,
      valueAddedTaxIncluded: false,
    })
  }
  return {
    '@type': 'Offer',
    name: `Plan ${plan.name}`,
    description: `${plan.includes.join(', ')}. Entrega en ${plan.deliveryDays} días hábiles.`,
    price: current.setup,
    priceCurrency: studio.currency,
    ...(current.discount?.endsAt ? { priceValidUntil: current.discount.endsAt } : {}),
    priceSpecification: specs,
    availability: 'https://schema.org/InStock',
    areaServed: { '@type': 'Country', name: studio.country },
    url: abs('/#tarifas'),
  }
}

export function businessSchema(now = new Date()) {
  const setups = pricing.plans.map((p) => getPlanPricing(p, pricing.promotion, now).setup)
  return {
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: studio.name,
    url: abs('/'),
    email: studio.email,
    description: about.paragraphs[0],
    foundingDate: String(studio.foundingYear),
    image: abs(seo.ogImage),
    logo: abs(seo.ogImage),
    address: {
      '@type': 'PostalAddress',
      addressLocality: studio.city,
      addressRegion: studio.region,
      addressCountry: studio.countryCode,
    },
    areaServed: { '@type': 'Country', name: studio.country },
    knowsLanguage: 'es',
    currenciesAccepted: studio.currency,
    priceRange: `${formatMXN(Math.min(...setups))} – ${formatMXN(Math.max(...pricing.plans.map((p) => p.setup)))}`,
    makesOffer: services.items.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.title, description: s.description },
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planes de sitio web',
      itemListElement: pricing.plans.map((plan) => planOffer(plan, now)),
    },
  }
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: seo.siteName,
    inLanguage: 'es-MX',
    publisher: { '@id': BUSINESS_ID },
  }
}

// Texto principal de cada respuesta, sin las notas en letra chica.
export function faqSchema(now = new Date()) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#preguntas`,
    mainEntity: faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: getFaqAnswer(item, { pricing, formatPrice: formatMXN, now }),
      },
    })),
  }
}

function legalPageSchema(path) {
  const route = seo.routes[path]
  return [
    {
      '@type': 'WebPage',
      '@id': `${abs(path)}#pagina`,
      url: abs(path),
      name: route.title,
      description: route.description,
      inLanguage: 'es-MX',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: abs('/') },
        { '@type': 'ListItem', position: 2, name: route.breadcrumb, item: abs(path) },
      ],
    },
  ]
}

// Documento JSON-LD completo para una ruta (null = no publicar datos, p. ej. 404).
export function schemaForPath(path, now = new Date()) {
  if (path === '/') {
    return { '@context': 'https://schema.org', '@graph': [businessSchema(now), websiteSchema(), faqSchema(now)] }
  }
  if (seo.routes[path]) {
    return { '@context': 'https://schema.org', '@graph': [businessSchema(now), websiteSchema(), ...legalPageSchema(path)] }
  }
  return null
}

// Metadatos de <head> para una ruta.
export function metaForPath(path) {
  const route = seo.routes[path]
  if (!route) {
    return { title: seo.notFound.title, description: seo.notFound.description, canonical: null, noindex: true }
  }
  return {
    title: route.title ?? seo.defaultTitle,
    description: route.description ?? seo.defaultDescription,
    canonical: abs(path),
    noindex: false,
  }
}
