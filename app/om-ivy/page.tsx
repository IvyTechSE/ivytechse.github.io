import type { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { TeamSection } from "../components/TeamSection";
import { teamPageHero, site } from "../content";

export const metadata: Metadata = {
  title: teamPageHero.eyebrow,
  description: teamPageHero.lede,
  openGraph: {
    title: teamPageHero.title,
    description: teamPageHero.lede,
    url: `${site.url}/om-ivy`,
  },
  alternates: {
    canonical: `${site.url}/om-ivy`,
  },
};

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
