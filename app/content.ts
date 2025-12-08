export const navItems = [
  { href: "/tjanster", label: "Vad vi gör" },
  { href: "/om-ivy", label: "Vårt gäng" },
];

export const hero = {
  eyebrow: "Göteborg · Digitala produkter · Tillgänglighet",
  title: "Kompetens bygger lösningar, människor bygger värde",
  body: "Vi är nyfikna systemutvecklare som älskar teknik – men vi gillar människor ännu mer. Vi jobbar nära er, som en del av teamet, för att lösa riktiga problem och skapa smarta digitala lösningar.",
  primaryCta: { label: "Kontakta oss", href: "#kontakt" },
  secondaryCta: { label: "Mejla oss", href: "mailto:hello@ivytech.se" },
};

export const services = [
  {
    title: "Systemarkitektur",
    body: "Vi designar skalbara, hållbara system som håller över tid – tekniskt och organisatoriskt. Vi skapar struktur och riktning som teamen kan bygga vidare på.",
    icon: "🏗️",
    alt: "Ikon för systemarkitektur",
    href: "/tjanster/systemarkitektur",
  },
  {
    title: "Systemutveckling",
    body: "Vi bygger moderna gränssnitt och robusta tjänster i både frontend- och backend, vana vid komplexa miljöer och både ny- och vidareutveckling. Tillgänglighet är en självklar del av arbetet.",
    icon: "💻",
    alt: "Ikon för systemutveckling",
    href: "/tjanster/systemutveckling",
  },
  {
    title: "AI i praktiken",
    body: "Vi använder AI som verktyg i vardagen – för analys, automatisering, test och kodstöd – och hjälper er att göra detsamma på riktigt, inte bara i teorin.",
    icon: "🤖",
    alt: "Ikon för AI",
    href: "/tjanster/ai-i-praktiken",
  },
];

export const serviceDetails: Record<
  string,
  {
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
  }
> = {
  systemarkitektur: {
    title: "Systemarkitektur",
    intro:
      "Vi designar skalbara, hållbara system som håller över tid – både tekniskt och organisatoriskt. Våra arkitekter har förmågan att se helheten, sätta struktur och skapa lösningar som är tydliga att bygga vidare på.",
    sections: [
      {
        heading: "Teknik och människor",
        body: "För oss handlar arkitektur inte bara om teknik, utan också om människor. I rollen ingår ofta att leda andra utvecklare, driva tekniska beslut framåt och skapa samsyn mellan team, verksamhet och ledning. Vi är vana att ta ansvar – och skapa riktning.",
      },
    ],
  },
  systemutveckling: {
    title: "Systemutveckling – frontend och backend",
    intro:
      "Vi bygger stabila, moderna lösningar i hela stacken – från responsiva gränssnitt till robusta backendtjänster. Våra utvecklare är vana att jobba i komplexa miljöer, med både nyutveckling och vidareutveckling av befintliga system.",
    sections: [
      {
        heading: "Tillgänglighet och kvalitet",
        body: "Inom frontend har vi särskild kompetens inom tillgänglighet. Vi ser till att det vi bygger kan användas av alla, oavsett förutsättningar – för oss är det inte ett tillval, utan en självklar del av god utveckling.",
      },
      {
        heading: "Arbetssätt som håller",
        body: "Vi föredrar att arbeta testdrivet, agilt och nära kunden – kod för oss är ett verktyg för att lösa riktiga behov, inte ett mål i sig.",
      },
    ],
  },
  "ai-i-praktiken": {
    title: "AI i praktiken",
    intro:
      "Vi följer utvecklingen inom AI med stort intresse – men ännu viktigare, vi använder det aktivt. Många av våra konsulter har redan integrerat AI som ett naturligt verktyg i sitt dagliga arbete: för analys, automatisering, testning, kodstöd och mycket mer.",
    sections: [
      {
        heading: "Praktisk nytta",
        body: "Vi hjälper gärna våra kunder att utforska vad AI kan göra i praktiken – på riktigt. Inte bara i teorin. Det handlar inte om att byta ut människor – utan om att förstärka dem.",
      },
    ],
  },
};

export const steps = [
  {
    title: "Riktigt samarbete",
    body: "Vi jobbar nära era team med genuint engagemang. Kod är ett verktyg, inte ett mål i sig.",
  },
  {
    title: "Teknik och människor",
    body: "Vi kombinerar teknisk höjd med hög social kompetens. Beslut tas tillsammans – för hållbara lösningar.",
  },
  {
    title: "Balans och utveckling",
    body: "När vi mår bra gör vi vårt bästa jobb. Vi prioriterar balans, frihet och lärande, vilket ger bättre resultat.",
  },
];

export const story = [
  {
    title: "Vi lyssnar in på riktigt",
    body: "En gemensam förståelse för målgrupp, tillgänglighet och affärsmål. Vi kartlägger hinder och sätter ramarna tillsammans med er.",
  },
  {
    title: "Vi bygger tillsammans",
    body: "Tvärfunktionella team, tydliga beslut och design som växer hållbart. Vi prototypar tidigt och justerar innan det blir dyrt.",
  },
  {
    title: "Vi levererar och lär",
    body: "Lanseringar utan dramatik, med mätbara effekter och dokumentation. Vi lämnar över kunskap och finns kvar som partner när ni behöver.",
  },
];

export const cases = [
  {
    title: "Systemarkitektur i skala",
    body: "Tydliga strukturer och riktning för teamen, med skalbara lösningar som håller över tid.",
    tags: ["Arkitektur", "Ledarskap", "Skalbarhet"],
  },
  {
    title: "Tillgängliga upplevelser",
    body: "Responsiva gränssnitt, WCAG 2.2 i praktiken och tydliga flöden som fler kan använda.",
    tags: ["Frontend", "Tillgänglighet", "UX"],
  },
  {
    title: "AI i vardagen",
    body: "Automatisering, analys och kodstöd där AI förstärker människan – inte ersätter den.",
    tags: ["AI", "Produktivitet", "Automation"],
  },
];

export const team = [
  {
    name: "Jesper Dahlbeck",
    role: "Systemarkitekt",
    intro:
      "Designar hållbara, skalbara system med fokus på både teknik och människor.",
    email: "jesper.dahlbeck@ivytech.se",
    linkedin: "https://www.linkedin.com/in/jesper-dahlbeck-1b598b24/",
    photo: "/images/jesper-dahlbeck.png",
  },
  {
    name: "Joel Karlsson",
    role: "Systemutvecklare",
    intro:
      "Bygger hållbara, skalbara system med fokus på kvalitet och användarupplevelse.",
    email: "joel.karlsson@ivytech.se",
    linkedin: "https://www.linkedin.com/in/joel-karlsson-2a51181b/",
    photo: "/images/joel-karlsson.png",
  },
  {
    name: "Anna Funke",
    role: "VD & Grundare",
    intro:
      "Driver företaget med fokus på människor, kultur och hållbara samarbeten.",
    email: "anna.funke@ivytech.se",
    linkedin: "https://www.linkedin.com/in/anna-funke-88482995/",
    photo: "/images/anna-funke.png",
  },
  {
    name: "Oscar Berntsson",
    role: "Systemarkitekt",
    intro:
      "Designar skalbara, hållbara system med fokus på både teknik och team.",
    email: "oscar.berntsson@ivytech.se",
    linkedin: "https://www.linkedin.com/in/oscar-berntsson-80b01885/",
    photo: "/images/oscar-berntsson.png",
  },
  {
    name: "Ylva Pyykkö",
    role: "Systemutvecklare",
    intro:
      "Bygger robusta, skalbara system med fokus på hållbarhet och kvalitet i varje steg.",
    email: "ylva.pyykko@ivytech.se",
    linkedin: "https://www.linkedin.com/in/ylva-pyykk%C3%B6-105ba32/",
    photo: "/images/ylva-pyykko.png",
  },
  {
    name: "Joakim Larsson",
    role: "Frontendutvecklare & Tillgänglighetsexpert",
    intro:
      "Bygger tillgängliga, responsiva gränssnitt med fokus på användarupplevelse och WCAG.",
    email: "joakim.larsson@ivytech.se",
    linkedin: "https://www.linkedin.com/in/joakimlarsson92/",
    photo: "/images/joakim-larsson.png",
  },
];

export const contact = {
  title: "Kontakt",
  body: "Vill du veta mer om oss, eller är du nyfiken på att samarbeta? Hör gärna av dig till Anna så berättar hon mer!",
  cta: { label: "Säg hej", href: "mailto:hello@ivytech.se" },
  image: {
    src: "/images/anna-funke.png",
    alt: "Profilbild  Ivy Technology",
  },
};
