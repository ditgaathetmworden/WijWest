import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { NoticeBanner } from '../components/common/NoticeBanner';
import { Shield, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-12 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Breadcrumbs items={[{ label: 'Privacyverklaring' }]} />

        {/* Header */}
        <div className="mt-4 mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
            Jouw gegevens & privacy
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#201B20] mt-1 tracking-tight">
            Privacyverklaring
          </h1>
          <p className="mt-3 text-base text-[#595959] leading-relaxed">
            Wij West Dichtbij gaat zorgvuldig en vertrouwelijk om met jouw persoonsgegevens. Op deze pagina leggen we in begrijpelijke taal (B1) uit wat we doen.
          </p>
        </div>

        {/* Notice regarding verification */}
        <div className="mb-8">
          <NoticeBanner
            type="info"
            title="Voorlopige verklaring (Concept)"
            message="Dit betreft de functionele privacyverklaring van de website van Wij West Dichtbij. De definitieve juridische tekst en verwerkersovereenkomsten worden door de samenwerkende partners in Delft vastgesteld."
          />
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#201B20]/10 shadow-xs space-y-8 text-[#404040]">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#201B20]" />
              1. Welke gegevens verzamelt de website?
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Onze website is ontworpen om zo min mogelijk persoonsgegevens te verwerken. Je kunt de hele website anoniem bezoeken, het rooster bekijken en organisaties doorzoeken zonder een account aan te maken.
            </p>
            <p className="text-sm leading-relaxed">
              Alleen wanneer je vrijwillig ons algemene contactformulier invult, verwerken wij:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-[#595959]">
              <li>Je voor- en achternaam</li>
              <li>Je e-mailadres</li>
              <li>Optioneel: je telefoonnummer (als je dat zelf opgeeft)</li>
              <li>De inhoud van je bericht of vraag</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#201B20]" />
              2. Waarvoor gebruiken we deze gegevens?
            </h2>
            <p className="text-sm leading-relaxed">
              De gegevens die je via het contactformulier instuurt, gebruiken we uitsluitend om je vraag te beantwoorden of contact met je op te nemen over jouw bericht. Wij gebruiken je gegevens nooit voor commerciële doeleinden, sturen geen nieuwsbrieven zonder toestemming en verkopen nooit gegevens aan derden.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#201B20]" />
              3. Vertrouwelijkheid tijdens inloopspreekuren
            </h2>
            <p className="text-sm leading-relaxed">
              Tijdens de fysieke inloopspreekuren aan Westerkwartier 1 in Delft spreek je rechtstreeks met medewerkers van gespecialiseerde organisaties (zoals Sociaal Raadslieden, Geldzaken voor Elkaar of Stedelink). Elk gesprek is vertrouwelijk. Wij West Dichtbij slaat geen medische, financiële of juridische dossiers op via deze website.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#201B20]" />
              4. Cookies en analyse
            </h2>
            <p className="text-sm leading-relaxed">
              Deze website maakt enkel gebruik van functionele technieken die noodzakelijk zijn om de website goed te laten werken (zoals het onthouden van filterkeuzes of weergavevoorkeuren). Wij plaatsen geen tracking cookies van advertentienetwerken.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-black text-[#201B20] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#201B20]" />
              5. Jouw rechten
            </h2>
            <p className="text-sm leading-relaxed mb-3">
              Onder de Algemene Verordening Gegevensbescherming (AVG) heb je het recht om:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-[#595959]">
              <li>Inzage te vragen in de gegevens die we van jou hebben</li>
              <li>Foutieve gegevens te laten corrigeren</li>
              <li>Verwijdering van je gegevens te verzoeken</li>
            </ul>
            <p className="text-sm leading-relaxed mt-3">
              Wil je gebruikmaken van deze rechten? Spreek onze medewerkers aan aan de ontvangstbalie aan Westerkwartier 1 in Delft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
