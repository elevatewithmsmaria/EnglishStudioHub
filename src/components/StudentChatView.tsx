import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Sparkles,
  User,
  ShieldCheck,
  ExternalLink,
  Volume2,
  Check,
  CheckCheck,
  MessageSquare,
  BookOpen,
  HelpCircle,
  Megaphone,
  Trash2
} from 'lucide-react';
import { ChatMessage, StudentProfile, UserProgress } from '../types';
import {
  getMessagesForStudent,
  sendStudentMessage,
  markThreadAsReadByStudent,
  CHAT_UPDATED_EVENT
} from '../utils/chatStorage';
import { TEACHER_AUTHORIZED_EMAIL } from '../utils/storage';
import { AudioButton } from './common/AudioButton';

interface StudentChatViewProps {
  currentStudent: StudentProfile | null;
  progress: UserProgress;
  onOpenStudentModal: () => void;
  onNavigateToTopic?: (topicId: string) => void;
}

const QUICK_QUESTIONS = [
  'Why is "I am agree with you" grammatically incorrect?',
  'Can you clarify the difference between "at", "in", and "on"?',
  'When should I use Simple Present vs. Present Continuous?',
  'Why is "informations" or "advices" wrong in English?',
  'Could you recommend which module I should focus on next?'
];

export const StudentChatView: React.FC<StudentChatViewProps> = ({
  currentStudent,
  progress,
  onOpenStudentModal,
  onNavigateToTopic
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeStudentId = currentStudent?.id || 'guest_student';
  const activeStudentName = currentStudent?.name || 'Guest Student';

  // Load messages & sync on chat updates
  const loadMessages = () => {
    const msgs = getMessagesForStudent(activeStudentId, activeStudentName);
    setMessages(msgs);
    markThreadAsReadByStudent(activeStudentId);
  };

  useEffect(() => {
    loadMessages();

    const handleUpdate = () => {
      loadMessages();
    };

    window.addEventListener(CHAT_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(CHAT_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [activeStudentId, activeStudentName]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = inputMessage.trim();
    if (!clean) return;

    if (!currentStudent) {
      onOpenStudentModal();
      return;
    }

    setIsSending(true);
    sendStudentMessage(currentStudent, clean);
    setInputMessage('');
    setIsSending(false);
  };

  const handleQuickQuestionClick = (q: string) => {
    if (!currentStudent) {
      onOpenStudentModal();
      return;
    }
    sendStudentMessage(currentStudent, q);
  };

  // Format timestamp helper
  const formatTime = (ts: string) => {
    try {
      const d = new Date(ts);
      return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } catch {
      return '';
    }
  };

  const formatDate = (ts: string) => {
    try {
      const d = new Date(ts);
      return d.toLocaleDateString([], { month: 'short', day: 'numeric' });
    } catch {
      return '';
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 space-y-6">
      {/* Header Banner */}
      <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white p-6 sm:p-8 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A1A1A] text-white font-serif italic font-bold text-2xl shadow-md">
              M
            </div>
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#4A5D4E] ring-2 ring-white">
              <ShieldCheck size={10} className="text-white" />
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-xl sm:text-2xl font-serif italic font-bold text-[#1A1A1A]">
                Ms. Maria's Grammar Desk & Classroom Chat
              </h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#4A5D4E]">
                <ShieldCheck size={11} /> Verified Instructor
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans">
              Direct communication channel with your instructor,{' '}
              <a
                href="https://www.facebook.com/elevatewithmsmaria"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif italic font-bold text-[#1A1A1A] underline decoration-[#1A1A1A]/40 hover:decoration-[#1A1A1A]"
              >
                Ms. Maria
              </a>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {!currentStudent ? (
            <button
              id="btn-chat-login-prompt"
              onClick={onOpenStudentModal}
              className="rounded-xl bg-[#1A1A1A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333] transition-colors"
            >
              Sign In to Save Messages
            </button>
          ) : (
            <div className="rounded-xl bg-[#F7F5F0] border border-[#1A1A1A]/10 px-3.5 py-2 text-right">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block">Chatting As</span>
              <span className="text-xs font-bold text-[#1A1A1A]">{currentStudent.name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Chat Box Layout */}
      <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white overflow-hidden shadow-xs grid grid-cols-1 lg:grid-cols-3 min-h-[580px]">
        {/* Left Sidebar: Quick Starters & Student Info */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 bg-[#FDFCF9] p-5 space-y-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 block mb-1">
              Instructor Profile
            </span>
            <div className="rounded-2xl border border-[#1A1A1A]/10 bg-white p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-serif italic font-bold text-sm text-[#1A1A1A]">Ms. Maria</span>
                <span className="text-[10px] uppercase font-bold text-[#4A5D4E] bg-[#4A5D4E]/10 px-2 py-0.5 rounded-full">
                  Online
                </span>
              </div>
              <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed">
                Grammar Specialist & Educator. Ready to review your questions, sentence structures, and workout doubts.
              </p>
              <div className="pt-2 border-t border-[#1A1A1A]/10 space-y-1.5">
                <a
                  href="https://www.facebook.com/elevatewithmsmaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-medium text-[#1A1A1A] hover:text-[#4A5D4E] transition-colors"
                >
                  <span className="font-mono text-[11px]">fb/elevatewithmsmaria</span>
                  <ExternalLink size={11} />
                </a>
                <a
                  href="https://www.instagram.com/elevate.with.maria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between text-xs font-medium text-[#1A1A1A] hover:text-[#C25E3E] transition-colors"
                >
                  <span className="font-mono text-[11px]">ig/@elevate.with.maria</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Sparkles size={13} className="text-[#C25E3E]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">
                Ask Ms. Maria (Quick Starters)
              </span>
            </div>
            <div className="space-y-1.5">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickQuestionClick(q)}
                  className="w-full text-left rounded-xl border border-[#1A1A1A]/10 bg-white p-2.5 text-xs text-[#1A1A1A]/80 hover:border-[#1A1A1A]/30 hover:bg-[#F7F5F0] transition-colors leading-snug"
                >
                  💬 {q}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Main Chat Thread */}
        <div className="lg:col-span-2 flex flex-col h-[580px]">
          {/* Top Thread Header */}
          <div className="border-b border-[#1A1A1A]/10 bg-white px-6 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#4A5D4E] animate-pulse" />
              <div>
                <h3 className="font-serif italic font-bold text-sm text-[#1A1A1A]">
                  Conversation with Ms. Maria
                </h3>
                <span className="text-[10px] text-[#1A1A1A]/50 font-sans">
                  Direct Messages & Feedback Channel
                </span>
              </div>
            </div>

            <span className="text-xs text-[#1A1A1A]/50 font-sans">
              {messages.length} {messages.length === 1 ? 'message' : 'messages'}
            </span>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#FAF9F5]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <MessageSquare size={36} className="text-[#1A1A1A]/30" />
                <p className="font-serif italic text-[#1A1A1A] text-lg font-bold">
                  Start Your Conversation with Ms. Maria
                </p>
                <p className="text-xs text-[#1A1A1A]/60 max-w-sm font-sans">
                  Ask a question about today's lesson, seek clarification on a difficult grammar rule, or share your practice thoughts.
                </p>
              </div>
            ) : (
              messages.map((msg, idx) => {
                const isFromTeacher = msg.senderRole === 'teacher';
                const isBroadcast = msg.threadId === 'broadcast';

                return (
                  <div
                    key={msg.id || idx}
                    className={`flex flex-col ${
                      isBroadcast ? 'items-center my-2' : isFromTeacher ? 'items-start' : 'items-end'
                    }`}
                  >
                    {/* Broadcast Pill Design */}
                    {isBroadcast ? (
                      <div className="w-full max-w-lg rounded-2xl border border-[#4A5D4E]/30 bg-[#4A5D4E]/10 p-4 space-y-2 text-center">
                        <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#4A5D4E] bg-white px-2.5 py-0.5 rounded-full border border-[#4A5D4E]/20">
                          <Megaphone size={11} /> {msg.badge || 'Class Announcement'}
                        </div>
                        <p className="text-xs sm:text-sm font-serif italic text-[#1A1A1A] leading-relaxed">
                          {msg.text}
                        </p>
                        <div className="flex items-center justify-center gap-3 text-[10px] text-[#1A1A1A]/50">
                          <span>{formatDate(msg.timestamp)} {formatTime(msg.timestamp)}</span>
                          <AudioButton text={msg.text} size="sm" label="Listen" />
                        </div>
                      </div>
                    ) : (
                      /* Standard 1-on-1 Message Bubble */
                      <div className="max-w-[85%] sm:max-w-[75%] space-y-1">
                        <div className="flex items-center gap-1.5 px-1">
                          <span className="text-[10px] font-bold text-[#1A1A1A]/60">
                            {isFromTeacher ? 'Ms. Maria' : 'You'}
                          </span>
                          {msg.badge && (
                            <span className="text-[9px] font-bold uppercase tracking-wider bg-[#4A5D4E]/15 text-[#4A5D4E] px-1.5 py-0.2 rounded">
                              {msg.badge}
                            </span>
                          )}
                          <span className="text-[9px] text-[#1A1A1A]/40">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>

                        <div
                          className={`rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                            isFromTeacher
                              ? 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-tl-xs'
                              : 'bg-[#1A1A1A] text-white rounded-tr-xs'
                          }`}
                        >
                          <p className="whitespace-pre-wrap font-sans">{msg.text}</p>

                          {/* Quick Audio pronunciation button for English practice */}
                          {isFromTeacher && (
                            <div className="mt-2.5 pt-2 border-t border-[#1A1A1A]/10 flex items-center justify-between">
                              <span className="text-[10px] text-[#1A1A1A]/50 font-serif italic">
                                English Pronunciation
                              </span>
                              <AudioButton text={msg.text} size="sm" label="Play Audio" />
                            </div>
                          )}
                        </div>

                        <div className={`flex items-center gap-1 px-1 text-[9px] text-[#1A1A1A]/40 ${!isFromTeacher ? 'justify-end' : ''}`}>
                          {!isFromTeacher && (
                            <span className="flex items-center gap-0.5">
                              {msg.readByTeacher ? (
                                <>
                                  <CheckCheck size={12} className="text-[#4A5D4E]" />
                                  <span>Read by Ms. Maria</span>
                                </>
                              ) : (
                                <>
                                  <Check size={12} />
                                  <span>Delivered</span>
                                </>
                              )}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom Message Input Bar */}
          <div className="border-t border-[#1A1A1A]/10 bg-white p-4">
            {!currentStudent ? (
              <div className="flex items-center justify-between gap-3 bg-[#F7F5F0] border border-[#1A1A1A]/10 rounded-2xl p-3">
                <span className="text-xs text-[#1A1A1A]/70 font-sans">
                  Sign in with your name to send and receive private messages with Ms. Maria.
                </span>
                <button
                  type="button"
                  id="btn-sign-in-chat"
                  onClick={onOpenStudentModal}
                  className="rounded-lg bg-[#1A1A1A] px-3.5 py-1.5 text-xs font-bold uppercase text-white hover:bg-[#333] transition-colors shrink-0"
                >
                  Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <input
                  id="input-student-chat-text"
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your grammar question or message for Ms. Maria..."
                  className="flex-1 rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-4 py-3 text-xs sm:text-sm font-sans text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                />
                <button
                  id="btn-student-send-chat"
                  type="submit"
                  disabled={!inputMessage.trim() || isSending}
                  className="rounded-xl bg-[#1A1A1A] px-5 py-3 text-white hover:bg-[#333] disabled:opacity-40 transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Send size={15} />
                  <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
