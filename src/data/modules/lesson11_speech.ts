import { Module } from '../../types';

export const lesson11Speech: Module = {
  id: 11,
  title: 'Lesson 11: Direct and Indirect Speech',
  tagline: 'Quoted Speech, Reported Speech, Backshifting & Inversion Rules',
  description: 'Master transforming spoken words into reported discourse: Direct vs. Indirect speech, systematic tense backshifting rules, time/place deictic shifts, reporting verbs (said vs. told vs. suggested), and indirect questions & requests.',
  iconName: 'MessageSquare',
  color: 'from-violet-600 to-purple-700',
  topics: [
    {
      id: 'l11_t1_direct_vs_indirect',
      moduleId: 11,
      title: 'Direct Speech vs. Indirect Speech',
      shortDesc: 'Exact quoted words in quotation marks vs. Reported paraphrasing.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Direct vs. Indirect Speech: Quoting vs. Reporting',
          subtitle: 'The fundamental difference between exact quotes and reported speech.',
          conceptSummary: 'Direct Speech quotes the speaker\'s EXACT words enclosed in quotation marks (" "). Indirect (Reported) Speech communicates what someone said without exact quotes, adjusting tenses, pronouns, and time words to reflect the current reporting moment.',
          visualGraphic: {
            heroSentence: 'Direct: She said, "I am ready." → Indirect: She said that she was ready.',
            highlights: [
              { word: '"I am ready."', role: 'Direct Quoted Speech (Original words in quotes)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'that she was ready.', role: 'Indirect Reported Speech (Backshifted tense + pronoun shift)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Indirect speech integrates quotes smoothly into your own narrative sentence.'
          },
          keyTakeaways: [
            'Direct Speech: uses quotation marks ("..."), exact wording, comma after reporting verb.',
            'Indirect Speech: no quotation marks, introduces with "that" (optional), shifts pronouns and tenses.',
            'Punctuation in Direct Speech: comma goes INSIDE the quotes (e.g., "I agree," said Mark).',
            'Indirect speech is the standard format for business minutes, meeting debriefs, and journalism.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Reported Speech Matters',
          subtitle: 'The cornerstone of meeting summaries, minutes, and debriefing stakeholders.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Meeting Minutes',
              example: '"The CEO announced that the merger had been finalized ahead of schedule."',
              whyNeeded: 'Summarizes hours of executive discussions into clear, professional reported statements.'
            }
          ],
          coachTip: 'In indirect speech, the word "that" is often optional: "She said (that) she was coming".'
        },
        {
          type: 'explanation',
          title: 'Direct vs. Indirect Core Transformations',
          subtitle: 'Comparing punctuation, pronouns, and structure.',
          coreRule: 'When changing from direct to indirect speech, remove quotation marks and shift pronouns from first/second person to third person.',
          breakdown: [
            { term: '1. Punctuation Changes', plainDefinition: 'Remove quotation marks, question marks, and exclamation points', simpleExample: 'She said, "I like apples." → She said that she liked apples.' },
            { term: '2. Pronoun Shifts', plainDefinition: 'I/You shift to He/She/They depending on the speaker', simpleExample: 'John said, "I will help you." → John said that he would help me.' },
            { term: '3. Connecting Word', plainDefinition: 'Use "that" for statements, "if/whether" for yes/no questions', simpleExample: 'He asked, "Are you ready?" → He asked if I was ready.' }
          ]
        },
        {
          type: 'formula',
          title: 'Direct to Indirect Conversion Formula',
          subtitle: '[Subject] + [said / told someone] + (that) + [Shifted Subject] + [Backshifted Verb]',
          formulaBlocks: [
            { label: 'Reporting Verb', part: 'Maria said that / Maria told us that', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Shifted Pronoun', part: 'she', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Backshifted Verb', part: 'had completed the financial forecast.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Direct: "I need assistance."', verbOrAux: '→ Indirect:', objectOrComplement: 'He said that he needed assistance.', fullSentence: 'He said that he needed assistance.', context: 'Transformation' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Reported Speech in Daily Life',
          subtitle: 'Relaying instructions and client requests.',
          examples: [
            { id: 'dvs_ex1', category: 'work', categoryLabel: 'Client Update', sentence: 'The client informed us that they had reviewed the proposal and were ready to sign.', breakdownNote: '"informed us that" smoothly reports multiple direct statements.', speakerRole: 'Project Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Mixing Direct and Indirect Styles',
          subtitle: 'Leaving quotation marks in indirect speech or keeping 1st person pronouns.',
          mistakes: [
            {
              id: 'dvs_m1',
              incorrect: 'She told me that "I will come tomorrow".',
              correct: 'She told me that she would come the next day.',
              explanation: 'Never keep quotation marks or original first-person pronouns in indirect speech.',
              ruleTag: 'Complete Conversion'
            }
          ],
          rememberRule: 'Remove quotation marks and change "I" to "he/she" in reported speech!'
        },
        {
          type: 'practice',
          title: 'Direct vs. Indirect Practice',
          subtitle: 'Transform direct quotes into indirect reported speech.',
          questions: [
            {
              id: 'dvs_q1',
              type: 'sentence_correction',
              prompt: 'Transform the direct quote: Alex said, "I am finishing my report."',
              incorrectSentence: 'Alex said that I am finishing my report.',
              correctSentence: 'Alex said that he was finishing his report.',
              errorHighlight: 'I am finishing my',
              options: [
                'Alex said that he was finishing his report.',
                'Alex said that I am finishing my report.',
                'Alex said that he is finishing my report.'
              ],
              correctIndex: 0,
              whyExplanation: 'Pronouns shift from "I/my" to "he/his", and present continuous "am finishing" backshifts to past continuous "was finishing".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l11_t2_tense_backshifting_rules',
      moduleId: 11,
      title: 'Tense Backshifting Rules',
      shortDesc: 'Present Simple → Past Simple, Present Continuous → Past Continuous, Past Simple/Present Perfect → Past Perfect, will → would, can → could.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The Tense Backshifting Master Table',
          subtitle: 'Moving one step back into the past when reporting with past verbs (said, told).',
          conceptSummary: 'When the reporting verb is in the past (said, told, asked), the verbs in the reported clause shift one step further into the past. This is called "backshifting".',
          visualGraphic: {
            heroSentence: 'Present ("I write") → Past ("he wrote") → Past Perfect ("he had written").',
            highlights: [
              { word: 'Present → Past', role: 'Simple Present (do) shifts to Simple Past (did)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'Past / Pres. Perfect → Past Perfect', role: 'Simple Past & Present Perfect shift to Past Perfect (had done)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Modals also shift: will → would, can → could, may → might, must → had to.'
          },
          keyTakeaways: [
            'Simple Present (work) → Simple Past (worked).',
            'Present Continuous (is working) → Past Continuous (was working).',
            'Simple Past (worked) & Present Perfect (has worked) → Past Perfect (had worked).',
            'Will → Would | Can → Could | May → Might | Must → Had to.',
            'NO BACKSHIFT if the statement is still an eternal general truth (e.g. "The earth revolves around the sun").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Backshifting Precision Matters',
          subtitle: 'Prevents chronological confusion in legal, executive, and historical records.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Legal Disclosures',
              example: '"The witness testified that the defendant HAD SEEN the contract before signing."',
              whyNeeded: 'Past perfect ("had seen") establishes beyond doubt that the action occurred prior to signing.'
            }
          ],
          coachTip: 'Should, would, could, and might DO NOT backshift further—they remain the same!'
        },
        {
          type: 'explanation',
          title: 'Complete Backshifting Conversion Chart',
          subtitle: 'From Direct Tense to Reported Tense.',
          coreRule: 'Shift each verb one step into the past when reporting with a past reporting verb.',
          breakdown: [
            { term: 'Simple Present → Simple Past', plainDefinition: '"I live in Tokyo" → said he lived in Tokyo', simpleExample: '"I need help" → said that he needed help.' },
            { term: 'Present Cont. → Past Cont.', plainDefinition: '"I am working" → said she was working', simpleExample: '"We are testing" → said they were testing.' },
            { term: 'Simple Past → Past Perfect', plainDefinition: '"I saw it" → said he had seen it', simpleExample: '"We launched yesterday" → said they had launched...' },
            { term: 'Present Perfect → Past Perfect', plainDefinition: '"I have finished" → said she had finished', simpleExample: '"I have sent the file" → said she had sent the file.' }
          ]
        },
        {
          type: 'formula',
          title: 'Backshifting Modal Formula',
          subtitle: 'will → would | can → could | must → had to',
          formulaBlocks: [
            { label: 'Direct Quote', part: '"We will deliver the product tomorrow"', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Reported Speech', part: 'They promised they would deliver the product the next day', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: '"I can attend"', verbOrAux: '→', objectOrComplement: 'She said she could attend', fullSentence: 'She said she could attend.', context: 'Modal Backshift' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Backshifting in Real Life',
          subtitle: 'Relaying conversations and press statements.',
          examples: [
            { id: 'tbs_ex1', category: 'work', categoryLabel: 'Team Debrief', sentence: 'The director confirmed that the server had experienced a brief outage earlier that morning.', breakdownNote: '"had experienced" correctly backshifts the past simple event.', speakerRole: 'DevOps Engineer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Forgetting to Backshift Modals',
          subtitle: 'Leaving "will" or "can" when reporting past statements.',
          mistakes: [
            {
              id: 'tbs_m1',
              incorrect: 'He told me yesterday that he will call me today.',
              correct: 'He told me yesterday that he would call me today.',
              explanation: 'Because the reporting happened in the past ("told"), "will" must backshift to "would".',
              ruleTag: 'Will to Would Backshift'
            }
          ],
          rememberRule: 'Change "will" to "would" and "can" to "could" after "said" or "told"!'
        },
        {
          type: 'practice',
          title: 'Backshifting Practice',
          subtitle: 'Select the correct backshifted tense.',
          questions: [
            {
              id: 'tbs_q1',
              type: 'fill_blank',
              prompt: 'Backshift the quote: Maria said, "I have already approved the design."',
              sentenceWithBlank: 'Maria stated that she ___ already approved the design.',
              options: ['had', 'has', 'have'],
              correctIndex: 0,
              grammarFocus: 'Present Perfect backshifts to Past Perfect',
              whyExplanation: 'Present perfect "have approved" shifts to past perfect "had approved".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l11_t3_pronoun_time_place_shifts',
      moduleId: 11,
      title: 'Pronoun, Time, and Place Shifts',
      shortDesc: 'now → then, today → that day, tomorrow → the next day, yesterday → the day before, here → there, this → that.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Time & Place Deictic Shifts in Reported Speech',
          subtitle: 'Adjusting spatial and temporal words to the current frame of reference.',
          conceptSummary: 'Because reported speech happens at a different time and place than the original conversation, words pointing to the original moment (now, today, tomorrow, here, this) must shift to their distant counterparts (then, that day, the next day, there, that).',
          visualGraphic: {
            heroSentence: '"I will meet you here tomorrow." → He said he would meet me there the next day.',
            highlights: [
              { word: 'here → there', role: 'Place Shift (from immediate to distant)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'tomorrow → the next day', role: 'Time Shift (from original future to relative future)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Time and place anchors shift relative to when the report is being delivered.'
          },
          keyTakeaways: [
            'now → then / at that moment',
            'today → that day | tonight → that night',
            'tomorrow → the next day / the following day',
            'yesterday → the day before / the previous day',
            'next week → the following week | last month → the previous month',
            'here → there | this → that | these → those'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Time & Place Shifts Matter',
          subtitle: 'Prevents catastrophic miscommunication about deadlines and meeting places.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Project Deadlines',
              example: '"The manager said the deadline was that day (not today, if reporting days later)."',
              whyNeeded: 'Accurately marks that the deadline was relative to the speaker\'s original day.'
            }
          ],
          coachTip: 'Use "the following day" or "the previous week" for formal and academic reports.'
        },
        {
          type: 'explanation',
          title: 'Complete Deictic Conversion Table',
          subtitle: 'Direct Word vs. Indirect Word.',
          coreRule: 'Convert all immediate time/place markers to their narrative relative forms.',
          breakdown: [
            { term: 'now → then / at that time', plainDefinition: 'Shifts immediate present to past moment', simpleExample: '"I am busy now" → said he was busy then.' },
            { term: 'today / tonight → that day / that night', plainDefinition: 'Shifts current calendar date to referred date', simpleExample: '"I will finish tonight" → promised he would finish that night.' },
            { term: 'tomorrow → the next day / the following day', plainDefinition: 'Shifts next day to narrative next day', simpleExample: '"We depart tomorrow" → said they departed the next day.' },
            { term: 'here / this → there / that', plainDefinition: 'Shifts proximal physical space to distant space', simpleExample: '"Sign this document here" → asked to sign that document there.' }
          ]
        },
        {
          type: 'formula',
          title: 'Time/Place Shift Formula',
          subtitle: '[Original: today / tomorrow / here] → [Reported: that day / the next day / there]',
          formulaBlocks: [
            { label: 'Direct', part: '"I signed the contract here yesterday"', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Reported', part: 'She said that she had signed the contract there the day before', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: '"We will launch next week"', verbOrAux: '→', objectOrComplement: 'They stated they would launch the following week', fullSentence: 'They stated they would launch the following week.', context: 'Planning' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Deictic Shifts in Real Life',
          subtitle: 'Court testimony and administrative reporting.',
          examples: [
            { id: 'tps_ex1', category: 'work', categoryLabel: 'Admin Summary', sentence: 'The director confirmed that the auditors had arrived there the previous day.', breakdownNote: '"there" and "the previous day" shift "here" and "yesterday".', speakerRole: 'Administrative Assistant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Keeping "Tomorrow" When Reporting Past Events',
          subtitle: 'Using "tomorrow" when referring to a conversation that happened weeks ago.',
          mistakes: [
            {
              id: 'tps_m1',
              incorrect: 'Last month, he told me he would deliver the car tomorrow.',
              correct: 'Last month, he told me he would deliver the car the next day.',
              explanation: '"Tomorrow" means the day after today. If the conversation happened last month, use "the next day".',
              ruleTag: 'Tomorrow to The Next Day'
            }
          ],
          rememberRule: 'Change "tomorrow" to "the next day" and "yesterday" to "the day before"!'
        },
        {
          type: 'practice',
          title: 'Time and Place Shifts Practice',
          subtitle: 'Select the correct narrative time marker.',
          questions: [
            {
              id: 'tps_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank to report: "I will call you tomorrow":',
              sentenceWithBlank: 'She promised she would call me ___.',
              options: ['the following day', 'tomorrow', 'yesterday'],
              correctIndex: 0,
              grammarFocus: 'Tomorrow becomes the following day',
              whyExplanation: '"The following day" is the proper reported form for "tomorrow".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l11_t4_reporting_verbs',
      moduleId: 11,
      title: 'Reporting Verbs (said, told, asked, explained, suggested, promised)',
      shortDesc: 'Say vs. Tell (Tell + Person vs. Say + that), plus nuanced reporting verbs (admit, recommend, deny, advise, insist).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Reporting Verbs: Precision Beyond "Said"',
          subtitle: 'Say vs. Tell, plus powerful reporting verbs: suggested, promised, explained, advised.',
          conceptSummary: 'Instead of overusing "said", sophisticated English uses nuanced reporting verbs that capture the speaker\'s exact tone and intent. The fundamental rule: "TELL" requires a personal object (told ME), while "SAY" does not (said THAT).',
          visualGraphic: {
            heroSentence: 'Wrong: She said me that... → Correct: She told me that... / She said that...',
            highlights: [
              { word: 'told me that', role: 'TELL + Person Object + that', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'said that', role: 'SAY + that (NO personal object)', color: 'bg-blue-100 text-blue-800 border-blue-300' }
            ],
            caption: 'Tell + Person (told him). Say + that (said that). Never "said to me that" in modern English.'
          },
          keyTakeaways: [
            'Say: say (that) ... / say something TO someone.',
            'Tell: tell SOMEONE (that) ... (always requires personal object: told him, told us).',
            'Verb + to-infinitive: agree, offer, promise, refuse, threaten (He offered to help).',
            'Verb + person + to-infinitive: advise, encourage, invite, remind, warn (She advised us to wait).',
            'Verb + -ing: admit, deny, recommend, suggest (He suggested postponing the event).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Varied Reporting Verbs Matter',
          subtitle: 'Elevates mundane summaries into insightful, high-impact business communication.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Summaries',
              example: '"The consultant recommended upgrading the infrastructure rather than patching existing servers."',
              whyNeeded: '"Recommended" conveys professional advice far more effectively than "said".'
            }
          ],
          coachTip: 'Never say "He suggested me to..."—say "He suggested THAT I..." or "He suggested DOING..."!'
        },
        {
          type: 'explanation',
          title: 'Reporting Verb Grammar Patterns',
          subtitle: 'The 4 major verb complement patterns.',
          coreRule: 'Match each reporting verb to its required grammatical pattern (to-infinitive, gerund, or that-clause).',
          breakdown: [
            { term: 'Pattern 1: Verb + (that) Clause', plainDefinition: 'explain, state, claim, admit, promise', simpleExample: 'The CFO explained that revenues had grown by 15%.' },
            { term: 'Pattern 2: Verb + Person + to + Verb', plainDefinition: 'advise, remind, warn, encourage, order', simpleExample: 'She reminded us to submit the invoices on time.' },
            { term: 'Pattern 3: Verb + to + Verb', plainDefinition: 'promise, agree, offer, refuse, threaten', simpleExample: 'They agreed to sign the nondisclosure agreement.' },
            { term: 'Pattern 4: Verb + -ing (Gerund)', plainDefinition: 'suggest, recommend, deny, admit', simpleExample: 'He suggested revising the third chapter.' }
          ]
        },
        {
          type: 'formula',
          title: 'Reporting Verb Formulas',
          subtitle: '[Subject] + [told + Person / said] + [that clause] OR [Subject] + [advised + Person + to Verb]',
          formulaBlocks: [
            { label: 'Tell Pattern', part: 'The engineer told the manager that the code was ready', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Advise Pattern', part: 'The consultant advised the board to proceed with caution', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The CEO promised', verbOrAux: 'to deliver', objectOrComplement: 'shareholder value this fiscal year', fullSentence: 'The CEO promised to deliver shareholder value this fiscal year.', context: 'Corporate' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Reporting Verbs in Action',
          subtitle: 'Business briefings and team negotiations.',
          examples: [
            { id: 'rv_ex1', category: 'work', categoryLabel: 'Board Debrief', sentence: 'The external auditor recommended streamlining internal compliance workflows.', breakdownNote: '"recommended streamlining" uses the verb + gerund reporting pattern.', speakerRole: 'Managing Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Said Me" and "Suggest To" Errors',
          subtitle: 'Using "said me" or "suggested me to do".',
          mistakes: [
            {
              id: 'rv_m1',
              incorrect: 'He said me that he was tired.',
              correct: 'He told me that he was tired. / He said that he was tired.',
              explanation: '"Say" cannot take an immediate personal object without "to". Use "told me" instead.',
              ruleTag: 'Tell vs Say'
            },
            {
              id: 'rv_m2',
              incorrect: 'She suggested me to take a break.',
              correct: 'She suggested that I take a break. / She suggested taking a break.',
              explanation: '"Suggest" does NOT follow the pattern "suggest someone to do". Use "suggest that" or "suggest + -ing".',
              ruleTag: 'Suggest Grammar Pattern'
            }
          ],
          rememberRule: 'Say "He told me" (not "He said me") and "He suggested that I go" (not "He suggested me to go")!'
        },
        {
          type: 'practice',
          title: 'Reporting Verbs Practice',
          subtitle: 'Select the right reporting verb structure.',
          questions: [
            {
              id: 'rv_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb requiring an immediate personal object:',
              sentenceWithBlank: 'The doctor ___ the patient to get at least eight hours of sleep.',
              options: ['advised', 'suggested', 'said'],
              correctIndex: 0,
              grammarFocus: 'Advise + person + to verb',
              whyExplanation: '"Advise" fits the pattern: [advised] + [the patient] + [to get]. "Suggested" and "said" do not follow this pattern.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l11_t5_indirect_questions_requests',
      moduleId: 11,
      title: 'Indirect Questions and Requests',
      shortDesc: 'Reported questions (asked if/whether, asked where + normal word order), and reported imperatives (told/asked to do).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Indirect Questions & Requests: Word Order Shift',
          subtitle: 'Eliminating auxiliary inversion and using "to-infinitive" for commands.',
          conceptSummary: 'When reporting questions, word order reverts to normal statement order (Subject + Verb), and auxiliary "do/did" is eliminated! For Yes/No questions, use IF or WHETHER. For commands and requests, use ASKED / TOLD + PERSON + TO-INFINITIVE.',
          visualGraphic: {
            heroSentence: 'Direct: "Where do you live?" → Indirect: She asked where I lived (NO "did" / Normal word order).',
            highlights: [
              { word: '"Where do you live?"', role: 'Direct Question (Auxiliary do + Subject + Verb)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'asked where I lived', role: 'Reported Question (Question word + Subject + Backshifted Verb)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'In indirect questions: NO question mark, NO auxiliary do/did, Subject comes BEFORE the Verb!'
          },
          keyTakeaways: [
            'Yes/No questions: use IF or WHETHER ("He asked if I was attending").',
            'Wh- questions: keep the question word + Subject + Verb ("She asked where the station was").',
            'Eliminate auxiliary do/does/did: ("Where did you go?" → "He asked where I had gone").',
            'Commands & Requests: asked / told + someone + TO + base verb ("Please sit down" → "He asked us to sit down").',
            'Negative commands: told + someone + NOT TO + base verb ("Don\'t touch" → "He told us not to touch").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Indirect Question Order Matters',
          subtitle: 'The #1 error made on English proficiency exams and in professional diplomacy.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Inquiries',
              example: '"Could you tell me what the estimated cost is? (NOT what is the cost)."',
              whyNeeded: 'Using embedded statement word order maintains courteous diplomacy.'
            }
          ],
          coachTip: 'Never invert in indirect questions: say "She asked what I WANTED", NOT "She asked what did I want"!'
        },
        {
          type: 'explanation',
          title: 'Indirect Question & Command Formulas',
          subtitle: 'Word order breakdown for all question and request types.',
          coreRule: 'Reported questions follow standard declarative word order: [Reporting Verb] + [Wh- / if] + [Subject] + [Verb].',
          breakdown: [
            { term: 'Wh- Questions', plainDefinition: 'Wh- word + Subject + Verb', simpleExample: 'Direct: "When will we start?" → Indirect: He asked when we would start.' },
            { term: 'Yes/No Questions', plainDefinition: 'If / Whether + Subject + Verb', simpleExample: 'Direct: "Are you ready?" → Indirect: She asked if I was ready.' },
            { term: 'Positive Requests', plainDefinition: 'Asked / Told + person + TO verb', simpleExample: 'Direct: "Please send the file" → She asked me to send the file.' },
            { term: 'Negative Requests', plainDefinition: 'Told / Warned + person + NOT TO verb', simpleExample: 'Direct: "Don\'t forget your badge" → He reminded me not to forget my badge.' }
          ]
        },
        {
          type: 'formula',
          title: 'Reported Question Formula',
          subtitle: '[Subject] + [asked (someone)] + [if / wh- word] + [Subject] + [Verb]',
          formulaBlocks: [
            { label: 'Reporting', part: 'The interviewer asked', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Connector', part: 'why / if', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Statement Order', part: 'I had chosen this career path.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: '"Where is the file?"', verbOrAux: '→', objectOrComplement: 'She asked where the file was.', fullSentence: 'She asked where the file was.', context: 'Wh- Question' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Indirect Questions in Daily Life',
          subtitle: 'Interviews and customer service inquiries.',
          examples: [
            { id: 'iqr_ex1', category: 'work', categoryLabel: 'Job Interview', sentence: 'The hiring manager asked if I had experience managing distributed remote teams.', breakdownNote: '"asked if I had" uses statement word order and backshifted past perfect.', speakerRole: 'Candidate' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Auxiliary Inversion Error in Reported Questions',
          subtitle: 'Keeping question inversion (*She asked where was the hotel).',
          mistakes: [
            {
              id: 'iqr_m1',
              incorrect: 'She asked me where was the meeting room.',
              correct: 'She asked me where the meeting room was.',
              explanation: 'In reported questions, word order is Subject first, then Verb: "where [the meeting room] [was]".',
              ruleTag: 'Reported Question Word Order'
            },
            {
              id: 'iqr_m2',
              incorrect: 'He told me to don\'t touch the equipment.',
              correct: 'He told me not to touch the equipment.',
              explanation: 'Negative reported commands use "not to + verb", never "to don\'t".',
              ruleTag: 'Negative Command: Not to Do'
            }
          ],
          rememberRule: 'In reported questions: Subject comes before the verb (where the room was)! Negative command: "not to do"!'
        },
        {
          type: 'practice',
          title: 'Indirect Questions Practice',
          subtitle: 'Select the correct statement word order for reported questions.',
          questions: [
            {
              id: 'iqr_q1',
              type: 'sentence_correction',
              prompt: 'Choose the grammatically correct reported question:',
              incorrectSentence: 'He asked me where did I buy this laptop.',
              correctSentence: 'He asked me where I had bought that laptop.',
              errorHighlight: 'where did I buy this',
              options: [
                'He asked me where I had bought that laptop.',
                'He asked me where did I buy this laptop.',
                'He asked me where had I bought that laptop.'
              ],
              correctIndex: 0,
              whyExplanation: 'Eliminate auxiliary "did", restore statement word order ("I had bought"), and shift "this" to "that".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
