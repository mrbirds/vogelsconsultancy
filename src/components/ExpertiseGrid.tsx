import type { ExpertiseContent, ExpertiseItem } from "@/content/types";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function ExpertiseGrid({
  content,
  items,
  hideHeading = false,
}: {
  content: ExpertiseContent;
  items?: ExpertiseItem[];
  /** Skip the built-in heading when a PageHero above already renders it. */
  hideHeading?: boolean;
}) {
  const list = items ?? content.items;

  return (
    <section className="py-[var(--section-space)]" aria-labelledby={hideHeading ? undefined : "expertise-heading"}>
      <Container>
        {hideHeading ? null : (
          <SectionHeading
            id="expertise-heading"
            eyebrow={content.eyebrow}
            heading={content.heading}
            intro={content.intro}
          />
        )}
        <div className="mt-9 grid gap-x-10 gap-y-9 sm:mt-11 sm:grid-cols-2">
          {list.map((item) => (
            <div key={item.id} className="border-t border-border pt-6">
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
