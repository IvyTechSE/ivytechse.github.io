'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

type FieldErrors = Partial<Record<string, string>>;

const navItems = [
  { id: 'tjanster', label: 'Tjänster' },
  { id: 'arbetssatt', label: 'Arbetssätt' },
  { id: 'case', label: 'Case' },
  { id: 'om-ivy', label: 'Om Ivy' },
  { id: 'kontakt', label: 'Kontakt' }
];

const services = [
  {
    title: 'Frontendutveckling',
    body:
      'Vi bygger moderna webbgränssnitt med fokus på prestanda, kvalitet och långsiktig förvaltning med ramverk som React och moderna byggkedjor.',
    icon: '💻',
    alt: 'Ikon för frontendutveckling'
  },
  {
    title: 'Tillgänglighet och inkluderande design',
    body:
      'Vi granskar och förbättrar lösningar mot WCAG 2.2 AA, utbildar team och skapar mönster som fungerar för fler.',
    icon: '♿',
    alt: 'Ikon för tillgänglighet'
  },
  {
    title: 'Arkitektur och tekniskt ledarskap',
    body:
      'Vi stöttar beslut kring frontendarkitektur, designsystem, kodstandarder och processer som håller över tid.',
    icon: '🧭',
    alt: 'Ikon för arkitektur'
  },
  {
    title: 'Rådgivning och workshops',
    body:
      'Förstudier, koncept och faciliterade workshops som prioriterar rätt insatser för både användare och affär.',
    icon: '🧠',
    alt: 'Ikon för rådgivning'
  }
];

const steps = [
  {
    title: 'Förstå behoven',
    body:
      'Insikter från användare, data och nuvarande lösning. Vi kartlägger risker, mål och krav på tillgänglighet.'
  },
  {
    title: 'Designa lösningen',
    body:
      'Skisser, prototyper och komponenter med tydliga mönster, testade för WCAG 2.2 AA och verkliga scenarier.'
  },
  {
    title: 'Bygga och förbättra',
    body:
      'Implementering, tester med användare och uppföljning i data. Vi förbättrar iterativt tillsammans med ert team.'
  }
];

const cases = [
  {
    title: 'Bokningsflöde för verkstadstjänster',
    body:
      'Tydligare steg, mobilanpassning och tillgängliga formulär. Högre konvertering och färre avhopp.',
    tags: ['Frontend', 'Tillgänglighet', 'Dataanalys']
  },
  {
    title: 'E-handel för heminredning',
    body:
      'Snabbare produktlistor, förbättrad filtrering och optimerade bilder. Kortare laddtider och ökad försäljning.',
    tags: ['Prestanda', 'UX', 'React']
  },
  {
    title: 'Offentlig självservice',
    body:
      'Tillgängliga formulär och tydliga statusmeddelanden. Bättre upplevelse för skärmläsare och mobil.',
    tags: ['WCAG 2.2', 'Formulär', 'Inkluderande design']
  }
];

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formErrors, setFormErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

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
      { rootMargin: '-45% 0px -45% 0px', threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="site-header" aria-label="Sidhuvud">
        <div className="container header-inner">
          <div className="logo" aria-label="Ivy Technology">
            Ivy Technology
          </div>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="huvudmeny"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Meny
            <span aria-hidden="true">{menuOpen ? "–" : "+"}</span>
          </button>
          <nav aria-label="Huvudmeny">
            <ul id="huvudmeny" className={`nav-list ${menuOpen ? "open" : ""}`}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    className={activeId === item.id ? "active" : ""}
                    href={`#${item.id}`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          id="hero"
          className="section hero"
          aria-labelledby="hero-title"
        >
          <div className="container hero-grid">
            <div className="stack">
              <p className="eyebrow">
                Göteborg · Digitala produkter · Tillgänglighet
              </p>
              <h1 id="hero-title">
                Digitala lösningar som förenar teknik och tillgänglighet
              </h1>
              <p className="lede">
                Ivy Technology hjälper er att bygga snabba, tillgängliga och
                hållbara webbapplikationer som fungerar för alla användare.
              </p>
              <div className="actions cluster">
                <a className="button primary" href="#kontakt">
                  Boka ett möte
                </a>
                <a className="button ghost" href="mailto:hello@ivytech.se">
                  Kontakta oss
                </a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <div className="glass-card">
                <div className="glass-bar" />
                <div className="glass-bar short" />
                <div className="glass-box" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="tjanster"
          className="section"
          aria-labelledby="tjanster-title"
        >
          <div className="container stack">
            <p className="eyebrow">Tjänster</p>
            <h2 id="tjanster-title">Vad vi erbjuder</h2>
            <div className="grid">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card lift"
                  aria-labelledby={`${service.title}-title`}
                >
                  <div className="icon" role="img" aria-label={service.alt}>
                    {service.icon}
                  </div>
                  <h3 id={`${service.title}-title`}>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="arbetssatt"
          className="section"
          aria-labelledby="arbetssatt-title"
        >
          <div className="container stack">
            <p className="eyebrow">Arbetssätt</p>
            <h2 id="arbetssatt-title">Så jobbar vi</h2>
            <p className="lede">
              Vi kombinerar analys, design och utveckling, samarbetar nära ert
              team och utgår från tydliga mål för både användare och affär.
            </p>
            <div className="steps">
              {steps.map((step) => (
                <article
                  key={step.title}
                  className="card"
                  aria-label={step.title}
                >
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="case" className="section" aria-labelledby="case-title">
          <div className="container stack">
            <p className="eyebrow">Case</p>
            <h2 id="case-title">Exempel på resultat</h2>
            <div className="grid">
              {cases.map((item) => (
                <article key={item.title} className="card lift">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <div className="tags" aria-label="Taggar">
                    {item.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <a className="button ghost" href="#kontakt">
              Se fler exempel
            </a>
          </div>
        </section>

        <section id="om-ivy" className="section" aria-labelledby="om-title">
          <div className="container about-grid">
            <div className="stack">
              <p className="eyebrow">Om Ivy</p>
              <h2 id="om-title">Om Ivy Technology</h2>
              <p className="lede">
                Ivy är ett mindre konsultbolag med djup expertis inom frontend,
                tillgänglighet och insiktsdriven utveckling. Vi hjälper
                beslutsfattare att modernisera digitala produkter med fokus på
                hastighet, kvalitet och inkludering.
              </p>
            </div>
            <article className="card profile" aria-label="Grundare">
              <div className="profile-row">
                {/* Byt till riktig bild och next/image i produktion */}
                <div className="avatar" aria-hidden="true">
                  IA
                </div>
                <div>
                  <h3>Ida Andersson</h3>
                  <p className="eyebrow">Grundare · WAS certifierad</p>
                  <p>
                    15+ år inom frontend, tillgänglighet och produktteam i
                    Sverige.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          id="kontakt"
          className="section"
          aria-labelledby="kontakt-title"
        >
          <div className="container">
            <div className="contact-card">
              <div className="contact-body">
                <h2 className="eyebrow" style={{ color: "var(--sand)" }}>
                  Kontakt
                </h2>
                <p id="kontakt-title" style={{ color: "var(--sand)" }}>
                  Vill du veta mer om oss, eller är du nyfiken på att samarbeta?
                  Hör gärna av dig till Anna så berättar hon mer!
                </p>
                <a
                  className="button contact-button"
                  href="mailto:hello@ivytech.se"
                >
                  Säg hej
                </a>
              </div>
              <div className="contact-media">
                <Image
                  src="/anna.svg"
                  alt="Anna, rådgivare på Ivy Technology"
                  width={220}
                  height={220}
                  className="contact-image"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="section footer" aria-label="Sidfot">
        <div className="container footer-grid">
          <div>
            <div className="logo">Ivy Technology</div>
            <p>Göteborg, Sverige</p>
          </div>
          <div className="footer-links">
            <a href="#tjanster">Tjänster</a>
            <a href="#arbetssatt">Arbetssätt</a>
            <a href="#case">Case</a>
            <a href="#kontakt">Kontakt</a>
          </div>
          <div className="footer-contact">
            <a href="mailto:hello@ivytech.se">hello@ivytech.se</a>
          </div>
        </div>
      </footer>
    </>
  );
}
