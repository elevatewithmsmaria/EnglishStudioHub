import { Module } from '../../types';

export const module6: Module = {
  id: 6,
  title: 'Present Simple',
  tagline: 'Routines, Habits, Facts & Work Schedules',
  description: 'The foundation of daily communication: when to use it, positive/negative forms, Do vs Does questions, and mastering third-person singular -s.',
  iconName: 'Clock',
  color: 'from-indigo-600 to-blue-600',
  topics: [
    {
      id: 'mod6_topic1',
      moduleId: 6,
      title: 'Present Simple (Routines, Facts & Third-Person -s)',
      shortDesc: 'Learn how to talk about your job, daily schedule, habits, and master the third-person -s rule.',
      estimatedMinutes: 8,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Present Simple: Quick Introduction',
          subtitle: 'The tense you will speak the most in daily and professional life.',
          conceptSummary: 'We use the Present Simple to talk about habits, routines, facts, and things that are generally true.',
          visualGraphic: {
            heroSentence: 'I work in Doha. She works in a hospital.',
            highlights: [
              { word: 'I work', role: 'Base Form (I / You / We / They)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'She works', role: 'Third Person Singular (He / She / It + -s)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'With He, She, and It, the verb takes an -s / -es in the Present Simple!'
          },
          keyTakeaways: [
            'Use Present Simple for regular routines: "I wake up at 7 AM."',
            'Use for permanent facts & jobs: "Water boils at 100°C" / "She teaches math."',
            'Remember: He / She / It ALWAYS takes an -s or -es!'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Does It Matter in Everyday Life?',
          subtitle: 'You use Present Simple whenever talking about the real facts of your life.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Your Job & Career',
              example: '"I manage a team of five people." / "He works remotely."',
              whyNeeded: 'Describing what you do in interviews, meetings, and introductions.'
            },
            {
              icon: 'Home',
              situation: 'Your Home & Life',
              example: '"We live in an apartment downtown."',
              whyNeeded: 'Sharing basic personal facts with neighbors, colleagues, and friends.'
            },
            {
              icon: 'Clock',
              situation: 'Your Daily Routine',
              example: '"The bank opens at 9 AM and closes at 4 PM."',
              whyNeeded: 'Planning appointments, schedules, and errands.'
            },
            {
              icon: 'Heart',
              situation: 'Likes & Preferences',
              example: '"I prefer tea, but my husband loves coffee."',
              whyNeeded: 'Expressing your tastes politely at restaurants and dinner parties.'
            }
          ],
          coachTip: 'Adult Tip: You do not use Present Simple for what is happening at this exact second (that is Present Continuous: "I am writing right now"). Use Present Simple for what is TRUE IN GENERAL.'
        },
        {
          type: 'explanation',
          title: 'Simple Explanation: The Verb Patterns',
          subtitle: 'Clear rules without confusing terminology.',
          coreRule: 'Two simple groups govern all present simple positive verbs.',
          breakdown: [
            {
              term: 'Group A: I / You / We / They',
              plainDefinition: 'Use the clean, base form of the verb. Do NOT add -s.',
              simpleExample: 'I work. / You live here. / We speak English. / They travel often.'
            },
            {
              term: 'Group B: He / She / It (Singular Noun)',
              plainDefinition: 'Add -s, -es, or -ies to the verb.',
              simpleExample: 'He works. / She lives here. / Marco speaks English. / It rains often.'
            },
            {
              term: 'Spelling Rules for -s / -es',
              plainDefinition: 'Verbs ending in -ch, -sh, -ss, -x, -o add -es (watches, washes, passes, goes, does). Consonant + y changes to -ies (study -> studies, fly -> flies).',
              simpleExample: 'He watches news. / She studies English.'
            }
          ]
        },
        {
          type: 'formula',
          title: 'Formulas for Statements, Negatives & Questions',
          subtitle: 'See how Do and Does work as helping verbs.',
          formulaBlocks: [
            { label: 'Positive (+)', part: 'Subject + Verb(s) + Object', color: 'border-emerald-500 bg-emerald-50 text-emerald-900' },
            { label: 'Negative (-)', part: 'Subject + don\'t / doesn\'t + Base Verb', color: 'border-rose-500 bg-rose-50 text-rose-900' },
            { label: 'Question (?)', part: 'Do / Does + Subject + Base Verb?', color: 'border-blue-500 bg-blue-50 text-blue-900' }
          ],
          tableExamples: [
            { subject: 'I / You / We / They', verbOrAux: 'don\'t live', objectOrComplement: 'in Dubai.', fullSentence: 'They don\'t live here.', context: 'Negative (Plural)' },
            { subject: 'He / She / It', verbOrAux: 'doesn\'t work', objectOrComplement: 'on Sundays.', fullSentence: 'She doesn\'t work on Sundays.', context: 'Negative (Singular)' },
            { subject: 'Does', verbOrAux: 'he speak', objectOrComplement: 'English?', fullSentence: 'Does he speak English?', context: 'Question' }
          ],
          variations: [
            { title: 'Crucial Rule for Negatives & Questions', formula: 'doesn\'t / does + BASE VERB (the -s disappears!)', example: '❌ She doesn\'t works -> ✅ She doesn\'t work.' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Real-Life Adult Situations',
          subtitle: 'Practical sentences for work, dining, and daily tasks.',
          examples: [
            {
              id: 'ex6_1',
              category: 'work',
              categoryLabel: 'Workplace Routine',
              sentence: 'I work in administration and manage the company database.',
              breakdownNote: 'Present simple for permanent job function.',
              speakerRole: 'Office Administrator'
            },
            {
              id: 'ex6_2',
              category: 'work',
              categoryLabel: 'Colleague Description',
              sentence: 'She works at a hospital and starts her shift at 7 AM.',
              breakdownNote: 'Third person "She works", "starts" with -s.',
              speakerRole: 'Nurse'
            },
            {
              id: 'ex6_3',
              category: 'travel',
              categoryLabel: 'Living & Location',
              sentence: 'They don\'t live here; they travel between London and Doha.',
              breakdownNote: 'Negative "don\'t live" + base verb "travel".',
              speakerRole: 'Consultant'
            },
            {
              id: 'ex6_4',
              category: 'restaurant',
              categoryLabel: 'Dietary Preferences',
              sentence: 'I don\'t eat seafood, but my husband loves grilled salmon.',
              breakdownNote: 'I don\'t eat (base) / husband loves (-s).',
              speakerRole: 'Diner'
            }
          ]
        },
        {
          type: 'common_mistakes',
          title: '🚨 WATCH OUT! Common Present Simple Errors',
          subtitle: 'Explanations for why these slips happen and how to fix them forever.',
          mistakes: [
            {
              id: 'm6_1',
              incorrect: 'She work every day.',
              correct: 'She works every day.',
              explanation: 'Because "She" is third-person singular (one person: he/she/it), the verb MUST take an -s.',
              ruleTag: 'Missing Third-Person -s'
            },
            {
              id: 'm6_2',
              incorrect: 'He doesn\'t likes coffee.',
              correct: 'He doesn\'t like coffee.',
              explanation: 'The auxiliary "doesn\'t" already carries the third-person marker. The main verb stays in base form ("like").',
              ruleTag: 'Double -s error'
            },
            {
              id: 'm6_3',
              incorrect: 'Do she speak English?',
              correct: 'Does she speak English?',
              explanation: 'For he/she/it, questions use "Does", not "Do".',
              ruleTag: 'Do vs Does'
            }
          ],
          rememberRule: 'Remember: He/She/It gets the -s. But in negatives and questions, does/doesn\'t steals the -s!'
        },
        {
          type: 'practice',
          title: 'Interactive Present Simple Practice',
          subtitle: 'Practice step-by-step with instant smart feedback.',
          questions: [
            {
              id: 'q6_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'She ___ English every day for her new job.',
              options: ['studies', 'study', 'studying'],
              correctIndex: 0,
              grammarFocus: 'Third-person singular spelling (study -> studies)',
              whyExplanation: '"She" is third-person singular, and "study" ends with consonant + y, which changes to -ies (studies).'
            },
            {
              id: 'q6_1_2',
              type: 'sentence_correction',
              prompt: 'Correct this negative sentence from a work email:',
              incorrectSentence: 'He don\'t like to attend late evening meetings.',
              correctSentence: 'He doesn\'t like to attend late evening meetings.',
              errorHighlight: 'don\'t like',
              options: [
                'He doesn\'t like to attend late evening meetings.',
                'He don\'t likes to attend late evening meetings.',
                'He not like to attend late evening meetings.'
              ],
              correctIndex: 0,
              whyExplanation: 'With "He", the negative helping verb is "doesn\'t", followed by base verb "like".'
            },
            {
              id: 'q6_1_3',
              type: 'multiple_choice',
              prompt: 'How do you politely ask a colleague about their commute schedule?',
              options: [
                'What time do you usually finish work?',
                'What time does you usually finish work?',
                'What time you usually finish work?'
              ],
              correctIndex: 0,
              whyExplanation: 'With subject "you", we use the auxiliary "do" in questions: "What time do you...?"'
            },
            {
              id: 'q6_1_4',
              type: 'word_order',
              prompt: 'Arrange the words into a correct natural English sentence:',
              scrambledWords: ['at 9 AM', 'The office', 'opens', 'every weekday'],
              correctSentence: 'The office opens at 9 AM every weekday',
              contextHint: 'Subject (The office) + Verb (opens) + Time expressions',
              whyExplanation: 'Subject (The office) is singular, so verb is "opens", followed by time details.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz6_1_1',
          type: 'fill_blank',
          sentenceWithBlank: 'My supervisor ___ all company emails before 8:30 AM.',
          options: ['checks', 'check', 'checking'],
          correctIndex: 0,
          grammarFocus: 'Third-person singular -s',
          whyExplanation: '"My supervisor" is singular (he/she), so we use "checks".'
        },
        {
          id: 'quiz6_1_2',
          type: 'multiple_choice',
          prompt: 'Which question is grammatically CORRECT?',
          options: ['Does your manager speak French?', 'Do your manager speak French?', 'Does your manager speaks French?'],
          correctIndex: 0,
          whyExplanation: '"Your manager" (singular) takes "Does", and the main verb stays in base form ("speak").'
        },
        {
          id: 'quiz6_1_3',
          type: 'sentence_correction',
          prompt: 'Fix the error:',
          incorrectSentence: 'She don\'t work on Saturdays.',
          correctSentence: 'She doesn\'t work on Saturdays.',
          errorHighlight: 'don\'t work',
          options: [
            'She doesn\'t work on Saturdays.',
            'She doesn\'t works on Saturdays.',
            'She isn\'t work on Saturdays.'
          ],
          correctIndex: 0,
          whyExplanation: 'Use "doesn\'t work" for third-person singular negatives.'
        }
      ]
    }
  ]
};

export const module7: Module = {
  id: 7,
  title: 'Present Continuous',
  tagline: 'Actions Happening Right Now & Temporary Situations',
  description: 'Master am/is/are + verb-ing, contrast with Present Simple, understand state verbs (why we do not say "I am knowing"), and ask continuous questions.',
  iconName: 'Activity',
  color: 'from-teal-600 to-cyan-600',
  topics: [
    {
      id: 'mod7_topic1',
      moduleId: 7,
      title: 'Present Continuous (am/is/are + -ing)',
      shortDesc: 'Describe what is taking place right now, on the phone, or in temporary projects.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Present Continuous: Actions in Progress',
          subtitle: 'What is happening right now at this exact moment.',
          conceptSummary: 'Formula: Subject + am/is/are + Verb-ing. Use it for ongoing actions ("I am talking on the phone") and temporary states ("I am staying at a hotel this week").',
          visualGraphic: {
            heroSentence: 'We are reviewing the financial report right now.',
            highlights: [
              { word: 'We are', role: 'BE helping verb', color: 'bg-teal-100 text-teal-800 border-teal-300' },
              { word: 'reviewing', role: 'Action verb + ing', color: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
              { word: 'right now', role: 'Time expression', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Always pair the BE verb (am/is/are) with the -ing verb.'
          },
          keyTakeaways: [
            'Must have BOTH parts: [am / is / are] + [verb-ing].',
            'Never forget the BE verb (Say "I am working", not "I working").',
            'State verbs (know, like, want, understand) are rarely used in -ing form.'
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Present Continuous Pitfalls',
          subtitle: 'Two critical errors adult learners must avoid.',
          mistakes: [
            {
              id: 'm7_1',
              incorrect: 'I working on the project right now.',
              correct: 'I am working on the project right now.',
              explanation: 'An -ing verb cannot stand alone as a main tense without its BE verb (am/is/are).',
              ruleTag: 'Missing Auxiliary BE'
            },
            {
              id: 'm7_2',
              incorrect: 'I am understanding what you mean.',
              correct: 'I understand what you mean.',
              explanation: '"Understand" is a state/mental verb. State verbs are used in Present Simple, not Continuous.',
              ruleTag: 'State Verbs'
            }
          ],
          rememberRule: 'BE verb + Verb-ing is an unbreakable pair in continuous tenses!'
        },
        {
          type: 'practice',
          title: 'Present Continuous Practice',
          subtitle: 'Test your grasp on phone calls and immediate actions.',
          questions: [
            {
              id: 'q7_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'Please call back in 10 minutes; we ___ a client presentation.',
              options: ['are giving', 'give', 'is giving'],
              correctIndex: 0,
              grammarFocus: 'Plural subject "we" + are + verb-ing',
              whyExplanation: 'With "we", use "are giving" for an action currently in progress.'
            },
            {
              id: 'q7_1_2',
              type: 'multiple_choice',
              prompt: 'Which sentence correctly describes a current temporary project?',
              options: [
                'He is managing the branch this month while the boss is away.',
                'He managing the branch this month.',
                'He is manage the branch this month.'
              ],
              correctIndex: 0,
              whyExplanation: '"He is managing" uses the complete formula: Subject + is + Verb-ing.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz7_1_1',
          type: 'multiple_choice',
          prompt: 'Which sentence is grammatically correct for something happening now?',
          options: ['They are waiting in the lobby.', 'They waiting in the lobby.', 'They are wait in the lobby.'],
          correctIndex: 0,
          whyExplanation: 'Proper structure is "They are waiting" (BE verb + -ing).'
        }
      ]
    }
  ]
};

export const module8: Module = {
  id: 8,
  title: 'Past Simple',
  tagline: 'Completed Events, Histories & Past Experiences',
  description: 'Regular -ed verbs, high-frequency irregular verbs (went, took, bought, saw), was/were, Did/Didn\'t, and past time expressions (yesterday, last week, ago).',
  iconName: 'History',
  color: 'from-rose-600 to-red-600',
  topics: [
    {
      id: 'mod8_topic1',
      moduleId: 8,
      title: 'Past Simple (Regular & Irregular Verbs, Did/Didn\'t)',
      shortDesc: 'Talk about past work projects, yesterday\'s events, and past travels with confidence.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Past Simple: Completed Actions',
          subtitle: 'How to narrate events that started and finished in the past.',
          conceptSummary: 'Use Past Simple for finished actions with a finished time (yesterday, last year, in 2022, two days ago). Regular verbs add -ed. Irregular verbs change form (go -> went, see -> saw, buy -> bought).',
          visualGraphic: {
            heroSentence: 'I sent the invoice yesterday and she received it.',
            highlights: [
              { word: 'sent (irregular: send->sent)', role: 'Irregular Past Verb', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'received (regular: receive+-d)', role: 'Regular Past Verb', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'yesterday', role: 'Finished Time Marker', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Past Simple connects your finished actions to finished time frames.'
          },
          keyTakeaways: [
            'Regular verbs: work -> worked, call -> called, plan -> planned.',
            'Key Irregulars: go -> went, have -> had, make -> made, do -> did, see -> saw.',
            'Negatives & Questions use DID / DIDN\'T + BASE VERB: "I didn\'t see him" (not "didn\'t saw").'
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! The "Didn\'t + Past" Mistake',
          subtitle: 'The single most common past tense error among adult English learners.',
          mistakes: [
            {
              id: 'm8_1',
              incorrect: 'I didn\'t went to the office yesterday.',
              correct: 'I didn\'t go to the office yesterday.',
              explanation: '"Didn\'t" already carries the past tense. The main verb MUST revert to its base form ("go").',
              ruleTag: 'Didn\'t + Base Verb'
            },
            {
              id: 'm8_2',
              incorrect: 'Did you received my message?',
              correct: 'Did you receive my message?',
              explanation: '"Did" takes care of the past question. Use base verb "receive".',
              ruleTag: 'Did + Base Verb'
            }
          ],
          rememberRule: 'Rule: After "Did" or "Didn\'t", the main verb always goes back to its base dictionary form!'
        },
        {
          type: 'practice',
          title: 'Past Simple Practice Check',
          subtitle: 'Select the correct past form for real situations.',
          questions: [
            {
              id: 'q8_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'We ___ the contract with the supplier last Tuesday.',
              options: ['signed', 'sign', 'signned'],
              correctIndex: 0,
              grammarFocus: 'Regular past verb (sign + ed)',
              whyExplanation: 'Past tense of regular verb "sign" is "signed".'
            },
            {
              id: 'q8_1_2',
              type: 'sentence_correction',
              prompt: 'Correct this status update:',
              incorrectSentence: 'She didn\'t bought the flight tickets yet.',
              correctSentence: 'She didn\'t buy the flight tickets yet.',
              errorHighlight: 'didn\'t bought',
              options: [
                'She didn\'t buy the flight tickets yet.',
                'She didn\'t buys the flight tickets yet.',
                'She not bought the flight tickets yet.'
              ],
              correctIndex: 0,
              whyExplanation: 'After "didn\'t", use the base verb "buy" (not "bought").'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz8_1_1',
          type: 'multiple_choice',
          prompt: 'What did you do yesterday? (Choose the correct response)',
          options: ['I went to the client meeting.', 'I goed to the client meeting.', 'I did went to the client meeting.'],
          correctIndex: 0,
          whyExplanation: 'The past tense of "go" is the irregular verb "went".'
        }
      ]
    }
  ]
};

export const module9: Module = {
  id: 9,
  title: 'Future (Will & Going to)',
  tagline: 'Plans, Intentions, Decisions & Predictions',
  description: 'Learn when to use "will" (spontaneous decisions, promises) vs "be going to" (prior plans, clear evidence), plus time expressions (tomorrow, next week).',
  iconName: 'Compass',
  color: 'from-blue-600 to-indigo-700',
  topics: [
    {
      id: 'mod9_topic1',
      moduleId: 9,
      title: 'Will vs. Be Going To',
      shortDesc: 'Choose accurately between instant workplace decisions ("I\'ll do it") and established plans ("I am going to visit").',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Future: Will vs. Be Going To',
          subtitle: 'Expressing what will happen tomorrow, next week, or next year.',
          conceptSummary: 'Use "Will" for instant decisions made at the moment of speaking, offers, and promises. Use "Be Going To" for plans made before speaking or predictions with visible evidence.',
          visualGraphic: {
            heroSentence: 'I will help you now. We are going to launch next month.',
            highlights: [
              { word: 'I will help', role: 'Instant decision / Offer (Will + Base)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'are going to launch', role: 'Planned project (Be going to + Base)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Will = Instant decision / Promise | Going to = Pre-arranged plan'
          },
          keyTakeaways: [
            'Will + Base Verb: "I will call you at 3 PM." (Contraction: I\'ll, We\'ll).',
            'Be Going To + Base Verb: "She is going to start a new job next Monday."',
            'Both are followed directly by the base verb (no -s, no -ed, no -ing).'
          ]
        },
        {
          type: 'practice',
          title: 'Future Forms Practice',
          subtitle: 'Apply the right future structure.',
          questions: [
            {
              id: 'q9_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'The phone is ringing. — Don\'t worry, I ___ answer it!',
              options: ['will', 'am going to', 'going to'],
              correctIndex: 0,
              grammarFocus: 'Instant spontaneous decision -> will',
              whyExplanation: 'An instant spontaneous decision at the moment of speaking takes "will" ("I\'ll answer it").'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz9_1_1',
          type: 'multiple_choice',
          prompt: 'We have already purchased the flight tickets. We ___ travel to Madrid next Friday.',
          options: ['are going to', 'will to', 'going'],
          correctIndex: 0,
          whyExplanation: 'A previously arranged plan takes "are going to".'
        }
      ]
    }
  ]
};

export const module10: Module = {
  id: 10,
  title: 'Adjectives & Comparisons',
  tagline: 'Describing People, Places, Products & Comparative Degrees',
  description: 'Master adjective placement (before nouns), comparative adjectives (-er than / more than), and superlative adjectives (the -est / the most).',
  iconName: 'Sparkle',
  color: 'from-amber-600 to-yellow-600',
  topics: [
    {
      id: 'mod10_topic1',
      moduleId: 10,
      title: 'Adjectives & Comparatives (Bigger, More Efficient)',
      shortDesc: 'Compare products, candidates, options, and performance in business and life.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adjectives & Comparisons',
          subtitle: 'How to describe and compare things clearly.',
          conceptSummary: 'Adjectives describe nouns and sit BEFORE the noun ("a reliable car"). For short 1-syllable words, add -er than ("faster than"). For long words (2+ syllables), use more ... than ("more expensive than").',
          visualGraphic: {
            heroSentence: 'This software is faster and more reliable than the old version.',
            highlights: [
              { word: 'faster (fast+-er)', role: 'Short adjective comparative', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'more reliable', role: 'Long adjective comparative', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Short words add -er. Long words use more.'
          },
          keyTakeaways: [
            'Adjectives NEVER take plural -s (Say "important files", not "importants files").',
            'Short: fast -> faster than, cheap -> cheaper than.',
            'Long: expensive -> more expensive than, practical -> more practical than.',
            'Irregulars: good -> better than, bad -> worse than.'
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Watch Out! Adjective Traps',
          subtitle: 'Avoid pluralizing adjectives and double comparatives.',
          mistakes: [
            {
              id: 'm10_1',
              incorrect: 'We discussed several importants topics.',
              correct: 'We discussed several important topics.',
              explanation: 'In English, adjectives NEVER change form for plural nouns. They always remain singular.',
              ruleTag: 'No Plural Adjectives'
            },
            {
              id: 'm10_2',
              incorrect: 'This laptop is more faster than mine.',
              correct: 'This laptop is faster than mine.',
              explanation: 'Do not double-compare. Choose either "-er" OR "more", never both!',
              ruleTag: 'Double Comparative'
            }
          ],
          rememberRule: 'Never add -s to an adjective, and never say "more bigger"!'
        },
        {
          type: 'practice',
          title: 'Adjective & Comparative Practice',
          subtitle: 'Choose the correct comparison for business decisions.',
          questions: [
            {
              id: 'q10_1_1',
              type: 'fill_blank',
              sentenceWithBlank: 'Option A is ___ than Option B for our current budget.',
              options: ['better', 'gooder', 'more good'],
              correctIndex: 0,
              grammarFocus: 'Irregular comparative (good -> better)',
              whyExplanation: '"Good" is an irregular adjective. Its comparative form is "better than".'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'quiz10_1_1',
          type: 'multiple_choice',
          prompt: 'Which sentence is grammatically correct?',
          options: ['This new process is more efficient.', 'This new process is more efficienter.', 'This new process is efficients.'],
          correctIndex: 0,
          whyExplanation: '"Efficient" is 3 syllables, so it takes "more efficient".'
        }
      ]
    }
  ]
};
