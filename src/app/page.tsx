import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Destinos } from "@/components/destinos";
import { Categorias } from "@/components/categorias";
import { Catalogo } from "@/components/catalogo";
import { PorQueAatopbc } from "@/components/por-que";
import { MesaDirectiva } from "@/components/mesa-directiva";
import { Directorio } from "@/components/directorio";
import { Contacto } from "@/components/contacto";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinos />
        <Categorias />
        <Catalogo />
        <PorQueAatopbc />
        <MesaDirectiva />
        <Directorio />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
