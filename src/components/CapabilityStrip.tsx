import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITY_STATS, SECONDARY_PALETTE } from '../data/content';
import { Factory, Globe2, Award, Calendar, Users, Box, Cpu, ShieldCheck } from 'lucide-react';

const STAT_ICONS = [Calendar, Globe2, Users, Box, Cpu, ShieldCheck];

export const CapabilityStrip: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Counter state
  const [counts, setCounts] = useState<number[]>(CAPABILITY_STATS.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Animate counter upwards once triggered
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600; // ms
    const frameRate = 30; // ms
    const totalFrames = duration / frameRate;
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = Math.min(currentFrame / totalFrames, 1);
      // easeOutExpo formula
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts(
        CAPABILITY_STATS.map((stat) => Math.round(stat.value * ease))
      );

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      id="capability"
      ref={containerRef}
      className="relative py-24 bg-[#083260] text-white overflow-hidden border-y border-white/10"
    >
      {/* Signature Brand Top Accent Line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1.5 z-20"
        style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
      />

      {/* Background blueprint technical grid */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      
      {/* Subtle secondary ambient color accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#54B273]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#DAA520]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 mb-12 border-b border-white/15 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#159640]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                MANUFACTURING &amp; ENGINEERING SCALE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Proven Capacity. Global Footprint.
            </h2>
            {/* Signature Gradient Accent Bar */}
            <div 
              className="h-1.5 w-24 rounded-full mt-3 mb-2"
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
            />
            <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">
              Continuous infrastructure investments delivering unmatched thermal manufacturing volume and structural integrity for critical transmission networks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <Factory className="w-4 h-4 text-[#54B273]" />
              <span>Automated Lines</span>
            </span>
            <span className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10">
              <Globe2 className="w-4 h-4 text-[#DAA520]" />
              <span>55+ Export Nations</span>
            </span>
          </div>
        </div>

        {/* Robust 3-Column Responsive Grid (No Cramping or Text Overflow) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CAPABILITY_STATS.map((stat, idx) => {
            const countValue = counts[idx];
            const Icon = STAT_ICONS[idx % STAT_ICONS.length];

            return (
              <div
                key={stat.label}
                id={`capability-card-${idx + 1}`}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded bg-white/[0.04] border border-white/10 hover:border-white/25 transition-all duration-300 hover:bg-white/[0.08] hover:-translate-y-1 shadow-lg"
              >
                {/* Top: Card Index, Icon, and Color Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-8 h-8 rounded flex items-center justify-center border"
                      style={{ 
                        backgroundColor: `${stat.colorHex}15`,
                        borderColor: `${stat.colorHex}40`,
                        color: stat.colorHex
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      METRIC 0{idx + 1}
                    </span>
                  </div>

                  <span
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                    style={{
                      color: stat.colorHex,
                      borderColor: `${stat.colorHex}50`,
                      backgroundColor: `${stat.colorHex}15`
                    }}
                  >
                    {stat.colorName}
                  </span>
                </div>

                {/* Metric Value Display with Protected Non-Overflow Layout */}
                <div className="my-2">
                  <div className="flex items-baseline flex-wrap gap-x-2 gap-y-1">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono whitespace-nowrap">
                      {countValue.toLocaleString()}
                    </span>
                    <span 
                      className="text-xl sm:text-2xl font-bold font-mono tracking-tight"
                      style={{ color: stat.colorHex }}
                    >
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Dynamic Color Accent Bar */}
                  <div className="w-full h-[2px] bg-white/10 my-4 rounded-full overflow-hidden">
                    <div 
                      className="h-full w-12 group-hover:w-full transition-all duration-500 rounded-full"
                      style={{ backgroundColor: stat.colorHex }}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-wide leading-snug">
                    {stat.label}
                  </h3>
                </div>

                {/* Sublabel / Context */}
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {stat.sublabel}
                </p>

                {/* Subtle side accent highlight on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: stat.colorHex }}
                />
              </div>
            );
          })}
        </div>

        {/* Secondary Palette Environmental & Sustainability Ethos Bar */}
        <div className="mt-14 p-5 rounded bg-white/[0.03] border border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: SECONDARY_PALETTE.goldenrod.hex }} title="Goldenrod: Clarity & Purity" />
              <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: SECONDARY_PALETTE.mediumSeaGreen.hex }} title="Medium Sea Green: Harmony & Balance" />
              <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: SECONDARY_PALETTE.dustyRose.hex }} title="Dusty Rose: Vibrancy & Creativity" />
              <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: SECONDARY_PALETTE.sage.hex }} title="Sage: Warmth & Vitality" />
            </div>
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">HTT Innovations Sustainable Color System:</span>{' '}
              <span className="text-[#DAA520] font-medium">Goldenrod</span> (Clarity) &bull;{' '}
              <span className="text-[#54B273] font-medium">Sea Green</span> (Harmony) &bull;{' '}
              <span className="text-[#A26161] font-medium">Dusty Rose</span> (Vibrancy) &bull;{' '}
              <span className="text-[#C2B280] font-medium">Sage</span> (Vitality)
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
            <Award className="w-4 h-4 text-[#54B273]" />
            <span>ISO 9001:2015 &bull; ISO 14001:2015 &bull; ISO 45001:2018</span>
          </div>
        </div>
      </div>
    </section>
  );
};
