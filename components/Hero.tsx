"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import TypingRotator from "@/components/TypingRotator";
import {
  DEFAULT_WHATSAPP_MESSAGE,
  HERO,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

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
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[28%] -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-green/20 blur-[100px] sm:h-[32rem] sm:w-[32rem]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[10%] top-[16%] -z-10 hidden h-48 w-48 rounded-full bg-accent-cyan/15 blur-[80px] md:block"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[20%] left-[12%] -z-10 hidden h-36 w-36 rounded-full bg-accent-green/10 blur-[70px] md:block"
      />

      <motion.div {...fadeUp(0)} className="mb-8 flex flex-wrap items-center justify-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-green/30 bg-accent-green/10 px-3 py-1 font-mono-tech text-[11px] tracking-wider text-accent-green sm:text-xs">
          <span className="status-dot h-1.5 w-1.5 rounded-full bg-accent-green" />
          STATUS: AVAILABLE
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 font-mono-tech text-[11px] tracking-wider text-accent-cyan sm:text-xs">
          MODE: REMOTE
        </span>
      </motion.div>

      <motion.p
        {...fadeUp(0.05)}
        className="font-mono-tech text-sm text-accent-cyan sm:text-base"
      >
        {HERO.promptLabel}
      </motion.p>

      <motion.h1
        {...fadeUp(0.12)}
        className={cn(
          "glow-text-green mt-4 font-heading text-6xl font-bold tracking-tight text-text-light sm:text-7xl md:text-8xl",
          !reduceMotion && "glitch-title",
        )}
      >
        {HERO.title}
        <span className="text-accent-green">.</span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        className="mt-3 font-heading text-xl font-medium text-text-light/90 sm:text-2xl"
      >
        {HERO.subtitle}
      </motion.p>

      <motion.div {...fadeUp(0.3)} className="mt-8 w-full max-w-xl">
        <div className="terminal-window text-left">
          <div className="terminal-titlebar">
            <span className="terminal-dot bg-[#ff5f56]" />
            <span className="terminal-dot bg-[#ffbd2e]" />
            <span className="terminal-dot bg-[#27c93f]" />
            <span className="ml-2 font-mono-tech text-[11px] text-text-muted">
              ronnie@dev — zsh
            </span>
          </div>
          <div className="space-y-2 px-4 py-5 sm:px-6">
            <p className="font-mono-tech text-xs text-text-muted sm:text-sm">
              <span className="text-accent-cyan">$</span> cat stack.txt
            </p>
            <TypingRotator phrases={HERO.typingPhrases} />
          </div>
        </div>
      </motion.div>

      <motion.p
        {...fadeUp(0.4)}
        className="mt-8 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg"
      >
        {HERO.impactLine}
      </motion.p>

      <motion.div
        {...fadeUp(0.5)}
        className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
      >
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center gap-3 rounded-lg bg-accent-green px-8 py-4 font-heading text-base font-semibold text-bg-primary shadow-[0_0_36px_rgba(0,255,136,0.4)] transition-all hover:scale-[1.04] hover:shadow-[0_0_56px_rgba(0,255,136,0.55)] sm:text-lg",
            !reduceMotion && "cta-neon-pulse",
          )}
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {HERO.primaryCtaLabel}
        </a>
        <a
          href="#servicios"
          className="inline-flex items-center gap-2 rounded-lg border border-accent-green/35 bg-transparent px-6 py-3.5 font-heading text-sm font-medium text-accent-green transition-all hover:border-accent-green/70 hover:bg-accent-green/10 hover:shadow-[0_0_24px_rgba(0,255,136,0.15)] sm:text-base"
        >
          Ver servicios
        </a>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        aria-label={HERO.scrollHint}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-accent-green/70 transition-colors hover:text-accent-green"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <span className="font-mono-tech text-[10px] tracking-widest uppercase">
          scroll
        </span>
        <ChevronDown className="h-7 w-7" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
