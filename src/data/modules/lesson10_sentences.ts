import { Module } from '../../types';

export const lesson10Sentences: Module = {
  id: 10,
  title: 'Lesson 10: Sentences and Clause Structure',
  tagline: 'Syntax, Sentence Architecture, Complements & Error Fixes',
  description: 'Master sentence classification (declarative, interrogative, imperative, exclamatory), structural architectures (simple, compound, complex, compound-complex), subject/predicate breakdowns, direct/indirect objects, complements, and fixing run-ons & fragments.',
  iconName: 'LayoutGrid',
  color: 'from-cyan-600 to-blue-700',
  topics: [
    {
      id: 'l10_t1_four_types_of_sentences',
      moduleId: 10,
      title: 'Four Types of Sentences',
      shortDesc: 'Declarative (statements), Interrogative (questions), Imperative (commands/requests), Exclamatory (strong emotion).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'The Four Sentence Types by Purpose',
          subtitle: 'Declarative, Interrogative, Imperative, and Exclamatory sentences.',
          conceptSummary: 'Every English sentence serves one of four functional purposes: sharing information (Declarative), asking questions (Interrogative), giving instructions/commands (Imperative), or expressing intense emotion (Exclamatory).',
          visualGraphic: {
            heroSentence: 'Please review the documents (Imperative) because the client called (Declarative)!',
            highlights: [
              { word: 'Please review the documents', role: 'Imperative (Command/Request with implied "you")', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'because the client called', role: 'Declarative (Statement of fact)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'End punctuation matches intent: period (.), question mark (?), or exclamation point (!).'
          },
          keyTakeaways: [
            'Declarative: makes a statement of fact or opinion. Ends with a period (.).',
            'Interrogative: asks an inquiry. Ends with a question mark (?).',
            'Imperative: gives a directive, command, or polite request. Subject is implied "you".',
            'Exclamatory: expresses surprise or strong excitement. Ends with an exclamation point (!).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Sentence Types Matter',
          subtitle: 'Imperative clarity is essential for SOPs, instructions, and user interfaces.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Operating Procedures (SOP)',
              example: '"Save the configuration file and restart the server (Imperative).',
              whyNeeded: 'Imperatives provide crisp, unambiguous instructions without clutter.'
            }
          ],
          coachTip: 'In imperative sentences (e.g., "Close the door"), the subject is the invisible implied "You"!'
        },
        {
          type: 'explanation',
          title: 'The 4 Types Matrix',
          subtitle: 'Punctuation and grammatical markers.',
          coreRule: 'Identify the functional intention of the sentence to punctuate and structure it accurately.',
          breakdown: [
            { term: '1. Declarative (Statement)', plainDefinition: 'Conveys facts, opinions, or ideas', simpleExample: 'Our team launched the updated application today.' },
            { term: '2. Interrogative (Question)', plainDefinition: 'Inquires with auxiliary inversion or question words', simpleExample: 'Did the stakeholders approve the budget proposal?' },
            { term: '3. Imperative (Command/Request)', plainDefinition: 'Directs action; subject (you) is implied', simpleExample: 'Please submit your timesheets by Friday at 5 PM.' },
            { term: '4. Exclamatory (Emotion)', plainDefinition: 'Conveys excitement, awe, or urgency', simpleExample: 'What a remarkable breakthrough this is!' }
          ]
        },
        {
          type: 'formula',
          title: 'Sentence Classification Formula',
          subtitle: '[Intent] → [Structure] → [Punctuation Mark]',
          formulaBlocks: [
            { label: 'Declarative', part: 'Subject + Verb + Object .', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Interrogative', part: 'Auxiliary + Subject + Verb ?', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Imperative', part: '(You) + Base Verb + Object . / !', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'What a wonderful milestone', verbOrAux: 'we have', objectOrComplement: 'achieved together!', fullSentence: 'What a wonderful milestone we have achieved together!', context: 'Celebration' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Sentence Types in Action',
          subtitle: 'Workplace directives and status discussions.',
          examples: [
            { id: 'st_ex1', category: 'work', categoryLabel: 'Team Standup', sentence: 'Please test the staging environment before deployment (Imperative), and let us know if you find any bugs (Imperative).', breakdownNote: 'Clean imperative instructions keep team standups actionable.', speakerRole: 'Tech Lead' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Punctuation & Indirect Question Errors',
          subtitle: 'Putting a question mark on an indirect question (*I wonder where is he?).',
          mistakes: [
            {
              id: 'st_m1',
              incorrect: 'I wonder where did she go?',
              correct: 'I wonder where she went.',
              explanation: '"I wonder where she went" is a declarative statement containing an embedded question. It takes a period, not a question mark, and normal subject-verb word order.',
              ruleTag: 'Indirect Questions are Declarative'
            }
          ],
          rememberRule: 'Indirect questions (I wonder, She asked) end with a period, not a question mark!'
        },
        {
          type: 'practice',
          title: 'Sentence Types Practice',
          subtitle: 'Classify sentences by purpose.',
          questions: [
            {
              id: 'st_q1',
              type: 'multiple_choice',
              prompt: 'What type of sentence is: "Please review the updated safety protocol before entering the laboratory."',
              options: ['Imperative', 'Declarative', 'Interrogative', 'Exclamatory'],
              correctIndex: 0,
              whyExplanation: 'It gives a polite directive/instruction with an implied subject (You), making it an Imperative sentence.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l10_t2_sentence_structures',
      moduleId: 10,
      title: 'Sentence Structures',
      shortDesc: 'Simple (1 independent), Compound (2 independent), Complex (1 independent + 1 dependent), Compound-Complex (2+ independent + 1+ dependent).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The 4 Structural Architectures of English',
          subtitle: 'Simple, Compound, Complex, and Compound-Complex sentences.',
          conceptSummary: 'Sentence variety gives writing rhythm, sophistication, and momentum. The 4 structures are defined by the combinations of independent clauses (complete thoughts) and dependent clauses (incomplete thoughts).',
          visualGraphic: {
            heroSentence: 'Although it rained (Dependent), we played (Independent), and our fans cheered (Independent).',
            highlights: [
              { word: 'Although it rained,', role: 'Dependent Clause (1)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'we played,', role: 'Independent Clause (1)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'and our fans cheered.', role: 'Independent Clause (2) → Compound-Complex!', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Mastering these 4 structures creates varied, engaging writing.'
          },
          keyTakeaways: [
            'Simple: 1 Independent Clause (e.g. "The developer wrote clean code.").',
            'Compound: 2+ Independent Clauses joined by FANBOYS or semicolon (e.g. "She designed the UI, and he wrote the code.").',
            'Complex: 1 Independent + 1+ Dependent Clause (e.g. "Because she designed the UI, the app looked stunning.").',
            'Compound-Complex: 2+ Independent + 1+ Dependent Clause.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Structural Variety Matters',
          subtitle: 'Avoid monotonous "choppy" writing or unending run-ons.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Proposals',
              example: '"While initial costs are higher, long-term efficiency will increase, and maintenance costs will drop."',
              whyNeeded: 'Compound-complex structure organizes nuanced financial tradeoffs into one cohesive sentence.'
            }
          ],
          coachTip: 'Vary your sentence lengths in professional writing: short simple sentences for punchy emphasis, complex sentences for logical depth.'
        },
        {
          type: 'explanation',
          title: 'Structural Architecture Master Guide',
          subtitle: 'Clause formulas and visual mapping.',
          coreRule: 'Count the number of Independent Clauses (I) and Dependent Clauses (D).',
          breakdown: [
            { term: '1. Simple Sentence (1 I)', plainDefinition: 'One independent clause with subject and predicate', simpleExample: 'The marketing team launched the global advertising campaign.' },
            { term: '2. Compound Sentence (2 I)', plainDefinition: 'Two independent clauses joined by FANBOYS or semicolon', simpleExample: 'The design was approved, and production began immediately.' },
            { term: '3. Complex Sentence (1 I + 1 D)', plainDefinition: 'One independent clause + one or more dependent clauses', simpleExample: 'Although testing was rigorous, the application performed flawlessly.' },
            { term: '4. Compound-Complex (2 I + 1 D)', plainDefinition: 'At least two independent clauses + at least one dependent clause', simpleExample: 'When the market opened, stocks rallied, and investors celebrated.' }
          ]
        },
        {
          type: 'formula',
          title: 'Structural Formulas',
          subtitle: 'Independent vs. Dependent Clause Math',
          formulaBlocks: [
            { label: 'Simple', part: '[Independent Clause]', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Compound', part: '[Independent] + , + [FANBOYS] + [Independent]', color: 'bg-purple-100 text-purple-900 border-purple-300' },
            { label: 'Complex', part: '[Subordinator + Dependent] , + [Independent]', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Compound-Complex', part: '[Dependent] , [Independent] , and [Independent]', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Because we optimized the code,', verbOrAux: 'the website loads faster,', objectOrComplement: 'and conversion rates have doubled.', fullSentence: 'Because we optimized the code, the website loads faster, and conversion rates have doubled.', context: 'Compound-Complex' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Structures in Real Life',
          subtitle: 'Professional briefs and news reporting.',
          examples: [
            { id: 'ss_ex1', category: 'work', categoryLabel: 'Tech Journalism', sentence: 'Although early adoption was slow, the platform gained viral traction, and revenues surged by forty percent.', breakdownNote: 'Compound-complex structure: 1 dependent clause + 2 independent clauses.', speakerRole: 'Journalist' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Sentence Structure Misclassifications',
          subtitle: 'Confusing compound subjects with compound sentences.',
          mistakes: [
            {
              id: 'ss_m1',
              incorrect: 'Mary and John analyzed the data. (Classified as compound sentence - False!)',
              correct: 'Mary and John analyzed the data. (This is a SIMPLE sentence with a compound subject).',
              explanation: 'A compound sentence requires two separate CLAUSES (each with its own verb). Mary and John share a single verb ("analyzed").',
              ruleTag: 'Compound Subject vs Compound Sentence'
            }
          ],
          rememberRule: 'A compound sentence must have two separate subjects AND two separate verbs!'
        },
        {
          type: 'practice',
          title: 'Sentence Structure Practice',
          subtitle: 'Classify sentence architectures accurately.',
          questions: [
            {
              id: 'ss_q1',
              type: 'multiple_choice',
              prompt: 'Identify the sentence structure: "Although the flight was delayed, the team arrived on time, and the presentation began promptly."',
              options: ['Compound-Complex', 'Complex', 'Compound', 'Simple'],
              correctIndex: 0,
              whyExplanation: 'It contains one dependent clause ("Although the flight was delayed") and two independent clauses joined by "and".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l10_t3_subjects_and_predicates',
      moduleId: 10,
      title: 'Subjects and Predicates',
      shortDesc: 'Simple vs. Complete subject, Compound subjects, and Complete predicates.',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Subjects & Predicates: The Core Anatomy',
          subtitle: 'Every complete sentence contains a Subject (Who/What) and a Predicate (Action/State).',
          conceptSummary: 'The Subject tells WHO or WHAT the sentence is about. The Predicate tells WHAT the subject does, is, or experiences (containing the verb and all its objects and modifiers).',
          visualGraphic: {
            heroSentence: 'The highly talented senior architect designed the entire civic center.',
            highlights: [
              { word: 'The highly talented senior architect', role: 'Complete Subject (Simple subject: architect)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'designed the entire civic center.', role: 'Complete Predicate (Verb: designed)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Complete Subject = Noun + Modifiers. Complete Predicate = Verb + Modifiers/Objects.'
          },
          keyTakeaways: [
            'Simple Subject: the core noun or pronoun alone (architect).',
            'Complete Subject: simple subject + all articles and modifying adjectives.',
            'Simple Predicate: the core verb or verb phrase alone (designed).',
            'Complete Predicate: the verb + all adverbs, objects, and prepositional phrases.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Subject/Predicate Analysis Matters',
          subtitle: 'Quickly identifies sentence fragments and subject-verb mismatches.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Editing Long Sentences',
              example: '"The committee of regional directors and stakeholders HAS decided (not have)."',
              whyNeeded: 'Isolating the simple subject ("committee") prevents false agreement with intervening nouns ("stakeholders").'
            }
          ],
          coachTip: 'To find the subject, find the verb first and ask: "WHO or WHAT is performing this action?"'
        },
        {
          type: 'explanation',
          title: 'Subject and Predicate Deep Dive',
          subtitle: 'Simple vs Complete vs Compound.',
          coreRule: 'Divide any sentence cleanly into the Subject part (Who/What) and the Predicate part (Verb & following info).',
          breakdown: [
            { term: 'Compound Subject', plainDefinition: 'Two or more subjects joined by and/or sharing one predicate', simpleExample: 'Python and TypeScript are popular programming languages.' },
            { term: 'Compound Predicate', plainDefinition: 'One subject performing two or more actions joined by conjunction', simpleExample: 'She wrote the report and presented it to the executive board.' },
            { term: 'Inverted Subject Order', plainDefinition: 'Predicate precedes subject (Here comes the bus / On the hill stood a tower)', simpleExample: 'Under the tree sat an old philosopher.' }
          ]
        },
        {
          type: 'formula',
          title: 'Subject & Predicate Formula',
          subtitle: '[Complete Subject (Who/What)] + [Complete Predicate (Verb + Context)]',
          formulaBlocks: [
            { label: 'Complete Subject', part: 'Our international research team', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Complete Predicate', part: 'published a groundbreaking study on AI safety.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Both the CEO and the CTO', verbOrAux: 'attended', objectOrComplement: 'the annual cybersecurity symposium', fullSentence: 'Both the CEO and the CTO attended the annual cybersecurity symposium.', context: 'Corporate' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Subjects & Predicates in Action',
          subtitle: 'News summaries and research briefs.',
          examples: [
            { id: 'sp_ex1', category: 'work', categoryLabel: 'Press Release', sentence: 'The newly formed advisory council will oversee all product development initiatives.', breakdownNote: 'Complete Subject: "The newly formed advisory council" | Complete Predicate: "will oversee all product development initiatives".', speakerRole: 'Spokesperson' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Subject Isolation Mistakes',
          subtitle: 'Confusing prepositional phrase objects with the true sentence subject.',
          mistakes: [
            {
              id: 'sp_m1',
              incorrect: 'The quality of the organic fruits were outstanding.',
              correct: 'The quality of the organic fruits was outstanding.',
              explanation: 'The simple subject is "quality" (singular), not "fruits" (which is inside the prepositional phrase "of the organic fruits").',
              ruleTag: 'Simple Subject Agreement'
            }
          ],
          rememberRule: 'Ignore the prepositional phrase to find the true subject!'
        },
        {
          type: 'practice',
          title: 'Subjects and Predicates Practice',
          subtitle: 'Isolate simple subjects and complete predicates.',
          questions: [
            {
              id: 'sp_q1',
              type: 'multiple_choice',
              prompt: 'What is the SIMPLE SUBJECT in this sentence: "The comprehensive financial audit of the multinational firm revealed zero discrepancies."',
              options: ['audit', 'firm', 'discrepancies', 'financial'],
              correctIndex: 0,
              whyExplanation: '"audit" is the core noun doing the action of revealing; "of the multinational firm" is a modifying prepositional phrase.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l10_t4_direct_and_indirect_objects',
      moduleId: 10,
      title: 'Direct and Indirect Objects',
      shortDesc: 'Direct Object (Who/What receives action) vs. Indirect Object (To/For whom action is done).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Direct & Indirect Objects: Action Receivers',
          subtitle: 'Subject + Verb + Indirect Object (To Whom) + Direct Object (What).',
          conceptSummary: 'A Direct Object (DO) receives the action of a transitive verb directly (answers WHAT? or WHOM?). An Indirect Object (IO) tells TO WHOM or FOR WHOM the action is done.',
          visualGraphic: {
            heroSentence: 'The manager gave Sarah (Indirect Object) the promotion (Direct Object).',
            highlights: [
              { word: 'Sarah', role: 'Indirect Object (To whom was it given?)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'the promotion', role: 'Direct Object (What was given?)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Pattern 1: S + V + IO + DO (gave Sarah the job). Pattern 2: S + V + DO + to/for IO (gave the job to Sarah).'
          },
          keyTakeaways: [
            'Direct Object answers: Verb + WHAT? or WHOM? (e.g. He wrote a book).',
            'Indirect Object answers: TO WHOM? or FOR WHOM? (e.g. He wrote ME a letter).',
            'Order 1: Subject + Verb + IO + DO (She sent the client the invoice).',
            'Order 2: Subject + Verb + DO + Preposition + Object (She sent the invoice TO the client).',
            'Intransitive verbs (sleep, arrive, laugh) NEVER take direct objects.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Object Order Matters',
          subtitle: 'Smooth pronoun placement in business correspondence.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Invoicing',
              example: '"I will send you the document vs. I will send it to you."',
              whyNeeded: 'When both objects are pronouns, standard English requires "send it to you", NOT "send you it".'
            }
          ],
          coachTip: 'Say "Send it to me", NOT "Send me it" in formal writing!'
        },
        {
          type: 'explanation',
          title: 'The Two Dative Alternations',
          subtitle: 'IO + DO vs. DO + Prepositional Phrase.',
          coreRule: 'If the indirect object comes first, omit to/for. If the direct object comes first, add to/for.',
          breakdown: [
            { term: 'Pattern A: Verb + IO + DO', plainDefinition: 'No prepositions needed', simpleExample: 'The company awarded Maria a prestigious fellowship.' },
            { term: 'Pattern B: Verb + DO + to/for IO', plainDefinition: 'Uses to (transfer) or for (benefit)', simpleExample: 'The company awarded a prestigious fellowship to Maria.' },
            { term: 'Verbs that take TO', plainDefinition: 'give, send, show, teach, offer, pass, lend', simpleExample: 'Pass the salt to me. / Lend him your pen.' },
            { term: 'Verbs that take FOR', plainDefinition: 'buy, cook, build, find, make, prepare', simpleExample: 'She prepared a gourmet dinner for her guests.' }
          ]
        },
        {
          type: 'formula',
          title: 'Object Formulas',
          subtitle: '[Subject] + [Verb] + [IO] + [DO] OR [Subject] + [Verb] + [DO] + [to / for + IO]',
          formulaBlocks: [
            { label: 'Pattern A', part: 'The director sent the team the updated schedule', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Pattern B', part: 'The director sent the updated schedule to the team', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Our consultant provided', verbOrAux: 'the board', objectOrComplement: 'valuable strategic insights', fullSentence: 'Our consultant provided the board valuable strategic insights.', context: 'Consulting' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Objects in Professional Life',
          subtitle: 'Delegation and financial transfers.',
          examples: [
            { id: 'dido_ex1', category: 'work', categoryLabel: 'Client Management', sentence: 'We have forwarded the signed contracts to your legal counsel.', breakdownNote: '"the signed contracts" = Direct Object | "to your legal counsel" = Prepositional Indirect Object.', speakerRole: 'Contract Specialist' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Object Preposition Mistakes',
          subtitle: 'Adding "to" when the indirect object sits between verb and direct object.',
          mistakes: [
            {
              id: 'dido_m1',
              incorrect: 'I gave to her the confidential document.',
              correct: 'I gave her the confidential document. / I gave the confidential document to her.',
              explanation: 'When the indirect object sits immediately after the verb, do NOT include the preposition "to".',
              ruleTag: 'No "to" before intermediate IO'
            }
          ],
          rememberRule: 'Say "I gave her the keys" OR "I gave the keys to her" (never "I gave to her the keys")!'
        },
        {
          type: 'practice',
          title: 'Direct & Indirect Objects Practice',
          subtitle: 'Identify direct and indirect objects accurately.',
          questions: [
            {
              id: 'dido_q1',
              type: 'multiple_choice',
              prompt: 'In the sentence: "The professor offered the top student an exclusive research internship", what is the DIRECT OBJECT?',
              options: [
                'an exclusive research internship',
                'the top student',
                'The professor',
                'offered'
              ],
              correctIndex: 0,
              whyExplanation: '"an exclusive research internship" is what was offered (Direct Object); "the top student" is who received it (Indirect Object).'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l10_t5_complements',
      moduleId: 10,
      title: 'Subject & Object Complements',
      shortDesc: 'Subject complements with linking verbs (predicate nouns/adjectives) and Object complements (make, call, name, consider).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Complements: Completing the Meaning',
          subtitle: 'Subject Complements (with linking verbs) and Object Complements.',
          conceptSummary: 'A complement completes the predicate by describing or renaming the subject or object. A Subject Complement follows a linking verb (be, become, seem, look, feel). An Object Complement follows a direct object with verbs like make, consider, name, elect, or call.',
          visualGraphic: {
            heroSentence: 'She became CEO (Subject Complement), and the board called the decision brilliant (Object Complement).',
            highlights: [
              { word: 'became CEO', role: 'Linking Verb + Subject Complement (Renames She)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'called the decision brilliant', role: 'Verb + Direct Object + Object Complement (Describes decision)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Subject Complement renames Subject. Object Complement describes Direct Object.'
          },
          keyTakeaways: [
            'Subject Complement follows Linking Verbs: be, seem, appear, become, taste, smell, sound, look.',
            'Predicate Adjective: "The solution is effective."',
            'Predicate Noun: "She is a physician."',
            'Object Complement: renames/describes the direct object ("They elected him President", "The news made her happy").',
            'Linking verbs NEVER take adverbs of manner (Say "It smells good", NOT "It smells well").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Linking Verb Complements Matter',
          subtitle: 'Saying "I feel bad" vs. "I feel badly".',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Empathy & Apologies',
              example: '"I feel bad about the misunderstanding (NOT badly)."',
              whyNeeded: '"Feel" is a linking verb here, requiring the predicate adjective "bad", not the adverb "badly" (which would mean your sense of touch is impaired!).'
            }
          ],
          coachTip: 'Say "It smells delicious" (adjective), NOT "It smells deliciously"!'
        },
        {
          type: 'explanation',
          title: 'Complements Reference Guide',
          subtitle: 'Linking verbs vs. Transitive object complement verbs.',
          coreRule: 'Pair linking verbs with adjectives/nouns (Subject Complements). Pair factitive verbs (make, elect, consider) with Object Complements.',
          breakdown: [
            { term: 'Linking Verb + Subject Complement', plainDefinition: 'Renames or describes the subject', simpleExample: 'The executive seems confident. / He remains our top candidate.' },
            { term: 'Transitive Verb + DO + Object Complement', plainDefinition: 'Renames or describes the direct object', simpleExample: 'The committee appointed David chairman. / Stress makes people anxious.' },
            { term: 'Common Factitive Verbs', plainDefinition: 'name, call, elect, appoint, consider, find, make', simpleExample: 'We consider this agreement binding.' }
          ]
        },
        {
          type: 'formula',
          title: 'Complement Formulas',
          subtitle: '[Subject] + [Linking Verb] + [Subject Complement] vs. [Subject] + [Verb] + [DO] + [Object Complement]',
          formulaBlocks: [
            { label: 'Subject Complement', part: 'The quarterly report is exceptionally thorough', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Object Complement', part: 'The investors consider the startup highly promising', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The shareholders elected', verbOrAux: 'Marcus', objectOrComplement: 'Chief Executive Officer', fullSentence: 'The shareholders elected Marcus Chief Executive Officer.', context: 'Corporate' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Complements in Professional Life',
          subtitle: 'Performance appraisals and board elections.',
          examples: [
            { id: 'cmp_ex1', category: 'work', categoryLabel: 'Performance Review', sentence: 'The leadership team considers your technical contribution indispensable to our ongoing success.', breakdownNote: '"your technical contribution" (DO) + "indispensable" (Object Complement).', speakerRole: 'VP of Engineering' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Adverb with Linking Verb Error',
          subtitle: 'Using an adverb instead of an adjective after linking verbs (*The food tastes deliciously).',
          mistakes: [
            {
              id: 'cmp_m1',
              incorrect: 'The coffee tastes deliciously.',
              correct: 'The coffee tastes delicious.',
              explanation: '"Taste" is a sensory linking verb and requires a predicate adjective ("delicious"), not an adverb.',
              ruleTag: 'Adjectives with Linking Verbs'
            }
          ],
          rememberRule: 'Use adjectives after linking verbs (looks wonderful, smells good, feels great)!'
        },
        {
          type: 'practice',
          title: 'Complements Practice',
          subtitle: 'Differentiate subject and object complements.',
          questions: [
            {
              id: 'cmp_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct predicate adjective after the linking verb "remain":',
              sentenceWithBlank: 'Despite the market volatility, the company\'s executives remain ___ about future growth.',
              options: ['optimistic', 'optimistically', 'optimism'],
              correctIndex: 0,
              grammarFocus: 'Predicate adjective with linking verb remain',
              whyExplanation: '"Remain" is a linking verb requiring the predicate adjective "optimistic".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l10_t6_runons_splices_fragments',
      moduleId: 10,
      title: 'Run-ons, Comma Splices & Sentence Fragments',
      shortDesc: 'Identifying and fixing the three fatal syntax errors in adult writing.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Fixing the 3 Fatal Syntax Errors',
          subtitle: 'Run-on Sentences, Comma Splices, and Sentence Fragments.',
          conceptSummary: 'These three structural errors undermine credibility faster than any other grammar mistake. A Fragment is an incomplete sentence. A Run-on (fused sentence) joins two sentences with zero punctuation. A Comma Splice joins two sentences with only a comma.',
          visualGraphic: {
            heroSentence: 'Wrong: We tested it, it works. → Fixed: We tested it, and it works.',
            highlights: [
              { word: 'We tested it, it works.', role: 'Comma Splice (Illegal comma between two sentences)', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'We tested it, and it works.', role: 'Fixed Compound Sentence (Comma + FANBOYS)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Fixing splices: (1) Period, (2) Semicolon, (3) Comma + FANBOYS, or (4) Subordinating conjunction.'
          },
          keyTakeaways: [
            'Sentence Fragment: missing subject, verb, or is an unattached dependent clause (e.g., "Because we were late.").',
            'Fused Run-on: two sentences smashed together with no punctuation (e.g., "The server crashed we lost data.").',
            'Comma Splice: two independent clauses joined by only a comma (e.g., "The server crashed, we lost data.").',
            'The 4 Universal Fixes: (1) Period + Capital letter, (2) Semicolon (;), (3) Comma + FANBOYS, (4) Subordinate clause.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Syntax Accuracy Matters',
          subtitle: 'The primary metric used by executives and recruiters to judge written clarity.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Proposals & Resumes',
              example: '"Fixed: Although sales dropped in Q1, we rebounded in Q2, and profits reached new highs."',
              whyNeeded: 'Flawless sentence architecture guarantees an authoritative, polished voice.'
            }
          ],
          coachTip: 'Whenever you see a comma between two complete sentences, immediately add a FANBOYS word or replace it with a semicolon!'
        },
        {
          type: 'explanation',
          title: 'The 4 Ways to Repair Comma Splices and Run-ons',
          subtitle: 'Mastering sentence boundaries.',
          coreRule: 'Never allow two independent clauses to stand together without a coordinating conjunction, semicolon, or period.',
          breakdown: [
            { term: 'Fix 1: Period + New Sentence', plainDefinition: 'Separate into two clean independent sentences', simpleExample: 'The experiment was successful. The team celebrated.' },
            { term: 'Fix 2: Semicolon ( ; )', plainDefinition: 'Join two closely related independent clauses', simpleExample: 'The experiment was successful; the team celebrated.' },
            { term: 'Fix 3: Comma + FANBOYS', plainDefinition: 'Add a coordinating conjunction after the comma', simpleExample: 'The experiment was successful, so the team celebrated.' },
            { term: 'Fix 4: Subordinating Conjunction', plainDefinition: 'Turn one clause into a dependent clause', simpleExample: 'Because the experiment was successful, the team celebrated.' }
          ]
        },
        {
          type: 'formula',
          title: 'Sentence Repair Formulas',
          subtitle: '[Clause 1] . [Clause 2] | [Clause 1] ; [Clause 2] | [Clause 1] , [FANBOYS] [Clause 2]',
          formulaBlocks: [
            { label: 'Fix with Semicolon', part: 'Our team completed the migration ; downtime was zero', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Fix with Subordination', part: 'Because our team completed the migration , downtime was zero', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The presentation concluded early;', verbOrAux: 'therefore,', objectOrComplement: 'we had ample time for questions and answers', fullSentence: 'The presentation concluded early; therefore, we had ample time for questions and answers.', context: 'Conference' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Syntax Repairs in Action',
          subtitle: 'Fixing emails and executive summaries.',
          examples: [
            { id: 'rsf_ex1', category: 'work', categoryLabel: 'Executive Brief', sentence: 'The audit is complete; all compliance benchmarks have been surpassed.', breakdownNote: 'Semicolon cleanly connects two related independent clauses without a comma splice.', speakerRole: 'Auditor' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Dependent Clause Fragments',
          subtitle: 'Starting a sentence with "Because" or "Although" and forgetting the main clause.',
          mistakes: [
            {
              id: 'rsf_m1',
              incorrect: 'Because the project was completed ahead of schedule. We received a company bonus.',
              correct: 'Because the project was completed ahead of schedule, we received a company bonus.',
              explanation: '"Because the project was completed ahead of schedule" is a dependent fragment; it must attach to the main clause with a comma.',
              ruleTag: 'Dependent Clause Fragment'
            }
          ],
          rememberRule: 'A sentence starting with "Because" or "Although" needs a second clause to be complete!'
        },
        {
          type: 'practice',
          title: 'Syntax Repair Practice',
          subtitle: 'Identify and fix comma splices and fragments.',
          questions: [
            {
              id: 'rsf_q1',
              type: 'sentence_correction',
              prompt: 'Choose the grammatically correct fix for this comma splice: "The server crashed, we restored the backup."',
              incorrectSentence: 'The server crashed, we restored the backup.',
              correctSentence: 'The server crashed, but we restored the backup.',
              errorHighlight: 'crashed, we',
              options: [
                'The server crashed, but we restored the backup.',
                'The server crashed, we restored the backup.',
                'The server crashed we restored the backup.'
              ],
              correctIndex: 0,
              whyExplanation: 'Adding the coordinating conjunction "but" after the comma properly connects the two independent clauses.'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
