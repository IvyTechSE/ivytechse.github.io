import Image from "next/image";
import { hero } from "../content";

const heroShots = [
  { src: "/images/anna-funke.png", alt: "Anna Funke i möte med kund" },
  {
    src: "/images/oskar-berntsson.png",
    alt: "Oskar Berntsson planerar system",
  },
  {
    src: "/images/joel-karlsson.png",
    alt: "Joel Karlsson i dialog med teamet",
  },
  { src: "/images/ylva-pyykko.png", alt: "Ylva Pyykkö i samtal utomhus" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="section hero reveal-on-scroll"
      aria-labelledby="hero-title"
    >
      <div className="container hero-grid">
        <div className="stack hero-copy">
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
          <div className="hero-collage">
            {heroShots.map((shot, index) => (
              <figure
                key={shot.src}
                className={`collage-item collage-${index + 1}`}
              >
                <Image src={shot.src} alt={shot.alt} width={320} height={420} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
