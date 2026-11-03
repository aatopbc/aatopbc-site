"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Users, Clock, Tag, ArrowRight, ImageIcon } from "lucide-react";
import { productos, categorias as cats } from "@/lib/data";
import type { Categoria } from "@/lib/data";
import {
  Wine, Briefcase, Mic, Landmark, Gem, Plane, Heart,
  HeartHandshake, Mountain, Bus,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  wine: Wine, briefcase: Briefcase, mic: Mic, landmark: Landmark,
  gem: Gem, plane: Plane, heart: Heart,
  "heart-handshake": HeartHandshake, mountain: Mountain, bus: Bus,
};

function getCatMeta(id: Categoria) {
  return cats.find((c) => c.id === id);
}

const PAGE_SIZE = 9;

const productosOrdenados = [...productos].sort((a, b) =>
  a.nombre.localeCompare(b.nombre, "es", { sensitivity: "base" })
);

export function Catalogo() {
  const [active, setActive] = useState<Categoria | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const filtered = active
    ? productosOrdenados.filter((p) => p.categorias.includes(active))
    : productosOrdenados;
  const shown = filtered.slice(0, visible);

  function selectCategoria(cat: Categoria | null) {
    setActive(cat);
    setVisible(PAGE_SIZE);
  }

  return (
    <section className="bg-muted/30 py-section">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => selectCategoria(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] cursor-pointer ${
              active === null
                ? "bg-primary text-primary-foreground"
                : "bg-background border border-border text-foreground/70 hover:border-primary/30"
            }`}
          >
            Todos
          </button>
          {cats.map((cat) => (
            <button
              key={cat.id}
              onClick={() => selectCategoria(active === cat.id ? null : cat.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                active === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground/70 hover:border-primary/30"
              }`}
            >
              {cat.id}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active ?? "all"}
            initial={{ opacity: 0, transform: "translateY(8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((prod) => {
              const mainCat = getCatMeta(prod.categorias[0]);
              return (
                <article
                  key={prod.nombre}
                  className="group flex flex-col rounded-2xl border border-border bg-background overflow-hidden transition-all duration-200 hover:shadow-md hover:border-primary/20"
                >
                  {/* Image placeholder */}
                  <div
                    className="relative h-48 w-full flex items-center justify-center"
                    style={{ backgroundColor: (mainCat?.color ?? "#888") + "10" }}
                  >
                    {prod.imagen ? (
                      <img
                        src={prod.imagen}
                        alt={prod.nombre}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                        <ImageIcon size={36} strokeWidth={1.2} />
                        <span className="text-xs">Foto próximamente</span>
                      </div>
                    )}
                    {/* Category badges overlay */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {prod.categorias.map((catId) => {
                        const meta = getCatMeta(catId);
                        const Icon = meta ? iconMap[meta.icono] : null;
                        return (
                          <span
                            key={catId}
                            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium backdrop-blur-sm"
                            style={{
                              backgroundColor: (meta?.color ?? "#666") + "e0",
                              color: "#fff",
                            }}
                          >
                            {Icon && <Icon size={11} strokeWidth={2} />}
                            {catId}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5">
                    <h3 className="font-heading text-xl text-foreground leading-snug">
                      {prod.nombre}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1 whitespace-pre-line">
                      {prod.descripcion}
                    </p>

                    {/* Meta */}
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      {prod.capacidad && (
                        <span className="flex items-center gap-1">
                          <Users size={13} /> {prod.capacidad}
                        </span>
                      )}
                      {prod.cobertura && (
                        <span className="flex items-center gap-1">
                          <MapPin size={13} /> {prod.cobertura}
                        </span>
                      )}
                      {prod.duracion && (
                        <span className="flex items-center gap-1">
                          <Clock size={13} /> {prod.duracion}
                        </span>
                      )}
                      {prod.precio && (
                        <span className="flex items-center gap-1 font-medium text-foreground/80">
                          <Tag size={13} /> {prod.precio}
                        </span>
                      )}
                    </div>

                    {prod.incluye && (
                      <p className="mt-3 text-xs text-muted-foreground/80 leading-relaxed line-clamp-3">
                        <span className="font-semibold text-foreground/70">Incluye: </span>
                        {prod.incluye}
                      </p>
                    )}

                    {/* Operator + CTA */}
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-medium text-primary">
                        {prod.empresa}
                      </span>
                      <a
                        href="#contacto"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all duration-200 hover:gap-2"
                      >
                        Cotizar <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {filtered.length > visible && (
          <div className="mt-10 flex flex-col items-center gap-2">
            <p className="text-sm text-muted-foreground">
              Mostrando {shown.length} de {filtered.length} experiencias
            </p>
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-150 hover:brightness-110 active:scale-[0.97] cursor-pointer"
            >
              Ver más
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No hay productos en esta categoría todavía. Pronto los socios
            agregarán sus experiencias.
          </p>
        )}

      </div>
    </section>
  );
}
