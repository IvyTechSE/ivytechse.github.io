import Image from 'next/image';
import { team } from '../content';

export function TeamSection() {
  return (
    <section id="om-ivy" className="section" aria-labelledby="om-title">
      <div className="container stack">
        <div className="stack">
          <p className="eyebrow">Vårt gäng</p>
          <h2 id="om-title">Människorna bakom lösningarna</h2>
          <p className="lede">
            Vi är sex personer idag och växer långsamt till 20–30 för att
            behålla kultur och kvalitet. Vi möter er med nyfikenhet, hög social
            kompetens och teknik som håller.
          </p>
        </div>
        <div className="grid team-grid">
          {team.map((person) => (
            <article
              key={person.email}
              className="card profile"
              aria-label={`${person.name}, ${person.role}`}
            >
              <div className="profile-photo" aria-hidden="true">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt=""
                    width={1200}
                    height={900}
                    className="profile-photo-img"
                  />
                ) : (
                  <span aria-hidden="true">{person.name.charAt(0)}</span>
                )}
              </div>
              <div className="profile-body">
                <h3>{person.name}</h3>
                <p className="eyebrow">{person.role}</p>
                <p>{person.intro}</p>
                <a href={`mailto:${person.email}`}>{person.email}</a>
                {person.linkedin && (
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="linkedin-icon"
                    aria-label={`LinkedIn för ${person.name}`}
                  >
                    in
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <p>
          Nyfiken på att bli en del av teamet? Hör av dig till{" "}
          <a href="mailto:camilla@ivytech.se">camilla@ivytech.se</a>.
        </p>
      </div>
    </section>
  );
}
