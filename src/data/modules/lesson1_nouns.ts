import { Module } from '../../types';

export const lesson1Nouns: Module = {
  id: 1,
  title: 'Lesson 1: Nouns',
  tagline: 'Names of People, Places, Things, Ideas & Possessions',
  description: 'Master all essential noun categories: Common, Proper, Singular, Plural, Collective, Masculine & Feminine, and Possessive Forms.',
  iconName: 'Building2',
  color: 'from-blue-600 to-indigo-600',
  topics: [
    {
      id: 'l1_t1_common_nouns',
      moduleId: 1,
      title: 'Common Nouns',
      shortDesc: 'General names for any person, place, animal, or thing.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Understanding Common Nouns',
          subtitle: 'The universal labels we use for everyday objects, jobs, and places.',
          conceptSummary: 'A common noun is a general, non-specific name for a person, animal, place, or thing. They are not capitalized unless they begin a sentence.',
          visualGraphic: {
            heroSentence: 'The teacher visited a museum in the city.',
            highlights: [
              { word: 'teacher', role: 'Person (Common Noun)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'museum', role: 'Place (Common Noun)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'city', role: 'Place (Common Noun)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
            ],
            caption: 'Common nouns name general categories rather than specific names.'
          },
          keyTakeaways: [
            'Common nouns name general items (doctor, car, town, dog).',
            'Do NOT capitalize common nouns unless at the very beginning of a sentence.',
            'They can be singular or plural (book → books).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Common Nouns Matter',
          subtitle: 'The foundation of vocabulary in professional and daily communication.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'At Work',
              example: '"Please hand the report to the manager."',
              whyNeeded: 'Enables quick descriptions of roles, tools, and documents.'
            },
            {
              icon: 'ShoppingBag',
              situation: 'Shopping & Errands',
              example: '"I need to buy vegetables at the market."',
              whyNeeded: 'Allows clear communication of everyday items.'
            }
          ],
          coachTip: 'Notice the difference: "city" is a common noun; "London" is a proper noun!'
        },
        {
          type: 'explanation',
          title: 'Core Rules & Categories of Common Nouns',
          subtitle: 'How to classify people, animals, places, and objects.',
          coreRule: 'Common nouns apply to any member of a class or group without naming a unique entity.',
          breakdown: [
            { term: 'People / Roles', plainDefinition: 'General occupations and relations', simpleExample: 'engineer, sister, lawyer, student' },
            { term: 'Animals', plainDefinition: 'Names of animal species', simpleExample: 'horse, eagle, dolphin, cat' },
            { term: 'Places', plainDefinition: 'General locations', simpleExample: 'hospital, airport, school, street' },
            { term: 'Things', plainDefinition: 'Inanimate objects and concepts', simpleExample: 'computer, desk, pencil, idea' }
          ]
        },
        {
          type: 'formula',
          title: 'Recognizing Common Nouns in Sentences',
          subtitle: 'Article / Determiner + Common Noun + Verb',
          formulaBlocks: [
            { label: 'Determiner', part: 'a / an / the / my', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Common Noun', part: 'doctor / laptop / station', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' },
            { label: 'Action / State', part: 'arrived / works / helps', color: 'bg-amber-100 text-amber-900 border-amber-300' }
          ],
          tableExamples: [
            { subject: 'The doctor', verbOrAux: 'examined', objectOrComplement: 'the patient', fullSentence: 'The doctor examined the patient.', context: 'Hospital' },
            { subject: 'A student', verbOrAux: 'borrowed', objectOrComplement: 'a book', fullSentence: 'A student borrowed a book from the library.', context: 'School' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Common Nouns in Action',
          subtitle: 'Real conversations from work, travel, and home.',
          examples: [
            { id: 'ex1', category: 'work', categoryLabel: 'Office', sentence: 'The director sent an email to all staff members.', breakdownNote: '"director", "email", "staff members" are all common nouns.', speakerRole: 'Office Manager' },
            { id: 'ex2', category: 'travel', categoryLabel: 'Airport', sentence: 'Passengers must show their ticket at the gate.', breakdownNote: '"passengers", "ticket", "gate" are common nouns.', speakerRole: 'Flight Attendant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Mistakes with Common Nouns',
          subtitle: 'Avoid accidental capitalization of general words.',
          mistakes: [
            {
              id: 'm1',
              incorrect: 'I asked the Doctor for a Prescription.',
              correct: 'I asked the doctor for a prescription.',
              explanation: 'Do not capitalize "doctor" or "prescription" when used generally without a specific name.',
              ruleTag: 'Capitalization Rule'
            }
          ],
          rememberRule: 'Only capitalize a noun if it is a specific proper name or starts a sentence!'
        },
        {
          type: 'practice',
          title: 'Common Nouns Practice',
          subtitle: 'Identify and use common nouns accurately.',
          questions: [
            {
              id: 'p1_1',
              type: 'multiple_choice',
              prompt: 'Which word in this sentence is a common noun? "David bought a new laptop in Chicago."',
              options: ['David', 'laptop', 'Chicago', 'bought'],
              correctIndex: 1,
              whyExplanation: '"laptop" is a common noun naming a general device. "David" and "Chicago" are proper nouns.'
            },
            {
              id: 'p1_2',
              type: 'fill_blank',
              prompt: 'Choose the correct common noun to complete the sentence:',
              sentenceWithBlank: 'The ___ answered all my questions at the hotel reception.',
              options: ['clerk', 'Clerk', 'Mr. Clerk'],
              correctIndex: 0,
              grammarFocus: 'Common noun capitalization',
              whyExplanation: 'Use lowercase "clerk" as a general job title without a proper name.'
            }
          ]
        }
      ],
      quizQuestions: [
        {
          id: 'q1_1',
          type: 'multiple_choice',
          prompt: 'Identify the common noun: "Paris is a beautiful city."',
          options: ['Paris', 'beautiful', 'city', 'is'],
          correctIndex: 2,
          whyExplanation: '"city" is the common noun; "Paris" is a proper noun.'
        }
      ]
    },
    {
      id: 'l1_t2_proper_nouns',
      moduleId: 1,
      title: 'Proper Nouns',
      shortDesc: 'Specific names of people, places, brands, days, and holidays.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Proper Nouns: Specific Names',
          subtitle: 'Always capitalize specific names of people, places, and brands.',
          conceptSummary: 'A proper noun is the special name given to a specific person, place, institution, days of the week, months, or holiday. Proper nouns ALWAYS begin with a capital letter.',
          visualGraphic: {
            heroSentence: 'Maria visits Paris every July with Microsoft.',
            highlights: [
              { word: 'Maria', role: 'Specific Person', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'Paris', role: 'Specific City', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'July', role: 'Specific Month', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'Microsoft', role: 'Specific Company', color: 'bg-purple-100 text-purple-800 border-purple-300' }
            ],
            caption: 'Every proper noun starts with a capital letter, no matter where it appears in a sentence.'
          },
          keyTakeaways: [
            'Proper nouns name specific unique entities (John, Tokyo, Monday, Christmas).',
            'Always start proper nouns with a Capital Letter.',
            'Days, months, languages, and nationalities are proper nouns in English (Spanish, Monday, August).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Proper Nouns Matter',
          subtitle: 'Crucial for formal writing, resumes, official forms, and emails.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Professional Emails',
              example: '"Dear Mr. Anderson, the meeting with Google is scheduled for Friday."',
              whyNeeded: 'Correct capitalization projects respect, professionalism, and high language proficiency.'
            }
          ],
          coachTip: 'Remember: In English, days of the week (Monday) and months (June) are ALWAYS capitalized, unlike some other languages!'
        },
        {
          type: 'explanation',
          title: 'Categories of Proper Nouns',
          subtitle: 'Recognizing what must always be capitalized.',
          coreRule: 'If a noun specifies a unique, named individual, geographic location, calendar date, or trademark, it is a proper noun.',
          breakdown: [
            { term: 'Names & Titles', plainDefinition: 'Names of people and formal titles before names', simpleExample: 'Dr. Watson, President Lincoln, Sarah' },
            { term: 'Geographic Places', plainDefinition: 'Countries, cities, rivers, mountains', simpleExample: 'Canada, Tokyo, Mount Everest, Nile River' },
            { term: 'Calendar & Holidays', plainDefinition: 'Days, months, festivities', simpleExample: 'Tuesday, October, Thanksgiving, New Year' },
            { term: 'Languages & Nationalities', plainDefinition: 'National identities and tongues', simpleExample: 'English, French, Japanese, Brazilian' }
          ]
        },
        {
          type: 'formula',
          title: 'Common vs. Proper Noun Contrast',
          subtitle: 'See the direct correspondence side by side.',
          formulaBlocks: [
            { label: 'Common (General)', part: 'country / river / company / day', color: 'bg-stone-100 text-stone-800 border-stone-300' },
            { label: 'Proper (Specific)', part: 'Italy / Amazon River / Apple / Wednesday', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Common', verbOrAux: 'author', objectOrComplement: 'city', fullSentence: 'The author lives in a large city.', context: 'General' },
            { subject: 'Proper', verbOrAux: 'J.K. Rowling', objectOrComplement: 'London', fullSentence: 'J.K. Rowling lives in London.', context: 'Specific' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Proper Nouns in Daily Life',
          subtitle: 'Formal correspondence and travel itineraries.',
          examples: [
            { id: 'ex_p1', category: 'travel', categoryLabel: 'Flight Booking', sentence: 'Flight AC850 departs from Toronto Pearson Airport on Sunday.', breakdownNote: '"Toronto Pearson Airport" and "Sunday" are proper nouns.', speakerRole: 'Travel Agent' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Proper Noun Mistakes',
          subtitle: 'Avoid lowercase days, months, and languages.',
          mistakes: [
            {
              id: 'pm1',
              incorrect: 'We will study english next tuesday.',
              correct: 'We will study English next Tuesday.',
              explanation: 'Languages ("English") and days of the week ("Tuesday") must always be capitalized.',
              ruleTag: 'Proper Noun Capitalization'
            }
          ],
          rememberRule: 'Languages, nationalities, days, and months always take initial capital letters!'
        },
        {
          type: 'practice',
          title: 'Proper Nouns Practice',
          subtitle: 'Test your ability to spot and capitalize proper nouns.',
          questions: [
            {
              id: 'p2_1',
              type: 'sentence_correction',
              prompt: 'Fix the capitalization error in this sentence:',
              incorrectSentence: 'She visited museum of modern art in new york.',
              correctSentence: 'She visited the Museum of Modern Art in New York.',
              errorHighlight: 'new york',
              options: [
                'She visited the Museum of Modern Art in New York.',
                'She visited the museum of modern art in New york.',
                'She visited Museum Of Modern Art in new York.'
              ],
              correctIndex: 0,
              whyExplanation: 'Specific institution names and city names ("Museum of Modern Art", "New York") require capital letters.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l1_t3_singular_nouns',
      moduleId: 1,
      title: 'Singular Nouns',
      shortDesc: 'Naming one single person, animal, place, or thing.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Singular Nouns: Naming One',
          subtitle: 'Referring to exactly one person, animal, place, or object.',
          conceptSummary: 'A singular noun refers to ONE item. It is often preceded by articles like "a" or "an", or determiners like "one" or "this".',
          visualGraphic: {
            heroSentence: 'A doctor bought an apple.',
            highlights: [
              { word: 'A doctor', role: 'One Person', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'an apple', role: 'One Fruit (Starts with vowel sound)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Use "a" before consonant sounds, and "an" before vowel sounds (a, e, i, o, u).'
          },
          keyTakeaways: [
            'Singular means "single" (quantity = 1).',
            'Use "a" before consonant sounds (a car, a house, a university).',
            'Use "an" before vowel sounds (an egg, an umbrella, an hour).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Singular Forms Matter',
          subtitle: 'Ensures correct verb agreement (is vs. are, has vs. have).',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Ordering Supplies',
              example: '"I ordered a printer for the desk."',
              whyNeeded: 'Avoids receiving multiple unwanted items.'
            }
          ],
          coachTip: 'Singular nouns take singular verbs: "The phone IS ringing", not "are ringing".'
        },
        {
          type: 'explanation',
          title: 'Using Articles with Singular Nouns',
          subtitle: 'Rules for "a" versus "an".',
          coreRule: 'Countable singular nouns almost always require a determiner or article (a, an, the, this, my).',
          breakdown: [
            { term: 'a + Consonant Sound', plainDefinition: 'Words starting with consonant sounds', simpleExample: 'a chair, a book, a European city (sounds like "yu")' },
            { term: 'an + Vowel Sound', plainDefinition: 'Words starting with vowel sounds', simpleExample: 'an office, an honest man (silent "h"), an idea' }
          ]
        },
        {
          type: 'formula',
          title: 'Singular Noun Sentence Formula',
          subtitle: 'Singular Subject + Singular Verb (is / has / verb+s)',
          formulaBlocks: [
            { label: 'Singular Subject', part: 'A client / The manager', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Singular Verb', part: 'is waiting / calls / has', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The customer', verbOrAux: 'wants', objectOrComplement: 'a receipt', fullSentence: 'The customer wants a receipt.', context: 'Retail' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Real-Life Singular Sentences',
          subtitle: 'Clear, singular statements in daily life.',
          examples: [
            { id: 's_ex1', category: 'restaurant', categoryLabel: 'Cafe', sentence: 'I would like a cup of coffee and an omelet.', breakdownNote: '"a cup" and "an omelet" are singular nouns with appropriate articles.', speakerRole: 'Customer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Singular Noun Mistakes',
          subtitle: 'Watch out for naked singular countable nouns.',
          mistakes: [
            {
              id: 'sm1',
              incorrect: 'She is reading book.',
              correct: 'She is reading a book. / She is reading the book.',
              explanation: 'Singular countable nouns cannot stand alone without an article or determiner.',
              ruleTag: 'Article Requirement'
            }
          ],
          rememberRule: 'Always place an article (a/an/the) or determiner before a singular countable noun!'
        },
        {
          type: 'practice',
          title: 'Singular Nouns Practice',
          subtitle: 'Choose the correct article for singular nouns.',
          questions: [
            {
              id: 'sp1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct article:',
              sentenceWithBlank: 'She has ___ interview scheduled at 2 PM.',
              options: ['an', 'a', 'the a'],
              correctIndex: 0,
              grammarFocus: 'Vowel sound article',
              whyExplanation: '"interview" begins with a short vowel sound /ɪ/, requiring "an".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l1_t4_plural_nouns',
      moduleId: 1,
      title: 'Plural Nouns',
      shortDesc: 'Regular (-s, -es, -ies) and irregular plural spelling patterns.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Plural Nouns: Naming More Than One',
          subtitle: 'How to transform singular nouns into plurals.',
          conceptSummary: 'A plural noun refers to two or more people, places, animals, or things. Most nouns add -s or -es, while irregular nouns change vowel patterns or stay identical.',
          visualGraphic: {
            heroSentence: 'Three boxes, two knives, and four children arrived.',
            highlights: [
              { word: 'boxes', role: 'Regular -es Plural', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'knives', role: 'f/fe → ves Plural', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'children', role: 'Irregular Plural', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Plural nouns indicate quantity greater than one.'
          },
          keyTakeaways: [
            'Regular plural: add -s (cars, desks, pens).',
            'Nouns ending in -s, -sh, -ch, -x, -z: add -es (buses, dishes, watches, boxes).',
            'Nouns ending in consonant + y: change y to -ies (city → cities).',
            'Irregular plurals change form (child → children, man → men, tooth → teeth).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Plural Mastery Matters',
          subtitle: 'Crucial for accurate inventory, scheduling, and verbal clarity.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Business Reports',
              example: '"We met with three companies and reviewed five analyses."',
              whyNeeded: 'Incorrect plural endings sound unrefined in professional reports.'
            }
          ],
          coachTip: 'Irregular plurals never take -s! Say "people", not "peoples" for regular count.'
        },
        {
          type: 'explanation',
          title: 'Plural Spelling Rules Breakdown',
          subtitle: 'Master every spelling transformation with confidence.',
          coreRule: 'Look at the last letters of the singular noun to decide the plural ending.',
          breakdown: [
            { term: 'Standard Nouns', plainDefinition: 'Add -s to base word', simpleExample: 'desk → desks, phone → phones' },
            { term: '-s, -sh, -ch, -x, -z', plainDefinition: 'Add -es for extra syllable', simpleExample: 'class → classes, match → matches, box → boxes' },
            { term: 'Consonant + Y', plainDefinition: 'Drop Y, add -ies', simpleExample: 'baby → babies, party → parties' },
            { term: '-f or -fe', plainDefinition: 'Change to -ves', simpleExample: 'leaf → leaves, wife → wives, life → lives' },
            { term: 'Irregular Forms', plainDefinition: 'Internal vowel change or unique form', simpleExample: 'foot → feet, mouse → mice, person → people, sheep → sheep' }
          ]
        },
        {
          type: 'formula',
          title: 'Plural Agreement Formula',
          subtitle: 'Plural Subject + Plural Verb (are / have / base verb)',
          formulaBlocks: [
            { label: 'Plural Subject', part: 'The engineers / These keys', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Plural Verb', part: 'work / are / have finished', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The women', verbOrAux: 'are', objectOrComplement: 'leading the discussion', fullSentence: 'The women are leading the discussion.', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Plurals in Real Conversations',
          subtitle: 'Everyday dialogue featuring regular and irregular plurals.',
          examples: [
            { id: 'plex1', category: 'shopping', categoryLabel: 'Grocery Store', sentence: 'Please buy two loaves of bread and three bunches of cherries.', breakdownNote: '"loaves" (loaf → loaves) and "cherries" (cherry → cherries).', speakerRole: 'Shopper' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Plural Mistakes',
          subtitle: 'Avoid adding -s to already plural irregular nouns.',
          mistakes: [
            {
              id: 'plm1',
              incorrect: 'There were many persons and childrens in the park.',
              correct: 'There were many people and children in the park.',
              explanation: '"People" is the natural plural of person, and "children" is already plural.',
              ruleTag: 'Irregular Plural Form'
            }
          ],
          rememberRule: 'Do not add -s to irregular plurals: children, women, men, people, teeth, feet!'
        },
        {
          type: 'practice',
          title: 'Plural Nouns Practice',
          subtitle: 'Convert singular nouns to correct plural forms.',
          questions: [
            {
              id: 'plq1',
              type: 'multiple_choice',
              prompt: 'What is the correct plural form of "shelf"?',
              options: ['shelfs', 'shelves', 'shelvies', 'shelfes'],
              correctIndex: 1,
              whyExplanation: 'Nouns ending in -f like "shelf" change to "-ves" in plural: "shelves".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l1_t5_collective_nouns',
      moduleId: 1,
      title: 'Collective Nouns',
      shortDesc: 'Names for groups of people, animals, or items acting as a unit.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Collective Nouns: Units of Many',
          subtitle: 'Single words that represent a whole group.',
          conceptSummary: 'A collective noun names a group of individuals, animals, or things viewed as a single whole unit (team, family, committee, flock, herd, crowd).',
          visualGraphic: {
            heroSentence: 'The committee has approved the new budget.',
            highlights: [
              { word: 'The committee', role: 'Collective Noun (One Group)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'has approved', role: 'Singular Verb Agreement', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'In standard American English, collective nouns take singular verbs when acting as a unit.'
          },
          keyTakeaways: [
            'Collective nouns refer to groups (team, audience, staff, government, orchestra).',
            'When the group acts together as one body, use a singular verb (The team IS winning).',
            'Common examples: a flock of birds, a pack of wolves, a bouquet of flowers.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Collective Nouns Matter',
          subtitle: 'Essential for organizational and workplace communication.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Company Meetings',
              example: '"Our management team meets every Monday morning."',
              whyNeeded: 'Expresses team alignment and organizational unity.'
            }
          ],
          coachTip: 'In American English, say "The company is growing", rather than "are growing".'
        },
        {
          type: 'explanation',
          title: 'Common Collective Noun Pairings',
          subtitle: 'Standard collocations in English.',
          coreRule: 'Certain collective nouns pair naturally with specific animals or objects.',
          breakdown: [
            { term: 'People Groups', plainDefinition: 'Collections of human beings', simpleExample: 'a team of players, an audience of listeners, a panel of experts, a crew of sailors' },
            { term: 'Animal Groups', plainDefinition: 'Specific animal groupings', simpleExample: 'a herd of cattle, a flock of birds, a school of fish, a swarm of bees' },
            { term: 'Object Groups', plainDefinition: 'Clusters of physical objects', simpleExample: 'a fleet of ships, a pack of cards, a deck of slides, a set of tools' }
          ]
        },
        {
          type: 'formula',
          title: 'Collective Noun Agreement Formula',
          subtitle: 'A [Collective Noun] + of + [Plural Nouns] + Singular Verb',
          formulaBlocks: [
            { label: 'Collective Unit', part: 'A team of specialists', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Singular Verb', part: 'is / conducts / provides', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The orchestra', verbOrAux: 'is playing', objectOrComplement: 'Beethoven', fullSentence: 'The orchestra is playing a symphony.', context: 'Concert Hall' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Collective Nouns in Daily Life',
          subtitle: 'Everyday workplace and nature expressions.',
          examples: [
            { id: 'c_ex1', category: 'work', categoryLabel: 'HR Announcement', sentence: 'Our staff consists of forty dedicated employees.', breakdownNote: '"staff" is treated as a single collective body taking singular "consists".', speakerRole: 'HR Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Collective Noun Pitfalls',
          subtitle: 'Watch out for mismatched verbs with collective subjects.',
          mistakes: [
            {
              id: 'cmm1',
              incorrect: 'The jury have reached their verdict.',
              correct: 'The jury has reached its verdict.',
              explanation: 'In standard American English, treat "the jury" as a singular unit taking "has" and "its".',
              ruleTag: 'Collective Subject Agreement'
            }
          ],
          rememberRule: 'Treat the group as a single entity ("it") taking a singular verb!'
        },
        {
          type: 'practice',
          title: 'Collective Nouns Practice',
          subtitle: 'Choose the right collective noun and verb form.',
          questions: [
            {
              id: 'cq1',
              type: 'fill_blank',
              prompt: 'Select the correct verb for this collective subject:',
              sentenceWithBlank: 'The medical panel ___ reviewing the patient files right now.',
              options: ['is', 'are', 'were'],
              correctIndex: 0,
              grammarFocus: 'Collective noun agreement',
              whyExplanation: '"The medical panel" is a singular collective unit, requiring the singular verb "is".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l1_t6_masculine_feminine_nouns',
      moduleId: 1,
      title: 'Masculine and Feminine Nouns',
      shortDesc: 'Gender forms in English nouns for family, animals, and modern neutral terms.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Masculine, Feminine & Gender-Neutral Nouns',
          subtitle: 'Understanding gender in English nouns and modern inclusive language.',
          conceptSummary: 'In English, gender applies primarily to biological sex (people and animals). Modern English increasingly favors gender-neutral terms for jobs and professions.',
          visualGraphic: {
            heroSentence: 'The actor and actress congratulated the director.',
            highlights: [
              { word: 'actor', role: 'Masculine / Neutral', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'actress', role: 'Feminine Form', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'director', role: 'Gender-Neutral Role', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Modern English often uses universal neutral terms for professional roles.'
          },
          keyTakeaways: [
            'Masculine refers to males (father, king, bull, groom, nephew).',
            'Feminine refers to females (mother, queen, cow, bride, niece).',
            'Neutral terms are standard in professional settings (firefighter, flight attendant, police officer, chairperson).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Gender Terminology Matters',
          subtitle: 'Essential for respectful, up-to-date workplace and social communication.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Workplace Job Postings',
              example: '"We are hiring a flight attendant and a sales representative."',
              whyNeeded: 'Modern business standards require gender-neutral titles instead of outdated terms like stewardess.'
            }
          ],
          coachTip: 'Use "flight attendant" instead of "stewardess", and "police officer" instead of "policeman".'
        },
        {
          type: 'explanation',
          title: 'Masculine & Feminine Pairs Table',
          subtitle: 'Traditional human and animal gender pairs.',
          coreRule: 'English has specific distinct words for biological male and female counterparts.',
          breakdown: [
            { term: 'Family Roles', plainDefinition: 'Kinship terms', simpleExample: 'brother/sister, uncle/aunt, nephew/niece, grandfather/grandmother' },
            { term: 'Titles & Royalty', plainDefinition: 'Monarchy and formal stations', simpleExample: 'king/queen, prince/princess, emperor/empress, duke/duchess' },
            { term: 'Animals', plainDefinition: 'Male and female animal species', simpleExample: 'rooster/hen, bull/cow, stallion/mare, ram/ewe, drake/duck' },
            { term: 'Modern Job Titles', plainDefinition: 'Inclusive professional roles', simpleExample: 'chairperson (not chairman), mail carrier (not postman)' }
          ]
        },
        {
          type: 'formula',
          title: 'Gender Concord with Pronouns',
          subtitle: 'Matching masculine/feminine nouns with correct pronouns (he, she, they).',
          formulaBlocks: [
            { label: 'Masculine Noun', part: 'The uncle / The groom', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Pronoun Match', part: 'he / him / his', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The niece', verbOrAux: 'called', objectOrComplement: 'her uncle', fullSentence: 'The niece called her uncle for advice.', context: 'Family' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Professional and Social Contexts',
          subtitle: 'Natural conversations using appropriate gender terms.',
          examples: [
            { id: 'g_ex1', category: 'work', categoryLabel: 'Job Description', sentence: 'The firefighter and the paramedic arrived at the scene immediately.', breakdownNote: 'Uses standard modern professional titles.', speakerRole: 'News Anchor' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Gender Concord Mistakes',
          subtitle: 'Avoid mismatching pronouns with gendered nouns.',
          mistakes: [
            {
              id: 'gm1',
              incorrect: 'My niece loves his new school.',
              correct: 'My niece loves her new school.',
              explanation: '"Niece" is feminine (female relative), so use the possessive pronoun "her".',
              ruleTag: 'Gender Pronoun Concord'
            }
          ],
          rememberRule: 'Pair feminine nouns (sister, aunt, niece, mother) with she/her/hers!'
        },
        {
          type: 'practice',
          title: 'Gender Nouns Practice',
          subtitle: 'Identify masculine, feminine, and neutral forms.',
          questions: [
            {
              id: 'gq1',
              type: 'multiple_choice',
              prompt: 'What is the feminine counterpart of "nephew"?',
              options: ['niece', 'cousin', 'aunt', 'sister'],
              correctIndex: 0,
              whyExplanation: '"Niece" is the female daughter of one\'s brother or sister, the feminine counterpart to "nephew".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l1_t7_possessive_nouns',
      moduleId: 1,
      title: 'The Possessive Form of Nouns',
      shortDesc: 'Apostrophe rules (\'s vs s\') for singular, plural, and joint ownership.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Possessive Form of Nouns',
          subtitle: 'Showing ownership, origin, and relationships with apostrophes.',
          conceptSummary: 'Possessive nouns show that something belongs to someone or something. We add an apostrophe + s (\'s) to singular nouns, and an apostrophe after the s (s\') to regular plural nouns.',
          visualGraphic: {
            heroSentence: 'Maria\'s computer and the teachers\' lounge are ready.',
            highlights: [
              { word: 'Maria\'s', role: 'Singular Possessive (\'s)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'teachers\'', role: 'Plural Possessive (s\')', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Singular owners get \'s; regular plural owners ending in s get just \'.'
          },
          keyTakeaways: [
            'Singular noun: add \'s (the doctor\'s office, John\'s car).',
            'Plural noun ending in -s: add only \' (the students\' books, the parents\' house).',
            'Irregular plural NOT ending in -s: add \'s (the children\'s toys, the women\'s team).',
            'Joint ownership: add \'s only to the last name (Tom and Jerry\'s house).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Possessive Nouns Matter',
          subtitle: 'Apostrophe errors are the #1 most noticed mistake in English writing.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Official Contracts',
              example: '"The company\'s assets vs. The companies\' assets"',
              whyNeeded: 'An apostrophe determines whether you mean one company or multiple companies.'
            }
          ],
          coachTip: 'Never use an apostrophe for simple plurals! "Two cats", NOT "Two cat\'s".'
        },
        {
          type: 'explanation',
          title: 'Detailed Apostrophe Rules',
          subtitle: 'Master every possessive situation with clarity.',
          coreRule: 'The placement of the apostrophe depends entirely on whether the owner is singular or plural.',
          breakdown: [
            { term: 'Singular Nouns', plainDefinition: 'Add \'s to the owner', simpleExample: 'the manager\'s approval, a cat\'s tail, Chris\'s desk' },
            { term: 'Regular Plural Nouns', plainDefinition: 'Add only apostrophe after existing s', simpleExample: 'the employees\' handbook, the boys\' jackets' },
            { term: 'Irregular Plural Nouns', plainDefinition: 'Add \'s because word does not end in s', simpleExample: 'the children\'s playground, the men\'s suits, people\'s rights' },
            { term: 'Inanimate Objects', plainDefinition: 'Usually prefer "of" phrase', simpleExample: 'the roof of the house (better than the house\'s roof)' }
          ]
        },
        {
          type: 'formula',
          title: 'Possessive Construction Formula',
          subtitle: '[Owner] + [\'s or \'] + [Thing Owned]',
          formulaBlocks: [
            { label: 'Owner', part: 'The client / The clients', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Possessive Mark', part: '\'s / \'', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Possession', part: 'feedback / signature / office', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Singular owner', verbOrAux: 'The doctor\'s', objectOrComplement: 'schedule is full', fullSentence: 'The doctor\'s schedule is full today.', context: 'Clinic' },
            { subject: 'Plural owners', verbOrAux: 'The doctors\'', objectOrComplement: 'meeting is at 10', fullSentence: 'The doctors\' meeting is at 10 AM.', context: 'Hospital' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Possessives in Everyday Writing',
          subtitle: 'Clear business and personal examples.',
          examples: [
            { id: 'poss_ex1', category: 'work', categoryLabel: 'Meeting Notice', sentence: 'We have reserved the president\'s conference room for tomorrow.', breakdownNote: 'Single president → president\'s.', speakerRole: 'Executive Assistant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Greengrocer\'s Apostrophe Error',
          subtitle: 'Never use apostrophes for simple plurals.',
          mistakes: [
            {
              id: 'possm1',
              incorrect: 'Fresh apple\'s and banana\'s on sale!',
              correct: 'Fresh apples and bananas on sale!',
              explanation: 'Apostrophes show possession, never plain plurals.',
              ruleTag: 'Apostrophe Overuse'
            },
            {
              id: 'possm2',
              incorrect: 'The childrens\' books are on the table.',
              correct: 'The children\'s books are on the table.',
              explanation: '"Children" is already plural, so it takes \'s like singular nouns.',
              ruleTag: 'Irregular Plural Possessive'
            }
          ],
          rememberRule: 'Apostrophes show ownership, never simple plurality!'
        },
        {
          type: 'practice',
          title: 'Possessive Form Practice',
          subtitle: 'Place the apostrophe correctly in every sentence.',
          questions: [
            {
              id: 'possq1',
              type: 'sentence_correction',
              prompt: 'Choose the correct sentence showing the car belonging to two brothers:',
              incorrectSentence: 'The brother\'s car is parked outside.',
              correctSentence: 'The brothers\' car is parked outside.',
              errorHighlight: 'brother\'s',
              options: [
                'The brothers\' car is parked outside.',
                'The brothers\'s car is parked outside.',
                'The brother\' car is parked outside.'
              ],
              correctIndex: 0,
              whyExplanation: 'For multiple brothers (plural "brothers"), place the apostrophe after the s: "brothers\'".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
