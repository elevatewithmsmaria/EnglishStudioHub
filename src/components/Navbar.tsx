import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Home,
  CheckSquare,
  MessageSquare,
  Bookmark,
  Award,
  Users,
  Flame,
  Star,
  GraduationCap,
  Bot,
  Search,
  User,
  ExternalLink,
  Lock,
  MessageCircle,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  Headphones,
  Compass
} from 'lucide-react';
import { UserProgress, StudentProfile } from '../types';
import { getUnreadCountForStudent, CHAT_UPDATED_EVENT } from '../utils/chatStorage';

export type NavTab = 'home' | 'lessons' | 'practice' | 'skills' | 'reallife' | 'reference' | 'assessment' | 'chat' | 'instructor';

interface NavbarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  progress: UserProgress;
  currentStudent: StudentProfile | null;
  onOpenStudentModal: () => void;
  adultMode: boolean;
  onToggleAdultMode: () => void;
  onOpenAssistant: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  progress,
  currentStudent,
  onOpenStudentModal,
  adultMode,
  onToggleAdultMode,
  onOpenAssistant,
  onOpenSearch,
}) => {
  const [unreadChatCount, setUnreadChatCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const studentId = currentStudent?.id || 'guest_student';

  useEffect(() => {
    const updateUnread = () => {
      setUnreadChatCount(getUnreadCountForStudent(studentId));
    };

    updateUnread();
    window.addEventListener(CHAT_UPDATED_EVENT, updateUnread);
    window.addEventListener('storage', updateUnread);

    return () => {
      window.removeEventListener(CHAT_UPDATED_EVENT, updateUnread);
      window.removeEventListener('storage', updateUnread);
    };
  }, [studentId]);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems: {
    id: NavTab;
    label: string;
    shortLabel: string;
    desc: string;
    icon: React.ElementType;
    badge?: number;
    highlight?: boolean;
    color: string;
    activeBg: string;
  }[] = [
    { id: 'home', label: 'Home', shortLabel: 'Home', desc: 'Overview, streak & current progress', icon: Home, color: 'text-indigo-600', activeBg: 'bg-indigo-50 text-indigo-950 border-indigo-600' },
    { id: 'lessons', label: 'Lessons', shortLabel: 'Lessons', desc: '12 structured modules & topics', icon: BookOpen, color: 'text-amber-600', activeBg: 'bg-amber-50 text-amber-950 border-amber-600' },
    { id: 'practice', label: 'Practice (20+)', shortLabel: 'Practice', desc: 'Daily workouts & difficulty drills', icon: CheckSquare, color: 'text-emerald-600', activeBg: 'bg-emerald-50 text-emerald-950 border-emerald-600' },
    { id: 'skills', label: '4-Skills Tests', shortLabel: 'Skills (L/R/W/S)', desc: 'Listening, Reading, Writing & Speaking tests', icon: Headphones, color: 'text-sky-600', activeBg: 'bg-sky-50 text-sky-950 border-sky-600' },
    { id: 'reallife', label: 'Real Life', shortLabel: 'Real Life', desc: 'Workplace & everyday scenarios', icon: MessageSquare, color: 'text-rose-600', activeBg: 'bg-rose-50 text-rose-950 border-rose-600' },
    { id: 'reference', label: 'Grammar Guide', shortLabel: 'Guide', desc: 'Searchable master rulebook', icon: Bookmark, color: 'text-violet-600', activeBg: 'bg-violet-50 text-violet-950 border-violet-600' },
    { id: 'assessment', label: 'Grand 100 & Diagnostics', shortLabel: 'Assess', desc: 'Grand 100-test & module diagnostics', icon: Award, color: 'text-yellow-600', activeBg: 'bg-yellow-50 text-yellow-950 border-yellow-600' },
    { id: 'chat', label: 'Teacher & Student Chat', shortLabel: 'Chat', desc: 'Two-way channel with Ms. Maria', icon: MessageCircle, badge: unreadChatCount, highlight: true, color: 'text-teal-600', activeBg: 'bg-teal-50 text-teal-950 border-teal-600' },
    { id: 'instructor', label: 'Teacher Portal', shortLabel: 'Teacher', desc: 'Ms. Maria instructor desk & inbox', icon: Users, color: 'text-blue-600', activeBg: 'bg-blue-50 text-blue-950 border-blue-600' },
  ];

  const handleTabClick = (tabId: NavTab) => {
    onSelectTab(tabId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#1A1A1A]/10 bg-[#FDFCF9]/95 backdrop-blur-md transition-shadow">
        {/* Topmost Creator & Attribution Ribbon */}
        <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2D34] to-[#1E293B] text-white px-3 sm:px-4 py-1.5 text-xs shadow-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20">
                Curriculum
              </span>
              <span className="font-serif italic font-medium hidden xs:inline text-white/90">Prepared and created by</span>
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-300 hover:text-amber-200 underline decoration-amber-400/60 inline-flex items-center gap-1 transition-colors"
              >
                <span>Ms. Maria</span>
                <ExternalLink size={10} className="opacity-80" />
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px]">
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 hover:text-white transition-all font-medium"
              >
                <span>FB: @elevatewithmsmaria</span>
              </a>
              <span className="hidden sm:inline text-white/20">•</span>
              <a
                href="https://www.instagram.com/elevate.with.maria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 text-pink-200 hover:text-white transition-all font-medium"
              >
                <span>IG: @elevate.with.maria</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-2 sm:py-2.5">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="nav-brand-logo"
              type="button"
              onClick={() => handleTabClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-0.5 transition-transform active:scale-95"
            >
              <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-600 text-white font-serif italic font-black text-lg sm:text-xl shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all shrink-0">
                M
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-serif italic font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-gray-900 via-indigo-950 to-amber-900 bg-clip-text text-transparent">
                    English Studio <span className="font-sans font-bold text-amber-600 text-xs sm:text-sm ml-0.5 not-italic uppercase tracking-widest text-[9px] sm:text-[10px]">Hub</span>
                  </span>
                  <span className="inline-flex rounded-full bg-gradient-to-r from-amber-100 to-rose-100 border border-amber-300/50 px-2 py-0.5 text-[9px] font-bold text-amber-900 uppercase tracking-widest shadow-2xs">
                    by Ms. Maria
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 hidden sm:block font-serif italic leading-none mt-0.5">
                  Interactive English Grammar & 4-Skills • Prepared and created by Ms. Maria
                </p>
              </div>
            </button>
          </div>

          {/* Action Controls & Student Profile */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Quick Search */}
            <button
              id="btn-nav-search"
              type="button"
              onClick={onOpenSearch}
              title="Search grammar rules"
              className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white/80 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900 transition-all shadow-2xs"
            >
              <Search size={14} className="text-indigo-500" />
              <span className="hidden lg:inline text-xs">Search rules...</span>
              <kbd className="hidden lg:inline-block rounded bg-gray-100 px-1.5 py-0.5 text-[9px] font-mono border border-gray-200 text-gray-500 ml-1">
                /
              </kbd>
            </button>

            {/* AI Coach Assistant */}
            <button
              id="btn-nav-coach"
              type="button"
              onClick={onOpenAssistant}
              title="Ask Personal Grammar Coach"
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-3 sm:px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:from-violet-700 hover:to-indigo-700 hover:shadow transition-all shrink-0 hover:scale-105 active:scale-95"
            >
              <Bot size={14} className="text-yellow-300 shrink-0 animate-bounce" />
              <span className="hidden sm:inline text-xs">Coach Q&A</span>
            </button>

            {/* Streak Counter */}
            <div
              id="nav-streak-counter"
              title={`${progress.streakCount} Day Active Learning Streak`}
              className="flex items-center gap-1 rounded-xl border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 px-2.5 sm:px-3 py-1 text-xs font-bold text-orange-800 shadow-2xs shrink-0"
            >
              <Flame size={15} className="text-orange-500 fill-orange-500 shrink-0 animate-pulse" />
              <span className="font-serif italic font-bold text-[11px] sm:text-xs">{progress.streakCount}d</span>
            </div>

            {/* Student Profile Button */}
            <button
              id="btn-student-account"
              type="button"
              onClick={onOpenStudentModal}
              title={currentStudent ? `Logged in as ${currentStudent.name}` : 'Student Sign In / Register'}
              className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-gray-200 bg-white px-2.5 sm:px-3 py-1.5 text-xs font-bold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-2xs shrink-0"
            >
              {currentStudent ? (
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full text-white text-[10px] font-serif font-bold shrink-0 shadow-xs"
                  style={{ backgroundColor: currentStudent.avatarColor || '#4F46E5' }}
                >
                  {currentStudent.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-indigo-700 text-xs shrink-0">
                  <User size={12} />
                </div>
              )}
              <span className="font-serif italic max-w-[70px] sm:max-w-[100px] truncate text-[11px] sm:text-xs hidden xs:inline">
                {currentStudent ? currentStudent.name.split(' ')[0] : 'Sign In'}
              </span>
            </button>

            {/* Mobile Menu Hamburger (Visible on mobile screens) */}
            <button
              id="btn-mobile-menu-toggle"
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 hover:bg-gray-100 transition-colors shadow-2xs"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Desktop & Tablet Navigation Tab Bar (Scrollable on Tablet) */}
        <nav className="border-t border-gray-200/80 bg-white/90 backdrop-blur-md hidden md:block overflow-x-auto scrollbar-none">
          <div
            ref={navContainerRef}
            className="mx-auto flex max-w-7xl px-2 sm:px-6 items-center gap-1"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`tab-btn-${item.id}`}
                  type="button"
                  onClick={() => handleTabClick(item.id)}
                  className={`relative flex items-center gap-2 border-b-2 px-3.5 lg:px-4 py-2.5 text-xs lg:text-sm font-medium transition-all whitespace-nowrap group rounded-t-lg ${
                    isActive
                      ? `${item.activeBg} font-bold shadow-2xs`
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/60'
                  }`}
                >
                  <Icon
                    size={16}
                    className={`transition-transform group-hover:scale-110 ${
                      isActive ? item.color : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  />
                  <span>{item.label}</span>
                  {Boolean(item.badge && item.badge > 0) && (
                    <span className="flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[9px] font-bold animate-pulse shadow-xs">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Over Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs sm:max-w-sm h-full bg-[#FDFCF9] shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-250 border-l border-[#1A1A1A]/10">
            {/* Drawer Header */}
            <div className="p-4 bg-gradient-to-r from-gray-900 via-indigo-950 to-slate-900 text-white flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 text-white font-serif italic font-bold text-base shadow-sm">
                  M
                </div>
                <div>
                  <h3 className="font-serif italic font-bold text-sm text-white">
                    English Studio Hub
                  </h3>
                  <p className="text-[10px] text-amber-300 font-medium">by Ms. Maria</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Student Profile Quick Strip in Drawer */}
            <div className="p-3.5 bg-gradient-to-r from-amber-50/60 via-indigo-50/40 to-rose-50/40 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-serif font-bold shadow-xs"
                  style={{ backgroundColor: currentStudent?.avatarColor || '#4F46E5' }}
                >
                  {currentStudent ? currentStudent.name.charAt(0).toUpperCase() : <User size={14} />}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-gray-900">
                    {currentStudent ? currentStudent.name : 'Guest Student'}
                  </div>
                  <div className="text-[10px] text-gray-600 font-sans flex items-center gap-1.5">
                    <span className="text-orange-600 font-bold">🔥 {progress.streakCount}d Streak</span>
                    <span>•</span>
                    <span className="text-indigo-600 font-bold">{progress.practicePoints} pts</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenStudentModal();
                }}
                className="rounded-xl border border-indigo-200 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 hover:bg-indigo-50 shadow-2xs"
              >
                {currentStudent ? 'Profile' : 'Sign In'}
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 py-1 block">
                Curriculum Navigation
              </span>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-drawer-btn-${item.id}`}
                    type="button"
                    onClick={() => handleTabClick(item.id)}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                      isActive
                        ? `${item.activeBg} font-bold shadow-xs border`
                        : 'text-gray-700 hover:bg-gray-100/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-xl transition-transform ${
                          isActive
                            ? 'bg-white shadow-2xs'
                            : 'bg-gray-100'
                        }`}
                      >
                        <Icon size={16} className={item.color} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold leading-snug">{item.label}</div>
                        <div
                          className={`text-[10px] font-normal leading-tight ${
                            isActive ? 'opacity-80' : 'text-gray-500'
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {Boolean(item.badge && item.badge > 0) && (
                        <span className="flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[9px] font-bold shadow-xs">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight
                        size={14}
                        className={isActive ? 'opacity-80' : 'text-gray-300'}
                      />
                    </div>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-gray-200 mt-3 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-3 py-1 block">
                  Quick Actions
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-indigo-50/70 hover:text-indigo-900 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Search size={14} />
                  </div>
                  <span>Search Grammar Rules & Examples</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-gray-700 hover:bg-purple-50/70 hover:text-purple-900 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white flex items-center justify-center shadow-xs">
                    <Bot size={14} />
                  </div>
                  <span>Ask AI Grammar Coach Assistant</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 bg-gray-50 border-t border-gray-200 text-center text-xs space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                Connect with Ms. Maria
              </div>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/elevatewithmsmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-blue-700 hover:text-blue-800 underline text-[11px]"
                >
                  <span>FB: @elevatewithmsmaria</span>
                  <ExternalLink size={10} />
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/elevate.with.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700 underline text-[11px]"
                >
                  <span>IG: @elevate.with.maria</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Dock (Phone Screen Viewport < 768px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-200 px-2 py-1.5 shadow-lg safe-area-bottom">
        <div className="grid grid-cols-5 items-center gap-1 max-w-md mx-auto">
          {/* 1. Home */}
          <button
            id="mobile-dock-home"
            type="button"
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'home'
                ? 'text-indigo-600 font-bold bg-indigo-50 shadow-2xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Home size={18} className={currentTab === 'home' ? 'stroke-[2.5] text-indigo-600' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Home</span>
          </button>

          {/* 2. Lessons */}
          <button
            id="mobile-dock-lessons"
            type="button"
            onClick={() => handleTabClick('lessons')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'lessons'
                ? 'text-amber-600 font-bold bg-amber-50 shadow-2xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <BookOpen size={18} className={currentTab === 'lessons' ? 'stroke-[2.5] text-amber-600' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Lessons</span>
          </button>

          {/* 3. Practice */}
          <button
            id="mobile-dock-practice"
            type="button"
            onClick={() => handleTabClick('practice')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all relative ${
              currentTab === 'practice'
                ? 'text-emerald-600 font-bold bg-emerald-50 shadow-2xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <CheckSquare size={18} className={currentTab === 'practice' ? 'stroke-[2.5] text-emerald-600' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Practice</span>
          </button>

          {/* 4. Chat with Ms. Maria */}
          <button
            id="mobile-dock-chat"
            type="button"
            onClick={() => handleTabClick('chat')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all relative ${
              currentTab === 'chat'
                ? 'text-teal-600 font-bold bg-teal-50 shadow-2xs'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <div className="relative">
              <MessageCircle size={18} className={currentTab === 'chat' ? 'stroke-[2.5] text-teal-600' : 'stroke-[1.75]'} />
              {unreadChatCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 text-white text-[8px] font-bold">
                  {unreadChatCount}
                </span>
              )}
            </div>
            <span className="text-[10px] font-sans mt-0.5">Chat</span>
          </button>

          {/* 5. Menu Drawer */}
          <button
            id="mobile-dock-menu"
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="flex flex-col items-center justify-center py-1 rounded-xl text-gray-500 hover:text-gray-900 transition-all"
          >
            <Menu size={18} className="stroke-[1.75]" />
            <span className="text-[10px] font-sans mt-0.5">More</span>
          </button>
        </div>
      </div>
    </>
  );
};
