import { CAPABILITIES, SKILL_GROUPS } from '../data/portfolioData';
import { OrganicAccentPebble } from './OrganicShapes';

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="border-t border-[#D8D6CC] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2
              id="about-title"
              className="font-display text-[clamp(2rem,3.6vw,3.1rem)] font-bold leading-[1.08] tracking-[-0.03em] text-[#1E1B18]"
            >
              Sobre Mim
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#57514B]">
              Na intersecção entre ciência de dados, comportamento humano e estratégia de marca.
            </p>
          </div>
          <OrganicAccentPebble className="hidden h-12 w-20 opacity-85 sm:block" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Left column: Narrative bio & numbered capabilities */}
          <div>
            <div className="space-y-4 text-[16px] leading-[1.7] text-[#57514B]">
              <p>
                Cientista Social (<span className="text-[#1E1B18]">UNIFESP</span>) e Mestre em
                Ciência Política pela <span className="text-[#1E1B18]">USP</span>, atuo na
                intersecção entre dados, comportamento humano e estratégia de marca. Atualmente sou
                Analista Pleno de Inteligência e Pesquisa de Mercado na{' '}
                <span className="text-[#1E1B18]">Quaest</span> e Google AI Certified.
              </p>
              <p>
                Apaixonada por pesquisa e data analytics, minha missão é decodificar a complexidade
                para transformá-la em recomendações acionáveis que protegem a reputação e
                potencializam a comunicação de grandes marcas — movendo de perguntas de negócios e
                algoritmos complexos para insights com significado tangível para lideranças e
                stakeholders.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#1E1B18]">
                O que eu faço
              </h3>

              <ol className="mt-5 divide-y divide-[#D8D6CC] border-t border-[#D8D6CC]">
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap.index}
                    className="group grid grid-cols-[2.25rem_1fr] gap-4 py-4 transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="font-display text-lg font-semibold italic text-[#B44822] tabular-nums">
                      {cap.index}.
                    </span>
                    <div>
                      <p className="font-medium text-[#1E1B18] transition-colors duration-150 group-hover:text-[#9E3D1B]">
                        {cap.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#57514B]">
                        {cap.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right column: Clean unboxed Hard Skills index */}
          <div className="lg:pt-1">
            <div className="rounded-2xl border border-[#D8D6CC] bg-[#F7F7F2] p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold tracking-tight text-[#1E1B18]">
                Hard Skills &amp; Ferramentas
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#57514B]">
                Stack técnico utilizado em pesquisa de mercado, ciência de dados e inteligência
                digital.
              </p>

              <div className="mt-7 divide-y divide-[#D8D6CC]">
                {SKILL_GROUPS.map((group) => (
                  <div
                    key={group.category}
                    className="group py-4 first:pt-0 last:pb-0 transition-colors duration-150"
                  >
                    <h4 className="text-xs font-semibold tracking-wide text-[#9E3D1B]">
                      {group.category}
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#1E1B18]">
                      {group.items.map((skill, idx) => (
                        <span key={skill}>
                          <span className="transition-colors duration-150 hover:text-[#B44822]">
                            {skill}
                          </span>
                          {idx < group.items.length - 1 && (
                            <span aria-hidden="true" className="mx-2 text-[#D65E33]/75">
                              ·
                            </span>
                          )}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
