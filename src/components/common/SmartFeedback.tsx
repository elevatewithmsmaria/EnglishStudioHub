import React from 'react';
import { CheckCircle2, HelpCircle, Lightbulb, Sparkles } from 'lucide-react';
import { AudioButton } from './AudioButton';

interface SmartFeedbackProps {
  isCorrect: boolean;
  whyExplanation: string;
  correctSentence?: string;
  onWhyClick?: () => void;
  encouragementText?: string;
  pragmaticTip?: string;
}

export const SmartFeedback: React.FC<SmartFeedbackProps> = ({
  isCorrect,
  whyExplanation,
  correctSentence,
  onWhyClick,
  encouragementText,
  pragmaticTip
}) => {
  return (
    <div
      id="smart-feedback-card"
      className={`mt-4 rounded-xl border p-4 transition-all ${
        isCorrect
          ? 'border-[#4A5D4E]/30 bg-[#4A5D4E]/5 text-[#1A1A1A]'
          : 'border-[#C25E3E]/30 bg-[#C25E3E]/5 text-[#1A1A1A]'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0">
          {isCorrect ? (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4A5D4E] text-white">
              <CheckCircle2 size={16} />
            </div>
          ) : (
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C25E3E] text-white">
              <Sparkles size={16} />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-serif italic font-bold text-base text-[#1A1A1A]">
              {isCorrect
                ? encouragementText || 'Correct & Natural'
                : 'Correction Insight:'}
            </h4>
            {correctSentence && (
              <AudioButton text={correctSentence} size="sm" label="Listen" />
            )}
          </div>

          <p className="mt-1 text-sm leading-relaxed text-[#1A1A1A]/80 font-sans">
            {whyExplanation}
          </p>

          {correctSentence && !isCorrect && (
            <div className="mt-2.5 rounded-lg border border-[#4A5D4E]/30 bg-white p-3 text-sm">
              <span className="font-bold text-[#4A5D4E] text-xs uppercase tracking-wider block mb-0.5">Natural Form:</span>
              <span className="font-bold text-[#1A1A1A]">{correctSentence}</span>
            </div>
          )}

          {pragmaticTip && (
            <p className="mt-2 text-xs text-[#1A1A1A]/70 font-sans">
              💼 <span className="font-bold text-[#1A1A1A]">Adult Context:</span> {pragmaticTip}
            </p>
          )}

          {onWhyClick && (
            <button
              id="btn-open-why-rule"
              type="button"
              onClick={onWhyClick}
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/15 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
            >
              <Lightbulb size={13} className="text-[#C25E3E]" />
              <span>Why does this rule apply?</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
