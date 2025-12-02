'use client';

import { useEffect, useMemo, useState } from 'react';
import { ApproachSection } from "./components/ApproachSection";
import { CasesSection } from "./components/CasesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { navItems } from "./content";

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <HeaderNav
        activeId={activeId}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavClick={handleNavClick}
      />
      <main id="main">
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        {/* <CasesSection /> */}
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
