import { notFound } from "next/navigation";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { HeaderNav } from "../../components/HeaderNav";
import { serviceDetails } from "../../content";

type Params = { slug: string };

export default function ServiceDetailPage({ params }: { params: Params }) {
  const detail = serviceDetails[params.slug];
  const strengths = [
    {
      title: "Seniora konsulter",
      body: "Vi har lång erfarenhet av komplexa miljöer och tar ansvar för helheten: teknik, säkerhet och team.",
    },
    {
      title: "Tillgänglighet och kvalitet",
      body: "WCAG, robusta tester och mätbara kvalitetskrav är en naturlig del av varje leverans.",
    },
    {
      title: "Teknikbredd",
      body: "Vi rör oss säkert mellan arkitektur, backend, frontend och AI-stöd – beroende på vad uppdraget kräver.",
    },
  ];

  const proofPoints = [
    {
      title: "Stabilitet i drift",
      body: "Skalbara lösningar som är lätta att övervaka, felsöka och vidareutveckla utan drama.",
    },
    {
      title: "Tydliga beslut",
      body: "Arkitektur- och designval dokumenteras och förankras så att fler kan bidra och bygga vidare.",
    },
    {
      title: "Snabb effekt",
      body: "Vi hittar de små leverablerna som gör skillnad tidigt – en prototyp, ett API, ett mätetal – så ni ser värdet direkt.",
    },
    {
      title: "Kunskap som stannar",
      body: "Vi lämnar efter oss testbar kod, dokumentation och ett team som känner sig trygga i att äga lösningen.",
    },
  ];

  const serviceMeta = [
    "Senior kompetens i komplexa miljöer",
    "Tillgänglighet och kvalitet som standard",
    "Teknikagnostiska och pragmatiska",
  ];

  if (!detail) {
    notFound();
  }

  return (
    <>
      <HeaderNav />
      <main id="main">
        <section className="section page-hero">
          <div className="container stack">
            <p className="eyebrow">Tjänster</p>
            <h1>{detail.title}</h1>
            <p className="lede">{detail.intro}</p>
            <div className="cluster" role="list" aria-label="Snabbfakta om tjänsten">
              {serviceMeta.map((item) => (
                <span key={item} role="listitem" className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="cluster">
              <a className="button primary" href="#kontakt">
                Kontakta oss
              </a>
              <a className="button ghost" href="/tjanster">
                Alla tjänster
              </a>
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="service-body-title">
          <div className="container stack">
            <h2 id="service-body-title" className="sr-only">
              {detail.title} detaljer
            </h2>
            <div className="grid">
              {detail.sections.map((section) => (
                <article key={section.heading} className="card lift">
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="approach-title">
          <div className="container stack">
            <div className="stack">
              <p className="eyebrow">Kompetens</p>
              <h2 id="approach-title">Kvalitet och höjd i varje disciplin</h2>
              <p className="lede">Vi kliver in med erfarenhet, inte mallar. Fokus ligger på robust kod, tydlighet och säkerhet.</p>
            </div>
            <div className="grid">
              {strengths.map((item) => (
                <article key={item.title} className="card lift">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section" aria-labelledby="deliverables-title">
          <div className="container stack">
            <div className="stack">
              <p className="eyebrow">Bevis på kvalitet</p>
              <h2 id="deliverables-title">Det här kan ni förvänta er</h2>
              <p className="lede">Varje uppdrag har sina processer, men vår leverans präglas alltid av tydlighet och hållbarhet.</p>
            </div>
            <div className="card">
              <div className="grid">
                {proofPoints.map((item) => (
                  <article key={item.title} className="stack">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}
