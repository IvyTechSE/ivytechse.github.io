import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../app/components/Footer";

describe("Footer", () => {
  it("renders the footer landmark", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("renders navigation links from navItems", () => {
    render(<Footer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it("renders a contact email link", () => {
    render(<Footer />);
    const emailLink = screen.getByRole("link", { name: /hello@ivytech\.se/i });
    expect(emailLink).toHaveAttribute("href", "mailto:hello@ivytech.se");
  });

  it("renders the address with a maps link", () => {
    render(<Footer />);
    const addressLink = screen.getByText(/Götgatan/);
    expect(addressLink).toBeInTheDocument();
  });
});
