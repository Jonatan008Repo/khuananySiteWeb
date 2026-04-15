import React from 'react'

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000',
    alt: 'Colaboración creativa',
    title: 'The Heritage Club',
    tag: 'CORPORATIVO',
    description: 'Rediseño de plataforma interna para gestión de activos de lujo con una interfaz intuitiva basada en proporciones áureas.',
  },
  {
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000',
    alt: 'Diseño de interfaz móvil',
    title: 'Vanguard Mobile AI',
    tag: 'WEB APP',
    description: 'Aplicación web progresiva orientada al análisis de datos financieros con estética neo-déco.',
  },
]

export default function Portafolio() {
  return (
    <section id="portafolio" className="py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-7xl font-bold leading-tight">Obra <br /><span className="gold-gradient">Digital</span></h2>
            <p className="text-gray-500 mt-6 uppercase tracking-deco-lg text-2xs font-bold">Un legado de innovación visual</p>
          </div>
          <div className="flex space-x-4">
            <button className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-deep-black transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-deep-black transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden deco-border" style={{ padding: 0 }}>
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-portfolio object-cover transition duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-2xl font-bold text-soft-gold tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{project.title}</h4>
                  <span className="text-2xs tracking-deco-sm font-bold text-gold border-b border-gold/50 pb-1">{project.tag}</span>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
