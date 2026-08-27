import { Module } from '../../types';

export const lesson12Punctuation: Module = {
  id: 12,
  title: 'Lesson 12: Punctuation and Mechanics',
  tagline: 'Mastering the Full Punctuation System for Clarity & Authority',
  description: 'Master every essential mark of English punctuation: Terminal marks (period, question mark, exclamation point), Comma mastery (series, introductory clauses, compound sentences, appositives), Semicolons & Colons, Apostrophes (contractions vs. possession), Quotation Marks & Dialogue mechanics, Hyphens & Dashes (hyphenated modifiers vs. em dash), and Parentheses, Brackets & Ellipses.',
  iconName: 'Edit3',
  color: 'from-rose-600 to-pink-600',
  topics: [
    {
      id: 'l12_t1_terminal_punctuation',
      moduleId: 12,
      title: 'Period, Question Mark, and Exclamation Point',
      shortDesc: 'Terminal punctuation rules: periods (statements/abbreviations), question marks (direct vs. indirect), and exclamation points (controlled impact).',
      estimatedMinutes: 5,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Terminal Marks: Defining Sentence Boundaries',
          subtitle: 'The Period (.), Question Mark (?), and Exclamation Point (!).',
          conceptSummary: 'Terminal punctuation marks signal the end of a complete grammatical thought and establish the sentence\'s tone: factual statement (.), direct inquiry (?), or forceful exclamation (!).',
          visualGraphic: {
            heroSentence: 'The project is complete. Did you review it? It is outstanding!',
            highlights: [
              { word: 'complete.', role: 'Period (Declarative fact)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'review it?', role: 'Question Mark (Direct inquiry)', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: 'outstanding!', role: 'Exclamation Point (High enthusiasm)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Every complete English sentence MUST terminate with exactly one end mark.'
          },
          keyTakeaways: [
            'Period (.): terminates declarative statements and standard imperative commands.',
            'Question Mark (?): terminates direct questions only (never indirect questions).',
            'Exclamation Point (!): conveys urgent warning or high enthusiasm (use sparingly in business).',
            'Never stack multiple punctuation marks in formal writing (e.g., avoid "?!" or "!!!").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Controlled Exclamation Matters',
          subtitle: 'Overusing exclamation marks undermines professional authority.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Correspondence',
              example: '"Thank you for your proposal. We will review it shortly. (Clean and confident)."',
              whyNeeded: 'Ending every line with exclamation marks can seem overly anxious or juvenile.'
            }
          ],
          coachTip: 'Reserve exclamation points for true emergencies, safety alerts, or genuine milestone celebrations.'
        },
        {
          type: 'explanation',
          title: 'Terminal Marks Reference Guide',
          subtitle: 'Abbreviations, indirect questions, and polite requests.',
          coreRule: 'Identify whether the sentence is a direct question (take ?), an embedded statement (take .), or a polite imperative request.',
          breakdown: [
            { term: 'Direct Question', plainDefinition: 'Inverts subject-verb or begins with question word', simpleExample: 'When will the audit report be published?' },
            { term: 'Indirect / Embedded Question', plainDefinition: 'Declarative clause containing inquiry; ends with PERIOD', simpleExample: 'I would like to know when the audit report will be published.' },
            { term: 'Periods with Abbreviations', plainDefinition: 'e.g., i.e., Dr., etc., vs. acronyms like NASA', simpleExample: 'Dr. Harris delivered the keynote at 9 a.m.' }
          ]
        },
        {
          type: 'formula',
          title: 'Terminal Punctuation Formula',
          subtitle: '[Complete Thought] + [ . / ? / ! ]',
          formulaBlocks: [
            { label: 'Direct Inquiry', part: 'Could you confirm the meeting time ?', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Embedded Statement', part: 'Please let me know if you can attend .', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'We received the shipment today.', verbOrAux: '', objectOrComplement: '', fullSentence: 'We received the shipment today.', context: 'Declarative' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Terminal Marks in Daily Life',
          subtitle: 'Business emails and inquiry forms.',
          examples: [
            { id: 'tpm_ex1', category: 'work', categoryLabel: 'Formal Email', sentence: 'Please let us know whether Tuesday afternoon suits your schedule.', breakdownNote: 'Polite request ending in a period.', speakerRole: 'Executive Assistant' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Indirect Question Punctuation Errors',
          subtitle: 'Adding a question mark to an embedded question statement.',
          mistakes: [
            {
              id: 'tpm_m1',
              incorrect: 'I asked the manager if we could leave early?',
              correct: 'I asked the manager if we could leave early.',
              explanation: '"I asked..." is a declarative statement reporting an inquiry; it ends with a period, not a question mark.',
              ruleTag: 'Period for Indirect Question'
            }
          ],
          rememberRule: 'Statements starting with "I wonder" or "Please let me know" end with a PERIOD, not a question mark!'
        },
        {
          type: 'practice',
          title: 'Terminal Punctuation Practice',
          subtitle: 'Select the correct end mark for statements and inquiries.',
          questions: [
            {
              id: 'tpm_q1',
              type: 'fill_blank',
              prompt: 'Select the correct terminal punctuation mark: "Please inform the team when the system maintenance is finished___"',
              sentenceWithBlank: 'Please inform the team when the system maintenance is finished___',
              options: ['.', '?', '!'],
              correctIndex: 0,
              grammarFocus: 'Period on polite imperative with embedded clause',
              whyExplanation: 'The sentence is an imperative request ("Please inform..."), which properly terminates with a period.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t2_comma_mastery',
      moduleId: 12,
      title: 'Comma Mastery (Series, Clauses, Appositives)',
      shortDesc: 'The 4 essential comma rules: Oxford comma in lists, introductory dependent clauses, compound FANBOYS, and non-essential appositives.',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'The 4 Pillars of Comma Mastery',
          subtitle: 'Oxford comma, Introductory clauses, Compound sentences, and Appositives.',
          conceptSummary: 'Commas are grammatical road signs that group ideas, prevent misreading, and separate clauses. The 4 major rules govern: (1) Items in a series (Oxford comma), (2) Introductory clauses/phrases, (3) Compound sentences before FANBOYS, and (4) Non-essential appositives.',
          visualGraphic: {
            heroSentence: 'Although he was tired (Intro clause), Mark, our lead engineer (Appositive), finished the code, and we launched (Compound FANBOYS).',
            highlights: [
              { word: 'Although he was tired,', role: 'Rule 1: Introductory Dependent Clause Comma', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: ', our lead engineer,', role: 'Rule 2: Non-essential Appositive Parenthetical Commas', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: ', and we launched', role: 'Rule 3: Compound Sentence before FANBOYS', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Commas prevent ambiguity and organize complex thoughts.'
          },
          keyTakeaways: [
            'Oxford Comma: place a comma before "and" in a list of 3+ items (apples, oranges, and bananas).',
            'Introductory Clauses: place a comma after introductory dependent clauses (When the bell rang, we left).',
            'Compound Sentences: place a comma before FANBOYS when joining two independent clauses.',
            'Appositives: use pairs of commas around extra non-essential information (Dr. Smith, the founder, spoke).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why the Oxford Comma Matters',
          subtitle: 'A missing comma once cost a dairy company $5 million in a legal overtime lawsuit!',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Legal Contracts',
              example: '"We invited the consultants, Sarah, and James (3 distinct parties with Oxford comma)."',
              whyNeeded: 'Without the Oxford comma ("the consultants, Sarah and James"), it could be read as Sarah and James ARE the consultants!'
            }
          ],
          coachTip: 'Always use the Oxford comma (comma before the final "and") in professional and academic writing to prevent costly legal ambiguity.'
        },
        {
          type: 'explanation',
          title: 'The 4 Comma Rules Explained',
          subtitle: 'Detailed rules with clear examples.',
          coreRule: 'Commas separate introductory elements, list items, independent clauses with FANBOYS, and non-essential appositives.',
          breakdown: [
            { term: '1. Oxford Comma (Series)', plainDefinition: 'Item A, Item B, and Item C', simpleExample: 'The budget covers research, development, and marketing.' },
            { term: '2. Introductory Clause / Phrase', plainDefinition: 'Comma after introductory element preceding the main subject', simpleExample: 'After analyzing the quarterly metrics, the committee approved the expansion.' },
            { term: '3. Compound Sentence (FANBOYS)', plainDefinition: 'Clause 1, [FANBOYS] Clause 2', simpleExample: 'The design phase is complete, but testing will require another week.' },
            { term: '4. Non-Essential Appositives', plainDefinition: 'Parenthetical extra info enclosed in two commas', simpleExample: 'Sophia, our lead data scientist, presented the predictive model.' }
          ]
        },
        {
          type: 'formula',
          title: 'Comma Mastery Formulas',
          subtitle: 'Visualizing the 4 comma architectures.',
          formulaBlocks: [
            { label: 'Introductory Clause', part: 'Before we begin the presentation ,', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Appositive', part: 'Mr. David , the chief inspector ,', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Series', part: 'reviewed the logs, code, and test suite.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'While sales grew rapidly,', verbOrAux: 'the team maintained', objectOrComplement: 'high standards', fullSentence: 'While sales grew rapidly, the team maintained high standards.', context: 'Intro Clause' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Commas in Professional Life',
          subtitle: 'Executive summaries and official press releases.',
          examples: [
            { id: 'cm_ex1', category: 'work', categoryLabel: 'Press Announcement', sentence: 'Founded in 2012, Apex Systems, a global cloud provider, expanded into Asia, Europe, and Latin America.', breakdownNote: 'Demonstrates introductory phrase comma, non-essential appositive commas, and Oxford series comma.', speakerRole: 'PR Officer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Essential vs. Non-Essential Commas',
          subtitle: 'Putting commas around essential identifying information (*The author, Stephen King, wrote...).',
          mistakes: [
            {
              id: 'cm_m1',
              incorrect: 'The famous scientist, Albert Einstein, proposed relativity. (If multiple famous scientists exist, the name is essential).',
              correct: 'The famous scientist Albert Einstein proposed relativity. / Albert Einstein, a famous scientist, proposed relativity.',
              explanation: 'Do not put commas around essential identifying names needed to specify which person is meant.',
              ruleTag: 'Essential Restrictive Appositive'
            }
          ],
          rememberRule: 'If you can remove the word between commas without losing the core meaning, use commas!'
        },
        {
          type: 'practice',
          title: 'Comma Mastery Practice',
          subtitle: 'Apply comma rules to complex sentences.',
          questions: [
            {
              id: 'cm_q1',
              type: 'sentence_correction',
              prompt: 'Choose the sentence with the correct introductory clause and Oxford comma punctuation:',
              incorrectSentence: 'After the meeting concluded the board reviewed finances operations and legal compliance.',
              correctSentence: 'After the meeting concluded, the board reviewed finances, operations, and legal compliance.',
              errorHighlight: 'concluded the board reviewed finances operations',
              options: [
                'After the meeting concluded, the board reviewed finances, operations, and legal compliance.',
                'After the meeting concluded the board reviewed finances operations and legal compliance.',
                'After the meeting concluded, the board reviewed finances operations, and legal compliance.'
              ],
              correctIndex: 0,
              whyExplanation: 'A comma is required after the introductory dependent clause ("After the meeting concluded,"), and Oxford commas separate all three list items.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t3_semicolons_and_colons',
      moduleId: 12,
      title: 'Semicolons and Colons',
      shortDesc: 'Semicolons (linking related independent clauses & complex lists) vs. Colons (introducing lists, quotes, and explanations).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Semicolons (;) and Colons (:)',
          subtitle: 'The master punctuation marks of logical connection and introduction.',
          conceptSummary: 'A Semicolon (;) connects two closely related independent clauses without a coordinating conjunction. A Colon (:) announces an explanation, a formal list, or an amplifying statement following a complete independent clause.',
          visualGraphic: {
            heroSentence: 'We have one goal (Colon): maximize efficiency; downtime is unacceptable (Semicolon).',
            highlights: [
              { word: 'goal: maximize efficiency', role: 'Colon (Introduces definition / amplification)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'efficiency; downtime', role: 'Semicolon (Bridges two independent clauses)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Colons introduce. Semicolons bridge equal independent thoughts.'
          },
          keyTakeaways: [
            'Semicolon Rule 1: Connects two related independent clauses (e.g. "She loves logic; he prefers design.").',
            'Semicolon Rule 2: With conjunctive adverbs (e.g. "; however, ").',
            'Semicolon Rule 3: Separates complex list items that already contain internal commas.',
            'Colon Rule: MUST follow a complete independent clause before introducing a list or explanation.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Colon and Semicolon Precision Matters',
          subtitle: 'Gives executive memos crisp, sophisticated logical hierarchy.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Executive Briefs',
              example: '"The company faces three primary hurdles: supply chain delays, inflation, and talent retention."',
              whyNeeded: 'The colon introduces a structured list after a complete introductory statement.'
            }
          ],
          coachTip: 'Never place a colon after a verb like "are" or "include"—the text before the colon MUST be a complete standalone sentence!'
        },
        {
          type: 'explanation',
          title: 'Colon and Semicolon Master Guide',
          subtitle: 'Rules, structures, and common pitfalls.',
          coreRule: 'Ensure that the clause before a colon is a full grammatically complete sentence. Use semicolons between equal independent clauses.',
          breakdown: [
            { term: 'Semicolon: Independent Clause Bridge', plainDefinition: 'Joins two full thoughts closely linked in meaning', simpleExample: 'The experiment was a success; the results exceeded our hypotheses.' },
            { term: 'Semicolon: Complex List Separator', plainDefinition: 'Separates city/state or multi-clause list items', simpleExample: 'We opened offices in Austin, Texas; London, England; and Tokyo, Japan.' },
            { term: 'Colon: Introducing a List', plainDefinition: 'Complete sentence + : + list', simpleExample: 'Please bring three items: your passport, ticket, and boarding pass.' },
            { term: 'Colon: Explanatory Amplification', plainDefinition: 'Second clause explains the first', simpleExample: 'The rationale was clear: early adoption creates a durable market moat.' }
          ]
        },
        {
          type: 'formula',
          title: 'Semicolon and Colon Formulas',
          subtitle: '[Clause 1] ; [Clause 2] vs. [Complete Clause] : [List / Explanation]',
          formulaBlocks: [
            { label: 'Semicolon Bridge', part: 'The servers remained operational ; downtime was zero', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Colon Introduction', part: 'We achieved our core objective : zero defects in production', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The attendees represented three regions:', verbOrAux: 'Paris, France;', objectOrComplement: 'Berlin, Germany; and Rome, Italy.', fullSentence: 'The attendees represented three regions: Paris, France; Berlin, Germany; and Rome, Italy.', context: 'Complex List' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Semicolons & Colons in Real Life',
          subtitle: 'Strategic documents and conference agendas.',
          examples: [
            { id: 'sc_ex1', category: 'work', categoryLabel: 'Strategic Plan', sentence: 'The quarterly roadmap prioritizes three pillars: security hardening, user retention, and enterprise scalability.', breakdownNote: 'Colon introduces the three pillars following a complete independent sentence.', speakerRole: 'VP of Product' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Incomplete Sentence Colon Mistake',
          subtitle: 'Putting a colon directly after "such as" or "include" (*Our priorities include: A, B, and C).',
          mistakes: [
            {
              id: 'sc_m1',
              incorrect: 'Our core values are: integrity, innovation, and teamwork.',
              correct: 'Our core values are integrity, innovation, and teamwork. / We embrace three core values: integrity, innovation, and teamwork.',
              explanation: 'Never place a colon after the linking verb "are". A colon requires a complete independent clause preceding it.',
              ruleTag: 'Complete Sentence Before Colon'
            }
          ],
          rememberRule: 'The sentence BEFORE a colon must be able to stand alone with a period!'
        },
        {
          type: 'practice',
          title: 'Semicolons and Colons Practice',
          subtitle: 'Punctuate clauses and lists with colons and semicolons.',
          questions: [
            {
              id: 'sc_q1',
              type: 'sentence_correction',
              prompt: 'Choose the correctly punctuated sentence introducing a list:',
              incorrectSentence: 'The required supplies are: laptops, notebooks, and badges.',
              correctSentence: 'Please bring the required supplies: laptops, notebooks, and badges.',
              errorHighlight: 'supplies are:',
              options: [
                'Please bring the required supplies: laptops, notebooks, and badges.',
                'The required supplies are: laptops, notebooks, and badges.',
                'Please bring the required supplies; laptops, notebooks, and badges.'
              ],
              correctIndex: 0,
              whyExplanation: '"Please bring the required supplies" is a complete independent imperative sentence, making the colon grammatically valid.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t4_apostrophes',
      moduleId: 12,
      title: 'Apostrophes (Contractions vs. Possession)',
      shortDesc: 'Contractions (it\'s = it is, don\'t) vs. Possession (singular \'s, plural s\', irregular men\'s, its vs. it\'s).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Apostrophes: Contractions vs. Possession',
          subtitle: 'The two distinct functions: replacing omitted letters vs. showing ownership.',
          conceptSummary: 'Apostrophes have only TWO jobs in English: (1) Showing omission in contractions (it\'s = it is, they\'re = they are), and (2) Showing possession/ownership (the doctor\'s office, the students\' books). They are NEVER used to make regular nouns plural!',
          visualGraphic: {
            heroSentence: 'The company expanded its (Possessive) operations, and it\'s (It is) growing rapidly.',
            highlights: [
              { word: 'its operations', role: 'Possessive Pronoun (NO apostrophe - ownership)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'it\'s growing', role: 'Contraction = It is (Apostrophe replaces letter "i")', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Possessive pronouns (its, whose, your, their) NEVER take apostrophes.'
          },
          keyTakeaways: [
            'Singular Possession: add \'s (the student\'s desk, James\'s book).',
            'Plural Possession (ending in -s): add apostrophe only (the students\' desks).',
            'Irregular Plural Possession: add \'s (the children\'s toys, the women\'s network).',
            'Contractions: apostrophe marks missing letters (don\'t, haven\'t, we\'ll).',
            'GREATEST TRAP: it\'s = IT IS | its = belonging to it (NO apostrophe).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Its" vs. "It\'s" Matters',
          subtitle: 'The most commonly flagged grammatical error on corporate websites.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Marketing Copy',
              example: '"The device is famous for its (not it\'s) long battery life."',
              whyNeeded: 'Writing "it\'s battery life" literally means "it is battery life"!'
            }
          ],
          coachTip: 'Test trick: Replace "it\'s" with "it is". If "it is" makes sense, use the apostrophe. If not, use "its"!'
        },
        {
          type: 'explanation',
          title: 'Apostrophe Possession & Contraction Rules',
          subtitle: 'Complete breakdown of singular, plural, and pronoun ownership.',
          coreRule: 'Use \'s for singular nouns; use s\' for regular plural nouns ending in -s; never use apostrophes for plural nouns.',
          breakdown: [
            { term: 'Singular Noun Possession', plainDefinition: 'Add \'s to the owner noun', simpleExample: 'the company\'s quarterly earnings, the manager\'s decision' },
            { term: 'Plural Noun Possession (ending in s)', plainDefinition: 'Add apostrophe after the s', simpleExample: 'the employees\' benefits, the teachers\' lounge' },
            { term: 'Irregular Plural Possession', plainDefinition: 'Add \'s because plural does not end in s', simpleExample: 'the men\'s department, the people\'s vote' },
            { term: 'Joint vs. Separate Possession', plainDefinition: 'John and Mary\'s car (shared) vs. John\'s and Mary\'s cars (separate)', simpleExample: 'David and Sarah\'s company (they co-own it).' }
          ]
        },
        {
          type: 'formula',
          title: 'Apostrophe Ownership Formulas',
          subtitle: '[Singular Noun] + [ \'s ] vs. [Plural Noun ending in s] + [ \' ]',
          formulaBlocks: [
            { label: 'Singular Owner', part: 'The client \'s feedback', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Multiple Owners', part: 'The partners \' agreement', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The committee reviewed', verbOrAux: 'the board\'s recommendations', objectOrComplement: 'yesterday', fullSentence: 'The committee reviewed the board\'s recommendations yesterday.', context: 'Possession' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Apostrophes in Daily Life',
          subtitle: 'Signage and company branding.',
          examples: [
            { id: 'apo_ex1', category: 'work', categoryLabel: 'HR Notice', sentence: 'All employees\' performance reviews will be uploaded to the portal this afternoon.', breakdownNote: '"employees\'" is plural possessive (all employees own the reviews).', speakerRole: 'HR Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Greengrocer\'s Apostrophe" Plural Error',
          subtitle: 'Using an apostrophe to make a regular word plural (*apple\'s for sale).',
          mistakes: [
            {
              id: 'apo_m1',
              incorrect: 'Fresh organic apple\'s on sale today!',
              correct: 'Fresh organic apples on sale today!',
              explanation: 'Never use an apostrophe to make a noun plural. Plurals simply add -s or -es without any apostrophe.',
              ruleTag: 'No Apostrophes for Plurals'
            },
            {
              id: 'apo_m2',
              incorrect: 'The cat licked it\'s paw.',
              correct: 'The cat licked its paw.',
              explanation: '"Its" is possessive. "It\'s" means "it is".',
              ruleTag: 'Its vs It\'s'
            }
          ],
          rememberRule: 'Never use an apostrophe to make a noun plural (say "photographs", NOT "photo\'s")!'
        },
        {
          type: 'practice',
          title: 'Apostrophe Practice',
          subtitle: 'Distinguish between possession, plurals, and contractions.',
          questions: [
            {
              id: 'apo_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct possessive pronoun showing ownership without an apostrophe:',
              sentenceWithBlank: 'The cybersecurity system automatically updated ___ internal firewall database.',
              options: ['its', 'it\'s', 'its\''],
              correctIndex: 0,
              grammarFocus: 'Possessive pronoun its',
              whyExplanation: '"its" is the possessive pronoun meaning "belonging to it". "It\'s" is the contraction for "it is".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t5_quotation_marks_dialogue',
      moduleId: 12,
      title: 'Quotation Marks and Dialogue',
      shortDesc: 'Double quotes (" "), single quotes (\' \'), punctuation inside quotes, and dialogue formatting.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Quotation Marks & Dialogue Mechanics',
          subtitle: 'Quoting exact spoken words and attributing dialogue cleanly.',
          conceptSummary: 'Quotation marks enclose exact direct speech, quoted text from source material, or specific article titles. In standard American English, commas and periods ALWAYS sit INSIDE the closing quotation mark.',
          visualGraphic: {
            heroSentence: '"We are ready," said the CEO, "to launch the platform."',
            highlights: [
              { word: '"We are ready,"', role: 'Direct Quote (Comma INSIDE closing quote)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: '"to launch the platform."', role: 'Continued Quote (Period INSIDE closing quote)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Rule: In US English, periods and commas ALWAYS go inside quotation marks.'
          },
          keyTakeaways: [
            'Direct Speech: "Let\'s begin the conference," the chairman said.',
            'Comma and Period Placement: inside the quotation marks in US English (," and .").',
            'Question marks & Exclamations: inside quotes if part of the quotation; outside if part of the whole sentence.',
            'Quote inside a quote: use single quotation marks inside double quotes ("She said, \'Yes!\' to the offer.").',
            'Dialogue paragraphing: start a fresh new paragraph every time the speaker changes.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Dialogue Mechanics Matter',
          subtitle: 'Essential for journalistic reporting, transcripts, and storytelling.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Press Releases',
              example: '"\'This merger expands our global footprint,\' stated the chief executive."',
              whyNeeded: 'Flawless quote attribution adheres to professional journalistic standards.'
            }
          ],
          coachTip: 'Always start a new indented paragraph when a new person speaks!'
        },
        {
          type: 'explanation',
          title: 'Dialogue Mechanics Reference Guide',
          subtitle: 'Split quotes, attribution tags, and nested quotations.',
          coreRule: 'Enclose spoken words in double quotation marks, keep periods/commas inside, and start a new paragraph for each new speaker.',
          breakdown: [
            { term: 'Attribution Tag at Beginning', plainDefinition: 'Speaker said, "Quote."', simpleExample: 'The director announced, "The quarterly targets have been met."' },
            { term: 'Attribution Tag at End', plainDefinition: '"Quote," said speaker.', simpleExample: '"The quarterly targets have been met," the director announced.' },
            { term: 'Interrupted / Split Quote', plainDefinition: '"Quote part 1," tag, "quote part 2."', simpleExample: '"Our team," explained Sarah, "has resolved the technical bottleneck."' },
            { term: 'Quotes Inside Quotes', plainDefinition: 'Double quotes on outside, single quotes inside', simpleExample: 'The witness testified, "He explicitly shouted, \'Stand back!\' before the door opened."' }
          ]
        },
        {
          type: 'formula',
          title: 'Quotation Formulas',
          subtitle: '[Speaker said , ] + [ " Direct Quote . " ]',
          formulaBlocks: [
            { label: 'Introductory Tag', part: 'The analyst remarked ,', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Enclosed Speech', part: '" Market liquidity remains exceptionally strong . "', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: '"We are fully committed to this timeline,"', verbOrAux: 'the project lead', objectOrComplement: 'confirmed.', fullSentence: '"We are fully committed to this timeline," the project lead confirmed.', context: 'Dialogue' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Quotation Marks in Action',
          subtitle: 'Media transcripts and interview articles.',
          examples: [
            { id: 'qm_ex1', category: 'work', categoryLabel: 'Journalism', sentence: '"Innovation distinguishes between a leader and a follower," the keynote speaker quoted.', breakdownNote: 'Direct quote with attribution and comma inside quotation mark.', speakerRole: 'Reporter' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Comma Outside Quotation Marks Error',
          subtitle: 'Placing commas or periods outside closing quotation marks (*"Hello", she said).',
          mistakes: [
            {
              id: 'qm_m1',
              incorrect: '"We have resolved the problem", stated the engineer.',
              correct: '"We have resolved the problem," stated the engineer.',
              explanation: 'In standard American English style, the comma belongs inside the quotation mark.',
              ruleTag: 'Comma Inside Quotation Marks'
            }
          ],
          rememberRule: 'Keep periods and commas inside the quotation marks: ," and ."'
        },
        {
          type: 'practice',
          title: 'Quotation Marks Practice',
          subtitle: 'Punctuate dialogue tags and nested quotes.',
          questions: [
            {
              id: 'qm_q1',
              type: 'sentence_correction',
              prompt: 'Choose the sentence with correct quotation and comma placement:',
              incorrectSentence: '"We will release the patch tomorrow", the developer said.',
              correctSentence: '"We will release the patch tomorrow," the developer said.',
              errorHighlight: 'tomorrow", the',
              options: [
                '"We will release the patch tomorrow," the developer said.',
                '"We will release the patch tomorrow", the developer said.',
                '"We will release the patch tomorrow". the developer said.'
              ],
              correctIndex: 0,
              whyExplanation: 'In standard American punctuation, the comma belongs inside the quotation marks: "tomorrow,".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t6_hyphens_and_dashes',
      moduleId: 12,
      title: 'Hyphens and Dashes',
      shortDesc: 'Hyphens (-) for compound modifiers (state-of-the-art), En dash (–) for ranges (1990–2000), and Em dash (—) for dramatic emphasis.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Hyphens (-), En Dashes (–), and Em Dashes (—)',
          subtitle: 'The three horizontal marks: joining words, indicating ranges, and creating dramatic pauses.',
          conceptSummary: 'Do not confuse the three horizontal lines: (1) Hyphen (-) joins compound modifiers before nouns (first-class ticket), (2) En dash (–) indicates numerical spans or ranges (pages 10–25), and (3) Em dash (—) creates an emphatic, dramatic break in thought.',
          visualGraphic: {
            heroSentence: 'We deployed cutting-edge (Hyphen) tech—achieving a 50% increase—in 2020–2024 (En dash).',
            highlights: [
              { word: 'cutting-edge tech', role: 'Hyphen (-) joins compound adjective before noun', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: '—achieving a 50% increase—', role: 'Em Dash (—) creates dramatic parenthetical emphasis', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: '2020–2024', role: 'En Dash (–) represents numerical range "from...to"', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Hyphen (Shortest) → En Dash (Medium Range) → Em Dash (Longest Emphasis).'
          },
          keyTakeaways: [
            'Hyphen (-): joins words into compound adjectives before a noun (well-known author, user-friendly app).',
            'No Hyphen if after the noun: "The author is well known" (NO hyphen!).',
            'No Hyphen with -ly adverbs: "highly respected leader" (NEVER hyphenate -ly adverbs!).',
            'En dash (–): indicates spans and ranges (May–August, pages 45–60).',
            'Em dash (—): replaces parentheses or colons for dramatic, high-impact emphasis.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Compound Hyphenation Matters',
          subtitle: 'Eliminates hilarious ambiguity (e.g. "small-state governor" vs. "small state governor").',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Marketing & Technical Writing',
              example: '"We built high-performance computing clusters with state-of-the-art security."',
              whyNeeded: 'Hyphenating compound modifiers binds the concepts into a single coherent descriptor.'
            }
          ],
          coachTip: 'Never put a hyphen after an adverb ending in -ly: say "exceptionally well written", NOT "exceptionally-well written"!'
        },
        {
          type: 'explanation',
          title: 'Hyphens and Dashes Reference Guide',
          subtitle: 'When to hyphenate vs. when to use an em dash.',
          coreRule: 'Hyphenate two or more words acting as a single adjective before a noun. Use an em dash for dramatic parenthetical breaks.',
          breakdown: [
            { term: 'Compound Adjective BEFORE Noun', plainDefinition: 'Hyphenate to show unit modifier', simpleExample: 'a full-time position, a five-year plan, state-of-the-art lab' },
            { term: 'Compound Adjective AFTER Noun', plainDefinition: 'No hyphen needed', simpleExample: 'The position is full time. / The plan lasts five years.' },
            { term: '-ly Adverbs + Adjective', plainDefinition: 'NEVER hyphenate -ly adverbs', simpleExample: 'a poorly designed website, a highly effective strategy' },
            { term: 'Em Dash (—) for Emphasis', plainDefinition: 'Replaces commas, parentheses, or colons for impact', simpleExample: 'One factor decided the outcome—speed.' }
          ]
        },
        {
          type: 'formula',
          title: 'Hyphen & Dash Formulas',
          subtitle: '[Word-Word] + [Noun] vs. [Sentence] — [Dramatic Idea] — [Sentence Continued]',
          formulaBlocks: [
            { label: 'Hyphenated Modifier', part: 'a cloud-native scalable architecture', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Em Dash Interruption', part: 'The team — despite fierce competition — won the bid.', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The conference runs', verbOrAux: 'October 12–15', objectOrComplement: 'in Chicago', fullSentence: 'The conference runs October 12–15 in Chicago.', context: 'En Dash Range' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Hyphens & Dashes in Real Life',
          subtitle: 'Tech documentation and executive summaries.',
          examples: [
            { id: 'hd_ex1', category: 'work', categoryLabel: 'Tech Specs', sentence: 'We delivered a mission-critical, end-to-end encryption pipeline—ahead of schedule.', breakdownNote: '"mission-critical" and "end-to-end" are hyphenated compound modifiers; "—ahead of schedule" uses an em dash for punchy emphasis.', speakerRole: 'Security Architect' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The -ly Adverb Hyphenation Error',
          subtitle: 'Adding hyphens after -ly adverbs (*a widely-known fact).',
          mistakes: [
            {
              id: 'hd_m1',
              incorrect: 'She is a highly-qualified candidate.',
              correct: 'She is a highly qualified candidate.',
              explanation: 'Adverbs ending in -ly are never joined with hyphens because their modifying role is already grammatically unambiguous.',
              ruleTag: 'No Hyphen with -ly Adverbs'
            }
          ],
          rememberRule: 'Never hyphenate adverbs ending in -ly (say "widely known", NOT "widely-known")!'
        },
        {
          type: 'practice',
          title: 'Hyphens and Dashes Practice',
          subtitle: 'Apply hyphens to compound modifiers accurately.',
          questions: [
            {
              id: 'hd_q1',
              type: 'fill_blank',
              prompt: 'Select the correctly punctuated compound modifier before the noun "strategy":',
              sentenceWithBlank: 'The executive committee unveiled a ___ strategy for next quarter.',
              options: ['long-term', 'long term', 'longly-term'],
              correctIndex: 0,
              grammarFocus: 'Compound modifier before noun',
              whyExplanation: 'When "long-term" sits before the noun "strategy", it functions as a single compound adjective and takes a hyphen.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l12_t7_parentheses_brackets_ellipses',
      moduleId: 12,
      title: 'Parentheses, Brackets, and Ellipses',
      shortDesc: 'Parentheses ( ) for supplementary info, Brackets [ ] for editorial insertions, and Ellipses (...) for omitted text.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Parentheses ( ), Brackets [ ], and Ellipses (...)',
          subtitle: 'The precision mechanical marks of academic and professional writing.',
          conceptSummary: 'Parentheses ( ) enclose supplemental, non-essential background information. Square Brackets [ ] indicate editorial clarifications or corrections inside direct quotes. Ellipses (...) indicate the deliberate omission of words from a quotation.',
          visualGraphic: {
            heroSentence: '"The CEO announced [on Monday] that profits grew (by 18%)... exceeding expectations."',
            highlights: [
              { word: '[on Monday]', role: 'Brackets: Editorial addition clarifying context in quote', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: '(by 18%)', role: 'Parentheses: Supplementary non-essential detail', color: 'bg-amber-100 text-amber-800 border-amber-300' },
              { word: '...', role: 'Ellipsis: Omission of words from original quote', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Parentheses = side comments. Brackets = editorial inserts. Ellipsis = omitted quote text.'
          },
          keyTakeaways: [
            'Parentheses ( ): enclose extra information; sentence must make sense if parentheses are removed.',
            'Punctuation with Parentheses: period goes OUTSIDE if the parenthesis is inside a sentence; INSIDE if the parenthesis is a standalone full sentence.',
            'Square Brackets [ ]: used exclusively for editorial additions, pronoun adjustments, or [sic] inside direct quotes.',
            'Ellipsis (...): exactly three spaced dots indicating omitted words from a quoted passage.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Editorial Brackets Matter',
          subtitle: 'Maintains journalistic integrity and legal quote veracity.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Legal / Academic Citations',
              example: '"The witness testified, \'He [the defendant] signed the contract voluntarily.\'"',
              whyNeeded: 'Square brackets clarify whom "He" refers to without corrupting the original quote.'
            }
          ],
          coachTip: 'Use brackets [ ] when you need to change a letter case or insert a clarifying noun inside someone else\'s quotation.'
        },
        {
          type: 'explanation',
          title: 'Parentheses, Brackets & Ellipses Rules',
          subtitle: 'Editorial conventions in formal style guides (Chicago, APA, MLA).',
          coreRule: 'Use parentheses for non-essential side remarks; use brackets for editor modifications inside quotes; use ellipses for quote omissions.',
          breakdown: [
            { term: 'Parentheses (Supplementary Info)', plainDefinition: 'De-emphasizes side details, acronyms, or dates', simpleExample: 'The World Health Organization (WHO) published the study (see Appendix A).' },
            { term: 'Parentheses Punctuation Placement', plainDefinition: 'Period outside for sentence fragment; inside for whole sentence', simpleExample: 'We finished the audit (on time). (The final figures were verified by KPMG.)' },
            { term: 'Square Brackets in Quotes', plainDefinition: 'Editorial inserts or corrections', simpleExample: '"She [the Prime Minister] declined to comment on the treaty."' },
            { term: 'Ellipses (...) for Omission', plainDefinition: 'Omission of words without changing meaning', simpleExample: '"We hold these truths to be self-evident, that all men are created equal... with certain unalienable Rights."' }
          ]
        },
        {
          type: 'formula',
          title: 'Mechanical Formulas',
          subtitle: '[Main Sentence] ( [supplemental info] ) . vs. " [Quote] [ [editor insert] ] [Quote] " .',
          formulaBlocks: [
            { label: 'Parenthetical Clause', part: 'The latest release (version 3.4.1) fixed all security vulnerabilities .', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Editorial Bracket', part: '" The board approved [ their ] proposal yesterday . "', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'The annual symposium (held in Denver)', verbOrAux: 'drew', objectOrComplement: 'over 5,000 international delegates', fullSentence: 'The annual symposium (held in Denver) drew over 5,000 international delegates.', context: 'Parentheses' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Mechanical Marks in Real Life',
          subtitle: 'Academic papers and legal documentation.',
          examples: [
            { id: 'pbe_ex1', category: 'work', categoryLabel: 'Legal Brief', sentence: 'The contract states that "the licensee [Apex Global] shall maintain adequate insurance coverage... at all times."', breakdownNote: 'Demonstrates square brackets for clarifying the party name and ellipsis for omitted legal clauses.', speakerRole: 'Corporate Attorney' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Parentheses Punctuation Misplacement',
          subtitle: 'Putting the period inside parentheses when the parenthesis is part of a larger sentence.',
          mistakes: [
            {
              id: 'pbe_m1',
              incorrect: 'We delivered the shipment on Tuesday (two days early.)',
              correct: 'We delivered the shipment on Tuesday (two days early).',
              explanation: 'Because "(two days early)" is part of the main sentence, the period belongs outside the closing parenthesis.',
              ruleTag: 'Period Outside Parentheses'
            }
          ],
          rememberRule: 'If the parenthesis is inside a sentence, put the period OUTSIDE the closing parenthesis: (like this).'
        },
        {
          type: 'practice',
          title: 'Parentheses, Brackets, and Ellipses Practice',
          subtitle: 'Select the correct editorial mark.',
          questions: [
            {
              id: 'pbe_q1',
              type: 'multiple_choice',
              prompt: 'Which punctuation mark MUST be used when you insert an explanatory word into a direct quote from another person?',
              options: [
                'Square Brackets [ ]',
                'Parentheses ( )',
                'Quotation Marks " "',
                'Em Dashes —'
              ],
              correctIndex: 0,
              whyExplanation: 'Square brackets [ ] are specifically designated for editorial insertions and clarifications inside quotations.'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
