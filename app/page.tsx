import Image from "next/image";
import { Rocket, User } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
        <span className="shooting-star" style={{ left: "62%" }} />
        <span className="shooting-star shooting-star-delayed" style={{ left: "78%" }} />
      </div>

      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-8 lg:px-24 pt-24">
        <div className="flex-1 max-w-xl">
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

          <div className="flex flex-wrap gap-4">
            <a
              href="/proyectos"
              className="flex items-center gap-2 px-6 py-3 bg-[#14315C] text-white rounded-lg hover:bg-[#1E4A8A] dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-colors"
            >
              <Rocket className="w-5 h-5" />
              Ver mis proyectos
            </a>
            <a
              href="/sobre-mi"
              className="flex items-center gap-2 px-6 py-3 border border-[#14315C]/40 dark:border-white/40 text-[#14315C] dark:text-white rounded-lg hover:bg-[#14315C]/5 dark:hover:bg-white/10 transition-colors"
            >
              <User className="w-5 h-5" />
              Sobre mí
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative w-[400px] h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* 🌙 MOON PLACEMENT — coloca aquí tu luna debajo del astronauta.
                Ejemplo: <Image src="/moon.png" alt="Luna" fill className="object-contain" />
                El slot queda detrás (z-0) y el astronauta encima (z-10). */}
            <div className="moon-slot absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-10 w-[300px] h-[300px] lg:w-[380px] lg:h-[380px] z-0">
              <div className="w-full h-full rounded-full border-2 border-dashed border-[#14315C]/25 dark:border-white/25 bg-[#14315C]/5 dark:bg-white/5 flex items-center justify-center">
                <span className="text-xs text-[#14315C]/50 dark:text-white/50 text-center px-8">
                  Espacio para la luna
                </span>
              </div>
            </div>
            <Image
              src="/Astronaut.png"
              alt="Astronauta trabajando en la luna"
              fill
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
