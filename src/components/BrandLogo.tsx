import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark'; // 'light' is for white/light backgrounds, 'dark' is for navy/dark backgrounds
  size?: 'sm' | 'md' | 'lg';
  showCompanySubline?: boolean;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'light',
  size = 'md',
  showCompanySubline = true,
  className = ''
}) => {
  const isDark = variant === 'dark';
  
  // Colors per Brand Guidebook (p. 09)
  // Navy: #083260, Sustainable Green: #159640
  const navyColor = isDark ? '#FFFFFF' : '#083260';
  const greenColor = '#159640';
  const textColor = isDark ? '#FFFFFF' : '#083260';
  const subtextColor = isDark ? '#A0AEC0' : '#4A5568';

  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;

  return (
    <div className={`flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center gap-3">
        {/* SVG Icon of the HTT radiator slats glyph */}
        <svg
          width={72 * scale}
          height={38 * scale}
          viewBox="0 0 144 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
          aria-label="HTT Innovations Logo Mark"
        >
          {/* Letter H (Navy or White) */}
          {/* Left Vertical Slat Group (3 bars) */}
          <rect x="0" y="0" width="4" height="50" rx="1" fill={navyColor} />
          <rect x="8" y="0" width="4" height="50" rx="1" fill={navyColor} />
          <rect x="16" y="0" width="4" height="50" rx="1" fill={navyColor} />
          {/* Horizontal crossbar (3 bars) */}
          <rect x="20" y="20" width="16" height="3" rx="0.75" fill={navyColor} />
          <rect x="20" y="25" width="16" height="3" rx="0.75" fill={navyColor} />
          <rect x="20" y="30" width="16" height="3" rx="0.75" fill={navyColor} />
          {/* Right Vertical Slat Group (3 bars) */}
          <rect x="36" y="0" width="4" height="50" rx="1" fill={navyColor} />
          <rect x="44" y="0" width="4" height="50" rx="1" fill={navyColor} />
          <rect x="52" y="0" width="4" height="50" rx="1" fill={navyColor} />

          {/* First Letter T (Navy or White) */}
          {/* Top Horizontal Bars (3 bars) */}
          <rect x="62" y="0" width="38" height="3.5" rx="0.75" fill={navyColor} />
          <rect x="62" y="5.5" width="38" height="3.5" rx="0.75" fill={navyColor} />
          <rect x="62" y="11" width="38" height="3.5" rx="0.75" fill={navyColor} />
          {/* Vertical Stem Bars (3 bars) */}
          <rect x="74" y="16" width="3.5" height="34" rx="0.75" fill={navyColor} />
          <rect x="79.5" y="16" width="3.5" height="34" rx="0.75" fill={navyColor} />
          <rect x="85" y="16" width="3.5" height="34" rx="0.75" fill={navyColor} />

          {/* Second Letter T (Sustainable Green #159640) */}
          {/* Top Horizontal Bars (3 bars) */}
          <rect x="104" y="0" width="38" height="3.5" rx="0.75" fill={greenColor} />
          <rect x="104" y="5.5" width="38" height="3.5" rx="0.75" fill={greenColor} />
          <rect x="104" y="11" width="38" height="3.5" rx="0.75" fill={greenColor} />
          {/* Vertical Stem Bars (3 bars) */}
          <rect x="116" y="16" width="3.5" height="34" rx="0.75" fill={greenColor} />
          <rect x="121.5" y="16" width="3.5" height="34" rx="0.75" fill={greenColor} />
          <rect x="127" y="16" width="3.5" height="34" rx="0.75" fill={greenColor} />

          {/* INNOVATIONS text bar in SVG for precision */}
          <text
            x="0"
            y="70"
            fill={textColor}
            fontFamily="'Raleway', sans-serif"
            fontWeight="800"
            fontSize="18"
            letterSpacing="2.5"
          >
            INNOVATIONS
          </text>
        </svg>

        {/* Brand Name Divider & Company Name */}
        <div className="flex flex-col border-l border-current/20 pl-3">
          <span 
            className="font-bold tracking-tight text-sm uppercase leading-tight"
            style={{ color: textColor }}
          >
            HI-TECH RADIATORS
          </span>
          <span 
            className="text-[10px] tracking-widest uppercase font-semibold text-[#159640]"
          >
            PVT. LTD.
          </span>
        </div>
      </div>

      {showCompanySubline && (
        <span
          className="text-[9px] tracking-wide mt-1 pl-0.5"
          style={{ color: subtextColor }}
        >
          A Hitech Radiators Pvt Ltd Company &bull; Est. 1989
        </span>
      )}
    </div>
  );
};
