import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'about', label: 'Sobre Mim', href: '#about' },
  { id: 'experience', label: 'Experiências', href: '#experience' },
  { id: 'publications', label: 'Publicações', href: '#publications' },
];

export function Header({ activeSection }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#EEEEE6]/92 backdrop-blur-md border-b border-[#D8D6CC]'
          : 'bg-[#EEEEE6] border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#home"
          className="font-display text-2xl font-bold tracking-tight text-[#1E1B18] transition-colors duration-150 hover:text-[#B44822] whitespace-nowrap shrink-0"
          aria-label="Amanda Freitas Carnaiba — Início"
        >
          AFC.
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[#57514B]"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              data-active={activeSection === item.id}
              className={`nav-link-underline py-1 whitespace-nowrap shrink-0 transition-colors duration-150 ${
                activeSection === item.id
                  ? 'text-[#1E1B18]'
                  : 'hover:text-[#1E1B18]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (plus mobile menu button on small screens) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center justify-center rounded-full bg-[#1E1B18] px-5 py-2.5 text-sm font-medium text-[#F7F7F2] transition-all duration-200 hover:bg-[#B44822] hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0"
          >
            Contato
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[#1E1B18] transition-colors duration-150 hover:bg-[#E5E4DA] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive mobile drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Navegação móvel"
          className="border-t border-[#D8D6CC] bg-[#F7F7F2] px-6 py-5 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center justify-between border-b border-[#D8D6CC]/60 py-2.5 text-base font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-[#9E3D1B]'
                      : 'text-[#1E1B18] hover:text-[#9E3D1B]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span aria-hidden="true" className="text-sm text-[#57514B]">
                    ↗
                  </span>
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] w-full items-center justify-center rounded-full bg-[#B44822] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1E1B18]"
              >
                Vamos conversar
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
