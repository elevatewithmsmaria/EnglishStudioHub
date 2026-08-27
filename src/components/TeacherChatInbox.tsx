import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  User,
  Users,
  Megaphone,
  Sparkles,
  ShieldCheck,
  CheckCheck,
  RefreshCw,
  Search,
  BookOpen,
  Award,
  Flame,
  MessageSquare,
  Clock,
  Trash2
} from 'lucide-react';
import { ChatMessage, ChatThread, StudentProfile } from '../types';
import {
  getAllChatThreads,
  getMessagesForStudent,
  sendTeacherMessage,
  sendBroadcastAnnouncement,
  markThreadAsReadByTeacher,
  deleteChatMessage,
  CHAT_UPDATED_EVENT
} from '../utils/chatStorage';
import { getRegisteredStudents } from '../utils/storage';
import { AudioButton } from './common/AudioButton';

interface TeacherChatInboxProps {
  onSelectTopic?: (topicId: string) => void;
}

const TEACHER_QUICK_TEMPLATES = [
  '🌟 Great work on your daily grammar workout! Keep up the momentum.',
  '💡 Key Reminder: Stative verbs like "agree", "know", and "understand" do not take "am/is/are". Say: "I agree".',
  '📚 I recommend reviewing Module 4 for prepositions of place and time (at / on / in).',
  '✍️ Notice that "advice" and "information" are uncountable nouns in English and never take an -s.',
  '🎯 Keep practicing 10 minutes every day — your sentence structure is becoming much more natural!'
];

export const TeacherChatInbox: React.FC<TeacherChatInboxProps> = ({ onSelectTopic }) => {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [replyText, setReplyText] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [broadcastText, setBroadcastText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load threads
  const loadThreads = () => {
    const ths = getAllChatThreads();
    setThreads(ths);
    if (!selectedStudentId && ths.length > 0) {
      setSelectedStudentId(ths[0].studentId);
    }
  };

  // Load messages for currently selected student
  const loadActiveMessages = (stId: string) => {
    const student = getRegisteredStudents().find((s) => s.id === stId);
    const msgs = getMessagesForStudent(stId, student?.name || 'Student');
    setMessages(msgs);
    markThreadAsReadByTeacher(stId);
  };

  useEffect(() => {
    loadThreads();

    const handleUpdate = () => {
      loadThreads();
      if (selectedStudentId) {
        loadActiveMessages(selectedStudentId);
      }
    };

    window.addEventListener(CHAT_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(CHAT_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [selectedStudentId]);

  useEffect(() => {
    if (selectedStudentId) {
      loadActiveMessages(selectedStudentId);
    }
  }, [selectedStudentId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const selectedStudent = getRegisteredStudents().find((s) => s.id === selectedStudentId);

  const handleSendReply = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!selectedStudentId || !replyText.trim()) return;

    setIsSending(true);
    sendTeacherMessage(selectedStudentId, replyText.trim());
    setReplyText('');
    setIsSending(false);
    loadActiveMessages(selectedStudentId);
    loadThreads();
  };

  const handleSendBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastText.trim()) return;

    sendBroadcastAnnouncement(broadcastText.trim());
    setBroadcastText('');
    setShowBroadcastModal(false);
    loadThreads();
    if (selectedStudentId) {
      loadActiveMessages(selectedStudentId);
    }
  };

  const handleApplyTemplate = (tpl: string) => {
    setReplyText(tpl);
  };

  const filteredThreads = threads.filter((t) =>
    t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.studentEmail.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className="space-y-6">
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1A1A1A]/10 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-serif italic text-[#1A1A1A] font-bold">
            Student Inquiries & Direct Messaging Hub
          </h2>
          <p className="text-xs text-[#1A1A1A]/60 font-sans mt-0.5">
            Answer questions, provide tailored feedback, and send classroom announcements as Ms. Maria.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            id="btn-teacher-broadcast-modal-trigger"
            type="button"
            onClick={() => setShowBroadcastModal(true)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#4A5D4E] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#3d4d40] transition-colors shadow-2xs"
          >
            <Megaphone size={14} />
            <span>Broadcast to All Students</span>
          </button>

          <button
            type="button"
            onClick={() => {
              loadThreads();
              if (selectedStudentId) loadActiveMessages(selectedStudentId);
            }}
            title="Refresh threads"
            className="rounded-xl border border-[#1A1A1A]/15 bg-white p-2 text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
          >
            <RefreshCw size={14} />
          </button>
        </div>
      </div>

      {/* Main Inbox Container */}
      <div className="rounded-3xl border border-[#1A1A1A]/10 bg-white overflow-hidden shadow-xs grid grid-cols-1 md:grid-cols-12 min-h-[620px]">
        {/* Left Column: Student Threads List (4 cols) */}
        <div className="md:col-span-4 border-r border-[#1A1A1A]/10 bg-[#FDFCF9] flex flex-col h-[620px]">
          {/* Search Header */}
          <div className="p-3.5 border-b border-[#1A1A1A]/10 bg-white">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
              <input
                type="text"
                placeholder="Search registered students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[#1A1A1A]/15 bg-[#FDFCF9] pl-9 pr-3 py-2 text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />
            </div>
          </div>

          {/* Threads List */}
          <div className="flex-1 overflow-y-auto divide-y divide-[#1A1A1A]/5">
            {filteredThreads.length === 0 ? (
              <div className="p-6 text-center text-xs text-[#1A1A1A]/50 space-y-2">
                <Users size={24} className="mx-auto text-[#1A1A1A]/30" />
                <p>No student conversations registered yet.</p>
                <p className="text-[11px] text-[#1A1A1A]/40">
                  When students practice or sign in with their email, their threads will appear here.
                </p>
              </div>
            ) : (
              filteredThreads.map((thread) => {
                const isSelected = thread.studentId === selectedStudentId;
                return (
                  <button
                    key={thread.studentId}
                    id={`thread-item-${thread.studentId}`}
                    onClick={() => setSelectedStudentId(thread.studentId)}
                    className={`w-full text-left p-3.5 flex items-start gap-3 transition-colors ${
                      isSelected
                        ? 'bg-white border-l-4 border-l-[#1A1A1A] shadow-2xs'
                        : 'hover:bg-white/80'
                    }`}
                  >
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-serif font-bold text-sm shrink-0"
                      style={{ backgroundColor: thread.avatarColor || '#1A1A1A' }}
                    >
                      {thread.studentName.charAt(0).toUpperCase()}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className="text-xs font-bold text-[#1A1A1A] truncate">
                          {thread.studentName}
                        </span>
                        <span className="text-[10px] text-[#1A1A1A]/40 shrink-0">
                          {formatDate(thread.lastTimestamp)}
                        </span>
                      </div>

                      <p className="text-[11px] text-[#1A1A1A]/60 font-sans truncate">
                        {thread.lastMessage}
                      </p>

                      {thread.unreadCountTeacher > 0 && (
                        <span className="inline-block mt-1 bg-[#C25E3E] text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full">
                          {thread.unreadCountTeacher} new
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Active Thread & Composer (8 cols) */}
        <div className="md:col-span-8 flex flex-col h-[620px]">
          {selectedStudent ? (
            <>
              {/* Selected Student Banner */}
              <div className="border-b border-[#1A1A1A]/10 bg-white p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white font-serif font-bold text-sm"
                    style={{ backgroundColor: selectedStudent.avatarColor || '#1A1A1A' }}
                  >
                    {selectedStudent.name.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h3 className="font-serif italic font-bold text-sm text-[#1A1A1A]">
                      {selectedStudent.name}
                    </h3>
                    <span className="text-xs text-[#1A1A1A]/60 font-mono">
                      {selectedStudent.email}
                    </span>
                  </div>
                </div>

                {/* Quick Student Stats */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F7F5F0] border border-[#1A1A1A]/10 text-[#1A1A1A]/70 px-2.5 py-1 rounded-lg">
                    Level: {selectedStudent.progress?.level || 'Elementary'}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#4A5D4E]/10 border border-[#4A5D4E]/20 text-[#4A5D4E] px-2.5 py-1 rounded-lg">
                    {selectedStudent.progress?.completedTopics?.length || 0} Lessons Mastered
                  </span>
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 bg-[#FAF9F5]">
                {messages.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6 text-xs text-[#1A1A1A]/50">
                    <MessageSquare size={32} className="text-[#1A1A1A]/20 mb-2" />
                    <p>No messages exchanged with {selectedStudent.name} yet.</p>
                  </div>
                ) : (
                  messages.map((msg, idx) => {
                    const isTeacher = msg.senderRole === 'teacher';
                    const isBroadcast = msg.threadId === 'broadcast';

                    return (
                      <div
                        key={msg.id || idx}
                        className={`flex flex-col ${
                          isBroadcast ? 'items-center my-2' : isTeacher ? 'items-end' : 'items-start'
                        }`}
                      >
                        {isBroadcast ? (
                          <div className="w-full max-w-md rounded-xl border border-[#4A5D4E]/30 bg-[#4A5D4E]/10 p-3 text-center space-y-1">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-[#4A5D4E] block">
                              📢 {msg.badge || 'Class Announcement'}
                            </span>
                            <p className="text-xs font-serif italic text-[#1A1A1A]">{msg.text}</p>
                          </div>
                        ) : (
                          <div className="max-w-[85%] sm:max-w-[75%] space-y-1">
                            <div className="flex items-center gap-1.5 px-1">
                              <span className="text-[10px] font-bold text-[#1A1A1A]/60">
                                {isTeacher ? 'Ms. Maria (You)' : selectedStudent.name}
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
                              className={`rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed shadow-2xs ${
                                isTeacher
                                  ? 'bg-[#1A1A1A] text-white rounded-tr-xs'
                                  : 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-tl-xs'
                              }`}
                            >
                              <p className="whitespace-pre-wrap font-sans">{msg.text}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Template Chips for Teacher */}
              <div className="px-4 py-2 border-t border-[#1A1A1A]/10 bg-[#FDFCF9] overflow-x-auto">
                <div className="flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 shrink-0">
                    Quick Tips:
                  </span>
                  {TEACHER_QUICK_TEMPLATES.map((tpl, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyTemplate(tpl)}
                      className="rounded-lg border border-[#1A1A1A]/10 bg-white px-2.5 py-1 text-[11px] text-[#1A1A1A]/80 hover:border-[#1A1A1A]/30 hover:bg-[#F7F5F0] transition-colors shrink-0"
                    >
                      {tpl.slice(0, 32)}...
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Reply Composer */}
              <div className="border-t border-[#1A1A1A]/10 bg-white p-3.5">
                <form onSubmit={handleSendReply} className="flex items-center gap-2">
                  <input
                    id="input-teacher-reply"
                    type="text"
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`Reply to ${selectedStudent.name} as Ms. Maria...`}
                    className="flex-1 rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-4 py-2.5 text-xs sm:text-sm font-sans text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                  />
                  <button
                    id="btn-teacher-send-reply"
                    type="submit"
                    disabled={!replyText.trim() || isSending}
                    className="rounded-xl bg-[#1A1A1A] px-5 py-2.5 text-white hover:bg-[#333] disabled:opacity-40 transition-colors flex items-center gap-1.5 shrink-0"
                  >
                    <Send size={14} />
                    <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline">Reply</span>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-xs text-[#1A1A1A]/50 space-y-2">
              <Users size={36} className="text-[#1A1A1A]/20 mb-1" />
              <p className="font-serif italic font-bold text-sm text-[#1A1A1A]">
                Select a student from the roster to start chatting
              </p>
              <p className="max-w-xs">
                You can review their individual queries, send feedback, or post an announcement.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Broadcast Announcement Modal */}
      {showBroadcastModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 space-y-5 border border-[#1A1A1A]/10 shadow-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4A5D4E] text-white">
                <Megaphone size={20} />
              </div>
              <div>
                <h3 className="font-serif italic font-bold text-lg text-[#1A1A1A]">
                  Send Classroom Announcement
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 font-sans">
                  This message will be broadcast to all registered students in the classroom chat.
                </p>
              </div>
            </div>

            <form onSubmit={handleSendBroadcast} className="space-y-4">
              <textarea
                id="input-broadcast-text"
                rows={4}
                value={broadcastText}
                onChange={(e) => setBroadcastText(e.target.value)}
                placeholder="e.g., Dear students, don't forget to complete today's 20 drills in the Practice Hub! We are focusing on subject-verb agreement this week."
                required
                className="w-full rounded-2xl border border-[#1A1A1A]/20 bg-[#FDFCF9] p-4 text-xs sm:text-sm font-sans text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowBroadcastModal(false)}
                  className="rounded-xl border border-[#1A1A1A]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#1A1A1A] hover:bg-[#F7F5F0]"
                >
                  Cancel
                </button>
                <button
                  id="btn-broadcast-submit"
                  type="submit"
                  disabled={!broadcastText.trim()}
                  className="rounded-xl bg-[#4A5D4E] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#3d4d40] disabled:opacity-40 flex items-center gap-1.5"
                >
                  <Megaphone size={14} />
                  <span>Send Broadcast</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
