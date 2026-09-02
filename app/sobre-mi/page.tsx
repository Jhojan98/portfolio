import { Download } from "lucide-react";
import StatsCard from "../components/StatsCard";

const stats = [
  { number: "+2", label: "Años de experiencia" },
  { number: "10+", label: "Proyectos completados" },
  { number: "3+", label: "Tecnologías dominadas" },
];

export default function SobreMiPage() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 px-8 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold mb-2">Sobre mí</h1>
            <div className="w-16 h-1 bg-accent-purple rounded-full mb-8" />

            <div className="space-y-6 text-gray-300 leading-relaxed">
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
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent-purple text-white rounded-full hover:bg-accent-light transition-colors"
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

          <div className="flex-1 flex justify-center">
            <div className="relative w-[350px] h-[400px]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-purple/10 to-transparent flex items-center justify-center border border-white/5">
                <div className="text-center text-gray-500">
                  <p className="text-sm">Imagen del astronauta</p>
                  <p className="text-xs mt-1">350x400px</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
