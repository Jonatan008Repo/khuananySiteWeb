import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="fade-in-up">
          <h2 className="text-[#D4AF37] text-xs tracking-[0.6em] mb-6 font-semibold uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Exclusividad &amp; Vanguardia</h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] text-white">
            Diseño <br /> <span className="gold-gradient italic">Magistral</span>
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed font-light">
            Fusionamos la herencia visual del <strong>Art Déco</strong> con la potencia tecnológica del mañana. Creamos identidades digitales para marcas que no aceptan lo ordinario.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#contacto" className="btn-deco uppercase">Solicitar Auditoría</a>
          </div>
        </div>
        <div className="relative fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="tech-frame border-[12px] border-[#004225]">
            <div className="top-left deco-corner"></div>
            <div className="top-right deco-corner"></div>
            <div className="bottom-left deco-corner"></div>
            <div className="bottom-right deco-corner"></div>
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
              alt="Oficina de lujo tecnológica"
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition duration-1000 opacity-70 hover:opacity-100 scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
