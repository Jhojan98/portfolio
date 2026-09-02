import Image from "next/image";
import { Rocket, User } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="stars" />

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 lg:px-24 pt-24">
        <div className="flex-1 max-w-xl">
          <p className="text-accent-light text-lg mb-2">Hola, soy</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            Jhojan
            <br />
            Aragón
          </h1>
          <h2 className="text-2xl lg:text-3xl text-accent-purple font-semibold mb-6">
            Desarrollador de Software
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Me apasiona crear soluciones tecnológicas que combinan diseño,
            funcionalidad y experiencia de usuario.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/proyectos"
              className="flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-full hover:bg-accent-light transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Ver mis proyectos
            </a>
            <a
              href="/sobre-mi"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <User className="w-5 h-5" />
              Sobre mí
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/20 to-transparent flex items-center justify-center border border-white/10">
              <div className="text-center text-gray-500">
                <p className="text-sm">Imagen del astronauta</p>
                <p className="text-xs mt-1">500x500px</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
