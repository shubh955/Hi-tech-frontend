import React from 'react';
import { ArrowUpRight, MapPin, Globe2 } from 'lucide-react';
import { US_COMPANY } from '../data/content';

export const USPresenceSection: React.FC = () => {
  const hasUrl = US_COMPANY.url !== '#';

  return (
    <section
      id="us-presence"
      aria-label={US_COMPANY.name}
      className="relative py-16 sm:py-20 bg-[#F8FAFC] border-t border-slate-200 overflow-hidden"
    >
      {/* Engineering technical grid watermark background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-[#083260]/5 overflow-hidden">
          {/* Signature Gradient Top Line */}
          <div
            className="h-1.5 w-full"
            style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Content */}
            <div className="lg:col-span-8 p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                  Our Company in the United States
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#083260] tracking-tight leading-tight">
                {US_COMPANY.name}, USA
              </h2>

              {/* Signature Gradient Accent Bar */}
              <div
                className="h-1.5 w-24 rounded-full mt-4 mb-5"
                style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
              />

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {US_COMPANY.leadLine}
              </p>

              <a
                href={US_COMPANY.url}
                id="us-company-visit-btn"
                {...(hasUrl
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : { onClick: (e: React.MouseEvent) => e.preventDefault() })}
                className="btn-gradient mt-8 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-white text-sm font-semibold tracking-wide shadow-md hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159640] focus-visible:ring-offset-2"
              >
                <span>Visit {US_COMPANY.name}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Right: Market Panel */}
            <div className="lg:col-span-4 relative bg-[#083260] text-white p-8 sm:p-10 flex flex-col justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern-dark opacity-25 pointer-events-none" />
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-[#159640]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                    <Globe2 className="w-5 h-5 text-[#54B273]" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Market Served
                    </span>
                    <span className="block text-lg font-bold tracking-tight mt-0.5">North America</span>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-start gap-3.5">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#DAA520]" />
                  </div>
                  <div>
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Based In
                    </span>
                    <span className="block text-lg font-bold tracking-tight mt-0.5">United States</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
