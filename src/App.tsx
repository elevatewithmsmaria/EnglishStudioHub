import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { DashboardView } from './components/DashboardView';
import { LessonListView } from './components/LessonListView';
import { InteractiveLessonPlayer } from './components/InteractiveLessonPlayer';
import { PracticeHubView } from './components/PracticeHubView';
import { SkillsPracticeView } from './components/SkillsPracticeView';
import { RealLifeView } from './components/RealLifeView';
import { ReferenceGuideView } from './components/ReferenceGuideView';
import { FinalAssessmentView } from './components/FinalAssessmentView';
import { InstructorDashboardView } from './components/InstructorDashboardView';
import { TeacherAuthGate } from './components/TeacherAuthGate';
import { StudentAuthModal } from './components/StudentAuthModal';
import { QuizPlayer } from './components/QuizPlayer';
import { GrammarAssistantModal } from './components/GrammarAssistantModal';
import { StudyAudioPlayer } from './components/StudyAudioPlayer';
import { StudentChatView } from './components/StudentChatView';
import { FloatingChatWidget } from './components/FloatingChatWidget';
import { UserProgress, Topic, InstructorAssignment, StudentProfile, SkillCategory } from './types';
import {
  loadUserProgress,
  saveUserProgress,
  getCurrentStudent,
  isTeacherAuthenticated,
  setTeacherAuthenticated
} from './utils/storage';
import { ALL_MODULES, getTopicById, getQuizQuestionsForModule } from './data/curriculum';
import { ExternalLink } from 'lucide-react';

export default function App() {
  const [currentStudent, setCurrentStudentState] = useState<StudentProfile | null>(getCurrentStudent());
  const [progress, setProgress] = useState<UserProgress>(loadUserProgress());
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [adultMode, setAdultMode] = useState(true);
  const [isTeacherAuth, setIsTeacherAuth] = useState<boolean>(isTeacherAuthenticated());

  // Active Lesson or Quiz View State
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeQuizModuleId, setActiveQuizModuleId] = useState<number | null>(null);
  const [activeDiagnosticModuleId, setActiveDiagnosticModuleId] = useState<number | null>(null);

  // Modals
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');

  // When student changes, reload their specific progress
  const handleStudentChanged = (student: StudentProfile | null) => {
    setCurrentStudentState(student);
    const newProgress = loadUserProgress();
    setProgress(newProgress);
  };

  // Persist progress changes to localStorage
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Topic & Lesson handlers
  const handleStartTopic = (topicId: string) => {
    const topic = getTopicById(topicId);
    if (topic) {
      setActiveTopic(topic);
      setActiveQuizModuleId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleFinishLesson = (topicId: string, earnedPoints: number) => {
    setProgress((prev) => {
      const alreadyCompleted = prev.completedTopics.includes(topicId);
      const newCompleted = alreadyCompleted
        ? prev.completedTopics
        : [...prev.completedTopics, topicId];

      return {
        ...prev,
        completedTopics: newCompleted,
        practicePoints: prev.practicePoints + earnedPoints,
        timeSpentMinutes: prev.timeSpentMinutes + 6,
        lastActiveDate: new Date().toISOString()
      };
    });

    setActiveTopic(null);
    setCurrentTab('lessons');
  };

  // Quiz handlers
  const handleStartQuiz = (moduleId: number) => {
    setActiveQuizModuleId(moduleId);
    setActiveTopic(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFinishQuiz = (moduleId: number, score: number, total: number, mistakes: string[]) => {
    const percentage = Math.round((score / total) * 100);
    const quizKey = `mod${moduleId}_quiz`;

    setProgress((prev) => ({
      ...prev,
      practicePoints: prev.practicePoints + (score * 5),
      quizScores: {
        ...prev.quizScores,
        [quizKey]: {
          score,
          total,
          percentage,
          completedAt: new Date().toISOString()
        }
      },
      timeSpentMinutes: prev.timeSpentMinutes + 10,
      weakGrammarAreas: Array.from(new Set([...prev.weakGrammarAreas, ...mistakes]))
    }));
  };

  // Daily workout handler (20 questions)
  const handleCompleteWorkout = () => {
    setProgress((prev) => ({
      ...prev,
      practicePoints: prev.practicePoints + 50,
      streakCount: prev.streakCount + 1,
      timeSpentMinutes: prev.timeSpentMinutes + 10,
      lastActiveDate: new Date().toISOString()
    }));
  };

  // Assessment handler (25 questions)
  const handleSaveAssessmentResult = (score: number, level: string) => {
    setProgress((prev) => ({
      ...prev,
      practicePoints: prev.practicePoints + 150,
      level: level as any,
      timeSpentMinutes: prev.timeSpentMinutes + 20
    }));
  };

  // 4-Skills test handler (Listening, Reading, Writing, Speaking)
  const handleSaveSkillScore = (
    skill: SkillCategory,
    testId: string,
    score: number,
    total: number,
    percentage: number
  ) => {
    const key = `${skill}_${testId}`;
    setProgress((prev) => ({
      ...prev,
      practicePoints: prev.practicePoints + (percentage >= 70 ? 40 : 15),
      timeSpentMinutes: prev.timeSpentMinutes + 5,
      skillsScores: {
        ...(prev.skillsScores || {}),
        [key]: {
          skill,
          testId,
          score,
          total,
          percentage,
          date: new Date().toISOString()
        }
      }
    }));
  };

  // Instructor assignment handler
  const handleAssignTask = (task: Omit<InstructorAssignment, 'id'>) => {
    const newTask: InstructorAssignment = {
      ...task,
      id: `task_${Date.now()}`
    };

    setProgress((prev) => ({
      ...prev,
      instructorAssignments: [newTask, ...prev.instructorAssignments]
    }));
  };

  const handleTeacherLoginSuccess = () => {
    setTeacherAuthenticated(true);
    setIsTeacherAuth(true);
  };

  const handleTeacherLogout = () => {
    setTeacherAuthenticated(false);
    setIsTeacherAuth(false);
  };

  const handleOpenSearch = () => {
    setCurrentTab('reference');
    setActiveTopic(null);
    setActiveQuizModuleId(null);
  };

  // Find module and 20 questions for quiz
  const quizModule = activeQuizModuleId
    ? ALL_MODULES.find((m) => m.id === activeQuizModuleId)
    : null;

  const quizQuestions = activeQuizModuleId
    ? getQuizQuestionsForModule(activeQuizModuleId)
    : [];

  return (
    <div className="min-h-screen bg-[#FDFCF9] font-sans text-[#1A1A1A] antialiased selection:bg-[#1A1A1A] selection:text-white flex flex-col">
      {/* Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setActiveTopic(null);
          setActiveQuizModuleId(null);
        }}
        progress={progress}
        currentStudent={currentStudent}
        onOpenStudentModal={() => setIsStudentModalOpen(true)}
        adultMode={adultMode}
        onToggleAdultMode={() => setAdultMode(!adultMode)}
        onOpenAssistant={() => setIsAssistantOpen(true)}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Content Area */}
      <main className="flex-1 py-4 sm:py-6 pb-28 md:pb-10 transition-opacity duration-200">
        {/* If Active Lesson Player is active */}
        {activeTopic ? (
          <InteractiveLessonPlayer
            topic={activeTopic}
            onFinishLesson={handleFinishLesson}
            onBackToModules={() => setActiveTopic(null)}
            onOpenTopicQuiz={(modId) => handleStartQuiz(modId)}
          />
        ) : activeQuizModuleId && quizModule ? (
          /* If Active Quiz is active (Always 20 questions minimum) */
          <QuizPlayer
            title={`${quizModule.title} - Mastery Quiz (20 Questions)`}
            moduleId={activeQuizModuleId}
            questions={quizQuestions}
            onFinishQuiz={handleFinishQuiz}
            onBack={() => setActiveQuizModuleId(null)}
          />
        ) : (
          /* Main Tab Views */
          <>
            {currentTab === 'home' && (
              <DashboardView
                progress={progress}
                currentStudent={currentStudent}
                onOpenStudentModal={() => setIsStudentModalOpen(true)}
                onStartTopic={handleStartTopic}
                onStartDailyWorkout={() => setCurrentTab('practice')}
                onStartQuiz={handleStartQuiz}
                onNavigateToTab={(tab) => {
                  setCurrentTab(tab);
                  setActiveTopic(null);
                }}
              />
            )}

            {currentTab === 'lessons' && (
              <LessonListView
                progress={progress}
                onSelectTopic={handleStartTopic}
                onSelectQuiz={handleStartQuiz}
                onSelectDiagnostic={(modId) => {
                  setActiveDiagnosticModuleId(modId);
                  setCurrentTab('assessment');
                  setActiveTopic(null);
                  setActiveQuizModuleId(null);
                }}
              />
            )}

            {currentTab === 'practice' && (
              <PracticeHubView
                progress={progress}
                onCompleteWorkout={handleCompleteWorkout}
                onStartTopic={handleStartTopic}
              />
            )}

            {currentTab === 'skills' && (
              <SkillsPracticeView
                progress={progress}
                onSaveSkillScore={handleSaveSkillScore}
                onNavigateToTopic={handleStartTopic}
              />
            )}

            {currentTab === 'reallife' && <RealLifeView />}

            {currentTab === 'reference' && (
              <ReferenceGuideView initialSearchQuery={searchInitialQuery} />
            )}

            {currentTab === 'assessment' && (
              <FinalAssessmentView
                progress={progress}
                onSaveAssessmentResult={handleSaveAssessmentResult}
                initialModuleDiagnosticId={activeDiagnosticModuleId}
                onSelectTopic={handleStartTopic}
              />
            )}

            {currentTab === 'chat' && (
              <StudentChatView
                currentStudent={currentStudent}
                progress={progress}
                onOpenStudentModal={() => setIsStudentModalOpen(true)}
                onNavigateToTopic={handleStartTopic}
              />
            )}

            {currentTab === 'instructor' && (
              !isTeacherAuth ? (
                <TeacherAuthGate onAuthenticated={handleTeacherLoginSuccess} />
              ) : (
                <InstructorDashboardView
                  progress={progress}
                  onAssignTask={handleAssignTask}
                  onLogoutTeacher={handleTeacherLogout}
                />
              )
            )}
          </>
        )}
      </main>

      {/* Footer with Ms. Maria branding and link */}
      <footer className="mt-auto border-t border-[#1A1A1A]/10 bg-[#F7F5F0] py-6">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 text-xs text-[#1A1A1A]/70 font-sans">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-serif italic font-bold text-[#1A1A1A]">English Studio Hub</span>
            <span className="hidden sm:inline">•</span>
            <span>Prepared and created by <strong className="font-serif italic text-[#1A1A1A]">Ms. Maria</strong></span>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                title="Ms. Maria on Facebook"
                className="font-bold underline text-[#1A1A1A] hover:text-[#4A5D4E] inline-flex items-center gap-1 bg-white border border-[#1A1A1A]/10 px-2 py-0.5 rounded-md transition-colors"
              >
                <span>FB: @elevatewithmsmaria</span>
                <ExternalLink size={10} />
              </a>
              <a
                href="https://www.instagram.com/elevate.with.maria"
                target="_blank"
                rel="noopener noreferrer"
                title="Ms. Maria on Instagram"
                className="font-bold underline text-[#1A1A1A] hover:text-[#C25E3E] inline-flex items-center gap-1 bg-white border border-[#1A1A1A]/10 px-2 py-0.5 rounded-md transition-colors"
              >
                <span>IG: @elevate.with.maria</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setCurrentTab('chat');
                setActiveTopic(null);
                setActiveQuizModuleId(null);
              }}
              className="text-[#1A1A1A] hover:underline font-bold uppercase tracking-wider text-[11px]"
            >
              Teacher Chat
            </button>
            <span>•</span>
            <button
              onClick={() => setIsStudentModalOpen(true)}
              className="text-[#1A1A1A] hover:underline font-bold uppercase tracking-wider text-[11px]"
            >
              {currentStudent ? `Student: ${currentStudent.name}` : 'Student Login'}
            </button>
            <span>•</span>
            <button
              onClick={() => setIsAssistantOpen(true)}
              className="text-[#1A1A1A] hover:underline font-bold uppercase tracking-wider text-[11px]"
            >
              Ask Coach Assistant
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Chat with Ms. Maria Widget */}
      <FloatingChatWidget
        currentStudent={currentStudent}
        progress={progress}
        onOpenStudentModal={() => setIsStudentModalOpen(true)}
        onNavigateToFullChat={() => {
          setCurrentTab('chat');
          setActiveTopic(null);
          setActiveQuizModuleId(null);
        }}
      />

      {/* Study Relaxation Background Music Player */}
      <StudyAudioPlayer />

      {/* Grammar Assistant Modal */}
      <GrammarAssistantModal
        isOpen={isAssistantOpen}
        onClose={() => setIsAssistantOpen(false)}
      />

      {/* Student Account / Progress Modal */}
      <StudentAuthModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
        currentStudent={currentStudent}
        onStudentChanged={handleStudentChanged}
      />
    </div>
  );
}
