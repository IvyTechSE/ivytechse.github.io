import { ContactSection } from "../components/ContactSection";
import { TeamSection } from "../components/TeamSection";
import { teamPageHero, site } from "../content";

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: site.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Vårt gäng",
      item: `${site.url}/om-ivy`,
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="section page-hero full-bleed">
        <div className="container stack">
          <p className="eyebrow">{teamPageHero.eyebrow}</p>
          <h1>{teamPageHero.title}</h1>
          <p className="lede">{teamPageHero.lede}</p>
          <a className="button primary" href={teamPageHero.primaryCta.href}>
            {teamPageHero.primaryCta.label}
          </a>
        </div>
      </section>
      <TeamSection />
      <ContactSection />
    </>
  );
}
