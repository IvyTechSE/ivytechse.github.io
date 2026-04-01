import {
  navItems,
  site,
  hero,
  services,
  steps,
  team,
  contact,
  servicesSectionIntro,
  servicesPageHero,
  approachIntro,
  teamIntro,
  teamPageHero,
  workShowcase,
} from "../app/content";

describe("navItems", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(navItems)).toBe(true);
    expect(navItems.length).toBeGreaterThan(0);
  });

  it("each item has href and label", () => {
    for (const item of navItems) {
      expect(item).toHaveProperty("href");
      expect(item).toHaveProperty("label");
    }
  });
});

describe("site", () => {
  it("has required fields", () => {
    expect(site.name).toBe("Ivy Technology");
    expect(site.url).toMatch(/^https?:\/\//);
    expect(site.description).toBeTruthy();
    expect(site.ogImage.url).toBeTruthy();
    expect(site.ogImage.alt).toBeTruthy();
  });
});

describe("hero", () => {
  it("has eyebrow, title, body and CTAs", () => {
    expect(hero.eyebrow).toBeTruthy();
    expect(hero.title).toBeTruthy();
    expect(hero.body).toBeTruthy();
    expect(hero.primaryCta).toHaveProperty("label");
    expect(hero.primaryCta).toHaveProperty("href");
    expect(hero.secondaryCta).toHaveProperty("label");
    expect(hero.secondaryCta).toHaveProperty("href");
  });
});

describe("services", () => {
  it("is a non-empty array", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("each service has required fields", () => {
    for (const service of services) {
      expect(service).toHaveProperty("title");
      expect(service).toHaveProperty("body");
      expect(service).toHaveProperty("icon");
      expect(service).toHaveProperty("href");
    }
  });
});

describe("steps", () => {
  it("is a non-empty array", () => {
    expect(steps.length).toBeGreaterThan(0);
  });

  it("each step has title and body", () => {
    for (const step of steps) {
      expect(step).toHaveProperty("title");
      expect(step).toHaveProperty("body");
    }
  });
});

describe("team", () => {
  it("is a non-empty array", () => {
    expect(team.length).toBeGreaterThan(0);
  });

  it("each member has required fields", () => {
    for (const member of team) {
      expect(member).toHaveProperty("name");
      expect(member).toHaveProperty("role");
      expect(member).toHaveProperty("email");
      expect(member.email).toMatch(/@/);
    }
  });
});

describe("contact", () => {
  it("has title, body, cta, email and image", () => {
    expect(contact.title).toBeTruthy();
    expect(contact.body).toBeTruthy();
    expect(contact.cta).toHaveProperty("label");
    expect(contact.cta).toHaveProperty("href");
    expect(contact.email).toMatch(/@/);
    expect(contact.image).toHaveProperty("baseSrc");
    expect(contact.image).toHaveProperty("alt");
  });
});

describe("servicesSectionIntro", () => {
  it("has eyebrow, title and lede", () => {
    expect(servicesSectionIntro.eyebrow).toBeTruthy();
    expect(servicesSectionIntro.title).toBeTruthy();
    expect(servicesSectionIntro.lede).toBeTruthy();
  });
});

describe("servicesPageHero", () => {
  it("has expected structure", () => {
    expect(servicesPageHero.eyebrow).toBeTruthy();
    expect(servicesPageHero.title).toBeTruthy();
    expect(servicesPageHero.primaryCta).toHaveProperty("label");
    expect(servicesPageHero.primaryCta).toHaveProperty("href");
  });
});

describe("approachIntro", () => {
  it("has eyebrow, title and lede", () => {
    expect(approachIntro.eyebrow).toBeTruthy();
    expect(approachIntro.title).toBeTruthy();
    expect(approachIntro.lede).toBeTruthy();
  });
});

describe("teamIntro", () => {
  it("has eyebrow, title, lede and joinUs", () => {
    expect(teamIntro.eyebrow).toBeTruthy();
    expect(teamIntro.title).toBeTruthy();
    expect(teamIntro.lede).toBeTruthy();
    expect(teamIntro.joinUs.email).toMatch(/@/);
  });
});

describe("teamPageHero", () => {
  it("has expected structure", () => {
    expect(teamPageHero.eyebrow).toBeTruthy();
    expect(teamPageHero.title).toBeTruthy();
    expect(teamPageHero.primaryCta).toHaveProperty("label");
    expect(teamPageHero.primaryCta).toHaveProperty("href");
  });
});

describe("workShowcase", () => {
  it("has cards array", () => {
    expect(Array.isArray(workShowcase.cards)).toBe(true);
    expect(workShowcase.cards.length).toBeGreaterThan(0);
  });

  it("each card has required fields", () => {
    for (const card of workShowcase.cards) {
      expect(card).toHaveProperty("title");
      expect(card).toHaveProperty("photoBase");
    }
  });
});
