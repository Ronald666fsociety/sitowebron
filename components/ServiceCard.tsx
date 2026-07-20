"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  MonitorCog,
  Smartphone,
  Wrench,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/lib/constants";
import { SERVICES_SECTION, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const serviceIcons: Record<Service["iconName"], LucideIcon> = {
  MonitorCog,
  Smartphone,
  Wrench,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = serviceIcons[service.iconName];
  const href = buildWhatsAppLink(WHATSAPP_NUMBER, service.whatsappMessage);

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative flex h-full flex-col rounded-xl border border-accent-green/15 bg-bg-secondary/80 p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent-green/50 hover:shadow-[0_0_36px_rgba(0,255,136,0.14)]"
    >
      {/* Soft neon glow behind the card */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 -z-10 rounded-2xl bg-accent-green/8 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-green/25 bg-bg-primary text-accent-green">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mt-5 font-heading text-xl font-semibold text-text-light">
        {service.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${SERVICES_SECTION.cardCtaLabel} sobre ${service.title} por WhatsApp`}
        className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-accent-green/40 px-4 py-2 font-mono-tech text-sm text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary hover:shadow-[0_0_20px_rgba(0,255,136,0.35)]"
      >
        {SERVICES_SECTION.cardCtaLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </motion.article>
  );
}
