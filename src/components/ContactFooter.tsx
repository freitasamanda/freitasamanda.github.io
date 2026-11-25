import { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { CONTACT_LINKS } from '../data/portfolioData';
import { ContactOrganicStack } from './OrganicShapes';

export function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_LINKS.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback for restricted clipboard contexts
      const input = document.createElement('input');
      input.value = CONTACT_LINKS.email;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="border-t border-[#D8D6CC] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Signature stacked terracotta organic shapes canvas echoing reference image */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#D8D6CC]/80 bg-[#EEEEE6] px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24">
            <ContactOrganicStack className="absolute inset-0 h-full w-full" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2
                id="contact-title"
                className="font-display text-[clamp(2.25rem,4.5vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.03em] text-white"
              >
                Vamos conversar?
              </h2>
              <p className="mt-3 text-base font-medium text-white sm:text-lg">
                freitasamanda.github.io
              </p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white sm:text-[15px]">
                Entre em contato por email ou pelas redes abaixo para projetos de pesquisa,
                inteligência de mercado, palestras ou colaborações.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${CONTACT_LINKS.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#1E1B18] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1E1B18] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-[#1E1B18] transition-all duration-200 hover:bg-[#1E1B18] hover:text-white hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-[#B44822]" />
                      <span>Email copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copiar email</span>
                    </>
                  )}
                </button>

                <a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#1E1B18]/90 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1E1B18] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#1E1B18]/90 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1E1B18] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>

                <a
                  href={CONTACT_LINKS.lattes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-[#1E1B18]/90 px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white hover:text-[#1E1B18] hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                >
                  <span>Currículo Lattes</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#D8D6CC] py-8 text-sm text-[#57514B]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center lg:px-8">
          <span className="tabular-nums">© 2026 Amanda Freitas Carnaiba.</span>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <a
              href={`mailto:${CONTACT_LINKS.email}`}
              className="nav-link-underline transition-colors hover:text-[#1E1B18]"
            >
              {CONTACT_LINKS.email}
            </a>
            <span aria-hidden="true" className="text-[#D65E33]">
              ·
            </span>
            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-underline transition-colors hover:text-[#1E1B18]"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-[#D65E33]">
              ·
            </span>
            <a
              href={CONTACT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link-underline transition-colors hover:text-[#1E1B18]"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-[#D65E33]">
              ·
            </span>
            <a
              href="#home"
              className="inline-flex items-center gap-1 font-medium text-[#1E1B18] transition-colors hover:text-[#B44822]"
            >
              <span>Topo</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
