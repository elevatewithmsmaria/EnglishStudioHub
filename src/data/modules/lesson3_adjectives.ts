import { Module } from '../../types';

export const lesson3Adjectives: Module = {
  id: 3,
  title: 'Lesson 3: Adjectives',
  tagline: 'Describing, Ordering & Comparing Qualities',
  description: 'Master kinds of adjectives, the royal order of adjectives (OSASCOMP), suffixes, material descriptions, comparative & superlative forms, and adjective phrases.',
  iconName: 'Sparkles',
  color: 'from-amber-600 to-orange-600',
  topics: [
    {
      id: 'l3_t1_kinds_of_adjectives',
      moduleId: 3,
      title: 'Kinds of Adjectives',
      shortDesc: 'Descriptive, Quantitative, Demonstrative, Possessive, and Proper Adjectives.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Understanding Kinds of Adjectives',
          subtitle: 'Words that paint pictures and provide specific details about nouns.',
          conceptSummary: 'Adjectives modify, describe, or qualify nouns and pronouns. They answer questions like: Which one? What kind? How many? Whose?',
          visualGraphic: {
            heroSentence: 'Three Italian chefs cooked delicious pasta.',
            highlights: [
              { word: 'Three', role: 'Quantitative Adjective (How many)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'Italian', role: 'Proper Adjective (Origin)', color: 'bg-purple-100 text-purple-800 border-purple-300' },
              { word: 'delicious', role: 'Descriptive Adjective (Quality)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adjectives give depth, precision, and flavor to standard nouns.'
          },
          keyTakeaways: [
            'Descriptive: Quality and appearance (tall, smart, fast, beautiful).',
            'Quantitative: Numbers and amounts (few, many, six, several).',
            'Proper: Derived from proper nouns, always capitalized (Spanish, Victorian, Japanese).',
            'Demonstrative & Possessive: this, that, my, your (when directly before a noun).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Adjectives Matter in Communication',
          subtitle: 'Essential for vivid storytelling, detailed specifications, and customer descriptions.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Product Descriptions',
              example: '"A durable, lightweight stainless steel laptop."',
              whyNeeded: 'Precise adjectives highlight key selling points without confusion.'
            }
          ],
          coachTip: 'In English, adjectives almost always go BEFORE the noun, or after linking verbs (The sky is blue).'
        },
        {
          type: 'explanation',
          title: 'The Major Kinds of Adjectives',
          subtitle: 'Detailed breakdown of primary categories.',
          coreRule: 'Categorize adjectives based on the exact type of information they contribute.',
          breakdown: [
            { term: 'Descriptive (Qualitative)', plainDefinition: 'Describes physical attributes, taste, emotion, size', simpleExample: 'a quiet room, delicious soup, enthusiastic team' },
            { term: 'Quantitative (Numeral)', plainDefinition: 'Specifies number or non-counted volume', simpleExample: 'five candidates, sufficient time, heavy rain' },
            { term: 'Proper Adjectives', plainDefinition: 'Formed from proper nouns, requiring capital letters', simpleExample: 'French wine, Shakespearean sonnet, Mexican cuisine' },
            { term: 'Compound Adjectives', plainDefinition: 'Hyphenated descriptive pairs before nouns', simpleExample: 'a well-known author, a full-time job' }
          ]
        },
        {
          type: 'formula',
          title: 'Adjective Placement Formula',
          subtitle: '[Determiner] + [Adjective(s)] + [Noun] OR [Subject] + [Linking Verb] + [Adjective]',
          formulaBlocks: [
            { label: 'Attributive', part: 'A brilliant scientist', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Predicative', part: 'The scientist is brilliant', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The coffee', verbOrAux: 'tastes', objectOrComplement: 'rich and aromatic', fullSentence: 'The coffee tastes rich and aromatic.', context: 'Cafe' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adjectives in Daily Life',
          subtitle: 'Professional reviews and everyday recommendations.',
          examples: [
            { id: 'adj_ex1', category: 'restaurant', categoryLabel: 'Food Review', sentence: 'We had an exceptional dinner featuring fresh local seafood.', breakdownNote: '"exceptional", "fresh", and "local" describe the dinner and seafood.', speakerRole: 'Food Critic' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Adjective Mistakes to Avoid',
          subtitle: 'Pluralizing adjectives and improper noun placement.',
          mistakes: [
            {
              id: 'adj_m1',
              incorrect: 'She bought some beautifuls shoes.',
              correct: 'She bought some beautiful shoes.',
              explanation: 'In English, adjectives NEVER take plural -s endings, even with plural nouns!',
              ruleTag: 'No Plural Adjectives'
            }
          ],
          rememberRule: 'Adjectives never change form for plural nouns (e.g. good books, NOT goods books)!'
        },
        {
          type: 'practice',
          title: 'Kinds of Adjectives Practice',
          subtitle: 'Identify and use appropriate adjectives.',
          questions: [
            {
              id: 'adj_q1',
              type: 'multiple_choice',
              prompt: 'Identify the proper adjective in: "We love eating authentic Thai food."',
              options: ['eating', 'authentic', 'Thai', 'food'],
              correctIndex: 2,
              whyExplanation: '"Thai" is a proper adjective derived from Thailand, requiring a capital letter.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l3_t2_order_of_adjectives',
      moduleId: 3,
      title: 'The Order of Adjectives',
      shortDesc: 'The OSASCOMP formula: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The Royal Order of Adjectives (OSASCOMP)',
          subtitle: 'How native speakers naturally sequence multiple adjectives before a noun.',
          conceptSummary: 'When multiple adjectives describe a single noun, they follow a natural subconscious order: Opinion → Size → Age → Shape → Color → Origin → Material → Purpose.',
          visualGraphic: {
            heroSentence: 'She bought a lovely, small, old, round, brown, Italian, leather, travel bag.',
            highlights: [
              { word: 'lovely', role: 'Opinion', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'small', role: 'Size', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'Italian', role: 'Origin', color: 'bg-purple-100 text-purple-800 border-purple-300' },
              { word: 'leather', role: 'Material', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'travel', role: 'Purpose', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'OSASCOMP: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.'
          },
          keyTakeaways: [
            'O - Opinion (lovely, beautiful, expensive, ugly)',
            'S - Size (large, tiny, huge, compact)',
            'A - Age (antique, young, ancient, brand-new)',
            'S - Shape (round, square, triangular)',
            'C - Color (red, blue, dark, golden)',
            'O - Origin (Italian, Japanese, American)',
            'M - Material (wooden, silk, leather, metal)',
            'P - Purpose (running shoes, dining table, sleeping bag)'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Adjective Order Matters',
          subtitle: 'Sounds completely natural and effortless to native ears.',
          adultSituations: [
            {
              icon: 'ShoppingBag',
              situation: 'Buying Clothes or Furniture',
              example: '"A beautiful antique wooden desk (NOT a wooden antique beautiful desk)"',
              whyNeeded: 'Correct ordering instantly makes your spoken English sound native.'
            }
          ],
          coachTip: 'Opinion adjectives (beautiful, strange) almost always come FIRST!'
        },
        {
          type: 'explanation',
          title: 'OSASCOMP In-Depth Guide',
          subtitle: 'Step-by-step sequencing breakdown.',
          coreRule: 'Move from the most subjective qualities (opinion) to the most permanent/intrinsic physical properties (material/purpose).',
          breakdown: [
            { term: '1. Opinion', plainDefinition: 'What you personally think', simpleExample: 'charming, elegant, terrible, comfortable' },
            { term: '2. Size & 3. Age', plainDefinition: 'Physical scale and era', simpleExample: 'massive, miniature, modern, vintage' },
            { term: '4. Shape & 5. Color', plainDefinition: 'Geometry and pigment', simpleExample: 'circular, oblong, emerald-green, navy-blue' },
            { term: '6. Origin, 7. Material, 8. Purpose', plainDefinition: 'Source, physical substance, intended function', simpleExample: 'Swiss, cotton, hiking (hiking boots)' }
          ]
        },
        {
          type: 'formula',
          title: 'Common 3-Adjective Sequences',
          subtitle: 'Opinion + Size/Color + Material/Origin + Noun',
          formulaBlocks: [
            { label: 'Opinion', part: 'gorgeous', color: 'bg-rose-100 text-rose-900 border-rose-300' },
            { label: 'Color / Origin', part: 'black Italian', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Material + Noun', part: 'leather jacket', color: 'bg-amber-100 text-amber-900 border-amber-300' }
          ],
          tableExamples: [
            { subject: 'He drives', verbOrAux: 'a', objectOrComplement: 'fast new German sports car', fullSentence: 'He drives a fast new German sports car.', context: 'Vehicle' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adjective Order in Dialogue',
          subtitle: 'Real shopping and real estate conversations.',
          examples: [
            { id: 'ord_ex1', category: 'home', categoryLabel: 'Real Estate', sentence: 'They bought a charming spacious mid-century brick house.', breakdownNote: 'charming (opinion) → spacious (size) → mid-century (age) → brick (material).', speakerRole: 'Realtor' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Adjective Order Mistakes',
          subtitle: 'Placing material or color before opinion.',
          mistakes: [
            {
              id: 'ord_m1',
              incorrect: 'She wore a silk elegant green dress.',
              correct: 'She wore an elegant green silk dress.',
              explanation: 'Opinion (elegant) comes before color (green), which comes before material (silk).',
              ruleTag: 'Adjective Order'
            }
          ],
          rememberRule: 'Remember: Opinion → Size/Age → Color → Origin → Material → Purpose!'
        },
        {
          type: 'practice',
          title: 'Adjective Order Practice',
          subtitle: 'Arrange adjectives into natural sequences.',
          questions: [
            {
              id: 'ord_q1',
              type: 'word_order',
              prompt: 'Put these adjectives in the correct natural English order:',
              scrambledWords: ['a', 'wooden', 'beautiful', 'round', 'dining', 'table'],
              correctSentence: 'a beautiful round wooden dining table',
              contextHint: 'Opinion (beautiful) → Shape (round) → Material (wooden) → Purpose (dining) + Noun',
              whyExplanation: 'Follows OSASCOMP: beautiful (opinion) + round (shape) + wooden (material) + dining (purpose) + table.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l3_t3_adjective_endings',
      moduleId: 3,
      title: 'Adjective Endings',
      shortDesc: 'Common suffixes: -ful, -less, -able, -ive, -ous, and -ed vs. -ing (bored vs. boring).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adjective Suffixes & Endings',
          subtitle: 'Recognizing how nouns and verbs transform into descriptive adjectives.',
          conceptSummary: 'Many adjectives are formed by adding suffixes like -ful, -less, -able, -ive, -ous, -ic, -al, and -ed/-ing to nouns or verbs. Knowing these suffixes dramatically expands your vocabulary.',
          visualGraphic: {
            heroSentence: 'The tireless worker had a successful and productive career.',
            highlights: [
              { word: 'tireless', role: '-less (without tire)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'successful', role: '-ful (full of success)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'productive', role: '-ive (tending to produce)', color: 'bg-amber-100 text-amber-800 border-amber-300' }
            ],
            caption: 'Suffixes systematically alter meaning (careful = full of care; careless = without care).'
          },
          keyTakeaways: [
            '-ful (full of): hopeful, helpful, beautiful, powerful.',
            '-less (without): hopeless, helpless, painless, wireless.',
            '-able/-ible (capable of): comfortable, flexible, readable.',
            '-ed vs. -ing: -ed describes how a person feels (bored); -ing describes the cause/thing (boring).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why -ed vs. -ing Endings Matter',
          subtitle: 'Never accidentally say "I am boring" when you mean "I am bored"!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Meetings & Presentations',
              example: '"I was fascinated by the presentation vs. The presentation was fascinating."',
              whyNeeded: 'Mixing up -ed and -ing completely reverses who feels what.'
            }
          ],
          coachTip: 'Person feels it = -ed (I am interested). Thing causes it = -ing (The movie is interesting).'
        },
        {
          type: 'explanation',
          title: 'Major Suffix Meanings Breakdown',
          subtitle: 'Master the common patterns that build English adjectives.',
          coreRule: 'Suffixes carry specific semantic transformations from base words.',
          breakdown: [
            { term: '-ful / -less', plainDefinition: 'With vs. Without', simpleExample: 'careful / careless, useful / useless, harmful / harmless' },
            { term: '-able / -ible', plainDefinition: 'Able to be acted upon', simpleExample: 'enjoyable, reliable, affordable, visible' },
            { term: '-ous / -ious', plainDefinition: 'Having the quality of', simpleExample: 'dangerous, famous, ambitious, nutritious' },
            { term: '-ed vs. -ing', plainDefinition: 'Feeling (internal state) vs. Characteristic (external trigger)', simpleExample: 'confused (person feels it) vs. confusing (rule causes it)' }
          ]
        },
        {
          type: 'formula',
          title: 'The -ed vs. -ing Rule Formula',
          subtitle: '[Person] is [Verb-ed] BY [Thing] which is [Verb-ing]',
          formulaBlocks: [
            { label: 'Person Feeling', part: 'I am excited', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Cause / Event', part: 'The news is exciting', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The students', verbOrAux: 'were', objectOrComplement: 'exhausted after the exam', fullSentence: 'The students were exhausted after the exhausting exam.', context: 'School' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Suffixes in Everyday Conversation',
          subtitle: 'Professional emotions and evaluations.',
          examples: [
            { id: 'suf_ex1', category: 'work', categoryLabel: 'Project Debrief', sentence: 'We were amazed by the incredible efficiency of the new software.', breakdownNote: '"amazed" (-ed feeling) and "incredible" (-ible ability).', speakerRole: 'Project Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "I am Boring" Mistake',
          subtitle: 'The classic feeling vs. personality trait confusion.',
          mistakes: [
            {
              id: 'suf_m1',
              incorrect: 'I am so boring in this meeting.',
              correct: 'I am so bored in this meeting.',
              explanation: '"Boring" means your personality is dull; "bored" means you feel a lack of interest right now.',
              ruleTag: '-ed vs -ing Adjectives'
            }
          ],
          rememberRule: 'Use -ed for your feelings (I am bored, excited, confused); use -ing for things that cause them!'
        },
        {
          type: 'practice',
          title: 'Adjective Endings Practice',
          subtitle: 'Pick the right suffix for the context.',
          questions: [
            {
              id: 'suf_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct adjective form:',
              sentenceWithBlank: 'The instructions were very ___, so I felt completely ___.',
              options: ['confusing / confused', 'confused / confusing', 'confused / confused'],
              correctIndex: 0,
              grammarFocus: '-ing cause vs -ed feeling',
              whyExplanation: 'The instructions were "confusing" (causing confusion), so the speaker felt "confused" (experiencing the feeling).'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l3_t4_describing_materials',
      moduleId: 3,
      title: 'Describing What Something Is Made Of',
      shortDesc: 'Material adjectives (wooden, metallic, woolen) and noun adjuncts (glass bottle, leather shoes).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Describing Materials & Substances',
          subtitle: 'Using material adjectives and noun adjuncts to specify what things are made of.',
          conceptSummary: 'In English, we describe substances using either special adjective forms (wooden, metallic, woolen, golden) or by using the noun itself directly as an adjective (a leather jacket, a paper plate, a plastic cup).',
          visualGraphic: {
            heroSentence: 'He sat on a wooden bench drinking from a paper cup.',
            highlights: [
              { word: 'wooden', role: 'Material Adjective (wood + en)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'paper', role: 'Noun Adjunct used as Adjective', color: 'bg-blue-100 text-blue-800 border-blue-300' }
            ],
            caption: 'Some materials take -en (wood → wooden, wool → woolen), while many nouns stand directly before other nouns.'
          },
          keyTakeaways: [
            'Suffix -en forms adjectives for some materials: wood → wooden, wool → woolen, gold → golden.',
            'Direct noun adjuncts: leather sofa, cotton shirt, steel bridge, silver ring.',
            '"Made of" is used when material doesn\'t change chemically (table made of wood).',
            '"Made from" is used when material changes form (paper made from trees, cheese made from milk).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Material Descriptions Matter',
          subtitle: 'Essential for shopping, manufacturing specifications, and property descriptions.',
          adultSituations: [
            {
              icon: 'ShoppingBag',
              situation: 'Clothing Store & Online Orders',
              example: '"Is this sweater made of 100% pure wool or synthetic fiber?"',
              whyNeeded: 'Clear material vocabulary ensures you purchase exactly the fabric you need.'
            }
          ],
          coachTip: '"Made of" = you still see the material (chair made of oak). "Made from" = transformed (wine made from grapes).'
        },
        {
          type: 'explanation',
          title: 'Material Forms Reference',
          subtitle: 'Special -en words vs. noun adjuncts.',
          coreRule: 'Identify whether the material takes an adjective suffix or acts directly as an adjunct.',
          breakdown: [
            { term: 'Special -en Forms', plainDefinition: 'Historical material adjectives', simpleExample: 'wooden box, woolen blanket, golden necklace, earthen bowl' },
            { term: 'Direct Noun Adjuncts', plainDefinition: 'Noun functioning as modifier', simpleExample: 'leather shoes, silk scarf, rubber boots, marble countertop' },
            { term: 'Made of vs. Made from', plainDefinition: 'Physical retention vs. Chemical transformation', simpleExample: 'A wall made of bricks vs. Bread made from flour' }
          ]
        },
        {
          type: 'formula',
          title: 'Material Description Formula',
          subtitle: '[Determiner] + [Material Adjective / Noun] + [Object]',
          formulaBlocks: [
            { label: 'Determiner', part: 'A / The / These', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Material Modifier', part: 'ceramic / woolen / titanium', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Object', part: 'mug / sweater / watch', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The chef prefers', verbOrAux: 'using', objectOrComplement: 'stainless steel pans', fullSentence: 'The chef prefers using stainless steel pans.', context: 'Kitchen' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Materials in Daily Use',
          subtitle: 'Construction and shopping dialogues.',
          examples: [
            { id: 'mat_ex1', category: 'home', categoryLabel: 'Furniture Store', sentence: 'This dining table is made of solid oak with a glass top.', breakdownNote: '"solid oak" and "glass top" specify physical substances.', speakerRole: 'Salesperson' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Material Vocabulary Mistakes',
          subtitle: 'Incorrect use of "wood" vs. "wooden" or "made of" vs. "made from".',
          mistakes: [
            {
              id: 'mat_m1',
              incorrect: 'He carved a small wood statue.',
              correct: 'He carved a small wooden statue.',
              explanation: 'When modifying a noun with wood, use the adjective form "wooden" or the compound "wood". "Wooden" is standard for objects made of wood.',
              ruleTag: 'Material Adjective'
            }
          ],
          rememberRule: 'Use "wooden" for items crafted from wood (wooden door, wooden spoon, wooden bench)!'
        },
        {
          type: 'practice',
          title: 'Material Adjectives Practice',
          subtitle: 'Select the right material descriptor.',
          questions: [
            {
              id: 'mat_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the appropriate preposition:',
              sentenceWithBlank: 'This delicious artisan cheese is made ___ goat milk.',
              options: ['from', 'of', 'by'],
              correctIndex: 0,
              grammarFocus: 'Made from (transformation)',
              whyExplanation: 'Because milk chemically transforms into cheese, use "made from".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l3_t5_comparison_of_adjectives',
      moduleId: 3,
      title: 'The Comparison of Adjectives',
      shortDesc: 'Positive, Comparative (-er / more), Superlative (-est / most), and Irregular forms (good/better/best).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The Comparison of Adjectives',
          subtitle: 'Positive, Comparative (comparing 2), and Superlative (comparing 3+).',
          conceptSummary: 'Adjectives have three degrees of comparison: Positive (tall), Comparative (taller / more expensive), and Superlative (the tallest / the most expensive).',
          visualGraphic: {
            heroSentence: 'Tokyo is bigger than London, but it is the cleanest city in the world.',
            highlights: [
              { word: 'bigger than', role: 'Comparative (2 items: Tokyo vs London)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'the cleanest', role: 'Superlative (1 item among all in world)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Comparative compares 2 things with "than"; Superlative takes "the" for the top rank.'
          },
          keyTakeaways: [
            '1 syllable: add -er / -est (fast → faster → fastest).',
            '2 syllables ending in -y: change y to -ier / -iest (happy → happier → happiest).',
            '2+ syllables: use more / most (more creative, the most creative).',
            'Irregulars: good → better → best; bad → worse → worst; far → farther/further → farthest.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Comparison Forms Matter',
          subtitle: 'Essential for pricing discussions, performance appraisals, and decision making.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Workplace Comparisons',
              example: '"Option A is more cost-effective than Option B."',
              whyNeeded: 'Accurate comparative forms are vital for pitching proposals and business cases.'
            }
          ],
          coachTip: 'Never double-compare! Say "more efficient", NOT "more efficiently" or "more faster".'
        },
        {
          type: 'explanation',
          title: 'Rules for Forming Comparatives and Superlatives',
          subtitle: 'Syllable counts determine the construction.',
          coreRule: 'Count syllables to determine whether to add suffixes (-er/-est) or use modifying words (more/most).',
          breakdown: [
            { term: '1 Syllable', plainDefinition: 'Add -er / -est (double consonant if CVC)', simpleExample: 'tall → taller → the tallest; big → bigger → the biggest' },
            { term: '2 Syllables ending in -y', plainDefinition: 'Change y to -ier / -iest', simpleExample: 'easy → easier → easiest; early → earlier → earliest' },
            { term: '2+ Syllables', plainDefinition: 'Use more + adjective / most + adjective', simpleExample: 'modern → more modern; expensive → the most expensive' },
            { term: 'Irregular Adjectives', plainDefinition: 'Completely unique forms to memorize', simpleExample: 'good/better/best, bad/worse/worst, little/less/least' }
          ]
        },
        {
          type: 'formula',
          title: 'Comparative vs. Superlative Formula',
          subtitle: '[A] is [Comparative] + than + [B] OR [A] is the [Superlative] in/of [Group]',
          formulaBlocks: [
            { label: 'Comparative', part: 'Product A is faster than Product B', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Superlative', part: 'Product A is the fastest on the market', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'This quarter', verbOrAux: 'was', objectOrComplement: 'much better than last quarter', fullSentence: 'This quarter was much better than last quarter.', context: 'Finance' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Comparatives in Daily Dialogue',
          subtitle: 'Travel choices and product purchasing.',
          examples: [
            { id: 'comp_ex1', category: 'travel', categoryLabel: 'Hotel Booking', sentence: 'The boutique hotel is quieter and more convenient than the airport lodge.', breakdownNote: '"quieter" (1-syllable -er) and "more convenient" (3-syllable more).', speakerRole: 'Travel Guide' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Double Comparative Errors',
          subtitle: 'Never combine "more" with "-er".',
          mistakes: [
            {
              id: 'compm1',
              incorrect: 'This route is more shorter than the highway.',
              correct: 'This route is shorter than the highway.',
              explanation: 'Do not use both "more" and "-er" together. "Short" is 1 syllable, so use "shorter".',
              ruleTag: 'Double Comparative'
            },
            {
              id: 'compm2',
              incorrect: 'My results are more good than yesterday.',
              correct: 'My results are better than yesterday.',
              explanation: '"Good" is irregular: good → better → best. Never say "more good".',
              ruleTag: 'Irregular Comparative'
            }
          ],
          rememberRule: 'Never say "more better" or "more easier"—choose either the suffix or "more"!'
        },
        {
          type: 'practice',
          title: 'Comparative and Superlative Practice',
          subtitle: 'Fill in the correct comparative or superlative form.',
          questions: [
            {
              id: 'comp_q1',
              type: 'fill_blank',
              prompt: 'Choose the correct superlative form:',
              sentenceWithBlank: 'Of all the presentations today, Sarah\'s was the ___ organized.',
              options: ['most', 'more', 'mostly'],
              correctIndex: 0,
              grammarFocus: 'Superlative with "the"',
              whyExplanation: 'When comparing Sarah against all presentations (3+), use the superlative "the most organized".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l3_t6_adjective_phrases',
      moduleId: 3,
      title: 'Adjective Phrases',
      shortDesc: 'Groups of words functioning together as an adjective to describe a noun.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Adjective Phrases: Rich Descriptions',
          subtitle: 'Multi-word phrases that give detailed descriptions of nouns.',
          conceptSummary: 'An adjective phrase is a group of words headed by an adjective or preposition that modifies a noun or pronoun. It provides deeper, more vivid information than a single adjective alone.',
          visualGraphic: {
            heroSentence: 'The woman with the silver briefcase is extremely skilled at negotiation.',
            highlights: [
              { word: 'with the silver briefcase', role: 'Adjective Phrase (Modifying woman)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'extremely skilled at negotiation', role: 'Adjective Phrase (Modifying is/woman)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Adjective phrases can sit directly after the noun or follow a linking verb.'
          },
          keyTakeaways: [
            'An adjective phrase describes a noun (e.g. "a student full of enthusiasm").',
            'Prepositional phrases often act as adjective phrases ("the car in the driveway").',
            'Intensifier + Adjective phrases: "very proud of her team", "deeply committed to safety".'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Adjective Phrases Matter',
          subtitle: 'Elevates basic simple sentences into elegant, sophisticated prose.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Summaries',
              example: '"A candidate well versed in cloud infrastructure and data privacy."',
              whyNeeded: 'Condenses complex qualifications into clean, powerful descriptive phrases.'
            }
          ],
          coachTip: 'Notice how "The house on the hill" immediately tells you WHICH house without needing a whole new sentence!'
        },
        {
          type: 'explanation',
          title: 'Structure of Adjective Phrases',
          subtitle: 'Attributive phrases vs. Predicative phrases.',
          coreRule: 'An adjective phrase modifies a noun either directly next to it or across a linking verb.',
          breakdown: [
            { term: 'Adverb + Adjective', plainDefinition: 'Adjective modified by degree adverb', simpleExample: 'incredibly fast, remarkably well-written, unusually quiet' },
            { term: 'Adjective + Prepositional Complement', plainDefinition: 'Adjective followed by its prepositional object', simpleExample: 'fond of music, capable of leading, interested in design' },
            { term: 'Prepositional Phrase as Adjective', plainDefinition: 'Preposition phrase describing a preceding noun', simpleExample: 'the man in the blue suit, the cake with chocolate frosting' }
          ]
        },
        {
          type: 'formula',
          title: 'Adjective Phrase Formula',
          subtitle: '[Noun] + [Prepositional Adjective Phrase] OR [Subject] + [BE/Linking Verb] + [Adjective Phrase]',
          formulaBlocks: [
            { label: 'Noun', part: 'The engineer', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adjective Phrase', part: 'responsible for the project', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The team was', verbOrAux: 'eager', objectOrComplement: 'to start the new quarter', fullSentence: 'The team was eager to start the new quarter.', context: 'Project' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Adjective Phrases in Action',
          subtitle: 'Professional descriptions and everyday recommendations.',
          examples: [
            { id: 'ap_ex1', category: 'work', categoryLabel: 'Client Introduction', sentence: 'We have a design team completely dedicated to user experience.', breakdownNote: '"completely dedicated to user experience" acts as an adjective phrase describing team.', speakerRole: 'Agency Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Misplaced Descriptive Phrases',
          subtitle: 'Keep descriptive phrases close to the noun they modify.',
          mistakes: [
            {
              id: 'ap_m1',
              incorrect: 'I saw a man walking a dog with yellow sneakers.',
              correct: 'I saw a man in yellow sneakers walking a dog.',
              explanation: 'Place the adjective phrase "in yellow sneakers" right next to "the man", not after "the dog"!',
              ruleTag: 'Misplaced Modifier'
            }
          ],
          rememberRule: 'Always position the descriptive phrase directly next to the noun it describes!'
        },
        {
          type: 'practice',
          title: 'Adjective Phrases Practice',
          subtitle: 'Identify and construct clear adjective phrases.',
          questions: [
            {
              id: 'ap_q1',
              type: 'multiple_choice',
              prompt: 'Which part of this sentence is an adjective phrase? "The documents stored in the basement need to be scanned."',
              options: ['stored in the basement', 'The documents', 'need to be scanned', 'to be scanned'],
              correctIndex: 0,
              whyExplanation: '"stored in the basement" is a participial adjective phrase modifying the noun "documents".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
