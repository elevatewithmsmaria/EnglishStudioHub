import { UserProgress, FinalAssessmentResult, StudentProfile } from '../types';

const PROGRESS_KEY = 'begc_user_progress_v2';
const ASSESSMENT_KEY = 'begc_assessment_result_v2';
const STUDENTS_KEY = 'begc_students_registry_v2';
const CURRENT_STUDENT_KEY = 'begc_active_student_v2';
const TEACHER_AUTH_KEY = 'begc_teacher_auth_v2';

export const INITIAL_PROGRESS: UserProgress = {
  studentId: '',
  studentName: '',
  completedTopics: [],
  completedModules: [],
  quizScores: {},
  practicePoints: 0,
  streakCount: 0,
  lastActiveDate: '',
  masteredGrammarAreas: [],
  weakGrammarAreas: [],
  timeSpentMinutes: 0,
  dailyWorkoutCompletedToday: false,
  instructorAssignments: [],
};

// Registered Students Registry
export const getRegisteredStudents = (): (StudentProfile & { progress?: UserProgress })[] => {
  if (typeof window === 'undefined') return [];
  try {
    const saved = localStorage.getItem(STUDENTS_KEY);
    if (!saved) return [];
    const students: StudentProfile[] = JSON.parse(saved);
    return students.map((st) => {
      const prog = loadStudentProgress(st.id);
      return { ...st, progress: prog };
    });
  } catch {
    return [];
  }
};

export const getCurrentStudent = (): StudentProfile | null => {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem(CURRENT_STUDENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const setCurrentStudent = (student: StudentProfile | null): void => {
  if (typeof window === 'undefined') return;
  try {
    if (student) {
      localStorage.setItem(CURRENT_STUDENT_KEY, JSON.stringify(student));
    } else {
      localStorage.removeItem(CURRENT_STUDENT_KEY);
    }
  } catch (err) {
    console.error('Failed to set current student', err);
  }
};

export const registerOrLoginStudent = (name: string, email: string): { student: StudentProfile; isNew: boolean; progress: UserProgress } => {
  const cleanEmail = email.trim().toLowerCase();
  const cleanName = name.trim();
  const students = getRegisteredStudents();
  
  const existing = students.find((s) => s.email.toLowerCase() === cleanEmail);
  if (existing) {
    setCurrentStudent(existing);
    const prog = loadStudentProgress(existing.id);
    return { student: existing, isNew: false, progress: prog };
  }

  const colors = ['#4A5D4E', '#C25E3E', '#2B4C7E', '#6B4C7D', '#5C4033', '#1A1A1A'];
  const newStudent: StudentProfile = {
    id: `st_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    name: cleanName || 'Student',
    email: cleanEmail,
    joinedDate: new Date().toISOString().split('T')[0],
    avatarColor: colors[Math.floor(Math.random() * colors.length)]
  };

  const updatedStudents = [...students.map(s => ({ id: s.id, name: s.name, email: s.email, joinedDate: s.joinedDate, avatarColor: s.avatarColor })), newStudent];
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(updatedStudents));
  setCurrentStudent(newStudent);

  const initialStudentProg: UserProgress = {
    ...INITIAL_PROGRESS,
    studentId: newStudent.id,
    studentName: newStudent.name,
    lastActiveDate: new Date().toISOString().split('T')[0]
  };
  saveStudentProgress(newStudent.id, initialStudentProg);

  return { student: newStudent, isNew: true, progress: initialStudentProg };
};

export const logoutStudent = (): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(CURRENT_STUDENT_KEY);
  } catch (err) {
    console.error('Failed to log out', err);
  }
};

export const loadStudentProgress = (studentId?: string): UserProgress => {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const key = studentId ? `begc_progress_st_${studentId}` : PROGRESS_KEY;
    const saved = localStorage.getItem(key);
    if (!saved) return INITIAL_PROGRESS;
    const parsed = JSON.parse(saved);
    
    // Check streak reset if missed days
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDate) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currentDate = new Date(today);
      const diffDays = Math.floor((currentDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays > 1 && parsed.streakCount > 0) {
        parsed.streakCount = 0;
      }
      if (parsed.lastDailyWorkoutDate !== today) {
        parsed.dailyWorkoutCompletedToday = false;
      }
    }
    return { ...INITIAL_PROGRESS, ...parsed };
  } catch {
    return INITIAL_PROGRESS;
  }
};

export const saveStudentProgress = (studentId: string | undefined, progress: UserProgress): void => {
  if (typeof window === 'undefined') return;
  try {
    const key = studentId ? `begc_progress_st_${studentId}` : PROGRESS_KEY;
    localStorage.setItem(key, JSON.stringify(progress));
    // Also save to generic key if no studentId specified
    if (!studentId) {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    }
  } catch (err) {
    console.error('Failed to save student progress', err);
  }
};

export const loadUserProgress = (): UserProgress => {
  const current = getCurrentStudent();
  if (current) {
    return loadStudentProgress(current.id);
  }
  return loadStudentProgress(undefined);
};

export const saveUserProgress = (progress: UserProgress): void => {
  const current = getCurrentStudent();
  if (current) {
    saveStudentProgress(current.id, progress);
  } else {
    saveStudentProgress(undefined, progress);
  }
};

export const loadAssessmentResult = (): FinalAssessmentResult | null => {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem(ASSESSMENT_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const saveAssessmentResult = (result: FinalAssessmentResult): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ASSESSMENT_KEY, JSON.stringify(result));
  } catch (err) {
    console.error('Failed to save assessment', err);
  }
};

// Teacher Email Authentication Persistence (Restricted exclusively to elevatewithmsmaria@gmail.com)
export const TEACHER_AUTHORIZED_EMAIL = 'elevatewithmsmaria@gmail.com';

export const isTeacherAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const authData = sessionStorage.getItem(TEACHER_AUTH_KEY) || localStorage.getItem(TEACHER_AUTH_KEY);
    if (!authData) return false;
    const parsed = JSON.parse(authData);
    if (
      parsed.email?.toLowerCase() === TEACHER_AUTHORIZED_EMAIL &&
      parsed.verified &&
      parsed.expiresAt > Date.now()
    ) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
};

export const setTeacherAuthenticated = (verified: boolean, email: string = TEACHER_AUTHORIZED_EMAIL): void => {
  if (typeof window === 'undefined') return;
  try {
    if (verified && email.trim().toLowerCase() === TEACHER_AUTHORIZED_EMAIL) {
      const authObj = {
        email: TEACHER_AUTHORIZED_EMAIL,
        verified: true,
        authenticatedAt: new Date().toISOString(),
        expiresAt: Date.now() + 1000 * 60 * 60 * 24 * 7 // 7 days persistent session
      };
      sessionStorage.setItem(TEACHER_AUTH_KEY, JSON.stringify(authObj));
      localStorage.setItem(TEACHER_AUTH_KEY, JSON.stringify(authObj));
    } else {
      sessionStorage.removeItem(TEACHER_AUTH_KEY);
      localStorage.removeItem(TEACHER_AUTH_KEY);
    }
  } catch (err) {
    console.error('Failed to set teacher auth', err);
  }
};
