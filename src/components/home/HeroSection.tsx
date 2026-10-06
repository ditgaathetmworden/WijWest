import React from 'react';
import { useRouter } from '../../context/RouterContext';
import {
  Coins,
  Briefcase,
  Home,
  Heart,
  Calendar,
  Phone
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { navigate } = useRouter();

  const categories = [
    {
      id: 'geldzaken',
      name: 'Geld',
      desc: 'Financiële hulp en advies',
      bg: '#F1EA90', // Lichtgeel
      icon: <Coins className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'werk-en-inkomen',
      name: 'Werk',
      desc: 'Hulp bij werk en inkomen',
      bg: '#F5D0CE', // Zacht zalmroze
      icon: <Briefcase className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'wonen',
      name: 'Wonen',
      desc: 'Wonen en woonsituatie',
      bg: '#DFDCF3', // Zacht lavendel
      icon: <Home className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'welzijn',
      name: 'Welzijn',
      desc: 'Zorgen, gezondheid en meedoen',
      bg: '#D5E6CC', // Zacht saliegroen
      icon: <Heart className="w-5 h-5 text-[#201B20]" />
    }
  ];

  return (
    <section className="pt-8 pb-12 sm:pt-14 sm:pb-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Text & 4 Category Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] tracking-tight leading-[1.15]">
                Samen dichtbij.<br />
                Hulp die verder helpt.
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#595959] leading-relaxed">
                Heb je een vraag over geld, werk, wonen of welzijn?<br className="hidden sm:inline" />
                Wij luisteren en helpen je verder.
              </p>
            </div>

            {/* 4 Cards Grid (matching mockup exactly) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-3.5">
              {categories.map(c => (
                <div
                  key={c.id}
                  onClick={() => navigate(`/hulp/${c.id}`)}
                  className="rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95 select-none"
                  style={{ backgroundColor: c.bg }}
                  role="button"
                  tabIndex={0}
                >
                  <div className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center mb-2.5 shadow-2xs">
                    {c.icon}
                  </div>
                  <h3 className="font-extrabold text-sm text-[#201B20] mb-0.5">
                    {c.name}
                  </h3>
                  <p className="text-[11px] text-[#404040] leading-tight">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 2 Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => navigate('/rooster')}
                className="px-6 py-3 rounded-xl bg-[#201B20] text-white text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#332B33] transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4 text-white" />
                Bekijk het rooster
              </button>

              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 rounded-xl bg-white border border-[#201B20]/15 text-[#201B20] text-xs sm:text-sm font-bold flex items-center gap-2 hover:bg-[#FAF9F6] transition-all shadow-2xs cursor-pointer active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#201B20]" />
                Neem contact op
              </button>
            </div>
          </div>

          {/* Right Column: Warm Photography & Organic Shape */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Pink organic wave background */}
              <div
                className="absolute -bottom-6 -left-6 w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#D990B5]/40 blur-xl pointer-events-none -z-10"
                aria-hidden="true"
              />

              <div className="relative rounded-3xl overflow-hidden shadow-lg bg-[#FAF9F6] aspect-4/3 border-2 border-white">
                <img
                  src="/src/assets/images/hero_delft_conversation_1790460158986.jpg"
                  alt="Twee mensen in een warm gesprek bij Wij West Dichtbij in Delft"
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Yellow "GELIJKE KANSEN IN DELFT" badge */}
                <div className="absolute top-4 right-4 bg-[#F1EA90] px-3 py-1.5 rounded-lg border border-[#201B20]/10 shadow-xs text-[11px] font-black tracking-wider text-[#201B20]">
                  GELIJKE KANSEN IN DELFT
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
