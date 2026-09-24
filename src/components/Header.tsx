import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, PhoneCall, ChevronRight } from 'lucide-react';
import htrLogo from '../assets/images/HTR-logo.png';
import httLogo from '../assets/images/HTT-logo.png';

interface HeaderProps {
  onOpenEnquiry: (prefillTopic?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section for active indicator
      const sections = ['hero', 'about', 'solutions', 'manufacturing', 'capability', 'leadership', 'sustainability', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Placeholder links — inner pages are not built yet, so menu items link to '#'
  const navLinks = [
    { label: 'About', href: '#', sectionId: 'about' },
    { label: 'Products', href: '#', sectionId: 'solutions' },
    { label: 'Manufacturing', href: '#', sectionId: 'manufacturing' },
    { label: 'Capabilities', href: '#', sectionId: 'capability' },
    { label: 'Sustainability', href: '#', sectionId: 'sustainability' },
    { label: 'Contact Us', href: '#', sectionId: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#083260]/10 py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-[#083260]/5 py-5'
        }`}
      >
        {/* Signature Brand Gradient Top Line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2.5px]"
          style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Partner Logos (HTR then HTT) */}
            <div className="flex items-center gap-3">
              <img
                src={htrLogo}
                alt="HTR Logo"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'h-9' : 'h-11'}`}
              />
              {/* Divider */}
              <div className="w-px h-8 bg-[#083260]/20 rounded-full" />
              <img
                src={httLogo}
                alt="HTT Logo"
                className={`object-contain transition-all duration-300 ${isScrolled ? 'h-9' : 'h-11'}`}
              />
            </div>

            {/* Desktop Center/Right Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className="relative px-3.5 py-2 text-sm font-medium text-[#083260] hover:text-[#083260] transition-colors duration-200 group"
                  >
                    <span>{link.label}</span>
                    {/* Sustainable Green underline that animates from left to right on hover */}
                    <span 
                      className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#159640] transition-all duration-300 origin-left ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Action CTA & Mobile Trigger */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Primary Header CTA */}
              <button
                type="button"
                id="header-enquire-cta"
                onClick={() => onOpenEnquiry()}
                className="btn-gradient hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white shadow-sm hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#159640] focus-visible:ring-offset-2"
              >
                <span>Talk to Us</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded text-[#083260] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#159640]"
                aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Navigation Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            id="mobile-nav-drawer"
            className="fixed top-0 right-0 w-full max-w-sm h-full bg-[#083260] text-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <BrandLogo variant="dark" size="sm" showCompanySubline={false} />
                <button
                  type="button"
                  id="mobile-nav-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white/80 hover:text-white rounded hover:bg-white/10"
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                <p className="text-xs uppercase tracking-widest text-[#159640] font-semibold mb-3">Navigation</p>
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className="flex items-center justify-between py-3 px-3 rounded hover:bg-white/5 text-base font-medium text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#159640]" />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <div className="text-xs text-slate-300">
                <p className="font-semibold text-white">Hi-Tech Radiators Pvt. Ltd.</p>
                <p className="mt-1">Mastering Precision, Engineering Innovation</p>
                <p className="mt-2 text-slate-400">info@hitechradiators.com</p>
              </div>
              
              <button
                type="button"
                id="mobile-drawer-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="btn-gradient w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-lg text-white font-semibold transition-transform hover:-translate-y-0.5 shadow-md"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
