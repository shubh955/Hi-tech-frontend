import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CORPORATE_INFO } from '../data/content';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#083260] text-white relative overflow-hidden">
      {/* Subtle blueprint pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Signature Brand Gradient Top Accent Rule at top of footer */}
      <div 
        className="w-full h-1.5"
        style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 relative z-10">
        {/* Pre-Footer Action Banner with Signature 90deg Gradient */}
        <div 
          className="mb-14 p-8 sm:p-10 rounded-2xl text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 border border-white/20"
          style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
        >
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-emerald-200 font-bold block mb-1.5">
              PARTNER WITH HTT INNOVATIONS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Accelerate Your Transformer Infrastructure Projects
            </h3>
            <p className="mt-2 text-sm text-slate-100 font-normal leading-relaxed">
              Consult with our senior thermal design engineers for customized radiator configurations, tank engineering, and certified metallurgical surface protection.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenEnquiry('High-Priority Engineering Consultation')}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white text-[#083260] hover:bg-slate-50 font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all shrink-0"
          >
            <span>Schedule Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#159640]" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/15">
          {/* Column 1: Logo & Statement (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <BrandLogo variant="dark" size="md" showCompanySubline={true} />

              <p className="mt-6 text-xs text-slate-300 leading-relaxed max-w-sm">
                Hi-Tech Radiators Pvt. Ltd. (HTT Innovations) is an international leader in transformer thermal engineering, high-integrity tank fabrication, and durable hot-dip galvanising serving premier power utilities worldwide.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#159640] border border-[#159640]/40 px-2.5 py-1 rounded bg-[#159640]/10">
                  Precision &bull; Technology &bull; Stewardship
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400 font-mono">
              <p>CIN: {CORPORATE_INFO.cin}</p>
              <p>GSTIN: {CORPORATE_INFO.gstin}</p>
            </div>
          </div>

          {/* Column 2: Company Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-xs text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('leadership')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Leadership</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('sustainability')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Sustainability</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('capability')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">Manufacturing Scale</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Products &amp; Capabilities
            </h4>
            <ul className="space-y-3 text-xs text-slate-200">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('solutions')}
                  className="hover:text-white transition-colors text-left group"
                >
                  <div className="font-semibold text-white group-hover:text-[#159640] transition-colors">
                    Transformer Radiators
                  </div>
                  <span className="text-[11px] text-slate-400">
                    High-efficiency thermal flutes &amp; headers
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('solutions')}
                  className="hover:text-white transition-colors text-left group"
                >
                  <div className="font-semibold text-white group-hover:text-[#159640] transition-colors">
                    Engineered Tanks
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Submerged-arc welded distribution &amp; power tanks
                  </span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('solutions')}
                  className="hover:text-white transition-colors text-left group"
                >
                  <div className="font-semibold text-white group-hover:text-[#159640] transition-colors">
                    Hot-Dip Galvanising
                  </div>
                  <span className="text-[11px] text-slate-400">
                    Special High Grade molten zinc anti-corrosion
                  </span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Engagement (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Contact &amp; Plant Inquiries
            </h4>
            
            <div className="space-y-3.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#159640] shrink-0" />
                <a
                  href={`mailto:${CORPORATE_INFO.email}`}
                  className="hover:text-white transition-colors font-mono"
                >
                  {CORPORATE_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#159640] shrink-0" />
                <span className="font-mono">{CORPORATE_INFO.telephone}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#159640] shrink-0 mt-0.5" />
                <span>Four Certified Plants &amp; Headquarters in Maharashtra, India</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                id="footer-enquire-btn"
                onClick={() => onOpenEnquiry('General RFQ')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#159640] hover:bg-[#1db14e] text-white text-xs font-semibold tracking-wide transition-colors"
              >
                <span>Request B2B Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} {CORPORATE_INFO.companyName} All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-white/80">{CORPORATE_INFO.tagline}</span>
            <span>&bull;</span>
            <span className="text-[#159640]">Version 1.0 Brand Guidelines</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
