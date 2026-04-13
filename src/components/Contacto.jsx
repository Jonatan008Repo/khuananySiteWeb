import React, { useState } from 'react'

export default function Contacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', proyecto: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section id="contacto" className="py-32 bg-[#00140a]">
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Hablemos de su <span className="gold-gradient">Visión</span></h2>
            <p className="text-gray-400 font-light mb-10 leading-relaxed">
              Estamos listos para transformar sus ideas en una realidad digital de prestigio. Nuestro equipo de consultores le contactará en menos de 24 horas.
            </p>
            <div className="space-y-4 text-[#D4AF37] text-sm font-medium tracking-wide">
              <p className="flex items-center"><span className="w-8 h-[1px] bg-[#D4AF37] mr-4"></span> concierge@khuanany.com</p>
              <p className="flex items-center"><span className="w-8 h-[1px] bg-[#D4AF37] mr-4"></span> +52 55 1234 5678</p>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="deco-border bg-[#002d1a]/40 p-10">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="NOMBRE COMPLETO"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 px-0 focus:border-[#D4AF37] outline-none transition text-xs tracking-[0.2em] font-medium placeholder:text-[#D4AF37]/40 text-white"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="EMAIL CORPORATIVO"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 px-0 focus:border-[#D4AF37] outline-none transition text-xs tracking-[0.2em] font-medium placeholder:text-[#D4AF37]/40 text-white"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    rows={3}
                    name="proyecto"
                    placeholder="DESCRIBA SU PROYECTO"
                    value={formData.proyecto}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#D4AF37]/30 py-3 px-0 focus:border-[#D4AF37] outline-none transition text-xs tracking-[0.2em] font-medium placeholder:text-[#D4AF37]/40 text-white resize-none"
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button type="submit" className="btn-deco w-full">ENVIAR CONSULTA</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
