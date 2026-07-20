"use client";

import { useEffect, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

// ParticlesProvider requires a stable init callback across the app lifecycle.
async function initParticles(engine: Engine): Promise<void> {
  await loadSlim(engine);
}

// Full-page fixed particle network. Sits behind content and never
// intercepts pointer events.
export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: false },
          resize: { enable: true },
        },
      },
      particles: {
        number: {
          value: isMobile ? 28 : 72,
          density: { enable: true, width: 1600, height: 900 },
        },
        paint: { color: { value: ["#00ff88", "#00e5ff"] } },
        shape: { type: "circle" },
        opacity: { value: { min: 0.15, max: 0.45 } },
        size: { value: { min: 1, max: 2.4 } },
        links: {
          enable: true,
          distance: 130,
          color: "#00ff88",
          opacity: 0.16,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
        },
      },
    }),
    [isMobile],
  );

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <ParticlesProvider init={initParticles}>
        <Particles
          id="landing-particles"
          options={options}
          className="h-full w-full"
        />
      </ParticlesProvider>
    </div>
  );
}
