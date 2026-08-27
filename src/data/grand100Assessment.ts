import { PracticeQuestion } from '../types';

export interface AssessmentSection {
  id: string;
  part: number;
  title: string;
  count: number;
  range: [number, number];
  rangeText: string;
  focus: string;
  description: string;
  modulesCovered: string;
}

export const GRAND_100_SECTIONS: AssessmentSection[] = [
  {
    id: 'sec_1',
    part: 1,
    title: 'Sentence Foundations & Word Order',
    count: 15,
    range: [1, 15],
    rangeText: 'Questions 1–15',
    focus: 'S+V+O order, Subject-Verb Agreement, BE Verb for Age & Identity',
    description: 'Subject + Verb + Object architecture, statement order, BE verb mechanics, and head noun agreement.',
    modulesCovered: 'Modules 1 & 2'
  },
  {
    id: 'sec_2',
    part: 2,
    title: 'Nouns, Articles & Pronouns',
    count: 15,
    range: [16, 30],
    rangeText: 'Questions 16–30',
    focus: 'Countable/Uncountable Nouns, Few vs Little, Subject/Object Pronouns, A/An/The',
    description: 'Countable vs uncountable workplace nouns, subject/object pronouns, possessives, and phonetic articles (a/an/the).',
    modulesCovered: 'Modules 2, 3 & 15'
  },
  {
    id: 'sec_3',
    part: 3,
    title: 'Present Tenses & Stative Verbs',
    count: 15,
    range: [31, 45],
    rangeText: 'Questions 31–45',
    focus: 'Present Simple third-person -s, Continuous aspects, Stative verbs (agree, understand)',
    description: 'Present Simple third-person singular -s, habits vs ongoing actions (Continuous), and stative verbs (agree, understand, know).',
    modulesCovered: 'Modules 6 & 7'
  },
  {
    id: 'sec_4',
    part: 4,
    title: 'Past & Future Tenses',
    count: 15,
    range: [46, 60],
    rangeText: 'Questions 46–60',
    focus: 'Regular -ed sounds (/t/, /d/, /ɪd/), Top Irregular Verbs, Will vs Going to',
    description: 'Regular -ed pronunciation, top irregular verbs, negative did not + base verb, will vs going to for schedules.',
    modulesCovered: 'Modules 8, 9 & 10'
  },
  {
    id: 'sec_5',
    part: 5,
    title: 'Questions, Inversions & Negation',
    count: 15,
    range: [61, 75],
    rangeText: 'Questions 61–75',
    focus: 'QUASM word order, Subject Questions, Double Negatives, Tag Questions',
    description: 'QUASM word order (Question Word + Auxiliary + Subject + Main Verb), Yes/No questions, and negative auxiliary agreement.',
    modulesCovered: 'Module 11'
  },
  {
    id: 'sec_6',
    part: 6,
    title: 'Modals, Conditionals & Modifiers',
    count: 15,
    range: [76, 90],
    rangeText: 'Questions 76–90',
    focus: 'Could/Would requests, Zero & First Conditionals, Comparatives & Adverbs',
    description: 'Polite modals (could, would, should, must), zero/first conditionals, comparative adjectives, and frequency adverbs.',
    modulesCovered: 'Modules 4, 12 & 13'
  },
  {
    id: 'sec_7',
    part: 7,
    title: 'Prepositions & Workplace Communication',
    count: 10,
    range: [91, 100],
    rangeText: 'Questions 91–100',
    focus: 'Time/Place Prepositions (in/on/at), Conjunctions (so/because), Diplomatic Phrasing',
    description: 'Time & place prepositions (in/on/at), cause-and-effect connectors (so, because, although), and polite workplace emails.',
    modulesCovered: 'Modules 5, 14 & 16'
  }
];

export const GRAND_100_ASSESSMENT_QUESTIONS: PracticeQuestion[] = [
  // ==========================================
  // SECTION 1: SENTENCE FOUNDATIONS & SVO (Q1 - Q15)
  // ==========================================
  {
    id: 'g100_1',
    type: 'multiple_choice',
    prompt: '1. Standard SVO Word Order: Identify the sentence with correct English word order.',
    options: [
      'Our marketing director reviewed the quarterly report yesterday.',
      'Reviewed our marketing director yesterday the quarterly report.',
      'Yesterday the quarterly report our marketing director reviewed.'
    ],
    correctIndex: 0,
    categoryTag: 'Sentence Architecture',
    adultContext: 'Workplace Operations',
    whyExplanation: 'Standard English statements require Subject (Our marketing director) + Verb (reviewed) + Object (the quarterly report) + Time Marker (yesterday).'
  },
  {
    id: 'g100_2',
    type: 'fill_blank',
    prompt: '2. Subject-Verb Agreement with Intervening Phrase',
    sentenceWithBlank: 'The binder with all client receipts ___ on the conference table.',
    options: ['is', 'are', 'were'],
    correctIndex: 0,
    grammarFocus: 'Singular head noun "The binder"',
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: 'The true subject is singular ("The binder"), not the plural prepositional object ("receipts"). Singular subject takes "is".'
  },
  {
    id: 'g100_3',
    type: 'sentence_correction',
    prompt: '3. Expressing Age in English',
    incorrectSentence: 'Our lead software architect has 38 years old.',
    correctSentence: 'Our lead software architect is 38 years old.',
    errorHighlight: 'has 38 years old',
    options: [
      'Our lead software architect is 38 years old.',
      'Our lead software architect have 38 years old.',
      'Our lead software architect is having 38 years old.'
    ],
    correctIndex: 0,
    categoryTag: 'BE Verb Mechanics',
    whyExplanation: 'English always uses the BE verb ("is / am / are") to express age. Never use "have" or "has".'
  },
  {
    id: 'g100_4',
    type: 'word_order',
    prompt: '4. Natural English Architecture: Place & Time Sequence',
    scrambledWords: ['at 9:00 AM', 'will convene', 'The board of directors', 'in Room 302'],
    correctSentence: 'The board of directors will convene in Room 302 at 9:00 AM',
    contextHint: 'Subject + Verb + Place + Time',
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'Natural English arranges adverbials with Place before Time: [in Room 302] + [at 9:00 AM].'
  },
  {
    id: 'g100_5',
    type: 'fill_blank',
    prompt: '5. BE Verb Negative Contraction',
    sentenceWithBlank: 'They ___ available for the call until after 2:00 PM.',
    options: ["aren't", "isn't", "doesn't"],
    correctIndex: 0,
    grammarFocus: 'Plural subject "They" with BE verb',
    categoryTag: 'BE Verb Mechanics',
    whyExplanation: '"They" is plural, so it pairs with "aren\'t" (are not).'
  },
  {
    id: 'g100_6',
    type: 'multiple_choice',
    prompt: '6. Identifying the Complete Sentence (Avoiding Sentence Fragments)',
    options: [
      'The project manager approved the revised timeline this morning.',
      'Because the project manager approved the revised timeline.',
      'The project manager approving the revised timeline on time.'
    ],
    correctIndex: 0,
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'A complete independent sentence requires an explicit Subject and a finite Verb. Option B is a dependent fragment; Option C lacks a finite verb.'
  },
  {
    id: 'g100_7',
    type: 'fill_blank',
    prompt: '7. Subject-Verb Agreement: Compound Subjects with "and"',
    sentenceWithBlank: 'Marcus and his assistant ___ the incoming warehouse deliveries.',
    options: ['manage', 'manages', 'is managing'],
    correctIndex: 0,
    grammarFocus: 'Compound plural subject takes plural verb',
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: 'Two singular subjects joined by "and" create a plural subject, requiring the plural verb "manage".'
  },
  {
    id: 'g100_8',
    type: 'sentence_correction',
    prompt: '8. Avoiding Double Subjects',
    incorrectSentence: 'My department manager she approved the budget increase.',
    correctSentence: 'My department manager approved the budget increase.',
    errorHighlight: 'manager she',
    options: [
      'My department manager approved the budget increase.',
      'My department manager, she approved the budget increase.',
      'She my department manager approved the budget increase.'
    ],
    correctIndex: 0,
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'Do not repeat the subject with a pronoun immediately after the noun phrase. Say "My department manager approved...".'
  },
  {
    id: 'g100_9',
    type: 'multiple_choice',
    prompt: '9. Agreement with "Each of" and "Every one of"',
    options: [
      'Each of the team members brings unique technical expertise.',
      'Each of the team members bring unique technical expertise.',
      'Each of the team members are bringing unique technical expertise.'
    ],
    correctIndex: 0,
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: '"Each" is grammatically singular and takes a singular verb ending in -s ("brings").'
  },
  {
    id: 'g100_10',
    type: 'fill_blank',
    prompt: '10. "There is" vs "There are" in Workplace Inventories',
    sentenceWithBlank: '___ several key amendments in the new supplier agreement.',
    options: ['There are', 'There is', 'There has'],
    correctIndex: 0,
    grammarFocus: 'Plural complement "several key amendments"',
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'When the following noun is plural ("several key amendments"), use "There are".'
  },
  {
    id: 'g100_11',
    type: 'multiple_choice',
    prompt: '11. Complement Placement after Linking Verbs',
    options: [
      'The client seemed satisfied with our initial prototype.',
      'The client seemed with our initial prototype satisfied.',
      'Satisfied the client seemed with our initial prototype.'
    ],
    correctIndex: 0,
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'Linking verbs (seem, look, feel, become) take their adjective complement directly after the verb: "seemed satisfied".'
  },
  {
    id: 'g100_12',
    type: 'fill_blank',
    prompt: '12. Collective Nouns in American Workplace English',
    sentenceWithBlank: 'The committee ___ its annual report every December.',
    options: ['publishes', 'publish', 'are publishing'],
    correctIndex: 0,
    grammarFocus: 'Singular collective unit "The committee"',
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: 'In standard business English, collective entities acting as a single unit take singular verbs ("publishes").'
  },
  {
    id: 'g100_13',
    type: 'sentence_correction',
    prompt: '13. Verb Form after "Neither / Nor" with Closest Subject',
    incorrectSentence: 'Neither the manager nor the employees was aware of the change.',
    correctSentence: 'Neither the manager nor the employees were aware of the change.',
    errorHighlight: 'employees was',
    options: [
      'Neither the manager nor the employees were aware of the change.',
      'Neither the manager nor the employees is aware of the change.',
      'Neither the manager nor the employees was being aware of the change.'
    ],
    correctIndex: 0,
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: 'With "neither... nor...", the verb agrees with the subject closest to it ("employees" -> "were").'
  },
  {
    id: 'g100_14',
    type: 'multiple_choice',
    prompt: '14. Direct Object vs Indirect Object Word Order',
    options: [
      'She sent the financial director a revised invoice yesterday.',
      'She sent to the financial director a revised invoice yesterday.',
      'She sent a revised invoice the financial director yesterday.'
    ],
    correctIndex: 0,
    categoryTag: 'Sentence Architecture',
    whyExplanation: 'Pattern: Verb + Indirect Object (the financial director) + Direct Object (a revised invoice). Alternatively: "sent a revised invoice to the financial director".'
  },
  {
    id: 'g100_15',
    type: 'fill_blank',
    prompt: '15. Agreement with Indefinite Pronouns ("Everyone / Somebody")',
    sentenceWithBlank: 'Everyone in the department ___ submitted their self-evaluation.',
    options: ['has', 'have', 'are'],
    correctIndex: 0,
    grammarFocus: '"Everyone" is grammatically singular',
    categoryTag: 'Subject-Verb Agreement',
    whyExplanation: '"Everyone", "everybody", and "someone" are grammatically singular and require singular verbs ("has submitted").'
  },

  // ==========================================
  // SECTION 2: NOUNS, ARTICLES & PRONOUNS (Q16 - Q30)
  // ==========================================
  {
    id: 'g100_16',
    type: 'fill_blank',
    prompt: '16. Uncountable Business Nouns: Information & Advice',
    sentenceWithBlank: 'The legal consultant gave us valuable ___ regarding the trademark.',
    options: ['advice', 'advices', 'an advice'],
    correctIndex: 0,
    grammarFocus: 'Uncountable noun "advice"',
    categoryTag: 'Nouns & Articles',
    whyExplanation: '"Advice" is uncountable in English. It cannot be pluralized with -s and cannot take "an".'
  },
  {
    id: 'g100_17',
    type: 'multiple_choice',
    prompt: '17. Object Pronouns in Compound Phrases',
    options: [
      'The company CEO invited David and me to the executive summit.',
      'The company CEO invited David and I to the executive summit.',
      'The company CEO invited David and myself to the executive summit.'
    ],
    correctIndex: 0,
    categoryTag: 'Pronouns',
    whyExplanation: 'As the object of the verb "invited", use the objective pronoun "me" (Test trick: "invited me", not "invited I").'
  },
  {
    id: 'g100_18',
    type: 'fill_blank',
    prompt: '18. Phonetic Article Rule (Vowel Sound vs Consonant Sound)',
    sentenceWithBlank: 'We submitted the proposal for ___ honest evaluation by the panel.',
    options: ['an', 'a', 'the no article'],
    correctIndex: 0,
    grammarFocus: '"Honest" begins with a silent \'h\' -> vowel sound /ɒ/',
    categoryTag: 'Nouns & Articles',
    whyExplanation: '"Honest" starts with a vowel sound (/ɒ/), requiring the indefinite article "an".'
  },
  {
    id: 'g100_19',
    type: 'sentence_correction',
    prompt: '19. Possessive Adjective vs Contraction ("Its" vs "It\'s")',
    incorrectSentence: 'The software company announced it\'s new pricing structure.',
    correctSentence: 'The software company announced its new pricing structure.',
    errorHighlight: "it's new pricing",
    options: [
      'The software company announced its new pricing structure.',
      'The software company announced its\' new pricing structure.',
      'The software company announced their new pricing structure for one company.'
    ],
    correctIndex: 0,
    categoryTag: 'Pronouns',
    whyExplanation: '"Its" without an apostrophe is the possessive form. "It\'s" is a contraction for "it is" or "it has".'
  },
  {
    id: 'g100_20',
    type: 'fill_blank',
    prompt: '20. Uncountable Workplace Equipment',
    sentenceWithBlank: 'Our logistics warehouse purchased new ___ to streamline packaging.',
    options: ['equipment', 'equipments', 'an equipment'],
    correctIndex: 0,
    grammarFocus: '"Equipment" is strictly uncountable',
    categoryTag: 'Nouns & Articles',
    whyExplanation: '"Equipment" is uncountable in English. For individual items, say "pieces of equipment".'
  },
  {
    id: 'g100_21',
    type: 'multiple_choice',
    prompt: '21. Reflexive Pronouns Correct Usage',
    options: [
      'The engineers solved the technical glitch themselves.',
      'The engineers solved the technical glitch theirselves.',
      'The engineers solved the technical glitch themself.'
    ],
    correctIndex: 0,
    categoryTag: 'Pronouns',
    whyExplanation: 'The plural reflexive pronoun for "they/the engineers" is "themselves" ("theirselves" is non-standard).'
  },
  {
    id: 'g100_22',
    type: 'fill_blank',
    prompt: '22. Indefinite Article with Initial "U" Consonant Sound',
    sentenceWithBlank: 'The training coordinator organized ___ European customer service workshop.',
    options: ['a', 'an', 'the no article'],
    correctIndex: 0,
    grammarFocus: '"European" starts with a /j/ consonant sound',
    categoryTag: 'Nouns & Articles',
    whyExplanation: '"European" begins with the consonant glide /j/ (sound like "you"), so it takes "a", not "an".'
  },
  {
    id: 'g100_23',
    type: 'multiple_choice',
    prompt: '23. Plural Irregular Business Nouns',
    options: [
      'We analyzed market phenomena across three different countries.',
      'We analyzed market phenomenons across three different countries.',
      'We analyzed market phenomenas across three different countries.'
    ],
    correctIndex: 0,
    categoryTag: 'Nouns & Articles',
    whyExplanation: 'The irregular plural of Greek origin "phenomenon" is "phenomena".'
  },
  {
    id: 'g100_24',
    type: 'fill_blank',
    prompt: '24. Definite Article with Specific Reference',
    sentenceWithBlank: 'Please email me ___ report that we discussed in this morning’s meeting.',
    options: ['the', 'a', 'an'],
    correctIndex: 0,
    grammarFocus: 'Specific identified item -> "the"',
    categoryTag: 'Nouns & Articles',
    whyExplanation: 'Because the report is uniquely specified by the clause "that we discussed", use the definite article "the".'
  },
  {
    id: 'g100_25',
    type: 'sentence_correction',
    prompt: '25. Possessive with Plural Nouns Ending in -S',
    incorrectSentence: 'All employee\'s feedback will be reviewed by senior management.',
    correctSentence: 'All employees\' feedback will be reviewed by senior management.',
    errorHighlight: "employee's",
    options: [
      'All employees\' feedback will be reviewed by senior management.',
      'All employee feedback will be review.',
      'All employees feedback will be reviewed without apostrophe.'
    ],
    correctIndex: 0,
    categoryTag: 'Nouns & Articles',
    whyExplanation: 'For regular plural nouns ending in -s, the possessive is formed by adding only an apostrophe at the end ("employees\'").'
  },
  {
    id: 'g100_26',
    type: 'fill_blank',
    prompt: '26. Quantifier Precision: "Few" vs "Little"',
    sentenceWithBlank: 'We have ___ time before the client arrives, so let’s review the slides quickly.',
    options: ['little', 'few', 'a few'],
    correctIndex: 0,
    grammarFocus: 'Uncountable "time" with negative nuance -> little',
    categoryTag: 'Nouns & Articles',
    whyExplanation: '"Time" (duration) is uncountable and requires "little" to indicate a scarce amount.'
  },
  {
    id: 'g100_27',
    type: 'multiple_choice',
    prompt: '27. Demonstrative Pronouns: Near vs Far & Plural',
    options: [
      'These documents on my desk need Ms. Maria’s signature.',
      'This documents on my desk need Ms. Maria’s signature.',
      'Those document on my desk need Ms. Maria’s signature.'
    ],
    correctIndex: 0,
    categoryTag: 'Pronouns',
    whyExplanation: 'For nearby plural objects ("documents on my desk"), use "These".'
  },
  {
    id: 'g100_28',
    type: 'fill_blank',
    prompt: '28. Pronoun Agreement with Antecedent Gender Neutrality',
    sentenceWithBlank: 'Every employee should submit ___ timesheet by 5:00 PM on Friday.',
    options: ['their', 'his/her or their', 'its'],
    correctIndex: 0,
    grammarFocus: 'Singular antecedent with neutral possessive "their"',
    categoryTag: 'Pronouns',
    whyExplanation: 'In modern professional English, the singular "their" is standard when referring back to indefinite nouns like "every employee".'
  },
  {
    id: 'g100_29',
    type: 'multiple_choice',
    prompt: '29. Plural Forms of Compound Nouns',
    options: [
      'The managing directors convened an emergency session.',
      'The manages director convened an emergency session.',
      'The managing directores convened an emergency session.'
    ],
    correctIndex: 0,
    categoryTag: 'Nouns & Articles',
    whyExplanation: 'In compound noun titles like "managing director", pluralize the principal noun: "managing directors".'
  },
  {
    id: 'g100_30',
    type: 'fill_blank',
    prompt: '30. Zero Article with General Uncountable Concepts',
    sentenceWithBlank: '___ patience is essential when negotiating international contracts.',
    options: ['No article (Patience)', 'The patience', 'A patience'],
    correctIndex: 0,
    grammarFocus: 'Abstract uncountable noun in general sense',
    categoryTag: 'Nouns & Articles',
    whyExplanation: 'Abstract nouns used in a general statement ("Patience is essential...") take no article.'
  },

  // ==========================================
  // SECTION 3: PRESENT TENSES & STATIVES (Q31 - Q45)
  // ==========================================
  {
    id: 'g100_31',
    type: 'fill_blank',
    prompt: '31. Present Simple Third-Person Singular -S',
    sentenceWithBlank: 'Our regional supervisor ___ every branch office twice a month.',
    options: ['visits', 'visit', 'is visit'],
    correctIndex: 0,
    grammarFocus: 'Third-person singular "supervisor" takes -s',
    categoryTag: 'Present Tenses',
    whyExplanation: 'Third-person singular subjects (he/she/supervisor) require the verb to end in -s ("visits") in Present Simple.'
  },
  {
    id: 'g100_32',
    type: 'sentence_correction',
    prompt: '32. Stative Verb "Agree" in Professional English',
    incorrectSentence: 'I am totally agree with the proposal submitted by marketing.',
    correctSentence: 'I totally agree with the proposal submitted by marketing.',
    errorHighlight: 'am totally agree',
    options: [
      'I totally agree with the proposal submitted by marketing.',
      'I am totally agreeing with the proposal submitted by marketing.',
      'I agreed totally now with the proposal submitted by marketing.'
    ],
    correctIndex: 0,
    categoryTag: 'Stative Verbs',
    whyExplanation: '"Agree" is an active verb in English, never an adjective. Say "I agree", never "I am agree".'
  },
  {
    id: 'g100_33',
    type: 'multiple_choice',
    prompt: '33. Present Simple vs Present Continuous Distinction',
    options: [
      'She usually works from home on Fridays, but today she is working in the headquarters.',
      'She is usually working from home on Fridays, but today she works in the headquarters.',
      'She usually work from home on Fridays, but today she is work in the headquarters.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'Habits and routines use Present Simple ("usually works"); temporary situations or actions happening right now use Present Continuous ("is working").'
  },
  {
    id: 'g100_34',
    type: 'fill_blank',
    prompt: '34. Stative Verb of Perception: "Understand"',
    sentenceWithBlank: 'I ___ your concerns regarding the tight production deadline.',
    options: ['understand', 'am understanding', 'am understand'],
    correctIndex: 0,
    grammarFocus: 'Stative cognitive verb "understand"',
    categoryTag: 'Stative Verbs',
    whyExplanation: 'Mental state verbs like "understand", "know", and "believe" are not used in continuous forms in standard English.'
  },
  {
    id: 'g100_35',
    type: 'multiple_choice',
    prompt: '35. Present Simple Negative Auxiliary for Third-Person',
    options: [
      'He doesn’t require any additional training on the new CRM system.',
      'He don’t require any additional training on the new CRM system.',
      'He doesn’t requires any additional training on the new CRM system.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'Third-person singular negative requires "doesn\'t" followed by the base form of the main verb ("require").'
  },
  {
    id: 'g100_36',
    type: 'fill_blank',
    prompt: '36. Present Continuous for Current Ongoing Activity',
    sentenceWithBlank: 'Listen, the HR director ___ the new wellness initiative right now.',
    options: ['is explaining', 'explains', 'explain'],
    correctIndex: 0,
    grammarFocus: 'Action happening "right now" -> Present Continuous',
    categoryTag: 'Present Tenses',
    whyExplanation: 'The time marker "right now" indicates an ongoing action, requiring Present Continuous: "is explaining".'
  },
  {
    id: 'g100_37',
    type: 'sentence_correction',
    prompt: '37. Stative Verb of Possession: "Have" vs "Own"',
    incorrectSentence: 'We are having three delivery trucks in our current fleet.',
    correctSentence: 'We have three delivery trucks in our current fleet.',
    errorHighlight: 'are having',
    options: [
      'We have three delivery trucks in our current fleet.',
      'We having three delivery trucks in our current fleet.',
      'We are have three delivery trucks in our current fleet.'
    ],
    correctIndex: 0,
    categoryTag: 'Stative Verbs',
    whyExplanation: 'When "have" signifies ownership/possession, it is stative and cannot be used in the continuous tense. Say "We have".'
  },
  {
    id: 'g100_38',
    type: 'fill_blank',
    prompt: '38. Spelling of Third-Person Verbs Ending in Consonant + Y',
    sentenceWithBlank: 'Our sales executive ___ all customer inquiries into the tracking sheet.',
    options: ['copies', 'copys', 'copyes'],
    correctIndex: 0,
    grammarFocus: 'Consonant + y changes to -ies',
    categoryTag: 'Present Tenses',
    whyExplanation: 'Verbs ending in consonant + y (copy, reply, study) change the "y" to "i" and add "-es": "copies".'
  },
  {
    id: 'g100_39',
    type: 'multiple_choice',
    prompt: '39. Frequency Adverb Position with Main Verbs',
    options: [
      'We always check the budget balance before placing an order.',
      'We check always the budget balance before placing an order.',
      'Always we check the budget balance before placing an order.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'Adverbs of frequency (always, often, usually, rarely) go immediately before the main verb: "always check".'
  },
  {
    id: 'g100_40',
    type: 'fill_blank',
    prompt: '40. Present Continuous with Future Fixed Arrangement',
    sentenceWithBlank: 'Ms. Maria ___ the corporate client tomorrow at 11:00 AM.',
    options: ['is meeting', 'meets', 'is meet'],
    correctIndex: 0,
    grammarFocus: 'Present Continuous for confirmed future plans',
    categoryTag: 'Present Tenses',
    whyExplanation: 'Present Continuous is frequently used for confirmed personal or business arrangements in the near future.'
  },
  {
    id: 'g100_41',
    type: 'sentence_correction',
    prompt: '41. Frequency Adverb Position with BE Verb',
    incorrectSentence: 'Our project coordinator always is on time for standup.',
    correctSentence: 'Our project coordinator is always on time for standup.',
    errorHighlight: 'always is',
    options: [
      'Our project coordinator is always on time for standup.',
      'Our project coordinator is on time always for standup.',
      'Always our project coordinator is on time for standup.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'With the BE verb (am/is/are), frequency adverbs come AFTER the verb: "is always".'
  },
  {
    id: 'g100_42',
    type: 'fill_blank',
    prompt: '42. Stative Verb of Emotion: "Prefer"',
    sentenceWithBlank: 'Most of our clients ___ digital receipts over paper invoices.',
    options: ['prefer', 'are preferring', 'prefers'],
    correctIndex: 0,
    grammarFocus: 'Stative verb "prefer" with plural subject "clients"',
    categoryTag: 'Stative Verbs',
    whyExplanation: '"Prefer" is a stative verb of preference and takes Present Simple with plural subject: "prefer".'
  },
  {
    id: 'g100_43',
    type: 'multiple_choice',
    prompt: '43. Present Simple in Scientific or Business Facts',
    options: [
      'The currency exchange rate fluctuates based on global market conditions.',
      'The currency exchange rate is fluctuating based on global market conditions general.',
      'The currency exchange rate fluctuate based on global market conditions.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'General truths and fundamental operational facts use Present Simple singular: "fluctuates".'
  },
  {
    id: 'g100_44',
    type: 'fill_blank',
    prompt: '44. Present Simple with Time Expressions ("Every Monday")',
    sentenceWithBlank: 'The IT department ___ security patches every Sunday evening.',
    options: ['installs', 'install', 'is installing'],
    correctIndex: 0,
    grammarFocus: 'Habitual repeated schedule takes Present Simple',
    categoryTag: 'Present Tenses',
    whyExplanation: '"Every Sunday evening" signals a recurring routine, requiring Present Simple with singular IT department: "installs".'
  },
  {
    id: 'g100_45',
    type: 'sentence_correction',
    prompt: '45. Third-Person Singular with "Have" -> "Has"',
    incorrectSentence: 'The senior account manager have the updated spreadsheets.',
    correctSentence: 'The senior account manager has the updated spreadsheets.',
    errorHighlight: 'have the',
    options: [
      'The senior account manager has the updated spreadsheets.',
      'The senior account manager is having the updated spreadsheets.',
      'The senior account manager haves the updated spreadsheets.'
    ],
    correctIndex: 0,
    categoryTag: 'Present Tenses',
    whyExplanation: 'The irregular third-person singular of "have" is "has".'
  },

  // ==========================================
  // SECTION 4: PAST & FUTURE TENSES (Q46 - Q60)
  // ==========================================
  {
    id: 'g100_46',
    type: 'fill_blank',
    prompt: '46. Past Simple with Specific Past Time Marker',
    sentenceWithBlank: 'Our logistics team ___ the shipment yesterday afternoon.',
    options: ['dispatched', 'dispatches', 'was dispatch'],
    correctIndex: 0,
    grammarFocus: 'Past Simple with completed time "yesterday afternoon"',
    categoryTag: 'Past Tenses',
    whyExplanation: 'A completed past time marker ("yesterday afternoon") requires the Past Simple form "dispatched".'
  },
  {
    id: 'g100_47',
    type: 'sentence_correction',
    prompt: '47. Negative Past Simple Auxiliary Rule ("didn\'t" + Base Form)',
    incorrectSentence: 'I didn’t received the meeting link for today’s session.',
    correctSentence: 'I didn’t receive the meeting link for today’s session.',
    errorHighlight: 'didn’t received',
    options: [
      'I didn’t receive the meeting link for today’s session.',
      'I didn’t receiving the meeting link for today’s session.',
      'I not received the meeting link for today’s session.'
    ],
    correctIndex: 0,
    categoryTag: 'Past Tenses',
    whyExplanation: 'After the auxiliary "didn\'t", the main verb MUST revert to its base form ("receive"). Do not double-mark past tense.'
  },
  {
    id: 'g100_48',
    type: 'fill_blank',
    prompt: '48. High-Frequency Irregular Past Verb: "Bring"',
    sentenceWithBlank: 'The supplier ___ product samples to our negotiation meeting last week.',
    options: ['brought', 'brang', 'bringed'],
    correctIndex: 0,
    grammarFocus: 'Irregular past form of "bring" -> brought',
    categoryTag: 'Past Tenses',
    whyExplanation: '"Bring" is irregular; its Past Simple form is "brought".'
  },
  {
    id: 'g100_49',
    type: 'multiple_choice',
    prompt: '49. Future Spontaneous Decision vs Prior Plan',
    options: [
      'The phone is ringing; I will answer it right now.',
      'The phone is ringing; I am going to answering it right now.',
      'The phone is ringing; I will answering it right now.'
    ],
    correctIndex: 0,
    categoryTag: 'Future Forms',
    whyExplanation: 'Spontaneous, instant decisions made at the moment of speaking use "will" + base verb: "I will answer it".'
  },
  {
    id: 'g100_50',
    type: 'fill_blank',
    prompt: '50. Future Plan / Intention with "Going to"',
    sentenceWithBlank: 'We ___ launch the new product website in early October.',
    options: ['are going to', 'will going to', 'going to'],
    correctIndex: 0,
    grammarFocus: 'BE + going to + base verb',
    categoryTag: 'Future Forms',
    whyExplanation: 'Pre-planned intentions use "are going to" + base verb.'
  },
  {
    id: 'g100_51',
    type: 'multiple_choice',
    prompt: '51. Irregular Past Verb: "Write" & "Send"',
    options: [
      'She wrote the formal memorandum and sent it to the client yesterday.',
      'She writed the formal memorandum and sended it to the client yesterday.',
      'She wrote the formal memorandum and sended it to the client yesterday.'
    ],
    correctIndex: 0,
    categoryTag: 'Past Tenses',
    whyExplanation: 'Both verbs are irregular in past tense: "write" -> "wrote" and "send" -> "sent".'
  },
  {
    id: 'g100_52',
    type: 'fill_blank',
    prompt: '52. Past Continuous for Interrupted Background Action',
    sentenceWithBlank: 'While we ___ the financial budget, the power went out.',
    options: ['were discussing', 'discussed', 'are discussing'],
    correctIndex: 0,
    grammarFocus: 'Long background past action interrupted by short past event',
    categoryTag: 'Past Tenses',
    whyExplanation: 'The background ongoing action in the past uses Past Continuous: "were discussing".'
  },
  {
    id: 'g100_53',
    type: 'sentence_correction',
    prompt: '53. Irregular Past Verb: "Choose"',
    incorrectSentence: 'The board choosed the overseas supplier for the contract.',
    correctSentence: 'The board chose the overseas supplier for the contract.',
    errorHighlight: 'choosed',
    options: [
      'The board chose the overseas supplier for the contract.',
      'The board chosen the overseas supplier for the contract.',
      'The board did chose the overseas supplier for the contract.'
    ],
    correctIndex: 0,
    categoryTag: 'Past Tenses',
    whyExplanation: 'The Past Simple of "choose" is irregular: "chose".'
  },
  {
    id: 'g100_54',
    type: 'fill_blank',
    prompt: '54. Future Predictions Based on Clear Present Evidence',
    sentenceWithBlank: 'Look at those heavy black clouds; it ___ rain before our commute.',
    options: ['is going to', 'will to', 'is going'],
    correctIndex: 0,
    grammarFocus: 'Prediction with visible evidence -> "is going to"',
    categoryTag: 'Future Forms',
    whyExplanation: 'Predictions based on immediate physical evidence use "is going to rain".'
  },
  {
    id: 'g100_55',
    type: 'multiple_choice',
    prompt: '55. Regular Past -ed Pronunciation Categories',
    options: [
      'The words "wanted" and "needed" add an extra syllable (/ɪd/).',
      'The words "worked" and "walked" add an extra syllable (/ɪd/).',
      'The words "planned" and "called" add an extra syllable (/ɪd/).'
    ],
    correctIndex: 0,
    categoryTag: 'Past Tenses',
    whyExplanation: 'Only verbs ending in /t/ or /d/ sounds (like want, need, decide) add an extra syllable (/ɪd/) when adding -ed.'
  },
  {
    id: 'g100_56',
    type: 'fill_blank',
    prompt: '56. Irregular Past Verb: "Fly" & "Cost"',
    sentenceWithBlank: 'The senior engineers ___ to Tokyo last month, and the trip ___ $4,000.',
    options: ['flew / cost', 'flowed / costed', 'flew / costed'],
    correctIndex: 0,
    grammarFocus: 'Past forms: fly -> flew, cost -> cost',
    categoryTag: 'Past Tenses',
    whyExplanation: '"Fly" becomes "flew" and "cost" remains "cost" in the Past Simple.'
  },
  {
    id: 'g100_57',
    type: 'sentence_correction',
    prompt: '57. Modal Auxiliary in Future Statements ("Will")',
    incorrectSentence: 'We will to finish the architectural drawings by Tuesday.',
    correctSentence: 'We will finish the architectural drawings by Tuesday.',
    errorHighlight: 'will to finish',
    options: [
      'We will finish the architectural drawings by Tuesday.',
      'We will finishing the architectural drawings by Tuesday.',
      'We will finished the architectural drawings by Tuesday.'
    ],
    correctIndex: 0,
    categoryTag: 'Future Forms',
    whyExplanation: 'Modal "will" is followed directly by the bare infinitive (base verb without "to"): "will finish".'
  },
  {
    id: 'g100_58',
    type: 'fill_blank',
    prompt: '58. Past Simple of "BE" with Plural Workplace Subjects',
    sentenceWithBlank: 'All department managers ___ present at yesterday’s safety review.',
    options: ['were', 'was', 'are'],
    correctIndex: 0,
    grammarFocus: 'Plural subject with past BE verb',
    categoryTag: 'Past Tenses',
    whyExplanation: 'Plural subject ("All department managers") pairs with the plural past BE verb "were".'
  },
  {
    id: 'g100_59',
    type: 'multiple_choice',
    prompt: '59. Timetables & Schedules using Present Simple for Future',
    options: [
      'The train to the airport departs at 7:15 AM tomorrow.',
      'The train to the airport will departing at 7:15 AM tomorrow.',
      'The train to the airport is depart at 7:15 AM tomorrow.'
    ],
    correctIndex: 0,
    categoryTag: 'Future Forms',
    whyExplanation: 'Official public schedules and fixed transportation timetables naturally use the Present Simple ("departs").'
  },
  {
    id: 'g100_60',
    type: 'fill_blank',
    prompt: '60. Irregular Past Verb: "Speak" & "Tell"',
    sentenceWithBlank: 'Ms. Maria ___ to the client and ___ them about the updated schedule.',
    options: ['spoke / told', 'speaked / telled', 'spoke / telled'],
    correctIndex: 0,
    grammarFocus: 'Irregular past: speak -> spoke, tell -> told',
    categoryTag: 'Past Tenses',
    whyExplanation: 'Both verbs are irregular: "spoke" and "told".'
  },

  // ==========================================
  // SECTION 5: QUESTIONS & NEGATIONS (Q61 - Q75)
  // ==========================================
  {
    id: 'g100_61',
    type: 'multiple_choice',
    prompt: '61. QUASM Information Question Word Order',
    options: [
      'Where does the director usually park his company car?',
      'Where the director usually parks his company car?',
      'Where do the director usually park his company car?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Information questions follow QUASM: Question Word (Where) + Auxiliary (does) + Subject (the director) + Adverb/Main Verb (usually park).'
  },
  {
    id: 'g100_62',
    type: 'fill_blank',
    prompt: '62. Yes/No Question with Third-Person Singular',
    sentenceWithBlank: '___ your supervisor approve travel expense reimbursements?',
    options: ['Does', 'Do', 'Is'],
    correctIndex: 0,
    grammarFocus: 'Auxiliary "Does" for singular "supervisor"',
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Singular third-person subject ("your supervisor") takes the auxiliary "Does".'
  },
  {
    id: 'g100_63',
    type: 'sentence_correction',
    prompt: '63. Past Simple Question Auxiliary & Base Verb',
    incorrectSentence: 'Did you went to the accounting department this morning?',
    correctSentence: 'Did you go to the accounting department this morning?',
    errorHighlight: 'Did you went',
    options: [
      'Did you go to the accounting department this morning?',
      'Did you gone to the accounting department this morning?',
      'Were you go to the accounting department this morning?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'In a question with "Did", the main verb MUST remain in base form ("go"), not past form ("went").'
  },
  {
    id: 'g100_64',
    type: 'fill_blank',
    prompt: '64. Subject Question (No Auxiliary Needed)',
    sentenceWithBlank: 'Who ___ the final approval on the commercial lease agreement?',
    options: ['signed', 'did sign', 'did signed'],
    correctIndex: 0,
    grammarFocus: 'Subject question asks about the subject -> use past verb directly',
    categoryTag: 'Questions & Negations',
    whyExplanation: 'When "Who" is the subject of the sentence, no auxiliary "did" is needed in simple past affirmative questions: "Who signed...?".'
  },
  {
    id: 'g100_65',
    type: 'multiple_choice',
    prompt: '65. Question with BE Verb Inversion',
    options: [
      'Is the presentation room ready for the client briefing?',
      'Does the presentation room is ready for the client briefing?',
      'The presentation room is ready for the client briefing?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Questions with the BE verb invert the verb and subject: "Is the presentation room ready...?".'
  },
  {
    id: 'g100_66',
    type: 'fill_blank',
    prompt: '66. "How often" for Frequency Inquiries',
    sentenceWithBlank: '___ does the safety committee conduct fire drills?',
    options: ['How often', 'How many', 'How long'],
    correctIndex: 0,
    grammarFocus: 'Asking about frequency -> How often',
    categoryTag: 'Questions & Negations',
    whyExplanation: '"How often" is used to ask about the frequency of an event.'
  },
  {
    id: 'g100_67',
    type: 'sentence_correction',
    prompt: '67. Negative Question Word Order',
    incorrectSentence: 'Why you didn’t reply to the urgent email from Ms. Maria?',
    correctSentence: 'Why didn’t you reply to the urgent email from Ms. Maria?',
    errorHighlight: 'Why you didn’t reply',
    options: [
      'Why didn’t you reply to the urgent email from Ms. Maria?',
      'Why you not replied to the urgent email from Ms. Maria?',
      'Why did you not replied to the urgent email from Ms. Maria?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Question words are followed immediately by the auxiliary verb: "Why didn\'t you reply...?".'
  },
  {
    id: 'g100_68',
    type: 'fill_blank',
    prompt: '68. Question Tag with Positive Statement',
    sentenceWithBlank: 'The quarterly financial results were positive, ___?',
    options: ["weren't they", "wasn't it", "isn't it"],
    correctIndex: 0,
    grammarFocus: 'Positive plural past statement -> negative tag "weren\'t they"',
    categoryTag: 'Questions & Negations',
    whyExplanation: 'A positive statement with plural "results were" takes the negative tag "weren\'t they?".'
  },
  {
    id: 'g100_69',
    type: 'multiple_choice',
    prompt: '69. Indirect Polite Questions (No Inversion in Embedded Clause)',
    options: [
      'Could you please tell me where the conference room is?',
      'Could you please tell me where is the conference room?',
      'Could you please tell me where does the conference room be?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'In indirect/embedded questions ("Could you tell me..."), the noun clause uses standard statement order: "where the conference room is".'
  },
  {
    id: 'g100_70',
    type: 'fill_blank',
    prompt: '70. "Whose" for Inquiring Ownership',
    sentenceWithBlank: '___ laptop was left in Conference Room B after the webinar?',
    options: ['Whose', "Who's", 'Which of'],
    correctIndex: 0,
    grammarFocus: 'Possessive question word "Whose"',
    categoryTag: 'Questions & Negations',
    whyExplanation: '"Whose" asks about possession/ownership. "Who\'s" means "who is".'
  },
  {
    id: 'g100_71',
    type: 'sentence_correction',
    prompt: '71. Double Negation Avoidance ("nobody / anything")',
    incorrectSentence: 'I didn’t see nobody in the executive suite after hours.',
    correctSentence: 'I didn’t see anybody in the executive suite after hours.',
    errorHighlight: 'didn’t see nobody',
    options: [
      'I didn’t see anybody in the executive suite after hours.',
      'I saw not nobody in the executive suite after hours.',
      'I didn’t saw anybody in the executive suite after hours.'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Avoid double negatives in standard English. Pair "didn\'t see" with "anybody" (or say "I saw nobody").'
  },
  {
    id: 'g100_72',
    type: 'fill_blank',
    prompt: '72. Questioning Duration with "How long"',
    sentenceWithBlank: '___ have you worked as a lead accountant for this firm?',
    options: ['How long', 'How many', 'How much time'],
    correctIndex: 0,
    grammarFocus: 'Duration inquiry -> How long',
    categoryTag: 'Questions & Negations',
    whyExplanation: '"How long" is the standard phrase to inquire about duration of time.'
  },
  {
    id: 'g100_73',
    type: 'multiple_choice',
    prompt: '73. Present Continuous Question Structure',
    options: [
      'Are they negotiating the contract terms right now?',
      'Do they negotiating the contract terms right now?',
      'Is they negotiating the contract terms right now?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Present Continuous questions use BE auxiliary (Are) + Subject (they) + Verb-ing (negotiating).'
  },
  {
    id: 'g100_74',
    type: 'fill_blank',
    prompt: '74. Negative Imperative Instructions',
    sentenceWithBlank: '___ share confidential client passwords over unencrypted email.',
    options: ['Do not', 'Not', 'No to'],
    correctIndex: 0,
    grammarFocus: 'Negative command -> Do not / Don\'t + base verb',
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Negative imperatives are formed with "Do not" (or "Don\'t") followed by the base verb.'
  },
  {
    id: 'g100_75',
    type: 'sentence_correction',
    prompt: '75. Modal Question Inversion ("Can / Could")',
    incorrectSentence: 'You can assist me with the data migration tomorrow?',
    correctSentence: 'Can you assist me with the data migration tomorrow?',
    errorHighlight: 'You can assist me with',
    options: [
      'Can you assist me with the data migration tomorrow?',
      'Do you can assist me with the data migration tomorrow?',
      'Can you to assist me with the data migration tomorrow?'
    ],
    correctIndex: 0,
    categoryTag: 'Questions & Negations',
    whyExplanation: 'Modal questions invert the modal verb and subject: "Can you assist...?". Never use "do" with modal verbs.'
  },

  // ==========================================
  // SECTION 6: MODALS, CONDITIONALS & MODIFIERS (Q76 - Q90)
  // ==========================================
  {
    id: 'g100_76',
    type: 'fill_blank',
    prompt: '76. Polite Workplace Request with "Could"',
    sentenceWithBlank: '___ you please send me the revised budget spreadsheet before 3:00 PM?',
    options: ['Could', 'Must', 'Should'],
    correctIndex: 0,
    grammarFocus: 'Polite modal request "Could you please..."',
    categoryTag: 'Modals & Politeness',
    whyExplanation: '"Could you please...?" is the international business standard for courteous, respectful workplace requests.'
  },
  {
    id: 'g100_77',
    type: 'sentence_correction',
    prompt: '77. Modals Followed Directly by Bare Infinitive',
    incorrectSentence: 'All employees must to wear safety goggles in the testing lab.',
    correctSentence: 'All employees must wear safety goggles in the testing lab.',
    errorHighlight: 'must to wear',
    options: [
      'All employees must wear safety goggles in the testing lab.',
      'All employees must wearing safety goggles in the testing lab.',
      'All employees must to wearing safety goggles in the testing lab.'
    ],
    correctIndex: 0,
    categoryTag: 'Modals & Politeness',
    whyExplanation: 'Modal verbs (must, can, could, should, will) are followed directly by the base verb without "to": "must wear".'
  },
  {
    id: 'g100_78',
    type: 'multiple_choice',
    prompt: '78. First Conditional Clause Tense Rules',
    options: [
      'If the client approves the proposal today, we will start work on Monday.',
      'If the client will approve the proposal today, we will start work on Monday.',
      'If the client approves the proposal today, we start work on Monday future.'
    ],
    correctIndex: 0,
    categoryTag: 'Conditionals',
    whyExplanation: 'In First Conditional sentences: If + Present Simple ("approves"), Result Clause with will + base verb ("will start"). Never put "will" in the if-clause.'
  },
  {
    id: 'g100_79',
    type: 'fill_blank',
    prompt: '79. Comparative Form of Multi-Syllable Adjectives',
    sentenceWithBlank: 'The automated software solution is much ___ than manual bookkeeping.',
    options: ['more efficient', 'efficienter', 'more efficienter'],
    correctIndex: 0,
    grammarFocus: 'Multi-syllable adjective comparative: "more" + adjective',
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: 'Adjectives with three or more syllables (e-ffi-cient) form their comparative using "more efficient".'
  },
  {
    id: 'g100_80',
    type: 'multiple_choice',
    prompt: '80. Superlative Adjective with Definite Article',
    options: [
      'This is the most comprehensive grammar curriculum available for adults.',
      'This is most comprehensive grammar curriculum available for adults.',
      'This is the comprehensiveest grammar curriculum available for adults.'
    ],
    correctIndex: 0,
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: 'Superlatives of long adjectives require "the most" + adjective: "the most comprehensive".'
  },
  {
    id: 'g100_81',
    type: 'fill_blank',
    prompt: '81. Modal of Workplace Obligation / Rule',
    sentenceWithBlank: 'Visitors ___ sign in at the security desk before entering the building.',
    options: ['have to', 'ought', 'can to'],
    correctIndex: 0,
    grammarFocus: 'External rule/obligation -> "have to"',
    categoryTag: 'Modals & Politeness',
    whyExplanation: '"Have to" expresses external rules and policies established by workplace authorities.'
  },
  {
    id: 'g100_82',
    type: 'sentence_correction',
    prompt: '82. Conditional Sentence Punctuation (Comma Rule)',
    incorrectSentence: 'If the shipment arrives early we will notify the warehouse supervisor.',
    correctSentence: 'If the shipment arrives early, we will notify the warehouse supervisor.',
    errorHighlight: 'early we',
    options: [
      'If the shipment arrives early, we will notify the warehouse supervisor.',
      'If the shipment will arrive early, we notify.',
      'When the shipment arrives early so we will notify.'
    ],
    correctIndex: 0,
    categoryTag: 'Conditionals',
    whyExplanation: 'When the "if" dependent clause comes before the main clause, it must be followed by a comma.'
  },
  {
    id: 'g100_83',
    type: 'fill_blank',
    prompt: '83. Irregular Adverb Form: "Well" vs "Good"',
    sentenceWithBlank: 'The new communication software functions very ___ under heavy traffic.',
    options: ['well', 'good', 'goodly'],
    correctIndex: 0,
    grammarFocus: 'Adverb modifying verb "functions" -> well',
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: '"Well" is the adverb that modifies verbs ("functions well"). "Good" is an adjective that modifies nouns.'
  },
  {
    id: 'g100_84',
    type: 'multiple_choice',
    prompt: '84. Modal of Soft Advice: "Should"',
    options: [
      'You should back up your project files before running the update.',
      'You should to back up your project files before running the update.',
      'You should backing up your project files before running the update.'
    ],
    correctIndex: 0,
    categoryTag: 'Modals & Politeness',
    whyExplanation: '"Should" expresses recommendations and is followed by the bare infinitive "back up".'
  },
  {
    id: 'g100_85',
    type: 'fill_blank',
    prompt: '85. Zero Conditional for General Workplace Rules',
    sentenceWithBlank: 'If an invoice ___ missing tax numbers, accounting rejects it automatically.',
    options: ['is', 'will be', 'are'],
    correctIndex: 0,
    grammarFocus: 'Zero conditional uses Present Simple in both clauses',
    categoryTag: 'Conditionals',
    whyExplanation: 'Zero conditional for automatic facts: If + Present Simple ("is"), Present Simple ("rejects").'
  },
  {
    id: 'g100_86',
    type: 'sentence_correction',
    prompt: '86. Comparative with Irregular Adjective: "Better"',
    incorrectSentence: 'Our second quarter performance was more good than our first.',
    correctSentence: 'Our second quarter performance was better than our first.',
    errorHighlight: 'more good',
    options: [
      'Our second quarter performance was better than our first.',
      'Our second quarter performance was gooder than our first.',
      'Our second quarter performance was more better than our first.'
    ],
    correctIndex: 0,
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: 'The comparative of "good" is irregular: "better" (never "more good" or "gooder").'
  },
  {
    id: 'g100_87',
    type: 'fill_blank',
    prompt: '87. Modal of Prohibition: "Must not / Cannot"',
    sentenceWithBlank: 'Employees ___ share private client data without written authorization.',
    options: ['must not', 'don’t have to', 'might not'],
    correctIndex: 0,
    grammarFocus: 'Strict prohibition -> "must not"',
    categoryTag: 'Modals & Politeness',
    whyExplanation: '"Must not" indicates a strict legal or workplace prohibition. "Don\'t have to" merely means lack of necessity.'
  },
  {
    id: 'g100_88',
    type: 'multiple_choice',
    prompt: '88. Adjective Order (Opinion + Size + Age + Color + Material)',
    options: [
      'We purchased a beautiful large new oak conference table.',
      'We purchased an oak new large beautiful conference table.',
      'We purchased a large beautiful oak new conference table.'
    ],
    correctIndex: 0,
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: 'Royal order of adjectives: Opinion (beautiful) + Size (large) + Age (new) + Material (oak).'
  },
  {
    id: 'g100_89',
    type: 'fill_blank',
    prompt: '89. Modal Expressing Possibility: "May / Might"',
    sentenceWithBlank: 'The shipment ___ arrive late due to the customs inspection at the port.',
    options: ['might', 'can to', 'must to'],
    correctIndex: 0,
    grammarFocus: 'Possibility -> "might" + base verb',
    categoryTag: 'Modals & Politeness',
    whyExplanation: '"Might" expresses tentative possibility without certainty.'
  },
  {
    id: 'g100_90',
    type: 'sentence_correction',
    prompt: '90. Irregular Superlative: "Far" -> "Farthest / Furthest"',
    incorrectSentence: 'That branch office is the most far from our headquarters.',
    correctSentence: 'That branch office is the farthest from our headquarters.',
    errorHighlight: 'the most far',
    options: [
      'That branch office is the farthest from our headquarters.',
      'That branch office is the farrest from our headquarters.',
      'That branch office is the more far from our headquarters.'
    ],
    correctIndex: 0,
    categoryTag: 'Adjectives & Adverbs',
    whyExplanation: 'The superlative of "far" is "farthest" (for physical distance) or "furthest".'
  },

  // ==========================================
  // SECTION 7: PREPOSITIONS, CONJUNCTIONS & WORKPLACE PRAGMATICS (Q91 - Q100)
  // ==========================================
  {
    id: 'g100_91',
    type: 'fill_blank',
    prompt: '91. Prepositions of Calendar Date vs Month',
    sentenceWithBlank: 'The annual general meeting is ___ October 15th, not ___ November.',
    options: ['on / in', 'in / on', 'at / in'],
    correctIndex: 0,
    grammarFocus: 'Specific calendar date takes ON; month alone takes IN',
    categoryTag: 'Prepositions',
    whyExplanation: 'Specific calendar dates (October 15th) require "on"; months without a date (November) require "in".'
  },
  {
    id: 'g100_92',
    type: 'multiple_choice',
    prompt: '92. Prepositions of Place: "At" vs "In" for Workplaces & Cities',
    options: [
      'She is currently at work in our London branch.',
      'She is currently in work at our London branch.',
      'She is currently on work on our London branch.'
    ],
    correctIndex: 0,
    categoryTag: 'Prepositions',
    whyExplanation: 'The fixed workplace phrase is "at work", and cities take "in" ("in London").'
  },
  {
    id: 'g100_93',
    type: 'fill_blank',
    prompt: '93. Cause-and-Effect Conjunction: "So" vs "Because"',
    sentenceWithBlank: 'The supplier increased prices, ___ we negotiated a bulk discount.',
    options: ['so', 'because', 'although'],
    correctIndex: 0,
    grammarFocus: 'Result conjunction -> "so"',
    categoryTag: 'Conjunctions',
    whyExplanation: '"So" introduces the logical result of the previous clause.'
  },
  {
    id: 'g100_94',
    type: 'sentence_correction',
    prompt: '94. Avoiding Double Conjunctions ("Although... but")',
    incorrectSentence: 'Although the deadline was tight, but our team completed the deliverable.',
    correctSentence: 'Although the deadline was tight, our team completed the deliverable.',
    errorHighlight: 'Although ... but',
    options: [
      'Although the deadline was tight, our team completed the deliverable.',
      'Although the deadline was tight, and our team completed the deliverable.',
      'Although but the deadline was tight our team completed the deliverable.'
    ],
    correctIndex: 0,
    categoryTag: 'Conjunctions',
    whyExplanation: 'Never pair "Although" with "but" in the same sentence. Use either "Although..." alone or connect with "but".'
  },
  {
    id: 'g100_95',
    type: 'real_life_situation',
    prompt: '95. Professional Workplace Clarification on Video Conference',
    scenario: 'During an online video meeting, an international partner speaks very rapidly and you missed an important statistic.',
    speaker: 'You (in meeting)',
    promptQuestion: 'What is the most professional and polite way to request clarification?',
    options: [
      'Could you please slow down slightly and repeat that last metric?',
      'You are speaking too fast, say the numbers again.',
      'What you say? Louder please.'
    ],
    correctIndex: 0,
    categoryTag: 'Workplace Pragmatics',
    pragmaticTip: 'Polite modal "Could you please..." + specific repetition request.',
    whyExplanation: '"Could you please slow down slightly and repeat...?" is courteous, professional, and clear.'
  },
  {
    id: 'g100_96',
    type: 'fill_blank',
    prompt: '96. Preposition of Clock Time: "At"',
    sentenceWithBlank: 'The quarterly review will begin promptly ___ 9:30 AM.',
    options: ['at', 'on', 'in'],
    correctIndex: 0,
    grammarFocus: 'Clock time requires AT',
    categoryTag: 'Prepositions',
    whyExplanation: 'Exact clock times (9:30 AM) always take the preposition "at".'
  },
  {
    id: 'g100_97',
    type: 'multiple_choice',
    prompt: '97. Professional Email Closing Phrasing',
    options: [
      'Please let me know if you have any questions, and I look forward to working with you.',
      'I am looking forward to work with you and tell me questions.',
      'Please to let me know your question.'
    ],
    correctIndex: 0,
    categoryTag: 'Workplace Pragmatics',
    whyExplanation: '"Please let me know if you have any questions" and "look forward to working with you" (+ gerund) are the global standards of professional email writing.'
  },
  {
    id: 'g100_98',
    type: 'fill_blank',
    prompt: '98. Preposition with Days of the Week: "On"',
    sentenceWithBlank: 'All project status updates are due ___ Wednesday by 4:00 PM.',
    options: ['on', 'in', 'at'],
    correctIndex: 0,
    grammarFocus: 'Days of the week take ON',
    categoryTag: 'Prepositions',
    whyExplanation: 'Specific days of the week (Monday, Wednesday, Friday) always take "on".'
  },
  {
    id: 'g100_99',
    type: 'sentence_correction',
    prompt: '99. Conjunction "However" with Proper Semicolon/Period Punctuation',
    incorrectSentence: 'The software is fast however it lacks multi-user collaboration.',
    correctSentence: 'The software is fast; however, it lacks multi-user collaboration.',
    errorHighlight: 'fast however it',
    options: [
      'The software is fast; however, it lacks multi-user collaboration.',
      'The software is fast, however it lacks multi-user collaboration.',
      'The software is fast however, it lacks multi-user collaboration.'
    ],
    correctIndex: 0,
    categoryTag: 'Conjunctions',
    whyExplanation: 'When linking two independent clauses with the conjunctive adverb "however", use a semicolon (or period) before it and a comma after it.'
  },
  {
    id: 'g100_100',
    type: 'real_life_situation',
    prompt: '100. Formal Workplace Disagreement Phrasing',
    scenario: 'In a management meeting, you disagree with a proposed timeline cut because it risks quality.',
    speaker: 'You (to Management)',
    promptQuestion: 'Which sentence presents your professional counterpoint most diplomatically?',
    options: [
      'I understand the deadline pressure; however, shortening the testing phase may compromise system stability.',
      'That idea is completely wrong and it will break the system.',
      'I am not agree with your bad timeline.'
    ],
    correctIndex: 0,
    categoryTag: 'Workplace Pragmatics',
    pragmaticTip: 'Acknowledge the viewpoint + courteous contrast ("however") + objective risk analysis.',
    whyExplanation: 'Diplomatic workplace English validates the counter-party first ("I understand...") and presents the concern objectively.'
  }
];

export interface Grand100SectionScore {
  part: number;
  title: string;
  score: number;
  total: number;
  percentage: number;
  focus: string;
}

export interface Grand100ReportResult {
  score: number;
  total: number;
  percentage: number;
  totalCorrect: number;
  overallPercentage: number;
  cefrLevel: string;
  badgeTitle: string;
  levelTitle: string;
  summary: string;
  categoryBreakdown: { category: string; targetScore: string; recommendation: string }[];
  sectionScores: Grand100SectionScore[];
}

export const calculateGrand100Report = (
  score: number,
  total: number = 100,
  answers?: Record<string, number | string | boolean>
): Grand100ReportResult => {
  const percentage = Math.round((score / total) * 100);

  let cefrLevel: string;
  let summary: string;
  let badgeTitle: string;
  let categoryBreakdown: { category: string; targetScore: string; recommendation: string }[];

  if (percentage >= 90) {
    cefrLevel = 'B1- (Independent Elementary / Early Intermediate)';
    badgeTitle = 'Grand Master of Adult English Grammar';
    summary = 'Outstanding performance! You exhibit command over sentence architecture, complex tenses, stative subtleties, modals, and professional workplace communication.';
    categoryBreakdown = [
      { category: 'Sentence Architecture & Agreement', targetScore: '95%+', recommendation: 'Mastered. Ready for complex multi-clause subordination.' },
      { category: 'Tenses, Statives & Aspects', targetScore: '90%+', recommendation: 'Exceptional control of past, present, and future forms.' },
      { category: 'Questions & Negations', targetScore: '95%+', recommendation: 'Flawless auxiliary manipulation in spoken and written inquiries.' },
      { category: 'Modals & Conditionals', targetScore: '90%+', recommendation: 'Proficient in nuanced diplomatic requests and conditional rules.' },
      { category: 'Workplace Pragmatics', targetScore: '95%+', recommendation: 'Ready for executive-level international correspondence.' }
    ];
  } else if (percentage >= 75) {
    cefrLevel = 'A2+ (Strong Elementary)';
    badgeTitle = 'Proficient Adult English Communicator';
    summary = 'Great job! You have established a solid operational mastery of core English grammar. Minor slips may occur in fast-paced irregular verbs or tricky prepositions.';
    categoryBreakdown = [
      { category: 'Sentence Architecture & Agreement', targetScore: '80%+', recommendation: 'Solid foundation. Keep reviewing collective head nouns.' },
      { category: 'Tenses, Statives & Aspects', targetScore: '75%+', recommendation: 'Review stative verbs (agree, understand, prefer) to eliminate translation habits.' },
      { category: 'Questions & Negations', targetScore: '80%+', recommendation: 'Good control of QUASM structure.' },
      { category: 'Modals & Conditionals', targetScore: '75%+', recommendation: 'Practice polite workplace modals and first conditional comma rules.' },
      { category: 'Workplace Pragmatics', targetScore: '85%+', recommendation: 'Strong professional communication in daily email and dialogue.' }
    ];
  } else if (percentage >= 60) {
    cefrLevel = 'A2 (Elementary)';
    badgeTitle = 'Developing Adult English Practitioner';
    summary = 'You understand basic structures well and can communicate essential ideas. Target irregular past verbs, third-person singular -s, and preposition rules to unlock greater accuracy.';
    categoryBreakdown = [
      { category: 'Sentence Architecture & Agreement', targetScore: '65%+', recommendation: 'Focus on Subject-Verb agreement with intervening phrases.' },
      { category: 'Tenses, Statives & Aspects', targetScore: '60%+', recommendation: 'Review Module 8 & 9 for irregular past verbs and "didn\'t" + base verb.' },
      { category: 'Questions & Negations', targetScore: '65%+', recommendation: 'Reinforce "Do / Does / Did" auxiliary rules.' },
      { category: 'Modals & Conditionals', targetScore: '55%+', recommendation: 'Practice bare infinitives after modals (no "to").' },
      { category: 'Workplace Pragmatics', targetScore: '70%+', recommendation: 'Use "Could you please..." for all professional requests.' }
    ];
  } else if (percentage >= 40) {
    cefrLevel = 'A1+ (Upper Beginner)';
    badgeTitle = 'Foundational Adult English Learner';
    summary = 'You are making steady progress! Working systematically through Ms. Maria\'s 16 progressive modules will give you immediate clarity and eliminate guesswork.';
    categoryBreakdown = [
      { category: 'Sentence Architecture', targetScore: '50%', recommendation: 'Reinforce S+V+O order and BE verb vs HAVE.' },
      { category: 'Tenses', targetScore: '40%', recommendation: 'Practice Present Simple third-person -s in Module 6.' },
      { category: 'Prepositions', targetScore: '45%', recommendation: 'Memorize the time rules (at 9:00, on Monday, in October).' }
    ];
  } else {
    cefrLevel = 'A1 (Beginner)';
    badgeTitle = 'English Grammar Explorer';
    summary = 'Welcome to your grammar journey! Start from Module 1 and follow Ms. Maria\'s bite-sized formulas to build your sentence-building confidence step-by-step.';
    categoryBreakdown = [
      { category: 'Foundations', targetScore: '30%', recommendation: 'Start with Module 1: S+V+O sentence building.' },
      { category: 'BE Verb', targetScore: '30%', recommendation: 'Practice am / is / are for age, identity, and location.' }
    ];
  }

  // Calculate scores per section
  const sectionScores: Grand100SectionScore[] = GRAND_100_SECTIONS.map((sec) => {
    let secCorrect = 0;
    const [startQ, endQ] = sec.range;
    const secTotal = endQ - startQ + 1;

    if (answers) {
      for (let i = startQ - 1; i < endQ; i++) {
        const q = GRAND_100_ASSESSMENT_QUESTIONS[i];
        if (q && answers[q.id] === q.correctIndex) {
          secCorrect++;
        }
      }
    } else {
      // Proportional approximation if detailed answers object is not provided
      secCorrect = Math.round((score / total) * secTotal);
    }

    const secPct = Math.round((secCorrect / secTotal) * 100);
    return {
      part: sec.part,
      title: sec.title,
      score: secCorrect,
      total: secTotal,
      percentage: secPct,
      focus: sec.focus
    };
  });

  return {
    score,
    total,
    percentage,
    totalCorrect: score,
    overallPercentage: percentage,
    cefrLevel,
    badgeTitle,
    levelTitle: badgeTitle,
    summary,
    categoryBreakdown,
    sectionScores
  };
};
