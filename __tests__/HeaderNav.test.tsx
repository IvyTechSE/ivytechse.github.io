import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeaderNav } from "../app/components/HeaderNav";

describe("HeaderNav", () => {
  it("renders a header landmark", () => {
    render(<HeaderNav />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the logo link", () => {
    render(<HeaderNav />);
    expect(screen.getByRole("link", { name: /ivy technology/i })).toBeInTheDocument();
  });

  it("renders navigation links from navItems", () => {
    render(<HeaderNav />);
    const nav = screen.getByRole("navigation", { name: /huvudmeny/i });
    expect(nav).toBeInTheDocument();
  });

  it("renders the mobile menu toggle button", () => {
    render(<HeaderNav />);
    const menuButton = screen.getByRole("button", { name: /meny/i });
    expect(menuButton).toBeInTheDocument();
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("opens the mobile menu when toggle is clicked", () => {
    render(<HeaderNav />);
    const menuButton = screen.getByRole("button", { name: /meny/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("closes the mobile menu when a nav link is clicked", () => {
    render(<HeaderNav />);
    const menuButton = screen.getByRole("button", { name: /meny/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");

    const mobileNavId = menuButton.getAttribute("aria-controls")!;
    const mobileNav = document.getElementById(mobileNavId)!;
    fireEvent.click(mobileNav.querySelector("a")!);
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu on Escape key", () => {
    render(<HeaderNav />);
    const menuButton = screen.getByRole("button", { name: /meny/i });
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(document, { key: "Escape" });
    expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });
});
