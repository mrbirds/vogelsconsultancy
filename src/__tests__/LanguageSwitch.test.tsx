import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { LanguageSwitch } from "@/components/LanguageSwitch";

vi.mock("next/navigation", () => ({
  usePathname: () => "/nl/expertise",
}));

describe("LanguageSwitch", () => {
  it("links to the equivalent path in the other locale", () => {
    render(<LanguageSwitch locale="nl" label="Switch to English" />);
    const link = screen.getByRole("link", { name: "Switch to English" });
    expect(link).toHaveAttribute("href", "/en/expertise");
    expect(link).toHaveTextContent("EN");
  });
});
