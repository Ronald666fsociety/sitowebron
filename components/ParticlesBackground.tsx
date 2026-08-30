"use client";

import { useEffect, useMemo, useState } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

async function initParticles(engine: Engine): Promise<void> {
  await loadSlim(engine);
}

export default function ParticlesBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMobile = () => setIsMobile(mobileQuery.matches);
    const updateMotion = () => setReduceMotion(motionQuery.matches);
    updateMobile();
    updateMotion();
    mobileQuery.addEventListener("change", updateMobile);
    motionQuery.addEventListener("change", updateMotion);
    return () => {
      mobileQuery.removeEventListener("change", updateMobile);
      motionQuery.removeEventListener("change", updateMotion);
    };
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: isMobile ? 45 : 60,
      detectRetina: true,
      pauseOnBlur: true,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: !isMobile && !reduceMotion,
            mode: "grab",
          },
          resize: { enable: true },
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: 0.35 },
          },
        },
      },
      particles: {
        number: {
          value: reduceMotion ? (isMobile ? 16 : 36) : isMobile ? 36 : 95,
          density: { enable: true, width: 1400, height: 900 },
        },
        color: { value: ["#00ff88", "#00e5ff", "#66ffb2"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.18, max: 0.55 },
          animation: reduceMotion
            ? undefined
            : {
                enable: true,
                speed: 0.6,
                sync: false,
                startValue: "random",
              },
        },
        size: { value: { min: 1, max: isMobile ? 2.2 : 2.8 } },
        links: {
          enable: true,
          distance: isMobile ? 110 : 145,
          color: "#00ff88",
          opacity: 0.22,
          width: 1,
          triangles: {
            enable: !isMobile,
            opacity: 0.03,
          },
        },
        move: {
          enable: !reduceMotion,
          speed: isMobile ? 0.45 : 0.75,
          direction: "none",
          random: true,
          straight: false,
          outModes: { default: "out" },
          attract: {
            enable: !isMobile && !reduceMotion,
            rotate: { x: 800, y: 1200 },
          },
        },
      },
    }),
    [isMobile, reduceMotion],
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 grid-bg"
    >
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
