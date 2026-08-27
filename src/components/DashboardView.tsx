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
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 bg-white border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]">
            Curriculum Author
          </span>
          <span className="font-serif italic text-[#1A1A1A]">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-bold underline text-[#1A1A1A]">Ms. Maria</a>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {currentStudent ? (
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#1A1A1A]/70">Learner: <strong>{currentStudent.name}</strong></span>
              <button
                type="button"
                onClick={onOpenStudentModal}
                className="text-[11px] font-bold uppercase tracking-wider underline text-[#1A1A1A] hover:text-[#4A5D4E]"
              >
                Switch Account
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={onOpenStudentModal}
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider underline text-[#1A1A1A] hover:text-[#4A5D4E]"
            >
              <User size={13} />
              <span>Student Log In / Register</span>
            </button>
          )}
        </div>
      </div>

      {/* Editorial Header / Masthead */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1A1A1A]/10 pb-8">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4A5D4E]" />
            <span>Student Learning Architecture • {progress.level || 'Elementary Level'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif italic text-[#1A1A1A] leading-tight tracking-tight">
            {getGreeting()}{currentStudent ? `, ${currentStudent.name.split(' ')[0]}` : ', student'}.
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#1A1A1A]/60 font-sans max-w-xl">
            Welcome to English Studio Hub by Ms. Maria. Explore 12 structured grammar modules, 4-skills practice tests, daily workouts, and diagnostics.
          </p>
        </div>

        {/* Big Editorial Metric */}
        <div className="flex items-center md:flex-col md:items-end gap-6 md:gap-0 bg-[#F7F5F0] md:bg-transparent p-4 md:p-0 rounded-2xl border border-[#1A1A1A]/10 md:border-none w-full md:w-auto justify-between">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50 mb-1">Curriculum Mastery</p>
          <div className="text-4xl sm:text-6xl font-serif italic text-[#1A1A1A] font-light">
            {overallPercentage}<span className="text-xl sm:text-2xl not-italic opacity-30 font-sans font-normal ml-0.5">%</span>
          </div>
        </div>
      </header>

      {/* Grid: Featured Continue Lesson (7 cols) + Daily Practice & Real Life (5 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Continue Lesson Card (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="bg-[#F7F5F0] border border-[#1A1A1A]/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]">
                  Module {currentModule.id}: {currentModule.title}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40">
                  Topic {nextIncompleteTopic.id.split('_topic')[1] || '1'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A] mb-3">
                {nextIncompleteTopic.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#1A1A1A]/70 mb-6 font-sans">
                {nextIncompleteTopic.shortDesc}
              </p>

              {/* Contrasting Rule Snippet */}
              <div className="space-y-3 mb-6 bg-white/80 border border-[#1A1A1A]/10 p-4 rounded-xl">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <span className="w-6 h-[1px] bg-[#C25E3E]"></span>
                  <p className="text-[#1A1A1A]/70">
                    ❌ Common Slip: <span className="line-through decoration-[#C25E3E] decoration-2">"She work at office."</span>
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                  <span className="w-6 h-[1px] bg-[#4A5D4E]"></span>
                  <p className="text-[#1A1A1A]">
                    ✅ Natural Speech: <span className="text-[#4A5D4E] font-bold">"She works at the office."</span>
                  </p>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="space-y-1.5 mb-2">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A]/50">
                  <span>Syllabus Completion</span>
                  <span>{completedCount} of {totalTopics.length} Topics</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E0D8]">
                  <div
                    className="h-full bg-[#1A1A1A] rounded-full transition-all duration-500"
                    style={{ width: `${overallPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <button
              id="btn-continue-current-lesson"
              onClick={() => onStartTopic(nextIncompleteTopic.id)}
              className="w-full bg-[#1A1A1A] text-white py-3.5 px-6 text-xs font-bold uppercase tracking-[0.25em] hover:bg-[#333] transition-colors rounded-xl flex items-center justify-center gap-2"
            >
              <Play size={14} className="fill-white" />
              <span>Continue Lesson</span>
            </button>
          </div>
        </div>

        {/* Right Column: Daily Workout & Real Life Banner (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Daily 20-Item Practice Card */}
          <div className="border border-[#1A1A1A]/10 bg-white p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">
                  Daily Practice (20 Questions)
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5D4E] bg-[#4A5D4E]/10 px-2 py-0.5 rounded-full">
                  Min 20 Items
                </span>
              </div>

              <h4 className="text-xl font-serif italic text-[#1A1A1A] mb-1">
                Precision Daily Workout
              </h4>
              <p className="text-xs text-[#1A1A1A]/60 leading-relaxed">
                20 comprehensive questions covering S+V+O architecture, irregular past tense, prepositions, and scrambled syntax.
              </p>
            </div>

            <button
              id="btn-start-daily-workout-dashboard"
              onClick={onStartDailyWorkout}
              className="w-full border border-[#1A1A1A] bg-transparent text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-xl flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              <span>Begin Today's 20-Item Workout (+25 pts)</span>
            </button>
          </div>

          {/* Real-Life English Scenario Card */}
          <div className="border border-[#1A1A1A]/10 p-6 bg-[#4A5D4E] text-[#FDFCF9] rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDFCF9]/70">
                  Real Life Mode
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FDFCF9]/90 border border-white/20 px-2 py-0.5 rounded-full">
                  Practical Scenarios
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-serif italic leading-tight text-[#FDFCF9]">
                English for Workplace & Meetings
              </h4>
              <p className="text-xs text-[#FDFCF9]/80 mt-2 leading-relaxed font-sans">
                Master polite requests, email correspondence, doctor visits, and job interviews without fear.
              </p>
            </div>

            <button
              onClick={() => onNavigateToTab('reallife')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#FDFCF9] underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity self-start"
            >
              <span>Explore Scenarios</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 4-Skills Comprehensive Practice Banner (Listening, Reading, Writing, Speaking) */}
      <section className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 md:p-8 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C25E3E]">
                4-Skills Mastery Suite
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5D4E] bg-[#4A5D4E]/10 px-2 py-0.5 rounded-full">
                24 Practice Tests
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#1A1A1A]">
              Listening, Reading, Writing & Speaking Tests
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans mt-1 max-w-2xl">
              Complete full-length skill evaluations with natural speech playback, automated writing rubrics, and real-time speech pronunciation recognition.
            </p>
          </div>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="self-start md:self-center px-5 py-3 rounded-xl bg-[#1A1A1A] text-white hover:bg-[#333] transition-all text-xs font-bold uppercase tracking-wider flex items-center gap-2 shrink-0"
          >
            <span>Launch 4-Skills Hub</span>
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] hover:border-[#1A1A1A]/30 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#C25E3E]/10 text-[#C25E3E] flex items-center justify-center">
                <Headphones size={16} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A]">Listening Practice</h4>
            <p className="text-[11px] text-[#1A1A1A]/60 font-sans mt-1">Audio dialogue comprehension & notes</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] hover:border-[#1A1A1A]/30 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#4A5D4E]/10 text-[#4A5D4E] flex items-center justify-center">
                <BookOpen size={16} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A]">Reading Practice</h4>
            <p className="text-[11px] text-[#1A1A1A]/60 font-sans mt-1">Academic & workplace passages + questions</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] hover:border-[#1A1A1A]/30 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#2E5B88]/10 text-[#2E5B88] flex items-center justify-center">
                <PenTool size={16} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A]">Writing Practice</h4>
            <p className="text-[11px] text-[#1A1A1A]/60 font-sans mt-1">Automated rubric analysis & grammar coach</p>
          </button>

          <button
            onClick={() => onNavigateToTab('skills')}
            className="p-4 rounded-xl border border-[#1A1A1A]/10 bg-[#FDFCF9] hover:border-[#1A1A1A]/30 text-left transition-all group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-lg bg-[#D97706]/10 text-[#D97706] flex items-center justify-center">
                <Mic size={16} />
              </div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] transition-colors">
                6 Tests
              </span>
            </div>
            <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A]">Speaking Practice</h4>
            <p className="text-[11px] text-[#1A1A1A]/60 font-sans mt-1">Voice recognition & fluency evaluation</p>
          </button>
        </div>
      </section>

      {/* Editorial Highlights Row: Stats & Recommended Review & Goals */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {/* Editorial Stats */}
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">Learning Rhythm</span>
            <Flame size={16} className="text-[#C25E3E]" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 block mb-0.5">Active Streak</span>
              <span className="text-2xl font-serif italic text-[#1A1A1A] font-bold">{progress.streakCount} Days</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/40 block mb-0.5">Practice Points</span>
              <span className="text-2xl font-serif italic text-[#1A1A1A] font-bold">{progress.practicePoints} pts</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#1A1A1A]/5">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-2">Diagnostic Level:</span>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2.5 py-1 text-xs font-bold text-[#1A1A1A]">
                {progress.level || 'Take Diagnostic Test (25 Items)'}
              </span>
            </div>
          </div>
        </div>

        {/* Recommended Review */}
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">High-Impact Focus</span>
              <RotateCcw size={15} className="text-[#1A1A1A]/60" />
            </div>

            <p className="mt-3 text-xs text-[#1A1A1A]/80 leading-relaxed">
              Targeted practice on <strong className="text-[#1A1A1A]">Present Simple Third-Person -s</strong> eliminates 80% of fast-speech slips.
            </p>

            <div className="mt-3 rounded-lg border border-[#1A1A1A]/10 bg-white p-2.5 text-xs text-[#1A1A1A]/80 space-y-1 font-mono text-[11px]">
              <div className="text-[#C25E3E] line-through">❌ She work every day.</div>
              <div className="text-[#4A5D4E] font-bold">✅ She works every day.</div>
            </div>
          </div>

          <button
            id="btn-review-weak-topic"
            onClick={() => onStartTopic('mod6_topic1')}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg border border-[#1A1A1A]/20 bg-white py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
          >
            <span>Review Module 6</span>
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Teacher & Student Chat Card */}
        <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/50">Instructor Desk</span>
              <MessageCircle size={15} className="text-[#4A5D4E]" />
            </div>

            <div className="mt-3 space-y-1.5">
              <div className="flex items-center gap-1.5">
                <h4 className="font-serif italic font-bold text-base text-[#1A1A1A]">
                  Chat with Ms. Maria
                </h4>
                <ShieldCheck size={14} className="text-[#4A5D4E]" />
              </div>
              <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed">
                Ask grammar questions, verify sentence corrections, and receive direct personalized feedback from your teacher.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[10px] font-bold">
                <a
                  href="https://www.facebook.com/elevatewithmsmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#4A5D4E] underline inline-flex items-center gap-0.5"
                >
                  <span>FB: @elevatewithmsmaria</span>
                  <ExternalLink size={9} />
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/elevate.with.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A1A1A] hover:text-[#C25E3E] underline inline-flex items-center gap-0.5"
                >
                  <span>IG: @elevate.with.maria</span>
                  <ExternalLink size={9} />
                </a>
              </div>
            </div>
          </div>

          <button
            id="btn-goto-chat-dash"
            onClick={() => onNavigateToTab('chat')}
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#1A1A1A] text-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#333] transition-colors"
          >
            <MessageCircle size={13} />
            <span>Open Teacher Chat</span>
          </button>
        </div>
      </section>
    </div>
  );
};
