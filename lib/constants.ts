// Central data layer for the landing page.
// All UI copy and contact data lives here so a future Supabase
// integration can replace these exports without touching components.

export const BRAND = {
  name: "Ronnie — Desarrollo de Sistemas",
  shortName: "Ronnie",
  tagline: "Desarrollo de Sistemas",
  logoPath: "/images/ronnie-logo.png",
} as const;

export const WHATSAPP_NUMBER = "59173555747";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Ronnie, quiero cotizar un proyecto para mi negocio. ¿Podemos conversar?";

export const LOCATION_NOTE =
  "Trabajo remoto para clientes en cualquier lugar";

export const AVAILABILITY_NOTE =
  "Disponible para nuevos proyectos. Respondo en menos de 24 horas.";

export const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "servicios", label: "Servicios", href: "#servicios" },
  { id: "sistemas", label: "Sistemas", href: "#sistemas" },
  { id: "sobre-mi", label: "Sobre mí", href: "#sobre-mi" },
  { id: "contacto", label: "Contacto", href: "#contacto" },
] as const;

export const HEADER = {
  ctaLabel: "Cotiza tu proyecto",
} as const;

export const HERO = {
  promptLabel: "$ whoami",
  title: "Ronnie",
  subtitle: "Desarrollo de Sistemas",
  typingPhrases: [
    "sistemas a medida",
    "apps móviles",
    "consultoría y mantenimiento",
  ],
  impactLine:
    "Transformo ideas en sistemas que trabajan por tu negocio: software a medida, apps móviles y consultoría técnica.",
  primaryCtaLabel: "Cotiza tu proyecto por WhatsApp",
  scrollHint: "Desliza para conocer más",
} as const;

export const ABOUT = {
  label: "// sobre mí",
  title: "Sobre mí",
  paragraphs: [
    "Soy Ronnie, desarrollador de sistemas freelance. Diseño y construyo software alrededor de la operación de cada negocio: sistemas de gestión, aplicaciones móviles y soporte técnico continuo.",
    "Trabajo de forma remota con clientes en cualquier lugar, con comunicación clara, propuestas definidas antes de empezar y avances constantes durante el desarrollo.",
  ],
  chips: ["Sistemas a medida", "Apps móviles", "Soporte continuo"],
  avatarInitial: "R",
  avatarImage: "/images/ronnie-profile-cyber.png",
  logoImage: "/images/ronnie-logo.png",
} as const;

export type ServiceIconName = "MonitorCog" | "Smartphone" | "Wrench";

export interface Service {
  id: string;
  iconName: ServiceIconName;
  title: string;
  description: string;
  whatsappMessage: string;
}

export const SERVICES: Service[] = [
  {
    id: "sistemas-a-medida",
    iconName: "MonitorCog",
    title: "Sistemas a medida",
    description:
      "Sistemas web de gestión: inventario, reservas, facturación y procesos internos, diseñados alrededor de la operación de cada negocio.",
    whatsappMessage:
      "Hola Ronnie, me interesa un sistema a medida para mi negocio. ¿Podemos coordinar una llamada?",
  },
  {
    id: "apps-moviles",
    iconName: "Smartphone",
    title: "Apps móviles",
    description:
      "Aplicaciones móviles y PWA para Android e iOS que tus clientes puedan llevar en el bolsillo.",
    whatsappMessage:
      "Hola Ronnie, me interesa una app móvil para mi negocio. ¿Podemos coordinar una llamada?",
  },
  {
    id: "consultoria-y-mantenimiento",
    iconName: "Wrench",
    title: "Consultoría y mantenimiento",
    description:
      "Soporte, mejoras y consultoría sobre sistemas existentes: rendimiento, seguridad y nuevas funcionalidades.",
    whatsappMessage:
      "Hola Ronnie, necesito consultoría y mantenimiento para un sistema existente. ¿Podemos coordinar una llamada?",
  },
];

export interface SystemItem {
  id: string;
  title: string;
  category: "Sistema Web" | "App Móvil" | "Facturación" | "E-commerce";
  shortDescription: string;
  fullDescription: string;
  features: string[];
  techStack: string[];
  metrics: string;
  demoUrl?: string;
  imageBg: string;
  whatsappMessage: string;
}

export const PORTFOLIO_SYSTEMS: SystemItem[] = [
  {
    id: "dentalcare-pro",
    title: "DENTALCARE PRO — Clínica Dental 3D & Citas",
    category: "Sistema Web",
    shortDescription:
      "Sistema odontológico integral con explorador interactivo 3D del diente en WebGL, chatbot de atención, citas y precios en Bolivianos.",
    fullDescription:
      "Plataforma completa para consultorios dentales y clínicas odontológicas. Incorpora un visualizador 3D interactivo en tiempo real con Three.js y React Three Fiber, catálogo de especialidades con tarifas en Bs., carrusel de casos clínicos, chatbot de asistencia y reservas directas a WhatsApp.",
    features: [
      "Explorador interactivo 3D de anatomía dental con Three.js / WebGL",
      "Chatbot interactivo para consultas frecuentes y agendamiento",
      "Catálogo de especialidades con tarifas transparentes en Bolivianos (Bs.)",
      "Diseño responsive ultra rápido y optimizado desplegado en Vercel",
    ],
    techStack: ["Next.js", "React 19", "Three.js", "Fiber", "TailwindCSS", "Vercel"],
    metrics: "⚡ Demo en Vivo Online",
    demoUrl: "https://dentista-ruddy.vercel.app/",
    imageBg: "from-sky-950/60 via-bg-secondary to-accent-cyan/20",
    whatsappMessage:
      "Hola Ronnie, vi el sistema en vivo de DENTALCARE PRO (https://dentista-ruddy.vercel.app/). Me gustaría cotizar un sistema similar para mi negocio.",
  },
  {
    id: "si-gestion",
    title: "SI-GESTION — Facturación & Inventarios",
    category: "Facturación",
    shortDescription:
      "Sistema web integral para control de stock en tiempo real, ventas, caja diaria y facturación electrónica.",
    fullDescription:
      "Plataforma completa de gestión comercial diseñada para pequeñas y medianas empresas. Automatiza el control de inventario con alertas de bajo stock, punto de venta (POS) rápido, emisión de comprobantes en PDF y reportes analíticos de ganancias.",
    features: [
      "Punto de Venta (POS) ultrarrápido con lector de código de barras",
      "Control de kardex de inventario y alertas automáticas de reabastecimiento",
      "Emisión de comprobantes y facturación electrónica en PDF y Excel",
      "Gestión de múltiples sucursales y permisos por rol de usuario",
    ],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Prisma"],
    metrics: "+45% Ahorro de tiempo en caja",
    imageBg: "from-emerald-900/40 via-bg-secondary to-accent-green/10",
    whatsappMessage:
      "Hola Ronnie, me gustó el sistema SI-GESTION (Facturación e Inventarios). ¿Me puedes cotizar uno similar para mi negocio?",
  },
  {
    id: "app-delivery",
    title: "APP-DELIVERY — Pedidos Multi-Restaurante",
    category: "App Móvil",
    shortDescription:
      "Aplicación móvil para Android e iOS de catálogo interactivo, carritos de compras y seguimiento en vivo.",
    fullDescription:
      "App móvil nativa e intuitiva donde los clientes exploran menús interactivos, personalizan sus pedidos y realizan el pago o envío directo a WhatsApp con geolocalización GPS precisa del repartidor.",
    features: [
      "Catálogo digital interactivo con imágenes y variaciones de producto",
      "Cálculo automático de costo de envío según distancia GPS",
      "Notificaciones PUSH en tiempo real sobre el estado del pedido",
      "Panel de control para la cocina y gestión de motorizados",
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Node.js", "Tailwind"],
    metrics: "Más de 10,000 pedidos procesados",
    imageBg: "from-cyan-900/40 via-bg-secondary to-accent-cyan/10",
    whatsappMessage:
      "Hola Ronnie, vi la APP-DELIVERY de pedidos. Quiero cotizar una aplicación móvil similar para mi negocio.",
  },
  {
    id: "clinic-sys",
    title: "CLINIC-SYS — Historial Clínico & Pacientes",
    category: "Sistema Web",
    shortDescription:
      "Sistema de gestión médica con expediente clínico en la nube, recetas digitales y agenda de consultas.",
    fullDescription:
      "Software especializado para clínicas y consultorios médicos. Centraliza la información de los pacientes, facilita el registro de diagnósticos CIE-10, emisión de recetas en formato oficial e integración con recordatorios por WhatsApp.",
    features: [
      "Expediente médico digital seguro y encriptado",
      "Agenda médica interactiva con recordatorios automáticos por WhatsApp",
      "Módulo de laboratorio, imágenes y recetas médicas en PDF",
      "Reportes de consultas realizadas e ingresos por médico",
    ],
    techStack: ["Next.js", "React", "TailwindCSS", "PostgreSQL", "Docker"],
    metrics: "100% Cumplimiento de confidencialidad",
    imageBg: "from-teal-900/40 via-bg-secondary to-accent-green/10",
    whatsappMessage:
      "Hola Ronnie, me interesa el sistema CLINIC-SYS para gestión médica y pacientes. Quisiera consultar costos.",
  },
  {
    id: "reserva-pro",
    title: "RESERVA-PRO — Citas & Turnos Online",
    category: "Sistema Web",
    shortDescription:
      "Plataforma web de agendamiento 24/7 para salones de belleza, barberías, spas y servicios profesionales.",
    fullDescription:
      "Sistema automatizado que permite a los clientes reservar turnos según la disponibilidad en tiempo real de cada profesional, enviando confirmaciones y recordatorios por WhatsApp para eliminar las ausencias.",
    features: [
      "Calendario interactivo público y privado sincronizado en tiempo real",
      "Asignación automática de personal, servicios y duraciones",
      "Integración de pasarela de pagos / señas previa a la cita",
      "Estadísticas de ocupación y clientes frecuentes",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "WhatsApp API"],
    metrics: "-80% Inasistencias de clientes",
    imageBg: "from-emerald-950/50 via-bg-secondary to-accent-cyan/10",
    whatsappMessage:
      "Hola Ronnie, quisiera cotizar un sistema como RESERVA-PRO para agendamiento de citas online.",
  },
  {
    id: "edu-portal",
    title: "EDU-PORTAL — Control Académico & Asistencia",
    category: "Sistema Web",
    shortDescription:
      "Portal para instituciones educativas con registro de notas, asistencia con código QR y boletines.",
    fullDescription:
      "Sistema integral para colegios, institutos y universidades. Permite el control de calificaciones, asistencia diaria mediante escaneo de código QR en carnet de estudiante y comunicación directa con padres de familia.",
    features: [
      "Control de asistencia instantáneo por código QR o biométrico",
      "Módulo de docentes para carga masiva de notas y tareas",
      "Portal de padres y alumnos para ver boletines en línea",
      "Emisión automatizada de certificados y reportes académicos",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    metrics: "Capacidad de +5,000 alumnos activos",
    imageBg: "from-cyan-950/50 via-bg-secondary to-accent-green/10",
    whatsappMessage:
      "Hola Ronnie, me interesa implementar el sistema EDU-PORTAL de control académico e imprevistos.",
  },
  {
    id: "ecomm-cyber",
    title: "ECOMM-CYBER — Tienda Virtual & Pagos QR",
    category: "E-commerce",
    shortDescription:
      "Tienda online de alto rendimiento optimizada para velocidad, catálogo dinámico y cobros QR instantáneos.",
    fullDescription:
      "Solución e-commerce ultra veloz diseñada para maximizar ventas. Incluye carrito de compras dinámico, filtros instantáneos por categoría/precio, pasarela de cobro por código QR Simple y notificaciones automáticas de compras.",
    features: [
      "Carga instantánea (< 1s) optimizada con Server Side Rendering",
      "Generación de código QR de pago en pantalla y confirmación automatizada",
      "Integración directa de ventas con catálogo de WhatsApp",
      "Panel para actualizar precios, ofertas y cupones de descuento",
    ],
    techStack: ["Next.js", "TailwindCSS", "Redux", "Stripe / QR Simple", "Vercel"],
    metrics: "Conversión de ventas +35%",
    imageBg: "from-emerald-900/30 via-bg-secondary to-accent-cyan/15",
    whatsappMessage:
      "Hola Ronnie, quiero cotizar una tienda e-commerce como ECOMM-CYBER con pagos por QR para mi negocio.",
  },
];

export const SERVICES_SECTION = {
  label: "// servicios",
  title: "Servicios",
  description:
    "Soluciones concretas para negocios que quieren ordenar sus procesos y crecer con tecnología.",
  cardCtaLabel: "Consultar",
} as const;

export type StepIconName = "MessageSquare" | "ClipboardList" | "Rocket";

export interface Step {
  number: number;
  iconName: StepIconName;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    number: 1,
    iconName: "MessageSquare",
    title: "Escríbeme",
    description: "Cuéntame qué necesita tu negocio, sin compromiso.",
  },
  {
    number: 2,
    iconName: "ClipboardList",
    title: "Propuesta clara",
    description: "Alcance, tiempos y costo definidos antes de empezar.",
  },
  {
    number: 3,
    iconName: "Rocket",
    title: "Desarrollo y entrega",
    description: "Avances constantes hasta el lanzamiento y soporte posterior.",
  },
];

export const HOW_IT_WORKS_SECTION = {
  label: "// proceso",
  title: "Cómo trabajo",
} as const;

export const CONTACT = {
  label: "// contacto",
  title: "Hablemos de tu proyecto",
  description:
    "Cuéntame qué necesita tu negocio y recibe una propuesta clara, sin compromiso.",
  ctaLabel: "Escribir por WhatsApp",
} as const;

export const FOOTER = {
  line: "Software a medida para negocios que quieren crecer.",
  builtWith: "Hecho con Next.js",
} as const;

export const SEO = {
  title: "Ronnie — Desarrollo de Sistemas",
  description:
    "Ronnie — Desarrollo de Sistemas: sistemas a medida, apps móviles y consultoría de software para negocios. Sistemas web de gestión, aplicaciones móviles y soporte técnico, en remoto para clientes en cualquier lugar.",
  locale: "es",
} as const;
