import { Module } from '../../types';

export const lesson9Conjunctions: Module = {
  id: 9,
  title: 'Lesson 9: Conjunctions and Transitions',
  tagline: 'FANBOYS, Subordination, Correlatives & Discourse Markers',
  description: 'Master connecting words that bridge ideas, create complex sentences, and structure logical arguments: Coordinating (FANBOYS), Subordinating, Correlative pairs, and Conjunctive Adverbs.',
  iconName: 'GitMerge',
  color: 'from-amber-600 to-orange-600',
  topics: [
    {
      id: 'l9_t1_coordinating_conjunctions',
      moduleId: 9,
      title: 'Coordinating Conjunctions (FANBOYS)',
      shortDesc: 'For, And, Nor, But, Or, Yet, So connecting equal grammatical units and independent clauses.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Coordinating Conjunctions: FANBOYS',
          subtitle: 'The 7 universal connectors for equal words, phrases, and independent clauses.',
          conceptSummary: 'Coordinating conjunctions connect words, phrases, or clauses of equal grammatical rank. Remember the acronym FANBOYS: For (cause), And (addition), Nor (negative addition), But (contrast), Or (choice), Yet (unexpected contrast), So (result).',
          visualGraphic: {
            heroSentence: 'She is skilled, yet she remains humble, so everyone respects her.',
            highlights: [
              { word: ', yet', role: 'FANBOYS (Contrast / Concession)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: ', so', role: 'FANBOYS (Result / Consequence)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'When joining two independent clauses, always place a comma BEFORE the FANBOYS conjunction.'
          },
          keyTakeaways: [
            'F = For (reason / formal because)',
            'A = And (addition / combination)',
            'N = Nor (negative alternative: neither... nor / requires inversion)',
            'B = But (direct contrast / exception)',
            'O = Or (alternative / option)',
            'Y = Yet (surprising contrast / concession)',
            'S = So (cause and effect / result)'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why the FANBOYS Comma Rule Matters',
          subtitle: 'Eliminates run-on sentences and comma splices in professional correspondence.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Reports',
              example: '"The market was volatile, but our portfolio grew by 14%."',
              whyNeeded: 'Placing a comma before "but" clearly delineates two complete independent thoughts.'
            }
          ],
          coachTip: 'Use a comma before FANBOYS only when joining two COMPLETE clauses (each with its own subject and verb)!'
        },
        {
          type: 'explanation',
          title: 'FANBOYS Functions & Inversion Rules',
          subtitle: 'Meaning, logic, and grammatical constraints.',
          coreRule: 'Independent Clause + COMMA + FANBOYS + Independent Clause.',
          breakdown: [
            { term: 'And / But / Or', plainDefinition: 'Standard addition, contrast, and choice', simpleExample: 'We studied hard, and we passed the exam.' },
            { term: 'Yet (Surprising Contrast)', plainDefinition: 'Similar to but, emphasizes an unexpected outcome', simpleExample: 'The task was daunting, yet they completed it on time.' },
            { term: 'So (Result)', plainDefinition: 'Connects cause to effect', simpleExample: 'The server was slow, so we upgraded the hardware.' },
            { term: 'Nor (Negative Inversion)', plainDefinition: 'Neither option is true; inverts subject and verb', simpleExample: 'He doesn\'t smoke, nor does he drink alcohol.' }
          ]
        },
        {
          type: 'formula',
          title: 'FANBOYS Compound Sentence Formula',
          subtitle: '[Independent Clause 1] + [ , + FANBOYS ] + [Independent Clause 2]',
          formulaBlocks: [
            { label: 'Independent Clause 1', part: 'The team worked late into the evening', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Comma + FANBOYS', part: ', and / , but / , so', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Independent Clause 2', part: 'they delivered the product on schedule', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The prototype failed initial tests,', verbOrAux: 'yet the engineers', objectOrComplement: 'refused to give up', fullSentence: 'The prototype failed initial tests, yet the engineers refused to give up.', context: 'Engineering' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'FANBOYS in Real Life',
          subtitle: 'Everyday communication and team emails.',
          examples: [
            { id: 'fnb_ex1', category: 'work', categoryLabel: 'Project Status', sentence: 'We have finalized the budget, so we are ready to commence development next week.', breakdownNote: '", so" connects the milestone to the next step.', speakerRole: 'Scrum Master' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Comma Splices and Missing Commas',
          subtitle: 'Joining two sentences with just a comma or forgetting the conjunction.',
          mistakes: [
            {
              id: 'fnb_m1',
              incorrect: 'The report was due today, I stayed up late to finish it. (Comma splice)',
              correct: 'The report was due today, so I stayed up late to finish it. / The report was due today; I stayed up late...',
              explanation: 'A comma alone cannot join two independent clauses. You must use a comma + coordinating conjunction (", so").',
              ruleTag: 'Avoid Comma Splices'
            }
          ],
          rememberRule: 'Never join two complete sentences with just a comma—add a FANBOYS word or use a semicolon!'
        },
        {
          type: 'practice',
          title: 'Coordinating Conjunctions Practice',
          subtitle: 'Select the right FANBOYS connector.',
          questions: [
            {
              id: 'fnb_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the conjunction showing negative addition with verb inversion:',
              sentenceWithBlank: 'She did not accept the offer, ___ did she show any interest in negotiating.',
              options: ['nor', 'or', 'so'],
              correctIndex: 0,
              grammarFocus: 'Negative inversion with nor',
              whyExplanation: '"Nor" connects negative statements and causes inversion ("nor did she").'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l9_t2_subordinating_conjunctions',
      moduleId: 9,
      title: 'Subordinating Conjunctions',
      shortDesc: 'because, although, even though, while, whereas, since, unless, provided that, before, after.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Subordinating Conjunctions: Creating Complex Sentences',
          subtitle: 'Connecting dependent ideas to main clauses: time, condition, cause, and concession.',
          conceptSummary: 'Subordinating conjunctions join a dependent (subordinate) clause to an independent clause. The dependent clause cannot stand alone as a sentence. Common conjunctions: although, because, since, while, unless, if, after, before, provided that.',
          visualGraphic: {
            heroSentence: 'Although the deadline was tight, the team delivered an exceptional product.',
            highlights: [
              { word: 'Although the deadline was tight,', role: 'Dependent Subordinate Clause (Concession)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'the team delivered an exceptional product.', role: 'Independent Main Clause (Stands alone)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'When the dependent clause comes first, follow it with a COMMA.'
          },
          keyTakeaways: [
            'Concession / Contrast: although, even though, though, while, whereas.',
            'Cause / Reason: because, since, as, given that.',
            'Condition: if, unless (if not), provided that, as long as.',
            'Time: before, after, while, as soon as, until, whenever.',
            'Comma Rule: Dependent First → COMMA. Main First → NO COMMA.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Subordination Matters',
          subtitle: 'The hallmark of mature, nuanced adult writing.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Strategic Negotiations',
              example: '"Unless we reach a consensus today, we will have to delay the product launch."',
              whyNeeded: 'Structures conditional deadlines clearly and authoritatively.'
            }
          ],
          coachTip: 'Remember: "Unless" means "if not"—never use another negative with unless (NOT "Unless you don\'t pay")!'
        },
        {
          type: 'explanation',
          title: 'Subordinating Conjunction Categories',
          subtitle: 'Mastering the 4 pillars of subordination.',
          coreRule: 'Subordinate Clause at start requires a comma. Subordinate Clause at end needs NO comma.',
          breakdown: [
            { term: 'Concession / Surprise Contrast', plainDefinition: 'Although, Even though, Though, Whereas', simpleExample: 'Even though it was raining heavily, we went for a run.' },
            { term: 'Condition', plainDefinition: 'Unless (= if not), Provided that, As long as', simpleExample: 'Unless you register early, tickets will sell out.' },
            { term: 'Time & Sequence', plainDefinition: 'As soon as, Once, Until, While', simpleExample: 'As soon as the results arrive, we will inform you.' },
            { term: 'The Comma Shift', plainDefinition: 'Front clause vs. Back clause comma rule', simpleExample: 'Because he studied, he passed (Comma) vs. He passed because he studied (No comma).' }
          ]
        },
        {
          type: 'formula',
          title: 'Complex Sentence Formulas',
          subtitle: '[Subordinating Conjunction + Clause 1] , [Clause 2] OR [Clause 1] + [Sub Conjunction + Clause 2]',
          formulaBlocks: [
            { label: 'Front Dependent Clause', part: 'Although market conditions were volatile ,', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Independent Main Clause', part: 'our revenue grew by fifteen percent.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We will begin the session', verbOrAux: 'as soon as', objectOrComplement: 'the keynote speaker arrives', fullSentence: 'We will begin the session as soon as the keynote speaker arrives.', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Subordination in Daily Life',
          subtitle: 'Contract stipulations and project management.',
          examples: [
            { id: 'subc_ex1', category: 'work', categoryLabel: 'Contract Clause', sentence: 'Provided that all quality benchmarks are met, the project will be approved for full production.', breakdownNote: '"Provided that" sets a formal professional condition.', speakerRole: 'Quality Assurance Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Although + But Double Conjunction Error',
          subtitle: 'Using both "although" and "but" in the same sentence (*Although it rained, but we went out).',
          mistakes: [
            {
              id: 'subc_m1',
              incorrect: 'Although she was tired, but she finished the report.',
              correct: 'Although she was tired, she finished the report. / She was tired, but she finished the report.',
              explanation: 'Never use "although" and "but" together in one sentence. Choose one connector.',
              ruleTag: 'No Although + But Doubling'
            }
          ],
          rememberRule: 'Never combine "Although" with "But" or "Because" with "So" in the same sentence!'
        },
        {
          type: 'practice',
          title: 'Subordinating Conjunctions Practice',
          subtitle: 'Select the right subordinating conjunction.',
          questions: [
            {
              id: 'subc_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the conjunction meaning "if not":',
              sentenceWithBlank: 'We cannot issue a refund ___ you provide the original purchase receipt.',
              options: ['unless', 'although', 'because'],
              correctIndex: 0,
              grammarFocus: 'Unless for negative condition',
              whyExplanation: '"Unless" means "if you do not provide", which fits the condition for issuing a refund.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l9_t3_correlative_conjunctions',
      moduleId: 9,
      title: 'Correlative Conjunctions',
      shortDesc: 'both...and, either...or, neither...nor, not only...but also, whether...or (parallel structure & subject-verb agreement).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Correlative Conjunctions: Paired Connectors',
          subtitle: 'Both...and, Either...or, Neither...nor, Not only...but also.',
          conceptSummary: 'Correlative conjunctions work in matched pairs to connect grammatically parallel sentence elements. They require parallel structure (noun with noun, verb with verb) and follow the "Proximity Rule" for subject-verb agreement with either/or and neither/nor.',
          visualGraphic: {
            heroSentence: 'Not only did she design the UI, but she also programmed the backend.',
            highlights: [
              { word: 'Not only did she design', role: 'First Pair Element + Inversion', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'but she also programmed', role: 'Second Pair Element (Parallel Verb)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Correlative pairs require strict grammatical parallelism between both branches.'
          },
          keyTakeaways: [
            'Both ... and: always plural verb (Both the manager and the lead ARE attending).',
            'Either ... or: agreement with closest subject (Either the teacher or the students WERE there).',
            'Neither ... nor: agreement with closest subject (Neither the CEO nor the directors ARE present).',
            'Not only ... but also: emphasizes dual accomplishments (takes parallel structure).',
            'Whether ... or: expressing alternatives or doubts.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why the Proximity Rule Matters',
          subtitle: 'Prevents subject-verb agreement errors when subjects have mixed numbers.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Team Communications',
              example: '"Neither the project manager nor the developers WERE (not was) aware of the bug."',
              whyNeeded: '"Developers" is plural and sits closest to the verb, so the verb must be plural ("were").'
            }
          ],
          coachTip: 'With "either...or" and "neither...nor", the verb agrees with the subject CLOSEST to it!'
        },
        {
          type: 'explanation',
          title: 'Parallelism & Agreement Rules',
          subtitle: 'Mastering correlative pairs.',
          coreRule: 'Keep elements after each connector grammatically identical (Noun + Noun, Adjective + Adjective, Clause + Clause).',
          breakdown: [
            { term: 'Both ... and', plainDefinition: 'Two positive elements together; always plural', simpleExample: 'Both Paris and Rome are magnificent cities.' },
            { term: 'Either ... or / Neither ... nor', plainDefinition: 'Choice / Negative pairing; verb agrees with nearest subject', simpleExample: 'Neither the supervisor nor the employees were informed.' },
            { term: 'Not only ... but also', plainDefinition: 'Double impact; requires strict parallelism', simpleExample: 'She is not only intelligent but also hardworking.' },
            { term: 'Not only at Sentence Start', plainDefinition: 'Causes auxiliary-subject inversion', simpleExample: 'Not only DID he finish early, BUT he ALSO helped his peers.' }
          ]
        },
        {
          type: 'formula',
          title: 'Correlative Conjunction Formula',
          subtitle: '[Pair Part 1] + [Element A] + [Pair Part 2] + [Element B]',
          formulaBlocks: [
            { label: 'Part 1', part: 'Not only / Either / Both', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Element A', part: 'the frontend architecture', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Part 2', part: 'but also / or / and', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Element B', part: 'the database infrastructure', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Either the director or the board members', verbOrAux: 'have', objectOrComplement: 'the authority to approve this budget', fullSentence: 'Either the director or the board members have the authority to approve this budget.', context: 'Corporate' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Correlatives in Daily Dialogue',
          subtitle: 'Professional announcements and marketing copy.',
          examples: [
            { id: 'cor_ex1', category: 'work', categoryLabel: 'Product Launch', sentence: 'The new device is not only remarkably lightweight but also incredibly powerful.', breakdownNote: '"not only lightweight but also powerful" maintains parallel adjective structure.', speakerRole: 'Product Evangelist' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Parallelism & Pair Misalignment',
          subtitle: 'Mixing mismatched pairs (*neither...or) or breaking parallel grammatical structure.',
          mistakes: [
            {
              id: 'cor_m1',
              incorrect: 'Neither the manager or the client was satisfied.',
              correct: 'Neither the manager nor the client was satisfied.',
              explanation: '"Neither" must always pair with "nor", never "or".',
              ruleTag: 'Neither...Nor Pairing'
            }
          ],
          rememberRule: 'Always pair Either with Or, and Neither with Nor!'
        },
        {
          type: 'practice',
          title: 'Correlative Conjunctions Practice',
          subtitle: 'Select the correct paired connector and verb agreement.',
          questions: [
            {
              id: 'cor_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb based on the proximity rule:',
              sentenceWithBlank: 'Neither the graphic designer nor the copywriters ___ ready to submit their drafts.',
              options: ['were', 'was', 'is'],
              correctIndex: 0,
              grammarFocus: 'Proximity rule with plural nearest subject',
              whyExplanation: 'The subject closest to the verb is "copywriters" (plural), so the verb must be "were".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l9_t4_linking_adverbs_transitions',
      moduleId: 9,
      title: 'Linking Adverbs and Transitions',
      shortDesc: 'Conjunctive adverbs (however, therefore, furthermore, nevertheless, moreover, consequently, in addition).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Linking Adverbs & Transitions: Structuring Logic',
          subtitle: 'However, Therefore, Furthermore, Consequently, In addition.',
          conceptSummary: 'Conjunctive adverbs (linking words / transition words) connect independent sentences or ideas to demonstrate cause, contrast, addition, or sequence. They are punctuated with a SEMICOLON and COMMA when connecting clauses in one sentence (; however, ).',
          visualGraphic: {
            heroSentence: 'The market was challenging; however, our team exceeded every target.',
            highlights: [
              { word: '; however,', role: 'Conjunctive Adverb (Semicolon before, Comma after)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Punctuation rule: Sentence 1; Transition, Sentence 2.'
          },
          keyTakeaways: [
            'Contrast: however, nevertheless, on the other hand, nonetheless.',
            'Result / Cause: therefore, consequently, as a result, thus, hence.',
            'Addition: furthermore, moreover, in addition, additionally.',
            'Punctuation: Semicolon before, comma after (e.g. "; therefore, ").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Transition Punctuation Matters',
          subtitle: 'Writing "; however," correctly is the mark of high-level English literacy.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Briefs',
              example: '"Production costs rose significantly; consequently, we adjusted pricing."',
              whyNeeded: 'Conjunctive adverbs clearly establish logical cause-and-effect relationships.'
            }
          ],
          coachTip: 'Never connect two sentences with just a comma and "however"—that creates a comma splice! Use a semicolon or a period.'
        },
        {
          type: 'explanation',
          title: 'Transition Categories & Punctuation',
          subtitle: 'Complete list of formal linking adverbs.',
          coreRule: 'Use [ ; + Conjunctive Adverb + , ] between two independent sentences.',
          breakdown: [
            { term: 'Contrast / Concession', plainDefinition: 'However, Nevertheless, Nonetheless', simpleExample: 'The initial launch was delayed; however, user feedback was overwhelmingly positive.' },
            { term: 'Result / Cause & Effect', plainDefinition: 'Therefore, Consequently, As a result, Thus', simpleExample: 'Sales dropped in Q1; therefore, we restructured our marketing campaign.' },
            { term: 'Addition / Extension', plainDefinition: 'Furthermore, Moreover, In addition', simpleExample: 'The app is lightning-fast; furthermore, it uses 50% less battery.' }
          ]
        },
        {
          type: 'formula',
          title: 'Conjunctive Adverb Punctuation Formula',
          subtitle: '[Clause 1] ; [however / therefore / furthermore] , [Clause 2]',
          formulaBlocks: [
            { label: 'Independent Clause 1', part: 'The initial data was inconclusive', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Punctuation & Transition', part: '; however ,', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Independent Clause 2', part: 'further analysis revealed significant patterns.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The server capacity was doubled;', verbOrAux: 'therefore,', objectOrComplement: 'downtime was reduced to zero', fullSentence: 'The server capacity was doubled; therefore, downtime was reduced to zero.', context: 'IT Ops' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Transitions in Business Writing',
          subtitle: 'Formal corporate emails and analytical reports.',
          examples: [
            { id: 'lat_ex1', category: 'work', categoryLabel: 'Financial Summary', sentence: 'Operational costs have decreased by 12%; furthermore, customer satisfaction scores have reached an all-time high.', breakdownNote: '"; furthermore," adds positive data points logically.', speakerRole: 'CFO' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "However" Comma Splice',
          subtitle: 'Using a comma instead of a semicolon before "however".',
          mistakes: [
            {
              id: 'lat_m1',
              incorrect: 'We loved the proposal, however, we could not afford it.',
              correct: 'We loved the proposal; however, we could not afford it. / We loved the proposal. However, we could not afford it.',
              explanation: '"However" is an adverb, not a coordinating conjunction like "but". It requires a semicolon or period before it.',
              ruleTag: 'Semicolon with However'
            }
          ],
          rememberRule: 'Put a semicolon (;) before "however" and a comma (,) after it when joining two clauses!'
        },
        {
          type: 'practice',
          title: 'Linking Adverbs Practice',
          subtitle: 'Punctuate and select logical transition words.',
          questions: [
            {
              id: 'lat_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the transition expressing a direct logical consequence:',
              sentenceWithBlank: 'The company exceeded its annual targets; ___, all staff members received bonuses.',
              options: ['consequently', 'however', 'nevertheless'],
              correctIndex: 0,
              grammarFocus: 'Consequently for logical result',
              whyExplanation: '"Consequently" expresses a direct result or outcome of exceeding the annual targets.'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
