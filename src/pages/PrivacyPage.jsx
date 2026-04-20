import React from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-deep-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl deco-font text-gold mb-6 tracking-widest">
            Política de Privacidad
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-gold via-soft-gold to-gold mb-6"></div>
          <p className="text-gray-400 text-lg font-light">
            Última actualización: Abril 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              1. Introducción
            </h2>
            <p>
              En KHUANANY, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos tu información cuando visitas nuestro sitio web (www.khuanany.com).
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              2. Información que Recopilamos
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-soft-gold font-semibold mb-2">Información Proporcionada Directamente</h3>
                <p>
                  Cuando contactas con nosotros a través del formulario de contacto, recopilamos tu nombre, correo electrónico, número de teléfono y mensaje. Esta información se utiliza exclusivamente para responder a tu consulta.
                </p>
              </div>
              <div>
                <h3 className="text-soft-gold font-semibold mb-2">Información Recopilada Automáticamente</h3>
                <p>
                  Mediante cookies y tecnología similar, recopilamos información sobre tu navegación, incluida tu dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia y fuente de referencia. Esto nos ayuda a mejorar la experiencia del usuario.
                </p>
              </div>
              <div>
                <h3 className="text-soft-gold font-semibold mb-2">Información Analítica</h3>
                <p>
                  Utilizamos Google Analytics y herramientas similares para entender cómo interactúan los usuarios con nuestro sitio. Estos datos no incluyen información personalmente identificable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              3. Cómo Utilizamos Tu Información
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Responder a tus consultas y solicitudes de contacto</li>
              <li>Mejorar y optimizar la experiencia del usuario en nuestro sitio</li>
              <li>Analizar patrones de uso y tendencias</li>
              <li>Personalizar contenido según tus preferencias</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
              <li>Prevenir fraude y garantizar la seguridad del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              4. Cookies y Tecnologías Similares
            </h2>
            <p className="mb-4">
              Utilizamos cookies para mejorar tu experiencia en nuestro sitio:
            </p>
            <div className="space-y-3 ml-4">
              <div>
                <strong className="text-soft-gold">Cookies Técnicas:</strong>
                <p>Necesarias para el funcionamiento del sitio (sesión, seguridad).</p>
              </div>
              <div>
                <strong className="text-soft-gold">Cookies Analíticas:</strong>
                <p>Nos permiten medir y analizar el comportamiento de los usuarios.</p>
              </div>
              <div>
                <strong className="text-soft-gold">Cookies de Preferencias:</strong>
                <p>Guardan tus preferencias y configuración personalizada.</p>
              </div>
              <div>
                <strong className="text-soft-gold">Cookies de Marketing:</strong>
                <p>Ayudan a personalizar publicidad y contenido.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              5. Compartición de Datos
            </h2>
            <p>
              No compartimos tus datos personales con terceros, excepto en los siguientes casos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Con proveedores de servicios que nos ayudan a operar el sitio (hospedaje, análisis)</li>
              <li>Cuando sea requerido por ley o para proteger derechos legales</li>
              <li>En caso de fusión o venta de la empresa (con aviso previo)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              6. Seguridad de Datos
            </h2>
            <p>
              Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas incluyen encriptación SSL, firewalls y controles de acceso restringidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              7. Retención de Datos
            </h2>
            <p>
              Retenemos tu información personal solo por el tiempo necesario para cumplir con los propósitos descritos en esta política o según lo requerido por ley. Los datos de contacto se conservan por un máximo de 2 años a menos que solicites su eliminación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              8. Tus Derechos
            </h2>
            <p className="mb-4">Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Acceder</strong> a tus datos personales</li>
              <li><strong>Rectificar</strong> información inexacta</li>
              <li><strong>Eliminar</strong> tus datos (derecho al olvido)</li>
              <li><strong>Restringir</strong> el procesamiento de tus datos</li>
              <li><strong>Portabilidad</strong> de tus datos</li>
              <li><strong>Oponerme</strong> al procesamiento de mis datos</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contáctanos en info@khuanany.com con tu solicitud detallada.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              9. Menores de Edad
            </h2>
            <p>
              Nuestro sitio no está dirigido a menores de 13 años. No recopilamos información de menores de 13 años de manera intencional. Si descubrimos que hemos recopilado información de un menor, la eliminaremos inmediatamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              10. Enlaces Externos
            </h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Te recomendamos revisar sus políticas de privacidad antes de proporcionar información personal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              11. Actualizaciones de esta Política
            </h2>
            <p>
              Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos de cambios significativos publicando la versión actualizada en esta página. Verificando regularmente, asegúrate de estar informado sobre cómo protegemos tu información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl deco-font text-gold tracking-widest mb-4">
              12. Contacto
            </h2>
            <p>
              Si tienes preguntas, inquietudes o solicitudes relacionadas con esta Política de Privacidad, contáctanos:
            </p>
            <div className="mt-4 ml-4 space-y-2">
              <p>
                <strong className="text-soft-gold">Email:</strong> jonatan-008@outlook.com
              </p>
              <p>
                <strong className="text-soft-gold">Sitio Web:</strong> www.khuanany.com
              </p>
            </div>
          </section>

          <section className="border-t border-gold/10 pt-8">
            <p className="text-gray-500 text-sm">
              Esta Política de Privacidad entra en vigor a partir de abril de 2026 y se aplica a todos los visitantes y usuarios de www.khuanany.com.
            </p>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <Link
            to="/"
            className="inline-block btn-deco"
          >
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
