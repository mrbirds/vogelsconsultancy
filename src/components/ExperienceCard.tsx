import type { CompanyExperience } from "@/content/types";
import { clientLogos } from "@/content/clients";
import { ClientLogoStage } from "./ClientLogoStage";

export function ExperienceCard({ company }: { company: CompanyExperience }) {
  const logo = clientLogos.find((entry) => entry.id === company.id);

  return (
    <article className="flex flex-col border-t border-border pt-5 sm:pt-6">
      {logo ? (
        <div className="mb-3 sm:mb-4">
          <ClientLogoStage logo={logo} />
        </div>
      ) : null}
      {/* The logo already communicates the company name visually, so it is not
          repeated as prominent text; it stays in the DOM for heading hierarchy
          and screen reader users via a visually hidden heading. */}
      <h3 className="sr-only">{company.company}</h3>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium leading-snug text-brand-blue-link">{company.role}</p>
        <p className="text-sm text-ink-muted">{company.period}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{company.homepageSummary}</p>
      <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-ink sm:text-sm">
        {company.homepageHighlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
