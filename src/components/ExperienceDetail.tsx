import type { CompanyExperience } from "@/content/types";
import { clientLogos } from "@/content/clients";
import { ClientLogoStage } from "./ClientLogoStage";

export function ExperienceDetail({ company }: { company: CompanyExperience }) {
  const logo = clientLogos.find((entry) => entry.id === company.id);

  return (
    <article
      id={company.id}
      className="scroll-mt-28 grid gap-x-8 gap-y-5 border-t border-border py-9 first:border-t-0 first:pt-0 sm:gap-y-6 sm:py-12 md:grid-cols-[minmax(9rem,0.72fr)_minmax(0,2fr)] lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-x-14"
    >
      <div>
        {logo ? (
          <div className="mb-2 sm:mb-4">
            <ClientLogoStage logo={logo} />
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

        {company.caseStudy.kind === "featured" ? (
          <div className="mt-6 max-w-[var(--reading-width)]">
            <section>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-blue-link">
                {company.caseStudy.labels.leadership}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.caseStudy.leadership}
              </p>
            </section>

            <section className="mt-5 border-t border-border pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-blue-link">
                {company.caseStudy.labels.architecture}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.caseStudy.architecture}
              </p>
            </section>

            <section className="mt-5 border-l-2 border-brand-blue pl-4 sm:pl-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-blue-link">
                {company.caseStudy.labels.engineering}
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                {company.caseStudy.result}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.caseStudy.resultDetail}
              </p>
            </section>

            <section className="mt-5 border-t border-border pt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-blue-link">
                {company.caseStudy.labels.business}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.caseStudy.business}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {company.caseStudy.engineeringMaturity}
              </p>
            </section>
          </div>
        ) : (
          <ul className="mt-5 max-w-[var(--reading-width)] divide-y divide-border border-y border-border">
            {company.caseStudy.contributions.map((contribution) => (
              <li key={contribution} className="py-3 text-sm leading-relaxed text-ink">
                {contribution}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
