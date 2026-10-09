import Image from "next/image";
import type { ClientLogo } from "@/content/clients";

/**
 * Per-logo sizing within the shared 180×64px stage. The values account for
 * each logo's aspect ratio so the three marks have similar visual weight.
 */
const PRIMARY_LOGO_HEIGHT: Record<string, string> = {
  dela: "h-[54px] max-w-[180px]",
  essent: "h-[41px] max-w-[180px]",
  freo: "h-16 max-w-[154px]",
};

export function primaryLogoClassName(id: string): string {
  return PRIMARY_LOGO_HEIGHT[id] ?? "h-8 sm:h-10 max-w-[180px]";
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
      sizes="180px"
      className={`w-auto object-contain ${className}`}
    />
  );
}
