import type { Metadata } from "next";
import { ContactSection } from "../../components/ContactSection";
import { site, services } from "../../content";

export const metadata: Metadata = {
  title: "Systemarkitektur",
  description:
    "Ivy Technology designar skalbara, hållbara systemarkitekturer som håller över tid – tekniskt och organisatoriskt. Vi skapar struktur och riktning som era team kan bygga vidare på.",
  alternates: {
    canonical: `${site.url}/tjanster/systemarkitektur`,
  },
};

const otherServices = services.filter(
  (s) => s.href !== "/tjanster/systemarkitektur"
);

export default function SystemarkitekturPage() {
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
          <h1>Systemarkitektur</h1>
          <p className="lede">
            Vi designar skalbara, hållbara system som håller över tid – både
            tekniskt och organisatoriskt. Vi skapar struktur och riktning som
            era team kan bygga vidare på.
          </p>
          <a className="button primary" href="#kontakt">
            Kontakta oss
          </a>
        </div>
      </section>

      <section className="section" aria-labelledby="vad-ar-systemarkitektur">
        <div className="stack" style={{ maxWidth: "72ch" }}>
          <h2 id="vad-ar-systemarkitektur">Vad är systemarkitektur?</h2>
          <p>
            Systemarkitektur handlar om de grundläggande besluten som formar hur
            ett system byggs, hur det växer och hur det förvaltas över tid. Det
            är ramen som avgör om ett system förblir hanterbart när kraven
            förändras, teamet växer eller belastningen ökar. Utan en genomtänkt
            arkitektur riskerar system att bli svåra att underhålla, svåra att
            skala och kostsamma att ändra.
          </p>
          <p>
            En god arkitektur balanserar tekniska behov med organisatoriska
            förutsättningar. Det handlar inte bara om att välja rätt teknisk
            stack – det handlar om att förstå hur människor arbetar, hur ansvaret
            fördelas och hur systemet ska leva vidare när förutsättningarna
            förändras.
          </p>

          <h2>Vad vi gör</h2>
          <p>
            Vi hjälper organisationer att forma, dokumentera och kommunicera en
            arkitektur som alla i teamet förstår och kan arbeta efter. Det kan
            handla om att etablera en arkitektur från grunden för ett nytt
            system, eller att analysera och förbättra en befintlig lösning som
            vuxit sig komplex och svårnavigerad.
          </p>
          <p>
            Vi arbetar med allt från övergripande systemperspektiv – hur
            tjänster kommunicerar, hur data flödar och hur integrationer
            hanteras – till mer detaljerade beslut om moduluppdelning,
            gränssnittsdesign och tekniska mönster. Målet är alltid detsamma: en
            arkitektur som är enkel nog att förstå men kraftfull nog att bära
            verksamhetens behov.
          </p>

          <h2>Hur vi arbetar</h2>
          <p>
            Vi kliver in som en del av ert team och lär känna er kodbas, era
            processer och era mål. Vi genomför arkitekturgenomgångar tillsammans
            med era utvecklare och identifierar flaskhalsar, teknisk skuld och
            förbättringsområden. Därefter skapar vi en tydlig bild av var ni
            befinner er och var ni vill komma.
          </p>
          <p>
            Vi är övertygade om att arkitekturarbete måste ske nära
            verkligheten. En vacker modell på whiteboarden är värdelös om den
            inte stämmer överens med hur koden faktiskt ser ut. Därför kombinerar
            vi tekniska djupdykningar med workshops och öppna diskussioner med
            de som bygger och förvaltar systemen i vardagen.
          </p>

          <h2>Varför det spelar roll</h2>
          <p>
            Att investera i systemarkitektur tidigt – eller att systematiskt
            förbättra en befintlig – betalar sig snabbt. Tydliga gränser och
            ansvarsområden gör det enklare att onboarda nya teammedlemmar,
            enklare att felsöka och enklare att introducera ny funktionalitet.
            Teknisk skuld som tillåts växa belastar både fart och moral i teamet.
          </p>
          <p>
            Vi har erfarenhet av att arbeta i komplexa miljöer med
            mångåriga kodbaser, höga tillgänglighetskrav och organisationer där
            flera team delar på samma plattform. Vi vet vad som krävs för att
            skapa arkitekturbeslut som håller, inte bara på pappret utan i
            det vardagliga arbetet.
          </p>

          <h2>Redo att skapa en hållbar grund?</h2>
          <p>
            Oavsett om ni bygger något nytt eller behöver ta tag i den tekniska
            skulden i ett befintligt system, kan vi hjälpa er att hitta rätt
            väg framåt. Vi börjar alltid med ett öppet samtal om var ni befinner
            er och vart ni vill komma.
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
