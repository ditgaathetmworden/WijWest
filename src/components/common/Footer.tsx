import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <footer className="bg-[#201B20] text-white py-10 sm:py-12 border-t border-[#404040]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Logo */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer"
            aria-label="Wij West Dichtbij"
          >
            <Logo size="sm" lightMode={true} showSubtitle={false} />
          </button>
          <span className="text-[11px] text-[#8C8C8C]">
            Gelijke kansen in Delft
          </span>
        </div>

        {/* Center / Right: Minimal links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#E5E5E5]">
          <button
            onClick={() => navigate('/privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacyverklaring
          </button>
          <span className="text-[#595959]" aria-hidden="true">·</span>
          <button
            onClick={() => navigate('/toegankelijkheid')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Toegankelijkheid
          </button>
          <span className="text-[#595959]" aria-hidden="true">·</span>
          <button
            onClick={() => navigate('/beheer')}
            className="hover:text-[#F1EA90] transition-colors cursor-pointer"
          >
            Beheer
          </button>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#8C8C8C]">
          © Wij West Dichtbij 2026
        </div>
      </div>
    </footer>
  );
};
