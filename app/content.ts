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

export const servicesSectionIntro = {
  eyebrow: "Våra tjänster",
  title: "Vi tar ansvar från idé till drift",
  lede:
    "Vi kliver in där ni behöver oss som mest: struktur i arkitekturen, fart i utvecklingen och praktiskt stöd med AI. Alltid nära era team.",
};

export const servicesPageHero = {
  eyebrow: "Våra tjänster",
  title: "Erfarna konsulter. Människor du vill jobba med.",
  lede:
    "Strategi, design och engineering i samma gäng. Vi bygger lösningar som håller – för organisationen och för användarna.",
  primaryCta: { label: "Kontakta oss", href: "#kontakt" },
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

export const serviceDetailPageCopy = {
  heroEyebrow: "Tjänster",
  cta: {
    primary: { label: "Kontakta oss", href: "#kontakt" },
    secondary: { label: "Alla tjänster", href: "/tjanster" },
  },
  meta: [
    "Senior kompetens i komplexa miljöer",
    "Tillgänglighet och kvalitet som standard",
    "Teknikagnostiska och pragmatiska",
  ],
  strengths: [
    {
      title: "Seniora konsulter",
      body: "Vi har lång erfarenhet av komplexa miljöer och tar ansvar för helheten: teknik, säkerhet och team.",
    },
    {
      title: "Tillgänglighet och kvalitet",
      body: "WCAG, robusta tester och mätbara kvalitetskrav är en naturlig del av varje leverans.",
    },
    {
      title: "Teknikbredd",
      body: "Vi rör oss säkert mellan arkitektur, backend, frontend och AI-stöd – beroende på vad uppdraget kräver.",
    },
  ],
  strengthsIntro: {
    eyebrow: "Kompetens",
    title: "Kvalitet och höjd i varje disciplin",
    lede: "Vi kliver in med erfarenhet, inte mallar. Fokus ligger på robust kod, tydlighet och säkerhet.",
  },
  proofIntro: {
    eyebrow: "Bevis på kvalitet",
    title: "Det här kan ni förvänta er",
    lede: "Varje uppdrag har sina processer, men vår leverans präglas alltid av tydlighet och hållbarhet.",
  },
  proofPoints: [
    {
      title: "Stabilitet i drift",
      body: "Skalbara lösningar som är lätta att övervaka, felsöka och vidareutveckla utan drama.",
    },
    {
      title: "Tydliga beslut",
      body: "Arkitektur- och designval dokumenteras och förankras så att fler kan bidra och bygga vidare.",
    },
    {
      title: "Snabb effekt",
      body: "Vi hittar de små leverablerna som gör skillnad tidigt – en prototyp, ett API, ett mätetal – så ni ser värdet direkt.",
    },
    {
      title: "Kunskap som stannar",
      body: "Vi lämnar efter oss testbar kod, dokumentation och ett team som känner sig trygga i att äga lösningen.",
    },
  ],
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

export const approachIntro = {
  eyebrow: "Arbetssätt",
  title: "Så jobbar vi",
  lede:
    "Vi tror på balans, frihet och utveckling. När vi mår bra gör vi vårt bästa jobb – och det märks i resultaten vi skapar tillsammans med er.",
};

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

export const storyIntro = {
  eyebrow: "Resan",
  title: "Från idé till trygg drift",
  lede:
    "En lugn, mänsklig process som ger fart utan att tappa kontrollen. Vi håller ihop helheten så att ni kan vara trygga i varje steg.",
};

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

export const casesIntro = {
  eyebrow: "Kundcase",
  title: "Riktiga projekt. Riktiga resultat.",
  lede:
    "Vi hjälper företag och organisationer att skapa smarta digitala lösningar som är tillgängliga, högpresterande och användarvänliga för alla.",
  readMoreLabel: "Läs mer",
  cta: { label: "Utforska fler kundcase", href: "#kontakt" },
};

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

export const teamIntro = {
  eyebrow: "Vårt gäng",
  title: "Människorna bakom lösningarna",
  lede:
    "Vi är människor som håller ihop och värnar om ett arbetssätt där välmående, utveckling och kvalitet får ta plats. Hos oss hittar du en trygg gemenskap där nyfikenhet och omtanke skapar förutsättningar för riktigt bra arbete.",
  joinUs: {
    text: "Nyfiken på att bli en del av teamet? Hör av dig till",
    email: "anna.funke@ivytech.se",
  },
};

export const workShowcase = {
  eyebrow: "Vardagen på Ivy",
  title: "Så här jobbar vi på riktigt",
  body: "Vi är nära varandra och våra kunder – med tydliga ritualer, gemensamma demos och en kultur som gör det lätt att säga vad man tycker. Här är ett axplock från vår vardag.",
  cta: { label: "Möt vårt gäng", href: "/om-ivy" },
  cards: [
    {
      title: "Bygger tillsammans",
      meta: "Parprogrammering, mobbning och gemensamma code reviews",
      detail:
        "Vi sitter tätt med design, produkt och test för att lösa problemen ihop.",
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
      tone: "stone",
    },
    {
      title: "Lyfter varandra",
      meta: "Veckovisa kunskapsdelningar och retros varje sprint",
      detail:
        "Vi investerar tid i lärande, mentorskapspar och öppna demo-pass.",
      image:
        "https://images.unsplash.com/photo-1552960562-daf630e9278b?auto=format&fit=crop&w=1600&q=80",
      tone: "stone",
    },
  ],
};

export const contact = {
  title: "Kontakt",
  body: "Vill du veta mer om oss, eller är du nyfiken på att samarbeta? Hör gärna av dig till Anna så berättar hon mer!",
  cta: { label: "Säg hej", href: "mailto:hello@ivytech.se" },
  email: "hello@ivytech.se",
  image: {
    src: "/images/anna-funke.png",
    alt: "Anna Funke, VD på Ivy Technology",
  },
};

export const approachPageHero = {
  eyebrow: "Arbetssätt",
  title: "Balans, frihet och utveckling.",
  lede:
    "Vi jobbar nära era team, tar beslut tillsammans och skapar hållbara lösningar som känns lugna och förutsägbara – även när tempot är högt.",
  primaryCta: { label: "Kontakta oss", href: "#kontakt" },
};

export const teamPageHero = {
  eyebrow: "Vårt gäng",
  title: "Teamet som gör skillnad.",
  lede:
    "Vi grundades i Göteborg och kombinerar teknik med människofokus. Vi växer hållbart för att behålla kultur, kvalitet och närhet till våra kunder.",
  primaryCta: { label: "Bli en del av vårt gäng", href: "#kontakt" },
};

export const siteNotice =
  "🚧 Webbplatsen är under uppbyggnad. Vissa delar är tillfälliga.";
