import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScheduleCalendar } from '../components/schedule/ScheduleCalendar';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/common/Button';
import { Calendar, Sliders, MapPin } from 'lucide-react';

export const SchedulePage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Rooster' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
              Inloopspreekuren in Delft
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] mt-1 tracking-tight">
              Rooster
            </h1>
            <p className="mt-2 text-base sm:text-lg text-[#595959] leading-relaxed">
              Bekijk welke organisaties aanwezig zijn en wanneer je bij een spreekuur terechtkunt. Alle spreekuren zijn vrije inloop: je hebt geen afspraak nodig.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <Button
              variant="outline"
              size="sm"
              icon={<Sliders className="w-4 h-4" />}
              onClick={() => navigate('/beheer')}
              title="Roosterbeheer demo openen"
            >
              Rooster beheren
            </Button>
            <Button
              variant="primary"
              size="sm"
              icon={<MapPin className="w-4 h-4" />}
              onClick={() => navigate('/contact')}
            >
              Kom binnenlopen
            </Button>
          </div>
        </div>

        {/* Calendar Component */}
        <ScheduleCalendar />
      </div>
    </div>
  );
};
