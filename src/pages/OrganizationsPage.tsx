import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useRouter } from '../context/RouterContext';
import { Calendar, ChevronRight, Search } from 'lucide-react';

export const OrganizationsPage: React.FC = () => {
  const { organizations } = useData();
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const colors = ['#DFDCF3', '#D5E6CC', '#F5D0CE', '#D2EBF8', '#F1EA90', '#F8D4E5'];

  const filteredOrgs = organizations.filter(org => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return org.name.toLowerCase().includes(q) || org.shortDescription.toLowerCase().includes(q);
  });

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
              Onze organisaties
            </h1>
            <p className="mt-1 text-sm sm:text-base text-[#595959] max-w-xl">
              Wij werken samen met verschillende organisaties in Delft. Zo krijg jij de juiste hulp, dichtbij.
            </p>
          </div>

          <button
            onClick={() => navigate('/rooster')}
            className="px-4 py-2.5 rounded-xl border border-[#201B20]/15 text-[#201B20] text-xs font-bold flex items-center gap-2 hover:bg-[#FAF9F6] transition-all self-start sm:self-auto cursor-pointer shadow-2xs"
          >
            <Calendar className="w-4 h-4 text-[#201B20]" />
            Bekijk het rooster
          </button>
        </div>

        {/* Clean Filter / Search input */}
        <div className="mb-6 max-w-xs">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-[#8C8C8C] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Zoek organisatie..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-[#FAF9F6] border border-[#201B20]/10 rounded-xl text-xs text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-1 focus:ring-[#201B20]"
            />
          </div>
        </div>

        {/* Grid of 10-15 clean cards matching mockup (2 rows of 5 on wide screens) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {filteredOrgs.map((org, index) => {
            const bg = colors[index % colors.length];
            const initials = org.name
              .split(' ')
              .slice(0, 2)
              .map(w => w[0])
              .join('')
              .toUpperCase();

            return (
              <div
                key={org.id}
                onClick={() => navigate(`/organisaties/${org.slug}`)}
                className="bg-white rounded-2xl p-4 border border-[#201B20]/10 hover:border-[#201B20]/25 transition-all cursor-pointer flex flex-col justify-between group shadow-2xs hover:shadow-xs min-h-[140px]"
                role="button"
                tabIndex={0}
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center font-black text-xs text-[#201B20] shrink-0"
                      style={{ backgroundColor: bg }}
                    >
                      {initials}
                    </div>
                  </div>

                  <h3 className="font-extrabold text-xs sm:text-sm text-[#201B20] group-hover:text-[#404040] leading-snug line-clamp-2">
                    {org.name}
                  </h3>

                  <p className="text-[11px] text-[#595959] mt-1 line-clamp-2 leading-snug">
                    {org.shortDescription}
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <ChevronRight className="w-3.5 h-3.5 text-[#8C8C8C] group-hover:text-[#201B20] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
