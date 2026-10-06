import React from 'react';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { ScheduleCard } from '../schedule/ScheduleCard';
import { Button } from '../common/Button';
import { Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

export const NextScheduleSection: React.FC = () => {
  const { schedule } = useData();
  const { navigate } = useRouter();

  // Get up to 6 published schedule items
  const upcomingItems = schedule
    .filter(entry => entry.publicationStatus === 'gepubliceerd')
    .slice(0, 6);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#595959] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#B8D1A8]" />
              <span>Geverifieerd rooster maart 2026</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
              Eerstvolgende inloopspreekuren
            </h2>
            <p className="mt-2 text-base text-[#595959] max-w-xl">
              Bekijk welke organisaties aanwezig zijn. Vrije inloop bij Westerkwartier 1 in Delft. Geen afspraak nodig.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => navigate('/rooster')}
            className="self-start md:self-auto"
          >
            Bekijk het volledige rooster
          </Button>
        </div>

        {/* 6 Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {upcomingItems.map(item => (
            <ScheduleCard key={item.id} entry={item} showDayLabel={true} />
          ))}
        </div>

        {/* Small note under grid */}
        <div className="mt-6 text-center text-xs text-[#8C8C8C] flex items-center justify-center gap-2 flex-wrap">
          <span>Bron: WWD rooster 0326-1.pptx (Maart 2026, versie 1)</span>
          <span>·</span>
          <span>Tijden kunnen wijzigen. Bekijk altijd het actuele weekrooster.</span>
        </div>
      </div>
    </section>
  );
};
