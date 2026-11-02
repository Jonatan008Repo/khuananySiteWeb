import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { about, contact, faq, formatMXN, hero, pricing, seo, services, studio } from '../src/data/site.js'
import { metaForPath, schemaForPath } from '../src/seo/schemas.js'
import { getFaqAnswer } from '../src/utils/faq.js'
import { writeSitemap } from './generate-sitemap.mjs'

const docsDir = resolve('docs')
const docsIndex = resolve(docsDir, 'index.html')
const docs404 = resolve(docsDir, '404.html')

const escapeHtml = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function getStaticContent(path) {
	if (path === '/') {
		const serviceItems = services.items
			.map((item) => `<li><strong>${escapeHtml(item.title)}:</strong> ${escapeHtml(item.description)}</li>`)
			.join('')
		const faqItems = faq.items
			.map((item) => {
				const answer = getFaqAnswer(item, { pricing, formatPrice: formatMXN })
				return `<li><strong>${escapeHtml(item.question)}</strong> ${escapeHtml(answer)}</li>`
			})
			.join('')

		return [
			'<main id="seo-static-content" aria-label="Contenido principal" style="max-width:960px;margin:0 auto;padding:24px 16px;color:#0d2430;background:#fff;font-family:Montserrat,Arial,sans-serif;line-height:1.65">',
			`<h1 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.2">${escapeHtml(hero.title)} ${escapeHtml(hero.titleAccent)}</h1>`,
			`<p>${escapeHtml(hero.lead)}</p>`,
			`<p><strong>${escapeHtml(hero.manifesto)}</strong></p>`,
			`<h2 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.25">${escapeHtml(about.title)} ${escapeHtml(about.titleAccent)}</h2>`,
			...about.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`),
			`<h2 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.25">${escapeHtml(services.title)} ${escapeHtml(services.titleAccent)}</h2>`,
			`<ul>${serviceItems}</ul>`,
			`<h2 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.25">${escapeHtml(faq.title)} ${escapeHtml(faq.titleAccent)}</h2>`,
			`<p>${escapeHtml(faq.lead)}</p>`,
			`<ul>${faqItems}</ul>`,
			`<h2 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.25">${escapeHtml(contact.title)} ${escapeHtml(contact.titleAccent)}</h2>`,
			`<p>${escapeHtml(contact.lead)}</p>`,
			`<p>Contacto: <a href="mailto:${escapeHtml(studio.email)}">${escapeHtml(studio.email)}</a></p>`,
			'</main>',
		].join('')
	}

	const route = seo.routes[path]
	return [
		'<main id="seo-static-content" aria-label="Contenido legal" style="max-width:960px;margin:0 auto;padding:24px 16px;color:#0d2430;background:#fff;font-family:Montserrat,Arial,sans-serif;line-height:1.65">',
		`<h1 style="font-family:'Playfair Display','Times New Roman',serif;line-height:1.2">${escapeHtml(route.breadcrumb)}</h1>`,
		`<p>${escapeHtml(route.description)}</p>`,
		'<p>Esta es la versión base para rastreadores. El contenido completo se muestra al cargar la aplicación.</p>',
		'</main>',
	].join('')
}

function replaceTag(html, pattern, replacement) {
	return pattern.test(html) ? html.replace(pattern, replacement) : html
}

const escapeRegExp = (s) => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

function setMeta(html, key, content, attr = 'name') {
	const pattern = new RegExp(`<meta\\s+${attr}=["']${escapeRegExp(key)}["'][^>]*>`, 'i')
	const replacement = `<meta ${attr}="${key}" content="${escapeHtml(content)}">`
	return pattern.test(html) ? html.replace(pattern, replacement) : html
}

function setCanonical(html, canonical) {
	const pattern = /<link\s+rel=["']canonical["'][^>]*>/i
	const replacement = `<link rel="canonical" href="${canonical}">`
	return pattern.test(html) ? html.replace(pattern, replacement) : html
}

function applyHead(html, path) {
	const meta = metaForPath(path)
	const schema = schemaForPath(path)
	const image = `https://www.khuanany.com/og-image.png`

	let next = html
	next = next.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`)
	next = setMeta(next, 'description', meta.description)

	if (meta.canonical) {
		next = setCanonical(next, meta.canonical)
		next = setMeta(next, 'og:url', meta.canonical, 'property')
	}

	next = setMeta(next, 'og:title', meta.title, 'property')
	next = setMeta(next, 'og:description', meta.description, 'property')
	next = setMeta(next, 'twitter:title', meta.title)
	next = setMeta(next, 'twitter:description', meta.description)
	next = setMeta(next, 'twitter:image', image)

	const ldPattern = /<script\s+type="application\/ld\+json"\s+id="ld-json">[\s\S]*?<\/script>/
	const ldScript = schema ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>` : ''
	next = ldPattern.test(next) ? next.replace(ldPattern, () => ldScript) : next

	return next
}

function buildRouteHtml(baseHtml, path) {
	let html = applyHead(baseHtml, path)
	const staticContent = getStaticContent(path)
	html = html.replace(/<h1\s+id="seo-fallback-h1"[^>]*>[\s\S]*?<\/h1>/, staticContent)
	return html
}

function writeRouteHtml(path, html) {
	if (path === '/') {
		writeFileSync(docsIndex, html, 'utf8')
		return
	}

	const routeFolder = resolve(docsDir, path.slice(1))
	mkdirSync(routeFolder, { recursive: true })
	writeFileSync(resolve(routeFolder, 'index.html'), html, 'utf8')
}

const baseHtml = readFileSync(docsIndex, 'utf8')
for (const path of Object.keys(seo.routes)) {
	writeRouteHtml(path, buildRouteHtml(baseHtml, path))
}

copyFileSync(docsIndex, docs404)

// Mantiene sitemap sincronizado entre fuente y salida publicada.
writeSitemap('public/sitemap.xml')
writeSitemap('docs/sitemap.xml')
