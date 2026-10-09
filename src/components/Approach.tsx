import type { ApproachContent } from "@/content/types";
import { Container } from "./Container";

export function Approach({ content }: { content: ApproachContent }) {
  return (
    <section className="border-y border-border bg-surface py-16 text-ink sm:py-20" aria-labelledby="approach-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h2 id="approach-heading" className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-muted">{content.intro}</p>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.principles.map((principle) => (
            <li key={principle.title} className="border-t border-border pt-5">
              <h3 className="text-lg font-semibold">{principle.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{principle.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-lg font-semibold text-ink">{content.closing}</p>
      </Container>
    </section>
  );
}
