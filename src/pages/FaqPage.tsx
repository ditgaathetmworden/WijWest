import React, { useState, useMemo } from 'react';
import { useData } from '../context/DataContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FaqAccordion } from '../components/common/FaqAccordion';
import { Button } from '../components/common/Button';
import { useRouter } from '../context/RouterContext';
import { Search, HelpCircle, MapPin, Calendar } from 'lucide-react';

export const FaqPage: React.FC = () => {
  const { faqs } = useData();
  const { navigate } = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle vragen' },
    { id: 'inloop', label: 'Vrije inloop' },
    { id: 'algemeen', label: 'Algemeen' },
    { id: 'hulp', label: 'Hulp & meenemen' },
    { id: 'organisaties', label: 'Organisaties' },
    { id: 'privacy', label: 'Privacy' }
  ];

  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchQ = faq.question.toLowerCase().includes(q);
        const matchA = faq.answer.toLowerCase().includes(q);
        if (!matchQ && !matchA) return false;
      }
      return true;
    });
  }, [faqs, selectedCategory, searchQuery]);

  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Veelgestelde vragen' }]} />

        {/* Page Header */}
        <div className="mt-4 mb-8 text-center max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
            Hulp & duidelijkheid
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] mt-1 tracking-tight">
            Veelgestelde vragen
          </h1>
          <p className="mt-3 text-base text-[#595959] leading-relaxed">
            Heb je een vraag over de inloopspreekuren, bereikbaarheid of wat je moet meenemen? Hier vind je antwoord op de meest gestelde vragen.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-[#201B20]/10 shadow-xs mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#8C8C8C] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Zoek in de veelgestelde vragen..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 bg-[#FAF9F6] border border-[#201B20]/10 rounded-xl text-sm text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-2 focus:ring-[#201B20] focus:bg-white transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {categories.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    active
                      ? 'bg-[#201B20] text-white shadow-xs'
                      : 'bg-[#FAF9F6] text-[#595959] hover:text-[#201B20] border border-[#201B20]/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* FAQ Accordion List */}
        {filteredFaqs.length > 0 ? (
          <FaqAccordion items={filteredFaqs} defaultOpenFirst={true} />
        ) : (
          <div className="bg-white rounded-3xl p-10 text-center border border-[#201B20]/10 shadow-xs">
            <HelpCircle className="w-10 h-10 text-[#8C8C8C] mx-auto mb-3" />
            <h3 className="font-extrabold text-base text-[#201B20] mb-1">
              Geen vragen gevonden
            </h3>
            <p className="text-sm text-[#595959] mb-4">
              Er zijn geen vragen die overeenkomen met je zoekopdracht.
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Toon alle vragen
            </Button>
          </div>
        )}

        {/* Inloop Help Box */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-[#201B20]/10 shadow-xs text-center">
          <h3 className="text-xl font-black text-[#201B20] mb-2">
            Staat jouw vraag er niet tussen?
          </h3>
          <p className="text-sm text-[#595959] max-w-lg mx-auto mb-6 leading-relaxed">
            Geen zorgen. Kom gewoon langs bij onze ontvangstbalie aan Westerkwartier 1 in Delft. Onze medewerkers staan klaar om je persoonlijk verder te helpen.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="sm"
              icon={<MapPin className="w-4 h-4" />}
              onClick={() => navigate('/contact')}
            >
              Locatie & inloop
            </Button>
            <Button
              variant="secondary"
              size="sm"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => navigate('/rooster')}
            >
              Bekijk het rooster
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
