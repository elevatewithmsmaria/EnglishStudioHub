import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  Sparkles,
  AlertTriangle,
  RotateCcw,
  Volume2,
  Check,
  Award,
  ChevronRight,
  Briefcase,
  Home,
  ShoppingBag,
  Plane,
  Heart,
  Clock,
  User
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Topic, LessonScreen, PracticeQuestion } from '../types';
import { AudioButton } from './common/AudioButton';
import { SmartFeedback } from './common/SmartFeedback';
import { WhyModal } from './common/WhyModal';
import { speakSentence } from '../utils/speech';

interface InteractiveLessonPlayerProps {
  topic: Topic;
  onFinishLesson: (topicId: string, earnedPoints: number) => void;
  onBackToModules: () => void;
  onOpenTopicQuiz?: (moduleId: number) => void;
}

export const InteractiveLessonPlayer: React.FC<InteractiveLessonPlayerProps> = ({
  topic,
  onFinishLesson,
  onBackToModules,
  onOpenTopicQuiz,
}) => {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'tabA' | 'tabB'>('tabA');

  // Practice state for Screen 7
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, number | string | boolean>>({});
  const [checkedQuestions, setCheckedQuestions] = useState<Record<string, boolean>>({});
  const [selectedWordOrder, setSelectedWordOrder] = useState<Record<string, string[]>>({});
  
  // Why Modal state
  const [whyModalData, setWhyModalData] = useState<{
    isOpen: boolean;
    title: string;
    explanation: string;
    formula?: string;
    correctExample?: string;
    incorrectExample?: string;
    adultTip?: string;
  }>({
    isOpen: false,
    title: '',
    explanation: ''
  });

  const screens = topic.screens;
  const currentScreen = screens[currentScreenIndex];
  const progressPercent = Math.round(((currentScreenIndex + 1) / screens.length) * 100);

  const handleNextScreen = () => {
    if (currentScreenIndex < screens.length - 1) {
      setCurrentScreenIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Completed lesson
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore confetti errors
      }
      onFinishLesson(topic.id, 50);
    }
  };

  const handlePrevScreen = () => {
    if (currentScreenIndex > 0) {
      setCurrentScreenIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openWhyModal = (title: string, explanation: string, formula?: string, right?: string, wrong?: string, tip?: string) => {
    setWhyModalData({
      isOpen: true,
      title,
      explanation,
      formula,
      correctExample: right,
      incorrectExample: wrong,
      adultTip: tip
    });
  };

  const getScreenTitle = (screen: LessonScreen, idx: number) => {
    switch (screen.type) {
      case 'intro': return '1. Quick Introduction';
      case 'why_it_matters': return '2. Why Does It Matter?';
      case 'explanation': return '3. Simple Explanation';
      case 'formula': return '4. Visual Formula';
      case 'real_life_examples': return '5. Real-Life Adult Examples';
      case 'common_mistakes': return '6. 🚨 Watch Out!';
      case 'practice': return '7. Interactive Practice';
      default: return `Screen ${idx + 1}`;
    }
  };

  const renderSituationIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'briefcase': return <Briefcase size={18} className="text-indigo-600" />;
      case 'home': return <Home size={18} className="text-emerald-600" />;
      case 'shoppingbag': return <ShoppingBag size={18} className="text-amber-600" />;
      case 'plane': return <Plane size={18} className="text-sky-600" />;
      case 'heart': return <Heart size={18} className="text-rose-600" />;
      case 'clock': return <Clock size={18} className="text-purple-600" />;
      default: return <User size={18} className="text-slate-600" />;
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
      {/* Top Header & Navigation Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
        <button
          id="btn-back-to-modules"
          onClick={onBackToModules}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/10 bg-[#F7F5F0] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Curriculum</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
            Step {currentScreenIndex + 1} of {screens.length}
          </span>
          <div className="h-1.5 w-32 sm:w-48 overflow-hidden rounded-full bg-[#E5E0D8]">
            <div
              className="h-full bg-[#1A1A1A] transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Screen step pills */}
      <div className="mb-6 flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {screens.map((sc, i) => (
          <button
            key={i}
            id={`step-pill-${i}`}
            onClick={() => setCurrentScreenIndex(i)}
            className={`px-3 py-1 text-xs font-bold rounded-full transition-all whitespace-nowrap uppercase tracking-wider ${
              i === currentScreenIndex
                ? 'bg-[#1A1A1A] text-white'
                : i < currentScreenIndex
                ? 'bg-[#4A5D4E]/10 text-[#4A5D4E] hover:bg-[#4A5D4E]/20'
                : 'bg-[#F7F5F0] text-[#1A1A1A]/50 hover:bg-[#E5E0D8]'
            }`}
          >
            {getScreenTitle(sc, i)}
          </button>
        ))}
      </div>

      {/* Main Screen Content Card */}
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 sm:p-8">
        {/* ================= SCREEN 1: INTRO ================= */}
        {currentScreen.type === 'intro' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
                Grammar Topic
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            {/* Concept Summary Callout */}
            <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 text-[#1A1A1A] text-sm sm:text-base leading-relaxed">
              <p className="font-serif italic font-bold text-base text-[#1A1A1A] mb-1">Coach Overview:</p>
              <p className="text-[#1A1A1A]/80">{currentScreen.conceptSummary}</p>
            </div>

            {/* Visual Graphic with Highlighted Roles */}
            {currentScreen.visualGraphic && (
              <div className="rounded-2xl border border-[#1A1A1A]/15 bg-[#FDFCF9] p-5 sm:p-7 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                    "{currentScreen.visualGraphic.heroSentence}"
                  </span>
                  <AudioButton text={currentScreen.visualGraphic.heroSentence} size="md" />
                </div>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                  {currentScreen.visualGraphic.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-[#1A1A1A]/10 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold shadow-2xs"
                    >
                      <div className="text-base font-serif italic font-bold text-[#1A1A1A]">{item.word}</div>
                      <div className="text-[10px] text-[#1A1A1A]/50 uppercase tracking-widest">{item.role}</div>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs font-serif italic text-[#1A1A1A]/60">
                  {currentScreen.visualGraphic.caption}
                </p>
              </div>
            )}

            {/* Key Takeaways */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                What you will master in this lesson:
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {currentScreen.keyTakeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-3 text-xs sm:text-sm text-[#1A1A1A]"
                  >
                    <CheckCircle2 size={16} className="text-[#4A5D4E] mt-0.5 shrink-0" />
                    <span className="font-medium">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= SCREEN 2: WHY DOES IT MATTER? ================= */}
        {currentScreen.type === 'why_it_matters' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 rounded-full text-[#4A5D4E] inline-block mb-3">
                Real-World Purpose
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentScreen.adultSituations.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1A1A1A]/10 bg-white p-4.5 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-lg bg-[#F7F5F0]">
                      {renderSituationIcon(sit.icon)}
                    </div>
                    <h4 className="font-serif italic font-bold text-[#1A1A1A] text-sm sm:text-base">{sit.situation}</h4>
                  </div>
                  <div className="rounded-lg bg-[#F7F5F0] border border-[#1A1A1A]/10 p-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A] flex items-center justify-between">
                    <span>{sit.example}</span>
                    <AudioButton text={sit.example} size="sm" />
                  </div>
                  <p className="mt-2 text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
                    {sit.whyNeeded}
                  </p>
                </div>
              ))}
            </div>

            {/* Coach Tip */}
            <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-[#1A1A1A] text-xs sm:text-sm">
              <div className="flex items-center gap-2 font-serif italic font-bold mb-1">
                <Lightbulb size={15} className="text-[#C25E3E]" />
                <span>Coach Insight:</span>
              </div>
              <p className="leading-relaxed font-sans text-[#1A1A1A]/80">{currentScreen.coachTip}</p>
            </div>
          </div>
        )}

        {/* ================= SCREEN 3: SIMPLE EXPLANATION ================= */}
        {currentScreen.type === 'explanation' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
                Plain English Explanation
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-[#1A1A1A] font-serif italic font-bold text-sm sm:text-base">
              Core Rule: {currentScreen.coreRule}
            </div>

            <div className="space-y-3">
              {currentScreen.breakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1A1A1A]/10 bg-white p-4 transition-colors shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-serif italic font-bold text-[#1A1A1A] text-sm sm:text-base">{item.term}</span>
                    <span className="text-[10px] font-bold text-[#1A1A1A]/50 bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Part {idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mb-2">{item.plainDefinition}</p>
                  <div className="rounded-lg bg-[#F7F5F0] border border-[#1A1A1A]/10 p-2.5 text-xs sm:text-sm font-medium text-[#1A1A1A] flex items-center justify-between">
                    <span>Example: <strong className="text-[#1A1A1A] font-bold">{item.simpleExample}</strong></span>
                    <AudioButton text={item.simpleExample} size="sm" />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Toggle if present */}
            {currentScreen.interactiveToggle && (
              <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4">
                <div className="flex gap-2 mb-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('tabA')}
                    className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === 'tabA' ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]/70 border border-[#1A1A1A]/10'
                    }`}
                  >
                    {currentScreen.interactiveToggle.tabA.name}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('tabB')}
                    className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                      activeTab === 'tabB' ? 'bg-[#1A1A1A] text-white' : 'bg-white text-[#1A1A1A]/70 border border-[#1A1A1A]/10'
                    }`}
                  >
                    {currentScreen.interactiveToggle.tabB.name}
                  </button>
                </div>
                <div className="rounded-lg bg-white p-3.5 text-xs sm:text-sm text-[#1A1A1A] border border-[#1A1A1A]/10">
                  <p className="font-semibold mb-1">
                    {activeTab === 'tabA'
                      ? currentScreen.interactiveToggle.tabA.content
                      : currentScreen.interactiveToggle.tabB.content}
                  </p>
                  <p className="text-[#4A5D4E] font-medium">
                    Example: {activeTab === 'tabA'
                      ? currentScreen.interactiveToggle.tabA.example
                      : currentScreen.interactiveToggle.tabB.example}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= SCREEN 4: FORMULA ================= */}
        {currentScreen.type === 'formula' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
                Sentence Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            {/* Formula Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentScreen.formulaBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-1">
                    {block.label}
                  </span>
                  <span className="text-sm sm:text-base font-serif italic font-bold text-[#1A1A1A] block">
                    {block.part}
                  </span>
                </div>
              ))}
            </div>

            {/* Sentence Table */}
            <div className="overflow-hidden rounded-xl border border-[#1A1A1A]/10">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F7F5F0] text-[#1A1A1A] uppercase font-bold text-[10px] tracking-widest">
                  <tr>
                    <th className="px-3.5 py-3">Context</th>
                    <th className="px-3.5 py-3">Subject</th>
                    <th className="px-3.5 py-3">Verb / Helping</th>
                    <th className="px-3.5 py-3">Object / Rest</th>
                    <th className="px-3.5 py-3 text-right">Audio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1A1A1A]/10 bg-white">
                  {currentScreen.tableExamples.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#F7F5F0]/60">
                      <td className="px-3.5 py-3 font-serif italic text-[#1A1A1A]/60 text-xs">{row.context}</td>
                      <td className="px-3.5 py-3 font-bold text-[#1A1A1A]">{row.subject}</td>
                      <td className="px-3.5 py-3 font-bold text-[#4A5D4E]">{row.verbOrAux}</td>
                      <td className="px-3.5 py-3 font-medium text-[#1A1A1A]/80">{row.objectOrComplement}</td>
                      <td className="px-3.5 py-3 text-right">
                        <AudioButton text={row.fullSentence} size="sm" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {currentScreen.variations && currentScreen.variations.length > 0 && (
              <div className="space-y-2">
                {currentScreen.variations.map((v, idx) => (
                  <div key={idx} className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-3.5 text-xs sm:text-sm text-[#1A1A1A]">
                    <span className="font-bold text-[#1A1A1A]">{v.title}: </span>
                    <span className="font-serif italic font-bold text-[#1A1A1A]/80">{v.formula}</span>
                    <p className="mt-1 text-[#1A1A1A]/70 font-sans">{v.example}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= SCREEN 5: REAL-LIFE EXAMPLES ================= */}
        {currentScreen.type === 'real_life_examples' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
                Everyday English
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentScreen.examples.map((ex) => (
                <div
                  key={ex.id}
                  className="rounded-xl border border-[#1A1A1A]/10 bg-white p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60">
                        {ex.categoryLabel}
                      </span>
                      <span className="text-xs text-[#1A1A1A]/40 font-medium">{ex.speakerRole}</span>
                    </div>

                    <p className="text-base sm:text-lg font-serif italic font-bold text-[#1A1A1A] my-2">
                      "{ex.sentence}"
                    </p>
                    <p className="text-xs text-[#1A1A1A]/60 font-sans">
                      💡 {ex.breakdownNote}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <AudioButton text={ex.sentence} size="sm" label="Listen" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SCREEN 6: COMMON MISTAKES ================= */}
        {currentScreen.type === 'common_mistakes' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#C25E3E]/10 border border-[#C25E3E]/20 rounded-full text-[#C25E3E] inline-block mb-3">
                Watch Out!
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {currentScreen.mistakes.map((mistake) => (
                <div
                  key={mistake.id}
                  className="rounded-xl border border-[#1A1A1A]/10 bg-white p-4 sm:p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A] px-3 py-0.5 text-xs font-bold uppercase tracking-wider">
                      {mistake.ruleTag}
                    </span>
                    <button
                      type="button"
                      onClick={() => openWhyModal(
                        `Why Avoid: ${mistake.ruleTag}`,
                        mistake.explanation,
                        undefined,
                        mistake.correct,
                        mistake.incorrect,
                        mistake.severityTip
                      )}
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:underline"
                    >
                      <Lightbulb size={13} className="text-[#C25E3E]" />
                      <span>Why?</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {/* Incorrect */}
                    <div className="rounded-lg border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-3">
                      <div className="flex items-center gap-1.5 text-[#C25E3E] font-bold text-xs mb-1">
                        <AlertTriangle size={13} />
                        <span>Common Slip (Avoid):</span>
                      </div>
                      <p className="line-through decoration-[#C25E3E] decoration-2 text-[#1A1A1A]/70 font-medium">
                        {mistake.incorrect}
                      </p>
                    </div>

                    {/* Correct */}
                    <div className="rounded-lg border border-[#4A5D4E]/20 bg-[#4A5D4E]/5 p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5 text-[#4A5D4E] font-bold text-xs">
                          <CheckCircle2 size={13} />
                          <span>Natural English:</span>
                        </div>
                        <AudioButton text={mistake.correct} size="sm" />
                      </div>
                      <p className="text-[#1A1A1A] font-bold">
                        {mistake.correct}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans bg-[#F7F5F0] p-3 rounded-lg border border-[#1A1A1A]/10">
                    <strong className="text-[#1A1A1A]">Grammar Reason: </strong>
                    {mistake.explanation}
                  </p>
                </div>
              ))}
            </div>

            {/* Remember Rule Banner */}
            <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-[#1A1A1A] font-serif italic font-bold text-sm text-center">
              Golden Rule: {currentScreen.rememberRule}
            </div>
          </div>
        )}

        {/* ================= SCREEN 7: PRACTICE ================= */}
        {currentScreen.type === 'practice' && (
          <div className="space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 rounded-full text-[#4A5D4E] inline-block mb-3">
                Interactive Check
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
                {currentScreen.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
                {currentScreen.subtitle}
              </p>
            </div>

            <div className="space-y-6">
              {currentScreen.questions.map((q, qIndex) => {
                const isChecked = checkedQuestions[q.id];
                const selectedAnswer = practiceAnswers[q.id];

                return (
                  <div
                    key={q.id}
                    className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0]/50 p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                        Exercise {qIndex + 1} of {currentScreen.questions.length}
                      </span>
                      {q.adultContext && (
                        <span className="rounded-full bg-white border border-[#1A1A1A]/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/70">
                          {q.adultContext}
                        </span>
                      )}
                    </div>

                    <h4 className="text-base font-serif italic font-bold text-[#1A1A1A]">
                      {q.prompt || (q.type === 'fill_blank' ? q.sentenceWithBlank : '')}
                    </h4>

                    {/* Question Type: Multiple Choice or Fill in Blank */}
                    {(q.type === 'multiple_choice' || q.type === 'fill_blank' || q.type === 'sentence_correction') && (
                      <div className="space-y-2">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = selectedAnswer === optIdx;
                          return (
                            <button
                              key={optIdx}
                              type="button"
                              id={`opt-${q.id}-${optIdx}`}
                              onClick={() => {
                                if (!isChecked) {
                                  setPracticeAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                                }
                              }}
                              className={`w-full text-left rounded-xl border p-3.5 text-sm font-medium transition-all flex items-center justify-between ${
                                isSelected
                                  ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                                  : 'border-[#1A1A1A]/15 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/40'
                              } ${isChecked ? 'cursor-default' : 'cursor-pointer'}`}
                            >
                              <div className="flex items-center gap-3">
                                <span
                                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                                    isSelected
                                      ? 'bg-white text-[#1A1A1A]'
                                      : 'bg-[#F7F5F0] text-[#1A1A1A]/70'
                                  }`}
                                >
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

                    {/* Question Type: Word Order (Scrambled) */}
                    {q.type === 'word_order' && (
                      <div className="space-y-3">
                        <div className="min-h-[50px] rounded-xl border border-dashed border-[#1A1A1A]/20 bg-white p-3 flex flex-wrap gap-2 items-center">
                          {(selectedWordOrder[q.id] || []).length === 0 ? (
                            <span className="text-xs text-[#1A1A1A]/40 italic font-serif">Click words below in order to build the sentence...</span>
                          ) : (
                            (selectedWordOrder[q.id] || []).map((word, wIdx) => (
                              <span
                                key={wIdx}
                                onClick={() => {
                                  if (!isChecked) {
                                    const next = [...(selectedWordOrder[q.id] || [])];
                                    next.splice(wIdx, 1);
                                    setSelectedWordOrder((prev) => ({ ...prev, [q.id]: next }));
                                  }
                                }}
                                className="inline-flex items-center gap-1 rounded-lg bg-[#1A1A1A] text-white px-3 py-1.5 text-xs font-bold cursor-pointer hover:bg-[#C25E3E]"
                              >
                                {word}
                              </span>
                            ))
                          )}
                        </div>

                        {!isChecked && (
                          <div className="flex flex-wrap gap-2">
                            {q.scrambledWords.map((word, wIdx) => {
                              const isUsed = (selectedWordOrder[q.id] || []).includes(word);
                              return (
                                <button
                                  key={wIdx}
                                  type="button"
                                  disabled={isUsed}
                                  onClick={() => {
                                    const current = selectedWordOrder[q.id] || [];
                                    setSelectedWordOrder((prev) => ({ ...prev, [q.id]: [...current, word] }));
                                    setPracticeAnswers((prev) => ({
                                      ...prev,
                                      [q.id]: [...current, word].join(' ')
                                    }));
                                  }}
                                  className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all ${
                                    isUsed
                                      ? 'border-[#1A1A1A]/5 bg-[#F7F5F0] text-[#1A1A1A]/20 cursor-not-allowed'
                                      : 'border-[#1A1A1A]/20 bg-white text-[#1A1A1A] hover:border-[#1A1A1A] hover:bg-[#F7F5F0]'
                                  }`}
                                >
                                  {word}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Question Type: Matching */}
                    {q.type === 'matching' && (
                      <div className="space-y-2">
                        {q.pairs.map((pair) => (
                          <div
                            key={pair.id}
                            className="flex items-center justify-between rounded-xl border border-[#1A1A1A]/10 bg-white p-3 text-xs sm:text-sm font-semibold"
                          >
                            <span className="text-[#1A1A1A]">{pair.left}</span>
                            <ArrowRight size={14} className="text-[#1A1A1A]/40" />
                            <span className="text-[#4A5D4E] font-bold">{pair.right}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Check Button & Feedback */}
                    {!isChecked ? (
                      <div className="flex justify-end pt-2">
                        <button
                          id={`btn-check-q-${q.id}`}
                          type="button"
                          disabled={practiceAnswers[q.id] === undefined && q.type !== 'matching'}
                          onClick={() => setCheckedQuestions((prev) => ({ ...prev, [q.id]: true }))}
                          className="rounded-lg bg-[#1A1A1A] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] disabled:opacity-30 transition-colors"
                        >
                          Check Answer
                        </button>
                      </div>
                    ) : (
                      <SmartFeedback
                        isCorrect={
                          q.type === 'multiple_choice' || q.type === 'fill_blank' || q.type === 'sentence_correction'
                            ? practiceAnswers[q.id] === q.correctIndex
                            : q.type === 'word_order'
                            ? (selectedWordOrder[q.id] || []).join(' ').trim() === q.correctSentence.trim()
                            : true
                        }
                        whyExplanation={q.whyExplanation}
                        correctSentence={
                          q.type === 'sentence_correction'
                            ? q.correctSentence
                            : q.type === 'word_order'
                            ? q.correctSentence
                            : undefined
                        }
                        onWhyClick={() => openWhyModal(
                          'Grammar Rule Deep-Dive',
                          q.whyExplanation,
                          undefined,
                          q.type === 'sentence_correction' ? q.correctSentence : undefined
                        )}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5">
          <button
            id="btn-prev-screen"
            type="button"
            disabled={currentScreenIndex === 0}
            onClick={handlePrevScreen}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] disabled:opacity-30 transition-colors"
          >
            <ArrowLeft size={14} />
            <span>Previous</span>
          </button>

          <button
            id="btn-next-screen"
            type="button"
            onClick={handleNextScreen}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
          >
            <span>{currentScreenIndex === screens.length - 1 ? 'Complete Lesson' : 'Next Step'}</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Why Modal */}
      <WhyModal
        isOpen={whyModalData.isOpen}
        onClose={() => setWhyModalData((prev) => ({ ...prev, isOpen: false }))}
        title={whyModalData.title}
        explanation={whyModalData.explanation}
        formula={whyModalData.formula}
        correctExample={whyModalData.correctExample}
        incorrectExample={whyModalData.incorrectExample}
        adultTip={whyModalData.adultTip}
      />
    </div>
  );
};
