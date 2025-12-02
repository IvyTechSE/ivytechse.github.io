import { steps } from '../content';

export function ApproachSection() {
  return (
    <section id="arbetssatt" className="section" aria-labelledby="arbetssatt-title">
      <div className="container stack">
        <p className="eyebrow">Arbetssätt</p>
        <h2 id="arbetssatt-title">Så jobbar vi</h2>
        <p className="lede">
          Vi tror på balans, frihet och utveckling. När vi mår bra gör vi vårt bästa jobb – och det märks i resultaten
          vi skapar tillsammans med er.
        </p>
        <div className="steps">
          {steps.map((step) => (
            <article key={step.title} className="card" aria-label={step.title}>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
