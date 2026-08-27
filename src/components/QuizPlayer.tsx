import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sparkles,
  Award,
  Lightbulb,
  Check,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PracticeQuestion } from '../types';
import { SmartFeedback } from './common/SmartFeedback';
import { WhyModal } from './common/WhyModal';
import { AudioButton } from './common/AudioButton';

interface QuizPlayerProps {
  title: string;
  moduleId: number;
  questions: PracticeQuestion[];
  onFinishQuiz: (moduleId: number, score: number, total: number, mistakes: string[]) => void;
  onBack: () => void;
}

export const QuizPlayer: React.FC<QuizPlayerProps> = ({
  title,
  moduleId,
  questions,
  onFinishQuiz,
  onBack,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<number, boolean>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [score, setScore] = useState(0);
  const [mistakesList, setMistakesList] = useState<string[]>([]);

  // Why modal
  const [whyModalData, setWhyModalData] = useState<{
    isOpen: boolean;
    title: string;
    explanation: string;
  }>({
    isOpen: false,
    title: '',
    explanation: ''
  });

  const currentQ = questions[currentIndex];
  const isCurrentSubmitted = submittedQuestions[currentIndex];
  const currentSelected = selectedAnswers[currentIndex];

  const handleSelectOption = (optIdx: number) => {
    if (isCurrentSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [currentIndex]: optIdx }));
  };

  const handleCheckAnswer = () => {
    if (currentSelected === undefined) return;

    const isCorrect = currentSelected === (currentQ as any).correctIndex;
    setSubmittedQuestions((prev) => ({ ...prev, [currentIndex]: true }));

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setMistakesList((prev) => [...prev, currentQ.prompt || `Question ${currentIndex + 1}`]);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Complete quiz
      const finalScore = score + (currentSelected === (currentQ as any).correctIndex ? 1 : 0);
      const percentage = Math.round((finalScore / questions.length) * 100);
      
      if (percentage >= 70) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        } catch (e) {}
      }

      setIsQuizComplete(true);
      onFinishQuiz(moduleId, finalScore, questions.length, mistakesList);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setSubmittedQuestions({});
    setIsQuizComplete(false);
    setScore(0);
    setMistakesList([]);
  };

  const percentage = Math.round((score / questions.length) * 100);

  if (isQuizComplete) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-10 text-center space-y-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] text-white">
            <Award size={36} />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
              Knowledge Check Complete
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A]">
              {title} Results
            </h2>
            <p className="mt-2 text-sm text-[#1A1A1A]/70 font-sans">
              {percentage >= 80
                ? 'Outstanding performance. You have mastered these foundational patterns.'
                : 'Good progress. Reviewing the points below will reinforce your accuracy.'}
            </p>
          </div>

          {/* Score Badge */}
          <div className="rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 p-6 max-w-sm mx-auto">
            <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block mb-1">Your Accuracy</span>
            <div className="text-4xl sm:text-5xl font-serif italic font-bold text-[#1A1A1A]">
              {percentage}%
            </div>
            <p className="text-xs font-semibold text-[#1A1A1A]/60 mt-1">
              {score} of {questions.length} questions answered correctly
            </p>
          </div>

          {/* Mastered vs Review Breakdown */}
          <div className="text-left space-y-3 pt-2">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
              Performance Breakdown:
            </h4>
            <div className="rounded-xl border border-[#4A5D4E]/20 bg-[#4A5D4E]/5 p-3.5 text-xs sm:text-sm text-[#1A1A1A] flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#4A5D4E] shrink-0" />
              <span>Mastered: <strong className="text-[#4A5D4E]">{score} core grammar patterns</strong> in this module.</span>
            </div>

            {mistakesList.length > 0 && (
              <div className="rounded-xl border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-3.5 text-xs sm:text-sm text-[#1A1A1A] flex items-start gap-2">
                <AlertCircle size={16} className="text-[#C25E3E] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#C25E3E]">Recommended for Review: </span>
                  <span className="text-[#1A1A1A]/80">{mistakesList.length} topic points. Revisit lesson notes to reinforce understanding.</span>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              id="btn-restart-quiz"
              onClick={handleRestart}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1A1A1A]/15 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
            >
              <RotateCcw size={14} />
              <span>Retry Quiz</span>
            </button>

            <button
              id="btn-finish-quiz-return"
              onClick={onBack}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
            >
              <span>Back to Modules</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Top Bar */}
      <div className="mb-6 flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
        <button
          id="btn-exit-quiz"
          onClick={onBack}
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/10 bg-[#F7F5F0] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Exit Quiz</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
            Question {currentIndex + 1} of {questions.length}
          </span>
          <div className="h-1.5 w-28 sm:w-40 overflow-hidden rounded-full bg-[#E5E0D8]">
            <div
              className="h-full bg-[#1A1A1A] rounded-full transition-all duration-300"
              style={{ width: `${Math.round(((currentIndex + 1) / questions.length) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Question Card */}
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-8 space-y-5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
            Module {moduleId} Assessment
          </span>
          <h3 className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A]">
            {currentQ.prompt || (currentQ.type === 'fill_blank' ? currentQ.sentenceWithBlank : '')}
          </h3>
          {currentQ.type === 'fill_blank' && (
            <p className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">
              Choose the correct word or phrase to complete the sentence.
            </p>
          )}
        </div>

        {/* Options */}
        {(currentQ.type === 'multiple_choice' || currentQ.type === 'fill_blank' || currentQ.type === 'sentence_correction') && (
          <div className="space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = currentSelected === optIdx;
              const isCorrectOpt = optIdx === currentQ.correctIndex;

              let style = 'border-[#1A1A1A]/15 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/40';

              if (isCurrentSubmitted) {
                if (isCorrectOpt) {
                  style = 'border-[#4A5D4E] bg-[#4A5D4E]/10 text-[#4A5D4E] font-bold';
                } else if (isSelected && !isCorrectOpt) {
                  style = 'border-[#C25E3E] bg-[#C25E3E]/10 text-[#C25E3E] line-through';
                } else {
                  style = 'border-[#1A1A1A]/5 bg-[#F7F5F0] text-[#1A1A1A]/30 opacity-60';
                }
              } else if (isSelected) {
                style = 'border-[#1A1A1A] bg-[#1A1A1A] text-white';
              }

              return (
                <button
                  key={optIdx}
                  type="button"
                  id={`quiz-opt-${optIdx}`}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isCurrentSubmitted}
                  className={`w-full text-left rounded-xl border p-3.5 text-sm font-medium transition-all flex items-center justify-between ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      isSelected && !isCurrentSubmitted ? 'bg-white text-[#1A1A1A]' : 'bg-[#F7F5F0] text-[#1A1A1A]/70'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isCurrentSubmitted && isCorrectOpt && (
                    <Check size={18} className="text-[#4A5D4E]" />
                  )}
                  {isCurrentSubmitted && isSelected && !isCorrectOpt && (
                    <X size={18} className="text-[#C25E3E]" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Smart Feedback Card on Submit */}
        {isCurrentSubmitted && (
          <SmartFeedback
            isCorrect={currentSelected === (currentQ as any).correctIndex}
            whyExplanation={currentQ.whyExplanation}
            correctSentence={currentQ.options ? currentQ.options[(currentQ as any).correctIndex] : undefined}
            onWhyClick={() => setWhyModalData({
              isOpen: true,
              title: 'Grammar Rule Explanation',
              explanation: currentQ.whyExplanation
            })}
          />
        )}

        {/* Action Controls */}
        <div className="mt-6 flex items-center justify-between border-t border-[#1A1A1A]/10 pt-5">
          <div className="text-xs font-semibold text-[#1A1A1A]/60">
            Score: <strong className="text-[#1A1A1A] font-bold">{score}</strong> / {currentIndex + (isCurrentSubmitted ? 1 : 0)}
          </div>

          {!isCurrentSubmitted ? (
            <button
              id="btn-quiz-check-answer"
              type="button"
              disabled={currentSelected === undefined}
              onClick={handleCheckAnswer}
              className="rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] disabled:opacity-30 transition-colors"
            >
              Check Answer
            </button>
          ) : (
            <button
              id="btn-quiz-next-question"
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
            >
              <span>{currentIndex === questions.length - 1 ? 'See Results' : 'Next Question'}</span>
              <ArrowRight size={14} />
            </button>
          )}
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
