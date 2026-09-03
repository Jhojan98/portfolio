"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbit } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#E9F3FB]/80 dark:bg-black/80 backdrop-blur-md border-b border-[#14315C]/10 dark:border-white/10 transition-colors">
      <Link href="/" className="flex items-center gap-2 text-[#14315C] dark:text-white hover:text-[#1E4A8A] dark:hover:text-gray-300 transition-colors">
        <Orbit className="w-8 h-8" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
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
