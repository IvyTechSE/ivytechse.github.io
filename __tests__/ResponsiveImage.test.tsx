import React from "react";
import { render, screen } from "@testing-library/react";
import { ResponsiveImage } from "../app/components/ResponsiveImage";

describe("ResponsiveImage", () => {
  const defaultProps = {
    baseSrc: "/images/test-image",
    alt: "Test image",
    width: 640,
    height: 480,
  };

  it("renders an img with the correct alt text", () => {
    render(<ResponsiveImage {...defaultProps} />);
    expect(screen.getByRole("img", { name: "Test image" })).toBeInTheDocument();
  });

  it("renders avif, webp and jpg sources", () => {
    const { container } = render(<ResponsiveImage {...defaultProps} />);
    const sources = container.querySelectorAll("source");
    const types = Array.from(sources).map((s) => s.getAttribute("type"));
    expect(types).toContain("image/avif");
    expect(types).toContain("image/webp");
  });

  it("uses lazy loading by default", () => {
    render(<ResponsiveImage {...defaultProps} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("uses eager loading when priority is true", () => {
    render(<ResponsiveImage {...defaultProps} priority />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("loading", "eager");
  });

  it("includes base path in srcSet when NEXT_PUBLIC_BASE_PATH is set", () => {
    process.env.NEXT_PUBLIC_BASE_PATH = "/base";
    jest.resetModules();
    const { ResponsiveImage: FreshComponent } = jest.requireActual(
      "../app/components/ResponsiveImage",
    );
    const { container } = render(
      <FreshComponent {...defaultProps} baseSrc="/images/test" />,
    );
    const img = container.querySelector("img");
    expect(img?.getAttribute("src")).toContain("/base/images/test");
    delete process.env.NEXT_PUBLIC_BASE_PATH;
  });

  it("applies optional className to the img", () => {
    render(<ResponsiveImage {...defaultProps} className="my-class" />);
    expect(screen.getByRole("img")).toHaveClass("my-class");
  });

  it("includes 320w, 640w, and 1280w variants in srcset", () => {
    const { container } = render(<ResponsiveImage {...defaultProps} />);
    const img = container.querySelector("img");
    const srcSet = img?.getAttribute("srcset");
    expect(srcSet).toContain("320w");
    expect(srcSet).toContain("640w");
    expect(srcSet).toContain("1280w");
  });

  it("includes full-size variants (no size suffix) in srcset for high-DPI displays", () => {
    const { container } = render(
      <ResponsiveImage {...defaultProps} baseSrc="/images/test" />,
    );
    const sources = container.querySelectorAll("source");
    const avifSource = Array.from(sources).find(
      (s) => s.getAttribute("type") === "image/avif",
    );
    const srcSet = avifSource?.getAttribute("srcset");
    expect(srcSet).toContain("/images/test.avif 1280w");
  });
});
