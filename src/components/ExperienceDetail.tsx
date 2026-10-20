import type { CompanyExperience } from "@/content/types";
import { clientLogos } from "@/content/clients";
import { ClientLogoMark, primaryLogoClassName } from "./ClientLogoMark";

export function ExperienceDetail({ company }: { company: CompanyExperience }) {
  const logo = clientLogos.find((entry) => entry.id === company.id);

  return (
    <article
      id={company.id}
      className="scroll-mt-28 grid gap-x-8 gap-y-5 border-t border-border py-9 first:border-t-0 first:pt-0 sm:gap-y-6 sm:py-12 md:grid-cols-[minmax(9rem,0.72fr)_minmax(0,2fr)] lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-x-14"
    >
      <div>
        {logo ? (
          <div className="relative mb-3 flex h-12 w-[140px] shrink-0 items-center justify-start sm:mb-5 sm:h-16 sm:w-[180px] sm:justify-start">
            <ClientLogoMark logo={logo} className={primaryLogoClassName(company.id)} />
          </div>
        ) : null}
        <h3 className="sr-only">{company.company}</h3>
        <p className="text-[15px] font-medium leading-snug text-brand-blue-link">{company.role}</p>
        <p className="mt-2 text-sm text-ink-muted">{company.period}</p>
      </div>

      <div>
        <p className="max-w-[var(--reading-width)] text-[15px] leading-relaxed text-ink-muted sm:text-base">
          {company.webSummary}
        </p>

        {company.evidenceGroups ? (
          <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 sm:gap-y-6">
            {company.evidenceGroups.map((group) => (
              <li key={group.heading} className="border-t border-border pt-3">
                <h4 className="text-sm font-semibold text-ink">{group.heading}</h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{group.body}</p>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
