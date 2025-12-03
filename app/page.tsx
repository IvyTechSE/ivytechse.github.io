import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
