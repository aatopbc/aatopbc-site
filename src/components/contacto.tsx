import { Send, Mail, Phone } from "lucide-react";

export function Contacto() {
  return (
    <section id="contacto" className="scroll-mt-20 py-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
          <h2 className="font-heading text-fluid-2xl text-white">
            ¿Listo para armar tu experiencia en Baja California?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-fluid-base text-white/80">
            Cuéntanos qué necesitas y recibe propuestas de nuestros operadores
            especializados. Un solo formulario, múltiples opciones.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSebHzNi3TNAxA6XeOaGk5qlS8T6WA3zZ64iHtQJReMFn7uuzg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-base font-semibold text-white transition-transform duration-150 active:scale-[0.97] hover:brightness-110"
            >
              <Send size={18} /> Solicitar Cotización
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-white/70 sm:flex-row sm:justify-center sm:gap-8">
            <a
              href="mailto:aatopbc@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} /> aatopbc@gmail.com
            </a>
            <a
              href="https://wa.me/5216641516622"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={16} /> Asesor AATOPBC — Juan Tintos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
