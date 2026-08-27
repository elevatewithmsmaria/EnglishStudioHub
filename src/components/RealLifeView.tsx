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
      <div className="border-b border-slate-200 pb-5">
        <span className="rounded-md bg-sky-50 border border-sky-200 px-2.5 py-1 text-xs font-bold text-sky-800 uppercase tracking-wider">
          Practical English
        </span>
        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Real-Life Situations & Professional Communication
        </h1>
        <p className="text-sm text-slate-600 font-medium">
          Apply grammar where it truly matters: meetings, phone calls, dining, medical visits, and job interviews.
        </p>
      </div>

      {/* Scenario Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {REAL_LIFE_SCENARIOS.map((s) => {
          const isSelected = s.id === selectedScenarioId;
          return (
            <button
              key={s.id}
              id={`tab-scenario-${s.id}`}
              onClick={() => setSelectedScenarioId(s.id)}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all ${
                isSelected
                  ? 'border-indigo-600 bg-indigo-50/90 text-indigo-950 font-bold shadow-xs ring-2 ring-indigo-500/20'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className={`p-2 rounded-xl mb-1.5 ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
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
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                  {scenario.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {scenario.title}
                </h3>
              </div>
              <span className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                {scenario.dialogue.length} Exchanges
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              {scenario.description}
            </p>

            {/* Dialogue Exchanges */}
            <div className="space-y-3.5 pt-2">
              {scenario.dialogue.map((line, idx) => {
                const isSpeakerA = idx % 2 === 0;

                return (
                  <div
                    key={idx}
                    className={`rounded-2xl p-4 transition-colors ${
                      isSpeakerA
                        ? 'border border-indigo-100 bg-indigo-50/50 ml-0 mr-4 sm:mr-12'
                        : 'border border-slate-200 bg-slate-50 mr-0 ml-4 sm:ml-12'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-bold text-indigo-900">
                        {line.speaker}
                      </span>
                      <AudioButton text={line.text} size="sm" />
                    </div>

                    <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                      "{line.text}"
                    </p>

                    {line.grammarHighlight && (
                      <div className="mt-2 rounded-lg bg-white/90 border border-slate-200/80 p-2 text-xs text-slate-600 font-medium flex items-center gap-1.5">
                        <span className="text-indigo-600 font-bold">💡 Grammar Note:</span>
                        <span>{line.grammarHighlight}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Situational Practice Exercises */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-base">
              <Sparkles size={18} className="text-indigo-600" />
              <span>Situational Decision Practice</span>
            </div>

            <div className="space-y-4">
              {scenario.practiceQuestions.map((q, qIdx) => {
                const isChecked = checked[q.id];
                const currentAnswer = answers[q.id];

                return (
                  <div key={q.id} className="rounded-xl border border-slate-100 bg-slate-50 p-4 space-y-3">
                    <p className="text-xs sm:text-sm font-bold text-slate-900">
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
                              className={`w-full text-left rounded-xl border p-3 text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'border-indigo-600 bg-indigo-50 text-indigo-950 ring-2 ring-indigo-500/20'
                                  : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold">
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <span>{opt}</span>
                              </div>
                              {isSelected && <Check size={15} className="text-indigo-600" />}
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
                          className="rounded-xl bg-indigo-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-indigo-700 disabled:opacity-40"
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
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600" />
              <span>High-Frequency Key Phrases</span>
            </h4>

            <div className="space-y-3">
              {scenario.keyPhrases.map((phrase, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3 hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      "{phrase.phrase}"
                    </span>
                    <AudioButton text={phrase.phrase} size="sm" />
                  </div>
                  <span className="text-xs font-bold text-indigo-700 block mb-0.5">
                    Purpose: {phrase.explanation}
                  </span>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Rule: {phrase.grammarRule}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cultural & Workplace Communication Tip */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm space-y-2 text-xs text-amber-950">
            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
              <Lightbulb size={16} className="text-amber-600" />
              <span>Coach Professional Tip</span>
            </div>
            <p className="leading-relaxed font-medium">
              In international business and daily adult life, phrasing requests with <strong className="text-slate-900">"Could I please..."</strong> or <strong className="text-slate-900">"Would you mind..."</strong> establishes instant respect and professionalism.
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
