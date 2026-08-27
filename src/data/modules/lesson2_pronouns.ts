import { Module } from '../../types';

export const lesson2Pronouns: Module = {
  id: 2,
  title: 'Lesson 2: Pronouns',
  tagline: 'Replacing Nouns with Precision and Flow',
  description: 'Master all major pronoun families: Personal (Subject/Object), Reflexive, Possessive, Demonstrative, Interrogative, and Indefinite Pronouns.',
  iconName: 'Users',
  color: 'from-emerald-600 to-teal-600',
  topics: [
    {
      id: 'l2_t1_personal_pronouns',
      moduleId: 2,
      title: 'Personal Pronouns',
      shortDesc: 'Subject pronouns (I, you, he, she, it, we, they) vs. Object pronouns (me, you, him, her, it, us, them).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Subject vs. Object Personal Pronouns',
          subtitle: 'Choose the right pronoun depending on whether it does the action or receives it.',
          conceptSummary: 'Personal pronouns represent specific people or things. Subject pronouns (I, you, he, she, it, we, they) perform actions; Object pronouns (me, you, him, her, it, us, them) receive actions.',
          visualGraphic: {
            heroSentence: 'She invited him to join us for lunch.',
            highlights: [
              { word: 'She', role: 'Subject Pronoun (Doer)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'him', role: 'Object Pronoun (Receiver)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'us', role: 'Object of Preposition', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Subject pronouns go before verbs; object pronouns follow verbs and prepositions.'
          },
          keyTakeaways: [
            'Subject pronouns: I, you, he, she, it, we, they (He called me).',
            'Object pronouns: me, you, him, her, it, us, them (She called him).',
            'Always use object pronouns after prepositions (with me, for us, to them).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Pronoun Case Matters',
          subtitle: 'Avoid awkward phrasing like "between you and I" in interviews and meetings.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Job Interviews',
              example: '"My manager and I completed the rollout."',
              whyNeeded: 'Using "My manager and I" (subject) instead of "Me and my manager" displays strong professional literacy.'
            }
          ],
          coachTip: 'Quick test: Remove the other person. You would say "I completed the rollout", not "Me completed the rollout"!'
        },
        {
          type: 'explanation',
          title: 'Personal Pronoun Chart',
          subtitle: 'Subject, Object, and Preposition usage.',
          coreRule: 'If the pronoun is performing the action, use Subject form. If receiving the action or following a preposition, use Object form.',
          breakdown: [
            { term: '1st Person Singular', plainDefinition: 'Speaking about yourself', simpleExample: 'Subject: I / Object: me' },
            { term: '2nd Person', plainDefinition: 'Speaking to another person/people', simpleExample: 'Subject: you / Object: you' },
            { term: '3rd Person Singular', plainDefinition: 'Speaking about a male, female, or object', simpleExample: 'Subject: he, she, it / Object: him, her, it' },
            { term: '1st & 3rd Plural', plainDefinition: 'Speaking about groups', simpleExample: 'Subject: we, they / Object: us, them' }
          ]
        },
        {
          type: 'formula',
          title: 'Pronoun Placement Formula',
          subtitle: '[Subject Pronoun] + [Verb] + [Object Pronoun] + [Preposition] + [Object Pronoun]',
          formulaBlocks: [
            { label: 'Subject', part: 'We / They / She', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Verb', part: 'emailed / called / thanked', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Object', part: 'him / her / them', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'They', verbOrAux: 'consulted', objectOrComplement: 'us yesterday', fullSentence: 'They consulted us yesterday.', context: 'Workplace' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Everyday Dialogue with Personal Pronouns',
          subtitle: 'Clear, natural communication.',
          examples: [
            { id: 'pp_ex1', category: 'work', categoryLabel: 'Office Chat', sentence: 'Could you please forward the contract to him and me?', breakdownNote: '"him and me" are objects of preposition "to".', speakerRole: 'Team Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Personal Pronoun Errors',
          subtitle: 'The famous "between you and I" error.',
          mistakes: [
            {
              id: 'ppm1',
              incorrect: 'This is a secret between you and I.',
              correct: 'This is a secret between you and me.',
              explanation: '"Between" is a preposition, so both pronouns must be in the object form ("you and me").',
              ruleTag: 'Preposition + Object Pronoun'
            }
          ],
          rememberRule: 'Prepositions (to, with, for, between, about) are ALWAYS followed by object pronouns (me, him, her, us, them)!'
        },
        {
          type: 'practice',
          title: 'Personal Pronouns Practice',
          subtitle: 'Select the grammatically correct pronoun.',
          questions: [
            {
              id: 'ppq1',
              type: 'fill_blank',
              prompt: 'Choose the correct pronoun to complete the sentence:',
              sentenceWithBlank: 'The supervisor asked ___ to prepare the presentation.',
              options: ['her', 'she', 'hers'],
              correctIndex: 0,
              grammarFocus: 'Object pronoun after verb',
              whyExplanation: '"asked" is a verb, so the object pronoun "her" is required.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l2_t2_reflexive_pronouns',
      moduleId: 2,
      title: 'Reflexive Pronouns',
      shortDesc: 'myself, yourself, himself, herself, itself, ourselves, yourselves, themselves.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Reflexive Pronouns: Actions Bouncing Back',
          subtitle: 'When the subject and object are the exact same entity.',
          conceptSummary: 'Reflexive pronouns (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves) are used when the person doing the action is also the one receiving it.',
          visualGraphic: {
            heroSentence: 'David introduced himself to the new team.',
            highlights: [
              { word: 'David', role: 'Subject (Doer)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'himself', role: 'Reflexive Object (Same Person)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Use a reflexive pronoun when Subject = Object.'
          },
          keyTakeaways: [
            'Singular: myself, yourself, himself, herself, itself.',
            'Plural: ourselves, yourselves, themselves (never "theirselves"!).',
            'Also used for emphasis (intensive pronouns): "The CEO herself signed the contract."'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Reflexive Pronouns Matter',
          subtitle: 'Avoid the common business email error of misusing "myself".',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Email Sign-offs',
              example: '"Please contact John or me (NOT myself) if you have questions."',
              whyNeeded: 'Misusing "myself" in formal emails is a very common marker of false formality.'
            }
          ],
          coachTip: 'Do not use "myself" unless "I" was already the subject of the sentence!'
        },
        {
          type: 'explanation',
          title: 'Reflexive vs. Intensive Usage',
          subtitle: 'Two distinct ways we use -self words in English.',
          coreRule: 'Reflexive is essential for meaning when Subject=Object. Intensive adds dramatic emphasis and can be removed without breaking grammar.',
          breakdown: [
            { term: 'Reflexive (Essential)', plainDefinition: 'Action turns back onto subject', simpleExample: 'She taught herself how to code.' },
            { term: 'Intensive (Emphasis)', plainDefinition: 'Emphasizes that the subject did it personally', simpleExample: 'I baked the bread myself! (I personally baked it)' },
            { term: 'By + Reflexive', plainDefinition: 'Means "alone" or "without help"', simpleExample: 'He lives by himself. / They traveled by themselves.' }
          ]
        },
        {
          type: 'formula',
          title: 'Reflexive Structure Formula',
          subtitle: 'Subject + Verb + [Reflexive Pronoun]',
          formulaBlocks: [
            { label: 'Subject', part: 'They / She / We', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Verb', part: 'prepared / congratulated / helped', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Reflexive', part: 'themselves / herself / ourselves', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We', verbOrAux: 'reminded', objectOrComplement: 'ourselves to stay calm', fullSentence: 'We reminded ourselves to stay calm.', context: 'Meeting' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Reflexive Expressions in Daily Life',
          subtitle: 'Common idioms and conversational phrases.',
          examples: [
            { id: 'ref_ex1', category: 'restaurant', categoryLabel: 'Buffet / Dinner', sentence: 'Please help yourselves to the refreshments, everyone!', breakdownNote: '"yourselves" (plural) used politely to invite guests.', speakerRole: 'Host' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Reflexive Pronoun Mistakes',
          subtitle: 'The incorrect substitution of myself for me.',
          mistakes: [
            {
              id: 'refm1',
              incorrect: 'Please send the documents to Sarah and myself.',
              correct: 'Please send the documents to Sarah and me.',
              explanation: '"Myself" cannot be an object unless "I" is the subject. Say "to Sarah and me".',
              ruleTag: 'Misused Reflexive'
            },
            {
              id: 'refm2',
              incorrect: 'They did it theirselves.',
              correct: 'They did it themselves.',
              explanation: '"Theirselves" is not a word in standard English; use "themselves".',
              ruleTag: 'Spelling Form'
            }
          ],
          rememberRule: 'Only use myself when you are already doing the action (e.g., "I cut myself")!'
        },
        {
          type: 'practice',
          title: 'Reflexive Pronouns Practice',
          subtitle: 'Fill in the correct reflexive form.',
          questions: [
            {
              id: 'refq1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct reflexive pronoun:',
              sentenceWithBlank: 'The students organized the entire charity event by ___.',
              options: ['themselves', 'theirselves', 'themself'],
              correctIndex: 0,
              grammarFocus: '3rd person plural reflexive',
              whyExplanation: '"themselves" is the only correct standard 3rd person plural reflexive pronoun.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l2_t3_possessive_pronouns',
      moduleId: 2,
      title: 'Possessive Pronouns',
      shortDesc: 'mine, yours, his, hers, its, ours, theirs (Never with apostrophes!).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Possessive Pronouns: Independent Ownership',
          subtitle: 'Replacing "possessive adjective + noun" with a single strong word.',
          conceptSummary: 'Possessive pronouns (mine, yours, his, hers, ours, theirs) replace a possessive adjective + noun to avoid repetition. For example, "This is my jacket" → "This is mine".',
          visualGraphic: {
            heroSentence: 'This seat is mine, and that one is yours.',
            highlights: [
              { word: 'mine', role: 'Possessive Pronoun (= my seat)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'yours', role: 'Possessive Pronoun (= your seat)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Possessive pronouns stand completely alone without a following noun.'
          },
          keyTakeaways: [
            'Possessive Adjectives + Noun: my car, your phone, her idea, our team.',
            'Possessive Pronouns (Stand Alone): mine, yours, hers, ours, theirs.',
            'CRITICAL: Possessive pronouns NEVER contain an apostrophe (yours, NOT your\'s).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Possessive Pronouns Matter',
          subtitle: 'Makes spoken and written English concise, elegant, and repetition-free.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Office Desk Setup',
              example: '"Is this laptop yours or hers?"',
              whyNeeded: 'Quickly clarifies ownership without repeating "your laptop" or "her laptop".'
            }
          ],
          coachTip: 'Notice: "its" (possessive) has NO apostrophe. "It\'s" means "it is"!'
        },
        {
          type: 'explanation',
          title: 'Possessive Adjectives vs. Possessive Pronouns',
          subtitle: 'Compare the two columns side by side.',
          coreRule: 'Possessive adjectives MUST be followed by a noun. Possessive pronouns REPLACE the noun completely.',
          breakdown: [
            { term: 'my → mine', plainDefinition: '1st person singular', simpleExample: 'That is my coat. → That is mine.' },
            { term: 'your → yours', plainDefinition: '2nd person', simpleExample: 'Is this your key? → Is this yours?' },
            { term: 'his / her → his / hers', plainDefinition: '3rd person singular', simpleExample: 'Her car is red. → Hers is red.' },
            { term: 'our / their → ours / theirs', plainDefinition: '1st & 3rd plural', simpleExample: 'Their office is on level 4. → Theirs is on level 4.' }
          ]
        },
        {
          type: 'formula',
          title: 'Possessive Pronoun Sentence Formula',
          subtitle: '[Subject / Demonstrative] + [BE Verb] + [Possessive Pronoun]',
          formulaBlocks: [
            { label: 'Demonstrative / Noun', part: 'The choice / That luggage', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'BE Verb', part: 'is / was / are', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Possessive Pronoun', part: 'yours / ours / mine / theirs', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The final decision', verbOrAux: 'is', objectOrComplement: 'yours', fullSentence: 'The final decision is yours.', context: 'Consultation' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Daily Ownership Scenarios',
          subtitle: 'Everyday conversations in shops, homes, and transit.',
          examples: [
            { id: 'possp_ex1', category: 'travel', categoryLabel: 'Baggage Claim', sentence: 'Excuse me, I believe this black suitcase is mine, and that one is theirs.', breakdownNote: '"mine" and "theirs" replace repeated "my suitcase" and "their suitcase".', speakerRole: 'Passenger' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The #1 Possessive Pronoun Mistake',
          subtitle: 'Adding apostrophes to possessive pronouns.',
          mistakes: [
            {
              id: 'ppm_m1',
              incorrect: 'Is this pen your\'s or her\'s?',
              correct: 'Is this pen yours or hers?',
              explanation: 'Possessive pronouns NEVER use apostrophes (yours, hers, ours, theirs, its).',
              ruleTag: 'Apostrophe in Pronouns'
            }
          ],
          rememberRule: 'Never put an apostrophe in yours, hers, ours, theirs, or its!'
        },
        {
          type: 'practice',
          title: 'Possessive Pronouns Practice',
          subtitle: 'Select the correct standalone possessive pronoun.',
          questions: [
            {
              id: 'possp_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct possessive pronoun:',
              sentenceWithBlank: 'We submitted our proposal, and they just submitted ___.',
              options: ['theirs', 'their\'s', 'their'],
              correctIndex: 0,
              grammarFocus: 'Standalone possessive pronoun',
              whyExplanation: '"theirs" (with no apostrophe) is the correct possessive pronoun replacing "their proposal".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l2_t4_demonstrative_pronouns',
      moduleId: 2,
      title: 'Demonstrative Pronouns',
      shortDesc: 'this, that, these, those (Near vs. Far, Singular vs. Plural).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Demonstrative Pronouns: Pointing Out Things',
          subtitle: 'Using this, that, these, and those to identify specific items in space and time.',
          conceptSummary: 'Demonstrative pronouns point directly to specific things. We use "this" and "these" for things nearby in distance or time; we use "that" and "those" for things farther away.',
          visualGraphic: {
            heroSentence: 'This is my favorite photo, but that was taken years ago.',
            highlights: [
              { word: 'This', role: 'Near Singular', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'that', role: 'Far / Past Singular', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Distance: This (near) vs. That (far). Quantity: This/That (singular) vs. These/Those (plural).'
          },
          keyTakeaways: [
            'Near singular: THIS (This is great).',
            'Far singular: THAT (That is expensive).',
            'Near plural: THESE (These are my keys).',
            'Far plural: THOSE (Those are mountains).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Demonstratives Matter',
          subtitle: 'Essential for phone etiquette, restaurant ordering, and presentations.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Phone Calls',
              example: '"Hello, this is Maria calling from the marketing team."',
              whyNeeded: 'In English phone calls, always say "This is [Name]", NEVER "I am [Name]".'
            }
          ],
          coachTip: 'On the telephone: "This is John" (who is speaking) and "Is that Susan?" (who is listening).'
        },
        {
          type: 'explanation',
          title: 'Demonstrative Grid',
          subtitle: 'Distance by Quantity Matrix.',
          coreRule: 'Match distance (here vs. there) with number (singular vs. plural).',
          breakdown: [
            { term: 'This (Singular / Near)', plainDefinition: 'Close in physical space or current moment', simpleExample: 'This is delicious! / This is my colleague Alex.' },
            { term: 'That (Singular / Far)', plainDefinition: 'Distant in space, past event, or on the phone', simpleExample: 'That was an amazing concert. / Is that you?' },
            { term: 'These (Plural / Near)', plainDefinition: 'Multiple objects close by', simpleExample: 'These are the latest sales numbers.' },
            { term: 'Those (Plural / Far)', plainDefinition: 'Multiple objects at a distance or in the past', simpleExample: 'Those were the best days of our project.' }
          ]
        },
        {
          type: 'formula',
          title: 'Demonstrative Pronoun Formula',
          subtitle: 'Demonstrative Pronoun + BE Verb + Complement',
          formulaBlocks: [
            { label: 'Demonstrative', part: 'This / That / These / Those', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'BE Verb Match', part: 'is / was / are / were', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Complement', part: 'my coat / incredible / our goals', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'These', verbOrAux: 'are', objectOrComplement: 'the files you requested', fullSentence: 'These are the files you requested.', context: 'Office' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Demonstratives in Real Situations',
          subtitle: 'Demonstratives in shopping and presentations.',
          examples: [
            { id: 'dem_ex1', category: 'shopping', categoryLabel: 'Store Purchase', sentence: 'I like this, but those over there look much sturdier.', breakdownNote: '"this" (item in hand) and "those" (items on far shelf).', speakerRole: 'Customer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Demonstrative Agreement Errors',
          subtitle: 'Mismatching singular/plural verbs with demonstratives.',
          mistakes: [
            {
              id: 'dem_m1',
              incorrect: 'These is my new shoes.',
              correct: 'These are my new shoes.',
              explanation: '"These" is plural, so it must agree with the plural verb "are".',
              ruleTag: 'Demonstrative Verb Agreement'
            }
          ],
          rememberRule: 'Pair this/that with is/was; pair these/those with are/were!'
        },
        {
          type: 'practice',
          title: 'Demonstrative Pronouns Practice',
          subtitle: 'Select the right demonstrative pronoun.',
          questions: [
            {
              id: 'dem_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank for someone holding several documents right now:',
              sentenceWithBlank: '___ are the financial invoices from this morning.',
              options: ['These', 'This', 'That'],
              correctIndex: 0,
              grammarFocus: 'Near plural demonstrative',
              whyExplanation: 'Multiple items in hand require the near plural "These".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l2_t5_interrogative_pronouns',
      moduleId: 2,
      title: 'Interrogative Pronouns',
      shortDesc: 'who, whom, whose, what, which (Forming clear questions).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Interrogative Pronouns: Asking Questions',
          subtitle: 'Words used to pose direct and indirect inquiries.',
          conceptSummary: 'Interrogative pronouns (who, whom, whose, what, which) are used to ask questions. They stand in place of the unknown answer.',
          visualGraphic: {
            heroSentence: 'Who called you, and which of the two options did you choose?',
            highlights: [
              { word: 'Who', role: 'Asking for Subject Person', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'which', role: 'Asking from a Limited Choice', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Interrogative pronouns represent the missing information you seek.'
          },
          keyTakeaways: [
            'Who: Asks about a person (Subject: Who wrote this?).',
            'Whom: Asks about a person receiving an action (Formal object: To whom did you speak?).',
            'Whose: Asks about ownership (Whose bag is this?).',
            'What: Asks about things or general information (What is your name?).',
            'Which: Asks for a choice among a limited set (Which of these colors do you prefer?).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Question Pronouns Matter',
          subtitle: 'Enables precise information gathering at work and in daily conversations.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Briefings',
              example: '"Which software package best fits your team\'s workflow?"',
              whyNeeded: '"Which" shows you have a specific defined set of choices in mind.'
            }
          ],
          coachTip: 'Use "which" when choices are limited (e.g. 3 cars); use "what" when choices are unlimited.'
        },
        {
          type: 'explanation',
          title: 'Interrogative Functions Breakdown',
          subtitle: 'Detailed usage of Who, Whom, Whose, What, and Which.',
          coreRule: 'Identify whether you are asking about people, possession, general things, or a specific selection.',
          breakdown: [
            { term: 'Who (Subject)', plainDefinition: 'Asking about the person doing the action', simpleExample: 'Who approved this invoice?' },
            { term: 'Whom (Object)', plainDefinition: 'Asking about the person receiving the action', simpleExample: 'Whom should I invite? / With whom did you meet?' },
            { term: 'Whose (Possession)', plainDefinition: 'Asking who owns something', simpleExample: 'Whose coat is left on the chair?' },
            { term: 'What vs. Which', plainDefinition: 'Open inquiry vs. Defined selection', simpleExample: 'What do you do? vs. Which train is faster?' }
          ]
        },
        {
          type: 'formula',
          title: 'Interrogative Question Formula',
          subtitle: '[Interrogative Pronoun] + [Auxiliary Verb] + [Subject] + [Main Verb]?',
          formulaBlocks: [
            { label: 'Interrogative', part: 'What / Which / Who', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Auxiliary', part: 'did / will / do', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Subject + Verb', part: 'you decide / they recommend', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'What', verbOrAux: 'did you', objectOrComplement: 'discuss in the meeting', fullSentence: 'What did you discuss in the meeting?', context: 'Work' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Questions in Daily Contexts',
          subtitle: 'Professional and social inquiries.',
          examples: [
            { id: 'int_ex1', category: 'travel', categoryLabel: 'Train Station', sentence: 'Which of these platforms goes directly to Heathrow Airport?', breakdownNote: '"Which" asks for one choice from visible platforms.', speakerRole: 'Traveler' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Who\'s vs. Whose Confusion',
          subtitle: 'Avoid mixing up contraction and possessive interrogative.',
          mistakes: [
            {
              id: 'int_m1',
              incorrect: 'Who\'s laptop is left in the conference room?',
              correct: 'Whose laptop is left in the conference room?',
              explanation: '"Who\'s" means "who is". For ownership, always use "Whose".',
              ruleTag: 'Who\'s vs Whose'
            }
          ],
          rememberRule: 'Whose = possession; Who\'s = who is / who has!'
        },
        {
          type: 'practice',
          title: 'Interrogative Pronouns Practice',
          subtitle: 'Pick the correct question word.',
          questions: [
            {
              id: 'int_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank to ask about ownership of an umbrella:',
              sentenceWithBlank: '___ umbrella is this on the coat rack?',
              options: ['Whose', 'Who\'s', 'Whom'],
              correctIndex: 0,
              grammarFocus: 'Possessive interrogative',
              whyExplanation: '"Whose" asks about ownership; "Who\'s" is the contraction for "Who is".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l2_t6_indefinite_pronouns',
      moduleId: 2,
      title: 'Indefinite Pronouns',
      shortDesc: 'everyone, someone, nobody, everything, anything, both, several, all.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Indefinite Pronouns: Non-Specific Entities',
          subtitle: 'Referring to people or things without stating exactly who or what they are.',
          conceptSummary: 'Indefinite pronouns (everyone, someone, nobody, anything, each, all, several) refer to unspecified people, things, or amounts. Crucially, singular indefinite pronouns take singular verbs!',
          visualGraphic: {
            heroSentence: 'Everyone has arrived, but nobody knows the secret.',
            highlights: [
              { word: 'Everyone', role: 'Singular Indefinite Pronoun', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'has arrived', role: 'Singular Verb Agreement', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'nobody knows', role: 'Singular Verb (-s)', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Pronouns ending in -body, -one, or -thing are ALWAYS grammatically singular.'
          },
          keyTakeaways: [
            'Singular indefinite pronouns: everyone, somebody, nobody, anything, each, either.',
            'Plural indefinite pronouns: both, few, many, several.',
            'Variable (Singular or Plural depending on context): all, any, more, most, some, none.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Indefinite Agreement Matters',
          subtitle: 'Subject-verb agreement with "everyone" is one of the top grammar test topics.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Staff Announcements',
              example: '"Everyone is invited to the celebration."',
              whyNeeded: 'Saying "Everyone are invited" is instantly noticed as incorrect by native speakers.'
            }
          ],
          coachTip: 'Think: "Every single one is..." (singular!)'
        },
        {
          type: 'explanation',
          title: 'Singular vs. Plural Indefinite Pronouns',
          subtitle: 'The complete categorization breakdown.',
          coreRule: 'All -one, -body, -thing pronouns take singular verbs (is, has, does, verb+s).',
          breakdown: [
            { term: 'Singular (Take singular verbs)', plainDefinition: 'Each, everyone, everybody, everything, someone, somebody, something, no one, nobody, nothing, anyone, anybody, anything', simpleExample: 'Each of the participants was given a badge.' },
            { term: 'Plural (Take plural verbs)', plainDefinition: 'Both, few, fewer, many, others, several', simpleExample: 'Several of our colleagues were promoted.' },
            { term: 'Singular or Plural (SANAM)', plainDefinition: 'Some, All, None, Any, Most (Look at the noun in the "of" phrase)', simpleExample: 'Some of the cake is gone (uncountable) / Some of the cookies are gone (plural).' }
          ]
        },
        {
          type: 'formula',
          title: 'Indefinite Pronoun Agreement Formula',
          subtitle: '[Singular Indefinite Pronoun] + [Singular Verb (is / has / verb+s)]',
          formulaBlocks: [
            { label: 'Indefinite Subject', part: 'Everybody / Somebody / Nothing', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Singular Verb', part: 'is ready / wants / has finished', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Nobody', verbOrAux: 'understands', objectOrComplement: 'the error code', fullSentence: 'Nobody understands the error code.', context: 'IT Support' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Indefinites in Daily Dialogue',
          subtitle: 'Workplace and social scenarios.',
          examples: [
            { id: 'ind_ex1', category: 'work', categoryLabel: 'Meeting Room', sentence: 'Has everyone received a copy of the quarterly agenda?', breakdownNote: '"Has everyone received" - singular auxiliary "Has" matching "everyone".', speakerRole: 'Chairperson' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Indefinite Agreement Errors',
          subtitle: 'Using plural verbs with everyone or each.',
          mistakes: [
            {
              id: 'ind_m1',
              incorrect: 'Everyone in our office are working from home today.',
              correct: 'Everyone in our office is working from home today.',
              explanation: '"Everyone" is grammatically singular and requires the singular verb "is".',
              ruleTag: 'Indefinite Subject-Verb Agreement'
            }
          ],
          rememberRule: 'Everyone, everybody, someone, and nobody ALWAYS take singular verbs!'
        },
        {
          type: 'practice',
          title: 'Indefinite Pronouns Practice',
          subtitle: 'Choose the correct verb form for each indefinite pronoun.',
          questions: [
            {
              id: 'ind_q1',
              type: 'fill_blank',
              prompt: 'Select the correct verb to complete the statement:',
              sentenceWithBlank: 'Each of the applicants ___ required to submit two references.',
              options: ['is', 'are', 'were'],
              correctIndex: 0,
              grammarFocus: 'Singular indefinite pronoun agreement',
              whyExplanation: '"Each" is a singular pronoun, so it takes the singular verb "is".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
