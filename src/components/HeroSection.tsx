import { useState } from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { HERO_HIGHLIGHTS } from '../data/portfolioData';
import { HeroOrganicBackdrop } from './OrganicShapes';

export function HeroSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      aria-labelledby="intro-title"
      className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Two-column editorial hero split */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-[#9E3D1B]">
              Inteligência de Mercado
              <span aria-hidden="true" className="mx-2 text-[#D65E33]">
                ·
              </span>
              Data Analytics
              <span aria-hidden="true" className="mx-2 text-[#D65E33]">
                ·
              </span>
              Ciência Política
            </p>

            <h1
              id="intro-title"
              className="mt-4 font-display text-[clamp(2.65rem,5.4vw,4.5rem)] font-bold leading-[1.03] tracking-[-0.03em] text-[#1E1B18]"
            >
              Amanda Freitas Carnaiba
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.7] text-[#57514B] sm:text-lg">
              Analista Pleno de Inteligência e Pesquisa de Mercado na Quaest. Google AI Certified.
              Mestre em Ciência Política pela USP.
            </p>
            <p className="mt-3 max-w-xl text-base leading-[1.7] text-[#1E1B18]/85 sm:text-lg">
              Transformo dados complexos em recomendações acionáveis para grandes marcas.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#B44822] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-[#1E1B18] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              >
                <span>Ver portfolio</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#1E1B18]/25 bg-transparent px-6 py-3 text-sm font-medium text-[#1E1B18] transition-all duration-200 hover:border-[#1E1B18] hover:bg-[#F7F7F2] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
              >
                <span>Contato</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Sculptural organic portrait frame */}
          <div className="group relative mx-auto flex w-full max-w-[360px] items-center justify-center lg:max-w-[400px]">
            <HeroOrganicBackdrop className="absolute -inset-6 h-[116%] w-[116%] opacity-95" />

            <div className="relative z-10 aspect-[4/4.6] w-[84%] overflow-hidden rounded-[48%_52%_42%_58%/46%_44%_56%_54%] bg-[#E5E4DA] shadow-[0_24px_48px_-20px_rgba(30,27,24,0.28)] ring-4 ring-[#EEEEE6] transition-transform duration-300 ease-out group-hover:scale-[1.02]">
              {!imgError ? (
                <img
                  src="/assets/portfolio/profile.jpg"
                  alt="Retrato de Amanda Freitas Carnaiba"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#D65E33] p-6 text-center text-white">
                  <span className="font-display text-4xl font-bold">AFC.</span>
                  <span className="mt-2 text-sm opacity-90">Amanda Freitas Carnaiba</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Full-width editorial credentials strip below hero split */}
        <div className="mt-16 border-t border-[#D8D6CC] pt-8 sm:mt-20">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_HIGHLIGHTS.map((item) => (
              <div key={item.value} className="group">
                <dt className="font-display text-2xl font-bold tracking-tight text-[#1E1B18] tabular-nums transition-colors duration-200 group-hover:text-[#B44822]">
                  {item.value}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#57514B]">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
