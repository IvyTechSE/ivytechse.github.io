"use client";

import { hero, team } from "../content";
import { ResponsiveImage } from "./ResponsiveImage";

export function HeroSection() {
  const withPhotos = team.filter((person) => person.photoBase);
  const shuffled = [...withPhotos].sort(() => Math.random() - 0.5);
  const heroShots = shuffled.slice(0, 4).map((person) => ({
    baseSrc: person.photoBase as string,
    alt: `${person.name} – ${person.role}`,
  }));
  return (
    <section
      id="hero"
      className="section hero reveal-on-scroll full-bleed"
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <div className="stack hero-copy">
          <h1 id="hero-title">{hero.title}</h1>
          <p className="lede">{hero.body}</p>
          <div className="actions cluster">
            <a className="button primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-collage">
            {heroShots.map((shot, index) => (
              <figure
                key={shot.baseSrc}
                className={`collage-item collage-${index + 1}`}
              >
                <ResponsiveImage
                  baseSrc={shot.baseSrc}
                  alt={shot.alt}
                  width={640}
                  height={640}
                  sizes="(min-width: 1100px) 320px, (min-width: 768px) 50vw, 90vw"
                  priority={index === 0}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
