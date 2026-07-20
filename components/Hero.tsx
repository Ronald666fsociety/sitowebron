"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import TypingRotator from "@/components/TypingRotator";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  HERO,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const ctaHref = buildWhatsAppLink(WHATSAPP_NUMBER, DEFAULT_WHATSAPP_MESSAGE);

  const fadeUp = (delay: number) =>
    reduceMotion
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay },
        }
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const },
        };

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-20 pt-24 text-center sm:px-6"
    >
      {/* Soft neon glow behind the title */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/15 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[12%] top-[18%] -z-10 hidden h-40 w-40 rounded-full bg-accent-cyan/10 blur-3xl md:block"
      />

      <motion.p
        {...fadeUp(0)}
        className="font-mono-tech text-sm text-accent-cyan sm:text-base"
      >
        {HERO.promptLabel}
      </motion.p>

      <motion.h1
        {...fadeUp(0.1)}
        className="glow-text-green mt-4 font-heading text-6xl font-bold tracking-tight text-text-light sm:text-7xl md:text-8xl"
      >
        {HERO.title}
        <span className="text-accent-green">.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-3 font-heading text-xl font-medium text-text-light sm:text-2xl"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="mt-6">
        <TypingRotator phrases={HERO.typingPhrases} />
      </motion.div>

      <motion.p
        {...fadeUp(0.4)}
        className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
      >
        {HERO.impactLine}
      </motion.p>

      <motion.div {...fadeUp(0.5)} className="mt-10">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg bg-accent-green px-8 py-4 font-heading text-base font-semibold text-bg-primary shadow-[0_0_32px_rgba(0,255,136,0.35)] transition-all hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(0,255,136,0.5)] sm:text-lg"
        >
          {HERO.primaryCtaLabel}
        </a>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        aria-label={HERO.scrollHint}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent-green/70 transition-colors hover:text-accent-green"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <ChevronDown className="h-8 w-8" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
