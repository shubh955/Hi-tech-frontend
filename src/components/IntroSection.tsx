import React from 'react';
import { QUICK_LINKS } from '../data/content';
import { ArrowRight, ArrowUpRight, Compass, CheckCircle2, Layers, Box, ShieldCheck, Send } from 'lucide-react';

interface IntroSectionProps {
  onSelectQuickLink: (targetId: string) => void;
  onOpenStoryModal: () => void;
}

// Radiators, Tanks, Galvanising, Send an enquiry
const PILLAR_ICONS = [
  Layers,
  Box,
  ShieldCheck,
  Send
];

export const IntroSection: React.FC<IntroSectionProps> = ({
  onSelectQuickLink,
  onOpenStoryModal,
}) => {
  return (
    <section id="about" className="relative py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      {/* Engineering technical grid watermark background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                HI-TECH RADIATORS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083260] tracking-tight leading-[1.15]">
              Engineering solutions for the transformer industry.
            </h2>

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              <span>Established 1989</span>
              <span>&bull;</span>
              <span>Global OEM Tier-1 Partner</span>
            </div>
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            <div className="border-l-2 border-[#159640] pl-6 lg:pl-8 py-1">
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                Hi-Tech Radiators has been building transformer radiators and tanks since 1989. From five plants near Mumbai we supply fin type radiators, corrugated, flat wall and pad mounted tanks, and in-house hot dip galvanising to transformer manufacturers and utilities in more than 55 countries.
              </p>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Every order is built to the customer&rsquo;s drawing, tested in house and packed for export.
              </p>
            </div>

            {/* CTAs and Quality Badge */}
            <div className="mt-8 flex flex-wrap items-center gap-5 pl-6 lg:pl-8">
              <button
                type="button"
                id="about-explore-story-btn"
                onClick={onOpenStoryModal}
                className="btn-gradient inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-white text-sm font-semibold tracking-wide shadow-md hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159640]"
              >
                <span>Explore Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-3.5 py-2 rounded border border-slate-200 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#159640]" />
                <span>Certified ISO 9001:2015 &amp; ISO 14001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Pillars • Interactive Navigation (Refined Modern UI with Signature 90deg Gradient & Elegant Hover) */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Compass className="w-4 h-4 text-[#159640]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                  QUICK LINKS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#083260] tracking-tight">
                What We Make
              </h3>
              {/* Signature Gradient Accent Bar */}
              <div 
                className="h-1.5 w-24 rounded-full mt-2.5 mb-2"
                style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
              />
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed">
                Go straight to our radiators, tanks and galvanising, or send us your drawing for a quote.
              </p>
            </div>
            
            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-600 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#159640] animate-pulse" />
              <span>Select card to explore</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {QUICK_LINKS.map((link, index) => {
              const IconComponent = PILLAR_ICONS[index % PILLAR_ICONS.length];

              return (
                <button
                  key={link.number}
                  type="button"
                  id={`quick-link-${link.targetId}`}
                  onClick={() => onSelectQuickLink(link.targetId)}
                  className="group relative text-left p-6 sm:p-7 rounded-xl bg-white border border-slate-200/90 hover:border-[#159640] transition-all duration-400 ease-out hover:shadow-xl hover:shadow-[#083260]/10 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159640] flex flex-col justify-between min-h-[280px] overflow-hidden cursor-pointer"
                >
                  {/* Subtle ambient gradient overlay that gently reveals on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-xl"
                    style={{ background: 'linear-gradient(135deg, rgba(8,50,96,0.03) 0%, rgba(21,150,64,0.06) 100%)' }}
                  />

                  {/* Top Permanent Gradient Accent Line that deepens and expands on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
                    <div 
                      className="h-full w-12 group-hover:w-full transition-all duration-500 ease-out"
                      style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                    />
                  </div>

                  {/* Background Watermark Digit with smooth scale animation */}
                  <span className="absolute -right-2 -bottom-3 font-mono font-black text-6xl sm:text-7xl text-slate-100 group-hover:text-slate-200/70 transition-all duration-400 ease-out select-none pointer-events-none group-hover:scale-105">
                    {link.number}
                  </span>

                  {/* Top Row: Gradient Icon Badge & Pillar Tag */}
                  <div className="flex items-center justify-between w-full mb-6 relative z-10">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                      style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-xs font-bold text-[#083260] group-hover:text-[#159640] transition-colors duration-300">
                        {link.number}
                      </span>
                      <span className="text-[11px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60 group-hover:border-[#159640]/40 group-hover:text-[#083260] transition-colors duration-300">
                        {link.tag}
                      </span>
                    </div>
                  </div>

                  {/* Middle Content: Title & Rich Description */}
                  <div className="relative z-10 mb-6">
                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#083260] tracking-tight leading-snug mb-2 group-hover:text-[#083260] transition-colors">
                      {link.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {link.description}
                    </p>
                  </div>

                  {/* Bottom Row: Signature Gradient Illuminating CTA Button */}
                  <div className="relative z-10 w-full pt-4 border-t border-slate-100">
                    <div className="relative w-full rounded-lg overflow-hidden p-[1.5px]">
                      {/* Gradient backdrop that smoothly illuminates on card hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                        style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                      />
                      <div className="relative px-3.5 py-2.5 rounded-lg bg-slate-50 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-between text-xs font-bold text-[#083260] group-hover:text-white">
                        <span className="uppercase tracking-wider">
                          {link.targetId === 'enquiry' ? 'Send Enquiry' : `View ${link.title}`}
                        </span>
                        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white group-hover:bg-white/20 text-[#083260] group-hover:text-white transition-all shadow-xs group-hover:translate-x-1">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

