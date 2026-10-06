import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { CheckCircle2, Eye, Keyboard, Smartphone, Sparkles } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Toegankelijkheidsverklaring' }]} />

        {/* Header */}
        <div className="mt-4 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
            Toegankelijk voor iedereen
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] mt-1 tracking-tight">
            Toegankelijkheidsverklaring
          </h1>
          <p className="mt-3 text-base text-[#595959] leading-relaxed">
            Wij West Dichtbij wil dat iedereen in Delft eenvoudig toegang heeft tot onze informatie en spreekuren. Daarom streven we naar een website die voldoet aan de richtlijnen van WCAG 2.2 niveau AA.
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#201B20]/10 shadow-xs space-y-8 text-[#404040]">
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#B8D1A8]" />
              Onze maatregelen voor toegankelijkheid
            </h2>
            <p className="text-sm leading-relaxed mb-4">
              Tijdens het ontwerp en de bouw van deze website hebben we de volgende maatregelen genomen:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/5 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#201B20]">
                  <Keyboard className="w-4 h-4 text-[#201B20]" />
                  <span>Volledig met toetsenbord te bedienen</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Alle menu's, filters, accordeons en formulieren zijn zonder muis te bedienen met de Tab-, Enter- en Spatiebalk-toets.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/5 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#201B20]">
                  <Eye className="w-4 h-4 text-[#201B20]" />
                  <span>Hoog kleurcontrast (WCAG AA)</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Teksten hebben een contrastverhouding van minimaal 4.5:1. Belangrijke informatie wordt nooit uitsluitend door kleur overgebracht.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/5 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#201B20]">
                  <Smartphone className="w-4 h-4 text-[#201B20]" />
                  <span>Toegankelijk op alle schermen</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Teksten schalen mee zonder verlies van structuur, touchdoelen zijn minimaal 44×44 pixels en de website ondersteunt inzoomen tot 200%.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#201B20]/5 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-[#201B20]">
                  <Sparkles className="w-4 h-4 text-[#201B20]" />
                  <span>Duidelijke taal (B1-niveau)</span>
                </div>
                <p className="text-xs text-[#595959] leading-relaxed">
                  Korte zinnen, duidelijke alinea's en geen onbegrijpelijk jargon of ambtelijke afkortingen.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3">
              Fysieke toegankelijkheid van de locatie
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Ook onze fysieke locatie aan Westerkwartier 1 in Delft is drempelvrij ingericht:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#595959]">
              <li>Ingang op straatniveau zonder traptreden</li>
              <li>Brede deuren en gangen, geschikt voor rolstoelen en kinderwagens</li>
              <li>Aangepast toilet op de begane grond</li>
              <li>Rustige ontvangstruimte voor een prikkelarm gesprek indien gewenst</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3">
              Problemen met toegankelijkheid ervaren?
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Loop je tegen een probleem aan op deze website of in ons gebouw? Laat het ons gerust weten aan de ontvangstbalie aan Westerkwartier 1 of stuur een bericht via onze contactpagina. We helpen je graag verder en verbeteren de toegankelijkheid continu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
