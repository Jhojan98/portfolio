"use client";

import Link from "next/link";
import { Orbit } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-space-dark/80 backdrop-blur-md border-b border-white/5">
      <Link href="/" className="flex items-center gap-2 text-accent-purple hover:text-accent-light transition-colors">
        <Orbit className="w-8 h-8" />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm text-gray-300 hover:text-white transition-colors relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-purple transition-all group-hover:w-full" />
          </Link>
        ))}
      </div>

      <Link
        href="#contacto"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-purple/20 text-accent-purple hover:bg-accent-purple hover:text-white transition-all"
      >
        <Orbit className="w-5 h-5" />
      </Link>
    </nav>
  );
}
