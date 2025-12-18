import { services, servicesSectionIntro } from '../content';

export function ServicesSection() {
  return (
    <section
      id="tjanster"
      className="section services reveal-on-scroll"
      aria-labelledby="tjanster-title"
    >
      <div className="container stack">
        <div className="stack">
          <p className="eyebrow">{servicesSectionIntro.eyebrow}</p>
          <h2 id="tjanster-title">{servicesSectionIntro.title}</h2>
          <p className="lede">{servicesSectionIntro.lede}</p>
        </div>
        <div className="grid service-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="card service-card reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 80}ms` }}
              aria-labelledby={`${service.title}-title`}
            >
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
