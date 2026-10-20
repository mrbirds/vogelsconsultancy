import { Container } from "./Container";

export function PageHero({
  eyebrow,
  heading,
  intro,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
}) {
  return (
    <section className="border-b border-border bg-surface-subtle py-12 sm:py-16 lg:py-20">
      <Container className="max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] leading-tight">{heading}</h1>
        {intro ? (
          <p className="mt-5 max-w-[var(--reading-width)] text-base leading-relaxed text-ink-muted sm:text-lg">
            {intro}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
