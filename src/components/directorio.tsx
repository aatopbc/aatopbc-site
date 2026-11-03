"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Globe, ImageIcon } from "lucide-react";
import { socios } from "@/lib/data";
import { getSlugForSocio } from "@/lib/socios-data";

const ciudades = ["Todas", "Mexicali", "Tijuana", "Ensenada"] as const;

export function Directorio() {
  const [ciudad, setCiudad] = useState<string>("Todas");
  const filtered =
    ciudad === "Todas"
      ? socios
      : socios.filter((s) => s.ciudad === ciudad);

  return (
    <section id="socios" className="scroll-mt-20 bg-muted/30 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-fluid-2xl text-foreground">
              Nuestros socios
            </h2>
            <p className="mt-2 text-fluid-base text-muted-foreground">
              17 empresas profesionales en 4 ciudades de Baja California.
            </p>
          </div>

          <div className="flex gap-2">
            {ciudades.map((c) => (
              <button
                key={c}
                onClick={() => setCiudad(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                  ciudad === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground/70 hover:border-primary/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((socio) => {
            const perfilSlug = getSlugForSocio(socio.nombre);
            return (
            <div
              key={socio.nombre}
              className="flex flex-col rounded-xl border border-border bg-background overflow-hidden transition-colors duration-200 hover:border-primary/20"
            >
              {/* Logo area */}
              <div className="h-24 bg-muted/40 flex items-center justify-center border-b border-border">
                {socio.logo ? (
                  <img
                    src={socio.logo}
                    alt={`Logo ${socio.nombre}`}
                    className="h-20 w-52 object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-1 text-muted-foreground/30">
                    <ImageIcon size={24} strokeWidth={1.2} />
                    <span className="text-[10px]">Logo</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                {perfilSlug ? (
                  <Link
                    href={`/socios/${perfilSlug}`}
                    className="text-base font-semibold text-foreground leading-snug hover:text-primary transition-colors"
                  >
                    {socio.nombre}
                  </Link>
                ) : (
                  <h3 className="text-base font-semibold text-foreground leading-snug">
                    {socio.nombre}
                  </h3>
                )}
                <p className="mt-1 text-sm text-muted-foreground">
                  {socio.contacto}
                </p>

                <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={13} />
                  {socio.ciudad}
                </div>

                <div className="mt-3 flex flex-wrap gap-1">
                  {socio.categorias.slice(0, 3).map((cat) => (
                    <span
                      key={cat}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {cat}
                    </span>
                  ))}
                  {socio.categorias.length > 3 && (
                    <span className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                      +{socio.categorias.length - 3}
                    </span>
                  )}
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
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
