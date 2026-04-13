# KHUANANY — Digital Atelier de Lujo

Sitio web institucional de **Khuanany**, construido con React y Vite. Diseño inspirado en estética Art Déco con paleta racing green y dorado.

## Stack

- **React 18** — Componentes funcionales con hooks
- **Vite 5** — Build tool y dev server
- **Tailwind CSS** (CDN) — Utilidades de estilo
- **Google Fonts** — Playfair Display + Montserrat

## Inicio rápido

```bash
npm install
npm run dev
```

El servidor arranca en `http://localhost:5173`

## Estructura

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Componente raíz + scroll animations
├── styles.css            # Estilos Art Déco custom
└── components/
    ├── Navbar.jsx         # Navegación fija con smooth scroll
    ├── Hero.jsx           # Sección principal
    ├── Servicios.jsx      # Tarjetas de servicios
    ├── Portafolio.jsx     # Galería de proyectos
    ├── Contacto.jsx       # Formulario de contacto
    └── Footer.jsx         # Pie de página
```

## Build

```bash
npm run build
```

Los archivos de producción se generan en `dist/`.

## Licencia

© 2024 Khuanany. Todos los derechos reservados.