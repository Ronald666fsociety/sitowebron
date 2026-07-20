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
              className="absolute -inset-4 rounded-full bg-accent-green/15 blur-2xl"
            />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-2 border-accent-green/60 bg-bg-secondary font-heading text-5xl font-bold text-accent-green shadow-[0_0_48px_rgba(0,255,136,0.25)] sm:h-44 sm:w-44 sm:text-6xl">
              {ABOUT.avatarInitial}
              <span className="sr-only">Avatar de Ronnie</span>
            </div>
          </div>
        </Reveal>

        <div>
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
                  className="rounded-full border border-accent-green/25 bg-bg-secondary px-4 py-1.5 font-mono-tech text-xs text-accent-green"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
