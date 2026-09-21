import React from 'react';
import { X, Award, Shield, Compass, Palette, CheckCircle2 } from 'lucide-react';
import { CORPORATE_INFO, SECONDARY_PALETTE } from '../data/content';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose, onOpenEnquiry }) => {
  if (!isOpen) return null;

  return (
    <div
      id="story-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Signature 90deg Gradient */}
        <div 
          className="p-6 sm:p-8 text-white relative shadow-md"
          style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-xs bg-white" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
              ESTABLISHED 1989 &bull; HTT INNOVATIONS
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Mastering Precision, Engineering Innovation
          </h3>
          <p className="text-xs text-white/80 mt-1 max-w-xl">
            The story of Hi-Tech Radiators Pvt. Ltd.: Over three decades of specialized manufacturing for the global electrical power grid.
          </p>

          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* History */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#083260] mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#159640]" />
              Our Industrial Legacy &bull; 1989 to Present
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Incorporated under CIN {CORPORATE_INFO.cin}, Hi-Tech Radiators Pvt. Ltd. began with a singular engineering focus: building the most reliable, zero-leak transformer cooling radiators for India&apos;s rapidly growing power transmission network. Through continuous investments in CNC roll forming, automated robotic welding, and European DIN-standard flange tooling, the company expanded into an international manufacturer trusted across 55+ countries.
            </p>
          </div>

          {/* Brand Values from Guidebook */}
          <div className="border-t border-slate-100 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#083260] mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#159640]" />
              Core Brand Values
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#159640]">01 &bull; Trust</span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Building deep relationships by ensuring zero-leak trustworthiness and reliability in every product shipped to global OEMs.
                </p>
              </div>

              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#159640]">02 &bull; Aspirational</span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Pioneering high-heat-dissipation flute geometries and robotic automated assembly to redefine industry performance.
                </p>
              </div>

              <div className="p-4 rounded bg-slate-50 border border-slate-200">
                <span className="font-mono text-xs font-bold text-[#159640]">03 &bull; Ethical</span>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Commitment to sustainable practices, circular zinc recycling, rigorous worker safety, and responsible global trade.
                </p>
              </div>
            </div>
          </div>

          {/* Secondary Color System from Guidebook */}
          <div className="border-t border-slate-100 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#083260] mb-3 flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#159640]" />
              Secondary Colour Palette &bull; Essence of Sustainability
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Echoing our commitment to technological advancement while prioritizing environmental consciousness, these vibrant hues evoke innovation, energy, and progress:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {Object.values(SECONDARY_PALETTE).map((color) => (
                <div key={color.name} className="p-3.5 rounded border border-slate-200 bg-slate-50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-4 h-4 rounded-full border border-slate-300" style={{ backgroundColor: color.hex }} />
                    <span className="text-xs font-bold text-[#083260]">{color.name}</span>
                  </div>
                  <p className="text-[11px] font-medium mb-2" style={{ color: color.hex }}>
                    {color.symbolism}
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 space-y-0.5 border-t border-slate-200/60 pt-1.5">
                    <div>HEX: {color.hex}</div>
                    <div>RGB: {color.rgb}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Voice & Tone */}
          <div className="border-t border-slate-100 pt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#083260] mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#159640]" />
              Voice &amp; Technical Stance
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159640]" />
                <span><strong>Accuracy-Driven:</strong> Deep metallurgical clarity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159640]" />
                <span><strong>Technical:</strong> Zero generic generalizations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#159640]" />
                <span><strong>Competent:</strong> Exceeding OEM utility demands</span>
              </div>
            </div>
          </div>

          {/* Action */}
          <div className="border-t border-slate-100 pt-6 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-mono">
              Hi-Tech Radiators Pvt. Ltd. &bull; HTT Innovations
            </span>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenEnquiry();
              }}
              className="btn-gradient px-5 py-2.5 rounded-lg text-white text-xs font-bold uppercase tracking-wider shadow-md hover:-translate-y-0.5"
            >
              Contact Our Engineering Office
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
