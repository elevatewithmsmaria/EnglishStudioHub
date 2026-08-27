import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Play,
  Award,
  ChevronDown,
  ChevronUp,
  Clock,
  Sparkles,
  Building2,
  PackageCheck,
  Users,
  Zap,
  Activity,
  History,
  Compass,
  Sparkle,
  Sliders,
  Navigation,
  FileText,
  Link,
  HelpCircle,
  Layers,
  FileCheck
} from 'lucide-react';
import { ALL_MODULES } from '../data/curriculum';
import { UserProgress } from '../types';
import { LESSON_DIAGNOSTICS } from '../data/assessmentData';

interface LessonListViewProps {
  progress: UserProgress;
  onSelectTopic: (topicId: string) => void;
  onSelectQuiz: (moduleId: number) => void;
  onSelectDiagnostic?: (moduleId: number) => void;
}

export const LessonListView: React.FC<LessonListViewProps> = ({
  progress,
  onSelectTopic,
  onSelectQuiz,
  onSelectDiagnostic,
}) => {
  const [expandedModuleId, setExpandedModuleId] = useState<number | null>(1);
  const [filterLevel, setFilterLevel] = useState<'all' | 'Beginner' | 'Elementary'>('all');

  const renderModuleIcon = (name: string) => {
    switch (name) {
      case 'Building2': return <Building2 size={18} />;
      case 'PackageCheck': return <PackageCheck size={18} />;
      case 'Users': return <Users size={18} />;
      case 'Zap': return <Zap size={18} />;
      case 'Sparkles': return <Sparkles size={18} />;
      case 'Clock': return <Clock size={18} />;
      case 'Activity': return <Activity size={18} />;
      case 'History': return <History size={18} />;
      case 'Compass': return <Compass size={18} />;
      case 'Sparkle': return <Sparkle size={18} />;
      case 'Sliders': return <Sliders size={18} />;
      case 'Navigation': return <Navigation size={18} />;
      case 'FileText': return <FileText size={18} />;
      case 'Link': return <Link size={18} />;
      case 'HelpCircle': return <HelpCircle size={18} />;
      case 'Layers': return <Layers size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  const getModuleTheme = (id: number) => {
    const themes = [
      { border: 'border-amber-200', bg: 'bg-amber-50/70', badge: 'bg-amber-500 text-white', iconBg: 'bg-amber-100 text-amber-800', lightBadge: 'bg-amber-100 text-amber-900 border-amber-300' },
      { border: 'border-purple-200', bg: 'bg-purple-50/70', badge: 'bg-purple-500 text-white', iconBg: 'bg-purple-100 text-purple-800', lightBadge: 'bg-purple-100 text-purple-900 border-purple-300' },
      { border: 'border-emerald-200', bg: 'bg-emerald-50/70', badge: 'bg-emerald-500 text-white', iconBg: 'bg-emerald-100 text-emerald-800', lightBadge: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
      { border: 'border-sky-200', bg: 'bg-sky-50/70', badge: 'bg-sky-500 text-white', iconBg: 'bg-sky-100 text-sky-800', lightBadge: 'bg-sky-100 text-sky-900 border-sky-300' },
      { border: 'border-rose-200', bg: 'bg-rose-50/70', badge: 'bg-rose-500 text-white', iconBg: 'bg-rose-100 text-rose-800', lightBadge: 'bg-rose-100 text-rose-900 border-rose-300' },
      { border: 'border-fuchsia-200', bg: 'bg-fuchsia-50/70', badge: 'bg-fuchsia-500 text-white', iconBg: 'bg-fuchsia-100 text-fuchsia-800', lightBadge: 'bg-fuchsia-100 text-fuchsia-900 border-fuchsia-300' },
      { border: 'border-yellow-200', bg: 'bg-yellow-50/70', badge: 'bg-yellow-500 text-white', iconBg: 'bg-yellow-100 text-yellow-800', lightBadge: 'bg-yellow-100 text-yellow-900 border-yellow-300' },
      { border: 'border-teal-200', bg: 'bg-teal-50/70', badge: 'bg-teal-500 text-white', iconBg: 'bg-teal-100 text-teal-800', lightBadge: 'bg-teal-100 text-teal-900 border-teal-300' },
      { border: 'border-indigo-200', bg: 'bg-indigo-50/70', badge: 'bg-indigo-500 text-white', iconBg: 'bg-indigo-100 text-indigo-800', lightBadge: 'bg-indigo-100 text-indigo-900 border-indigo-300' },
      { border: 'border-orange-200', bg: 'bg-orange-50/70', badge: 'bg-orange-500 text-white', iconBg: 'bg-orange-100 text-orange-800', lightBadge: 'bg-orange-100 text-orange-900 border-orange-300' },
      { border: 'border-violet-200', bg: 'bg-violet-50/70', badge: 'bg-violet-500 text-white', iconBg: 'bg-violet-100 text-violet-800', lightBadge: 'bg-violet-100 text-violet-900 border-violet-300' },
      { border: 'border-blue-200', bg: 'bg-blue-50/70', badge: 'bg-blue-500 text-white', iconBg: 'bg-blue-100 text-blue-800', lightBadge: 'bg-blue-100 text-blue-900 border-blue-300' },
    ];
    return themes[(id - 1) % themes.length];
  };

  const filteredModules = ALL_MODULES.filter((mod) => {
    if (filterLevel === 'all') return true;
    return mod.topics.some((t) => t.level === filterLevel);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200/80 pb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-100 border border-amber-300/60 px-2.5 py-0.5 rounded-full inline-block mb-1.5 shadow-2xs">
            Curriculum Map • 12 Comprehensive Lessons & Topics
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif italic font-black text-gray-900 tracking-tight">
            Grammar Modules & Lesson Syllabi
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-sans">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-amber-700 underline">Ms. Maria</a>. Bite-sized lessons, targeted diagnostics, and comprehensive practice quizzes.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-2">
          {(['all', 'Beginner', 'Elementary'] as const).map((lvl) => (
            <button
              key={lvl}
              id={`filter-lvl-${lvl}`}
              onClick={() => setFilterLevel(lvl)}
              className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border shadow-2xs ${
                filterLevel === lvl
                  ? 'bg-gradient-to-r from-gray-900 to-indigo-950 text-white border-gray-900 shadow-xs'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900'
              }`}
            >
              {lvl === 'all' ? 'All Modules' : lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {filteredModules.map((mod) => {
          const isExpanded = expandedModuleId === mod.id;
          const completedTopicsInModule = mod.topics.filter((t) => progress.completedTopics.includes(t.id)).length;
          const isModuleComplete = completedTopicsInModule === mod.topics.length && mod.topics.length > 0;
          const moduleQuizScore = progress.quizScores[`mod${mod.id}_quiz`];
          const diagInfo = LESSON_DIAGNOSTICS[mod.id];
          const theme = getModuleTheme(mod.id);

          return (
            <div
              key={mod.id}
              id={`module-card-${mod.id}`}
              className={`overflow-hidden rounded-3xl border transition-all shadow-2xs ${
                isExpanded ? `${theme.border} bg-white shadow-sm` : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              {/* Module Header Bar */}
              <div
                onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                className={`flex cursor-pointer items-center justify-between p-4 sm:p-5 transition-colors ${
                  isExpanded ? theme.bg : 'hover:bg-gray-50/80'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} font-serif font-bold shadow-2xs`}>
                    {renderModuleIcon(mod.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${theme.badge} shadow-2xs`}>
                        Module {mod.id}
                      </span>
                      {isModuleComplete && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 uppercase tracking-wider shadow-2xs">
                          <CheckCircle2 size={11} />
                          Completed
                        </span>
                      )}
                      {moduleQuizScore && (
                        <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                          Quiz: {moduleQuizScore.percentage}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif italic font-bold text-gray-900">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-gray-600 hidden sm:block font-sans">
                      {mod.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-serif italic text-gray-600 hidden md:block">
                    <strong className="text-indigo-700">{completedTopicsInModule}</strong>/{mod.topics.length} Lessons
                  </span>
                  <div className="rounded-xl p-2 text-gray-500 hover:bg-white/80 hover:text-gray-900 transition-colors">
                    {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
              </div>

              {/* Module Topics Accordion Content */}
              {isExpanded && (
                <div className="border-t border-gray-100 bg-white p-4 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-sans bg-gray-50/80 p-3.5 rounded-2xl border border-gray-100">
                    {mod.description}
                  </p>

                  <div className="space-y-2.5">
                    {mod.topics.map((topic) => {
                      const isCompleted = progress.completedTopics.includes(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-2xs"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="mt-0.5">
                              {isCompleted ? (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-2xs">
                                  <CheckCircle2 size={16} />
                                </div>
                              ) : (
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs font-bold">
                                  •
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-sm font-serif italic font-bold text-gray-900">
                                  {topic.title}
                                </h4>
                                <span className="rounded-full bg-indigo-50 border border-indigo-200 px-2 py-0.5 text-[9px] font-bold text-indigo-700 uppercase tracking-widest">
                                  {topic.level}
                                </span>
                              </div>
                              <p className="text-xs text-gray-600 mt-0.5 font-sans">
                                {topic.shortDesc}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 self-end sm:self-center">
                            <span className="text-[11px] font-medium text-gray-500 flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-lg">
                              <Clock size={12} />
                              {topic.estimatedMinutes}m
                            </span>

                            <button
                              id={`btn-start-topic-${topic.id}`}
                              onClick={() => onSelectTopic(topic.id)}
                              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-gray-900 to-indigo-950 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:from-indigo-900 hover:to-purple-900 transition-all shadow-xs"
                            >
                              <Play size={11} className="fill-amber-400 text-amber-400" />
                              <span>{isCompleted ? 'Review' : 'Start'}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dual Action Bar: Targeted Lesson Diagnostic Test + Comprehensive Module Quiz */}
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Lesson Diagnostic Trigger */}
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50/80 to-teal-50/60 p-4 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <FileCheck size={20} className="text-emerald-700 shrink-0" />
                        <div>
                          <span className="font-serif italic font-bold text-xs sm:text-sm text-gray-900 block">
                            Lesson Diagnostic Test
                          </span>
                          <span className="text-[10px] text-gray-600">
                            10 targeted questions • Skill diagnosis
                          </span>
                        </div>
                      </div>

                      <button
                        id={`btn-start-mod-diag-${mod.id}`}
                        onClick={() => onSelectDiagnostic && onSelectDiagnostic(mod.id)}
                        className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:from-emerald-700 hover:to-teal-700 transition-all whitespace-nowrap shadow-xs"
                      >
                        Take Diagnostic
                      </button>
                    </div>

                    {/* Comprehensive Module Quiz Trigger */}
                    <div className="flex items-center justify-between gap-3 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50/80 to-orange-50/60 p-4 shadow-2xs">
                      <div className="flex items-center gap-2.5">
                        <Award size={20} className="text-amber-700 shrink-0" />
                        <div>
                          <span className="font-serif italic font-bold text-xs sm:text-sm text-gray-900 block">
                            Module Practice Quiz
                          </span>
                          <span className="text-[10px] text-gray-600">
                            20+ questions • Instant smart feedback
                          </span>
                        </div>
                      </div>

                      <button
                        id={`btn-start-mod-quiz-${mod.id}`}
                        onClick={() => onSelectQuiz(mod.id)}
                        className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:from-amber-600 hover:to-orange-600 transition-all whitespace-nowrap shadow-xs"
                      >
                        {moduleQuizScore ? 'Retake Quiz' : 'Take Quiz (20+)'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
