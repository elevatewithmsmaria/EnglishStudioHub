import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { StudentProfile, UserProgress, ChatMessage } from '../types';
import {
  getMessagesForStudent,
  sendStudentMessage,
  markThreadAsReadByStudent,
  getUnreadCountForStudent,
  CHAT_UPDATED_EVENT
} from '../utils/chatStorage';
import { AudioButton } from './common/AudioButton';

interface FloatingChatWidgetProps {
  currentStudent: StudentProfile | null;
  progress: UserProgress;
  onOpenStudentModal: () => void;
  onNavigateToFullChat?: () => void;
}

export const FloatingChatWidget: React.FC<FloatingChatWidgetProps> = ({
  currentStudent,
  progress,
  onOpenStudentModal,
  onNavigateToFullChat
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const studentId = currentStudent?.id || 'guest_student';
  const studentName = currentStudent?.name || 'Student';

  const updateMessagesAndUnread = () => {
    const msgs = getMessagesForStudent(studentId, studentName);
    setMessages(msgs);
    if (isOpen) {
      markThreadAsReadByStudent(studentId);
      setUnreadCount(0);
    } else {
      setUnreadCount(getUnreadCountForStudent(studentId));
    }
  };

  useEffect(() => {
    updateMessagesAndUnread();

    const handleUpdate = () => {
      updateMessagesAndUnread();
    };

    window.addEventListener(CHAT_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener(CHAT_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [studentId, isOpen]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    if (!currentStudent) {
      onOpenStudentModal();
      return;
    }

    sendStudentMessage(currentStudent, inputText.trim());
    setInputText('');
  };

  return (
    <div className="hidden md:block fixed bottom-20 right-4 sm:right-6 z-40">
      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] h-[480px] rounded-3xl border border-[#1A1A1A]/15 bg-white shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 font-serif italic font-bold text-white">
                M
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif italic font-bold text-sm">Ms. Maria</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4A5D4E]" />
                </div>
                <span className="text-[10px] text-white/60 block">Grammar Coach • Instructor</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {onNavigateToFullChat && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onNavigateToFullChat();
                  }}
                  title="Open Full Chat View"
                  className="rounded-lg p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Maximize2 size={15} />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-2.5 bg-[#FAF9F5]">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-4 text-xs text-[#1A1A1A]/50">
                <Sparkles size={24} className="text-[#C25E3E] mb-2" />
                <p className="font-serif italic text-sm text-[#1A1A1A]">Ask Ms. Maria anything!</p>
                <p className="mt-1 text-[11px]">Quick questions about grammar rules, sentence corrections, or vocabulary.</p>
              </div>
            ) : (
              messages.map((msg, idx) => {
                const isTeacher = msg.senderRole === 'teacher';
                return (
                  <div
                    key={msg.id || idx}
                    className={`flex flex-col ${isTeacher ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3 text-xs leading-relaxed ${
                        isTeacher
                          ? 'bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] rounded-tl-xs shadow-2xs'
                          : 'bg-[#1A1A1A] text-white rounded-tr-xs'
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{msg.text}</p>
                      {isTeacher && (
                        <div className="mt-1.5 pt-1.5 border-t border-[#1A1A1A]/10 flex items-center justify-end">
                          <AudioButton text={msg.text} size="sm" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <div className="p-3 border-t border-[#1A1A1A]/10 bg-white">
            {!currentStudent ? (
              <button
                type="button"
                onClick={onOpenStudentModal}
                className="w-full rounded-xl bg-[#1A1A1A] py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#333]"
              >
                Sign In to Chat
              </button>
            ) : (
              <form onSubmit={handleSendMessage} className="flex items-center gap-1.5">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask a grammar question..."
                  className="flex-1 rounded-xl border border-[#1A1A1A]/20 bg-[#FDFCF9] px-3 py-2 text-xs text-[#1A1A1A] focus:border-[#1A1A1A] focus:outline-hidden"
                />
                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="rounded-xl bg-[#1A1A1A] p-2 text-white hover:bg-[#333] disabled:opacity-40"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        id="btn-floating-chat-trigger"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex items-center gap-2 rounded-full bg-[#1A1A1A] px-4 py-3 text-white shadow-xl hover:bg-[#333] hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle size={18} className="group-hover:rotate-6 transition-transform" />
        <span className="text-xs font-bold uppercase tracking-wider font-sans">
          {isOpen ? 'Close Chat' : 'Chat with Ms. Maria'}
        </span>

        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#C25E3E] text-white text-[10px] font-bold ring-2 ring-white animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};
