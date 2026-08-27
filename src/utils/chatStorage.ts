import { ChatMessage, ChatThread, StudentProfile } from '../types';
import { getRegisteredStudents, TEACHER_AUTHORIZED_EMAIL } from './storage';

const CHAT_STORAGE_KEY = 'begc_chat_messages_v2';
const CHAT_UPDATED_EVENT = 'begc_chat_updated_event';

// Initial welcoming messages from Ms. Maria
const createDefaultWelcomeMessages = (studentId: string, studentName: string): ChatMessage[] => [
  {
    id: `msg_init_welcome_${studentId}`,
    threadId: studentId,
    senderRole: 'teacher',
    senderName: 'Ms. Maria (Instructor)',
    senderEmail: TEACHER_AUTHORIZED_EMAIL,
    recipientId: studentId,
    text: `Hello ${studentName.split(' ')[0]}! Welcome to your English Grammar Studio. I am Ms. Maria. Feel free to ask me any questions about grammar rules, sentence corrections, or today's practice exercises here!`,
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    readByStudent: true,
    readByTeacher: true,
    badge: 'Official Instructor'
  },
  {
    id: `msg_init_tip_${studentId}`,
    threadId: studentId,
    senderRole: 'teacher',
    senderName: 'Ms. Maria (Instructor)',
    senderEmail: TEACHER_AUTHORIZED_EMAIL,
    recipientId: studentId,
    text: `💡 Daily Tip: Remember to check out the "Practice (20+)" tab each morning for non-repetitive drills. If you ever get stuck on a question, ask me here and I will explain the grammar logic for you!`,
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    readByStudent: false,
    readByTeacher: true,
    badge: 'Coaching Tip'
  }
];

// Broadcast messages stored separately or under threadId: 'broadcast'
const DEFAULT_BROADCAST_MESSAGES: ChatMessage[] = [
  {
    id: 'broadcast_welcome',
    threadId: 'broadcast',
    senderRole: 'teacher',
    senderName: 'Ms. Maria (Instructor)',
    senderEmail: TEACHER_AUTHORIZED_EMAIL,
    recipientId: 'all',
    text: '📢 Welcome everyone to the Basic English Grammar Studio! Remember: consistency beats intensity. Even 10 minutes of daily sentence practice makes a massive difference in your spoken and written confidence.',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    readByStudent: true,
    readByTeacher: true,
    badge: 'Classroom Broadcast'
  }
];

// Load all messages
export const loadAllChatMessages = (): ChatMessage[] => {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!data) {
      const initialMsgs = [...DEFAULT_BROADCAST_MESSAGES];
      localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(initialMsgs));
      return initialMsgs;
    }
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Save all messages
const saveAllChatMessages = (messages: ChatMessage[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    window.dispatchEvent(new CustomEvent(CHAT_UPDATED_EVENT));
  } catch (err) {
    console.error('Failed to save chat messages', err);
  }
};

// Get messages for a student thread (includes 1-on-1 + broadcast messages)
export const getMessagesForStudent = (studentId: string, studentName: string = 'Student'): ChatMessage[] => {
  if (!studentId) return [];
  const allMessages = loadAllChatMessages();
  let studentMessages = allMessages.filter(
    (m) => m.threadId === studentId || m.recipientId === studentId || m.threadId === 'broadcast'
  );

  // If no 1-on-1 messages exist for this student yet, initialize welcome messages
  const has1on1 = studentMessages.some((m) => m.threadId === studentId);
  if (!has1on1) {
    const welcomeMsgs = createDefaultWelcomeMessages(studentId, studentName);
    const updated = [...allMessages, ...welcomeMsgs];
    saveAllChatMessages(updated);
    return [...welcomeMsgs, ...allMessages.filter((m) => m.threadId === 'broadcast')].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );
  }

  return studentMessages.sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
  );
};

// Get all threads for the Teacher Portal
export const getAllChatThreads = (): ChatThread[] => {
  const students = getRegisteredStudents();
  const allMessages = loadAllChatMessages();

  const threads: ChatThread[] = students.map((st) => {
    const threadMsgs = allMessages.filter(
      (m) => m.threadId === st.id || (m.senderRole === 'student' && m.recipientId === 'teacher' && m.threadId === st.id)
    );
    const sorted = [...threadMsgs].sort(
      (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );
    const lastMsg = sorted[0]?.text || 'No messages yet';
    const lastTime = sorted[0]?.timestamp || st.joinedDate;
    const unreadTeacher = threadMsgs.filter((m) => m.senderRole === 'student' && !m.readByTeacher).length;
    const unreadStudent = threadMsgs.filter((m) => m.senderRole === 'teacher' && !m.readByStudent).length;

    return {
      studentId: st.id,
      studentName: st.name,
      studentEmail: st.email,
      lastMessage: lastMsg,
      lastTimestamp: lastTime,
      unreadCountTeacher: unreadTeacher,
      unreadCountStudent: unreadStudent,
      avatarColor: st.avatarColor
    };
  });

  return threads.sort(
    (a, b) => new Date(b.lastTimestamp).getTime() - new Date(a.lastTimestamp).getTime()
  );
};

// Send message from student to teacher
export const sendStudentMessage = (
  student: StudentProfile,
  text: string,
  topicRef?: string
): ChatMessage => {
  const allMessages = loadAllChatMessages();
  const newMsg: ChatMessage = {
    id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    threadId: student.id,
    senderRole: 'student',
    senderName: student.name,
    senderEmail: student.email,
    recipientId: 'teacher',
    text: text.trim(),
    timestamp: new Date().toISOString(),
    readByStudent: true,
    readByTeacher: false,
    topicRef
  };

  const updated = [...allMessages, newMsg];
  saveAllChatMessages(updated);

  // Trigger optional smart coaching auto-acknowledgment if student asks a common question
  handleSmartAssistantCoachingReply(student, text.trim());

  return newMsg;
};

// Send message from teacher to a specific student
export const sendTeacherMessage = (
  studentId: string,
  text: string,
  badge?: string,
  topicRef?: string
): ChatMessage => {
  const allMessages = loadAllChatMessages();
  const newMsg: ChatMessage = {
    id: `msg_teacher_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    threadId: studentId,
    senderRole: 'teacher',
    senderName: 'Ms. Maria (Instructor)',
    senderEmail: TEACHER_AUTHORIZED_EMAIL,
    recipientId: studentId,
    text: text.trim(),
    timestamp: new Date().toISOString(),
    readByStudent: false,
    readByTeacher: true,
    badge: badge || 'Official Instructor',
    topicRef
  };

  const updated = [...allMessages, newMsg];
  saveAllChatMessages(updated);
  return newMsg;
};

// Broadcast announcement from teacher to all students
export const sendBroadcastAnnouncement = (
  text: string,
  badge: string = 'Classroom Announcement'
): ChatMessage => {
  const allMessages = loadAllChatMessages();
  const newMsg: ChatMessage = {
    id: `broadcast_${Date.now()}`,
    threadId: 'broadcast',
    senderRole: 'teacher',
    senderName: 'Ms. Maria (Instructor)',
    senderEmail: TEACHER_AUTHORIZED_EMAIL,
    recipientId: 'all',
    text: text.trim(),
    timestamp: new Date().toISOString(),
    readByStudent: false,
    readByTeacher: true,
    badge
  };

  const updated = [...allMessages, newMsg];
  saveAllChatMessages(updated);
  return newMsg;
};

// Mark thread as read by student
export const markThreadAsReadByStudent = (studentId: string): void => {
  const allMessages = loadAllChatMessages();
  let changed = false;
  const updated = allMessages.map((m) => {
    if ((m.threadId === studentId || m.threadId === 'broadcast') && !m.readByStudent) {
      changed = true;
      return { ...m, readByStudent: true };
    }
    return m;
  });
  if (changed) {
    saveAllChatMessages(updated);
  }
};

// Mark thread as read by teacher
export const markThreadAsReadByTeacher = (studentId: string): void => {
  const allMessages = loadAllChatMessages();
  let changed = false;
  const updated = allMessages.map((m) => {
    if (m.threadId === studentId && !m.readByTeacher) {
      changed = true;
      return { ...m, readByTeacher: true };
    }
    return m;
  });
  if (changed) {
    saveAllChatMessages(updated);
  }
};

// Get unread count for a student
export const getUnreadCountForStudent = (studentId: string): number => {
  if (!studentId) return 0;
  const messages = loadAllChatMessages();
  return messages.filter(
    (m) => (m.threadId === studentId || m.threadId === 'broadcast') && m.senderRole === 'teacher' && !m.readByStudent
  ).length;
};

// Get unread count for teacher
export const getUnreadCountForTeacher = (): number => {
  const messages = loadAllChatMessages();
  return messages.filter((m) => m.senderRole === 'student' && !m.readByTeacher).length;
};

// Delete a message
export const deleteChatMessage = (messageId: string): void => {
  const allMessages = loadAllChatMessages();
  const updated = allMessages.filter((m) => m.id !== messageId);
  saveAllChatMessages(updated);
};

// Helper: Smart coaching reply if student asks common questions when teacher is not immediately active
const handleSmartAssistantCoachingReply = (student: StudentProfile, queryText: string) => {
  const lower = queryText.toLowerCase();

  let autoReplyText = '';
  let badge = 'Ms. Maria • Quick Guidance';

  if (lower.includes('agree') && (lower.includes('am agree') || lower.includes('i am agree'))) {
    autoReplyText = `Great question! In English, "agree" is already a verb, so you should never say "I am agree". Simply say: "I agree with you" or "I agree with this decision."`;
  } else if (lower.includes('advice') || lower.includes('advices')) {
    autoReplyText = `"Advice" is an uncountable noun in English and never takes an 's'! Use "some advice" or "a piece of advice", e.g., "Can you give me some advice on my resume?"`;
  } else if (lower.includes('information') || lower.includes('informations')) {
    autoReplyText = `"Information" is always singular and uncountable. Never say "informations". Say: "Here is the information you requested."`;
  } else if (lower.includes('at') && lower.includes('in') && lower.includes('on')) {
    autoReplyText = `Prepositions Rule of Thumb:
• IN for large areas (in London, in France) or months/years (in July, in 2026).
• ON for streets, surfaces, or days (on Monday, on the table).
• AT for specific points or exact times (at 9:00 AM, at the airport).`;
  } else if (lower.includes('streak') || lower.includes('points') || lower.includes('score')) {
    autoReplyText = `You earn practice points and maintain your daily streak by completing the 20-item workout in the Practice Hub every day! Keep up the consistent effort.`;
  }

  if (autoReplyText) {
    setTimeout(() => {
      const allMessages = loadAllChatMessages();
      const replyMsg: ChatMessage = {
        id: `msg_auto_${Date.now()}`,
        threadId: student.id,
        senderRole: 'teacher',
        senderName: 'Ms. Maria (Instructor)',
        senderEmail: TEACHER_AUTHORIZED_EMAIL,
        recipientId: student.id,
        text: autoReplyText,
        timestamp: new Date().toISOString(),
        readByStudent: false,
        readByTeacher: true,
        badge
      };
      saveAllChatMessages([...allMessages, replyMsg]);
    }, 1200);
  }
};

export { CHAT_UPDATED_EVENT };
