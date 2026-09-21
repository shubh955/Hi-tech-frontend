import React, { useState } from 'react';
import { PRODUCT_ITEMS } from '../data/content';
import { ProductItem } from '../types';
import { ArrowUpRight, Check, X, Shield, ArrowRight, ChevronUp, Linkedin, ExternalLink } from 'lucide-react';

interface ProductHighlightsProps {
  onOpenEnquiry: (productName?: string) => void;
}

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({ onOpenEnquiry }) => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  // Filter out Galvanising from the core product cards so only Radiators and Tanks are shown
  const primaryProducts = PRODUCT_ITEMS.filter((item) => item.id !== 'galvanising');

  return (
    <section id="solutions" className="py-28 bg-[#FFFFFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#159640] rounded-xs" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#159640]">
              OUR SOLUTIONS &bull; CORE CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#083260] tracking-tight leading-[1.15] mb-4">
            Engineered for the Power Industry
          </h2>

          {/* Signature Gradient Accent Bar */}
          <div 
            className="h-1.5 w-24 rounded-full mb-4"
            style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
          />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From transformer radiators to engineered tanks, Hi-Tech delivers precision-manufactured components built for demanding power transmission and distribution infrastructure.
          </p>
        </div>

        {/* 2-Column Product Showcase Cards Grid with Drag-Up Hover Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {primaryProducts.map((item) => {
            const isExpanded = activeCardId === item.id;

            return (
              <div
                key={item.id}
                id={`product-card-${item.id}`}
                tabIndex={0}
                role="region"
                aria-label={`${item.number} ${item.name}`}
                onClick={() => {
                  // Toggle active card on mobile / click
                  setActiveCardId((prev) => (prev === item.id ? null : item.id));
                }}
                className="group relative rounded-lg overflow-hidden border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-end p-6 sm:p-8 h-[520px] sm:h-[540px] bg-[#083260] cursor-pointer select-none"
              >
                {/* Background Image with Scale Transition */}
                <img
                  src={item.image}
                  alt={`${item.number} ${item.name}`}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to primary official Hi-Tech facility banner if any error
                    const target = e.currentTarget;
                    target.src = 'https://www.hitechradiators.com/wp-content/uploads/2024/11/main-power-plant-energy-ideas-energy-saving.jpg';
                  }}
                />

                {/* Multi-layered Dark Gradient Overlays for High-Contrast Readability */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-[#083260] via-[#083260]/65 to-[#083260]/10 transition-opacity duration-500 ${
                    isExpanded ? 'opacity-95' : 'opacity-85 group-hover:opacity-95'
                  }`} 
                />
                <div 
                  className={`absolute inset-0 bg-black/25 transition-colors duration-500 ${
                    isExpanded ? 'bg-black/45' : 'group-hover:bg-black/45'
                  }`} 
                />

                {/* Engineering corner marks with secondary color */}
                <div className="absolute top-6 left-6 flex items-center gap-2 pointer-events-none z-10">
                  <span
                    className="w-2.5 h-2.5 rounded-xs"
                    style={{ backgroundColor: item.colorHex }}
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-white/90 drop-shadow-sm font-semibold">
                    HT-{item.id.toUpperCase()}
                  </span>
                </div>

                {/* Top Right Architectural Number Watermark */}
                <div className="absolute top-5 right-6 pointer-events-none z-10">
                  <span
                    className={`font-mono text-5xl sm:text-6xl font-black text-white/20 transition-all duration-500 ${
                      isExpanded ? 'text-white/35 scale-105' : 'group-hover:text-white/35 group-hover:scale-105'
                    }`}
                    style={{
                      textShadow: '0 2px 12px rgba(0,0,0,0.6)'
                    }}
                  >
                    {item.number}
                  </span>
                </div>

                {/* Left accent bar on hover */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 transition-transform duration-500 origin-bottom ${
                    isExpanded ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`}
                  style={{ backgroundColor: item.colorHex }}
                />

                {/* Foreground Content with Smooth Drag-Up / Slide-Up Motion */}
                <div className="relative z-10 w-full">
                  {/* Card Title & Accent Indicator - Always visible by default */}
                  <div className={`transition-transform duration-500 ease-out ${
                    isExpanded ? '-translate-y-1' : 'group-hover:-translate-y-1'
                  }`}>
                    {/* Expanding Secondary Accent Bar */}
                    <div
                      className={`h-1 mb-3 rounded-full transition-all duration-500 ${
                        isExpanded ? 'w-20' : 'w-12 group-hover:w-20'
                      }`}
                      style={{ backgroundColor: item.colorHex }}
                    />

                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                        {item.number} &mdash; {item.name}
                      </h3>
                      
                      {/* Subtle expand cue icon */}
                      <ChevronUp 
                        className={`w-5 h-5 text-white/70 transition-transform duration-500 ${
                          isExpanded ? 'rotate-180 text-white' : 'group-hover:rotate-180 group-hover:text-white'
                        }`} 
                      />
                    </div>
                  </div>

                  {/* Smooth Drag-Up Tray: Hidden by default, smoothly expands & drags up on hover */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isExpanded
                        ? 'grid-rows-[1fr]'
                        : 'grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`pt-4 transition-all duration-500 ease-out ${
                          isExpanded
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 delay-75'
                        }`}
                      >
                        {/* Short Supporting Copy */}
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-4 font-normal drop-shadow-sm">
                          {item.shortCopy}
                        </p>

                        {/* Standards Badges Preview */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-5">
                          {item.standards.slice(0, 3).map((std) => (
                            <span
                              key={std}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-white/95 border border-white/25 backdrop-blur-xs font-medium"
                            >
                              {std}
                            </span>
                          ))}
                        </div>

                        {/* Actions: Explore Deep Dive & Technical Inquiry */}
                        <div className="flex items-center gap-3 pt-1">
                          <button
                            type="button"
                            id={`explore-btn-${item.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProduct(item);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all duration-300 focus:outline-none hover:border-white/50"
                          >
                            <span
                              className="border-b pb-0.5"
                              style={{ borderColor: item.colorHex }}
                            >
                              Explore Product
                            </span>
                            <ArrowRight
                              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                              style={{ color: item.colorHex }}
                            />
                          </button>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenEnquiry(item.name);
                            }}
                            style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-white shadow-md transition-all hover:brightness-110 hover:-translate-y-0.5"
                          >
                            <span>Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtle prompt indicator visible only in default state */}
                  <div
                    className={`mt-2.5 flex items-center gap-2 text-xs transition-opacity duration-300 ${
                      isExpanded ? 'opacity-0 max-h-0' : 'opacity-70 group-hover:opacity-0 group-hover:max-h-0'
                    }`}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <span className="font-mono text-[11px] tracking-wider text-slate-300 uppercase">
                      Hover to view details
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Hot-Dip Galvanising Banner with Direct LinkedIn Link & Button */}
        <div className="mt-10 sm:mt-12 rounded-xl overflow-hidden border border-slate-200/90 shadow-lg bg-[#083260] text-white relative">
          {/* Facility Background Photo with Gradient Treatment */}
          <img
            src="https://www.hitechradiators.com/wp-content/uploads/2025/03/Why_Hi-Tech_State_of_The_art_Hot_dip_Galvanization_Process.png"
            alt="Hi-Tech State-of-the-Art Hot-Dip Galvanising Process"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-25 mix-blend-luminosity"
            loading="lazy"
          />
          {/* Gradient Overlay for Pristine Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#083260] via-[#083260]/90 to-[#051c38]/95" />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              {/* Category Eyebrow & Secondary Color Tag */}
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-xs" style={{ backgroundColor: '#C2B280' }} />
                <span className="font-mono text-xs uppercase tracking-widest text-[#C2B280] font-semibold">
                  HOT-DIP GALVANISING CAPABILITIES
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-slate-200 border border-white/15">
                  Unit III &bull; Taloja (36,000 MT/Year)
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                Hot-Dip Galvanising &amp; Metallurgical Surface Protection
              </h3>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal mb-4">
                Equipped with automated 7-tank chemical pre-treatment and a 7.5-meter Special High Grade (SHG) 99.995% molten zinc bath. Certified to ISO 1461, EN ISO 10684, and ASTM A123 standards for harsh industrial and coastal environments.
              </p>

              {/* Direct LinkedIn Text Link with URL */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs text-slate-300">Discover project highlights &amp; facility updates on LinkedIn:</span>
                <a
                  href="https://www.linkedin.com/company/hi-tech-radiators-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="galvanising-linkedin-text-link"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#57b5f0] hover:text-white underline underline-offset-4 transition-colors group"
                >
                  <span>linkedin.com/company/hi-tech-radiators-pvt-ltd</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Actions: Prominent LinkedIn Button & Inquiry Button */}
            <div className="flex flex-col sm:flex-row lg:flex-col shrink-0 gap-3 w-full sm:w-auto">
              <a
                href="https://www.linkedin.com/company/hi-tech-radiators-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                id="galvanising-linkedin-btn"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Linkedin className="w-4 h-4 fill-current" />
                <span>Visit Galvanising on LinkedIn</span>
                <ExternalLink className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>

              <button
                type="button"
                id="galvanising-rfq-btn"
                onClick={() => onOpenEnquiry('Hot-Dip Galvanising')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 hover:border-white/40 transition-colors"
              >
                <span>Request Galvanising RFQ</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          id="product-detail-modal"
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-48 bg-[#083260] p-6 flex flex-col justify-end text-white overflow-hidden">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-30"
              />
              <div className="relative z-10">
                <span
                  className="font-mono text-xs font-bold tracking-widest uppercase"
                  style={{ color: selectedProduct.colorHex }}
                >
                  Product Overview &bull; 0{selectedProduct.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <p className="text-base text-slate-700 font-medium leading-relaxed">
                  {selectedProduct.shortCopy}
                </p>
              </div>

              {/* Engineering Features */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#083260] mb-3 flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-[#159640]" />
                  Manufacturing &amp; Engineering Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedProduct.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-[#159640] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#083260] mb-3">
                  Typical Industry Applications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: selectedProduct.colorHex }}
                      />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Standards */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase block mb-1">
                    Compliance Standards:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.standards.map((s) => (
                      <span
                        key={s}
                        className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const name = selectedProduct.name;
                    setSelectedProduct(null);
                    onOpenEnquiry(name);
                  }}
                  style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                  className="px-5 py-2.5 rounded-lg text-white text-xs font-semibold tracking-wide transition-all hover:brightness-110 shadow-md"
                >
                  Request Technical Quotation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
