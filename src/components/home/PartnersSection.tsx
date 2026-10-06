import React from 'react';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../common/Button';
import { ArrowRight, Building2, CheckCircle2 } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const { organizations } = useData();
  const { navigate } = useRouter();

  const colors = ['#F1EA90', '#D99F9D', '#B4ADD6', '#B8D1A8', '#A3D6F2', '#EAB176'];

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] border-y border-[#201B20]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
            Samenwerking onder één dak
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#201B20] mt-1 tracking-tight">
            Samen werken we aan gelijke kansen
          </h2>
          <p className="mt-3 text-base text-[#595959] leading-relaxed">
            Inwoners van Delft hoeven niet van het kastje naar de muur gestuurd te worden. Maatschappelijke partners werken intensief samen op één vaste fysieke locatie.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {organizations.slice(0, 8).map((org, index) => {
            const avatarBg = colors[index % colors.length];
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
                className="bg-white p-4 rounded-2xl border border-[#201B20]/10 hover:border-[#201B20]/30 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col items-center text-center group"
                role="button"
                tabIndex={0}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-xs text-[#201B20] mb-3 group-hover:scale-105 transition-transform border border-[#201B20]/10"
                  style={{ backgroundColor: avatarBg }}
                >
                  {initials}
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#201B20] group-hover:text-[#404040] leading-snug line-clamp-2">
                  {org.name}
                </h4>
                <p className="text-[11px] text-[#8C8C8C] mt-1 line-clamp-1">
                  {org.isServiceOnly ? 'Spreekuurdienst' : 'Partnerorganisatie'}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => navigate('/organisaties')}
          >
            Bekijk alle 16 partnerorganisaties
          </Button>
        </div>
      </div>
    </section>
  );
};
