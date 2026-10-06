import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  lightMode?: boolean; // For dark background (footer)
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  lightMode = false
}) => {
  // Height and scale adjustments
  const heights = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-16',
    hero: 'h-24'
  };

  const textColor = lightMode ? '#FFFFFF' : '#201B20';
  const subtitleColor = lightMode ? '#E5E5E5' : '#201B20';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`} aria-label="Wij West Dichtbij - Gelijke kansen in Delft">
      <svg
        viewBox="0 0 320 150"
        className={`${heights[size]} w-auto transition-transform duration-200 hover:scale-[1.02]`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Wij West Dichtbij - Gelijke kansen in Delft</title>

        {/* --- GEOMETRIC COLOR BLOCKS FOR 'WIJ WEST' --- */}
        {/* W - Yellow Block */}
        <polygon points="12,18 52,14 54,62 14,64" fill="#F1EA90" />
        {/* I - Salmon Pink Block */}
        <polygon points="56,19 78,17 78,63 56,63" fill="#D99F9D" />
        {/* J - Lavender Block */}
        <polygon points="80,10 108,10 106,62 82,62" fill="#B4ADD6" />

        {/* Gap between WIJ and WEST */}

        {/* W - Rose Pink Block */}
        <polygon points="118,12 166,13 162,63 124,63" fill="#D990B5" />
        {/* E - Light Blue Block */}
        <polygon points="168,14 206,14 206,63 166,63" fill="#A3D6F2" />
        {/* S - Sage Green Block */}
        <polygon points="208,15 244,15 244,63 208,63" fill="#B8D1A8" />
        {/* T - Warm Orange Block */}
        <polygon points="246,16 284,16 284,63 246,63" fill="#EAB176" />

        {/* --- BLACK LETTER STROKES ON TOP OF COLOR BLOCKS --- */}
        {/* W in WIJ */}
        <path
          d="M 16 26 L 25 54 L 32 36 L 39 54 L 48 26"
          stroke="#201B20"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* I in WIJ */}
        <line
          x1="67"
          y1="25"
          x2="67"
          y2="55"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* J in WIJ */}
        <path
          d="M 97 22 L 97 48 C 97 56 89 57 84 54"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* W in WEST */}
        <path
          d="M 124 23 L 133 55 L 142 34 L 151 55 L 160 23"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* E in WEST */}
        <path
          d="M 172 23 L 202 23 M 172 38 L 196 38 M 172 54 L 202 54"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* S in WEST */}
        <path
          d="M 238 27 C 230 21 216 24 216 32 C 216 43 240 40 240 48 C 240 55 228 58 218 53"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* T in WEST */}
        <path
          d="M 248 24 L 282 24 M 265 24 L 265 55"
          stroke="#201B20"
          strokeWidth="6.5"
          strokeLinecap="round"
        />

        {/* --- SUBTITLE: GELIJKE KANSEN IN DELFT --- */}
        {showSubtitle && (
          <text
            x="147"
            y="76"
            textAnchor="middle"
            fontFamily="'Nunito', sans-serif"
            fontSize="10.5"
            fontWeight="800"
            letterSpacing="2.2"
            fill={subtitleColor}
          >
            GELIJKE KANSEN IN DELFT
          </text>
        )}

        {/* --- DICHTBIJ (Bold rounded friendly font) --- */}
        <text
          x="147"
          y="132"
          textAnchor="middle"
          fontFamily="'Nunito', 'Poppins', sans-serif"
          fontSize="48"
          fontWeight="900"
          letterSpacing="-0.5"
          fill={textColor}
        >
          Dichtbij
        </text>
      </svg>
    </div>
  );
};
