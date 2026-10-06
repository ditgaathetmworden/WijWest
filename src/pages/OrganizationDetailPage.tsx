import React from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScheduleCard } from '../components/schedule/ScheduleCard';
import { Calendar, MapPin, Tag } from 'lucide-react';

interface OrganizationDetailPageProps {
  organizationSlug: string;
}

export const OrganizationDetailPage: React.FC<OrganizationDetailPageProps> = ({ organizationSlug }) => {
  const { organizations, categories, schedule } = useData();
  const { navigate } = useRouter();

  const organization = organizations.find(org => org.slug === organizationSlug);

  if (!organization) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-xl font-bold">Organisatie niet gevonden</h1>
        <button
          onClick={() => navigate('/organisaties')}
          className="mt-4 px-4 py-2 bg-[#201B20] text-white rounded-xl text-xs font-bold"
        >
          Terug naar overzicht
        </button>
      </div>
    );
  }

  const orgCategories = categories.filter(c => organization.categories.includes(c.id));
  const orgSchedule = schedule.filter(s => s.organizationId === organization.id && s.publicationStatus === 'gepubliceerd');

  const initials = organization.name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Organisaties', path: '/organisaties' },
            { label: organization.name }
          ]}
        />

        {/* Hero */}
        <div className="mt-4 mb-8 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/10 flex items-center justify-center font-black text-sm text-[#201B20] shrink-0">
            {initials}
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
              {organization.name}
            </h1>
            <p className="mt-1 text-sm sm:text-base text-[#595959]">
              {organization.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-1.5 mt-3">
              {orgCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => navigate(`/hulp/${cat.slug}`)}
                  className="px-2.5 py-0.5 rounded-lg text-xs font-semibold text-[#201B20] bg-[#FAF9F6] border border-[#201B20]/10 hover:bg-[#201B20]/5 cursor-pointer"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="mb-10">
          <h2 className="text-base font-extrabold text-[#201B20] mb-4">
            Spreekuren in het rooster
          </h2>

          {orgSchedule.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {orgSchedule.map(entry => (
                <ScheduleCard key={entry.id} entry={entry} showDayLabel={true} />
              ))}
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/8 text-xs text-[#595959]">
              {organization.contactNote}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#201B20]/10">
          <button
            onClick={() => navigate('/rooster')}
            className="px-5 py-2.5 rounded-xl bg-[#201B20] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#332B33] transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            Bekijk alle spreekuren in rooster
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-5 py-2.5 rounded-xl bg-white border border-[#201B20]/15 text-[#201B20] text-xs font-bold flex items-center gap-2 hover:bg-[#FAF9F6] transition-all cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            Kom binnenlopen
          </button>
        </div>
      </div>
    </div>
  );
};
