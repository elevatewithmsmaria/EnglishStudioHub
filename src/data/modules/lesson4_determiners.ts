import { Module } from '../../types';

export const lesson4Determiners: Module = {
  id: 4,
  title: 'Lesson 4: Determiners',
  tagline: 'Articles, Quantifiers, Demonstratives & Number Modifiers',
  description: 'Master Articles (a/an/the), Zero Article rules, Demonstrative & Quantifying Determiners, Interrogative & Possessive Determiners, Numbers, and Multi-Determiner Combinations.',
  iconName: 'PackageCheck',
  color: 'from-cyan-600 to-blue-600',
  topics: [
    {
      id: 'l4_t1_the_articles',
      moduleId: 4,
      title: 'The Articles',
      shortDesc: 'Indefinite articles (a, an) vs. Definite article (the).',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Articles: A, An, and The',
          subtitle: 'The small words that tell listeners whether a noun is specific or general.',
          conceptSummary: 'Articles are the most common determiners in English. "A" and "an" (indefinite) introduce non-specific singular countable items. "The" (definite) refers to a specific item both the speaker and listener know about.',
          visualGraphic: {
            heroSentence: 'I bought a laptop yesterday, and the laptop works perfectly.',
            highlights: [
              { word: 'a laptop', role: 'Indefinite (Introduced for 1st time)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'the laptop', role: 'Definite (Now specific & known)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'First mention: use A/AN. Second mention (now specific): use THE.'
          },
          keyTakeaways: [
            'Use "a" before consonant sounds: a doctor, a university, a European country.',
            'Use "an" before vowel sounds: an engineer, an honest mistake, an hour.',
            'Use "the" when both speaker and listener know which specific one is being discussed.',
            'Use "the" for unique entities in the world: the sun, the moon, the Internet, the sky.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Article Precision Matters',
          subtitle: 'Articles fundamentally alter the meaning of adult instructions.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Office Requests',
              example: '"Please pass me a pen (any pen) vs. Please pass me the pen (the specific red one we talked about)."',
              whyNeeded: 'Articles prevent miscommunication during collaborative tasks.'
            }
          ],
          coachTip: 'Sound rule: "an hour" has silent "h" (vowel sound); "a university" starts with "yu" (consonant sound)!'
        },
        {
          type: 'explanation',
          title: 'Definite vs. Indefinite Rules Breakdown',
          subtitle: 'Mastering the exact criteria for choosing A/An or The.',
          coreRule: 'If the listener can point to the exact item intended, use "the". If it is any general one, use "a/an".',
          breakdown: [
            { term: 'A / An (General / First mention)', plainDefinition: 'One of many; listener does not know specific one yet', simpleExample: 'She wants to buy a car.' },
            { term: 'The (Specific / Shared knowledge)', plainDefinition: 'Both parties know the exact item in context', simpleExample: 'Can you close the door? (the room\'s only door)' },
            { term: 'The with Superlatives', plainDefinition: 'Used with highest/lowest ranking', simpleExample: 'the best solution, the tallest building' },
            { term: 'The with Geography', plainDefinition: 'Rivers, oceans, mountain ranges, country unions', simpleExample: 'the Pacific Ocean, the United States, the Alps' }
          ]
        },
        {
          type: 'formula',
          title: 'Article Usage Formula',
          subtitle: '[A/An + Singular Countable Noun] vs. [The + Any Specific Noun]',
          formulaBlocks: [
            { label: 'Indefinite', part: 'a / an + singular count noun (a report)', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Definite', part: 'the + singular / plural / uncountable (the report, the reports, the data)', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We stayed at', verbOrAux: 'a', objectOrComplement: 'hotel near the beach', fullSentence: 'We stayed at a hotel near the beach.', context: 'Travel' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Articles in Daily Dialogue',
          subtitle: 'Real conversations from work, dining, and travel.',
          examples: [
            { id: 'art_ex1', category: 'restaurant', categoryLabel: 'Dining Out', sentence: 'Could you please bring us the bill when you have a moment?', breakdownNote: '"the bill" (specific check for this table) and "a moment" (any short time).', speakerRole: 'Guest' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Article Mistakes to Avoid',
          subtitle: 'Using "a" before plurals or vowel letters with consonant sounds.',
          mistakes: [
            {
              id: 'art_m1',
              incorrect: 'He gave me an useful advice.',
              correct: 'He gave me useful advice. / He gave me a piece of useful advice.',
              explanation: '"Advice" is uncountable (cannot take "a/an"), and "useful" starts with a "y" consonant sound anyway.',
              ruleTag: 'Uncountable Articles'
            }
          ],
          rememberRule: 'Never put "a" or "an" in front of uncountable or plural nouns!'
        },
        {
          type: 'practice',
          title: 'Articles Practice',
          subtitle: 'Choose between a, an, the, or no article.',
          questions: [
            {
              id: 'art_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct article:',
              sentenceWithBlank: 'It was ___ honor to meet the keynote speaker yesterday.',
              options: ['an', 'a', 'the a'],
              correctIndex: 0,
              grammarFocus: 'Silent H vowel sound',
              whyExplanation: '"Honor" begins with a silent "h", producing a vowel sound /ɒ/, which requires "an".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t2_nouns_without_articles',
      moduleId: 4,
      title: 'Using Nouns Without Articles',
      shortDesc: 'The "Zero Article" rule with general plurals, uncountables, meals, languages, and proper places.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The Zero Article: When to Use NO Article',
          subtitle: 'Knowing when leaving out "a" and "the" is the grammatically correct choice.',
          conceptSummary: 'In English, we do NOT use an article (Ø) when speaking about plural or uncountable nouns in general, names of languages, sports, academic subjects, and standard daily meals.',
          visualGraphic: {
            heroSentence: 'Teachers love coffee, and children love music.',
            highlights: [
              { word: 'Teachers', role: 'General Plural (No article Ø)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'coffee', role: 'General Uncountable (No article Ø)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'music', role: 'General Concept (No article Ø)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'When making broad general statements about all members of a group, omit the article.'
          },
          keyTakeaways: [
            'General Plural: "Elephants are intelligent" (NOT "The elephants are intelligent").',
            'General Uncountables: "Water is essential for life" (NOT "The water is essential").',
            'Meals & Sports: "Let\'s have breakfast", "She plays tennis" (No article).',
            'Languages & Subjects: "He speaks Spanish", "She studies mathematics" (No article).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Zero Article Mastery Matters',
          subtitle: 'The difference between talking about all things vs. specific things.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Business Philosophy',
              example: '"Customer satisfaction is our top priority (NOT The customer satisfaction)."',
              whyNeeded: 'Abstract business values always take the zero article.'
            }
          ],
          coachTip: 'Compare: "Life is short" (general concept Ø) vs. "The life of Steve Jobs" (specific life).'
        },
        {
          type: 'explanation',
          title: 'Zero Article Categories Breakdown',
          subtitle: 'Clear rules on when to omit the article.',
          coreRule: 'Do not use an article if the noun represents a generalized concept, sport, meal, language, or single geographic entity.',
          breakdown: [
            { term: 'General Plurals & Uncountables', plainDefinition: 'All instances in the world', simpleExample: 'Computers have changed society. / Milk contains calcium.' },
            { term: 'Meals & Routines', plainDefinition: 'Standard daily meals and regular transport', simpleExample: 'have lunch, eat dinner, travel by train, go to bed' },
            { term: 'Sports & Games', plainDefinition: 'Athletic activities and board games', simpleExample: 'play soccer, practice yoga, play chess' },
            { term: 'Institutions for Primary Purpose', plainDefinition: 'School, hospital, prison, church as institutions', simpleExample: 'She went to hospital (as a patient) vs. She visited the hospital (the building).' }
          ]
        },
        {
          type: 'formula',
          title: 'General vs. Specific Contrast Formula',
          subtitle: '[General Noun Ø] + [Verb] vs. [The] + [Specific Noun] + [Verb]',
          formulaBlocks: [
            { label: 'General (Zero Article)', part: 'Coffee gives you energy', color: 'bg-stone-100 text-stone-900 border-stone-300' },
            { label: 'Specific (The)', part: 'The coffee on the desk is hot', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Information', verbOrAux: 'is', objectOrComplement: 'valuable in business', fullSentence: 'Information is valuable in business.', context: 'General' },
            { subject: 'The information', verbOrAux: 'in this report is', objectOrComplement: 'accurate', fullSentence: 'The information in this report is accurate.', context: 'Specific' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Zero Article in Spoken English',
          subtitle: 'Everyday lifestyle conversations.',
          examples: [
            { id: 'za_ex1', category: 'home', categoryLabel: 'Weekend Plans', sentence: 'We usually have breakfast together and then play tennis in the afternoon.', breakdownNote: '"breakfast" (meal Ø) and "tennis" (sport Ø).', speakerRole: 'Friend' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Zero Article Mistakes',
          subtitle: 'Adding "the" to general statements.',
          mistakes: [
            {
              id: 'za_m1',
              incorrect: 'The life is full of unexpected surprises.',
              correct: 'Life is full of unexpected surprises.',
              explanation: '"Life" as a general philosophical concept takes the zero article.',
              ruleTag: 'General Noun Zero Article'
            }
          ],
          rememberRule: 'Do not put "the" before abstract general nouns (Life, Nature, Peace, Society)!'
        },
        {
          type: 'practice',
          title: 'Zero Article Practice',
          subtitle: 'Determine whether an article is needed or not.',
          questions: [
            {
              id: 'za_q1',
              type: 'multiple_choice',
              prompt: 'Which sentence correctly uses the zero article for a general truth?',
              options: [
                'Time is the most valuable commodity in life.',
                'The time is the most valuable commodity in the life.',
                'A time is a most valuable commodity in life.'
              ],
              correctIndex: 0,
              whyExplanation: 'General concepts like "Time" and "life" take no article in broad philosophical statements.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t3_demonstrative_determiners',
      moduleId: 4,
      title: 'Demonstrative Determiners',
      shortDesc: 'this car, that person, these files, those documents (Modifying nouns directly).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Demonstrative Determiners: Modifying Nouns',
          subtitle: 'Using this, that, these, and those directly in front of nouns.',
          conceptSummary: 'When "this", "that", "these", and "those" come directly BEFORE a noun, they function as demonstrative determiners. They specify which exact object or person is being identified.',
          visualGraphic: {
            heroSentence: 'Please review this report and file those documents.',
            highlights: [
              { word: 'this report', role: 'Near Singular Determiner + Noun', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'those documents', role: 'Far Plural Determiner + Noun', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Determiner + Noun modifies the noun directly.'
          },
          keyTakeaways: [
            'Demonstrative Determiner = This/That/These/Those + NOUN (e.g. this idea).',
            'Demonstrative Pronoun = Stands ALONE without a noun (e.g. This is good).',
            'Singular: this book, that car. Plural: these books, those cars.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Demonstrative Determiners Matter',
          subtitle: 'Crucial for precision in handling physical and digital assets.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Office Meetings',
              example: '"Please sign this contract on that dotted line."',
              whyNeeded: 'Directs the client\'s immediate attention to the exact paper and location.'
            }
          ],
          coachTip: 'Always match singular with singular (this method) and plural with plural (these methods)!'
        },
        {
          type: 'explanation',
          title: 'Demonstrative Determiner Usage Matrix',
          subtitle: 'Distance and Number breakdown.',
          coreRule: 'Ensure the demonstrative determiner agrees in number with the noun that immediately follows it.',
          breakdown: [
            { term: 'This + Singular Noun', plainDefinition: 'Close in physical space or current time', simpleExample: 'this week, this computer, this question' },
            { term: 'That + Singular Noun', plainDefinition: 'Farther away or in the past', simpleExample: 'that building, that meeting, that suggestion' },
            { term: 'These + Plural Noun', plainDefinition: 'Multiple items nearby or current', simpleExample: 'these slides, these figures, these employees' },
            { term: 'Those + Plural Noun', plainDefinition: 'Multiple items at a distance or past', simpleExample: 'those guidelines, those previous projects' }
          ]
        },
        {
          type: 'formula',
          title: 'Demonstrative Determiner Formula',
          subtitle: '[This / That / These / Those] + [Noun] + [Verb]',
          formulaBlocks: [
            { label: 'Determiner + Noun', part: 'These recommendations', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Verb', part: 'will improve', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Object', part: 'our overall workflow', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'That engineer', verbOrAux: 'solved', objectOrComplement: 'the technical glitch', fullSentence: 'That engineer solved the technical glitch.', context: 'Tech' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Demonstrative Determiners in Conversation',
          subtitle: 'Everyday workplace and shopping dialogues.',
          examples: [
            { id: 'dd_ex1', category: 'shopping', categoryLabel: 'Electronics Store', sentence: 'Could you tell me the warranty on this monitor compared to those models over there?', breakdownNote: '"this monitor" (near singular) and "those models" (far plural).', speakerRole: 'Shopper' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Demonstrative Agreement Errors',
          subtitle: 'Mixing singular determiners with plural nouns.',
          mistakes: [
            {
              id: 'dd_m1',
              incorrect: 'I really love this kinds of projects.',
              correct: 'I really love these kinds of projects. / I really love this kind of project.',
              explanation: '"This" must modify singular "kind"; "these" must modify plural "kinds".',
              ruleTag: 'Demonstrative Noun Concord'
            }
          ],
          rememberRule: 'Pair "this/that" with singular nouns (kind, type); pair "these/those" with plural nouns (kinds, types)!'
        },
        {
          type: 'practice',
          title: 'Demonstrative Determiners Practice',
          subtitle: 'Select the matching demonstrative determiner.',
          questions: [
            {
              id: 'dd_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct demonstrative determiner:',
              sentenceWithBlank: 'We need to analyze ___ financial statements before Friday\'s audit.',
              options: ['these', 'this', 'that'],
              correctIndex: 0,
              grammarFocus: 'Plural noun determiner agreement',
              whyExplanation: '"statements" is plural, so it requires the plural determiner "these".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t4_quantifying_determiners',
      moduleId: 4,
      title: 'Quantifying Determiners',
      shortDesc: 'some, any, much, many, a lot of, a few, a little, several, all, each, every.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Quantifying Determiners: Expressing Amounts',
          subtitle: 'Expressing precise and estimated quantities for countable and uncountable nouns.',
          conceptSummary: 'Quantifiers specify quantity or amount. Some pair only with countable nouns (many, few), some only with uncountable nouns (much, little), and others with both (some, any, a lot of).',
          visualGraphic: {
            heroSentence: 'We have many questions and need a little time.',
            highlights: [
              { word: 'many questions', role: 'Countable Quantifier (many + plural noun)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'a little time', role: 'Uncountable Quantifier (a little + non-count noun)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Countable = many, a few, several. Uncountable = much, a little, a great deal of.'
          },
          keyTakeaways: [
            'Countable Plural only: many, a few, few, several, both.',
            'Uncountable only: much, a little, little, a great deal of.',
            'Both Countable & Uncountable: some, any, a lot of, plenty of, all, most.',
            'A few / A little = positive amount (some). Few / Little = negative scarcity (almost none!).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Few" vs. "A Few" Matters',
          subtitle: 'The tiny "a" completely flips optimism and pessimism in English.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Project Status Update',
              example: '"We have a few solutions (positive: we can solve this!) vs. We have few solutions (negative: we are in trouble)."',
              whyNeeded: 'Using "few" instead of "a few" can unintentionally alarm your manager or client.'
            }
          ],
          coachTip: '"A few" = good news (some). "Few" = bad news (not enough)!'
        },
        {
          type: 'explanation',
          title: 'Countable vs. Uncountable Quantifiers Table',
          subtitle: 'The master reference for quantity words.',
          coreRule: 'Identify whether the noun following the quantifier can be counted individually or is an uncountable mass/concept.',
          breakdown: [
            { term: 'Many vs. Much', plainDefinition: 'Many + Plural count nouns / Much + Uncountable nouns (used in negatives/questions)', simpleExample: 'many emails vs. much information' },
            { term: 'Some vs. Any', plainDefinition: 'Some (positive statements / polite offers) vs. Any (questions / negatives)', simpleExample: 'I have some news. / Do you have any questions? / I don\'t have any cash.' },
            { term: 'A few vs. A little', plainDefinition: 'A few + Countable plural / A little + Uncountable', simpleExample: 'a few minutes vs. a little patience' },
            { term: 'Each vs. Every', plainDefinition: 'Individual focus (each) vs. Total group as singular (every)', simpleExample: 'Each candidate has 10 minutes. / Every student passed.' }
          ]
        },
        {
          type: 'formula',
          title: 'Quantifier Sentence Formula',
          subtitle: '[Quantifier] + [Countable / Uncountable Noun] + [Agreed Verb]',
          formulaBlocks: [
            { label: 'Quantifier', part: 'Several / A little', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Noun Match', part: 'colleagues / experience', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Verb', part: 'attended / is required', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'A lot of students', verbOrAux: 'are', objectOrComplement: 'graduating this semester', fullSentence: 'A lot of students are graduating this semester.', context: 'Countable' },
            { subject: 'A lot of sugar', verbOrAux: 'is', objectOrComplement: 'in this soda', fullSentence: 'A lot of sugar is in this soda.', context: 'Uncountable' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Quantifiers in Daily Business',
          subtitle: 'Project management and inventory.',
          examples: [
            { id: 'quant_ex1', category: 'work', categoryLabel: 'Budget Meeting', sentence: 'We have enough funds for the campaign, but we don\'t have much time left.', breakdownNote: '"enough funds" (count/uncount) and "much time" (uncountable negative).', speakerRole: 'Finance Officer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Quantifier Errors',
          subtitle: 'Using "much" with countable nouns or "many" with uncountables.',
          mistakes: [
            {
              id: 'quant_m1',
              incorrect: 'There are too much people in this room.',
              correct: 'There are too many people in this room.',
              explanation: '"People" is a countable plural noun, so use "too many", not "too much".',
              ruleTag: 'Much vs Many Concord'
            },
            {
              id: 'quant_m2',
              incorrect: 'I need many advices for my interview.',
              correct: 'I need a lot of advice / much advice for my interview.',
              explanation: '"Advice" is uncountable (never plural "advices"). Use "a lot of advice".',
              ruleTag: 'Uncountable Quantifier'
            }
          ],
          rememberRule: 'Use many with countable plurals (people, cars); use much with uncountables (time, money, advice)!'
        },
        {
          type: 'practice',
          title: 'Quantifiers Practice',
          subtitle: 'Select the right quantifier for the sentence context.',
          questions: [
            {
              id: 'quant_q1',
              type: 'fill_blank',
              prompt: 'Choose the correct quantifier for an uncountable noun in a negative sentence:',
              sentenceWithBlank: 'We haven\'t received ___ feedback on the new website redesign yet.',
              options: ['much', 'many', 'a few'],
              correctIndex: 0,
              grammarFocus: 'Uncountable negative quantifier',
              whyExplanation: '"Feedback" is uncountable, so "much" is used in the negative sentence "haven\'t received much feedback".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t5_interrogative_determiners',
      moduleId: 4,
      title: 'Interrogative Determiners',
      shortDesc: 'which, what, whose + noun (Forming targeted question phrases).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Interrogative Determiners: Questioning Nouns',
          subtitle: 'Using which, what, and whose directly before nouns to pose specific questions.',
          conceptSummary: 'Interrogative determiners (what, which, whose) directly precede a noun to form question phrases like "Which car?", "What time?", "Whose signature?".',
          visualGraphic: {
            heroSentence: 'Which flight are you taking, and what time does it depart?',
            highlights: [
              { word: 'Which flight', role: 'Interrogative Determiner + Noun (Specific choice)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'what time', role: 'Interrogative Determiner + Noun (General inquiry)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Interrogative determiners attach directly to the noun being questioned.'
          },
          keyTakeaways: [
            'Which + noun: used for a limited, specific set of options (Which color do you want?).',
            'What + noun: used for open-ended, general categories (What skills do you have?).',
            'Whose + noun: asks about ownership of the noun (Whose car is that?).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Interrogative Determiners Matter',
          subtitle: 'Essential for efficient scheduling, customer service, and technical support.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Customer Onboarding',
              example: '"Which subscription tier best fits your organization\'s needs?"',
              whyNeeded: 'Guides the customer to choose between established product tiers.'
            }
          ],
          coachTip: 'Remember: Determiner = followed immediately by a noun ("Which seat?"). Pronoun = stands alone ("Which is yours?").'
        },
        {
          type: 'explanation',
          title: 'Interrogative Determiner Usage Guide',
          subtitle: 'Detailed rules for Which, What, and Whose.',
          coreRule: 'Pair the question word directly with the subject or object noun.',
          breakdown: [
            { term: 'Which + Noun (Limited Choice)', plainDefinition: 'Asking the listener to select from known items', simpleExample: 'Which platform does the train leave from?' },
            { term: 'What + Noun (Broad / General)', plainDefinition: 'Asking about kind, time, reason, or specification', simpleExample: 'What experience do you have in project management?' },
            { term: 'Whose + Noun (Possession)', plainDefinition: 'Asking who owns or is responsible for the noun', simpleExample: 'Whose idea was this marketing campaign?' }
          ]
        },
        {
          type: 'formula',
          title: 'Interrogative Determiner Formula',
          subtitle: '[Which / What / Whose] + [Noun] + [Auxiliary Verb] + [Subject] + [Main Verb]?',
          formulaBlocks: [
            { label: 'Question Phrase', part: 'Which candidate / What time', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Auxiliary + Subject', part: 'did the board', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Main Verb', part: 'select?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'What time', verbOrAux: 'does the keynote', objectOrComplement: 'presentation start?', fullSentence: 'What time does the keynote presentation start?', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Interrogative Determiners in Action',
          subtitle: 'Professional coordination and consultations.',
          examples: [
            { id: 'intdet_ex1', category: 'travel', categoryLabel: 'Car Rental', sentence: 'Which vehicle model would you prefer for your weekend trip?', breakdownNote: '"Which vehicle model" specifies selection among available rental cars.', speakerRole: 'Rental Agent' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Interrogative Determiner Errors',
          subtitle: 'Using "who\'s" instead of "whose" before a noun.',
          mistakes: [
            {
              id: 'intdet_m1',
              incorrect: 'Who\'s signature is required on this document?',
              correct: 'Whose signature is required on this document?',
              explanation: '"Who\'s" means "who is". For modifying a noun showing ownership, use "Whose".',
              ruleTag: 'Whose + Noun Determiner'
            }
          ],
          rememberRule: 'Whose + noun asks about possession (Whose coat, whose phone, whose fault)!'
        },
        {
          type: 'practice',
          title: 'Interrogative Determiners Practice',
          subtitle: 'Form accurate question phrases.',
          questions: [
            {
              id: 'intdet_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the appropriate interrogative determiner for a choice between two options:',
              sentenceWithBlank: '___ candidate impressed you more during the second interview round?',
              options: ['Which', 'What', 'Whose'],
              correctIndex: 0,
              grammarFocus: 'Limited choice interrogative determiner',
              whyExplanation: '"Which" is used when choosing between a limited number of known alternatives.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t6_possessive_determiners',
      moduleId: 4,
      title: 'Possessive Determiners',
      shortDesc: 'my, your, his, her, its, our, their (Modifying nouns with ownership).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Possessive Determiners: Expressing Ownership',
          subtitle: 'My, your, his, her, its, our, and their.',
          conceptSummary: 'Possessive determiners (also called possessive adjectives) sit directly before nouns to show who owns or is associated with something: my keys, your idea, her family, our goal, their team.',
          visualGraphic: {
            heroSentence: 'Our company expanded its global operations last year.',
            highlights: [
              { word: 'Our company', role: '1st Person Plural Possessive Determiner', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'its operations', role: '3rd Person Neutral Possessive Determiner (No apostrophe)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Possessive determiners MUST be followed by a noun.'
          },
          keyTakeaways: [
            '1st person: my (singular), our (plural).',
            '2nd person: your (singular and plural).',
            '3rd person: his (male), her (female), its (thing/organization), their (plural).',
            'They never take apostrophes (its tail, NOT it\'s tail).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Its" vs. "It\'s" Matters',
          subtitle: 'The single most common spelling confusion in the English language.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Corporate Reports',
              example: '"The company increased its revenue (NOT it\'s revenue)."',
              whyNeeded: '"It\'s" is short for "it is". Writing "it\'s revenue" means "it is revenue", which is ungrammatical.'
            }
          ],
          coachTip: 'Test: Replace with "it is". If "it is" doesn\'t make sense, write "its" (no apostrophe)!'
        },
        {
          type: 'explanation',
          title: 'Possessive Determiner Matrix',
          subtitle: 'Matching the owner with the correct determiner.',
          coreRule: 'Possessive determiners agree with the OWNER (subject), not with the gender or number of the item owned.',
          breakdown: [
            { term: 'my / your', plainDefinition: 'Belonging to speaker / listener', simpleExample: 'my passport, your appointment' },
            { term: 'his / her / its', plainDefinition: 'Belonging to male, female, or animal/thing/firm', simpleExample: 'his briefcase, her strategy, its market share' },
            { term: 'our / their', plainDefinition: 'Belonging to speaker\'s group / third-party group', simpleExample: 'our quarterly targets, their feedback' }
          ]
        },
        {
          type: 'formula',
          title: 'Possessive Determiner Formula',
          subtitle: '[Possessive Determiner] + [Adjective(s)] + [Noun]',
          formulaBlocks: [
            { label: 'Possessive', part: 'Their / Our / Her', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adjective + Noun', part: 'innovative proposal / new office', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Her dedication', verbOrAux: 'inspired', objectOrComplement: 'our whole team', fullSentence: 'Her dedication inspired our whole team.', context: 'Leadership' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Possessive Determiners in Daily Dialogue',
          subtitle: 'Workplace and social conversations.',
          examples: [
            { id: 'pdet_ex1', category: 'work', categoryLabel: 'Team Debrief', sentence: 'We appreciate your patience while our technicians resolve their network issue.', breakdownNote: '"your patience", "our technicians", "their network issue".', speakerRole: 'Support Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Its vs. It\'s Error',
          subtitle: 'Never confuse contraction and possessive.',
          mistakes: [
            {
              id: 'pdet_m1',
              incorrect: 'The smartphone has lost it\'s battery life.',
              correct: 'The smartphone has lost its battery life.',
              explanation: '"Its" is the possessive determiner. "It\'s" is the contraction for "it is" or "it has".',
              ruleTag: 'Its vs It\'s'
            },
            {
              id: 'pdet_m2',
              incorrect: 'Is this your\'s coat?',
              correct: 'Is this your coat? (or Is this coat yours?)',
              explanation: '"Your" is the determiner before a noun; "yours" is the standalone pronoun. Neither takes an apostrophe.',
              ruleTag: 'Possessive Determiner vs Pronoun'
            }
          ],
          rememberRule: 'Use "your, our, their, its" before nouns; never add an apostrophe!'
        },
        {
          type: 'practice',
          title: 'Possessive Determiners Practice',
          subtitle: 'Select the right possessive determiner.',
          questions: [
            {
              id: 'pdet_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct possessive determiner for a company (organization):',
              sentenceWithBlank: 'The organization celebrated ___ tenth anniversary last Friday.',
              options: ['its', 'it\'s', 'their'],
              correctIndex: 0,
              grammarFocus: 'Singular organization possessive determiner',
              whyExplanation: '"The organization" is singular neuter, requiring the possessive determiner "its" (without apostrophe).'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t7_numbers_determiners',
      moduleId: 4,
      title: 'Numbers',
      shortDesc: 'Cardinal numbers (one, two, fifty) and Ordinal numbers (first, second, third) as determiners.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Numbers as Determiners: Cardinal & Ordinal',
          subtitle: 'Specifying exact counts and precise positions in sequence.',
          conceptSummary: 'Numbers function as determiners when they modify nouns. Cardinal numbers (one, two, ten) indicate exact count; Ordinal numbers (first, second, third, twenty-first) indicate order or ranking, and are almost always preceded by "the".',
          visualGraphic: {
            heroSentence: 'The three executives attended the second annual summit.',
            highlights: [
              { word: 'three executives', role: 'Cardinal Number Determiner (Quantity = 3)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'the second summit', role: 'Ordinal Number Determiner (Sequence = #2)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Cardinal counts quantity; Ordinal defines sequence and takes "the".'
          },
          keyTakeaways: [
            'Cardinal: one, two, three, twenty, a hundred (modifies plural nouns except "one").',
            'Ordinal: first, second, third, fourth, tenth, twenty-first.',
            'Ordinal numbers almost always require "the" (the first step, the fifth floor).',
            'Dates use ordinal sounds: "March 15th" (spoken: March the fifteenth).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Number Determiners Matter',
          subtitle: 'Essential for scheduling, legal documents, and flight itineraries.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Meeting Agendas',
              example: '"We will discuss the third item on the second page."',
              whyNeeded: 'Instantly directs everyone to the exact passage under discussion.'
            }
          ],
          coachTip: 'Always spell out small numbers (one through ten) in formal writing; use digits for 11 and above.'
        },
        {
          type: 'explanation',
          title: 'Cardinal vs. Ordinal Guide',
          subtitle: 'Usage rules and spelling details.',
          coreRule: 'Use cardinal for amount/inventory; use ordinal for order, rankings, floors, and dates.',
          breakdown: [
            { term: 'Cardinal Numbers', plainDefinition: 'Tells "how many"', simpleExample: 'two tickets, twelve months, fifty states' },
            { term: 'Ordinal Numbers', plainDefinition: 'Tells "which position / rank"', simpleExample: 'the first priority, the third round, the 21st century' },
            { term: 'Spelling Irregulars in Ordinals', plainDefinition: '1st, 2nd, 3rd, 5th, 8th, 9th, 12th', simpleExample: 'first, second, third, fifth (not fiveth), ninth (no e), twelfth' }
          ]
        },
        {
          type: 'formula',
          title: 'Number Determiner Positioning',
          subtitle: '[Determiner] + [Ordinal Number] + [Cardinal Number] + [Noun]',
          formulaBlocks: [
            { label: 'Determiner', part: 'The', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Ordinal', part: 'first', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Cardinal', part: 'two', color: 'bg-purple-100 text-purple-900 border-purple-300' },
            { label: 'Noun', part: 'applicants', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The first three chapters', verbOrAux: 'are', objectOrComplement: 'essential reading', fullSentence: 'The first three chapters are essential reading.', context: 'Book' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Numbers in Everyday Real Life',
          subtitle: 'Travel gates and floor directions.',
          examples: [
            { id: 'num_ex1', category: 'travel', categoryLabel: 'Hotel Front Desk', sentence: 'Your suite is on the fourth floor; take the second elevator on your left.', breakdownNote: '"the fourth floor" and "the second elevator" are ordinal determiners.', speakerRole: 'Receptionist' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Number Determiner Errors',
          subtitle: 'Forgetting "the" before ordinal numbers or misordering numbers.',
          mistakes: [
            {
              id: 'num_m1',
              incorrect: 'I live on third floor.',
              correct: 'I live on the third floor.',
              explanation: 'Ordinal numbers like "third" require the definite article "the" when modifying a singular noun.',
              ruleTag: 'The + Ordinal Determiner'
            },
            {
              id: 'num_m2',
              incorrect: 'Please review three first questions.',
              correct: 'Please review the first three questions.',
              explanation: 'Ordinals (first) always precede cardinals (three): "the first three".',
              ruleTag: 'Ordinal before Cardinal'
            }
          ],
          rememberRule: 'Always place ordinals before cardinals: "the first two", NOT "two first"!'
        },
        {
          type: 'practice',
          title: 'Numbers as Determiners Practice',
          subtitle: 'Select the correct number positioning.',
          questions: [
            {
              id: 'num_q1',
              type: 'sentence_correction',
              prompt: 'Correct the order of number determiners:',
              incorrectSentence: 'We have finished two first modules.',
              correctSentence: 'We have finished the first two modules.',
              errorHighlight: 'two first',
              options: [
                'We have finished the first two modules.',
                'We have finished two first modules.',
                'We have finished the two first modules.'
              ],
              correctIndex: 0,
              whyExplanation: 'In English, ordinals always precede cardinals: "the first two modules".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l4_t8_using_determiners_together',
      moduleId: 4,
      title: 'Using Determiners Together',
      shortDesc: 'Predeterminers (all, both, half, twice) + Central Determiners (the, my, this) + Postdeterminers (many, other, three).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Using Determiners Together',
          subtitle: 'The 3-layer rule for stacking multiple determiners naturally.',
          conceptSummary: 'When combining determiners in a noun phrase, they must follow a strict three-zone order: Predeterminers (all, both, half, double) → Central Determiners (the, a, my, this) → Postdeterminers (first, three, other, many).',
          visualGraphic: {
            heroSentence: 'All the other five candidates were interviewed today.',
            highlights: [
              { word: 'All', role: 'Predeterminer (Zone 1)', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'the', role: 'Central Determiner (Zone 2)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'other five', role: 'Postdeterminers (Zone 3: Ordinal/Cardinal)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Zone 1 (Pre) + Zone 2 (Central) + Zone 3 (Post) + Noun.'
          },
          keyTakeaways: [
            'Predeterminers: all, both, half, twice, double, such, what (All my friends, both these cars).',
            'Central Determiners: a/an, the, this/that/these/those, my/your/his/their (You can ONLY choose ONE central determiner!).',
            'Postdeterminers: numbers (first, three), other, many, few, several (the three other options).',
            'GOLDEN RULE: Never put two central determiners together (*the my car, *this a book).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Determiner Stacking Matters',
          subtitle: 'Eliminates one of the most noticeable non-native phrasing mistakes.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Financial & Resource Planning',
              example: '"All our other projects are on schedule (NOT Our all other projects)."',
              whyNeeded: 'Natural determiner layering creates polished, executive-level communication.'
            }
          ],
          coachTip: 'Never combine "the" with "my"! Say "my car" OR "the car of mine", never "the my car".'
        },
        {
          type: 'explanation',
          title: 'The 3 Determiner Zones Reference',
          subtitle: 'The comprehensive hierarchy table.',
          coreRule: 'Zone 1 (Pre) comes before Zone 2 (Central), which comes before Zone 3 (Post).',
          breakdown: [
            { term: 'Zone 1: Predeterminers', plainDefinition: 'Multipliers and inclusive totals', simpleExample: 'all the people, both his brothers, half an hour, twice the price' },
            { term: 'Zone 2: Central Determiners (Choose ONLY 1!)', plainDefinition: 'Articles, Demonstratives, Possessives', simpleExample: 'a, an, the, this, that, my, your, its, whose' },
            { term: 'Zone 3: Postdeterminers', plainDefinition: 'Cardinals, ordinals, and general quantifiers', simpleExample: 'first, last, next, two, few, many, several, other' }
          ]
        },
        {
          type: 'formula',
          title: 'The Complete Determiner Stacking Formula',
          subtitle: '[Zone 1: Predeterminer] + [Zone 2: Central] + [Zone 3: Postdeterminer] + [Noun]',
          formulaBlocks: [
            { label: 'Zone 1 (Pre)', part: 'Both / All / Half', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            { label: 'Zone 2 (Central)', part: 'the / my / these', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Zone 3 (Post)', part: 'next two / other three', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'All the other attendees', verbOrAux: 'agreed', objectOrComplement: 'with the proposal', fullSentence: 'All the other attendees agreed with the proposal.', context: 'Boardroom' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Stacked Determiners in Real Conversations',
          subtitle: 'Realistic workplace and travel exchanges.',
          examples: [
            { id: 'sd_ex1', category: 'work', categoryLabel: 'Project Handover', sentence: 'Both these new design concepts meet all our client\'s requirements.', breakdownNote: '"Both these" (Pre + Central) and "all our" (Pre + Central).', speakerRole: 'Creative Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Determiner Clashing Mistakes',
          subtitle: 'Never double up central determiners.',
          mistakes: [
            {
              id: 'sd_m1',
              incorrect: 'I talked to the my supervisor.',
              correct: 'I talked to my supervisor. / I talked to a supervisor of mine.',
              explanation: '"The" and "my" are both Central Determiners. You can only use one.',
              ruleTag: 'Central Determiner Clash'
            },
            {
              id: 'sd_m2',
              incorrect: 'The all members were present.',
              correct: 'All the members were present.',
              explanation: '"All" is a predeterminer and must stand before "the".',
              ruleTag: 'Predeterminer Order'
            }
          ],
          rememberRule: 'Predeterminer first (All, Both, Half) + Central Determiner second (the, my, these)!'
        },
        {
          type: 'practice',
          title: 'Using Determiners Together Practice',
          subtitle: 'Arrange multi-determiner phrases in correct sequence.',
          questions: [
            {
              id: 'sd_q1',
              type: 'word_order',
              prompt: 'Put the determiners and noun in the correct order:',
              scrambledWords: ['participants', 'these', 'three', 'both'],
              correctSentence: 'both these three participants',
              contextHint: 'Predeterminer (both) + Central (these) + Postdeterminer (three) + Noun',
              whyExplanation: 'Follows Determiner hierarchy: Predeterminer (both) + Central (these) + Postdeterminer (three) + noun (participants).'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
