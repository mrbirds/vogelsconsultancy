export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  id,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-link">
          {eyebrow}
        </p>
      ) : null}
      <h2 id={id} className="mt-3 text-[1.9rem] leading-tight sm:text-4xl">
        {heading}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-ink-muted">{intro}</p> : null}
    </div>
  );
}
