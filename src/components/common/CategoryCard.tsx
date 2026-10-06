import React from 'react';
import { Category } from '../../types';
import { useRouter } from '../../context/RouterContext';
import {
  Coins,
  Briefcase,
  Home,
  HeartHandshake,
  Sparkles,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  compact?: boolean;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, compact = false }) => {
  const { navigate } = useRouter();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Coins':
        return <Coins className="w-6 h-6 text-[#201B20]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#201B20]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#201B20]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#201B20]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#201B20]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#201B20]" />;
      default:
        return <Coins className="w-6 h-6 text-[#201B20]" />;
    }
  };

  return (
    <div
      onClick={() => navigate(`/hulp/${category.slug}`)}
      className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-[#201B20]/10 hover:border-[#201B20]/30 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigate(`/hulp/${category.slug}`);
        }
      }}
      aria-label={`Bekijk hulp bij ${category.name}`}
    >
      <div>
        {/* Icon with soft brand color background */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
          style={{ backgroundColor: category.color }}
        >
          {getIcon(category.iconName)}
        </div>

        <h3 className="text-lg font-extrabold text-[#201B20] tracking-tight group-hover:text-[#404040] transition-colors">
          {category.name}
        </h3>

        <p className="mt-1 text-sm text-[#595959] leading-relaxed line-clamp-2">
          {category.shortDescription}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-[#201B20]/5 flex items-center justify-between text-xs font-bold text-[#201B20]">
        <span>Bekijk mogelijkheden</span>
        <ChevronRight className="w-4 h-4 text-[#8C8C8C] group-hover:text-[#201B20] group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  );
};
