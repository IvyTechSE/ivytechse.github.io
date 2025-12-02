import Image from 'next/image';
import { team } from '../content';

export function TeamSection() {
  return (
    <section
      id="om-ivy"
      className="section team reveal-on-scroll"
      aria-labelledby="om-title"
    >
      <div className="container stack">
        <div className="stack">
          <p className="eyebrow">Vårt gäng</p>
          <h2 id="om-title">Människorna bakom lösningarna</h2>
          <p className="lede">
            Vi är människor som håller ihop och värnar om ett arbetssätt där
            välmående, utveckling och kvalitet får ta plats. Hos oss hittar du
            en trygg gemenskap där nyfikenhet och omtanke skapar förutsättningar
            för riktigt bra arbete.
          </p>
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
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={`${person.name}, ${person.role}`}
                    width={300}
                    height={480}
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
                <p>{person.intro}</p>
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
          Nyfiken på att bli en del av teamet? Hör av dig till{" "}
          <a href="mailto:anna.funke@ivytech.se">anna.funke@ivytech.se</a>.
        </p>
      </div>
    </section>
  );
}
