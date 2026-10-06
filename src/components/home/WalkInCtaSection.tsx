import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../common/Button';
import { Calendar, MapPin, Sparkles } from 'lucide-react';

export const WalkInCtaSection: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="py-16 bg-[#201B20] text-white relative overflow-hidden">
      {/* Soft decorative glow */}
      <div
        className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#F1EA90]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#A3D6F2]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#F1EA90] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#F1EA90]" />
          <span>Vrije inloop · Geen afspraak nodig</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Je staat er niet alleen voor.
        </h2>

        <p className="text-base sm:text-lg text-[#E5E5E5] max-w-2xl mx-auto leading-relaxed mb-8">
          Heb je een vraag over geld, werk, wonen of welzijn, of weet je niet waar je moet beginnen? Loop gerust bij ons binnen aan Westerkwartier 1 in Delft.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="accent"
            size="lg"
            icon={<MapPin className="w-4 h-4" />}
            onClick={() => navigate('/contact')}
          >
            Locatie & Vrije Inloop
          </Button>

          <Button
            variant="secondary"
            size="lg"
            icon={<Calendar className="w-4 h-4" />}
            onClick={() => navigate('/rooster')}
          >
            Bekijk het rooster
          </Button>
        </div>
      </div>
    </section>
  );
};
