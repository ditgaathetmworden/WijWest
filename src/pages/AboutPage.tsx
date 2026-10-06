import React from 'react';
import {
  CheckCircle2,
  MapPin,
  DoorOpen,
  Users,
  HeartHandshake,
  Network,
  Wrench,
  Sparkles
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const waarden = [
    { name: 'Dichtbij', icon: <MapPin className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Toegankelijk', icon: <DoorOpen className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Samenwerken', icon: <Users className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Vertrouwen', icon: <HeartHandshake className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Verbondenheid', icon: <Network className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Praktische ondersteuning', icon: <Wrench className="w-5 h-5 text-[#201B20]" /> },
    { name: 'Gelijke kansen', icon: <Sparkles className="w-5 h-5 text-[#201B20]" /> }
  ];

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight mb-8">
          Over ons
        </h1>

        {/* 2 Column Layout (matching mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10">
          {/* Left Column: Intro and 3 Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm sm:text-base text-[#404040] leading-relaxed">
              Wij West Dichtbij is dé plek in Delft waar je terechtkunt met vragen over geld, werk, wonen en welzijn. Meerdere organisaties werken samen onder één dak. Zo krijg jij sneller de juiste hulp.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D5E6CC] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#201B20]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#201B20]">
                    Gelijke kansen in Delft
                  </h4>
                  <p className="text-xs text-[#595959]">
                    Iedereen verdient dezelfde kansen om mee te doen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D5E6CC] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#201B20]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#201B20]">
                    Dichtbij en toegankelijk
                  </h4>
                  <p className="text-xs text-[#595959]">
                    We zijn er in de wijk. Binnenlopen kan altijd.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#D5E6CC] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#201B20]" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-[#201B20]">
                    Samen sterker
                  </h4>
                  <p className="text-xs text-[#595959]">
                    We werken samen met partners die je verder helpen.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Group Photo + Yellow Quote Bubble */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-md aspect-16/10 bg-[#FAF9F6] border border-[#201B20]/10">
              <img
                src="/src/assets/images/over_ons_group_table_1790460169909.jpg"
                alt="Medewerkers en bewoners samen aan tafel bij Wij West Dichtbij in Delft"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Overlapping Yellow Quote Card */}
            <div className="mt-4 sm:mt-0 sm:absolute sm:-bottom-5 sm:left-4 sm:right-4 bg-[#F1EA90] p-4 sm:p-5 rounded-2xl shadow-sm border border-[#201B20]/10 text-center">
              <p className="text-xs sm:text-sm font-black text-[#201B20] leading-snug">
                “We luisteren naar je. We denken met je mee. En we helpen je verder.”
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Waarden Card (matching mockup: soft purple container) */}
        <div className="mt-12 bg-[#F0EDF8] rounded-3xl p-6 sm:p-7 border border-[#201B20]/5">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-[#595959] mb-5">
            Onze waarden
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {waarden.map((w, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-2 shadow-2xs">
                  {w.icon}
                </div>
                <span className="text-xs font-bold text-[#201B20]">
                  {w.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
