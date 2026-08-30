"use client";

import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useReducedMotion } from "framer-motion";
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
import { cn } from "@/lib/cn";

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
  const [isMobile, setIsMobile] = useState(false);
  const Icon = serviceIcons[service.iconName];
  const href = buildWhatsAppLink(WHATSAPP_NUMBER, service.whatsappMessage);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const tiltEnabled = !reduceMotion && !isMobile;

  const card = (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-accent-green/15 bg-bg-secondary/80 p-6 transition-[border-color,box-shadow,transform] duration-300",
        "hover:border-accent-green/45 hover:shadow-[0_0_40px_rgba(0,255,136,0.16)]",
        "neon-edge",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,255,136,0.18), transparent 40%, transparent 60%, rgba(0,229,255,0.14))",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -inset-1 -z-10 rounded-2xl bg-accent-green/10 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex h-14 w-14 items-center justify-center">
        <div
          aria-hidden="true"
          className="hex-well absolute inset-0 bg-accent-green/15 shadow-[0_0_24px_rgba(0,255,136,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_36px_rgba(0,255,136,0.45)]"
        />
        <div className="hex-well relative flex h-12 w-12 items-center justify-center border border-accent-green/30 bg-bg-primary text-accent-green">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <h3 className="relative mt-5 font-heading text-xl font-semibold text-text-light">
        {service.title}
      </h3>

      <p className="relative mt-3 flex-1 text-sm leading-relaxed text-text-muted">
        {service.description}
      </p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${SERVICES_SECTION.cardCtaLabel} sobre ${service.title} por WhatsApp`}
        className="relative mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-accent-green/40 px-4 py-2 font-mono-tech text-sm text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary hover:shadow-[0_0_20px_rgba(0,255,136,0.35)]"
      >
        {SERVICES_SECTION.cardCtaLabel}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    </article>
  );

  if (!tiltEnabled) {
    return card;
  }

  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      transitionSpeed={450}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#00ff88"
      glarePosition="all"
      glareBorderRadius="12px"
      gyroscope={false}
      className="h-full"
    >
      {card}
    </Tilt>
  );
}
