import { ContactSection } from "../components/ContactSection";
import { TeamSection } from "../components/TeamSection";
import { team, teamPageHero, site } from "../content";

const teamLd = {
  "@context": "https://schema.org",
  "@graph": team.map((person) => ({
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    sameAs: person.linkedin,
    image: person.photoBase ? `${site.url}${person.photoBase}.jpg` : undefined,
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  })),
};

export default function TeamPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamLd) }}
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
