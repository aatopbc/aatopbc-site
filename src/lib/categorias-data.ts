import type { Categoria } from "./data";

export interface CategoriaContenido {
  id: Categoria;
  slug: string;
  eslogan: string;
  descripcion: string;
}

export const categoriasContenido: CategoriaContenido[] = [
  {
    id: "Enoturismo",
    slug: "enoturismo",
    eslogan:
      "Descubre Baja California a través de sus vinos, paisajes y sabores.",
    descripcion:
      "Conecta con operadores especializados en rutas vinícolas, experiencias gastronómicas, visitas a bodegas y recorridos personalizados por las principales regiones vitivinícolas del estado. Desde una escapada entre amigos hasta experiencias privadas para grupos y empresas.",
  },
  {
    id: "Corporativo / Incentivos",
    slug: "corporativo-incentivos",
    eslogan:
      "Convierte cada viaje de negocios en una experiencia bien organizada y memorable.",
    descripcion:
      "Encuentra empresas especializadas en viajes de incentivo, actividades de integración, experiencias para colaboradores, atención de grupos empresariales y programas diseñados a la medida. Nosotros te conectamos con el proveedor ideal según tus objetivos, número de participantes y destino.",
  },
  {
    id: "Reuniones / Congresos",
    slug: "reuniones-congresos",
    eslogan:
      "Todo lo que necesitas para recibir, mover y atender a tus asistentes en Baja California.",
    descripcion:
      "Nuestros afiliados brindan servicios para congresos, convenciones, exposiciones, reuniones ejecutivas y eventos empresariales, incluyendo transportación, logística, recorridos, actividades pre y post evento y atención especializada para grupos.",
  },
  {
    id: "Cultural / Histórico",
    slug: "cultural-historico",
    eslogan:
      "Conoce Baja California de la mano de quienes viven y cuentan su historia.",
    descripcion:
      "Explora recorridos culturales, sitios históricos, gastronomía tradicional, museos, comunidades, arquitectura y experiencias que muestran la identidad de cada destino. Una forma auténtica de descubrir el estado más allá de sus atractivos tradicionales.",
  },
  {
    id: "Turismo de Lujo",
    slug: "turismo-de-lujo",
    eslogan: "Experiencias exclusivas diseñadas alrededor de cada viajero.",
    descripcion:
      "Servicios privados, atención personalizada, transportación premium, gastronomía, hospedaje, experiencias boutique y recorridos hechos a la medida. Nuestros afiliados pueden crear programas especiales para viajeros que buscan comodidad, privacidad y un alto nivel de servicio.",
  },
  {
    id: "Agencias de Viajes",
    slug: "agencias-de-viajes",
    eslogan:
      "Diseña tu viaje con expertos que conocen Baja California y más allá.",
    descripcion:
      "Encuentra agencias afiliadas capaces de integrar hospedaje, transportación, experiencias, excursiones, boletos, circuitos y servicios complementarios. Ideales para viajeros individuales, familias, grupos, empresas y agencias nacionales o internacionales que buscan un aliado local.",
  },
  {
    id: "Wellness",
    slug: "wellness",
    eslogan: "Viaja para descansar, reconectar y sentirte bien.",
    descripcion:
      "Descubre experiencias enfocadas en bienestar, relajación y equilibrio: spas, retiros, actividades en contacto con la naturaleza, gastronomía saludable, descanso y programas especiales. Baja California ofrece escenarios ideales para combinar viaje y bienestar.",
  },
  {
    id: "Bodas Destino",
    slug: "bodas-destino",
    eslogan:
      "Celebra uno de los momentos más importantes de tu vida en escenarios inolvidables.",
    descripcion:
      "Conecta con empresas especializadas en bodas destino, transportación de invitados, experiencias para acompañantes, recorridos, hospedaje, logística y servicios complementarios. Desde el Valle de Guadalupe hasta la costa, encuentra aliados para crear una celebración verdaderamente especial.",
  },
  {
    id: "Aventura / Naturaleza",
    slug: "aventura-naturaleza",
    eslogan:
      "Vive Baja California entre montañas, desiertos, mares y paisajes extraordinarios.",
    descripcion:
      "Encuentra operadores de actividades al aire libre, ecoturismo, senderismo, kayak, recorridos de naturaleza, experiencias marinas y aventuras para diferentes niveles. Nuestros anfitriones te ayudan a descubrir cada destino de forma organizada, segura y memorable.",
  },
  {
    id: "Transporte",
    slug: "transporte",
    eslogan:
      "Muévete por Baja California con operadores turísticos profesionales.",
    descripcion:
      "Encuentra soluciones de transportación para viajeros, grupos, empresas, congresos, eventos, aeropuertos, excursiones y recorridos regionales. Desde servicios privados hasta unidades para grupos, te conectamos con empresas afiliadas de acuerdo con las necesidades de tu viaje.",
  },
];

export function getCategoriaContenido(slug: string): CategoriaContenido | undefined {
  return categoriasContenido.find((c) => c.slug === slug);
}

export function getSlugForCategoria(id: Categoria): string {
  return categoriasContenido.find((c) => c.id === id)?.slug ?? "";
}
