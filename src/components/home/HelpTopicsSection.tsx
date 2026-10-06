import React from 'react';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { CategoryCard } from '../common/CategoryCard';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

export const HelpTopicsSection: React.FC = () => {
  const { categories } = useData();
  const { navigate } = useRouter();

  return (
    <section className="py-14 sm:py-20 bg-[#FAF9F6] border-y border-[#201B20]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
              Waar kunnen we je mee helpen?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#201B20] mt-1 tracking-tight">
              Kies het onderwerp dat bij jouw vraag past
            </h2>
            <p className="mt-2 text-base text-[#595959] max-w-xl">
              We luisteren zonder oordeel en verbinden je direct met de juiste organisatie in Delft.
            </p>
          </div>

          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => navigate('/hulp')}
            className="self-start md:self-auto"
          >
            Alle hulpgebieden
          </Button>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};
