import { cases } from '../content';

export function CasesSection() {
  return (
    <section
      id="case"
      className="section cases reveal-on-scroll"
      aria-labelledby="case-title"
    >
      <div className="container stack">
        <p className="eyebrow">Kundcase</p>
        <h2 id="case-title">Riktiga projekt. Riktiga resultat.</h2>
        <p className="lede">
          Vi hjälper företag och organisationer att skapa smarta digitala
          lösningar som är tillgängliga, högpresterande och användarvänliga för
          alla.
        </p>
        <div className="grid">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className="card lift reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 80}ms` }}
            >
              <div className="tags" aria-label="Taggar">
                {item.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="card-arrow">
                Läs mer <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
        <a className="button ghost" href="#kontakt">
          Utforska fler kundcase
        </a>
      </div>
    </section>
  );
}
