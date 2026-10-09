import type { CredibilityContent } from "@/content/types";
import { Container } from "./Container";

export function CredibilityMarkers({ content }: { content: CredibilityContent }) {
  return (
    <section className="bg-surface-subtle" aria-label={content.heading}>
      <Container className="py-10 sm:py-12">
        <ul className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.markers.map((marker) => (
            <li
              key={marker}
              className="border-t-2 border-brand-blue pt-4 text-[15px] font-medium leading-snug text-ink"
            >
              {marker}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
