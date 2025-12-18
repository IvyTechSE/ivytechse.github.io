import { ContactSection } from "../components/ContactSection";
import { TeamSection } from "../components/TeamSection";
import { teamPageHero } from "../content";

export default function TeamPage() {
  return (
    <>
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
