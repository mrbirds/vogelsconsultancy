import type { ApproachContent } from "@/content/types";
import { Container } from "./Container";

export function Approach({ content }: { content: ApproachContent }) {
  return (
    <section className="bg-surface-dark py-16 text-white sm:py-20" aria-labelledby="approach-heading">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
            {content.eyebrow}
          </p>
          <h2 id="approach-heading" className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/75">{content.intro}</p>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {content.principles.map((principle, index) => (
            <li key={principle.title} className="border-t border-white/20 pt-5">
              <span className="text-sm font-semibold text-brand-blue">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{principle.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{principle.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-lg font-semibold">{content.closing}</p>
      </Container>
    </section>
  );
}
