import React from 'react';
import { useRouter } from '../../context/RouterContext';
import { Button } from '../common/Button';
import { DoorOpen, MessageCircleHeart, Users2, Calendar } from 'lucide-react';

export const WalkInStepsSection: React.FC = () => {
  const { navigate } = useRouter();

  const steps = [
    {
      step: '01',
      title: 'Loop gewoon binnen',
      desc: 'Je hebt geen afspraak nodig en hoeft niet vooraf te bellen. Onze deuren aan Westerkwartier 1 staan open van maandag t/m vrijdag.',
      icon: <DoorOpen className="w-6 h-6 text-[#201B20]" />,
      actionText: 'Bekijk locatie & route',
      actionPath: '/contact',
      color: '#F1EA90'
    },
    {
      step: '02',
      title: 'We luisteren naar je vraag',
      desc: 'Aan de ontvangstbalie vertel je wat er speelt. Wij denken met je mee en zorgen dat je direct aanschuift bij de juiste organisatie.',
      icon: <MessageCircleHeart className="w-6 h-6 text-[#201B20]" />,
      actionText: 'Bekijk alle hulpgebieden',
      actionPath: '/hulp',
      color: '#D99F9D'
    },
    {
      step: '03',
      title: 'Samen sterker verder',
      desc: 'Verschillende organisaties werken onder één dak samen. Zo krijg je sneller duidelijkheid en praktische hulp bij wetten, brieven of wonen.',
      icon: <Users2 className="w-6 h-6 text-[#201B20]" />,
      actionText: 'Bekijk het weekrooster',
      actionPath: '/rooster',
      color: '#A3D6F2'
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#595959]">
            Toegankelijk en dichtbij
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#201B20] mt-1 tracking-tight">
            Hulp dichtbij in jouw wijk
          </h2>
          <p className="mt-3 text-base text-[#595959] leading-relaxed">
            Loop gerust binnen of bekijk het rooster. We helpen je stap voor stap op weg.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-7 border border-[#201B20]/10 hover:border-[#201B20]/25 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border border-[#201B20]/10 shadow-xs"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs font-black tracking-widest text-[#8C8C8C]">
                    STAP {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#201B20] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#595959] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <Button
                variant="secondary"
                size="sm"
                fullWidth
                onClick={() => navigate(item.actionPath)}
              >
                {item.actionText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
