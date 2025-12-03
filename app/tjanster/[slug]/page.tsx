import { notFound } from "next/navigation";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { HeaderNav } from "../../components/HeaderNav";
import { serviceDetails } from "../../content";

type Params = { slug: string };

export default function ServiceDetailPage({ params }: { params: Params }) {
  const detail = serviceDetails[params.slug];

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
            <a className="button primary" href="#kontakt">
              Kontakta oss
            </a>
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
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}
