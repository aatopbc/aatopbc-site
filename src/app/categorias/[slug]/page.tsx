import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone, Globe, Users, MapPin, Clock, Tag, ImageIcon } from "lucide-react";
import {
  Wine, Briefcase, Mic, Landmark, Gem, Plane, Heart,
  HeartHandshake, Mountain, Bus,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  categoriasContenido,
  getCategoriaContenido,
} from "@/lib/categorias-data";
import { categorias, socios, productos, type Socio, type Producto } from "@/lib/data";
import { getSlugForSocio } from "@/lib/socios-data";

const iconMap: Record<string, React.ElementType> = {
  wine: Wine, briefcase: Briefcase, mic: Mic, landmark: Landmark,
  gem: Gem, plane: Plane, heart: Heart,
  "heart-handshake": HeartHandshake, mountain: Mountain, bus: Bus,
};

export function generateStaticParams() {
  return categoriasContenido.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const contenido = getCategoriaContenido(slug);
  if (!contenido) return {};

  return {
    title: `${contenido.id} — AATOPBC`,
    description: contenido.eslogan,
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
      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin size={13} />
        {socio.ciudad}
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

function ProductoCard({ producto }: { producto: Producto }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-background overflow-hidden">
      <div className="relative h-40 w-full flex items-center justify-center bg-muted/40">
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
            <ImageIcon size={28} strokeWidth={1.2} />
            <span className="text-xs">Foto próximamente</span>
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-heading text-lg text-foreground leading-snug">
          {producto.nombre}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 whitespace-pre-line">
          {producto.descripcion}
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {producto.capacidad && (
            <span className="flex items-center gap-1">
              <Users size={13} /> {producto.capacidad}
            </span>
          )}
          {producto.cobertura && (
            <span className="flex items-center gap-1">
              <MapPin size={13} /> {producto.cobertura}
            </span>
          )}
          {producto.duracion && (
            <span className="flex items-center gap-1">
              <Clock size={13} /> {producto.duracion}
            </span>
          )}
          {producto.precio && (
            <span className="flex items-center gap-1 font-medium text-foreground/80">
              <Tag size={13} /> {producto.precio}
            </span>
          )}
        </div>
        {producto.incluye && (
          <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed line-clamp-3">
            <span className="font-semibold text-foreground/70">Incluye: </span>
            {producto.incluye}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
          {getSlugForSocio(producto.empresa) ? (
            <Link
              href={`/socios/${getSlugForSocio(producto.empresa)}`}
              className="text-sm font-medium text-primary underline-offset-2 hover:underline"
            >
              {producto.empresa}
            </Link>
          ) : (
            <span className="text-sm font-medium text-primary">
              {producto.empresa}
            </span>
          )}
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all duration-200 hover:gap-2"
          >
            Cotizar <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const contenido = getCategoriaContenido(slug);
  if (!contenido) notFound();

  const meta = categorias.find((c) => c.id === contenido.id);
  const Icon = meta ? iconMap[meta.icono] : null;
  const color = meta?.color ?? "#1B3A5C";

  const sociosCategoria = socios.filter((s) =>
    s.categorias.includes(contenido.id)
  );
  const productosCategoria = productos.filter((p) =>
    p.categorias.includes(contenido.id)
  );

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="relative flex min-h-[45vh] items-end overflow-hidden pt-16"
          style={
            meta?.imagen
              ? undefined
              : { background: `linear-gradient(160deg, ${color} 0%, ${color}CC 100%)` }
          }
        >
          {meta?.imagen && (
            <>
              <img
                src={meta.imagen}
                alt={contenido.id}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(160deg, ${color}E6 0%, ${color}99 100%)`,
                }}
              />
            </>
          )}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14">
            <Link
              href="/#experiencias"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Todas las categorías
            </Link>
            <div className="mt-4 flex items-center gap-3">
              {Icon && (
                <Icon size={32} className="text-white/90" strokeWidth={1.5} />
              )}
              <h1 className="font-heading text-fluid-3xl leading-tight text-white">
                {contenido.id}
              </h1>
            </div>
            <p className="mt-3 max-w-2xl text-fluid-lg text-white/85">
              {contenido.eslogan}
            </p>
          </div>
        </section>

        {/* Descripción + CTA */}
        <section className="py-section">
          <div className="mx-auto max-w-3xl px-6">
            <p className="text-fluid-base leading-relaxed text-muted-foreground">
              {contenido.descripcion}
            </p>
            <Link
              href="/#contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-transform duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Solicita una propuesta <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* Experiencias en esta categoría */}
        {productosCategoria.length > 0 && (
          <section className="bg-muted/30 py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">
                Experiencias en esta categoría
              </h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {productosCategoria.map((p) => (
                  <ProductoCard key={p.nombre} producto={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Especialistas */}
        <section
          id="especialistas"
          className="scroll-mt-20 py-section"
        >
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              Especialistas en {contenido.id}
            </h2>

            {sociosCategoria.length > 0 ? (
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sociosCategoria.map((s) => (
                  <SocioCard key={s.nombre} socio={s} />
                ))}
              </div>
            ) : (
              <p className="mt-4 text-muted-foreground">
                Pronto sumaremos socios especializados en {contenido.id}.
              </p>
            )}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-muted/30 py-section">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              ¿Listo para tu proyecto de {contenido.id}?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cuéntanos qué necesitas y te conectamos con el especialista
              indicado.
            </p>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-transform duration-150 hover:brightness-110 active:scale-[0.97]"
            >
              Solicita una propuesta <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
