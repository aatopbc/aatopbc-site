import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <Image
              src="/images/logo-aatopbc.png"
              alt="AATOPBC"
              width={160}
              height={42}
              className="h-9 w-auto"
              unoptimized
            />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Asociación de Anfitriones y Tour Operadores de Baja California, A.C.
              Más de 10 años conectando viajeros con las mejores experiencias del
              estado.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="text-sm font-semibold text-foreground">Navegar</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#experiencias" className="hover:text-primary transition-colors">
                    Experiencias
                  </a>
                </li>
                <li>
                  <a href="#socios" className="hover:text-primary transition-colors">
                    Socios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:text-primary transition-colors">
                    Nosotros
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-primary transition-colors">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-foreground">Síguenos</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="https://facebook.com/aatopbc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/aatop.bc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Contacto</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>aatopbc@gmail.com</p>
              <p>Baja California, México</p>
              <p>www.aatopbc.com</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} AATOPBC. Todos los derechos reservados.</p>
          <p>
            Built with{" "}
            <a
              href="https://tododeia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              Claude Web Builder by Tododeia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
