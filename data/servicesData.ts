export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export const services: Service[] = [
  {
    id: 's1',
    slug: 'construccion-e-infraestructura',
    title: 'Construcción e Infraestructura para Viviendas e Industria',
    shortDescription: 'Obras civiles, diseño y ejecución integral de infraestructura corporativa, residencial e industrial bajo rigurosos estándares de seguridad.',
    fullDescription: 'En RS Servicios Generales, desarrollamos proyectos de construcción e infraestructura asegurando solidez, durabilidad y funcionalidad. Abarcamos desde el diseño conceptual y cálculo estructural hasta la ejecución final de la obra civil para grandes naves industriales, campamentos mineros, centros corporativos y complejos residenciales. Integramos tecnologías modernas de edificación y aplicamos estrictos protocolos SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente) para garantizar la entrega puntual y segura de cada proyecto, mitigando el riesgo operativo de nuestros clientes B2B.',
  },
  {
    id: 's2',
    slug: 'carpinteria-ebanisteria',
    title: 'Servicio de Carpintería y Ebanistería',
    shortDescription: 'Soluciones en madera a medida para entornos corporativos, mobiliario especializado y acabados arquitectónicos de alta gama.',
    fullDescription: 'Proporcionamos servicios de carpintería estructural y ebanistería fina para equipamiento de oficinas, centros comerciales, campamentos operacionales y hoteles. Trabajamos con maderas tratadas industrialmente, tableros melamínicos de alta resistencia y herrajes de última generación. Nuestro equipo diseña y fabrica mobiliario ergonómico, divisiones revestidas, puertas cortafuego enchapadas y paneles decorativos, logrando un balance perfecto entre estética corporativa y resistencia para el uso intensivo continuo.',
  },
  {
    id: 's3',
    slug: 'diseno-de-interiores',
    title: 'Servicio de Diseño de Interiores',
    shortDescription: 'Conceptualización y optimización de espacios corporativos y comerciales enfocados en productividad, branding espacial y ergonomía.',
    fullDescription: 'Alineamos la identidad de marca de su corporación con la arquitectura interior. Nuestro servicio integral abarca la evaluación espacial, zonificación, elección técnica de materiales, iluminación y paisajismo interior. Creamos entornos de trabajo B2B que mejoran el bienestar organizacional y la eficiencia operativa. Entregamos renders 3D de alta fotorrealidad y gestionamos la ejecución llave en mano del proyecto, asegurando que el diseño aprobado se construya con precisión milimétrica.',
  },
  {
    id: 's4',
    slug: 'drywall',
    title: 'Servicio de Drywall',
    shortDescription: 'Construcción ligera, tabiquería y techos suspendidos con propiedades termoacústicas y resistencia al fuego para el sector industrial.',
    fullDescription: 'Implementamos sistemas de construcción en seco (Drywall) con placas de yeso o fibrocemento, adaptándonos asimétricamente a las necesidades físicas de la industria. Diseñamos tabiques estructurales, cielos rasos continuos y modulares, cortafuegos (RF) y aislamientos termoacústicos avanzados, idóneos para dividir áreas logísticas, oficinas administrativas o campamentos provisionales. Es una solución de despliegue rápido, limpia y escalable que no interrumpe sus operaciones de negocio.',
  },
  {
    id: 's5',
    slug: 'estructuras-drywall',
    title: 'Servicio de Estructuras Metálicas',
    shortDescription: 'Fabricación, montaje y mantenimiento de vigas, tijerales y naves industriales con soldadura especializada y resistencia al impacto.',
    fullDescription: 'Desarrollamos ingeniería, fabricación y montaje de grandes estructuras metálicas para plantas de procesamiento, galpones de almacenamiento, escaleras de emergencia o puentes grúa. Sometemos nuestro acero a tratamientos de arenado y recubrimiento epóxico conforme a normativas de protección contra corrosión en zonas costeras o mineras. Nuestras soldaduras son certificadas mediante ensayos no destructivos (END), certificando instalaciones de alto tonelaje para uso industrial severo.',
  },
  {
    id: 's6',
    slug: 'sistemas-electricos',
    title: 'Servicio de Instalaciones Eléctricas',
    shortDescription: 'Despliegue integral de redes de baja y media tensión, subestaciones, tableros de control industrial y mallas a tierra certificadas.',
    fullDescription: 'Proveemos la columna vertebral energética para su corporación o planta. Ejecutamos desde el diagnóstico y cálculo de cargas térmicas hasta la instalación en campo de bandejas portacables, celdas de media tensión, grupos electrógenos de respaldo y sistemas de puesta a tierra. Aseguramos continuidad operativa (Cero Downtime) mediante diseños en topología redundante y cumplimiento inflexible del Código Nacional de Electricidad (CNE) e normativas internacionales IEEE o IEC.',
  },
  {
    id: 's7',
    slug: 'climatizacion-mantenimiento',
    title: 'Servicio de Aire Acondicionado',
    shortDescription: 'Sistemas HVAC industriales y comerciales, redes de ductos, chillers y soluciones de refrigeración de precisión para centros de datos.',
    fullDescription: 'El control térmico es vital para la productividad humana y la integridad del equipamiento logístico. Instalamos sistemas HVAC, chillers, equipos VRF/VRV y unidades de inyección/extracción de aire. Realizamos balance de caudales para crear circuitos de aire limpio (filtros HEPA) en industrias alimentarias y de salud. Además, ofrecemos planes sistemáticos de mantenimiento preventivo y correctivo 24/7 para evitar interrupciones de enfriamiento críticas.',
  },
  {
    id: 's8',
    slug: 'pisos',
    title: 'Servicio de Pisos',
    shortDescription: 'Revestimientos epóxicos, poliuretanos y acabados de alto tránsito para almacenes, entornos asépticos e infraestructura comercial.',
    fullDescription: 'Ofrecemos soluciones de pavimentación e instalación de pisos adaptados a cargas operativas extremas. Desde el pulido y tratamiento de losas de concreto hasta la aplicación de recubrimientos epóxicos y de poliuretano continuo sin juntas, ideales para agroindustrias o almacenes pesados garantizando limpieza aséptica. También ejecutamos acabados estéticos para zonas de corporativos y oficinas con vinílicos SPC, porcelanatos técnicos y laminados de alta dureza.',
  },
  {
    id: 's9',
    slug: 'sistema-contra-incendio',
    title: 'Servicio de Sistema Contra Incendio',
    shortDescription: 'Ingeniería e instalación de gabinetes ACI, rociadores automáticos (sprinklers) y sistemas de detección inteligente según normativa NFPA.',
    fullDescription: 'Blindamos su inversión contra contingencias integrando redes automatizadas de protección ignífuga. Implementamos redes de agua contra redondos, bombas listadas UL/FM, rociadores y sistemas fijos de agentes limpios en ambientes tecnológicos. Integramos también la detección temprana inteligente (humo, fotoceldas, temperatura). Todos nuestros protocolos están amparados bajo exigencias del RNE y estándares universales de la NFPA 13 y 72, acompañando la emisión de certificados de operatividad para defensa civil.',
  },
  {
    id: 's10',
    slug: 'instalaciones-sanitarias',
    title: 'Servicio de Instalaciones Sanitarias',
    shortDescription: 'Redes de agua fría/caliente, desagüe corporativo, cisternas y equipos de rebombeo de alta presión para infraestructura densa.',
    fullDescription: 'Garantizamos el flujo continuo, la presión adecuada y el manejo responsable de fluidos dentro de su emplazamiento. Ejecutamos el diseño e instalación de motobombas hidroneumáticas de presión constante, tendido de tuberías matrices PPR/PVC y sistemas de recolección de aguas pluviales e industriales. Aplicamos ingeniería hidráulica para plantas pesqueras u hospitales, contemplando trampas de grasa industriales y sistemas de tratamientos residuales de impacto regulado.',
  },
  {
    id: 's11',
    slug: 'pintura',
    title: 'Servicio de Pintura',
    shortDescription: 'Recubrimientos arquitectónicos y revestimientos industriales anti-corrosivos para conservación estructural de largo plazo.',
    fullDescription: 'Realizamos intervenciones en fachadas expuestas, interiores de torre y perfiles técnicos de acero. Utilizamos sistemas poliuretanos, intumescentes (protectores al fuego) y pinturas epóxicas según la agresividad del entorno geográfico. Nuestra labor inicia desde una rigurosa preparación de la superficie (sandblasting) para maximizar la adherencia. Combinamos propiedades decorativas con recubrimientos de barrera química que extienden drásticamente la vida útil del activo corporativo.',
  },
  {
    id: 's12',
    slug: 'vidrieria',
    title: 'Servicio de Vidriería',
    shortDescription: 'Instalación de muros cortina acústicos, fachadas integrales acristaladas, mamparas y sistemas de seguridad templados / laminados.',
    fullDescription: 'Proveemos la interfaz arquitectónica que optimiza la iluminación natural y bloquea polución y sonido exterior. Nos especializamos en la estructuración de fachadas de Cristal Templado y Laminado en sistemas Nova, perfiles de aluminio estructural y arañas de acero. Diseñamos cubículos ejecutivos interiores, barandas arquitectónicas, techos solares y espejos de inspección. La seguridad física está garantizada al elegir espesores correctos y certificaciones contra roturas.',
  },
  {
    id: 's13',
    slug: 'redes-seguridad',
    title: 'Redes y Seguridad',
    shortDescription: 'Cableado estructurado avanzado y sistemas de videovigilancia industrial.',
    fullDescription: 'Diseñamos e implementamos topologías de red certificadas y sistemas de CCTV / Control de Accesos para la industria. Aseguramos la continuidad operativa de los datos mediante cableado estructurado en cobre y fibra óptica, con racks y gabinetes ordenados bajo estándar normativo. Implementamos seguridad electrónica perimetral e interna con monitoreo remoto, garantizando la protección física de sus activos y el flujo ininterrumpido de sus operaciones IT.'
  }
];
