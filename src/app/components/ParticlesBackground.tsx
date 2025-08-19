"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    // Detect current theme on mount
    if (typeof window !== "undefined") {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);

      // Watch for class changes (optional improvement)
      const observer = new MutationObserver(() => {
        const isNowDark = document.documentElement.classList.contains("dark");
        setIsDark(isNowDark);
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: isDark ? "#000319" : "#FCDEE5", // ✅ Dynamic background
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: isDark ? "#ffffff" : "#000000" }, // visible in both
        links: {
          color: isDark ? "#ffffff" : "#000000", // visible connection lines
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 0.5,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          speed: 2,
        },
        number: {
          density: { enable: true },
          value: 50,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [isDark]
  );

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
};