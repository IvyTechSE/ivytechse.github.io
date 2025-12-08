import { cases, casesIntro } from '../content';

export function CasesSection() {
  return (
    <section
      id="case"
      className="section cases reveal-on-scroll"
      aria-labelledby="case-title"
    >
      <div className="container stack">
        <p className="eyebrow">{casesIntro.eyebrow}</p>
        <h2 id="case-title">{casesIntro.title}</h2>
        <p className="lede">{casesIntro.lede}</p>
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
                {casesIntro.readMoreLabel} <span aria-hidden="true">↗</span>
              </span>
            </article>
          ))}
        </div>
        <a className="button ghost" href={casesIntro.cta.href}>
          {casesIntro.cta.label}
        </a>
      </div>
    </section>
  );
}
