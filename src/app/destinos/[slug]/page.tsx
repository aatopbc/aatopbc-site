import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, Globe } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { destinos, getDestino } from "@/lib/destinos-data";
import { socios, productos, type Socio } from "@/lib/data";
import { getSlugForSocio } from "@/lib/socios-data";

export function generateStaticParams() {
  return destinos.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destino = getDestino(slug);
  if (!destino) return {};

  return {
    title: `${destino.nombre} — AATOPBC`,
    description: destino.descripcion[0],
    openGraph: {
      title: `${destino.nombre} — AATOPBC`,
      description: destino.descripcion[0],
      images: [destino.imagenHero],
    },
  };
}

function SocioCard({ socio }: { socio: Socio }) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-background p-5">
      <h3 className="text-base font-semibold text-foreground leading-snug">
        <Link href={`/socios/${getSlugForSocio(socio.nombre)}`} className="hover:text-primary transition-colors">
          {socio.nombre}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{socio.contacto}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {socio.categorias.slice(0, 3).map((cat) => (
          <span
            key={cat}
            className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
          >
            {cat}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-4 flex items-center gap-3 border-t border-border mt-4">
        <a
          href={`https://wa.me/${socio.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366]/10 px-3 py-2 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
        >
          <Phone size={13} /> WhatsApp
        </a>
        {socio.web && (
          <a
            href={socio.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary"
          >
            <Globe size={13} /> Web
          </a>
        )}
      </div>
    </div>
  );
}

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destino = getDestino(slug);
  if (!destino) notFound();

  const sociosBase = socios.filter((s) => s.ciudad === destino.nombre);
  const empresasBase = new Set(sociosBase.map((s) => s.nombre));

  const empresasServicio = Array.from(
    new Set(
      productos
        .filter(
          (p) =>
            p.cobertura?.toLowerCase().includes(destino.nombre.toLowerCase()) ||
            p.nombre.toLowerCase().includes(destino.nombre.toLowerCase())
        )
        .map((p) => p.empresa)
    )
  ).filter((nombre) => !empresasBase.has(nombre));

  const sociosServicio = empresasServicio
    .map((nombre) => socios.find((s) => s.nombre === nombre))
    .filter((s): s is Socio => Boolean(s));

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-16">
          <img
            src={destino.imagenHero}
            alt={destino.nombre}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14">
            <Link
              href="/#destinos"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Todos los destinos
            </Link>
            <h1 className="mt-4 font-heading text-fluid-3xl leading-tight text-white">
              {destino.nombre}
            </h1>
            <p className="mt-2 text-fluid-lg text-sand">{destino.eslogan}</p>
          </div>
        </section>

        {/* Descripción + datos rápidos */}
        <section className="py-section">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h2 className="font-heading text-fluid-2xl text-foreground">
                {destino.subtitulo}
              </h2>
              <div className="mt-5 space-y-4 text-fluid-base leading-relaxed text-muted-foreground">
                {destino.descripcion.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="grid content-start grid-cols-2 gap-4">
              {destino.datos.map((d) => (
                <div
                  key={d.titulo}
                  className="rounded-xl border border-border bg-muted/30 p-5"
                >
                  <h3 className="text-sm font-semibold text-primary">
                    {d.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {d.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Actividades */}
        <section className="bg-muted/30 py-section">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              Actividades imperdibles
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destino.actividades.map((a) => (
                <div
                  key={a.nombre}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <h3 className="font-heading text-lg text-foreground">
                    {a.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        {destino.galeria.length > 0 && (
          <section className="py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">
                Galería
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {destino.galeria.map((src, i) => (
                  <div
                    key={i}
                    className="aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={src}
                      alt={`${destino.nombre} ${i + 1}`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Operadores */}
        <section id="socios-destino" className="scroll-mt-20 bg-muted/30 py-section">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              Socios AATOPBC en {destino.nombre}
            </h2>

            {sociosBase.length > 0 ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sociosBase.map((s) => (
                  <SocioCard key={s.nombre} socio={s} />
                ))}
              </div>
            ) : (
              <p className="mt-4 text-muted-foreground">
                Aún no contamos con un socio con base en {destino.nombre}.
                Pronto sumaremos operadores locales a la red.
              </p>
            )}

            {sociosServicio.length > 0 && (
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Socios que dan servicio en {destino.nombre}
                </h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {sociosServicio.map((s) => (
                    <SocioCard key={s.nombre} socio={s} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-section">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              ¿Listo para vivir {destino.nombre}?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cuéntanos qué necesitas y te conectamos con el operador
              indicado.
            </p>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-transform duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Solicitar Cotización <ArrowRight size={16} />
            </Link>
            <p className="mt-8 text-xs text-muted-foreground/70">
              Información turística de {destino.nombre} basada en{" "}
              <a
                href={destino.fuente}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Baja California Travel
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
