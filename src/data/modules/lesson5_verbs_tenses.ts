import { Module, Topic } from '../../types';

export const lesson5VerbsTenses: Module = {
  id: 5,
  title: 'Lesson 5: Verbs and Tenses',
  tagline: 'Actions, States, Time Frames & Verb Forms',
  description: 'The core engine of English: Subject-Verb Agreement, Transitive/Intransitive verbs, all Present/Past/Future tenses, BE/HAVE/DO forms, Participles, Infinitives, Imperatives, and Gerunds.',
  iconName: 'Zap',
  color: 'from-red-600 to-rose-600',
  topics: [
    {
      id: 'l5_t1_subject_verb_agreement',
      moduleId: 5,
      title: 'Subject and Verb Agreement',
      shortDesc: 'Singular subjects take singular verbs; plural subjects take plural verbs.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Subject-Verb Agreement: The Golden Rule',
          subtitle: 'Every verb must match the number and person of its subject.',
          conceptSummary: 'In English, a singular subject (he, she, it, the manager) takes a singular verb (works, is, has). A plural subject (they, we, the managers) takes a plural verb (work, are, have).',
          visualGraphic: {
            heroSentence: 'The manager approves the budget, but the directors approve the strategy.',
            highlights: [
              { word: 'manager approves', role: 'Singular Subject + Singular Verb (-s)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'directors approve', role: 'Plural Subject + Plural Verb (Base)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Nouns add -s for plural (directors); verbs add -s for singular present (approves).'
          },
          keyTakeaways: [
            'Singular subject (3rd person) = Verb + s/es (He speaks, She teaches).',
            'Plural subject = Base verb (They speak, We teach).',
            'Don\'t be distracted by words between the subject and verb (The box of chocolates IS on the table).',
            'Compound subjects joined by "and" take plural verbs (Sarah and David work together).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Agreement Matters',
          subtitle: 'The #1 marker of English grammatical precision in writing and speech.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Performance Appraisals',
              example: '"The team of analysts delivers high-quality reports."',
              whyNeeded: 'Matching the head noun ("team" → singular "delivers") demonstrates sophisticated grammar.'
            }
          ],
          coachTip: 'Ignore prepositional phrases! Find the true HEAD noun: "The [cost] of all these items [is] high."'
        },
        {
          type: 'explanation',
          title: 'Agreement Rules & Tricky Scenarios',
          subtitle: 'How to handle intervening phrases and compound subjects.',
          coreRule: 'Find the real subject doing the action, regardless of prepositional phrases or descriptive modifiers.',
          breakdown: [
            { term: 'Head Noun vs. Prepositional Phrase', plainDefinition: 'The noun before "of", "in", "with" controls the verb', simpleExample: 'The quality of these products IS outstanding (not are).' },
            { term: 'Subjects joined by "and"', plainDefinition: 'Two or more nouns joined by "and" create a plural', simpleExample: 'The CEO and the CFO ARE attending.' },
            { term: 'Either...or / Neither...nor', plainDefinition: 'The verb agrees with the CLOSER subject', simpleExample: 'Neither the manager nor the employees WERE present.' },
            { term: 'Collective Nouns', plainDefinition: 'Singular when acting as a whole group', simpleExample: 'The jury HAS reached a verdict.' }
          ]
        },
        {
          type: 'formula',
          title: 'Agreement Formula',
          subtitle: '[Head Noun] + (intervening phrase) + [Matching Verb]',
          formulaBlocks: [
            { label: 'Singular Head Noun', part: 'The list (of items)', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Singular Verb', part: 'is / was / contains', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The package of documents', verbOrAux: 'was delivered', objectOrComplement: 'to the head office', fullSentence: 'The package of documents was delivered to the head office.', context: 'Logistics' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Agreement in Workplace Conversations',
          subtitle: 'Accurate reporting in emails and meetings.',
          examples: [
            { id: 'sva_ex1', category: 'work', categoryLabel: 'Team Email', sentence: 'The group of international delegates arrives at 10 AM tomorrow.', breakdownNote: 'Singular "group" agrees with singular "arrives".', speakerRole: 'Protocol Officer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Agreement Traps',
          subtitle: 'Getting fooled by plural words inside prepositional phrases.',
          mistakes: [
            {
              id: 'sva_m1',
              incorrect: 'The shipment of new computers are delayed.',
              correct: 'The shipment of new computers is delayed.',
              explanation: 'The subject is the singular noun "shipment", not the plural "computers".',
              ruleTag: 'Prepositional Phrase Interrupter'
            }
          ],
          rememberRule: 'Always match the verb to the head noun before the preposition "of"!'
        },
        {
          type: 'practice',
          title: 'Subject-Verb Agreement Practice',
          subtitle: 'Choose the correct verb form for each subject.',
          questions: [
            {
              id: 'sva_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb:',
              sentenceWithBlank: 'A variety of delicious dishes ___ served at the welcome dinner.',
              options: ['was', 'were', 'are'],
              correctIndex: 0,
              grammarFocus: 'Singular head noun agreement',
              whyExplanation: '"A variety" is treated as the singular head noun, taking the singular verb "was".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t2_transitive_intransitive_verbs',
      moduleId: 5,
      title: 'Transitive and Intransitive Verbs',
      shortDesc: 'Verbs that require a direct object (transitive) vs. verbs that do not take an object (intransitive).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Transitive vs. Intransitive Verbs',
          subtitle: 'Understanding whether a verb passes its action onto a direct object.',
          conceptSummary: 'A transitive verb requires a direct object to complete its meaning (e.g., "She raised her hand"). An intransitive verb does NOT take an object (e.g., "The sun rises").',
          visualGraphic: {
            heroSentence: 'She raised her hand (Transitive) vs. The sun rose (Intransitive).',
            highlights: [
              { word: 'raised her hand', role: 'Transitive (Verb + Direct Object)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'rose', role: 'Intransitive (No Object Needed)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Transitive verbs answer "What?" or "Whom?". Intransitive verbs stand complete on their own.'
          },
          keyTakeaways: [
            'Transitive: Needs an object (send an email, raise prices, bring a friend).',
            'Intransitive: No object (sleep, arrive, sit, smile, cough, rise).',
            'Tricky pairs: raise (transitive) vs. rise (intransitive); lay (transitive) vs. lie (intransitive).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Verb Transitivity Matters',
          subtitle: 'Crucial for avoiding common confusion with raise/rise and set/sit.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Financial Reporting',
              example: '"Interest rates rose by 2% (intransitive) vs. The bank raised interest rates (transitive)."',
              whyNeeded: 'Distinguishing raise from rise is essential in economic and market reporting.'
            }
          ],
          coachTip: 'Raise needs an object (Raise your hand). Rise happens by itself (The balloon rises).'
        },
        {
          type: 'explanation',
          title: 'Transitive vs. Intransitive Guide',
          subtitle: 'How to test verbs for objects.',
          coreRule: 'Ask "Verb + WHAT/WHOM?". If there is an answer receiving the action, it is transitive.',
          breakdown: [
            { term: 'Always Transitive', plainDefinition: 'Cannot make sense without an object', simpleExample: 'enjoy (enjoy the movie), discuss (discuss the plan), prefer' },
            { term: 'Always Intransitive', plainDefinition: 'Cannot take a direct object', simpleExample: 'arrive (arrive at 5 PM), disappear, occur, hesitate' },
            { term: 'Both (Ergative / Ambitransitive)', plainDefinition: 'Can be used with or without an object', simpleExample: 'She opened the door (transitive) / The door opened (intransitive)' }
          ]
        },
        {
          type: 'formula',
          title: 'Transitive vs. Intransitive Formulas',
          subtitle: '[Subject] + [Transitive Verb] + [Direct Object] vs. [Subject] + [Intransitive Verb] + (Adverbial)',
          formulaBlocks: [
            { label: 'Transitive', part: 'We completed [the assignment]', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Intransitive', part: 'The flight arrived [on time]', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The technician', verbOrAux: 'repaired', objectOrComplement: 'the server', fullSentence: 'The technician repaired the server.', context: 'Transitive' },
            { subject: 'The technician', verbOrAux: 'slept', objectOrComplement: 'for eight hours', fullSentence: 'The technician slept for eight hours.', context: 'Intransitive' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Real-Life Dialogues',
          subtitle: 'Daily conversations with transitive and intransitive verbs.',
          examples: [
            { id: 'ti_ex1', category: 'work', categoryLabel: 'Morning Standup', sentence: 'The team discussed the budget before the meeting ended.', breakdownNote: '"discussed the budget" (transitive) and "ended" (intransitive).', speakerRole: 'Team Member' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Transitive Verb Mistakes',
          subtitle: 'Using prepositions after transitive verbs or confusing raise/rise.',
          mistakes: [
            {
              id: 'ti_m1',
              incorrect: 'We discussed about the problem.',
              correct: 'We discussed the problem.',
              explanation: '"Discuss" is a transitive verb that takes a direct object immediately with no preposition "about".',
              ruleTag: 'Transitive Direct Object'
            }
          ],
          rememberRule: 'Say "discuss the topic", NOT "discuss about the topic"!'
        },
        {
          type: 'practice',
          title: 'Transitive & Intransitive Practice',
          subtitle: 'Identify transitive and intransitive usages.',
          questions: [
            {
              id: 'ti_q1',
              type: 'sentence_correction',
              prompt: 'Correct the error in this workplace statement:',
              incorrectSentence: 'Our manager raised from his chair to speak.',
              correctSentence: 'Our manager rose from his chair to speak.',
              errorHighlight: 'raised',
              options: [
                'Our manager rose from his chair to speak.',
                'Our manager raised from his chair to speak.',
                'Our manager was raised from his chair to speak.'
              ],
              correctIndex: 0,
              whyExplanation: 'Getting up without an object requires the intransitive verb "rose" (past of rise), not the transitive "raised".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t3_simple_present_tense',
      moduleId: 5,
      title: 'Simple Present Tense',
      shortDesc: 'Habits, daily routines, universal facts, and general truths.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Simple Present Tense: Habits & Universal Truths',
          subtitle: 'Expressing regular routines, timetables, and timeless facts.',
          conceptSummary: 'The Simple Present tense describes habits, general truths, unchanging states, and scheduled events. For 3rd person singular (he, she, it), add -s or -es to the base verb.',
          visualGraphic: {
            heroSentence: 'Water boils at 100°C, and Maria manages the project team.',
            highlights: [
              { word: 'Water boils', role: 'Universal Fact (Singular -s)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'Maria manages', role: 'Regular Habitual State (Singular -s)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Use simple present for things that are generally true all the time.'
          },
          keyTakeaways: [
            'Use for habits & routines (I exercise every day).',
            'Use for scientific facts & general truths (The earth revolves around the sun).',
            '3rd person singular takes -s/-es (He works, She catches, It runs).',
            'Negative: do not (don\'t) / does not (doesn\'t) + BASE VERB.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Simple Present Matters',
          subtitle: 'The primary tense for job descriptions, habits, and daily life.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Job Description',
              example: '"The software engineer designs, tests, and deploys cloud applications."',
              whyNeeded: 'Defines ongoing responsibilities and professional duties.'
            }
          ],
          coachTip: 'In negative and questions, does takes the -s, so the main verb stays in BASE form: "She doesn\'t work", NOT "She doesn\'t works"!'
        },
        {
          type: 'explanation',
          title: 'Spelling Rules for He/She/It',
          subtitle: 'How to add -s, -es, and -ies correctly.',
          coreRule: 'Add -s to most verbs; add -es to verbs ending in -ch, -sh, -ss, -x, -zz, -o; change consonant+y to -ies.',
          breakdown: [
            { term: 'Standard Verbs (+s)', plainDefinition: 'Most everyday verbs', simpleExample: 'speak → speaks, write → writes, play → plays' },
            { term: 'Ending in -ch, -sh, -ss, -x, -o (+es)', plainDefinition: 'Verbs requiring an extra syllable', simpleExample: 'watch → watches, wash → washes, pass → passes, go → goes' },
            { term: 'Consonant + Y (drop y, +ies)', plainDefinition: 'Verbs ending in consonant + y', simpleExample: 'study → studies, fly → flies, try → tries' }
          ]
        },
        {
          type: 'formula',
          title: 'Simple Present Formulas',
          subtitle: 'Positive: [S] + [V(s)] | Negative: [S] + [do/does not] + [Base V] | Question: [Do/Does] + [S] + [Base V]?',
          formulaBlocks: [
            { label: 'Positive', part: 'She teaches English', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
            { label: 'Negative', part: 'She does not teach English', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            { label: 'Question', part: 'Does she teach English?', color: 'bg-blue-100 text-blue-900 border-blue-300' }
          ],
          tableExamples: [
            { subject: 'Our company', verbOrAux: 'provides', objectOrComplement: '24/7 technical support', fullSentence: 'Our company provides 24/7 technical support.', context: 'Business' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Simple Present in Daily Life',
          subtitle: 'Routines and permanent states.',
          examples: [
            { id: 'sp_ex1', category: 'home', categoryLabel: 'Daily Routine', sentence: 'I drink black coffee every morning at 7:00 AM.', breakdownNote: '"drink" expresses a permanent daily habit.', speakerRole: 'Adult Learner' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Double -s Negative Error',
          subtitle: 'Retaining -s on the main verb after "does".',
          mistakes: [
            {
              id: 'sp_m1',
              incorrect: 'She doesn\'t understands the new procedure.',
              correct: 'She doesn\'t understand the new procedure.',
              explanation: '"Doesn\'t" already carries the 3rd person singular marker. The main verb must be base form ("understand").',
              ruleTag: 'Does + Base Verb'
            }
          ],
          rememberRule: 'After do / does / did, ALWAYS use the base bare infinitive form!'
        },
        {
          type: 'practice',
          title: 'Simple Present Practice',
          subtitle: 'Select the correct present tense form.',
          questions: [
            {
              id: 'sp_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb form:',
              sentenceWithBlank: 'He ___ English with international clients every Tuesday.',
              options: ['practices', 'practice', 'is practice'],
              correctIndex: 0,
              grammarFocus: '3rd person singular present tense',
              whyExplanation: '3rd person singular "He" requires the verb ending in -s: "practices".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t4_am_is_are',
      moduleId: 5,
      title: 'am, is, are',
      shortDesc: 'The present forms of the linking and auxiliary verb BE.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Verb BE in Present: Am, Is, Are',
          subtitle: 'The most essential linking verb in English for identity, age, feelings, and location.',
          conceptSummary: 'The verb BE connects the subject with a description, noun, or location. We use "am" with I; "is" with he/she/it/singular nouns; and "are" with you/we/they/plural nouns.',
          visualGraphic: {
            heroSentence: 'I am ready, she is ready, and we are all ready.',
            highlights: [
              { word: 'I am', role: '1st Person Singular', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'she is', role: '3rd Person Singular', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'we are', role: '1st Person Plural', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Match the form of BE to the subject: I am, You are, He/She/It is, We are, They are.'
          },
          keyTakeaways: [
            'I → am (I\'m).',
            'He / She / It / Singular Noun → is (He\'s, She\'s, It\'s).',
            'You / We / They / Plural Noun → are (You\'re, We\'re, They\'re).',
            'Used for identity (I am an accountant), age (She is 30), feelings (We are excited), location (They are in London).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why BE Forms Matter',
          subtitle: 'Never say "I have 30 years" for age in English!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Introductions & Age',
              example: '"I am 32 years old and I am a software engineer."',
              whyNeeded: 'English uses BE (not HAVE) for age, emotions (I am cold), and hunger (I am hungry).'
            }
          ],
          coachTip: 'Say "I am hungry" (BE), NOT "I have hunger" (HAVE)!'
        },
        {
          type: 'explanation',
          title: 'Conjugation Matrix for Am / Is / Are',
          subtitle: 'Affirmative, Negative, and Contractions.',
          coreRule: 'Match the subject pronoun or noun directly to am, is, or are.',
          breakdown: [
            { term: 'Affirmative & Contractions', plainDefinition: 'I am (I\'m), You are (You\'re), He is (He\'s), She is (She\'s), It is (It\'s), We are (We\'re), They are (They\'re)', simpleExample: 'They\'re ready to start.' },
            { term: 'Negative', plainDefinition: 'am not, is not (isn\'t), are not (aren\'t)', simpleExample: 'She isn\'t in the office today.' },
            { term: 'Questions (Inversion)', plainDefinition: 'Put Am/Is/Are before the subject', simpleExample: 'Are you ready? / Is he your manager?' }
          ]
        },
        {
          type: 'formula',
          title: 'BE Verb Formula',
          subtitle: '[Subject] + [am / is / are] + [Adjective / Noun / Prepositional Phrase]',
          formulaBlocks: [
            { label: 'Subject', part: 'The conference', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'BE Form', part: 'is', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Complement', part: 'productive and engaging', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We', verbOrAux: 'are', objectOrComplement: 'delighted with the results', fullSentence: 'We are delighted with the results.', context: 'Celebration' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Am, Is, Are in Real Life',
          subtitle: 'Common daily and work expressions.',
          examples: [
            { id: 'be_ex1', category: 'work', categoryLabel: 'Check-in', sentence: 'Hello! I am here for the 2:00 PM interview with Ms. Rodriguez.', breakdownNote: '"I am here" states physical presence.', speakerRole: 'Candidate' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Age & Emotion Mistake',
          subtitle: 'Using "have" instead of "am/is/are".',
          mistakes: [
            {
              id: 'be_m1',
              incorrect: 'I have 28 years old and I have hungry.',
              correct: 'I am 28 years old and I am hungry.',
              explanation: 'In English, age, hunger, thirst, and physical states use the verb BE (am/is/are).',
              ruleTag: 'BE for Age & Feelings'
            }
          ],
          rememberRule: 'Always use "I am [age]" and "I am [hungry/cold/sleepy]"!'
        },
        {
          type: 'practice',
          title: 'Am, Is, Are Practice',
          subtitle: 'Select the correct form of BE.',
          questions: [
            {
              id: 'be_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct form of BE:',
              sentenceWithBlank: 'The directors and the CEO ___ in the conference room.',
              options: ['are', 'is', 'am'],
              correctIndex: 0,
              grammarFocus: 'Compound plural subject with BE',
              whyExplanation: 'The subject joined by "and" is plural, so use "are".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t5_there_is_there_are',
      moduleId: 5,
      title: 'there is / there are',
      shortDesc: 'Stating existence: There is + singular/uncountable vs. There are + plural.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'There Is & There Are: Stating Existence',
          subtitle: 'How to announce what exists in a location or situation.',
          conceptSummary: 'We use "There is" (There\'s) before singular countable nouns and uncountable nouns. We use "There are" before plural nouns.',
          visualGraphic: {
            heroSentence: 'There is a problem with the server, and there are many error reports.',
            highlights: [
              { word: 'There is a problem', role: 'Singular Existence (There is + singular noun)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'there are many error reports', role: 'Plural Existence (There are + plural noun)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'The noun following "There is/are" determines the verb form.'
          },
          keyTakeaways: [
            'There is (There\'s) + Singular Countable Noun (There is a new policy).',
            'There is + Uncountable Noun (There is water on the floor, there is coffee in the kitchen).',
            'There are + Plural Nouns (There are five options available).',
            'Questions: Is there...? / Are there...?'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "There Is / Are" Matters',
          subtitle: 'Never say "Have a problem" when stating that a problem exists!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Office Troubleshooting',
              example: '"There is an issue with the projector (NOT Has an issue)."',
              whyNeeded: 'English requires "There is/are" for existence, unlike languages that use "have".'
            }
          ],
          coachTip: 'Never start an existential sentence with "Have..."! Say "There is an email for you", NOT "Have an email".'
        },
        {
          type: 'explanation',
          title: 'There Is vs. There Are Matrix',
          subtitle: 'Singular, Plural, and Uncountable breakdowns.',
          coreRule: 'Check the first noun that immediately follows the phrase to choose is or are.',
          breakdown: [
            { term: 'There is + Singular Countable', plainDefinition: 'Exactly one object/person', simpleExample: 'There is an urgent call on line 1.' },
            { term: 'There is + Uncountable Noun', plainDefinition: 'Masses, liquids, concepts', simpleExample: 'There is useful information on the intranet.' },
            { term: 'There are + Plural Noun', plainDefinition: 'Two or more items', simpleExample: 'There are twenty employees in the department.' },
            { term: 'List Principle', plainDefinition: 'In standard English, match the first item in the list', simpleExample: 'There is a desk and two chairs in the room.' }
          ]
        },
        {
          type: 'formula',
          title: 'There Is / Are Formula',
          subtitle: '[There is] + [Singular/Uncountable] OR [There are] + [Plural] + [Location/Time]',
          formulaBlocks: [
            { label: 'Singular Existence', part: 'There is a meeting at 3 PM', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Plural Existence', part: 'There are three meetings today', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'There are', verbOrAux: 'several opportunities', objectOrComplement: 'for career advancement', fullSentence: 'There are several opportunities for career advancement.', context: 'HR' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Real-Life Existence Statements',
          subtitle: 'Hotel and office communications.',
          examples: [
            { id: 'th_ex1', category: 'travel', categoryLabel: 'Hotel Concierge', sentence: 'Is there a fitness center on the premises? Yes, there is a gym on the 2nd floor.', breakdownNote: '"Is there" for question; "there is a gym" for singular answer.', speakerRole: 'Guest' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Have" for Existence Mistake',
          subtitle: 'Using "have" instead of "there is/are".',
          mistakes: [
            {
              id: 'th_m1',
              incorrect: 'In the office have many computers.',
              correct: 'There are many computers in the office.',
              explanation: 'English uses "There are" to state that things exist in a place, never "have".',
              ruleTag: 'There Are vs Have'
            }
          ],
          rememberRule: 'Use "There is / There are" to express existence, NOT "Have"!'
        },
        {
          type: 'practice',
          title: 'There Is / There Are Practice',
          subtitle: 'Choose between there is and there are.',
          questions: [
            {
              id: 'th_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct existential phrase for an uncountable noun:',
              sentenceWithBlank: '___ plenty of fresh coffee in the break room.',
              options: ['There is', 'There are', 'They have'],
              correctIndex: 0,
              grammarFocus: 'Uncountable noun with There is',
              whyExplanation: '"Coffee" is uncountable, so use "There is".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t6_present_progressive_tense',
      moduleId: 5,
      title: 'Present Progressive Tense',
      shortDesc: 'Actions happening right now (am/is/are + verb-ing) and temporary situations.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Present Progressive Tense: Happening Right Now',
          subtitle: 'am / is / are + verb-ing for ongoing actions and temporary states.',
          conceptSummary: 'The Present Progressive (or Continuous) tense describes actions in progress right at this moment, temporary projects, or definite near-future arrangements.',
          visualGraphic: {
            heroSentence: 'We are currently testing the new software update.',
            highlights: [
              { word: 'are testing', role: 'Present Progressive (are + verb-ing)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'BE (am/is/are) + Main Verb ending in -ing.'
          },
          keyTakeaways: [
            'Structure: Subject + am/is/are + [verb]-ing.',
            'Use for actions happening right now (Listen! It is raining).',
            'Use for temporary current situations (I am living with my brother this month).',
            'Stative verbs (know, like, belong, want, need) are NOT normally used in progressive.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Present Progressive Matters',
          subtitle: 'Distinguishing what you do generally from what you are doing right now.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Live Work Status',
              example: '"I am working on the quarterly audit right now."',
              whyNeeded: 'Clearly communicates active task engagement during meetings and chats.'
            }
          ],
          coachTip: 'Say "I understand" (stative verb), NOT "I am understanding"!'
        },
        {
          type: 'explanation',
          title: 'Present Simple vs. Present Progressive',
          subtitle: 'Permanent routine vs. Temporary active moment.',
          coreRule: 'Present Simple = Habits & facts. Present Progressive = Actions in progress right now.',
          breakdown: [
            { term: 'Present Simple (Habit)', plainDefinition: 'Happens repeatedly as a routine', simpleExample: 'I teach English every Monday.' },
            { term: 'Present Progressive (Now)', plainDefinition: 'Happening at this exact moment', simpleExample: 'I am teaching a lesson right now.' },
            { term: 'Stative Verbs', plainDefinition: 'Verbs of thought, emotion, and possession', simpleExample: 'I want coffee (NOT I am wanting coffee).' }
          ]
        },
        {
          type: 'formula',
          title: 'Present Progressive Formula',
          subtitle: '[Subject] + [am / is / are] + [Verb + ing]',
          formulaBlocks: [
            { label: 'Subject', part: 'The engineers', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Auxiliary BE', part: 'are', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Verb + ing', part: 'analyzing the server logs', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'She', verbOrAux: 'is preparing', objectOrComplement: 'the slide deck', fullSentence: 'She is preparing the slide deck right now.', context: 'Office' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Progressive in Daily Dialogue',
          subtitle: 'Phone status and live check-ins.',
          examples: [
            { id: 'pp_ex1', category: 'work', categoryLabel: 'Slack Chat', sentence: 'Can I call you in ten minutes? I am presenting to the leadership team.', breakdownNote: '"I am presenting" explains ongoing activity.', speakerRole: 'Team Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Stative Verb Progressive Errors',
          subtitle: 'Using -ing with verbs of feeling, thinking, or owning.',
          mistakes: [
            {
              id: 'ppm_m1',
              incorrect: 'I am knowing the answer.',
              correct: 'I know the answer.',
              explanation: '"Know" is a stative verb expressing a mental state, which is not used in progressive tenses.',
              ruleTag: 'Stative Verbs in Continuous'
            }
          ],
          rememberRule: 'Do not use -ing with stative verbs (know, believe, belong, love, hate, want, understand)!'
        },
        {
          type: 'practice',
          title: 'Present Progressive Practice',
          subtitle: 'Select the correct progressive construction.',
          questions: [
            {
              id: 'pp_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank for an action happening at this exact moment:',
              sentenceWithBlank: 'Please be quiet; the baby ___ in the next room.',
              options: ['is sleeping', 'sleeps', 'is sleep'],
              correctIndex: 0,
              grammarFocus: 'Present progressive for action in progress',
              whyExplanation: '"Right now" context marked by "Please be quiet" requires "is sleeping".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t7_simple_past_tense',
      moduleId: 5,
      title: 'Simple Past Tense',
      shortDesc: 'Completed actions in the past with specific time markers (-ed endings).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Simple Past Tense: Completed Past Actions',
          subtitle: 'Actions that started and finished in the past.',
          conceptSummary: 'The Simple Past tense describes actions completed at a definite time in the past. Regular verbs add -ed (worked, completed, visited); irregular verbs change their form completely (went, saw, wrote).',
          visualGraphic: {
            heroSentence: 'We launched the project yesterday and achieved our goals.',
            highlights: [
              { word: 'launched', role: 'Regular Past (-ed)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'achieved', role: 'Regular Past (-d)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Use Simple Past when the action occurred in a finished time period (yesterday, in 2022, last week).'
          },
          keyTakeaways: [
            'Regular verbs: add -ed (work → worked, start → started).',
            'Time markers: yesterday, last week, 3 days ago, in 2019, when I was a child.',
            'Negative: did not (didn\'t) + BASE VERB (I didn\'t see him).',
            'Question: Did + Subject + BASE VERB (Did you receive the invoice?).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Past Tense Accuracy Matters',
          subtitle: 'Crucial for project history, status reports, and resumes.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Resume Bullet Points',
              example: '"Managed a team of 8 and increased quarterly revenue by 25%."',
              whyNeeded: 'Strong past tense action verbs form the backbone of impactful resumes.'
            }
          ],
          coachTip: 'In negative and questions, did already shows past! Use BASE verb: "Did you go?", NOT "Did you went?".'
        },
        {
          type: 'explanation',
          title: 'Regular Past Spelling & Pronunciation',
          subtitle: 'The 3 pronunciation sounds of -ed: /t/, /d/, and /ɪd/.',
          coreRule: 'Add -ed to base verb. Only pronounce /ɪd/ as an extra syllable when the verb ends in /t/ or /d/.',
          breakdown: [
            { term: '/ɪd/ (Extra syllable)', plainDefinition: 'Verbs ending in t or d sounds', simpleExample: 'start → started, need → needed, decide → decided' },
            { term: '/t/ (Voiceless)', plainDefinition: 'Verbs ending in voiceless sounds (p, k, f, s, sh, ch)', simpleExample: 'worked, stopped, laughed, watched, passed' },
            { term: '/d/ (Voiced)', plainDefinition: 'Verbs ending in voiced sounds (b, g, v, z, m, n, vowels)', simpleExample: 'lived, cleaned, played, opened, offered' }
          ]
        },
        {
          type: 'formula',
          title: 'Simple Past Formulas',
          subtitle: 'Positive: [S] + [V-ed / Irregular] | Negative: [S] + [didn\'t] + [Base V] | Question: [Did] + [S] + [Base V]?',
          formulaBlocks: [
            { label: 'Positive', part: 'They signed the contract', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
            { label: 'Negative', part: 'They did not sign the contract', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            { label: 'Question', part: 'Did they sign the contract?', color: 'bg-blue-100 text-blue-900 border-blue-300' }
          ],
          tableExamples: [
            { subject: 'The director', verbOrAux: 'approved', objectOrComplement: 'the proposal last Friday', fullSentence: 'The director approved the proposal last Friday.', context: 'Executive' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Past Tense in Project Debriefs',
          subtitle: 'Reviewing milestones and past events.',
          examples: [
            { id: 'spast_ex1', category: 'work', categoryLabel: 'Client Update', sentence: 'We delivered the beta version two days ago and resolved all reported bugs.', breakdownNote: '"delivered" and "resolved" are regular simple past verbs.', speakerRole: 'Scrum Master' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Did + Past Verb" Mistake',
          subtitle: 'Double past tense in questions and negatives.',
          mistakes: [
            {
              id: 'spast_m1',
              incorrect: 'I didn\'t went to the meeting yesterday.',
              correct: 'I didn\'t go to the meeting yesterday.',
              explanation: '"Didn\'t" is already past tense. The main verb MUST be in base form ("go").',
              ruleTag: 'Did + Base Verb'
            }
          ],
          rememberRule: 'Never use past tense after didn\'t or did (say "didn\'t know", NOT "didn\'t knew")!'
        },
        {
          type: 'practice',
          title: 'Simple Past Practice',
          subtitle: 'Select the correct simple past verb form.',
          questions: [
            {
              id: 'spast_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct negative past form:',
              sentenceWithBlank: 'We ___ the final email until yesterday afternoon.',
              options: ['didn\'t receive', 'didn\'t received', 'weren\'t receive'],
              correctIndex: 0,
              grammarFocus: 'Negative past with did not + base verb',
              whyExplanation: '"Didn\'t" requires the base verb "receive".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t8_was_were',
      moduleId: 5,
      title: 'was / were',
      shortDesc: 'The past forms of the linking and auxiliary verb BE.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Verb BE in Past: Was and Were',
          subtitle: 'Past states, identities, locations, and conditions.',
          conceptSummary: 'In the past tense, the verb BE has two forms: "was" for singular subjects (I, he, she, it, singular nouns) and "were" for plural subjects and you (you, we, they, plural nouns).',
          visualGraphic: {
            heroSentence: 'I was at the office, but they were working remotely.',
            highlights: [
              { word: 'I was', role: 'Singular Past BE (I was)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'they were', role: 'Plural Past BE (they were)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'I / He / She / It = WAS. You / We / They = WERE.'
          },
          keyTakeaways: [
            'Singular (I, he, she, it) → was (wasn\'t).',
            'Plural & You (you, we, they) → were (weren\'t).',
            'There was + singular noun (There was a delay).',
            'There were + plural nouns (There were several delays).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Was / Were Agreement Matters',
          subtitle: 'Avoid saying "we was" or "they was" in professional circles.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Debriefs',
              example: '"We were very impressed by your presentation."',
              whyNeeded: '"We were" demonstrates standard grammatical fluency in executive settings.'
            }
          ],
          coachTip: '"You" ALWAYS takes "were", whether talking to one person or ten people: "You were fantastic!"'
        },
        {
          type: 'explanation',
          title: 'Was vs. Were Matrix',
          subtitle: 'Affirmative, Negative, and Inverted Questions.',
          coreRule: 'Match singular subjects to was, and plural subjects (plus "you") to were.',
          breakdown: [
            { term: 'Was (Singular)', plainDefinition: 'I, he, she, it, singular nouns', simpleExample: 'The meeting was informative.' },
            { term: 'Were (Plural & 2nd Person)', plainDefinition: 'You (singular & plural), we, they, plural nouns', simpleExample: 'The participants were engaged.' },
            { term: 'Past Existence', plainDefinition: 'There was / There were', simpleExample: 'There was a storm last night. / There were many power outages.' }
          ]
        },
        {
          type: 'formula',
          title: 'Was / Were Formula',
          subtitle: '[Subject] + [was / were] + [Complement]',
          formulaBlocks: [
            { label: 'Subject', part: 'The team members', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Past BE', part: 'were', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Complement', part: 'ready for the product demo', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The CEO', verbOrAux: 'was', objectOrComplement: 'in Singapore last week', fullSentence: 'The CEO was in Singapore last week.', context: 'Travel' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Was / Were in Daily Life',
          subtitle: 'Recounting past meetings and experiences.',
          examples: [
            { id: 'ww_ex1', category: 'travel', categoryLabel: 'Hotel Feedback', sentence: 'The staff were exceptionally courteous and our room was spotless.', breakdownNote: '"staff were" and "room was" demonstrate proper agreement.', speakerRole: 'Guest' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Non-Standard Was / Were Errors',
          subtitle: 'Using "was" with "we", "they", or "you".',
          mistakes: [
            {
              id: 'ww_m1',
              incorrect: 'We was very happy with the results.',
              correct: 'We were very happy with the results.',
              explanation: '"We" is plural and requires the plural past BE verb "were".',
              ruleTag: 'Plural Past BE Agreement'
            }
          ],
          rememberRule: 'Always say "We were", "They were", and "You were"!'
        },
        {
          type: 'practice',
          title: 'Was / Were Practice',
          subtitle: 'Select the right past BE form.',
          questions: [
            {
              id: 'ww_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct past BE verb:',
              sentenceWithBlank: 'There ___ three major announcements during the conference yesterday.',
              options: ['were', 'was', 'are'],
              correctIndex: 0,
              grammarFocus: 'Past existence with plural noun',
              whyExplanation: '"three major announcements" is plural in the past, requiring "were".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t9_irregular_verbs',
      moduleId: 5,
      title: 'Irregular Verbs',
      shortDesc: 'Vowel-shifting patterns (go/went, see/saw, write/wrote, buy/bought, take/took).',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Irregular Verbs: Mastering Core Patterns',
          subtitle: 'Verbs that do not add -ed in the past tense.',
          conceptSummary: 'Unlike regular verbs, irregular verbs change internal vowels, modify consonants, or stay identical in the past tense. Mastering the top 50 irregular verbs unlocks fluent English communication.',
          visualGraphic: {
            heroSentence: 'She bought the tickets, saw the show, and wrote a review.',
            highlights: [
              { word: 'bought', role: 'buy → bought (Vowel change)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'saw', role: 'see → saw (Vowel change)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'wrote', role: 'write → wrote (Vowel change)', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Irregular verbs must be memorized by their pattern families.'
          },
          keyTakeaways: [
            'No -ed ending (e.g., eat → ate, NOT eated).',
            'Pattern 1 (Identical): cut → cut, put → put, cost → cost, hit → hit.',
            'Pattern 2 (ought/aught): buy → bought, think → thought, teach → taught, bring → brought.',
            'Pattern 3 (i → a): begin → began, drink → drank, swim → swam, sing → sang.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Irregular Verbs Matter',
          subtitle: 'Irregular verbs make up over 70% of the most commonly spoken verbs in English!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Reporting Sales Figures',
              example: '"Sales grew by 15% (NOT growed) and we chose a new vendor (NOT choosed)."',
              whyNeeded: 'Using irregular past forms accurately signals mature language proficiency.'
            }
          ],
          coachTip: 'Group irregular verbs by sound patterns rather than memorizing an alphabetical list!'
        },
        {
          type: 'explanation',
          title: 'Top Irregular Verb Sound Families',
          subtitle: 'Pattern-based memory system.',
          coreRule: 'Learn irregular verbs in clusters that share the same vowel shift.',
          breakdown: [
            { term: 'Family 1: No Change', plainDefinition: 'Base = Past', simpleExample: 'cost/cost, let/let, set/set, hurt/hurt, shut/shut' },
            { term: 'Family 2: -ought / -aught', plainDefinition: 'Long "aw-t" sound', simpleExample: 'catch/caught, fight/fought, seek/sought, bring/brought' },
            { term: 'Family 3: -ew past', plainDefinition: 'Blow, fly, grow, know, throw', simpleExample: 'blew, flew, grew, knew, threw' },
            { term: 'Family 4: Vowel Shortening', plainDefinition: 'Long vowel becomes short vowel sound', simpleExample: 'feel/felt, keep/kept, leave/left, meet/met, read/read (sounds like "red")' }
          ]
        },
        {
          type: 'formula',
          title: 'Irregular Past Statement Formula',
          subtitle: '[Subject] + [Irregular Past Verb (V2)] + [Object] + [Time Marker]',
          formulaBlocks: [
            { label: 'Subject', part: 'The team', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Irregular V2', part: 'built / spoke / wrote', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Object + Time', part: 'the prototype last month', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We', verbOrAux: 'chose', objectOrComplement: 'the most cost-effective option', fullSentence: 'We chose the most cost-effective option.', context: 'Procurement' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Irregular Verbs in Real Life',
          subtitle: 'Recounting weekend and travel stories.',
          examples: [
            { id: 'irr_ex1', category: 'travel', categoryLabel: 'Travel Story', sentence: 'We took the early train, ate breakfast in Rome, and saw the Colosseum.', breakdownNote: '"took" (take), "ate" (eat), and "saw" (see).', speakerRole: 'Traveler' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Regularizing Irregular Verbs',
          subtitle: 'Adding -ed to irregular verbs (*telled, *goed, *buyed).',
          mistakes: [
            {
              id: 'irr_m1',
              incorrect: 'He teached us the new software and buyed lunch.',
              correct: 'He taught us the new software and bought lunch.',
              explanation: 'The past of "teach" is "taught", and the past of "buy" is "bought". Never add -ed.',
              ruleTag: 'Irregular Past Form'
            }
          ],
          rememberRule: 'Never add -ed to irregular verbs (taught, bought, felt, spoke, wrote)!'
        },
        {
          type: 'practice',
          title: 'Irregular Verbs Practice',
          subtitle: 'Choose the correct past form of irregular verbs.',
          questions: [
            {
              id: 'irr_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct past tense of "fly":',
              sentenceWithBlank: 'Our regional director ___ to Zurich yesterday for the annual summit.',
              options: ['flew', 'flied', 'flowed'],
              correctIndex: 0,
              grammarFocus: 'Irregular past of fly',
              whyExplanation: 'The past tense of "fly" is "flew".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t10_past_progressive_tense',
      moduleId: 5,
      title: 'Past Progressive Tense',
      shortDesc: 'Actions ongoing in the past interrupted by another event (was/were + verb-ing).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Past Progressive: Ongoing Past Actions',
          subtitle: 'was / were + verb-ing for actions that were in progress in the past.',
          conceptSummary: 'The Past Progressive describes an action that was ongoing in the past when another short event interrupted it, or two actions happening simultaneously in the past.',
          visualGraphic: {
            heroSentence: 'I was writing an email when the phone rang.',
            highlights: [
              { word: 'was writing', role: 'Past Progressive (Long ongoing action)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'when the phone rang', role: 'Simple Past (Short interrupting event)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Long background action = Past Progressive (was/were + -ing). Short interruption = Simple Past.'
          },
          keyTakeaways: [
            'Structure: Subject + was/were + [verb]-ing.',
            'Interrupted action: "I was sleeping when the alarm went off."',
            'Parallel actions with WHILE: "While Sarah was presenting, John was taking notes."',
            'Specific point in time: "At 3:00 PM yesterday, we were flying over Chicago."'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Past Progressive Matters',
          subtitle: 'Essential for incident reports, explanations, and storytelling.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Workplace Incident Reporting',
              example: '"The system was processing backup files when the power outage occurred."',
              whyNeeded: 'Distinguishes the background condition from the triggering event.'
            }
          ],
          coachTip: 'Use "WHILE" with past progressive (While I was driving...) and "WHEN" with simple past (When the phone rang).'
        },
        {
          type: 'explanation',
          title: 'When vs. While in Past Progressive',
          subtitle: 'How to connect long and short actions seamlessly.',
          coreRule: 'Use Past Progressive for the longer duration action, and Simple Past for the quick event that happened during it.',
          breakdown: [
            { term: 'Longer action + Interruption', plainDefinition: 'Past Progressive + WHEN + Simple Past', simpleExample: 'We were discussing the contract when the client walked in.' },
            { term: 'Simultaneous Actions', plainDefinition: 'WHILE + Past Progressive, Past Progressive', simpleExample: 'While the technician was repairing the machine, we were answering customer calls.' },
            { term: 'Time Marker of Continuity', plainDefinition: 'Action in progress at specific moment', simpleExample: 'What were you doing at 8 PM last night?' }
          ]
        },
        {
          type: 'formula',
          title: 'Past Progressive Interruption Formula',
          subtitle: '[Subject] + [was / were + V-ing] + when + [Subject] + [Simple Past V2]',
          formulaBlocks: [
            { label: 'Long Action', part: 'She was driving home', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Connector', part: 'when', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Interruption', part: 'it started to rain heavily', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'They were analyzing', verbOrAux: 'the data', objectOrComplement: 'when they discovered the error', fullSentence: 'They were analyzing the data when they discovered the error.', context: 'Data Lab' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Past Progressive in Everyday Life',
          subtitle: 'Explaining circumstances and missed calls.',
          examples: [
            { id: 'ppr_ex1', category: 'work', categoryLabel: 'Missed Call Explanation', sentence: 'I am so sorry I missed your call; I was interviewing a job candidate.', breakdownNote: '"was interviewing" explains the ongoing activity during the call.', speakerRole: 'HR Specialist' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Past Progressive Pitfalls',
          subtitle: 'Using progressive for short instantaneous actions.',
          mistakes: [
            {
              id: 'ppr_m1',
              incorrect: 'When the alarm was ringing, I woke up.',
              correct: 'When the alarm rang, I was sleeping / I woke up.',
              explanation: 'A sudden alarm sound is a short event that interrupts ongoing sleep ("I was sleeping when the alarm rang").',
              ruleTag: 'Continuous vs Instantaneous Past'
            }
          ],
          rememberRule: 'Put the long background action in was/were + -ing, and the short event in simple past!'
        },
        {
          type: 'practice',
          title: 'Past Progressive Practice',
          subtitle: 'Select the correct tense combination.',
          questions: [
            {
              id: 'ppr_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the ongoing past action:',
              sentenceWithBlank: 'While the team ___ the final proposal, the internet connection went down.',
              options: ['was editing', 'edited', 'is editing'],
              correctIndex: 0,
              grammarFocus: 'Past continuous with while',
              whyExplanation: '"While" introduces the long ongoing past action: "was editing".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t11_have_has_had',
      moduleId: 5,
      title: 'have, has, had',
      shortDesc: 'Possession, experiences, and helping verbs across present and past.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Have, Has, Had: Main Verbs & Auxiliaries',
          subtitle: 'Expressing possession, relationships, and forming perfect tenses.',
          conceptSummary: 'HAVE functions both as a main verb (showing possession: "I have a car") and as an essential auxiliary verb (forming perfect tenses: "I have seen it"). Present: have/has; Past: had.',
          visualGraphic: {
            heroSentence: 'She has extensive experience, and we have worked together before.',
            highlights: [
              { word: 'has experience', role: 'Main Verb (Possession: She has)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'have worked', role: 'Auxiliary Verb (Present Perfect: have + V3)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Has = He/She/It present. Have = I/You/We/They present. Had = All subjects past.'
          },
          keyTakeaways: [
            'Present Possession: He/She/It has; I/You/We/They have.',
            'Past Possession: All subjects use HAD (I had, she had, they had).',
            'Negative Present: don\'t have / doesn\'t have (NOT "hasn\'t a car").',
            'Auxiliary: has/have + past participle (V3) for Present Perfect; had + V3 for Past Perfect.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why HAVE / HAS Mastery Matters',
          subtitle: 'The negative form "doesn\'t have" is a major foundation of accurate speech.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Office Check-ins',
              example: '"He doesn\'t have the latest version of the file (NOT He doesn\'t has)."',
              whyNeeded: 'Using "doesn\'t have" correctly prevents elementary grammatical errors.'
            }
          ],
          coachTip: 'Always use "have" after does/doesn\'t: "Does she HAVE time?", NOT "Does she has time?".'
        },
        {
          type: 'explanation',
          title: 'Have, Has, Had Conjugation Guide',
          subtitle: 'Main verb vs. Auxiliary verb comparison.',
          coreRule: 'Use has for 3rd person singular present; have for all other present subjects; had for all past subjects.',
          breakdown: [
            { term: 'Present (have / has)', plainDefinition: 'I/You/We/They have | He/She/It has', simpleExample: 'She has two degrees. / They have a modern office.' },
            { term: 'Past (had)', plainDefinition: 'All subjects in past time', simpleExample: 'We had a productive meeting yesterday.' },
            { term: 'Negative Main Verb', plainDefinition: 'do not have / does not have / did not have', simpleExample: 'She doesn\'t have any questions.' }
          ]
        },
        {
          type: 'formula',
          title: 'Have/Has/Had Negative Formula',
          subtitle: '[Subject] + [don\'t / doesn\'t / didn\'t] + HAVE + [Object]',
          formulaBlocks: [
            { label: 'Subject', part: 'The client', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Negative Auxiliary', part: 'does not / didn\'t', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            { label: 'Base Verb HAVE', part: 'have any concerns', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Does he', verbOrAux: 'have', objectOrComplement: 'the keys to the laboratory?', fullSentence: 'Does he have the keys to the laboratory?', context: 'Security' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Have / Has / Had in Daily Use',
          subtitle: 'Professional and travel interactions.',
          examples: [
            { id: 'hhh_ex1', category: 'restaurant', categoryLabel: 'Order Inquiry', sentence: 'Do you have any vegetarian options on the lunch menu?', breakdownNote: '"Do you have" is the standard polite inquiry form.', speakerRole: 'Customer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Doesn\'t Has" Error',
          subtitle: 'Retaining "has" after does or doesn\'t.',
          mistakes: [
            {
              id: 'hhh_m1',
              incorrect: 'She doesn\'t has her laptop today.',
              correct: 'She doesn\'t have her laptop today.',
              explanation: '"Doesn\'t" takes the 3rd person singular marker; the main verb returns to base form "have".',
              ruleTag: 'Doesn\'t + Base Verb Have'
            }
          ],
          rememberRule: 'After do, does, or did, ALWAYS use "have" (e.g., "She doesn\'t have")!'
        },
        {
          type: 'practice',
          title: 'Have, Has, Had Practice',
          subtitle: 'Select the correct form of have.',
          questions: [
            {
              id: 'hhh_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct form:',
              sentenceWithBlank: 'The new manager ___ a clear strategic vision for the department.',
              options: ['has', 'have', 'is having'],
              correctIndex: 0,
              grammarFocus: '3rd person singular possession',
              whyExplanation: '"The new manager" is 3rd person singular, requiring "has".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t12_present_perfect_tense',
      moduleId: 5,
      title: 'Present Perfect Tense',
      shortDesc: 'Connecting past experiences and unfinished time to the present (have/has + V3).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Present Perfect Tense: Connecting Past to Present',
          subtitle: 'have / has + past participle (V3) for life experiences and recent results.',
          conceptSummary: 'The Present Perfect connects the past to the present moment. We use it for life experiences without a specific date, actions in an unfinished time period (today, this week), or recent actions with visible results now.',
          visualGraphic: {
            heroSentence: 'I have worked here for five years, and we have just closed the deal.',
            highlights: [
              { word: 'have worked', role: 'Duration continuing to present (for 5 years)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'have just closed', role: 'Recent action with present result (just)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Present Perfect connects past actions to current relevance.'
          },
          keyTakeaways: [
            'Structure: Subject + have/has + Past Participle (V3).',
            'Life experiences (EVER / NEVER): "Have you ever been to Japan?"',
            'Unfinished duration (FOR / SINCE): "She has lived here since 2018."',
            'Recent news (JUST / ALREADY / YET): "I have already sent the invoice."',
            'NEVER use with specific completed past times like yesterday, in 2015, or ago!'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Present Perfect Matters',
          subtitle: 'The #1 tense for job interviews, qualifications, and project updates.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Job Interview',
              example: '"I have led cross-functional teams and managed over $2M in budgets."',
              whyNeeded: 'Expresses cumulative lifetime experience without tying it to an old obsolete date.'
            }
          ],
          coachTip: 'FOR = duration (for 5 years). SINCE = starting point (since 2019, since Monday).'
        },
        {
          type: 'explanation',
          title: 'Simple Past vs. Present Perfect',
          subtitle: 'The critical difference that defines English fluency.',
          coreRule: 'If the time is finished (yesterday, in 2020), use Simple Past. If the time is unfinished or open (today, in my life), use Present Perfect.',
          breakdown: [
            { term: 'Simple Past (Finished Time)', plainDefinition: 'Specific completed moment in past', simpleExample: 'I visited Paris in 2019 (2019 is finished).' },
            { term: 'Present Perfect (Open / Unspecified Time)', plainDefinition: 'Experience up to right now', simpleExample: 'I have visited Paris twice (in my lifetime).' },
            { term: 'For vs. Since', plainDefinition: 'Period of time vs. Starting point in time', simpleExample: 'for three hours vs. since 9:00 AM' },
            { term: 'Already vs. Yet', plainDefinition: 'Positive completion vs. Negative expectation / question', simpleExample: 'I have already finished. / I haven\'t finished yet.' }
          ]
        },
        {
          type: 'formula',
          title: 'Present Perfect Formulas',
          subtitle: 'Positive: [S] + [have/has] + [V3] | Negative: [S] + [have/has not] + [V3] | Question: [Have/Has] + [S] + [V3]?',
          formulaBlocks: [
            { label: 'Subject', part: 'Our organization', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Has + V3', part: 'has achieved', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
            { label: 'Result', part: 'its annual carbon reduction target', color: 'bg-amber-100 text-amber-900 border-amber-300' }
          ],
          tableExamples: [
            { subject: 'They have lived', verbOrAux: 'in Seattle', objectOrComplement: 'since 2015', fullSentence: 'They have lived in Seattle since 2015.', context: 'Relocation' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Present Perfect in Business Updates',
          subtitle: 'Status reporting and customer interactions.',
          examples: [
            { id: 'pperf_ex1', category: 'work', categoryLabel: 'Status Email', sentence: 'We have already resolved the bug and have deployed the patch to production.', breakdownNote: '"have resolved" and "have deployed" show recent completed actions with current impact.', speakerRole: 'Lead Engineer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Yesterday with Present Perfect" Error',
          subtitle: 'Never use present perfect with finished past time markers.',
          mistakes: [
            {
              id: 'pperf_m1',
              incorrect: 'I have seen him yesterday.',
              correct: 'I saw him yesterday. / I have seen him recently.',
              explanation: '"Yesterday" specifies a closed past time, requiring the Simple Past "saw".',
              ruleTag: 'Present Perfect vs Past Time Marker'
            },
            {
              id: 'pperf_m2',
              incorrect: 'I live here since three years.',
              correct: 'I have lived here for three years.',
              explanation: 'Use "have lived" for actions starting in the past continuing now, with "for" to indicate duration.',
              ruleTag: 'For vs Since with Duration'
            }
          ],
          rememberRule: 'If you see yesterday, ago, last week, or in 2020 → ALWAYS use Simple Past!'
        },
        {
          type: 'practice',
          title: 'Present Perfect Practice',
          subtitle: 'Choose the correct perfect tense form.',
          questions: [
            {
              id: 'pperf_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct duration preposition:',
              sentenceWithBlank: 'Ms. Maria has been our lead instructor ___ October 2021.',
              options: ['since', 'for', 'from'],
              correctIndex: 0,
              grammarFocus: 'Since with starting point',
              whyExplanation: '"October 2021" is a specific starting point in time, requiring "since".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t13_irregular_past_participles',
      moduleId: 5,
      title: 'Irregular Past Participles',
      shortDesc: 'V3 forms: written, seen, spoken, taken, driven, known, begun, done, gone.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Irregular Past Participles (V3 Forms)',
          subtitle: 'The essential third verb form used in perfect tenses and passive voice.',
          conceptSummary: 'Past Participles (V3) are used after have/has/had in perfect tenses (I have written) and after BE in passive sentences (It was written). Many common verbs have unique V3 forms ending in -en, -ne, or changing vowels.',
          visualGraphic: {
            heroSentence: 'The letter was written by Sarah, and she has spoken to the client.',
            highlights: [
              { word: 'written', role: 'Past Participle V3 (write → wrote → written)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'spoken', role: 'Past Participle V3 (speak → spoke → spoken)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Base (V1) → Past (V2) → Past Participle (V3).'
          },
          keyTakeaways: [
            'Pattern 1 (-en endings): write → written, speak → spoken, take → taken, drive → driven, hide → hidden.',
            'Pattern 2 (-own/-awn): know → known, grow → grown, fly → flown, draw → drawn.',
            'Pattern 3 (i → a → u): begin → began → begun, drink → drank → drunk, swim → swam → swum.',
            'Pattern 4 (V2 = V3): buy → bought → bought, feel → felt → felt, find → found → found.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Past Participle Precision Matters',
          subtitle: 'Avoid awkward phrasing like "I have went" or "It was took".',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Professional Reports',
              example: '"The decision was taken by the executive board (NOT took)."',
              whyNeeded: 'Accurate V3 participles are essential for formal passive business reports.'
            }
          ],
          coachTip: 'Remember: "go → went → GONE" and "be → was/were → BEEN". Say "I have gone" or "I have been", NEVER "I have went"!'
        },
        {
          type: 'explanation',
          title: 'Master Irregular V3 Classification Table',
          subtitle: 'The 4 major participle patterns.',
          coreRule: 'Categorize irregular participles by their morphological endings (-en, -n, -u, or matching V2).',
          breakdown: [
            { term: 'Ending in -en / -ne', plainDefinition: 'Added -en to base or past stem', simpleExample: 'bite/bitten, break/broken, choose/chosen, forget/forgotten, give/given, see/seen' },
            { term: 'i → a → u Shift', plainDefinition: 'Singular vowel progression', simpleExample: 'sing/sang/sung, sink/sank/sunk, ring/rang/rung, shrink/shrank/shrunk' },
            { term: 'V2 = V3 (Past matches Participle)', plainDefinition: 'Same form in Simple Past and Perfect', simpleExample: 'bring/brought/brought, catch/caught/caught, teach/taught/taught, leave/left/left' },
            { term: 'Been vs. Gone', plainDefinition: 'Been (went and returned) vs. Gone (went and still there)', simpleExample: 'She has gone to Paris (she is there now) vs. She has been to Paris (she visited and came back).' }
          ]
        },
        {
          type: 'formula',
          title: 'Past Participle Construction Formula',
          subtitle: '[Subject] + [have / has / had] + [Irregular Past Participle (V3)]',
          formulaBlocks: [
            { label: 'Subject', part: 'We', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Auxiliary', part: 'have', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'V3 Participle', part: 'chosen / driven / written', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The team has', verbOrAux: 'undertaken', objectOrComplement: 'a comprehensive market study', fullSentence: 'The team has undertaken a comprehensive market study.', context: 'Consulting' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Participles in Daily Dialogue',
          subtitle: 'Everyday conversations and workplace updates.',
          examples: [
            { id: 'part_ex1', category: 'work', categoryLabel: 'Project Handover', sentence: 'Have you seen the finalized architectural drawings that were drawn by David?', breakdownNote: '"seen" (see → seen) and "drawn" (draw → drawn).', speakerRole: 'Architect' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Have Went" Mistake',
          subtitle: 'Using the simple past V2 form instead of the participle V3.',
          mistakes: [
            {
              id: 'part_m1',
              incorrect: 'She has went to the branch office.',
              correct: 'She has gone to the branch office.',
              explanation: 'After "has", use the past participle "gone", never the simple past "went".',
              ruleTag: 'Have + V3 Participle'
            },
            {
              id: 'part_m2',
              incorrect: 'I have wrote three chapters of the manual.',
              correct: 'I have written three chapters of the manual.',
              explanation: 'The past participle of "write" is "written" (write → wrote → written).',
              ruleTag: 'Irregular V3 Form'
            }
          ],
          rememberRule: 'Always use V3 (gone, written, seen, spoken, taken) after have, has, and had!'
        },
        {
          type: 'practice',
          title: 'Irregular Past Participles Practice',
          subtitle: 'Fill in the correct V3 form.',
          questions: [
            {
              id: 'part_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the past participle of "choose":',
              sentenceWithBlank: 'The selection committee has ___ our proposal as the winner.',
              options: ['chosen', 'chose', 'choosed'],
              correctIndex: 0,
              grammarFocus: 'Past participle of choose',
              whyExplanation: 'The three forms are choose (V1) → chose (V2) → chosen (V3).'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t14_future_tense',
      moduleId: 5,
      title: 'Future Tense',
      shortDesc: 'will (spontaneous / predictions) vs. going to (plans / intentions) vs. present progressive (scheduled).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Future Forms: Will vs. Going to vs. Present Progressive',
          subtitle: 'Choosing the right way to talk about future time in English.',
          conceptSummary: 'English has three main ways to express the future: "will" (spontaneous decisions, offers, predictions), "be going to" (prior plans, intentions, physical evidence), and Present Progressive (fixed scheduled appointments).',
          visualGraphic: {
            heroSentence: 'I will help you with that! We are going to launch the app next month.',
            highlights: [
              { word: 'will help', role: 'Spontaneous Decision / Offer (will + base)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'are going to launch', role: 'Pre-planned Intention (be going to + base)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Will = spontaneous/offer. Going to = pre-planned intention.'
          },
          keyTakeaways: [
            'WILL: Spontaneous decisions made at the moment of speaking ("I\'ll answer the phone!"), promises ("I will call you"), offers.',
            'BE GOING TO: Plans made before speaking ("We are going to buy a house"), predictions with evidence ("Look at those dark clouds, it\'s going to rain").',
            'PRESENT PROGRESSIVE FOR FUTURE: Fixed appointments with people/places ("I am meeting the doctor tomorrow at 10 AM").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Future Nuances Matter',
          subtitle: 'Shows whether an action was carefully planned or decided on the spot.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Commitments',
              example: '"I will send you the revised figures by 5 PM today."',
              whyNeeded: '"Will" expresses a firm professional promise and prompt responsiveness.'
            }
          ],
          coachTip: 'When someone asks for help: Use "I will help you", NOT "I am going to help you".'
        },
        {
          type: 'explanation',
          title: 'The 3 Future Structures Breakdown',
          subtitle: 'Decision points and clear criteria.',
          coreRule: 'Ask yourself: Did I plan this before speaking (going to), am I deciding right now (will), or is it an organized diary date (present continuous)?',
          breakdown: [
            { term: 'Will + Base Verb', plainDefinition: 'Instant decisions, promises, threats, opinions (I think...)', simpleExample: 'I think the stock market will rise tomorrow. / I\'ll carry that bag for you.' },
            { term: 'Be going to + Base Verb', plainDefinition: 'Existing plan or visible current evidence', simpleExample: 'We are going to renovate the office next quarter.' },
            { term: 'Present Progressive for Future', plainDefinition: 'Fixed calendar arrangement with other people', simpleExample: 'We are having dinner with the investors on Thursday evening.' }
          ]
        },
        {
          type: 'formula',
          title: 'Future Formulas',
          subtitle: '[Subject] + [will + Base Verb] OR [Subject] + [am/is/are going to + Base Verb]',
          formulaBlocks: [
            { label: 'Will Future', part: 'We will achieve our targets', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Going to Future', part: 'We are going to hire three new analysts', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The plane', verbOrAux: 'will arrive', objectOrComplement: 'at Terminal 3 on time', fullSentence: 'The plane will arrive at Terminal 3 on time.', context: 'Airport' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Future in Daily Dialogue',
          subtitle: 'Scheduling and instant offers.',
          examples: [
            { id: 'fut_ex1', category: 'work', categoryLabel: 'Meeting Offer', sentence: 'Don\'t worry about the slides; I\'ll review and polish them tonight.', breakdownNote: '"I\'ll review" expresses an instant helpful offer.', speakerRole: 'Colleague' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Future Tense Mistakes',
          subtitle: 'Using "will" in time clauses starting with "when", "if", or "as soon as".',
          mistakes: [
            {
              id: 'fut_m1',
              incorrect: 'I will call you when I will arrive at the hotel.',
              correct: 'I will call you when I arrive at the hotel.',
              explanation: 'In English time clauses after when, as soon as, before, after, and if, use Simple Present, not will.',
              ruleTag: 'Future Time Clause Rule'
            }
          ],
          rememberRule: 'Never use "will" directly after when, if, or as soon as!'
        },
        {
          type: 'practice',
          title: 'Future Tense Practice',
          subtitle: 'Choose between will, going to, and present forms.',
          questions: [
            {
              id: 'fut_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank for a spontaneous decision made right now:',
              sentenceWithBlank: 'The phone is ringing. — Don\'t worry, I ___ it!',
              options: ['will get', 'am going to get', 'get'],
              correctIndex: 0,
              grammarFocus: 'Spontaneous decision with will',
              whyExplanation: 'Spontaneous decisions made at the moment of speaking use "will".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t15_do_does_did',
      moduleId: 5,
      title: 'do, does, did',
      shortDesc: 'Questions, negatives, and emphatic statements across present and past.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Do, Does, Did: Questions, Negatives & Emphasis',
          subtitle: 'The hardest working auxiliary verb in English syntax.',
          conceptSummary: 'In English, standard verbs cannot form negatives or questions on their own. They require the dummy auxiliary DO (do/does in present, did in past). DO can also be used in positive sentences for strong emphasis.',
          visualGraphic: {
            heroSentence: 'Do you work here? She doesn\'t know, but I DID tell her yesterday!',
            highlights: [
              { word: 'Do you work', role: 'Present Question (Do + Subject + Base V)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'doesn\'t know', role: 'Present Negative (doesn\'t + Base V)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'DID tell', role: 'Emphatic Past (Did + Base V for strong certainty)', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Do/Does/Did absorbs the tense/person marker; the main verb stays in BASE form.'
          },
          keyTakeaways: [
            'Present: DO (I/you/we/they) | DOES (he/she/it).',
            'Past: DID (all subjects).',
            'Golden rule: After do/does/did/don\'t/doesn\'t/didn\'t, the main verb is ALWAYS in base bare infinitive form.',
            'Emphatic DO: "I do love this idea!" / "She did send the email."'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Do/Does/Did Precision Matters',
          subtitle: 'Forms the basis of over 80% of all questions and negatives in spoken English.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Clarifying Past Actions',
              example: '"I did double-check the figures before sending the invoice."',
              whyNeeded: 'Emphatic "did + verb" politely reassures colleagues and supervisors that a task was completed.'
            }
          ],
          coachTip: 'Always strip the verb back to base: "Does he WORK here?", NOT "Does he works here?".'
        },
        {
          type: 'explanation',
          title: 'The 3 Functions of Do / Does / Did',
          subtitle: '1. Questions | 2. Negatives | 3. Emphatic statements.',
          coreRule: 'DO acts as a tense carrier. Once DO carries the tense or 3rd person singular -s, the main verb remains neutral.',
          breakdown: [
            { term: '1. Question Formation', plainDefinition: 'Do/Does/Did + Subject + Base Verb?', simpleExample: 'Do you agree? / Does she live here? / Did they approve the loan?' },
            { term: '2. Negative Formation', plainDefinition: 'Subject + don\'t/doesn\'t/didn\'t + Base Verb', simpleExample: 'He doesn\'t smoke. / We didn\'t see the warning.' },
            { term: '3. Emphatic Assertion', plainDefinition: 'Stresses certainty or corrects a misunderstanding', simpleExample: 'I do want to attend the workshop! / She did submit the form on time.' }
          ]
        },
        {
          type: 'formula',
          title: 'Do/Does/Did Question Formula',
          subtitle: '[Question Word] + [Do / Does / Did] + [Subject] + [Base Verb]?',
          formulaBlocks: [
            { label: 'Auxiliary', part: 'Did / Does', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Subject', part: 'the committee / you', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Base Verb', part: 'review the quarterly financial audit?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Why did you', verbOrAux: 'choose', objectOrComplement: 'this particular software?', fullSentence: 'Why did you choose this particular software?', context: 'Interview' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Do / Does / Did in Action',
          subtitle: 'Real office and support dialogues.',
          examples: [
            { id: 'ddd_ex1', category: 'work', categoryLabel: 'IT Support', sentence: 'Did you restart your computer before launching the updated application?', breakdownNote: '"Did you restart" uses auxiliary "Did" with base verb "restart".', speakerRole: 'IT Technician' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Tense Overlap Mistake',
          subtitle: 'Conjugating the main verb after do/does/did.',
          mistakes: [
            {
              id: 'ddd_m1',
              incorrect: 'Did you saw the news this morning?',
              correct: 'Did you see the news this morning?',
              explanation: '"Did" already indicates the past tense. The main verb must be base form "see".',
              ruleTag: 'Did + Base Verb'
            },
            {
              id: 'ddd_m2',
              incorrect: 'Does he lives in Toronto?',
              correct: 'Does he live in Toronto?',
              explanation: '"Does" carries the 3rd person singular -s. The main verb is "live".',
              ruleTag: 'Does + Base Verb'
            }
          ],
          rememberRule: 'After Do, Does, or Did, the main verb MUST be in base form (no -s, no -ed)!'
        },
        {
          type: 'practice',
          title: 'Do, Does, Did Practice',
          subtitle: 'Form correct questions and emphatic statements.',
          questions: [
            {
              id: 'ddd_q1',
              type: 'sentence_correction',
              prompt: 'Correct the question structure:',
              incorrectSentence: 'Did the manager approved your vacation request?',
              correctSentence: 'Did the manager approve your vacation request?',
              errorHighlight: 'approved',
              options: [
                'Did the manager approve your vacation request?',
                'Did the manager approves your vacation request?',
                'Did the manager approved your vacation request?'
              ],
              correctIndex: 0,
              whyExplanation: 'After auxiliary "Did", the main verb returns to base bare infinitive "approve".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t16_the_infinitive',
      moduleId: 5,
      title: 'The Infinitive',
      shortDesc: 'To-infinitive (to go, to learn) and Bare infinitive (go, learn) after modal verbs and perception verbs.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The Infinitive: To-Infinitive & Bare Infinitive',
          subtitle: 'The base form of verbs used to express purpose, intentions, and complements.',
          conceptSummary: 'The infinitive is the base form of a verb. The To-Infinitive includes "to" (to learn, to explain, to achieve). The Bare Infinitive is without "to" (learn, explain), used after modal auxiliaries (can, should, must) and causative verbs (make, let).',
          visualGraphic: {
            heroSentence: 'She decided to study abroad, and her parents let her go.',
            highlights: [
              { word: 'to study', role: 'To-Infinitive (decided + to-infinitive)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'let her go', role: 'Bare Infinitive (let + object + bare infinitive)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'To-Infinitive after verbs like decide/hope/want. Bare infinitive after modals/make/let.'
          },
          keyTakeaways: [
            'To-Infinitive: to + base verb (want to go, hope to see, plan to expand).',
            'Infinitive of Purpose: "I called to ask a question" (= in order to ask).',
            'Bare Infinitive: after modal verbs (can speak, must arrive, should review).',
            'Bare Infinitive: after MAKE and LET (He made me laugh, She let us leave early).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Infinitive Precision Matters',
          subtitle: 'Never say "She let me to go" or "I want that you go" in English!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Professional Delegations',
              example: '"I want you to lead the project (NOT I want that you lead)."',
              whyNeeded: 'English uses the pattern "Verb + Object + to-infinitive" instead of subordinate "that" clauses for wishes.'
            }
          ],
          coachTip: 'After LET and MAKE: NEVER use "to"! Say "Let me know", NOT "Let me to know".'
        },
        {
          type: 'explanation',
          title: 'To-Infinitive vs. Bare Infinitive Rules',
          subtitle: 'Complete list of governing verb structures.',
          coreRule: 'Identify the preceding main verb or auxiliary to determine whether "to" is required or forbidden.',
          breakdown: [
            { term: 'Verbs followed by To-Infinitive', plainDefinition: 'Agree, decide, hope, manage, offer, plan, promise, refuse, want, afford', simpleExample: 'We managed to meet the deadline.' },
            { term: 'Verb + Person + To-Infinitive', plainDefinition: 'Advise, encourage, invite, remind, tell, warn, allow', simpleExample: 'She reminded me to submit the timesheet.' },
            { term: 'Infinitive of Purpose (Why?)', plainDefinition: 'Explains the goal or intention without saying "for to"', simpleExample: 'I attended the conference to expand my network.' },
            { term: 'Bare Infinitive (No "to")', plainDefinition: 'Modals (can/will/should), LET, MAKE, HELP (optional)', simpleExample: 'You must arrive on time. / They let us inspect the facility.' }
          ]
        },
        {
          type: 'formula',
          title: 'Infinitive Formulas',
          subtitle: '[Subject] + [Verb] + [to + Base Verb] OR [Subject] + [Modal / Let / Make] + [Base Verb]',
          formulaBlocks: [
            { label: 'To-Infinitive', part: 'She hopes to expand the business', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Bare Infinitive', part: 'The director let us leave early', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We called the client', verbOrAux: 'to confirm', objectOrComplement: 'the appointment time', fullSentence: 'We called the client to confirm the appointment time.', context: 'Customer Service' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Infinitives in Professional Life',
          subtitle: 'Purpose statements and authorizations.',
          examples: [
            { id: 'inf_ex1', category: 'work', categoryLabel: 'Project Kickoff', sentence: 'We have assembled this team to develop our next-generation mobile application.', breakdownNote: '"to develop" is an infinitive of purpose.', speakerRole: 'VP of Product' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Infinitive Mistakes',
          subtitle: 'Using "for + verb" to express purpose or putting "to" after "let/make".',
          mistakes: [
            {
              id: 'inf_m1',
              incorrect: 'I came here for study English.',
              correct: 'I came here to study English. / I came here for studying English (rare).',
              explanation: 'To express purpose for actions, use the to-infinitive ("to study"), never "for + base verb".',
              ruleTag: 'Infinitive of Purpose'
            },
            {
              id: 'inf_m2',
              incorrect: 'The supervisor made me to rewrite the entire report.',
              correct: 'The supervisor made me rewrite the entire report.',
              explanation: '"Make" as a causative verb takes a bare infinitive without "to" (make someone do something).',
              ruleTag: 'Causative Make + Bare Infinitive'
            }
          ],
          rememberRule: 'Express purpose with "to + verb" (I went to buy food, NOT for buy food)!'
        },
        {
          type: 'practice',
          title: 'The Infinitive Practice',
          subtitle: 'Select the correct infinitive structure.',
          questions: [
            {
              id: 'inf_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb form:',
              sentenceWithBlank: 'Please let me ___ if you need any further assistance with the platform.',
              options: ['know', 'to know', 'knowing'],
              correctIndex: 0,
              grammarFocus: 'Bare infinitive after let',
              whyExplanation: '"Let" is followed by object + bare infinitive without "to" ("let me know").'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t17_imperative_form_verbs',
      moduleId: 5,
      title: 'The Imperative Form of Verbs',
      shortDesc: 'Commands, direct instructions, warnings, polite requests (Please + base verb), and invitations.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Imperative Form: Instructions & Requests',
          subtitle: 'Giving clear commands, software steps, directions, and polite requests.',
          conceptSummary: 'The imperative form uses the bare base verb without an overt subject (the subject "you" is understood). It is used for giving instructions, directions, warnings, commands, and polite requests (with "please").',
          visualGraphic: {
            heroSentence: 'Please click the link and enter your confirmation code.',
            highlights: [
              { word: 'Please click', role: 'Polite Imperative (Please + Base Verb)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'enter your code', role: 'Direct Step Instruction (Base Verb)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'The imperative starts directly with the base verb. Negative = Do not / Don\'t + base verb.'
          },
          keyTakeaways: [
            'Affirmative: Base Verb (Open the door, Save your file, Turn right).',
            'Negative: Don\'t + Base Verb (Don\'t touch that, Do not reply to this email).',
            'Polite Request: Please + Base Verb (Please submit your form by Friday).',
            'First person plural suggestion: Let\'s + Base Verb (Let\'s review the agenda together).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Imperative Mastery Matters',
          subtitle: 'Essential for user manuals, software navigation, and safety protocols.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Writing Standard Operating Procedures (SOP)',
              example: '"Attach all receipts, verify the totals, and submit for manager approval."',
              whyNeeded: 'Clear, concise imperatives make technical instructions crisp and easy to follow.'
            }
          ],
          coachTip: 'Add "please" or "could you please" when addressing clients or superiors to maintain professional warmth.'
        },
        {
          type: 'explanation',
          title: 'Imperative Functions & Nuances',
          subtitle: 'From firm warnings to friendly invitations.',
          coreRule: 'Start the sentence directly with the base verb. Never add -s, -ed, or -ing to imperative verbs.',
          breakdown: [
            { term: 'Direct Instructions', plainDefinition: 'Step-by-step guides and manuals', simpleExample: 'Insert the card. Select your language. Enter your PIN.' },
            { term: 'Negative Imperatives', plainDefinition: 'Prohibitions and warnings', simpleExample: 'Do not share your password with anyone.' },
            { term: 'Polite Workplace Requests', plainDefinition: 'Softened with "Please" or "Kindly"', simpleExample: 'Kindly review the attached contract and let me know your thoughts.' },
            { term: 'Inclusive Suggestions (Let\'s)', plainDefinition: 'Inviting the group to act together', simpleExample: 'Let\'s take a five-minute break.' }
          ]
        },
        {
          type: 'formula',
          title: 'Imperative Formulas',
          subtitle: 'Positive: [Base Verb] + [Object] | Negative: [Don\'t / Do not] + [Base Verb] + [Object]',
          formulaBlocks: [
            { label: 'Affirmative Imperative', part: 'Verify the credentials before logging in', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
            { label: 'Negative Imperative', part: 'Do not click on suspicious email links', color: 'bg-rose-100 text-rose-900 border-rose-300' }
          ],
          tableExamples: [
            { subject: 'Please', verbOrAux: 'sign', objectOrComplement: 'on the dotted line', fullSentence: 'Please sign on the dotted line.', context: 'Contract' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Imperatives in Daily Instructions',
          subtitle: 'Software UI and emergency guidance.',
          examples: [
            { id: 'imp_ex1', category: 'travel', categoryLabel: 'Flight Safety', sentence: 'Please fasten your seatbelt and return your tray table to its upright position.', breakdownNote: '"fasten" and "return" are polite imperative base verbs.', speakerRole: 'Flight Attendant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Imperative Form Errors',
          subtitle: 'Adding subject pronouns or inflecting the verb in commands.',
          mistakes: [
            {
              id: 'imp_m1',
              incorrect: 'You please open the window.',
              correct: 'Please open the window.',
              explanation: 'Do not include the overt subject pronoun "You" in standard imperative requests.',
              ruleTag: 'Overt Subject in Imperative'
            },
            {
              id: 'imp_m2',
              incorrect: 'No enter this room.',
              correct: 'Do not enter this room. / Don\'t enter this room.',
              explanation: 'Negative imperatives must use "Do not" or "Don\'t", never "No + verb".',
              ruleTag: 'Negative Imperative Form'
            }
          ],
          rememberRule: 'Use "Don\'t + verb" for negative instructions, NEVER "No + verb"!'
        },
        {
          type: 'practice',
          title: 'Imperative Verbs Practice',
          subtitle: 'Construct clear and polite imperative instructions.',
          questions: [
            {
              id: 'imp_q1',
              type: 'sentence_correction',
              prompt: 'Correct this safety warning sign:',
              incorrectSentence: 'No touch the wet paint.',
              correctSentence: 'Do not touch the wet paint.',
              errorHighlight: 'No touch',
              options: [
                'Do not touch the wet paint.',
                'No touching the wet paint.',
                'Not touch the wet paint.'
              ],
              correctIndex: 0,
              whyExplanation: 'Standard English negative imperatives require "Do not" + base verb ("Do not touch").'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t18_gerunds',
      moduleId: 5,
      title: 'Gerunds',
      shortDesc: 'Verbs ending in -ing functioning as nouns (Swimming is fun, enjoy reading, good at speaking).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Gerunds: Verbs Acting as Nouns',
          subtitle: 'Verb + ing functioning as subjects, objects, and after prepositions.',
          conceptSummary: 'A gerund is a verb ending in -ing that functions as a NOUN in a sentence. It can be the subject of a sentence (Swimming is healthy), the object of a verb (I enjoy reading), or the object of a preposition (She is good at presenting).',
          visualGraphic: {
            heroSentence: 'Managing a team requires listening carefully and communicating clearly.',
            highlights: [
              { word: 'Managing', role: 'Gerund as Subject of Sentence', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'listening', role: 'Gerund as Object of Verb (requires)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'communicating', role: 'Gerund connected by "and"', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Gerunds look like progressive verbs, but they function as NOUNS.'
          },
          keyTakeaways: [
            'Gerund = Verb + ing acting as a noun (e.g. learning, writing, exercising).',
            'Gerund as Subject takes a SINGULAR verb (Reading books IS rewarding).',
            'ALWAYS use a gerund after prepositions (thank you for coming, interested in applying).',
            'Verbs followed ONLY by gerunds: avoid, consider, enjoy, finish, mind, practice, suggest.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Gerunds After Prepositions Matter',
          subtitle: 'The #1 universal rule: Preposition + Gerund (-ing).',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Professional Thank-You Notes',
              example: '"Thank you for taking (NOT for take) the time to interview me."',
              whyNeeded: 'Every preposition in English MUST be followed by an -ing gerund, never a base verb.'
            }
          ],
          coachTip: 'Memorize the golden rule: Any verb right after a preposition (in, on, at, for, about, without, by) MUST end in -ING!'
        },
        {
          type: 'explanation',
          title: 'Gerund vs. Infinitive Patterns',
          subtitle: 'Which verbs require gerunds vs. to-infinitives.',
          coreRule: 'Some verbs take only gerunds (enjoy doing), some only infinitives (decide to do), and some can take both with or without a change in meaning.',
          breakdown: [
            { term: 'Verbs + Gerunds Only', plainDefinition: 'Admit, avoid, consider, deny, enjoy, finish, postpone, practice, recommend, suggest', simpleExample: 'She suggested hiring a consultant.' },
            { term: 'Preposition + Gerund (Universal Rule)', plainDefinition: 'After any preposition (before, after, by, without, about, for)', simpleExample: 'Before submitting the proposal, check for errors. / He left without saying goodbye.' },
            { term: 'Common Phrasal Verbs + Gerund', plainDefinition: 'Look forward to, be used to, object to, give up', simpleExample: 'I look forward to meeting you (here "to" is a preposition!).' },
            { term: 'Gerund as Subject', plainDefinition: 'Verb functioning as the topic of the sentence', simpleExample: 'Exercising daily improves cardiovascular health.' }
          ]
        },
        {
          type: 'formula',
          title: 'Gerund Formulas',
          subtitle: '[Gerund Subject] + [Singular Verb] OR [Preposition] + [Gerund (-ing)]',
          formulaBlocks: [
            { label: 'Gerund Subject', part: 'Analyzing market trends', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Singular Verb', part: 'is essential for growth', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We look forward to', verbOrAux: 'collaborating', objectOrComplement: 'with your agency on this project', fullSentence: 'We look forward to collaborating with your agency on this project.', context: 'Partnership' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Gerunds in Daily Dialogue',
          subtitle: 'Professional emails and leisure interests.',
          examples: [
            { id: 'ger_ex1', category: 'work', categoryLabel: 'Formal Email Signoff', sentence: 'I look forward to hearing from you at your earliest convenience.', breakdownNote: '"hearing" is a gerund after preposition "to" in "look forward to".', speakerRole: 'Job Applicant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Preposition + Base Verb" Mistake',
          subtitle: 'Forgetting to add -ing after prepositions or "look forward to".',
          mistakes: [
            {
              id: 'ger_m1',
              incorrect: 'Thank you for help me with the presentation.',
              correct: 'Thank you for helping me with the presentation.',
              explanation: 'After the preposition "for", the verb must be a gerund ("helping").',
              ruleTag: 'Preposition + Gerund'
            },
            {
              id: 'ger_m2',
              incorrect: 'I look forward to meet you tomorrow.',
              correct: 'I look forward to meeting you tomorrow.',
              explanation: 'In the phrase "look forward to", "to" is a preposition, requiring the gerund "meeting".',
              ruleTag: 'Look forward to + Gerund'
            }
          ],
          rememberRule: 'Always use -ing after prepositions: "interested in learning", "thank you for coming", "look forward to seeing"!'
        },
        {
          type: 'practice',
          title: 'Gerunds Practice',
          subtitle: 'Choose between gerunds and infinitives in key contexts.',
          questions: [
            {
              id: 'ger_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb form after a preposition:',
              sentenceWithBlank: 'She succeeded by ___ long hours and staying focused on the goal.',
              options: ['working', 'to work', 'work'],
              correctIndex: 0,
              grammarFocus: 'Gerund after preposition by',
              whyExplanation: '"By" is a preposition, so the verb must take the gerund form "working".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
