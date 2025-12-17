import "./styles/globals.css";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { RevealInitializer } from "./components/RevealInitializer";
import { HeaderNav } from "./components/HeaderNav";
import { Footer } from "./components/Footer";

const sora = Sora({ subsets: ["latin"], display: "swap" });

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ivy Technology",
  url: "https://ivytechse.github.io",
  logo: "https://ivytechse.github.io/images/ivy-logo-black.svg",
  email: "hello@ivytech.se",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Göteborg",
    addressCountry: "Sverige",
  },
};

export const metadata: Metadata = {
  title: "Ivy Technology | Tillgängliga digitala lösningar",
  description:
    "Ivy Technology bygger snabba, tillgängliga och inkluderande webbapplikationer för beslutsfattare i Göteborg och Sverige.",
  metadataBase: new URL("https://ivytechse.github.io"),
  openGraph: {
    title: "Ivy Technology | Digitala lösningar",
    description:
      "Ivy Technology bygger snabba, tillgängliga och inkluderande webbapplikationer för beslutsfattare i Göteborg och Sverige.",
    url: "https://ivytechse.github.io",
    siteName: "Ivy Technology",
    images: ["/images/ivy-og-image.png"],
    locale: "sv_SE",
    type: "website",
  },
  alternates: { canonical: "https://ivytechse.github.io" },
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
