import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../data/content';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';

interface HeroCarouselProps {
  onOpenEnquiry: (topic?: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenEnquiry }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const SLIDE_DURATION = 6500; // ms per slide
  const TICK_INTERVAL = 50;

  const currentSlide = HERO_SLIDES[currentSlideIndex];

  // Auto-slide timer and progress animation
  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= SLIDE_DURATION) {
        setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
      }
    }, TICK_INTERVAL);

    timerRef.current = interval;

    return () => {
      clearInterval(interval);
    };
  }, [currentSlideIndex, isPaused]);

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleCtaClick = (slide: typeof currentSlide) => {
    const el = document.getElementById(slide.targetSection);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenEnquiry(slide.category);
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero Showcase"
      className="relative w-full h-[90vh] min-h-[620px] max-h-[960px] overflow-hidden bg-[#083260]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides with Slow Zoom / Ken Burns Animation */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentSlideIndex;
        return (
          <div
            key={slide.id}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Background Image with subtle zoom from 1.05 to 1.0 */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6500ms] ease-out ${
                isActive ? 'scale-100' : 'scale-105'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />

            {/* Precision Industrial Dark Navy Overlay - faded so the background image is clearly visible */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#083260]/75 via-[#083260]/30 via-50% to-black/10" 
            />
            {/* Targeted left-side soft protection gradient to keep text crisp and readable */}
            <div 
              className="absolute inset-y-0 left-0 w-full sm:w-[62%] md:w-[52%] bg-gradient-to-r from-[#083260]/65 via-[#083260]/25 to-transparent pointer-events-none" 
            />
            {/* Subtle engineering grid accent */}
            <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-20" />
            
            {/* Soft bottom vignette for visual grounding */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#083260]/60 to-transparent pointer-events-none" />
          </div>
        );
      })}

      {/* Main Hero Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between pt-32 pb-14">
        {/* Top Status Bar: Category & Quality Commitment */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4">
          <div className="flex items-center gap-3">
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase border transition-all duration-300"
              style={{
                backgroundColor: `${currentSlide.colorHex}25`,
                borderColor: `${currentSlide.colorHex}60`,
                color: currentSlide.colorHex,
              }}
            >
              <Cpu className="w-3.5 h-3.5" style={{ color: currentSlide.colorHex }} />
              {currentSlide.category}
            </span>
            <span className="hidden sm:inline-block text-xs font-medium text-slate-200 tracking-wider drop-shadow-sm">
              B2B Power Grid &amp; Transformer Infrastructure &bull; Precision Engineered
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-200 font-mono drop-shadow-sm">
            <ShieldCheck className="w-4 h-4" style={{ color: currentSlide.colorHex }} />
            <span className="hidden md:inline">{currentSlide.technicalSpec}</span>
          </div>
        </div>

        {/* Center / Middle Content: Main Headline & CTA */}
        <div className="max-w-3xl my-auto py-6">
          {/* Animated Slide Number Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span 
              className="font-bold text-sm tracking-widest font-mono transition-colors duration-300"
              style={{ color: currentSlide.colorHex }}
            >
              SLIDE {currentSlide.slideNumber} / 04
            </span>
            <span 
              className="w-12 h-[2px] transition-all duration-300"
              style={{ backgroundColor: currentSlide.colorHex }} 
            />
            <span className="text-xs uppercase tracking-widest text-slate-200 font-medium drop-shadow-sm">
              Hi-Tech Radiators Pvt. Ltd. &bull; {currentSlide.symbolism}
            </span>
          </div>

          {/* Headline (Keyed for smooth re-trigger animation) */}
          <h1
            key={`headline-${currentSlideIndex}`}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 animate-[fadeInUp_0.7s_ease-out] drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]"
          >
            {currentSlide.headline}
          </h1>

          {/* Short Supporting Copy */}
          <p
            key={`copy-${currentSlideIndex}`}
            className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed max-w-2xl mb-8 animate-[fadeInUp_0.8s_ease-out] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
          >
            {currentSlide.supportingText}
          </p>

          {/* CTAs */}
          <div 
            key={`cta-${currentSlideIndex}`}
            className="flex flex-wrap items-center gap-4 animate-[fadeInUp_0.9s_ease-out]"
          >
            <button
              type="button"
              id="hero-primary-action-btn"
              onClick={() => handleCtaClick(currentSlide)}
              style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg text-white text-sm font-semibold tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:brightness-110 hover:translate-x-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/20"
            >
              <span>{currentSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              id="hero-secondary-enquiry-btn"
              onClick={() => onOpenEnquiry(currentSlide.category)}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded bg-black/40 hover:bg-black/60 text-white text-sm font-semibold tracking-wide border border-white/30 backdrop-blur-xs transition-all duration-300 hover:border-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-lg"
            >
              <span>Request Technical Specs</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Slide Navigation & Progress Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-5 border-t border-white/15 bg-[#083260]/30 backdrop-blur-xs px-4 py-3 rounded-lg">
          {/* Slide Indicator Selector Buttons */}
          <div className="flex items-center gap-3">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  id={`hero-slide-nav-${idx + 1}`}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`group relative text-left py-2 px-3 rounded transition-all duration-300 focus:outline-none ${
                    isActive ? 'bg-white/15' : 'hover:bg-white/5 opacity-75 hover:opacity-100'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.headline}`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-mono font-bold"
                      style={{ color: isActive ? slide.colorHex : '#E2E8F0' }}
                    >
                      {slide.slideNumber}
                    </span>
                    <span className="hidden md:inline text-xs font-medium text-white truncate max-w-[130px]">
                      {slide.category}
                    </span>
                  </div>

                  {/* Individual active progress indicator */}
                  <div className="w-full h-1 bg-white/20 mt-1.5 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all"
                      style={{
                        backgroundColor: slide.colorHex,
                        width: isActive ? `${progress}%` : '0%',
                        transitionDuration: isActive ? `${TICK_INTERVAL}ms` : '300ms',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Controls: Prev / Next Buttons & Pause indicator */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase">
              {isPaused ? 'Paused' : 'Auto-Playing'}
            </span>

            <div className="flex items-center gap-1.5 bg-black/30 p-1 rounded-md border border-white/10">
              <button
                type="button"
                id="hero-prev-btn"
                onClick={handlePrev}
                className="p-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="w-[1px] h-4 bg-white/20" />
              <button
                type="button"
                id="hero-next-btn"
                onClick={handleNext}
                className="p-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
