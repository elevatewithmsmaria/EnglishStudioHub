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

  const filteredModules = ALL_MODULES.filter((mod) => {
    if (filterLevel === 'all') return true;
    return mod.topics.some((t) => t.level === filterLevel);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1A1A1A]/10 pb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-1">
            Curriculum Map • 12 Comprehensive Lessons & Topics
          </span>
          <h1 className="text-2xl sm:text-4xl font-serif italic text-[#1A1A1A] tracking-tight">
            Grammar Modules & Lesson Syllabi
          </h1>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/60 mt-1 font-sans">
            Prepared and created by <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-serif italic font-bold text-[#1A1A1A] underline">Ms. Maria</a>. Bite-sized lessons, targeted diagnostics, and comprehensive practice quizzes.
          </p>
        </div>

        {/* Level Filters */}
        <div className="flex items-center gap-2">
          {(['all', 'Beginner', 'Elementary'] as const).map((lvl) => (
            <button
              key={lvl}
              id={`filter-lvl-${lvl}`}
              onClick={() => setFilterLevel(lvl)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all border ${
                filterLevel === lvl
                  ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                  : 'bg-[#F7F5F0] text-[#1A1A1A]/60 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 hover:text-[#1A1A1A]'
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

          return (
            <div
              key={mod.id}
              id={`module-card-${mod.id}`}
              className="overflow-hidden rounded-2xl border border-[#1A1A1A]/10 bg-white transition-all"
            >
              {/* Module Header Bar */}
              <div
                onClick={() => setExpandedModuleId(isExpanded ? null : mod.id)}
                className="flex cursor-pointer items-center justify-between p-4 sm:p-5 hover:bg-[#F7F5F0]/60 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A] font-serif font-bold">
                    {renderModuleIcon(mod.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                        Module {mod.id}
                      </span>
                      {isModuleComplete && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 px-2 py-0.5 text-[10px] font-bold text-[#4A5D4E] uppercase tracking-wider">
                          <CheckCircle2 size={11} />
                          Completed
                        </span>
                      )}
                      {moduleQuizScore && (
                        <span className="rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2 py-0.5 text-[10px] font-bold text-[#1A1A1A] uppercase tracking-wider">
                          Quiz: {moduleQuizScore.percentage}%
                        </span>
                      )}
                    </div>
                    <h3 className="text-base sm:text-lg font-serif italic font-bold text-[#1A1A1A]">
                      {mod.title}
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/50 hidden sm:block">
                      {mod.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-serif italic text-[#1A1A1A]/50 hidden md:block">
                    {completedTopicsInModule}/{mod.topics.length} Lessons
                  </span>
                  <div className="rounded-lg p-1.5 text-[#1A1A1A]/40 hover:bg-[#F7F5F0] hover:text-[#1A1A1A]">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
              </div>

              {/* Module Topics Accordion Content */}
              {isExpanded && (
                <div className="border-t border-[#1A1A1A]/10 bg-[#F7F5F0]/40 p-4 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed font-sans">
                    {mod.description}
                  </p>

                  <div className="space-y-2.5">
                    {mod.topics.map((topic) => {
                      const isCompleted = progress.completedTopics.includes(topic.id);

                      return (
                        <div
                          key={topic.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-xl border border-[#1A1A1A]/10 bg-white p-4 transition-all hover:border-[#1A1A1A]/30"
                        >
                          <div className="flex items-start gap-3.5">
                            <div className="mt-0.5">
                              {isCompleted ? (
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#4A5D4E]/10 text-[#4A5D4E]">
                                  <CheckCircle2 size={15} />
                                </div>
                              ) : (
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A]/40 text-xs font-bold">
                                  •
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-serif italic font-bold text-[#1A1A1A]">
                                  {topic.title}
                                </h4>
                                <span className="rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2 py-0.5 text-[10px] font-bold text-[#1A1A1A]/60 uppercase tracking-widest">
                                  {topic.level}
                                </span>
                              </div>
                              <p className="text-xs text-[#1A1A1A]/60 mt-0.5">
                                {topic.shortDesc}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 self-end sm:self-center">
                            <span className="text-[11px] font-medium text-[#1A1A1A]/40 flex items-center gap-1">
                              <Clock size={12} />
                              {topic.estimatedMinutes}m
                            </span>

                            <button
                              id={`btn-start-topic-${topic.id}`}
                              onClick={() => onSelectTopic(topic.id)}
                              className="inline-flex items-center gap-1.5 rounded-lg bg-[#1A1A1A] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
                            >
                              <Play size={11} className="fill-white" />
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
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#4A5D4E]/30 bg-[#4A5D4E]/5 p-4">
                      <div className="flex items-center gap-2.5">
                        <FileCheck size={18} className="text-[#4A5D4E] shrink-0" />
                        <div>
                          <span className="font-serif italic font-bold text-xs sm:text-sm text-[#1A1A1A] block">
                            Lesson Diagnostic Test
                          </span>
                          <span className="text-[10px] text-[#1A1A1A]/60">
                            10 targeted questions • Skill diagnosis
                          </span>
                        </div>
                      </div>

                      <button
                        id={`btn-start-mod-diag-${mod.id}`}
                        onClick={() => onSelectDiagnostic && onSelectDiagnostic(mod.id)}
                        className="rounded-lg bg-[#4A5D4E] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#3B4B3E] transition-all whitespace-nowrap"
                      >
                        Take Diagnostic
                      </button>
                    </div>

                    {/* Comprehensive Module Quiz Trigger */}
                    <div className="flex items-center justify-between gap-3 rounded-xl border border-[#1A1A1A]/10 bg-white p-4">
                      <div className="flex items-center gap-2.5">
                        <Award size={18} className="text-[#1A1A1A]/70 shrink-0" />
                        <div>
                          <span className="font-serif italic font-bold text-xs sm:text-sm text-[#1A1A1A] block">
                            Module Practice Quiz
                          </span>
                          <span className="text-[10px] text-[#1A1A1A]/60">
                            20+ questions • Instant smart feedback
                          </span>
                        </div>
                      </div>

                      <button
                        id={`btn-start-mod-quiz-${mod.id}`}
                        onClick={() => onSelectQuiz(mod.id)}
                        className="rounded-lg border border-[#1A1A1A] bg-transparent px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all whitespace-nowrap"
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
