import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { TeamSection } from "../components/TeamSection";
import { teamPageHero } from "../content";

export default function TeamPage() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
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
      </main>
      <Footer />
    </>
  );
}
