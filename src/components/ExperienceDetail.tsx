import type { CompanyExperience } from "@/content/types";
import { clientLogos } from "@/content/clients";
import { ClientLogoMark, primaryLogoClassName } from "./ClientLogoMark";

export function ExperienceDetail({ company }: { company: CompanyExperience }) {
  const logo = clientLogos.find((entry) => entry.id === company.id);

  return (
    <article id={company.id} className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0">
      {logo ? (
        <div className="mb-5 flex h-12 max-w-[180px] items-start sm:h-16">
          <ClientLogoMark logo={logo} className={primaryLogoClassName(company.id)} />
        </div>
      ) : null}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-2xl font-semibold text-ink">{company.company}</h3>
        <p className="text-sm font-medium text-ink-muted">{company.period}</p>
      </div>
      <p className="mt-1 text-[15px] font-medium text-brand-blue-link">{company.role}</p>
      <p className="mt-5 max-w-3xl leading-relaxed text-ink-muted">{company.webSummary}</p>

      <ul className="mt-6 grid gap-x-8 gap-y-2 text-[15px] text-ink sm:grid-cols-2">
        {company.keyAreas.map((area) => (
          <li key={area} className="flex gap-2">
            <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
            <span>{area}</span>
          </li>
        ))}
      </ul>

      {company.technology ? (
        <p className="mt-6 text-sm text-ink-muted">
          <span className="font-semibold text-ink">Technology: </span>
          {company.technology}
        </p>
      ) : null}

      {company.quote ? (
        <blockquote className="mt-6 max-w-2xl border-l-2 border-brand-blue pl-5 text-[15px] italic leading-relaxed text-ink-muted">
          “{company.quote}”
        </blockquote>
      ) : null}
    </article>
  );
}

