import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCarousel } from './components/HeroCarousel';
import { IntroSection } from './components/IntroSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { ProductHighlights } from './components/ProductHighlights';
import { ManufacturingSection } from './components/ManufacturingSection';
import { LeadershipSection } from './components/LeadershipSection';
import { ClientMarquee } from './components/ClientMarquee';
import { StandardsAndSustainability } from './components/StandardsAndSustainability';
import { CompanyInformation } from './components/CompanyInformation';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { StoryModal } from './components/StoryModal';

export default function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryTopic, setEnquiryTopic] = useState('Transformer Radiators');
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  const handleOpenEnquiry = (topic?: string) => {
    if (topic) {
      setEnquiryTopic(topic);
    }
    setIsEnquiryModalOpen(true);
  };

  const handleSelectQuickLink = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#000000] font-['Raleway',sans-serif] flex flex-col selection:bg-[#159640] selection:text-white">
      {/* 1. Sticky Navigation Header */}
      <Header onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-1 w-full">
        {/* 2. Full-Screen Sliding Banner Hero Carousel */}
        <HeroCarousel onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. Introduction & 4 Quick Links Blocks */}
        <IntroSection
          onSelectQuickLink={handleSelectQuickLink}
          onOpenStoryModal={() => setIsStoryModalOpen(true)}
        />

        {/* 4. Product Highlights (Our Solutions) — Editorial Cards */}
        <ProductHighlights onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Manufacturing & Infrastructure — 4 Production Units & Secondary Color System */}
        <ManufacturingSection onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Horizontal Capability / Trust Strip with Animated Numbers */}
        <CapabilityStrip />

        {/* 7. Leadership Snapshot — Executive Portrait & CEO Message */}
        <LeadershipSection onOpenStoryModal={() => setIsStoryModalOpen(true)} />

        {/* 8. Client / Global Partners Section — Continuous Logo Marquee */}
        <ClientMarquee />

        {/* 9. Quality Standards & Sustainability Pillars */}
        <StandardsAndSustainability onOpenEnquiry={handleOpenEnquiry} />

        {/* 10. Corporate Information & 4 Approved Locations */}
        <CompanyInformation onOpenEnquiry={handleOpenEnquiry} />
      </main>

      {/* 10. Dark Navy Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        prefillTopic={enquiryTopic}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onOpenEnquiry={() => {
          setIsStoryModalOpen(false);
          handleOpenEnquiry('Corporate Heritage & Partnership');
        }}
      />
    </div>
  );
}
