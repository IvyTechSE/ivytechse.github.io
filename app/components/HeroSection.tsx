"use client";

import Image from "next/image";
import { useMemo } from "react";
import { hero, team } from "../content";

export function HeroSection() {
  const heroShots = useMemo(() => {
    return team
      .filter((person) => person.photo)
      .slice(0, 4)
      .map((person) => ({
        src: person.photo as string,
        alt: `${person.name} – ${person.role}`,
      }));
  }, []);

  return (
    <section
      id="hero"
      className="section hero reveal-on-scroll"
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
                key={shot.src}
                className={`collage-item collage-${index + 1}`}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={320}
                  height={420}
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
