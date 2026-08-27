import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Download,
  FileCheck,
  Check,
  X,
  BookOpen,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight,
  ExternalLink,
  Zap,
  Filter
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  GRAND_100_ASSESSMENT_QUESTIONS,
  calculateGrand100Report,
  GRAND_100_SECTIONS,
  LESSON_DIAGNOSTICS,
  getDiagnosticForModule
} from '../data/assessmentData';
import { PracticeQuestion, UserProgress } from '../types';
import { SmartFeedback } from './common/SmartFeedback';
import { AudioButton } from './common/AudioButton';
import { ALL_MODULES } from '../data/curriculum';

interface FinalAssessmentViewProps {
  progress: UserProgress;
  onSaveAssessmentResult: (score: number, level: string) => void;
  initialModuleDiagnosticId?: number | null;
  onSelectTopic?: (topicId: string) => void;
}

type TestMode = 'grand100' | 'lesson_diagnostic';

export const FinalAssessmentView: React.FC<FinalAssessmentViewProps> = ({
  progress,
  onSaveAssessmentResult,
  initialModuleDiagnosticId = null,
  onSelectTopic,
}) => {
  const [testMode, setTestMode] = useState<TestMode>(
    initialModuleDiagnosticId ? 'lesson_diagnostic' : 'grand100'
  );
  const [selectedModuleId, setSelectedModuleId] = useState<number>(
    initialModuleDiagnosticId || 1
  );

  const [testStarted, setTestStarted] = useState<boolean>(!!initialModuleDiagnosticId);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  // Active question set depending on testMode
  const activeDiagnosticInfo = LESSON_DIAGNOSTICS[selectedModuleId];
  const questions: PracticeQuestion[] =
    testMode === 'grand100'
      ? GRAND_100_ASSESSMENT_QUESTIONS
      : activeDiagnosticInfo?.questions || [];

  const currentQ = questions[currentIndex];
  const isCurrentChecked = checked[currentIndex];
  const currentAnswer = answers[currentIndex];

  useEffect(() => {
    if (initialModuleDiagnosticId) {
      setTestMode('lesson_diagnostic');
      setSelectedModuleId(initialModuleDiagnosticId);
      setTestStarted(true);
      setCurrentIndex(0);
      setAnswers({});
      setChecked({});
      setIsFinished(false);
    }
  }, [initialModuleDiagnosticId]);

  const handleStartTest = (mode: TestMode, modId?: number) => {
    setTestMode(mode);
    if (modId) setSelectedModuleId(modId);
    setTestStarted(true);
    setCurrentIndex(0);
    setAnswers({});
    setChecked({});
    setIsFinished(false);
    setShowCertificate(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (optIndex: number) => {
    if (isCurrentChecked) return;
    setAnswers((prev) => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleCheckAnswer = () => {
    if (currentAnswer === undefined) return;
    setChecked((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Calculate final results
      let totalCorrect = 0;
      questions.forEach((q, idx) => {
        if (answers[idx] === (q as any).correctIndex) {
          totalCorrect += 1;
        }
      });

      if (testMode === 'grand100') {
        const report = calculateGrand100Report(totalCorrect, 100);
        onSaveAssessmentResult(totalCorrect, report.cefrLevel);
      } else {
        const pct = Math.round((totalCorrect / questions.length) * 100);
        const lvl = pct >= 80 ? 'Mastered' : pct >= 60 ? 'Good' : 'Needs Review';
        onSaveAssessmentResult(totalCorrect, `${activeDiagnosticInfo?.moduleTitle || 'Module Diagnostic'} (${lvl})`);
      }

      setIsFinished(true);
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.6 }
        });
      } catch (e) {}
    }
  };

  const handleJumpToQuestion = (qIdx: number) => {
    setCurrentIndex(qIdx);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Grand 100 & Lesson Diagnostic accuracy
  let computedCorrect = 0;
  questions.forEach((q, idx) => {
    if (answers[idx] === (q as any).correctIndex) {
      computedCorrect += 1;
    }
  });

  const grandReport = testMode === 'grand100' ? calculateGrand100Report(computedCorrect, 100) : null;
  const lessonPct = Math.round((computedCorrect / (questions.length || 1)) * 100);

  // 1. Landing Screen: Choose Grand 100 or Lesson Diagnostic
  if (!testStarted) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 space-y-8">
        {/* Header Ribbon */}
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-10 text-center space-y-4">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-md">
            <Award size={40} />
          </div>

          <div className="max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block">
              Diagnostic Testing Center
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif italic text-[#1A1A1A] tracking-tight">
              Grammar Diagnostics & 100-Question Assessment
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-sans max-w-2xl mx-auto">
              Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-[#1A1A1A] underline">Ms. Maria</a>.
              Evaluate your foundational English command through comprehensive diagnostics.
            </p>
          </div>

          {/* Mode Switch Tabs */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex rounded-xl bg-[#F7F5F0] p-1.5 border border-[#1A1A1A]/10 gap-1">
              <button
                id="btn-tab-grand-100"
                onClick={() => setTestMode('grand100')}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  testMode === 'grand100'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                🌟 Grand 100-Question Exam
              </button>
              <button
                id="btn-tab-lesson-diagnostics"
                onClick={() => setTestMode('lesson_diagnostic')}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  testMode === 'lesson_diagnostic'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
              >
                📋 Lesson Diagnostics (16 Modules)
              </button>
            </div>
          </div>
        </div>

        {/* Option 1: Grand 100 Exam */}
        {testMode === 'grand100' && (
          <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#1A1A1A]/10 pb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C25E3E] font-mono">
                  THE COMPLETE BENCHMARK
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A] mt-1">
                  100-Question Grand Diagnostic Assessment
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-1 font-sans max-w-2xl">
                  Evaluates 7 distinct core grammar competencies from basic Sentence Architecture through Modals, Conditionals, and Workplace Pragmatics.
                </p>
              </div>

              <button
                id="btn-start-grand-100-test"
                onClick={() => handleStartTest('grand100')}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1A1A1A] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-all hover:scale-105 shadow-md shrink-0"
              >
                <Zap size={18} className="text-[#C25E3E]" />
                <span>Begin 100-Question Exam</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Test Breakdown Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">Length</span>
                <div className="text-2xl font-serif italic font-bold text-[#1A1A1A]">100 Questions</div>
                <p className="text-xs text-[#1A1A1A]/70">7 categorized sections</p>
              </div>
              <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">Time Guidance</span>
                <div className="text-2xl font-serif italic font-bold text-[#1A1A1A]">45–60 Mins</div>
                <p className="text-xs text-[#1A1A1A]/70">Self-paced with instant feedback</p>
              </div>
              <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">Curriculum Span</span>
                <div className="text-2xl font-serif italic font-bold text-[#1A1A1A]">Modules 1–16</div>
                <p className="text-xs text-[#1A1A1A]/70">All grammatical topics covered</p>
              </div>
              <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">Certification</span>
                <div className="text-2xl font-serif italic font-bold text-[#1A1A1A]">CEFR Rating</div>
                <p className="text-xs text-[#1A1A1A]/70">A1, A2, B1, B1+ certified profile</p>
              </div>
            </div>

            {/* 7 Sections Overview */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70">
                100-Question Structure & Tested Domains
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {GRAND_100_SECTIONS.map((sec) => (
                  <div
                    key={sec.part}
                    className="flex items-start gap-3 rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] p-4 text-xs"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#1A1A1A] text-white font-mono font-bold shrink-0 text-[11px]">
                      {sec.part}
                    </div>
                    <div>
                      <div className="font-bold text-[#1A1A1A] flex items-center gap-2">
                        <span>{sec.title}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A]/70">
                          {sec.count} Qs (Q{sec.range[0]}-{sec.range[1]})
                        </span>
                      </div>
                      <p className="text-[11px] text-[#1A1A1A]/60 mt-0.5 font-sans">
                        {sec.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Option 2: Lesson Diagnostics Grid (All 16 Modules) */}
        {testMode === 'lesson_diagnostic' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A]">
                  Lesson-by-Lesson Diagnostic Tests
                </h2>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans mt-0.5">
                  Select any of the 16 lesson modules below to take its targeted 10-question diagnostic test.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-white border border-[#1A1A1A]/10 text-[#1A1A1A]/80">
                16 Module Diagnostic Tests Available
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ALL_MODULES.map((mod) => {
                const diag = LESSON_DIAGNOSTICS[mod.id];
                return (
                  <div
                    key={mod.id}
                    className="flex flex-col justify-between rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 hover:border-[#1A1A1A]/30 transition-all shadow-2xs group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A]/70">
                          Module {mod.id}
                        </span>
                        <span className="text-[10px] text-[#1A1A1A]/50 flex items-center gap-1 font-mono">
                          <Clock size={11} /> 8 Mins • 10 Qs
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif italic font-bold text-base text-[#1A1A1A] group-hover:text-[#C25E3E] transition-colors line-clamp-1">
                          {mod.title}
                        </h3>
                        <p className="text-xs text-[#1A1A1A]/70 font-sans mt-1 line-clamp-2">
                          {diag ? diag.tagline : mod.description}
                        </p>
                      </div>

                      {diag && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {diag.coreConceptsTested.slice(0, 2).map((c, i) => (
                            <span
                              key={i}
                              className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#F7F5F0] text-[#1A1A1A]/70 truncate max-w-[200px]"
                            >
                              ✓ {c}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 mt-2 border-t border-[#1A1A1A]/5 flex items-center justify-between gap-2">
                      <button
                        id={`btn-start-diag-mod-${mod.id}`}
                        onClick={() => handleStartTest('lesson_diagnostic', mod.id)}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1A1A1A] py-2 px-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
                      >
                        <Zap size={12} className="text-[#C25E3E]" />
                        <span>Start Diagnostic</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 2. Active Test Player (Supports 100 questions or 10-question Lesson Diagnostics)
  if (!isFinished && currentQ) {
    const isGrand = testMode === 'grand100';
    const totalQuestions = questions.length;
    const progressPct = Math.round(((currentIndex + 1) / totalQuestions) * 100);

    return (
      <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 space-y-6">
        {/* Top Navigation & Status Bar */}
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (window.confirm('Do you want to exit the diagnostic test? Your current progress will be reset.')) {
                  setTestStarted(false);
                }
              }}
              className="rounded-lg border border-[#1A1A1A]/15 bg-[#F7F5F0] p-2 text-xs font-bold text-[#1A1A1A] hover:bg-[#EAE6DF] transition-colors"
              title="Return to Menu"
            >
              <ArrowLeft size={16} />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded text-[#1A1A1A]/70">
                  {isGrand ? 'Grand 100-Question Exam' : activeDiagnosticInfo?.diagnosticTitle}
                </span>
                <span className="text-xs font-mono font-bold text-[#1A1A1A]/80">
                  Question {currentIndex + 1} of {totalQuestions}
                </span>
              </div>
              <p className="text-xs text-[#1A1A1A]/60 font-sans mt-0.5">
                Prepared by <span className="font-serif italic font-bold">Ms. Maria</span>
              </p>
            </div>
          </div>

          <div className="w-full sm:w-48 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#1A1A1A]/70">
              <span>Progress</span>
              <span>{progressPct}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[#1A1A1A]/10 overflow-hidden">
              <div
                className="h-full bg-[#1A1A1A] transition-all duration-300 rounded-full"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* Quick Question Navigation Strip for Grand 100 */}
        {isGrand && (
          <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-3 space-y-2">
            <div className="flex items-center justify-between text-xs px-1 text-[#1A1A1A]/70">
              <span className="font-mono text-[11px] font-bold">Question Palette (1–100)</span>
              <span className="text-[11px]">
                Answered: {Object.keys(checked).length} / 100
              </span>
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
              {questions.map((_, idx) => {
                const isAns = checked[idx];
                const isCur = idx === currentIndex;
                const isCorrect = answers[idx] === (questions[idx] as any).correctIndex;
                let bgClass = 'bg-[#F7F5F0] text-[#1A1A1A]/60 border-[#1A1A1A]/10';

                if (isCur) {
                  bgClass = 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-bold ring-2 ring-[#C25E3E]/50';
                } else if (isAns) {
                  bgClass = isCorrect
                    ? 'bg-[#4A5D4E]/15 text-[#4A5D4E] border-[#4A5D4E]/40 font-bold'
                    : 'bg-[#C25E3E]/15 text-[#C25E3E] border-[#C25E3E]/40 font-bold';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-7 w-7 shrink-0 rounded-md border text-[10px] font-mono transition-all flex items-center justify-center ${bgClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Main Question Card */}
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#F7F5F0] text-[#1A1A1A]/70 border border-[#1A1A1A]/10">
                {currentQ.type.replace('_', ' ')}
              </span>
              <AudioButton
                text={
                  currentQ.sentenceWithBlank
                    ? currentQ.sentenceWithBlank.replace('___', 'blank')
                    : currentQ.prompt || ''
                }
              />
            </div>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#1A1A1A] leading-snug">
              {currentQ.prompt}
            </h2>

            {/* Sentence with blank display */}
            {currentQ.sentenceWithBlank && (
              <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] p-4 text-base font-serif italic text-[#1A1A1A]">
                {currentQ.sentenceWithBlank}
              </div>
            )}

            {/* Sentence Correction Display */}
            {currentQ.incorrectSentence && (
              <div className="rounded-xl border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-4 text-sm font-sans space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#C25E3E] block">
                  Identify the error and select the correct sentence:
                </span>
                <p className="text-[#1A1A1A] font-serif italic">
                  "{currentQ.incorrectSentence}"
                </p>
              </div>
            )}

            {/* Real Life Situation */}
            {currentQ.scenario && (
              <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-xs font-sans space-y-1">
                <span className="text-[10px] font-mono uppercase font-bold text-[#1A1A1A]/60 block">
                  Scenario ({currentQ.speaker || 'Workplace Context'}):
                </span>
                <p className="text-[#1A1A1A]/80 font-sans">
                  {currentQ.scenario}
                </p>
                {currentQ.promptQuestion && (
                  <p className="font-bold text-[#1A1A1A] pt-1">
                    {currentQ.promptQuestion}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Options List */}
          <div className="space-y-2.5 pt-2">
            {currentQ.options?.map((option, optIdx) => {
              const isSelected = currentAnswer === optIdx;
              const isCorrectOpt = optIdx === (currentQ as any).correctIndex;

              let btnClass = 'border-[#1A1A1A]/10 bg-[#FDFCF9] text-[#1A1A1A] hover:bg-[#F7F5F0]';
              if (isSelected && !isCurrentChecked) {
                btnClass = 'border-[#1A1A1A] bg-[#1A1A1A] text-white shadow-sm';
              } else if (isCurrentChecked) {
                if (isCorrectOpt) {
                  btnClass = 'border-[#4A5D4E] bg-[#4A5D4E]/10 text-[#4A5D4E] font-bold';
                } else if (isSelected && !isCorrectOpt) {
                  btnClass = 'border-[#C25E3E] bg-[#C25E3E]/10 text-[#C25E3E]';
                } else {
                  btnClass = 'opacity-50 border-[#1A1A1A]/10 bg-[#FDFCF9] text-[#1A1A1A]/60';
                }
              }

              return (
                <button
                  key={optIdx}
                  id={`opt-btn-${currentIndex}-${optIdx}`}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isCurrentChecked}
                  className={`w-full text-left rounded-xl border p-4 text-sm font-sans transition-all flex items-center justify-between gap-3 ${btnClass}`}
                >
                  <span className="flex-1">{option}</span>
                  {isCurrentChecked && isCorrectOpt && (
                    <CheckCircle2 size={18} className="text-[#4A5D4E] shrink-0" />
                  )}
                  {isCurrentChecked && isSelected && !isCorrectOpt && (
                    <X size={18} className="text-[#C25E3E] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* SmartFeedback Component upon Checking */}
          {isCurrentChecked && (
            <SmartFeedback
              isCorrect={currentAnswer === (currentQ as any).correctIndex}
              whyExplanation={currentQ.whyExplanation || 'Explanation verified by Ms. Maria.'}
              nativeTranslation={currentQ.grammarFocus ? `Grammar Rule: ${currentQ.grammarFocus}` : undefined}
            />
          )}

          {/* Action Footer Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-[#1A1A1A]/10">
            <button
              onClick={() => {
                if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
              }}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/15 bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] disabled:opacity-30"
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>

            {!isCurrentChecked ? (
              <button
                id="btn-check-diagnostic-answer"
                onClick={handleCheckAnswer}
                disabled={currentAnswer === undefined}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white disabled:opacity-40 hover:bg-[#333] transition-colors"
              >
                <span>Check Answer</span>
                <Check size={14} />
              </button>
            ) : (
              <button
                id="btn-next-diagnostic-question"
                onClick={handleNext}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
              >
                <span>{currentIndex === questions.length - 1 ? 'View Final Report' : 'Next Question'}</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 3. Completed State & Official Certificate Report
  if (isFinished) {
    const isGrand = testMode === 'grand100';

    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 space-y-8">
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-10 space-y-8 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] text-white shadow-md">
            <Sparkles size={36} />
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/30 rounded-full text-[#4A5D4E] inline-block">
              Diagnostic Assessment Complete
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif italic text-[#1A1A1A]">
              {isGrand ? 'Grand 100-Question Evaluation Report' : `${activeDiagnosticInfo?.diagnosticTitle} Report`}
            </h1>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans max-w-xl mx-auto">
              Prepared and certified by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-[#1A1A1A] underline">Ms. Maria</a>.
            </p>
          </div>

          {/* Grand 100 Score Summary */}
          {isGrand && grandReport ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5">
                  <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block">Total Score</span>
                  <div className="text-4xl font-serif italic font-bold text-[#1A1A1A]">{grandReport.totalCorrect}/100</div>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1 font-mono">{grandReport.overallPercentage}% Accuracy</p>
                </div>
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5">
                  <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block">CEFR Level</span>
                  <div className="text-4xl font-serif italic font-bold text-[#4A5D4E]">{grandReport.cefrLevel}</div>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">{grandReport.levelTitle}</p>
                </div>
                <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5">
                  <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block">Status</span>
                  <div className="text-3xl font-serif italic font-bold text-[#1A1A1A]">Certified</div>
                  <p className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">Ms. Maria's Curriculum</p>
                </div>
              </div>

              {/* Section Breakdown Grid */}
              <div className="text-left space-y-3 max-w-3xl mx-auto pt-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A]/70">
                  Performance Breakdown by Domain (7 Sections)
                </h3>
                <div className="space-y-2.5">
                  {grandReport.sectionScores.map((sec) => (
                    <div
                      key={sec.part}
                      className="rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] p-3.5 space-y-1.5"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-[#1A1A1A] font-serif italic">
                          Part {sec.part}: {sec.title}
                        </span>
                        <span className="font-mono font-bold text-[#1A1A1A]">
                          {sec.score}/{sec.total} ({sec.percentage}%)
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#1A1A1A]/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            sec.percentage >= 80 ? 'bg-[#4A5D4E]' : sec.percentage >= 60 ? 'bg-[#1A1A1A]' : 'bg-[#C25E3E]'
                          }`}
                          style={{ width: `${sec.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Lesson Diagnostic Score */
            <div className="max-w-md mx-auto rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-6 space-y-3 text-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">
                Module Diagnostic Result
              </span>
              <div className="text-5xl font-serif italic font-bold text-[#1A1A1A]">
                {computedCorrect} / {questions.length}
              </div>
              <div className="text-sm font-mono font-bold text-[#4A5D4E]">
                {lessonPct}% Accuracy
              </div>
              <p className="text-xs text-[#1A1A1A]/70 font-sans">
                {lessonPct >= 80
                  ? 'Outstanding command! You are ready to move on to subsequent lessons.'
                  : 'Good effort! Review the lesson screens and practice workout to reinforce weak areas.'}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-[#1A1A1A]/10">
            <button
              onClick={() => handleStartTest(testMode, selectedModuleId)}
              className="inline-flex items-center gap-2 rounded-lg border border-[#1A1A1A]/20 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
            >
              <RotateCcw size={14} />
              <span>Retake Diagnostic</span>
            </button>

            <button
              onClick={() => setTestStarted(false)}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
            >
              <span>Back to Diagnostics Center</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
