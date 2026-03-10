import React from "react";
import { render, screen } from "@testing-library/react";
import { ApproachSection } from "../app/components/ApproachSection";
import { HeroSection } from "../app/components/HeroSection";
import { ServicesSection } from "../app/components/ServicesSection";

describe("ApproachSection", () => {
  it("renders the section heading", () => {
    render(<ApproachSection />);
    expect(screen.getByRole("heading", { name: /Så jobbar vi/i })).toBeInTheDocument();
  });

  it("renders each step", () => {
    render(<ApproachSection />);
    expect(screen.getByText("Riktigt samarbete")).toBeInTheDocument();
    expect(screen.getByText("Teknik och människor")).toBeInTheDocument();
    expect(screen.getByText("Balans och utveckling")).toBeInTheDocument();
  });
});

describe("HeroSection", () => {
  it("renders the hero section with heading", () => {
    render(<HeroSection />);
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it("renders the primary CTA link", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: /kontakta oss/i })).toBeInTheDocument();
  });
});

describe("ServicesSection", () => {
  it("renders the services section", () => {
    render(<ServicesSection />);
    expect(screen.getByText("Systemarkitektur")).toBeInTheDocument();
    expect(screen.getByText("Systemutveckling")).toBeInTheDocument();
    expect(screen.getByText("AI i praktiken")).toBeInTheDocument();
  });
});
