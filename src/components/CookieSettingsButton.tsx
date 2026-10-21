"use client";

import { COOKIE_SETTINGS_EVENT } from "@/lib/consent";

export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT))}
      className="text-left hover:text-brand-blue-link sm:text-right"
    >
      {label}
    </button>
  );
}
