import { Module } from '../../types';

export const lesson7Adverbs: Module = {
  id: 7,
  title: 'Lesson 7: Adverbs and Adverb Phrases',
  tagline: 'Modifying Actions, Frequency, Manner & Time',
  description: 'Master how adverbs add precision, depth, and detail: Adverbs of Manner, Time, Place, Frequency, Duration, Emphasis (Intensifiers), and Adverb Phrases.',
  iconName: 'Activity',
  color: 'from-emerald-600 to-teal-600',
  topics: [
    {
      id: 'l7_t1_adverbs_of_manner',
      moduleId: 7,
      title: 'Adverbs of Manner',
      shortDesc: 'How actions are performed (quickly, carefully, fluently, well, fast, hard).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Manner: How Actions Are Done',
          subtitle: 'Adding descriptive detail to verbs: gracefully, efficiently, patiently.',
          conceptSummary: 'Adverbs of manner describe HOW an action happens. Most are formed by adding -ly to adjectives (quick → quickly, careful → carefully). However, common irregulars exist like good → well, fast → fast, and hard → hard.',
          visualGraphic: {
            heroSentence: 'She spoke calmly and handled the situation professionally.',
            highlights: [
              { word: 'calmly', role: 'Adverb of Manner (How she spoke)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'professionally', role: 'Adverb of Manner (How she handled)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adverbs of manner answer the question: "HOW was the action performed?"'
          },
          keyTakeaways: [
            'Form: Adjective + -ly (quick → quickly, beautiful → beautifully).',
            'Ending in -y: change y to -ily (easy → easily, happy → happily).',
            'Irregular: good → WELL (He speaks English well, NOT good).',
            'Same form: fast → fast, hard → hard, early → early, late → late.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Good" vs. "Well" Matters',
          subtitle: 'The hallmark of polished professional speech.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Performance Evaluations',
              example: '"She performed exceptionally well (NOT performed good)."',
              whyNeeded: '"Good" modifies nouns (a good job); "well" modifies verbs (did the job well).'
            }
          ],
          coachTip: 'Say "I did well on the exam", NOT "I did good on the exam"!'
        },
        {
          type: 'explanation',
          title: 'Adverbs of Manner Rules & Exceptions',
          subtitle: 'Spelling rules and flat adverbs.',
          coreRule: 'Place adverbs of manner after the main verb or after the direct object, NEVER between the verb and its direct object.',
          breakdown: [
            { term: 'Regular -ly formation', plainDefinition: 'Adjective + -ly', simpleExample: 'fluent → fluently, quiet → quietly, direct → directly' },
            { term: 'Flat Adverbs (No -ly change)', plainDefinition: 'Adjective form equals Adverb form', simpleExample: 'drive fast (NOT fastly), work hard (NOT hardly), arrive late' },
            { term: 'Hard vs. Hardly', plainDefinition: 'Hard = with great effort / Hardly = almost NOT at all!', simpleExample: 'He works hard (diligent) vs. He hardly works (lazy!).' },
            { term: 'Adverb Placement', plainDefinition: 'Verb + Object + Adverb', simpleExample: 'She speaks English fluently (NOT She speaks fluently English).' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb of Manner Placement Formula',
          subtitle: '[Subject] + [Verb] + [Direct Object] + [Adverb of Manner]',
          formulaBlocks: [
            { label: 'Subject + Verb', part: 'The team completed', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Direct Object', part: 'the system migration', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Adverb of Manner', part: 'seamlessly and efficiently', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'He explained', verbOrAux: 'the concept', objectOrComplement: 'clearly to the audience', fullSentence: 'He explained the concept clearly to the audience.', context: 'Presentation' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Manner in Daily Dialogue',
          subtitle: 'Work reviews and driving feedback.',
          examples: [
            { id: 'aom_ex1', category: 'work', categoryLabel: 'Peer Review', sentence: 'Maria managed the crisis calmly and resolved the client disputes diplomatically.', breakdownNote: '"calmly" and "diplomatically" specify the execution quality.', speakerRole: 'Team Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Adverb Placement & Hard/Hardly Errors',
          subtitle: 'Putting the adverb between verb and object, or confusing hard with hardly.',
          mistakes: [
            {
              id: 'aom_m1',
              incorrect: 'He speaks very well English.',
              correct: 'He speaks English very well.',
              explanation: 'Never place an adverb between a transitive verb ("speaks") and its object ("English").',
              ruleTag: 'Adverb Placement after Object'
            },
            {
              id: 'aom_m2',
              incorrect: 'She works hardly every day (meaning she works with high effort).',
              correct: 'She works hard every day.',
              explanation: '"Hardly" means almost not at all. "Hard" means with intense energy and diligence.',
              ruleTag: 'Hard vs Hardly'
            }
          ],
          rememberRule: 'Say "He drives fast" (not fastly) and "He speaks Spanish well" (not good)!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Manner Practice',
          subtitle: 'Select the correct adverb form and placement.',
          questions: [
            {
              id: 'aom_q1',
              type: 'sentence_correction',
              prompt: 'Correct the adverb placement in this statement:',
              incorrectSentence: 'She plays beautifully the piano.',
              correctSentence: 'She plays the piano beautifully.',
              errorHighlight: 'beautifully the piano',
              options: [
                'She plays the piano beautifully.',
                'She plays beautifully the piano.',
                'She plays beautiful the piano.'
              ],
              correctIndex: 0,
              whyExplanation: 'Adverbs of manner follow the direct object: "She plays [the piano] [beautifully]".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t2_adverbs_of_time',
      moduleId: 7,
      title: 'Adverbs of Time',
      shortDesc: 'When events occur (yesterday, today, now, recently, soon, already, yet, then).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Time: Stating When',
          subtitle: 'Specifying the chronological moment of actions and occurrences.',
          conceptSummary: 'Adverbs of time answer the question "WHEN?". Common adverbs include yesterday, today, tomorrow, now, soon, later, recently, already, and yet. They typically sit at the very end or beginning of a clause.',
          visualGraphic: {
            heroSentence: 'We recently launched the campaign and will review results soon.',
            highlights: [
              { word: 'recently', role: 'Adverb of Time (In the near past)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'soon', role: 'Adverb of Time (In the near future)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adverbs of time locate actions accurately on the timeline.'
          },
          keyTakeaways: [
            'End position (most common): "I will call you tomorrow."',
            'Front position (for emphasis/transition): "Yesterday, everything changed."',
            'Mid-position (already, recently, soon): "We have recently upgraded the software."',
            'Negative / Question position for "yet": at the very end ("I haven\'t finished yet").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Time Adverbs Matter',
          subtitle: 'Essential for clear project milestones, delivery ETAs, and legal timelines.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Delivery Updates',
              example: '"The shipment will arrive tomorrow morning; we have already cleared customs."',
              whyNeeded: 'Sets exact expectations on logistics and workflow.'
            }
          ],
          coachTip: 'Put "yet" at the very end of sentences: "Have you eaten yet?" / "I haven\'t decided yet".'
        },
        {
          type: 'explanation',
          title: 'Adverbs of Time Placement Guide',
          subtitle: 'Definite vs. Indefinite time adverbs.',
          coreRule: 'Definite times (yesterday, tonight) go at the beginning or end. Indefinite times (already, recently) can go in mid-position.',
          breakdown: [
            { term: 'Definite Time Adverbs', plainDefinition: 'Specific calendar/clock dates', simpleExample: 'tomorrow, yesterday, tonight, next week, at 5 PM' },
            { term: 'Indefinite Time Adverbs', plainDefinition: 'Non-specific intervals', simpleExample: 'recently, lately, soon, beforehand, early, late' },
            { term: 'Already vs. Still vs. Yet', plainDefinition: 'Already (done early) / Still (continuing) / Yet (expected)', simpleExample: 'I already ate. / I am still working. / Are you ready yet?' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb of Time Formula',
          subtitle: '[Adverb of Time] + [Clause] OR [Clause] + [Adverb of Time]',
          formulaBlocks: [
            { label: 'Neutral End Position', part: 'We will present our proposal tomorrow', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Emphatic Front Position', part: 'Recently, consumer behavior has shifted dramatically', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'They will announce', verbOrAux: 'the new partnership', objectOrComplement: 'soon', fullSentence: 'They will announce the new partnership soon.', context: 'Corporate' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adverbs of Time in Daily Life',
          subtitle: 'Scheduling and status notifications.',
          examples: [
            { id: 'aot_ex1', category: 'travel', categoryLabel: 'Airport Announcement', sentence: 'Flight 302 to London is now boarding at Gate 14.', breakdownNote: '"now" specifies the immediate present action.', speakerRole: 'Gate Agent' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Time Adverb Positioning Errors',
          subtitle: 'Putting "yet" in the middle of negative sentences.',
          mistakes: [
            {
              id: 'aot_m1',
              incorrect: 'I haven\'t yet finished the report.',
              correct: 'I haven\'t finished the report yet. (or I have yet to finish...)',
              explanation: 'In standard everyday English, place "yet" at the end of the negative clause.',
              ruleTag: 'Yet End Placement'
            }
          ],
          rememberRule: 'Place "yet" at the end of questions and negative statements (Not finished yet)!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Time Practice',
          subtitle: 'Place time adverbs naturally in clauses.',
          questions: [
            {
              id: 'aot_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the appropriate time adverb at the end of a question:',
              sentenceWithBlank: 'Has the finance department finalized next year\'s budget ___?',
              options: ['yet', 'already', 'recently'],
              correctIndex: 0,
              grammarFocus: 'Yet in questions',
              whyExplanation: '"Yet" is the natural adverb at the end of questions asking if an expected event has occurred.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t3_adverbs_of_place',
      moduleId: 7,
      title: 'Adverbs of Place',
      shortDesc: 'Where actions happen (here, there, everywhere, nowhere, inside, upstairs, abroad).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Place: Specifying Where',
          subtitle: 'Locations and spatial directions: here, there, abroad, upstairs, everywhere.',
          conceptSummary: 'Adverbs of place indicate WHERE an action occurs or in which direction someone/something moves. They answer the question "WHERE?" and almost always follow the main verb or direct object.',
          visualGraphic: {
            heroSentence: 'She works abroad and travels everywhere for business.',
            highlights: [
              { word: 'abroad', role: 'Adverb of Place (Where she works)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'everywhere', role: 'Adverb of Place (Where she travels)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adverbs of place do NOT need prepositions (e.g. "go abroad", NOT "go to abroad").'
          },
          keyTakeaways: [
            'Examples: here, there, inside, outside, upstairs, downstairs, abroad, nearby, everywhere.',
            'No prepositions: "go home", "travel abroad", "come inside" (NEVER "go to home"!).',
            'Directional suffixes: -wards (backwards, forwards, upwards, downwards).',
            'Standard position: after the main verb or direct object.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Go Home" vs. "Go to Home" Matters',
          subtitle: 'One of the most frequent errors among English learners worldwide.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Leaving the Office',
              example: '"I am going home now (NOT going to home)."',
              whyNeeded: '"Home" functions as an adverb of place here, so the preposition "to" is completely unnecessary.'
            }
          ],
          coachTip: 'Never say "go to abroad" or "go to home"—say "go abroad" and "go home"!'
        },
        {
          type: 'explanation',
          title: 'Adverbs of Place Guide',
          subtitle: 'Spatial adverbs without prepositions.',
          coreRule: 'Do not add prepositions before adverbs of place like home, abroad, downtown, upstairs, inside.',
          breakdown: [
            { term: 'Location Adverbs', plainDefinition: 'Static place', simpleExample: 'Wait here. / The manager is upstairs.' },
            { term: 'Direction / Movement Adverbs', plainDefinition: 'Motion towards a destination', simpleExample: 'Walk forwards. / Move inside.' },
            { term: 'Compound Place Adverbs', plainDefinition: 'Anywhere, everywhere, nowhere, somewhere', simpleExample: 'I searched everywhere for my keys.' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb of Place Formula',
          subtitle: '[Subject] + [Verb] + [Adverb of Place]',
          formulaBlocks: [
            { label: 'Subject + Verb', part: 'The CEO traveled', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adverb of Place', part: 'abroad to meet international partners', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Please leave', verbOrAux: 'the packages', objectOrComplement: 'outside by the front door', fullSentence: 'Please leave the packages outside by the front door.', context: 'Delivery' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adverbs of Place in Everyday Dialogue',
          subtitle: 'Directions and navigation.',
          examples: [
            { id: 'aop_ex1', category: 'travel', categoryLabel: 'Hotel Lobby', sentence: 'The conference rooms are located upstairs on the second floor.', breakdownNote: '"upstairs" specifies vertical location.', speakerRole: 'Concierge' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "To Home / To Abroad" Error',
          subtitle: 'Adding unnecessary prepositions before place adverbs.',
          mistakes: [
            {
              id: 'aop_m1',
              incorrect: 'She wants to travel to abroad next summer.',
              correct: 'She wants to travel abroad next summer.',
              explanation: '"Abroad" is an adverb of place and does not take the preposition "to".',
              ruleTag: 'No Preposition with Abroad'
            },
            {
              id: 'aop_m2',
              incorrect: 'It is late; let\'s go to home.',
              correct: 'It is late; let\'s go home.',
              explanation: '"Home" is an adverb of destination with verbs of motion; omit "to".',
              ruleTag: 'Go Home vs Go to Home'
            }
          ],
          rememberRule: 'Say "go home", "travel abroad", and "head downtown" without the preposition "to"!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Place Practice',
          subtitle: 'Choose the correct preposition-free place adverb.',
          questions: [
            {
              id: 'aop_q1',
              type: 'sentence_correction',
              prompt: 'Correct this navigation instruction:',
              incorrectSentence: 'After the meeting, we drove to downtown for dinner.',
              correctSentence: 'After the meeting, we drove downtown for dinner.',
              errorHighlight: 'to downtown',
              options: [
                'After the meeting, we drove downtown for dinner.',
                'After the meeting, we drove to downtown for dinner.',
                'After the meeting, we drove at downtown for dinner.'
              ],
              correctIndex: 0,
              whyExplanation: '"Downtown" acts as an adverb of place with verbs of motion and does not take "to".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t4_adverbs_of_frequency',
      moduleId: 7,
      title: 'Adverbs of Frequency',
      shortDesc: 'How often actions occur (always 100%, usually 80%, often 60%, sometimes 50%, rarely 10%, never 0%).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Frequency: How Often',
          subtitle: 'The percentage scale of frequency and the mid-position placement rule.',
          conceptSummary: 'Adverbs of frequency describe how often an action happens. They follow a strict placement rule: BEFORE main verbs (I always drink coffee), but AFTER the verb BE (I am always on time).',
          visualGraphic: {
            heroSentence: 'She always arrives early, and he is never late.',
            highlights: [
              { word: 'always arrives', role: 'Before Main Verb (always + arrives)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'is never', role: 'After Verb BE (is + never)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Before main verbs. After BE verbs. Between auxiliary and main verbs.'
          },
          keyTakeaways: [
            '100% Always → 90% Usually → 70% Often → 50% Sometimes → 10% Rarely/Seldom → 0% Never.',
            'Before Main Verbs: "We rarely eat out."',
            'After Verb BE: "She is always prepared."',
            'Between Aux and Main Verb: "I have never seen this error before."',
            'Never and Rarely already mean negative (NEVER use double negatives like "don\'t never").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Frequency Placement Matters',
          subtitle: 'Correct mid-sentence placement makes your English sound natural and fluent.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Team Reliability',
              example: '"Our servers are always monitored and we usually deploy updates on Sundays."',
              whyNeeded: 'Accurate frequency positioning conveys operational standards cleanly.'
            }
          ],
          coachTip: 'Rule: BE + Frequency Adverb (She IS always) vs. Frequency Adverb + Main Verb (She ALWAYS goes).'
        },
        {
          type: 'explanation',
          title: 'The Frequency Positioning Matrix',
          subtitle: 'Main Verb vs. BE vs. Auxiliary positioning.',
          coreRule: 'Place the frequency adverb before standard main verbs, after auxiliary/BE verbs.',
          breakdown: [
            { term: '1. Before Main Verbs', plainDefinition: 'Subject + Adverb + Verb', simpleExample: 'They often collaborate on research papers.' },
            { term: '2. After Verb BE (am/is/are/was/were)', plainDefinition: 'Subject + BE + Adverb', simpleExample: 'Our customer support is always available.' },
            { term: '3. Between Auxiliary & Main Verb', plainDefinition: 'Subject + Aux + Adverb + Main Verb', simpleExample: 'We have never compromised on security standards.' },
            { term: 'Definite Frequency at End', plainDefinition: 'Daily, weekly, monthly, once a year', simpleExample: 'We run database backups daily.' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb of Frequency Formulas',
          subtitle: '[Subject] + [Freq Adverb] + [Main V] OR [Subject] + [BE] + [Freq Adverb]',
          formulaBlocks: [
            { label: 'Main Verb Rule', part: 'We usually conduct weekly syncs', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'BE Verb Rule', part: 'The managers are always accessible', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'He has', verbOrAux: 'frequently', objectOrComplement: 'mentored junior developers', fullSentence: 'He has frequently mentored junior developers.', context: 'Mentorship' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adverbs of Frequency in Routine',
          subtitle: 'Work habits and lifestyle descriptions.',
          examples: [
            { id: 'aof_ex1', category: 'work', categoryLabel: 'Workflow Sync', sentence: 'We always review open pull requests before lunch, and we rarely work on weekends.', breakdownNote: '"always review" (before verb) and "rarely work" (before verb).', speakerRole: 'Software Engineer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Frequency Placement & Double Negatives',
          subtitle: 'Putting frequency before BE or combining "never" with "don\'t".',
          mistakes: [
            {
              id: 'aof_m1',
              incorrect: 'She always is happy to help.',
              correct: 'She is always happy to help.',
              explanation: 'Adverbs of frequency must follow the verb BE (am/is/are/was/were).',
              ruleTag: 'After Verb BE'
            },
            {
              id: 'aof_m2',
              incorrect: 'I don\'t never eat fast food.',
              correct: 'I never eat fast food. / I don\'t ever eat fast food.',
              explanation: '"Never" is already negative. Combining "don\'t" with "never" creates an ungrammatical double negative.',
              ruleTag: 'No Double Negatives'
            }
          ],
          rememberRule: 'Say "She is always on time" (after BE) and "She always comes on time" (before main verb)!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Frequency Practice',
          subtitle: 'Place frequency adverbs in the exact grammatical slot.',
          questions: [
            {
              id: 'aof_q1',
              type: 'word_order',
              prompt: 'Put the words in the correct natural order:',
              scrambledWords: ['late', 'are', 'meetings', 'for', 'our', 'never', 'clients'],
              correctSentence: 'our clients are never late for meetings',
              contextHint: 'Subject + BE (are) + Frequency (never) + Adjective + Prepositional phrase',
              whyExplanation: 'After the verb BE ("are"), place the frequency adverb "never": "are never late".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t5_adverbs_of_duration',
      moduleId: 7,
      title: 'Adverbs of Duration',
      shortDesc: 'How long actions last (briefly, temporarily, permanently, all day, since, for).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Duration: How Long',
          subtitle: 'Expressing the span of time: briefly, temporarily, permanently, indefinitely.',
          conceptSummary: 'Adverbs of duration specify the length of time an action or state persists. They answer the question "HOW LONG?". They can be single adverbs (briefly, permanently) or prepositional phrases with FOR and SINCE.',
          visualGraphic: {
            heroSentence: 'The system was temporarily offline, but it is now permanently restored.',
            highlights: [
              { word: 'temporarily offline', role: 'Adverb of Duration (Short time span)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'permanently restored', role: 'Adverb of Duration (Unending time span)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Duration adverbs define the lifespan of a condition.'
          },
          keyTakeaways: [
            'Adverbs: briefly, temporarily, permanently, indefinitely, long, forever.',
            'Time spans: all night, all day, for three weeks, since morning.',
            'For + time period (for 2 hours); Since + starting point (since Monday).',
            'Position: often before adjectives/participles (temporarily disabled) or at clause ends.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Duration Adverbs Matter',
          subtitle: 'Essential for contracts, system notices, and staffing arrangements.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'IT Maintenance Notice',
              example: '"The portal will be temporarily unavailable for two hours during server upgrades."',
              whyNeeded: 'Prevents customer panic by clearly bounding the downtime duration.'
            }
          ],
          coachTip: 'Use "temporarily" for short planned disruptions and "permanently" for final structural changes.'
        },
        {
          type: 'explanation',
          title: 'Duration Adverbs & Phrases Breakdown',
          subtitle: 'Single words vs. Prepositional duration phrases.',
          coreRule: 'Position duration adverbs either directly before the predicate adjective/participle or at the end of the clause.',
          breakdown: [
            { term: 'Single Adverbs of Duration', plainDefinition: 'Describe the permanence or brevity of state', simpleExample: 'briefly, temporarily, permanently, endlessly' },
            { term: 'For + Period of Time', plainDefinition: 'Total duration count', simpleExample: 'We studied for four hours. / She worked there for a decade.' },
            { term: 'Since + Starting Point', plainDefinition: 'Continuous from origin to now', simpleExample: 'It has been raining since dawn.' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb of Duration Formula',
          subtitle: '[Subject] + [BE] + [Duration Adverb] + [Complement] OR [Clause] + [for/since duration]',
          formulaBlocks: [
            { label: 'Mid-Position', part: 'The road is temporarily closed', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'End-Position', part: 'We spoke briefly about the project', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The changes will', verbOrAux: 'permanently impact', objectOrComplement: 'our workflow', fullSentence: 'The changes will permanently impact our workflow.', context: 'Operations' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Duration in Real Life',
          subtitle: 'Workplace announcements and customer notifications.',
          examples: [
            { id: 'aodu_ex1', category: 'work', categoryLabel: 'Facility Management', sentence: 'The main elevator will be temporarily out of service for routine inspection.', breakdownNote: '"temporarily" indicates short duration.', speakerRole: 'Building Supervisor' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Duration Preposition Errors',
          subtitle: 'Using "during" instead of "for" when stating numerical duration.',
          mistakes: [
            {
              id: 'aodu_m1',
              incorrect: 'I worked at that firm during five years.',
              correct: 'I worked at that firm for five years.',
              explanation: 'Use "for" to express numerical duration of time. "During" is used with named events ("during the summer").',
              ruleTag: 'For vs During'
            }
          ],
          rememberRule: 'Use "for" + number of years/hours (for 5 years), NOT "during 5 years"!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Duration Practice',
          subtitle: 'Choose between duration words.',
          questions: [
            {
              id: 'aodu_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct preposition of duration for a number of days:',
              sentenceWithBlank: 'The exhibition will remain open to the public ___ ten consecutive days.',
              options: ['for', 'during', 'since'],
              correctIndex: 0,
              grammarFocus: 'For + time duration',
              whyExplanation: '"For" is used with quantities of time: "for ten consecutive days".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t6_adverbs_of_emphasis',
      moduleId: 7,
      title: 'Adverbs of Emphasis',
      shortDesc: 'Intensifiers (very, extremely, completely, absolutely, totally, highly, quite, really).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adverbs of Emphasis: Intensifiers & Downtoners',
          subtitle: 'Adjusting the strength of adjectives and verbs: extremely, highly, absolutely.',
          conceptSummary: 'Adverbs of emphasis (intensifiers) boost or moderate the meaning of adjectives, other adverbs, or verbs. They show degrees of strength: "highly recommended", "absolutely essential", "extremely thorough".',
          visualGraphic: {
            heroSentence: 'Her proposal was highly innovative and completely convincing.',
            highlights: [
              { word: 'highly innovative', role: 'Intensifier + Gradable Adjective', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'completely convincing', role: 'Intensifier + Non-Gradable Adjective', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Intensifiers pair naturally with specific adjectives (collocations).'
          },
          keyTakeaways: [
            'Gradable Intensifiers: very, extremely, remarkably, highly, incredibly (very good, highly qualified).',
            'Absolute / Non-Gradable Intensifiers: absolutely, completely, totally, entirely (absolutely essential, completely impossible).',
            'Downtoners / Moderaters: slightly, somewhat, fairly, rather, quite.',
            'NEVER say "very unique" or "very impossible" (use absolutely / totally with absolute words!).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Adverbs of Emphasis Matter',
          subtitle: 'Natural intensifier collocations elevate writing to executive standards.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Recommendation Letters',
              example: '"I highly recommend David; he is exceptionally skilled and deeply dedicated."',
              whyNeeded: 'Collocations like "highly recommend" and "exceptionally skilled" carry persuasive authority.'
            }
          ],
          coachTip: 'Use "highly" with qualified/recommended/successful; use "deeply" with concerned/committed/regret.'
        },
        {
          type: 'explanation',
          title: 'Gradable vs. Absolute Adjectives & Intensifiers',
          subtitle: 'Which intensifiers pair with which adjectives.',
          coreRule: 'Pair "very / extremely" with gradable adjectives; pair "absolutely / completely" with non-gradable (limit) adjectives.',
          breakdown: [
            { term: 'Gradable (Degrees 1 to 10)', plainDefinition: 'Can be slightly or very: cold, hot, tired, expensive', simpleExample: 'very cold, extremely tired, fairly expensive' },
            { term: 'Absolute / Extreme (100% or 0%)', plainDefinition: 'Already at extreme limit: freezing, exhausted, impossible, perfect', simpleExample: 'absolutely freezing (NOT very freezing), completely exhausted' },
            { term: 'Natural Business Collocations', plainDefinition: 'Established pairings', simpleExample: 'highly competitive, deeply concerned, strictly confidential, strongly advise' }
          ]
        },
        {
          type: 'formula',
          title: 'Emphasis Formula',
          subtitle: '[Subject] + [BE] + [Intensifier] + [Adjective]',
          formulaBlocks: [
            { label: 'Intensifier', part: 'highly / exceptionally / absolutely', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adjective Match', part: 'qualified / skilled / vital', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'This safety audit is', verbOrAux: 'strictly', objectOrComplement: 'confidential and absolutely critical', fullSentence: 'This safety audit is strictly confidential and absolutely critical.', context: 'Compliance' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Emphasis in Professional Life',
          subtitle: 'Executive endorsements and appraisals.',
          examples: [
            { id: 'aoe_ex1', category: 'work', categoryLabel: 'Formal Endorsement', sentence: 'We are deeply impressed by your team\'s exceptionally thorough market research.', breakdownNote: '"deeply impressed" and "exceptionally thorough" are professional intensifier pairings.', speakerRole: 'Managing Partner' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Intensifier Clashing Errors',
          subtitle: 'Using "very" with extreme absolute adjectives (*very freezing, *very impossible).',
          mistakes: [
            {
              id: 'aoe_m1',
              incorrect: 'The result was very perfect.',
              correct: 'The result was absolutely perfect.',
              explanation: '"Perfect" is an absolute limit adjective (something is either perfect or not). Use "absolutely", not "very".',
              ruleTag: 'Absolute Adjective Intensifier'
            }
          ],
          rememberRule: 'Pair "absolutely" with extreme words (absolutely fantastic, freezing, perfect), not "very"!'
        },
        {
          type: 'practice',
          title: 'Adverbs of Emphasis Practice',
          subtitle: 'Select the natural intensifier collocation.',
          questions: [
            {
              id: 'aoe_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the most natural business collocation:',
              sentenceWithBlank: 'The board of directors is ___ committed to environmental sustainability.',
              options: ['deeply', 'heavily', 'strictly'],
              correctIndex: 0,
              grammarFocus: 'Collocation: deeply committed',
              whyExplanation: '"Deeply committed" is the standard natural English collocation for personal and corporate dedication.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l7_t7_adverb_phrases',
      moduleId: 7,
      title: 'Adverb Phrases',
      shortDesc: 'Multi-word phrases that function together as an adverb (in a very professional manner, with great care).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adverb Phrases: Multi-Word Modifiers',
          subtitle: 'Groups of words that answer How, When, Where, or Why together.',
          conceptSummary: 'An adverb phrase is a group of two or more words that functions as an adverb in a sentence. It modifies a verb, adjective, or clause, explaining manner (with great care), time (in the near future), place (across the street), or reason (due to the weather).',
          visualGraphic: {
            heroSentence: 'The surgeon operated with extraordinary precision.',
            highlights: [
              { word: 'operated', role: 'Main Verb being modified', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'with extraordinary precision', role: 'Adverb Phrase of Manner (= extremely precisely)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adverb phrases provide nuanced, descriptive power beyond single-word adverbs.'
          },
          keyTakeaways: [
            'Manner Phrase: with great care, in a polite manner, at high speed.',
            'Time Phrase: at the crack of dawn, in three weeks, as soon as possible.',
            'Place Phrase: right around the corner, on the top shelf, in the main lobby.',
            'Reason Phrase: because of the storm, in order to save energy.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Adverb Phrases Matter',
          subtitle: 'Transforms dry sentences into vivid, descriptive prose.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Reports',
              example: '"The team executed the rollout in a remarkably cost-effective manner."',
              whyNeeded: 'Synthesizes speed, cost, and method in a clean phrase.'
            }
          ],
          coachTip: 'Instead of repeating "very -ly" words, use elegant prepositional adverb phrases like "with enthusiasm" or "with utmost care".'
        },
        {
          type: 'explanation',
          title: 'Common Adverb Phrase Structures',
          subtitle: 'Prepositional phrases vs. Intensified adverb groups.',
          coreRule: 'An adverb phrase can be formed with [Preposition + Noun Phrase] or [Adverb + Adverb].',
          breakdown: [
            { term: 'Preposition + Noun (Manner)', plainDefinition: 'In a ___ manner / With ___', simpleExample: 'in a professional manner, with great patience, with remarkable speed' },
            { term: 'Preposition + Noun (Time / Place)', plainDefinition: 'At, in, on + time/place phrase', simpleExample: 'in the dead of night, on a regular basis, across the nation' },
            { term: 'Adverb + Adverb (Intensified)', plainDefinition: 'Degree adverb + base adverb', simpleExample: 'much too quickly, remarkably well, far too late' }
          ]
        },
        {
          type: 'formula',
          title: 'Adverb Phrase Formulas',
          subtitle: '[Subject] + [Verb] + [Direct Object] + [Prepositional Adverb Phrase]',
          formulaBlocks: [
            { label: 'Subject + Verb', part: 'The pilot landed the airplane', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adverb Phrase of Manner', part: 'with exceptional skill and composure', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We inspect our servers', verbOrAux: 'on a daily basis', objectOrComplement: 'to ensure optimal performance', fullSentence: 'We inspect our servers on a daily basis to ensure optimal performance.', context: 'IT Ops' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adverb Phrases in Real Life',
          subtitle: 'Professional debriefs and client care.',
          examples: [
            { id: 'advp_ex1', category: 'work', categoryLabel: 'Client Service', sentence: 'Our support team handled the customer\'s concerns with the utmost empathy and professionalism.', breakdownNote: '"with the utmost empathy and professionalism" acts as an adverb phrase of manner.', speakerRole: 'Service Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Adverb Phrase Word Order Errors',
          subtitle: 'Splitting verbs and direct objects with long adverb phrases.',
          mistakes: [
            {
              id: 'advp_m1',
              incorrect: 'She delivered in a clear voice her entire presentation.',
              correct: 'She delivered her entire presentation in a clear voice.',
              explanation: 'Place the direct object ("her entire presentation") directly after the verb, followed by the adverb phrase ("in a clear voice").',
              ruleTag: 'Adverb Phrase Placement'
            }
          ],
          rememberRule: 'Keep the verb and direct object together; place long adverb phrases at the end of the clause!'
        },
        {
          type: 'practice',
          title: 'Adverb Phrases Practice',
          subtitle: 'Identify and organize multi-word adverb phrases.',
          questions: [
            {
              id: 'advp_q1',
              type: 'multiple_choice',
              prompt: 'Which part of the following sentence is an adverb phrase of manner? "The technician repaired the delicate sensor with great precision."',
              options: [
                'with great precision',
                'repaired the delicate sensor',
                'The technician',
                'delicate sensor'
              ],
              correctIndex: 0,
              whyExplanation: '"with great precision" is a prepositional adverb phrase explaining HOW the technician repaired the sensor.'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
