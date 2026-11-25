import { useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { PUBLICATIONS, type PublicationType } from '../data/portfolioData';

const PUB_FILTERS: { id: PublicationType; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'artigo', label: 'Artigos' },
  { id: 'congresso', label: 'Congressos & TCC' },
  { id: 'ensaio', label: 'Ensaios' },
];

export function PublicationsSection() {
  const [filter, setFilter] = useState<PublicationType>('all');

  const filtered =
    filter === 'all' ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.type === filter);

  return (
    <section
      id="publications"
      aria-labelledby="publications-title"
      className="border-t border-[#D8D6CC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="publications-title"
              className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1E1B18]"
            >
              Produção Intelectual e Acadêmica
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#57514B]">
              Artigos em revistas científicas, apresentações em congressos nacionais e
              internacionais e trabalhos acadêmicos publicados.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar publicações por formato"
            className="inline-flex flex-wrap items-center gap-1 rounded-full border border-[#D8D6CC] bg-[#F7F7F2] p-1 self-start md:self-auto"
          >
            {PUB_FILTERS.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E1B18] text-[#F7F7F2]'
                      : 'text-[#57514B] hover:text-[#1E1B18]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-10 divide-y divide-[#D8D6CC] border-t border-b border-[#D8D6CC]">
          {filtered.map((pub) => (
            <li
              key={pub.id}
              className="group grid grid-cols-1 gap-3 py-6 transition-colors duration-150 hover:bg-[#F7F7F2]/75 sm:px-4 md:grid-cols-[11rem_1fr_auto] md:items-start md:gap-8"
            >
              <div className="text-xs font-medium text-[#9E3D1B] tabular-nums">
                <span>{pub.year}</span>
                <span aria-hidden="true" className="mx-1.5 text-[#D65E33]">
                  ·
                </span>
                <span className="text-[#57514B]">{pub.venue}</span>
              </div>

              <div>
                <p className="text-[15px] font-semibold leading-snug text-[#1E1B18]">
                  {pub.externalUrl ? (
                    <a
                      href={pub.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-150 hover:text-[#B44822]"
                    >
                      {pub.citation}
                    </a>
                  ) : (
                    pub.citation
                  )}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#57514B]">{pub.details}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium md:justify-end">
                {pub.externalUrl && (
                  <a
                    href={pub.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/ext inline-flex items-center gap-1 text-[#1E1B18] transition-colors hover:text-[#B44822] whitespace-nowrap"
                  >
                    <span>Acessar</span>
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/ext:translate-x-0.5 group-hover/ext:-translate-y-0.5" />
                  </a>
                )}
                {pub.pdfUrl && (
                  <a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#9E3D1B] transition-colors hover:text-[#1E1B18] whitespace-nowrap"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>PDF</span>
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
