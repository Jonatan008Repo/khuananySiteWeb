import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ComplianceModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('cookies')
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollRef, setScrollRef] = useState(null)

  useEffect(() => {
    const complianceAccepted = localStorage.getItem('complianceAccepted')
    if (!complianceAccepted) {
      setTimeout(() => setIsVisible(true), 1500)
    }
  }, [])

  useEffect(() => {
    if (!scrollRef) return

    const handleScroll = () => {
      const scrollTop = scrollRef.scrollTop
      const scrollHeight = scrollRef.scrollHeight
      const clientHeight = scrollRef.clientHeight
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      setIsScrolled(isAtBottom)
    }

    scrollRef.addEventListener('scroll', handleScroll)
    return () => scrollRef.removeEventListener('scroll', handleScroll)
  }, [scrollRef])

  const handleAccept = () => {
    localStorage.setItem('complianceAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-deep-black border border-gold/30 rounded-lg max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl">
        {/* Tabs */}
        <div className="border-b border-gold/20 p-6">
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => {
                setActiveTab('cookies')
                setIsScrolled(false)
              }}
              className={`py-2 px-4 font-semibold tracking-deco text-sm transition ${
                activeTab === 'cookies'
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gray-400 border-b-2 border-transparent hover:text-gold'
              }`}
            >
              Cookies
            </button>
            <button
              onClick={() => {
                setActiveTab('terms')
                setIsScrolled(false)
              }}
              className={`py-2 px-4 font-semibold tracking-deco text-sm transition ${
                activeTab === 'terms'
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gray-400 border-b-2 border-transparent hover:text-gold'
              }`}
            >
              Términos
            </button>
          </div>
          <p className="text-gray-400 text-sm font-light">
            {activeTab === 'cookies'
              ? 'Gestión de cookies y privacidad'
              : 'Términos y condiciones de uso'}
          </p>
        </div>

        {/* Content */}
        <div
          ref={setScrollRef}
          className="overflow-y-auto flex-1 p-6"
        >
          {activeTab === 'cookies' && (
            <div className="text-gray-300 text-sm font-light space-y-4 leading-relaxed">
              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">Política de Cookies</h3>
                <p>
                  En KHUANANY utilizamos cookies para mejorar tu experiencia de navegación, recordar tus preferencias y analizar el uso del sitio. Las cookies son pequeños archivos que se almacenan en tu dispositivo.
                </p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">Tipos de Cookies</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cookies Necesarias:</strong> Esenciales para el funcionamiento del sitio</li>
                  <li><strong>Cookies de Análisis:</strong> Nos ayudan a entender cómo usas el sitio</li>
                  <li><strong>Cookies de Preferencias:</strong> Recuerdan tu configuración y preferencias</li>
                  <li><strong>Cookies de Marketing:</strong> Personalizan el contenido y los anuncios</li>
                </ul>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">Control de Cookies</h3>
                <p>
                  Puedes controlar y/o eliminar las cookies usando la configuración de tu navegador. Rechazar las cookies puede afectar tu experiencia en el sitio.
                </p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">Privacidad de Datos</h3>
                <p>
                  Tus datos personales se procesan conforme a nuestra Política de Privacidad. Protegemos tu información con medidas de seguridad de la industria.
                </p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">Actualizaciones</h3>
                <p>
                  Esta política se actualiza periódicamente. Te notificaremos de cambios significativos publicando la versión actualizada en nuestro sitio.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="text-gray-300 text-sm font-light space-y-4 leading-relaxed">
              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">1. Aceptación de Términos</h3>
                <p>Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones. Si no estás de acuerdo con alguna parte, no debes utilizar este sitio.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">2. Uso Licenciado</h3>
                <p>Se te concede una licencia limitada, no exclusiva y revocable para acceder y usar este sitio web únicamente para propósitos personales y no comerciales.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">3. Limitación de Responsabilidad</h3>
                <p>En ningún caso KHUANANY será responsable por daños indirectos, incidentales, especiales o consecuentes que surjan de tu uso de este sitio web o los servicios ofrecidos.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">4. Propiedad Intelectual</h3>
                <p>Todos los contenidos, diseños, imágenes y textos en este sitio web son propiedad de KHUANANY o sus proveedores de contenido licenciado y están protegidos por leyes de derechos de autor.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">5. Cambios en los Términos</h3>
                <p>KHUANANY se reserva el derecho de modificar estos términos en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en el sitio.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">6. Privacidad y Datos</h3>
                <p>Tu privacidad es importante para nosotros. Consulta nuestra Política de Privacidad para entender cómo recopilamos, usamos y protegemos tu información personal.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">7. Cumplimiento Legal</h3>
                <p>Este sitio cumple con la Ley de Cookies y regulaciones de privacidad aplicables. Nos comprometemos a proteger tus derechos digitales.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">8. Ley Aplicable</h3>
                <p>Estos términos y condiciones se rigen por las leyes aplicables y están sujetos a la jurisdicción competente.</p>
              </section>

              <section>
                <h3 className="text-gold font-semibold mb-2 tracking-deco">9. Contacto</h3>
                <p>Si tienes preguntas sobre estos términos, contáctanos a través de nuestro formulario de contacto o envía un correo a info@khuanany.com</p>
              </section>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gold/20 p-6 bg-deep-black/80">
          <div className="flex gap-3 mb-3">
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 px-4 py-2.5 text-sm border border-gold/50 text-gold/70 hover:text-gold hover:border-gold transition rounded font-medium tracking-deco"
            >
              Cerrar
            </button>
            <button
              onClick={handleAccept}
              disabled={!isScrolled}
              className={`flex-1 px-4 py-2.5 text-sm rounded font-semibold tracking-deco transition ${
                isScrolled
                  ? 'bg-gold text-deep-black hover:bg-soft-gold cursor-pointer'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
              }`}
            >
              {isScrolled ? 'Aceptar' : 'Desplázate para aceptar'}
            </button>
          </div>
          <p className="text-gray-500 text-xs text-center font-light">
            También puedes ver la{' '}
            <Link
              to="/privacidad"
              className="text-gold hover:text-soft-gold transition"
              onClick={() => setIsVisible(false)}
            >
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
