import { Module } from '../../types';

export const lesson8Prepositions: Module = {
  id: 8,
  title: 'Lesson 8: Prepositions and Prepositional Phrases',
  tagline: 'Spatial, Temporal, Causal Relationships & Idiomatic Collocations',
  description: 'Master in/on/at for place and time, movement & directional prepositions, prepositions of cause and purpose, dependent preposition collocations, and prepositional phrases.',
  iconName: 'Compass',
  color: 'from-blue-600 to-indigo-700',
  topics: [
    {
      id: 'l8_t1_place_and_direction',
      moduleId: 8,
      title: 'Prepositions of Place and Direction',
      shortDesc: 'in, on, at for locations, plus movement: into, onto, through, across, towards, along.',
      estimatedMinutes: 7,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Prepositions of Place & Direction (IN / ON / AT Triangle)',
          subtitle: 'The golden pyramid of place: from general areas to exact points.',
          conceptSummary: 'Prepositions of place show where something is. Use IN for enclosed 3D spaces, cities, and countries; ON for surfaces, streets, and public transit; AT for specific exact points and addresses.',
          visualGraphic: {
            heroSentence: 'She works in New York, lives on Broadway, and is at the office right now.',
            highlights: [
              { word: 'in New York', role: 'IN = General City / Country / Enclosed Area', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'on Broadway', role: 'ON = Street / Surface / Transit Line', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'at the office', role: 'AT = Specific Point / Target Location', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'IN (Broadest) → ON (Streets/Surfaces) → AT (Exact Points).'
          },
          keyTakeaways: [
            'IN: enclosed spaces (in a room, in a box), cities (in Tokyo), countries (in France).',
            'ON: surfaces (on the desk, on the wall), streets (on Main Street), public transport (on the train, on the bus).',
            'AT: specific points (at the bus stop, at 450 Fifth Ave, at the entrance, at work).',
            'Direction/Movement: into (entering), onto (moving on top of), through (inside a tunnel/forest), across (from one side to other).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "In the Car" vs. "On the Bus" Matters',
          subtitle: 'The standing/walking rule for transportation prepositions.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Commuter Status Calls',
              example: '"I am on the train right now (NOT in the train)."',
              whyNeeded: 'If you can stand up and walk inside the vehicle, use ON (on a plane, on a train, on a bus, on a ship). If you must crouch/sit, use IN (in a car, in a taxi).'
            }
          ],
          coachTip: 'Walk inside = ON (on a plane/train/bus). Sit/crouch inside = IN (in a car/taxi)!'
        },
        {
          type: 'explanation',
          title: 'Place & Direction Matrix',
          subtitle: 'Static location vs. Dynamic movement.',
          coreRule: 'Identify whether the object is static (in, on, at) or moving across a boundary (into, onto, towards, through).',
          breakdown: [
            { term: 'IN (Enclosed / Volume)', plainDefinition: 'Inside physical 3D boundaries or geographical areas', simpleExample: 'in the building, in London, in the drawer' },
            { term: 'ON (Surface / Line)', plainDefinition: 'Resting on top or along a line/street', simpleExample: 'on the whiteboard, on 5th Avenue, on the 3rd floor' },
            { term: 'AT (Specific Point / Facility)', plainDefinition: 'Precise coordinate or institutional event', simpleExample: 'at the intersection, at the airport, at the conference' },
            { term: 'Movement: INTO vs. ONTO vs. THROUGH', plainDefinition: 'Entering volume vs. landing on surface vs. traversing volume', simpleExample: 'walked into the bank, climbed onto the roof, drove through the tunnel' }
          ]
        },
        {
          type: 'formula',
          title: 'Place & Movement Formulas',
          subtitle: '[Subject] + [BE / Live / Work] + [in / on / at] + [Place] OR [Subject] + [Action Verb] + [into / across] + [Destination]',
          formulaBlocks: [
            { label: 'Static Place', part: 'The headquarters is located at 100 Main St, in Seattle', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Directional Movement', part: 'The shipment is moving across international borders', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The delegate walked', verbOrAux: 'into', objectOrComplement: 'the main auditorium', fullSentence: 'The delegate walked into the main auditorium.', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Prepositions in Daily Life',
          subtitle: 'Giving directions and location updates.',
          examples: [
            { id: 'pop_ex1', category: 'travel', categoryLabel: 'Meeting Location', sentence: 'Let\'s meet at the coffee shop on the ground floor inside the hotel lobby.', breakdownNote: '"at the coffee shop" (point), "on the ground floor" (level), "inside the hotel lobby" (volume).', speakerRole: 'Client' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common Place Preposition Errors',
          subtitle: 'Using "at" with countries or "in" with street names.',
          mistakes: [
            {
              id: 'pop_m1',
              incorrect: 'Our regional office is at Germany.',
              correct: 'Our regional office is in Germany.',
              explanation: 'Countries and cities require the preposition "in", never "at".',
              ruleTag: 'In with Cities and Countries'
            },
            {
              id: 'pop_m2',
              incorrect: 'I am in the bus right now.',
              correct: 'I am on the bus right now.',
              explanation: 'Public transit vehicles where you can stand/walk use "on" (on the bus, on the train, on the plane).',
              ruleTag: 'On for Public Transit'
            }
          ],
          rememberRule: 'Use IN for cities and countries; use ON for streets and public transit; use AT for exact addresses and points!'
        },
        {
          type: 'practice',
          title: 'Place & Direction Practice',
          subtitle: 'Select the right preposition for the location.',
          questions: [
            {
              id: 'pop_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct preposition for a street location:',
              sentenceWithBlank: 'The new design studio is located ___ Regent Street.',
              options: ['on', 'in', 'at'],
              correctIndex: 0,
              grammarFocus: 'On with street names',
              whyExplanation: 'Streets without specific building numbers take "on" ("on Regent Street").'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l8_t2_prepositions_of_time',
      moduleId: 8,
      title: 'Prepositions of Time',
      shortDesc: 'IN (months, years, centuries, seasons), ON (days, dates), AT (precise clock times, holidays).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Prepositions of Time: IN, ON, AT',
          subtitle: 'The time pyramid: from broad eras down to the exact second.',
          conceptSummary: 'Prepositions of time tell when something occurs. IN is for long periods (centuries, decades, years, months, seasons). ON is for days and specific calendar dates. AT is for precise clock times and festive periods.',
          visualGraphic: {
            heroSentence: 'We launched in 2023, signed on March 15th, and celebrated at 8:00 PM.',
            highlights: [
              { word: 'in 2023', role: 'IN = Year / Long Period (Broadest)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'on March 15th', role: 'ON = Specific Date / Day of Week', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'at 8:00 PM', role: 'AT = Precise Clock Time (Most Specific)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'IN (Years/Months) → ON (Days/Dates) → AT (Clock Times).'
          },
          keyTakeaways: [
            'IN: months (in July), years (in 2025), seasons (in spring), centuries (in the 21st century), parts of day (in the morning/afternoon/evening).',
            'ON: days (on Monday), dates (on October 12th), specific days (on my birthday, on Christmas Day).',
            'AT: clock times (at 3:30 PM), night (at night), weekend (at the weekend - UK), holidays as periods (at Christmas).',
            'NO PREPOSITION with: last, next, every, this (e.g., "next Friday", NOT "on next Friday").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Time Preposition Precision Matters',
          subtitle: 'Essential for setting international meetings and avoiding schedule clashes.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Meeting Invitations',
              example: '"The board will convene on Thursday at 2:00 PM in the board room."',
              whyNeeded: 'Combines day (on Thursday), exact time (at 2 PM), and location seamlessly.'
            }
          ],
          coachTip: 'Never use in/on/at with "next", "last", or "this": say "I\'ll see you next Monday", NOT "on next Monday"!'
        },
        {
          type: 'explanation',
          title: 'Time Prepositions Master Reference',
          subtitle: 'The complete IN / ON / AT breakdown.',
          coreRule: 'Determine the length of the time unit: centuries/years/months (IN), days/dates (ON), clock times (AT).',
          breakdown: [
            { term: 'IN (Long periods & parts of day)', plainDefinition: 'Months, years, seasons, decades, eras', simpleExample: 'in December, in summer, in 2024, in the morning' },
            { term: 'ON (Days & Specific Dates)', plainDefinition: 'Any single day or calendar date', simpleExample: 'on Wednesday, on April 4th, on New Year\'s Day' },
            { term: 'AT (Exact Clock Points & Night)', plainDefinition: 'Specific hours and meal moments', simpleExample: 'at 9:15 AM, at noon, at midnight, at night' },
            { term: 'Other Time Prepositions', plainDefinition: 'Before, after, by (deadline), during, until/till', simpleExample: 'Submit by 5 PM (deadline) / Wait until Friday' }
          ]
        },
        {
          type: 'formula',
          title: 'Time Preposition Formula',
          subtitle: '[Event] + [on Day / Date] + [at Clock Time] + [in Month / Year]',
          formulaBlocks: [
            { label: 'Day / Date', part: 'on Friday, November 10th', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Clock Time', part: 'at 10:30 AM', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The quarterly review starts', verbOrAux: 'on Monday', objectOrComplement: 'at 9:00 AM sharp', fullSentence: 'The quarterly review starts on Monday at 9:00 AM sharp.', context: 'Operations' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Time Prepositions in Action',
          subtitle: 'Professional scheduling and event planning.',
          examples: [
            { id: 'pot_ex1', category: 'work', categoryLabel: 'Calendar Invite', sentence: 'The keynote address will take place on Wednesday at 11:00 AM in the grand ballroom.', breakdownNote: '"on Wednesday" (day) and "at 11:00 AM" (clock time).', speakerRole: 'Event Planner' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Time Preposition Errors',
          subtitle: 'Using "at" with months or adding prepositions before "this/next".',
          mistakes: [
            {
              id: 'pot_m1',
              incorrect: 'The project will conclude at August.',
              correct: 'The project will conclude in August.',
              explanation: 'Months require "in", not "at". (Use "in August").',
              ruleTag: 'In with Months'
            },
            {
              id: 'pot_m2',
              incorrect: 'I will see you on next Monday.',
              correct: 'I will see you next Monday.',
              explanation: 'Do not use "on", "in", or "at" before time expressions modified by next, last, this, or every.',
              ruleTag: 'No Preposition with Next/Last'
            }
          ],
          rememberRule: 'Use IN for months and years, ON for days and dates, AT for clock times!'
        },
        {
          type: 'practice',
          title: 'Prepositions of Time Practice',
          subtitle: 'Select the right time preposition.',
          questions: [
            {
              id: 'pot_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct time preposition for a specific date:',
              sentenceWithBlank: 'The contract was officially signed ___ September 24th.',
              options: ['on', 'in', 'at'],
              correctIndex: 0,
              grammarFocus: 'On with specific calendar dates',
              whyExplanation: 'Specific calendar dates take "on" ("on September 24th").'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l8_t3_cause_and_purpose',
      moduleId: 8,
      title: 'Prepositions of Cause and Purpose',
      shortDesc: 'due to, because of, owing to, for, with, out of (expressing reasons, motivations, and causes).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Prepositions of Cause & Purpose',
          subtitle: 'Connecting actions to reasons: because of, due to, owing to, out of, for.',
          conceptSummary: 'Prepositions of cause and purpose explain WHY an event happened or the intention behind an action. Common cause prepositions include "because of", "due to", "owing to", "out of" (motivation), and "for" (purpose/exchange).',
          visualGraphic: {
            heroSentence: 'The flight was delayed due to bad weather, but we traveled for business.',
            highlights: [
              { word: 'due to bad weather', role: 'Preposition of Cause (Reason noun phrase)', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'for business', role: 'Preposition of Purpose (Intended objective)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Prepositions of cause/purpose MUST be followed by a NOUN PHRASE, not a full clause with a verb.'
          },
          keyTakeaways: [
            'Because of / Due to + Noun Phrase (e.g., because of the rain, NOT because of it was raining).',
            'Because = Conjunction (followed by subject + verb: because it rained).',
            'Because of = Preposition (followed by noun phrase: because of the heavy rain).',
            'Out of: motivation / emotion (out of curiosity, out of respect, out of spite).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Because" vs. "Because Of" Matters',
          subtitle: 'A fundamental distinction between conjunctions and prepositions.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Summaries',
              example: '"Profits increased due to our digital transformation strategy."',
              whyNeeded: '"Due to + noun phrase" provides a concise, professional causal link.'
            }
          ],
          coachTip: 'Because + Subject + Verb ("because we worked hard"). Because OF + Noun phrase ("because of our hard work").'
        },
        {
          type: 'explanation',
          title: 'Cause and Purpose Reference Matrix',
          subtitle: 'Mastering the exact grammatical requirements.',
          coreRule: 'Ensure that prepositions of cause are followed by a noun phrase or gerund, never a full subject-verb clause.',
          breakdown: [
            { term: 'Because of / Due to', plainDefinition: 'Resulting from / As a consequence of', simpleExample: 'The match was canceled because of the storm.' },
            { term: 'Owing to / Thanks to', plainDefinition: 'Formal cause / Positive credit', simpleExample: 'Owing to unforeseen delays / Thanks to your dedication, we won.' },
            { term: 'Out of (Internal Motivation)', plainDefinition: 'Driven by an emotion or attitude', simpleExample: 'She asked out of curiosity. / He helped out of kindness.' },
            { term: 'For (Purpose / Function)', plainDefinition: 'Intended goal or target', simpleExample: 'This room is reserved for private interviews.' }
          ]
        },
        {
          type: 'formula',
          title: 'Cause & Purpose Formulas',
          subtitle: '[Effect / Action] + [due to / because of / out of] + [Noun Phrase]',
          formulaBlocks: [
            { label: 'Effect', part: 'The conference was rescheduled', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Cause Preposition', part: 'due to / because of', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Noun Phrase Reason', part: 'severe travel restrictions', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'They succeeded', verbOrAux: 'thanks to', objectOrComplement: 'meticulous preparation and teamwork', fullSentence: 'They succeeded thanks to meticulous preparation and teamwork.', context: 'Project' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Cause & Purpose in Dialogue',
          subtitle: 'Explaining circumstances and operational delays.',
          examples: [
            { id: 'cop_ex1', category: 'work', categoryLabel: 'Logistics Alert', sentence: 'Deliveries are experiencing minor delays owing to heavy port congestion.', breakdownNote: '"owing to heavy port congestion" explains the cause with a formal noun phrase.', speakerRole: 'Logistics Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Because of + Clause" Error',
          subtitle: 'Putting a full sentence after "because of".',
          mistakes: [
            {
              id: 'cop_m1',
              incorrect: 'We stayed home because of it was raining.',
              correct: 'We stayed home because of the rain. / We stayed home because it was raining.',
              explanation: '"Because of" is a preposition and must be followed by a noun ("the rain"), not a clause ("it was raining").',
              ruleTag: 'Because vs Because Of'
            }
          ],
          rememberRule: 'Use "because" before a full sentence (Subject + Verb); use "because of" before a noun!'
        },
        {
          type: 'practice',
          title: 'Cause & Purpose Practice',
          subtitle: 'Select between conjunctions and prepositional causal links.',
          questions: [
            {
              id: 'cop_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank before a noun phrase:',
              sentenceWithBlank: 'The event was relocated indoors ___ the sudden downpour.',
              options: ['because of', 'because', 'due'],
              correctIndex: 0,
              grammarFocus: 'Because of + noun phrase',
              whyExplanation: '"the sudden downpour" is a noun phrase, requiring the prepositional phrase "because of".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l8_t4_prepositions_with_specific_words',
      moduleId: 8,
      title: 'Prepositions with Specific Words',
      shortDesc: 'Dependent preposition collocations (interested in, good at, depend on, apply for, listen to, fond of).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Dependent Prepositions & Collocations',
          subtitle: 'Fixed pairings of verbs, adjectives, and nouns with specific prepositions.',
          conceptSummary: 'Many English verbs and adjectives require specific "dependent prepositions" that cannot be translated directly from other languages. For example: interested IN, good AT, depend ON, apologize FOR, listen TO.',
          visualGraphic: {
            heroSentence: 'She is skilled at negotiation and we rely on her expertise.',
            highlights: [
              { word: 'skilled at', role: 'Adjective + Preposition (skilled at + noun)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'rely on', role: 'Verb + Preposition (rely on + noun)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Dependent prepositions must be memorized as unified vocabulary units.'
          },
          keyTakeaways: [
            'Adjective + Preposition: interested IN, good AT, proud OF, afraid OF, similar TO, responsible FOR.',
            'Verb + Preposition: depend ON, listen TO, wait FOR, apply FOR, believe IN, specialize IN.',
            'Noun + Preposition: reason FOR, decrease IN, demand FOR, solution TO.',
            'Prepositions are always followed by a NOUN, PRONOUN, or GERUND (-ing).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Dependent Prepositions Matter',
          subtitle: 'Using the wrong preposition is the #1 identifier of non-native phrasing.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Cover Letter & Interview',
              example: '"I specialize in cloud architecture and am experienced in agile methodologies."',
              whyNeeded: '"Specialize in" and "experienced in" demonstrate authentic English fluency.'
            }
          ],
          coachTip: 'Always learn words with their prepositions: don\'t just learn "interested", learn "interested IN"!'
        },
        {
          type: 'explanation',
          title: 'Essential Dependent Preposition Directory',
          subtitle: 'Top workplace and academic collocations.',
          coreRule: 'Never translate prepositions word-for-word from your native language; learn the exact English pairing.',
          breakdown: [
            { term: 'Good AT / Bad AT / Skilled AT', plainDefinition: 'Ability and proficiency', simpleExample: 'She is good at mathematics. / He is skilled at coding.' },
            { term: 'Depend ON / Rely ON', plainDefinition: 'Trusting or contingent upon', simpleExample: 'The launch depends on final testing results.' },
            { term: 'Interested IN / Specialize IN', plainDefinition: 'Fields of focus and enthusiasm', simpleExample: 'I am interested in renewable energy.' },
            { term: 'Responsible FOR / Apologize FOR', plainDefinition: 'Accountability and cause', simpleExample: 'Who is responsible for this project?' }
          ]
        },
        {
          type: 'formula',
          title: 'Dependent Preposition Formula',
          subtitle: '[Subject] + [Verb / BE + Adj] + [Fixed Preposition] + [Noun / Gerund -ing]',
          formulaBlocks: [
            { label: 'Subject + BE', part: 'Our organization is', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Adjective + Prep', part: 'committed to / focused on', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Noun / Gerund', part: 'delivering sustainable energy solutions', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'She applied', verbOrAux: 'for', objectOrComplement: 'the Senior Product Manager position', fullSentence: 'She applied for the Senior Product Manager position.', context: 'Job Search' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Collocations in Daily Dialogue',
          subtitle: 'Workplace and academic interactions.',
          examples: [
            { id: 'dprep_ex1', category: 'work', categoryLabel: 'Team Introduction', sentence: 'David is responsible for client communications and is very good at resolving disputes.', breakdownNote: '"responsible for" and "good at" are fixed dependent prepositions.', speakerRole: 'Team Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Collocation Errors',
          subtitle: 'Saying "good in" or "depend of" or "married with".',
          mistakes: [
            {
              id: 'dprep_m1',
              incorrect: 'She is married with an engineer.',
              correct: 'She is married to an engineer.',
              explanation: 'In English, the adjective "married" pairs with the preposition "to", not "with".',
              ruleTag: 'Married to'
            },
            {
              id: 'dprep_m2',
              incorrect: 'It depends of the weather.',
              correct: 'It depends on the weather.',
              explanation: '"Depend" always takes the preposition "on" (or "upon"), never "of".',
              ruleTag: 'Depend on'
            }
          ],
          rememberRule: 'Say "married TO", "depend ON", and "good AT"!'
        },
        {
          type: 'practice',
          title: 'Dependent Prepositions Practice',
          subtitle: 'Select the exact preposition required by the verb or adjective.',
          questions: [
            {
              id: 'dprep_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct dependent preposition for "congratulate":',
              sentenceWithBlank: 'We all congratulated Sarah ___ her well-deserved promotion.',
              options: ['on', 'for', 'with'],
              correctIndex: 0,
              grammarFocus: 'Congratulate someone on something',
              whyExplanation: 'The standard English collocation is "congratulate someone ON something".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l8_t5_prepositional_phrases',
      moduleId: 8,
      title: 'Prepositional Phrases',
      shortDesc: 'Preposition + Modifier + Noun object acting as adjectives or adverbs in sentences.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Prepositional Phrases: The Building Blocks',
          subtitle: 'Preposition + Object of the Preposition creating descriptive phrases.',
          conceptSummary: 'A prepositional phrase consists of a preposition followed by its noun object (and any modifiers). It can function as an ADJECTIVE (The book on the shelf) or as an ADVERB (We studied during the night).',
          visualGraphic: {
            heroSentence: 'The conference room at the end of the hall is reserved for our team.',
            highlights: [
              { word: 'at the end of the hall', role: 'Adjective Prepositional Phrase (Modifies conference room)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'for our team', role: 'Adverb Prepositional Phrase (Modifies reserved)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Prepositional phrases add spatial, temporal, and descriptive context.'
          },
          keyTakeaways: [
            'Structure: Preposition + (Determiner/Adjective) + Noun / Pronoun Object.',
            'Adjectival Function: answers "Which one?" (The building with the glass facade).',
            'Adverbial Function: answers "When, Where, How, or Why?" (He spoke with confidence).',
            'Prepositional phrases NEVER contain the main subject or verb of the sentence.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Prepositional Phrases Matter',
          subtitle: 'Essential for eliminating subject-verb agreement confusion.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Complex Subject Agreements',
              example: '"The list of candidate names IS (not are) on the desk."',
              whyNeeded: 'Recognizing that "of candidate names" is a prepositional phrase ensures you agree the verb with "list", not "names".'
            }
          ],
          coachTip: 'The object of a preposition CANNOT be the subject of a sentence!'
        },
        {
          type: 'explanation',
          title: 'Adjectival vs. Adverbial Prepositional Phrases',
          subtitle: 'How to classify and use them effectively.',
          coreRule: 'If the phrase modifies a noun, it is adjectival. If it modifies a verb, adjective, or clause, it is adverbial.',
          breakdown: [
            { term: 'Adjectival Prepositional Phrase', plainDefinition: 'Modifies a preceding noun', simpleExample: 'The file on your desk is urgent. (Which file? The one on your desk).' },
            { term: 'Adverbial Prepositional Phrase (Time/Place/Manner)', plainDefinition: 'Modifies the action verb', simpleExample: 'She spoke with conviction. / We arrived in the morning.' },
            { term: 'Chained Prepositional Phrases', plainDefinition: 'Multiple phrases stacked together', simpleExample: 'at the corner of 5th Ave in Manhattan' }
          ]
        },
        {
          type: 'formula',
          title: 'Prepositional Phrase Formula',
          subtitle: '[Preposition] + [Optional Modifiers] + [Noun / Pronoun Object]',
          formulaBlocks: [
            { label: 'Preposition', part: 'under / across / with', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Modifier', part: 'immense / the new', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Noun Object', part: 'pressure / bridge / leadership', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The team worked', verbOrAux: 'under tight deadlines', objectOrComplement: 'to deliver the project', fullSentence: 'The team worked under tight deadlines to deliver the project.', context: 'Development' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Prepositional Phrases in Action',
          subtitle: 'Professional descriptions and architectural instructions.',
          examples: [
            { id: 'pphr_ex1', category: 'work', categoryLabel: 'Office Directions', sentence: 'The documents inside the cabinet next to the printer contain the financial audit.', breakdownNote: '"inside the cabinet" and "next to the printer" are chained prepositional phrases.', speakerRole: 'Office Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Prepositional Phrase Traps',
          subtitle: 'Pronoun case errors inside prepositional phrases (between you and I).',
          mistakes: [
            {
              id: 'pphr_m1',
              incorrect: 'This matter is strictly between you and I.',
              correct: 'This matter is strictly between you and me.',
              explanation: 'Prepositions require OBJECT pronouns (me, him, her, us, them), never subject pronouns like "I".',
              ruleTag: 'Preposition + Object Pronoun'
            }
          ],
          rememberRule: 'Always use object pronouns after prepositions: "between you and me", "for him and her"!'
        },
        {
          type: 'practice',
          title: 'Prepositional Phrases Practice',
          subtitle: 'Identify pronoun case and function in prepositional phrases.',
          questions: [
            {
              id: 'pphr_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct object pronoun after the preposition "between":',
              sentenceWithBlank: 'Let\'s keep this confidential strategy strictly between you and ___.',
              options: ['me', 'I', 'myself'],
              correctIndex: 0,
              grammarFocus: 'Object pronoun after preposition',
              whyExplanation: 'Prepositions require object pronouns: "between you and me".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l8_t6_preposition_placement_stranding',
      moduleId: 8,
      title: 'Preposition Placement & Stranded Prepositions',
      shortDesc: 'Prepositions at the end of sentences in natural modern English (Who are you talking to? What is this for?).',
      estimatedMinutes: 5,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Preposition Placement: Natural vs. Formal English',
          subtitle: 'Ending sentences with prepositions naturally vs. formal fronting.',
          conceptSummary: 'In natural, modern English, prepositions frequently sit at the end of questions and relative clauses (e.g., "What are you looking for?", "Who did you speak with?"). This is called preposition stranding and is completely standard in contemporary speech.',
          visualGraphic: {
            heroSentence: 'Who are you working with? (Natural) vs. With whom are you working? (Formal).',
            highlights: [
              { word: 'working with?', role: 'Natural Stranded Preposition at Sentence End', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
              { word: 'With whom', role: 'Ultra-Formal Fronted Preposition + Whom', color: 'bg-blue-100 text-blue-800 border-blue-300' }
            ],
            caption: 'Ending sentences with prepositions is natural and standard in modern English.'
          },
          keyTakeaways: [
            'Natural Questions: "What are you talking about?", "Where are you coming from?".',
            'Relative Clauses: "That is the candidate I told you about."',
            'Ultra-formal writing: "The candidate about whom I spoke" (reserved for academic/legal texts).',
            'Do NOT use unnecessary trailing prepositions: "Where are you at?" (Incorrect → say "Where are you?").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Natural Placement Matters',
          subtitle: 'Avoid sounding stiff, archaic, or artificially formal in daily conversations.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Modern Workplace Chats',
              example: '"Which project are you working on? (Natural and friendly)."',
              whyNeeded: 'Asking "On which project are you working?" can sound overly rigid and disconnected.'
            }
          ],
          coachTip: 'It is 100% fine to end a sentence with a preposition in modern English when it sounds natural!'
        },
        {
          type: 'explanation',
          title: 'Stranded vs. Fronted Prepositions',
          subtitle: 'Register comparison and guidelines.',
          coreRule: 'Use end-position prepositions in conversational and standard professional English; use fronted prepositions only in strict legal or academic registers.',
          breakdown: [
            { term: 'Everyday / Standard Business', plainDefinition: 'Preposition at end of question/clause', simpleExample: 'What is this software used for? / That is the company she works for.' },
            { term: 'Strict Legal / Academic', plainDefinition: 'Preposition fronted before whom/which', simpleExample: 'For what purpose is this software used? / That is the firm for which she works.' },
            { term: 'Unnecessary Prepositions to Eliminate', plainDefinition: 'Slang additions with no grammatical function', simpleExample: 'Where is the meeting at? → Where is the meeting?' }
          ]
        },
        {
          type: 'formula',
          title: 'Natural Question Placement Formula',
          subtitle: '[Question Word] + [Auxiliary] + [Subject] + [Verb] + [Preposition]?',
          formulaBlocks: [
            { label: 'Question Word', part: 'Which client / Who', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Aux + Subject + Verb', part: 'are you presenting', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'End Preposition', part: 'to?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'What topic did the speaker', verbOrAux: 'focus', objectOrComplement: 'on during the webinar?', fullSentence: 'What topic did the speaker focus on during the webinar?', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Natural Placement in Daily Life',
          subtitle: 'Friendly office questions and inquiries.',
          examples: [
            { id: 'ppl_ex1', category: 'work', categoryLabel: 'Coffee Break', sentence: 'Which university did you graduate from? — I graduated from Michigan State.', breakdownNote: '"graduate from" with natural end preposition.', speakerRole: 'Colleague' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Redundant End Prepositions',
          subtitle: 'Adding "at" or "to" where it serves no grammatical purpose.',
          mistakes: [
            {
              id: 'ppl_m1',
              incorrect: 'Where are you going to? / Where are you at?',
              correct: 'Where are you going? / Where are you?',
              explanation: '"Where" already contains the concept of location or destination; trailing "at" or "to" is redundant.',
              ruleTag: 'Redundant Preposition with Where'
            }
          ],
          rememberRule: 'Say "Where are you?" (NOT "Where are you at?")!'
        },
        {
          type: 'practice',
          title: 'Preposition Placement Practice',
          subtitle: 'Form natural questions and eliminate redundant prepositions.',
          questions: [
            {
              id: 'ppl_q1',
              type: 'sentence_correction',
              prompt: 'Choose the cleanest standard English sentence without redundant prepositions:',
              incorrectSentence: 'Do you know where the conference room is at?',
              correctSentence: 'Do you know where the conference room is?',
              errorHighlight: 'is at',
              options: [
                'Do you know where the conference room is?',
                'Do you know where the conference room is at?',
                'Do you know where at the conference room is?'
              ],
              correctIndex: 0,
              whyExplanation: '"Where" expresses location, making the trailing "at" redundant in standard English.'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
