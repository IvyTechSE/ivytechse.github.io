import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { ServicesSection } from "../components/ServicesSection";
import { ApproachSection } from "../components/ApproachSection";

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
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
