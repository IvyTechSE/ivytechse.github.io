import { ApproachSection } from "../components/ApproachSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { StorySection } from "../components/StorySection";
import { approachPageHero } from "../content";

export default function ApproachPage() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
          <div className="container stack">
            <p className="eyebrow">{approachPageHero.eyebrow}</p>
            <h1>{approachPageHero.title}</h1>
            <p className="lede">{approachPageHero.lede}</p>
            <a className="button primary" href={approachPageHero.primaryCta.href}>
              {approachPageHero.primaryCta.label}
            </a>
          </div>
        </section>
        <ApproachSection />
        <StorySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
