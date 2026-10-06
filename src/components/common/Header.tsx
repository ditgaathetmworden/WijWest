import React, { useState, useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { Logo } from './Logo';
import { Menu, X, Calendar, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Hulp & ondersteuning', path: '/hulp' },
    { label: 'Organisaties', path: '/organisaties' },
    { label: 'Rooster', path: '/rooster' },
    { label: 'Over ons', path: '/over-ons' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#201B20] focus:text-white focus:rounded-lg shadow-lg"
      >
        Direct naar inhoud
      </a>

      {/* Main Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#201B20]/8 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#201B20] rounded-lg p-1 -ml-1 cursor-pointer"
            aria-label="Wij West Dichtbij - Startpagina"
          >
            <Logo size="md" showSubtitle={true} />
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Hoofdnavigatie">
            {navLinks.map(link => {
              const active = isActive(link.path);
              return (
                <button
                  key={link.path}
                  onClick={() => navigate(link.path)}
                  className={`text-sm font-bold transition-colors cursor-pointer ${
                    active
                      ? 'text-[#201B20] underline decoration-[#201B20] decoration-2 underline-offset-8'
                      : 'text-[#595959] hover:text-[#201B20]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button: Pink button from the mockups */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="px-4 py-2 text-xs font-bold text-white bg-[#D990B5] hover:bg-[#cf81a9] rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
            >
              Neem contact op
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-1">
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className="p-2 text-[#201B20] hover:bg-[#201B20]/5 rounded-lg cursor-pointer"
              aria-label={mobileMenuOpen ? 'Sluit menu' : 'Open navigatiemenu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#201B20]/50 backdrop-blur-xs flex flex-col justify-end md:hidden animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white rounded-t-3xl p-6 shadow-2xl flex flex-col max-h-[85vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#201B20]/10 mb-4">
              <Logo size="sm" showSubtitle={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#404040] hover:text-[#201B20] rounded-full"
                aria-label="Sluit menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1.5 my-2">
              {navLinks.map(link => {
                const active = isActive(link.path);
                return (
                  <button
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-base font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-[#201B20] text-white'
                        : 'text-[#201B20] hover:bg-[#201B20]/5'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-[#201B20]/10 flex flex-col gap-2 mt-2">
              <button
                onClick={() => {
                  navigate('/rooster');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-sm font-bold text-white bg-[#201B20] rounded-xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Bekijk het rooster
              </button>
              <button
                onClick={() => {
                  navigate('/contact');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 text-sm font-bold text-white bg-[#D990B5] rounded-xl flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Neem contact op
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
