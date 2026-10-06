import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  const { navigate } = useRouter();

  return (
    <nav aria-label="Kruimelpad" className={`flex items-center text-xs text-[#595959] py-2 ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 list-none p-0 m-0">
        <li className="flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-[#201B20] transition-colors cursor-pointer"
            aria-label="Naar homepage"
          >
            <Home className="w-3.5 h-3.5 text-[#404040]" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-[#8C8C8C] shrink-0" aria-hidden="true" />
              {isLast || !item.path ? (
                <span className="font-semibold text-[#201B20] truncate max-w-[240px]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-[#201B20] transition-colors cursor-pointer truncate max-w-[200px]"
                >
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
