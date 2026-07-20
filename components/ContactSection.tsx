import { MapPin, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import {
  AVAILABILITY_NOTE,
  CONTACT,
  DEFAULT_WHATSAPP_MESSAGE,
  LOCATION_NOTE,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactSection() {
  const ctaHref = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_WHATSAPP_MESSAGE);

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <div className="relative overflow-hidden rounded-2xl border border-accent-green/15 bg-bg-secondary/80 px-6 py-16 text-center sm:px-12">
        {/* Soft neon glow behind the CTA block */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-green/15 blur-3xl sm:h-96 sm:w-96"
        />

        <Reveal>
          <p className="font-mono-tech text-sm text-accent-cyan">
            {CONTACT.label}
          </p>
          <h2
            id="contacto-title"
            className="mt-2 font-heading text-3xl font-bold text-text-light sm:text-4xl"
          >
            {CONTACT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-text-muted">
            {CONTACT.description}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-accent-green px-8 py-4 font-heading text-base font-semibold text-bg-primary shadow-[0_0_32px_rgba(0,255,136,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(0,255,136,0.5)] sm:text-lg"
          >
            {CONTACT.ctaLabel}
          </a>
        </Reveal>

        <Reveal delay={0.25}>
          <ul className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-text-muted sm:flex-row sm:gap-8">
            <li className="inline-flex items-center gap-2">
              <MapPin
                className="h-4 w-4 text-accent-green"
                aria-hidden="true"
              />
              {LOCATION_NOTE}
            </li>
            <li className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent-green" aria-hidden="true" />
              {AVAILABILITY_NOTE}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
