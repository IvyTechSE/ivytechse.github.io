import { team, teamIntro } from '../content';
import { ResponsiveImage } from "./ResponsiveImage";

export function TeamSection() {
  return (
    <section
      id="om-ivy"
      className="section team reveal-on-scroll"
      aria-labelledby="om-title"
    >
      <div className="container stack">
        <div className="stack">
          <p className="eyebrow">{teamIntro.eyebrow}</p>
          <h2 id="om-title">{teamIntro.title}</h2>
          <p className="lede">{teamIntro.lede}</p>
        </div>
        <div className="grid team-grid">
          {team.map((person, index) => (
            <article
              key={person.email}
              className="card profile reveal-on-scroll"
              style={{ ["--delay" as string]: `${index * 70}ms` }}
              aria-label={`${person.name}, ${person.role}`}
            >
              <div className="profile-photo">
                {person.photoBase ? (
                  <ResponsiveImage
                    baseSrc={person.photoBase}
                    alt={`${person.name}, ${person.role}`}
                    width={640}
                    height={640}
                    className="profile-photo-img"
                    sizes="(min-width: 1100px) 320px, (min-width: 768px) 50vw, 100vw"
                    priority={index < 2}
                  />
                ) : (
                  <span aria-hidden="true">{person.name.charAt(0)}</span>
                )}
              </div>
              <div className="profile-body">
                <div className="profile-heading">
                  <h3>{person.name}</h3>
                  <p className="eyebrow">{person.role}</p>
                </div>
                <div className="profile-links">
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="linkedin-icon"
                      aria-label={`LinkedIn för ${person.name}`}
                    >
                      <span aria-hidden="true">in</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="join-us">
          {teamIntro.joinUs.text}{" "}
          <a href={`mailto:${teamIntro.joinUs.email}`}>
            {teamIntro.joinUs.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
