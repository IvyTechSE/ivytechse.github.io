'use client';

import { useEffect, useMemo, useState } from 'react';
import { ApproachSection } from "./components/ApproachSection";
import { CasesSection } from "./components/CasesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HeaderNav } from "./components/HeaderNav";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { StorySection } from "./components/StorySection";
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

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('.reveal-on-scroll'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

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
        <StorySection />
        <CasesSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
