import React from 'react'

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen py-20 bg-deep-black">
      <div className="max-w-4xl mx-auto px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          <span className="gold-gradient">Términos y Condiciones</span>
        </h1>

        <article className="space-y-12 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Aceptación y cambios</h2>
            <p className="mb-4">
              Al acceder a este <strong>SITIO WEB</strong>, asumimos que acepta estos términos y condiciones. No continúe usando este <strong>SITIO WEB</strong> si no está de acuerdo con todos los términos establecidos en esta página.
            </p>
            <p>
              El <strong>TITULAR</strong> se reserva la facultad de modificar, en cualquier momento y sin previo aviso, la presentación, contenidos, funcionalidad, productos, servicios y configuración del <strong>SITIO WEB</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Cookies</h2>
            <p className="mb-4">
              El <strong>SITIO WEB</strong> utiliza cookies para personalizar su experiencia en línea. Al acceder a este <strong>SITIO WEB</strong>, usted acepta utilizar las cookies requeridas.
            </p>
            <p className="mb-4">
              Una cookie es un archivo de texto que un servidor web coloca en su dispositivo. Las cookies no se pueden utilizar para ejecutar programas o enviar virus a su computadora.
            </p>
            <p>
              Podemos usar cookies para recopilar, almacenar y rastrear información con fines estadísticos o de marketing. Algunas cookies requeridas son necesarias para el funcionamiento del <strong>SITIO WEB</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Licencia y propiedad intelectual</h2>
            <p className="mb-4">
              A menos que se indique lo contrario, el <strong>TITULAR</strong> y/o sus licenciantes poseen los derechos de propiedad intelectual de todo el material en <strong>SITIO WEB</strong>. Todos los derechos están reservados.
            </p>
            <h3 className="text-xl font-semibold text-soft-gold mb-3">No debe</h3>
            <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
              <li>Copiar o volver a publicar material de SITIO WEB.</li>
              <li>Vender, alquilar o sublicenciar material de SITIO WEB.</li>
              <li>Reproducir, duplicar o copiar material de SITIO WEB.</li>
              <li>Redistribuir contenido de SITIO WEB.</li>
            </ul>
            <p>
              Si considera que algún contenido del <strong>SITIO WEB</strong> supone una violación de derechos de propiedad industrial o intelectual, comuníquelo inmediatamente al <strong>TITULAR</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Comentarios de usuarios</h2>
            <p className="mb-4">
              Partes de este <strong>SITIO WEB</strong> podrían ofrecer a los usuarios la oportunidad de publicar e intercambiar opiniones.
            </p>
            <p className="mb-4">
              El <strong>TITULAR</strong> se reserva el derecho de monitorear y eliminar cualquier comentario que sea inapropiado, ofensivo o contrario a estos términos y condiciones.
            </p>
            <h3 className="text-xl font-semibold text-soft-gold mb-3">Usted garantiza y declara que</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Tiene derecho a publicar comentarios y cuenta con permisos requeridos para hacerlo.</li>
              <li>Los comentarios no invaden derechos de propiedad intelectual de terceros.</li>
              <li>Los comentarios no contienen material difamatorio, ofensivo o ilegal.</li>
              <li>Los comentarios no se utilizarán para promover actividades comerciales ilegales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Enlaces a sitios de terceros</h2>
            <p className="mb-4">
              En el <strong>SITIO WEB</strong> pueden existir enlaces, contenidos, servicios o funciones de otros sitios de internet gestionados por terceros.
            </p>
            <p className="mb-4">
              El uso de estos enlaces tiene como objetivo mejorar la experiencia del usuario, sin que pueda considerarse invitación u obligación de uso.
            </p>
            <p>
              El <strong>TITULAR</strong> no revisa, controla ni garantiza la disponibilidad, exactitud o legalidad de los sitios externos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Acceso y disponibilidad</h2>
            <p className="mb-4">
              El <strong>TITULAR</strong> no garantiza la continuidad y disponibilidad total del contenido, productos y/o servicios prestados en el <strong>SITIO WEB</strong>.
            </p>
            <p className="mb-4">
              Tampoco garantiza que el contenido o software al que pueda accederse a través del <strong>SITIO WEB</strong> se encuentre libre de errores o software malicioso.
            </p>
            <p>
              El <strong>TITULAR</strong> no será responsable por pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso o utilización del <strong>SITIO WEB</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gold mb-4">Contacto</h2>
            <p>
              Para reportar incidencias legales o de propiedad intelectual, escríbanos a{' '}
              <a href="mailto:jonatan-008@outlook.com" className="text-gold hover:text-soft-gold transition">
                jonatan-008@outlook.com
              </a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  )
}
