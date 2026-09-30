import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { metaForPath, schemaForPath } from './schemas'

// Actualiza <head> en cada cambio de ruta: título, descripción, canonical,
// robots, Open Graph/Twitter y JSON-LD. Sin dependencias: edita document.head.
// El HTML estático ya trae los valores de "/" (plugin seo-head de vite.config.js).

function upsert(selector, create, attrs) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement(create)
    document.head.appendChild(el)
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
  return el
}

const setMeta = (key, content, attr = 'name') => upsert(`meta[${attr}="${key}"]`, 'meta', { [attr]: key, content })
const remove = (selector) => document.head.querySelector(selector)?.remove()

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const meta = metaForPath(pathname)
    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('og:title', meta.title, 'property')
    setMeta('og:description', meta.description, 'property')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)

    if (meta.canonical) {
      upsert('link[rel="canonical"]', 'link', { rel: 'canonical', href: meta.canonical })
      setMeta('og:url', meta.canonical, 'property')
    } else {
      remove('link[rel="canonical"]')
      remove('meta[property="og:url"]')
    }

    if (meta.noindex) setMeta('robots', 'noindex, follow')
    else remove('meta[name="robots"]')

    const schema = schemaForPath(pathname)
    if (schema) {
      const script = upsert('script#ld-json', 'script', { id: 'ld-json', type: 'application/ld+json' })
      script.textContent = JSON.stringify(schema)
    } else {
      remove('script#ld-json')
    }
  }, [pathname])

  return null
}
