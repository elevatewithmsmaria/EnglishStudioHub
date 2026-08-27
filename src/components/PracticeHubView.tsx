import React, { useState, useEffect } from 'react';
import {
  CheckSquare,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Layers,
  ArrowRight,
  Briefcase,
  Lightbulb,
  Check,
  Award,
  RefreshCw,
  SlidersHorizontal,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  DailyPracticeQuestion,
  getDailyPracticeQuestions,
  generateFreshRandomPractice,
  DifficultyLevel
} from '../data/dailyPracticeBank';
import { UserProgress } from '../types';
import { SmartFeedback } from './common/SmartFeedback';
import { WhyModal } from './common/WhyModal';
import { AudioButton } from './common/AudioButton';

interface PracticeHubViewProps {
  progress: UserProgress;
  onCompleteWorkout: () => void;
  onStartTopic: (topicId: string) => void;
}

// 20 Comprehensive Sentence Correction Gym Exercises
const SENTENCE_GYM_EXERCISES = [
  {
    id: 'gym_1',
    category: 'Stative Verbs',
    difficulty: 'medium',
    slip: 'I am agree with your proposal.',
    corrected: 'I agree with your proposal.',
    reason: '"Agree" is already an active verb. Never add "am". Say "I agree".'
  },
  {
    id: 'gym_2',
    category: 'Age / Identity',
    difficulty: 'easy',
    slip: 'She has 28 years old.',
    corrected: 'She is 28 years old.',
    reason: 'Age is expressed using the BE verb ("is / are / am"), never "has".'
  },
  {
    id: 'gym_3',
    category: 'Past Auxiliary',
    difficulty: 'medium',
    slip: "He didn't brought the quarterly documents.",
    corrected: "He didn't bring the quarterly documents.",
    reason: 'After "didn\'t", the main verb always returns to its base form ("bring").'
  },
  {
    id: 'gym_4',
    category: 'Uncountable Nouns',
    difficulty: 'easy',
    slip: 'We need more informations regarding the delivery.',
    corrected: 'We need more information regarding the delivery.',
    reason: '"Information" is uncountable and never takes an -s.'
  },
  {
    id: 'gym_5',
    category: 'Prepositions of Place',
    difficulty: 'easy',
    slip: 'I arrived to London yesterday morning.',
    corrected: 'I arrived in London yesterday morning.',
    reason: 'Arrive IN a city or country, arrive AT a building (airport, hotel, office). Never "arrive to".'
  },
  {
    id: 'gym_6',
    category: 'Third-Person Singular',
    difficulty: 'easy',
    slip: 'My supervisor work in the regional office.',
    corrected: 'My supervisor works in the regional office.',
    reason: 'Third-person singular subjects (he/she/supervisor) require -s on regular present verbs.'
  },
  {
    id: 'gym_7',
    category: 'Questions',
    difficulty: 'medium',
    slip: 'Where you are going for the lunch meeting?',
    corrected: 'Where are you going for the lunch meeting?',
    reason: 'In questions, the auxiliary or BE verb precedes the subject: "Where are you going?".'
  },
  {
    id: 'gym_8',
    category: 'Workplace Uncountable Nouns',
    difficulty: 'easy',
    slip: 'Can you give me some advices for the interview?',
    corrected: 'Can you give me some advice for the interview?',
    reason: '"Advice" is uncountable. Use "some advice" or "a piece of advice".'
  },
  {
    id: 'gym_9',
    category: 'Modal Verbs',
    difficulty: 'easy',
    slip: 'She must to finish the audit by Friday.',
    corrected: 'She must finish the audit by Friday.',
    reason: 'Modal auxiliary verbs (must, can, should, will) are followed directly by the base verb without "to".'
  },
  {
    id: 'gym_10',
    category: 'Comparatives',
    difficulty: 'easy',
    slip: 'This supplier is more cheaper than the other one.',
    corrected: 'This supplier is cheaper than the other one.',
    reason: 'Do not double comparatives: 1-syllable "cheap" becomes "cheaper", not "more cheaper".'
  },
  {
    id: 'gym_11',
    category: 'Prepositions of Time',
    difficulty: 'easy',
    slip: 'The conference begins in Monday at 9:00 AM.',
    corrected: 'The conference begins on Monday at 9:00 AM.',
    reason: 'Days of the week take ON ("on Monday"), while clock times take AT ("at 9:00 AM").'
  },
  {
    id: 'gym_12',
    category: 'Negative Statements',
    difficulty: 'easy',
    slip: "He don't know the new entrance passcode.",
    corrected: "He doesn't know the new entrance passcode.",
    reason: 'Third-person singular "He" requires "doesn\'t", not "don\'t".'
  },
  {
    id: 'gym_13',
    category: 'Pronouns Case',
    difficulty: 'medium',
    slip: 'Between you and I, the contract is finalized.',
    corrected: 'Between you and me, the contract is finalized.',
    reason: 'Prepositions ("between") govern object pronouns ("me", not "I").'
  },
  {
    id: 'gym_14',
    category: 'Present Continuous vs Simple',
    difficulty: 'medium',
    slip: 'I am hearing what you are saying right now.',
    corrected: 'I hear what you are saying right now.',
    reason: 'Sensory perception verb "hear" is stative; use simple present "I hear".'
  },
  {
    id: 'gym_15',
    category: 'Future Decisions',
    difficulty: 'medium',
    slip: 'Wait a moment, I am going to open the door for you.',
    corrected: 'Wait a moment, I will open the door for you.',
    reason: 'Spontaneous instant decisions at the moment of speech take "will", not "going to".'
  },
  {
    id: 'gym_16',
    category: 'Articles Phonetics',
    difficulty: 'easy',
    slip: 'She has a hour before the meeting starts.',
    corrected: 'She has an hour before the meeting starts.',
    reason: '"Hour" starts with a silent "h" and a vowel sound (/ˈaʊ.ər/), requiring "an".'
  },
  {
    id: 'gym_17',
    category: 'Frequency Adverbs',
    difficulty: 'medium',
    slip: 'He goes always to the gym before work.',
    corrected: 'He always goes to the gym before work.',
    reason: 'Adverbs of frequency go before main action verbs: "always goes".'
  },
  {
    id: 'gym_18',
    category: 'Subject-Verb Agreement',
    difficulty: 'medium',
    slip: 'Everybody are ready for the presentation.',
    corrected: 'Everybody is ready for the presentation.',
    reason: 'Indefinite pronouns (everybody, everyone, nobody, somebody) take singular verbs: "Everybody is".'
  },
  {
    id: 'gym_19',
    category: 'Plural vs Singular Equipment',
    difficulty: 'easy',
    slip: 'The factory bought new modern equipments.',
    corrected: 'The factory bought new modern equipment.',
    reason: '"Equipment" is uncountable and never takes an -s in English.'
  },
  {
    id: 'gym_20',
    category: 'Advanced Inversion',
    difficulty: 'hard',
    slip: 'Rarely we have seen such dedicated students.',
    corrected: 'Rarely have we seen such dedicated students.',
    reason: 'Fronted negative adverb "Rarely" requires subject-auxiliary inversion: "Rarely have we seen".'
  }
];

// 20 Comprehensive Sentence Architecture Builder Exercises
const SENTENCE_BUILDER_EXERCISES = [
  {
    id: 'build_1',
    title: '1. Workplace Deadline Statement',
    parts: [
      { role: 'Subject', text: 'Our student team' },
      { role: 'Verb', text: 'submitted' },
      { role: 'Object', text: 'the grammar project' },
      { role: 'Time', text: 'yesterday afternoon' }
    ],
    full: 'Our student team submitted the grammar project yesterday afternoon.'
  },
  {
    id: 'build_2',
    title: '2. Professional Travel Plan',
    parts: [
      { role: 'Subject', text: 'The project director' },
      { role: 'Verb', text: 'is visiting' },
      { role: 'Place', text: 'the regional campus' },
      { role: 'Time', text: 'next Thursday' }
    ],
    full: 'The project director is visiting the regional campus next Thursday.'
  },
  {
    id: 'build_3',
    title: '3. Masterclass Presentation',
    parts: [
      { role: 'Subject', text: 'Ms. Maria' },
      { role: 'Verb', text: 'will present' },
      { role: 'Object', text: 'the grammar framework' },
      { role: 'Place', text: 'in the virtual studio' },
      { role: 'Time', text: 'at 10:00 AM' }
    ],
    full: 'Ms. Maria will present the grammar framework in the virtual studio at 10:00 AM.'
  },
  {
    id: 'build_4',
    title: '4. Daily Study Habit',
    parts: [
      { role: 'Subject', text: 'Every dedicated student' },
      { role: 'Adverb', text: 'always' },
      { role: 'Verb', text: 'practices' },
      { role: 'Object', text: 'daily drills' },
      { role: 'Time', text: 'before work' }
    ],
    full: 'Every dedicated student always practices daily drills before work.'
  },
  {
    id: 'build_5',
    title: '5. Technology Deployment Notice',
    parts: [
      { role: 'Subject', text: 'The technical engineers' },
      { role: 'Verb', text: 'installed' },
      { role: 'Object', text: 'the security updates' },
      { role: 'Place', text: 'on the central servers' },
      { role: 'Time', text: 'last night' }
    ],
    full: 'The technical engineers installed the security updates on the central servers last night.'
  },
  {
    id: 'build_6',
    title: '6. Spontaneous Assistance Offer',
    parts: [
      { role: 'Subject', text: 'I' },
      { role: 'Verb', text: 'will send' },
      { role: 'Object', text: 'the revised lesson notes' },
      { role: 'Recipient', text: 'to our study group' },
      { role: 'Time', text: 'right now' }
    ],
    full: 'I will send the revised lesson notes to our study group right now.'
  },
  {
    id: 'build_7',
    title: '7. Courteous Request Formula',
    parts: [
      { role: 'Modal', text: 'Could' },
      { role: 'Subject', text: 'you' },
      { role: 'Adverb', text: 'please' },
      { role: 'Verb', text: 'clarify' },
      { role: 'Object', text: 'this grammar rule' },
      { role: 'Time', text: 'today' }
    ],
    full: 'Could you please clarify this grammar rule today?'
  }
];

export const PracticeHubView: React.FC<PracticeHubViewProps> = ({
  progress,
  onCompleteWorkout,
  onStartTopic,
}) => {
  const [activeMode, setActiveMode] = useState<'workout' | 'sentence_gym' | 'word_builder'>('workout');
  
  // Difficulty Level Filter
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  
  // Daily Questions state (auto-refreshed by date and difficulty)
  const [todayDateStr, setTodayDateStr] = useState(() => new Date().toISOString().slice(0, 10));
  const [dailyQuestions, setDailyQuestions] = useState<DailyPracticeQuestion[]>(() =>
    getDailyPracticeQuestions(new Date().toISOString().slice(0, 10), 'all')
  );

  // Daily Workout state
  const [workoutIndex, setWorkoutIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [isWorkoutFinished, setIsWorkoutFinished] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  // Why modal
  const [whyModalData, setWhyModalData] = useState<{
    isOpen: boolean;
    title: string;
    explanation: string;
    correct?: string;
  }>({
    isOpen: false,
    title: '',
    explanation: ''
  });

  // Handle difficulty change
  const handleDifficultyChange = (diff: 'all' | 'easy' | 'medium' | 'hard') => {
    setSelectedDifficulty(diff);
    const newSet = getDailyPracticeQuestions(todayDateStr, diff);
    setDailyQuestions(newSet);
    setWorkoutIndex(0);
    setAnswers({});
    setChecked({});
    setIsWorkoutFinished(false);
    setSelectedWords([]);
  };

  // Roll brand new non-repetitive set of questions
  const handleRefreshNewQuestions = () => {
    const freshSet = generateFreshRandomPractice(selectedDifficulty);
    setDailyQuestions(freshSet);
    setWorkoutIndex(0);
    setAnswers({});
    setChecked({});
    setIsWorkoutFinished(false);
    setSelectedWords([]);
  };

  const currentQ = dailyQuestions[workoutIndex] || dailyQuestions[0];
  const isCurrentChecked = checked[workoutIndex];
  const currentAnswer = answers[workoutIndex];

  const handleNextWorkoutQuestion = () => {
    if (workoutIndex < dailyQuestions.length - 1) {
      setWorkoutIndex((prev) => prev + 1);
      setSelectedWords([]);
    } else {
      setIsWorkoutFinished(true);
      try {
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {}
      onCompleteWorkout();
    }
  };

  const resetWorkout = () => {
    setWorkoutIndex(0);
    setAnswers({});
    setChecked({});
    setIsWorkoutFinished(false);
    setSelectedWords([]);
  };

  // Calculate score for the workout
  const calculateWorkoutScore = () => {
    let score = 0;
    dailyQuestions.forEach((q, idx) => {
      if (q.type === 'word_order') {
        if (answers[idx] && answers[idx].trim() === (q as any).correctSentence.trim()) {
          score++;
        }
      } else if (answers[idx] === (q as any).correctIndex) {
        score++;
      }
    });
    return score;
  };

  // Format nice today date
  const formattedToday = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }).format(new Date());

  const getDifficultyBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'easy':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#4A5D4E]/10 border border-[#4A5D4E]/30 text-[#4A5D4E]">
            Easy • Foundational
          </span>
        );
      case 'medium':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#C25E3E]/10 border border-[#C25E3E]/30 text-[#C25E3E]">
            Medium • Intermediate
          </span>
        );
      case 'hard':
        return (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#7A3E65]/10 border border-[#7A3E65]/30 text-[#7A3E65]">
            Hard • Advanced Mastery
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header with Creator Attribution */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70">
              Daily Practice Hub & Gym
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 rounded-full text-[#4A5D4E]">
              <Calendar size={11} /> {formattedToday}
            </span>
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-serif italic text-[#1A1A1A] tracking-tight">
            Grammar Practice & Daily Muscle Memory
          </h1>
          <p className="text-sm text-[#1A1A1A]/70 font-sans mt-1">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-[#1A1A1A] underline decoration-[#1A1A1A]/40 hover:decoration-[#1A1A1A]">Ms. Maria</a> for students worldwide.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 px-3.5 py-2">
            <Flame size={16} className="text-[#C25E3E] fill-[#C25E3E]" />
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 block">Streak</span>
              <span className="text-xs font-bold text-[#1A1A1A]">{progress.streakCount} Days Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1A1A1A]/10 pb-3">
        <div className="flex flex-wrap gap-2">
          <button
            id="tab-mode-workout"
            onClick={() => setActiveMode('workout')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeMode === 'workout'
                ? 'bg-[#1A1A1A] text-white shadow-2xs'
                : 'bg-[#F7F5F0] text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
            }`}
          >
            <Sparkles size={14} />
            <span>Daily Fresh Workout</span>
          </button>

          <button
            id="tab-mode-gym"
            onClick={() => setActiveMode('sentence_gym')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeMode === 'sentence_gym'
                ? 'bg-[#1A1A1A] text-white shadow-2xs'
                : 'bg-[#F7F5F0] text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
            }`}
          >
            <AlertTriangle size={14} />
            <span>Sentence Gym (20 Drills)</span>
          </button>

          <button
            id="tab-mode-builder"
            onClick={() => setActiveMode('word_builder')}
            className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
              activeMode === 'word_builder'
                ? 'bg-[#1A1A1A] text-white shadow-2xs'
                : 'bg-[#F7F5F0] text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
            }`}
          >
            <Layers size={14} />
            <span>Architecture Builder</span>
          </button>
        </div>

        {/* Difficulty Selector and Refresh Actions in Workout Mode */}
        {activeMode === 'workout' && (
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-1">
              <button
                type="button"
                id="diff-filter-all"
                onClick={() => handleDifficultyChange('all')}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                All
              </button>
              <button
                type="button"
                id="diff-filter-easy"
                onClick={() => handleDifficultyChange('easy')}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'easy'
                    ? 'bg-[#4A5D4E] text-white'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Easy
              </button>
              <button
                type="button"
                id="diff-filter-medium"
                onClick={() => handleDifficultyChange('medium')}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'medium'
                    ? 'bg-[#C25E3E] text-white'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Medium
              </button>
              <button
                type="button"
                id="diff-filter-hard"
                onClick={() => handleDifficultyChange('hard')}
                className={`rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'hard'
                    ? 'bg-[#7A3E65] text-white'
                    : 'text-[#1A1A1A]/60 hover:text-[#1A1A1A]'
                }`}
              >
                Hard
              </button>
            </div>

            <button
              id="btn-refresh-daily-questions"
              type="button"
              onClick={handleRefreshNewQuestions}
              title="Generate a fresh, non-repetitive practice set for today"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#1A1A1A]/15 bg-white px-3 py-1.5 text-xs font-bold text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
            >
              <RefreshCw size={13} className="text-[#4A5D4E]" />
              <span>Refresh Questions</span>
            </button>
          </div>
        )}
      </div>

      {/* ================= MODE 1: DAILY REFRESHING WORKOUT ================= */}
      {activeMode === 'workout' && (
        <div className="space-y-6">
          {!isWorkoutFinished ? (
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-8 space-y-5">
              {/* Progress Bar & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1A1A1A]/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1A1A1A] text-white font-serif font-bold text-xs">
                    {workoutIndex + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                        {currentQ.prompt || `Item ${workoutIndex + 1} of ${dailyQuestions.length}`}
                      </span>
                      {currentQ.difficulty && getDifficultyBadge(currentQ.difficulty)}
                    </div>
                    {currentQ.skillDomain && (
                      <span className="text-[11px] text-[#1A1A1A]/60 font-serif italic">
                        Topic: {currentQ.skillDomain}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                    {workoutIndex + 1} / {dailyQuestions.length}
                  </span>
                  <div className="h-1.5 w-24 sm:w-36 rounded-full bg-[#E5E0D8] overflow-hidden">
                    <div
                      className="h-full bg-[#1A1A1A] rounded-full transition-all duration-300"
                      style={{ width: `${Math.round(((workoutIndex + 1) / (dailyQuestions.length || 1)) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Scenario Context if Real-Life type */}
              {currentQ.type === 'real_life_situation' && (
                <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 text-xs sm:text-sm text-[#1A1A1A] space-y-1">
                  <p className="font-serif italic font-bold text-sm">Real Scenario: {currentQ.scenario}</p>
                  <p className="text-[#1A1A1A]/80 font-sans">Objective: {currentQ.promptQuestion}</p>
                </div>
              )}

              {/* Sentence Blank if Fill in blank */}
              {currentQ.type === 'fill_blank' && (
                <div className="rounded-xl bg-[#F7F5F0] p-5 border border-[#1A1A1A]/10">
                  <p className="text-lg sm:text-xl font-serif italic text-[#1A1A1A]">
                    {currentQ.sentenceWithBlank}
                  </p>
                </div>
              )}

              {/* Sentence Correction Incorrect if Sentence Correction */}
              {currentQ.type === 'sentence_correction' && (
                <div className="rounded-xl border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-4 text-xs sm:text-sm">
                  <span className="text-[#C25E3E] font-bold text-xs uppercase tracking-wider block mb-1">Spot and fix the common slip:</span>
                  <p className="text-base sm:text-lg font-serif italic font-bold text-[#1A1A1A]">{currentQ.incorrectSentence}</p>
                </div>
              )}

              {/* Word order builder if word order */}
              {currentQ.type === 'word_order' && (
                <div className="space-y-3">
                  <div className="min-h-[56px] rounded-xl border-2 border-dashed border-[#1A1A1A]/20 bg-[#FDFCF9] p-3 flex flex-wrap gap-2 items-center">
                    {selectedWords.length === 0 ? (
                      <span className="text-xs text-[#1A1A1A]/40 font-serif italic">Tap words below in order to build natural sentence structure...</span>
                    ) : (
                      selectedWords.map((w, idx) => (
                        <span
                          key={idx}
                          onClick={() => {
                            if (!isCurrentChecked) {
                              const next = [...selectedWords];
                              next.splice(idx, 1);
                              setSelectedWords(next);
                            }
                          }}
                          className="rounded-lg bg-[#1A1A1A] text-white px-3 py-1.5 text-xs font-bold cursor-pointer hover:bg-[#C25E3E] transition-colors"
                        >
                          {w}
                        </span>
                      ))
                    )}
                  </div>

                  {!isCurrentChecked && (
                    <div className="flex flex-wrap gap-2">
                      {currentQ.scrambledWords.map((word, wIdx) => {
                        const isUsed = selectedWords.includes(word);
                        return (
                          <button
                            key={wIdx}
                            type="button"
                            disabled={isUsed}
                            onClick={() => {
                              const nextWords = [...selectedWords, word];
                              setSelectedWords(nextWords);
                              setAnswers((prev) => ({
                                ...prev,
                                [workoutIndex]: nextWords.join(' ')
                              }));
                            }}
                            className={`rounded-lg border px-3 py-2 text-xs font-bold transition-colors ${
                              isUsed
                                ? 'border-[#1A1A1A]/10 bg-[#F7F5F0] text-[#1A1A1A]/20'
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

              {/* Standard Options */}
              {'options' in currentQ && Array.isArray((currentQ as any).options) && (
                <div className="space-y-2.5">
                  {(currentQ as any).options.map((opt: string, optIdx: number) => {
                    const isSelected = currentAnswer === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        id={`workout-opt-${optIdx}`}
                        disabled={isCurrentChecked}
                        onClick={() => setAnswers((prev) => ({ ...prev, [workoutIndex]: optIdx }))}
                        className={`w-full text-left rounded-xl border p-4 text-sm font-medium transition-all flex items-center justify-between ${
                          isSelected
                            ? 'border-[#1A1A1A] bg-[#1A1A1A] text-white'
                            : 'border-[#1A1A1A]/15 bg-white text-[#1A1A1A] hover:border-[#1A1A1A]/40 hover:bg-[#F7F5F0]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                            isSelected ? 'bg-white text-[#1A1A1A]' : 'bg-[#F7F5F0] text-[#1A1A1A]/70'
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

              {/* Feedback */}
              {isCurrentChecked && (
                <SmartFeedback
                  isCorrect={
                    currentQ.type === 'word_order'
                      ? selectedWords.join(' ').trim() === (currentQ as any).correctSentence.trim()
                      : currentAnswer === (currentQ as any).correctIndex
                  }
                  whyExplanation={currentQ.whyExplanation}
                  correctSentence={
                    currentQ.type === 'word_order'
                      ? (currentQ as any).correctSentence
                      : currentQ.type === 'sentence_correction'
                      ? (currentQ as any).correctSentence
                      : 'options' in currentQ && (currentQ as any).options ? (currentQ as any).options[(currentQ as any).correctIndex] : undefined
                  }
                  pragmaticTip={'pragmaticTip' in currentQ ? (currentQ as any).pragmaticTip : undefined}
                  onWhyClick={() => setWhyModalData({
                    isOpen: true,
                    title: 'Grammar Focus',
                    explanation: currentQ.whyExplanation,
                    correct: (currentQ as any).correctSentence
                  })}
                />
              )}

              {/* Action Bar */}
              <div className="flex items-center justify-between border-t border-[#1A1A1A]/10 pt-4">
                <span className="text-xs text-[#1A1A1A]/50 font-sans">
                  Prepared by Ms. Maria • Daily Fresh Practice
                </span>

                {!isCurrentChecked ? (
                  <button
                    id="btn-workout-check"
                    type="button"
                    disabled={currentAnswer === undefined && (currentQ.type !== 'word_order' || selectedWords.length === 0)}
                    onClick={() => setChecked((prev) => ({ ...prev, [workoutIndex]: true }))}
                    className="rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] disabled:opacity-30 transition-colors"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    id="btn-workout-next"
                    type="button"
                    onClick={handleNextWorkoutQuestion}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-6 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
                  >
                    <span>{workoutIndex === dailyQuestions.length - 1 ? 'Finish Workout' : 'Next Question'}</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-8 sm:p-10 text-center space-y-6">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#1A1A1A] text-white">
                <Award size={36} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70 inline-block mb-3">
                  Daily Grammar Workout Complete
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A]">
                  Outstanding Practice Session!
                </h2>
                <p className="mt-2 text-sm text-[#1A1A1A]/70 font-sans max-w-md mx-auto">
                  You completed all {dailyQuestions.length} questions in today's workout curated by Ms. Maria.
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F5F0] border border-[#1A1A1A]/10 p-6 max-w-sm mx-auto">
                <span className="text-[10px] font-bold text-[#1A1A1A]/50 uppercase tracking-widest block mb-1">Session Result</span>
                <div className="text-4xl font-serif italic font-bold text-[#1A1A1A]">
                  {calculateWorkoutScore()} / {dailyQuestions.length}
                </div>
                <p className="text-xs font-semibold text-[#1A1A1A]/60 mt-1">
                  +25 Practice Points earned
                </p>
              </div>

              <div className="flex justify-center gap-3 pt-2 flex-wrap">
                <button
                  id="btn-workout-reset"
                  onClick={resetWorkout}
                  className="rounded-lg border border-[#1A1A1A]/15 bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
                >
                  <RotateCcw size={14} className="inline mr-1.5" />
                  Review Current Set
                </button>

                <button
                  id="btn-workout-roll-new"
                  onClick={handleRefreshNewQuestions}
                  className="rounded-lg bg-[#1A1A1A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors inline-flex items-center gap-1.5"
                >
                  <RefreshCw size={14} />
                  <span>Start Brand New Set</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ================= MODE 2: SENTENCE CORRECTION GYM (20 DRILLS) ================= */}
      {activeMode === 'sentence_gym' && (
        <div className="space-y-4">
          <div className="rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 p-4 text-xs sm:text-sm text-[#1A1A1A]">
            <p className="font-serif italic font-bold text-base text-[#1A1A1A]">
              🎯 Sentence Correction Gym: 20 Essential Grammar Drills
            </p>
            <p className="text-xs text-[#1A1A1A]/70 font-sans mt-0.5">
              Prepared and curated by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="underline font-bold text-[#1A1A1A]">Ms. Maria</a> to eliminate native language translation slips for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SENTENCE_GYM_EXERCISES.map((item, idx) => (
              <div key={item.id} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-3.5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                      Drill {idx + 1} of 20 • {item.category}
                    </span>
                    <AudioButton text={item.corrected} size="sm" label="Listen" />
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="rounded-xl border border-[#C25E3E]/20 bg-[#C25E3E]/5 p-3">
                      <span className="text-[#C25E3E] font-bold text-[11px] uppercase tracking-wider block mb-0.5">Common Slip:</span>
                      <span className="line-through decoration-[#C25E3E] decoration-2 text-[#1A1A1A]/70 font-sans">{item.slip}</span>
                    </div>
                    <div className="rounded-xl border border-[#4A5D4E]/20 bg-[#4A5D4E]/5 p-3">
                      <span className="text-[#4A5D4E] font-bold text-[11px] uppercase tracking-wider block mb-0.5">Natural English:</span>
                      <span className="text-[#1A1A1A] font-bold font-sans">{item.corrected}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#1A1A1A]/80 bg-[#F7F5F0] p-3 rounded-lg border border-[#1A1A1A]/10 font-sans">
                  💡 <strong className="text-[#1A1A1A]">Rule:</strong> {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODE 3: SENTENCE ARCHITECTURE BUILDER ================= */}
      {activeMode === 'word_builder' && (
        <div className="space-y-4">
          <div className="rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 p-4 text-xs sm:text-sm text-[#1A1A1A]">
            <p className="font-serif italic font-bold text-base text-[#1A1A1A]">
              🏗️ Sentence Architecture Builder: Core English Blueprint Models
            </p>
            <p className="text-xs text-[#1A1A1A]/70 font-sans mt-0.5">
              Master the foundational English word order: <strong>Subject + Verb + Object + Place + Time</strong>.
            </p>
          </div>

          <div className="space-y-4">
            {SENTENCE_BUILDER_EXERCISES.map((item, idx) => (
              <div key={item.id} className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-4">
                <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-2">
                  <h4 className="font-serif italic font-bold text-base text-[#1A1A1A]">
                    {item.title}
                  </h4>
                  <AudioButton text={item.full} size="sm" label="Listen" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2">
                  {item.parts.map((p, pIdx) => (
                    <div key={pIdx} className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-3 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-0.5">
                        {p.role}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#1A1A1A]">{p.text}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] p-3 text-xs sm:text-sm text-[#1A1A1A] font-sans">
                  <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-[10px] block mb-0.5">Full Sentence:</span>
                  <span className="font-serif italic font-bold text-base">"{item.full}"</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Why Modal */}
      <WhyModal
        isOpen={whyModalData.isOpen}
        onClose={() => setWhyModalData((prev) => ({ ...prev, isOpen: false }))}
        title={whyModalData.title}
        explanation={whyModalData.explanation}
        correctExample={whyModalData.correct}
      />
    </div>
  );
};
