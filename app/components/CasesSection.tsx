import { cases } from '../content';

export function CasesSection() {
  return (
    <section id="case" className="section" aria-labelledby="case-title">
      <div className="container stack">
        <p className="eyebrow">Exempel</p>
        <h2 id="case-title">Exempel på resultat</h2>
        <div className="grid">
          {cases.map((item) => (
            <article key={item.title} className="card lift">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="tags" aria-label="Taggar">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <a className="button ghost" href="#kontakt">
          Se fler exempel
        </a>
      </div>
    </section>
  );
}
