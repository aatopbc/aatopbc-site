"use client";

import Link from "next/link";
import { ImageIcon } from "lucide-react";
import {
  Wine, Briefcase, Mic, Landmark, Gem, Plane, Heart,
  HeartHandshake, Mountain, Bus,
} from "lucide-react";
import { categorias } from "@/lib/data";
import { getSlugForCategoria } from "@/lib/categorias-data";

const iconMap: Record<string, React.ElementType> = {
  wine: Wine, briefcase: Briefcase, mic: Mic, landmark: Landmark,
  gem: Gem, plane: Plane, heart: Heart,
  "heart-handshake": HeartHandshake, mountain: Mountain, bus: Bus,
};

export function Categorias() {
  return (
    <section id="experiencias" className="scroll-mt-20 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-heading text-fluid-2xl text-foreground">
            Encuentra la experiencia que estás buscando y conecta con
            especialistas locales.
          </h2>
          <p className="mt-3 text-fluid-base text-muted-foreground">
            Explora por categoría y descubre empresas afiliadas a la AATOPBC
            listas para ayudarte a diseñar, operar y disfrutar experiencias en
            Baja California. Ya seas viajero, empresa, agencia, meeting
            planner u organizador de eventos, aquí encontrarás al aliado
            adecuado para tu proyecto.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categorias.map((cat) => {
            const Icon = iconMap[cat.icono];
            return (
              <Link
                key={cat.id}
                href={`/categorias/${getSlugForCategoria(cat.id)}`}
                className="group relative flex flex-col items-end justify-end overflow-hidden rounded-2xl border border-border h-40 sm:h-48 transition-all duration-200 active:scale-[0.97] hover:shadow-md hover:border-primary/20"
              >
                {/* Background image placeholder */}
                {cat.imagen ? (
                  <img
                    src={cat.imagen}
                    alt={cat.id}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ backgroundColor: cat.color + "12" }}
                  >
                    <ImageIcon
                      size={28}
                      className="text-muted-foreground/20"
                      strokeWidth={1.2}
                    />
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Label */}
                <div className="relative z-10 w-full px-4 pb-4">
                  <div className="flex items-center gap-2">
                    <Icon size={16} className="text-white/80" strokeWidth={2} />
                    <span className="text-sm font-semibold text-white leading-tight">
                      {cat.id}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
