import Reveal from "@/components/Reveal";
import { ABOUT } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <div className="grid items-center gap-12 md:grid-cols-[auto_1fr] md:gap-16">
        <Reveal className="mx-auto">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-6 animate-float-slow rounded-full bg-accent-green/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-accent-cyan/20 blur-xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-2 -left-4 h-12 w-12 rounded-full bg-accent-green/25 blur-lg"
            />

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-full bg-gradient-to-br from-accent-green via-accent-cyan/50 to-accent-green opacity-70 blur-[2px]"
              />
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-accent-green/70 bg-bg-secondary font-heading text-5xl font-bold text-accent-green shadow-[0_0_48px_rgba(0,255,136,0.3)] sm:h-44 sm:w-44 sm:text-6xl">
                {ABOUT.avatarInitial}
                <span className="sr-only">Avatar de Ronnie</span>
              </div>
              <span
                aria-hidden="true"
                className="status-dot absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-bg-primary bg-accent-green shadow-[0_0_12px_rgba(0,255,136,0.9)]"
              />
            </div>
          </div>
        </Reveal>

        <div className="terminal-window p-0">
          <div className="terminal-titlebar">
            <span className="terminal-dot bg-[#ff5f56]" />
            <span className="terminal-dot bg-[#ffbd2e]" />
            <span className="terminal-dot bg-[#27c93f]" />
            <span className="ml-2 font-mono-tech text-[11px] text-text-muted">
              about.md
            </span>
          </div>
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            <Reveal>
              <p className="font-mono-tech text-sm text-accent-cyan">
                {ABOUT.label}
              </p>
              <h2
                id="sobre-mi-title"
                className="mt-2 font-heading text-3xl font-bold text-text-light sm:text-4xl"
              >
                {ABOUT.title}
              </h2>
            </Reveal>

            {ABOUT.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.3}>
              <ul className="mt-8 flex flex-wrap gap-3">
                {ABOUT.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-accent-green/30 bg-accent-green/10 px-4 py-1.5 font-mono-tech text-xs text-accent-green shadow-[0_0_16px_rgba(0,255,136,0.08)]"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
