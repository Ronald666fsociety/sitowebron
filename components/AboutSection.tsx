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
          <div className="relative group">
            <div
              aria-hidden="true"
              className="absolute -inset-6 animate-pulse rounded-2xl bg-accent-green/20 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent-cyan/25 blur-xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-accent-green/30 blur-xl"
            />

            <div className="relative overflow-hidden rounded-2xl border-2 border-accent-green/60 bg-bg-secondary/90 p-2.5 shadow-[0_0_50px_rgba(0,255,136,0.35)] backdrop-blur-md transition-transform duration-300 group-hover:scale-[1.02]">
              {/* Corner Tech Decorators */}
              <div className="absolute left-1.5 top-1.5 h-3 w-3 border-l-2 border-t-2 border-accent-green" />
              <div className="absolute right-1.5 top-1.5 h-3 w-3 border-r-2 border-t-2 border-accent-green" />
              <div className="absolute bottom-1.5 left-1.5 h-3 w-3 border-b-2 border-l-2 border-accent-green" />
              <div className="absolute bottom-1.5 right-1.5 h-3 w-3 border-b-2 border-r-2 border-accent-green" />

              <div className="relative h-64 w-64 overflow-hidden rounded-xl bg-black/50 sm:h-72 sm:w-72">
                <img
                  src={ABOUT.avatarImage}
                  alt="Ronnie — Hacker & Developer"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Cyber overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
                
                {/* Scanner effect line */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-accent-green/80 shadow-[0_0_15px_#00ff88] opacity-75 animate-pulse" />
              </div>

              {/* Status Header Badge */}
              <div className="mt-2.5 flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-green opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-green" />
                  </span>
                  <span className="font-mono-tech text-[11px] font-semibold tracking-wider text-accent-green uppercase">
                    SYS_ID: RONNIE
                  </span>
                </div>
                <div className="flex items-center gap-1 rounded border border-accent-cyan/40 bg-accent-cyan/10 px-2 py-0.5 font-mono-tech text-[10px] text-accent-cyan">
                  <img src={ABOUT.logoImage} alt="R Logo" className="h-3 w-3 rounded-full" />
                  <span>ONLINE</span>
                </div>
              </div>
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
