import React from 'react';
import { ScheduleEntry } from '../../types';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { Clock, MapPin, ChevronRight, AlertCircle } from 'lucide-react';

interface ScheduleCardProps {
  entry: ScheduleEntry;
  showDayLabel?: boolean;
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ entry, showDayLabel = false }) => {
  const { getOrganizationById } = useData();
  const { navigate } = useRouter();

  const org = getOrganizationById(entry.organizationId);
  const dayNames = ['', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag'];

  const colors = ['#F1EA90', '#D99F9D', '#B4ADD6', '#B8D1A8', '#A3D6F2', '#EAB176'];
  const colorIndex = (org?.name.length || 0) % colors.length;
  const avatarBg = colors[colorIndex];

  const initials = (org?.name || entry.serviceName)
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      onClick={() => org && navigate(`/organisaties/${org.slug}`)}
      className="bg-white rounded-2xl p-4 sm:p-5 border border-[#201B20]/10 hover:border-[#201B20]/30 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (org) navigate(`/organisaties/${org.slug}`);
        }
      }}
      aria-label={`${entry.serviceName} door ${org?.name || ''}, ${entry.startTime} tot ${entry.endTime}`}
    >
      <div>
        {/* Day label if requested */}
        {showDayLabel && (
          <div className="text-xs font-bold uppercase tracking-wider text-[#595959] mb-2 flex items-center justify-between">
            <span>{dayNames[entry.dayOfWeek]}</span>
            {entry.publicationStatus === 'concept' && (
              <span className="text-[10px] font-semibold text-[#8C8C8C] bg-[#FAF8ED] px-2 py-0.5 rounded-md">
                Concept
              </span>
            )}
          </div>
        )}

        {/* Time Banner */}
        <div className="flex items-center justify-between mb-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#201B20] bg-[#FAF9F6] px-2.5 py-1.5 rounded-lg border border-[#201B20]/10">
            <Clock className="w-3.5 h-3.5 text-[#404040]" />
            <span className="tabular-nums">{entry.startTime} – {entry.endTime}</span>
          </div>
          {entry.publicationStatus === 'concept' && !showDayLabel && (
            <span className="text-[10px] font-semibold text-[#8C8C8C] bg-[#FAF8ED] px-2 py-0.5 rounded-md">
              Concept
            </span>
          )}
        </div>

        {/* Header with avatar & name */}
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs text-[#201B20] shrink-0 border border-[#201B20]/10"
            style={{ backgroundColor: avatarBg }}
          >
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-extrabold text-sm sm:text-base text-[#201B20] leading-snug truncate">
              {org?.name || entry.serviceName}
            </h4>
            <p className="text-xs text-[#595959] truncate">
              {entry.serviceName}
            </p>
          </div>
        </div>

        {/* Notes if available */}
        {entry.notes && (
          <p className="mt-3 text-xs text-[#595959] line-clamp-2 leading-relaxed">
            {entry.notes}
          </p>
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-[#201B20]/5 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-[#595959] font-medium">
          <MapPin className="w-3.5 h-3.5 text-[#8C8C8C] shrink-0" />
          <span className="truncate">{entry.location}</span>
        </div>
        <div className="inline-flex items-center gap-1 font-bold text-[#201B20]">
          <span>Info</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#8C8C8C]" />
        </div>
      </div>
    </div>
  );
};
