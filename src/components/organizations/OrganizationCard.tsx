import React from 'react';
import { Organization } from '../../types';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { ChevronRight, Clock, MapPin, CheckCircle2 } from 'lucide-react';

interface OrganizationCardProps {
  organization: Organization;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  const { categories, schedule } = useData();
  const { navigate } = useRouter();

  // Find schedule entries for this organization
  const orgSchedule = schedule.filter(s => s.organizationId === organization.id && s.publicationStatus === 'gepubliceerd');

  // Org categories
  const orgCategories = categories.filter(c => organization.categories.includes(c.id));

  // Monogram color based on name length
  const colors = ['#F1EA90', '#D99F9D', '#B4ADD6', '#B8D1A8', '#A3D6F2', '#EAB176'];
  const colorIndex = (organization.name.length) % colors.length;
  const avatarBg = colors[colorIndex];

  // Monogram letters
  const initials = organization.name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      onClick={() => navigate(`/organisaties/${organization.slug}`)}
      className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#201B20]/10 hover:border-[#201B20]/30 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/organisaties/${organization.slug}`);
        }
      }}
      aria-label={`Bekijk informatie over ${organization.name}`}
    >
      <div>
        <div className="flex items-start gap-3.5 mb-3.5">
          {/* Avatar Monogram */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm text-[#201B20] shrink-0 border border-[#201B20]/10 transition-transform group-hover:scale-105"
            style={{ backgroundColor: avatarBg }}
          >
            {initials}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <h3 className="font-extrabold text-base text-[#201B20] group-hover:text-[#404040] transition-colors leading-tight">
                {organization.name}
              </h3>
              {organization.verifiedInRooster && (
                <span title="Geverifieerde partner in rooster" className="inline-flex text-[#201B20]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#595959]" />
                </span>
              )}
            </div>
            {organization.isServiceOnly && (
              <span className="text-[11px] font-semibold text-[#8C8C8C]">
                Spreekuur & Ondersteuningsdienst
              </span>
            )}
          </div>
        </div>

        <p className="text-sm text-[#595959] leading-relaxed line-clamp-2 mb-4">
          {organization.shortDescription}
        </p>

        {/* Categories as clean unboxed text list */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#595959] mb-4">
          {orgCategories.map((cat, idx) => (
            <React.Fragment key={cat.id}>
              {idx > 0 && <span className="text-[#8C8C8C]">·</span>}
              <span className="font-medium text-[#404040]">{cat.name}</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div>
        {/* Rooster info snippet if available */}
        {orgSchedule.length > 0 ? (
          <div className="bg-[#FAF9F6] p-2.5 rounded-xl border border-[#201B20]/5 text-xs text-[#404040] space-y-1 mb-3">
            <div className="flex items-center gap-1.5 font-semibold text-[#201B20]">
              <Clock className="w-3.5 h-3.5 text-[#595959]" />
              <span>Inloopspreekuur: {orgSchedule[0].startTime} – {orgSchedule[0].endTime}</span>
            </div>
            {orgSchedule[0].location && (
              <div className="flex items-center gap-1.5 text-[#595959]">
                <MapPin className="w-3 h-3 text-[#8C8C8C]" />
                <span>{orgSchedule[0].location}</span>
              </div>
            )}
          </div>
        ) : (
          <div className="text-xs text-[#8C8C8C] mb-3 italic">
            {organization.contactNote}
          </div>
        )}

        <div className="pt-3 border-t border-[#201B20]/5 flex items-center justify-between text-xs font-bold text-[#201B20]">
          <span>Meer informatie & spreekuren</span>
          <ChevronRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#201B20] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </div>
  );
};
