import Link from "next/link";
import { mesaDirectiva, type MiembroMesa } from "@/lib/mesa-directiva-data";

function Tarjeta({ m }: { m: MiembroMesa }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background">
      <div className="aspect-[4/5] overflow-hidden bg-muted/40">
        <img
          src={m.foto}
          alt={`${m.nombre}, ${m.cargo} de la AATOPBC`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          {m.cargo}
        </p>
        <h3 className="mt-1 font-heading text-lg leading-snug text-foreground">
          {m.nombre}
        </h3>
        {m.empresa && m.perfilSlug ? (
          <Link
            href={`/socios/${m.perfilSlug}`}
            className="mt-1 inline-block text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            {m.empresa}
          </Link>
        ) : (
          <p className="mt-1 text-sm text-muted-foreground">
            Asesor de la asociación
          </p>
        )}
      </div>
    </article>
  );
}

export function MesaDirectiva() {
  const [presidente, ...demas] = mesaDirectiva;

  return (
    <section id="mesa-directiva" className="scroll-mt-20 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-fluid-2xl text-foreground">
            Mesa directiva
          </h2>
          <p className="mt-2 text-fluid-base text-muted-foreground">
            Las personas que lideran la AATOPBC y representan a nuestros socios.
          </p>
        </div>

        <div className="mx-auto mt-10 w-full sm:max-w-[240px]">
          <Tarjeta m={presidente} />
        </div>

        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {demas.map((m) => (
            <Tarjeta key={m.cargo} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
