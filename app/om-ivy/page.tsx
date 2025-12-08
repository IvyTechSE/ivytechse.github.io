import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { TeamSection } from "../components/TeamSection";

export default function TeamPage() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
          <div className="container stack">
            <p className="eyebrow">Vårt gäng</p>
            <h1>Teamet som gör skillnad.</h1>
            <p className="lede">
              Vi grundades i Göteborg och kombinerar teknik med människofokus.
              Vi växer hållbart för att behålla kultur, kvalitet och närhet till
              våra kunder.
            </p>
            <a className="button primary" href="#kontakt">
              Bli en del av vårt gäng
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
