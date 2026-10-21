import type { ApproachContent } from "@/content/types";
import { Container } from "./Container";

export function Approach({ content }: { content: ApproachContent }) {
  return (
    <section className="border-y border-border bg-surface py-[var(--section-space)] text-ink" aria-labelledby="approach-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
            {content.eyebrow}
          </p>
          <h2 id="approach-heading" className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{content.intro}</p>
        </div>

        <ol className="mt-9 divide-y divide-border border-y border-border sm:mt-11">
          {content.principles.map((principle, index) => (
            <li
              key={principle.title}
              className="grid gap-x-5 gap-y-2 py-4 sm:grid-cols-[2.5rem_minmax(0,0.65fr)_minmax(0,1.35fr)] sm:items-start sm:gap-x-8 sm:py-5"
            >
              <span className="text-xs font-semibold tracking-wide text-brand-blue-link">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-semibold sm:text-lg">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">{principle.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-base font-semibold text-ink sm:mt-10 sm:text-lg">{content.closing}</p>
      </Container>
    </section>
  );
}
