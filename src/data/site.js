// Fuente única de verdad del sitio: textos visibles, planes, preguntas y datos
// de la entidad. Los componentes y el JSON-LD (src/seo/schemas.js) leen de aquí,
// para que lo que ve el visitante y lo que leen los buscadores nunca difiera.

export const SITE_URL = 'https://www.khuanany.com'

export const formatMXN = (amount) =>
  `$${amount.toLocaleString('es-MX')} MXN`

export const studio = {
  name: 'Khuanany',
  tagline: 'Atelier digital',
  foundingYear: 2024,
  city: 'Puebla',
  region: 'Puebla',
  country: 'México',
  countryCode: 'MX',
  areaServed: 'Todo México, atención remota',
  email: 'jonatan-008@outlook.com',
  currency: 'MXN',
  responseTime: 'Menos de 24 horas hábiles',
  auditDays: 4,
  location: 'Puebla, México',
}

export const auditFormUrl =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAIBAAF3FWtUQVk0Wk9VMldNVDlYSDZXRjZCRzdVSUZXNy4u'
export const auditFormEmbedUrl = `${auditFormUrl}&embed=true`

export const nav = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'tarifas', label: 'Tarifas' },
  { id: 'obra', label: 'Obra' },
  { id: 'respuestas', label: 'Respuestas' },
  { id: 'contacto', label: 'Contacto' },
]

export const cta = {
  audit: 'Solicitar auditoría gratuita',
  auditShort: 'Solicitar auditoría',
  pricing: 'Ver tarifas',
}

export const hero = {
  eyebrow: 'Atelier digital · Puebla',
  title: 'Sitios web con acabado de atelier',
  titleAccent: 'para negocios que quieren destacar',
  lead: 'Diseñamos, publicamos y mantenemos el sitio de tu negocio. Listo desde 5 días hábiles, con WhatsApp, Google Maps y cambios cada mes según tu plan.',
  facts: [
    { label: 'Desde', value: '$2,250 MXN + IVA' },
    { label: 'Entrega', value: 'Desde 5 días hábiles' },
    { label: 'Base', value: 'Puebla, México' },
  ],
  imageAlt: 'Composición Art Déco en oro y verde, sello visual de Khuanany',
}

export const about = {
  eyebrow: 'Quiénes somos',
  title: 'Khuanany',
  titleAccent: 'en breve',
  paragraphs: [
    'Khuanany es un atelier de diseño y desarrollo web fundado en 2024 en Puebla, México. Diseñamos, publicamos y mantenemos sitios para negocios que quieren verse bien y que sus clientes los encuentren, con planes mensuales y sin letra pequeña.',
    'Cada proyecto lo dirige la misma persona que lo diseña, de la auditoría inicial a la publicación.',
  ],
  factsTitle: 'Ficha del estudio',
  facts: [
    { label: 'Fundado', value: '2024' },
    { label: 'Sede', value: 'Puebla, México' },
    { label: 'Atención', value: 'Todo México, remota' },
    { label: 'Planes', value: 'Desde $2,250 MXN + IVA' },
    { label: 'Entrega', value: 'De 5 a 12 días hábiles' },
    { label: 'Contacto', value: 'jonatan-008@outlook.com', href: 'mailto:jonatan-008@outlook.com' },
  ],
}

export const services = {
  eyebrow: 'Lo que hacemos',
  title: 'Tres servicios,',
  titleAccent: 'sin relleno',
  items: [
    {
      id: 'sitio',
      number: '01',
      icon: 'globe',
      title: 'Tu sitio, a medida',
      description: 'Diseño de autor con la geometría del Art Déco, pensado primero para el celular y listo en días, no en meses.',
      bullets: ['Diseño adaptado a celular', 'Menú, catálogo o galería según tu negocio', 'Listo desde 5 días hábiles'],
    },
    {
      id: 'visibilidad',
      number: '02',
      icon: 'layout',
      title: 'Visible donde te buscan',
      description: 'Que tus clientes te encuentren en Google y te escriban con un toque.',
      bullets: ['SEO básico desde el primer día', 'Tu ubicación en Google Maps', 'Botón directo a WhatsApp'],
    },
    {
      id: 'mantenimiento',
      number: '03',
      icon: 'shield',
      title: 'Siempre al día',
      description: 'Nos encargamos de que tu sitio siga en línea, seguro y actualizado mientras tú atiendes tu negocio.',
      bullets: ['Dominio y hosting incluidos', 'Certificado de seguridad (HTTPS)', 'Cambios incluidos cada mes'],
    },
  ],
}

export const pricing = {
  eyebrow: 'Tarifas',
  title: 'Tarifas,',
  titleAccent: 'sin letra pequeña',
  lead: 'Un pago de instalación y una renta mensual que cubre dominio, hosting y cambios. Sin costos sorpresa.',
  taxNote: 'Precios en pesos mexicanos, más IVA.',
  recommendedLabel: 'Recomendado',
  setupLabel: 'instalación',
  monthlyLabel: 'al mes',
  deliveryLabel: 'Entrega en',
  plans: [
    {
      id: 'esencial',
      numeral: 'I',
      name: 'Esencial',
      setup: 2250,
      monthly: 750,
      deliveryDays: 5,
      recommended: true,
      includes: ['Landing de 1 página', 'Dominio y hosting', 'Botón de WhatsApp', '1 cambio al mes'],
    },
    {
      id: 'negocio',
      numeral: 'II',
      name: 'Negocio',
      setup: 3750,
      monthly: 1350,
      deliveryDays: 8,
      recommended: false,
      includes: ['Sitio de 4 páginas', 'Todo lo del plan Esencial', 'Google Maps y SEO básico', '3 cambios al mes'],
    },
    {
      id: 'pro',
      numeral: 'III',
      name: 'Pro',
      setup: 6000,
      monthly: 2250,
      deliveryDays: 12,
      recommended: false,
      includes: ['Sitio completo', 'Todo lo del plan Negocio', 'Catálogo y formularios', 'Cambios ilimitados'],
    },
  ],
  extrasTitle: 'Extras',
  extras: [
    { id: 'liberacion', name: 'Liberación del sitio', price: 9000, note: 'Te quedas con el sitio en propiedad y dejas de pagar renta.' },
    { id: 'urgente', name: 'Cambio urgente fuera del plan', price: 450 },
    { id: 'fotos', name: 'Sesión de fotos del negocio', price: 1200 },
  ],
  growthNote: '¿Necesitas más? Puedes subir de plan cuando quieras o ampliar tu paquete con páginas, cambios o funciones extra. Lo cotizamos a tu medida.',
}

export const portfolio = {
  eyebrow: 'Obra digital',
  title: 'Obra',
  titleAccent: 'digital',
  lead: 'Nuestro trabajo más reciente, en producción.',
  projects: [
    {
      id: 'galeria-de-crepas',
      name: 'Galería de Crepas',
      tag: 'Restaurante',
      description: 'Sitio web para un restaurante de crepas, con menú visual que los clientes consultan desde el celular antes de pedir.',
      result: 'Más presencia en internet: el restaurante ahora aparece con sitio y menú propios.',
      url: 'https://www.galeriadecrepas.com/home',
      linkLabel: 'Ver sitio en vivo',
      // Captura pendiente: subir a public/obra/galeria-de-crepas.webp (1200×800)
      // y cambiar imagePending a false.
      image: '/obra/galeria-de-crepas.webp',
      imageAlt: 'Página de inicio del sitio web de Galería de Crepas con su menú visual',
      imagePending: true,
    },
  ],
}

export const faq = {
  eyebrow: 'Respuestas',
  title: 'Preguntas',
  titleAccent: 'frecuentes',
  lead: 'Cada respuesta empieza con lo esencial. Así la lee un cliente con prisa, y así la cita un buscador.',
  items: [
    {
      id: 'que-es',
      question: '¿Qué es Khuanany?',
      answer: 'Khuanany es un atelier de diseño y desarrollo web fundado en 2024 en Puebla, México. Creamos, publicamos y mantenemos sitios web para negocios de todo el país, con acabado cuidado y planes mensuales accesibles.',
    },
    {
      id: 'costo',
      question: '¿Cuánto cuesta un sitio web con Khuanany?',
      answer: 'Desde $2,250 MXN de instalación más $750 MXN al mes, más IVA. Hay tres planes: Esencial ($2,250 + $750 al mes), Negocio ($3,750 + $1,350 al mes) y Pro ($6,000 + $2,250 al mes), y cualquiera se puede ampliar a tu medida.',
    },
    {
      id: 'plazo',
      question: '¿Cuánto tarda un proyecto?',
      answer: 'Entre 5 y 12 días hábiles, según el plan: Esencial en 5, Negocio en 8 y Pro en 12. El plazo corre desde que recibimos tus textos, fotos y logotipo.',
    },
    {
      id: 'renta',
      question: '¿Qué incluye la renta mensual y el sitio es mío?',
      answer: 'La renta cubre dominio, hosting, certificado de seguridad y los cambios de tu plan cada mes. Si prefieres quedarte con el sitio en propiedad y dejar de pagar renta, la liberación del sitio cuesta $9,000 MXN más IVA.',
    },
    {
      id: 'cobertura',
      question: '¿Atienden fuera de Puebla?',
      answer: 'Sí. Trabajamos con negocios de todo México de forma remota, por correo y videollamada, y facturamos en pesos mexicanos.',
    },
    {
      id: 'auditoria',
      question: '¿Qué incluye la auditoría gratuita?',
      answer: 'Una revisión escrita de tu sitio actual, o de tu presencia en internet si aún no tienes sitio, con lo que conviene mejorar en velocidad, visibilidad en Google y contacto con clientes. La recibes en 4 días hábiles y no te obliga a contratar.',
    },
  ],
}

export const contact = {
  eyebrow: 'Contacto',
  title: 'Hablemos de',
  titleAccent: 'tu negocio',
  lead: 'Cuéntanos qué necesitas. Respondemos en menos de 24 horas hábiles con una primera lectura de tu proyecto, no con un mensaje automático.',
  lines: [
    { id: 'email', value: 'jonatan-008@outlook.com', href: 'mailto:jonatan-008@outlook.com' },
    { id: 'location', value: 'Puebla, México · atención remota en todo el país' },
  ],
  panelTitle: 'Solicitar auditoría',
  panelText: 'Responde un formulario breve y en 4 días hábiles recibes la revisión escrita de tu sitio, sin compromiso.',
  privacyNote: 'Al enviar el formulario aceptas nuestra',
  privacyLinkLabel: 'política de privacidad',
  modalTitle: 'Solicitar auditoría gratuita',
  modalFallback: 'Abrir el formulario en otra pestaña',
  modalClose: 'Cerrar',
}

export const legalLinks = [
  { to: '/terminos', label: 'Términos y condiciones' },
  { to: '/privacidad', label: 'Política de privacidad' },
  { to: '/cookies', label: 'Cookies' },
]

export const footer = {
  description: 'Atelier digital de diseño web en Puebla. Acabado Art Déco y planes accesibles, desde 2024.',
  columns: { studio: 'Estudio', legal: 'Legal', contact: 'Contacto' },
  copyright: `© ${new Date().getFullYear()} Khuanany · www.khuanany.com`,
}

export const seo = {
  defaultTitle: 'Khuanany | Diseño web en Puebla para negocios, desde $2,250 MXN',
  defaultDescription: 'Atelier de diseño web en Puebla. Sitios con acabado Art Déco para negocios de todo México, listos desde 5 días hábiles, con WhatsApp, Google Maps y planes desde $2,250 MXN.',
  routes: {
    '/terminos': { title: 'Términos y condiciones | Khuanany', description: 'Términos y condiciones de uso del sitio y los servicios de Khuanany, atelier de diseño web en Puebla, México.' },
    '/privacidad': { title: 'Política de privacidad | Khuanany', description: 'Cómo Khuanany recopila, usa y protege tus datos personales.' },
    '/cookies': { title: 'Política de cookies | Khuanany', description: 'Qué cookies y datos guarda el sitio de Khuanany, para qué sirven y cómo cambiar tu decisión.' },
  },
}
