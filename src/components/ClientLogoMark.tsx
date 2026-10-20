import Image from "next/image";
import type { ClientLogo } from "@/content/clients";

/** Tune each wordmark to a similar visual weight while preserving its ratio. */
const PRIMARY_LOGO_HEIGHT: Record<string, string> = {
  dela: "h-8 max-w-[124px] sm:h-[46px] sm:max-w-[180px]",
  essent: "h-7 max-w-[124px] sm:h-[35px] sm:max-w-[180px]",
  freo: "h-8 max-w-[112px] sm:h-[46px] sm:max-w-[154px]",
};

export function primaryLogoClassName(id: string): string {
  return PRIMARY_LOGO_HEIGHT[id] ?? "h-7 max-w-[124px] sm:h-9 sm:max-w-[180px]";
}

/**
 * Renders a single, real client logo at its original aspect ratio and
 * colours — never stretched, cropped or recoloured. The caller controls the
 * display size via `className`; width follows automatically from the
 * asset's intrinsic dimensions.
 *
 * `alt` defaults to empty because the containing case already has a
 * screen-reader heading with the organisation name.
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
      sizes="(min-width: 640px) 180px, 124px"
      className={`w-auto object-contain ${className}`}
    />
  );
}
