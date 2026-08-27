import React, { useState } from 'react';
import {
  MessageSquare,
  Briefcase,
  Utensils,
  Plane,
  HeartPulse,
  UserCheck,
  PhoneCall,
  Volume2,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Lightbulb,
  Check
} from 'lucide-react';
import { REAL_LIFE_SCENARIOS } from '../data/realLifeData';
import { RealLifeScenario, PracticeQuestion } from '../types';
import { AudioButton } from './common/AudioButton';
import { SmartFeedback } from './common/SmartFeedback';
import { WhyModal } from './common/WhyModal';

export const RealLifeView: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(REAL_LIFE_SCENARIOS[0].id);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const [whyModalData, setWhyModalData] = useState<{
    isOpen: boolean;
    title: string;
    explanation: string;
  }>({
    isOpen: false,
    title: '',
    explanation: ''
  });

  const scenario = REAL_LIFE_SCENARIOS.find((s) => s.id === selectedScenarioId) || REAL_LIFE_SCENARIOS[0];

  const getScenarioIcon = (id: string) => {
    switch (id) {
      case 'rl_workplace_meeting': return <Briefcase size={18} />;
      case 'rl_restaurant_ordering': return <Utensils size={18} />;
      case 'rl_airport_transit': return <Plane size={18} />;
      case 'rl_doctor_appointment': return <HeartPulse size={18} />;
      case 'rl_job_interview': return <UserCheck size={18} />;
      case 'rl_phone_call': return <PhoneCall size={18} />;
      default: return <MessageSquare size={18} />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header */}
      <div className="border-b border-gray-200/80 pb-5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-2xs">
            Practical English Scenarios
          </span>
        </div>
        <h1 className="mt-2 text-2xl sm:text-4xl font-serif italic font-black text-gray-900 tracking-tight">
          Real-Life Situations & Professional Communication
        </h1>
        <p className="text-sm text-gray-600 font-sans mt-1">
          Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-sky-700 underline hover:text-sky-900">Ms. Maria</a> for real-world fluency.
        </p>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {REAL_LIFE_SCENARIOS.map((s) => {
          const isSelected = s.id === selectedScenarioId;
          return (
            <button
              key={s.id}
              id={`tab-scenario-${s.id}`}
              onClick={() => setSelectedScenarioId(s.id)}
              className={`flex flex-col items-center justify-center p-3.5 rounded-3xl border text-center transition-all shadow-2xs ${
                isSelected
                  ? 'border-sky-500 bg-gradient-to-tr from-sky-500 to-blue-600 text-white font-bold shadow-md scale-105'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-sky-300 hover:bg-sky-50/50'
              }`}
            >
              <div className={`p-2.5 rounded-2xl mb-1.5 ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'}`}>
                {getScenarioIcon(s.id)}
              </div>
              <span className="text-xs font-bold leading-tight">{s.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Selected Scenario Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Interactive Dialogue Reader (2 spans) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-3xl border border-sky-200/80 bg-white p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                  {scenario.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif italic font-bold text-gray-900 mt-1">
                  {scenario.title}
                </h3>
              </div>
              <span className="rounded-full bg-sky-50 border border-sky-200 px-3 py-1 text-xs font-bold text-sky-800">
                {scenario.dialogue.length} Exchanges
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 font-sans">
              {scenario.description}
            </p>

            {/* Dialogue Exchanges */}
            <div className="space-y-3.5 pt-2">
              {scenario.dialogue.map((line, idx) => {
                const isSpeakerA = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-4 transition-colors shadow-2xs ${
                      isSpeakerA
                        ? 'border border-sky-200 bg-gradient-to-r from-sky-50/80 to-blue-50/50 ml-0 mr-4 sm:mr-12'
                        : 'border border-purple-200 bg-gradient-to-r from-purple-50/80 to-pink-50/50 mr-0 ml-4 sm:ml-12'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-xs font-bold ${isSpeakerA ? 'text-sky-900' : 'text-purple-900'}`}>
                        {line.speaker}
                      </span>
                      <AudioButton text={line.text} size="sm" />
                    </div>

                    <p className="text-sm font-semibold text-gray-900 leading-relaxed font-sans">
                      "{line.text}"
                    </p>

                    {line.grammarHighlight && (
                      <div className="mt-2 rounded-xl bg-white/95 border border-gray-200/80 p-2.5 text-xs text-gray-700 font-sans flex items-center gap-1.5 shadow-2xs">
                        <span className="text-sky-600 font-bold">💡 Grammar Note:</span>
                        <span>{line.grammarHighlight}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Situational Practice Exercises */}
          <div className="rounded-3xl border border-indigo-200/80 bg-white p-6 sm:p-7 shadow-xs space-y-5">
            <div className="flex items-center gap-2 font-bold text-gray-900 text-base">
              <Sparkles size={18} className="text-indigo-600" />
              <span>Situational Decision Practice</span>
            </div>

            <div className="space-y-4">
              {scenario.practiceQuestions.map((q, qIdx) => {
                const isChecked = checked[q.id];
                const currentAnswer = answers[q.id];

                return (
                  <div key={q.id} className="rounded-2xl border border-indigo-100 bg-indigo-50/30 p-4 sm:p-5 space-y-3 shadow-2xs">
                    <p className="text-xs sm:text-sm font-bold text-gray-900">
                      {qIdx + 1}. {q.prompt}
                    </p>

                    {'options' in q && Array.isArray((q as any).options) && (
                      <div className="space-y-2">
                        {(q as any).options.map((opt: string, optIdx: number) => {
                          const isSelected = currentAnswer === optIdx;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              disabled={isChecked}
                              onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: optIdx }))}
                              className={`w-full text-left rounded-2xl border p-3 text-xs sm:text-sm font-medium transition-all flex items-center justify-between shadow-2xs ${
                                isSelected
                                  ? 'border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs'
                                  : 'border-gray-200 bg-white text-gray-800 hover:border-indigo-300'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                                  isSelected ? 'bg-white text-indigo-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                              {isSelected && <Check size={16} className="text-white" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {!isChecked ? (
                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          disabled={currentAnswer === undefined}
                          onClick={() => setChecked((prev) => ({ ...prev, [q.id]: true }))}
                          className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:from-indigo-700 hover:to-purple-700 disabled:opacity-40 shadow-2xs"
                        >
                          Check Answer
                        </button>
                      </div>
                    ) : (
                      <SmartFeedback
                        isCorrect={currentAnswer === (q as any).correctIndex}
                        whyExplanation={q.whyExplanation}
                        correctSentence={'options' in q && (q as any).options ? (q as any).options[(q as any).correctIndex] : undefined}
                        onWhyClick={() => setWhyModalData({
                          isOpen: true,
                          title: 'Situational Rule Explainer',
                          explanation: q.whyExplanation
                        })}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Key Phrases & Adult Tips (1 span) */}
        <div className="space-y-6">
          {/* Key Phrases */}
          <div className="rounded-3xl border border-emerald-200/80 bg-white p-5 sm:p-6 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span>High-Frequency Key Phrases</span>
            </h4>

            <div className="space-y-3">
              {scenario.keyPhrases.map((phrase, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-3.5 hover:border-emerald-300 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs sm:text-sm text-gray-900 font-sans">
                      "{phrase.phrase}"
                    </span>
                    <AudioButton text={phrase.phrase} size="sm" />
                  </div>
                  <span className="text-xs font-bold text-emerald-800 block mb-0.5">
                    Purpose: {phrase.explanation}
                  </span>
                  <p className="text-[11px] text-gray-600 font-sans">
                    Rule: {phrase.grammarRule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural & Workplace Communication Tip */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50/60 p-5 shadow-xs space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
              <Lightbulb size={16} className="text-amber-600" />
              <span>Ms. Maria's Professional Tip</span>
            </div>
            <p className="leading-relaxed font-sans text-amber-900">
              In international business and daily adult life, phrasing requests with <strong className="text-gray-900">"Could I please..."</strong> or <strong className="text-gray-900">"Would you mind..."</strong> establishes instant respect and professionalism.
            </p>
          </div>
        </div>
      </div>

      {/* Why Modal */}
      <WhyModal
        isOpen={whyModalData.isOpen}
        onClose={() => setWhyModalData((prev) => ({ ...prev, isOpen: false }))}
        title={whyModalData.title}
        explanation={whyModalData.explanation}
      />
    </div>
  );
};
