"use client";

import { useEffect, useRef } from "react";
import ShootingStars from "./ShootingStars";

// Velocidad de parallax por capa (0 = fija, 1 = se mueve con el contenido).
// Valores pequeños: el fondo se desplaza más lento y da profundidad
// sin descubrir los bordes de las capas.
const LAYERS: Array<[string, number]> = [
  [".nebula", 0.04],
  [".stars", 0.06],
  [".stardust", 0.1],
  [".sparkles", 0.06],
];

export default function SpaceBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = LAYERS.map(
      ([selector, rate]) =>
        [root.querySelector<HTMLElement>(selector), rate] as const
    ).filter(([el]) => el !== null);

    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      for (const [el, rate] of els) {
        el!.style.transform = `translate3d(0, ${(-y * rate).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true">
      {/* Fondo espacial: nebulosa + estrellas + polvo + destellos + fugaces */}
      <div className="nebula" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <div className="stardust" aria-hidden="true" />
      <div className="sparkles" aria-hidden="true">
        <span className="sparkle" style={{ top: "13%", left: "6%", width: "21px", height: "21px", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "37%", left: "33%", width: "13px", height: "13px", animationDelay: "1.2s" }} />
        <span className="sparkle" style={{ top: "9%", left: "58%", width: "16px", height: "16px", animationDelay: "2.1s" }} />
        <span className="sparkle" style={{ top: "61%", left: "4%", width: "14px", height: "14px", animationDelay: "0.6s" }} />
        <span className="sparkle" style={{ top: "74%", left: "27%", width: "11px", height: "11px", animationDelay: "3s" }} />
        <span className="sparkle" style={{ top: "44%", left: "51%", width: "19px", height: "19px", animationDelay: "1.8s" }} />
        <span className="sparkle" style={{ top: "24%", left: "84%", width: "12px", height: "12px", animationDelay: "2.6s" }} />
        <span className="sparkle" style={{ top: "82%", left: "63%", width: "15px", height: "15px", animationDelay: "0.9s" }} />
        <ShootingStars />
      </div>
    </div>
  );
}
