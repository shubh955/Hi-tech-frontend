import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../data/content';
import { Handshake, CheckCircle2 } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list to achieve continuous seamless loop
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-20 bg-[#F8FAFC] border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-2 h-2 bg-[#159640] rounded-xs" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
            GLOBAL OEM PARTNERSHIPS
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083260] tracking-tight mb-3">
          Trusted by Industry Leaders
        </h2>

        {/* Supporting Line */}
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-normal">
          Building long-term partnerships across the global transformer industry.
        </p>
      </div>

      {/* Infinite Logo Carousel Strip */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Edge Gradient Mask for Smooth Fade In/Out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div
          className={`flex items-center gap-12 sm:gap-16 w-max transition-transform ${
            isPaused ? 'cursor-pointer' : ''
          }`}
          style={{
            animation: 'marquee 30s linear infinite',
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="group flex flex-col items-center justify-center p-6 rounded bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#159640]/50 transition-all duration-300 w-56 h-28 shrink-0 select-none"
            >
              {/* Monochromatic Logo Representation with Brand Color on Hover */}
              <div className="flex items-center justify-center text-center">
                <span className="font-extrabold text-2xl tracking-tighter text-slate-400 group-hover:text-[#083260] transition-colors duration-300 font-mono">
                  {client.name}
                </span>
              </div>

              {/* Sub-division descriptor */}
              <span className="text-[10px] text-slate-400 group-hover:text-[#159640] transition-colors duration-300 tracking-wider uppercase text-center mt-2 font-medium line-clamp-1">
                {client.division}
              </span>

              {/* Verified OEM indicator */}
              <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[9px] text-slate-500 font-mono">
                <CheckCircle2 className="w-3 h-3 text-[#159640]" />
                <span>Tier-1 Approved</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Supply Certification Footnote */}
      <div className="max-w-7xl mx-auto px-4 mt-8 flex items-center justify-center gap-6 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-1.5">
          <Handshake className="w-3.5 h-3.5 text-[#159640]" />
          Confidential OEM Long-Term Supply Agreements Active
        </span>
        <span className="hidden sm:inline">&bull;</span>
        <span className="hidden sm:inline">Approved Vendor Lists Across 4 Continents</span>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};
