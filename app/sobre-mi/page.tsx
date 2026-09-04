import { Download } from "lucide-react";
import Image from "next/image";
import StatsCard from "../components/StatsCard";

const stats = [
  { number: "+2", label: "Años de experiencia" },
  { number: "10+", label: "Proyectos completados" },
  { number: "3+", label: "Tecnologías dominadas" },
];

export default function SobreMiPage() {
  return (
    <div className="relative flex min-h-svh flex-col justify-center px-8 pb-16 pt-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2 text-[#14315C] dark:text-white">Sobre mí</h1>
            <div className="w-16 h-1 bg-[#14315C] dark:bg-white rounded-full mb-8 mx-auto lg:mx-0" />

            <div className="space-y-6 text-[#14315C]/80 dark:text-gray-300 leading-relaxed">
              <p>
                Soy estudiante de Ingeniería de Sistemas y desarrollador
                apasionado por la tecnología, el aprendizaje constante y los
                desafíos que impulsan la innovación.
              </p>
              <p>
                Me especializo en el desarrollo de aplicaciones web y me interesa
                la inteligencia artificial, el diseño de sistemas y la
                experiencia de usuario.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#14315C] text-white rounded-lg hover:bg-[#1E4A8A] dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              <Download className="w-5 h-5" />
              Descargar CV
            </a>

            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat) => (
                <StatsCard key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          <div className="flex flex-1 w-full justify-center">
            <div className="relative aspect-[7/8] w-full max-w-[350px]">
              <Image
                src="/Astronaut2.webp"
                alt="Astronauta flotando en el espacio"
                fill
                sizes="(max-width: 400px) 85vw, 350px"
                className="rounded-3xl border border-[#14315C]/10 object-cover dark:border-white/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
