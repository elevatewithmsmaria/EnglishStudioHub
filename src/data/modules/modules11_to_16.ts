import { Module } from '../../types';

export const module11: Module = {
  id: 11,
  title: 'Adverbs & Frequency',
  tagline: 'How, When, Where & How Often Things Happen',
  description: 'Adverbs of manner (-ly), frequency words (always, usually, sometimes, rarely, never), adverb placement, and fast vs fast (irregular adverbs).',
  iconName: 'Sliders',
  color: 'from-purple-600 to-indigo-600',
  topics: [
    {
      id: 'mod11_topic1',
      moduleId: 11,
      title: 'Adverbs of Manner & Frequency Placement',
      shortDesc: 'Place frequency adverbs correctly: "I always check" vs "He is always on time".',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs: Describing Actions & Habits',
          subtitle: 'Add detail and precision to your communication.',
          conceptSummary: 'Adverbs describe HOW an action happens (carefully, quickly) or HOW OFTEN it happens (always, usually, never). Frequency adverbs go BEFORE standard verbs, but AFTER the BE verb.',
          visualGraphic: {
            heroSentence: 'I always arrive early and speak clearly.',
            highlights: [
              { word: 'always', role: 'Frequency (Before main verb)', color: 'bg-purple-100 text-purple-800 border-purple-300' },
              { word: 'clearly', role: 'Manner (Adjective + ly)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Before main verb ("always arrive") | After BE verb ("is always")'
          },
          keyTakeaways: [
            'Frequency adverbs: 100% Always -> 80% Usually -> 50% Sometimes -> 10% Rarely -> 0% Never.',
            'Position 1: BEFORE main verbs ("She usually drinks coffee").',
            'Position 2: AFTER BE verbs ("He is always punctual").'
          ]
        },
        {
          type: 'practice',
          title: 'Adverb Placement Practice',
          subtitle: 'Position the adverb correctly.',
          questions: [
            {
              id: 'q11_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'Our manager ___ early for morning briefings.',
              options: ['is always', 'always is', 'is always be'],
              correctIndex: 0,
              grammarFocus: 'Frequency adverb goes AFTER the BE verb',
              whyExplanation: 'With the BE verb (is), the adverb "always" follows the verb: "is always early".'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz11_1_1',
          type: 'multiple_choice',
          prompt: 'Which sentence has the correct adverb placement?',
          options: ['I usually start work at 8:00 AM.', 'I start usually work at 8:00 AM.', 'Usually I start work at always 8:00 AM.'],
          correctIndex: 0,
          whyExplanation: 'Frequency adverbs go before the main verb: "I usually start".'
        }
      ]
    }
  ]
};

export const module12: Module = {
  id: 12,
  title: 'Prepositions (Time, Place & Movement)',
  tagline: 'In, On, At & Navigation Fundamentals',
  description: 'Demystify IN, ON, AT for time (in July, on Monday, at 5 PM), place (in Doha, on the desk, at the airport), and movement prepositions (to, into, through).',
  iconName: 'Navigation',
  color: 'from-emerald-600 to-cyan-700',
  topics: [
    {
      id: 'mod12_topic1',
      moduleId: 12,
      title: 'In, On, At (Time & Place Pyramid)',
      shortDesc: 'Use the famous inverted pyramid rule to never confuse in, on, and at again.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The IN / ON / AT Master Pyramid',
          subtitle: 'From general/big (IN) to specific/exact (AT).',
          conceptSummary: 'Think of an inverted pyramid: IN = Biggest / Most General (years, months, cities, countries). ON = Intermediate / Surfaces / Days (dates, days of week, streets). AT = Most Specific / Exact (exact times, exact addresses, specific points).',
          visualGraphic: {
            heroSentence: 'The meeting is in October, on Friday, at 3:00 PM.',
            highlights: [
              { word: 'in October', role: 'IN = Month (General)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'on Friday', role: 'ON = Day / Date', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'at 3:00 PM', role: 'AT = Exact clock time', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'IN (General) -> ON (Day/Surface) -> AT (Specific Point/Time)'
          },
          keyTakeaways: [
            'TIME: IN 2026 / in July | ON Monday / on March 15 | AT 4:30 PM / at noon.',
            'PLACE: IN Qatar / in the office | ON the table / on 5th Avenue | AT the airport / at home.',
            'Night Exception: "in the morning / afternoon / evening" BUT "at night".'
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Preposition Pitfalls',
          subtitle: 'Avoid these classic preposition confusions.',
          mistakes: [
            {
              id: 'm12_1',
              incorrect: 'I will see you in Monday.',
              correct: 'I will see you on Monday.',
              explanation: 'Days of the week always use ON (on Monday, on Tuesday, on weekends).',
              ruleTag: 'Days = ON'
            },
            {
              id: 'm12_2',
              incorrect: 'The flight arrives in 4:00 PM.',
              correct: 'The flight arrives at 4:00 PM.',
              explanation: 'Exact clock times always use AT (at 4:00 PM, at 8:15, at noon).',
              ruleTag: 'Clock Time = AT'
            }
          ],
          rememberRule: 'Days take ON. Clock times take AT. Months/Years/Cities take IN!'
        },
        {
          type: 'practice',
          title: 'Prepositions Practice',
          subtitle: 'Select the right preposition for appointments and flights.',
          questions: [
            {
              id: 'q12_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'Our quarterly review will take place ___ Friday ___ 10:00 AM.',
              options: ['on / at', 'in / on', 'at / on'],
              correctIndex: 0,
              grammarFocus: 'Days take ON, clock times take AT',
              whyExplanation: 'Day (Friday) takes "on", and exact clock time (10:00 AM) takes "at".'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz12_1_1',
          type: 'multiple_choice',
          prompt: 'We are meeting the client ___ the airport ___ noon.',
          options: ['at / at', 'in / on', 'on / in'],
          correctIndex: 0,
          whyExplanation: 'Specific location "at the airport" and exact time "at noon".'
        }
      ]
    }
  ]
};

export const module13: Module = {
  id: 13,
  title: 'Articles (A, An, The & Zero Article)',
  tagline: 'When to Use "A/An", "The", or Nothing at All',
  description: 'Understand indefinite (a/an) vs definite (the), sound-based vowel rules (an hour vs a university), and when to omit articles completely with plurals and countries.',
  iconName: 'FileText',
  color: 'from-blue-600 to-sky-600',
  topics: [
    {
      id: 'mod13_topic1',
      moduleId: 13,
      title: 'A vs. An vs. The vs. No Article',
      shortDesc: 'End article uncertainty forever with simple practical guidelines.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Articles: A, An, The & Zero Article',
          subtitle: 'The tiny words that give English sentences natural polish.',
          conceptSummary: 'Use "A / An" when talking about any general singular item for the first time. Use "The" when both speaker and listener know the specific item. Use "No Article" for general plurals or uncountable concepts.',
          visualGraphic: {
            heroSentence: 'I bought a laptop. The laptop is very fast. I love technology.',
            highlights: [
              { word: 'a laptop', role: 'First mention / Any laptop (a)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'The laptop', role: 'Specific laptop already mentioned (the)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'technology', role: 'General concept (Zero article)', color: 'bg-slate-100 text-slate-800 border-slate-300' }
            ],
            caption: 'A/An (General/First time) -> The (Specific) -> Zero Article (General concept)'
          },
          keyTakeaways: [
            'Sound Rule: Use "AN" before vowel sounds (an apple, an hour [silent h], an MBA).',
            'Use "A" before consonant sounds (a car, a university [sounds like "yoo"]).',
            'Use "THE" when there is only one in the world (the sun, the CEO, the internet).'
          ]
        },
        {
          type: 'practice',
          title: 'Article Practice Check',
          subtitle: 'Select the right article based on sound and specificity.',
          questions: [
            {
              id: 'q13_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'We have a meeting with the client in ___ hour.',
              options: ['an', 'a', 'the'],
              correctIndex: 0,
              grammarFocus: '"Hour" begins with a vowel sound (/aʊər/), so it takes "an".',
              whyExplanation: 'Even though "hour" starts with the letter H, it is silent, making the first sound a vowel. Hence: "an hour".'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz13_1_1',
          type: 'multiple_choice',
          prompt: 'Which sentence is grammatically correct?',
          options: ['She works as an engineer at a tech company.', 'She works as a engineer at the tech company.', 'She works as engineer at a tech company.'],
          correctIndex: 0,
          whyExplanation: 'Professions require a/an ("an engineer" because of vowel sound).'
        }
      ]
    }
  ]
};

export const module14: Module = {
  id: 14,
  title: 'Conjunctions & Connectors',
  tagline: 'Connecting Ideas with And, But, Or, Because, So, Although',
  description: 'Build longer, fluent sentences using coordinating conjunctions (and, but, or, so) and subordinating connectors (because, although, if, when).',
  iconName: 'Link',
  color: 'from-amber-600 to-orange-600',
  topics: [
    {
      id: 'mod14_topic1',
      moduleId: 14,
      title: 'Connecting Thoughts (Because, So, But, Although)',
      shortDesc: 'Stop speaking in choppy short sentences; connect causes, results, and contrasts effortlessly.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Conjunctions: The Glue of English',
          subtitle: 'Transform choppy phrases into smooth, adult conversation.',
          conceptSummary: 'Because explains the reason. So explains the result. But / Although show contrast. And adds information.',
          visualGraphic: {
            heroSentence: 'The traffic was heavy, so we arrived a few minutes late.',
            highlights: [
              { word: 'heavy', role: 'Cause / Situation', color: 'bg-slate-100 text-slate-800 border-slate-300' },
              { word: 'so', role: 'Connector = Result / Outcome', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'arrived late', role: 'Result', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Cause + SO + Result | Result + BECAUSE + Cause'
          },
          keyTakeaways: [
            'Because = Reason ("We cancelled the flight because it was snowing").',
            'So = Result ("It was snowing, so we cancelled the flight").',
            'Never use "Although" and "But" in the same sentence together.'
          ]
        },
        {
          type: 'practice',
          title: 'Conjunctions Practice',
          subtitle: 'Choose the connector that establishes logical relationship.',
          questions: [
            {
              id: 'q14_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'I wanted to call you yesterday, ___ my phone battery died.',
              options: ['but', 'so', 'because'],
              correctIndex: 0,
              grammarFocus: 'Contrast connector -> but',
              whyExplanation: '"But" connects two contrasting thoughts (wanting to call vs inability to call).'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz14_1_1',
          type: 'multiple_choice',
          prompt: 'The meeting was postponed ___ the CEO was traveling.',
          options: ['because', 'so', 'although'],
          correctIndex: 0,
          whyExplanation: '"Because" introduces the reason why the meeting was postponed.'
        }
      ]
    }
  ]
};

export const module15: Module = {
  id: 15,
  title: 'Questions & Inquiries',
  tagline: 'Wh- Words, Yes/No, How Much vs How Many',
  description: 'Master asking questions at work, shops, and travel: What, Where, When, Who, Why, Which, Whose, How, How much (uncountable), How many (countable).',
  iconName: 'HelpCircle',
  color: 'from-violet-600 to-purple-700',
  topics: [
    {
      id: 'mod15_topic1',
      moduleId: 15,
      title: 'Question Words & How Much vs. How Many',
      shortDesc: 'Form natural inquiries for meetings, shopping, hotel reservations, and interviews.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Mastering English Questions',
          subtitle: 'Asking clear questions is the fastest way to get what you need.',
          conceptSummary: 'Formula for Wh- questions: Question Word + Helping Verb (do/does/is/are/did/will) + Subject + Main Verb.',
          visualGraphic: {
            heroSentence: 'Where do you work? How many days will you stay?',
            highlights: [
              { word: 'Where / How many', role: 'Question Word (Info needed)', color: 'bg-violet-100 text-violet-800 border-violet-300' },
              { word: 'do / will', role: 'Helping Auxiliary Verb', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'you', role: 'Subject', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Wh- Word + Auxiliary + Subject + Main Verb?'
          },
          keyTakeaways: [
            'How Much = Price OR Uncountable nouns (How much time / money / water?).',
            'How Many = Countable plural nouns (How many days / people / emails?).',
            'Never forget the helping verb ("Where you work?" ❌ -> "Where DO you work?" ✅).'
          ]
        },
        {
          type: 'practice',
          title: 'Question Formation Practice',
          subtitle: 'Create accurate questions.',
          questions: [
            {
              id: 'q15_1_1',
              type: 'fill_blank',
              sentenceWithBlank: '___ time do we have before the presentation starts?',
              options: ['How much', 'How many', 'How long is'],
              correctIndex: 0,
              grammarFocus: '"Time" is uncountable mass noun -> How much',
              whyExplanation: 'We use "How much" with uncountable nouns like time, money, and water.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz15_1_1',
          type: 'multiple_choice',
          prompt: 'How do you ask about someone\'s destination politely?',
          options: ['Where are you traveling next week?', 'Where you are traveling next week?', 'Where traveling you next week?'],
          correctIndex: 0,
          whyExplanation: 'In Wh- questions with BE verb, invert auxiliary and subject: "Where ARE YOU traveling...?"'
        }
      ]
    }
  ]
};

export const module16: Module = {
  id: 16,
  title: 'Sentence Building & Practical Flow',
  tagline: 'Simple, Compound & Complex Communication',
  description: 'Put everything together: construct clear business paragraphs, eliminate run-on sentences, use transition words, and communicate with authentic adult authority.',
  iconName: 'Layers',
  color: 'from-emerald-700 to-teal-800',
  topics: [
    {
      id: 'mod16_topic1',
      moduleId: 16,
      title: 'Constructing Confident Compound & Complex Sentences',
      shortDesc: 'Combine your grammar tools to write professional emails, reports, and clear spoken responses.',
      estimatedMinutes: 8,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Building Confident English Sentences',
          subtitle: 'The capstone of your English foundations.',
          conceptSummary: 'You have learned subjects, verbs, tenses, adjectives, prepositions, and conjunctions. Now, combine them into 3 practical sentence types: Simple (1 idea), Compound (2 equal ideas joined by connector), and Complex (main idea + condition/reason).',
          visualGraphic: {
            heroSentence: 'If we confirm the schedule today, I will send the invitations tomorrow.',
            highlights: [
              { word: 'If we confirm the schedule today', role: 'Condition clause (If + Present)', color: 'bg-purple-100 text-purple-800 border-purple-300' },
              { word: 'I will send the invitations tomorrow', role: 'Main clause (Future result)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Clear condition + clear action = powerful business English.'
          },
          keyTakeaways: [
            'Simple: "I work in human resources."',
            'Compound: "I work in human resources, and I lead employee training."',
            'Complex: "Because our company is expanding, we are hiring new engineers."'
          ]
        },
        {
          type: 'practice',
          title: 'Sentence Building Capstone Check',
          subtitle: 'Construct complete sentences with proper clauses.',
          questions: [
            {
              id: 'q16_1_1',
              type: 'sentence_correction',
              prompt: 'Fix this run-on sentence from a project update:',
              incorrectSentence: 'The project is finished we are ready to launch.',
              correctSentence: 'The project is finished, so we are ready to launch.',
              errorHighlight: 'Run-on sentence with no connector',
              options: [
                'The project is finished, so we are ready to launch.',
                'The project is finished because we are ready to launch.',
                'The project is finished although we are ready to launch.'
              ],
              correctIndex: 0,
              whyExplanation: 'Joining two complete independent sentences requires a comma + coordinating connector ("so" for result).'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz16_1_1',
          type: 'multiple_choice',
          prompt: 'Which sentence demonstrates correct sentence construction with a condition?',
          options: [
            'If you have any questions, please contact me anytime.',
            'If you have any questions, please you contact me anytime.',
            'If you will have any questions, please contact me anytime.'
          ],
          correctIndex: 0,
          whyExplanation: 'In conditional clauses, use present tense after "if" ("If you have any questions"), followed by polite imperative.'
        }
      ]
    }
  ]
};
