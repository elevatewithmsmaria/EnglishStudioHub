import {
  PracticeQuestion,
  MultipleChoiceQuestion,
  FillBlankQuestion,
  SentenceCorrectionQuestion,
  WordOrderQuestion,
  RealLifeSituationQuestion
} from '../types';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type DailyPracticeQuestion = (
  | MultipleChoiceQuestion
  | FillBlankQuestion
  | SentenceCorrectionQuestion
  | WordOrderQuestion
  | RealLifeSituationQuestion
) & {
  difficulty: DifficultyLevel;
  skillDomain: string;
};

export const DAILY_PRACTICE_BANK: DailyPracticeQuestion[] = [
  // ==========================================
  // EASY / FOUNDATIONAL LEVEL QUESTIONS (1 - 35)
  // ==========================================
  {
    id: 'easy_1_be_verb_age',
    type: 'sentence_correction',
    difficulty: 'easy',
    skillDomain: 'BE Verb & Identity',
    prompt: 'Sentence Correction: Expressing Age',
    incorrectSentence: 'My project assistant has 24 years old.',
    correctSentence: 'My project assistant is 24 years old.',
    errorHighlight: 'has 24 years old',
    options: [
      'My project assistant is 24 years old.',
      'My project assistant have 24 years old.',
      'My project assistant has 24 years of age.'
    ],
    correctIndex: 0,
    grammarFocus: 'BE verb ("is / are / am") for age',
    whyExplanation: 'In English, age is always stated using the BE verb ("is / are / am"), never "has" or "have".'
  },
  {
    id: 'easy_2_subject_verb_third_person',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Present Simple',
    prompt: 'Fill in the Blank: Third-Person Singular Verb',
    sentenceWithBlank: 'Our branch manager ___ the office at 8:00 AM every weekday.',
    options: ['opens', 'open', 'is open'],
    correctIndex: 0,
    grammarFocus: 'Third-person singular subject takes -s on regular present verbs',
    whyExplanation: 'The subject "Our branch manager" (he/she) is third-person singular, so the regular Present Simple verb takes an -s: "opens".'
  },
  {
    id: 'easy_3_past_simple_regular',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Past Tense',
    prompt: 'Fill in the Blank: Regular Past Tense',
    sentenceWithBlank: 'We ___ the software update yesterday afternoon.',
    options: ['installed', 'install', 'was install'],
    correctIndex: 0,
    grammarFocus: 'Past Simple with finished time marker "yesterday"',
    whyExplanation: '"Yesterday afternoon" specifies a completed past action, requiring regular Past Simple "installed".'
  },
  {
    id: 'easy_4_uncountable_information',
    type: 'sentence_correction',
    difficulty: 'easy',
    skillDomain: 'Nouns & Plurals',
    prompt: 'Sentence Correction: Uncountable Nouns',
    incorrectSentence: 'Could you email me all the project informations?',
    correctSentence: 'Could you email me all the project information?',
    errorHighlight: 'informations',
    options: [
      'Could you email me all the project information?',
      'Could you email me all the project informations?',
      'Could you email me an project information?'
    ],
    correctIndex: 0,
    grammarFocus: 'Uncountable noun "information" never takes plural -s',
    whyExplanation: '"Information" is strictly uncountable in English. It cannot be pluralized with -s or preceded by "an".'
  },
  {
    id: 'easy_5_preposition_day_clock',
    type: 'multiple_choice',
    difficulty: 'easy',
    skillDomain: 'Prepositions of Time',
    prompt: 'Prepositions: Days of the Week and Clock Time',
    options: [
      'Our team meeting is on Tuesday at 2:00 PM.',
      'Our team meeting is in Tuesday at 2:00 PM.',
      'Our team meeting is at Tuesday on 2:00 PM.'
    ],
    correctIndex: 0,
    grammarFocus: 'Use ON with specific days and AT with specific clock times',
    whyExplanation: 'We use ON for days of the week ("on Tuesday") and AT for precise clock times ("at 2:00 PM").'
  },
  {
    id: 'easy_6_pronouns_subject_object',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Pronouns',
    prompt: 'Fill in the Blank: Object Pronoun after Verb',
    sentenceWithBlank: 'Please call ___ as soon as the client arrives.',
    options: ['me', 'I', 'my'],
    correctIndex: 0,
    grammarFocus: 'Object pronoun "me" after the transitive verb "call"',
    whyExplanation: 'Verbs act upon objects. The object pronoun of "I" is "me".'
  },
  {
    id: 'easy_7_article_phonetics',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Articles',
    prompt: 'Fill in the Blank: Indefinite Article with Vowel Sound',
    sentenceWithBlank: 'We have ___ urgent issue that requires your review.',
    options: ['an', 'a', 'the a'],
    correctIndex: 0,
    grammarFocus: 'Use "an" before words beginning with a vowel sound',
    whyExplanation: '"Urgent" begins with the vowel sound /ˈɜːr.dʒənt/, requiring the indefinite article "an".'
  },
  {
    id: 'easy_8_word_order_svo',
    type: 'word_order',
    difficulty: 'easy',
    skillDomain: 'Sentence Architecture',
    prompt: 'Word Order: Basic Subject + Verb + Object Structure',
    scrambledWords: ['the weekly report', 'completed', 'The marketing team', 'yesterday'],
    correctSentence: 'The marketing team completed the weekly report yesterday',
    contextHint: 'Subject + Verb + Object + Time',
    whyExplanation: 'Standard English statement order: Subject (The marketing team) + Verb (completed) + Object (the weekly report) + Time (yesterday).'
  },
  {
    id: 'easy_9_negative_present_doesnt',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Negation',
    prompt: 'Fill in the Blank: Third-Person Singular Negative',
    sentenceWithBlank: 'David ___ work on Saturdays.',
    options: ["doesn't", "don't", "isn't"],
    correctIndex: 0,
    grammarFocus: 'Third-person singular uses "does not" / "doesn\'t"',
    whyExplanation: 'For singular third-person subjects (David / he), Present Simple negation uses "doesn\'t" followed by base verb "work".'
  },
  {
    id: 'easy_10_modal_base_verb',
    type: 'sentence_correction',
    difficulty: 'easy',
    skillDomain: 'Modals',
    prompt: 'Sentence Correction: Modals Followed by Base Verb',
    incorrectSentence: 'She can to speak three languages fluently.',
    correctSentence: 'She can speak three languages fluently.',
    errorHighlight: 'can to speak',
    options: [
      'She can speak three languages fluently.',
      'She can to speak three languages fluently.',
      'She can speaks three languages fluently.'
    ],
    correctIndex: 0,
    grammarFocus: 'Modal verbs (can, must, should) take base verb without "to"',
    whyExplanation: 'Modal auxiliaries take the bare infinitive directly: "can speak", not "can to speak" or "can speaks".'
  },
  {
    id: 'easy_11_preposition_city',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Prepositions of Place',
    prompt: 'Fill in the Blank: Cities & Countries',
    sentenceWithBlank: 'Our head office is located ___ Tokyo.',
    options: ['in', 'at', 'on'],
    correctIndex: 0,
    grammarFocus: 'Use IN with cities, regions, and countries',
    whyExplanation: 'Enclosed geographic areas like cities, states, and countries always take "in".'
  },
  {
    id: 'easy_12_plural_irregular',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Nouns & Plurals',
    prompt: 'Fill in the Blank: Irregular Plural',
    sentenceWithBlank: 'Three ___ attended the orientation session today.',
    options: ['people', 'persons', 'peoples'],
    correctIndex: 0,
    grammarFocus: 'Plural of "person" is "people"',
    whyExplanation: 'The natural, standard plural form of "person" in everyday and business English is "people".'
  },
  {
    id: 'easy_13_comparative_short_adj',
    type: 'fill_blank',
    difficulty: 'easy',
    skillDomain: 'Adjectives',
    prompt: 'Fill in the Blank: 1-Syllable Comparative',
    sentenceWithBlank: 'The new printer is ___ than our old model.',
    options: ['faster', 'more fast', 'more faster'],
    correctIndex: 0,
    grammarFocus: '1-syllable adjectives add -er for comparatives',
    whyExplanation: 'One-syllable adjectives take -er ("faster"). Never double with "more faster".'
  },
  {
    id: 'easy_14_polite_request_could',
    type: 'real_life_situation',
    difficulty: 'easy',
    skillDomain: 'Polite Requests',
    prompt: 'Real-Life Situation: Asking for Assistance',
    scenario: 'You need a colleague to send you the digital spreadsheet.',
    speaker: 'You (to Colleague)',
    promptQuestion: 'Which is the most courteous and standard phrasing?',
    options: [
      'Could you please send me the spreadsheet?',
      'Send me the spreadsheet now.',
      'Can you to send me the spreadsheet?'
    ],
    correctIndex: 0,
    pragmaticTip: 'Start requests with "Could you please [verb]...?" for instant politeness.',
    whyExplanation: '"Could you please send...?" pairs the polite modal "could" with base verb "send".'
  },

  // ==========================================
  // MEDIUM / INTERMEDIATE LEVEL QUESTIONS (36 - 70)
  // ==========================================
  {
    id: 'med_1_stative_verb_agree',
    type: 'sentence_correction',
    difficulty: 'medium',
    skillDomain: 'Stative Verbs',
    prompt: 'Sentence Correction: Stative Verbs in Present Simple',
    incorrectSentence: 'I am agreeing with the terms in Section 4.',
    correctSentence: 'I agree with the terms in Section 4.',
    errorHighlight: 'am agreeing',
    options: [
      'I agree with the terms in Section 4.',
      'I am agreeing with the terms in Section 4.',
      'I am agree with the terms in Section 4.'
    ],
    correctIndex: 0,
    grammarFocus: 'Stative verbs like "agree", "know", "believe" do not use continuous aspects',
    whyExplanation: '"Agree" expresses an intellectual stance (stative verb), so it is used in Simple Present ("I agree"), never Present Continuous.'
  },
  {
    id: 'med_2_didnt_base_verb',
    type: 'sentence_correction',
    difficulty: 'medium',
    skillDomain: 'Past Tense & Auxiliaries',
    prompt: 'Sentence Correction: Negative Past with Auxiliary Did',
    incorrectSentence: 'We didn\'t received the payment confirmation.',
    correctSentence: 'We didn\'t receive the payment confirmation.',
    errorHighlight: 'didn\'t received',
    options: [
      'We didn\'t receive the payment confirmation.',
      'We didn\'t received the payment confirmation.',
      'We wasn\'t receive the payment confirmation.'
    ],
    correctIndex: 0,
    grammarFocus: 'After auxiliary "didn\'t", the main verb MUST be in base form',
    whyExplanation: 'The auxiliary "did" already carries the past tense mark. The lexical verb remains in its base form: "didn\'t receive".'
  },
  {
    id: 'med_3_will_vs_going_to_spontaneous',
    type: 'fill_blank',
    difficulty: 'medium',
    skillDomain: 'Future Aspects',
    prompt: 'Fill in the Blank: Spontaneous Decision at Moment of Speech',
    sentenceWithBlank: 'Oh, someone is at the front desk. I ___ go and let them in.',
    options: ['will', 'am going to', 'go to'],
    correctIndex: 0,
    grammarFocus: 'Use "will" for spontaneous, un-premeditated decisions made at the instant of speech',
    whyExplanation: 'When deciding at the exact moment of speaking, use "will". "Be going to" is used for pre-planned intentions.'
  },
  {
    id: 'med_4_few_vs_little',
    type: 'fill_blank',
    difficulty: 'medium',
    skillDomain: 'Quantifiers',
    prompt: 'Fill in the Blank: Quantifiers for Countable vs Uncountable Nouns',
    sentenceWithBlank: 'We have ___ minutes left before the webinar starts.',
    options: ['a few', 'a little', 'much'],
    correctIndex: 0,
    grammarFocus: 'Use "a few" with plural countable nouns ("minutes")',
    whyExplanation: '"Minutes" is a plural countable noun, which takes "a few". "A little" is strictly reserved for uncountable nouns.'
  },
  {
    id: 'med_5_first_conditional',
    type: 'multiple_choice',
    difficulty: 'medium',
    skillDomain: 'Conditionals',
    prompt: 'Conditionals: Real Future Conditional (First Conditional)',
    options: [
      'If the shipment arrives on time, we will dispatch the orders immediately.',
      'If the shipment will arrive on time, we dispatch the orders immediately.',
      'If the shipment arrives on time, we would dispatch the orders immediately.'
    ],
    correctIndex: 0,
    grammarFocus: 'First Conditional: If + Present Simple, will + base verb',
    whyExplanation: 'In First Conditionals, the "if" condition clause uses Present Simple ("arrives"), while the result clause uses "will + base verb".'
  },
  {
    id: 'med_6_quasm_question_order',
    type: 'word_order',
    difficulty: 'medium',
    skillDomain: 'Question Formation',
    prompt: 'Word Order: QUASM (Question Word + Auxiliary + Subject + Main Verb)',
    scrambledWords: ['did', 'Why', 'the manager', 'postpone', 'the meeting'],
    correctSentence: 'Why did the manager postpone the meeting',
    contextHint: 'Question Word + Auxiliary + Subject + Main Verb + Object',
    whyExplanation: 'Standard question order follows QUASM: Question word (Why) + Auxiliary (did) + Subject (the manager) + Main Verb (postpone) + Object (the meeting).'
  },
  {
    id: 'med_7_adverb_frequency_placement',
    type: 'sentence_correction',
    difficulty: 'medium',
    skillDomain: 'Adverb Placement',
    prompt: 'Sentence Correction: Placement of Frequency Adverbs',
    incorrectSentence: 'She checks always her emails before starting her tasks.',
    correctSentence: 'She always checks her emails before starting her tasks.',
    errorHighlight: 'checks always',
    options: [
      'She always checks her emails before starting her tasks.',
      'She checks always her emails before starting her tasks.',
      'Always she checks her emails before starting her tasks.'
    ],
    correctIndex: 0,
    grammarFocus: 'Frequency adverbs (always, often, usually) sit BEFORE main action verbs',
    whyExplanation: 'Frequency adverbs precede lexical verbs: "always checks", but follow BE verbs: "is always".'
  },
  {
    id: 'med_8_head_noun_prepositional_phrase',
    type: 'fill_blank',
    difficulty: 'medium',
    skillDomain: 'Subject-Verb Agreement',
    prompt: 'Fill in the Blank: Subject with Intervening Prepositional Phrase',
    sentenceWithBlank: 'The quality of these newly delivered components ___ exceptional.',
    options: ['is', 'are', 'were'],
    correctIndex: 0,
    grammarFocus: 'Agreement is with singular head noun "The quality", not plural object of preposition "components"',
    whyExplanation: 'The subject head noun is singular ("The quality"), so it takes the singular verb "is". Do not be distracted by "components".'
  },
  {
    id: 'med_9_would_mind_gerund',
    type: 'fill_blank',
    difficulty: 'medium',
    skillDomain: 'Polite Workplace Inquiries',
    prompt: 'Fill in the Blank: "Would you mind" + Gerund (-ing)',
    sentenceWithBlank: 'Would you mind ___ the projector before the workshop begins?',
    options: ['testing', 'to test', 'test'],
    correctIndex: 0,
    grammarFocus: '"Would you mind" is always followed by a gerund (verb + ing)',
    whyExplanation: 'The polite formula "Would you mind..." takes a gerund (-ing form): "Would you mind testing...".'
  },
  {
    id: 'med_10_present_perfect_duration_since',
    type: 'fill_blank',
    difficulty: 'medium',
    skillDomain: 'Present Perfect',
    prompt: 'Fill in the Blank: Since vs For with Starting Point',
    sentenceWithBlank: 'Elena has worked at this design agency ___ 2021.',
    options: ['since', 'for', 'during'],
    correctIndex: 0,
    grammarFocus: 'Use "since" for specific starting points in time; use "for" for durations',
    whyExplanation: '"2021" is a specific starting time point, requiring "since".'
  },

  // ==========================================
  // HARD / ADVANCED LEVEL QUESTIONS (71 - 105)
  // ==========================================
  {
    id: 'hard_1_negative_inversion',
    type: 'multiple_choice',
    difficulty: 'hard',
    skillDomain: 'Advanced Inversion & Emphasis',
    prompt: 'Advanced Grammar: Negative Inversion for Professional Polish',
    options: [
      'Rarely have we encountered such comprehensive feedback from our client base.',
      'Rarely we have encountered such comprehensive feedback from our client base.',
      'Rarely did we encountered such comprehensive feedback from our client base.'
    ],
    correctIndex: 0,
    grammarFocus: 'When a negative or restrictive adverbial (Rarely, Seldom, Never) opens a clause, subject-auxiliary inversion is mandatory',
    whyExplanation: 'Fronted restrictive adverbs like "Rarely" trigger subject-auxiliary inversion: "Rarely have we encountered..." (Auxiliary + Subject + Verb).'
  },
  {
    id: 'hard_2_mixed_conditional',
    type: 'multiple_choice',
    difficulty: 'hard',
    skillDomain: 'Advanced Conditionals',
    prompt: 'Advanced Grammar: Mixed Conditional (Past Action with Present Consequence)',
    options: [
      'If we had taken that risk last quarter, our company would be in a stronger financial position today.',
      'If we took that risk last quarter, our company will be in a stronger financial position today.',
      'If we had taken that risk last quarter, our company would have been in a stronger financial position today.'
    ],
    correctIndex: 0,
    grammarFocus: 'Mixed conditional: Past unreal condition (Had + Past Participle) paired with present outcome (would + base verb + today)',
    whyExplanation: 'The condition occurred in the past ("had taken last quarter"), but the resulting state is occurring right now ("would be in a stronger position today").'
  },
  {
    id: 'hard_3_subjunctive_mood',
    type: 'fill_blank',
    difficulty: 'hard',
    skillDomain: 'Subjunctive Mood',
    prompt: 'Fill in the Blank: Mandative Subjunctive in Professional English',
    sentenceWithBlank: 'The compliance committee recommended that the lead auditor ___ the report by Friday.',
    options: ['review', 'reviews', 'reviewed'],
    correctIndex: 0,
    grammarFocus: 'Mandative subjunctive after verbs of demand/recommendation uses the bare base form for all persons',
    whyExplanation: 'In formal English, verbs like "recommend", "demand", "insist" take a "that"-clause with the subjunctive base form ("review", without third-person -s).'
  },
  {
    id: 'hard_4_diplomatic_phrasing',
    type: 'real_life_situation',
    difficulty: 'hard',
    skillDomain: 'Diplomatic Discourse',
    prompt: 'Real-Life Situation: Diplomatic Disagreement with Senior Stakeholder',
    scenario: 'A project partner proposes a timeline that is unfeasible for your engineering team. You must communicate the constraint professionally without sounding confrontational.',
    speaker: 'You (in Executive Committee)',
    promptQuestion: 'Which phrasing offers the highest degree of diplomatic professionalism and clarity?',
    options: [
      'While I see your point regarding speed, I have some reservations about whether that timeline allows sufficient buffer for quality testing.',
      'Your timeline is completely wrong and our team will not do it.',
      'I am disagree with your deadline because it is too fast.'
    ],
    correctIndex: 0,
    pragmaticTip: 'Use hedging constructions ("While I see your point...", "I have some reservations about...") to disagree constructively.',
    whyExplanation: 'Diplomatic English uses softening introductory subordinate clauses ("While I see your point...") and hedged noun phrases ("have some reservations") rather than blunt negation.'
  },
  {
    id: 'hard_5_compound_prepositions_respect',
    type: 'fill_blank',
    difficulty: 'hard',
    skillDomain: 'Complex Prepositional Phrases',
    prompt: 'Fill in the Blank: Formal Business Prepositions',
    sentenceWithBlank: '___ the unforeseen budget adjustments, we must re-evaluate our quarterly hiring plan.',
    options: ['In light of', 'In spite', 'With regards of'],
    correctIndex: 0,
    grammarFocus: '"In light of" means taking into consideration; note exact three-word idiom "In light of"',
    whyExplanation: '"In light of" correctly links the context of new information to subsequent actions. "In spite" requires "of", and "With regard" takes "to" (never "with regards of").'
  },
  {
    id: 'hard_6_inversion_not_only',
    type: 'word_order',
    difficulty: 'hard',
    skillDomain: 'Inverted Correlative Conjunctions',
    prompt: 'Word Order: "Not only... but also" Inversion',
    scrambledWords: ['did the team meet', 'the strict deadline', 'Not only', 'but they also exceeded', 'all client expectations'],
    correctSentence: 'Not only did the team meet the strict deadline but they also exceeded all client expectations',
    contextHint: 'Not only + Auxiliary + Subject + Base Verb + Object + but they also + Verb + Object',
    whyExplanation: 'When "Not only" initiates a sentence, the first clause undergoes question word-order inversion: "Not only did the team meet...".'
  },
  {
    id: 'hard_7_gerund_vs_infinitive_stative',
    type: 'fill_blank',
    difficulty: 'hard',
    skillDomain: 'Verb Complementation',
    prompt: 'Fill in the Blank: Verbs with Shift in Meaning (Remember to vs Remember -ing)',
    sentenceWithBlank: 'Please remember ___ the sensitive client files before shutting down your workstation.',
    options: ['to encrypt', 'encrypting', 'encrypted'],
    correctIndex: 0,
    grammarFocus: '"Remember + infinitive" refers to a duty or task to be performed in the future; "Remember + gerund" recalls a past memory',
    whyExplanation: 'Here, the action is a future duty ("remember to encrypt"). "Remember encrypting" would mean having a memory of doing it in the past.'
  },
  {
    id: 'hard_8_parallel_structure',
    type: 'multiple_choice',
    difficulty: 'hard',
    skillDomain: 'Advanced Sentence Coordination',
    prompt: 'Advanced Grammar: Parallel Structure in Executive Communications',
    options: [
      'The new initiative aims at increasing productivity, streamlining workflow, and reducing operational overhead.',
      'The new initiative aims at increasing productivity, to streamline workflow, and reduction of operational overhead.',
      'The new initiative aims at increase productivity, streamline workflow, and reducing operational overhead.'
    ],
    correctIndex: 0,
    grammarFocus: 'Parallel grammatical items joined in a series must maintain identical grammatical forms (gerund + gerund + gerund)',
    whyExplanation: 'All three coordinated items follow the preposition "at" and must be gerunds: "increasing...", "streamlining...", and "reducing...".'
  },
  {
    id: 'hard_9_cleft_sentences',
    type: 'multiple_choice',
    difficulty: 'hard',
    skillDomain: 'Cleft Sentences & Focus',
    prompt: 'Advanced Grammar: Wh-Cleft Sentence for Rhetorical Focus',
    options: [
      'What we really need to focus on during this quarter is customer retention.',
      'What do we really need to focus on during this quarter is customer retention.',
      'That what we really need to focus on during this quarter is customer retention.'
    ],
    correctIndex: 0,
    grammarFocus: 'Wh-cleft sentences use a nominal relative clause as subject followed by BE verb: "What we really need is [focus]"',
    whyExplanation: 'A wh-cleft sentence ("What we really need... is...") highlights key information without auxiliary inversion because it is a statement, not a question.'
  },
  {
    id: 'hard_10_pronoun_case_formal_preposition',
    type: 'fill_blank',
    difficulty: 'hard',
    skillDomain: 'Relative Pronoun Case',
    prompt: 'Fill in the Blank: Preposition + Relative Pronoun',
    sentenceWithBlank: 'The senior consultant ___ whom we collaborated provided invaluable guidance.',
    options: ['with', 'at', 'for which'],
    correctIndex: 0,
    grammarFocus: 'Colleague collaboration takes "collaborate with [whom]"',
    whyExplanation: 'The verb "collaborate" pairs with "with". In formal writing, prepositions precede "whom": "with whom we collaborated".'
  }
];

/**
 * Returns a deterministic, daily-rotating 20-question set based on a date seed,
 * or allows filtering by difficulty level (Easy, Medium, Hard, All).
 */
export const getDailyPracticeQuestions = (
  dateStr?: string,
  difficultyFilter: 'all' | 'easy' | 'medium' | 'hard' = 'all'
): DailyPracticeQuestion[] => {
  // Use today's date string if not provided (e.g. "2026-08-27")
  const dateKey = dateStr || new Date().toISOString().slice(0, 10);

  // Compute a simple hash seed from the date
  let seed = 0;
  for (let i = 0; i < dateKey.length; i++) {
    seed = (seed << 5) - seed + dateKey.charCodeAt(i);
    seed |= 0;
  }
  const absSeed = Math.abs(seed);

  // Filter bank if requested
  let pool = DAILY_PRACTICE_BANK;
  if (difficultyFilter !== 'all') {
    pool = pool.filter((q) => q.difficulty === difficultyFilter);
  }

  // Shuffle pool pseudo-randomly using seed
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.abs((absSeed * (i + 1) * 31) % (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Take up to 20 questions
  return shuffled.slice(0, Math.min(20, shuffled.length));
};

/**
 * Returns a randomized set of 20 practice questions on demand for instant refresh
 */
export const generateFreshRandomPractice = (
  difficultyFilter: 'all' | 'easy' | 'medium' | 'hard' = 'all'
): DailyPracticeQuestion[] => {
  let pool = DAILY_PRACTICE_BANK;
  if (difficultyFilter !== 'all') {
    pool = pool.filter((q) => q.difficulty === difficultyFilter);
  }

  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(20, shuffled.length));
};
