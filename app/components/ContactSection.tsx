import { contact } from '../content';
import { ResponsiveImage } from "./ResponsiveImage";

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
            {contact.image?.baseSrc ? (
              <ResponsiveImage
                baseSrc={contact.image.baseSrc}
                alt={contact.image.alt}
                width={240}
                height={240}
                className="contact-image"
                sizes="(min-width: 900px) 180px, 34vw"
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
