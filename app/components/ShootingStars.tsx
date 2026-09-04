"use client";

import { useEffect, useRef } from "react";

function random(min: number, max: number) {
  return min + Math.random() * (max - min);
}

// Spawns shooting stars at random positions, angles, sizes, speeds
// and intervals. Each star animates once and is removed on animationend.
export default function ShootingStars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let timeoutId = 0;

    const spawn = () => {
      if (cancelled) return;

      const star = document.createElement("span");
      star.className = "shooting-star-random";
      star.style.top = `${random(4, 45).toFixed(1)}%`;
      star.style.left = `${random(35, 95).toFixed(1)}%`;
      star.style.width = `${Math.round(random(90, 180))}px`;
      star.style.animationDuration = `${random(0.9, 2).toFixed(2)}s`;
      star.style.setProperty(
        "--meteor-angle",
        `${random(-35, -15).toFixed(1)}deg`
      );
      star.addEventListener("animationend", () => star.remove(), {
        once: true,
      });
      // Fallback removal in case animationend never fires
      window.setTimeout(() => star.remove(), 5000);
      container.appendChild(star);

      // Next meteor in 2–8 seconds
      timeoutId = window.setTimeout(spawn, random(2000, 8000));
    };

    timeoutId = window.setTimeout(spawn, random(500, 2500));

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      container.replaceChildren();
    };
  }, []);

  return <div ref={containerRef} aria-hidden="true" className="contents" />;
}
