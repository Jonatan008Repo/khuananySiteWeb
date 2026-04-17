import React from 'react'

export default function Contacto() {
  return (
    <section id="contacto" className="py-32 bg-deep-black">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Hablemos de su <span className="gold-gradient">Visión</span></h2>
            <p className="text-gray-400 font-light mb-10 leading-relaxed">
              Estamos listos para transformar sus ideas en una realidad digital de prestigio. Nuestro equipo de consultores le contactará en menos de 24 horas.
            </p>
            <div className="space-y-4 text-gold text-sm font-medium tracking-wide">
              <p className="flex items-center">
                <span className="w-8 h-px bg-gold mr-4"></span>
                <a href="mailto:concierge@khuanany.com" className="hover:text-soft-gold transition">
                  jonatan-008@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
