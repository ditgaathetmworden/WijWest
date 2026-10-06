import React, { useState } from 'react';
import { FAQItem } from '../../types';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  items: FAQItem[];
  defaultOpenFirst?: boolean;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, defaultOpenFirst = false }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(() => {
    if (defaultOpenFirst && items.length > 0) {
      return { [items[0].id]: true };
    }
    return {};
  });

  const toggle = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-3">
      {items.map(item => {
        const isOpen = !!openIds[item.id];
        return (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-[#201B20]/10 overflow-hidden transition-all duration-200 shadow-xs"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#201B20]"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              <span className="font-extrabold text-base text-[#201B20] leading-snug">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-xl bg-[#FAF9F6] border border-[#201B20]/10 text-[#201B20] transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 bg-[#F1EA90]/40' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={`faq-answer-${item.id}`}
                className="px-4 pb-5 sm:px-5 pt-0 text-sm text-[#404040] leading-relaxed border-t border-[#201B20]/5 animate-in fade-in duration-150"
              >
                <p className="pt-3">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
