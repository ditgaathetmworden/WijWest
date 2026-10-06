import React from 'react';
import { MapPin, Users, HeartHandshake, Sparkles } from 'lucide-react';

export const ValuesBar: React.FC = () => {
  const values = [
    {
      title: 'Dichtbij',
      desc: 'We zijn er in de wijk en kijken samen.',
      bg: '#F1EA90',
      icon: <MapPin className="w-4 h-4 text-[#201B20]" />
    },
    {
      title: 'Toegankelijk',
      desc: 'Binnenlopen, bellen of online.',
      bg: '#F5D0CE',
      icon: <Sparkles className="w-4 h-4 text-[#201B20]" />
    },
    {
      title: 'Samenwerken',
      desc: 'Meerdere organisaties onder één dak.',
      bg: '#D5E6CC',
      icon: <Users className="w-4 h-4 text-[#201B20]" />
    },
    {
      title: 'Gelijke kansen',
      desc: 'Iedereen in Delft verdient gelijke kansen.',
      bg: '#F8D4E5',
      icon: <HeartHandshake className="w-4 h-4 text-[#201B20]" />
    }
  ];

  return (
    <section className="py-8 bg-white border-t border-[#201B20]/6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {values.map((v, i) => (
            <div key={i} className="flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: v.bg }}
              >
                {v.icon}
              </div>
              <div>
                <h4 className="font-extrabold text-xs sm:text-sm text-[#201B20]">
                  {v.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-[#595959] mt-0.5 leading-snug">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
