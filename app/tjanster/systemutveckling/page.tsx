import type { Metadata } from "next";
import { ContactSection } from "../../components/ContactSection";
import { site, services } from "../../content";

export const metadata: Metadata = {
  title: "Systemutveckling",
  description:
    "Ivy Technology bygger moderna gränssnitt och robusta tjänster i frontend och backend. Vana vid komplexa miljöer, ny- och vidareutveckling och tillgänglighet som en självklar del av arbetet.",
  alternates: {
    canonical: `${site.url}/tjanster/systemutveckling`,
  },
};

const otherServices = services.filter(
  (s) => s.href !== "/tjanster/systemutveckling"
);

export default function SystemutvecklingPage() {
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
          <h1>Systemutveckling</h1>
          <p className="lede">
            Vi bygger moderna gränssnitt och robusta tjänster i både frontend
            och backend. Vana vid komplexa miljöer och lika bekväma med
            nyutveckling som vidareutveckling. Tillgänglighet är en självklar
            del av allt vi levererar.
          </p>
          <a className="button primary" href="#kontakt">
            Kontakta oss
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="vad-ar-systemutveckling">
        <div className="stack" style={{ maxWidth: "72ch" }}>
          <h2 id="vad-ar-systemutveckling">Vad innebär systemutveckling?</h2>
          <p>
            Systemutveckling är arbetet med att bygga, underhålla och förbättra
            de digitala system som driver en verksamhet. Det spänner från
            användargränssnitt som människor interagerar med varje dag till de
            tjänster, API:er och databaser som utgör hjärtat i en organisation.
            Bra systemutveckling kräver teknisk bredd, noggrannhet och en
            förmåga att hålla helheten i sikte även när man arbetar med
            detaljerna.
          </p>
          <p>
            Vi ser systemutveckling som ett hantverk. Det handlar inte bara om
            att få koden att fungera – det handlar om att skriva kod som andra
            kan förstå, underhålla och bygga vidare på. Testtäckning,
            dokumentation och kodkvalitet är inte valbara delar av leveransen,
            utan grundläggande krav vi ställer på oss själva.
          </p>

          <h2>Frontend och backend – i ett och samma team</h2>
          <p>
            Vi har konsulter med djup erfarenhet av moderna frontendramverk som
            React och Next.js, och vi arbetar lika bekvämt med backend-tjänster
            i Node.js, Java, .NET och Python. Den breda kompetensbasen innebär
            att vi kan ta helhetsansvar för en lösning, snarare än att skicka
            bollen mellan frontend- och backendteam.
          </p>
          <p>
            När vi arbetar i era team bidrar vi med teknisk kompetens som täcker
            hela stacken. Det gör samarbetet effektivare och skapar bättre
            förståelse för hur systemets delar hänger ihop. Vi kan axla en
            specifik roll eller bidra brett beroende på vad just ert uppdrag
            behöver.
          </p>

          <h2>Tillgänglighet som standard</h2>
          <p>
            Tillgänglighet är inte ett tillägg vi lägger till i slutet – det är
            en dimension vi beaktar från första raden kod. Vi arbetar aktivt med
            WCAG-riktlinjer, semantisk HTML och tangentbordsnavigation som
            standard. Joakim Larsson, vår frontendutvecklare och
            tillgänglighetsexpert, ser till att vi håller hög nivå och sprider
            kunskap i de team vi arbetar i.
          </p>
          <p>
            Att bygga tillgängligt är inte bara rätt ur ett inkluderingsperspektiv
            – det ger bättre SEO, bredare användargrupp och mer robust kod som
            håller bättre över tid.
          </p>

          <h2>Ny- och vidareutveckling</h2>
          <p>
            Vi är lika bekväma med att starta ett helt nytt system från grunden
            som med att kliva in i en befintlig, komplex kodbas och göra den
            bättre. Vidareutveckling kräver respekt för vad som redan finns,
            förmåga att läsa andras kod och mod att föreslå förbättringar utan
            att röra om i allt.
          </p>
          <p>
            Vi förstår att de flesta organisationer arbetar med system som vuxit
            fram organiskt under lång tid. Vi hjälper er att navigera teknisk
            skuld, modernisera äldre delar och skapa en klarare struktur –
            inkrementellt och i samarbete med era team.
          </p>

          <h2>Nära samarbete, verklig leverans</h2>
          <p>
            Vi jobbar nära era team med äkta engagemang. Vi tar ägarskap för
            kvaliteten i det vi levererar och kommunicerar öppet om hinder,
            osäkerheter och prioriteringar. Det är inte konsultens uppgift att
            ge svar på frågor som inte ställts – det är vår uppgift att förstå
            vad ni verkligen behöver och leverera det.
          </p>
          <p>
            Hör av dig om du vill veta mer om hur vi kan förstärka ert
            utvecklingsteam, ta helhetsansvar för en ny tjänst eller hjälpa er
            att lyfta kvaliteten i en befintlig lösning.
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
