import React from 'react';
import { useData } from '../../context/DataContext';
import { useRouter } from '../../context/RouterContext';
import { FaqAccordion } from '../common/FaqAccordion';
import { Button } from '../common/Button';
import { ArrowRight, HelpCircle } from 'lucide-react';

export const FaqPreviewSection: React.FC = () => {
  const { faqs } = useData();
  const { navigate } = useRouter();

  // Show top 4 FAQs
  const previewFaqs = faqs.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#595959] mb-1">
            <HelpCircle className="w-4 h-4 text-[#8C8C8C]" />
            <span>Duidelijkheid vooraf</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
            Veelgestelde vragen
          </h2>
          <p className="mt-2 text-base text-[#595959]">
            Vragen over hoe een inloopspreekuur werkt of wat je moet meenemen? Hier vind je direct antwoord.
          </p>
        </div>

        <FaqAccordion items={previewFaqs} defaultOpenFirst={true} />

        <div className="mt-8 text-center">
          <Button
            variant="secondary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            onClick={() => navigate('/veelgestelde-vragen')}
          >
            Alle veelgestelde vragen
          </Button>
        </div>
      </div>
    </section>
  );
};
