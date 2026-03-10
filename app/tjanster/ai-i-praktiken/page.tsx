import type { Metadata } from "next";
import { ContactSection } from "../../components/ContactSection";
import { site, services } from "../../content";

export const metadata: Metadata = {
  title: "AI i praktiken",
  description:
    "Ivy Technology använder AI som ett praktiskt verktyg i vardagen – för analys, automatisering, test och kodstöd – och hjälper er att göra detsamma. Inte bara i teorin.",
  alternates: {
    canonical: `${site.url}/tjanster/ai-i-praktiken`,
  },
};

const otherServices = services.filter(
  (s) => s.href !== "/tjanster/ai-i-praktiken"
);

export default function AiIPraktikenPage() {
  return (
    <>
      <nav aria-label="Brödsmulor" className="section" style={{ paddingBottom: 0 }}>
        <a href="/tjanster" style={{ fontSize: "0.875rem", opacity: 0.7 }}>
          ← Tillbaka till tjänster
        </a>
      </nav>

      <section className="section page-hero full-bleed">
        <div className="container stack">
          <p className="eyebrow">Tjänst</p>
          <h1>AI i praktiken</h1>
          <p className="lede">
            Vi använder AI som ett verktyg i det dagliga arbetet – för analys,
            automatisering, test och kodstöd. Och vi hjälper er att göra
            detsamma, på riktigt, inte bara i teorin.
          </p>
          <a className="button primary" href="#kontakt">
            Kontakta oss
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="ai-i-praktiken-intro">
        <div className="stack" style={{ maxWidth: "72ch" }}>
          <h2 id="ai-i-praktiken-intro">AI som verktyg, inte buzzword</h2>
          <p>
            AI har snabbt blivit en av de mest omtalade teknologierna i
            branschen. Men det är lätt hänt att entusiasmen kring AI stannar vid
            presentationsslides och experiment i isolerade sandlådemiljöer.
            Verklig nytta uppstår när AI integreras i de vardagliga arbetsflödena
            – i kodredigeraren, i testningen, i analysen av stora datamängder och
            i automatiseringen av repetitiva uppgifter.
          </p>
          <p>
            Vi på Ivy Technology har gjort AI till en naturlig del av hur vi
            arbetar. Vi är inte ett AI-bolag i den meningen att vi säljer
            AI-produkter – vi är ett teknikkonsultbolag som har lärt oss att
            använda AI effektivt och som delar den kunskapen med de team vi
            arbetar i.
          </p>

          <h2>Hur vi använder AI i vardagen</h2>
          <p>
            I vår vardag används AI på konkreta sätt som gör arbetet snabbare
            och bättre. Kodgenerering och kodstöd med verktyg som GitHub
            Copilot och liknande assistenter är en naturlig del av
            utvecklingsarbetet. Vi använder AI för att snabba upp genomgångar av
            pull requests, generera testfall och identifiera mönster i
            loggdata.
          </p>
          <p>
            Vid analys av krav och dokumentation hjälper AI till att
            sammanfatta, strukturera och identifiera luckor. Vid felsökning kan
            AI-assistenter snabba upp diagnosen av komplexa problem. Vi har lärt
            oss när AI tillför verkligt värde och när den mänskliga blicken
            fortfarande är överlägsen – den insikten är minst lika viktig som
            verktygen i sig.
          </p>

          <h2>Vad vi hjälper er med</h2>
          <p>
            Vi hjälper era team att komma igång med AI på ett strukturerat och
            hållbart sätt. Det kan handla om att introducera AI-assisterade
            arbetsflöden i er utvecklingsprocess, att utbilda teamet i hur man
            promptar effektivt eller att identifiera vilka delar av er verksamhet
            som är bäst lämpade för AI-stöd.
          </p>
          <p>
            Vi kan också hjälpa till med mer tekniska implementationer – som att
            integrera AI-modeller i befintliga system, bygga automatiseringar
            som drar nytta av språkmodeller eller analysera data med
            AI-drivna verktyg. Vi utgår alltid från era faktiska behov, inte
            från vad som låter imponerande.
          </p>

          <h2>Realistiskt om möjligheter och begränsningar</h2>
          <p>
            AI är ett kraftfullt verktyg, men det är viktigt att ha realistiska
            förväntningar. Språkmodeller kan hallucinera, ge föråldrade svar och
            sakna domänspecifik förståelse. Automatisering med AI kräver noggrant
            utformade guardrails och mänsklig granskning i kritiska steg.
          </p>
          <p>
            Vi hjälper er att navigera dessa utmaningar och bygga en kultur kring
            AI-användning som är kritisk, ansvarsfull och produktiv. Målet är
            inte att använda AI för sakens skull – målet är att era team ska
            arbeta smartare, snabbare och med högre kvalitet.
          </p>

          <h2>Kom igång med AI – på riktigt</h2>
          <p>
            Oavsett om ni precis börjat utforska AI eller redan har experiment
            på gång som ni vill ta till nästa nivå, kan vi hjälpa er att hitta
            en väg framåt som passar er organisation. Vi börjar med ett öppet
            samtal om vad ni vill uppnå och vad som är realistiskt att
            åstadkomma med de resurser och den kodbas ni har.
          </p>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="andra-tjanster-title"
      >
        <div className="stack">
          <h2 id="andra-tjanster-title">Fler tjänster</h2>
          <div className="grid service-grid">
            {otherServices.map((service) => (
              <a
                key={service.href}
                href={service.href}
                className="card service-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
