import { ArrowUpRight } from 'lucide-react';
import {
  EDUCATION_AND_CERTS,
  WORK_EXPERIENCE,
  type ExperienceItem,
} from '../data/portfolioData';

function ExperienceList({ items }: { items: ExperienceItem[] }) {
  return (
    <ul className="mt-6 divide-y divide-[#D8D6CC] border-t border-[#D8D6CC]">
      {items.map((item) => (
        <li
          key={`${item.role}-${item.period}`}
          className="group py-6 transition-transform duration-200 hover:translate-x-1"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h4 className="text-[16px] font-semibold leading-snug text-[#1E1B18] transition-colors duration-150 group-hover:text-[#9E3D1B]">
              {item.role}
            </h4>
            {item.period && (
              <span className="text-xs font-medium text-[#57514B] tabular-nums whitespace-nowrap shrink-0">
                {item.period}
              </span>
            )}
          </div>

          {item.company && (
            <p className="mt-1 text-sm font-medium text-[#57514B]">
              {item.companyHref ? (
                <a
                  href={item.companyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link-underline inline-flex items-center gap-1 text-[#9E3D1B] transition-colors hover:text-[#1E1B18]"
                >
                  <span>{item.company}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ) : (
                item.company
              )}
            </p>
          )}

          {item.description && (
            <p className="mt-2.5 text-sm leading-relaxed text-[#57514B]">
              {item.description}
            </p>
          )}

          {item.extraLinks && item.extraLinks.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-[#57514B]">
              {item.extraLinks.map((link, idx) => (
                <span key={link.href} className="inline-flex items-center gap-3">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link-underline text-[#1E1B18] transition-colors hover:text-[#B44822]"
                  >
                    {link.label}
                  </a>
                  {idx < item.extraLinks!.length - 1 && (
                    <span aria-hidden="true" className="text-[#D65E33]/70">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}

          {item.certificateLinks && item.certificateLinks.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-medium">
              {item.certificateLinks.map((cert) => (
                <a
                  key={cert.href}
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cert inline-flex items-center gap-1 text-[#9E3D1B] underline decoration-[#D65E33]/40 underline-offset-4 transition-colors hover:text-[#1E1B18] hover:decoration-[#1E1B18]"
                >
                  <span>{cert.label}</span>
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-150 group-hover/cert:translate-x-0.5 group-hover/cert:-translate-y-0.5" />
                </a>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="border-t border-[#D8D6CC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div>
          <h2
            id="experience-title"
            className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1E1B18]"
          >
            Work &amp; Education
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#57514B]">
            Trajetória profissional em pesquisa, inteligência de mercado e formação acadêmica.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-[#1E1B18]">
              01. Experiências Profissionais
            </h3>
            <ExperienceList items={WORK_EXPERIENCE} />
          </div>

          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-[#1E1B18]">
              02. Formações &amp; Certificações
            </h3>
            <ExperienceList items={EDUCATION_AND_CERTS} />
          </div>
        </div>
      </div>
    </section>
  );
}
