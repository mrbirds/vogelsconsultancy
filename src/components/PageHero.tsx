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
    <section className="border-b border-border bg-surface-subtle py-14 sm:py-20">
      <Container className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-[2.1rem] leading-tight sm:text-5xl">{heading}</h1>
        {intro ? <p className="mt-5 text-lg leading-relaxed text-ink-muted">{intro}</p> : null}
      </Container>
    </section>
  );
}
