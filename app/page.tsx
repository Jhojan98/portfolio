import Image from "next/image";
import Link from "next/link";
import { Rocket, User } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      <main className="relative z-10 mx-auto flex min-h-svh w-full max-w-6xl flex-col items-center justify-center gap-12 px-8 pb-16 pt-28 lg:flex-row lg:gap-16">
        <div className="w-full flex-1 max-w-xl text-center lg:text-left">
          <p className="text-[#14315C] dark:text-gray-300 text-lg mb-2">Hola, soy</p>
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-[#14315C] dark:text-white">
            Jhojan
            <br />
            Aragón
          </h1>
          <h2 className="text-2xl lg:text-3xl text-[#14315C] dark:text-white font-medium mb-6">
            Desarrollador de Software
          </h2>
          <p className="text-[#14315C]/80 dark:text-gray-300 text-lg mb-8 leading-relaxed">
            Me apasiona crear soluciones tecnológicas que combinan diseño,
            funcionalidad y experiencia de usuario.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="/proyectos"
              className="flex items-center gap-2 px-6 py-3 bg-[#14315C] text-white rounded-lg hover:bg-[#1E4A8A] dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Ver mis proyectos
            </Link>
            <Link
              href="/sobre-mi"
              className="flex items-center gap-2 px-6 py-3 border border-[#14315C]/40 dark:border-white/40 text-[#14315C] dark:text-white rounded-lg hover:bg-[#14315C]/5 dark:hover:bg-white/10 transition-colors"
            >
              <User className="w-5 h-5" />
              Sobre mí
            </Link>
          </div>
        </div>

        <div className="flex w-full flex-1 items-center justify-center">
          <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[500px]">
            {/* 🌙 MOON PLACEMENT — coloca aquí tu luna debajo del astronauta.
                Ejemplo: <Image src="/moon.png" alt="Luna" fill sizes="380px" className="object-contain" />
                El slot queda detrás (z-0) y el astronauta encima (z-10). */}
            <div className="moon-slot absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-10 w-3/4 h-3/4 z-0">
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#14315C]/25 dark:border-white/25 bg-[#14315C]/5 dark:bg-white/5 flex items-center justify-center">
                <span className="text-xs text-[#14315C]/50 dark:text-white/50 text-center px-8">
                  Espacio para la luna
                </span>
              </div>
            </div>
            <Image
              src="/Astronaut.webp"
              alt="Astronauta trabajando en la luna"
              fill
              sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 500px"
              className="object-contain relative z-10"
              preload
            />
          </div>
        </div>
      </main>
    </div>
  );
}
