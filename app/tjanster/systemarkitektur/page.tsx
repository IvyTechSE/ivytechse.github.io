import { ContactSection } from "../../components/ContactSection";
import { ApproachSection } from "../../components/ApproachSection";
import { services, site } from "../../content";

const service = services.find((s) => s.href === "/tjanster/systemarkitektur")!;

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.body,
  url: `${site.url}${service.href}`,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function SystemarkitekturPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
      <section className="section page-hero full-bleed">
        <div className="container stack">
          <p className="eyebrow">Våra tjänster</p>
          <h1>{service.title}</h1>
          <p className="lede">{service.body}</p>
          <a className="button primary" href="#kontakt">
            Kontakta oss
          </a>
        </div>
      </section>
      <ApproachSection />
      <ContactSection />
    </>
  );
}
