import { ContactSection } from "../components/ContactSection";
import { ServicesSection } from "../components/ServicesSection";
import { ApproachSection } from "../components/ApproachSection";
import { servicesPageHero, workShowcase } from "../content";
import { ResponsiveImage } from "../components/ResponsiveImage";

export default function ServicesPage() {
  return (
    <>
      <section className="section page-hero full-bleed">
        <div className="container stack">
          <p className="eyebrow">{servicesPageHero.eyebrow}</p>
          <h1>{servicesPageHero.title}</h1>
          <p className="lede">{servicesPageHero.lede}</p>
          <a className="button primary" href={servicesPageHero.primaryCta.href}>
            {servicesPageHero.primaryCta.label}
          </a>
        </div>
      </section>
      <ServicesSection />
      <section
        className="section work-culture reveal-on-scroll"
        aria-labelledby="work-culture-title"
      >
        <div className="work-grid">
          <div className="work-copy stack">
            <p className="eyebrow">{workShowcase.eyebrow}</p>
            <h2 id="work-culture-title">{workShowcase.title}</h2>
            <p className="lede">{workShowcase.body}</p>
            <a className="button ghost" href={workShowcase.cta.href}>
              {workShowcase.cta.label}
            </a>
          </div>
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
                  <ResponsiveImage
                    baseSrc={card.photoBase}
                    alt={card.altText}
                    width={640}
                    height={640}
                    sizes="(min-width: 1200px) 360px, (min-width: 768px) 50vw, 90vw"
                    priority={index < 2}
                  />
                </div>
                <div className="work-card-body">
                  <h3>{card.title}</h3>
                  <p>{card.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ApproachSection />
      <ContactSection />
    </>
  );
}
