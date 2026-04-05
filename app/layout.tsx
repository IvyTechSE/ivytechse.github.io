import "./styles/globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { RevealInitializer } from "./components/RevealInitializer";
import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";
import { site } from "./content";

const sora = Sora({ subsets: ["latin"], display: "swap" });

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/ivy-logo-black.svg`,
  email: "hello@ivytech.se",
  sameAs: [
    "https://www.linkedin.com/company/ivy-technology-se",
    "https://github.com/IvyTechSE",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Göteborg",
    addressRegion: "Västra Götaland",
    addressCountry: "SE",
  },
  areaServed: {
    "@type": "Country",
    name: "Sweden",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@ivytech.se",
    contactType: "customer service",
  },
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Göteborg",
      addressCountry: "SE",
    },
  },
};

export const metadata: Metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: site.ogImage.url, alt: site.ogImage.alt }],
    locale: "sv_SE",
    type: "website",
  },
  alternates: { 
    canonical: site.url,
    types: {
      'application/rss+xml': [
        {
          url: `${site.url}/feed.rss`,
          title: `${site.name} RSS Feed`,
        },
      ],
    },
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage.url],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className={`${sora.className}`}>
        <a className="skip-link" href="#main">
          Hoppa till innehåll
        </a>
        <RevealInitializer />
        <HeaderNav />
        <main id="main" className="container">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="2a1d90c8-a4e0-43f3-b520-7f191b687b30"
        />
      </body>
    </html>
  );
}
