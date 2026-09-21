import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Building, User } from 'lucide-react';
import { CORPORATE_INFO } from '../data/content';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillTopic?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefillTopic = 'Transformer Radiators',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    solution: prefillTopic || 'Transformer Radiators',
    specNotes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl max-w-xl w-full overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div 
          className="p-6 text-white relative shadow-sm"
          style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-xs bg-white" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 font-bold">
              HI-TECH RADIATORS &bull; B2B ENGINEERING DESK
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            Request Technical Consultation &amp; Quotation
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Direct routing to our thermal design and manufacturing engineering team.
          </p>

          <button
            type="button"
            id="close-enquiry-modal-btn"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-[#159640]/10 text-[#159640] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#083260] mb-2">
                Enquiry Successfully Logged
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name || 'Engineer'}</strong>. Your technical request for{' '}
                <strong>{formData.solution}</strong> has been transmitted to our commercial engineering department. A technical coordinator will reach out within 24 business hours.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600 font-mono mb-6 max-w-sm mx-auto">
                Reference ID: HT-{Math.floor(100000 + Math.random() * 900000)} &bull; {CORPORATE_INFO.email}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded bg-[#083260] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#159640] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#159640] focus:ring-1 focus:ring-[#159640]"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / OEM Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. ABB / Hitachi / Siemens"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#159640] focus:ring-1 focus:ring-[#159640]"
                    />
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 pl-9 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#159640] focus:ring-1 focus:ring-[#159640]"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Product / Capability Focus
                  </label>
                  <select
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#159640] focus:ring-1 focus:ring-[#159640] bg-white"
                  >
                    <option value="Transformer Radiators">Transformer Radiators (DIN 42559 / Custom)</option>
                    <option value="Transformer Tanks">Engineered Transformer Tanks &amp; Enclosures</option>
                    <option value="Galvanising Solutions">Hot-Dip Galvanising &amp; Corrosion Protection</option>
                    <option value="Turnkey Custom Engineering">Turnkey OEM Substation Cooling Package</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Technical Requirements / Transformer Rating (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify kV class, MVA rating, flange standards, volume requirements, or testing specifications..."
                  value={formData.specNotes}
                  onChange={(e) => setFormData({ ...formData, specNotes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-[#159640] focus:ring-1 focus:ring-[#159640]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#159640]" />
                  <span>Confidential NDA Guaranteed</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundImage: 'linear-gradient(90deg, #083260 0%, #159640 100%)' }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white text-xs font-bold uppercase tracking-wider transition-all hover:brightness-110 shadow-md hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Transmitting...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
