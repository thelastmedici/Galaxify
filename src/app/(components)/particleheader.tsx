"use client";
import React from 'react';
import { useTheme } from 'next-themes';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from 'tsparticles';
import { MoveDirection, OutMode, type Container, type ISourceOptions } from "@tsparticles/engine";

export default function ParticleHeader() {
  const [init, setInit] = React.useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [bgColor, setBgColor] = React.useState("");
  const [particleColor, setParticleColor] = React.useState("");
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme, theme);

  React.useEffect(() => {
    setMounted(true);
    if (mounted) {
      setBgColor(currentTheme === "light" ? "#f9f9f9" : "#222222");
      setParticleColor(currentTheme === "light" ? "#000" : "#fff");
    }
  }, [currentTheme, mounted]);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = React.useMemo(
    () => ({
      background: {
        color: currentTheme,
      },
      fullScreen: {
        zIndex: -1, // Ensures particles stay behind other elements
        enable: true,
      },
      style: {
        zIndex: "-100", // Additional safety to ensure particles stay behind
        position: "fixed",
      },
      particles: {
        shape: {
          type: 'circle',
        },
        color: {
          value: particleColor, // Color based on the theme
        },
        number: {
          value: 100,
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Makes particles react to mouse hover
            },
          },
          detectOn: "canvas", // Detect interaction on canvas
        },
        retina_detect: true,
        move: {
          direction: MoveDirection.topLeft,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: true,
          speed: 2,
          straight: false,
        },
        opacity: {
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
          value: { min: 0, max: 1 },
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    [currentTheme, particleColor],
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </>
    );
  }

  return <></>;
}
