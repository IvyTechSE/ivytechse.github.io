import { approachIntro, steps } from '../content';

export function ApproachSection() {
  return (
    <section
      id="arbetssatt"
      className="section approach reveal-on-scroll"
      aria-labelledby="arbetssatt-title"
    >
      <div className="container stack">
        <p className="eyebrow">{approachIntro.eyebrow}</p>
        <h2 id="arbetssatt-title">{approachIntro.title}</h2>
        <p className="lede">{approachIntro.lede}</p>
        <div className="steps">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="card step-card reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 70}ms` }}
              aria-label={step.title}
            >
              <div className="step-number" aria-hidden="true">
                {index + 1}
              </div>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
