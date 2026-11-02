import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { SITE_URL, seo } from '../src/data/site.js'

const priorities = {
  '/': { changefreq: 'monthly', priority: '1.0' },
  '/terminos': { changefreq: 'yearly', priority: '0.3' },
  '/privacidad': { changefreq: 'yearly', priority: '0.3' },
  '/cookies': { changefreq: 'yearly', priority: '0.3' },
}

function buildUrl(path) {
  const full = path === '/' ? SITE_URL : `${SITE_URL}${path}`
  const { changefreq = 'monthly', priority = '0.5' } = priorities[path] || {}
  return [
    '  <url>',
    `    <loc>${full}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n')
}

export function generateSitemapXml() {
  const routes = Object.keys(seo.routes)
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(buildUrl),
    '</urlset>',
    '',
  ].join('\n')
}

export function writeSitemap(targetPath) {
  const absolute = resolve(targetPath)
  mkdirSync(dirname(absolute), { recursive: true })
  writeFileSync(absolute, generateSitemapXml(), 'utf8')
}

if (import.meta.url === `file://${process.argv[1]}`) {
  writeSitemap('public/sitemap.xml')
}
