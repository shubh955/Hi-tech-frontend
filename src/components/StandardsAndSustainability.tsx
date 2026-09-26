import React from 'react';
import { Leaf, ArrowRight, Globe, FileText, Zap } from 'lucide-react';

interface StandardsAndSustainabilityProps {
  onOpenEnquiry: (topic?: string) => void;
}

interface EffortCard {
  id: string;
  number: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imageAlt: string;
  themeColor: string;
  hoverGradient: string;
  badgeBg: string;
  badgeTextColor: string;
  link: string;
}

export const StandardsAndSustainability: React.FC<StandardsAndSustainabilityProps> = ({ onOpenEnquiry }) => {
  // 3 Primary Initiatives displayed in the overview
  const EFFORTS: EffortCard[] = [
    {
      id: 'carbon-footprint',
      number: '01',
      tag: 'CARBON NEUTRALITY',
      title: 'Carbon Footprint Reduction',
      desc: 'Targeted decarbonization across manufacturing processes, integrating renewable energy and reducing embedded carbon across every manufactured transformer tank and radiator.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Clean atmospheric environment and blue sky representing carbon reduction',
      themeColor: '#083260',
      hoverGradient: 'from-[#083260] via-[#0c4179] to-[#125399]',
      badgeBg: '#083260',
      badgeTextColor: '#FFFFFF',
      link: '/sustainability/carbon-footprint'
    },
    {
      id: 'sustainability-reporting',
      number: '02',
      tag: 'ESG TRANSPARENCY',
      title: 'Sustainability Reporting',
      desc: 'Rigorous ESG documentation, Scope 1 & 2 carbon tracking, and verified environmental metrics meeting ISO 14001 criteria for international utility tenders.',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Sustainability reporting and ESG compliance analysis documents',
      themeColor: '#159640',
      hoverGradient: 'from-[#0c4e2c] via-[#10693a] to-[#159640]',
      badgeBg: '#159640',
      badgeTextColor: '#FFFFFF',
      link: '/sustainability/reporting'
    },
    {
      id: 'energy-efficiency',
      number: '03',
      tag: 'CLEAN POWER',
      title: 'Energy Efficiency',
      desc: 'Rooftop solar arrays and automated CNC roll-forming lines engineered to maximize thermal cooling efficiency while reducing baseline grid power draw.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'High-efficiency industrial rooftop solar panel installations',
      themeColor: '#2563eb',
      hoverGradient: 'from-[#1e3a8a] via-[#1d4ed8] to-[#2563eb]',
      badgeBg: '#2563eb',
      badgeTextColor: '#FFFFFF',
      link: '/sustainability/energy-efficiency'
    }
  ];

  return (
    <div className="bg-white">
      {/* Sustainability Section */}
      <section id="sustainability" className="py-24 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] relative overflow-hidden">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="flex items-center gap-2 mb-3">
              <Leaf className="w-4 h-4 text-[#159640]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#159640]">
                SUSTAINABILITY &bull; ENVIRONMENTAL STEWARDSHIP
              </span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#083260] tracking-tight uppercase leading-tight mb-4">
              OUR EFFORTS
            </h2>

            {/* Signature Brand Gradient Accent Bar */}
            <div 
              className="h-1.5 w-24 rounded-full mb-5"
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
            />

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              At Hi-Tech Radiators, our commitment to technological excellence goes hand-in-hand with environmental consciousness. From renewable energy adoption and circular metallurgy to zero-discharge waste reduction, our initiatives create sustainable value across the global power grid.
            </p>
          </div>

          {/* 3 Core Initiatives Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 items-stretch">
            {EFFORTS.map((effort) => {
              const Icon = effort.icon;

              return (
                <div
                  key={effort.id}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Dynamic Color Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${effort.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none`}
                  />

                  {/* Top Image Banner */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-100 z-10 shrink-0">
                    <img
                      src={effort.image}
                      alt={effort.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Resilient fallback in case of strict network blockers
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop';
                      }}
                    />
                    {/* Dark gradient overlay for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-40" />

                    {/* Number Chip in Top Right of Image */}
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md border border-white/20 text-white font-mono text-xs font-bold">
                      {effort.number}
                    </div>
                  </div>

                  {/* Floating Themed Icon Badge */}
                  <div className="relative px-6 z-20">
                    <div
                      className="-mt-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border-2 border-white"
                      style={{
                        backgroundColor: effort.badgeBg,
                        color: effort.badgeTextColor
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 pt-3 relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Eyebrow / Tag */}
                      <span className="text-[11px] font-mono font-bold tracking-wider block mb-2 transition-colors duration-300 text-slate-500 group-hover:text-white/80">
                        {effort.tag}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold leading-snug mb-3 transition-colors duration-300 text-[#083260] group-hover:text-white">
                        {effort.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed transition-colors duration-300 text-slate-600 group-hover:text-slate-100 font-normal">
                        {effort.desc}
                      </p>
                    </div>

                    {/* Bottom Link: LEARN MORE with Arrow */}
                    <div className="pt-6 mt-5 border-t border-slate-100 group-hover:border-white/20 flex items-center justify-between transition-colors duration-300">
                      <a
                        href="#"
                        className="text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors duration-300 text-[#083260] group-hover:text-white"
                      >
                        {/* {effort.link} */}
                        <span>LEARN MORE</span>
                      </a>

                      <a
                        href="#"
                        aria-label={`Learn more about ${effort.title}`}
                        className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-100 text-slate-600 group-hover:bg-white group-hover:text-[#083260] group-hover:shadow-md"
                      >
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button with Direct Page Redirect Link */}
          <div className="flex items-center justify-center mb-16">
            <a
              id="view-more-sustainability-btn"
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white hover:bg-[#083260] text-[#083260] hover:text-white border-2 border-[#083260] shadow-sm hover:shadow-xl transition-all duration-300 font-bold text-xs uppercase tracking-wider cursor-pointer active:scale-95"
            >
              <span>VIEW MORE INITIATIVES</span>
              <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-white/20 text-[#083260] group-hover:text-white flex items-center justify-center transition-colors duration-300">
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>

          {/* Environmental Action Callout with Signature Gradient */}
          <div 
            className="p-8 sm:p-10 rounded-2xl text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-600/30"
            style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
          >
            <div className="relative z-10 max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-[#54B273]" />
                <span className="font-mono text-xs text-white/90 uppercase font-bold tracking-widest">
                  Circular Manufacturing Ecosystem
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Ready to review our technical ESG and sustainability documentation?
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                We provide complete life-cycle assessments, raw material origin verifications, and ISO 14001 compliance dossiers for utility bids.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <button
                type="button"
                onClick={() => onOpenEnquiry('Sustainability & ESG Dossier')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#083260] hover:bg-slate-50 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Request ESG Dossier</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#159640]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

