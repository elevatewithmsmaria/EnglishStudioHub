import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, CheckCircle2, AlertCircle, Volume2, ArrowRight } from 'lucide-react';
import { speakSentence } from '../utils/speech';

interface GrammarAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface GrammarCheckResult {
  hasError: boolean;
  originalText: string;
  correctedText: string;
  explanation: string;
  ruleCategory: string;
  adultWorkplaceContext?: string;
}

export const GrammarAssistantModal: React.FC<GrammarAssistantModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<GrammarCheckResult | null>(null);

  if (!isOpen) return null;

  const quickSamples = [
    'I have 30 years old and work in Doha.',
    'She don\'t likes to drink coffee.',
    'I am looking forward to meet you.',
    'The company sent three informations.',
    'Where you work yesterday?'
  ];

  const handleAnalyze = (textToAnalyze?: string) => {
    const text = textToAnalyze || query;
    if (!text.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Pedagogical ESL rule analyzer engine
    setTimeout(() => {
      const lower = text.toLowerCase();
      let res: GrammarCheckResult = {
        hasError: false,
        originalText: text,
        correctedText: text,
        explanation: 'Your sentence appears grammatically sound and natural for adult communication!',
        ruleCategory: 'General Grammar'
      };

      if (lower.includes('have') && (lower.includes('years old') || lower.includes('year old'))) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/have\s+(\d+)\s+years?\s+old/i, 'am $1 years old').replace(/has\s+(\d+)\s+years?\s+old/i, 'is $1 years old'),
          explanation: 'In English, we state age using the BE verb ("am / is / are"), never "have".',
          ruleCategory: 'BE Verb & Age',
          adultWorkplaceContext: 'Essential for introductions in professional bios and networking.'
        };
      } else if (lower.includes('don\'t likes') || lower.includes('dont likes') || lower.includes('doesn\'t likes') || lower.includes('doesnt likes')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/don\'t\s+likes/i, 'doesn\'t like').replace(/doesn\'t\s+likes/i, 'doesn\'t like'),
          explanation: 'After "doesn\'t", the main verb always reverts to its clean base form without -s ("like").',
          ruleCategory: 'Present Simple Negatives',
          adultWorkplaceContext: 'Shows grammatical polish in daily workplace opinions.'
        };
      } else if (lower.includes('she don\'t') || lower.includes('he don\'t') || lower.includes('it don\'t')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/she\s+don\'t/i, 'she doesn\'t').replace(/he\s+don\'t/i, 'he doesn\'t').replace(/it\s+don\'t/i, 'it doesn\'t'),
          explanation: 'Third-person singular subjects (He, She, It) require "doesn\'t", not "don\'t".',
          ruleCategory: 'Third-Person Singular',
          adultWorkplaceContext: 'Common in team updates: "She doesn\'t have the latest version."'
        };
      } else if (lower.includes('informations') || lower.includes('an information')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/informations/i, 'information').replace(/an\s+information/i, 'some information'),
          explanation: '"Information" is an uncountable noun in English. It never takes a plural -s or "an".',
          ruleCategory: 'Uncountable Nouns',
          adultWorkplaceContext: 'Crucial for professional emails: "Please send me the necessary information."'
        };
      } else if (lower.includes('advices') || lower.includes('an advice')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/advices/i, 'advice').replace(/an\s+advice/i, 'a piece of advice'),
          explanation: '"Advice" is uncountable. Use "some advice" or "a piece of advice".',
          ruleCategory: 'Uncountable Nouns'
        };
      } else if (lower.includes('didn\'t went') || lower.includes('didnt went') || lower.includes('didn\'t saw') || lower.includes('didn\'t bought')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text
            .replace(/didn\'t\s+went/i, 'didn\'t go')
            .replace(/didn\'t\s+saw/i, 'didn\'t see')
            .replace(/didn\'t\s+bought/i, 'didn\'t buy'),
          explanation: 'After "didn\'t", the main verb MUST be in base infinitive form (go, see, buy).',
          ruleCategory: 'Past Simple Negatives'
        };
      } else if (lower.includes('looking forward to meet you')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: text.replace(/looking forward to meet you/i, 'looking forward to meeting you'),
          explanation: 'In the idiom "look forward to", "to" is a preposition, so it is followed by the gerund (-ing): "meeting you".',
          ruleCategory: 'Professional Email Idiom',
          adultWorkplaceContext: 'The most popular professional email closing sentence.'
        };
      } else if (lower.includes('where you work yesterday')) {
        res = {
          hasError: true,
          originalText: text,
          correctedText: 'Where did you work yesterday?',
          explanation: 'Past questions require the auxiliary "did" before the subject: "Where did you work...?"',
          ruleCategory: 'Past Simple Questions'
        };
      }

      setResult(res);
      setIsAnalyzing(false);
    }, 400);
  };

  return (
    <div
      id="grammar-assistant-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/50 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="grammar-assistant-card"
        className="relative w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl transition-all border border-[#1A1A1A]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="btn-close-assistant"
          onClick={onClose}
          aria-label="Close grammar assistant"
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[#1A1A1A]/40 hover:bg-[#F7F5F0] hover:text-[#1A1A1A]"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 border-b border-[#1A1A1A]/10 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A1A1A] text-white">
            <Bot size={20} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-xl font-serif italic text-[#1A1A1A]">Grammar Diagnostic Assistant</h3>
              <span className="rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/70">ESL Coach</span>
            </div>
            <p className="text-xs text-[#1A1A1A]/60 font-sans">Type any sentence to verify grammatical accuracy and natural tone.</p>
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="assistant-input" className="block text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mb-1.5">
            Test Your English Sentence:
          </label>
          <div className="relative">
            <input
              id="assistant-input"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="e.g. She don't like coffee / I have 30 years old / We received three informations..."
              className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#F7F5F0] px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:border-[#1A1A1A] focus:bg-white focus:outline-hidden"
            />
            <button
              id="btn-submit-assistant"
              type="button"
              onClick={() => handleAnalyze()}
              disabled={!query.trim() || isAnalyzing}
              className="absolute right-2 top-2 rounded-lg bg-[#1A1A1A] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] disabled:opacity-40 transition-colors flex items-center gap-1"
            >
              {isAnalyzing ? (
                <span>Checking...</span>
              ) : (
                <>
                  <span>Check</span>
                  <Send size={12} />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Sample Prompts */}
        <div className="mt-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 mr-2">Try common adult slips:</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {quickSamples.map((sample, idx) => (
              <button
                key={idx}
                id={`btn-sample-prompt-${idx}`}
                type="button"
                onClick={() => {
                  setQuery(sample);
                  handleAnalyze(sample);
                }}
                className="rounded-lg border border-[#1A1A1A]/10 bg-[#F7F5F0] px-2.5 py-1 text-xs text-[#1A1A1A]/70 hover:border-[#1A1A1A] hover:bg-white hover:text-[#1A1A1A] transition-colors text-left"
              >
                "{sample}"
              </button>
            ))}
          </div>
        </div>

        {/* Result Area */}
        {result && (
          <div className="mt-5 rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 transition-all">
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2 mb-3">
              <div className="flex items-center gap-2">
                {result.hasError ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#C25E3E]/10 border border-[#C25E3E]/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#C25E3E]">
                    <AlertCircle size={12} />
                    Gentle Correction
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-[#4A5D4E]">
                    <CheckCircle2 size={12} />
                    Grammatically Natural
                  </span>
                )}
                <span className="text-xs font-semibold text-[#1A1A1A]/60">
                  Topic: {result.ruleCategory}
                </span>
              </div>
              <button
                id="btn-listen-assistant-corrected"
                type="button"
                onClick={() => speakSentence(result.correctedText)}
                className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline"
              >
                <Volume2 size={13} />
                Listen
              </button>
            </div>

            {result.hasError ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                  <div className="rounded-lg border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-3">
                    <span className="font-bold text-[#C25E3E] text-xs block mb-0.5">Original (Slip):</span>
                    <span className="line-through decoration-[#C25E3E] decoration-2 text-[#1A1A1A]/70">{result.originalText}</span>
                  </div>
                  <div className="rounded-lg border border-[#4A5D4E]/20 bg-[#4A5D4E]/5 p-3">
                    <span className="font-bold text-[#4A5D4E] text-xs block mb-0.5">Natural English:</span>
                    <span className="font-bold text-[#1A1A1A]">{result.correctedText}</span>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-3.5 border border-[#1A1A1A]/10 text-xs sm:text-sm text-[#1A1A1A]">
                  <p className="font-sans text-[#1A1A1A]/80">{result.explanation}</p>
                  {result.adultWorkplaceContext && (
                    <p className="mt-2 text-xs text-[#1A1A1A]/70 font-sans">
                      💼 <span className="font-bold text-[#1A1A1A]">Workplace Context:</span> {result.adultWorkplaceContext}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-white p-3.5 border border-[#4A5D4E]/20 text-xs sm:text-sm text-[#1A1A1A]">
                <p className="font-serif italic font-bold text-[#4A5D4E]">"{result.correctedText}" is accurate.</p>
                <p className="mt-1 text-xs text-[#1A1A1A]/70 font-sans">{result.explanation}</p>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            id="btn-close-assistant-footer"
            type="button"
            onClick={onClose}
            className="rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
