import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_URL, seo } from './src/data/site.js'
import { metaForPath, schemaForPath } from './src/seo/schemas.js'

const outDir = 'docs'

// GitHub Pages sirve 404.html en rutas desconocidas; al ser una copia de
// index.html, React Router resuelve /terminos y /privacidad al entrar directo.
const githubPagesSpaFallback = () => ({
  name: 'github-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
  },
})

const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Escribe en el HTML estático las metas y el JSON-LD de "/" desde src/data/site.js,
// para los rastreadores que no ejecutan JavaScript. En el navegador, src/seo/Seo.jsx
// los actualiza por ruta. Los precios y descuentos son los vigentes al compilar.
const seoHead = () => ({
  name: 'seo-head',
  transformIndexHtml(html) {
    const meta = metaForPath('/')
    const image = `${SITE_URL}${seo.ogImage}`
    const metaTag = (attrs) => ({ tag: 'meta', attrs, injectTo: 'head' })
    const json = JSON.stringify(schemaForPath('/')).replace(/</g, '\\u003c')
    return {
      html: html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`),
      tags: [
        metaTag({ name: 'description', content: meta.description }),
        { tag: 'link', attrs: { rel: 'canonical', href: meta.canonical }, injectTo: 'head' },
        metaTag({ name: 'theme-color', content: seo.themeColor }),
        metaTag({ property: 'og:type', content: 'website' }),
        metaTag({ property: 'og:site_name', content: seo.siteName }),
        metaTag({ property: 'og:locale', content: seo.locale }),
        metaTag({ property: 'og:title', content: meta.title }),
        metaTag({ property: 'og:description', content: meta.description }),
        metaTag({ property: 'og:url', content: meta.canonical }),
        metaTag({ property: 'og:image', content: image }),
        metaTag({ property: 'og:image:width', content: '1200' }),
        metaTag({ property: 'og:image:height', content: '630' }),
        metaTag({ property: 'og:image:alt', content: seo.ogImageAlt }),
        metaTag({ name: 'twitter:card', content: 'summary_large_image' }),
        metaTag({ name: 'twitter:title', content: meta.title }),
        metaTag({ name: 'twitter:description', content: meta.description }),
        metaTag({ name: 'twitter:image', content: image }),
        { tag: 'script', attrs: { type: 'application/ld+json', id: 'ld-json' }, children: json, injectTo: 'head' },
      ],
    }
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoHead(), githubPagesSpaFallback()],
  build: {
    outDir,
  },
})
