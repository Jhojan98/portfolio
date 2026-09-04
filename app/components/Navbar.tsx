"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PlanetIcon from "./PlanetIcon";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("inicio");

  // Scroll-spy: resalta el link de la sección visible.
  // En rutas individuales solo existe su propia sección.
  useEffect(() => {
    const ids = navItems
      .map((item) => item.id)
      .filter((id) => document.getElementById(id));
    if (ids.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#E9F3FB]/80 dark:bg-black/80 backdrop-blur-md border-b border-[#14315C]/10 dark:border-white/10 transition-colors">
      <Link href="/#inicio" className="flex items-center gap-2 text-[#14315C] dark:text-white hover:text-[#1E4A8A] dark:hover:text-gray-300 transition-colors">
        <PlanetIcon className="w-8 h-8" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className={`text-sm transition-colors relative group ${
                isActive
                  ? "text-[#14315C] dark:text-white font-medium"
                  : "text-[#14315C]/70 dark:text-gray-300 hover:text-[#14315C] dark:hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#14315C] dark:bg-white transition-all ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          );
        })}
      </div>

      <ThemeToggle />
    </nav>
  );
}
