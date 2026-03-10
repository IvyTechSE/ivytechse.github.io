import robots from "../app/robots";

describe("robots", () => {
  it("returns rules allowing all", () => {
    const result = robots();
    expect(result.rules).toEqual({ userAgent: "*", allow: "/" });
  });

  it("includes sitemap pointing to the production URL", () => {
    const result = robots();
    expect(result.sitemap).toMatch(/^https?:\/\//);
    expect(result.sitemap).toContain("sitemap.xml");
  });
});
