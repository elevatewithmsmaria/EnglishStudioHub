import { PracticeQuestion } from '../types';

export interface LessonDiagnosticInfo {
  moduleId: number;
  moduleTitle: string;
  diagnosticTitle: string;
  tagline: string;
  estimatedMinutes: number;
  coreConceptsTested: string[];
  questions: PracticeQuestion[];
}

export const LESSON_DIAGNOSTICS: Record<number, LessonDiagnosticInfo> = {
  1: {
    moduleId: 1,
    moduleTitle: 'Sentence Foundations & Word Order',
    diagnosticTitle: 'Module 1 Diagnostic: Sentence Architecture & SVO',
    tagline: 'Test your core ability to construct natural Subject + Verb + Object statements and avoid fragments.',
    estimatedMinutes: 8,
    coreConceptsTested: ['S+V+O standard order', 'Subject-Verb Agreement', 'Place vs Time sequence', 'BE Verb vs HAVE for age'],
    questions: [
      {
        id: 'diag_m1_1',
        type: 'multiple_choice',
        prompt: '1. Standard SVO Order: Which sentence follows correct English word order?',
        options: [
          'Our marketing manager reviewed the client proposal this morning.',
          'Reviewed our marketing manager this morning the client proposal.',
          'This morning the client proposal our marketing manager reviewed.'
        ],
        correctIndex: 0,
        grammarFocus: 'Subject + Verb + Object + Time',
        whyExplanation: 'English statements strictly follow: Subject (Our marketing manager) + Verb (reviewed) + Object (the client proposal) + Time (this morning).'
      },
      {
        id: 'diag_m1_2',
        type: 'fill_blank',
        prompt: '2. Head Noun Agreement with Prepositional Phrase',
        sentenceWithBlank: 'The package of new office supplies ___ arrived at the front desk.',
        options: ['has', 'have', 'are'],
        correctIndex: 0,
        grammarFocus: 'Singular head noun "The package"',
        whyExplanation: 'The subject is singular ("The package"), not plural ("office supplies"). Singular subject takes "has".'
      },
      {
        id: 'diag_m1_3',
        type: 'sentence_correction',
        prompt: '3. Expressing Age in English',
        incorrectSentence: 'My project assistant has 27 years old.',
        correctSentence: 'My project assistant is 27 years old.',
        errorHighlight: 'has 27 years old',
        options: [
          'My project assistant is 27 years old.',
          'My project assistant have 27 years old.',
          'My project assistant is having 27 years old.'
        ],
        correctIndex: 0,
        whyExplanation: 'Age in English always uses the BE verb ("is 27 years old"), never "has".'
      },
      {
        id: 'diag_m1_4',
        type: 'word_order',
        prompt: '4. Natural Sequence: Place before Time',
        scrambledWords: ['at 10:30 AM', 'will start', 'The weekly briefing', 'in Conference Room B'],
        correctSentence: 'The weekly briefing will start in Conference Room B at 10:30 AM',
        contextHint: 'Subject + Verb + Place + Time',
        whyExplanation: 'English adverbial arrangement: Place (in Conference Room B) before Time (at 10:30 AM).'
      },
      {
        id: 'diag_m1_5',
        type: 'fill_blank',
        prompt: '5. BE Verb Form for Plural Subject',
        sentenceWithBlank: 'Marcus and Elena ___ ready for the client presentation.',
        options: ['are', 'is', 'am'],
        correctIndex: 0,
        grammarFocus: 'Compound plural subject with BE verb',
        whyExplanation: 'Two people joined by "and" form a plural subject requiring "are".'
      },
      {
        id: 'diag_m1_6',
        type: 'multiple_choice',
        prompt: '6. Identifying Complete Independent Sentences',
        options: [
          'The executive committee approved the expansion plan.',
          'Although the executive committee approved the expansion plan.',
          'The executive committee approving the expansion plan on time.'
        ],
        correctIndex: 0,
        whyExplanation: 'Only Option A is a complete independent clause with both a subject and finite verb.'
      },
      {
        id: 'diag_m1_7',
        type: 'sentence_correction',
        prompt: '7. Eliminating Double Subjects',
        incorrectSentence: 'My department supervisor she approved the travel expenses.',
        correctSentence: 'My department supervisor approved the travel expenses.',
        errorHighlight: 'supervisor she',
        options: [
          'My department supervisor approved the travel expenses.',
          'My department supervisor, she approved the travel expenses.',
          'She my department supervisor approved the travel expenses.'
        ],
        correctIndex: 0,
        whyExplanation: 'Do not repeat the noun subject with an immediate redundant pronoun ("supervisor she").'
      },
      {
        id: 'diag_m1_8',
        type: 'fill_blank',
        prompt: '8. "There is" vs "There are"',
        sentenceWithBlank: '___ three new computers in the graphic design department.',
        options: ['There are', 'There is', 'There has'],
        correctIndex: 0,
        grammarFocus: 'Plural noun complement "three new computers"',
        whyExplanation: 'Use "There are" when referring to plural objects.'
      },
      {
        id: 'diag_m1_9',
        type: 'multiple_choice',
        prompt: '9. Direct vs Indirect Object Arrangement',
        options: [
          'She handed her supervisor the updated financial invoice.',
          'She handed to her supervisor the updated financial invoice.',
          'She handed the updated financial invoice her supervisor.'
        ],
        correctIndex: 0,
        whyExplanation: 'Verb + Indirect Object (her supervisor) + Direct Object (the invoice).'
      },
      {
        id: 'diag_m1_10',
        type: 'fill_blank',
        prompt: '10. Indefinite Subject Agreement',
        sentenceWithBlank: 'Everyone in the team ___ responsible for safety protocol.',
        options: ['is', 'are', 'be'],
        correctIndex: 0,
        grammarFocus: '"Everyone" is grammatically singular',
        whyExplanation: '"Everyone" takes a singular verb: "is".'
      }
    ]
  },

  2: {
    moduleId: 2,
    moduleTitle: 'Nouns, Plurals & Workplace Quantifiers',
    diagnosticTitle: 'Module 2 Diagnostic: Nouns & Quantifiers',
    tagline: 'Diagnose your mastery over countable vs uncountable business nouns and quantifiers.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Countable vs Uncountable nouns (advice, information, equipment)', 'Few vs Little', 'Irregular plurals', 'Quantifier matching'],
    questions: [
      {
        id: 'diag_m2_1',
        type: 'fill_blank',
        prompt: '1. Uncountable Business Nouns: Information',
        sentenceWithBlank: 'We requested additional ___ from the human resources office.',
        options: ['information', 'informations', 'an information'],
        correctIndex: 0,
        grammarFocus: '"Information" is strictly uncountable',
        whyExplanation: '"Information" is uncountable; never add -s or "an".'
      },
      {
        id: 'diag_m2_2',
        type: 'multiple_choice',
        prompt: '2. Quantifier with Uncountable Noun: "Much" vs "Many"',
        options: [
          'We do not have much time before the boardroom presentation.',
          'We do not have many time before the boardroom presentation.',
          'We do not have few time before the boardroom presentation.'
        ],
        correctIndex: 0,
        whyExplanation: '"Time" (duration) is uncountable and pairs with "much" in negatives.'
      },
      {
        id: 'diag_m2_3',
        type: 'fill_blank',
        prompt: '3. Uncountable Workplace Equipment',
        sentenceWithBlank: 'The IT department ordered modern ___ for the development team.',
        options: ['equipment', 'equipments', 'an equipment'],
        correctIndex: 0,
        grammarFocus: '"Equipment" is uncountable',
        whyExplanation: '"Equipment" is an uncountable collective noun in English.'
      },
      {
        id: 'diag_m2_4',
        type: 'sentence_correction',
        prompt: '4. Uncountable Advice in Workplace',
        incorrectSentence: 'She gave me three good advices on client negotiation.',
        correctSentence: 'She gave me three pieces of good advice on client negotiation.',
        errorHighlight: 'three good advices',
        options: [
          'She gave me three pieces of good advice on client negotiation.',
          'She gave me three good advice on client negotiation.',
          'She gave me three advices on client negotiation.'
        ],
        correctIndex: 0,
        whyExplanation: 'To count "advice", use the partitive "pieces of advice".'
      },
      {
        id: 'diag_m2_5',
        type: 'fill_blank',
        prompt: '5. "Few" vs "Little" with Countable Plural',
        sentenceWithBlank: 'Only a ___ employees attended the voluntary wellness webinar.',
        options: ['few', 'little', 'much'],
        correctIndex: 0,
        grammarFocus: 'Countable plural "employees" takes "a few"',
        whyExplanation: '"Employees" is countable plural, requiring "a few".'
      },
      {
        id: 'diag_m2_6',
        type: 'multiple_choice',
        prompt: '6. Irregular Business Plural Nouns',
        options: [
          'The analysis revealed several interesting criteria for selection.',
          'The analysis revealed several interesting criterias for selection.',
          'The analysis revealed several interesting criterions for selection.'
        ],
        correctIndex: 0,
        whyExplanation: 'The plural of "criterion" is "criteria".'
      },
      {
        id: 'diag_m2_7',
        type: 'fill_blank',
        prompt: '7. Uncountable "Furniture"',
        sentenceWithBlank: 'We purchased ergonomic ___ for the new conference room.',
        options: ['furniture', 'furnitures', 'a furniture'],
        correctIndex: 0,
        grammarFocus: '"Furniture" is uncountable',
        whyExplanation: '"Furniture" cannot be pluralized with -s.'
      },
      {
        id: 'diag_m2_8',
        type: 'sentence_correction',
        prompt: '8. Plural of Compound Noun',
        incorrectSentence: 'Two attorney generals attended the regulatory hearing.',
        correctSentence: 'Two attorneys general attended the regulatory hearing.',
        errorHighlight: 'attorney generals',
        options: [
          'Two attorneys general attended the regulatory hearing.',
          'Two attorney general attended the regulatory hearing.',
          'Two attorney generals\' attended the regulatory hearing.'
        ],
        correctIndex: 0,
        whyExplanation: 'In titles with postpositive adjectives, pluralize the main noun: "attorneys general".'
      },
      {
        id: 'diag_m2_9',
        type: 'fill_blank',
        prompt: '9. "How many" with Countable Nouns',
        sentenceWithBlank: '___ participants registered for Ms. Maria’s workshop?',
        options: ['How many', 'How much', 'How long'],
        correctIndex: 0,
        grammarFocus: 'Countable plural "participants" takes "How many"',
        whyExplanation: '"How many" is used for countable plural items.'
      },
      {
        id: 'diag_m2_10',
        type: 'multiple_choice',
        prompt: '10. Plural of "Person" in Business Context',
        options: [
          'Over fifty people attended the product demonstration.',
          'Over fifty persons attended the product demonstration casual.',
          'Over fifty peoples attended the product demonstration.'
        ],
        correctIndex: 0,
        whyExplanation: 'The standard plural of "person" in general English is "people".'
      }
    ]
  },

  3: {
    moduleId: 3,
    moduleTitle: 'Pronouns in Action (Subject, Object & Possessive)',
    diagnosticTitle: 'Module 3 Diagnostic: Pronoun Precision',
    tagline: 'Test your mastery of subject vs object pronouns, possessives, and avoiding reflexive confusion.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Subject vs Object pronouns (I vs me, he vs him)', 'Compound object phrases', 'Possessive adjectives vs pronouns', 'Reflexive pronouns'],
    questions: [
      {
        id: 'diag_m3_1',
        type: 'fill_blank',
        prompt: '1. Object Pronoun in Compound Object',
        sentenceWithBlank: 'The CEO invited Sarah and ___ to the regional summit.',
        options: ['me', 'I', 'myself'],
        correctIndex: 0,
        grammarFocus: 'Object pronoun after transitive verb "invited"',
        whyExplanation: 'As the object of "invited", use "me" ("invited Sarah and me").'
      },
      {
        id: 'diag_m3_2',
        type: 'sentence_correction',
        prompt: '2. Possessive "Its" vs Contraction "It\'s"',
        incorrectSentence: 'The logistics department updated it\'s tracking software.',
        correctSentence: 'The logistics department updated its tracking software.',
        errorHighlight: "it's tracking",
        options: [
          'The logistics department updated its tracking software.',
          'The logistics department updated its\' tracking software.',
          'The logistics department updated their tracking software for singular.'
        ],
        correctIndex: 0,
        whyExplanation: 'Possessive "its" has NO apostrophe. "It\'s" means "it is".'
      },
      {
        id: 'diag_m3_3',
        type: 'multiple_choice',
        prompt: '3. Subject Pronoun in Compound Subject',
        options: [
          'David and I prepared the annual budget forecast.',
          'David and me prepared the annual budget forecast.',
          'Me and David prepared the annual budget forecast.'
        ],
        correctIndex: 0,
        whyExplanation: 'As the subject performing the action, use "I" ("David and I prepared").'
      },
      {
        id: 'diag_m3_4',
        type: 'fill_blank',
        prompt: '4. Reflexive Pronoun Usage',
        sentenceWithBlank: 'The developers designed the backend architecture by ___.',
        options: ['themselves', 'theirselves', 'themself'],
        correctIndex: 0,
        grammarFocus: 'Plural reflexive pronoun for "they"',
        whyExplanation: '"Themselves" is the correct standard reflexive pronoun.'
      },
      {
        id: 'diag_m3_5',
        type: 'multiple_choice',
        prompt: '5. Pronoun after Prepositions',
        options: [
          'Between you and me, the new proposal needs substantial revision.',
          'Between you and I, the new proposal needs substantial revision.',
          'Between you and myself, the new proposal needs substantial revision.'
        ],
        correctIndex: 0,
        whyExplanation: 'Prepositions (like "between") govern object pronouns ("between you and me").'
      },
      {
        id: 'diag_m3_6',
        type: 'fill_blank',
        prompt: '6. Possessive Pronoun vs Possessive Adjective',
        sentenceWithBlank: 'This desk is mine, and that one over there is ___.',
        options: ['hers', 'her', "her's"],
        correctIndex: 0,
        grammarFocus: 'Independent possessive pronoun "hers"',
        whyExplanation: 'Stand-alone possessive pronoun is "hers" (no apostrophe).'
      },
      {
        id: 'diag_m3_7',
        type: 'sentence_correction',
        prompt: '7. Misuse of Reflexive Pronoun as Subject',
        incorrectSentence: 'Myself and the accountant will finalize the audit tomorrow.',
        correctSentence: 'The accountant and I will finalize the audit tomorrow.',
        errorHighlight: 'Myself and the accountant',
        options: [
          'The accountant and I will finalize the audit tomorrow.',
          'Myself and the accountant will finalize.',
          'Me and the accountant will finalize.'
        ],
        correctIndex: 0,
        whyExplanation: 'Never use "myself" as the subject of a sentence. Say "The accountant and I...".'
      },
      {
        id: 'diag_m3_8',
        type: 'fill_blank',
        prompt: '8. Demonstrative Plural: "These" vs "Those"',
        sentenceWithBlank: 'Please file ___ folders right here on my desk.',
        options: ['these', 'those', 'this'],
        correctIndex: 0,
        grammarFocus: 'Nearby plural object -> "these"',
        whyExplanation: 'Nearby plural items take "these".'
      },
      {
        id: 'diag_m3_9',
        type: 'multiple_choice',
        prompt: '9. Gender-Neutral Workplace Pronoun',
        options: [
          'Each client must present their identification badge upon entry.',
          'Each client must present its identification badge upon entry.',
          'Each client must present one\'s identification badge upon entry.'
        ],
        correctIndex: 0,
        whyExplanation: 'Singular "their" is standard and gender-inclusive in modern professional English.'
      },
      {
        id: 'diag_m3_10',
        type: 'fill_blank',
        prompt: '10. Object Pronoun with "Let"',
        sentenceWithBlank: 'Let ___ handle the technical setup for today’s video conference.',
        options: ['us', 'we', 'our'],
        correctIndex: 0,
        grammarFocus: '"Let" is followed by object pronoun',
        whyExplanation: '"Let" takes an object pronoun: "Let us" (or "Let\'s").'
      }
    ]
  },

  4: {
    moduleId: 4,
    moduleTitle: 'Adjectives, Comparatives & Adverbs of Manner/Frequency',
    diagnosticTitle: 'Module 4 Diagnostic: Modifiers & Comparisons',
    tagline: 'Test your proficiency in comparative/superlative forms, royal adjective order, and frequency adverb placement.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Short vs Long comparatives (-er vs more)', 'Royal adjective order', 'Frequency adverb placement', 'Adjective vs Adverb (good vs well)'],
    questions: [
      {
        id: 'diag_m4_1',
        type: 'fill_blank',
        prompt: '1. Comparative Form of 1-Syllable Adjectives',
        sentenceWithBlank: 'The fiber optic connection is ___ than our previous DSL line.',
        options: ['faster', 'more fast', 'fasterer'],
        correctIndex: 0,
        grammarFocus: '1-syllable comparative adds -er',
        whyExplanation: 'Short adjectives add "-er": "faster".'
      },
      {
        id: 'diag_m4_2',
        type: 'multiple_choice',
        prompt: '2. Comparative of Multi-Syllable Adjectives',
        options: [
          'The new database is more reliable than the legacy system.',
          'The new database is reliabler than the legacy system.',
          'The new database is more reliabler than the legacy system.'
        ],
        correctIndex: 0,
        whyExplanation: 'Adjectives with 3+ syllables take "more" + adjective: "more reliable".'
      },
      {
        id: 'diag_m4_3',
        type: 'sentence_correction',
        prompt: '3. Irregular Comparative: "Good" -> "Better"',
        incorrectSentence: 'Our Q3 profit margin was more good than expected.',
        correctSentence: 'Our Q3 profit margin was better than expected.',
        errorHighlight: 'more good',
        options: [
          'Our Q3 profit margin was better than expected.',
          'Our Q3 profit margin was gooder than expected.',
          'Our Q3 profit margin was more better than expected.'
        ],
        correctIndex: 0,
        whyExplanation: 'The comparative of "good" is "better".'
      },
      {
        id: 'diag_m4_4',
        type: 'fill_blank',
        prompt: '4. Frequency Adverb Position with BE Verb',
        sentenceWithBlank: 'Our project coordinator ___ punctual for morning standups.',
        options: ['is always', 'always is', 'is punctual always'],
        correctIndex: 0,
        grammarFocus: 'Frequency adverb follows BE verb',
        whyExplanation: 'With the BE verb, frequency adverbs follow: "is always".'
      },
      {
        id: 'diag_m4_5',
        type: 'multiple_choice',
        prompt: '5. Adverb of Manner: "Well" vs "Good"',
        options: [
          'The marketing team performed well during the international pitch.',
          'The marketing team performed good during the international pitch.',
          'The marketing team performed goodly during the international pitch.'
        ],
        correctIndex: 0,
        whyExplanation: 'Modify verbs with the adverb "well" ("performed well").'
      },
      {
        id: 'diag_m4_6',
        type: 'fill_blank',
        prompt: '6. Superlative Form with Definite Article',
        sentenceWithBlank: 'This is the ___ cost-effective solution for our business.',
        options: ['most', 'more', 'mostest'],
        correctIndex: 0,
        grammarFocus: 'Superlative with long adjective -> "the most"',
        whyExplanation: 'Superlatives require "the most" + adjective.'
      },
      {
        id: 'diag_m4_7',
        type: 'multiple_choice',
        prompt: '7. Adjective Order (Opinion + Size + Material)',
        options: [
          'We installed an elegant large wooden reception counter.',
          'We installed a wooden large elegant reception counter.',
          'We installed a large wooden elegant reception counter.'
        ],
        correctIndex: 0,
        whyExplanation: 'Adjective sequence: Opinion (elegant) + Size (large) + Material (wooden).'
      },
      {
        id: 'diag_m4_8',
        type: 'sentence_correction',
        prompt: '8. Irregular Superlative: "Far"',
        incorrectSentence: 'Our warehouse is the most far location from the shipping port.',
        correctSentence: 'Our warehouse is the farthest location from the shipping port.',
        errorHighlight: 'the most far',
        options: [
          'Our warehouse is the farthest location from the shipping port.',
          'Our warehouse is the farrest location from the shipping port.',
          'Our warehouse is the furthest from port.'
        ],
        correctIndex: 0,
        whyExplanation: 'The superlative of "far" is "farthest" (or "furthest").'
      },
      {
        id: 'diag_m4_9',
        type: 'fill_blank',
        prompt: '9. Frequency Adverb with Action Verb',
        sentenceWithBlank: 'We ___ double-check all calculations before issuing invoices.',
        options: ['usually', 'are usually', 'usually are'],
        correctIndex: 0,
        grammarFocus: 'Adverb precedes main action verb "double-check"',
        whyExplanation: 'Adverbs of frequency go directly before the main action verb.'
      },
      {
        id: 'diag_m4_10',
        type: 'multiple_choice',
        prompt: '10. Adjectives Ending in -ed vs -ing',
        options: [
          'The training seminar was interesting, and all attendees felt excited.',
          'The training seminar was interested, and all attendees felt exciting.',
          'The training seminar was interesting, and all attendees felt exciting.'
        ],
        correctIndex: 0,
        whyExplanation: '-ing describes the cause (interesting seminar); -ed describes the feeling (excited attendees).'
      }
    ]
  },

  5: {
    moduleId: 5,
    moduleTitle: 'Prepositions of Time, Place & Movement',
    diagnosticTitle: 'Module 5 Diagnostic: Preposition Master Test',
    tagline: 'Test your precision in in/on/at for time, date, venue, city, and workplace expressions.',
    estimatedMinutes: 8,
    coreConceptsTested: ['In / On / At for Time', 'In / On / At for Place', 'Set phrases: at work, at home, on time', 'Prepositions of movement'],
    questions: [
      {
        id: 'diag_m5_1',
        type: 'fill_blank',
        prompt: '1. Prepositions of Calendar Date vs Month',
        sentenceWithBlank: 'The quarterly meeting is ___ October 12th, not ___ November.',
        options: ['on / in', 'in / on', 'at / in'],
        correctIndex: 0,
        grammarFocus: 'Specific date -> ON; Month alone -> IN',
        whyExplanation: 'Specific calendar dates take "on"; months alone take "in".'
      },
      {
        id: 'diag_m5_2',
        type: 'multiple_choice',
        prompt: '2. Clock Time Preposition: "At"',
        options: [
          'The morning briefing will commence at 8:45 AM sharp.',
          'The morning briefing will commence in 8:45 AM sharp.',
          'The morning briefing will commence on 8:45 AM sharp.'
        ],
        correctIndex: 0,
        whyExplanation: 'Exact clock times always take "at".'
      },
      {
        id: 'diag_m5_3',
        type: 'fill_blank',
        prompt: '3. Set Workplace Locations: "at work" vs "in city"',
        sentenceWithBlank: 'She is currently ___ work at our corporate office ___ Chicago.',
        options: ['at / in', 'in / at', 'on / on'],
        correctIndex: 0,
        grammarFocus: 'Set phrase "at work", cities take "in"',
        whyExplanation: 'English uses "at work" and "in Chicago".'
      },
      {
        id: 'diag_m5_4',
        type: 'sentence_correction',
        prompt: '4. Days of the Week Preposition',
        incorrectSentence: 'Our project team meets in every Monday morning.',
        correctSentence: 'Our project team meets every Monday morning.',
        errorHighlight: 'in every Monday',
        options: [
          'Our project team meets every Monday morning.',
          'Our project team meets on every Monday morning.',
          'Our project team meets at every Monday morning.'
        ],
        correctIndex: 0,
        whyExplanation: 'When "every", "last", or "next" is used with days, omit the preposition entirely.'
      },
      {
        id: 'diag_m5_5',
        type: 'fill_blank',
        prompt: '5. Preposition for Years and Centuries',
        sentenceWithBlank: 'Our company was founded ___ 2018.',
        options: ['in', 'on', 'at'],
        correctIndex: 0,
        grammarFocus: 'Years take IN',
        whyExplanation: 'Years take the preposition "in".'
      },
      {
        id: 'diag_m5_6',
        type: 'multiple_choice',
        prompt: '6. "In time" vs "On time" in Business Context',
        options: [
          'The train arrived on time, so we reached the client in time for the meeting.',
          'The train arrived in time, so we reached the client on time for the meeting schedule.',
          'The train arrived at time, so we reached the client in time.'
        ],
        correctIndex: 0,
        whyExplanation: '"On time" = punctual/on schedule; "in time" = before a deadline with time to spare.'
      },
      {
        id: 'diag_m5_7',
        type: 'fill_blank',
        prompt: '7. Prepositions of Movement: "Into" vs "In"',
        sentenceWithBlank: 'The technician walked ___ the server room to inspect the cables.',
        options: ['into', 'in', 'onto'],
        correctIndex: 0,
        grammarFocus: 'Movement from outside to inside -> "into"',
        whyExplanation: 'Physical entry or movement from outside to inside uses "into".'
      },
      {
        id: 'diag_m5_8',
        type: 'sentence_correction',
        prompt: '8. Fixed Expression: "At night" vs "In the morning"',
        incorrectSentence: 'Our automated batch processing runs in the night.',
        correctSentence: 'Our automated batch processing runs at night.',
        errorHighlight: 'in the night',
        options: [
          'Our automated batch processing runs at night.',
          'Our automated batch processing runs on night.',
          'Our automated batch processing runs at the night.'
        ],
        correctIndex: 0,
        whyExplanation: 'The standard fixed phrase is "at night" (versus "in the morning/afternoon").'
      },
      {
        id: 'diag_m5_9',
        type: 'fill_blank',
        prompt: '9. Preposition with Public Transportation',
        sentenceWithBlank: 'She was reviewing the project presentation while ___ the train.',
        options: ['on', 'in', 'at'],
        correctIndex: 0,
        grammarFocus: 'Public transit with walk-in capability takes ON',
        whyExplanation: 'Buses, trains, planes, and ships take "on the train/bus/plane".'
      },
      {
        id: 'diag_m5_10',
        type: 'multiple_choice',
        prompt: '10. Preposition of Deadline: "By"',
        options: [
          'Please submit all final expense receipts by Friday at 5:00 PM.',
          'Please submit all final expense receipts until Friday at 5:00 PM.',
          'Please submit all final expense receipts in Friday at 5:00 PM.'
        ],
        correctIndex: 0,
        whyExplanation: '"By" indicates a completion deadline (not later than).'
      }
    ]
  },

  6: {
    moduleId: 6,
    moduleTitle: 'Present Simple & Daily Workplace Routines',
    diagnosticTitle: 'Module 6 Diagnostic: Present Simple & Statives',
    tagline: 'Evaluate your accuracy with third-person -s, habits, negative helpers, and stative verbs.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Third-person singular -s', 'Habitual frequency', 'Do / Does in negative statements', 'Stative verbs (agree, know, understand, need)'],
    questions: [
      {
        id: 'diag_m6_1',
        type: 'fill_blank',
        prompt: '1. Third-Person Singular -S',
        sentenceWithBlank: 'Our regional sales manager ___ with client accounts daily.',
        options: ['communicates', 'communicate', 'communicating'],
        correctIndex: 0,
        grammarFocus: 'Third-person singular takes -s',
        whyExplanation: 'Singular subject ("manager") takes verb with -s: "communicates".'
      },
      {
        id: 'diag_m6_2',
        type: 'sentence_correction',
        prompt: '2. Stative Verb "Agree"',
        incorrectSentence: 'I am agree with your proposed budget allocation.',
        correctSentence: 'I agree with your proposed budget allocation.',
        errorHighlight: 'am agree',
        options: [
          'I agree with your proposed budget allocation.',
          'I am agreeing with your proposed budget allocation.',
          'I agreed with your proposed budget allocation now.'
        ],
        correctIndex: 0,
        whyExplanation: '"Agree" is an active verb. Say "I agree", never "I am agree".'
      },
      {
        id: 'diag_m6_3',
        type: 'multiple_choice',
        prompt: '3. Present Simple Negative with Third-Person Singular',
        options: [
          'He doesn’t require any additional technical permissions.',
          'He don’t require any additional technical permissions.',
          'He doesn’t requires any additional technical permissions.'
        ],
        correctIndex: 0,
        whyExplanation: 'Negative uses "doesn\'t" + base verb ("require").'
      },
      {
        id: 'diag_m6_4',
        type: 'fill_blank',
        prompt: '4. Stative Verb of Cognitive Understanding',
        sentenceWithBlank: 'I ___ why the client requested an expedited timeline.',
        options: ['understand', 'am understanding', 'am understand'],
        correctIndex: 0,
        grammarFocus: 'Stative verb "understand"',
        whyExplanation: 'Cognitive verbs like "understand" are used in simple tenses.'
      },
      {
        id: 'diag_m6_5',
        type: 'sentence_correction',
        prompt: '5. Irregular Third-Person Singular "Have" -> "Has"',
        incorrectSentence: 'The senior account supervisor have the latest financial records.',
        correctSentence: 'The senior account supervisor has the latest financial records.',
        errorHighlight: 'supervisor have',
        options: [
          'The senior account supervisor has the latest financial records.',
          'The senior account supervisor is having the latest financial records.',
          'The senior account supervisor haves the latest financial records.'
        ],
        correctIndex: 0,
        whyExplanation: 'The third-person singular of "have" is "has".'
      },
      {
        id: 'diag_m6_6',
        type: 'fill_blank',
        prompt: '6. Spelling Rule: Consonant + Y -> -ies',
        sentenceWithBlank: 'Our lead researcher ___ market trends across Latin America.',
        options: ['studies', 'studys', 'studyies'],
        correctIndex: 0,
        grammarFocus: 'Study -> studies',
        whyExplanation: 'Verbs ending in consonant + y change "y" to "i" and add "-es".'
      },
      {
        id: 'diag_m6_7',
        type: 'multiple_choice',
        prompt: '7. Stative Verb of Possession',
        options: [
          'Our corporate branch owns two commercial transport vehicles.',
          'Our corporate branch is owning two commercial transport vehicles.',
          'Our corporate branch own two commercial transport vehicles.'
        ],
        correctIndex: 0,
        whyExplanation: '"Own" is a stative verb of possession: "owns".'
      },
      {
        id: 'diag_m6_8',
        type: 'fill_blank',
        prompt: '8. Habitual Routine with Frequency Marker',
        sentenceWithBlank: 'The maintenance crew ___ the air filtration system every Sunday.',
        options: ['inspects', 'inspect', 'is inspecting'],
        correctIndex: 0,
        grammarFocus: 'Repeated schedule takes Present Simple',
        whyExplanation: '"Every Sunday" indicates routine, requiring "inspects".'
      },
      {
        id: 'diag_m6_9',
        type: 'sentence_correction',
        prompt: '9. Present Simple Negative for Plural Subjects',
        incorrectSentence: 'They doesn’t work on international banking holidays.',
        correctSentence: 'They don’t work on international banking holidays.',
        errorHighlight: 'doesn’t work',
        options: [
          'They don’t work on international banking holidays.',
          'They aren’t work on international banking holidays.',
          'They don’t works on international banking holidays.'
        ],
        correctIndex: 0,
        whyExplanation: 'Plural subject "They" takes "don\'t work".'
      },
      {
        id: 'diag_m6_10',
        type: 'multiple_choice',
        prompt: '10. Scientific or Business General Truths',
        options: [
          'Water boils at 100 degrees Celsius under standard atmospheric pressure.',
          'Water is boiling at 100 degrees Celsius general fact.',
          'Water boil at 100 degrees Celsius.'
        ],
        correctIndex: 0,
        whyExplanation: 'General scientific truths use Present Simple: "boils".'
      }
    ]
  },

  7: {
    moduleId: 7,
    moduleTitle: 'Present Continuous & Actions in Progress',
    diagnosticTitle: 'Module 7 Diagnostic: Present Continuous Mastery',
    tagline: 'Test actions occurring right now, temporary trends, and future confirmed arrangements.',
    estimatedMinutes: 8,
    coreConceptsTested: ['BE + Verb-ing formation', 'Current actions vs habits', 'Future confirmed arrangements', 'Spelling of -ing verbs'],
    questions: [
      {
        id: 'diag_m7_1',
        type: 'fill_blank',
        prompt: '1. Action Happening at this Moment',
        sentenceWithBlank: 'Please keep the corridor quiet; the executive team ___ a webinar.',
        options: ['is hosting', 'hosts', 'is host'],
        correctIndex: 0,
        grammarFocus: 'Present Continuous "is hosting"',
        whyExplanation: 'An action happening at the current moment requires Present Continuous.'
      },
      {
        id: 'diag_m7_2',
        type: 'multiple_choice',
        prompt: '2. Present Continuous vs Present Simple Contrast',
        options: [
          'I usually drive to the office, but this week I am taking the commuter train.',
          'I am usually driving to the office, but this week I take the commuter train.',
          'I usually drive to the office, but this week I take the commuter train.'
        ],
        correctIndex: 0,
        whyExplanation: 'Habitual ("usually drive") vs Temporary situation this week ("am taking").'
      },
      {
        id: 'diag_m7_3',
        type: 'sentence_correction',
        prompt: '3. Stative Verb Misused in Continuous Tense',
        incorrectSentence: 'I am knowing the client contact person very well.',
        correctSentence: 'I know the client contact person very well.',
        errorHighlight: 'am knowing',
        options: [
          'I know the client contact person very well.',
          'I am know the client contact person very well.',
          'I knowing the client contact person very well.'
        ],
        correctIndex: 0,
        whyExplanation: '"Know" is a stative verb of cognition; say "I know".'
      },
      {
        id: 'diag_m7_4',
        type: 'fill_blank',
        prompt: '4. Spelling Rule: CVC Doubling before -ing',
        sentenceWithBlank: 'The logistics director is ___ an urgent meeting regarding shipping delays.',
        options: ['planning', 'planing', 'planeing'],
        correctIndex: 0,
        grammarFocus: 'Plan -> planning (CVC doubling)',
        whyExplanation: 'Single-syllable consonant-vowel-consonant verbs double the final consonant: "planning".'
      },
      {
        id: 'diag_m7_5',
        type: 'multiple_choice',
        prompt: '5. Present Continuous for Fixed Future Arrangement',
        options: [
          'Ms. Maria is meeting the new corporate partners tomorrow morning.',
          'Ms. Maria meets the new corporate partners tomorrow morning arranged.',
          'Ms. Maria is meet the new corporate partners tomorrow morning.'
        ],
        correctIndex: 0,
        whyExplanation: 'Present Continuous is used for confirmed appointments and arrangements in the future.'
      },
      {
        id: 'diag_m7_6',
        type: 'fill_blank',
        prompt: '6. Present Continuous Negative Form',
        sentenceWithBlank: 'We ___ any new vendors until next quarter’s budget review.',
        options: ["aren't onboarding", "don't onboarding", "isn't onboarding"],
        correctIndex: 0,
        grammarFocus: 'Plural subject "We" + aren\'t + verb-ing',
        whyExplanation: '"We" takes "aren\'t onboarding".'
      },
      {
        id: 'diag_m7_7',
        type: 'sentence_correction',
        prompt: '7. Missing Auxiliary "BE" in Continuous',
        incorrectSentence: 'The software developers working on the database patch right now.',
        correctSentence: 'The software developers are working on the database patch right now.',
        errorHighlight: 'developers working',
        options: [
          'The software developers are working on the database patch right now.',
          'The software developers is working on the database patch right now.',
          'The software developers does working on the database patch right now.'
        ],
        correctIndex: 0,
        whyExplanation: 'Present Continuous requires both the auxiliary BE verb ("are") and verb-ing ("working").'
      },
      {
        id: 'diag_m7_8',
        type: 'fill_blank',
        prompt: '8. Spelling Rule: Dropping Silent -E before -ing',
        sentenceWithBlank: 'The graphic design department is ___ a modern product logo.',
        options: ['creating', 'createing', 'creatin'],
        correctIndex: 0,
        grammarFocus: 'Create -> creating (drop silent -e)',
        whyExplanation: 'Verbs ending in silent -e drop the "e" before adding -ing: "creating".'
      },
      {
        id: 'diag_m7_9',
        type: 'multiple_choice',
        prompt: '9. Continuous Tense for Current Developing Trends',
        options: [
          'Renewable energy costs are decreasing rapidly across global markets.',
          'Renewable energy costs decreases rapidly across global markets trend.',
          'Renewable energy costs is decreasing rapidly across global markets.'
        ],
        correctIndex: 0,
        whyExplanation: 'Ongoing market trends and gradual changes use Present Continuous: "are decreasing".'
      },
      {
        id: 'diag_m7_10',
        type: 'fill_blank',
        prompt: '10. Question in Present Continuous',
        sentenceWithBlank: '___ the client reviewing the contract draft at this moment?',
        options: ['Is', 'Does', 'Are'],
        correctIndex: 0,
        grammarFocus: 'Singular subject "the client" + Is',
        whyExplanation: 'Present Continuous question for singular subject starts with "Is".'
      }
    ]
  },

  8: {
    moduleId: 8,
    moduleTitle: 'Past Simple Regular Verbs & Pronunciation',
    diagnosticTitle: 'Module 8 Diagnostic: Regular Past & -ED Phonetics',
    tagline: 'Test your mastery of regular past -ed rules, spelling modifications, and three pronunciation paths (/t/, /d/, /ɪd/).',
    estimatedMinutes: 8,
    coreConceptsTested: ['Regular -ed formation', '-ed pronunciation categories (/t/, /d/, /ɪd/)', 'Negative past with "didn\'t" + base verb', 'Past time markers'],
    questions: [
      {
        id: 'diag_m8_1',
        type: 'fill_blank',
        prompt: '1. Regular Past Simple with Definite Past Marker',
        sentenceWithBlank: 'Our facilities manager ___ the office renovation yesterday.',
        options: ['completed', 'completes', 'was complete'],
        correctIndex: 0,
        grammarFocus: 'Past Simple regular verb "completed"',
        whyExplanation: 'Past time marker "yesterday" requires the Past Simple "completed".'
      },
      {
        id: 'diag_m8_2',
        type: 'multiple_choice',
        prompt: '2. Extra Syllable Pronunciation (/ɪd/) Rule',
        options: [
          'The verbs "decided", "started", and "needed" add an extra syllable (/ɪd/).',
          'The verbs "worked", "helped", and "walked" add an extra syllable (/ɪd/).',
          'The verbs "called", "opened", and "played" add an extra syllable (/ɪd/).'
        ],
        correctIndex: 0,
        whyExplanation: 'Only root verbs ending in /t/ or /d/ sounds add the extra /ɪd/ syllable when adding -ed.'
      },
      {
        id: 'diag_m8_3',
        type: 'sentence_correction',
        prompt: '3. Negative Past Simple Auxiliary Rule',
        incorrectSentence: 'I didn’t noticed the updated policy in the employee handbook.',
        correctSentence: 'I didn’t notice the updated policy in the employee handbook.',
        errorHighlight: 'didn’t noticed',
        options: [
          'I didn’t notice the updated policy in the employee handbook.',
          'I didn’t noticing the updated policy in the employee handbook.',
          'I not noticed the updated policy in the employee handbook.'
        ],
        correctIndex: 0,
        whyExplanation: 'After "didn\'t", the main verb MUST be in base form ("notice").'
      },
      {
        id: 'diag_m8_4',
        type: 'fill_blank',
        prompt: '4. Spelling Rule: Consonant + Y -> -ied in Past',
        sentenceWithBlank: 'The legal team ___ all compliance documents before the audit.',
        options: ['certified', 'certifyed', 'certifid'],
        correctIndex: 0,
        grammarFocus: 'Certify -> certified',
        whyExplanation: 'Consonant + y changes to -ied in past tense: "certified".'
      },
      {
        id: 'diag_m8_5',
        type: 'multiple_choice',
        prompt: '5. Voiceless Consonant Ending -> /t/ Pronunciation',
        options: [
          'The words "worked", "helped", and "watched" end in a clean /t/ sound.',
          'The words "worked", "helped", and "watched" end in an /ɪd/ sound.',
          'The words "worked", "helped", and "watched" end in a /d/ sound.'
        ],
        correctIndex: 0,
        whyExplanation: 'Voiceless consonant endings (k, p, ch, sh, s) produce the /t/ sound.'
      },
      {
        id: 'diag_m8_6',
        type: 'fill_blank',
        prompt: '6. Spelling Rule: CVC Doubling in Past Simple',
        sentenceWithBlank: 'The delivery driver ___ at the security gate to show credentials.',
        options: ['stopped', 'stoped', 'stopt'],
        correctIndex: 0,
        grammarFocus: 'Stop -> stopped (CVC doubling)',
        whyExplanation: 'Single-syllable CVC verbs double the final consonant: "stopped".'
      },
      {
        id: 'diag_m8_7',
        type: 'sentence_correction',
        prompt: '7. Past Simple Question Auxiliary & Base Verb',
        incorrectSentence: 'Did the auditor checked all financial spreadsheets?',
        correctSentence: 'Did the auditor check all financial spreadsheets?',
        errorHighlight: 'Did the auditor checked',
        options: [
          'Did the auditor check all financial spreadsheets?',
          'Did the auditor checking all financial spreadsheets?',
          'Was the auditor check all financial spreadsheets?'
        ],
        correctIndex: 0,
        whyExplanation: 'In questions with "Did", use the base form "check".'
      },
      {
        id: 'diag_m8_8',
        type: 'fill_blank',
        prompt: '8. Voiced Consonant Ending -> /d/ Pronunciation',
        sentenceWithBlank: 'Our account manager ___ the client yesterday to confirm details.',
        options: ['called', 'calld', 'callid'],
        correctIndex: 0,
        grammarFocus: 'Call -> called (voiced /d/ sound)',
        whyExplanation: '"Called" ends in a voiced /l/ sound, pronounced with /d/.'
      },
      {
        id: 'diag_m8_9',
        type: 'multiple_choice',
        prompt: '9. Time Marker Placement in Past Simple',
        options: [
          'Three days ago, our department delivered the completed software build.',
          'Ago three days, our department delivered the completed software build.',
          'Before three days, our department delivered the completed software build.'
        ],
        correctIndex: 0,
        whyExplanation: 'Express past elapsed time with "[time period] + ago": "Three days ago".'
      },
      {
        id: 'diag_m8_10',
        type: 'fill_blank',
        prompt: '10. Past Simple Regular Verb: "Deliver"',
        sentenceWithBlank: 'The logistics supplier ___ all materials directly to the warehouse.',
        options: ['delivered', 'delivers', 'was deliver'],
        correctIndex: 0,
        grammarFocus: 'Past form "delivered"',
        whyExplanation: 'Regular past simple form is "delivered".'
      }
    ]
  },

  9: {
    moduleId: 9,
    moduleTitle: 'Past Simple Irregular Verbs in Business Communication',
    diagnosticTitle: 'Module 9 Diagnostic: High-Frequency Irregular Verbs',
    tagline: 'Diagnose your recall of high-stakes irregular verbs in workplace writing and speaking.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Top irregular past forms (bought, brought, chose, flew, spoke, wrote)', 'Negative didn\'t + base verb', 'Past BE forms (was/were)', 'Irregular verb confusion'],
    questions: [
      {
        id: 'diag_m9_1',
        type: 'fill_blank',
        prompt: '1. Irregular Past of "Bring" & "Buy"',
        sentenceWithBlank: 'Ms. Maria ___ the project contract and ___ lunch for the team.',
        options: ['brought / bought', 'brang / buyed', 'brought / buyed'],
        correctIndex: 0,
        grammarFocus: 'Bring -> brought; Buy -> bought',
        whyExplanation: 'Past forms are "brought" and "bought".'
      },
      {
        id: 'diag_m9_2',
        type: 'sentence_correction',
        prompt: '2. Irregular Past of "Choose"',
        incorrectSentence: 'The management board choosed the lower-cost supplier.',
        correctSentence: 'The management board chose the lower-cost supplier.',
        errorHighlight: 'choosed',
        options: [
          'The management board chose the lower-cost supplier.',
          'The management board chosen the lower-cost supplier.',
          'The management board did chose the lower-cost supplier.'
        ],
        correctIndex: 0,
        whyExplanation: 'The Past Simple of "choose" is "chose".'
      },
      {
        id: 'diag_m9_3',
        type: 'multiple_choice',
        prompt: '3. Irregular Past of "Write" and "Send"',
        options: [
          'She wrote the report and sent it to the client yesterday.',
          'She writed the report and sended it to the client yesterday.',
          'She wrote the report and sended it to the client yesterday.'
        ],
        correctIndex: 0,
        whyExplanation: '"Write" -> "wrote" and "send" -> "sent".'
      },
      {
        id: 'diag_m9_4',
        type: 'fill_blank',
        prompt: '4. Past Simple of "BE" with Plural Subject',
        sentenceWithBlank: 'All regional managers ___ present at the executive summit.',
        options: ['were', 'was', 'are'],
        correctIndex: 0,
        grammarFocus: 'Plural subject "managers" takes "were"',
        whyExplanation: 'Plural subjects in past tense take "were".'
      },
      {
        id: 'diag_m9_5',
        type: 'sentence_correction',
        prompt: '5. Irregular Past of "Speak" and "Tell"',
        incorrectSentence: 'She speaked to the client and telled him the deadline.',
        correctSentence: 'She spoke to the client and told him the deadline.',
        errorHighlight: 'speaked to the client and telled',
        options: [
          'She spoke to the client and told him the deadline.',
          'She spoke to the client and telled him the deadline.',
          'She speaked to the client and told him the deadline.'
        ],
        correctIndex: 0,
        whyExplanation: '"Speak" -> "spoke" and "tell" -> "told".'
      },
      {
        id: 'diag_m9_6',
        type: 'fill_blank',
        prompt: '6. Irregular Past of "Cost" (No Change)',
        sentenceWithBlank: 'The new computer server ___ $3,500 last month.',
        options: ['cost', 'costed', 'costs'],
        correctIndex: 0,
        grammarFocus: 'Cost -> cost (invariable)',
        whyExplanation: '"Cost" does not change in Past Simple: "cost" (never "costed").'
      },
      {
        id: 'diag_m9_7',
        type: 'multiple_choice',
        prompt: '7. Irregular Past of "Fly" and "Meet"',
        options: [
          'The executive team flew to Singapore and met the overseas investors.',
          'The executive team flowed to Singapore and meeted the overseas investors.',
          'The executive team flew to Singapore and meeted the overseas investors.'
        ],
        correctIndex: 0,
        whyExplanation: '"Fly" -> "flew" and "meet" -> "met".'
      },
      {
        id: 'diag_m9_8',
        type: 'fill_blank',
        prompt: '8. Negative Irregular Past Structure',
        sentenceWithBlank: 'We ___ the final contract until legal counsel reviewed it.',
        options: ["didn't sign", "didn't signed", "not signed"],
        correctIndex: 0,
        grammarFocus: 'Didn\'t + base verb',
        whyExplanation: 'Use "didn\'t" + base verb "sign".'
      },
      {
        id: 'diag_m9_9',
        type: 'sentence_correction',
        prompt: '9. Irregular Past of "Pay"',
        incorrectSentence: 'The company payed the supplier by direct electronic transfer.',
        correctSentence: 'The company paid the supplier by direct electronic transfer.',
        errorHighlight: 'payed',
        options: [
          'The company paid the supplier by direct electronic transfer.',
          'The company payd the supplier by direct electronic transfer.',
          'The company was pay the supplier by direct electronic transfer.'
        ],
        correctIndex: 0,
        whyExplanation: 'The spelling of the past simple for "pay" is "paid".'
      },
      {
        id: 'diag_m9_10',
        type: 'fill_blank',
        prompt: '10. Irregular Past of "Think" and "Know"',
        sentenceWithBlank: 'I ___ we had the keys, but she ___ where they were.',
        options: ['thought / knew', 'thinked / knowed', 'thought / knowed'],
        correctIndex: 0,
        grammarFocus: 'Think -> thought; Know -> knew',
        whyExplanation: 'Past forms are "thought" and "knew".'
      }
    ]
  },

  10: {
    moduleId: 10,
    moduleTitle: 'Future Forms: Will vs Going To vs Present Continuous',
    diagnosticTitle: 'Module 10 Diagnostic: Future Expression Precision',
    tagline: 'Test your ability to distinguish spontaneous decisions, planned intentions, and scheduled events.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Will for instant spontaneous decisions', 'Going to for pre-planned intentions', 'Predictions with evidence', 'Timetables & schedules in Present Simple'],
    questions: [
      {
        id: 'diag_m10_1',
        type: 'fill_blank',
        prompt: '1. Spontaneous Decision at Moment of Speaking',
        sentenceWithBlank: 'The door buzzer is ringing; I ___ open it right now.',
        options: ['will', 'am going to', 'am'],
        correctIndex: 0,
        grammarFocus: 'Spontaneous decision uses "will"',
        whyExplanation: 'Instant spontaneous decisions use "will" + base verb.'
      },
      {
        id: 'diag_m10_2',
        type: 'multiple_choice',
        prompt: '2. Pre-Planned Intention with "Going to"',
        options: [
          'We are going to launch our mobile application in November.',
          'We will going to launch our mobile application in November.',
          'We are go to launch our mobile application in November.'
        ],
        correctIndex: 0,
        whyExplanation: 'Prior planned intentions use "are going to launch".'
      },
      {
        id: 'diag_m10_3',
        type: 'sentence_correction',
        prompt: '3. Bare Infinitive after "Will"',
        incorrectSentence: 'Our director will to approve the budget tomorrow morning.',
        correctSentence: 'Our director will approve the budget tomorrow morning.',
        errorHighlight: 'will to approve',
        options: [
          'Our director will approve the budget tomorrow morning.',
          'Our director will approving the budget tomorrow morning.',
          'Our director will approved the budget tomorrow morning.'
        ],
        correctIndex: 0,
        whyExplanation: 'Modal "will" is followed directly by the base verb without "to": "will approve".'
      },
      {
        id: 'diag_m10_4',
        type: 'fill_blank',
        prompt: '4. Prediction with Clear Present Evidence',
        sentenceWithBlank: 'Look at those heavy black clouds; it ___ rain very soon.',
        options: ['is going to', 'will to', 'is going'],
        correctIndex: 0,
        grammarFocus: 'Evidence-based prediction -> is going to',
        whyExplanation: 'Predictions based on visible current evidence use "is going to".'
      },
      {
        id: 'diag_m10_5',
        type: 'multiple_choice',
        prompt: '5. Public Timetables & Schedules',
        options: [
          'The morning flight to Frankfurt departs at 6:45 AM tomorrow.',
          'The morning flight to Frankfurt is depart at 6:45 AM tomorrow.',
          'The morning flight to Frankfurt will departing at 6:45 AM tomorrow.'
        ],
        correctIndex: 0,
        whyExplanation: 'Fixed public transportation timetables use Present Simple: "departs".'
      },
      {
        id: 'diag_m10_6',
        type: 'fill_blank',
        prompt: '6. Future Negative Contraction: "Won\'t"',
        sentenceWithBlank: 'We ___ be able to attend the regional conference due to budget limits.',
        options: ["won't", "willn't", "aren't"],
        correctIndex: 0,
        grammarFocus: 'Will not -> won\'t',
        whyExplanation: 'The contraction for "will not" is "won\'t".'
      },
      {
        id: 'diag_m10_7',
        type: 'sentence_correction',
        prompt: '7. Making an Instant Workplace Offer ("Will")',
        incorrectSentence: 'I am going to carry those heavy report boxes for you right now.',
        correctSentence: 'I will carry those heavy report boxes for you.',
        errorHighlight: 'am going to carry',
        options: [
          'I will carry those heavy report boxes for you.',
          'I carry those heavy report boxes for you right now.',
          'I am carrying those heavy report boxes for you offer.'
        ],
        correctIndex: 0,
        whyExplanation: 'Spontaneous offers of help use "will": "I will carry...".'
      },
      {
        id: 'diag_m10_8',
        type: 'fill_blank',
        prompt: '8. Future Question Structure with "Will"',
        sentenceWithBlank: '___ you assist us with the client onboarding session tomorrow?',
        options: ['Will', 'Are', 'Do'],
        correctIndex: 0,
        grammarFocus: 'Future modal question -> Will + subject + base verb',
        whyExplanation: 'Polite future willingness/request starts with "Will you assist...?".'
      },
      {
        id: 'diag_m10_9',
        type: 'multiple_choice',
        prompt: '9. Future Time Expression Position',
        options: [
          'The project lead will present the quarterly findings next Monday.',
          'The project lead will present next Monday the quarterly findings.',
          'The project lead will next Monday present the quarterly findings.'
        ],
        correctIndex: 0,
        whyExplanation: 'Time expressions typically go at the end of the clause in English.'
      },
      {
        id: 'diag_m10_10',
        type: 'fill_blank',
        prompt: '10. "Shall" for Formal Offers / Suggestions',
        sentenceWithBlank: '___ we schedule the briefing for Tuesday morning?',
        options: ['Shall', 'Will to', 'Are'],
        correctIndex: 0,
        grammarFocus: '"Shall we..." for collaborative proposals',
        whyExplanation: '"Shall we...?" is a classic formal English way to suggest a joint action.'
      }
    ]
  },

  11: {
    moduleId: 11,
    moduleTitle: 'Questions, Auxiliary Inversion & Negations',
    diagnosticTitle: 'Module 11 Diagnostic: Questions & Inversions',
    tagline: 'Test your mastery of QUASM question architecture, subject questions, and embedded indirect phrasing.',
    estimatedMinutes: 8,
    coreConceptsTested: ['QUASM (Question Word + Aux + Subject + Main Verb)', 'Subject Questions without auxiliary', 'Indirect polite questions', 'Negative question formation'],
    questions: [
      {
        id: 'diag_m11_1',
        type: 'multiple_choice',
        prompt: '1. QUASM Information Question Word Order',
        options: [
          'Where does the director usually hold the weekly briefing?',
          'Where the director usually holds the weekly briefing?',
          'Where do the director usually hold the weekly briefing?'
        ],
        correctIndex: 0,
        grammarFocus: 'QUASM: Where + does + the director + hold',
        whyExplanation: 'Follows QUASM: Question word (Where) + Auxiliary (does) + Subject (the director) + Verb (hold).'
      },
      {
        id: 'diag_m11_2',
        type: 'fill_blank',
        prompt: '2. Subject Question (No Auxiliary Needed)',
        sentenceWithBlank: 'Who ___ the final approval on the software purchase?',
        options: ['gave', 'did give', 'did gave'],
        correctIndex: 0,
        grammarFocus: 'Subject question uses affirmative past verb directly',
        whyExplanation: 'When "Who" is the subject, no auxiliary "did" is needed: "Who gave...?".'
      },
      {
        id: 'diag_m11_3',
        type: 'sentence_correction',
        prompt: '3. Past Simple Question Base Verb Rule',
        incorrectSentence: 'Did you attended the cybersecurity compliance training?',
        correctSentence: 'Did you attend the cybersecurity compliance training?',
        errorHighlight: 'Did you attended',
        options: [
          'Did you attend the cybersecurity compliance training?',
          'Did you attending the cybersecurity compliance training?',
          'Were you attend the cybersecurity compliance training?'
        ],
        correctIndex: 0,
        whyExplanation: 'Auxiliary "Did" requires the base verb "attend".'
      },
      {
        id: 'diag_m11_4',
        type: 'fill_blank',
        prompt: '4. Auxiliary with Third-Person Singular in Yes/No Question',
        sentenceWithBlank: '___ your manager approve remote work requests?',
        options: ['Does', 'Do', 'Is'],
        correctIndex: 0,
        grammarFocus: 'Does + singular subject + base verb',
        whyExplanation: 'Singular subject ("your manager") takes "Does".'
      },
      {
        id: 'diag_m11_5',
        type: 'multiple_choice',
        prompt: '5. Indirect / Embedded Question Word Order',
        options: [
          'Could you please let me know where the boardroom is?',
          'Could you please let me know where is the boardroom?',
          'Could you please let me know where does the boardroom be?'
        ],
        correctIndex: 0,
        whyExplanation: 'Embedded clauses use statement word order: "where the boardroom is".'
      },
      {
        id: 'diag_m11_6',
        type: 'fill_blank',
        prompt: '6. Asking About Frequency: "How often"',
        sentenceWithBlank: '___ does the safety committee conduct building inspections?',
        options: ['How often', 'How many', 'How long'],
        correctIndex: 0,
        grammarFocus: 'Frequency inquiry -> How often',
        whyExplanation: '"How often" is used to inquire about recurring frequency.'
      },
      {
        id: 'diag_m11_7',
        type: 'sentence_correction',
        prompt: '7. Avoiding Double Negatives',
        incorrectSentence: 'I didn’t see nobody in the technical support lab.',
        correctSentence: 'I didn’t see anybody in the technical support lab.',
        errorHighlight: 'didn’t see nobody',
        options: [
          'I didn’t see anybody in the technical support lab.',
          'I saw not nobody in the technical support lab.',
          'I didn’t saw anybody in the technical support lab.'
        ],
        correctIndex: 0,
        whyExplanation: 'Standard English pairs negative verb "didn\'t see" with "anybody".'
      },
      {
        id: 'diag_m11_8',
        type: 'fill_blank',
        prompt: '8. Question Tag with Affirmative Statement',
        sentenceWithBlank: 'The quarterly financial report is ready, ___?',
        options: ["isn't it", "doesn't it", "is it"],
        correctIndex: 0,
        grammarFocus: 'Positive statement takes negative tag',
        whyExplanation: '"The report is ready" takes the negative tag "isn\'t it?".'
      },
      {
        id: 'diag_m11_9',
        type: 'multiple_choice',
        prompt: '9. Asking About Duration: "How long"',
        options: [
          'How long will the technical system maintenance take?',
          'How much time will the technical system maintenance take casual?',
          'How many will the technical system maintenance take?'
        ],
        correctIndex: 0,
        whyExplanation: '"How long will... take?" is the standard question structure for time duration.'
      },
      {
        id: 'diag_m11_10',
        type: 'fill_blank',
        prompt: '10. Question with Modal Auxiliary',
        sentenceWithBlank: '___ we review the draft contract before sending it to the client?',
        options: ['Should', 'Do should', 'Are'],
        correctIndex: 0,
        grammarFocus: 'Modal question inversion -> Should + subject + base verb',
        whyExplanation: 'Modal questions invert the modal and subject: "Should we review...?".'
      }
    ]
  },

  12: {
    moduleId: 12,
    moduleTitle: 'Modal Verbs (Can, Could, Should, Must, Have To)',
    diagnosticTitle: 'Module 12 Diagnostic: Workplace Modals & Politeness',
    tagline: 'Test your understanding of permission, ability, recommendation, obligation, and diplomatic phrasing.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Polite requests with Could/Would', 'Advice with Should', 'Obligation: Must vs Have to', 'Prohibition: Must not vs Don\'t have to'],
    questions: [
      {
        id: 'diag_m12_1',
        type: 'fill_blank',
        prompt: '1. Polite Workplace Request',
        sentenceWithBlank: '___ you please forward the updated contract to legal counsel?',
        options: ['Could', 'Must', 'Should to'],
        correctIndex: 0,
        grammarFocus: 'Polite modal request "Could you please..."',
        whyExplanation: '"Could you please...?" is the international business standard for courteous requests.'
      },
      {
        id: 'diag_m12_2',
        type: 'sentence_correction',
        prompt: '2. Bare Infinitive after Modals',
        incorrectSentence: 'All team members must to submit their expense receipts.',
        correctSentence: 'All team members must submit their expense receipts.',
        errorHighlight: 'must to submit',
        options: [
          'All team members must submit their expense receipts.',
          'All team members must submitting their expense receipts.',
          'All team members must to submitting their expense receipts.'
        ],
        correctIndex: 0,
        whyExplanation: 'Modal verbs are followed directly by the base verb without "to": "must submit".'
      },
      {
        id: 'diag_m12_3',
        type: 'multiple_choice',
        prompt: '3. Prohibition vs Lack of Obligation',
        options: [
          'Employees must not share confidential passwords with anyone.',
          'Employees don\'t have to share confidential passwords with anyone prohibition.',
          'Employees might not share confidential passwords with anyone.'
        ],
        correctIndex: 0,
        whyExplanation: '"Must not" denotes strict prohibition. "Don\'t have to" merely means lack of necessity.'
      },
      {
        id: 'diag_m12_4',
        type: 'fill_blank',
        prompt: '4. Soft Recommendation / Advice with "Should"',
        sentenceWithBlank: 'You ___ create a local backup before installing the software update.',
        options: ['should', 'should to', 'must to'],
        correctIndex: 0,
        grammarFocus: 'Advice modal "should" + base verb',
        whyExplanation: '"Should" expresses sensible recommendations.'
      },
      {
        id: 'diag_m12_5',
        type: 'sentence_correction',
        prompt: '5. Semi-Modal "Have to" Conjugation',
        incorrectSentence: 'She have to attend the regional management meeting today.',
        correctSentence: 'She has to attend the regional management meeting today.',
        errorHighlight: 'have to attend',
        options: [
          'She has to attend the regional management meeting today.',
          'She must to attend the regional management meeting today.',
          'She is having to attend the regional management meeting today.'
        ],
        correctIndex: 0,
        whyExplanation: 'Third-person singular takes "has to".'
      },
      {
        id: 'diag_m12_6',
        type: 'fill_blank',
        prompt: '6. Modal of Workplace Possibility: "Might"',
        sentenceWithBlank: 'The shipment ___ arrive late due to winter weather at the port.',
        options: ['might', 'can to', 'ought'],
        correctIndex: 0,
        grammarFocus: 'Possibility -> "might"',
        whyExplanation: '"Might" expresses potential possibility without certainty.'
      },
      {
        id: 'diag_m12_7',
        type: 'multiple_choice',
        prompt: '7. Polite Workplace Offer with "Would you like..."',
        options: [
          'Would you like me to review your presentation slides before the meeting?',
          'Do you like me to review your presentation slides before the meeting?',
          'Will you like me to review your presentation slides before the meeting?'
        ],
        correctIndex: 0,
        whyExplanation: '"Would you like me to [action]?" is the classic professional offer formula.'
      },
      {
        id: 'diag_m12_8',
        type: 'fill_blank',
        prompt: '8. Lack of Obligation: "Don\'t have to"',
        sentenceWithBlank: 'You ___ come to the office tomorrow because it is an optional work-from-home day.',
        options: ["don't have to", "must not", "can't"],
        correctIndex: 0,
        grammarFocus: 'Lack of necessity -> don\'t have to',
        whyExplanation: '"Don\'t have to" indicates something is optional.'
      },
      {
        id: 'diag_m12_9',
        type: 'sentence_correction',
        prompt: '9. Modal for Formal Permission: "May"',
        incorrectSentence: 'May I to leave the briefing 10 minutes early for an appointment?',
        correctSentence: 'May I leave the briefing 10 minutes early for an appointment?',
        errorHighlight: 'May I to leave',
        options: [
          'May I leave the briefing 10 minutes early for an appointment?',
          'May I leaving the briefing 10 minutes early for an appointment?',
          'May I can leave the briefing 10 minutes early for an appointment?'
        ],
        correctIndex: 0,
        whyExplanation: 'Modal "May" is followed directly by the base verb "leave".'
      },
      {
        id: 'diag_m12_10',
        type: 'multiple_choice',
        prompt: '10. Past Ability: "Could" vs "Was able to"',
        options: [
          'Despite the severe server crash, our IT team was able to recover all data.',
          'Despite the severe server crash, our IT team could to recover all data.',
          'Despite the severe server crash, our IT team was can recover all data.'
        ],
        correctIndex: 0,
        whyExplanation: 'For a specific single past achievement in a difficult situation, standard English prefers "was/were able to".'
      }
    ]
  },

  13: {
    moduleId: 13,
    moduleTitle: 'Conditionals (Zero & First Conditionals)',
    diagnosticTitle: 'Module 13 Diagnostic: Conditionals & Cause/Effect',
    tagline: 'Test your understanding of zero conditionals (rules/facts) and first conditionals (real future possibilities).',
    estimatedMinutes: 8,
    coreConceptsTested: ['Zero conditional (If + Present, Present)', 'First conditional (If + Present, Will + Verb)', 'Comma punctuation in if-clauses', 'Unless = If not'],
    questions: [
      {
        id: 'diag_m13_1',
        type: 'multiple_choice',
        prompt: '1. First Conditional Clause Tense Rules',
        options: [
          'If the client approves the budget today, we will begin production on Monday.',
          'If the client will approve the budget today, we will begin production on Monday.',
          'If the client approves the budget today, we begin production on Monday future.'
        ],
        correctIndex: 0,
        grammarFocus: 'If + Present Simple, will + base verb',
        whyExplanation: 'In First Conditional, the "if" clause takes Present Simple ("approves"), never "will".'
      },
      {
        id: 'diag_m13_2',
        type: 'sentence_correction',
        prompt: '2. Conditional Sentence Punctuation (Comma Rule)',
        incorrectSentence: 'If you need additional assistance please contact Ms. Maria directly.',
        correctSentence: 'If you need additional assistance, please contact Ms. Maria directly.',
        errorHighlight: 'assistance please',
        options: [
          'If you need additional assistance, please contact Ms. Maria directly.',
          'If you will need additional assistance, please contact.',
          'When you need additional assistance so please contact.'
        ],
        correctIndex: 0,
        whyExplanation: 'When the "if" clause comes at the start of a sentence, it must be separated by a comma.'
      },
      {
        id: 'diag_m13_3',
        type: 'fill_blank',
        prompt: '3. Zero Conditional for Automatic Workplace Rules',
        sentenceWithBlank: 'If an invoice ___ not include a tax ID, accounting automatically rejects it.',
        options: ['does', 'will', 'is'],
        correctIndex: 0,
        grammarFocus: 'Zero conditional uses Present Simple in both clauses',
        whyExplanation: 'Zero conditional for automatic facts: If + Present Simple ("does not include"), Present Simple ("rejects").'
      },
      {
        id: 'diag_m13_4',
        type: 'multiple_choice',
        prompt: '4. Inverted Conditional Order (No Comma)',
        options: [
          'We will reschedule the webinar if the software update takes too long.',
          'We will reschedule the webinar, if the software update takes too long.',
          'We reschedule the webinar if the software update will take too long.'
        ],
        correctIndex: 0,
        whyExplanation: 'When the main clause comes first and the "if" clause follows, no comma is needed.'
      },
      {
        id: 'diag_m13_5',
        type: 'fill_blank',
        prompt: '5. "Unless" Meaning "If Not"',
        sentenceWithBlank: 'We cannot ship the order ___ the client submits payment verification.',
        options: ['unless', 'if', 'without'],
        correctIndex: 0,
        grammarFocus: '"Unless" + affirmative clause = If ... not',
        whyExplanation: '"Unless" means "except if" / "if ... not".'
      },
      {
        id: 'diag_m13_6',
        type: 'sentence_correction',
        prompt: '6. First Conditional with Modal in Result Clause',
        incorrectSentence: 'If the budget is approved, we can to hire two junior developers.',
        correctSentence: 'If the budget is approved, we can hire two junior developers.',
        errorHighlight: 'can to hire',
        options: [
          'If the budget is approved, we can hire two junior developers.',
          'If the budget will be approved, we can hire.',
          'If the budget is approved, we can hiring two junior developers.'
        ],
        correctIndex: 0,
        whyExplanation: 'Modal "can" is followed by bare infinitive "hire".'
      },
      {
        id: 'diag_m13_7',
        type: 'fill_blank',
        prompt: '7. First Conditional Negative Result',
        sentenceWithBlank: 'If we don’t finalize the designs today, we ___ meet the client deadline.',
        options: ["won't", "don't", "aren't"],
        correctIndex: 0,
        grammarFocus: 'Negative future result -> won\'t',
        whyExplanation: 'Future negative result clause uses "won\'t meet".'
      },
      {
        id: 'diag_m13_8',
        type: 'multiple_choice',
        prompt: '8. Real-Life First Conditional Decision',
        options: [
          'If it rains tomorrow, we will hold the company banquet in the main hall.',
          'If it will rain tomorrow, we will hold the company banquet in the main hall.',
          'If it rains tomorrow, we hold the company banquet in the main hall tomorrow.'
        ],
        correctIndex: 0,
        whyExplanation: 'If + Present Simple ("rains"), will + base verb ("will hold").'
      },
      {
        id: 'diag_m13_9',
        type: 'fill_blank',
        prompt: '9. "As soon as" Time Clause with Present Simple',
        sentenceWithBlank: 'I will email you the finalized contract as soon as the director ___ it.',
        options: ['signs', 'will sign', 'signed'],
        correctIndex: 0,
        grammarFocus: 'Time clauses (as soon as, when, before) use Present Simple for future',
        whyExplanation: 'Future time clauses introduced by "as soon as" take the Present Simple: "signs".'
      },
      {
        id: 'diag_m13_10',
        type: 'sentence_correction',
        prompt: '10. Zero Conditional with Imperative',
        incorrectSentence: 'If you have any questions, you will call the help desk.',
        correctSentence: 'If you have any questions, please call the help desk.',
        errorHighlight: 'you will call',
        options: [
          'If you have any questions, please call the help desk.',
          'If you will have any questions, please call.',
          'If you have any questions, calling the help desk.'
        ],
        correctIndex: 0,
        whyExplanation: 'Conditional instructions pair "If you..." directly with a polite imperative ("please call...").'
      }
    ]
  },

  14: {
    moduleId: 14,
    moduleTitle: 'Conjunctions & Compound Sentence Connectors',
    diagnosticTitle: 'Module 14 Diagnostic: Sentence Connectors & Flow',
    tagline: 'Test your mastery of FANBOYS conjunctions, cause/effect (so vs because), and conjunctive adverbs (however).',
    estimatedMinutes: 8,
    coreConceptsTested: ['Coordinating conjunctions (and, but, so, or)', 'Subordinating connectors (because, although, since)', 'Conjunctive adverbs (however, therefore)', 'Avoiding double connectors'],
    questions: [
      {
        id: 'diag_m14_1',
        type: 'fill_blank',
        prompt: '1. Cause vs Result: "Because" vs "So"',
        sentenceWithBlank: 'The flight was cancelled, ___ we rescheduled the client presentation.',
        options: ['so', 'because', 'although'],
        correctIndex: 0,
        grammarFocus: 'Result conjunction -> "so"',
        whyExplanation: '"So" introduces the result of the previous clause.'
      },
      {
        id: 'diag_m14_2',
        type: 'sentence_correction',
        prompt: '2. Avoiding Double Conjunctions ("Although... but")',
        incorrectSentence: 'Although the deadline was tight, but our team completed the deliverable.',
        correctSentence: 'Although the deadline was tight, our team completed the deliverable.',
        errorHighlight: 'Although ... but',
        options: [
          'Although the deadline was tight, our team completed the deliverable.',
          'Although the deadline was tight, and our team completed the deliverable.',
          'Although but the deadline was tight our team completed the deliverable.'
        ],
        correctIndex: 0,
        whyExplanation: 'Never pair "Although" and "but" in the same sentence.'
      },
      {
        id: 'diag_m14_3',
        type: 'multiple_choice',
        prompt: '3. Punctuation with Conjunctive Adverb "However"',
        options: [
          'The software is fast; however, it lacks multi-user collaboration.',
          'The software is fast, however it lacks multi-user collaboration.',
          'The software is fast however, it lacks multi-user collaboration.'
        ],
        correctIndex: 0,
        whyExplanation: 'Conjunctive adverbs connecting two independent clauses use a semicolon before and comma after.'
      },
      {
        id: 'diag_m14_4',
        type: 'fill_blank',
        prompt: '4. Conjunction for Reason: "Because"',
        sentenceWithBlank: 'We postponed the product launch ___ several key safety tests were incomplete.',
        options: ['because', 'so', 'therefore'],
        correctIndex: 0,
        grammarFocus: 'Reason connector -> "because"',
        whyExplanation: '"Because" introduces the cause or reason.'
      },
      {
        id: 'diag_m14_5',
        type: 'sentence_correction',
        prompt: '5. Coordinating Conjunction Punctuation (FANBOYS)',
        incorrectSentence: 'Marcus finished the report and Elena sent the client invoices.',
        correctSentence: 'Marcus finished the report, and Elena sent the client invoices.',
        errorHighlight: 'report and',
        options: [
          'Marcus finished the report, and Elena sent the client invoices.',
          'Marcus finished the report, and, Elena sent.',
          'Marcus finished the report; and Elena sent.'
        ],
        correctIndex: 0,
        whyExplanation: 'When linking two complete independent clauses with "and", place a comma before the conjunction.'
      },
      {
        id: 'diag_m14_6',
        type: 'fill_blank',
        prompt: '6. Contrast Connector: "Although"',
        sentenceWithBlank: '___ the server upgrade was costly, it improved processing speed significantly.',
        options: ['Although', 'Because', 'So'],
        correctIndex: 0,
        grammarFocus: 'Contrast connector -> Although',
        whyExplanation: '"Although" introduces a concession or contrast.'
      },
      {
        id: 'diag_m14_7',
        type: 'multiple_choice',
        prompt: '7. "Therefore" for Formal Business Consequence',
        options: [
          'Sales exceeded projections; therefore, all staff received a bonus.',
          'Sales exceeded projections, therefore all staff received a bonus.',
          'Sales exceeded projections therefore, all staff received a bonus.'
        ],
        correctIndex: 0,
        whyExplanation: 'Connect independent clauses with semicolon + therefore + comma.'
      },
      {
        id: 'diag_m14_8',
        type: 'fill_blank',
        prompt: '8. Alternative Conjunction: "Either... or"',
        sentenceWithBlank: 'We must ___ renegotiate the supplier contract or find an alternative vendor.',
        options: ['either', 'neither', 'both'],
        correctIndex: 0,
        grammarFocus: 'Correlative conjunction "either ... or"',
        whyExplanation: '"Either" pairs with "or" to present two alternatives.'
      },
      {
        id: 'diag_m14_9',
        type: 'sentence_correction',
        prompt: '9. Negative Correlative Conjunction: "Neither... nor"',
        incorrectSentence: 'Neither the manager or the assistant was aware of the delay.',
        correctSentence: 'Neither the manager nor the assistant was aware of the delay.',
        errorHighlight: 'or the assistant',
        options: [
          'Neither the manager nor the assistant was aware of the delay.',
          'Neither the manager and the assistant was aware.',
          'Neither the manager or the assistant were aware.'
        ],
        correctIndex: 0,
        whyExplanation: '"Neither" pairs strictly with "nor".'
      },
      {
        id: 'diag_m14_10',
        type: 'multiple_choice',
        prompt: '10. "In addition" for Adding Workplace Information',
        options: [
          'The new policy reduces costs. In addition, it enhances employee satisfaction.',
          'The new policy reduces costs in addition it enhances employee satisfaction.',
          'The new policy reduces costs, in addition it enhances.'
        ],
        correctIndex: 0,
        whyExplanation: '"In addition," is an introductory transitional phrase followed by a comma.'
      }
    ]
  },

  15: {
    moduleId: 15,
    moduleTitle: 'Articles (A, An, The) & Phonetic Rules',
    diagnosticTitle: 'Module 15 Diagnostic: Articles & Phonetic Sound',
    tagline: 'Test your grasp of indefinite vs definite articles, phonetic vowel sounds (silent h, glide u), and zero article rules.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Phonetic vowel sounds (an honest, an hour)', 'Consonant glide sounds (a European, a university)', 'Specific vs General reference', 'Zero article with abstract and plural nouns'],
    questions: [
      {
        id: 'diag_m15_1',
        type: 'fill_blank',
        prompt: '1. Phonetic Vowel Sound with Silent "H"',
        sentenceWithBlank: 'The client called to request ___ urgent meeting with Ms. Maria.',
        options: ['an', 'a', 'the no article'],
        correctIndex: 0,
        grammarFocus: '"Urgent" begins with vowel sound /ɜː/ -> an',
        whyExplanation: '"Urgent" begins with a vowel sound, requiring "an".'
      },
      {
        id: 'diag_m15_2',
        type: 'multiple_choice',
        prompt: '2. Consonant Glide Sound (/j/) with Letter "U"',
        options: [
          'She graduated from a prestigious European university.',
          'She graduated from an prestigious European university.',
          'She graduated from a prestigious European an university.'
        ],
        correctIndex: 0,
        whyExplanation: '"European" (/jʊərə.../) and "university" (/j.../) begin with consonant glide sounds and take "a".'
      },
      {
        id: 'diag_m15_3',
        type: 'fill_blank',
        prompt: '3. Silent "H" in "Hour" / "Honest"',
        sentenceWithBlank: 'The board meeting concluded after ___ hour and fifteen minutes.',
        options: ['an', 'a', 'the no article'],
        correctIndex: 0,
        grammarFocus: '"Hour" has silent \'h\' -> starts with vowel sound /aʊə/',
        whyExplanation: '"Hour" has a silent \'h\', so it takes "an".'
      },
      {
        id: 'diag_m15_4',
        type: 'sentence_correction',
        prompt: '4. Specific Reference with Definite Article "The"',
        incorrectSentence: 'Please sign a document that we reviewed earlier today.',
        correctSentence: 'Please sign the document that we reviewed earlier today.',
        errorHighlight: 'sign a document that',
        options: [
          'Please sign the document that we reviewed earlier today.',
          'Please sign an document that we reviewed earlier today.',
          'Please sign document that we reviewed earlier today.'
        ],
        correctIndex: 0,
        whyExplanation: 'Because the document is uniquely specified ("that we reviewed earlier"), use "the".'
      },
      {
        id: 'diag_m15_5',
        type: 'fill_blank',
        prompt: '5. Zero Article with General Abstract Nouns',
        sentenceWithBlank: '___ integrity is the foundation of our corporate reputation.',
        options: ['No article (Integrity)', 'The integrity', 'An integrity'],
        correctIndex: 0,
        grammarFocus: 'Abstract nouns in general sense take zero article',
        whyExplanation: 'Abstract nouns used generally take no article.'
      },
      {
        id: 'diag_m15_6',
        type: 'multiple_choice',
        prompt: '6. Geographical Names with "The"',
        options: [
          'We have business operations in the United States and Canada.',
          'We have business operations in United States and the Canada.',
          'We have business operations in the United States and the Canada.'
        ],
        correctIndex: 0,
        whyExplanation: 'Countries with plural/union names take "the" ("the United States"), while standard single country names do not ("Canada").'
      },
      {
        id: 'diag_m15_7',
        type: 'fill_blank',
        prompt: '7. Acronym with Initial Vowel Sound',
        sentenceWithBlank: 'He sent me ___ PDF attachment containing the financial audit.',
        options: ['a', 'an', 'the no article'],
        correctIndex: 0,
        grammarFocus: '"PDF" starts with /p/ consonant sound -> "a"',
        whyExplanation: '"PDF" begins with the consonant sound /p/, so it takes "a". (Compare with "an MBA" /em/).'
      },
      {
        id: 'diag_m15_8',
        type: 'sentence_correction',
        prompt: '8. Acronym with Vowel Sound: "MBA / HR"',
        incorrectSentence: 'She has a MBA degree from Harvard Business School.',
        correctSentence: 'She has an MBA degree from Harvard Business School.',
        errorHighlight: 'a MBA degree',
        options: [
          'She has an MBA degree from Harvard Business School.',
          'She has the MBA degree from Harvard Business School general.',
          'She has MBA degree without article.'
        ],
        correctIndex: 0,
        whyExplanation: 'The letter "M" is pronounced /em/ (vowel sound), requiring "an MBA".'
      },
      {
        id: 'diag_m15_9',
        type: 'fill_blank',
        prompt: '9. Unique Entities with "The"',
        sentenceWithBlank: '___ sun was setting as the conference concluded.',
        options: ['The', 'A', 'An'],
        correctIndex: 0,
        grammarFocus: 'Unique celestial objects take "The"',
        whyExplanation: 'Entities that are unique in the world take "The".'
      },
      {
        id: 'diag_m15_10',
        type: 'multiple_choice',
        prompt: '10. Second Mention Rule',
        options: [
          'We hired a consultant. The consultant began working yesterday.',
          'We hired a consultant. A consultant began working yesterday.',
          'We hired the consultant. A consultant began working yesterday.'
        ],
        correctIndex: 0,
        whyExplanation: 'First mention takes indefinite "a consultant"; second mention becomes specific and takes "The consultant".'
      }
    ]
  },

  16: {
    moduleId: 16,
    moduleTitle: 'Polite Workplace & Real-Life Communication',
    diagnosticTitle: 'Module 16 Diagnostic: Workplace Pragmatics & Diplomacy',
    tagline: 'Test your ability to write professional emails, request clarifications, soften disagreements, and handle international meetings.',
    estimatedMinutes: 8,
    coreConceptsTested: ['Email opening & closing standards', 'Diplomatic disagreements', 'Phone & video conference clarifications', 'Formal vs Casual registers'],
    questions: [
      {
        id: 'diag_m16_1',
        type: 'real_life_situation',
        prompt: '1. Video Conference Clarification Request',
        scenario: 'During an online international meeting, a colleague speaks too quickly and you missed the deadline number.',
        speaker: 'You (in meeting)',
        promptQuestion: 'What is the most polite and natural way to request clarification?',
        options: [
          'Could you please slow down slightly and repeat that deadline date?',
          'You are too fast, talk slowly.',
          'Say the date again now.'
        ],
        correctIndex: 0,
        grammarFocus: 'Polite modal "Could you please..." + specific point',
        whyExplanation: '"Could you please slow down slightly and repeat...?" is courteous, professional, and clear.'
      },
      {
        id: 'diag_m16_2',
        type: 'multiple_choice',
        prompt: '2. Professional Email Closing Phrase',
        options: [
          'Please let me know if you have any questions, and I look forward to working with you.',
          'I look forward to work with you and tell me questions.',
          'Please to let me know your question.'
        ],
        correctIndex: 0,
        whyExplanation: '"Please let me know if you have any questions" and "look forward to working with you" (+ gerund) are the global standards of professional email writing.'
      },
      {
        id: 'diag_m16_3',
        type: 'sentence_correction',
        prompt: '3. Gerund after "Look forward to"',
        incorrectSentence: 'I look forward to hear from you soon regarding the proposal.',
        correctSentence: 'I look forward to hearing from you soon regarding the proposal.',
        errorHighlight: 'look forward to hear',
        options: [
          'I look forward to hearing from you soon regarding the proposal.',
          'I look forward to heard from you soon regarding the proposal.',
          'I looking forward to hear from you soon regarding the proposal.'
        ],
        correctIndex: 0,
        whyExplanation: 'In the phrase "look forward to", "to" is a preposition and MUST be followed by a gerund ("hearing").'
      },
      {
        id: 'diag_m16_4',
        type: 'real_life_situation',
        prompt: '4. Diplomatic Workplace Disagreement',
        scenario: 'In a project briefing, you believe a proposed launch date is unrealistic due to incomplete testing.',
        speaker: 'You (to Management)',
        promptQuestion: 'Which sentence presents your counterpoint with professional diplomacy?',
        options: [
          'I appreciate the ambition behind this timeline; however, rushing testing could introduce critical system vulnerabilities.',
          'That launch date is completely wrong and impossible.',
          'I am not agree with this bad schedule.'
        ],
        correctIndex: 0,
        grammarFocus: 'Acknowledge viewpoint + contrast + objective risk',
        whyExplanation: 'Validating the intention first ("I appreciate...") and stating the objective risk is the hallmark of executive communication.'
      },
      {
        id: 'diag_m16_5',
        type: 'fill_blank',
        prompt: '5. Polite Apology for Delay in Email',
        sentenceWithBlank: '___ for the delayed response; I was in meetings all morning.',
        options: ['I apologize', 'Sorry me', 'Excuse for'],
        correctIndex: 0,
        grammarFocus: 'Professional formal apology formula',
        whyExplanation: '"I apologize for the delayed response" is the standard professional formula.'
      },
      {
        id: 'diag_m16_6',
        type: 'multiple_choice',
        prompt: '6. Professional Email Attachment Reference',
        options: [
          'Please find attached the revised financial projections for your review.',
          'Please to find attached the revised financial projections.',
          'I attach you the financial projections here.'
        ],
        correctIndex: 0,
        whyExplanation: '"Please find attached..." is standard business correspondence.'
      },
      {
        id: 'diag_m16_7',
        type: 'real_life_situation',
        prompt: '7. Leaving a Workplace Voice Message',
        scenario: 'You are calling a client about an invoice and reach their voicemail.',
        speaker: 'You (on voicemail)',
        promptQuestion: 'What is the most complete and professional voicemail message?',
        options: [
          'Hello, this is Marcus from Horizon Logistics regarding invoice #402. Please call me back at your earliest convenience at 555-0199. Thank you.',
          'Call me back now about the bill at 555-0199.',
          'This is Marcus, you need to pay invoice #402.'
        ],
        correctIndex: 0,
        grammarFocus: 'Identification + Context + Call to Action + Contact Number',
        whyExplanation: 'Professional voicemails include caller name, company, purpose, callback request, and phone number.'
      },
      {
        id: 'diag_m16_8',
        type: 'fill_blank',
        prompt: '8. Softening Directive Language with "Could"',
        sentenceWithBlank: '___ you please send the updated slides before our 2:00 PM sync?',
        options: ['Could', 'Must', 'Should to'],
        correctIndex: 0,
        grammarFocus: 'Softened modal request',
        whyExplanation: 'Use "Could you please..." instead of direct imperative commands.'
      },
      {
        id: 'diag_m16_9',
        type: 'sentence_correction',
        prompt: '9. Professional Inquiry Phrasing',
        incorrectSentence: 'I want that you tell me the meeting venue location.',
        correctSentence: 'Could you please let me know the location of the meeting venue?',
        errorHighlight: 'I want that you tell me',
        options: [
          'Could you please let me know the location of the meeting venue?',
          'I want you tell me the meeting venue.',
          'Tell me where is the meeting venue now.'
        ],
        correctIndex: 0,
        whyExplanation: 'Avoid blunt translations like "I want that you...". Use "Could you please let me know...".'
      },
      {
        id: 'diag_m16_10',
        type: 'multiple_choice',
        prompt: '10. Acknowledging Reception in Business Chat',
        options: [
          'Thank you, I have received the files and will review them shortly.',
          'I got it and will review shortly thanks casual.',
          'Received file.'
        ],
        correctIndex: 0,
        whyExplanation: '"Thank you, I have received the files and will review them shortly" provides professional confirmation and a clear next step.'
      }
    ]
  }
};

export const getDiagnosticForModule = (moduleId: number): LessonDiagnosticInfo | undefined => {
  return LESSON_DIAGNOSTICS[moduleId];
};
