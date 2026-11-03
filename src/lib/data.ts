export type Categoria =
  | "Enoturismo"
  | "Corporativo / Incentivos"
  | "Reuniones / Congresos"
  | "Cultural / Histórico"
  | "Turismo de Lujo"
  | "Agencias de Viajes"
  | "Wellness"
  | "Bodas Destino"
  | "Aventura / Naturaleza"
  | "Transporte";

export interface Producto {
  nombre: string;
  descripcion: string;
  categorias: Categoria[];
  capacidad?: string;
  cobertura?: string;
  duracion?: string;
  precio?: string;
  incluye?: string;
  empresa: string;
  imagen?: string; // URL de imagen del producto
}

export interface Socio {
  nombre: string;
  contacto: string;
  ciudad: string;
  telefono: string;
  email?: string;
  whatsapp: string;
  categorias: Categoria[];
  web?: string;
  facebook?: string;
  instagram?: string;
  logo?: string; // URL del logo de la empresa
}

export const categorias: { id: Categoria; icono: string; color: string; imagen?: string }[] = [
  { id: "Enoturismo", icono: "wine", color: "#722F37", imagen: "/images/categorias/enoturismo.jpg" },
  { id: "Corporativo / Incentivos", icono: "briefcase", color: "#1B3A5C", imagen: "/images/categorias/corporativo-incentivos.jpg" },
  { id: "Reuniones / Congresos", icono: "mic", color: "#3D5A80", imagen: "/images/categorias/reuniones-congresos.jpg" },
  { id: "Cultural / Histórico", icono: "landmark", color: "#8B6914", imagen: "/images/categorias/cultural-historico.jpg" },
  { id: "Turismo de Lujo", icono: "gem", color: "#4A4A4A", imagen: "/images/categorias/turismo-de-lujo.jpg" },
  { id: "Agencias de Viajes", icono: "plane", color: "#2E86AB", imagen: "/images/categorias/agencias-de-viajes.jpg" },
  { id: "Wellness", icono: "heart", color: "#5C6B3C", imagen: "/images/categorias/wellness.jpg" },
  { id: "Bodas Destino", icono: "heart-handshake", color: "#B5838D", imagen: "/images/categorias/bodas-destino.jpg" },
  { id: "Aventura / Naturaleza", icono: "mountain", color: "#6B8F3C", imagen: "/images/categorias/aventura-naturaleza.jpg" },
  { id: "Transporte", icono: "bus", color: "#555555", imagen: "/images/categorias/transporte.jpg" },
];

export const productos: Producto[] = [
  {
    nombre: "Ruta Cachanilla | Cultura, Sabores y Desierto de Mexicali",
    descripcion:
      "Descubre el corazón auténtico de Mexicali en una experiencia que combina historia, cultura, gastronomía y aventura. Recorre el Centro Histórico y los emblemáticos espacios de La Chinesca, disfruta los sabores de la cocina local y conoce la tradición cervecera de la ciudad. Según la temporada, la experiencia puede complementarse con sandboard en las dunas del desierto o una visita a la Ruta del Dátil en el Valle de Mexicali. Una escapada acompañada por anfitriones locales para descubrir la capital de Baja California desde una perspectiva auténtica.",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "1-17 pax",
    cobertura: "Mexicali",
    duracion: "3 días / 2 noches",
    incluye:
      "Incluye transporte terrestre, hospedaje, fotografía de la experiencia, seguro durante traslados, guía local y actividades como recorrido por La Chinesca, sandboard o Ruta del Dátil, cata sensorial de cerveza y visita a museo o datilera.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/ruta-cachanilla.jpg",
  },
  {
    nombre: "Gigantes del Mar | Encuentro con el Tiburón Ballena",
    descripcion:
      "Adéntrate en el Mar de Cortés y descubre uno de los encuentros naturales más impresionantes de Baja California. En Bahía de los Ángeles navegaremos en búsqueda del tiburón ballena para observarlo en su hábitat natural y, cuando las condiciones lo permitan, vivir la experiencia de nadar a su lado. El recorrido se complementa con snorkel, paisajes marinos, el emblemático Arco de Bahía de los Ángeles y una visita al Valle de los Gigantes. Una experiencia auténtica para viajeros que buscan naturaleza, aventura y conexión con la vida marina.",
    categorias: ["Aventura / Naturaleza"],
    capacidad: "5-40 pax",
    cobertura: "Mexicali → Bahía de los Ángeles",
    duracion: "3 días / 2 noches",
    incluye:
      "Incluye transporte redondo desde Mexicali, hospedaje, tour marino de aproximadamente cinco horas con guía oceanóloga local, avistamiento y posible nado con tiburón ballena, equipo básico de snorkel, visita al Arco, parada en Valle de los Gigantes, ceviche fresco a bordo y coordinador de experiencia.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/gigantes-del-mar.jpg",
  },
  {
    nombre: "Maravillas de la Baja | Circuito de 8 Días por la Península",
    descripcion:
      "Recorre Baja California en una gran expedición que conecta desierto, mar, montaña, vino y cultura. La ruta parte de Mexicali y atraviesa algunos de los escenarios más impresionantes de la península: San Luis Gonzaga, Bahía de los Ángeles, San Quintín, Sierra de San Pedro Mártir, Ensenada y Valle de Guadalupe. Disfruta actividades como navegación, snorkel, kayak, experiencias entre humedales, paisajes desérticos y catas de vino. Una propuesta diseñada para viajeros que desean conocer la diversidad de Baja California en un solo circuito, acompañados durante toda la experiencia.",
    categorias: ["Enoturismo", "Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "1-54 pax",
    cobertura: "Mexicali → toda la península de Baja California",
    duracion: "Personalizable",
    incluye:
      "Circuito terrestre con guía, hospedaje, accesos a parques naturales, playas y áreas protegidas, fotografía, seguro durante traslados y experiencias de enoturismo en Valle de Guadalupe.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/maravillas-de-la-baja.jpg",
  },
  {
    nombre: "Capitanes al Agua | Pesca Deportiva en el Mar de Cortés",
    descripcion:
      "Vive una escapada de pesca deportiva en Bahía de los Ángeles, uno de los destinos naturales más espectaculares del Mar de Cortés. La experiencia combina navegación, pesca, paisajes marinos y momentos de relajación, sin necesidad de experiencia previa. A bordo contarás con embarcación equipada y equipo básico para la actividad, además de disfrutar sashimi fresco, snorkel y algunos de los paisajes más representativos de la región. Una excelente opción para amigos, familias y viajeros que desean desconectarse de la rutina y vivir el mar de Baja California.",
    categorias: ["Aventura / Naturaleza"],
    capacidad: "8-17 pax",
    cobertura: "Mexicali → Bahía de los Ángeles",
    duracion: "3 días / 2 noches",
    incluye:
      "Incluye transporte redondo desde Mexicali, dos noches de hospedaje, embarcación equipada para pesca deportiva, equipo básico de pesca y snorkel, visita al Arco de Bahía de los Ángeles, parada en Valle de los Gigantes, sashimi fresco a bordo y coordinador de experiencia.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/capitanes-al-agua.jpg",
  },
  {
    nombre: "Oasis, Misiones y Playa | Descubre la Historia de Baja California Sur",
    descripcion:
      "Descubre algunos de los rincones con mayor historia y belleza de Baja California Sur en una travesía que combina misiones, pueblos, oasis y playas. Conoce Mulegé y su sorprendente oasis en medio del desierto, recorre sus sitios históricos y continúa hacia Loreto, cuna de la evangelización de las Californias. La ruta permite disfrutar paisajes donde el desierto se encuentra con el mar, gastronomía regional y comunidades llenas de tradición. Una experiencia ideal para viajeros interesados en la cultura, la naturaleza y las historias que dieron forma a la península.",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "1-54 pax",
    cobertura: "Mexicali → Mulegé y Loreto, BCS",
    duracion: "4 días / 3 noches",
    incluye:
      "Incluye traslados terrestres desde Mexicali, seguro de traslado, hospedaje, coordinador de experiencia, fotografías, visitas guiadas en Loreto y Mulegé, así como accesos a playas o áreas protegidas cuando sea necesario.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/oasis-misiones-y-playa.jpg",
  },
  {
    nombre: "Acuario Nómada | Ballenas y Naturaleza de Baja California",
    descripcion:
      "Una expedición diseñada para descubrir la biodiversidad marina de Baja California. Desde Mexicali viajamos hacia Guerrero Negro para vivir el espectacular avistamiento de ballena gris y conocer paisajes naturales únicos. La aventura continúa hacia Bahía de los Ángeles, donde el Mar de Cortés se convierte en escenario de experiencias de conservación y recorridos guiados por la naturaleza. Dependiendo de la temporada y las condiciones, el viaje puede incluir observación de aves y experiencias de bioluminiscencia. Una propuesta ideal para amantes de la naturaleza que buscan conocer Baja California de una manera auténtica y consciente.",
    categorias: ["Aventura / Naturaleza"],
    capacidad: "1-54 pax",
    cobertura: "Mexicali → Guerrero Negro y Bahía de los Ángeles",
    duracion: "4 días / 3 noches",
    incluye:
      "Avistamiento de ballena gris, Guerrero Negro, Bahía de los Ángeles, experiencias de conservación, guía local, naturaleza marina y seguro durante traslados.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/acuario-nomada.jpg",
  },
  {
    nombre: "Humedales + Sierra | Naturaleza entre el Mar y la Montaña",
    descripcion:
      "Descubre la extraordinaria diversidad natural del norte de Baja California en un recorrido que conecta montaña, costa y humedales. Explora los bosques del Parque Nacional Sierra de San Pedro Mártir, disfruta caminatas rodeadas de pinos y continúa hacia los humedales de San Quintín, hogar de una importante diversidad de aves y paisajes costeros. El recorrido integra también lugares emblemáticos de la región y experiencias al aire libre. Ideal para parejas, amigos y viajeros que buscan escapar del entorno urbano, respirar aire puro y reconectar con la naturaleza.",
    categorias: ["Aventura / Naturaleza"],
    capacidad: "5-40 pax",
    cobertura: "Mexicali → San Quintín y Sierra San Pedro Mártir",
    duracion: "3 días / 2 noches",
    incluye:
      "Incluye traslados terrestres desde Mexicali, seguro de traslado, dos noches de hospedaje, una comida, coordinador de experiencia, fotografías, visita guiada a San Quintín y al Parque Nacional Sierra San Pedro Mártir, además de actividad de kayak.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/humedales-sierra.jpg",
  },
  {
    nombre: "Mexicali de Paso",
    descripcion:
      "Aprovecha tu estancia en Mexicali recorriendo dos o tres experiencias emblemáticas de la ciudad. Combina gastronomía, cerveza artesanal, senderismo, La Chinesca, actividades deportivas o vida nocturna y crea un recorrido de acuerdo con tus intereses y tiempo disponible.",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "1-54 pax",
    cobertura: "Mexicali",
    duracion: "Personalizable",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/mexicali-de-paso.jpg",
  },
  {
    nombre: "Experiencia Cachanilla",
    descripcion:
      "Vive Mexicali durante un día combinando cultura, gastronomía y aventura. Personaliza tu recorrido entre experiencias como sandboard, Ruta del Dátil, Centro Histórico, cultura china, cerveza artesanal, gastronomía cachanilla, senderismo y actividades deportivas.",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "1-54 pax",
    cobertura: "Mexicali",
    duracion: "6 - 10 horas",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/experiencia-cachanilla.jpg",
  },
  {
    nombre: "Mexicali Express",
    descripcion:
      "Una introducción rápida y personalizada a Mexicali para visitantes con poco tiempo. Elige un lugar icónico de la ciudad, desde una cervecería artesanal hasta un restaurante local, y descubre una muestra de la cultura y gastronomía cachanilla mediante un servicio privado adaptado a tus intereses.",
    categorias: ["Cultural / Histórico"],
    capacidad: "1-55+ pax",
    cobertura: "Mexicali",
    duracion: "0 - 2 horas",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/mexicali-express.jpg",
  },
  {
    nombre: "Traslado Privado | Mexicali – Aeropuerto Internacional de Mexicali",
    descripcion:
      "Servicio privado de transportación desde Mexicali hacia el Aeropuerto Internacional de Mexicali, diseñado para viajeros individuales, familias, grupos y pasajeros corporativos. Ofrecemos traslados cómodos y coordinados de acuerdo con el horario de vuelo, punto de recolección y necesidades del grupo. Ideal para salidas desde hoteles, oficinas, domicilios o puntos previamente acordados dentro de Mexicali. Nuestro servicio busca facilitar el inicio del viaje mediante una logística terrestre práctica, segura y personalizada.",
    categorias: ["Transporte"],
    capacidad: "1-40 pax",
    cobertura: "Mexicali (MXL)",
    duracion: "0 - 2 horas",
    incluye:
      "Servicio privado con salida desde Mexicali. Puede adaptarse al tamaño del grupo y coordinarse según horario de vuelo, ubicación de recolección y requerimientos especiales de transportación.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/traslado-mxl.jpg",
  },
  {
    nombre: "Traslado Privado | Mexicali – Aeropuerto Internacional de Tijuana",
    descripcion:
      "Servicio privado de transportación desde Mexicali hacia el Aeropuerto Internacional de Tijuana, ideal para viajeros que requieren una conexión cómoda y organizada hacia uno de los principales aeropuertos de la región. El servicio puede operar desde hoteles, empresas, domicilios o puntos acordados en Mexicali y se coordina de acuerdo con el horario de salida del vuelo. Una opción práctica para pasajeros individuales, familias, grupos y viajeros corporativos que buscan evitar complicaciones de estacionamiento o traslados por cuenta propia.",
    categorias: ["Transporte"],
    capacidad: "1-40 pax",
    cobertura: "Mexicali → Tijuana (TIJ)",
    duracion: "2 - 6 horas",
    incluye:
      "Servicio privado de transportación terrestre con logística personalizada según el número de pasajeros, equipaje, horario del vuelo y punto de recolección en Mexicali.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/traslado-tijuana.jpg",
  },
  {
    nombre: "Traslado Internacional | Mexicali – Aeropuerto de San Diego",
    descripcion:
      "Servicio privado de transportación desde Calexico hacia el Aeropuerto Internacional de San Diego, ideal para pasajeros que viajan desde Baja California y requieren conectar con vuelos desde Estados Unidos. Coordinamos la salida de acuerdo con el horario del vuelo y las necesidades del grupo, considerando el tiempo necesario para el trayecto y cruce fronterizo. El servicio está dirigido a viajeros individuales, familias, grupos y clientes corporativos que buscan una alternativa cómoda y organizada para llegar al aeropuerto sin preocuparse por conducir o estacionar.",
    categorias: ["Transporte"],
    capacidad: "1-12 pax",
    cobertura: "Calexico → San Diego, California",
    duracion: "2 - 6 horas",
    incluye:
      "Servicio internacional sujeto a requisitos migratorios y documentación vigente de cada pasajero. El tiempo de traslado puede variar de acuerdo con las condiciones del cruce fronterizo y tránsito.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/traslado-san-diego.jpg",
  },
  {
    nombre: "Traslado Internacional | Mexicali – Aeropuerto de Phoenix",
    descripcion:
      "Servicio privado de transportación terrestre desde Calexico hacia el Aeropuerto Internacional de Phoenix Sky Harbor. Una opción conveniente para pasajeros que utilizan Phoenix como punto de salida hacia destinos nacionales e internacionales. Coordinamos el traslado desde hoteles, empresas, domicilios o puntos previamente acordados en Mexicali, tomando en cuenta el horario del vuelo y las necesidades del grupo. Ideal para viajeros individuales, familias y grupos que buscan una solución directa de transportación sin preocuparse por conducir, estacionar o coordinar varios vehículos.",
    categorias: ["Transporte"],
    capacidad: "1-12 pax",
    cobertura: "Calexico → Phoenix, Arizona",
    duracion: "2 - 6 horas",
    incluye:
      "Servicio privado internacional sujeto a documentación migratoria vigente. La programación debe contemplar tiempo de carretera, cruce fronterizo y anticipación suficiente para documentación y registro en el aeropuerto.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/traslado-phoenix.jpg",
  },
  {
    nombre: "Traslado Internacional | Mexicali – Aeropuerto Internacional de Los Ángeles",
    descripcion:
      "Traslado privado desde Calexico hacia el Aeropuerto Internacional de Los Ángeles, pensado para viajeros que necesitan conectar con vuelos nacionales o internacionales desde el sur de California. Ofrecemos transportación terrestre coordinada desde el punto de origen en Calexico hasta el aeropuerto, adaptándonos al horario del vuelo, número de pasajeros y equipaje. Es una alternativa ideal para familias, grupos, viajeros corporativos y pasajeros que prefieren evitar conducir largas distancias, estacionamientos prolongados y la logística de trasladarse por cuenta propia.",
    categorias: ["Transporte"],
    capacidad: "1-12 pax",
    cobertura: "Calexico → Los Ángeles, California",
    duracion: "2 - 6 horas",
    incluye:
      "Servicio privado internacional. Se recomienda programar la salida considerando tiempo de carretera, cruce fronterizo, tráfico en California y anticipación requerida por la aerolínea.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/traslado-los-angeles.jpg",
  },
  {
    nombre: "Capitanes al Agua Ensenada | Pesca Deportiva en el Pacífico",
    descripcion:
      "Vive una experiencia de pesca deportiva en las aguas del Pacífico frente a Ensenada, uno de los destinos costeros más reconocidos de Baja California. Disfruta una jornada en el mar acompañado por personal especializado, rodeado de paisajes costeros y la posibilidad de capturar distintas especies según la temporada. Esta experiencia es ideal tanto para quienes se inician en la pesca como para viajeros con experiencia que buscan combinar aventura, naturaleza y convivencia. Puede integrarse con traslados terrestres, logística y servicios personalizados desde Mexicali o directamente en Ensenada.",
    categorias: ["Aventura / Naturaleza"],
    capacidad: "1-17 pax",
    cobertura: "Mexicali → Ensenada",
    duracion: "3 días / 2 noches",
    incluye:
      "Experiencia de pesca deportiva en el Pacífico con operación en Ensenada. Puede incluir transportación terrestre, coordinación logística y servicio privado de acuerdo con las necesidades del grupo.",
    empresa: "Border Tours & Transfers",
    imagen: "/images/productos/capitanes-al-agua-ensenada.jpg",
  },
  {
    nombre: "Sandboard en Mexicali",
    descripcion:
      "Vive una aventura diferente en las dunas de Mexicali. Deslízate sobre enormes montañas de arena practicando sandboard, disfruta de paisajes increíbles y siente la adrenalina de conquistar cada duna. No necesitas experiencia previa: nosotros te enseñamos lo básico para que puedas disfrutar al máximo. Una experiencia perfecta para escapar de la rutina, conectar con la naturaleza y pasar un día lleno de aventura. ¡Prepárate para ensuciarte de arena y vivir Mexicali de una manera completamente diferente!",
    categorias: ["Corporativo / Incentivos", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Mexicali",
    duracion: "2 - 6 horas",
    incluye:
      "🏜️ Descubre uno de los imperdibles de Mexicali y conoce sus increíbles dunas. 🏂 Aprende y disfruta del sandboard, sin necesidad de experiencia previa. 🧑‍🏫 Instrucción y acompañamiento durante la actividad. 🛡️ Póliza de seguro para actividades al aire libre incluida. 📸 Tiempo para fotografías y disfrutar del paisaje. 🎒 Equipo necesario para realizar la actividad. 🌅 Una experiencia ideal para amigos, familias, parejas o grupos. 🔥 Una aventura diferente para salir de la rutina y vivir el desierto de una forma única. ⚠️ Actividad sujeta a condiciones climáticas y de seguridad. 💪 Nivel de dificultad: accesible para principiantes con condición física básica.",
    empresa: "Adixion Tour, Travel & DMC",
    imagen: "/images/productos/adixion-sandboard.jpg",
  },
  {
    nombre: "Tour Bufadora, Valle & Puerto Nuevo (Wine & Coast)",
    descripcion:
      "Experiencia privada desde Tijuana: Visitaremos La Bufadora, uno de los géiseres marinos más impresionantes del mundo. Disfrutarán de sus paisajes y podrán explorar los mercados locales. Nos desviamos al Valle de Guadalupe, reconocida región vinícola de México, donde visitaremos una casa vinícola, donde podrán disfrutar de una degustación de vinos rodeados de hermosos viñedos. Finalizan en Puerto Nuevo, famoso por su langosta tradicional, con un delicioso almuerzo incluido frente al mar. Viaja cómodamente en un transporte privado con aire acondicionado y un conductor profesional. Ideal para parejas, familias, amigos y celebraciones especiales que buscan naturaleza, vino, gastronomía y cultura.",
    categorias: ["Enoturismo", "Turismo de Lujo", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Rosarito, Ensenada, Valle de Guadalupe, La Bufadora (Ensenada)",
    duracion: "Personalizable",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Incluye por persona, degustacion basica en vinicola seleccionada y comida incluida en Puerto Nuevo (Detalles dentro de la cotización) Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-bufadora-valle-puerto-nuevo.png",
  },
  {
    nombre: "Tour privado por Valle de Guadalupe",
    descripcion:
      "Vive una experiencia privada en el Valle de Guadalupe, con salida desde Tijuana, el aeropuerto o tu hotel. Vamos a descrubir la región vinícola más reconocida de Baja California a través de la visita a dos casas vinícolas, donde disfrutarás degustaciones y conocerás sus procesos, paisajes y propuestas enológicas. Complementa el recorrido con una experiencia gastronómica en un restaurante del Valle de Guadalupe o Puerto Nuevo. El servicio incluye transporte privado de ida y regreso, brindándote comodidad, seguridad y flexibilidad durante todo el día. Una experiencia ideal para parejas, familias, grupos de amigos y celebraciones que buscan disfrutar del vino, gastronomía y paisajes de Baja California.",
    categorias: ["Enoturismo", "Turismo de Lujo", "Agencias de Viajes", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Valle de Guadalupe",
    duracion: "6 - 10 horas",
    incluye:
      ".Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Incluye por persona, dos degustación básica en dos casas vinicolas. Cada tour tiene un horario de servicio; el resto del tiempo cuenta como hora extra. Los precios pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-valle-de-guadalupe.png",
  },
  {
    nombre: "Tour Queso, Vino & Lavanda",
    descripcion:
      "Descubre una experiencia por los paisajes de Baja California con nuestro Tour Queso, Vino y Lavanda. Partiremos desde Tijuana y visitaremos un campo de lavanda para conocer sus cultivos, el proceso de destilación y probar productos de lavanda. En Vinícola Infinito disfrutaremos un recorrido entre viñedos y una degustación de cuatro vinos en compañia con el Dueño del lugar. Después, exploraremos la Cava de Quesos de Marcelo, conoceremos sus instalaciones, elaboración y produccion, vamos a degustar helado realizado en la propiedad, despues podran apreciar la explicacion y degustacion de variedades de quesos acompañados de vino, pan y mermelada. La experiencia incluye transporte, chofer-guía y seguro de pasajeros. Un día para disfrutar sabores, naturaleza y tradición.",
    categorias: ["Enoturismo", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Valle de Guadalupe, Valle de Ojos Negros, Ensenada",
    duracion: "6 - 10 horas",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Incluye por persona, degustación básica en vinícola seleccionada y degustacion de quesos, cerveza y helado artesanal en cava de marcelo. Visita en Campo de lavanda, puede cambiar en base a disponibilidad del lugar y modificacion de experiencia. Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-queso-vino-lavanda.png",
  },
  {
    nombre: "Recorrido por la Ciudad de Tijuana",
    descripcion:
      "Te llevamos a recorrer y conocer la ciudad de Tijuana en un paseo por sus principales atractivos turisticos, donde aprenderas sobre su historia, costumbres y tradiciones. Recogemos en el hotel indicado para visitar el Centro Cultural de Tijuana, despues visitaremos la Avenida Revolucion (Calle emblematica), tendremos una parada para visitar el iconico restaurante Caesar's donde se invento la ensalada cesar, despues tendremos un degustacion en una cerveceria artesanal y finalizaremos en conocer el limite de la Republica Mexicana en Playas de Tijuana. Tambien hay opcion del recorrido panoramico en diferentes monumentos alrededor de la ciudad.",
    categorias: ["Corporativo / Incentivos", "Cultural / Histórico", "Agencias de Viajes", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tecate → Tijuana",
    duracion: "6 - 10 horas",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas y amigos. Incluye por persona, degustación de cerveza artesanal y degustacion de ensalada cesar. Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-tijuana.png",
  },
  {
    nombre: "Experiencia en Playas de Rosarito",
    descripcion:
      "Te llevamos a disfrutar de la brisa marina y la famosa gastronomia de Puerto Nuevo en un recorrido por la costa y las artesanias de Rosarito. Los recogemos en hotel indicado en Tijuana, areopuerto o cruce fronterizo para dirigirnos con una vista panoramica en zona costera hasta llegar al centro de Rosarito. Visitaremos el Corredor Artesanal, podras tener la opcion de montar un caballo y disfrutar de las calles pintorescas. Visitaremos la zona gastronomica de Puerto Nuevo donde tendras tiempo libre para comer y deleitar tu paladar con una deliciosa langosta frita acompañada de arrroz, frijol y tortillas de harina, hechas a mano.",
    categorias: ["Cultural / Histórico", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Rosarito",
    duracion: "6 - 10 horas",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad. Para actividades complementarios de naturaleza se debera notificar con antelacion para reserva.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-rosarito.png",
  },
  {
    nombre: "Recorrido Pueblo Magico de Tecate",
    descripcion:
      "Te llevamos a descrubrir el encanto del Pueblo Magico de Tecate en un recorrido por sus paisajes, historia y tradiciones. Podremos visitar el famoso Restaurante \"La casa del Abuelo\", tendremos recorrido panoramico por La Rumorosa, visitaremos la Zona Arqueologica Vallecitos, donde encontraremos la coleccion de Pinturas Rupestres en las rutas deserticas de los antiguos indigenas de la region. Despues tendremos tiempo libre para recorrer el Pueblo Magico, pasar por la famosa panaderia El Buen pan de Tecate y terminar en el Restaurante El lugar de Nos.",
    categorias: ["Corporativo / Incentivos", "Cultural / Histórico", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Tecate",
    duracion: "6 - 10 horas",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. No se incluyen alimentos, ni bebidas Se incluye entrada para zona arqueologica por persona Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-tecate.png",
  },
  {
    nombre: "Recorrido por Ensenada",
    descripcion:
      "Te llevamos a recorrer la carretera escenica y conocer la emblematica Bufadora en un paseo por los principales atractivos de Ensenada. Aprenderas sobre su historia y sus tradiciones gastronomicas. Visitaremos el Mercado Negro donde tendran oportunidad de ver la actividad comercial del marisco, pasear por los puestos y probar los deliciosos tacos de Pescao Capeado estilo Ensenada, tendremos un  recorrido panoramico por el Malecon, calle primera y los principales edificios de Ensenada. Visitaremos la famosa Bufadora conocida por ser el Geiser Marino, donde podras disfrutar de su potente y estruendoso chorro de agua y tendremos tiempo de recorrer el corredor de las artesanias.",
    categorias: ["Corporativo / Incentivos", "Cultural / Histórico", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → Ensenada",
    duracion: "6 - 10 horas",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Para actividades complementarias de naturaleza o degustaciones privadas se debera notificar con antelacion para reserva. Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-ensenada.jpg",
  },
  {
    nombre: "Tour Ostion y Mar en San Quintin",
    descripcion:
      "Descubre San Quintin, un destino donde el mar, los volcanes inactivos y la gastronomia local se fusionan en una experiencia autentica y fuera de lo convencional. Vamos a tener un recorrido escenico hacia San Quintin con vistas al Pacifico, realizaremos una caminata guiada por las formaciones volcanicas milenarias, tendremos actividad de kayak por la bahia para apreciar aves, visitaremos las famosas granjas ostricolas donde explican el proceso de cultivo, crecimiento, recoleccion de ostras y tendremos tiempo libre para visitar el OYSTER BAR y disfrutar de una rica cena en el Restaurante \"El molino\"",
    categorias: ["Corporativo / Incentivos", "Cultural / Histórico", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte"],
    capacidad: "1-55+ pax",
    cobertura: "Tijuana → San Quintín",
    duracion: "2 días / 1 noche",
    incluye:
      "Servicio privado y personalizado, con salida desde Tijuana y opción de recogida en hotel o cruce fronterizo Tijuana–San Ysidro. El itinerario puede adaptarse de acuerdo con los intereses y necesidades del grupo. La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales. Incluye por persona, degustación de ostras en granja ostricola y actividad de kayak Cada tour tiene un horario de servicio, el resto del tiempo cuenta como hora extra, precio pueden variar por tipo de unidad y capacidad.",
    empresa: "Destinos Baja Tours",
    imagen: "/images/productos/destinos-san-quintin.jpg",
  },
  {
    nombre: "Tour Nativo",
    descripcion:
      "Visitarás la comunidad Kumiai de San Antonio Necua ubicada en el corazón del Valle de Guadalupe, donde experimentarás y conocerás sus tradiciones y cultura. Degustarás el mejor vino elaborado por sus nativos y finalizarás tu experiencia con una muestra gastronómica de una de las más renombradas Cocineras Ancestrales.",
    categorias: ["Enoturismo", "Cultural / Histórico"],
    capacidad: "1-20 pax",
    cobertura: "Ensenada → Valle de Guadalupe",
    duracion: "~10:00 AM – 6:00 PM",
    precio: "$2,500 MXN por persona (mínimo 2)",
    incluye:
      "Disponible de miércoles a domingo. Transportación privada, guía acreditado o chofer guía, 3 actividades en el Centro Ecoturístico Shiñaw Kuatay de la comunidad Kumiai de Necua, degustación en vinícola nativa y gastronomía ancestral (mínimo 2 personas).",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-tour-nativo.jpg",
  },
  {
    nombre: "Tour del Cafe al Vino",
    descripcion:
      "DESAYUNO EN ROSARITO\nIniciaremos el recorrido desde Tijuana hacia Rosarito, donde disfrutaremos de un desayuno en el restaurante Máxico, con deliciosos sabores de la gastronomía mexicana.\n\nRUTA DEL VINO\nVisitaremos dos prestigiosas vinícolas del Valle de Guadalupe, donde conoceremos la tradición vitivinícola y degustaremos excelentes vinos. Las opciones recomendadas son Casta de Vinos, Barón Balché y Decantos, sujetas a disponibilidad. Continuaremos con fotografías en la Gran Botella y el emblemático letrero del Valle, para después explorar tiendas locales con productos artesanales.\n\nREGRESO A TIJUANA\nFin de nuestros servicios.",
    categorias: ["Enoturismo", "Corporativo / Incentivos", "Turismo de Lujo"],
    capacidad: "1-20 pax",
    cobertura: "Tijuana → Rosarito, Valle de Guadalupe",
    duracion: "6 - 10 horas",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-cafe-al-vino.png",
  },
  {
    nombre: "Citytour Tijuana",
    descripcion:
      "CITY TOUR POR TIJUANA\nExplora los principales atractivos de Tijuana, comenzando en Playas de Tijuana, donde conocerás el muro fronterizo y la Puerta de la Hermandad. Recorreremos lugares emblemáticos como Paseo de los Héroes, Plaza Río, CECUT, Jai Alai, Avenida Revolución, Plaza Santa Cecilia y el Reloj Monumental. Visitaremos el Museo del Taco y el Red Room del Estadio de los Xolos.\n\nTIEMPO LIBRE PARA COMER\nDisfruta de la gastronomía local con recomendaciones como Telefónica Gastro Park, Caesar’s y restaurantes de cocina Baja Med.\n\nCHEVE TOUR TIJUANA\nConoce el proceso de elaboración de cerveza artesanal y disfruta de una degustación.\n\nTRASLADO AL HOTEL\nFin de nuestros servicios.",
    categorias: ["Corporativo / Incentivos", "Transporte"],
    capacidad: "1-20 pax",
    cobertura: "Tijuana",
    duracion: "6 - 10 horas",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-citytour-tijuana.webp",
  },
  {
    nombre: "Tour Cheve, Langosta y Vino",
    descripcion:
      "DÍA 1 | TIJUANA\nRecorre Playas de Tijuana, los principales sitios emblemáticos de la ciudad, el Museo del Taco y el estadio de los Xolos. Disfruta tiempo libre para comer y finaliza con un tour de cerveza artesanal.\n\nDÍA 2 | ROSARITO Y PUERTO NUEVO\nExplora las playas, galerías y calles de Rosarito. Después, disfruta la tradicional langosta de Puerto Nuevo, acompañada de arroz, frijoles, tortillas hechas a mano y una bebida de bienvenida.\n\nDÍA 3 | VALLE DE GUADALUPE\nVisita dos vinícolas, degusta vinos regionales, descubre productos artesanales y toma fotografías en la Gran Botella y el emblemático letrero del Valle.\n\nRegreso a Tijuana. Fin de nuestros servicios.",
    categorias: ["Enoturismo", "Corporativo / Incentivos"],
    capacidad: "1-20 pax",
    cobertura: "Tijuana → Tijuana, Rosarito, Valle de Guadalupe",
    duracion: "3 días / 2 noches",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-cheve-langosta-vino.jpg",
  },
  {
    nombre: "Tour Escapada Sensorial",
    descripcion:
      "DÍA 1 | BIENVENIDA A BAJA CALIFORNIA\nRecepción en el aeropuerto de Tijuana y traslado a Puerto Nuevo para disfrutar de la tradicional langosta estilo Baja California. Posteriormente, traslado al hotel en Valle de Guadalupe.\n\nDÍA 2 | BIENESTAR Y TRADICIÓN\nDisfruta de un masaje relajante, comida saludable, ceremonia de temazcal, baño de plantas, meditación y sonoterapia, conectando con la naturaleza y las tradiciones regionales.\n\nDÍA 3 | ARTE Y VINO\nVisita el Museo del Vino, disfruta degustaciones en dos vinícolas y descubre la producción artesanal local.\n\nDÍA 4 | NATURALEZA Y GASTRONOMÍA\nExplora Sendero Nativo, disfruta un brunch regenerador y degusta vinos en Bruma. Finaliza con una experiencia gastronómica en Fauna o Wine Garden.\n\nDÍA 5 | DESPEDIDA\nDesayuno en Doña Esthela y traslado al aeropuerto de Tijuana.\n\nFIN DE NUESTROS SERVICIOS.",
    categorias: ["Enoturismo", "Cultural / Histórico", "Turismo de Lujo", "Wellness"],
    capacidad: "1-20 pax",
    cobertura: "Tijuana → Rosarito, Valle de Guadalupe",
    duracion: "5 días / 4 noches",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-escapada-sensorial.png",
  },
  {
    nombre: "Travesía Baja Coast to Coast | Una Experiencia de Vida",
    descripcion:
      "Atrévete a recorrer Baja California desde el Océano Pacífico hasta el Mar de Cortés: más de 100 km de pura magia y conexión con la naturaleza. Vive la caminata ganadora del Premio a la Innovación Turística 2022.",
    categorias: ["Aventura / Naturaleza"],
    cobertura: "Océano Pacífico → Mar de Cortés",
    incluye:
      "Más de 100 km de recorrido a pie entre el Pacífico y el Mar de Cortés. Caminata ganadora del Premio a la Innovación Turística 2022.",
    empresa: "Adixion Tour, Travel & DMC",
    imagen: "/images/productos/adixion-coast-to-coast.jpg",
  },
  {
    nombre: "Descubre Baja California | Un viaje entre ballenas, mar y misiones",
    descripcion:
      "Vive Baja California en su mejor versión: en invierno, convive con la imponente ballena gris en Guerrero Negro y recorre misiones históricas y pueblos mágicos como Loreto; en verano, nada con el tiburón ballena en Bahía de los Ángeles. La perfecta combinación de aventura, mar y cultura en un solo viaje, de la mano de un operador con 17 años como experto en el destino.",
    categorias: ["Aventura / Naturaleza", "Cultural / Histórico"],
    cobertura: "Guerrero Negro, Loreto y Bahía de los Ángeles",
    incluye:
      "Ballena gris en invierno (Guerrero Negro), misiones y pueblos mágicos como Loreto, y tiburón ballena en verano (Bahía de los Ángeles).",
    empresa: "Adixion Tour, Travel & DMC",
    imagen: "/images/productos/adixion-ballenas-mar-misiones.jpg",
  },
  {
    nombre: "City Tour Ensenada",
    descripcion:
      "Conocerás de primera mano la riqueza cultural e histórica de la ciudad de Ensenada, Baja California: el Malecón y el Mercado Negro, el histórico Museo Regional, sus tradicionales tacos de pescado o carreta de mariscos, un recorrido por las instalaciones de Riviera con una deliciosa margarita, Plaza Santo Tomás con un tour por su museo degustando 4 vinos y, para finalizar, la Cantina Hussong's.",
    categorias: ["Cultural / Histórico", "Enoturismo"],
    capacidad: "Desde 2 pax",
    cobertura: "Ensenada",
    precio: "$2,000 MXN por persona (mínimo 2)",
    incluye:
      "Transportación privada, guía acreditado o chofer guía, accesos a museos, tour y degustación en Riviera, tour y degustación en Museo Plaza Santo Tomás y tour en Museo Regional. Otros alimentos, bebidas y propinas no incluidos.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-city-tour-ensenada.jpg",
  },
  {
    nombre: "Gastronomía + Vino + Festival | Descubre Ensenada",
    descripcion:
      "Tres días para descubrir Ensenada: City Tour Gastronómico por Ensenada (17 de abril), Tour Valle de Guadalupe con 2 cavas vinícolas y comida (18 de abril) y Festival Conchas y Vino Nuevo (19 de abril).",
    categorias: ["Enoturismo", "Cultural / Histórico"],
    capacidad: "Ocupación doble",
    cobertura: "Ensenada y Valle de Guadalupe",
    duracion: "3 días (17 al 19 de abril)",
    precio: "$15,000 MXN por persona en ocupación doble",
    incluye:
      "City Tour Gastronómico por Ensenada, Tour Valle de Guadalupe con 2 cavas vinícolas y comida, y Festival Conchas y Vino Nuevo. Programa publicado para el 17 al 19 de abril.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-gastronomia-vino-festival.jpg",
  },
  {
    nombre: "Tour Enológico Antigua Ruta",
    descripcion:
      "Se visitan tres vinícolas. En la primera, degustación de líneas clásicas acompañada de una rica tabla de quesos; en la segunda, caminata entre viñedos y el museo ampelográfico degustando 4 vinos; y en la tercera, comida campirana acompañada de su maridaje.",
    categorias: ["Enoturismo"],
    capacidad: "Desde 2 pax",
    cobertura: "Ensenada → Antigua Ruta del Vino",
    precio: "$3,500 MXN por persona (mínimo 2)",
    incluye:
      "Transportación privada, guía acreditado o chofer guía y 1 degustación de vinos en cada vinícola. Disponible de jueves a domingo. Alimentos no incluidos.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-antigua-ruta.jpg",
  },
  {
    nombre: "Tour Arqueológico | Campo Alaska, El Vallecito y Tecate",
    descripcion:
      "Acompáñanos con un delicioso desayuno en el Restaurante La Cabaña del Abuelo, en la zona de La Rumorosa. Salimos hacia Campo Alaska para un recorrido por el museo; después visitamos el Sitio Arqueológico Vallecitos para conocer su zona de pinturas rupestres. Nos trasladamos al Pueblo Mágico de Tecate para visitar una de sus famosas panaderías y el museo comunitario, comemos en uno de sus reconocidos restaurantes y finalizamos con un recorrido por el parque Miguel Hidalgo para la tradicional foto en las letras de Tecate.",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    capacidad: "Desde 2 pax",
    cobertura: "La Rumorosa, Campo Alaska, El Vallecito y Tecate",
    duracion: "~7:00 AM – 7:00 PM",
    precio: "$3,000 MXN por persona (mínimo 2)",
    incluye:
      "Transportación, visitas guiadas y accesos a los sitios arqueológicos o museos. Disponible de miércoles a domingo. Alimentos o degustaciones no incluidos.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-arqueologico.jpg",
  },
  {
    nombre: "Encuentro de Gigantes de la Península | Avistamiento de ballena gris",
    descripcion:
      "Escápate al encuentro de los gigantes de la península: avistamiento de ballena gris con senderismo en Cataviña, 2 salidas en lancha privada, recorrido en la Salina, visita al museo de la Ballena y avistamiento de aves. Guía titular: Mtro. Francisco Detrell.",
    categorias: ["Aventura / Naturaleza"],
    cobertura: "Ensenada → Cataviña y Guerrero Negro",
    duracion: "3 días (salida del 13 al 15 de marzo)",
    precio: "$8,500 MXN por persona (reserva con $2,000 MXN)",
    incluye:
      "Transportación redonda saliendo desde Ensenada, hospedaje en ocupación doble y lunch box durante el recorrido de avistamiento.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-gigantes-peninsula.jpg",
  },
  {
    nombre: "Tour Cerveza Artesanal",
    descripcion:
      "Acompáñanos en este tour cervecero donde encontrarás algunos tasting rooms y diversas marcas de la localidad. Se visitan 3 cervecerías artesanales donde podrán degustar un sinfín de estilos y propuestas innovadoras, reconocidas nacional e internacionalmente, acompañadas de la riquísima y ya famosa gastronomía urbana del puerto.",
    categorias: ["Cultural / Histórico", "Corporativo / Incentivos"],
    capacidad: "Desde 2 pax",
    cobertura: "Ensenada",
    precio: "$2,100 MXN por persona (mínimo 2)",
    incluye:
      "Transportación y actividades incluidas (mínimo 2 personas).",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-cerveza-artesanal.jpg",
  },
  {
    nombre: "Tour Enológico Valle de Guadalupe",
    descripcion:
      "Se visitan dos vinícolas. En la primera, degustación de líneas clásicas con el sommelier o enólogo de casa; en la segunda, recorrido por las instalaciones y degustación de línea clásica con sommelier o enólogo de casa. Comida en restaurante de la localidad.",
    categorias: ["Enoturismo"],
    capacidad: "Desde 2 pax",
    cobertura: "Valle de Guadalupe",
    duracion: "~10:00 AM – 6:00 PM",
    precio: "$3,500 MXN por persona (mínimo 2)",
    incluye:
      "Transportación privada, guía acreditado o chofer guía, 1 degustación de 4 vinos en cada vinícola (2 vinícolas) y comida al centro, family style.",
    empresa: "Calafia Turismo",
    imagen: "/images/productos/calafia-enologico-valle-de-guadalupe.jpg",
  },
  {
    nombre: "Tour Tijuana Gourmet | Gastronomía, teatro y música en tu mesa",
    descripcion:
      "El mejor recorrido gastronómico del país: en 5 horas recorrerás 4 restaurantes con las cocinas más emblemáticas de la ciudad —Caesar's (1er tiempo), Verde & Crema con cocina Baja California (2do y 3er tiempo), Misión 19 con cocina de autor (4to y 5to tiempo) y La Diferencia con cocina tradicional mexicana con productos de BC (6to tiempo)—. Actores, cantantes y músicos locales dan vida a 4 personajes (Fraile, César Cardini, Tía Juana y Nueva Tijuana) con cantos gregorianos, italianos, mexicanos, ópera y jazz, para que mientras degustas vivas una obra de teatro en tu mesa.",
    categorias: ["Cultural / Histórico", "Corporativo / Incentivos"],
    cobertura: "Tijuana",
    duracion: "5 horas",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-tijuana-gourmet.jpg",
  },
  {
    nombre: "Langosta Tour | Rosarito y Puerto Nuevo",
    descripcion:
      "Tour panorámico por Rosarito, B.C., y visita al poblado de Puerto Nuevo con comida en restaurante de la región: la tradicional langosta servida con arroz, frijoles refritos y tortillas de harina hechas a mano.",
    categorias: ["Cultural / Histórico"],
    cobertura: "Tijuana → Rosarito y Puerto Nuevo",
    incluye:
      "Tour panorámico por Rosarito, visita a Puerto Nuevo y comida en restaurante de la región.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-langosta-tour.jpg",
  },
  {
    nombre: "Tour Propietario | Vinícolas atendidas por sus dueños",
    descripcion:
      "Como su nombre lo indica, en este recorrido serás recibido y atendido por los dueños de las diferentes vinícolas que incluye el recorrido; mientras conoces las instalaciones de su vinícola, podrás aprender y disfrutar de primera mano la esencia de cada uno de sus vinos.",
    categorias: ["Enoturismo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Transportación privada, visita a 2 vinícolas con degustaciones y recorridos, comida en restaurante de la región y atención por parte de los propietarios en cada visita.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-tour-propietario.jpg",
  },
  {
    nombre: "Tour Premium | La Ruta del Vino",
    descripcion:
      "En este recorrido podrás disfrutar de 3 de las mejores vinícolas del Valle de Guadalupe y degustar sus excelentes vinos, los cuales han ganado premios internacionales y nacionales.",
    categorias: ["Enoturismo", "Turismo de Lujo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Transportación privada, degustación y recorrido en Cava Entre Santos y Monte Xanic, comida maridaje en Fauna y coordinador.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-tour-premium.jpg",
  },
  {
    nombre: "Antigua Ruta del Vino | Taller \"Mi Vino\" en Santo Tomás",
    descripcion:
      "En esta experiencia dentro de la Bodega de Santo Tomás conocerás el vestigio de esta antigua vinícola, disfrutarás un paseo en carreta entre los viñedos y harás tu propia mezcla de vino: un guía anfitrión te explicará las características y variedades de uva, y será tu paladar el que defina los porcentajes para lograr tu mezcla perfecta y llevarte a casa una botella con etiqueta personalizada.",
    categorias: ["Enoturismo", "Cultural / Histórico"],
    cobertura: "Tijuana → Bodegas de Santo Tomás",
    incluye:
      "Transporte, degustación en Aldo Palafox, recorrido en carreta en Bodegas de Santo Tomás, taller \"Mi Vino\" con botella y etiqueta y comida en los jardines de la Cava.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-antigua-ruta-del-vino.jpg",
  },
  {
    nombre: "Gastronomía, Canto & Vino",
    descripcion:
      "Al caer la noche, se despliega una escena mágica: una cena maridaje bajo los frondosos árboles, donde el canto se suma como una sorpresa inesperada, acompañado de la presencia de artistas ocultos entre los asistentes.",
    categorias: ["Enoturismo", "Turismo de Lujo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Transportación privada, cena maridaje de 4 tiempos dirigida por chef y sommelier y show sorpresa de soprano.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-gastronomia-canto-vino.jpg",
  },
  {
    nombre: "Catando el Universo | Cata nocturna entre viñedos y estrellas",
    descripcion:
      "Acompáñanos a descubrir la conexión existente entre las estrellas y el vino. Dos expertos —uno en astronomía y otro en la evolución de la vitis vinífera— te guiarán en un taller vivencial de cata nocturna entre viñedos que estamos seguros nunca olvidarás.",
    categorias: ["Enoturismo", "Turismo de Lujo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Transporte privado, cena dirigida por sommelier, menú maridaje de 4 tiempos y científico acompañado de telescopios.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-catando-el-universo.jpg",
  },
  {
    nombre: "Concierto Napolitano | Cena maridaje bajo las estrellas",
    descripcion:
      "Bajo el manto estrellado, una cena maridaje con la música de ópera envuelve el ambiente, elevando la experiencia a una sinfonía de placeres sensoriales. Es una noche donde el arte culinario y la música se funden en una experiencia memorable entre los majestuosos viñedos del Valle de Guadalupe.",
    categorias: ["Enoturismo", "Turismo de Lujo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Transporte privado, cena de 4 tiempos con maridaje y concierto napolitano con flash mob.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-concierto-napolitano.jpg",
  },
  {
    nombre: "Cena Dorada sobre el Pacífico",
    descripcion:
      "Al finalizar el día, cuando el cielo da sus últimos rayos dorados entre lo azul del cielo, estaremos listos con un coctel de bienvenida para después tomar la cena que el chef ha preparado con base de mariscos y productos de la región.",
    categorias: ["Corporativo / Incentivos", "Turismo de Lujo"],
    cobertura: "Costa del Pacífico, Baja California",
    incluye:
      "Transporte interno en el complejo, menú de 4 tiempos servidos al centro para compartir, cupón de bebidas para el grupo y visita a bodega de la región.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-cena-dorada-pacifico.jpg",
  },
  {
    nombre: "Raíces de Tecate | Cultura, Historia y Gastronomía",
    descripcion:
      "Tour privado de Tijuana a Tecate con visita a la panadería Dulce Altura, recorrido guiado en la zona arqueológica El Vallecito, tiempo libre en la Plaza Principal de Tecate y tiempo libre para alimentos en el restaurante Lugar de Nos.",
    categorias: ["Cultural / Histórico"],
    capacidad: "Desde 10 pax",
    cobertura: "Tijuana → Tecate",
    duracion: "9 - 10 horas",
    precio: "$1,200 MXN por persona (IVA incluido, mínimo 10 personas)",
    incluye:
      "Servicio de transportación Tijuana–Tecate–Tijuana, seguro de pasajero a bordo de la unidad y coordinador de tour durante el recorrido. Disponible de miércoles a domingo (tour privado, mínimo 10 personas).",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/baja-wine-tours-raices-de-tecate.avif",
  },
  {
    nombre: "Traslados privados | Aeropuerto y hotel",
    descripcion:
      "Servicio de transporte privado en Tijuana, Rosarito, Ensenada, Tecate y toda la península (hasta Los Cabos), con traslados aeropuerto–hotel y hotel–aeropuerto para grupos de 1 a 15 personas.",
    categorias: ["Transporte"],
    capacidad: "1-15 pax",
    cobertura: "Tijuana, Rosarito, Ensenada, Tecate y toda la península",
    incluye:
      "Unidades: sedán, van, sprinter Mercedes Benz de 14, 17 y 20 plazas, Suburban y autobús.",
    empresa: "Baja Wine Tours",
    imagen: "/images/productos/bwt-traslados-privados.jpg",
  },
  {
    nombre: "Renta de transporte | Autobuses, Sprinters y JAC",
    descripcion:
      "Contamos con una gran variedad de unidades de diferentes capacidades para tu próximo servicio: autobuses de 43 a 58 asientos, Sprinters (2022-2023) de 19 y 20 asientos y JAC (2022) de 14 y 16 asientos. Nos ajustamos al tamaño de tu grupo, con puntualidad, profesionalismo y seguridad.",
    categorias: ["Transporte", "Corporativo / Incentivos"],
    capacidad: "14-58 asientos",
    cobertura: "Tijuana, Baja California",
    incluye:
      "Asientos reclinables, baños (autobuses), aire acondicionado, pantallas, cajuela y enchufes para cargar tu teléfono.",
    empresa: "Autobuses Real Ejecutivo",
    imagen: "/images/productos/real-ejecutivo-renta-transporte.jpg",
  },
  {
    nombre: "Road Explorers | Renta de autobuses con cruce a USA",
    descripcion:
      "Autobuses desde San Diego con cruce a USA, de 54 asientos, debidamente inspeccionados por autoridades de los Estados Unidos y regulados por DOT (Federal Motor Carrier Safety Administration) y CHP (California Highway Patrol). Servicios a San Diego, Los Ángeles, Las Vegas, Valle de Guadalupe, traslados para eventos, Six Flags, Disneyland, Universal Studios, Yosemite y movimientos privados.",
    categorias: ["Transporte"],
    capacidad: "54 asientos",
    cobertura: "San Diego → California, Las Vegas y Yosemite",
    incluye:
      "Asientos reclinables, baños, aire acondicionado y pantallas.",
    empresa: "Autobuses Real Ejecutivo",
    imagen: "/images/productos/real-ejecutivo-road-explorers.jpg",
  },
  {
    nombre: "Copérnico Tours | Tours todo incluido en USA y la Baja",
    descripcion:
      "Tours todo incluido en la Baja (Valle de Guadalupe, Loreto y Mulegé, Los Cabos y Guerrero Negro) y en USA (San Diego, Los Ángeles, Las Vegas, Big Bear, parques temáticos, Yosemite y San Francisco), entre otros destinos, además de viajes corporativos.",
    categorias: ["Agencias de Viajes", "Corporativo / Incentivos"],
    cobertura: "Tijuana → Baja California y USA",
    incluye:
      "Unidades tipo ejecutiva, seguro de viaje, guía a bordo, hospedaje, sorpresas y dinámicas, bebidas y snacks, fotografías profesionales y asesoría personalizada.",
    empresa: "Autobuses Real Ejecutivo",
    imagen: "/images/productos/real-ejecutivo-copernico-tours.jpg",
  },
  {
    nombre: "Camino de Viñedos | Valle de Guadalupe",
    descripcion:
      "Una escapada perfecta para conectar con la naturaleza, disfrutar de un brunch entre paisajes hermosos y vivir una experiencia sensorial y enológica en el corazón del vino mexicano.",
    categorias: ["Enoturismo", "Turismo de Lujo"],
    cobertura: "Tijuana → Valle de Guadalupe",
    incluye:
      "Experiencias de 2 o más días con hasta 20% de descuento.",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-camino-de-vinedos.jpg",
  },
  {
    nombre: "Transporte ejecutivo y de placer | Flota Sibaria",
    descripcion:
      "Con nosotros viajas cómodo y seguro: unidad a disposición todo el día, unidad con chofer a disposición, viajes corporativos, transporte ejecutivo, traslados programados y viajes de placer en Tijuana, Rosarito, Ensenada, San Felipe, San Quintín, Tecate, Valle de Guadalupe y Mexicali. Vehículos modernos equipados con las últimas comodidades y cumpliendo con las regulaciones estatales y federales.",
    categorias: ["Transporte", "Corporativo / Incentivos"],
    capacidad: "4-19 pax",
    cobertura: "Tijuana, Rosarito, Ensenada, San Felipe, San Quintín, Tecate, Valle de Guadalupe y Mexicali",
    incluye:
      "Flota: Volkswagen Crafter (19 pax), Toyota Hiace (10 pax) y VW Caddy (4 pax).",
    empresa: "Sibaria Tours",
    imagen: "/images/productos/sibaria-transporte-ejecutivo.jpg",
  },
  {
    nombre: "Ensenada Timeline Tour | Slow travel por historia, territorio y gastronomía",
    descripcion:
      "Un recorrido curado de varios días que traza miles de años de historia a través de los paisajes, la cultura y los sabores de Baja California: de los territorios ancestrales y las tradiciones costeras a los viñedos pioneros y la gastronomía contemporánea, conectando mar, valle y ciudad en una narrativa cohesiva y significativa. No es un tour tradicional: es una experiencia de slow travel para viajeros que buscan contexto, autenticidad y recuerdos duraderos, donde cada parada tiene intención y cada encuentro refleja el espíritu de la tierra.",
    categorias: ["Enoturismo", "Cultural / Histórico", "Turismo de Lujo"],
    cobertura: "Ensenada, Valle de Guadalupe, Valle de Ojos Negros, Valle de La Grulla y Valle de Santo Tomás",
    duracion: "7 - 8 días",
    incluye:
      "Narrativa histórica integrada al recorrido, experiencias de vino y gastronomía con productores emblemáticos y proyectos contemporáneos, ritmo equilibrado entre exploración, disfrute y descanso, y diseño flexible para grupos privados, viajeros premium y planners. Itinerario y precios bajo solicitud.",
    empresa: "Vino Sobre Ruedas",
    imagen: "/images/productos/vsr-ensenada-timeline-tour.jpg",
  },
];

export const socios: Socio[] = [
  {
    nombre: "Adixion Tour, Travel & DMC",
    contacto: "Aldo Gutiérrez",
    ciudad: "Mexicali",
    telefono: "52 (686) 946 3350",
    whatsapp: "5216869463350",
    email: "adixiontour@gmail.com",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza", "Corporativo / Incentivos", "Transporte"],
    web: "https://adixiontour.com",
    facebook: "https://facebook.com/adixiontour",
    instagram: "https://instagram.com/adixiontour",
    logo: "/images/socios/adixion.png",
  },
  {
    nombre: "Baja Travesies",
    contacto: "Karla Castillo",
    ciudad: "Tijuana",
    telefono: "52 (664) 484 7871",
    whatsapp: "5216644847871",
    email: "bajatravesies@gmail.com",
    categorias: ["Cultural / Histórico", "Aventura / Naturaleza"],
    web: "https://bajatravesies.com.mx",
    facebook: "https://facebook.com/bajatravesies.ecoturismo",
    instagram: "https://instagram.com/bajatravesies",
    logo: "/images/socios/baja-travesies.png",
  },
  {
    nombre: "Baja Wine Tours",
    contacto: "Dora Villarino",
    ciudad: "Tijuana",
    telefono: "52 (664) 437 90 35",
    whatsapp: "5216645928594",
    email: "bajawinetours@hotmail.com",
    categorias: ["Enoturismo", "Wellness", "Corporativo / Incentivos", "Cultural / Histórico", "Turismo de Lujo", "Transporte"],
    facebook: "https://facebook.com/BajaWineTours",
    instagram: "https://instagram.com/vivevillarino",
    logo: "/images/socios/baja-wine-tours.png",
  },
  {
    nombre: "Border Tours & Transfers",
    contacto: "Luis Carlos Aguirre",
    ciudad: "Mexicali",
    telefono: "52 (686) 201 8837",
    whatsapp: "5216862018837",
    email: "contacto@bordertt.com",
    categorias: ["Transporte", "Reuniones / Congresos", "Bodas Destino", "Enoturismo", "Corporativo / Incentivos", "Turismo de Lujo", "Aventura / Naturaleza", "Cultural / Histórico", "Agencias de Viajes"],
    web: "https://bordertt.com",
    facebook: "https://facebook.com/bordertt",
    instagram: "https://instagram.com/bordertt",
    logo: "/images/socios/border-tours-transfers.png",
  },
  {
    nombre: "Calafia Turismo",
    contacto: "Verónica Ochoa",
    ciudad: "Ensenada",
    telefono: "52 (646) 124 8104",
    whatsapp: "5216461248104",
    email: "calafiaturismo@gmail.com",
    categorias: ["Enoturismo", "Cultural / Histórico", "Aventura / Naturaleza", "Wellness", "Corporativo / Incentivos"],
    web: "https://calafiaturismo.com",
    facebook: "https://facebook.com/profile.php?id=61571203943594",
    instagram: "https://instagram.com/calafiaturismo",
    logo: "/images/socios/calafia-turismo.png",
  },
  {
    nombre: "Hotel Coral & Marina",
    contacto: "Miriam Rosales",
    ciudad: "Ensenada",
    telefono: "52 (646) 116 8427",
    whatsapp: "5216461168427",
    email: "miriam.rosales@hotelcoral.com",
    categorias: ["Corporativo / Incentivos", "Transporte"],
    web: "https://hotelcoral.com",
    logo: "/images/socios/hotel-coral-marina.png",
  },
  {
    nombre: "Destinos Baja Tours",
    contacto: "Gloria Medina",
    ciudad: "Tijuana",
    telefono: "52 (664) 108 34 66",
    whatsapp: "5216641083466",
    email: "destinosbajatours@gmail.com",
    categorias: ["Enoturismo", "Reuniones / Congresos", "Turismo de Lujo", "Corporativo / Incentivos", "Agencias de Viajes", "Aventura / Naturaleza", "Transporte", "Cultural / Histórico"],
    web: "https://destinosbajatours.com",
    facebook: "https://facebook.com/search/top?q=destinos%20baja%20tours",
    instagram: "https://instagram.com/destinosbajatours",
    logo: "/images/socios/destinos-baja-tours.png",
  },
  {
    nombre: "Ensenada Tours",
    contacto: "Rafael Contreras",
    ciudad: "Ensenada",
    telefono: "52 (646) 947 6139",
    whatsapp: "5216469476139",
    email: "terratripsens@gmail.com",
    categorias: ["Enoturismo", "Reuniones / Congresos", "Wellness"],
    web: "https://ensenadatours.com.mx",
    facebook: "https://facebook.com/EnsTours",
    instagram: "https://instagram.com/ensenadatours",
    logo: "/images/socios/ensenada-tours.png",
  },
  {
    nombre: "Lomas Travel",
    contacto: "Alejandra Rios",
    ciudad: "Ensenada",
    telefono: "1 (998) 214 4943",
    whatsapp: "5219982144943",
    email: "arios@lomas-travel.com",
    categorias: ["Enoturismo", "Cultural / Histórico", "Agencias de Viajes"],
    web: "https://lomastravelbc.com",
    facebook: "https://facebook.com/LomasTravelBC",
    instagram: "https://instagram.com/lomastravel.dmc.bc",
    logo: "/images/socios/lomas-travel.png",
  },
  {
    nombre: "MQ Logistics Tours",
    contacto: "Israel Chavez",
    ciudad: "Mexicali",
    telefono: "52 (686) 185 4964",
    whatsapp: "5216861854964",
    email: "israel@mql.mx",
    categorias: ["Transporte", "Corporativo / Incentivos"],
    facebook: "https://www.facebook.com/p/MQLogistics-Tours-61571937366623/",
    logo: "/images/socios/mq-logistics-tours.png",
  },
  {
    nombre: "Premiere Tour",
    contacto: "Gilberto Gamiño",
    ciudad: "Tijuana",
    telefono: "52 (664) 296 3683",
    whatsapp: "5216642963683",
    email: "premiere.tour.operator@gmail.com",
    categorias: ["Enoturismo", "Reuniones / Congresos", "Transporte", "Turismo de Lujo"],
    web: "https://premieretour.com.mx",
    facebook: "https://facebook.com/premieretourmx",
    instagram: "https://instagram.com/premieretourmx",
    logo: "/images/socios/premiere-tour.png",
  },
  {
    nombre: "Autobuses Real Ejecutivo",
    contacto: "Aldo Ramírez",
    ciudad: "Tijuana",
    telefono: "52 (664) 274 1048",
    whatsapp: "16199473856",
    email: "aramirez@autobusesrealejecutivo.com",
    categorias: ["Transporte", "Enoturismo", "Corporativo / Incentivos", "Agencias de Viajes"],
    web: "https://autobusesrealejecutivo.com",
    facebook: "https://facebook.com/realejecutivo",
    instagram: "https://instagram.com/realejecutivo",
    logo: "/images/socios/autobuses-real-ejecutivo.png",
  },
  {
    nombre: "Sibaria Tours",
    contacto: "Karla Sing",
    ciudad: "Tijuana",
    telefono: "52 (664) 251 2200",
    whatsapp: "5216642512200",
    email: "karla@sibariatours.com",
    categorias: ["Enoturismo", "Reuniones / Congresos", "Wellness", "Corporativo / Incentivos", "Turismo de Lujo", "Transporte", "Cultural / Histórico"],
    web: "https://sibariatours.com",
    facebook: "https://facebook.com/Sibariatours",
    instagram: "https://instagram.com/sibariatoursdmc",
    logo: "/images/socios/sibaria-tours.png",
  },
  {
    nombre: "Tebsa Transportes",
    contacto: "Andreina Tenjo",
    ciudad: "Tijuana",
    telefono: "52 (663) 122 8891",
    whatsapp: "5216631228891",
    email: "servicioalcliente@tebsatransportes.com",
    categorias: ["Transporte", "Reuniones / Congresos", "Cultural / Histórico"],
    facebook: "https://facebook.com/tebsatransportes",
    instagram: "https://instagram.com/tebsa_bc",
    logo: "/images/socios/tebsa-transportes.png",
  },
  {
    nombre: "Viajes Aranfer",
    contacto: "Lourdes Gutierrez",
    ciudad: "Tijuana",
    telefono: "52 (664) 309 5286",
    whatsapp: "5216643095286",
    email: "gtzalourdes@gmail.com",
    categorias: ["Enoturismo", "Aventura / Naturaleza", "Wellness", "Agencias de Viajes"],
    facebook: "https://facebook.com/ViajesExcursionesAranfer",
    logo: "/images/socios/viajes-aranfer.png",
  },
  {
    nombre: "Vinamun Tours",
    contacto: "Belbeth Navarrete",
    ciudad: "Tijuana",
    telefono: "52 (664) 198 8221",
    whatsapp: "5216645047354",
    email: "touristeandobaja@gmail.com",
    categorias: ["Enoturismo", "Cultural / Histórico", "Turismo de Lujo"],
    facebook: "https://facebook.com/Vinamuntours",
    instagram: "https://instagram.com/vinamun",
    logo: "/images/socios/vinamun-tours.png",
  },
  {
    nombre: "Vino Sobre Ruedas",
    contacto: "Ivan Cortez",
    ciudad: "Ensenada",
    telefono: "52 (646) 197 2895",
    whatsapp: "5216461972895",
    email: "icortez@vinosobreruedas.com.mx",
    categorias: ["Enoturismo", "Reuniones / Congresos", "Cultural / Histórico", "Turismo de Lujo"],
    web: "https://vinosobreruedas.com.mx",
    facebook: "https://facebook.com/VinoSobreRuedas",
    instagram: "https://instagram.com/vinosobreruedas",
    logo: "/images/socios/vino-sobre-ruedas.png",
  },
];
