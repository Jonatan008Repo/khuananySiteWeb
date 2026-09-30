import { Link } from 'react-router-dom'
import { LEGAL_UPDATED, studio } from '../data/site'

const h2 = 'text-2xl deco-font text-gold tracking-widest mb-4'
const h3 = 'text-soft-gold font-semibold mb-2'
const link = 'text-gold underline underline-offset-2 hover:text-soft-gold'

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
          <p className="text-gray-400 text-lg font-light">Última actualización: {LEGAL_UPDATED}</p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-gray-300 font-light leading-relaxed">
          <section>
            <h2 className={h2}>1. Quiénes somos</h2>
            <p>
              Khuanany es un estudio de diseño y desarrollo web con sede en {studio.location}. Esta política explica qué datos
              personales tratamos cuando visitas www.khuanany.com o nos solicitas una auditoría, para qué los usamos y cómo
              puedes ejercer tus derechos. Para cualquier asunto de privacidad escríbenos a{' '}
              <a href={`mailto:${studio.email}`} className={link}>{studio.email}</a>.
            </p>
          </section>

          <section>
            <h2 className={h2}>2. Datos que tratamos</h2>
            <div className="space-y-4">
              <div>
                <h3 className={h3}>Los que tú nos envías</h3>
                <p>
                  Cuando solicitas una auditoría usamos un formulario de Microsoft Forms. Recibimos los datos que decidas
                  escribir en él (por ejemplo, tu nombre, tu correo y la descripción de tu proyecto). Si nos escribes por
                  correo, recibimos tu dirección y el contenido del mensaje. Los usamos solo para responderte y preparar la
                  auditoría o la cotización que pediste.
                </p>
              </div>
              <div>
                <h3 className={h3}>Medición de visitas, solo si la aceptas</h3>
                <p>
                  Si aceptas en el aviso de cookies, usamos Google Analytics 4 para contar visitas y saber qué secciones se
                  leen: páginas vistas, tipo de dispositivo y navegador, ciudad o región aproximada y cómo llegaste al sitio.
                  Desactivamos las señales de Google y la personalización de anuncios. Si rechazas, no se carga Google
                  Analytics y no se mide tu visita.
                </p>
              </div>
              <div>
                <h3 className={h3}>Datos técnicos</h3>
                <p>
                  Como en cualquier sitio, el servidor que publica la página y los servicios que cargan la tipografía (Google
                  Fonts) y los estilos (cdn.tailwindcss.com) reciben tu dirección IP y datos técnicos de tu navegador para
                  poder entregarte el contenido.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className={h2}>3. Para qué los usamos</h2>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Responder tus solicitudes y enviarte la auditoría o cotización que pediste.</li>
              <li>Conocer, de forma estadística, cómo se usa el sitio para mejorarlo (solo con tu consentimiento).</li>
              <li>Mantener el sitio disponible y seguro.</li>
            </ul>
            <p className="mt-4">No usamos tus datos para publicidad, no los vendemos y no creamos perfiles comerciales.</p>
          </section>

          <section>
            <h2 className={h2}>4. Cookies</h2>
            <p>
              La única cookie de medición es la de Google Analytics y solo se guarda si la aceptas. En la{' '}
              <Link to="/cookies" className={link}>política de cookies</Link> encontrarás la lista completa, su duración y
              cómo cambiar tu decisión en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className={h2}>5. Con quién se comparten</h2>
            <p>Solo con los proveedores que hacen funcionar el sitio, cada uno bajo su propia política de privacidad:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 mt-3">
              <li>Microsoft, que aloja el formulario de solicitud de auditoría (Microsoft Forms).</li>
              <li>Google, si aceptas la medición (Google Analytics) y para servir la tipografía (Google Fonts).</li>
              <li>El servicio de alojamiento que publica el sitio.</li>
              <li>Autoridades, únicamente cuando la ley lo exija.</li>
            </ul>
          </section>

          <section>
            <h2 className={h2}>6. Seguridad</h2>
            <p>
              El sitio se sirve por conexión cifrada (HTTPS) y solo usamos proveedores reconocidos para recibir tus datos.
            </p>
          </section>

          <section>
            <h2 className={h2}>7. Cuánto tiempo los conservamos</h2>
            <p>
              Conservamos los datos de tu solicitud mientras dure la relación contigo y, después, solo el tiempo necesario
              para atender obligaciones legales o aclaraciones. Los datos de medición se conservan según la configuración
              de retención de Google Analytics. Puedes pedir que eliminemos tus datos en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className={h2}>8. Tus derechos (ARCO)</h2>
            <p className="mb-4">Conforme a la legislación mexicana de protección de datos personales, puedes:</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li><strong>Acceder</strong> a los datos que tenemos sobre ti.</li>
              <li><strong>Rectificarlos</strong> si son inexactos o están incompletos.</li>
              <li><strong>Cancelarlos</strong> cuando ya no sean necesarios.</li>
              <li><strong>Oponerte</strong> a su uso para fines específicos.</li>
            </ul>
            <p className="mt-4">
              También puedes revocar tu consentimiento para la medición desde la{' '}
              <Link to="/cookies" className={link}>política de cookies</Link>. Para ejercer cualquiera de estos derechos
              escríbenos a <a href={`mailto:${studio.email}`} className={link}>{studio.email}</a> indicando tu nombre y tu
              solicitud.
            </p>
          </section>

          <section>
            <h2 className={h2}>9. Menores de edad</h2>
            <p>
              El sitio está dirigido a negocios y no a menores de edad. Si nos enteramos de que recibimos datos de un menor
              sin autorización de quien ejerce la patria potestad o tutela, los eliminaremos.
            </p>
          </section>

          <section>
            <h2 className={h2}>10. Enlaces externos</h2>
            <p>
              El sitio enlaza a sitios de terceros, como el de clientes en nuestro portafolio. No somos responsables de sus
              prácticas de privacidad; te recomendamos revisar sus políticas.
            </p>
          </section>

          <section>
            <h2 className={h2}>11. Cambios a esta política</h2>
            <p>
              Si cambiamos esta política publicaremos la nueva versión en esta página con su fecha de actualización.
            </p>
          </section>

          <section>
            <h2 className={h2}>12. Contacto</h2>
            <div className="mt-4 ml-4 space-y-2">
              <p>
                <strong className="text-soft-gold">Correo:</strong>{' '}
                <a href={`mailto:${studio.email}`} className={link}>{studio.email}</a>
              </p>
              <p><strong className="text-soft-gold">Ubicación:</strong> {studio.location}</p>
              <p><strong className="text-soft-gold">Sitio web:</strong> www.khuanany.com</p>
            </div>
          </section>
        </div>

        {/* Back Link */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <Link to="/" className="inline-block btn-deco">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
