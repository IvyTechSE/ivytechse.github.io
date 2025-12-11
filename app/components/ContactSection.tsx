import Image from 'next/image';
import { contact } from '../content';

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="section contact reveal-on-scroll full-bleed"
      aria-labelledby="kontakt-title"
    >
      <div className="container contact">
        <div className="contact-card">
          <div className="contact-body">
            <h2
              id="kontakt-title"
              className="eyebrow"
              style={{ color: "var(--sand)" }}
            >
              {contact.title}
            </h2>
            <p style={{ color: "var(--sand)" }}>{contact.body}</p>
            <a className="button contact-button" href={contact.cta.href}>
              {contact.cta.label}
            </a>
          </div>
          <div className="contact-media">
            {contact.image?.src ? (
              <Image
                src={contact.image.src}
                alt={contact.image.alt}
                width={220}
                height={220}
                className="contact-image"
                sizes="(min-width: 900px) 200px, 38vw"
                priority
              />
            ) : (
              <span className="avatar" aria-hidden="true">
                {contact.title.charAt(0)}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
