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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/80 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-2xs">
              Daily Practice Hub & Gym
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-emerald-100 border border-emerald-300 rounded-full text-emerald-800 shadow-2xs">
              <Calendar size={11} /> {formattedToday}
            </span>
          </div>
          <h1 className="mt-2 text-2xl sm:text-4xl font-serif italic font-black text-gray-900 tracking-tight">
            Grammar Practice & Daily Muscle Memory
          </h1>
          <p className="text-sm text-gray-600 font-sans mt-1">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-amber-700 underline hover:text-amber-800">Ms. Maria</a> for students worldwide.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 px-4 py-2.5 shadow-2xs">
            <Flame size={18} className="text-orange-500 fill-orange-500 animate-pulse" />
            <div className="text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-900 block">Streak</span>
              <span className="text-xs font-black text-orange-950">{progress.streakCount} Days Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 pb-3">
        <div className="flex flex-wrap gap-2">
          <button
            id="tab-mode-workout"
            onClick={() => setActiveMode('workout')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs ${
              activeMode === 'workout'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs scale-105'
                : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-900 border border-gray-200'
            }`}
          >
            <Sparkles size={14} className={activeMode === 'workout' ? 'animate-spin' : ''} />
            <span>Daily Fresh Workout</span>
          </button>

          <button
            id="tab-mode-gym"
            onClick={() => setActiveMode('sentence_gym')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs ${
              activeMode === 'sentence_gym'
                ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-xs scale-105'
                : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-900 border border-gray-200'
            }`}
          >
            <AlertTriangle size={14} />
            <span>Sentence Gym (20 Drills)</span>
          </button>

          <button
            id="tab-mode-builder"
            onClick={() => setActiveMode('word_builder')}
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-2xs ${
              activeMode === 'word_builder'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs scale-105'
                : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-900 border border-gray-200'
            }`}
          >
            <Layers size={14} />
            <span>Architecture Builder</span>
          </button>
        </div>

        {/* Difficulty Selector and Refresh Actions in Workout Mode */}
        {activeMode === 'workout' && (
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1 rounded-2xl border border-gray-200 bg-white p-1 shadow-2xs">
              <button
                type="button"
                id="diff-filter-all"
                onClick={() => handleDifficultyChange('all')}
                className={`rounded-xl px-3 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'all'
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                type="button"
                id="diff-filter-easy"
                onClick={() => handleDifficultyChange('easy')}
                className={`rounded-xl px-3 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'easy'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                Easy
              </button>
              <button
                type="button"
                id="diff-filter-medium"
                onClick={() => handleDifficultyChange('medium')}
                className={`rounded-xl px-3 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'medium'
                    ? 'bg-amber-600 text-white shadow-2xs'
                    : 'text-gray-600 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                Medium
              </button>
              <button
                type="button"
                id="diff-filter-hard"
                onClick={() => handleDifficultyChange('hard')}
                className={`rounded-xl px-3 py-1 text-[11px] font-bold uppercase transition-colors ${
                  selectedDifficulty === 'hard'
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'text-gray-600 hover:text-rose-700 hover:bg-rose-50'
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
              className="inline-flex items-center gap-1.5 rounded-2xl border border-teal-200 bg-teal-50/80 px-3.5 py-1.5 text-xs font-bold text-teal-800 hover:bg-teal-100 transition-colors shadow-2xs"
            >
              <RefreshCw size={13} className="text-teal-700" />
              <span>Refresh Questions</span>
            </button>
          </div>
        )}
      </div>

      {/* ================= MODE 1: DAILY REFRESHING WORKOUT ================= */}
      {activeMode === 'workout' && (
        <div className="space-y-6">
          {!isWorkoutFinished ? (
            <div className="rounded-3xl border border-amber-200/80 bg-white p-6 sm:p-8 space-y-6 shadow-sm">
              {/* Progress Bar & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white font-serif font-bold text-xs shadow-2xs">
                    {workoutIndex + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        {currentQ.prompt || `Item ${workoutIndex + 1} of ${dailyQuestions.length}`}
                      </span>
                      {currentQ.difficulty && getDifficultyBadge(currentQ.difficulty)}
                    </div>
                    {currentQ.skillDomain && (
                      <span className="text-[11px] text-indigo-700 font-serif italic">
                        Topic: {currentQ.skillDomain}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    {workoutIndex + 1} / {dailyQuestions.length}
                  </span>
                  <div className="h-2 w-28 sm:w-40 rounded-full bg-amber-100 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
                      style={{ width: `${Math.round(((workoutIndex + 1) / (dailyQuestions.length || 1)) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Scenario Context if Real-Life type */}
              {currentQ.type === 'real_life_situation' && (
                <div className="rounded-2xl border border-teal-200 bg-teal-50/70 p-4 text-xs sm:text-sm text-gray-900 space-y-1">
                  <p className="font-serif italic font-bold text-sm text-teal-950">Real Scenario: {currentQ.scenario}</p>
                  <p className="text-teal-900 font-sans">Objective: {currentQ.promptQuestion}</p>
                </div>
              )}

              {/* Sentence Blank if Fill in blank */}
              {currentQ.type === 'fill_blank' && (
                <div className="rounded-2xl bg-gradient-to-r from-amber-50/80 to-yellow-50/60 p-5 border border-amber-200/80">
                  <p className="text-lg sm:text-xl font-serif italic text-gray-900">
                    {currentQ.sentenceWithBlank}
                  </p>
                </div>
              )}

              {/* Sentence Correction Incorrect if Sentence Correction */}
              {currentQ.type === 'sentence_correction' && (
                <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-4 text-xs sm:text-sm">
                  <span className="text-rose-600 font-bold text-xs uppercase tracking-wider block mb-1">Spot and fix the common slip:</span>
                  <p className="text-base sm:text-lg font-serif italic font-bold text-rose-950">{currentQ.incorrectSentence}</p>
                </div>
              )}

              {/* Word order builder if word order */}
              {currentQ.type === 'word_order' && (
                <div className="space-y-3">
                  <div className="min-h-[60px] rounded-2xl border-2 border-dashed border-indigo-200 bg-indigo-50/40 p-3 flex flex-wrap gap-2 items-center">
                    {selectedWords.length === 0 ? (
                      <span className="text-xs text-indigo-400 font-serif italic">Tap words below in order to build natural sentence structure...</span>
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
                          className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3.5 py-1.5 text-xs font-bold cursor-pointer hover:from-rose-600 hover:to-pink-600 transition-colors shadow-2xs"
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
                            className={`rounded-xl border px-3.5 py-2 text-xs font-bold transition-all shadow-2xs ${
                              isUsed
                                ? 'border-gray-100 bg-gray-100 text-gray-400 opacity-40'
                                : 'border-gray-200 bg-white text-gray-800 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-900'
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
                        className={`w-full text-left rounded-2xl border p-4 text-sm font-medium transition-all flex items-center justify-between shadow-2xs ${
                          isSelected
                            ? 'border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs'
                            : 'border-gray-200 bg-white text-gray-800 hover:border-indigo-300 hover:bg-indigo-50/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`flex h-7 w-7 items-center justify-center rounded-xl text-xs font-bold ${
                            isSelected ? 'bg-white text-indigo-700' : 'bg-gray-100 text-gray-700'
                          }`}>
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>
                        {isSelected && <Check size={18} className="text-white" />}
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
              <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-xs text-gray-500 font-sans">
                  Prepared and created by <strong className="text-amber-700">Ms. Maria</strong> • Daily Fresh Practice
                </span>

                {!isCurrentChecked ? (
                  <button
                    id="btn-workout-check"
                    type="button"
                    disabled={currentAnswer === undefined && (currentQ.type !== 'word_order' || selectedWords.length === 0)}
                    onClick={() => setChecked((prev) => ({ ...prev, [workoutIndex]: true }))}
                    className="rounded-2xl bg-gradient-to-r from-gray-900 to-indigo-950 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:from-indigo-900 hover:to-purple-900 disabled:opacity-30 transition-all shadow-xs"
                  >
                    Check Answer
                  </button>
                ) : (
                  <button
                    id="btn-workout-next"
                    type="button"
                    onClick={handleNextWorkoutQuestion}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md hover:scale-105"
                  >
                    <span>{workoutIndex === dailyQuestions.length - 1 ? 'Finish Workout' : 'Next Question'}</span>
                    <ArrowRight size={15} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-amber-200 bg-gradient-to-b from-amber-50/60 to-white p-8 sm:p-10 text-center space-y-6 shadow-sm">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md animate-bounce">
                <Award size={40} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-amber-100 border border-amber-300 rounded-full text-amber-900 inline-block mb-3 shadow-2xs">
                  Daily Grammar Workout Complete
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif italic font-black text-gray-900">
                  Outstanding Practice Session!
                </h2>
                <p className="mt-2 text-sm text-gray-600 font-sans max-w-md mx-auto">
                  You completed all {dailyQuestions.length} questions in today's workout prepared and created by Ms. Maria.
                </p>
              </div>

              <div className="rounded-3xl bg-white border border-amber-200 p-6 max-w-sm mx-auto shadow-xs">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Session Result</span>
                <div className="text-4xl font-serif italic font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {calculateWorkoutScore()} / {dailyQuestions.length}
                </div>
                <p className="text-xs font-bold text-emerald-700 mt-1">
                  ✨ +25 Practice Points earned!
                </p>
              </div>

              <div className="flex justify-center gap-3 pt-2 flex-wrap">
                <button
                  id="btn-workout-reset"
                  onClick={resetWorkout}
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 transition-colors shadow-2xs"
                >
                  <RotateCcw size={14} className="inline mr-1.5" />
                  Review Current Set
                </button>

                <button
                  id="btn-workout-roll-new"
                  onClick={handleRefreshNewQuestions}
                  className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:from-amber-600 hover:to-orange-600 transition-all inline-flex items-center gap-1.5 shadow-md"
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
          <div className="rounded-2xl bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 p-4 text-xs sm:text-sm text-gray-900 shadow-2xs">
            <p className="font-serif italic font-bold text-base text-rose-950">
              🎯 Sentence Correction Gym: 20 Essential Grammar Drills
            </p>
            <p className="text-xs text-rose-900/80 font-sans mt-0.5">
              Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="underline font-bold text-rose-900">Ms. Maria</a> to eliminate native language translation slips for students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SENTENCE_GYM_EXERCISES.map((item, idx) => (
              <div key={item.id} className="rounded-3xl border border-rose-100 bg-white p-5 space-y-3.5 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-shadow">
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-2.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                      Drill {idx + 1} of 20 • {item.category}
                    </span>
                    <AudioButton text={item.corrected} size="sm" label="Listen" />
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm">
                    <div className="rounded-2xl border border-rose-200 bg-rose-50/80 p-3">
                      <span className="text-rose-600 font-bold text-[11px] uppercase tracking-wider block mb-0.5">Common Slip:</span>
                      <span className="line-through text-rose-900 font-sans font-medium">{item.slip}</span>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3">
                      <span className="text-emerald-700 font-bold text-[11px] uppercase tracking-wider block mb-0.5">Natural English:</span>
                      <span className="text-emerald-950 font-bold font-sans">{item.corrected}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-700 bg-gray-50/80 p-3 rounded-2xl border border-gray-100 font-sans">
                  💡 <strong className="text-gray-900">Rule:</strong> {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= MODE 3: SENTENCE ARCHITECTURE BUILDER ================= */}
      {activeMode === 'word_builder' && (
        <div className="space-y-4">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-4 text-xs sm:text-sm text-gray-900 shadow-2xs">
            <p className="font-serif italic font-bold text-base text-indigo-950">
              🏗️ Sentence Architecture Builder: Core English Blueprint Models
            </p>
            <p className="text-xs text-indigo-900/80 font-sans mt-0.5">
              Master the foundational English word order: <strong>Subject + Verb + Object + Place + Time</strong>. Prepared and created by <strong className="text-indigo-900">Ms. Maria</strong>.
            </p>
          </div>

          <div className="space-y-4">
            {SENTENCE_BUILDER_EXERCISES.map((item, idx) => (
              <div key={item.id} className="rounded-3xl border border-indigo-100 bg-white p-5 space-y-4 shadow-2xs">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <h4 className="font-serif italic font-bold text-base text-gray-900">
                    {item.title}
                  </h4>
                  <AudioButton text={item.full} size="sm" label="Listen" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2.5">
                  {item.parts.map((p, pIdx) => {
                    const colors = [
                      'bg-rose-50 border-rose-200 text-rose-900 text-rose-600',
                      'bg-amber-50 border-amber-200 text-amber-900 text-amber-600',
                      'bg-emerald-50 border-emerald-200 text-emerald-900 text-emerald-600',
                      'bg-sky-50 border-sky-200 text-sky-900 text-sky-600',
                      'bg-purple-50 border-purple-200 text-purple-900 text-purple-600',
                    ];
                    const chosen = colors[pIdx % colors.length];
                    const [bg, border, text, label] = chosen.split(' ');

                    return (
                      <div key={pIdx} className={`rounded-2xl border ${border} ${bg} p-3 text-center shadow-2xs`}>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${label} block mb-0.5`}>
                          {p.role}
                        </span>
                        <span className={`text-xs sm:text-sm font-bold ${text}`}>{p.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-3.5 text-xs sm:text-sm text-indigo-950 font-sans">
                  <span className="font-bold text-indigo-600 uppercase tracking-wider text-[10px] block mb-0.5">Full Sentence:</span>
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
