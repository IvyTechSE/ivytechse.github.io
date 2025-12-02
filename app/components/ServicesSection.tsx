import { services } from '../content';

export function ServicesSection() {
  return (
    <section id="tjanster" className="section" aria-labelledby="tjanster-title">
      <div className="container stack">
        <p className="eyebrow">Tjänster</p>
        <h2 id="tjanster-title">Erfarna konsulter. Människor du vill jobba med.</h2>
        <div className="grid">
          {services.map((service) => (
            <article key={service.title} className="card lift" aria-labelledby={`${service.title}-title`}>
              <div className="icon" role="img" aria-label={service.alt}>
                {service.icon}
              </div>
              <h3 id={`${service.title}-title`}>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
