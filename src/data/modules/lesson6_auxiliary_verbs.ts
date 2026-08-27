import { Module } from '../../types';

export const lesson6AuxiliaryVerbs: Module = {
  id: 6,
  title: 'Lesson 6: Auxiliary Verbs',
  tagline: 'Modals, Permission, Ability, Obligation & Past Habits',
  description: 'Master English modal auxiliary verbs: can/could (ability & requests), may/might (possibility & permission), will/would (willingness & conditionals), shall/should (advice & recommendations), must/have to/ought to (necessity & obligation), and used to (past habits).',
  iconName: 'Sliders',
  color: 'from-purple-600 to-indigo-600',
  topics: [
    {
      id: 'l6_t1_can_and_could',
      moduleId: 6,
      title: 'can and could',
      shortDesc: 'Ability, possibility, polite requests, and past ability.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Can and Could: Ability & Polite Requests',
          subtitle: 'Expressing present/past capabilities and framing courteous inquiries.',
          conceptSummary: '"Can" expresses present ability (I can code), general possibility, and informal requests (Can you help?). "Could" expresses past ability (I could swim when I was 5) and more polite, formal requests (Could you please send the report?).',
          visualGraphic: {
            heroSentence: 'I can speak three languages, and could you please share your notes?',
            highlights: [
              { word: 'can speak', role: 'Present Ability (can + base verb)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'could you please share', role: 'Polite Formal Request (could + base verb)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Modals are always followed by the base bare infinitive without "to".'
          },
          keyTakeaways: [
            'Can: Present ability (She can drive), informal permission (You can sit here).',
            'Could: Past ability (I could run fast in high school).',
            'Could: Polite requests in present time (Could you please hold the elevator?).',
            'Cannot / Can\'t / Couldn\'t for negative ability or impossibility.'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why Can vs. Could Matters',
          subtitle: '"Could you" adds an immediate layer of professional polish and respect.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Client Inquiries',
              example: '"Could you please provide an updated project timeline?"',
              whyNeeded: 'Using "could" softens requests into respectful, highly professional inquiries.'
            }
          ],
          coachTip: 'Always use bare base verb after can/could: "Can he COME?", NOT "Can he comes?" or "Can he to come?".'
        },
        {
          type: 'explanation',
          title: 'Can vs. Could Functions Breakdown',
          subtitle: 'Ability vs. Request vs. Possibility.',
          coreRule: 'Follow can and could directly with the bare base verb. Never add "to".',
          breakdown: [
            { term: '1. Ability (Present vs. Past)', plainDefinition: 'Can = now | Could = general past ability', simpleExample: 'I can analyze data. / When she was young, she could speak fluent French.' },
            { term: '2. Polite Requests', plainDefinition: 'Could is more polite/formal than can in the present', simpleExample: 'Could I borrow your charger for a moment?' },
            { term: '3. Possibility (Hypothetical)', plainDefinition: 'Could indicates a potential future option', simpleExample: 'We could expand into the European market next year.' }
          ]
        },
        {
          type: 'formula',
          title: 'Can / Could Formula',
          subtitle: '[Subject] + [can / could] + [Base Verb (no "to")]',
          formulaBlocks: [
            { label: 'Modal', part: 'Could / Can', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Subject', part: 'you', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Base Verb', part: 'forward the meeting invitation to the new team?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Our team can', verbOrAux: 'deliver', objectOrComplement: 'the project ahead of schedule', fullSentence: 'Our team can deliver the project ahead of schedule.', context: 'Planning' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Can & Could in Real Life',
          subtitle: 'Workplace collaboration and polite customer service.',
          examples: [
            { id: 'cc_ex1', category: 'work', categoryLabel: 'Client Call', sentence: 'Could you please confirm if Tuesday afternoon works for our final walkthrough?', breakdownNote: '"Could you please confirm" is the industry gold standard for courteous business scheduling.', speakerRole: 'Account Manager' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Can / Could Mistakes to Avoid',
          subtitle: 'Adding "to" or inflecting the verb after modals.',
          mistakes: [
            {
              id: 'cc_m1',
              incorrect: 'She can to speak five languages.',
              correct: 'She can speak five languages.',
              explanation: 'Modal verbs like "can" are followed by the bare infinitive WITHOUT "to".',
              ruleTag: 'No "to" after Modal'
            },
            {
              id: 'cc_m2',
              incorrect: 'He can plays the violin.',
              correct: 'He can play the violin.',
              explanation: 'Never add -s to the main verb after a modal auxiliary verb.',
              ruleTag: 'Base Verb after Modal'
            }
          ],
          rememberRule: 'Never put "to" or "-s" after can, could, may, might, should, or must!'
        },
        {
          type: 'practice',
          title: 'Can and Could Practice',
          subtitle: 'Select the correct modal structure.',
          questions: [
            {
              id: 'cc_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the most polite request form:',
              sentenceWithBlank: '___ you please send me the finalized financial report by noon?',
              options: ['Could', 'Can to', 'Could to'],
              correctIndex: 0,
              grammarFocus: 'Polite request with could',
              whyExplanation: '"Could" is the most polite modal request and is followed directly by the subject and base verb.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l6_t2_may_and_might',
      moduleId: 6,
      title: 'may and might',
      shortDesc: 'Possibility (50% vs 30%), formal permission (May I...?), and polite wishes.',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'May and Might: Possibility & Formal Permission',
          subtitle: 'Expressing degrees of likelihood and asking for permission with grace.',
          conceptSummary: '"May" and "might" express possibility (something could happen, but is not certain). "May" is also used for formal, polite permission (May I come in?).',
          visualGraphic: {
            heroSentence: 'It may rain this afternoon, and we might need an umbrella.',
            highlights: [
              { word: 'may rain', role: 'Possibility ~50% chance', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'might need', role: 'Slight Possibility ~30% chance', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'May = higher probability / formal permission. Might = slightly lower probability / hypothetical.'
          },
          keyTakeaways: [
            'Possibility: "We may attend the conference" (fairly likely).',
            'Lower Possibility: "He might join us if he finishes early" (less likely).',
            'Formal Permission: "May I ask a question?" (much more formal than "Can I?").',
            'Past Possibility: may have / might have + V3 (She might have missed the bus).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why May vs. Might Matters',
          subtitle: 'Essential for risk management, contingency planning, and executive etiquette.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Risk Assessment Meeting',
              example: '"Supply chain disruptions may delay shipments by up to three days."',
              whyNeeded: 'Accurately quantifies uncertainty without making false guarantees.'
            }
          ],
          coachTip: 'Use "May I..." in formal interviews or official correspondence instead of "Can I...".'
        },
        {
          type: 'explanation',
          title: 'May vs. Might Detailed Comparison',
          subtitle: 'Possibility scale and permission rules.',
          coreRule: 'Use may for realistic possibilities and formal permission; use might for tentative possibilities or conditional clauses.',
          breakdown: [
            { term: 'Formal Permission', plainDefinition: 'Requesting or granting official authorization', simpleExample: 'You may begin the exam now. / May I review your passport?' },
            { term: 'Present/Future Possibility', plainDefinition: 'Something that could reasonably occur', simpleExample: 'The CEO may announce new leadership roles today.' },
            { term: 'Hypothetical / Conditional Might', plainDefinition: 'Possibility depending on an unlikely condition', simpleExample: 'If we had more budget, we might hire another developer.' },
            { term: 'Past Speculation', plainDefinition: 'May have / Might have + V3', simpleExample: 'They might have forgotten about the rescheduled meeting.' }
          ]
        },
        {
          type: 'formula',
          title: 'May / Might Formula',
          subtitle: '[Subject] + [may / might] + [Base Verb] OR [May I] + [Base Verb]?',
          formulaBlocks: [
            { label: 'Subject', part: 'The economic market', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Modal', part: 'may / might', color: 'bg-amber-100 text-amber-900 border-amber-300' },
            { label: 'Base Verb', part: 'experience short-term fluctuations', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'May I', verbOrAux: 'have', objectOrComplement: 'a brief word with you regarding the budget?', fullSentence: 'May I have a brief word with you regarding the budget?', context: 'Office' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'May and Might in Real Life',
          subtitle: 'Corporate correspondence and formal greetings.',
          examples: [
            { id: 'mm_ex1', category: 'work', categoryLabel: 'Formal Inquiries', sentence: 'May I introduce Dr. Aris Thorne, our new Chief Medical Officer?', breakdownNote: '"May I introduce" is standard diplomatic etiquette.', speakerRole: 'Hospital Director' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'May vs. Might Mistakes',
          subtitle: 'Using "might" for granting permission or adding "to" after may.',
          mistakes: [
            {
              id: 'mm_m1',
              incorrect: 'You might leave early today if you want (as permission).',
              correct: 'You may leave early today if you want.',
              explanation: 'Granting permission uses "may" or "can", not "might".',
              ruleTag: 'May for Granting Permission'
            }
          ],
          rememberRule: 'Grant permission with "You may", not "You might"!'
        },
        {
          type: 'practice',
          title: 'May and Might Practice',
          subtitle: 'Select the appropriate modal for permission and possibility.',
          questions: [
            {
              id: 'mm_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the most polite, formal permission phrase:',
              sentenceWithBlank: '___ I be excused to attend an urgent family phone call?',
              options: ['May', 'Might', 'Must'],
              correctIndex: 0,
              grammarFocus: 'Formal permission with May I',
              whyExplanation: '"May I" is the established polite formal construction for requesting permission.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l6_t3_will_and_would',
      moduleId: 6,
      title: 'will and would',
      shortDesc: 'Willingness, future predictions, polite invitations (Would you like...?), and hypothetical conditionals.',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Will and Would: Predictions, Offers & Conditionals',
          subtitle: 'Future determination and courteous hypothetical phrasing.',
          conceptSummary: '"Will" expresses future certainty, promises, and spontaneous decisions. "Would" expresses polite offers (Would you like coffee?), polite requests (Would you mind closing the door?), past habitual actions (We would always visit Grandma on Sundays), and imaginary conditional situations.',
          visualGraphic: {
            heroSentence: 'I will help you with the report, and would you like a cup of tea?',
            highlights: [
              { word: 'will help', role: 'Promise / Spontaneous Offer (will + base)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'would you like', role: 'Polite Offer / Invitation (would + like)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Would is the polite and conditional counterpart of will.'
          },
          keyTakeaways: [
            'Will: Future intention, certainty, promises (I will call you at 5).',
            'Would you like + noun / to-verb: Polite offer (Would you like to join us?).',
            'Would you mind + -ing: Polite request (Would you mind checking this?).',
            'Hypothetical conditional: "If I had more time, I would learn Spanish."'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Would You Mind" Precision Matters',
          subtitle: 'Answering "Would you mind" correctly is crucial for English politeness.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Workplace Etiquette',
              example: '"Would you mind sharing your screen? — Not at all! (meaning: Yes, I\'m happy to share)."',
              whyNeeded: '"Would you mind" asks if it bothers you; answering "No / Not at all" means you agree!'
            }
          ],
          coachTip: 'To agree to "Would you mind...", say "Not at all!" or "Sure, I\'d be happy to!".'
        },
        {
          type: 'explanation',
          title: 'Will vs. Would Core Applications',
          subtitle: 'Direct vs. Polite / Hypothetical usage matrix.',
          coreRule: 'Use will for real-world future events; use would for politeness, past habits, or imaginary scenarios.',
          breakdown: [
            { term: 'Future Certainty / Promises', plainDefinition: 'Will + Base Verb', simpleExample: 'We will deliver the shipment on Monday morning.' },
            { term: 'Polite Offers & Preferences', plainDefinition: 'Would like / Would prefer / Would rather', simpleExample: 'Would you like some water? / I would prefer a morning slot.' },
            { term: 'Polite Requests (Would you mind + -ing)', plainDefinition: 'Most courteous way to ask a favor', simpleExample: 'Would you mind turning down the volume slightly?' },
            { term: 'Past Repeated Actions', plainDefinition: 'Would = used to (for actions, not states)', simpleExample: 'Every summer, we would swim in the lake.' }
          ]
        },
        {
          type: 'formula',
          title: 'Would Politeness Formulas',
          subtitle: '[Would you like] + [Noun / to + Verb] OR [Would you mind] + [Verb-ing]',
          formulaBlocks: [
            { label: 'Offer', part: 'Would you like to review the agenda?', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Request', part: 'Would you mind sending me the file?', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'If we hired another engineer,', verbOrAux: 'we would complete', objectOrComplement: 'the project two weeks earlier', fullSentence: 'If we hired another engineer, we would complete the project two weeks earlier.', context: 'Planning' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Will and Would in Real Life',
          subtitle: 'Hospitality and workplace discussions.',
          examples: [
            { id: 'wwd_ex1', category: 'restaurant', categoryLabel: 'Fine Dining', sentence: 'Would you like to see the dessert menu or would you prefer coffee?', breakdownNote: '"Would you like" and "would you prefer" are standard hospitality phrases.', speakerRole: 'Server' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The "Would You Mind" Trap',
          subtitle: 'Using base verb after "would you mind" or answering incorrectly.',
          mistakes: [
            {
              id: 'wwd_m1',
              incorrect: 'Would you mind to close the door?',
              correct: 'Would you mind closing the door?',
              explanation: '"Would you mind" must always be followed by a gerund ending in -ing.',
              ruleTag: 'Would You Mind + Gerund'
            }
          ],
          rememberRule: 'Always say "Would you mind + VERB-ING" (Would you mind helping, checking, waiting)!'
        },
        {
          type: 'practice',
          title: 'Will and Would Practice',
          subtitle: 'Select the right construction for offers and requests.',
          questions: [
            {
              id: 'wwd_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct verb form after "would you mind":',
              sentenceWithBlank: 'Would you mind ___ the projector for the upcoming presentation?',
              options: ['setting up', 'to set up', 'set up'],
              correctIndex: 0,
              grammarFocus: 'Would you mind + gerund',
              whyExplanation: '"Would you mind" requires the -ing gerund form "setting up".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l6_t4_shall_and_should',
      moduleId: 6,
      title: 'shall and should',
      shortDesc: 'Formal suggestions (Shall we...?), legal obligations, advice, and recommendations (should).',
      estimatedMinutes: 6,
      level: 'Beginner',
      screens: [
        {
          type: 'intro',
          title: 'Shall and Should: Suggestions & Advice',
          subtitle: 'Offering joint suggestions and giving constructive recommendations.',
          conceptSummary: '"Shall" is used in questions with "I" and "we" for polite offers and suggestions (Shall we begin?), as well as formal legal contracts. "Should" is the universal modal for advice, duty, recommendations, and reasonable expectations (You should get some rest).',
          visualGraphic: {
            heroSentence: 'Shall we start the meeting? You should definitely review the agenda first.',
            highlights: [
              { word: 'Shall we start', role: 'Polite Group Suggestion (Shall we + base)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'should review', role: 'Strong Recommendation / Advice (should + base)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Shall = suggestion with I/we. Should = advice/recommendation for all subjects.'
          },
          keyTakeaways: [
            'Shall I / Shall we: polite suggestion ("Shall we grab a coffee?").',
            'Legal Shall: mandatory obligation in contracts ("The tenant shall pay rent on the first").',
            'Should: advice and recommendations ("You should backup your files daily").',
            'Should have + V3: regret or unfulfilled past expectation ("I should have left earlier").'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Should Have" Matters',
          subtitle: 'Essential for post-mortem reviews and learning from mistakes.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Project Post-Mortem',
              example: '"We should have conducted user testing earlier in the development cycle."',
              whyNeeded: 'Expresses constructive retrospectives without pointing aggressive blame.'
            }
          ],
          coachTip: 'Say "You should try this", NOT "You must to try this".'
        },
        {
          type: 'explanation',
          title: 'Shall vs. Should Reference Guide',
          subtitle: 'When to choose Shall vs. Should.',
          coreRule: 'Use Shall with I/we for offers and legal mandates; use Should for advice and logical expectations.',
          breakdown: [
            { term: 'Shall I / Shall we?', plainDefinition: 'Polite offers and collaborative proposals', simpleExample: 'Shall I help you with those heavy boxes? / Shall we schedule a follow-up?' },
            { term: 'Should (Present Advice)', plainDefinition: 'Best practice or good idea', simpleExample: 'You should update your operating system for enhanced security.' },
            { term: 'Should (Expectation)', plainDefinition: 'Likely to happen based on plan', simpleExample: 'The package should arrive by 3 PM today.' },
            { term: 'Should have + V3 (Past Regret)', plainDefinition: 'Something that was a good idea but did not happen', simpleExample: 'We should have reserved a table in advance.' }
          ]
        },
        {
          type: 'formula',
          title: 'Shall and Should Formulas',
          subtitle: '[Shall I / we] + [Base Verb]? OR [Subject] + [should] + [Base Verb]',
          formulaBlocks: [
            { label: 'Suggestion', part: 'Shall we discuss the next milestone?', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Advice', part: 'All employees should complete the safety training', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'You should have', verbOrAux: 'consulted', objectOrComplement: 'the legal department first', fullSentence: 'You should have consulted the legal department first.', context: 'Compliance' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Shall and Should in Action',
          subtitle: 'Meeting coordination and professional consulting.',
          examples: [
            { id: 'ss_ex1', category: 'work', categoryLabel: 'Meeting Wrap-up', sentence: 'Shall we reconvene next Tuesday at 10 AM to finalize the design specifications?', breakdownNote: '"Shall we reconvene" is an elegant collaborative suggestion.', speakerRole: 'Chairperson' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Should Mistakes to Avoid',
          subtitle: 'Writing "should of" instead of "should have".',
          mistakes: [
            {
              id: 'ss_m1',
              incorrect: 'We should of called the client earlier.',
              correct: 'We should have called the client earlier. (or should\'ve)',
              explanation: '"Should of" is a phonetic spelling error. The correct grammatical structure is "should have" + past participle.',
              ruleTag: 'Should Have vs Should Of'
            }
          ],
          rememberRule: 'Never write "should of"—always write "should have" or "should\'ve"!'
        },
        {
          type: 'practice',
          title: 'Shall and Should Practice',
          subtitle: 'Select the correct modal for suggestions and past advice.',
          questions: [
            {
              id: 'ss_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank with the correct phrase for a past regret:',
              sentenceWithBlank: 'We ___ double-checked the flight departure time before leaving for the airport.',
              options: ['should have', 'should of', 'shall have'],
              correctIndex: 0,
              grammarFocus: 'Past modal regret: should have + V3',
              whyExplanation: '"Should have" followed by the past participle "double-checked" expresses past advice/regret.'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l5_t5_must_have_to_ought_to',
      moduleId: 6,
      title: 'must, have to, ought to',
      shortDesc: 'Internal obligation (must), external rules (have to), moral duty (ought to), and prohibition (must not vs. don\'t have to).',
      estimatedMinutes: 7,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Must, Have To & Ought To: Obligation & Necessity',
          subtitle: 'Expressing strict rules, personal obligations, and moral responsibilities.',
          conceptSummary: '"Must" expresses personal necessity or strong deduction (You must see this). "Have to" expresses external rules or laws (You have to wear a seatbelt). "Ought to" expresses moral obligation and strong duty (We ought to help the environment).',
          visualGraphic: {
            heroSentence: 'You must not enter (Prohibited) vs. You don\'t have to enter (Optional).',
            highlights: [
              { word: 'must not enter', role: 'Prohibition (100% Forbidden)', color: 'bg-rose-100 text-rose-800 border-rose-300' },
              { word: 'don\'t have to enter', role: 'Lack of Obligation (Optional / Free Choice)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Crucial difference: "Must not" = forbidden. "Don\'t have to" = not necessary.'
          },
          keyTakeaways: [
            'Must: Strong internal necessity or logical deduction (He must be exhausted).',
            'Have to: External rules, laws, policies (I have to renew my passport).',
            'Must not (Mustn\'t): Strictly forbidden by law or rule.',
            'Don\'t have to: No obligation (It\'s free, you don\'t have to pay).',
            'Ought to: Moral duty or ethical best practice (ought to + base verb).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Mustn\'t" vs. "Don\'t Have To" Matters',
          subtitle: 'The single most dangerous modal mistake in international business.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Security Protocols',
              example: '"You must not share your keycard (forbidden) vs. You don\'t have to stay late (optional)."',
              whyNeeded: 'Telling a colleague "You must not stay" means staying is banned, when you meant "You don\'t have to stay" (it\'s optional)!'
            }
          ],
          coachTip: 'Remember: "Must not" = 0% allowed (illegal). "Don\'t have to" = 0% required (optional).'
        },
        {
          type: 'explanation',
          title: 'Obligation & Prohibition Matrix',
          subtitle: 'Complete breakdown of necessity modals.',
          coreRule: 'Identify whether the obligation comes from internal desire, external law, moral duty, or if it is optional vs. forbidden.',
          breakdown: [
            { term: 'Must (Internal / Deduction)', plainDefinition: 'Personal conviction or logical conclusion', simpleExample: 'I must finish this book tonight. / The lights are off; they must be sleeping.' },
            { term: 'Have to (External Rule)', plainDefinition: 'Imposed by company policy, law, or circumstance', simpleExample: 'Drivers have to carry a valid license at all times.' },
            { term: 'Must not / Mustn\'t (Prohibition)', plainDefinition: 'Forbidden by policy or law', simpleExample: 'Passengers must not smoke in the aircraft.' },
            { term: 'Don\'t / Doesn\'t have to (Optional)', plainDefinition: 'No necessity; you are free to choose', simpleExample: 'You don\'t have to wear a suit to casual Fridays.' },
            { term: 'Ought to (Moral Obligation)', plainDefinition: 'Ethical duty (takes "to"!)', simpleExample: 'We ought to support local renewable energy initiatives.' }
          ]
        },
        {
          type: 'formula',
          title: 'Obligation Formulas',
          subtitle: '[Subject] + [must / have to / ought to] + [Base Verb]',
          formulaBlocks: [
            { label: 'Mandatory Rule', part: 'All visitors have to check in with security', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Prohibition', part: 'Employees must not disclose confidential trade secrets', color: 'bg-rose-100 text-rose-900 border-rose-300' }
          ],
          tableExamples: [
            { subject: 'You don\'t have to', verbOrAux: 'attend', objectOrComplement: 'the optional orientation workshop', fullSentence: 'You don\'t have to attend the optional orientation workshop.', context: 'HR' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Obligation in Daily Life',
          subtitle: 'Safety protocols and workplace guidelines.',
          examples: [
            { id: 'mho_ex1', category: 'work', categoryLabel: 'Lab Safety', sentence: 'All laboratory researchers must wear protective eyewear before entering the cleanroom.', breakdownNote: '"must wear" expresses a non-negotiable safety rule.', speakerRole: 'Safety Inspector' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'The Prohibition vs. Lack of Obligation Mistake',
          subtitle: 'Using "mustn\'t" when you mean something is optional.',
          mistakes: [
            {
              id: 'mho_m1',
              incorrect: 'You mustn\'t come tomorrow if you are busy (meaning optional).',
              correct: 'You don\'t have to come tomorrow if you are busy.',
              explanation: '"Mustn\'t" means you are forbidden from coming. Use "don\'t have to" for optional attendance.',
              ruleTag: 'Must Not vs Don\'t Have To'
            }
          ],
          rememberRule: 'Use "don\'t have to" when an action is optional; use "must not" when it is forbidden!'
        },
        {
          type: 'practice',
          title: 'Must, Have To & Ought To Practice',
          subtitle: 'Differentiate prohibition from optional activities.',
          questions: [
            {
              id: 'mho_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank for something that is completely optional (not required):',
              sentenceWithBlank: 'Tomorrow is a national holiday, so we ___ go to the office.',
              options: ['don\'t have to', 'must not', 'ought not to'],
              correctIndex: 0,
              grammarFocus: 'Lack of obligation: don\'t have to',
              whyExplanation: 'Because going to the office is not necessary on a holiday, use "don\'t have to".'
            }
          ]
        }
      ],
      quizQuestions: []
    },
    {
      id: 'l6_t6_used_to',
      moduleId: 6,
      title: 'Used to',
      shortDesc: 'Past habits and states that no longer exist (used to do) vs. Be used to (accustomed to).',
      estimatedMinutes: 6,
      level: 'Elementary',
      screens: [
        {
          type: 'intro',
          title: 'Used To: Past Habits vs. Being Accustomed To',
          subtitle: 'Describing past routines that have stopped vs. current familiarity.',
          conceptSummary: '"Used to + base verb" describes past habits or states that were true in the past but are no longer true today (I used to live in Paris). This is different from "be used to + noun/gerund", which means being accustomed to something.',
          visualGraphic: {
            heroSentence: 'I used to commute by train, but now I am used to working from home.',
            highlights: [
              { word: 'used to commute', role: 'Past Habit (No longer happens)', color: 'bg-blue-100 text-blue-800 border-blue-300' },
              { word: 'am used to working', role: 'Familiarity (be used to + gerund)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' }
            ],
            caption: 'Used to + base = past habit. Be used to + -ing = accustomed to.'
          },
          keyTakeaways: [
            'Used to + Base Verb: Past habit or state that is no longer true (I used to smoke).',
            'Negative Past Habit: didn\'t use to + Base Verb (I didn\'t use to like coffee).',
            'Question: Did you use to...? (Did you use to play piano?).',
            'Be / Get used to + -ing: Accustomed / becoming accustomed (I am used to waking up at 6 AM).'
          ]
        },
        {
          type: 'why_it_matters',
          title: 'Why "Used To" Mastery Matters',
          subtitle: 'Eliminates confusion between past routines and current habits.',
          adultSituations: [
            {
              icon: 'Briefcase',
              situation: 'Relocation & Onboarding',
              example: '"I used to work in London, but I am now used to Tokyo\'s business culture."',
              whyNeeded: 'Contrast past background with present cultural adaptation.'
            }
          ],
          coachTip: 'In negative and questions with "did", drop the "d": "didn\'t USE to", NOT "didn\'t used to"!'
        },
        {
          type: 'explanation',
          title: 'The 3 "Used To" Constructions',
          subtitle: 'Past Habit vs. Current State vs. Adapting Process.',
          coreRule: 'Identify if you are describing a ceased past habit (used to + base) or being comfortable with something (be/get used to + -ing).',
          breakdown: [
            { term: '1. Used to + Base Verb', plainDefinition: 'Past habit/state that is finished', simpleExample: 'He used to work at Google (he doesn\'t work there now).' },
            { term: '2. Be used to + Noun / -ing', plainDefinition: 'To be accustomed to something familiar', simpleExample: 'She is used to high-pressure deadlines.' },
            { term: '3. Get used to + Noun / -ing', plainDefinition: 'The process of becoming accustomed', simpleExample: 'It took me three months to get used to driving on the left.' }
          ]
        },
        {
          type: 'formula',
          title: 'Used To Formulas',
          subtitle: '[S] + used to + [Base V] vs. [S] + [am/is/are] + used to + [Noun / V-ing]',
          formulaBlocks: [
            { label: 'Past Habit', part: 'I used to travel frequently for work', color: 'bg-blue-100 text-blue-900 border-blue-300' },
            { label: 'Familiarity', part: 'I am used to living in a cold climate', color: 'bg-emerald-100 text-emerald-900 border-emerald-300' }
          ],
          tableExamples: [
            { subject: 'Did you', verbOrAux: 'use to', objectOrComplement: 'live in Chicago before moving here?', fullSentence: 'Did you use to live in Chicago before moving here?', context: 'Introduction' }
          ]
        },
        {
          type: 'real_life_examples',
          title: 'Used To in Daily Life',
          subtitle: 'Career progression and life transitions.',
          examples: [
            { id: 'ut_ex1', category: 'work', categoryLabel: 'Career Conversation', sentence: 'I used to work in finance, but after getting used to coding, I transitioned into software development.', breakdownNote: '"used to work" (past habit) and "getting used to coding" (adaptation).', speakerRole: 'Developer' }
          ]
        },
        {
          type: 'common_mistakes',
          title: 'Common "Used To" Mistakes',
          subtitle: 'Using base verb after "be used to" or saying "I use to" for present habits.',
          mistakes: [
            {
              id: 'ut_m1',
              incorrect: 'I am used to wake up early.',
              correct: 'I am used to waking up early.',
              explanation: 'After "be used to" (meaning accustomed), "to" is a preposition, requiring the -ing gerund "waking".',
              ruleTag: 'Be used to + Gerund'
            },
            {
              id: 'ut_m2',
              incorrect: 'I use to go to the gym every day now (for present habit).',
              correct: 'I usually go to the gym every day now.',
              explanation: '"Used to" is strictly past tense. For present routines, use "usually" or "regularly", not "use to".',
              ruleTag: 'Present Habit with Usually'
            }
          ],
          rememberRule: 'Used to = past only! For present habits, say "I usually...", NOT "I use to..."!'
        },
        {
          type: 'practice',
          title: 'Used To Practice',
          subtitle: 'Select the right form of used to.',
          questions: [
            {
              id: 'ut_q1',
              type: 'fill_blank',
              prompt: 'Fill in the blank for someone who is already comfortable with an environment:',
              sentenceWithBlank: 'She isn\'t bothered by the noise; she is used to ___ in a busy open-plan office.',
              options: ['working', 'work', 'worked'],
              correctIndex: 0,
              grammarFocus: 'Be used to + gerund (-ing)',
              whyExplanation: '"Is used to" means accustomed to, which requires the gerund "working".'
            }
          ]
        }
      ],
      quizQuestions: []
    }
  ]
};
