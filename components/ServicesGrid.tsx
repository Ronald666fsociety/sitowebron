import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SERVICES_SECTION } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-title"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <Reveal>
        <p className="font-mono-tech text-sm text-accent-cyan">
          {SERVICES_SECTION.label}
        </p>
        <h2
          id="servicios-title"
          className="mt-2 font-heading text-3xl font-bold text-text-light sm:text-4xl"
        >
          {SERVICES_SECTION.title}
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-text-muted">
          {SERVICES_SECTION.description}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {SERVICES.map((service, index) => (
          <Reveal key={service.id} delay={0.12 * index} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
