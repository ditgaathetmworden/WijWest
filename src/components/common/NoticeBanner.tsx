import React from 'react';
import { Info, AlertTriangle, CheckCircle, ShieldCheck } from 'lucide-react';

interface NoticeBannerProps {
  type?: 'info' | 'warning' | 'success' | 'rooster';
  title?: string;
  message: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
}

export const NoticeBanner: React.FC<NoticeBannerProps> = ({
  type = 'info',
  title,
  message,
  actionText,
  onAction,
  className = ''
}) => {
  const styles = {
    info: {
      bg: 'bg-[#A3D6F2]/15 border-[#A3D6F2]',
      icon: <Info className="w-5 h-5 text-[#201B20] shrink-0" />,
      text: 'text-[#201B20]'
    },
    warning: {
      bg: 'bg-[#EAB176]/20 border-[#EAB176]',
      icon: <AlertTriangle className="w-5 h-5 text-[#201B20] shrink-0" />,
      text: 'text-[#201B20]'
    },
    success: {
      bg: 'bg-[#B8D1A8]/20 border-[#B8D1A8]',
      icon: <CheckCircle className="w-5 h-5 text-[#201B20] shrink-0" />,
      text: 'text-[#201B20]'
    },
    rooster: {
      bg: 'bg-[#F1EA90]/25 border-[#F1EA90]',
      icon: <ShieldCheck className="w-5 h-5 text-[#201B20] shrink-0" />,
      text: 'text-[#201B20]'
    }
  };

  const current = styles[type];

  return (
    <div
      role="status"
      className={`rounded-2xl border p-4 sm:p-5 flex items-start gap-3.5 transition-all ${current.bg} ${className}`}
    >
      {current.icon}
      <div className="flex-1 text-sm leading-relaxed">
        {title && <h3 className="font-bold text-[#201B20] mb-0.5">{title}</h3>}
        <p className={`${current.text}`}>{message}</p>
        {actionText && onAction && (
          <button
            onClick={onAction}
            className="mt-2 text-xs font-bold text-[#201B20] underline underline-offset-4 hover:opacity-80 cursor-pointer"
          >
            {actionText} →
          </button>
        )}
      </div>
    </div>
  );
};
