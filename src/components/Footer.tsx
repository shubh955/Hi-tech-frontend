import React from 'react';
import { BrandLogo } from './BrandLogo';
import { CORPORATE_INFO, NAV_LINKS, SOCIAL_LINKS, US_COMPANY } from '../data/content';
import { Mail, Phone, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';

// LinkedIn brand mark (inline so it doesn't depend on deprecated icon-set brand glyphs)
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

// Placeholder links — these pages are not built yet
const LEGAL_LINKS = [
  { label: 'Legal Terms', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Sitemap', href: '#' },
];

const preventPlaceholder = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href === '#') e.preventDefault();
};

export const Footer: React.FC = () => {
  const usHasUrl = US_COMPANY.url !== '#';

  return (
    <footer className="bg-[#083260] text-white relative overflow-hidden">
      {/* Subtle blueprint pattern */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

      {/* Signature Brand Gradient Top Accent Rule at top of footer */}
      <div
        className="w-full h-1.5"
        style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-3">
            <BrandLogo variant="dark" size="md" showCompanySubline={true} />
          </div>

          {/* Column 1: Quick Links (two sub-columns) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-slate-200">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => preventPlaceholder(e, link.href)}
                    className="inline-flex items-center gap-1.5 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#159640] shrink-0 transition-transform group-hover:translate-x-0.5" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Reach Us */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Reach Us
            </h4>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#159640] shrink-0" />
                <a href={`mailto:${CORPORATE_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {CORPORATE_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#159640] shrink-0 mt-0.5" />
                <span>{CORPORATE_INFO.telephone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#159640] shrink-0 mt-0.5" />
                {/* Links to the four addresses on the Contact Us page (not built yet) */}
                <a
                  href="#"
                  onClick={(e) => preventPlaceholder(e, '#')}
                  className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
                >
                  <span>View our four locations</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Follow Us */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#159640] mb-5">
              Follow Us
            </h4>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
              aria-label="Hi-Tech Radiators on LinkedIn"
              className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/15 hover:bg-[#0A66C2] hover:border-[#0A66C2] text-sm text-slate-200 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Bottom Lines */}
        <div className="pt-8 space-y-3 text-xs text-slate-400 text-center lg:text-left">
          <p className="flex flex-wrap justify-center lg:justify-start gap-x-2 gap-y-1">
            <span className="text-slate-300">{CORPORATE_INFO.companyName}</span>
            <span aria-hidden="true">|</span>
            <span>CIN {CORPORATE_INFO.cin}</span>
            <span aria-hidden="true">|</span>
            <span>GSTIN {CORPORATE_INFO.gstin}</span>
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            <p>
              Copyright {new Date().getFullYear()} {CORPORATE_INFO.companyName} All rights reserved.
            </p>

            <nav aria-label="Legal" className="flex flex-wrap justify-center lg:justify-end items-center gap-x-2 gap-y-1">
              {LEGAL_LINKS.map((link) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => preventPlaceholder(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                  <span aria-hidden="true">|</span>
                </React.Fragment>
              ))}
              <a
                href={US_COMPANY.url}
                {...(usHasUrl
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : { onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault() })}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {US_COMPANY.name}, USA
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};
