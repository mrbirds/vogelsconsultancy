import Image from "next/image";
import type { ClientLogo } from "@/content/clients";

/**
 * Per-logo height tuning for the primary (DELA/Essent/Freo) "logo stage"
 * used on the homepage and the Experience detail page. The three supplied
 * assets differ hugely in how much of their canvas the visible wordmark
 * actually occupies (DELA's square file has large internal padding), so a
 * single shared height makes DELA look tiny next to Essent/Freo even though
 * the raw image heights would technically match. These values normalize
 * *perceived* visual weight rather than raw pixel height, per PRD §31.
 */
const PRIMARY_LOGO_HEIGHT: Record<string, string> = {
  dela: "h-14 sm:h-[72px]",
  essent: "h-7 sm:h-9",
  freo: "h-7 sm:h-9",
};

export function primaryLogoClassName(id: string): string {
  return PRIMARY_LOGO_HEIGHT[id] ?? "h-8 sm:h-10";
}

/**
 * Renders a single, real client logo at its original aspect ratio and
 * colours — never stretched, cropped or recoloured. The caller controls the
 * display height via `className`; width follows automatically from the
 * asset's intrinsic dimensions.
 *
 * `alt` defaults to empty: in every place this is used, the organisation
 * name already appears as adjacent text, so repeating it for screen reader
 * users would be redundant.
 */
export function ClientLogoMark({
  logo,
  className,
  alt = "",
}: {
  logo: ClientLogo;
  className: string;
  alt?: string;
}) {
  if (!logo.logoFile || !logo.width || !logo.height) return null;

  return (
    <Image
      src={logo.logoFile}
      alt={alt}
      width={logo.width}
      height={logo.height}
      className={`w-auto max-w-[180px] object-contain ${className}`}
    />
  );
}

