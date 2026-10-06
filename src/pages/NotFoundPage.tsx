import React from 'react';
import { useRouter } from '../context/RouterContext';
import { Button } from '../components/common/Button';
import { Home, Calendar, HelpCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <span className="text-5xl sm:text-7xl font-black text-[#F1EA90] bg-[#201B20] px-4 py-1 rounded-2xl inline-block mb-6 shadow-sm">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-black text-[#201B20] tracking-tight mb-3">
          Pagina niet gevonden
        </h1>

        <p className="text-sm text-[#595959] leading-relaxed mb-8">
          Oeps! De pagina die je zoekt bestaat niet (meer) of is verplaatst. We helpen je graag weer op weg:
        </p>

        <div className="flex flex-col gap-2.5">
          <Button
            variant="primary"
            fullWidth
            icon={<Home className="w-4 h-4" />}
            onClick={() => navigate('/')}
          >
            Naar de startpagina
          </Button>
          <Button
            variant="secondary"
            fullWidth
            icon={<Calendar className="w-4 h-4" />}
            onClick={() => navigate('/rooster')}
          >
            Bekijk het rooster van spreekuren
          </Button>
          <Button
            variant="ghost"
            fullWidth
            icon={<ArrowLeft className="w-4 h-4" />}
            onClick={() => window.history.back()}
          >
            Vorige pagina
          </Button>
        </div>
      </div>
    </div>
  );
};
