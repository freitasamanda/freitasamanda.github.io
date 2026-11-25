import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import {
  PORTFOLIO_PROJECTS,
  type PortfolioProject,
  type ProjectCategory,
} from '../data/portfolioData';

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'machine-learning', label: 'Machine Learning' },
  { id: 'academia', label: 'Ciência Política' },
];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleProjects =
    activeFilter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  const handleCardClick = (project: PortfolioProject) => {
    setSelectedProject(project);
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="border-t border-[#D8D6CC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Section header + interactive filter tabs */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="portfolio-title"
              className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1E1B18]"
            >
              Portfolio
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#57514B]">
              Projetos que mostram como penso, analiso e comunico dados.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar projetos por área"
            className="inline-flex items-center gap-1 self-start rounded-full border border-[#D8D6CC] bg-[#F7F7F2] p-1 md:self-auto"
          >
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#1E1B18] text-[#F7F7F2]'
                      : 'text-[#57514B] hover:text-[#1E1B18]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial project grid */}
        <div
          className={`mt-12 grid grid-cols-1 gap-8 ${
            visibleProjects.length === 1
              ? 'lg:grid-cols-1 max-w-2xl'
              : visibleProjects.length === 2
                ? 'md:grid-cols-2'
                : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {visibleProjects.map((project) => {
            const imgFailed = failedImages[project.id];
            return (
              <article
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#D8D6CC] bg-[#F7F7F2] transition-all duration-200 hover:-translate-y-1.5 hover:border-[#D65E33]/55"
              >
                {/* Media preview trigger */}
                <button
                  type="button"
                  onClick={() => handleCardClick(project)}
                  aria-label={`Ver detalhes do projeto ${project.title}`}
                  className="relative block aspect-[16/10] w-full overflow-hidden bg-[#E5E4DA] text-left cursor-pointer"
                >
                  {!imgFailed ? (
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      referrerPolicy="no-referrer"
                      onError={() =>
                        setFailedImages((prev) => ({ ...prev, [project.id]: true }))
                      }
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#D65E33]/20 to-[#E5E4DA] p-6 text-center">
                      <span className="font-display text-lg font-semibold text-[#1E1B18]">
                        {project.shortTitle}
                      </span>
                    </div>
                  )}

                  {/* Measured hover scrim */}
                  <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[#1E1B18]/75 via-[#1E1B18]/20 to-transparent p-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="text-sm font-medium text-white">
                      {project.isPublicationsCard ? 'Explorar publicações' : 'Ver detalhes do projeto'}
                    </span>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D65E33] text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </button>

                {/* Card content — zero pill badges, clean typographic metadata */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#9E3D1B] tabular-nums">
                    <span>{project.year}</span>
                    <span aria-hidden="true" className="text-[#D65E33]">
                      ·
                    </span>
                    <span className="text-[#57514B]">{project.categoryLabel}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-xl font-bold leading-snug tracking-tight text-[#1E1B18]">
                    <button
                      type="button"
                      onClick={() => handleCardClick(project)}
                      className="nav-link-underline text-left transition-colors hover:text-[#B44822] cursor-pointer"
                    >
                      {project.title}
                    </button>
                  </h3>

                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-[#57514B]">
                    {project.summary}
                  </p>

                  {/* Unboxed stack line + direct action footer */}
                  <div className="mt-6 border-t border-[#D8D6CC] pt-4">
                    <p className="text-xs leading-relaxed text-[#57514B]">
                      {project.tags.join(' · ')}
                    </p>

                    <div className="mt-3 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => handleCardClick(project)}
                        className="text-sm font-medium text-[#1E1B18] transition-colors hover:text-[#B44822] cursor-pointer whitespace-nowrap"
                      >
                        Ler arquitetura
                      </button>

                      {project.isPublicationsCard ? (
                        <a
                          href="#publications"
                          className="group/link inline-flex items-center gap-1 text-sm font-medium text-[#9E3D1B] transition-colors hover:text-[#1E1B18] whitespace-nowrap"
                        >
                          <span>Ir para lista</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      ) : (
                        project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1 text-sm font-medium text-[#9E3D1B] transition-colors hover:text-[#1E1B18] whitespace-nowrap"
                          >
                            <span>{project.actionLabel}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Unobstructed Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E1B18]/65 p-4 backdrop-blur-xs sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#D8D6CC] bg-[#F7F7F2] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top image frame */}
            <div className="relative aspect-[16/8.5] w-full overflow-hidden bg-[#E5E4DA]">
              {!failedImages[selectedProject.id] ? (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#D65E33]/15">
                  <span className="font-display text-2xl font-bold text-[#1E1B18]">
                    {selectedProject.title}
                  </span>
                </div>
              )}

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Fechar detalhes do projeto"
                className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1B18]/85 text-white transition-colors hover:bg-[#B44822] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#9E3D1B] tabular-nums">
                <span>{selectedProject.year}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#57514B]">{selectedProject.categoryLabel}</span>
              </div>

              <h3
                id="modal-project-title"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-[#1E1B18] sm:text-3xl"
              >
                {selectedProject.title}
              </h3>

              <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-[#57514B]">
                {selectedProject.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div className="mt-6 border-t border-[#D8D6CC] pt-6">
                  <h4 className="text-xs font-semibold tracking-wider text-[#9E3D1B]">
                    Destaques técnicos e metodológicos
                  </h4>
                  <ul className="mt-4 space-y-4">
                    {selectedProject.highlights.map((item) => (
                      <li key={item.label} className="text-sm leading-relaxed">
                        <span className="font-semibold text-[#1E1B18]">{item.label}: </span>
                        <span className="text-[#57514B]">{item.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-7 flex flex-col gap-4 border-t border-[#D8D6CC] pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-medium text-[#57514B]">
                  {selectedProject.tags.join(' · ')}
                </p>

                <div className="flex items-center gap-3 shrink-0">
                  {selectedProject.isPublicationsCard ? (
                    <a
                      href="#publications"
                      onClick={() => setSelectedProject(null)}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#B44822] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E1B18] whitespace-nowrap"
                    >
                      <span>Ver todas as publicações</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    selectedProject.href && (
                      <a
                        href={selectedProject.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#B44822] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E1B18] whitespace-nowrap"
                      >
                        <span>{selectedProject.actionLabel}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
