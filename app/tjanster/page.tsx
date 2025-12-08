import Image from "next/image";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { ServicesSection } from "../components/ServicesSection";
import { ApproachSection } from "../components/ApproachSection";
import { workShowcase } from "../content";

export default function ServicesPage() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
          <div className="container stack">
            <p className="eyebrow">Våra tjänster</p>
            <h1>Erfarna konsulter. Människor du vill jobba med.</h1>
            <p className="lede">
              Strategi, design och engineering i samma gäng. Vi bygger lösningar
              som håller – för organisationen och för användarna.
            </p>
            <a className="button primary" href="#kontakt">
              Kontakta oss
            </a>
          </div>
        </section>
        <ServicesSection />
        <section
          className="section work-culture reveal-on-scroll"
          aria-labelledby="work-culture-title"
        >
          <div className="container work-grid">
            <div className="work-visual">
              <div className="work-circle" aria-hidden="true" />
              {workShowcase.cards.map((card, index) => (
                <article
                  key={card.title}
                  className={`work-card ${card.tone} reveal-on-scroll`}
                  style={{ ["--delay" as string]: `${index * 80}ms` }}
              aria-label={card.title}
            >
              <div className="work-card-image">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={800}
                  height={960}
                  sizes="(min-width: 1200px) 360px, (min-width: 768px) 50vw, 90vw"
                  loading="lazy"
                />
              </div>
              <div className="work-card-body">
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </div>
                </article>
              ))}
            </div>
            <div className="work-copy stack">
              <p className="eyebrow">{workShowcase.eyebrow}</p>
              <h2 id="work-culture-title">{workShowcase.title}</h2>
              <p className="lede">{workShowcase.body}</p>
              <a className="button ghost" href={workShowcase.cta.href}>
                {workShowcase.cta.label}
              </a>
            </div>
          </div>
        </section>
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
