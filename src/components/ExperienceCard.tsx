import type { CompanyExperience } from "@/content/types";
import { clientLogos } from "@/content/clients";
import { ClientLogoMark, primaryLogoClassName } from "./ClientLogoMark";

export function ExperienceCard({ company }: { company: CompanyExperience }) {
  const logo = clientLogos.find((entry) => entry.id === company.id);

  return (
    <article className="flex flex-col border-t border-border pt-6">
      {logo ? (
        <div className="relative mb-5 flex h-16 w-[180px] shrink-0 items-center justify-center">
          <ClientLogoMark logo={logo} className={primaryLogoClassName(company.id)} />
        </div>
      ) : null}
      {/* The logo already communicates the company name visually, so it is not
          repeated as prominent text; it stays in the DOM for heading hierarchy
          and screen reader users via a visually hidden heading. */}
      <h3 className="sr-only">{company.company}</h3>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm font-medium text-brand-blue-link">{company.role}</p>
        <p className="text-sm font-medium text-ink-muted">{company.period}</p>
      </div>
      <p className="mt-4 leading-relaxed text-ink-muted">{company.homepageSummary}</p>
      <ul className="mt-5 space-y-2 text-sm text-ink">
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
