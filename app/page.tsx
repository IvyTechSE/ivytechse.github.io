import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { StorySection } from "./components/StorySection";

export default function Home() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <HeroSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
