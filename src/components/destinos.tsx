"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { destinos } from "@/lib/destinos-data";

export function Destinos() {
  return (
    <section id="destinos" className="scroll-mt-20 py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase mb-6">
          Destinos que operamos
        </p>
      </div>

      {/* Horizontal scroll strip */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-hide">
          {destinos.map((d) => (
            <Link
              key={d.slug}
              href={`/destinos/${d.slug}`}
              className="group relative flex-shrink-0 w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden border border-border snap-start"
            >
              <img
                src={d.imagenHero}
                alt={d.nombre}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-1.5 text-white/70 text-xs mb-1">
                  <MapPin size={12} />
                  {d.subtitulo}
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {d.nombre}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
