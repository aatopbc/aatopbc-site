import { Map, Calendar, Shield, UserCheck } from "lucide-react";

const diferenciadores = [
  {
    icon: Map,
    titulo: "Cobertura estatal",
    texto:
      "Mexicali, Tijuana, Ensenada, Rosarito — y todo lo que hay entre medio. No importa dónde aterrices, hay un socio cerca.",
  },
  {
    icon: Calendar,
    titulo: "Más de 10 años como red",
    texto:
      "No somos un directorio. Somos un equipo que se conoce, se respalda y opera junto desde 2014.",
  },
  {
    icon: Shield,
    titulo: "17 empresas con RNT",
    texto:
      "Cada socio está inscrito en el Registro Nacional de Turismo. Operadores formales, con seguros y permisos al corriente.",
  },
  {
    icon: UserCheck,
    titulo: "Un solo punto de contacto",
    texto:
      "Tú pides, nosotros conectamos con el operador que mejor se ajusta a lo que necesitas. Sin buscar empresa por empresa.",
  },
];

export function PorQueAatopbc() {
  return (
    <section id="nosotros" className="scroll-mt-20 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          {/* Left column */}
          <div className="lg:col-span-2">
            <h2 className="font-heading text-fluid-2xl text-foreground">
              ¿Por qué trabajar
              <br />
              con AATOPBC?
            </h2>
            <p className="mt-4 text-fluid-base text-muted-foreground leading-relaxed">
              Organizar un evento, un tour o una logística en un estado que no
              conoces a fondo es complicado. Para eso existimos: para que no
              tengas que armar el rompecabezas solo.
            </p>
          </div>

          {/* Right column — cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
            {diferenciadores.map((d) => (
              <div
                key={d.titulo}
                className="rounded-xl border border-border p-6 transition-colors duration-200 hover:bg-muted/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8">
                  <d.icon size={20} className="text-primary" strokeWidth={1.8} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {d.titulo}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {d.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
