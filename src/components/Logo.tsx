import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/locales";

export function Logo({ locale, className = "" }: { locale: Locale; className?: string }) {
  return (
    <Link
      href={`/${locale}`}
      className={`inline-flex items-center ${className}`}
      aria-label="Vogels Consultancy — home"
    >
      <Image
        src="/images/vogels-consultancy-logo.png"
        alt="Vogels Consultancy"
        width={274}
        height={195}
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  );
}
