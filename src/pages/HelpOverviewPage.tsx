import React from 'react';
import { useRouter } from '../context/RouterContext';
import {
  Coins,
  Briefcase,
  Home,
  Heart,
  Layers,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export const HelpOverviewPage: React.FC = () => {
  const { navigate } = useRouter();

  const topics = [
    {
      id: 'geldzaken',
      name: 'Geld',
      desc: 'Schulden, toeslagen, budget',
      bg: '#F1EA90',
      icon: <Coins className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'werk-en-inkomen',
      name: 'Werk',
      desc: 'Werk vinden, solliciteren, advies',
      bg: '#F5D0CE',
      icon: <Briefcase className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'wonen',
      name: 'Wonen',
      desc: 'Woonproblemen, huur, gezin',
      bg: '#DFDCF3',
      icon: <Home className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'welzijn',
      name: 'Welzijn',
      desc: 'Zorgen, gezondheid, relaties',
      bg: '#D5E6CC',
      icon: <Heart className="w-5 h-5 text-[#201B20]" />
    },
    {
      id: 'alle',
      name: 'Alle onderwerpen',
      desc: "Bekijk alle thema's",
      bg: '#D2EBF8',
      icon: <Layers className="w-5 h-5 text-[#201B20]" />
    }
  ];

  const steps = [
    { num: 1, title: 'Vertel je vraag', desc: 'We luisteren naar je verhaal.' },
    { num: 2, title: 'We denken met je mee', desc: 'We kijken samen naar oplossingen.' },
    { num: 3, title: 'We verbinden je', desc: 'We brengen je in contact met de juiste organisatie.' },
    { num: 4, title: 'We blijven betrokken', desc: 'We zorgen dat je verder kunt.' }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
            Hulp & ondersteuning
          </h1>
          <p className="mt-1 text-sm sm:text-base text-[#595959]">
            Wat speelt er? We helpen je op weg.
          </p>
        </div>

        {/* 3 Columns Layout (matching mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          {/* Column 1: Topics List (5 spans) */}
          <div className="lg:col-span-4 space-y-3">
            {topics.map(t => (
              <div
                key={t.id}
                onClick={() => navigate(t.id === 'alle' ? '/organisaties' : `/hulp/${t.id}`)}
                className="p-3.5 sm:p-4 rounded-2xl flex items-center justify-between gap-3 cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-98 select-none"
                style={{ backgroundColor: t.bg }}
                role="button"
                tabIndex={0}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shrink-0 shadow-2xs">
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-[#201B20]">
                      {t.name}
                    </h3>
                    <p className="text-xs text-[#595959]">
                      {t.desc}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#404040] shrink-0" />
              </div>
            ))}
          </div>

          {/* Column 2: Zo helpen we je (4 spans) */}
          <div className="lg:col-span-4 bg-[#FAF9F6] p-6 rounded-3xl border border-[#201B20]/8">
            <h2 className="text-base font-extrabold text-[#201B20] mb-5">
              Zo helpen we je
            </h2>

            <div className="space-y-4">
              {steps.map(s => (
                <div key={s.num} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F1EA90] text-[#201B20] font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {s.num}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#201B20]">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#595959] mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Photo & Vragen contact (4 spans) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-3xl overflow-hidden aspect-16/10 shadow-xs border border-[#201B20]/10 bg-[#FAF9F6]">
              <img
                src="/src/assets/images/hero_delft_conversation_1790460158986.jpg"
                alt="Gesprek bij Wij West Dichtbij"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-[#FAF9F6] p-5 rounded-3xl border border-[#201B20]/8 space-y-3">
              <h3 className="font-extrabold text-sm text-[#201B20]">
                Vragen? We staan voor je klaar.
              </h3>

              <div className="space-y-2 text-xs text-[#404040]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8C8C8C] shrink-0" />
                  <span>Westerkwartier 1, Delft (ma t/m vr 09:00 - 17:00)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#8C8C8C] shrink-0" />
                  <span>Vrije inloop · Geen afspraak nodig</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner: Spoed of zorgen? (matching mockup) */}
        <div className="bg-[#F1EA90] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-[#201B20] shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-[#201B20]">
                Spoed of zorgen?
              </h3>
              <p className="text-xs sm:text-sm text-[#404040] leading-snug">
                Heb je snel hulp nodig of maak je je zorgen om iemand? Neem direct contact op of bel bij direct gevaar 112.
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 rounded-xl bg-[#201B20] text-white text-xs sm:text-sm font-bold hover:bg-[#332B33] transition-all shrink-0 cursor-pointer active:scale-95"
          >
            Neem contact op
          </button>
        </div>
      </div>
    </div>
  );
};
