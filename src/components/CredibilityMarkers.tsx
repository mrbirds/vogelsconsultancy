import type { CredibilityContent } from "@/content/types";
import { Container } from "./Container";

export function CredibilityMarkers({ content }: { content: CredibilityContent }) {
  return (
    <section className="bg-surface-subtle" aria-label={content.label}>
      <Container className="py-6 sm:py-7">
        <p className="text-center text-sm font-medium leading-relaxed text-ink sm:text-base">
          {content.line}
        </p>
      </Container>
    </section>
  );
}
