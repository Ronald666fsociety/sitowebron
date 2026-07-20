// Central data layer for the landing page.
// All UI copy and contact data lives here so a future Supabase
// integration can replace these exports without touching components.

export const BRAND = {
  name: "Ronnie — Desarrollo de Sistemas",
  shortName: "Ronnie",
  tagline: "Desarrollo de Sistemas",
  logoPath: "~/ronnie",
} as const;

// TODO: replace with real number
export const WHATSAPP_NUMBER = "59100000000";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola Ronnie, quiero cotizar un proyecto para mi negocio. ¿Podemos conversar?";

export const LOCATION_NOTE =
  "Trabajo remoto para clientes en cualquier lugar";

export const AVAILABILITY_NOTE =
  "Disponible para nuevos proyectos. Respondo en menos de 24 horas.";

export const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", href: "#inicio" },
  { id: "servicios", label: "Servicios", href: "#servicios" },
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
