import React from 'react';
import {
  Flame,
  Star,
  CheckCircle2,
  Play,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Briefcase,
  Award,
  ArrowUpRight,
  User,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Headphones,
  BookOpen,
  PenTool,
  Mic
} from 'lucide-react';
import { UserProgress, StudentProfile } from '../types';
import { ALL_MODULES } from '../data/curriculum';

interface DashboardViewProps {
  progress: UserProgress;
  currentStudent: StudentProfile | null;
  onOpenStudentModal: () => void;
  onStartTopic: (topicId: string) => void;
  onStartDailyWorkout: () => void;
  onStartQuiz: (moduleId: number) => void;
  onNavigateToTab: (tab: 'lessons' | 'practice' | 'skills' | 'reallife' | 'reference' | 'assessment' | 'chat' | 'instructor') => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  progress,
  currentStudent,
  onOpenStudentModal,
  onStartTopic,
  onStartDailyWorkout,
  onStartQuiz,
  onNavigateToTab,
}) => {
  // Determine greeting based on current local time
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  // Find current topic or recommended next topic
  const totalTopics = ALL_MODULES.flatMap((m) => m.topics);
  const completedCount = progress.completedTopics.length;
  const overallPercentage = Math.min(100, Math.round((completedCount / totalTopics.length) * 100));

  // Determine current active topic
  const nextIncompleteTopic = totalTopics.find((t) => !progress.completedTopics.includes(t.id)) || totalTopics[0];
  const currentModule = ALL_MODULES.find((m) => m.id === nextIncompleteTopic.moduleId) || ALL_MODULES[0];

  // Calculate Quiz Average
  const quizScoresList = Object.values(progress.quizScores) as Array<{ percentage: number }>;
  const quizAverage = quizScoresList.length > 0
    ? Math.round(quizScoresList.reduce((acc, q) => acc + (q.percentage || 0), 0) / quizScoresList.length)
    : 0;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-8">
      {/* Creator Ribbon & Student Banner */}
      <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-r from-amber-50 via-rose-50 to-indigo-50/60 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-2xs">
            Curriculum Author
          </span>
          <span className="font-serif italic text-gray-800">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-bold underline text-amber-700 hover:text-amber-800">Ms. Maria</a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {currentStudent ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-700">Learner: <strong className="text-indigo-900">{currentStudent.name}</strong></span>
              <button
                type="button"
                onClick={onOpenStudentModal}
                className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 underline bg-white/80 px-2 py-0.5 rounded-lg border border-indigo-200"
              >
                Switch Account
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenStudentModal}
              className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-3 py-1.5 rounded-xl shadow-xs transition-all"
            >
              <User size={13} />
              <span>Student Sign In / Register</span>
            </button>
          )}
        </div>
      </div>

      {/* Editorial Header / Masthead */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200/80 pb-8 relative overflow-hidden">
        <div className="max-w-2xl space-y-2.5">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 border border-emerald-300/50 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-900 shadow-2xs">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Learning Architecture • {progress.level || 'Elementary Level'}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif italic font-black text-gray-900 leading-tight tracking-tight">
            {getGreeting()}{currentStudent ? `, ${currentStudent.name.split(' ')[0]}` : ', student'}.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-sans max-w-xl leading-relaxed">
            Welcome to <strong className="text-indigo-900">English Studio Hub</strong> by <strong className="text-amber-800">Ms. Maria</strong>. Explore 12 structured grammar modules, 4-skills practice tests, daily workouts, and diagnostics.
          </p>
        </div>

        {/* Big Editorial Metric */}
        <div className="flex items-center md:flex-col md:items-end gap-6 md:gap-0 bg-gradient-to-tr from-amber-100/80 via-rose-100/50 to-indigo-100/70 p-5 rounded-3xl border border-amber-200/60 shadow-sm w-full md:w-auto justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-900 mb-1">Curriculum Mastery</p>
          <div className="text-4xl sm:text-6xl font-serif italic font-black bg-gradient-to-r from-amber-600 via-rose-600 to-indigo-600 bg-clip-text text-transparent">
            {overallPercentage}<span className="text-xl sm:text-2xl not-italic opacity-40 font-sans font-normal ml-0.5 text-gray-700">%</span>
          </div>
        </div>
      </header>

      {/* Grid: Featured Continue Lesson (7 cols) + Daily Practice & Real Life (5 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Continue Lesson Card (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-gradient-to-br from-amber-50/70 via-orange-50/40 to-yellow-50/50 border border-amber-200/80 p-6 sm:p-8 rounded-3xl flex flex-col justify-between h-full space-y-6 shadow-sm">
            <div>
              <div className="flex justify-between items-start mb-6 gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full shadow-xs">
                  Module {currentModule.id}: {currentModule.title}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-300/60">
                  Topic {nextIncompleteTopic.id.split('_topic')[1] || '1'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-gray-900 mb-3">
                {nextIncompleteTopic.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-700 mb-6 font-sans">
                {nextIncompleteTopic.shortDesc}
              </p>

              {/* Contrasting Rule Snippet */}
              <div className="space-y-3 mb-6 bg-white/95 border border-amber-200/80 p-4 rounded-2xl shadow-2xs">
                <div className="flex items-center gap-3 text-xs sm:text-sm bg-rose-50/80 p-2 rounded-xl border border-rose-200/60">
                  <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                  <p className="text-rose-900">
                    ❌ Common Slip: <span className="line-through font-medium">"She work at office."</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold bg-emerald-50/80 p-2 rounded-xl border border-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <p className="text-emerald-950">
                    ✅ Natural Speech: <span className="text-emerald-700 font-bold">"She works at the office."</span>
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="space-y-1.5 mb-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-gray-600">
                  <span>Syllabus Completion</span>
                  <span className="text-amber-700 font-bold">{completedCount} of {totalTopics.length} Topics</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-amber-200/60">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${overallPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              id="btn-continue-current-lesson"
              onClick={() => onStartTopic(nextIncompleteTopic.id)}
              className="w-full bg-gradient-to-r from-gray-900 via-indigo-950 to-slate-900 text-white py-4 px-6 text-xs font-bold uppercase tracking-[0.25em] hover:from-indigo-900 hover:to-purple-900 transition-all rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
            >
              <Play size={15} className="fill-amber-400 text-amber-400" />
              <span>Continue Lesson</span>
            </button>
          </div>
        </div>

        {/* Right Column: Daily Workout & Real Life Banner (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Daily 20-Item Practice Card */}
          <div className="border border-emerald-200 bg-gradient-to-br from-emerald-50/80 to-teal-50/60 p-6 rounded-3xl flex flex-col justify-between space-y-4 shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-800">
                  Daily Practice (20 Questions)
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full shadow-2xs">
                  Min 20 Items
                </span>
              </div>

              <h4 className="text-xl font-serif italic font-bold text-gray-900 mb-1">
                Precision Daily Workout
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed font-sans">
                20 comprehensive questions covering S+V+O architecture, irregular past tense, prepositions, and scrambled syntax.
              </p>
            </div>

            <button
              id="btn-start-daily-workout-dashboard"
              onClick={onStartDailyWorkout}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-2xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]"
            >
              <Sparkles size={15} className="text-yellow-300 animate-spin" />
              <span>Begin Today's 20-Item Workout (+25 pts)</span>
            </button>
          </div>

          {/* Real-Life English Scenario Card */}
          <div className="border border-teal-600/30 p-6 bg-gradient-to-br from-teal-800 via-emerald-900 to-slate-900 text-white rounded-3xl flex flex-col justify-between space-y-4 shadow-md">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-300">
                  Real Life Mode
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-200 border border-emerald-400/40 bg-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Practical Scenarios
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-serif italic leading-tight text-white font-bold">
                English for Workplace & Meetings
              </h4>
              <p className="text-xs text-emerald-100/90 mt-2 leading-relaxed font-sans">
                Master polite requests, email correspondence, doctor visits, and job interviews without fear.
              </p>
            </div>

            <button
              onClick={() => onNavigateToTab('reallife')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 underline decoration-1 underline-offset-4 hover:text-amber-200 transition-colors self-start"
            >
              <span>Explore Scenarios</span>
              <ArrowUpRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* 4-Skills Comprehensive Practice Banner (Listening, Reading, Writing, Speaking) */}
      <section className="rounded-3xl border border-indigo-100 bg-white p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                4-Skills Mastery Suite
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                24 Practice Tests
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif italic font-bold text-gray-900">
              Listening, Reading, Writing & Speaking Tests
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 font-sans mt-1 max-w-2xl">
              Complete full-length skill evaluations with natural speech playback, automated writing rubrics, and real-time speech pronunciation recognition.
            </p>
          </div>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="self-start md:self-center px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>Launch 4-Skills Hub</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-2xl border border-purple-200 bg-gradient-to-b from-purple-50/80 to-white hover:border-purple-300 text-left transition-all group shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <Headphones size={18} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded-full">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-gray-900">Listening Practice</h4>
            <p className="text-[11px] text-gray-600 font-sans mt-1">Audio dialogue comprehension & notes</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50/80 to-white hover:border-emerald-300 text-left transition-all group shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <BookOpen size={18} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-gray-900">Reading Practice</h4>
            <p className="text-[11px] text-gray-600 font-sans mt-1">Academic & workplace passages + questions</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-2xl border border-sky-200 bg-gradient-to-b from-sky-50/80 to-white hover:border-sky-300 text-left transition-all group shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <PenTool size={18} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded-full">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-gray-900">Writing Practice</h4>
            <p className="text-[11px] text-gray-600 font-sans mt-1">Automated rubric analysis & grammar coach</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50/80 to-white hover:border-amber-300 text-left transition-all group shadow-2xs hover:shadow-sm hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-2xs group-hover:scale-110 transition-transform">
                <Mic size={18} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-gray-900">Speaking Practice</h4>
            <p className="text-[11px] text-gray-600 font-sans mt-1">Voice recognition & fluency evaluation</p>
          </button>
        </div>
      </section>

      {/* Editorial Highlights Row: Stats & Recommended Review & Goals */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Editorial Stats */}
        <div className="rounded-3xl border border-orange-200 bg-gradient-to-b from-orange-50/60 to-white p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-orange-100 pb-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-900">Learning Rhythm</span>
            <Flame size={18} className="text-orange-500 fill-orange-500 animate-pulse" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/80 p-3 rounded-2xl border border-orange-100 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-0.5">Active Streak</span>
              <span className="text-2xl font-serif italic text-orange-700 font-black">{progress.streakCount} Days</span>
            </div>
            <div className="bg-white/80 p-3 rounded-2xl border border-orange-100 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block mb-0.5">Practice Points</span>
              <span className="text-2xl font-serif italic text-indigo-700 font-black">{progress.practicePoints} pts</span>
            </div>
          </div>

          <div className="pt-2 border-t border-orange-100">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 block mb-2">Diagnostic Level:</span>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-amber-100/80 border border-amber-300/60 px-3 py-1 text-xs font-bold text-amber-900 shadow-2xs">
                {progress.level || 'Take Diagnostic Test (25 Items)'}
              </span>
            </div>
          </div>
        </div>

        {/* Recommended Review */}
        <div className="rounded-3xl border border-rose-200 bg-gradient-to-b from-rose-50/60 to-white p-6 space-y-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between border-b border-rose-100 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-900">High-Impact Focus</span>
              <RotateCcw size={16} className="text-rose-500" />
            </div>

            <p className="mt-3 text-xs text-gray-700 leading-relaxed">
              Targeted practice on <strong className="text-rose-900">Present Simple Third-Person -s</strong> eliminates 80% of fast-speech slips.
            </p>

            <div className="mt-3 rounded-2xl border border-rose-200/80 bg-white p-3 text-xs space-y-1.5 font-mono text-[11px] shadow-2xs">
              <div className="text-rose-600 line-through">❌ She work every day.</div>
              <div className="text-emerald-700 font-bold">✅ She works every day.</div>
            </div>
          </div>

          <button
            id="btn-review-weak-topic"
            onClick={() => onStartTopic('mod6_topic1')}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-rose-300 bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-rose-700 hover:bg-rose-600 hover:text-white transition-all shadow-2xs"
          >
            <span>Review Module 6</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Teacher & Student Chat Card */}
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-b from-teal-50/60 to-white p-6 space-y-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between border-b border-teal-100 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-900">Instructor Desk</span>
              <MessageCircle size={17} className="text-teal-600" />
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <h4 className="font-serif italic font-bold text-base text-gray-900">
                  Chat with Ms. Maria
                </h4>
                <ShieldCheck size={15} className="text-teal-600" />
              </div>
              <p className="text-xs text-gray-600 font-sans leading-relaxed">
                Ask grammar questions, verify sentence corrections, and receive direct personalized feedback from your teacher.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-bold">
                <a
                  href="https://www.facebook.com/elevatewithmsmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 underline inline-flex items-center gap-0.5"
                >
                  <span>FB: @elevatewithmsmaria</span>
                  <ExternalLink size={10} />
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/elevate.with.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 underline inline-flex items-center gap-0.5"
                >
                  <span>IG: @elevate.with.maria</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>

          <button
            id="btn-goto-chat-dash"
            onClick={() => onNavigateToTab('chat')}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:from-teal-700 hover:to-emerald-700 transition-all shadow-xs"
          >
            <MessageCircle size={14} />
            <span>Open Teacher Chat</span>
          </button>
        </div>
      </section>
    </div>
  );
};
