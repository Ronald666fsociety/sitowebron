import { MapPin, Clock, Terminal } from "lucide-react";
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
      <div className="relative overflow-hidden rounded-2xl border border-accent-green/20 bg-bg-secondary/75 px-6 py-16 text-center shadow-[0_0_80px_rgba(0,255,136,0.08)] sm:px-12">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent-green/20 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 -z-10 h-48 w-48 translate-x-1/4 translate-y-1/4 rounded-full bg-accent-cyan/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 grid-bg opacity-40"
        />

        <Reveal>
          <p className="inline-flex items-center gap-2 font-mono-tech text-sm text-accent-cyan">
            <Terminal className="h-4 w-4" aria-hidden="true" />
            {CONTACT.label}
          </p>
          <h2
            id="contacto-title"
            className="mt-3 font-heading text-3xl font-bold text-text-light sm:text-4xl md:text-5xl"
          >
            <span className="gradient-text">{CONTACT.title}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-text-muted">
            {CONTACT.description}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 font-mono-tech text-xs text-text-muted/80 sm:text-sm">
            <span className="text-accent-green">ronnie@dev</span>
            <span className="text-text-muted">:</span>
            <span className="text-accent-cyan">~</span>
            <span className="text-text-muted">$ ./contact --via whatsapp</span>
            <span className="animate-cursor-blink text-accent-cyan">▊</span>
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-neon-pulse mt-10 inline-flex items-center gap-3 rounded-lg bg-accent-green px-8 py-4 font-heading text-base font-semibold text-bg-primary shadow-[0_0_36px_rgba(0,255,136,0.4)] transition-all hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(0,255,136,0.55)] sm:text-lg"
          >
            {CONTACT.ctaLabel}
          </a>
        </Reveal>

        <Reveal delay={0.28}>
          <ul className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-text-muted sm:flex-row sm:gap-8">
            <li className="inline-flex items-center gap-2 rounded-full border border-accent-green/15 bg-bg-primary/50 px-4 py-2">
              <MapPin
                className="h-4 w-4 shrink-0 text-accent-green"
                aria-hidden="true"
              />
              {LOCATION_NOTE}
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-accent-green/15 bg-bg-primary/50 px-4 py-2">
              <Clock className="h-4 w-4 shrink-0 text-accent-green" aria-hidden="true" />
              {AVAILABILITY_NOTE}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
