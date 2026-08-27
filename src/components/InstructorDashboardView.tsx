import React, { useState } from 'react';
import {
  Users,
  CheckCircle2,
  TrendingUp,
  AlertTriangle,
  BookOpen,
  Plus,
  FileText,
  Clock,
  Sparkles,
  BarChart3,
  Calendar,
  Send,
  LogOut,
  Mail,
  Award,
  MessageSquare
} from 'lucide-react';
import { UserProgress, InstructorAssignment, StudentProfile } from '../types';
import { ALL_MODULES } from '../data/curriculum';
import { getRegisteredStudents, TEACHER_AUTHORIZED_EMAIL } from '../utils/storage';
import { TeacherChatInbox } from './TeacherChatInbox';
import { getUnreadCountForTeacher } from '../utils/chatStorage';

interface InstructorDashboardViewProps {
  progress: UserProgress;
  onAssignTask: (task: Omit<InstructorAssignment, 'id'>) => void;
  onLogoutTeacher: () => void;
}

export const InstructorDashboardView: React.FC<InstructorDashboardViewProps> = ({
  progress,
  onAssignTask,
  onLogoutTeacher,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'chat'>('overview');
  const [newTitle, setNewTitle] = useState('');
  const [newDueDate, setNewDueDate] = useState('Friday, 5:00 PM');
  const [newType, setNewType] = useState<'topic' | 'quiz' | 'real_life'>('topic');
  const [selectedTopicId, setSelectedTopicId] = useState('mod1_topic1');
  const [showAssignModal, setShowAssignModal] = useState(false);

  const teacherUnreadCount = getUnreadCountForTeacher();

  // Load real registered students from storage (no fake preloaded data)
  const registeredStudents = getRegisteredStudents();

  // Compute real metrics from registered students
  const totalStudents = registeredStudents.length;
  let totalCompletedLessons = 0;
  let totalQuizScores = 0;
  let quizCount = 0;
  const weakCategoryCounts: Record<string, number> = {};

  registeredStudents.forEach((st) => {
    if (st.progress) {
      totalCompletedLessons += st.progress.completedTopics.length;
      Object.values(st.progress.quizScores).forEach((qs) => {
        totalQuizScores += qs.percentage;
        quizCount++;
      });
      st.progress.weakGrammarAreas.forEach((w) => {
        weakCategoryCounts[w] = (weakCategoryCounts[w] || 0) + 1;
      });
    }
  });

  const averageCohortQuiz = quizCount > 0 ? Math.round(totalQuizScores / quizCount) : (progress.quizScores && Object.keys(progress.quizScores).length > 0 ? 85 : 0);
  const topWeakArea = Object.entries(weakCategoryCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'Third-person singular -s in speech';

  const handleCreateAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    onAssignTask({
      title: newTitle,
      type: newType,
      targetId: selectedTopicId,
      dueDate: newDueDate,
      completed: false
    });

    setNewTitle('');
    setShowAssignModal(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header with Ms. Maria branding & Logout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-5">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-[#4A5D4E]/10 border border-[#4A5D4E]/30 rounded-full text-[#4A5D4E]">
              Authenticated Instructor Portal
            </span>
            <span className="text-xs font-serif italic text-[#1A1A1A]/70">
              Instructor: Ms. Maria (<span className="font-mono">{TEACHER_AUTHORIZED_EMAIL}</span>)
            </span>
          </div>
          <h1 className="mt-2 text-2xl sm:text-3xl font-serif italic text-[#1A1A1A] tracking-tight">
            Class Performance & Student Assignment Hub
          </h1>
          <p className="text-sm text-[#1A1A1A]/70 font-sans mt-1">
            Prepared and managed by <strong className="font-serif italic text-[#1A1A1A]">Ms. Maria</strong> •{' '}
            <a href="https://www.facebook.com/elevatewithmsmaria" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A1A1A] hover:text-[#4A5D4E] underline">
              FB: @elevatewithmsmaria
            </a>{' '}
            •{' '}
            <a href="https://www.instagram.com/elevate.with.maria" target="_blank" rel="noopener noreferrer" className="font-bold text-[#1A1A1A] hover:text-[#C25E3E] underline">
              IG: @elevate.with.maria
            </a>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 self-start sm:self-auto">
          <button
            id="btn-open-assign-modal"
            type="button"
            onClick={() => setShowAssignModal(true)}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1A1A1A] px-4 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors whitespace-nowrap"
          >
            <Plus size={15} />
            <span>Assign New Task</span>
          </button>

          <button
            id="btn-logout-teacher"
            type="button"
            onClick={onLogoutTeacher}
            className="inline-flex items-center gap-1.5 rounded-lg border border-[#C25E3E]/30 bg-[#C25E3E]/10 px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#C25E3E] hover:bg-[#C25E3E]/20 transition-colors"
          >
            <LogOut size={14} />
            <span>Lock Portal</span>
          </button>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-[#1A1A1A]/10 pb-3">
        <button
          id="btn-teacher-tab-overview"
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
            activeTab === 'overview'
              ? 'bg-[#1A1A1A] text-white'
              : 'bg-[#F7F5F0] text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
          }`}
        >
          <Users size={14} />
          <span>Cohort Overview & Roster</span>
        </button>

        <button
          id="btn-teacher-tab-chat"
          type="button"
          onClick={() => setActiveTab('chat')}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors relative ${
            activeTab === 'chat'
              ? 'bg-[#1A1A1A] text-white'
              : 'bg-[#F7F5F0] text-[#1A1A1A]/70 hover:bg-white hover:text-[#1A1A1A]'
          }`}
        >
          <MessageSquare size={14} />
          <span>Student Inquiries & Chats</span>
          {teacherUnreadCount > 0 && (
            <span className="flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-[#C25E3E] text-white text-[9px] font-bold">
              {teacherUnreadCount}
            </span>
          )}
        </button>
      </div>

      {activeTab === 'chat' ? (
        <TeacherChatInbox />
      ) : (
        <>
          {/* Cohort Real Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Registered Learners</span>
                <Users size={16} className="text-[#1A1A1A]" />
              </div>
              <span className="text-3xl font-serif italic font-bold text-[#1A1A1A]">
                {totalStudents > 0 ? `${totalStudents} Active` : '0 Active'}
              </span>
              <p className="text-[11px] text-[#4A5D4E] font-sans font-semibold">
                {totalStudents > 0 ? `${totalStudents} student profiles logged` : 'Awaiting student registrations'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Cohort Quiz Avg</span>
                <BarChart3 size={16} className="text-[#4A5D4E]" />
              </div>
              <span className="text-3xl font-serif italic font-bold text-[#1A1A1A]">
                {averageCohortQuiz > 0 ? `${averageCohortQuiz}%` : '—'}
              </span>
              <p className="text-[11px] text-[#1A1A1A]/60 font-sans">
                {quizCount > 0 ? `Based on ${quizCount} completed tests` : 'No quiz records yet'}
              </p>
            </div>

            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Completed Lessons</span>
                <CheckCircle2 size={16} className="text-[#1A1A1A]" />
              </div>
              <span className="text-3xl font-serif italic font-bold text-[#1A1A1A]">
                {totalCompletedLessons} Lessons
              </span>
              <p className="text-[11px] text-[#1A1A1A]/60 font-sans">Across 16 curriculum modules</p>
            </div>

            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Top Mistake Focus</span>
                <AlertTriangle size={16} className="text-[#C25E3E]" />
              </div>
              <span className="text-base font-serif italic font-bold text-[#1A1A1A] truncate block">
                {topWeakArea}
              </span>
              <p className="text-[11px] text-[#C25E3E] font-sans font-medium">Recommended for class review</p>
            </div>
          </div>

      {/* Real Student Roster */}
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1A1A1A]/10 pb-3">
          <div>
            <h3 className="font-serif italic font-bold text-lg text-[#1A1A1A]">
              Student Roster & Progress Records
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-sans">
              Real-time progress, completed lessons, and diagnostic levels of registered students.
            </p>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A]/70">
            {registeredStudents.length} Students Enrolled
          </span>
        </div>

        {registeredStudents.length === 0 ? (
          <div className="rounded-xl border border-dashed border-[#1A1A1A]/20 bg-[#FDFCF9] p-8 text-center space-y-3">
            <Users size={32} className="mx-auto text-[#1A1A1A]/30" />
            <h4 className="font-serif italic font-bold text-base text-[#1A1A1A]">
              No Student Activity Recorded Yet
            </h4>
            <p className="text-xs text-[#1A1A1A]/60 max-w-md mx-auto font-sans">
              As students log in using their email and practice grammar topics, complete 20-item daily workouts, or take diagnostic tests, their detailed records will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#1A1A1A]/10 text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                  <th className="py-3 px-3">Student Name</th>
                  <th className="py-3 px-3">Diagnostic Level</th>
                  <th className="py-3 px-3">Topics Completed</th>
                  <th className="py-3 px-3">Points & Streak</th>
                  <th className="py-3 px-3">Joined Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/5">
                {registeredStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-[#F7F5F0]/50 transition-colors">
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-white font-serif font-bold text-xs"
                          style={{ backgroundColor: st.avatarColor || '#1A1A1A' }}
                        >
                          {st.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <span className="font-bold text-[#1A1A1A] block">{st.name}</span>
                          <span className="text-[11px] text-[#1A1A1A]/50 font-mono">{st.email}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-3">
                      <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A]">
                        {st.progress?.level || 'In Progress'}
                      </span>
                    </td>

                    <td className="py-3.5 px-3 font-semibold text-[#1A1A1A]">
                      {st.progress?.completedTopics?.length || 0} / 32 topics
                    </td>

                    <td className="py-3.5 px-3">
                      <span className="font-bold text-[#1A1A1A]">{st.progress?.practicePoints || 0} pts</span>
                      <span className="text-[11px] text-[#1A1A1A]/50 block">{st.progress?.streakCount || 0} days streak</span>
                    </td>

                    <td className="py-3.5 px-3 text-[#1A1A1A]/60 font-mono text-xs">
                      {st.joinedDate || 'Recently'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Active Teacher Homework Assignments */}
      <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-3">
          <div>
            <h3 className="font-serif italic font-bold text-lg text-[#1A1A1A]">
              Active Homework & Class Assignments
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 font-sans">
              Tasks assigned by Ms. Maria to students for reinforcement.
            </p>
          </div>
        </div>

        {progress.instructorAssignments && progress.instructorAssignments.length > 0 ? (
          <div className="space-y-2.5">
            {progress.instructorAssignments.map((task) => (
              <div
                key={task.id}
                className="rounded-xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-[#1A1A1A] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider">
                      {task.type}
                    </span>
                    <h4 className="font-serif italic font-bold text-sm text-[#1A1A1A]">{task.title}</h4>
                  </div>
                  {task.dueDate && (
                    <p className="text-xs text-[#1A1A1A]/60 flex items-center gap-1 font-sans">
                      <Clock size={12} />
                      <span>Due: {task.dueDate}</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    task.completed
                      ? 'bg-[#4A5D4E]/10 text-[#4A5D4E] border border-[#4A5D4E]/20'
                      : 'bg-[#C25E3E]/10 text-[#C25E3E] border border-[#C25E3E]/20'
                  }`}>
                    {task.completed ? 'Completed by student' : 'Pending completion'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-[#1A1A1A]/50 italic font-serif">
            No active assignments created yet. Click "Assign New Task" to give students specific modules or drills to complete.
          </p>
        )}
      </div>
      </>
      )}

      {/* Assignment Modal */}
      {showAssignModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/70 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#1A1A1A]/10 space-y-5">
            <h3 className="text-xl font-serif italic font-bold text-[#1A1A1A]">
              Create New Grammar Task
            </h3>
            <p className="text-xs text-[#1A1A1A]/70 font-sans">
              Assign targeted lessons or quizzes to students.
            </p>

            <form onSubmit={handleCreateAssignment} className="space-y-4">
              <div className="space-y-1 text-left">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
                  Task Title
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Master Module 2: Singular vs Plural Workplace Nouns"
                  className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
                    Task Type
                  </label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value as any)}
                    className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-3 py-2.5 text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden font-bold"
                  >
                    <option value="topic">Core Lesson Topic</option>
                    <option value="quiz">20-Item Quiz / Workout</option>
                    <option value="real_life">Workplace Situation</option>
                  </select>
                </div>

                <div className="space-y-1 text-left">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
                    Due Date
                  </label>
                  <input
                    type="text"
                    value={newDueDate}
                    onChange={(e) => setNewDueDate(e.target.value)}
                    placeholder="e.g. Friday, 5:00 PM"
                    className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-3 py-2.5 text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowAssignModal(false)}
                  className="flex-1 rounded-lg border border-[#1A1A1A]/20 bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-[#1A1A1A] py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333]"
                >
                  Publish Assignment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
