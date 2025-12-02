import { hero } from '../content';

export function HeroSection() {
  return (
    <section id="hero" className="section hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="stack">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="lede">{hero.body}</p>
          <div className="actions cluster">
            <a className="button primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="button ghost" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="glass-card">
            <div className="glass-bar" />
            <div className="glass-bar short" />
            <div className="glass-box" />
          </div>
        </div>
      </div>
    </section>
  );
}
