import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteNav } from "@/components/SiteNav";

vi.mock("next/navigation", () => ({
  usePathname: () => "/nl/expertise",
}));

const items = [
  { href: "/nl/expertise", label: "Expertise" },
  { href: "/nl/experience", label: "Ervaring" },
  { href: "/nl/about", label: "Over mij" },
  { href: "/nl/contact", label: "Contact" },
];

describe("SiteNav primary navigation", () => {
  it("renders every primary nav item as a link", () => {
    render(
      <SiteNav
        locale="nl"
        items={items}
        languageSwitchLabel="Switch to English"
        menuOpenLabel="Open menu"
        menuCloseLabel="Sluit menu"
      />,
    );

    for (const item of items) {
      const links = screen.getAllByRole("link", { name: item.label });
      expect(links.length).toBeGreaterThan(0);
    }
  });

  it("marks the current page with aria-current", () => {
    render(
      <SiteNav
        locale="nl"
        items={items}
        languageSwitchLabel="Switch to English"
        menuOpenLabel="Open menu"
        menuCloseLabel="Sluit menu"
      />,
    );

    const activeLinks = screen.getAllByRole("link", { name: "Expertise" });
    expect(activeLinks[0]).toHaveAttribute("aria-current", "page");
  });

  it("opens the mobile menu when the toggle button is pressed", async () => {
    const user = userEvent.setup();
    render(
      <SiteNav
        locale="nl"
        items={items}
        languageSwitchLabel="Switch to English"
        menuOpenLabel="Open menu"
        menuCloseLabel="Sluit menu"
      />,
    );

    expect(screen.getAllByRole("navigation", { name: "Primary" }).length).toBeGreaterThan(0);
    const toggle = screen.getByRole("button", { name: "Open menu" });
    await user.click(toggle);
    expect(screen.getByRole("button", { name: "Sluit menu" })).toBeInTheDocument();
  });
});
