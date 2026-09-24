import React, { useRef, useState, useEffect } from 'react';
import { CORPORATE_INFO } from '../data/content';
import {
  Building2,
  FileText,
  Receipt,
  Mail,
  Phone,
  Globe,
  MapPin,
  Navigation,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight
} from 'lucide-react';

interface CompanyInformationProps {
  onOpenEnquiry: (topic?: string) => void;
}

interface RegistryField {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBox: string;
  href?: string;
}

interface LocationCardData {
  id: string;
  number: string;
  label: string;
  address: string;
  image: string;
  imageAlt: string;
}

// Company details — text reproduced exactly as supplied
const REGISTRY_FIELDS: RegistryField[] = [
  {
    label: 'Company name',
    value: CORPORATE_INFO.companyName,
    icon: Building2,
    iconBox: 'bg-[#E8F8ED] text-[#159640] border-emerald-100'
  },
  {
    label: 'Corporate Identity Number (CIN)',
    value: CORPORATE_INFO.cin,
    icon: FileText,
    iconBox: 'bg-[#E0EFFE] text-[#2563EB] border-blue-100'
  },
  {
    label: 'GST number (GSTIN)',
    value: CORPORATE_INFO.gstin,
    icon: Receipt,
    iconBox: 'bg-[#FEF3C7] text-[#B45309] border-amber-100'
  },
  {
    label: 'Email',
    value: CORPORATE_INFO.email,
    href: `mailto:${CORPORATE_INFO.email}`,
    icon: Mail,
    iconBox: 'bg-[#EDE9FE] text-[#7C3AED] border-purple-100'
  },
  {
    label: 'Telephone',
    value: CORPORATE_INFO.telephone,
    icon: Phone,
    iconBox: 'bg-[#CCFBF1] text-[#0D9488] border-teal-100'
  },
  {
    label: 'Website address',
    value: CORPORATE_INFO.website,
    icon: Globe,
    iconBox: 'bg-[#FFE4E6] text-[#BE123C] border-rose-100'
  }
];

// Addresses — shown exactly as supplied
const LOCATIONS: LocationCardData[] = [
  {
    id: 'loc-01',
    number: '01',
    label: 'Corporate Office',
    address: 'Unit No. 1402, 14th Floor, Tower 4, One Unity Centre, Senapati Bapat Marg, Prabhadevi, Mumbai, Maharashtra 400013',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Corporate Office, One Unity Centre, Prabhadevi, Mumbai'
  },
  {
    id: 'loc-02',
    number: '02',
    label: 'Head Office and Registered Office',
    address: 'Gut No. 166/6, 166/7, 166/8, 169, 194 & 198, Takai-Adoshi Road, Village Dheku, Taluka Khalapur, District Raigad, Maharashtra 410203',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Head Office and Registered Office, Village Dheku, Khalapur'
  },
  {
    id: 'loc-03',
    number: '03',
    label: 'Radiator Division',
    address: 'Gut No. 131, Takai-Adoshi Road, Village Dheku, Taluka Khalapur, District Raigad, Maharashtra 410203',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Radiator Division, Village Dheku, Khalapur'
  },
  {
    id: 'loc-04',
    number: '04',
    label: 'Tank Division',
    address: 'Survey No. 51, Part 55/1/B, Part 53, Part 54 & Shed No. B200, IndoSpace Industrial Park, Khopoli-Pen Road, Village Ajivali, Taluka Khalapur, District Raigad, Maharashtra 410203',
    image: 'https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Tank Division, IndoSpace Industrial Park, Village Ajivali, Khalapur'
  }
];

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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

  return (
    <section id="contact" className="py-6 sm:py-8 lg:py-10 bg-white border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Header Banner with Architectural Glass Building Accent */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-white via-white/95 to-slate-50 border border-slate-100 p-4 sm:p-6 mb-4 sm:mb-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Architectural Skyscraper Background graphic on right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 max-w-sm pointer-events-none hidden md:block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
              alt=""
              className="w-full h-full object-cover object-left opacity-35 mix-blend-multiply"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
          </div>

          {/* Left Title & Tag — matches the heading style used across the page */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
                CORPORATE HEADQUARTERS &bull; APPROVED LOCATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083260] tracking-tight leading-[1.15]">
              Company Information &amp; Facilities
            </h2>

            {/* Signature Gradient Accent Bar */}
            <div
              className="h-1.5 w-24 rounded-full mt-4"
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
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

        {/* Corporate Key Registry Strip — 1px gaps over slate act as dividers at every breakpoint */}
        <div className="rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden mb-5 sm:mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200">
            {REGISTRY_FIELDS.map((field) => {
              const Icon = field.icon;
              return (
                <div key={field.label} className="flex items-center gap-3 bg-white p-4 sm:p-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${field.iconBox}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                      {field.label}
                    </span>
                    {field.href ? (
                      <a
                        href={field.href}
                        className="text-sm font-bold text-[#083260] hover:text-[#159640] transition-colors tracking-tight break-all"
                      >
                        {field.value}
                      </a>
                    ) : (
                      <span className="text-sm font-bold text-[#083260] tracking-tight break-words">
                        {field.value}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Subheader Bar with Navigation Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#159640] text-white flex items-center justify-center shadow-xs shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#083260]">
                OUR ADDRESSES (01 &ndash; 04)
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                Maharashtra, India &bull; Swipe or use the arrows to see all locations
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
              aria-label="Scroll left to previous location"
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
              aria-label="Scroll right to next location"
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
            {LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                id={`location-card-${loc.id}`}
                className="w-[310px] sm:w-[370px] lg:w-[400px] shrink-0 snap-start group relative rounded-2xl bg-white border border-slate-200/90 p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Inner Image Container with Inset Margin & Rounded Corners */}
                <div className="relative w-full h-38 sm:h-42 rounded-xl overflow-hidden mb-4 bg-slate-100 shrink-0">
                  <img
                    src={loc.image}
                    alt={loc.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Location Number Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-[#083260] text-white text-[11px] sm:text-xs font-mono font-bold tracking-wide shadow-sm">
                      LOCATION {loc.number}
                    </span>
                  </div>
                </div>

                {/* Location Label */}
                <h4 className="text-base sm:text-[17px] font-extrabold text-[#083260] leading-snug group-hover:text-[#159640] transition-colors">
                  {loc.label}
                </h4>

                {/* Physical Address with Map Pin */}
                <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-600 leading-relaxed mt-3 mb-4">
                  <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0 group-hover:text-[#159640] transition-colors" />
                  <p>{loc.address}</p>
                </div>

                {/* Directions link pinned to the bottom so cards align */}
                <div className="mt-auto pt-3.5 border-t border-slate-100">
                  <a
                    href={mapsUrl(loc.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#083260] hover:text-[#159640] transition-colors"
                  >
                    <span>Get directions</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
