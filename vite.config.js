import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  build: {
    outDir,
  },
})
