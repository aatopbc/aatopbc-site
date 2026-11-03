export interface DatoDestino {
  titulo: string;
  texto: string;
}

export interface ActividadDestino {
  nombre: string;
  descripcion: string;
}

export interface Destino {
  slug: string;
  nombre: string;
  eslogan: string;
  subtitulo: string;
  descripcion: string[];
  datos: DatoDestino[];
  actividades: ActividadDestino[];
  imagenHero: string;
  galeria: string[];
  fuente: string;
}

export const destinos: Destino[] = [
  {
    slug: "mexicali",
    nombre: "Mexicali",
    eslogan: "La ciudad que capturó al sol",
    subtitulo: "Capital vibrante en el corazón del desierto",
    descripcion: [
      "Capital de Baja California, a orillas del Río Colorado y muy cerca de la Laguna Salada. Es la ciudad con mayor oferta de comida china del país y un referente en cortes de carne y cerveza artesanal.",
      "Su Barrio Chinesca, nombrado Barrio Mágico de México en 2023, conserva más de un siglo de historia con túneles y tradiciones que narran la llegada de la comunidad china a la región.",
      "Fundada en 1903 y capital del estado desde 1915, hoy combina turismo de negocios, salud y aventura, desde las dunas de Cuervitos hasta el único río navegable de Baja California, el Río Hardy.",
    ],
    datos: [
      { titulo: "Fundación", texto: "Fundada en 1903, capital del estado desde 1915." },
      { titulo: "Fiestas del Sol", texto: "Cerca de 360,000 asistentes y 300 expositores cada año." },
      { titulo: "Río Hardy", texto: "El único río navegable de Baja California." },
      { titulo: "La Chinesca", texto: "Barrio Mágico de México desde 2023." },
    ],
    actividades: [
      { nombre: "Centro Histórico", descripcion: "El corazón cultural de la ciudad, entre arquitectura de principios del siglo XX y vida cotidiana." },
      { nombre: "La Chinesca", descripcion: "Túneles y callejones que narran la historia de la migración china en Mexicali." },
      { nombre: "Dunas de Cuervitos", descripcion: "Sandboarding y aventura en las dunas del desierto mexicalense." },
      { nombre: "Ruta de la Cerveza", descripcion: "Cervecerías artesanales galardonadas varios años como las mejores del estado." },
      { nombre: "Cerro Prieto / Centinela", descripcion: "Senderismo con vistas panorámicas del valle." },
      { nombre: "Río Hardy", descripcion: "Kayak y paseos en el único río navegable de Baja California." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/674f6b71cff1d761eb702721_MEX_CUERVITOS-2%20Large.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6791577336a7c8f6283515e4_MEX_CUERVITOS-5%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672542c71967404934b113e1_MEX_Chinesca%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6791571d3026d8602594f69b_MEX_Amigos-5%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6791571f3d70ebf24376eba6_MXLI_centro%202%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b8e5cbcba93e6cb7f1ba9a_Mural%20Mexicali%201680x1050.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b8ec524d4b6f0d6235d924_mxl1-p-1080.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/mexicali",
  },
  {
    slug: "tijuana",
    nombre: "Tijuana",
    eslogan: "¡La frontera más visitada del mundo!",
    subtitulo: "Puerta binacional y un destino de clase mundial",
    descripcion: [
      "Ser la frontera más visitada del mundo no es casualidad: la gastronomía, la cultura y la escena artística han posicionado a Tijuana como uno de los mejores destinos para visitar en familia, en pareja o con amigos.",
      "Es sede del CBX, el primer puente peatonal binacional del mundo, que conecta el Aeropuerto Internacional de Tijuana directamente con una terminal en San Diego, California.",
      "Su ubicación estratégica y sus servicios de clase mundial la han convertido en un referente de turismo de salud, bienestar y negocios, además de una vida nocturna con décadas de historia.",
    ],
    datos: [
      { titulo: "Guía Michelin", texto: "Incluida en la Guía Michelin 2024, con restaurantes y Bib Gourmand reconocidos." },
      { titulo: "Cerveza artesanal", texto: "Más de 30 productores de cerveza artesanal en la ciudad." },
      { titulo: "CBX", texto: "El primer puente binacional peatonal del mundo conecta Tijuana con San Diego." },
      { titulo: "Muro Fronterizo", texto: "Convertido en lienzo de arte y expresión binacional." },
    ],
    actividades: [
      { nombre: "Cultura del Taco", descripcion: "Recorridos gastronómicos por la capital no oficial del taco." },
      { nombre: "Avenida Revolución", descripcion: "Arte, música y vida nocturna en el corazón histórico de la ciudad." },
      { nombre: "Guía Michelin", descripcion: "Restaurantes de autor reconocidos internacionalmente." },
      { nombre: "Ruta de la Cerveza", descripcion: "Cervecerías artesanales premiadas en la puerta del enoturismo bajacaliforniano." },
      { nombre: "Deporte y espectáculos", descripcion: "Xolos, Toros y Zonkeys: fútbol, béisbol y básquetbol con gran ambiente local." },
      { nombre: "Muro Fronterizo", descripcion: "Un símbolo histórico transformado en arte urbano." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/674f5b4ea1e14da9a12d31f0_TJ_Arco%20Revu%202%20Large.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6725436f3c3e653652c75491_TJ_Museo%20del%20Taco%2007%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5eda296ef314e3f84dea_04%20Xolos%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ed9e9461c6882e1a3bd_05%20Caesars%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ed72f3ea48ad391c192_TJ_Centro-01%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ed75bf9fde9732f87c1_TJ_cerveza-4%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b39230871f5c23aebd2789_Tijuana%20Wallpaper%201600x1200.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/tijuana",
  },
  {
    slug: "tecate",
    nombre: "Tecate",
    eslogan: "¡El único Pueblo Mágico ubicado en la frontera!",
    subtitulo: "Un Pueblo Mágico cálido y cautivador",
    descripcion: [
      "Tecate es el único Pueblo Mágico de México ubicado sobre la frontera, punto de partida de la ruta del vino conocida como la Puerta Norte, con algunas de las vinícolas más antiguas del estado.",
      "Es hogar de la mundialmente famosa cerveza Tecate y de Rancho La Puerta, distinguido como 'Mejor Spa' en más de diez ocasiones por los World's Best Awards.",
      "A las afueras del pueblo se encuentra La Rumorosa, una de las joyas naturales de Baja California, con formaciones rocosas y paisajes que invitan a la aventura.",
    ],
    datos: [
      { titulo: "Pueblo Mágico", texto: "Fundado en 1892; nombrado Pueblo Mágico por SECTUR en 2012." },
      { titulo: "La Rumorosa", texto: "Carretera serpenteante y formaciones rocosas icónicas del estado." },
      { titulo: "Pan artesanal", texto: "Reconocido como uno de los mejores panes artesanales del mundo." },
      { titulo: "Guía Michelin", texto: "El restaurante Amores recibió 'Mejor Servicio' en la Guía Michelin 2024." },
    ],
    actividades: [
      { nombre: "Ruta del Vino: Puerta Norte", descripcion: "Más de 10 vinícolas en el Valle de Tanamá y San Valentín." },
      { nombre: "Cervecería Tecate", descripcion: "La historia de la cerveza en su lugar de origen." },
      { nombre: "La Rumorosa", descripcion: "Senderismo y miradores entre formaciones rocosas monumentales." },
      { nombre: "Cerro Cuchumá", descripcion: "Aventura y vistas panorámicas del Pueblo Mágico." },
      { nombre: "Pinturas rupestres El Vallecito", descripcion: "Arte rupestre milenario de la región Kumiai." },
      { nombre: "Rancho La Puerta", descripcion: "Bienestar y relajación en uno de los mejores spas del mundo." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/674f58698c7139e54f85efb3_TKT_sendero%203%20Large.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5f0220ffc86da56d1d2e_TEC_parque%20centro-2%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67903738f6761e75a905bb13_TEC_cafecito-3%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5efff2789a32349aeb62_TEC_cocina%20que%20canta-5%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6790373624d6a6cd57164bdd_TEC_ENCINO%20DE%20PIEDRA-2%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5f0263d1f4c3cbcfa773_TEC_rancho%20la%20puerta-4%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b629c09892affd352ec53e_Tecate%20Wallpaper%201680x1050.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/tecate",
  },
  {
    slug: "ensenada",
    nombre: "Ensenada",
    eslogan: "La Capital del Vino Mexicano",
    subtitulo: "Un paraíso entre valles y el mar",
    descripcion: [
      "Rodeada por el Pacífico y el Golfo de California, Ensenada produce más del 70% del vino de México en sus siete valles vitivinícolas, entre ellos el icónico Valle de Guadalupe.",
      "Es el puerto más visitado del Pacífico mexicano, con más de 300 cruceros y un millón de cruceristas al año, además de ser capital mundial del off-road y sede de la Score Baja 1000.",
      "Cuenta con el Parque Nacional Constitución de 1857, la Laguna Hanson y playas como San Miguel, reconocida como una de las mejores reservas de surf del mundo.",
    ],
    datos: [
      { titulo: "Vino mexicano", texto: "Más del 70% del vino de México se produce en sus 7 valles." },
      { titulo: "Puerto de cruceros", texto: "Más de 300 cruceros y un millón de cruceristas al año." },
      { titulo: "Off-road", texto: "Sede de la mítica carrera Score Baja 1000." },
      { titulo: "Surf mundial", texto: "Playa San Miguel, sexta reserva mundial del surfing." },
    ],
    actividades: [
      { nombre: "Ruta del Vino", descripcion: "Recorridos y catas por los 7 valles vitivinícolas, incluido el Valle de Guadalupe." },
      { nombre: "La Bufadora", descripcion: "Uno de los géiseres marinos más grandes del mundo." },
      { nombre: "Ruta de la Cerveza", descripcion: "Cervecerías artesanales con identidad propia." },
      { nombre: "Surf en San Miguel", descripcion: "Olas de clase mundial en la costa de Ensenada." },
      { nombre: "Avistamiento de ballena gris", descripcion: "Temporada de avistamiento frente a sus costas." },
      { nombre: "Ruta Wellness entre viñedos", descripcion: "Spa, yoga y mindfulness rodeado de vides." },
    ],
    imagenHero: "/images/destinos/ensenada-hero.jpg",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b8e4bb77ca169e0561eb3c_Ensenada%20Wallpaper%201680x1050.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ea39c8038a488360827_ENS_Vin%CC%83edos%20La%20Reina%203%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/66d21edb833dab576641657f_ENS_Carreta%20El%20Yiyo%2002%20de%20taman%CC%83o%20grande.jpeg",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ea6c9614f13fc978e17_ENS_Barco%2002%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ea6e9416fa30d6c2a1c_ENS_Damiana%202%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672d5ea63e5eb70a5670c8ad_ENS_Santo%20Tomas%2002%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c9f34f64a5a21c97fb512d_ens1.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/ensenada",
  },
  {
    slug: "rosarito",
    nombre: "Rosarito",
    eslogan: "¡Lo mejor del Pacífico Mexicano te da la bienvenida!",
    subtitulo: "Paraíso playero y cultural",
    descripcion: [
      "Destino ideal para actividades acuáticas como el surf y el buceo, Rosarito reúne algunas de las mejores olas de la región y el único arrecife artificial del estado.",
      "Su platillo insignia es la langosta estilo Puerto Nuevo, servida con frijoles, arroz y tortillas de harina sobaqueras; en la Villa de la Langosta se sirven cerca de 100,000 langostas al año.",
      "Fue sede del Tianguis Turístico de México 2025 y es también hogar del Baja Beach Fest, uno de los festivales de música más importantes del verano en la región.",
    ],
    datos: [
      { titulo: "Puerto Nuevo", texto: "Cerca de 100,000 langostas servidas al año en su famosa Villa de la Langosta." },
      { titulo: "Surf", texto: "Miles de surfistas visitan sus playas cada año." },
      { titulo: "Arrecife artificial", texto: "El único arrecife artificial de Baja California." },
      { titulo: "Turismo 2025", texto: "Sede del Tianguis Turístico de México en 2025." },
    ],
    actividades: [
      { nombre: "Surf en Playas de Rosarito", descripcion: "Escuelas y spots para todos los niveles." },
      { nombre: "Langosta Puerto Nuevo", descripcion: "La tradición gastronómica más reconocida del Pacífico bajacaliforniano." },
      { nombre: "Rappel en el Arco de Popotla", descripcion: "Aventura frente al mar." },
      { nombre: "Buceo y Parque Submarino", descripcion: "Exploración del arrecife artificial de Rosarito." },
      { nombre: "Artesanías locales", descripcion: "Piezas hechas a mano en Puerto Nuevo y Popotla." },
      { nombre: "Baja Beach Fest", descripcion: "Uno de los festivales de música más esperados del verano." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/674f6c892fb1d0562ca9c94f_RS_Muelle%20Large.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6729086803fda7bf3ced2d17_30%20El%20Descanso%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67254290a12d068efaba760e_ROS_Surf-05%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c0c43727d6379dbd12ba78_ROS_Langosta%2003%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c0c44a970adb21a180e9f4_ROS_Langosta%2004%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672908689903b7c0737b1271_16%20El%20Descanso%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b38a8346b667369e7e8d36_Rosarito%20Wallpaper%201600x1200.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/rosarito",
  },
  {
    slug: "san-quintin",
    nombre: "San Quintín",
    eslogan: "¡Aventuras desde la sierra hasta la bahía!",
    subtitulo: "Aventura y sabor en la costa del Pacífico",
    descripcion: [
      "La Bahía de San Quintín es uno de los mejores destinos de pesca deportiva del Pacífico y un importante productor de ostión y abulón, dos de los sabores más apreciados de Baja California.",
      "Es puerta de entrada a paisajes naturales excepcionales: la Sierra de San Pedro Mártir, la Bahía de los Ángeles, Cataviña y los humedales de San Quintín.",
      "La región combina una fuerte tradición agrícola —líder en producción de berries orgánicas— con playas y volcanes extintos que invitan a la exploración.",
    ],
    datos: [
      { titulo: "Ostión", texto: "Más de 100 toneladas de ostión de calidad producidas al año." },
      { titulo: "Sierra San Pedro Mártir", texto: "Uno de los cielos más claros de México, con biodiversidad única." },
      { titulo: "Berries orgánicas", texto: "Región líder en producción de berries para mercado nacional e internacional." },
      { titulo: "Tiburón ballena", texto: "Avistamiento y nado en Bahía de los Ángeles." },
    ],
    actividades: [
      { nombre: "Ostioneras", descripcion: "Visita las granjas donde se cultiva el ostión más fresco de la región." },
      { nombre: "Kayak en los humedales", descripcion: "Recorridos entre manglares y fauna silvestre." },
      { nombre: "Avistamiento de tiburón ballena", descripcion: "Nado con el pez más grande del océano en Bahía de los Ángeles." },
      { nombre: "Sierra de San Pedro Mártir", descripcion: "Senderismo y paisajes de montaña en pleno desierto." },
      { nombre: "Pinturas rupestres en Cataviña", descripcion: "Arte rupestre milenario entre formaciones rocosas." },
      { nombre: "Pesca deportiva", descripcion: "Una de las bahías más productivas del Pacífico mexicano." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672538445b794da3bbac3bf2_SQ_BDLA%20tiburon%20ballena-03%20de%20taman%CC%83o%20grande.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67253844ed9a8d687d97fb8d_SQ_BDLA%20tiburon%20ballena-09%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67253844db0920a9f4aa817e_SQ_BDLA%20la%20gringa%20-1%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67253844fc92efd530f9dd69_SQ_BDLA%20playa%20blanca-4%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/6725384349764f48eab89891_SQ_humedales-10%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67253843525dbdf85e6efa60_SQ_SPM%20%20amanecer-8%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b39ed2bd220745ab9b56f8_San%20Quintin%20Wallpaper%201680x1050.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/san-quintin",
  },
  {
    slug: "san-felipe",
    nombre: "San Felipe",
    eslogan: "¡Sumérgete en la calidez del Golfo de California!",
    subtitulo: "Aguas cálidas en el Acuario del Mundo",
    descripcion: [
      "San Felipe es famoso por sus mareas de gran amplitud y sus aguas cálidas, en contraste con los grandes cerros de arena que rodean la bahía.",
      "Su gastronomía destaca por la frescura de sus productos del mar, celebrada en eventos como el Festival del Camarón y el Festival de la Almeja.",
      "A pocos minutos de la ciudad se encuentra el Valle de los Gigantes, una reserva ecológica con cardones que alcanzan casi 20 metros de altura.",
    ],
    datos: [
      { titulo: "Historia", texto: "Bautizada como San Felipe en 1746 por el jesuita Fernando Consag." },
      { titulo: "Valle de los Gigantes", texto: "Cardones de hasta 20 metros de altura en plena reserva ecológica." },
      { titulo: "Pesca deportiva", texto: "Uno de los destinos icónicos del Golfo de California para la pesca." },
      { titulo: "Isla Consag", texto: "Nombrada en honor al sacerdote que cartografió la región." },
    ],
    actividades: [
      { nombre: "Valle de los Gigantes", descripcion: "Recorre una reserva de cardones gigantes en pleno desierto costero." },
      { nombre: "Pesca deportiva", descripcion: "Aguas cálidas y abundancia de especies del Golfo de California." },
      { nombre: "Off road y overlanding", descripcion: "Rutas todoterreno entre dunas y desierto." },
      { nombre: "Golf con vista al mar", descripcion: "Campos con vistas al Golfo de California." },
      { nombre: "Gastronomía del mar", descripcion: "Camarón, almeja y pescado fresco en cada esquina." },
      { nombre: "Actividades náuticas", descripcion: "Paseos en banana, kayak y deportes acuáticos en aguas cálidas." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/674f550ed932b1f8a9b368f0_SF_off%20road-1%20Large.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672537e9fea2e11cd3a45f11_SF_off%20road-4%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672537e9ffc789d6eb7c79e9_SF_golf-5%20de%20taman%CC%83o%20grande-p-500.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/672537e9f36e7fbbd0cb07d4_SF_valle%20de%20los%20gigantes-6%20de%20taman%CC%83o%20grande.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/675211c62f5c48c4473da8e9_SF_golf-2%20Large.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67522842c6faf6f8806fe9d6_SF_playa%207%20Large.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67b90bd15481bdf7e82405bb_San%20Felipe%201680x1050.avif",
    ],
    fuente: "https://www.bajacalifornia.travel/es/destinos/san-felipe",
  },
  {
    slug: "valle-de-guadalupe",
    nombre: "Valle de Guadalupe",
    eslogan: "La joya turística de Baja California",
    subtitulo: "Ruta del vino y alta cocina entre viñedos",
    descripcion: [
      "El Valle de Guadalupe es el destino enoturístico más importante de México, con más de 100 años de tradición vitivinícola y más de 100 vinícolas, desde LA Cetto —la más grande del país— hasta pequeños productores boutique.",
      "El legado cultural de los Molokanes rusos, que se asentaron en la región hace más de un siglo, le da un carácter único que se mezcla con la comunidad Kumiai y su Centro Ecoturístico Siñaw Kuatay.",
      "Su clima mediterráneo, su gastronomía Baja Med y su cercanía con Ensenada lo han convertido en el destino preferido para escapadas románticas, bodas y experiencias gastronómicas de alto nivel.",
    ],
    datos: [
      { titulo: "Más de 100 vinícolas", texto: "Desde LA Cetto hasta productores boutique de autor." },
      { titulo: "Gastronomía Baja Med", texto: "Fusión de ingredientes locales con alta cocina internacional." },
      { titulo: "Legado Molokane", texto: "Herencia cultural rusa de más de un siglo en el valle." },
      { titulo: "A minutos de Ensenada", texto: "Fácil acceso desde el puerto y la ciudad." },
    ],
    actividades: [
      { nombre: "Catas de vino", descripcion: "Recorridos por vinícolas premiadas internacionalmente." },
      { nombre: "Gastronomía Baja Med", descripcion: "Restaurantes de autor entre viñedos." },
      { nombre: "Centro Ecoturístico Kumiai", descripcion: "Historia, tradición y cosmovisión de la comunidad Siñaw Kuatay." },
      { nombre: "Hospedaje boutique y glamping", descripcion: "Estancias inmersivas rodeadas de vides." },
      { nombre: "Escapadas románticas", descripcion: "Cenas y experiencias con vista a los viñedos." },
    ],
    imagenHero:
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c20a105e7b6e2148879bc6_Vin%CC%83edos%20La%20Reina%20de%20taman%CC%83o%20grande.avif",
    galeria: [
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c64bc14b19cd0c346cbb41_DJI_0884.avif",
      "https://cdn.prod.website-files.com/669abf662c877ad8274fe68a/67c20ae1027268f660cc6456_Vin%CC%83edos%20La%20Reina%20-%20Ruta%20del%20Vino%20de%20taman%CC%83o%20grande.jpeg",
    ],
    fuente: "https://www.bajacalifornia.travel/es/rutas/el-valle-de-guadalupe",
  },
];

export function getDestino(slug: string): Destino | undefined {
  return destinos.find((d) => d.slug === slug);
}
