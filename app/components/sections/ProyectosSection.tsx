"use client";

import { Rocket } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../ProjectCard";

const categories = ["Todos", "Web", "Backend", "IA", "Mobile", "Ejemplo"];

const projects = [
  {
    title: "Sistema de Detección IoT",
    description:
      "Sistema inteligente para detectar dispositivos IoT comprometidos en una red.",
    tags: ["Python", "Scikit-learn", "Flask"],
    category: "IA",
  },
  {
    title: "UrbanRide API",
    description:
      "Microservicios para la gestión de transporte urbano y usuarios.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Ejemplo"],
    category: "Backend",
  },
  {
    title: "ComentaUd",
    description:
      "Plataforma de reseñas y comentarios para experiencias universitarias.",
    tags: ["Go", "GoAdmin", "PostgreSQL"],
    category: "Web",
  },
  {
    title: "SmartHome App",
    description:
      "Aplicación móvil para controlar dispositivos inteligentes en el hogar.",
    tags: ["React Native", "Firebase", "Ejemplo"],
    category: "Ejemplo",
  },
];

export default function ProyectosSection() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="proyectos"
      className="relative flex min-h-svh snap-start scroll-mt-20 flex-col justify-center px-8 pb-16 pt-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-[#14315C] dark:text-white text-center lg:text-left">Mis proyectos</h1>
        <div className="w-16 h-1 bg-[#14315C] dark:bg-white rounded-full mb-8 mx-auto lg:mx-0" />

        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#14315C] text-white dark:bg-white dark:text-black"
                  : "bg-white dark:bg-white/5 text-[#14315C]/70 dark:text-gray-400 border border-[#14315C]/15 dark:border-white/10 hover:border-[#14315C]/40 dark:hover:border-white/40 hover:text-[#14315C] dark:hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#14315C]/30 dark:border-white/20 text-[#14315C] dark:text-white rounded-lg hover:bg-[#14315C]/5 dark:hover:bg-white/10 transition-colors"
          >
            <Rocket className="w-5 h-5" />
            Ver todos los proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
