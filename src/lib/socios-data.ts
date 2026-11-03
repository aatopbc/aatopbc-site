export interface Diferenciador {
  icono: string;
  titulo: string;
  texto: string;
}

export interface GrupoCobertura {
  titulo: string;
  items: string[];
}

export interface MiembroEquipo {
  nombre: string;
  puesto: string;
  telefono?: string;
  email?: string;
}

export interface ContactoExtra {
  etiqueta: string;
  valor: string;
  href?: string;
}

export interface PerfilSocio {
  slug: string;
  nombre: string; // debe coincidir exacto con Socio.nombre en data.ts
  eslogan?: string;
  bio?: string[];
  aniosExperiencia?: string;
  segmentos?: string[];
  diferenciadores?: Diferenciador[];
  cobertura?: GrupoCobertura[];
  direccion?: string;
  equipo?: MiembroEquipo[];
  contactos?: ContactoExtra[];
}

export const perfilesSocios: PerfilSocio[] = [
  // ───────────────────────── Border Tours & Transfers ─────────────────────────
  {
    slug: "border-tours-transfers",
    nombre: "Border Tours & Transfers",
    eslogan: "Compartiendo Experiencias Extraordinarias",
    bio: [
      "Somos más que un proveedor de viajes: un aliado estratégico para empresas, organizaciones y viajeros que no tienen tiempo para imprevistos. Compartir experiencias extraordinarias no es solo nuestro lema — es lo que hacemos todos los días.",
      "Aunque somos 100% cachanillas y nos encuentras en Mexicali, operamos en todo Baja California, California (EE. UU.) y sus alrededores. Miembros activos de la AATOPBC.",
    ],
    aniosExperiencia: "10+ años",
    segmentos: [
      "B2B — Hoteles & Empresas",
      "MICE — Eventos de 1 a 5 días",
      "VIP — Ejecutivo & Grupos",
    ],
    diferenciadores: [
      { icono: "truck", titulo: "Flotilla Propia", texto: "Vehículos propios — sin intermediarios, sin sorpresas en calidad ni disponibilidad." },
      { icono: "handshake", titulo: "Convenios Exclusivos", texto: "Hoteles y restaurantes seleccionados en todo el estado para que tu experiencia sea completa." },
      { icono: "badge-check", titulo: "Registro Nacional de Turismo", texto: "Empresa formalmente registrada ante la Secretaría de Turismo — operación 100% legal." },
      { icono: "graduation-cap", titulo: "Guías y Choferes Certificados", texto: "Personal certificado por SECTURE y SCT. Profesionales, bilingües y comprometidos." },
      { icono: "shield-check", titulo: "Permisos y Seguros Comerciales", texto: "Placas federales, permisos vigentes y seguros comerciales para cada servicio." },
      { icono: "radar", titulo: "Seguimiento 24/7", texto: "Monitoreamos tu itinerario en tiempo real. Siempre disponibles, siempre al tanto." },
      { icono: "navigation", titulo: "Unidades con GPS y A/C", texto: "Toda la flota equipada con GPS activo y climatización — comodidad y seguridad garantizadas." },
      { icono: "languages", titulo: "Atención Bilingüe", texto: "Comunicación en español e inglés antes, durante y después de cada servicio." },
    ],
    cobertura: [
      { titulo: "Aeropuertos", items: ["Mexicali (MXL)", "Tijuana (TIJ)", "San Diego (SAN)", "Los Ángeles (LAX)", "Phoenix (PHX)"] },
      { titulo: "Baja California", items: ["Mexicali", "Tijuana", "Ensenada", "Tecate", "Rosarito", "San Felipe", "Valle de Guadalupe"] },
      { titulo: "Expediciones", items: ["Guerrero Negro", "Bahía de los Ángeles", "San Quintín", "Loreto", "Mulegé", "La Paz, BCS"] },
      { titulo: "California, EE. UU.", items: ["Disneyland Resort", "Universal Studios", "Six Flags", "SeaWorld"] },
    ],
    direccion: "Blvd. Benito Juárez 1588-8, Col. Insurgentes Oeste, C.P. 21280, Mexicali, B.C., México",
  },

  // ───────────────────────── Adixion ─────────────────────────
  {
    slug: "adixion",
    nombre: "Adixion Tour, Travel & DMC",
    eslogan: "The alternative experience",
    bio: [
      "Operador de turismo alternativo con sede en Mexicali y 17 años como experto en el destino. Diseña experiencias de aventura y naturaleza en Baja California: desde sandboard en las dunas de Mexicali hasta la Travesía Baja Coast to Coast, una caminata de más de 100 km del Océano Pacífico al Mar de Cortés ganadora del Premio a la Innovación Turística 2022.",
      "En temporada, sus viajes acercan al visitante a la ballena gris en Guerrero Negro, a las misiones de Loreto y al tiburón ballena en Bahía de los Ángeles.",
    ],
    aniosExperiencia: "17 años",
    diferenciadores: [
      { icono: "award", titulo: "Innovación turística", texto: "La Travesía Baja Coast to Coast ganó el Premio a la Innovación Turística 2022." },
      { icono: "compass", titulo: "Expertos en el destino", texto: "17 años de experiencia operando Baja California." },
    ],
    contactos: [
      { etiqueta: "Travesía Baja Coast to Coast", valor: "+52 686 189 48 43 · @travesiabajacoasttocoast", href: "https://wa.me/526861894843" },
    ],
  },

  // ───────────────────────── Baja Travesies ─────────────────────────
  {
    slug: "baja-travesies",
    nombre: "Baja Travesies",
    eslogan: "Conoce · Disfruta · Respeta",
    bio: [
      "Empresa dedicada al turismo de aventura en México. Su staff está formado por guías certificados como guías especializados en excursionismo por la Secretaría de Turismo Federal y exmiembros de grupos de rescate y montañismo, con experiencia basada en más de 21 años.",
      "Misión: conocer, disfrutar y respetar la naturaleza. Visión: ser la mejor opción en el Estado que incite a vivir la aventura, de explorar y convivir en exteriores con conciencia del entorno natural.",
    ],
    aniosExperiencia: "21+ años",
    diferenciadores: [
      { icono: "graduation-cap", titulo: "Guías certificados", texto: "Guías especializados en excursionismo certificados por la Secretaría de Turismo Federal." },
      { icono: "shield-check", titulo: "Experiencia en rescate", texto: "Staff con exmiembros de grupos de rescate y montañismo." },
      { icono: "compass", titulo: "Cursos", texto: "Cursos de primeros auxilios y de desarrollo integral humano." },
    ],
    cobertura: [
      { titulo: "Actividades", items: ["Rappel y rappel urbano", "Montañismo", "Senderismo", "Cañonismo", "Kayak", "Travesías (Baja 100, K-100)", "Camping", "Ruta del Vino", "Tours guiados", "Creación de senderos"] },
      { titulo: "Destinos y rutas", items: ["Cañón de Santa Rosa", "Laguna Hanson", "Parque Nacional San Pedro Mártir", "Picacho del Diablo", "Ruta de los Volcanes", "Matacanes y Chipitín", "Actividades en USA"] },
      { titulo: "Aparece como operador en", items: ["Mexicali", "Tecate", "Ensenada", "San Quintín", "San Felipe"] },
    ],
    contactos: [
      { etiqueta: "Celular México", valor: "(664) 484 78 71", href: "tel:+526644847871" },
      { etiqueta: "Celular USA", valor: "(619) 571 43 82", href: "tel:+16195714382" },
      { etiqueta: "Correo", valor: "bajatravesies@hotmail.com", href: "mailto:bajatravesies@hotmail.com" },
    ],
  },

  // ───────────────────────── Baja Wine Tours ─────────────────────────
  {
    slug: "baja-wine-tours",
    nombre: "Baja Wine Tours",
    eslogan: "Tus anfitriones en Baja California",
    bio: [
      "Pioneros en la creación, difusión y comercialización de La Ruta del Vino de Baja California y creadores de experiencias turísticas únicas. Cuentan con más de 30 años de experiencia en el medio del transporte turístico y alrededor de 16 años en atención a grupos de alto valor.",
      "Empresa legalmente constituida desde 2014 en Tijuana, opera con permisos y concesiones en regla otorgados por el Gobierno Federal y con flotilla propia (sedán, minivan, sprinter Mercedes Benz, JAC, entre otros).",
    ],
    aniosExperiencia: "30+ años en transporte turístico",
    segmentos: [
      "Maquiladoras y aseguradoras",
      "Grupos hoteleros y agencias automotrices",
      "Empresarios",
      "Viajes de familia y amigos",
    ],
    diferenciadores: [
      { icono: "award", titulo: "Premios", texto: "Reconocimiento a la Diversificación del Producto Turístico Mexicano en la categoría de Turismo Gastronómico en 2014 y 2015." },
      { icono: "award", titulo: "Fiestas de la Vendimia", texto: "Ganadores en la categoría \"Fiestas tradicionales\" en los premios Aire Libre Destino México 2024." },
      { icono: "route", titulo: "Pioneros de la Ruta del Vino", texto: "Creación, difusión y comercialización de La Ruta del Vino y de experiencias turísticas únicas." },
      { icono: "truck", titulo: "Flotilla propia", texto: "Sedán, minivan, sprinter Mercedes Benz (14, 17 y 20 plazas), JAC, Suburban y autobús." },
      { icono: "badge-check", titulo: "Formalidad", texto: "Constituida legalmente desde 2014, con permisos y concesiones federales en regla." },
      { icono: "users", titulo: "Servicios personalizados", texto: "Tours generales, de acompañantes, de integración, cenas temáticas, viajes de incentivos, paquetes y transporte a la medida." },
      { icono: "handshake", titulo: "Red de conexiones", texto: "Excelente red de relaciones comerciales que respalda cada servicio." },
    ],
    cobertura: [
      { titulo: "Transporte privado en", items: ["Tijuana", "Rosarito", "Ensenada", "Tecate", "Toda la península (hasta Los Cabos)"] },
    ],
    direccion: "Calle Ing. Juan Ojeda Robles 14716 Int. 6, Col. Buena Vista, Tijuana, Baja California",
    equipo: [
      { nombre: "Dora Villarino León", puesto: "Dirección", telefono: "664 437 9035", email: "bajawinetours@hotmail.com" },
      { nombre: "Guadalupe Pluma Delgado", puesto: "Ventas", telefono: "664 592 8594 · Oficina 664 625 1240", email: "ventas@bajawinetours.net" },
      { nombre: "Alejandra Rojas", puesto: "Facturación", telefono: "646 267 1337", email: "facturas@bajawinetours.net" },
    ],
  },

  // ───────────────────────── Calafia Turismo ─────────────────────────
  {
    slug: "calafia-turismo",
    nombre: "Calafia Turismo",
    bio: [
      "Operador con sede en Ensenada especializado en enoturismo, cultura, historia y naturaleza: city tours, rutas del vino y la Antigua Ruta, tour arqueológico, tour de cerveza artesanal, gastronomía ancestral con comunidades nativas y avistamiento de ballena gris.",
      "Sus servicios son privados, con transportación y actividades incluidas (mínimo 2 personas) y guía acreditado o chofer guía.",
    ],
    diferenciadores: [
      { icono: "badge-check", titulo: "Guía federal certificada", texto: "Verónica Ochoa, guía federal NOM-08 · RNT 31020010019." },
      { icono: "handshake", titulo: "Comunidades locales", texto: "Experiencias con la comunidad Kumiai de San Antonio Necua y cocineras ancestrales del Valle de Guadalupe." },
      { icono: "compass", titulo: "Guías especializados", texto: "Avistamiento de ballena gris con guía titular Mtro. Francisco Detrell." },
    ],
    equipo: [
      { nombre: "Verónica Ochoa", puesto: "Guía federal NOM-08 · RNT 31020010019", telefono: "646 124 8104", email: "calafiaturismo@gmail.com" },
    ],
  },

  // ───────────────────────── Hotel Coral & Marina ─────────────────────────
  {
    slug: "hotel-coral-marina",
    nombre: "Hotel Coral & Marina",
    eslogan: "Tu escape frente al mar en Ensenada",
    bio: [
      "Resort de cinco estrellas frente al Pacífico, en Ensenada, con suites con vista al mar, una marina de 353 posiciones, spa de servicio completo, restaurantes y fácil acceso a la región vinícola del Valle de Guadalupe.",
      "Ofrece salones para conferencias, convenciones y bodas frente a la Bahía de Todos Santos, además de actividades y tours, incluidas catas guiadas de vino en el Valle de Guadalupe.",
    ],
    diferenciadores: [
      { icono: "navigation", titulo: "Marina de 353 posiciones", texto: "Marina privada de servicio completo frente a la bahía." },
      { icono: "users", titulo: "Conferencias y bodas", texto: "Salones con mesas y mantelería; renta de espacio sin costo para grupos de 50 o más. Bodas en los salones o en la playa La Playita." },
      { icono: "compass", titulo: "Actividades y tours", texto: "Albercas climatizadas, deportes acuáticos y catas guiadas de vino en el Valle de Guadalupe." },
    ],
    direccion: "Km 103 Carretera Tijuana–Ensenada No. 3421, Zona Playitas, Ensenada, B.C.",
    contactos: [
      { etiqueta: "Hotel", valor: "(646) 175-0000 · USA 1-800-862-9020", href: "tel:+526461750000" },
      { etiqueta: "Marina y reservaciones de tours", valor: "+52 (646) 175-0050 · marina@hotelcoral.com", href: "mailto:marina@hotelcoral.com" },
      { etiqueta: "Spa (8:00–20:00)", valor: "cspa@hotelcoral.com", href: "mailto:cspa@hotelcoral.com" },
    ],
  },

  // ───────────────────────── Destinos Baja Tours ─────────────────────────
  {
    slug: "destinos-baja-tours",
    nombre: "Destinos Baja Tours",
    bio: [
      "Tours privados y personalizados con salida desde Tijuana, con opción de recogida en hotel, aeropuerto o cruce fronterizo Tijuana–San Ysidro. El itinerario se adapta a los intereses y necesidades de cada grupo.",
      "La operación está respaldada por transporte turístico, chofer certificado y atención personalizada durante todo el recorrido. Ideal para grupos privados, familias, parejas, amigos y celebraciones especiales.",
    ],
    cobertura: [
      { titulo: "Destinos que recorre", items: ["Tijuana", "Rosarito y Puerto Nuevo", "Tecate", "Ensenada y La Bufadora", "Valle de Guadalupe", "San Quintín"] },
    ],
    diferenciadores: [
      { icono: "shield-check", titulo: "Chofer certificado", texto: "Transporte turístico con chofer certificado y atención personalizada." },
      { icono: "users", titulo: "Servicio privado", texto: "Itinerario adaptable a los intereses del grupo, con recogida en hotel o cruce fronterizo." },
    ],
  },

  // ───────────────────────── Ensenada Tours ─────────────────────────
  {
    slug: "ensenada-tours",
    nombre: "Ensenada Tours",
    eslogan: "Ensenada Tours & DMC",
    bio: [
      "Empresa privada del ramo turístico con base en Ensenada que inició actividades en el año 2000. Ofrece transporte privado terrestre para personas de negocios y de placer (desde aeropuertos, hoteles, empresas o domicilios), diseño de itinerarios, viajes de incentivos, recorridos turísticos y promoción de la oferta turística regional.",
      "Fundada por Rafael Contreras, CEO fundador, es socia de la AATOPBC y de FETRAEX (Federación de Transporte y Experiencias en Rutas Vinícolas).",
    ],
    aniosExperiencia: "20+ años",
    diferenciadores: [
      { icono: "route", titulo: "Itinerarios a la medida", texto: "Diseño de itinerarios ajustados a presupuesto, preferencias y necesidades." },
      { icono: "handshake", titulo: "Alianzas", texto: "Alianzas comerciales con FETRAEX, KUMIAY y AATOPBC." },
      { icono: "compass", titulo: "Tours de temporada", texto: "Tiburón ballena, ballena gris y Sierra San Pedro Mártir." },
    ],
    cobertura: [
      { titulo: "Recorridos", items: ["Baja California", "Baja California Sur"] },
      { titulo: "Transporte terrestre", items: ["Baja California", "Los Ángeles", "San Diego"] },
      { titulo: "Tours", items: ["Valle de Guadalupe", "La Bufadora", "Cervecero artesanal", "Gastronómico del mar", "Cava de quesos"] },
    ],
    direccion: "Av. Adolfo López Mateos #925 L-15, Plaza Blanca, 2.º piso, Zona Centro, Ensenada, B.C.",
    equipo: [
      { nombre: "Rafael Contreras", puesto: "CEO fundador" },
    ],
    contactos: [
      { etiqueta: "Oficina", valor: "(646) 174 06 51", href: "tel:+526461740651" },
      { etiqueta: "Cotizaciones", valor: "ensenadatours@outlook.com", href: "mailto:ensenadatours@outlook.com" },
      { etiqueta: "Horario", valor: "Lunes a viernes 9:00–17:00 · Sábado 9:00–13:00" },
    ],
  },

  // ───────────────────────── Lomas Travel ─────────────────────────
  {
    slug: "lomas-travel",
    nombre: "Lomas Travel",
    eslogan: "Lomas Travel DMC, Baja California",
    bio: [
      "DMC con sede en Ensenada que convierte los viajes en experiencias perfectas: tours en la Ruta del Vino del Valle de Guadalupe y traslados VIP personalizados desde el aeropuerto de Tijuana, San Diego o Los Ángeles, con traslados fronterizos certificados.",
    ],
    diferenciadores: [
      { icono: "badge-check", titulo: "Traslados fronterizos certificados", texto: "Traslados VIP personalizados con servicio fronterizo certificado." },
      { icono: "route", titulo: "Ruta del Vino", texto: "Tours en la Ruta del Vino del Valle de Guadalupe." },
    ],
    cobertura: [
      { titulo: "Traslados VIP desde", items: ["Aeropuerto de Tijuana", "San Diego", "Los Ángeles"] },
    ],
    direccion: "Lomas de Valle Verde, 22810 Ensenada, B.C.",
    contactos: [
      { etiqueta: "Teléfono", valor: "646 350 0116", href: "tel:+526463500116" },
      { etiqueta: "Ventas", valor: "ventasbc@lomas-travel.com", href: "mailto:ventasbc@lomas-travel.com" },
    ],
  },

  // ───────────────────────── MQ Logistics Tours ─────────────────────────
  {
    slug: "mq-logistics-tours",
    nombre: "MQ Logistics Tours",
    bio: [
      "Su objetivo es ofrecer viajes cómodos, seguros y personalizados, diseñados para satisfacer todas las necesidades de transporte y turismo.",
    ],
    direccion: "Circuito Antonio Valdez Herrera 2400, Islas Agrarias A, Mexicali, México",
    contactos: [
      { etiqueta: "Teléfono", valor: "686 280 1222", href: "tel:+526862801222" },
      { etiqueta: "Correo alterno", valor: "fernanda@mql.mx", href: "mailto:fernanda@mql.mx" },
    ],
  },

  // ───────────────────────── Premiere Tour ─────────────────────────
  {
    slug: "premiere-tour",
    nombre: "Premiere Tour",
    eslogan: "Premiere Tour High Style",
    bio: [
      "Operadora turística originaria de la ciudad de Tijuana, B.C., enfocada en brindar experiencias turísticas de primer nivel en el estado de Baja California y sus alrededores. Se caracteriza por el placer, el bienestar y la satisfacción del servicio.",
    ],
    direccion: "Ing. Juan Ojeda Robles 14802, Guadalupe Victoria, Tijuana, México",
  },

  // ───────────────────────── Autobuses Real Ejecutivo ─────────────────────────
  {
    slug: "autobuses-real-ejecutivo",
    nombre: "Autobuses Real Ejecutivo",
    eslogan: "Viajar es real, hazlo con Real Ejecutivo.",
    bio: [
      "Empresa de transporte y tours en México y Estados Unidos con sede en Tijuana. Trabajan dedicadamente por conseguir el máximo nivel de calidad en sus servicios: se encargan de todo durante el viaje para que disfrutes la comodidad y seguridad que ofrecen. La seguridad es lo más importante para ellos y su prioridad es un viaje cómodo y sin preocupaciones.",
      "Operan bajo tres marcas: Real Ejecutivo (renta de transporte en México), Road Explorers (autobuses con cruce a USA desde San Diego) y Copérnico Tours (tours todo incluido en USA y la Baja).",
    ],
    segmentos: ["Viajes corporativos", "Tours en México", "Tours en USA", "Traslados para eventos"],
    diferenciadores: [
      { icono: "truck", titulo: "Flota para cualquier grupo", texto: "Autobuses de 43 a 58 asientos, Sprinters (2022-2023) de 19 y 20 asientos y JAC (2022) de 14 y 16 asientos." },
      { icono: "navigation", titulo: "Unidades equipadas", texto: "Asientos reclinables, baños (autobuses), aire acondicionado, pantallas, cajuela y enchufes para cargar tu teléfono." },
      { icono: "shield-check", titulo: "Inspección en USA", texto: "Unidades inspeccionadas por autoridades de EE. UU. y reguladas por DOT (FMCSA) y CHP (California Highway Patrol)." },
      { icono: "badge-check", titulo: "Puntualidad y profesionalismo", texto: "Puntualidad, profesionalismo y seguridad en cada servicio." },
      { icono: "route", titulo: "Todo incluido", texto: "Con Copérnico Tours: seguro de viaje, guía a bordo, hospedaje, fotografías profesionales y asesoría personalizada." },
    ],
    cobertura: [
      { titulo: "Servicios en USA", items: ["San Diego", "Los Ángeles", "Las Vegas", "Six Flags", "Disneyland", "Universal Studios", "Yosemite", "San Francisco", "Big Bear"] },
      { titulo: "Tours todo incluido en la Baja", items: ["Valle de Guadalupe", "Loreto y Mulegé", "Los Cabos", "Guerrero Negro"] },
    ],
    direccion: "Ing. Juan Ojeda Robles No. 14952-1, Col. Guadalupe Victoria, Tijuana, México",
    contactos: [
      { etiqueta: "Oficina", valor: "(664) 485 9520", href: "tel:+526644859520" },
      { etiqueta: "USA (Road Explorers)", valor: "+1 (619) 530 9718", href: "tel:+16195309718" },
      { etiqueta: "Correo general", valor: "info@autobusesrealejecutivo.com", href: "mailto:info@autobusesrealejecutivo.com" },
      { etiqueta: "Copérnico Tours", valor: "copernicotours.com · (664) 590 4454 · copernicobc@gmail.com · @copernicotours", href: "https://copernicotours.com" },
    ],
  },

  // ───────────────────────── Sibaria Tours ─────────────────────────
  {
    slug: "sibaria-tours",
    nombre: "Sibaria Tours",
    eslogan: "Experiencias únicas con un servicio de transporte exclusivo",
    bio: [
      "DMC con sede en Tijuana que diseña experiencias turísticas personalizadas en Tijuana, Rosarito, Ensenada, San Felipe, San Quintín, Tecate, Valle de Guadalupe y Mexicali.",
      "Cuenta con vehículos modernos equipados con las últimas comodidades y que cumplen con las regulaciones estatales y federales.",
    ],
    diferenciadores: [
      { icono: "truck", titulo: "Flota moderna", texto: "Volkswagen Crafter (19 pax), Toyota Hiace (10 pax) y VW Caddy (4 pax)." },
      { icono: "users", titulo: "Unidad a tu disposición", texto: "Unidad a disposición todo el día o con chofer, para viajes corporativos, transporte ejecutivo, traslados programados y viajes de placer." },
      { icono: "award", titulo: "Descuentos", texto: "Hasta 20% de descuento en experiencias de 2 o más días (Camino de Viñedos)." },
    ],
    cobertura: [
      { titulo: "Destinos", items: ["Tijuana", "Rosarito", "Ensenada", "San Felipe", "San Quintín", "Tecate", "Valle de Guadalupe", "Mexicali"] },
    ],
    contactos: [
      { etiqueta: "Ventas", valor: "ventas@sibariatours.com", href: "mailto:ventas@sibariatours.com" },
      { etiqueta: "Teléfono", valor: "664 526-6699", href: "tel:+526645266699" },
      { etiqueta: "USA", valor: "+1 619 630-1020", href: "tel:+16196301020" },
    ],
  },

  // ───────────────────────── Tebsa Transportes ─────────────────────────
  {
    slug: "tebsa-transportes",
    nombre: "Tebsa Transportes",
    bio: [
      "Especialistas en transporte ejecutivo, turístico, corporativo y de grupos, con base en Baja California y capacidad de operación a nivel nacional. No solo rentan unidades: se encargan de la logística y de la atención personalizada.",
    ],
    segmentos: ["Transporte ejecutivo", "Transporte turístico", "Transporte corporativo", "Grupos"],
    diferenciadores: [
      { icono: "badge-check", titulo: "Registro Nacional de Turismo", texto: "RNT 35020040008 · RET BC00402107." },
      { icono: "users", titulo: "Logística y atención personalizada", texto: "Además de rentar unidades, se encargan de la logística de cada servicio." },
      { icono: "truck", titulo: "Renta de autobuses", texto: "Servicio de alquiler de autobuses y camiones para viajes y transporte de grupos." },
    ],
    cobertura: [
      { titulo: "Operación", items: ["Baja California", "A nivel nacional"] },
    ],
  },

  // ───────────────────────── Viajes Aranfer ─────────────────────────
  {
    slug: "viajes-aranfer",
    nombre: "Viajes Aranfer",
    bio: [
      "Agencia de viajes con sede en Tijuana: una empresa 100% confiable y profesional, con más de 20 años de experiencia en el mundo turístico.",
    ],
    aniosExperiencia: "20+ años",
    direccion: "Blvd. Fundadores No. 2549-2, Col. Juárez, Tijuana, México",
    contactos: [
      { etiqueta: "Oficina", valor: "664 634 0394", href: "tel:+526646340394" },
    ],
  },

  // ───────────────────────── Vinamun Tours ─────────────────────────
  {
    slug: "vinamun-tours",
    nombre: "Vinamun Tours",
    eslogan: "Expertos en experiencias, grupos, incentivos, eventos y enoturismo",
    bio: [
      "VINAMUN DMC es una empresa especializada en turismo receptivo, enoturismo, transportación, logística y experiencias personalizadas en Baja California. Cuenta con amplio conocimiento del destino, una sólida red de proveedores y atención personalizada para garantizar experiencias memorables.",
      "Es el aliado ideal para agencias de viajes, operadores turísticos, meeting planners y empresas que buscan un socio local confiable.",
    ],
    segmentos: ["Agencias de viajes", "Operadores turísticos", "Meeting planners", "Empresas"],
    diferenciadores: [
      { icono: "users", titulo: "Eventos y viajes de incentivos", texto: "Eventos corporativos (incluido el evento de fin de año) y viajes de incentivos en Baja California." },
      { icono: "compass", titulo: "Experiencias a la medida", texto: "Experiencias personalizadas, como la experiencia en La Bufadora." },
      { icono: "award", titulo: "Presencia en IBTM Americas", texto: "Expositor en el directorio de IBTM Americas (stand 439, Baja California)." },
    ],
    cobertura: [
      { titulo: "Operación", items: ["Baja California"] },
    ],
    direccion: "Calle Álamo #21406, Col. Ampliación Guaycura, Tijuana, Baja California, C.P. 22214",
  },

  // ───────────────────────── Vino Sobre Ruedas ─────────────────────────
  {
    slug: "vino-sobre-ruedas",
    nombre: "Vino Sobre Ruedas",
    eslogan: "Turismo del vino y transporte para eventos",
    bio: [
      "Operador boutique de turismo del vino con sede en Baja California, especializado en el diseño y la operación de experiencias curadas que conectan territorio, cultura y gastronomía, con amplia experiencia en logística, grupos internacionales y diseño de viajes premium.",
    ],
    segmentos: [
      "Viajeros culturales",
      "Amantes del vino y la gastronomía",
      "Grupos privados y viajeros premium",
      "Planners y tour operators",
    ],
    contactos: [
      { etiqueta: "Correo", valor: "info@vinosobreruedas.com.mx", href: "mailto:info@vinosobreruedas.com.mx" },
      { etiqueta: "Redes", valor: "@vinosobreruedas (Facebook e Instagram)" },
    ],
  },
];

export function getPerfilSocio(slug: string): PerfilSocio | undefined {
  return perfilesSocios.find((p) => p.slug === slug);
}

export function getSlugForSocio(nombre: string): string | undefined {
  return perfilesSocios.find((p) => p.nombre === nombre)?.slug;
}
