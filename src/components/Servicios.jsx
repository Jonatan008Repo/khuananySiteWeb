import React from 'react'

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Ecosistemas Web',
    description: 'Arquitecturas robustas con React, Next.js y Webflow, diseñadas para un rendimiento impecable y escalabilidad global.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'UI/UX de Autor',
    description: 'Diseño de interfaces donde la simetría y el ritmo visual del Art Déco guían al usuario hacia una conversión intuitiva.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Seguridad Elite',
    description: 'Implementación de protocolos de seguridad de grado bancario y optimización de velocidad para una presencia invulnerable.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-32 bg-[#001a0d]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Nuestra <span className="gold-gradient">Experticia</span></h2>
          <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-[10px] font-bold">Soluciones Digitales de Alto Nivel</p>
          <div className="w-32 h-[1px] bg-[#D4AF37]/50 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="service-card transition-transform duration-500 hover:-translate-y-2">
              <div className="deco-border h-full flex flex-col items-center text-center">
                <div className="mb-8 text-[#D4AF37]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#D4AF37] tracking-widest">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
