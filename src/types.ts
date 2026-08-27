export type ScreenType = 
  | 'intro'
  | 'why_it_matters'
  | 'explanation'
  | 'formula'
  | 'real_life_examples'
  | 'common_mistakes'
  | 'practice';

export interface IntroScreenData {
  type: 'intro';
  title: string;
  subtitle: string;
  conceptSummary: string;
  visualGraphic: {
    heroSentence: string;
    highlights: { word: string; role: string; color: string }[];
    caption: string;
  };
  keyTakeaways: string[];
}

export interface WhyItMattersScreenData {
  type: 'why_it_matters';
  title: string;
  subtitle: string;
  adultSituations: {
    icon: string;
    situation: string;
    example: string;
    whyNeeded: string;
  }[];
  coachTip: string;
}

export interface ExplanationScreenData {
  type: 'explanation';
  title: string;
  subtitle: string;
  coreRule: string;
  breakdown: {
    term: string;
    plainDefinition: string;
    simpleExample: string;
  }[];
  interactiveToggle?: {
    label: string;
    tabA: { name: string; content: string; example: string };
    tabB: { name: string; content: string; example: string };
  };
}

export interface FormulaScreenData {
  type: 'formula';
  title: string;
  subtitle: string;
  formulaBlocks: {
    label: string;
    part: string;
    color: string;
  }[];
  tableExamples: {
    subject: string;
    verbOrAux: string;
    objectOrComplement: string;
    fullSentence: string;
    context: string;
  }[];
  variations?: {
    title: string;
    formula: string;
    example: string;
  }[];
}

export interface RealLifeExampleItem {
  id: string;
  category: 'work' | 'restaurant' | 'home' | 'shopping' | 'travel' | 'doctor';
  categoryLabel: string;
  sentence: string;
  breakdownNote: string;
  speakerRole: string;
}

export interface RealLifeScreenData {
  type: 'real_life_examples';
  title: string;
  subtitle: string;
  examples: RealLifeExampleItem[];
}

export interface MistakePair {
  id: string;
  incorrect: string;
  correct: string;
  explanation: string;
  ruleTag: string;
  severityTip?: string;
}

export interface CommonMistakesScreenData {
  type: 'common_mistakes';
  title: string;
  subtitle: string;
  mistakes: MistakePair[];
  rememberRule: string;
}

export type QuestionType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'sentence_correction'
  | 'word_order'
  | 'matching'
  | 'true_false'
  | 'real_life_situation';

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  prompt?: string;
  whyExplanation: string; // Explained when user clicks the "💡 Why?" button
  categoryTag?: string;
  adultContext?: string;
  grammarFocus?: string;
  sentenceWithBlank?: string;
  incorrectSentence?: string;
  correctSentence?: string;
  errorHighlight?: string;
  scrambledWords?: string[];
  contextHint?: string;
  scenario?: string;
  speaker?: string;
  promptQuestion?: string;
  pragmaticTip?: string;
  options?: string[];
  correctIndex?: number;
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple_choice';
  options: string[];
  correctIndex: number;
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill_blank';
  sentenceWithBlank: string; // e.g. "She ___ English every day."
  options: string[];
  correctIndex: number;
  grammarFocus: string;
}

export interface SentenceCorrectionQuestion extends BaseQuestion {
  type: 'sentence_correction';
  incorrectSentence: string;
  correctSentence: string;
  errorHighlight: string;
  options: string[]; // 3-4 options of corrected sentences or replacement words
  correctIndex: number;
}

export interface WordOrderQuestion extends BaseQuestion {
  type: 'word_order';
  scrambledWords: string[];
  correctSentence: string;
  contextHint?: string;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  pairs: MatchingPair[];
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false';
  statement: string;
  isTrue: boolean;
}

export interface RealLifeSituationQuestion extends BaseQuestion {
  type: 'real_life_situation';
  scenario: string;
  speaker: string;
  promptQuestion: string;
  options: string[];
  correctIndex: number;
  pragmaticTip?: string;
}

export type PracticeQuestion =
  | MultipleChoiceQuestion
  | FillBlankQuestion
  | SentenceCorrectionQuestion
  | WordOrderQuestion
  | MatchingQuestion
  | TrueFalseQuestion
  | RealLifeSituationQuestion;

export interface PracticeScreenData {
  type: 'practice';
  title: string;
  subtitle: string;
  questions: PracticeQuestion[];
}

export type LessonScreen =
  | IntroScreenData
  | WhyItMattersScreenData
  | ExplanationScreenData
  | FormulaScreenData
  | RealLifeScreenData
  | CommonMistakesScreenData
  | PracticeScreenData;

export interface Topic {
  id: string;
  moduleId: number;
  title: string;
  shortDesc: string;
  estimatedMinutes: number;
  level: 'Beginner' | 'Elementary' | 'Intermediate';
  screens: LessonScreen[];
  quizQuestions: PracticeQuestion[];
}

export interface Module {
  id: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  color: string;
  topics: Topic[];
}

export interface RealLifeDialogueLine {
  speaker: string;
  avatar: string;
  text: string;
  grammarHighlight?: string;
  translationOrTip?: string;
}

export interface RealLifeSituationTopic {
  id: string;
  title: string;
  category: string;
  icon: string;
  grammarFocus: string;
  description: string;
  dialogue: RealLifeDialogueLine[];
  keyPhrases: { phrase: string; explanation: string; grammarRule: string }[];
  practiceQuestions: PracticeQuestion[];
}

export interface GrammarCheatSheet {
  id: string;
  category: string;
  title: string;
  summary: string;
  keywords: string[];
  rules: { title: string; explanation: string; formula?: string; examples: { text: string; note: string }[] }[];
  watchOuts: { wrong: string; right: string; reason: string }[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
  quickTip: string;
}

export type RealLifeScenario = RealLifeSituationTopic;

export interface InstructorAssignment {
  id: string;
  title: string;
  type: 'topic' | 'quiz' | 'situation' | 'real_life';
  targetId: string;
  dueDate?: string;
  completed: boolean;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  avatarColor: string;
}

export interface UserProgress {
  studentId?: string;
  studentName?: string;
  completedTopics: string[]; // list of topic ids
  completedModules: number[]; // module ids
  quizScores: Record<string, { score: number; total: number; percentage: number; date?: string; completedAt?: string; mistakes?: string[] }>;
  practicePoints: number;
  streakCount: number;
  lastActiveDate: string;
  masteredGrammarAreas: string[];
  weakGrammarAreas: string[];
  timeSpentMinutes: number;
  dailyWorkoutCompletedToday: boolean;
  lastDailyWorkoutDate?: string;
  instructorAssignments: InstructorAssignment[];
  level?: 'Beginner' | 'Developing' | 'Elementary' | 'Strong Elementary';
  skillsScores?: Record<string, {
    skill: 'listening' | 'reading' | 'writing' | 'speaking';
    testId: string;
    score: number;
    total: number;
    percentage: number;
    date: string;
    feedback?: string;
  }>;
}

export type SkillCategory = 'listening' | 'reading' | 'writing' | 'speaking';

export interface ListeningDialogueItem {
  speaker: string;
  avatar: string;
  text: string;
}

export interface ListeningQuestion {
  id: string;
  type: 'multiple_choice' | 'fill_blank' | 'dictation';
  prompt: string;
  audioSegment?: string;
  options?: string[];
  correctAnswer: string | number; // index if multiple choice, text string if dictation/fill_blank
  whyExplanation: string;
  grammarFocus?: string;
}

export interface ListeningTest {
  id: string;
  title: string;
  category: 'workplace' | 'academic' | 'everyday' | 'travel' | 'interviews';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  durationMinutes: number;
  audioScript: string;
  dialogue?: ListeningDialogueItem[];
  context: string;
  vocabulary: { word: string; definition: string; example: string }[];
  questions: ListeningQuestion[];
}

export interface ReadingQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  whyExplanation: string;
  lineReference?: string;
  questionType: 'main_idea' | 'detail' | 'vocabulary_in_context' | 'inference' | 'tone_purpose';
}

export interface ReadingTest {
  id: string;
  title: string;
  genre: 'Article' | 'Business Memo' | 'Academic Essay' | 'Narrative' | 'Informational Guide';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  wordCount: number;
  estimatedMinutes: number;
  passage: string;
  glossary?: { term: string; meaning: string }[];
  questions: ReadingQuestion[];
}

export interface WritingRubricCriterion {
  label: string;
  description: string;
  maxScore: number;
}

export interface WritingTest {
  id: string;
  title: string;
  taskType: 'sentence_transformation' | 'formal_email' | 'opinion_paragraph' | 'data_summary' | 'argument_essay';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  prompt: string;
  instructions: string[];
  starterTemplate?: string;
  targetGrammarPoints: string[];
  minWords: number;
  maxWords: number;
  sampleModelAnswer: string;
  rubric: WritingRubricCriterion[];
  keyConnectorsToUse?: string[];
}

export interface SpeakingTest {
  id: string;
  title: string;
  taskType: 'read_aloud' | 'describe_situation' | 'grammar_transformation' | 'express_opinion';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  targetSentence?: string; // For read_aloud or grammar_transformation
  prompt: string;
  scenarioContext?: string;
  imageOrGraphicDescription?: string;
  prepTimeSeconds: number;
  speakingTimeSeconds: number;
  pronunciationFocus: string[];
  grammarTarget: string;
  modelSpokenAudioText: string;
  tips: string[];
}

export interface FinalAssessmentResult {
  score: number;
  total: number;
  percentage: number;
  level: 'Beginner' | 'Developing' | 'Elementary' | 'Strong Elementary';
  strengths: string[];
  improvementAreas: string[];
  recommendedTopics: string[];
  date: string;
}

export interface ChatMessage {
  id: string;
  threadId: string; // studentId or 'general'
  senderRole: 'student' | 'teacher' | 'assistant';
  senderName: string;
  senderEmail?: string;
  recipientId?: string; // studentId or 'teacher' or 'all'
  text: string;
  timestamp: string;
  readByStudent: boolean;
  readByTeacher: boolean;
  topicRef?: string;
  badge?: string;
}

export interface ChatThread {
  studentId: string;
  studentName: string;
  studentEmail: string;
  lastMessage: string;
  lastTimestamp: string;
  unreadCountTeacher: number;
  unreadCountStudent: number;
  avatarColor?: string;
}
