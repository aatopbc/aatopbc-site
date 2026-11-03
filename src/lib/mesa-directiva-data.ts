export interface MiembroMesa {
  cargo: string;
  nombre: string;
  empresa?: string;
  perfilSlug?: string;
  foto: string;
}

export const mesaDirectiva: MiembroMesa[] = [
  {
    cargo: "Presidente",
    nombre: "Iván Cortez Chávez",
    empresa: "Vino Sobre Ruedas",
    perfilSlug: "vino-sobre-ruedas",
    foto: "/images/mesa-directiva/presidente.jpg",
  },
  {
    cargo: "Secretario",
    nombre: "Luis Carlos Aguirre",
    empresa: "Border Tours and Transfers",
    perfilSlug: "border-tours-transfers",
    foto: "/images/mesa-directiva/secretario.jpg",
  },
  {
    cargo: "Tesorera",
    nombre: "Belbeth Navarrete",
    empresa: "Vinamun Tours & DMC",
    perfilSlug: "vinamun-tours",
    foto: "/images/mesa-directiva/tesorera.jpg",
  },
  {
    cargo: "Asesor",
    nombre: "Juan Tintos Funcke",
    foto: "/images/mesa-directiva/asesor.jpg",
  },
];
