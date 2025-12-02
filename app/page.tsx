'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const navItems = [
  { id: "tjanster", label: "Tjänster" },
  { id: "arbetssatt", label: "Arbetssätt" },
  { id: "case", label: "Exempel" },
  { id: "om-ivy", label: "Vårt gäng" },
  { id: "kontakt", label: "Kontakt" },
];

const services = [
  {
    title: "Systemarkitektur",
    body: "Vi designar skalbara, hållbara system som håller över tid – tekniskt och organisatoriskt. Vi skapar struktur och riktning som teamen kan bygga vidare på.",
    icon: "🏗️",
    alt: "Ikon för systemarkitektur",
  },
  {
    title: "Systemutveckling – frontend och backend",
    body: "Vi bygger moderna gränssnitt och robusta tjänster, vana vid komplexa miljöer och både ny- och vidareutveckling. Tillgänglighet är en självklar del av arbetet.",
    icon: "💻",
    alt: "Ikon för systemutveckling",
  },
  {
    title: "AI i praktiken",
    body: "Vi använder AI som verktyg i vardagen – för analys, automatisering, test och kodstöd – och hjälper er att göra detsamma på riktigt, inte bara i teorin.",
    icon: "🤖",
    alt: "Ikon för AI",
  },
];

const steps = [
  {
    title: "Riktigt samarbete",
    body: "Vi jobbar nära era team med genuint engagemang. Kod är ett verktyg, inte ett mål i sig.",
  },
  {
    title: "Teknik och människor",
    body: "Vi kombinerar teknisk höjd med hög social kompetens. Beslut tas tillsammans – för hållbara lösningar.",
  },
  {
    title: "Balans och utveckling",
    body: "När vi mår bra gör vi vårt bästa jobb. Vi prioriterar balans, frihet och lärande, vilket ger bättre resultat.",
  },
];

const cases = [
  {
    title: "Systemarkitektur i skala",
    body: "Tydliga strukturer och riktning för teamen, med skalbara lösningar som håller över tid.",
    tags: ["Arkitektur", "Ledarskap", "Skalbarhet"],
  },
  {
    title: "Tillgängliga upplevelser",
    body: "Responsiva gränssnitt, WCAG 2.2 i praktiken och tydliga flöden som fler kan använda.",
    tags: ["Frontend", "Tillgänglighet", "UX"],
  },
  {
    title: "AI i vardagen",
    body: "Automatisering, analys och kodstöd där AI förstärker människan – inte ersätter den.",
    tags: ["AI", "Produktivitet", "Automation"],
  },
];

const team = [
  {
    name: "Camilla",
    role: "Kundansvarig & rådgivare",
    intro:
      "Din första kontakt hos oss. Ser till att vi förstår behoven och håller ihop samarbetet.",
    email: "camilla@ivytech.se",
  },
  {
    name: "Joel",
    role: "Software Developer",
    intro:
      "Bygger stabila, moderna lösningar i hela stacken med fokus på kvalitet och tempo.",
    email: "joel.karlsson@ivytech.se",
  },
  {
    name: "Anna",
    role: "UX & Tillgänglighet",
    intro:
      "Säkrar WCAG 2.2 i praktiken och tar fram tydliga flöden som fler kan använda.",
    email: "anna@ivytech.se",
  },
  {
    name: "Erik",
    role: "Systemarkitekt",
    intro:
      "Skapar riktning och struktur i komplexa miljöer och leder tekniska beslut framåt.",
    email: "erik@ivytech.se",
  },
  {
    name: "Lina",
    role: "Data & AI",
    intro:
      "Integrerar AI i vardagen – analys, automatisering och kodstöd som förstärker teamen.",
    email: "lina@ivytech.se",
  },
  {
    name: "Omar",
    role: "Backendutvecklare",
    intro:
      "Designar robusta tjänster och API:er som tål last och är enkla att vidareutveckla.",
    email: "omar@ivytech.se",
  },
];

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
                Det är vår kompetens som skapar lösningar – men det är
                människorna som gör skillnad
              </h1>
              <p className="lede">
                Vi är nyfikna systemutvecklare som älskar teknik – men vi gillar
                människor ännu mer. Vi jobbar nära er, som en del av teamet, för
                att lösa riktiga problem och skapa smarta digitala lösningar.
              </p>
              <div className="actions cluster">
                <a className="button primary" href="#kontakt">
                  Prata med oss
                </a>
                <a className="button ghost" href="mailto:hello@ivytech.se">
                  Mejla oss
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
            <h2 id="tjanster-title">
              Erfarna konsulter. Människor du vill jobba med.
            </h2>
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
              Vi tror på balans, frihet och utveckling. När vi mår bra gör vi
              vårt bästa jobb – och det märks i resultaten vi skapar tillsammans
              med er.
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
          <div className="container stack">
            <div className="stack">
              <p className="eyebrow">Vårt gäng</p>
              <h2 id="om-title">Människorna bakom lösningarna</h2>
              <p className="lede">
                Vi är sex personer idag och växer långsamt till 20–30 för att
                behålla kultur och kvalitet. Vi möter er med nyfikenhet, hög
                social kompetens och teknik som håller.
              </p>
            </div>
            <div className="grid team-grid">
              {team.map((person) => (
                <article
                  key={person.email}
                  className="card profile"
                  aria-label={`${person.name}, ${person.role}`}
                >
                  <div className="profile-row">
                    <div className="profile-photo" aria-hidden="true">
                      {person.name.charAt(0)}
                    </div>
                    <div className="profile-body">
                      <h3>{person.name}</h3>
                      <p className="eyebrow">{person.role}</p>
                      <p>{person.intro}</p>
                      <a href={`mailto:${person.email}`}>{person.email}</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p>
              Nyfiken på att bli en del av teamet? Hör av dig till{" "}
              <a href="mailto:camilla@ivytech.se">camilla@ivytech.se</a>.
            </p>
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
                  Hör gärna av dig till Camilla så berättar hon mer!
                </p>
                <a
                  className="button contact-button"
                  href="mailto:camilla@ivytech.se"
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
