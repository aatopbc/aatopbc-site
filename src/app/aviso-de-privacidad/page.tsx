import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Aviso de Privacidad — AATOPBC",
  description:
    "Aviso de privacidad de la Asociación de Anfitriones y Tour Operadores de Baja California, A.C.",
};

const CORREO = "aatopbc@gmail.com";

function Seccion({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-heading text-fluid-xl text-foreground">{titulo}</h2>
      <div className="mt-3 space-y-3 text-fluid-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

function Lista({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function AvisoDePrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-section">
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Volver al inicio
          </Link>

          <h1 className="mt-4 font-heading text-fluid-3xl leading-tight text-foreground">
            Aviso de Privacidad
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Última actualización: noviembre de 2026
          </p>

          <p className="mt-8 text-fluid-base leading-relaxed text-muted-foreground">
            <strong className="text-foreground">
              Asociación de Anfitriones y Tour Operadores de Baja California,
              A.C.
            </strong>{" "}
            (en adelante &ldquo;AATOPBC&rdquo;), con presencia en Baja
            California, México, es responsable del uso y protección de sus
            datos personales, conforme a la{" "}
            <em>
              Ley Federal de Protección de Datos Personales en Posesión de los
              Particulares (LFPDPPP)
            </em>
            .
          </p>

          <Seccion titulo="1. Datos personales que recabamos">
            <p>Para atender sus solicitudes, AATOPBC podrá recabar:</p>
            <Lista
              items={[
                <>
                  <strong className="text-foreground">Identificación:</strong>{" "}
                  nombre completo y empresa u organización.
                </>,
                <>
                  <strong className="text-foreground">Contacto:</strong> correo
                  electrónico y número de teléfono / WhatsApp.
                </>,
                <>
                  <strong className="text-foreground">Servicio:</strong> tipo
                  de servicio o experiencia de interés, fechas, número de
                  pasajeros y mensaje libre.
                </>,
              ]}
            />
            <p>
              AATOPBC no recaba datos personales sensibles (salud,
              biométricos, religiosos, políticos, patrimonio económico ni
              preferencias sexuales).
            </p>
          </Seccion>

          <Seccion titulo="2. Finalidades del tratamiento">
            <p>
              <strong className="text-foreground">
                Finalidades primarias (necesarias para atender su solicitud):
              </strong>
            </p>
            <Lista
              items={[
                "Atender y dar seguimiento a solicitudes de información y cotización.",
                "Canalizar su solicitud con el socio de la AATOPBC especializado en el servicio requerido.",
                "Dar seguimiento a los servicios que se contraten con nuestros socios.",
              ]}
            />
            <p>
              <strong className="text-foreground">
                Finalidades secundarias (opcionales; puede oponerse):
              </strong>
            </p>
            <Lista
              items={[
                "Envío de información sobre nuevas experiencias, eventos o actividades de la asociación.",
                "Invitación a encuestas de satisfacción.",
              ]}
            />
            <p>
              Para oponerse a las finalidades secundarias, escríbanos a{" "}
              <a
                href={`mailto:${CORREO}`}
                className="text-primary underline underline-offset-2"
              >
                {CORREO}
              </a>{" "}
              con el asunto &ldquo;Oposición finalidades secundarias&rdquo;.
            </p>
          </Seccion>

          <Seccion titulo="3. Transferencia de datos">
            <p>
              Sus datos podrán compartirse, únicamente cuando sea necesario
              para atender su solicitud, con los socios de la AATOPBC que
              presten el servicio requerido, así como con hoteles y
              proveedores de hospedaje, guías, restaurantes y empresas de
              transporte incluidos en la experiencia. AATOPBC no vende, cede
              ni comercializa sus datos a terceros no relacionados con el
              servicio solicitado.
            </p>
          </Seccion>

          <Seccion titulo="4. Derechos ARCO">
            <p>
              Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse
              al tratamiento de sus datos. Envíe su solicitud a{" "}
              <a
                href={`mailto:${CORREO}`}
                className="text-primary underline underline-offset-2"
              >
                {CORREO}
              </a>{" "}
              con el asunto &ldquo;Solicitud ARCO&rdquo;, incluyendo su nombre
              completo y la descripción del derecho que desea ejercer.
              Responderemos en un plazo máximo de 20 días hábiles.
            </p>
          </Seccion>

          <Seccion titulo="5. Cookies y tecnologías de rastreo">
            <p>
              Este sitio no utiliza cookies de rastreo ni herramientas de
              analítica que recopilen datos personales identificables. Si en
              el futuro se incorporan, este aviso se actualizará.
            </p>
          </Seccion>

          <Seccion titulo="6. Modificaciones">
            <p>
              AATOPBC se reserva el derecho de modificar este aviso en
              cualquier momento. Los cambios se publicarán en
              www.aatopbc.com.
            </p>
          </Seccion>

          <Seccion titulo="7. Autoridad competente">
            <p>
              Si considera que AATOPBC ha vulnerado su derecho a la
              protección de datos personales, puede presentar su queja ante la
              autoridad competente en la materia (actualmente la Secretaría
              Anticorrupción y Buen Gobierno).
            </p>
          </Seccion>
        </article>
      </main>
      <Footer />
    </>
  );
}
