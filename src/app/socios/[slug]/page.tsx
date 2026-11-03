import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Globe,
  MapPin,
  Mail,
  Clock,
  Tag,
  Users as UsersIcon,
  Truck,
  Handshake,
  BadgeCheck,
  GraduationCap,
  ShieldCheck,
  Radar,
  Navigation,
  Languages,
  Award,
  Route,
  Compass,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { perfilesSocios, getPerfilSocio } from "@/lib/socios-data";
import { socios, productos } from "@/lib/data";
import { getSlugForCategoria } from "@/lib/categorias-data";

const iconMap: Record<string, React.ElementType> = {
  truck: Truck,
  handshake: Handshake,
  "badge-check": BadgeCheck,
  "graduation-cap": GraduationCap,
  "shield-check": ShieldCheck,
  radar: Radar,
  navigation: Navigation,
  languages: Languages,
  award: Award,
  users: UsersIcon,
  route: Route,
  compass: Compass,
};

export function generateStaticParams() {
  return perfilesSocios.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const perfil = getPerfilSocio(slug);
  if (!perfil) return {};

  return {
    title: `${perfil.nombre} — AATOPBC`,
    description: perfil.eslogan ?? perfil.bio?.[0] ?? `Socio de la AATOPBC en Baja California.`,
  };
}

export default async function SocioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const perfil = getPerfilSocio(slug);
  if (!perfil) notFound();

  const socio = socios.find((s) => s.nombre === perfil.nombre);
  if (!socio) notFound();

  const productosSocio = productos.filter((p) => p.empresa === perfil.nombre);
  const tieneAcerca = Boolean(
    perfil.bio?.length || perfil.aniosExperiencia || perfil.segmentos?.length
  );
  const enConstruccion = !tieneAcerca && productosSocio.length === 0;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary pt-16">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <Link
              href="/#socios"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft size={14} /> Todos los socios
            </Link>

            <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              {socio.logo && (
                <div className="flex h-24 w-52 flex-shrink-0 items-center justify-center rounded-xl bg-white p-4">
                  <img
                    src={socio.logo}
                    alt={`Logo ${socio.nombre}`}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div>
                <h1 className="font-heading text-fluid-2xl leading-tight text-white">
                  {perfil.nombre}
                </h1>
                {perfil.eslogan && (
                  <p className="mt-1 text-fluid-base text-sand">{perfil.eslogan}</p>
                )}
                <div className="mt-3 flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin size={14} /> {socio.ciudad} · {socio.contacto}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${socio.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:brightness-110 active:scale-[0.97]"
              >
                <Phone size={15} /> WhatsApp
              </a>
              {socio.web && (
                <a
                  href={socio.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-white/80 active:scale-[0.97]"
                >
                  <Globe size={15} /> Sitio web
                </a>
              )}
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform duration-150 hover:brightness-110 active:scale-[0.97]"
              >
                Solicitar Cotización <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Quiénes somos / especialidades */}
        <section className="py-section">
          <div
            className={`mx-auto max-w-7xl px-6 grid gap-12 ${
              perfil.aniosExperiencia || perfil.segmentos?.length
                ? "lg:grid-cols-[1.3fr_1fr]"
                : ""
            }`}
          >
            <div>
              <h2 className="font-heading text-fluid-2xl text-foreground">
                {tieneAcerca ? "Quiénes somos" : "Especialidades"}
              </h2>
              {perfil.bio && (
                <div className="mt-5 space-y-4 text-fluid-base leading-relaxed text-muted-foreground">
                  {perfil.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {socio.categorias.map((cat) => (
                  <Link
                    key={cat}
                    href={`/categorias/${getSlugForCategoria(cat)}`}
                    className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
              {enConstruccion && (
                <p className="mt-6 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                  Estamos completando el perfil de {socio.nombre}. Mientras tanto,
                  puedes contactarlos directamente con los datos de esta página.
                </p>
              )}
            </div>

            {(perfil.aniosExperiencia || perfil.segmentos?.length) && (
              <div className="rounded-2xl border border-border bg-muted/30 p-6">
                {perfil.aniosExperiencia && (
                  <>
                    <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                      Experiencia
                    </div>
                    <div className="mt-1 font-heading text-fluid-xl text-primary">
                      {perfil.aniosExperiencia}
                    </div>
                  </>
                )}
                {perfil.segmentos && perfil.segmentos.length > 0 && (
                  <>
                    <div
                      className={`text-sm font-semibold uppercase tracking-wide text-muted-foreground ${
                        perfil.aniosExperiencia ? "mt-6" : ""
                      }`}
                    >
                      A quién atienden
                    </div>
                    <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                      {perfil.segmentos.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Diferenciadores */}
        {perfil.diferenciadores && perfil.diferenciadores.length > 0 && (
          <section className="bg-muted/30 py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">
                Por qué elegirlos
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {perfil.diferenciadores.map((d) => {
                  const Icon = iconMap[d.icono];
                  return (
                    <div
                      key={d.titulo}
                      className="rounded-xl border border-border bg-background p-5"
                    >
                      {Icon && <Icon size={22} className="text-primary" strokeWidth={1.6} />}
                      <h3 className="mt-3 text-sm font-semibold text-foreground">
                        {d.titulo}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {d.texto}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Cobertura */}
        {perfil.cobertura && perfil.cobertura.length > 0 && (
          <section className="py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">
                Zona de cobertura
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {perfil.cobertura.map((g) => (
                  <div key={g.titulo}>
                    <h3 className="text-sm font-semibold text-primary">{g.titulo}</h3>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Catálogo */}
        {productosSocio.length > 0 && (
          <section className="bg-muted/30 py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">
                Catálogo de experiencias
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {productosSocio.map((p) => (
                  <div
                    key={p.nombre}
                    className="flex flex-col overflow-hidden rounded-xl border border-border bg-background"
                  >
                    {p.imagen && (
                      <img
                        src={p.imagen}
                        alt={p.nombre}
                        loading="lazy"
                        className="h-36 w-full object-cover"
                      />
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {p.nombre}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                        {p.descripcion}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3 text-xs">
                        {p.duracion && (
                          <span className="flex items-center gap-1 font-medium text-primary">
                            <Clock size={12} /> {p.duracion}
                          </span>
                        )}
                        {p.precio && (
                          <span className="flex items-center gap-1 font-medium text-foreground/80">
                            <Tag size={12} /> {p.precio}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Equipo */}
        {perfil.equipo && perfil.equipo.length > 0 && (
          <section className="py-section">
            <div className="mx-auto max-w-7xl px-6">
              <h2 className="font-heading text-fluid-2xl text-foreground">Equipo</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {perfil.equipo.map((m) => (
                  <div
                    key={m.nombre}
                    className="rounded-xl border border-border bg-background p-5"
                  >
                    <h3 className="text-sm font-semibold text-foreground">{m.nombre}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{m.puesto}</p>
                    {m.telefono && (
                      <p className="mt-3 flex items-center gap-2 text-xs text-foreground/80">
                        <Phone size={12} className="text-primary" /> {m.telefono}
                      </p>
                    )}
                    {m.email && (
                      <a
                        href={`mailto:${m.email}`}
                        className="mt-1.5 flex items-center gap-2 text-xs text-foreground/80 hover:text-primary"
                      >
                        <Mail size={12} className="text-primary" /> {m.email}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contacto */}
        <section
          id="socio-contacto"
          className="scroll-mt-20 bg-muted/30 py-section"
        >
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              Contacto
            </h2>
            <div className="mt-6 grid gap-4 rounded-2xl border border-border bg-background p-6 sm:grid-cols-2">
              {perfil.direccion && (
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">{perfil.direccion}</span>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <a
                  href={`https://wa.me/${socio.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/80 hover:text-primary"
                >
                  {socio.telefono}
                </a>
              </div>
              {socio.email && (
                <div className="flex items-start gap-3">
                  <Mail size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                  <a
                    href={`mailto:${socio.email}`}
                    className="break-all text-sm text-foreground/80 hover:text-primary"
                  >
                    {socio.email}
                  </a>
                </div>
              )}
              {socio.web && (
                <div className="flex items-start gap-3">
                  <Globe size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                  <a
                    href={socio.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-foreground/80 hover:text-primary"
                  >
                    {socio.web.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
              {perfil.contactos?.map((c) => (
                <div key={c.etiqueta} className="flex items-start gap-3 sm:col-span-2">
                  <Compass size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm text-foreground/80">
                    <span className="font-medium text-foreground">{c.etiqueta}: </span>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="break-words hover:text-primary"
                      >
                        {c.valor}
                      </a>
                    ) : (
                      c.valor
                    )}
                  </span>
                </div>
              ))}
              {(socio.facebook || socio.instagram) && (
                <div className="flex items-center gap-4 sm:col-span-2">
                  {socio.facebook && (
                    <a
                      href={socio.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/80 hover:text-primary"
                    >
                      Facebook
                    </a>
                  )}
                  {socio.instagram && (
                    <a
                      href={socio.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/80 hover:text-primary"
                    >
                      Instagram
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
