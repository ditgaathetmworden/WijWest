import React from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from '../context/RouterContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ScheduleCard } from '../components/schedule/ScheduleCard';
import {
  Coins,
  Briefcase,
  Home,
  Heart,
  Sparkles,
  ShieldAlert,
  Calendar,
  MapPin,
  CheckCircle2
} from 'lucide-react';

interface HelpDetailPageProps {
  categorySlug: string;
}

export const HelpDetailPage: React.FC<HelpDetailPageProps> = ({ categorySlug }) => {
  const { categories, organizations, schedule } = useData();
  const { navigate } = useRouter();

  const category = categories.find(c => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-xl font-bold">Onderwerp niet gevonden</h1>
        <button
          onClick={() => navigate('/hulp')}
          className="mt-4 px-4 py-2 bg-[#201B20] text-white rounded-xl text-xs font-bold"
        >
          Terug naar overzicht
        </button>
      </div>
    );
  }

  const getIcon = (name: string) => {
    switch (name) {
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#201B20]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#201B20]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#201B20]" />;
      case 'HeartHandshake':
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#201B20]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#201B20]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#201B20]" />;
      default:
        return <Coins className="w-6 h-6 text-[#201B20]" />;
    }
  };

  const connectedOrgs = organizations.filter(org => org.categories.includes(category.id));
  const connectedSchedule = schedule.filter(s => {
    const org = organizations.find(o => o.id === s.organizationId);
    return org && org.categories.includes(category.id) && s.publicationStatus === 'gepubliceerd';
  });

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Hulp & ondersteuning', path: '/hulp' },
            { label: category.name }
          ]}
        />

        {/* Clean Hero */}
        <div className="mt-4 mb-8 flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs"
            style={{ backgroundColor: category.color }}
          >
            {getIcon(category.iconName)}
          </div>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
              {category.name}
            </h1>
            <p className="mt-1 text-sm sm:text-base text-[#595959]">
              {category.fullDescription}
            </p>
          </div>
        </div>

        {/* 2 Column Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          <div className="md:col-span-7 bg-[#FAF9F6] p-6 rounded-3xl border border-[#201B20]/8">
            <h2 className="text-sm font-extrabold text-[#201B20] mb-3">
              Veelvoorkomende vragen
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#404040]">
              {category.exampleQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#B8D1A8] shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-5 bg-[#FAF9F6] p-6 rounded-3xl border border-[#201B20]/8 flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-extrabold text-[#201B20] mb-2">
                Vrije inloop in Delft
              </h2>
              <p className="text-xs text-[#595959] leading-relaxed mb-4">
                Je hebt geen afspraak nodig. Kom tijdens openingstijden binnen aan Westerkwartier 1 in Delft.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={() => navigate('/contact')}
                className="w-full py-2.5 px-4 rounded-xl bg-[#201B20] text-white text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#332B33] transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                Kom binnenlopen
              </button>
              <button
                onClick={() => navigate('/rooster')}
                className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#201B20]/15 text-[#201B20] text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#FAF9F6] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Bekijk het rooster
              </button>
            </div>
          </div>
        </div>

        {/* Spreekuren */}
        {connectedSchedule.length > 0 && (
          <div className="mb-10">
            <h2 className="text-base font-extrabold text-[#201B20] mb-4">
              Spreekuren voor {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {connectedSchedule.map(entry => (
                <ScheduleCard key={entry.id} entry={entry} showDayLabel={true} />
              ))}
            </div>
          </div>
        )}

        {/* Samenwerkende organisaties */}
        <div>
          <h2 className="text-base font-extrabold text-[#201B20] mb-3">
            Samenwerkende organisaties
          </h2>
          <div className="flex flex-wrap gap-2">
            {connectedOrgs.map(org => (
              <button
                key={org.id}
                onClick={() => navigate(`/organisaties/${org.slug}`)}
                className="px-3 py-1.5 rounded-xl bg-[#FAF9F6] border border-[#201B20]/10 text-xs font-bold text-[#201B20] hover:bg-[#201B20] hover:text-white transition-all cursor-pointer"
              >
                {org.name} →
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
