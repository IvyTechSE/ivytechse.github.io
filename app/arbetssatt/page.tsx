import { ApproachSection } from "../components/ApproachSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { HeaderNav } from "../components/HeaderNav";
import { StorySection } from "../components/StorySection";

export default function ApproachPage() {
  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
          <div className="container stack">
            <p className="eyebrow">Arbetssätt</p>
            <h1>Balans, frihet och utveckling.</h1>
            <p className="lede">
              Vi jobbar nära era team, tar beslut tillsammans och skapar
              hållbara lösningar som känns lugna och förutsägbara – även när
              tempot är högt.
            </p>
            <a className="button primary" href="#kontakt">
              Kontakta oss
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
