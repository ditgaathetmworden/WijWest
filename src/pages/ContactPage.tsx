import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Send,
  ChevronDown,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Waar kunnen we je mee helpen?',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Vul alsjeblieft minimaal je naam, e-mailadres en bericht in.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="py-8 sm:py-12 bg-white min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-4xl font-black text-[#201B20] tracking-tight">
            Contact & afspraak maken
          </h1>
          <p className="mt-1 text-sm sm:text-base text-[#595959]">
            Neem contact met ons op of kom direct langs tijdens de inloop.
          </p>
        </div>

        {/* 3 Columns Layout (matching Screen 6 mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Info (Left, 3.5 spans) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-start gap-3.5">
              <MapPin className="w-5 h-5 text-[#201B20] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-[#201B20]">
                  Adresgegevens
                </h4>
                <p className="text-xs text-[#595959] mt-0.5">
                  Westerkwartier 1<br />
                  2624 DK Delft
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#201B20] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-[#201B20]">
                  Openingstijden
                </h4>
                <p className="text-xs text-[#595959] mt-0.5">
                  Maandag t/m vrijdag<br />
                  09:00 – 17:00 uur (vrije inloop)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Phone className="w-5 h-5 text-[#201B20] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-[#201B20]">
                  Telefoon
                </h4>
                <p className="text-xs text-[#595959] mt-0.5">
                  Vrije inloop aan de balie
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Mail className="w-5 h-5 text-[#201B20] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-sm text-[#201B20]">
                  E-mail
                </h4>
                <p className="text-xs text-[#595959] mt-0.5">
                  info@wijwestdichtbij.nl
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Form (Center, 5 spans) */}
          <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-3xl border border-[#201B20]/8">
            <h3 className="font-extrabold text-sm text-[#201B20] mb-4">
              Stel je vraag of maak een afspraak
            </h3>

            {submitted ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#B8D1A8] mx-auto" />
                <h4 className="font-bold text-sm text-[#201B20]">Bericht ontvangen</h4>
                <p className="text-xs text-[#595959]">
                  Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {error && (
                  <div className="text-xs text-red-600 bg-red-50 p-2.5 rounded-xl flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Voor- en achternaam"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#201B20]/10 rounded-xl text-xs text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-1 focus:ring-[#201B20]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mailadres"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#201B20]/10 rounded-xl text-xs text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-1 focus:ring-[#201B20]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Telefoonnummer"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#201B20]/10 rounded-xl text-xs text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-1 focus:ring-[#201B20]"
                  />
                </div>

                <div className="relative">
                  <select
                    value={formData.topic}
                    onChange={e => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#201B20]/10 rounded-xl text-xs text-[#595959] appearance-none focus:outline-none focus:ring-1 focus:ring-[#201B20] cursor-pointer"
                  >
                    <option value="Waar kunnen we je mee helpen?">Waar kunnen we je mee helpen?</option>
                    <option value="Geldzaken">Geldzaken & toeslagen</option>
                    <option value="Werk en inkomen">Werk en inkomen</option>
                    <option value="Wonen">Wonen & huur</option>
                    <option value="Welzijn">Welzijn & gezondheid</option>
                    <option value="Jongeren">Jongeren (JIP)</option>
                    <option value="Algemeen">Algemene vraag</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#8C8C8C] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Je bericht"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#201B20]/10 rounded-xl text-xs text-[#201B20] placeholder:text-[#8C8C8C] focus:outline-none focus:ring-1 focus:ring-[#201B20]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#201B20] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#332B33] transition-all cursor-pointer active:scale-98 shadow-xs"
                >
                  <span>Verstuur</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Column 3: Plan je route (Right, 3.5 spans) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-extrabold text-sm text-[#201B20]">
              Plan je route
            </h3>
            <p className="text-xs text-[#595959] leading-snug">
              We zitten in het Westerkwartier, makkelijk bereikbaar met ov, fiets en auto.
            </p>

            <div className="rounded-2xl overflow-hidden aspect-16/10 border border-[#201B20]/10 shadow-2xs bg-[#FAF9F6]">
              <img
                src="/src/assets/images/wijwest_center_facade_1790460179522.jpg"
                alt="Locatie Wij West Dichtbij"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Westerkwartier+1+Delft"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 bg-white border border-[#201B20]/15 rounded-xl text-xs font-bold text-[#201B20] flex items-center justify-center gap-1.5 hover:bg-[#FAF9F6] transition-all shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-[#201B20]" />
              <span>Bekijk op de kaart &gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
