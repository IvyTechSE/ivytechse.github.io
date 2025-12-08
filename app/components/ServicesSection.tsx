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
          <h2 id="tjanster-title">Vi tar ansvar från idé till drift</h2>
          <p className="lede">
            Vi kliver in där ni behöver oss som mest: struktur i arkitekturen,
            fart i utvecklingen och praktiskt stöd med AI. Alltid nära era team.
          </p>
        </div>
        <div className="grid service-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card service-card reveal-on-scroll"
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
