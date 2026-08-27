import { Module } from '../../types';

export const module1: Module = {
  id: 1,
  title: 'Grammar Foundations',
  tagline: 'The Building Blocks of Clear Communication',
  description: 'Understand what grammar is, parts of speech, subject & verb sentence architecture, punctuation, and capitalization for work and daily life.',
  iconName: 'Building2',
  color: 'from-blue-600 to-indigo-600',
  topics: [
    {
      id: 'mod1_topic1',
      moduleId: 1,
      title: 'What Is Grammar & Sentence Structure (S + V + O)',
      shortDesc: 'Master the universal formula of clear English sentences: Subject + Verb + Object.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'What Is Grammar & Sentence Structure?',
          subtitle: 'Grammar is not a set of punishment rules—it is the road map for people to understand you quickly.',
          conceptSummary: 'In English, sentence order matters. The most important formula you will ever learn is: Subject (who) + Verb (action/state) + Object (what/who is affected).',
          visualGraphic: {
            heroSentence: 'Maria sends emails every morning.',
            highlights: [
              { word: 'Maria', role: 'Subject (Who)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'sends', role: 'Verb (Action)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'emails', role: 'Object (What)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
            ],
            caption: 'Clear English always tells the listener WHO did WHAT.'
          },
          keyTakeaways: [
            'Every standard English sentence must have at least a Subject and a Verb.',
            'English is a Subject-Verb-Object (SVO) language.',
            'Putting words in the correct order instantly builds your confidence.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Does Sentence Structure Matter in Adult Life?',
          subtitle: 'How proper structure protects you from workplace confusion and misunderstandings.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'At Work & Writing Emails',
              example: '"I received your report." vs. "Received I your report."',
              whyNeeded: 'Clear sentence order shows professional polish to managers, colleagues, and clients.'
            },
            {
              icon: 'MessageSquare',
              situation: 'Everyday Conversations',
              example: '"We need a taxi." vs. "Taxi need we."',
              whyNeeded: 'People grasp your intent in 1 second without asking you to repeat yourself.'
            },
            {
              icon: 'Plane',
              situation: 'Travel & Formal Forms',
              example: '"I have a passport reservation."',
              whyNeeded: 'Avoid delays at airports, hotels, and embassy counters.'
            }
          ],
          coachTip: 'Adult Tip: You do not need big words to sound professional. Short, correctly structured sentences sound crisp and authoritative!'
        },
        {
          type: 'explanation',
          title: 'Simple Explanation: Subject & Verb',
          subtitle: 'The two essential pillars of every English thought.',
          coreRule: 'Subject = The person, place, or thing doing the action. Verb = The action or state of being.',
          breakdown: [
            {
              term: 'Subject (S)',
              plainDefinition: 'The person or thing performing the action. Answers: "Who?" or "What?"',
              simpleExample: 'Alex (Subject) drives a delivery van.'
            },
            {
              term: 'Verb (V)',
              plainDefinition: 'The action (run, write, eat) or state (is, seems, feels).',
              simpleExample: 'Alex drives (Verb) a delivery van.'
            },
            {
              term: 'Object (O)',
              plainDefinition: 'The receiver of the action. Answers: "What?" or "Whom?"',
              simpleExample: 'Alex drives a delivery van (Object).'
            }
          ]
        },
        {
          type: 'formula',
          title: 'The Golden Formula',
          subtitle: 'Memorize this simple 3-part formula for 90% of daily communication.',
          formulaBlocks: [
            { label: '1. Subject (Who)', part: 'I / You / Sarah / The team', color: 'border-blue-500 bg-blue-50 text-blue-900' },
            { label: '2. Verb (Action)', part: 'drive / drink / signed / works', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' },
            { label: '3. Object (What/Who)', part: 'a car / coffee / the contract / here', color: 'border-amber-500 bg-amber-50 text-amber-900' }
          ],
          tableExamples: [
            { subject: 'I', verbOrAux: 'drink', objectOrComplement: 'coffee every morning.', fullSentence: 'I drink coffee every morning.', context: 'Daily Routine' },
            { subject: 'The manager', verbOrAux: 'approved', objectOrComplement: 'the project budget.', fullSentence: 'The manager approved the project budget.', context: 'Workplace' },
            { subject: 'We', verbOrAux: 'booked', objectOrComplement: 'a hotel room.', fullSentence: 'We booked a hotel room.', context: 'Travel' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Real-Life English in Action',
          subtitle: 'Notice how native English speakers structure these adult scenarios.',
          examples: [
            {
              id: 'ex1',
              category: 'work',
              categoryLabel: 'Office Email',
              sentence: 'I will submit the quarterly report today.',
              breakdownNote: 'Subject (I) + Helping/Verb (will submit) + Object (the quarterly report)',
              speakerRole: 'Finance Analyst'
            },
            {
              id: 'ex2',
              category: 'restaurant',
              categoryLabel: 'Ordering Food',
              sentence: 'We ordered two coffees and a sandwich.',
              breakdownNote: 'Subject (We) + Verb (ordered) + Object (two coffees and a sandwich)',
              speakerRole: 'Customer'
            },
            {
              id: 'ex3',
              category: 'home',
              categoryLabel: 'Daily Life',
              sentence: 'My daughter needs help with her homework.',
              breakdownNote: 'Subject (My daughter) + Verb (needs) + Object (help)',
              speakerRole: 'Parent'
            }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Common Structure Mistakes',
          subtitle: 'Mistakes adult learners frequently make and how to avoid them.',
          mistakes: [
            {
              id: 'm1',
              incorrect: 'In the office works John.',
              correct: 'John works in the office.',
              explanation: 'English requires the Subject (John) before the Verb (works). Do not start with the location unless followed by a comma.',
              ruleTag: 'Word Order',
              severityTip: 'Starting with the subject makes your sentence instantly clear.'
            },
            {
              id: 'm2',
              incorrect: 'Like very much this coffee.',
              correct: 'I like this coffee very much.',
              explanation: 'Unlike Spanish, Arabic, or Italian, English almost NEVER drops the subject pronoun ("I").',
              ruleTag: 'Missing Subject'
            }
          ],
          rememberRule: 'Always ensure your sentence has a clear Subject before the Verb!'
        },
        {
          type: 'practice',
          title: 'Interactive Practice Check',
          subtitle: 'Test your understanding with these interactive exercises.',
          questions: [
            {
              id: 'q1_1',
              type: 'multiple_choice',
              prompt: 'Which part is the SUBJECT in this sentence: "The new supervisor signed the contract"?',
              options: ['The new supervisor', 'signed', 'the contract', 'contract'],
              correctIndex: 0,
              whyExplanation: '"The new supervisor" is the person performing the action (signing). That is the Subject.'
            },
            {
              id: 'q1_2',
              type: 'word_order',
              prompt: 'Put the words in correct Subject + Verb + Object order:',
              scrambledWords: ['the presentation', 'prepared', 'Our team', 'yesterday'],
              correctSentence: 'Our team prepared the presentation yesterday',
              contextHint: 'Subject (Our team) + Verb (prepared) + Object (the presentation) + Time (yesterday)',
              whyExplanation: 'Standard order is Subject (Our team) + Verb (prepared) + Object (the presentation), followed by time expressions.'
            },
            {
              id: 'q1_3',
              type: 'sentence_correction',
              prompt: 'Spot and fix the missing subject error in this workplace message:',
              incorrectSentence: 'Received your email this morning.',
              correctSentence: 'I received your email this morning.',
              errorHighlight: 'Missing subject pronoun',
              options: [
                'I received your email this morning.',
                'Received I your email this morning.',
                'Email your received this morning.'
              ],
              correctIndex: 0,
              whyExplanation: 'In professional English, complete sentences require a stated subject ("I").'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz1_1',
          type: 'multiple_choice',
          prompt: 'What is the correct English word order for basic statements?',
          options: ['Verb + Subject + Object', 'Subject + Verb + Object', 'Object + Verb + Subject', 'Subject + Object + Verb'],
          correctIndex: 1,
          whyExplanation: 'English uses the SVO (Subject + Verb + Object) order.'
        },
        {
          id: 'quiz1_2',
          type: 'fill_blank',
          sentenceWithBlank: 'Marcus ___ a new laptop for his remote job.',
          options: ['bought', 'buying', 'is buy'],
          correctIndex: 0,
          grammarFocus: 'Main action verb',
          whyExplanation: 'The sentence needs a simple past verb ("bought") to complete the S + V + O structure.'
        },
        {
          id: 'quiz1_3',
          type: 'true_false',
          prompt: 'True or False: In English, you can drop the subject "I" in standard statements like "Am tired today."',
          statement: 'In standard English, the subject pronoun "I" cannot be omitted in a complete sentence.',
          isTrue: true,
          whyExplanation: 'Correct! English requires an explicit subject pronoun: "I am tired today."'
        }
      ]
    },
    {
      id: 'mod1_topic2',
      moduleId: 1,
      title: 'Parts of Speech & Punctuation Overview',
      shortDesc: 'Understand Nouns, Verbs, Adjectives, Prepositions, and proper punctuation rules.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Parts of Speech & Punctuation',
          subtitle: 'The 8 roles words play, plus essential punctuation for clean communication.',
          conceptSummary: 'Every word in an English sentence has a specific job: Naming (Noun), Acting (Verb), Describing (Adjective/Adverb), or Connecting (Preposition/Conjunction).',
          visualGraphic: {
            heroSentence: 'The careful accountant quickly checked the invoice.',
            highlights: [
              { word: 'careful', role: 'Adjective', color: 'bg-purple-100 text-purple-800 border-purple-300' },
              { word: 'accountant', role: 'Noun', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'quickly', role: 'Adverb', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'checked', role: 'Verb', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Every word family performs a distinct role in clear English.'
          },
          keyTakeaways: [
            'Nouns name things; verbs show action or state.',
            'Adjectives describe nouns; adverbs describe verbs.',
            'Every sentence starts with a Capital letter and ends with . ? or !'
          ]
        },
        {
          type: 'explanation',
          title: 'The Core Word Families',
          subtitle: 'A quick adult reference for the most common parts of speech.',
          coreRule: 'Identify what each word is doing to select the right grammar form.',
          breakdown: [
            { term: 'Noun', plainDefinition: 'Person, place, thing, or concept.', simpleExample: 'Manager, Doha, computer, idea.' },
            { term: 'Pronoun', plainDefinition: 'Replaces a noun to prevent repetition.', simpleExample: 'He, she, it, they, we.' },
            { term: 'Verb', plainDefinition: 'Expresses an action, occurrence, or state.', simpleExample: 'Works, is, calls, decided.' },
            { term: 'Adjective', plainDefinition: 'Describes a noun (gives details about size, color, quality).', simpleExample: 'Urgent meeting, efficient system.' }
          ]
        },
        {
          type: 'practice',
          title: 'Quick Check: Word Roles',
          subtitle: 'Identify the role of words in workplace sentences.',
          questions: [
            {
              id: 'q1_2_1',
              type: 'multiple_choice',
              prompt: 'In the sentence "We have an urgent meeting at 3 PM", what part of speech is "urgent"?',
              options: ['Adjective (describing "meeting")', 'Verb', 'Noun', 'Adverb'],
              correctIndex: 0,
              whyExplanation: '"Urgent" describes the noun "meeting", so it is an adjective.'
            },
            {
              id: 'q1_2_2',
              type: 'matching',
              prompt: 'Match each word with its correct part of speech:',
              pairs: [
                { id: 'p1', left: 'Company', right: 'Noun (Thing/Entity)' },
                { id: 'p2', left: 'Deliver', right: 'Verb (Action)' },
                { id: 'p3', left: 'Carefully', right: 'Adverb (Manner)' }
              ],
              whyExplanation: 'Company is a noun, deliver is an action verb, and carefully is an adverb describing how something is done.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz1_2_1',
          type: 'multiple_choice',
          prompt: 'Which word in "She speaks English fluently" is an ADVERB?',
          options: ['She', 'speaks', 'English', 'fluently'],
          correctIndex: 3,
          whyExplanation: '"Fluently" describes HOW she speaks (the verb), so it is an adverb.'
        }
      ]
    }
  ]
};

export const module2: Module = {
  id: 2,
  title: 'Nouns & Plurals',
  tagline: 'Naming People, Places, Products, and Concepts',
  description: 'Master common vs proper nouns, countable vs uncountable (coffee, water, equipment), regular/irregular plurals, and possessives.',
  iconName: 'PackageCheck',
  color: 'from-emerald-600 to-teal-600',
  topics: [
    {
      id: 'mod2_topic1',
      moduleId: 2,
      title: 'Countable vs. Uncountable Nouns',
      shortDesc: 'Understand when to use a/an, numbers, or "some/much" with words like information, water, and equipment.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Countable vs. Uncountable Nouns',
          subtitle: 'One of the most common error zones for adult English learners worldwide.',
          conceptSummary: 'Countable nouns can be counted with numbers (1 car, 2 cars). Uncountable nouns are treated as a whole mass or concept (water, information, advice, equipment) and do NOT take a plural -s.',
          visualGraphic: {
            heroSentence: 'We received useful advice and three reports.',
            highlights: [
              { word: 'useful advice', role: 'Uncountable (No plural -s, no "an")', color: 'bg-amber-100 text-amber-900 border-amber-300' },
              { word: 'three reports', role: 'Countable Plural (takes -s)', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
            ],
            caption: 'Uncountable nouns never take -s and cannot use "a/an" directly.'
          },
          keyTakeaways: [
            'Countable: 1 pen, 2 pens, many pens.',
            'Uncountable: information, furniture, advice, equipment, water, money.',
            'Never say "an advice" or "informations". Say "some advice" or "a piece of advice".'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why It Matters in Business & Daily Life',
          subtitle: 'Using uncountable nouns correctly signals high English fluency.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Workplace Communication',
              example: '"We need more information regarding the budget." (Not "informations")',
              whyNeeded: 'Prevents grammatical distraction in professional proposals and emails.'
            },
            {
              icon: 'ShoppingBag',
              situation: 'Purchasing & Logistics',
              example: '"The office needs new equipment." (Not "equipments")',
              whyNeeded: 'Clear communication with suppliers, vendors, and purchase managers.'
            }
          ],
          coachTip: 'Memory Hack: If you cannot slice it into individual units without changing the word (e.g. water, advice, luggage), it is uncountable!'
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Uncountable Noun Traps',
          subtitle: 'These 5 words cause 80% of noun mistakes in adult English.',
          mistakes: [
            {
              id: 'm2_1',
              incorrect: 'He gave me some good advices.',
              correct: 'He gave me some good advice.',
              explanation: '"Advice" is uncountable. It never takes an -s. If you want to count it, say "a piece of advice".',
              ruleTag: 'Uncountable Noun'
            },
            {
              id: 'm2_2',
              incorrect: 'I need to buy new furnitures for the apartment.',
              correct: 'I need to buy new furniture for the apartment.',
              explanation: '"Furniture" is a collective mass noun. It has no plural form.',
              ruleTag: 'Uncountable Noun'
            },
            {
              id: 'm2_3',
              incorrect: 'Could you send me the informations?',
              correct: 'Could you send me the information?',
              explanation: '"Information" is always singular in English.',
              ruleTag: 'Uncountable Noun'
            }
          ],
          rememberRule: 'Information, Advice, Furniture, Equipment, Luggage = NEVER add -s!'
        },
        {
          type: 'practice',
          title: 'Countable vs Uncountable Practice',
          subtitle: 'Select the correct phrasing for these adult scenarios.',
          questions: [
            {
              id: 'q2_1_1',
              type: 'multiple_choice',
              prompt: 'Which sentence is grammatically CORRECT for an office request?',
              options: [
                'Please send me the necessary information.',
                'Please send me the necessary informations.',
                'Please send me an information.'
              ],
              correctIndex: 0,
              whyExplanation: '"Information" is uncountable in English, so it does not take "an" or plural "-s".'
            },
            {
              id: 'q2_1_2',
              type: 'fill_blank',
              sentenceWithBlank: 'The IT department ordered ten new ___ for the engineering team.',
              options: ['laptops', 'equipments', 'softwares'],
              correctIndex: 0,
              grammarFocus: 'Countable plural noun',
              whyExplanation: '"Laptops" is countable (1 laptop, 10 laptops). Equipment and software are uncountable mass nouns.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz2_1_1',
          type: 'multiple_choice',
          prompt: 'Which of the following nouns is UNCOUNTABLE in English?',
          options: ['Advice', 'Employee', 'Project', 'Ticket'],
          correctIndex: 0,
          whyExplanation: '"Advice" is an uncountable noun. (Employee, Project, and Ticket are all countable).'
        }
      ]
    }
  ]
};

export const module3: Module = {
  id: 3,
  title: 'Pronouns',
  tagline: 'Subject, Object, Possessive, and Reflexive',
  description: 'Master I vs me, she vs her, they vs them, possessive adjectives (my, your, their), possessive pronouns (mine, yours), and avoid embarrassing pronoun mix-ups.',
  iconName: 'Users',
  color: 'from-violet-600 to-purple-600',
  topics: [
    {
      id: 'mod3_topic1',
      moduleId: 3,
      title: 'Subject vs. Object Pronouns (I vs. Me, She vs. Her)',
      shortDesc: 'Stop guessing between "John and I" vs "John and me" in workplace and social English.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Subject vs. Object Pronouns',
          subtitle: 'Never confuse who is doing the action vs who is receiving it.',
          conceptSummary: 'Subject pronouns (I, you, he, she, it, we, they) do the action BEFORE the verb. Object pronouns (me, you, him, her, it, us, them) receive the action AFTER the verb or preposition.',
          visualGraphic: {
            heroSentence: 'She called him after the meeting.',
            highlights: [
              { word: 'She', role: 'Subject Pronoun (Before verb)', color: 'bg-violet-100 text-violet-800 border-violet-300' },
              { word: 'called', role: 'Action Verb', color: 'bg-slate-100 text-slate-800 border-slate-300' },
              { word: 'him', role: 'Object Pronoun (After verb)', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Subject comes before the verb; Object comes after.'
          },
          keyTakeaways: [
            'Before the verb: I, He, She, We, They.',
            'After the verb or preposition: Me, Him, Her, Us, Them.',
            'Between you and me (preposition "between" requires object pronoun "me").'
          ]
        },
        {
          type: 'formula',
          title: 'Pronoun Pair Chart',
          subtitle: 'Your complete master grid for English pronouns.',
          formulaBlocks: [
            { label: 'Subject (Doer)', part: 'I / He / She / We / They', color: 'border-violet-500 bg-violet-50 text-violet-900' },
            { label: 'Object (Receiver)', part: 'me / him / her / us / them', color: 'border-amber-500 bg-amber-50 text-amber-900' },
            { label: 'Possessive (Owner)', part: 'my / his / her / our / their', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' }
          ],
          tableExamples: [
            { subject: 'I', verbOrAux: 'emailed', objectOrComplement: 'them.', fullSentence: 'I emailed them.', context: 'Workplace' },
            { subject: 'They', verbOrAux: 'helped', objectOrComplement: 'us.', fullSentence: 'They helped us.', context: 'Collaboration' },
            { subject: 'She', verbOrAux: 'invited', objectOrComplement: 'him to dinner.', fullSentence: 'She invited him to dinner.', context: 'Social' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! The "Me and John" Mistake',
          subtitle: 'The #1 pronoun confusion even native speakers struggle with.',
          mistakes: [
            {
              id: 'm3_1',
              incorrect: 'Me and Alex prepared the slides.',
              correct: 'Alex and I prepared the slides.',
              explanation: 'You are the subject of the sentence doing the action, so use "I". Also, polite English puts the other person first ("Alex and I").',
              ruleTag: 'Compound Subject'
            },
            {
              id: 'm3_2',
              incorrect: 'The director spoke with my colleague and I.',
              correct: 'The director spoke with my colleague and me.',
              explanation: '"With" is a preposition. Prepositions require object pronouns ("me", not "I"). Quick test: Remove "my colleague and" -> "The director spoke with me."',
              ruleTag: 'Object of Preposition'
            }
          ],
          rememberRule: 'Quick Test: Remove the other person to see if "I" or "me" sounds right by itself!'
        },
        {
          type: 'practice',
          title: 'Pronoun Mastery Check',
          subtitle: 'Choose the correct pronoun for these realistic sentences.',
          questions: [
            {
              id: 'q3_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'The client called David and ___ regarding the contract update.',
              options: ['me', 'I', 'myself'],
              correctIndex: 0,
              grammarFocus: 'Object pronoun after verb',
              whyExplanation: 'The client called "me" (object of the verb). Test: "The client called me."'
            },
            {
              id: 'q3_1_2',
              type: 'multiple_choice',
              prompt: 'Which sentence is polite and grammatically correct for a team presentation?',
              options: [
                'Sarah and I will lead the workshop today.',
                'Me and Sarah will lead the workshop today.',
                'I and Sarah will lead the workshop today.'
              ],
              correctIndex: 0,
              whyExplanation: 'As subjects, use "Sarah and I" (polite order puts the other person first, followed by subject pronoun "I").'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz3_1_1',
          type: 'fill_blank',
          sentenceWithBlank: 'Please send the revised proposal to Rachel and ___ by 4 PM.',
          options: ['me', 'I', 'mine'],
          correctIndex: 0,
          grammarFocus: 'Object pronoun after preposition "to"',
          whyExplanation: 'After the preposition "to", you must use the object pronoun "me".'
        }
      ]
    }
  ]
};

export const module4: Module = {
  id: 4,
  title: 'Verbs & Agreement',
  tagline: 'Action, State, Helping Verbs & Subject-Verb Agreement',
  description: 'Understand action vs state verbs, auxiliary verbs (do, have, be), regular vs irregular base forms, and avoid singular/plural subject-verb mismatches.',
  iconName: 'Zap',
  color: 'from-amber-600 to-orange-600',
  topics: [
    {
      id: 'mod4_topic1',
      moduleId: 4,
      title: 'Subject-Verb Agreement (Singular vs. Plural)',
      shortDesc: 'Ensure your verbs always match your subjects: "He works" vs "They work".',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Subject-Verb Agreement',
          subtitle: 'The cornerstone of grammatical precision in English.',
          conceptSummary: 'A singular subject takes a singular verb (usually with -s or -es in present simple). A plural subject takes a base plural verb without -s.',
          visualGraphic: {
            heroSentence: 'The manager approves all travel requests.',
            highlights: [
              { word: 'The manager (1 person)', role: 'Singular Subject', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'approves', role: 'Singular Verb (takes -s)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Singular subject = verb ends in -s. Plural subject = verb has no -s.'
          },
          keyTakeaways: [
            'Singular (He / She / It / The doctor) -> works, teaches, has, is.',
            'Plural (We / You / They / The doctors) -> work, teach, have, are.',
            'Beware of phrases between the subject and verb (e.g. "The box of files IS heavy").'
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Agreement Traps',
          subtitle: 'Do not be tricked by words that sit between subject and verb.',
          mistakes: [
            {
              id: 'm4_1',
              incorrect: 'The quality of these products are excellent.',
              correct: 'The quality of these products is excellent.',
              explanation: 'The real subject is "The quality" (singular), not "products". Therefore, the verb is "is".',
              ruleTag: 'Prepositional Phrase Distraction'
            },
            {
              id: 'm4_2',
              incorrect: 'Everyone in the office have lunch at 1 PM.',
              correct: 'Everyone in the office has lunch at 1 PM.',
              explanation: 'Indefinite pronouns like "Everyone", "Everybody", and "Each" are grammatically singular and take singular verbs ("has", "is", "works").',
              ruleTag: 'Indefinite Pronouns'
            }
          ],
          rememberRule: 'Find the TRUE subject! Ignore words inside "of...", "in...", or "with...".'
        },
        {
          type: 'practice',
          title: 'Agreement Practice Check',
          subtitle: 'Choose the matching verb for each adult context.',
          questions: [
            {
              id: 'q4_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'The list of attendees ___ sent to the conference coordinator.',
              options: ['was', 'were', 'are'],
              correctIndex: 0,
              grammarFocus: 'Singular subject "The list"',
              whyExplanation: 'The subject is "The list" (singular), so we use "was" (not "were").'
            },
            {
              id: 'q4_1_2',
              type: 'multiple_choice',
              prompt: 'Which sentence has PERFECT subject-verb agreement?',
              options: [
                'Every employee receives health insurance.',
                'Every employee receive health insurance.',
                'Every employees receives health insurance.'
              ],
              correctIndex: 0,
              whyExplanation: '"Every employee" is singular, so it takes the singular verb "receives" with an -s.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz4_1_1',
          type: 'fill_blank',
          sentenceWithBlank: 'Neither the manager nor the director ___ available for the call.',
          options: ['is', 'are', 'were'],
          correctIndex: 0,
          grammarFocus: 'Singular subject agreement',
          whyExplanation: 'When singular subjects are joined by "nor", the verb is singular ("is").'
        }
      ]
    }
  ]
};

export const module5: Module = {
  id: 5,
  title: 'The BE Verb (am, is, are, was, were)',
  tagline: 'Describing Who You Are, How You Feel, and Where You Are',
  description: 'Master am/is/are (present) and was/were (past), positive sentences, negative sentences (not), yes/no questions, short answers, and contractions.',
  iconName: 'Sparkles',
  color: 'from-sky-600 to-blue-700',
  topics: [
    {
      id: 'mod5_topic1',
      moduleId: 5,
      title: 'BE Verb in Present (am / is / are)',
      shortDesc: 'Use "to be" for identities, professions, locations, and feelings.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The BE Verb (am / is / are)',
          subtitle: 'The most fundamental verb in the English language.',
          conceptSummary: 'We use the BE verb to connect a subject to a noun (profession/identity), adjective (feeling/quality), or location. It changes form depending on the subject.',
          visualGraphic: {
            heroSentence: 'I am an engineer and she is a doctor.',
            highlights: [
              { word: 'I am', role: 'First person singular (I + am)', color: 'bg-sky-100 text-sky-800 border-sky-300' },
              { word: 'she is', role: 'Third person singular (He/She/It + is)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'I am | He/She/It is | You/We/They are'
          },
          keyTakeaways: [
            'I -> am (I\'m)',
            'He / She / It -> is (He\'s / She\'s / It\'s)',
            'You / We / They -> are (You\'re / We\'re / They\'re)',
            'Negative: add "not" (is not / isn\'t, are not / aren\'t, am not)'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Where You Use "BE" Every Day',
          subtitle: 'Essential situations in adult personal and professional life.',
          adultSituations: [
            {
              icon: 'User',
              situation: 'Introducing Yourself & Job',
              example: '"I am an accountant." / "She is from Canada."',
              whyNeeded: 'First impressions at work, networking events, or job interviews.'
            },
            {
              icon: 'MapPin',
              situation: 'Location & Availability',
              example: '"The meeting is in Room 4B." / "We are ready."',
              whyNeeded: 'Daily workplace coordination and scheduling.'
            },
            {
              icon: 'Smile',
              situation: 'Feelings & States',
              example: '"I am tired." / "They are excited about the project."',
              whyNeeded: 'Expressing human condition and team sentiment.'
            }
          ],
          coachTip: 'Notice: In languages like Arabic, Spanish, or Russian, the "is/are" is often dropped in the present. In English, you MUST always include the BE verb!'
        },
        {
          type: 'formula',
          title: 'BE Verb Sentence Structure',
          subtitle: 'Positive, Negative, and Question Formats.',
          formulaBlocks: [
            { label: 'Positive (+)', part: 'Subject + am/is/are + Complement', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' },
            { label: 'Negative (-)', part: 'Subject + am/is/are + not + Complement', color: 'border-rose-500 bg-rose-50 text-rose-900' },
            { label: 'Question (?)', part: 'Am/Is/Are + Subject + Complement?', color: 'border-blue-500 bg-blue-50 text-blue-900' }
          ],
          tableExamples: [
            { subject: 'I', verbOrAux: 'am', objectOrComplement: 'ready for the meeting.', fullSentence: 'I am ready for the meeting.', context: 'Positive' },
            { subject: 'He', verbOrAux: 'is not (isn\'t)', objectOrComplement: 'in the office today.', fullSentence: 'He isn\'t in the office today.', context: 'Negative' },
            { subject: 'Are', verbOrAux: 'you', objectOrComplement: 'available for a call?', fullSentence: 'Are you available for a call?', context: 'Question' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Common BE Verb Errors',
          subtitle: 'Avoid these frequent slips.',
          mistakes: [
            {
              id: 'm5_1',
              incorrect: 'She are a nurse at the central hospital.',
              correct: 'She is a nurse at the central hospital.',
              explanation: '"She" is third-person singular, so it requires "is", not "are".',
              ruleTag: 'Subject Agreement'
            },
            {
              id: 'm5_2',
              incorrect: 'I have 35 years old.',
              correct: 'I am 35 years old.',
              explanation: 'In English, we use the BE verb ("am") for age, NOT "have" (which is common in Romance languages).',
              ruleTag: 'Age Expression'
            },
            {
              id: 'm5_3',
              incorrect: 'He very busy today.',
              correct: 'He is very busy today.',
              explanation: 'English requires the BE verb to connect the subject to the adjective.',
              ruleTag: 'Missing BE Verb'
            }
          ],
          rememberRule: 'Age, profession, and status ALWAYS use the BE verb (am/is/are)!'
        },
        {
          type: 'practice',
          title: 'BE Verb Practice',
          subtitle: 'Complete these interactive sentences.',
          questions: [
            {
              id: 'q5_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'Carlos and Maria ___ software developers at our company.',
              options: ['are', 'is', 'am'],
              correctIndex: 0,
              grammarFocus: 'Plural subject (Carlos and Maria = They)',
              whyExplanation: '"Carlos and Maria" is plural (They), so we use "are".'
            },
            {
              id: 'q5_1_2',
              type: 'sentence_correction',
              prompt: 'Correct this age introduction in a professional bio:',
              incorrectSentence: 'I have 29 years old and work in marketing.',
              correctSentence: 'I am 29 years old and work in marketing.',
              errorHighlight: 'have 29 years old',
              options: [
                'I am 29 years old and work in marketing.',
                'I have 29 years and work in marketing.',
                'I is 29 years old and work in marketing.'
              ],
              correctIndex: 0,
              whyExplanation: 'In English, age is expressed with the BE verb: "I am 29 years old."'
            },
            {
              id: 'q5_1_3',
              type: 'multiple_choice',
              prompt: 'How do you ask if someone is ready in a polite business meeting?',
              options: [
                'Are you ready to begin?',
                'You are ready to begin?',
                'Do you be ready to begin?'
              ],
              correctIndex: 0,
              whyExplanation: 'Questions with the BE verb invert the subject and verb: "Are you ready...?"'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz5_1_1',
          type: 'fill_blank',
          sentenceWithBlank: 'The new office furniture ___ very comfortable.',
          options: ['is', 'are', 'am'],
          correctIndex: 0,
          grammarFocus: 'Uncountable noun "furniture" = singular (is)',
          whyExplanation: '"Furniture" is uncountable/singular, so it takes "is".'
        },
        {
          id: 'quiz5_1_2',
          type: 'multiple_choice',
          prompt: 'What is the correct negative sentence?',
          options: ['They aren\'t at home.', 'They don\'t be at home.', 'They no are at home.'],
          correctIndex: 0,
          whyExplanation: 'Negative BE verb uses "are not" or the contraction "aren\'t".'
        }
      ]
    }
  ]
};
