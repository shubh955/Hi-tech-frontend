import React, { useRef, useState, useEffect } from 'react';
import { CORPORATE_INFO } from '../data/content';
import { 
  Building2, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Navigation, 
  Shield, 
  Settings, 
  FlaskConical, 
  Leaf,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';

interface CompanyInformationProps {
  onOpenEnquiry: (topic?: string) => void;
}

interface LocationCardData {
  id: string;
  number: string;
  colorName: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  name: string;
  division: string;
  addressLine1: string;
  addressLine2: string;
  image: string;
  imageAlt: string;
  specBoxBg: string;
  specBoxBorder: string;
  specIconBg: string;
  specIconColor: string;
  specIcon: React.ComponentType<{ className?: string }>;
  specTitle: string;
  specTitleColor: string;
  specDesc: string;
}

export const CompanyInformation: React.FC<CompanyInformationProps> = ({ onOpenEnquiry }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  const checkScrollButtons = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 15);
  };

  useEffect(() => {
    checkScrollButtons();
    const handleResize = () => checkScrollButtons();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const scrollDistance = 420; // card width + gap
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollDistance : scrollDistance,
      behavior: 'smooth'
    });
  };

  const LOCATIONS: LocationCardData[] = [
    {
      id: 'loc-01',
      number: '01',
      colorName: 'GOLDENROD',
      badgeBg: 'bg-[#FEF3C7]',
      badgeText: 'text-[#92400E]',
      badgeBorder: 'border-[#FDE68A]',
      name: 'Corporate Registered Office',
      division: 'Headquarters & Global Commercial Division',
      addressLine1: 'Maker Chambers V, Nariman Point',
      addressLine2: 'Mumbai, Maharashtra – 400021',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Corporate registered office headquarters at Nariman Point Mumbai',
      specBoxBg: 'bg-[#EFF6FF]',
      specBoxBorder: 'border-[#DBEAFE]',
      specIconBg: 'bg-[#DBEAFE]',
      specIconColor: 'text-[#2563EB]',
      specIcon: Shield,
      specTitle: 'Clarity & Purity',
      specTitleColor: 'text-[#1D4ED8]',
      specDesc: 'Strategic Executive Governance & Global OEM Relations'
    },
    {
      id: 'loc-02',
      number: '02',
      colorName: 'MEDIUM SEA GREEN',
      badgeBg: 'bg-[#DCFCE7]',
      badgeText: 'text-[#166534]',
      badgeBorder: 'border-[#BBF7D0]',
      name: 'Manufacturing Facility – Unit I',
      division: 'Primary Radiator Production & Automated Roll Forming',
      addressLine1: 'Plot No. C-18, MIDC Industrial Area, Turbhe',
      addressLine2: 'Navi Mumbai, Maharashtra – 400705',
      image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Hi-Tech Radiators manufacturing plant Unit 1 Turbhe Navi Mumbai',
      specBoxBg: 'bg-[#F0FDF4]',
      specBoxBorder: 'border-[#DCFCE7]',
      specIconBg: 'bg-[#DCFCE7]',
      specIconColor: 'text-[#16A34A]',
      specIcon: Settings,
      specTitle: 'Harmony & Balance',
      specTitleColor: 'text-[#15803D]',
      specDesc: '24,000 MT Annual Radiator Capacity | CNC Hydro-forming'
    },
    {
      id: 'loc-03',
      number: '03',
      colorName: 'DUSTY ROSE',
      badgeBg: 'bg-[#FFE4E6]',
      badgeText: 'text-[#9F1239]',
      badgeBorder: 'border-[#FECDD3]',
      name: 'Heavy Engineering Facility – Unit II',
      division: 'Transformer Tank Fabrication & Structural Works',
      addressLine1: 'MIDC Industrial Corridor, Thane-Belapur Road',
      addressLine2: 'Navi Mumbai, Maharashtra – 400708',
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Heavy engineering transformer tank fabrication facility Unit 2',
      specBoxBg: 'bg-[#FFF1F2]',
      specBoxBorder: 'border-[#FFE4E6]',
      specIconBg: 'bg-[#FFE4E6]',
      specIconColor: 'text-[#E11D48]',
      specIcon: FlaskConical,
      specTitle: 'Vibrancy & Creativity',
      specTitleColor: 'text-[#BE123C]',
      specDesc: '7,200 MT Annual Tank Capability | Vacuum Pressure Test Bays'
    },
    {
      id: 'loc-04',
      number: '04',
      colorName: 'SAGE',
      badgeBg: 'bg-[#FEF9C3]',
      badgeText: 'text-[#854D0E]',
      badgeBorder: 'border-[#FEF08A]',
      name: 'Surface Treatment & Galvanising Plant',
      division: 'Hot-Dip Galvanising & Specialized Coating Center',
      addressLine1: 'Plot No. K-4, Taloja Industrial Estate, MIDC',
      addressLine2: 'Raigad District, Maharashtra – 410208',
      image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop',
      imageAlt: 'Hot dip galvanising and specialized coating industrial plant Taloja',
      specBoxBg: 'bg-[#FEFCE8]',
      specBoxBorder: 'border-[#FEF9C3]',
      specIconBg: 'bg-[#FEF9C3]',
      specIconColor: 'text-[#B45309]',
      specIcon: Leaf,
      specTitle: 'Warmth & Vitality',
      specTitleColor: 'text-[#B45309]',
      specDesc: 'Automated Temperature-Controlled SHG Molten Zinc Baths'
    }
  ];

  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Banner with Architectural Glass Building Accent */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-100 p-4 sm:p-6 mb-4 sm:mb-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Architectural Skyscraper Background graphic on right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 max-w-sm pointer-events-none hidden md:block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              alt="Architectural corporate facade"
              className="w-full h-full object-cover object-left opacity-35 mix-blend-multiply"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
          </div>

          {/* Left Title & Tag */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#159640]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#159640]">
                CORPORATE HEADQUARTERS &bull; APPROVED LOCATIONS
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              <span className="text-[#083260]">Company </span>
              <span className="text-[#1D4ED8]">Information &amp; Facilities</span>
            </h2>

            {/* Signature Green Gradient Accent Bar */}
            <div 
              className="h-1.5 w-24 rounded-full mt-2.5"
              style={{ backgroundImage: 'linear-gradient(90deg, #159640 0%, #10B981 60%, #3B82F6 100%)' }}
            />
          </div>

          {/* Right Action Button */}
          <div className="relative z-10 shrink-0">
            <button
              type="button"
              id="submit-engineering-enquiry-btn"
              onClick={() => onOpenEnquiry('General RFQ / Technical Consultation')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:brightness-110 active:scale-95 cursor-pointer"
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #064E3B 55%, #047857 100%)' }}
            >
              <Navigation className="w-3.5 h-3.5 rotate-45" />
              <span>SUBMIT ENGINEERING ENQUIRY</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>
        </div>

        {/* Corporate Key Registry Strip (4 Columns with subtle vertical dividers) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs p-4 sm:p-4.5 mb-5 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-slate-200 items-center">
            
            {/* CIN */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8F8ED] text-[#159640] flex items-center justify-center shrink-0 border border-emerald-100">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                  CORPORATE IDENTITY (CIN)
                </span>
                <span className="font-mono text-xs sm:text-[13px] font-bold text-[#083260] tracking-tight">
                  {CORPORATE_INFO.cin}
                </span>
              </div>
            </div>

            {/* GSTIN */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="w-10 h-10 rounded-xl bg-[#E0EFFE] text-[#2563EB] flex items-center justify-center shrink-0 border border-blue-100">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                  GSTIN REGISTRATION
                </span>
                <span className="font-mono text-xs sm:text-[13px] font-bold text-[#083260] tracking-tight">
                  {CORPORATE_INFO.gstin}
                </span>
              </div>
            </div>

            {/* Official Inquiries */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] text-[#7C3AED] flex items-center justify-center shrink-0 border border-purple-100">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                  OFFICIAL INQUIRIES
                </span>
                <a
                  href={`mailto:${CORPORATE_INFO.email}`}
                  className="font-mono text-xs sm:text-[13px] font-bold text-[#083260] hover:text-[#159640] transition-colors tracking-tight"
                >
                  {CORPORATE_INFO.email}
                </a>
              </div>
            </div>

            {/* Corporate Desk */}
            <div className="flex items-center gap-3 lg:px-4">
              <div className="w-10 h-10 rounded-xl bg-[#CCFBF1] text-[#0D9488] flex items-center justify-center shrink-0 border border-teal-100">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                  CORPORATE DESK
                </span>
                <span className="font-mono text-xs sm:text-[13px] font-bold text-[#083260] tracking-tight">
                  {CORPORATE_INFO.telephone}
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Subheader Bar with Navigation Arrows (Left/Right Slider Controls like Brego reference) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#159640] text-white flex items-center justify-center shadow-xs shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#083260]">
                APPROVED MANUFACTURING &amp; EXECUTIVE LOCATIONS (01 &ndash; 04)
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Maharashtra, India &bull; Swipe or use navigation arrows to explore all facilities
              </p>
            </div>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              id="loc-slider-prev-btn"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              aria-label="Scroll left to previous facility"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollLeft
                  ? 'border-slate-300 bg-white text-[#083260] hover:bg-[#083260] hover:text-white hover:border-[#083260] shadow-xs active:scale-95'
                  : 'border-slate-200 bg-slate-100/60 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              id="loc-slider-next-btn"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              aria-label="Scroll right to next facility"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                canScrollRight
                  ? 'border-slate-300 bg-white text-[#083260] hover:bg-[#083260] hover:text-white hover:border-[#083260] shadow-xs active:scale-95'
                  : 'border-slate-200 bg-slate-100/60 text-slate-300 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Locations Slider Track (Right-side overflow, Left aligned with container) */}
        <div className="relative -mr-4 sm:-mr-6 lg:-mr-8">
          <div
            ref={sliderRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-5 pt-1 snap-x snap-mandatory pr-8 sm:pr-12 lg:pr-16"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {LOCATIONS.map((loc) => {
              const SpecIcon = loc.specIcon;

              return (
                <div
                  key={loc.id}
                  id={`location-card-${loc.id}`}
                  className="w-[310px] sm:w-[370px] lg:w-[400px] shrink-0 snap-start group relative rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Inner Image Container with Inset Margin & Rounded Corners */}
                    <div className="relative w-full h-38 sm:h-42 rounded-xl overflow-hidden mb-4 bg-slate-100 shrink-0">
                      <img
                        src={loc.image}
                        alt={loc.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Inset Badges */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                        {/* Location Number Badge */}
                        <span className="px-2.5 py-1 rounded-md bg-[#2563EB] text-white text-[11px] sm:text-xs font-mono font-bold tracking-wide shadow-sm">
                          LOCATION {loc.number}
                        </span>

                        {/* Secondary Color Tag Badge */}
                        <span className={`px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-bold tracking-wider shadow-sm border ${loc.badgeBg} ${loc.badgeText} ${loc.badgeBorder}`}>
                          {loc.colorName}
                        </span>
                      </div>
                    </div>

                    {/* Location Title & Subtitle with Increased Legibility */}
                    <h4 className="text-base sm:text-[17px] font-extrabold text-[#083260] leading-snug group-hover:text-[#1D4ED8] transition-colors">
                      {loc.name}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-normal mt-1.5 mb-3.5">
                      {loc.division}
                    </p>

                    {/* Physical Address with Map Pin */}
                    <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600 leading-snug mb-4 pb-3.5 border-b border-slate-100">
                      <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 group-hover:text-[#159640] transition-colors" />
                      <div className="space-y-0.5">
                        <p className="font-normal text-slate-600">{loc.addressLine1}</p>
                        <p className="font-semibold text-slate-800">{loc.addressLine2}</p>
                      </div>
                    </div>
                  </div>

                  {/* Facility Specialization Box */}
                  <div className={`rounded-xl p-3.5 sm:p-4 ${loc.specBoxBg} border ${loc.specBoxBorder} flex items-start gap-3 transition-all duration-300 mt-auto`}>
                    <div className={`w-9 h-9 rounded-xl ${loc.specIconBg} ${loc.specIconColor} flex items-center justify-center shrink-0 mt-0.5 shadow-xs`}>
                      <SpecIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-slate-400 block leading-tight">
                        FACILITY SPECIALIZATION
                      </span>
                      <span className={`text-xs sm:text-sm font-bold ${loc.specTitleColor} block leading-tight mt-1`}>
                        {loc.specTitle}
                      </span>
                      <span className="text-xs sm:text-[12px] text-slate-600 font-medium leading-relaxed mt-1 block">
                        {loc.specDesc}
                      </span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

