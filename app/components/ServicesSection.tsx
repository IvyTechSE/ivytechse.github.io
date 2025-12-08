import Link from "next/link";
import { services } from '../content';

export function ServicesSection() {
  return (
    <section
      id="tjanster"
      className="section services reveal-on-scroll"
      aria-labelledby="tjanster-title"
    >
      <div className="container stack">
        <div className="stack">
          <p className="eyebrow">Våra tjänster</p>
          <h2 id="tjanster-title">
            Erfarna konsulter. Människor du vill jobba med.
          </h2>
          <p className="lede">
            Strategi, form och engineering i samma gäng. Vi bygger lösningar som
            håller – för organisationen och för användarna.
          </p>
        </div>
        <div className="grid service-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card lift service-card reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 80}ms` }}
              aria-labelledby={`${service.title}-title`}
            >
              <div className="service-icon" role="img" aria-label={service.alt}>
                {service.icon}
              </div>
              <div className="service-body">
                <h3 id={`${service.title}-title`}>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
