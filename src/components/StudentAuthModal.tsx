import React, { useState } from 'react';
import { User, Mail, X, Check, UserPlus, LogIn, ArrowRight, BookOpen, Flame, Award } from 'lucide-react';
import { StudentProfile, UserProgress } from '../types';
import { getRegisteredStudents, registerOrLoginStudent, setCurrentStudent, logoutStudent } from '../utils/storage';

interface StudentAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStudent: StudentProfile | null;
  onStudentChanged: (student: StudentProfile | null) => void;
}

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({
  isOpen,
  onClose,
  currentStudent,
  onStudentChanged
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [view, setView] = useState<'login' | 'switch'>('login');

  if (!isOpen) return null;

  const existingStudents = getRegisteredStudents();

  const handleLoginOrRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    const { student } = registerOrLoginStudent(name || 'Student', email);
    onStudentChanged(student);
    setName('');
    setEmail('');
    onClose();
  };

  const handleSelectStudent = (st: StudentProfile) => {
    setCurrentStudent(st);
    onStudentChanged(st);
    onClose();
  };

  const handleLogout = () => {
    logoutStudent();
    onStudentChanged(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/70 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#1A1A1A]/10 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1A1A1A]/10 pb-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">
              Student Account & Progress Portal
            </span>
            <h3 className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A]">
              {currentStudent ? 'Student Account' : 'Student Login / Register'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-full p-2 text-[#1A1A1A]/60 hover:bg-[#F7F5F0] hover:text-[#1A1A1A] transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {currentStudent ? (
          /* Active Student Details & Options */
          <div className="space-y-5">
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-[#F7F5F0] p-5 flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full text-white font-serif font-bold text-xl"
                style={{ backgroundColor: currentStudent.avatarColor || '#1A1A1A' }}
              >
                {currentStudent.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#4A5D4E]">Active Learner</span>
                <h4 className="text-lg font-serif italic font-bold text-[#1A1A1A]">{currentStudent.name}</h4>
                <p className="text-xs text-[#1A1A1A]/60 font-mono">{currentStudent.email}</p>
              </div>
            </div>

            {existingStudents.length > 1 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 block">
                  Switch to Another Student Account
                </span>
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {existingStudents
                    .filter((s) => s.id !== currentStudent.id)
                    .map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() => handleSelectStudent(st)}
                        className="w-full text-left rounded-xl border border-[#1A1A1A]/10 p-3 hover:bg-[#F7F5F0] flex items-center justify-between transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-full text-white text-xs font-bold"
                            style={{ backgroundColor: st.avatarColor || '#1A1A1A' }}
                          >
                            {st.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#1A1A1A] block">{st.name}</span>
                            <span className="text-[11px] text-[#1A1A1A]/50 font-mono">{st.email}</span>
                          </div>
                        </div>
                        <ArrowRight size={14} className="text-[#1A1A1A]/40" />
                      </button>
                    ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setView('login')}
                className="flex-1 rounded-lg border border-[#1A1A1A]/20 bg-white py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors text-center"
              >
                + Register New Student
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-lg bg-[#C25E3E]/10 border border-[#C25E3E]/30 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#C25E3E] hover:bg-[#C25E3E]/20 transition-colors"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          /* Sign In / Register Form */
          <form onSubmit={handleLoginOrRegister} className="space-y-4">
            <p className="text-xs text-[#1A1A1A]/70 font-sans">
              Sign in with your name and email to save your diagnostic assessment ratings, quiz history, homework assignments, and personalized practice progress.
            </p>

            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
                Learner Full Name
              </label>
              <input
                id="input-student-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60 block">
                Learner Email Address *
              </label>
              <input
                id="input-student-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah.jenkins@example.com"
                className="w-full rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-4 py-3 text-sm text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />
            </div>

            {error && (
              <p className="text-xs font-bold text-[#C25E3E] text-left">
                {error}
              </p>
            )}

            <button
              id="btn-submit-student-login"
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1A1A1A] py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
            >
              <LogIn size={15} />
              <span>Log In / Access My Progress</span>
            </button>

            {existingStudents.length > 0 && (
              <div className="pt-3 border-t border-[#1A1A1A]/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/50 block text-left">
                  Or choose an existing student on this device:
                </span>
                <div className="space-y-1 max-h-36 overflow-y-auto pr-1">
                  {existingStudents.map((st) => (
                    <button
                      key={st.id}
                      type="button"
                      onClick={() => handleSelectStudent(st)}
                      className="w-full text-left rounded-lg border border-[#1A1A1A]/10 p-2.5 hover:bg-[#F7F5F0] flex items-center justify-between text-xs transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="flex h-6 w-6 items-center justify-center rounded-full text-white text-[10px] font-bold"
                          style={{ backgroundColor: st.avatarColor || '#1A1A1A' }}
                        >
                          {st.name.charAt(0).toUpperCase()}
                        </div>
                        <span className="font-bold text-[#1A1A1A]">{st.name}</span>
                        <span className="text-[#1A1A1A]/40 font-mono text-[10px]">({st.email})</span>
                      </div>
                      <ArrowRight size={12} className="text-[#1A1A1A]/40" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
