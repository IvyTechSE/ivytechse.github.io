import { notFound } from "next/navigation";
import { ContactSection } from "../../components/ContactSection";
import { Footer } from "../../components/Footer";
import { HeaderNav } from "../../components/HeaderNav";
import { serviceDetailPageCopy, serviceDetails } from "../../content";

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
            <p className="eyebrow">{serviceDetailPageCopy.heroEyebrow}</p>
            <h1>{detail.title}</h1>
            <p className="lede">{detail.intro}</p>
            <div className="cluster" role="list" aria-label="Snabbfakta om tjänsten">
              {serviceDetailPageCopy.meta.map((item) => (
                <span key={item} role="listitem" className="tag">
                  {item}
                </span>
              ))}
            </div>
            <div className="cluster">
              <a className="button primary" href={serviceDetailPageCopy.cta.primary.href}>
                {serviceDetailPageCopy.cta.primary.label}
              </a>
              <a className="button ghost" href={serviceDetailPageCopy.cta.secondary.href}>
                {serviceDetailPageCopy.cta.secondary.label}
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
              <p className="eyebrow">{serviceDetailPageCopy.strengthsIntro.eyebrow}</p>
              <h2 id="approach-title">{serviceDetailPageCopy.strengthsIntro.title}</h2>
              <p className="lede">{serviceDetailPageCopy.strengthsIntro.lede}</p>
            </div>
            <div className="grid">
              {serviceDetailPageCopy.strengths.map((item) => (
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
              <p className="eyebrow">{serviceDetailPageCopy.proofIntro.eyebrow}</p>
              <h2 id="deliverables-title">{serviceDetailPageCopy.proofIntro.title}</h2>
              <p className="lede">{serviceDetailPageCopy.proofIntro.lede}</p>
            </div>
            <div className="card">
              <div className="grid">
                {serviceDetailPageCopy.proofPoints.map((item) => (
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
