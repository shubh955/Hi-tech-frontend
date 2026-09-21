import React, { useState } from 'react';
import { MANUFACTURING_FACILITIES } from '../data/content';
import { Factory, ShieldCheck, CheckCircle2, ArrowRight, MapPin, Gauge, ChevronRight } from 'lucide-react';

interface ManufacturingSectionProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const ManufacturingSection: React.FC<ManufacturingSectionProps> = ({ onOpenEnquiry }) => {
  const [hoveredUnitId, setHoveredUnitId] = useState<string>('mfg-unit-1');

  return (
    <section id="manufacturing" className="py-16 sm:py-20 bg-[#061B33] text-white relative overflow-hidden border-b border-slate-800">
      {/* Subtle architectural grid pattern background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Compact Header fitting cleanly into single-screen viewport */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                MANUFACTURING &bull; INFRASTRUCTURE &amp; CAPABILITIES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2.5">
              Four Specialized Production Facilities
            </h2>

            {/* Signature Gradient Accent Bar */}
            <div 
              className="h-1.5 w-24 rounded-full mb-3"
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
            />

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Spanning four interconnected plants across Maharashtra with 67,200+ MT combined annual throughput &mdash; featuring automated CNC roll forming, robotic seam welding, closed-loop hot-dip galvanising, and certified NDT metrology laboratories.
            </p>
          </div>

          {/* High-level Facility Summary Badges */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2">
              <Factory className="w-3.5 h-3.5 text-[#159640]" />
              <span>4 Certified Plants</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2">
              <Gauge className="w-3.5 h-3.5 text-[#159640]" />
              <span>67,200 MT Combined Capacity</span>
            </div>
            <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#159640]" />
              <span>Navi Mumbai &amp; Raigad</span>
            </div>
          </div>
        </div>

        {/* Interactive 4-Column Expanding Accordion / Flex Gallery (Smooth 60fps, Zero-jerk, Zero-glitch) */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] items-stretch">
          {MANUFACTURING_FACILITIES.map((facility) => {
            const isExpanded = hoveredUnitId === facility.id;

            return (
              <div
                key={facility.id}
                id={`mfg-card-${facility.id}`}
                onMouseEnter={() => setHoveredUnitId(facility.id)}
                onClick={() => setHoveredUnitId(facility.id)}
                className={`relative rounded-xl overflow-hidden border cursor-pointer flex flex-col justify-between transition-[flex,height,border-color,background-color,box-shadow] duration-700 ease-out ${
                  isExpanded
                    ? 'lg:flex-[3.2] min-h-[460px] lg:min-h-0 border-[#159640] shadow-2xl bg-[#082245]'
                    : 'lg:flex-1 min-h-[84px] lg:min-h-0 border-white/15 hover:border-white/30 bg-[#081B34]'
                }`}
              >
                {/* Background Plant Photography with slow smooth scale animation */}
                <img
                  src={facility.image}
                  alt={facility.title}
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                    isExpanded ? 'scale-105 opacity-35' : 'scale-100 opacity-20 group-hover:opacity-30'
                  }`}
                  loading="lazy"
                />

                {/* Dark Multi-layer Gradient Overlay for Maximum Photographic Legibility */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#06182e] via-[#082245]/85 to-[#06182e]/60 transition-opacity duration-700 ${
                    isExpanded ? 'opacity-95' : 'opacity-85'
                  }`}
                />

                {/* Top Bar: Unit Number & Location Tag */}
                <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between pointer-events-none select-none">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded transition-colors duration-500 ${
                        isExpanded
                          ? 'bg-[#159640] text-white shadow-xs'
                          : 'bg-white/10 text-white/90 border border-white/15'
                      }`}
                    >
                      UNIT {facility.unitNumber}
                    </span>

                    {/* Smoothly cross-faded location badge */}
                    <span
                      className={`hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-slate-300 bg-white/10 px-2 py-0.5 rounded border border-white/10 transition-opacity duration-500 ${
                        isExpanded ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <MapPin className="w-3 h-3 text-[#159640]" />
                      {facility.location}
                    </span>
                  </div>

                  {/* Unit Number Architectural Watermark */}
                  <span
                    className={`font-mono font-black text-3xl sm:text-4xl transition-colors duration-500 ${
                      isExpanded ? 'text-white/30' : 'text-white/15'
                    }`}
                  >
                    {facility.unitNumber}
                  </span>
                </div>

                {/* Bottom Content Area: Fixed-width inner containers prevent text-wrapping jitter */}
                <div className="relative z-10 p-5 sm:p-6 w-full mt-auto overflow-hidden">
                  {/* Collapsed State: Displayed when card is in resting 1x flex mode */}
                  <div
                    className={`transition-all duration-400 ease-out ${
                      isExpanded
                        ? 'opacity-0 pointer-events-none -translate-y-2 absolute inset-x-5 bottom-5'
                        : 'opacity-100 translate-y-0 relative'
                    }`}
                  >
                    <div className="w-8 h-1 bg-[#159640] rounded-full mb-2" />
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug truncate lg:whitespace-normal">
                      {facility.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-mono mt-1 flex items-center gap-1.5 truncate">
                      <Gauge className="w-3 h-3 text-[#159640] shrink-0" />
                      <span>{facility.capacity}</span>
                    </p>
                    <div className="mt-2.5 hidden lg:flex items-center gap-1 text-xs text-[#159640] font-medium">
                      <span>View details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>

                  {/* Expanded State: Fixed inner width (w-[480px] sm:w-[540px] shrink-0) completely locks text width, preventing any re-wrap or jerk as card expands */}
                  <div
                    className={`w-[480px] sm:w-[540px] max-w-full shrink-0 transition-all duration-600 ease-out ${
                      isExpanded
                        ? 'opacity-100 translate-y-0 relative delay-200'
                        : 'opacity-0 pointer-events-none translate-y-3 absolute inset-x-5 bottom-5'
                    }`}
                  >
                    <div className="w-12 h-1 bg-[#159640] rounded-full mb-2.5" />

                    <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight mb-1">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-[#159640] font-medium mb-2.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#159640] animate-pulse shrink-0" />
                      <span className="truncate">{facility.focus} &bull; {facility.capacity}</span>
                    </p>

                    <p className="text-xs text-slate-200 leading-relaxed mb-3 font-normal line-clamp-2 sm:line-clamp-3">
                      {facility.description}
                    </p>

                    {/* Tooling & Machinery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3.5">
                      {facility.keyEquipment.slice(0, 4).map((eq, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-[11px] text-slate-200 bg-white/5 border border-white/10 rounded px-2 py-1.5"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#159640] shrink-0" />
                          <span className="truncate leading-tight">{eq}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer: Standards Badges & Request Plant Audit Action */}
                    <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2.5 border-t border-white/15">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] text-slate-400 font-mono">Standards:</span>
                        {facility.certifications.map((cert) => (
                          <span
                            key={cert}
                            className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-200 border border-white/15"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEnquiry(`Technical Audit / Facility Visit: ${facility.title}`);
                        }}
                        style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:brightness-110 hover:shadow-lg focus:outline-none"
                      >
                        <span>Request Audit</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Left Active Brand Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-transform duration-700 origin-bottom ${
                    isExpanded ? 'scale-y-100 bg-[#159640]' : 'scale-y-0'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
