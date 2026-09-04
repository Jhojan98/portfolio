import ContactoSection from "./components/sections/ContactoSection";
import HeroSection from "./components/sections/HeroSection";
import ProyectosSection from "./components/sections/ProyectosSection";
import SobreMiSection from "./components/sections/SobreMiSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreMiSection />
      <ProyectosSection />
      <ContactoSection />
    </>
  );
}
