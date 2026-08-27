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
  }[] = [
    { id: 'home', label: 'Home', shortLabel: 'Home', desc: 'Overview, streak & current progress', icon: Home },
    { id: 'lessons', label: 'Lessons', shortLabel: 'Lessons', desc: '12 structured modules & topics', icon: BookOpen },
    { id: 'practice', label: 'Practice (20+)', shortLabel: 'Practice', desc: 'Daily workouts & difficulty drills', icon: CheckSquare },
    { id: 'skills', label: '4-Skills Tests', shortLabel: 'Skills (L/R/W/S)', desc: 'Listening, Reading, Writing & Speaking tests', icon: Headphones },
    { id: 'reallife', label: 'Real Life', shortLabel: 'Real Life', desc: 'Workplace & everyday scenarios', icon: MessageSquare },
    { id: 'reference', label: 'Grammar Guide', shortLabel: 'Guide', desc: 'Searchable master rulebook', icon: Bookmark },
    { id: 'assessment', label: 'Grand 100 & Diagnostics', shortLabel: 'Assess', desc: 'Grand 100-test & module diagnostics', icon: Award },
    { id: 'chat', label: 'Teacher & Student Chat', shortLabel: 'Chat', desc: 'Two-way channel with Ms. Maria', icon: MessageCircle, badge: unreadChatCount, highlight: true },
    { id: 'instructor', label: 'Teacher Portal', shortLabel: 'Teacher', desc: 'Ms. Maria instructor desk & inbox', icon: Users },
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
        <div className="bg-[#1A1A1A] text-white px-3 sm:px-4 py-1.5 text-xs">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/60">Curriculum:</span>
              <span className="font-serif italic font-medium hidden xs:inline">Prepared and created by</span>
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline text-white hover:text-white/80 inline-flex items-center gap-1"
              >
                <span>Ms. Maria</span>
                <ExternalLink size={10} className="opacity-70" />
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] text-white/80">
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline hover:text-white transition-colors"
              >
                FB: @elevatewithmsmaria
              </a>
              <span className="hidden sm:inline text-white/30">•</span>
              <a
                href="https://www.instagram.com/elevate.with.maria"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline hover:text-white transition-colors"
              >
                IG: @elevate.with.maria
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
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A1A1A] rounded-xl p-0.5"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-[#1A1A1A] text-[#FDFCF9] font-serif italic font-bold text-base sm:text-lg shadow-2xs group-hover:bg-[#333] transition-colors shrink-0">
                M
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-serif italic font-black text-lg sm:text-xl tracking-tight text-[#1A1A1A]">
                    English Studio <span className="font-sans font-normal text-[#1A1A1A]/60 text-xs sm:text-sm ml-0.5 not-italic uppercase tracking-widest text-[9px] sm:text-[10px]">Hub</span>
                  </span>
                  <span className="inline-flex rounded-full bg-[#F7F5F0] border border-[#1A1A1A]/10 px-2 py-0.5 text-[9px] font-bold text-[#1A1A1A]/80 uppercase tracking-widest">
                    by Ms. Maria
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#1A1A1A]/50 hidden sm:block font-serif italic leading-none mt-0.5">
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
              className="flex items-center gap-1.5 rounded-lg border border-[#1A1A1A]/10 bg-[#F7F5F0] px-2.5 sm:px-3 py-1.5 text-xs font-medium text-[#1A1A1A]/80 hover:border-[#1A1A1A]/30 hover:bg-white hover:text-[#1A1A1A] transition-all"
            >
              <Search size={14} className="text-[#1A1A1A]/60" />
              <span className="hidden lg:inline text-xs">Search rules...</span>
              <kbd className="hidden lg:inline-block rounded bg-white px-1.5 py-0.5 text-[9px] font-mono border border-[#1A1A1A]/15 text-[#1A1A1A]/50 ml-1">
                /
              </kbd>
            </button>

            {/* AI Coach Assistant */}
            <button
              id="btn-nav-coach"
              type="button"
              onClick={onOpenAssistant}
              title="Ask Personal Grammar Coach"
              className="flex items-center gap-1.5 rounded-lg border border-[#1A1A1A] bg-[#1A1A1A] px-2.5 sm:px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-all shrink-0"
            >
              <Bot size={14} className="text-white shrink-0" />
              <span className="hidden sm:inline text-xs">Coach Q&A</span>
            </button>

            {/* Streak Counter */}
            <div
              id="nav-streak-counter"
              title={`${progress.streakCount} Day Active Learning Streak`}
              className="flex items-center gap-1 rounded-lg border border-[#1A1A1A]/10 bg-[#F7F5F0] px-2 sm:px-2.5 py-1 text-xs font-bold text-[#1A1A1A] shrink-0"
            >
              <Flame size={14} className="text-[#C25E3E] fill-[#C25E3E] shrink-0" />
              <span className="font-serif italic font-bold text-[11px] sm:text-xs">{progress.streakCount}d</span>
            </div>

            {/* Student Profile Button */}
            <button
              id="btn-student-account"
              type="button"
              onClick={onOpenStudentModal}
              title={currentStudent ? `Logged in as ${currentStudent.name}` : 'Student Sign In / Register'}
              className="flex items-center gap-1.5 sm:gap-2 rounded-lg border border-[#1A1A1A]/15 bg-white px-2 sm:px-3 py-1.5 text-xs font-bold text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors shrink-0"
            >
              {currentStudent ? (
                <div
                  className="flex h-5 w-5 items-center justify-center rounded-full text-white text-[10px] font-serif font-bold shrink-0"
                  style={{ backgroundColor: currentStudent.avatarColor || '#1A1A1A' }}
                >
                  {currentStudent.name.charAt(0).toUpperCase()}
                </div>
              ) : (
                <User size={14} className="text-[#1A1A1A]/60 shrink-0" />
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
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#1A1A1A]/15 bg-[#F7F5F0] text-[#1A1A1A] hover:bg-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Desktop & Tablet Navigation Tab Bar (Scrollable on Tablet) */}
        <nav className="border-t border-[#1A1A1A]/10 bg-[#FDFCF9] hidden md:block overflow-x-auto scrollbar-none">
          <div
            ref={navContainerRef}
            className="mx-auto flex max-w-7xl px-2 sm:px-6 items-center"
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
                  className={`relative flex items-center gap-2 border-b-2 px-3.5 lg:px-4 py-2.5 text-xs lg:text-sm font-medium transition-all whitespace-nowrap group ${
                    isActive
                      ? 'border-[#1A1A1A] text-[#1A1A1A] font-bold bg-[#F7F5F0]/70'
                      : 'border-transparent text-[#1A1A1A]/50 hover:border-[#1A1A1A]/20 hover:text-[#1A1A1A] hover:bg-[#F7F5F0]/30'
                  }`}
                >
                  <Icon
                    size={15}
                    className={`transition-transform group-hover:scale-110 ${
                      isActive ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/40'
                    }`}
                  />
                  <span>{item.label}</span>
                  {Boolean(item.badge && item.badge > 0) && (
                    <span className="flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-[#C25E3E] text-white text-[9px] font-bold animate-pulse">
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
            <div className="p-4 bg-[#1A1A1A] text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white font-serif italic font-bold text-base">
                  M
                </div>
                <div>
                  <h3 className="font-serif italic font-bold text-sm text-white">
                    English Studio Hub
                  </h3>
                  <p className="text-[10px] text-white/60">by Ms. Maria</p>
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
            <div className="p-3.5 bg-[#F7F5F0] border-b border-[#1A1A1A]/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-full text-white text-xs font-serif font-bold"
                  style={{ backgroundColor: currentStudent?.avatarColor || '#1A1A1A' }}
                >
                  {currentStudent ? currentStudent.name.charAt(0).toUpperCase() : <User size={13} />}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#1A1A1A]">
                    {currentStudent ? currentStudent.name : 'Guest Student'}
                  </div>
                  <div className="text-[10px] text-[#1A1A1A]/60 font-sans">
                    {progress.streakCount}d Streak • {progress.practicePoints} pts
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenStudentModal();
                }}
                className="rounded-lg border border-[#1A1A1A]/15 bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0]"
              >
                {currentStudent ? 'Profile' : 'Sign In'}
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 px-3 py-1 block">
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
                        ? 'bg-[#1A1A1A] text-white font-bold shadow-xs'
                        : 'text-[#1A1A1A]/80 hover:bg-[#F7F5F0]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                          isActive ? 'bg-white/20 text-white' : 'bg-[#F7F5F0] text-[#1A1A1A]/70'
                        }`}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold leading-snug">{item.label}</div>
                        <div
                          className={`text-[10px] font-normal leading-tight ${
                            isActive ? 'text-white/70' : 'text-[#1A1A1A]/50'
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {Boolean(item.badge && item.badge > 0) && (
                        <span className="flex h-4 min-w-[16px] px-1 items-center justify-center rounded-full bg-[#C25E3E] text-white text-[9px] font-bold">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight
                        size={14}
                        className={isActive ? 'text-white/70' : 'text-[#1A1A1A]/30'}
                      />
                    </div>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-[#1A1A1A]/10 mt-3 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/40 px-3 py-1 block">
                  Quick Actions
                </span>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#1A1A1A]/80 hover:bg-[#F7F5F0] transition-colors"
                >
                  <Search size={16} className="text-[#1A1A1A]/60" />
                  <span>Search Grammar Rules & Examples</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAssistant();
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-medium text-[#1A1A1A]/80 hover:bg-[#F7F5F0] transition-colors"
                >
                  <Bot size={16} className="text-[#1A1A1A]/60" />
                  <span>Ask AI Grammar Coach Assistant</span>
                </button>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 bg-[#F7F5F0] border-t border-[#1A1A1A]/10 text-center text-xs space-y-1.5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                Connect with Ms. Maria
              </div>
              <div className="flex items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/elevatewithmsmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#1A1A1A] hover:text-[#4A5D4E] underline text-[11px]"
                >
                  <span>FB: @elevatewithmsmaria</span>
                  <ExternalLink size={10} />
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/elevate.with.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#1A1A1A] hover:text-[#C25E3E] underline text-[11px]"
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
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FDFCF9]/95 backdrop-blur-lg border-t border-[#1A1A1A]/10 px-2 py-1.5 shadow-lg safe-area-bottom">
        <div className="grid grid-cols-5 items-center gap-1 max-w-md mx-auto">
          {/* 1. Home */}
          <button
            id="mobile-dock-home"
            type="button"
            onClick={() => handleTabClick('home')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'home'
                ? 'text-[#1A1A1A] font-bold bg-[#1A1A1A]/5'
                : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            <Home size={18} className={currentTab === 'home' ? 'stroke-[2.5]' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Home</span>
          </button>

          {/* 2. Lessons */}
          <button
            id="mobile-dock-lessons"
            type="button"
            onClick={() => handleTabClick('lessons')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all ${
              currentTab === 'lessons'
                ? 'text-[#1A1A1A] font-bold bg-[#1A1A1A]/5'
                : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            <BookOpen size={18} className={currentTab === 'lessons' ? 'stroke-[2.5]' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Lessons</span>
          </button>

          {/* 3. Practice */}
          <button
            id="mobile-dock-practice"
            type="button"
            onClick={() => handleTabClick('practice')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all relative ${
              currentTab === 'practice'
                ? 'text-[#1A1A1A] font-bold bg-[#1A1A1A]/5'
                : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            <CheckSquare size={18} className={currentTab === 'practice' ? 'stroke-[2.5]' : 'stroke-[1.75]'} />
            <span className="text-[10px] font-sans mt-0.5">Practice</span>
          </button>

          {/* 4. Chat with Ms. Maria */}
          <button
            id="mobile-dock-chat"
            type="button"
            onClick={() => handleTabClick('chat')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl transition-all relative ${
              currentTab === 'chat'
                ? 'text-[#1A1A1A] font-bold bg-[#1A1A1A]/5'
                : 'text-[#1A1A1A]/50 hover:text-[#1A1A1A]'
            }`}
          >
            <div className="relative">
              <MessageCircle size={18} className={currentTab === 'chat' ? 'stroke-[2.5]' : 'stroke-[1.75]'} />
              {unreadChatCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#C25E3E] text-white text-[8px] font-bold">
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
            className="flex flex-col items-center justify-center py-1 rounded-xl text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-all"
          >
            <Menu size={18} className="stroke-[1.75]" />
            <span className="text-[10px] font-sans mt-0.5">More</span>
          </button>
        </div>
      </div>
    </>
  );
};
