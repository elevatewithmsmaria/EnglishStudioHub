import React from 'react';
import { X, Lightbulb, CheckCircle, AlertTriangle } from 'lucide-react';

interface WhyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  explanation: string;
  formula?: string;
  correctExample?: string;
  incorrectExample?: string;
  adultTip?: string;
}

export const WhyModal: React.FC<WhyModalProps> = ({
  isOpen,
  onClose,
  title = 'Grammar Rule Breakdown',
  explanation,
  formula,
  correctExample,
  incorrectExample,
  adultTip
}) => {
  if (!isOpen) return null;

  return (
    <div
      id="why-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="why-modal-card"
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl transition-all border border-[#1A1A1A]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-why-modal"
          onClick={onClose}
          aria-label="Close why rule modal"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[#1A1A1A]/40 hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 border-b border-[#1A1A1A]/10 pb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F7F5F0] text-[#1A1A1A]">
            <Lightbulb size={20} className="text-[#C25E3E]" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Rule Deep-Dive</span>
            <h3 className="text-lg sm:text-xl font-serif italic text-[#1A1A1A]">{title}</h3>
          </div>
        </div>

        <div className="mt-4 space-y-4 text-xs sm:text-sm text-[#1A1A1A]">
          <div className="rounded-xl bg-[#F7F5F0] p-4 border border-[#1A1A1A]/10">
            <h4 className="font-serif italic font-bold text-base text-[#1A1A1A] mb-1">Plain Rule:</h4>
            <p className="leading-relaxed text-[#1A1A1A]/80 font-sans">{explanation}</p>
          </div>

          {formula && (
            <div className="rounded-xl bg-[#FDFCF9] p-3.5 border border-[#1A1A1A]/10">
              <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block mb-1">Sentence Formula</span>
              <code className="text-xs sm:text-sm font-serif italic font-bold text-[#1A1A1A] block">{formula}</code>
            </div>
          )}

          {(correctExample || incorrectExample) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {incorrectExample && (
                <div className="rounded-xl border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#C25E3E] mb-1">
                    <AlertTriangle size={13} />
                    <span>Watch Out (Wrong):</span>
                  </div>
                  <p className="font-medium text-[#1A1A1A]/70 line-through decoration-[#C25E3E] decoration-2 text-xs sm:text-sm">{incorrectExample}</p>
                </div>
              )}
              {correctExample && (
                <div className="rounded-xl border border-[#4A5D4E]/20 bg-[#4A5D4E]/5 p-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#4A5D4E] mb-1">
                    <CheckCircle size={13} />
                    <span>Correct Form:</span>
                  </div>
                  <p className="font-bold text-[#1A1A1A] text-xs sm:text-sm">{correctExample}</p>
                </div>
              )}
            </div>
          )}

          {adultTip && (
            <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-3 text-xs text-[#1A1A1A]/80 font-sans">
              <span className="font-bold text-[#1A1A1A]">💼 Workplace Practice Tip: </span>
              {adultTip}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            id="btn-got-it-why-modal"
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-lg bg-[#1A1A1A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
          >
            I Understand Now
          </button>
        </div>
      </div>
    </div>
  );
};
