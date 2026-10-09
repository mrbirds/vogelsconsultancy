import Link from "next/link";
import { getContent } from "@/content";
import { defaultLocale } from "@/lib/locales";
import { Container } from "@/components/Container";

/**
 * Rendered for unmatched routes within a valid locale segment (e.g. /nl/foo).
 * Falls back to the default locale's copy since the invalid-locale case is
 * already redirected away by middleware before reaching this tree.
 */
export default function NotFound() {
  const content = getContent(defaultLocale);

  return (
    <section className="py-24">
      <Container className="max-w-xl text-center">
        <h1 className="text-4xl">{content.notFound.heading}</h1>
        <p className="mt-4 text-lg text-ink-muted">{content.notFound.body}</p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-7 text-[15px] font-semibold text-white"
        >
          {content.notFound.cta}
        </Link>
      </Container>
    </section>
  );
}
