import React, { useState } from 'react';
import { ArrowRight, Quote, Award, Building, Sparkles } from 'lucide-react';
import { CORPORATE_INFO } from '../data/content';

interface LeadershipSectionProps {
  onOpenStoryModal: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenStoryModal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <section id="leadership" className="py-24 bg-[#083260] text-white relative overflow-hidden">
      {/* Engineering blueprint background elements */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#159640]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
            EXECUTIVE VISION &bull; ENGINEERING STEWARDSHIP
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-2xl">
          Leadership with Engineering at the Core
        </h2>

        {/* Signature Gradient Accent Bar */}
        <div 
          className="h-1.5 w-24 rounded-full mb-14"
          style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
        />

        {/* Split Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Professional Leadership Portrait */}
          <div 
            className="lg:col-span-5 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image Frame with overflow hidden & subtle hover scale */}
            <div className="relative rounded overflow-hidden shadow-2xl aspect-[4/5] bg-[#051c38] border border-white/15">
              <img
                src="https://www.hitechradiators.com/wp-content/uploads/2025/03/Kartik_Sir_Image.jpg"
                alt="Mr. Kartik Yatin Daftari - MD & CEO"
                className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out ${
                  isHovered ? 'scale-105 filter brightness-105' : 'scale-100 filter brightness-95'
                }`}
                loading="lazy"
              />

              {/* Gradient Scrim for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#083260] via-[#083260]/30 to-transparent opacity-85" />

              {/* Bottom Caption on Portrait */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-10 h-[2px] bg-[#159640] mb-2 transition-all duration-300 group-hover:w-20" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {CORPORATE_INFO.ceo.name}
                </h3>
                <p className="text-xs text-[#159640] font-semibold tracking-wider uppercase mt-0.5">
                  {CORPORATE_INFO.ceo.role} &bull; {CORPORATE_INFO.companyName}
                </p>
              </div>

              {/* Hover Green Accent Border Line */}
              <div 
                className={`absolute bottom-0 left-0 right-0 h-1 bg-[#159640] transition-all duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`} 
              />
            </div>

            {/* Subtle engineering corner detail */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#159640] pointer-events-none" />
          </div>

          {/* Right Column: "From the CEO's Desk" */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#159640]">
                  <Quote className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#159640] block">
                    EXECUTIVE ADDRESS
                  </span>
                  <span className="text-xl font-bold text-white tracking-tight">
                    From the CEO&apos;s Desk
                  </span>
                </div>
              </div>

              {/* Excerpt */}
              <div className="border-l-2 border-[#159640] pl-6 py-2">
                <blockquote className="text-lg sm:text-xl text-slate-100 font-normal leading-relaxed italic">
                  &ldquo;{CORPORATE_INFO.ceo.excerpt}&rdquo;
                </blockquote>
              </div>

              {/* Extended message / pillars */}
              <p className="text-sm text-slate-300 leading-relaxed">
                As the worldwide electrical transmission ecosystem accelerates towards clean renewables and greater grid modernization, transformers operate under increasingly stringent thermal loads. Our mission is to engineer cooling systems with zero margin for failure, guaranteeing uninterrupted performance for utilities across North America, Europe, Asia, and the Middle East.
              </p>

              {/* Executive Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded bg-white/5 border border-white/10 flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#159640] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Zero-Defect Quality
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Helium spectrometry and hydrostatic pulse tests on 100% of radiator production.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded bg-white/5 border border-white/10 flex items-start gap-3">
                  <Building className="w-5 h-5 text-[#159640] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      Global OEM Trust
                    </h4>
                    <p className="text-[11px] text-slate-300 mt-1">
                      Direct tier-1 strategic supplier agreements with industry heavyweights.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-5">
              <button
                type="button"
                id="leadership-meet-btn"
                onClick={onOpenStoryModal}
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-white text-sm font-semibold tracking-wide shadow-md hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20"
              >
                <span>Meet Our Leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => setShowFullMessage(!showFullMessage)}
                className="text-xs font-medium text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
              >
                {showFullMessage ? 'Collapse Corporate Philosophy' : 'Read Full Corporate Philosophy'}
              </button>
            </div>

            {/* Expandable Philosophy Box */}
            {showFullMessage && (
              <div className="mt-6 p-5 rounded bg-white/10 border border-white/15 text-xs text-slate-200 leading-relaxed animate-fade-in space-y-2">
                <p>
                  <strong>HTT Innovations &bull; Visual &amp; Engineering Identity:</strong> Grounded in the three pillars of Trust, Aspirational Growth, and Ethical Responsibility. Our leadership is committed to carbon-conscious manufacturing, circular zinc metallurgy, and nurturing multi-generational engineering craftsmanship.
                </p>
                <p>
                  &ldquo;We don&apos;t just build radiators; we safeguard the vital arteries of global power distribution.&rdquo; &mdash; Kartik Yatin Daftari
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
