import React, { useState } from 'react';
import { CLIENT_LOGOS } from '../data/content';
import { Handshake } from 'lucide-react';

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
          className={`flex items-center gap-8 sm:gap-12 w-max transition-transform ${
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
              aria-hidden={index >= CLIENT_LOGOS.length}
              className="group flex items-center justify-center p-5 rounded-[10px] bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#159640]/50 transition-all duration-300 w-44 h-22 sm:w-48 sm:h-24 shrink-0 select-none overflow-hidden"
            >
              {/* Monochrome logo that returns to full brand colour on hover */}
              <img
                src={client.logo}
                alt={index < CLIENT_LOGOS.length ? `${client.name} logo` : ''}
                className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                style={{ transform: `scale(${client.scale ?? 1})` }}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
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
