import Image from "next/image";
import type { ClientLogo } from "@/content/clients";

export function ClientLogoStage({ logo }: { logo: ClientLogo }) {
  if (!logo.logoFile || !logo.width || !logo.height) return null;

  return (
    <div className="flex h-10 w-[124px] shrink-0 items-center justify-start sm:h-16 sm:w-[180px]">
      <Image
        src={logo.logoFile}
        alt=""
        width={logo.width}
        height={logo.height}
        sizes="(min-width: 640px) 180px, 124px"
        className="max-h-full max-w-full object-contain"
        style={{
          maxHeight: `${100 / (logo.visualScale ?? 1)}%`,
          maxWidth: `${100 / (logo.visualScale ?? 1)}%`,
          transform: `scale(${logo.visualScale ?? 1})`,
        }}
      />
    </div>
  );
}
