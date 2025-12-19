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
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/ivy-logo-black.svg`,
  email: "hello@ivytech.se",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Göteborg",
    addressCountry: "Sverige",
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
          url: `${site.url}/feed.xml`,
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
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
