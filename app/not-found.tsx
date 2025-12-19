import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section page-hero full-bleed">
      <div className="container stack">
        <h1>Sidan kunde inte hittas</h1>
        <p className="lede">
          Den sida du söker finns tyvärr inte. Den kan ha flyttats eller tagits
          bort.
        </p>
        <div className="actions cluster">
          <Link className="button primary" href="/">
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </section>
  );
}
