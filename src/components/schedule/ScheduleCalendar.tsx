import React, { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { Download, Info, ChevronRight, MapPin } from 'lucide-react';

export const ScheduleCalendar: React.FC = () => {
  const { schedule, organizations, exportScheduleCSV } = useData();
  const { navigate } = useRouter();

  const [selectedDay, setSelectedDay] = useState<number | 'all'>('all');

  const days = [
    { id: 1, label: 'Ma' },
    { id: 2, label: 'Di' },
    { id: 3, label: 'Wo' },
    { id: 4, label: 'Do' },
    { id: 5, label: 'Vr' },
    { id: 'all', label: 'Alle dagen' }
  ];

  const colors = ['#DFDCF3', '#F5D0CE', '#D2EBF8', '#D5E6CC', '#F1EA90', '#F5D0CE', '#F8D4E5', '#DFDCF3'];

  // Filter schedule
  const displayedSchedule = schedule.filter(entry => {
    if (selectedDay !== 'all' && entry.dayOfWeek !== selectedDay) {
      return false;
    }
    return entry.publicationStatus === 'gepubliceerd';
  });

  return (
    <div className="space-y-6">
      {/* Top Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
            Rooster / spreekuren
          </h1>
          <p className="mt-1 text-sm sm:text-base text-[#595959]">
            Bekijk wanneer je bij ons en onze partners terecht kunt.
          </p>
        </div>

        <button
          onClick={() => exportScheduleCSV(displayedSchedule)}
          className="px-4 py-2.5 rounded-xl border border-[#201B20]/15 text-[#201B20] text-xs font-bold flex items-center gap-2 hover:bg-[#FAF9F6] transition-all self-start sm:self-auto cursor-pointer shadow-2xs active:scale-95"
        >
          <Download className="w-4 h-4 text-[#201B20]" />
          Download overzicht
        </button>
      </div>

      {/* Day Selector Pills Bar (matching mockup) */}
      <div className="flex items-center gap-2 overflow-x-auto py-1">
        {days.map(d => {
          const active = selectedDay === d.id;
          return (
            <button
              key={String(d.id)}
              onClick={() => setSelectedDay(d.id as any)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer select-none ${
                active
                  ? 'bg-[#F1EA90] text-[#201B20] shadow-2xs font-extrabold'
                  : 'bg-[#FAF9F6] text-[#595959] hover:text-[#201B20] hover:bg-[#F0EFEA]'
              }`}
            >
              {d.label}
            </button>
          );
        })}
      </div>

      {/* Grid of 8 Cards (matching mockup: 4 columns on desktop, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedSchedule.map((entry, index) => {
          const org = organizations.find(o => o.id === entry.organizationId);
          const bg = colors[index % colors.length];

          const initials = (org?.name || entry.serviceName)
            .split(' ')
            .slice(0, 2)
            .map(w => w[0])
            .join('')
            .toUpperCase();

          return (
            <div
              key={entry.id}
              onClick={() => org && navigate(`/organisaties/${org.slug}`)}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-[#201B20]/10 hover:border-[#201B20]/25 transition-all flex flex-col justify-between shadow-2xs hover:shadow-xs cursor-pointer group"
              role="button"
              tabIndex={0}
            >
              <div>
                {/* Time Badge */}
                <span className="text-xs font-bold text-[#595959] tabular-nums block mb-3">
                  {entry.startTime} – {entry.endTime}
                </span>

                {/* Avatar & Title */}
                <div className="flex items-start gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-xs text-[#201B20] shrink-0"
                    style={{ backgroundColor: bg }}
                  >
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-extrabold text-xs sm:text-sm text-[#201B20] group-hover:text-[#404040] leading-snug">
                      {org?.name || entry.serviceName}
                    </h3>
                    <p className="text-[11px] text-[#8C8C8C] mt-0.5">
                      (spreekuur)
                    </p>
                  </div>
                </div>
              </div>

              {/* Location pin */}
              <div className="pt-3 border-t border-[#201B20]/5 flex items-center justify-between text-[11px] text-[#595959]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8C8C8C]" />
                  <span>{entry.location}</span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#8C8C8C] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          );
        })}
      </div>

      {displayedSchedule.length === 0 && (
        <div className="p-8 text-center text-sm text-[#8C8C8C] bg-[#FAF9F6] rounded-2xl border border-[#201B20]/8">
          Geen spreekuren gevonden voor deze dag.
        </div>
      )}

      {/* Bottom Light-Blue Notice Banner (matching mockup) */}
      <div className="bg-[#D2EBF8] rounded-2xl p-4 sm:p-4.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#201B20]">
        <div className="flex items-center gap-2.5">
          <Info className="w-4 h-4 text-[#201B20] shrink-0" />
          <span>
            <strong>Let op:</strong> tijden kunnen wijzigen. Bekijk altijd het actuele rooster voor de meest actuele informatie.
          </span>
        </div>

        <button
          onClick={() => setSelectedDay('all')}
          className="font-bold underline hover:opacity-80 flex items-center gap-1 shrink-0 cursor-pointer"
        >
          Bekijk alle dagen <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
