import { PracticeQuestion } from '../types';
import { GRAND_100_ASSESSMENT_QUESTIONS, calculateGrand100Report, GRAND_100_SECTIONS } from './grand100Assessment';
import { LESSON_DIAGNOSTICS, getDiagnosticForModule } from './lessonDiagnostics';

export { GRAND_100_ASSESSMENT_QUESTIONS, calculateGrand100Report, GRAND_100_SECTIONS, LESSON_DIAGNOSTICS, getDiagnosticForModule };

export const DAILY_WORKOUT_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'daily_1_past_tense',
    type: 'fill_blank',
    prompt: 'Daily Workout (1/20): Past Simple with Time Marker',
    sentenceWithBlank: 'Our regional director ___ the new office policy yesterday morning.',
    options: ['announced', 'announces', 'was announce'],
    correctIndex: 0,
    grammarFocus: 'Past Simple with specific completed time "yesterday morning"',
    whyExplanation: '"Yesterday morning" specifies a finished past timeframe, requiring the regular Past Simple form "announced".'
  },
  {
    id: 'daily_2_correction_negative',
    type: 'sentence_correction',
    prompt: 'Daily Workout (2/20): Present Simple Negative',
    incorrectSentence: 'She don\'t have the updated client address.',
    correctSentence: 'She doesn\'t have the updated client address.',
    errorHighlight: 'don\'t have',
    options: [
      'She doesn\'t have the updated client address.',
      'She don\'t has the updated client address.',
      'She isn\'t have the updated client address.'
    ],
    correctIndex: 0,
    whyExplanation: 'Third-person singular "She" takes "doesn\'t" in Present Simple: "She doesn\'t have".'
  },
  {
    id: 'daily_3_word_order',
    type: 'word_order',
    prompt: 'Daily Workout (3/20): Natural Sentence Architecture',
    scrambledWords: ['at 3:00 PM', 'will start', 'The presentation', 'in Conference Room A'],
    correctSentence: 'The presentation will start in Conference Room A at 3:00 PM',
    contextHint: 'Subject + Future Verb + Place + Time',
    whyExplanation: 'Standard English statement order: Subject (The presentation) + Verb (will start) + Place (in Conference Room A) + Time (at 3:00 PM).'
  },
  {
    id: 'daily_4_reallife_polite',
    type: 'real_life_situation',
    prompt: 'Daily Workout (4/20): Workplace Permission Request',
    scenario: 'You need to ask your supervisor for permission to leave work 30 minutes early for a dental check-up.',
    speaker: 'You (to Supervisor)',
    promptQuestion: 'Which phrasing is both grammatically accurate and professionally polite?',
    options: [
      'Could I please leave 30 minutes early today for a medical appointment?',
      'I want to go 30 minutes early today.',
      'Can you leave me 30 minutes early today?'
    ],
    correctIndex: 0,
    pragmaticTip: 'Use "Could I please [action]...?" for respectful workplace requests.',
    whyExplanation: '"Could I please leave...?" uses the polite modal "could" followed by base verb "leave".'
  },
  {
    id: 'daily_5_preposition_time',
    type: 'multiple_choice',
    prompt: 'Daily Workout (5/20): Prepositions of Day & Clock Time',
    options: [
      'The weekly briefing is on Friday at 10:00 AM.',
      'The weekly briefing is in Friday at 10:00 AM.',
      'The weekly briefing is at Friday in 10:00 AM.'
    ],
    correctIndex: 0,
    whyExplanation: 'Days of the week use ON ("on Friday") and clock times use AT ("at 10:00 AM").'
  },
  {
    id: 'daily_6_subject_verb',
    type: 'fill_blank',
    prompt: 'Daily Workout (6/20): Subject-Verb Agreement',
    sentenceWithBlank: 'The list of approved project expenses ___ submitted to accounting.',
    options: ['was', 'were', 'are'],
    correctIndex: 0,
    grammarFocus: 'Singular head noun "The list"',
    whyExplanation: 'The true subject is singular ("The list"), so it takes the singular verb "was".'
  },
  {
    id: 'daily_7_be_verb_age',
    type: 'sentence_correction',
    prompt: 'Daily Workout (7/20): Expressing Age in English',
    incorrectSentence: 'My project manager has 35 years old.',
    correctSentence: 'My project manager is 35 years old.',
    errorHighlight: 'has 35 years old',
    options: [
      'My project manager is 35 years old.',
      'My project manager have 35 years old.',
      'My project manager is having 35 years old.'
    ],
    correctIndex: 0,
    whyExplanation: 'English always uses the BE verb ("is / are / am") for age, never "has" or "have".'
  },
  {
    id: 'daily_8_uncountable_noun',
    type: 'fill_blank',
    prompt: 'Daily Workout (8/20): Uncountable Business Nouns',
    sentenceWithBlank: 'The IT department provided helpful ___ regarding the cloud backup.',
    options: ['advice', 'advices', 'an advice'],
    correctIndex: 0,
    grammarFocus: 'Uncountable noun "advice"',
    whyExplanation: '"Advice" is uncountable and never takes plural -s or the indefinite article "an".'
  },
  {
    id: 'daily_9_present_continuous',
    type: 'multiple_choice',
    prompt: 'Daily Workout (9/20): Ongoing Action vs Stative Verb',
    options: [
      'I understand the problem now, and our team is fixing the bug.',
      'I am understanding the problem now, and our team is fixing the bug.',
      'I understand the problem now, and our team fixes the bug right now.'
    ],
    correctIndex: 0,
    whyExplanation: '"Understand" is a stative verb (simple tense), while the active fix happening right now uses Present Continuous ("is fixing").'
  },
  {
    id: 'daily_10_irregular_past',
    type: 'fill_blank',
    prompt: 'Daily Workout (10/20): Irregular Past Simple',
    sentenceWithBlank: 'Ms. Maria ___ the project report to the executive director yesterday.',
    options: ['sent', 'sended', 'sending'],
    correctIndex: 0,
    grammarFocus: 'Past form of send -> sent',
    whyExplanation: '"Send" is irregular: the past simple is "sent".'
  },
  {
    id: 'daily_11_article_sound',
    type: 'fill_blank',
    prompt: 'Daily Workout (11/20): Phonetic Vowel Sound Article',
    sentenceWithBlank: 'We have ___ urgent deadline for the third-quarter financial audit.',
    options: ['an', 'a', 'the no article'],
    correctIndex: 0,
    grammarFocus: '"Urgent" starts with vowel sound /ɜː/',
    whyExplanation: 'Because "urgent" begins with a vowel sound, use the indefinite article "an".'
  },
  {
    id: 'daily_12_pronoun_case',
    type: 'fill_blank',
    prompt: 'Daily Workout (12/20): Object Pronouns',
    sentenceWithBlank: 'The client called David and ___ to confirm the shipment schedule.',
    options: ['me', 'I', 'myself'],
    correctIndex: 0,
    grammarFocus: 'Object pronoun after transitive verb "called"',
    whyExplanation: 'As the object of "called", use the objective pronoun "me" (called David and me).'
  },
  {
    id: 'daily_13_comparative',
    type: 'sentence_correction',
    prompt: 'Daily Workout (13/20): Comparative Form of Good',
    incorrectSentence: 'Our new customer support system is more good than the old one.',
    correctSentence: 'Our new customer support system is better than the old one.',
    errorHighlight: 'more good',
    options: [
      'Our new customer support system is better than the old one.',
      'Our new customer support system is gooder than the old one.',
      'Our new customer support system is more better than the old one.'
    ],
    correctIndex: 0,
    whyExplanation: 'The comparative of "good" is irregular: "better" (never "more good" or "gooder").'
  },
  {
    id: 'daily_14_future_intent',
    type: 'fill_blank',
    prompt: 'Daily Workout (14/20): Pre-Planned Future Decision',
    sentenceWithBlank: 'We ___ launch the redesigned web portal next Tuesday.',
    options: ['are going to', 'will to', 'going to'],
    correctIndex: 0,
    grammarFocus: 'BE + going to for prior plan',
    whyExplanation: 'Pre-planned business intentions use "are going to" + base verb.'
  },
  {
    id: 'daily_15_past_negative',
    type: 'sentence_correction',
    prompt: 'Daily Workout (15/20): Negative Past Simple',
    incorrectSentence: 'I didn\'t saw the updated memo on the staff noticeboard.',
    correctSentence: 'I didn\'t see the updated memo on the staff noticeboard.',
    errorHighlight: 'didn\'t saw',
    options: [
      'I didn\'t see the updated memo on the staff noticeboard.',
      'I didn\'t seen the updated memo on the staff noticeboard.',
      'I not saw the updated memo on the staff noticeboard.'
    ],
    correctIndex: 0,
    whyExplanation: 'After the auxiliary "didn\'t", the main verb reverts to its base form "see".'
  },
  {
    id: 'daily_16_conditional_one',
    type: 'multiple_choice',
    prompt: 'Daily Workout (16/20): First Conditional Structure',
    options: [
      'If the weather improves, we will host the corporate reception on the terrace.',
      'If the weather will improve, we will host the corporate reception on the terrace.',
      'If the weather improves, we host the corporate reception on the terrace future.'
    ],
    correctIndex: 0,
    whyExplanation: 'First Conditional: If + Present Simple ("improves"), will + base verb ("will host").'
  },
  {
    id: 'daily_17_conjunction_result',
    type: 'fill_blank',
    prompt: 'Daily Workout (17/20): Cause vs Result Conjunction',
    sentenceWithBlank: 'The shipment was delayed at the port, ___ we updated our client immediately.',
    options: ['so', 'because', 'although'],
    correctIndex: 0,
    grammarFocus: 'Result conjunction -> "so"',
    whyExplanation: '"So" introduces the result of the previous clause.'
  },
  {
    id: 'daily_18_word_order_question',
    type: 'multiple_choice',
    prompt: 'Daily Workout (18/20): Question Word Order (Q-A-S-V)',
    options: [
      'Where does the director usually park his car?',
      'Where the director usually parks his car?',
      'Where do the director usually park his car?'
    ],
    correctIndex: 0,
    whyExplanation: 'English information questions follow: Question Word (Where) + Auxiliary (does) + Subject (the director) + Adverb (usually) + Base Verb (park).'
  },
  {
    id: 'daily_19_agree_verb',
    type: 'sentence_correction',
    prompt: 'Daily Workout (19/20): Stative Verb Habit',
    incorrectSentence: 'I am agree with your recommendation.',
    correctSentence: 'I agree with your recommendation.',
    errorHighlight: 'am agree',
    options: [
      'I agree with your recommendation.',
      'I am agreeing with your recommendation.',
      'I agreed with your recommendation now.'
    ],
    correctIndex: 0,
    whyExplanation: '"Agree" is an active verb in English. Say "I agree".'
  },
  {
    id: 'daily_20_workplace_clarification',
    type: 'real_life_situation',
    prompt: 'Daily Workout (20/20): Professional Clarification',
    scenario: 'During an online video meeting, a coworker speaks too quickly and you missed the deadline number.',
    speaker: 'You (in meeting)',
    promptQuestion: 'What is the most polite and natural way to ask them to slow down and clarify?',
    options: [
      'Could you please slow down a little and repeat the deadline date?',
      'You are too fast, talk slowly.',
      'Say the date again now.'
    ],
    correctIndex: 0,
    pragmaticTip: 'Combine modal "Could you please..." with a specific clarification point.',
    whyExplanation: '"Could you please slow down a little and repeat...?" is polite, constructive, and clear.'
  }
];

// Default 25-Question Quick Diagnostic (subset of the Grand 100)
export const FINAL_ASSESSMENT_QUESTIONS: PracticeQuestion[] = GRAND_100_ASSESSMENT_QUESTIONS.slice(0, 25);

export const calculateAssessmentLevel = (score: number, total: number): {
  level: 'Beginner' | 'Developing' | 'Elementary' | 'Strong Elementary';
  description: string;
  strengths: string[];
  improvementAreas: string[];
} => {
  const percentage = Math.round((score / total) * 100);

  if (percentage >= 85) {
    return {
      level: 'Strong Elementary',
      description: 'You demonstrate high control of foundational English sentence architecture, tenses, subject-verb agreement, and professional workplace communication.',
      strengths: ['Subject-Verb Agreement', 'Past & Present Tenses', 'Professional Inquiries & Situations', 'Sentence Construction'],
      improvementAreas: ['Complex multi-clause nuance', 'Advanced preposition idioms']
    };
  } else if (percentage >= 70) {
    return {
      level: 'Elementary',
      description: 'You have a solid grasp of core daily English grammar. You understand basic sentence order and regular structures, with a few slips in third-person -s or prepositions.',
      strengths: ['Basic S+V+O Order', 'BE Verb Formations', 'Countable Nouns', 'Everyday Questions'],
      improvementAreas: ['Irregular past verbs', 'Prepositions (in/on/at)', 'Third-person singular -s in fast writing']
    };
  } else if (percentage >= 50) {
    return {
      level: 'Developing',
      description: 'You understand basic English vocabulary and simple statements. Focusing on verb tenses and avoiding translation habits from your native language will give you rapid breakthroughs.',
      strengths: ['Simple Present Statements', 'Noun Basics', 'Direct Questions'],
      improvementAreas: ['Subject-Verb Agreement', 'Present Simple vs Continuous', 'Object vs Subject Pronouns']
    };
  } else {
    return {
      level: 'Beginner',
      description: 'You are beginning your structured English journey. By practicing the 16 progressive modules step-by-step with Ms. Maria\'s curriculum, your accuracy and spoken confidence will grow quickly!',
      strengths: ['Desire to learn', 'Word Recognition'],
      improvementAreas: ['Sentence Structure (SVO)', 'BE Verb (am/is/are)', 'Articles (a/an/the)']
    };
  }
};
