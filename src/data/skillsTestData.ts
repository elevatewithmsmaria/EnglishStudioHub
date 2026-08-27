import {
  ListeningTest,
  ReadingTest,
  WritingTest,
  SpeakingTest
} from '../types';

// ==========================================
// 1. LISTENING PRACTICE TESTS (6 Comprehensive Tests)
// ==========================================
export const LISTENING_TESTS: ListeningTest[] = [
  {
    id: 'list_1_workplace_briefing',
    title: 'Workplace Briefing: Project Alpha Launch',
    category: 'workplace',
    level: 'Beginner',
    durationMinutes: 4,
    context: 'Listen to a project manager briefing their team about the upcoming product rollout deadlines, team roles, and meeting schedule.',
    audioScript: 'Good morning, everyone. Thank you for arriving on time. As you know, our quarterly system upgrade, Project Alpha, will launch on Friday, October 24th at 9:00 AM. Sarah will supervise database verification, while David oversees user acceptance testing. If you identify any critical bugs or data discrepancies, please report them immediately in the engineering Slack channel. We will hold a daily standup meeting at 8:30 AM every morning until the rollout is complete. Please review your assigned checklists before the end of the day.',
    dialogue: [
      { speaker: 'Project Manager (Marcus)', avatar: '💼', text: 'Good morning, everyone. Thank you for arriving on time. As you know, our quarterly system upgrade, Project Alpha, will launch on Friday, October 24th at 9:00 AM.' },
      { speaker: 'Project Manager (Marcus)', avatar: '💼', text: 'Sarah will supervise database verification, while David oversees user acceptance testing.' },
      { speaker: 'Project Manager (Marcus)', avatar: '💼', text: 'If you identify any critical bugs or data discrepancies, please report them immediately in the engineering Slack channel.' },
      { speaker: 'Project Manager (Marcus)', avatar: '💼', text: 'We will hold a daily standup meeting at 8:30 AM every morning until the rollout is complete. Please review your assigned checklists before the end of the day.' }
    ],
    vocabulary: [
      { word: 'rollout', definition: 'The official release or launch of a new product or system.', example: 'The software rollout will happen overnight.' },
      { word: 'discrepancy', definition: 'A lack of compatibility or similarity between two or more facts.', example: 'There was a small data discrepancy in the final ledger.' },
      { word: 'supervise', definition: 'Observe and direct the execution of a task or project.', example: 'Sarah will supervise the testing protocol.' }
    ],
    questions: [
      {
        id: 'lq1_1',
        type: 'multiple_choice',
        prompt: 'When will Project Alpha officially launch?',
        options: [
          'Friday, October 24th at 9:00 AM',
          'Thursday, October 23rd at 8:30 AM',
          'Monday, October 27th at 9:00 AM',
          'Friday, October 24th at 8:30 AM'
        ],
        correctAnswer: 0,
        whyExplanation: 'The speaker clearly states: "Project Alpha will launch on Friday, October 24th at 9:00 AM."'
      },
      {
        id: 'lq1_2',
        type: 'multiple_choice',
        prompt: 'What is Sarah\'s specific responsibility during the launch?',
        options: [
          'User acceptance testing',
          'Database verification',
          'Client communications',
          'Leading the 8:30 AM standup'
        ],
        correctAnswer: 1,
        whyExplanation: 'The manager notes: "Sarah will supervise database verification, while David oversees user acceptance testing."'
      },
      {
        id: 'lq1_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the exact missing words: "If you identify any critical bugs or data ___, please report them immediately."',
        correctAnswer: 'discrepancies',
        whyExplanation: 'The audio speaker uses the plural noun "discrepancies".',
        grammarFocus: 'Plural spelling of consonant + -y nouns'
      }
    ]
  },
  {
    id: 'list_2_doctor_appointment',
    title: 'Medical Consultation: Post-Op Care',
    category: 'everyday',
    level: 'Beginner',
    durationMinutes: 4,
    context: 'A physician explains medication instructions, activity restrictions, and follow-up steps to a patient recovering from a minor procedure.',
    audioScript: 'Hello, Mr. Henderson. Your vital signs look steady today. I am prescribing an anti-inflammatory medication that you should take twice daily with meals. It is very important that you do not take this medication on an empty stomach. You must avoid heavy lifting or strenuous exercise for the next ten days. If you experience mild dizziness or swelling, please call our clinic hotline immediately. We have scheduled your follow-up appointment for next Tuesday at 2:15 PM.',
    dialogue: [
      { speaker: 'Dr. Patel', avatar: '🩺', text: 'Hello, Mr. Henderson. Your vital signs look steady today.' },
      { speaker: 'Dr. Patel', avatar: '🩺', text: 'I am prescribing an anti-inflammatory medication that you should take twice daily with meals. It is very important that you do not take this medication on an empty stomach.' },
      { speaker: 'Dr. Patel', avatar: '🩺', text: 'You must avoid heavy lifting or strenuous exercise for the next ten days.' },
      { speaker: 'Dr. Patel', avatar: '🩺', text: 'If you experience mild dizziness or swelling, please call our clinic hotline immediately. We have scheduled your follow-up appointment for next Tuesday at 2:15 PM.' }
    ],
    vocabulary: [
      { word: 'anti-inflammatory', definition: 'Medication that reduces swelling and pain.', example: 'Take the anti-inflammatory after breakfast.' },
      { word: 'strenuous', definition: 'Requiring or using great exertion or energy.', example: 'Avoid strenuous physical workouts this week.' }
    ],
    questions: [
      {
        id: 'lq2_1',
        type: 'multiple_choice',
        prompt: 'How often should the patient take the anti-inflammatory medication?',
        options: [
          'Once a day before bed',
          'Twice daily with meals',
          'Three times daily on an empty stomach',
          'Only when experiencing severe pain'
        ],
        correctAnswer: 1,
        whyExplanation: 'The doctor instructs: "...prescribing an anti-inflammatory medication that you should take twice daily with meals."'
      },
      {
        id: 'lq2_2',
        type: 'multiple_choice',
        prompt: 'How long must the patient avoid heavy lifting?',
        options: [
          'Five days',
          'One week',
          'Ten days',
          'Two weeks'
        ],
        correctAnswer: 2,
        whyExplanation: 'The doctor states: "You must avoid heavy lifting or strenuous exercise for the next ten days."'
      },
      {
        id: 'lq2_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the missing adjective: "You must avoid heavy lifting or ___ exercise."',
        correctAnswer: 'strenuous',
        whyExplanation: 'The doctor specifically uses the descriptive adjective "strenuous".',
        grammarFocus: 'Spelling of complex adjectives'
      }
    ]
  },
  {
    id: 'list_3_airport_announcement',
    title: 'Airport Gate Announcement: Flight Delay',
    category: 'travel',
    level: 'Intermediate',
    durationMinutes: 5,
    context: 'Listen to a gate agent announcing a departure gate change and weather delay for international passengers.',
    audioScript: 'Attention all passengers booked on Flight BA-248 bound for London Heathrow. Due to severe thunderstorms across the northern flight corridor, departure has been delayed by approximately forty-five minutes. Our new estimated departure time is 4:50 PM. In addition, please note that our boarding gate has been relocated from Gate B-12 to Gate C-27. Complimentary refreshments and water bottles are available at the service desk near Gate C-25. Passengers requiring special mobility assistance or traveling with small children are invited to begin pre-boarding at 4:25 PM.',
    dialogue: [
      { speaker: 'Gate Agent', avatar: '✈️', text: 'Attention all passengers booked on Flight BA-248 bound for London Heathrow.' },
      { speaker: 'Gate Agent', avatar: '✈️', text: 'Due to severe thunderstorms across the northern flight corridor, departure has been delayed by approximately forty-five minutes. Our new estimated departure time is 4:50 PM.' },
      { speaker: 'Gate Agent', avatar: '✈️', text: 'In addition, please note that our boarding gate has been relocated from Gate B-12 to Gate C-27.' },
      { speaker: 'Gate Agent', avatar: '✈️', text: 'Complimentary refreshments and water bottles are available at the service desk near Gate C-25. Passengers requiring special mobility assistance or traveling with small children are invited to begin pre-boarding at 4:25 PM.' }
    ],
    vocabulary: [
      { word: 'corridor', definition: 'A designated air traffic route.', example: 'The flight corridor was affected by heavy headwinds.' },
      { word: 'complimentary', definition: 'Given or supplied free of charge.', example: 'Complimentary beverages were served at the lounge.' },
      { word: 'relocated', definition: 'Moved to a new place or position.', example: 'The gate was relocated due to runway maintenance.' }
    ],
    questions: [
      {
        id: 'lq3_1',
        type: 'multiple_choice',
        prompt: 'What is the primary cause of the flight delay?',
        options: [
          'Mechanical engine inspections',
          'Severe thunderstorms in the flight corridor',
          'Air traffic controller strikes',
          'Missing luggage scans'
        ],
        correctAnswer: 1,
        whyExplanation: 'The agent explains: "Due to severe thunderstorms across the northern flight corridor, departure has been delayed..."'
      },
      {
        id: 'lq3_2',
        type: 'multiple_choice',
        prompt: 'Which new gate should passengers proceed to?',
        options: [
          'Gate B-12',
          'Gate C-25',
          'Gate C-27',
          'Gate D-14'
        ],
        correctAnswer: 2,
        whyExplanation: 'The announcement states: "...our boarding gate has been relocated from Gate B-12 to Gate C-27."'
      },
      {
        id: 'lq3_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the missing adjective: "___ refreshments and water bottles are available at the service desk."',
        correctAnswer: 'Complimentary',
        whyExplanation: 'The word "complimentary" means free of charge.',
        grammarFocus: 'Spelling and vocabulary in formal announcements'
      }
    ]
  },
  {
    id: 'list_4_academic_lecture',
    title: 'University Lecture: Renewable Energy Grids',
    category: 'academic',
    level: 'Intermediate',
    durationMinutes: 5,
    context: 'A professor explains the intermittent nature of solar and wind power and the necessity of battery storage systems in modern electrical grids.',
    audioScript: 'In today\'s seminar, we must examine the inherent intermittency of renewable energy sources. Unlike traditional hydroelectric or fossil fuel facilities that generate base-load power on demand, solar arrays and wind turbines depend entirely on ambient atmospheric conditions. When sunlight dims or wind speeds plummet, grid frequency fluctuates unless sufficient battery storage architectures are integrated. Consequently, municipal grid operators are investing heavily in utility-scale lithium-iron-phosphate batteries. These systems absorb surplus power during peak generation periods and discharge it back into the municipal network during evening hours.',
    dialogue: [
      { speaker: 'Prof. Vance', avatar: '🎓', text: 'In today\'s seminar, we must examine the inherent intermittency of renewable energy sources.' },
      { speaker: 'Prof. Vance', avatar: '🎓', text: 'Unlike traditional hydroelectric or fossil fuel facilities that generate base-load power on demand, solar arrays and wind turbines depend entirely on ambient atmospheric conditions.' },
      { speaker: 'Prof. Vance', avatar: '🎓', text: 'When sunlight dims or wind speeds plummet, grid frequency fluctuates unless sufficient battery storage architectures are integrated.' },
      { speaker: 'Prof. Vance', avatar: '🎓', text: 'Consequently, municipal grid operators are investing heavily in utility-scale lithium-iron-phosphate batteries. These systems absorb surplus power during peak generation periods and discharge it back into the municipal network during evening hours.' }
    ],
    vocabulary: [
      { word: 'intermittency', definition: 'The state of stopping and starting at irregular intervals.', example: 'Solar intermittency requires advanced grid management.' },
      { word: 'ambient', definition: 'Relating to the immediate surroundings.', example: 'Ambient temperature affects battery efficiency.' },
      { word: 'surplus', definition: 'An amount of something left over when requirements have been met.', example: 'The solar panels generated surplus electricity at noon.' }
    ],
    questions: [
      {
        id: 'lq4_1',
        type: 'multiple_choice',
        prompt: 'Why are solar and wind power classified as intermittent?',
        options: [
          'Because they are more expensive to construct than hydroelectric dams',
          'Because their output depends on changing weather and ambient conditions',
          'Because they cannot be connected to urban power grids',
          'Because battery storage degrades too rapidly'
        ],
        correctAnswer: 1,
        whyExplanation: 'The professor clarifies: "...solar arrays and wind turbines depend entirely on ambient atmospheric conditions."'
      },
      {
        id: 'lq4_2',
        type: 'multiple_choice',
        prompt: 'What role do utility-scale battery systems perform during peak generation hours?',
        options: [
          'They shut down excess wind turbines',
          'They absorb and store surplus electricity for later release',
          'They replace traditional electrical transformers',
          'They convert alternating current directly into hydrogen'
        ],
        correctAnswer: 1,
        whyExplanation: 'The lecture states: "These systems absorb surplus power during peak generation periods and discharge it back into the municipal network during evening hours."'
      },
      {
        id: 'lq4_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the missing verb: "These systems absorb surplus power and ___ it back into the municipal network."',
        correctAnswer: 'discharge',
        whyExplanation: 'The professor uses the technical verb "discharge".',
        grammarFocus: 'Parallel verb structures in technical descriptions'
      }
    ]
  },
  {
    id: 'list_5_job_interview',
    title: 'Job Interview: Behavioral Leadership Question',
    category: 'interviews',
    level: 'Advanced',
    durationMinutes: 6,
    context: 'A senior operations candidate describes how they resolved a cross-functional bottleneck using agile methodologies and transparent communication.',
    audioScript: 'Thank you for asking that question. In my previous role as Operations Director at Global Logistics Inc., we encountered a critical conflict between our software engineering and warehouse dispatch teams. Dispatch claimed that the inventory software lacked barcode responsiveness, which was causing significant shipment delays. Rather than assigning blame, I initiated a collaborative cross-functional workshop where engineers shadowed warehouse workers on the packing floor for two days. This hands-on empathy enabled our developers to pinpoint the latency bottleneck within forty-eight hours. Within two sprints, system latency decreased by sixty-five percent, and on-time shipment fulfillment rebounded to ninety-nine percent.',
    dialogue: [
      { speaker: 'Interviewer', avatar: '👔', text: 'Can you describe a time when you had to resolve a serious operational disagreement between two departments?' },
      { speaker: 'Candidate (Elena)', avatar: '💼', text: 'In my previous role as Operations Director at Global Logistics Inc., we encountered a critical conflict between our software engineering and warehouse dispatch teams.' },
      { speaker: 'Candidate (Elena)', avatar: '💼', text: 'Rather than assigning blame, I initiated a collaborative cross-functional workshop where engineers shadowed warehouse workers on the packing floor for two days.' },
      { speaker: 'Candidate (Elena)', avatar: '💼', text: 'This hands-on empathy enabled our developers to pinpoint the latency bottleneck within forty-eight hours. Within two sprints, system latency decreased by sixty-five percent.' }
    ],
    vocabulary: [
      { word: 'bottleneck', definition: 'A point of congestion or blockage that slows down a process.', example: 'The slow server response was the main operational bottleneck.' },
      { word: 'latency', definition: 'The delay before a transfer of data begins following an instruction.', example: 'Reducing system latency improved scanner performance.' },
      { word: 'rebounded', definition: 'Recovered or bounced back to a previous high level.', example: 'Customer satisfaction scores rebounded after the software patch.' }
    ],
    questions: [
      {
        id: 'lq5_1',
        type: 'multiple_choice',
        prompt: 'What innovative strategy did the candidate use to help developers diagnose the problem?',
        options: [
          'Hired an external consulting firm to audit the warehouse',
          'Had software engineers shadow warehouse workers on the packing floor',
          'Purchased entirely new barcode scanning hardware immediately',
          'Transferred the warehouse team to a new regional facility'
        ],
        correctAnswer: 1,
        whyExplanation: 'The candidate says: "...I initiated a collaborative cross-functional workshop where engineers shadowed warehouse workers on the packing floor for two days."'
      },
      {
        id: 'lq5_2',
        type: 'multiple_choice',
        prompt: 'By what percentage did system latency decrease after the software update?',
        options: [
          '48%',
          '50%',
          '65%',
          '99%'
        ],
        correctAnswer: 2,
        whyExplanation: 'Elena confirms: "Within two sprints, system latency decreased by sixty-five percent..."'
      },
      {
        id: 'lq5_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the missing noun: "This hands-on empathy enabled our developers to pinpoint the latency ___."',
        correctAnswer: 'bottleneck',
        whyExplanation: 'The candidate describes the technical delay as a "bottleneck".',
        grammarFocus: 'Compound nouns in business contexts'
      }
    ]
  },
  {
    id: 'list_6_customer_service',
    title: 'Customer Service: Defective Shipment Resolution',
    category: 'everyday',
    level: 'Intermediate',
    durationMinutes: 4,
    context: 'A client calls a tech hardware supplier to report damaged goods received in a damaged shipping container.',
    audioScript: 'Thank you for calling Apex Hardware Solutions. My name is Julian. I understand that your order of twenty high-precision monitors arrived with damaged outer packaging and two cracked screens. Please accept our sincere apologies for this inconvenience. I have already generated a priority return label, which has been sent to your registered email address. Additionally, I am expediting replacement units via overnight express courier at zero additional cost. You should receive tracking details by 3:00 PM today. Is there anything else I can assist you with regarding your account?',
    dialogue: [
      { speaker: 'Julian (Support Rep)', avatar: '🎧', text: 'Thank you for calling Apex Hardware Solutions. My name is Julian.' },
      { speaker: 'Julian (Support Rep)', avatar: '🎧', text: 'I understand that your order of twenty high-precision monitors arrived with damaged outer packaging and two cracked screens.' },
      { speaker: 'Julian (Support Rep)', avatar: '🎧', text: 'I have already generated a priority return label, which has been sent to your registered email address.' },
      { speaker: 'Julian (Support Rep)', avatar: '🎧', text: 'Additionally, I am expediting replacement units via overnight express courier at zero additional cost. You should receive tracking details by 3:00 PM today.' }
    ],
    vocabulary: [
      { word: 'expediting', definition: 'Making an action or process happen sooner or be done more quickly.', example: 'We are expediting your replacement order.' },
      { word: 'inconvenience', definition: 'Trouble or difficulty caused to one\'s personal comfort or ease.', example: 'We apologize for any inconvenience caused by the shipping delay.' }
    ],
    questions: [
      {
        id: 'lq6_1',
        type: 'multiple_choice',
        prompt: 'What solution does Julian provide for the damaged monitors?',
        options: [
          'Offers a 15% discount code for future purchases',
          'Generates a return label and expedites replacement units via overnight courier',
          'Refers the customer to the freight courier\'s insurance claims department',
          'Asks the customer to repair the screens locally'
        ],
        correctAnswer: 1,
        whyExplanation: 'Julian states: "I have already generated a priority return label... Additionally, I am expediting replacement units via overnight express courier at zero additional cost."'
      },
      {
        id: 'lq6_2',
        type: 'multiple_choice',
        prompt: 'By what time will the customer receive the replacement tracking information?',
        options: [
          'By 12:00 PM noon',
          'By 3:00 PM today',
          'Tomorrow morning at 9:00 AM',
          'Within 48 business hours'
        ],
        correctAnswer: 1,
        whyExplanation: 'The agent states: "You should receive tracking details by 3:00 PM today."'
      },
      {
        id: 'lq6_3',
        type: 'dictation',
        prompt: 'Dictation test: Type the missing present participle: "Additionally, I am ___ replacement units via overnight express courier."',
        correctAnswer: 'expediting',
        whyExplanation: 'The verb is "expediting" (spelled with a single \'d\').',
        grammarFocus: 'Present continuous form of verbs ending in -e'
      }
    ]
  }
];

// ==========================================
// 2. READING COMPREHENSION PRACTICE TESTS (6 Comprehensive Passages)
// ==========================================
export const READING_TESTS: ReadingTest[] = [
  {
    id: 'read_1_remote_work',
    title: 'The Evolution of Asynchronous Remote Work',
    genre: 'Article',
    level: 'Beginner',
    wordCount: 285,
    estimatedMinutes: 4,
    passage: `Over the past decade, the modern workplace has undergone a dramatic transformation. Traditional corporate structures required employees to be physically present at their desks from nine in the morning until five in the evening. Today, however, many multinational enterprises have adopted asynchronous work models that prioritize output over physical presence.

In an asynchronous work environment, team members collaborate without the expectation of immediate, real-time responses. Rather than relying on constant back-to-back video conferences, professionals utilize shared documentation tools, project management boards, and recorded screen demonstrations. This methodology accommodates employees located across disparate global time zones, allowing each individual to operate during their peak biological productivity hours.

Nevertheless, asynchronous communication requires strict self-discipline and exceptional written clarity. Without vocal tone and body language, poorly structured messages can lead to misunderstandings or duplicated effort. To mitigate these risks, progressive companies establish explicit communication charters that define response windows and specify which urgent matters warrant immediate telephone calls. When executed thoughtfully, asynchronous work fosters autonomy, reduces occupational burnout, and enables companies to hire top-tier talent irrespective of geographic boundaries.`,
    glossary: [
      { term: 'Asynchronous', meaning: 'Not occurring at the same time; communication where replies are delayed rather than instant.' },
      { term: 'Disparate', meaning: 'Fundamentally distinct or different in kind.' },
      { term: 'Mitigate', meaning: 'To make something less severe, dangerous, or painful.' }
    ],
    questions: [
      {
        id: 'rq1_1',
        prompt: 'What is the primary benefit of the asynchronous work model described in the passage?',
        questionType: 'main_idea',
        options: [
          'It forces all team members to work identical shifts regardless of location.',
          'It prioritizes measurable output and allows employees to work during their peak productivity hours.',
          'It completely replaces the need for any written communication or project charters.',
          'It guarantees that video meetings occur every morning at 9:00 AM.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 2 highlights that asynchronous models allow team members to operate during their peak biological productivity hours without expecting immediate real-time responses.',
        lineReference: 'Paragraph 2'
      },
      {
        id: 'rq1_2',
        prompt: 'According to paragraph 3, what potential risk is associated with asynchronous communication?',
        questionType: 'detail',
        options: [
          'Employees are required to travel internationally every quarter.',
          'Poorly structured written messages can cause misunderstandings due to the absence of vocal tone and body language.',
          'Project management software is too expensive for multinational corporations.',
          'Companies are unable to recruit talent outside of their headquarters city.'
        ],
        correctIndex: 1,
        whyExplanation: 'The text notes: "Without vocal tone and body language, poorly structured messages can lead to misunderstandings or duplicated effort."',
        lineReference: 'Paragraph 3, Line 2'
      },
      {
        id: 'rq1_3',
        prompt: 'As used in paragraph 3, what is the closest meaning of the word "mitigate"?',
        questionType: 'vocabulary_in_context',
        options: [
          'To increase or amplify',
          'To reduce or alleviate',
          'To ignore or overlook',
          'To investigate legally'
        ],
        correctIndex: 1,
        whyExplanation: '"Mitigate" means to lessen the severity or risk of something negative.',
        lineReference: 'Paragraph 3, Line 3'
      },
      {
        id: 'rq1_4',
        prompt: 'What strategy do progressive companies implement to prevent communication ambiguity?',
        questionType: 'inference',
        options: [
          'They ban all written documentation in favor of daily phone calls.',
          'They create explicit communication charters specifying response expectations.',
          'They eliminate project management boards entirely.',
          'They hire third-party translators for every message.'
        ],
        correctIndex: 1,
        whyExplanation: 'The text states: "To mitigate these risks, progressive companies establish explicit communication charters that define response windows..."',
        lineReference: 'Paragraph 3, Line 4'
      }
    ]
  },
  {
    id: 'read_2_sleep_science',
    title: 'The Neuroscience of Sleep and Memory Consolidation',
    genre: 'Academic Essay',
    level: 'Intermediate',
    wordCount: 340,
    estimatedMinutes: 5,
    passage: `For centuries, human sleep was mistakenly viewed as a passive, dormant state during which the brain essentially shut down to recuperate. Contemporary neuroscience has thoroughly dismantled this misconception, revealing that nocturnal sleep is an intensely active biological process vital for cognitive synthesis and long-term memory consolidation.

During non-rapid eye movement (NREM) deep sleep, slow electrical brain oscillations sweep across the cerebral cortex. These delta waves facilitate the transfer of newly encoded factual memories from the hippocampus—a temporary, vulnerable storage structure—to the neocortex, where they are permanently integrated into pre-existing neural schemas. This architectural relocation shields critical information against subsequent forgetting and creates structural resilience.

Subsequently, during rapid eye movement (REM) sleep, the brain engages in associative pattern recognition. REM neurochemistry allows seemingly unrelated concepts to connect, catalyzing creative problem-solving and emotional recalibration. Individuals who sacrifice sleep to cram for examinations invariably compromise both memory retrieval and higher-order analytical reasoning.

Furthermore, sleep deprivation impedes the glymphatic system, a specialized glial cleansing network that flushes metabolic cellular waste from brain tissue during slumber. Chronic sleep deficits lead to the accumulation of toxic proteins, significantly accelerating cognitive decline. Thus, far from being a luxury or an unproductive indulgence, consistent restorative sleep represents the fundamental bedrock of intellectual mastery and longevity.`,
    glossary: [
      { term: 'Consolidation', meaning: 'The biological process of strengthening and stabilizing newly formed memories.' },
      { term: 'Hippocampus', meaning: 'The brain region responsible for short-term memory encoding.' },
      { term: 'Glymphatic System', meaning: 'The waste clearance system of the central nervous system.' }
    ],
    questions: [
      {
        id: 'rq2_1',
        prompt: 'What critical memory event occurs specifically during NREM deep sleep?',
        questionType: 'detail',
        options: [
          'The brain enters a dormant state where all electrical activity halts.',
          'Factual memories are transferred from the temporary hippocampus to the permanent neocortex.',
          'The brain produces high amounts of toxic proteins.',
          'Unrelated emotional concepts are erased completely.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 2 explains that slow delta waves transfer newly encoded memories from the hippocampus to the neocortex for permanent integration.',
        lineReference: 'Paragraph 2, Line 2'
      },
      {
        id: 'rq2_2',
        prompt: 'How does REM sleep specifically assist creative thinking?',
        questionType: 'detail',
        options: [
          'By erasing all short-term memories from the previous 24 hours',
          'By connecting seemingly unrelated concepts through associative pattern recognition',
          'By eliminating the need for delta wave oscillations',
          'By lowering physical body temperature to absolute zero'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 3 notes: "REM neurochemistry allows seemingly unrelated concepts to connect, catalyzing creative problem-solving..."',
        lineReference: 'Paragraph 3, Line 2'
      },
      {
        id: 'rq2_3',
        prompt: 'What is the primary function of the glymphatic system described in paragraph 4?',
        questionType: 'detail',
        options: [
          'To generate rapid eye movements during dreams',
          'To flush metabolic waste products and toxic proteins from brain tissue during sleep',
          'To accelerate heart rate and muscle contraction',
          'To replace the neocortex with temporary memory cells'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 4 states that the glymphatic system is "a specialized glial cleansing network that flushes metabolic cellular waste from brain tissue during slumber."',
        lineReference: 'Paragraph 4, Line 1'
      },
      {
        id: 'rq2_4',
        prompt: 'What is the overarching tone and purpose of the author in this essay?',
        questionType: 'tone_purpose',
        options: [
          'Humorous and satirical, making light of sleep deprivation',
          'Informative and authoritative, emphasizing the non-negotiable biological necessity of sleep',
          'Critical of neuroscientists and medical researchers',
          'Persuasive in favor of reducing bedtime hours to boost daily work productivity'
        ],
        correctIndex: 1,
        whyExplanation: 'The author uses scientific evidence and formal language to demonstrate that sleep is essential for memory, cognitive function, and health.',
        lineReference: 'Full Passage'
      }
    ]
  },
  {
    id: 'read_3_financial_literacy',
    title: 'The Principles of Compound Interest and Personal Wealth',
    genre: 'Informational Guide',
    level: 'Beginner',
    wordCount: 310,
    estimatedMinutes: 4,
    passage: `Personal financial security is rarely the result of sudden windfalls or lucky speculative investments. Instead, enduring wealth is almost universally forged through the quiet, disciplined application of compound interest over extended time horizons. Albert Einstein reputedly characterized compound interest as the eighth wonder of the world, noting that those who understand it earn it, while those who do not pay it.

Simple interest calculates returns exclusively on the original principal balance. In contrast, compound interest generates earnings on both the initial capital and the accumulated interest from prior periods. Over a single year, the difference between simple and compound growth appears negligible. Over two or three decades, however, exponential multiplication produces staggering divergences in portfolio value.

Consider two investors, Maya and Liam. Maya begins investing $300 monthly at age twenty-five and ceases contributions at age thirty-five, having deposited a total of $36,000 over ten years. Liam delays his savings until age thirty-five, but contributes $300 every month continuously until age sixty-five, depositing a total of $108,000. Assuming identical seven-percent annual market returns, Maya's final portfolio will exceed Liam's balance upon retirement, despite contributing one-third of the capital.

The decisive variable in compound wealth generation is not capital volume, but time. Procrastination imposes an exponential penalty that even aggressive later contributions cannot readily overcome. By establishing automated, diversified investments early in adulthood, individuals harness time as their most potent financial ally.`,
    glossary: [
      { term: 'Principal', meaning: 'The original sum of money lent or invested.' },
      { term: 'Compound Interest', meaning: 'Interest calculated on both initial principal and accumulated prior interest.' },
      { term: 'Exponential', meaning: 'Growing at an increasingly rapid rate over time.' }
    ],
    questions: [
      {
        id: 'rq3_1',
        prompt: 'What is the fundamental difference between simple interest and compound interest?',
        questionType: 'detail',
        options: [
          'Simple interest applies only to real estate, while compound interest applies only to stocks.',
          'Compound interest earns returns on both initial principal and accumulated prior earnings, whereas simple interest calculates returns only on the original principal.',
          'Simple interest requires automated monthly contributions, while compound interest does not.',
          'Simple interest is subject to higher tax penalties.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 2 explains: "Simple interest calculates returns exclusively on the original principal... In contrast, compound interest generates earnings on both the initial capital and the accumulated interest..."',
        lineReference: 'Paragraph 2'
      },
      {
        id: 'rq3_2',
        prompt: 'Why did Maya accumulate a larger retirement portfolio than Liam?',
        questionType: 'inference',
        options: [
          'She deposited three times more money than Liam.',
          'Her investments achieved a much higher annual interest rate.',
          'She began investing ten years earlier, allowing her earnings to compound over a longer duration.',
          'She invested exclusively in real estate assets.'
        ],
        correctIndex: 2,
        whyExplanation: 'Maya invested between ages 25 and 35, giving her funds 30 additional years to compound exponentially before retirement.',
        lineReference: 'Paragraph 3'
      },
      {
        id: 'rq3_3',
        prompt: 'According to the final paragraph, what is the single most decisive variable in compound growth?',
        questionType: 'detail',
        options: [
          'Capital volume',
          'Time',
          'Government subsidies',
          'Speculative day trading'
        ],
        correctIndex: 1,
        whyExplanation: 'The text states explicitly: "The decisive variable in compound wealth generation is not capital volume, but time."',
        lineReference: 'Paragraph 4, Line 1'
      }
    ]
  },
  {
    id: 'read_4_sustainable_packaging',
    title: 'Corporate Memo: Transition to Circular Packaging',
    genre: 'Business Memo',
    level: 'Intermediate',
    wordCount: 320,
    estimatedMinutes: 5,
    passage: `MEMORANDUM
TO: Global Procurement and Supply Chain Directors
FROM: Executive Sustainability Committee
DATE: March 15, 2026
SUBJECT: Phase-Out of Single-Use Plastics and Implementation of Circular Materials

In accordance with our commitment to achieve net-zero carbon emissions by 2030, Apex Consumer Goods will initiate a comprehensive overhaul of our product packaging pipeline starting next quarter. Effective June 1st, all secondary and tertiary packaging containing non-biodegradable petrochemical plastics will be phased out across European and North American distribution hubs.

In their place, supply chain partners must integrate Forest Stewardship Council (FSC)-certified recycled corrugated cardboard and mycelium-based protective inserts for delicate consumer electronics. These biodegradable substitutes boast comparable tensile strength and drop-test durability while reducing manufacturing water consumption by forty percent.

We recognize that transitioning supplier contracts requires substantial logistics realignment. Therefore, regional procurement managers are authorized to access our $12 million Vendor Sustainability Transition Fund. This fund will subsidize up to twenty-five percent of tooling retrofits for approved Tier-1 packaging suppliers during the initial six-month transition period.

Compliance audits will commence on September 1st. Facilities failing to meet the eighty-five percent circularity threshold by year-end will face vendor penalty clauses or contract re-tendering. We appreciate your rigorous leadership as we pioneer sustainable enterprise practices.`,
    glossary: [
      { term: 'Circular Materials', meaning: 'Materials designed to be reused, recycled, or biodegraded in closed loops.' },
      { term: 'Tensile Strength', meaning: 'The resistance of a material to breaking under tension.' },
      { term: 'Subsidize', meaning: 'To support financially through public or corporate grant assistance.' }
    ],
    questions: [
      {
        id: 'rq4_1',
        prompt: 'What is the main mandate announced in this corporate memo?',
        questionType: 'main_idea',
        options: [
          'A reduction in employee travel allowances for international conferences',
          'The mandatory phase-out of single-use petrochemical plastics in favor of circular biodegradable packaging',
          'The complete closure of North American distribution facilities',
          'An increase in product prices due to inflation'
        ],
        correctIndex: 1,
        whyExplanation: 'The memo mandates the phase-out of non-biodegradable plastics and adoption of circular, FSC-certified and mycelium materials.',
        lineReference: 'Paragraph 1'
      },
      {
        id: 'rq4_2',
        prompt: 'How will the company assist Tier-1 suppliers with the financial cost of retrofitting tooling?',
        questionType: 'detail',
        options: [
          'By providing full tax exemptions through international courts',
          'By offering up to 25% subsidies from a $12 million Vendor Sustainability Transition Fund',
          'By extending contract deadlines by five years',
          'By eliminating all compliance audits indefinitely'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 3 explains that the $12 million fund will subsidize up to 25% of tooling retrofits for approved suppliers.',
        lineReference: 'Paragraph 3'
      },
      {
        id: 'rq4_3',
        prompt: 'What consequence will suppliers face if they fail to meet the 85% circularity threshold by year-end?',
        questionType: 'detail',
        options: [
          'Immediate criminal prosecution',
          'Vendor penalty clauses or contract re-tendering',
          'Mandatory relocation to Europe',
          'Cancellation of electricity service'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 4 states: "Facilities failing to meet the eighty-five percent circularity threshold by year-end will face vendor penalty clauses or contract re-tendering."',
        lineReference: 'Paragraph 4'
      }
    ]
  },
  {
    id: 'read_5_artificial_intelligence',
    title: 'The Ethics of Algorithmic Transparency in Healthcare',
    genre: 'Academic Essay',
    level: 'Advanced',
    wordCount: 360,
    estimatedMinutes: 6,
    passage: `The integration of deep learning algorithms into diagnostic medicine heralds an era of unprecedented clinical precision. Machine learning models trained on vast repositories of radiographic imagery can detect malignant melanoma or pulmonary nodules with accuracy rates rivaling seasoned radiologists. However, the rapid clinical deployment of these tools has ignited a contentious bioethical debate concerning the "black box" problem and algorithmic transparency.

Many sophisticated neural networks operate through opaque multilayered architectures where the internal computational pathways between clinical input and diagnostic output cannot be easily audited or understood by human clinicians. In oncology or cardiology, where treatment decisions involve cytotoxic chemotherapy or invasive surgery, blind reliance on uninterpretable statistical predictions threatens the bedrock bioethical principle of informed consent. If an attending physician cannot elucidate why an algorithm flagged a patient as high-risk, neither physician nor patient can make genuinely informed choices.

Moreover, algorithms trained on historically biased medical records frequently perpetuate or exacerbate systemic healthcare disparities. For instance, diagnostic algorithms trained predominantly on dermatological datasets of fair-skinned individuals exhibit markedly elevated error rates when evaluating pigmented lesions on darker skin tones.

To ensure ethical implementation, regulatory authorities must mandate explainable artificial intelligence (XAI) standards for medical software. Clinicians must not treat machine predictions as infallible oracles, but rather as auxiliary diagnostic aids subjected to rigorous human oversight and continuous demographic validation.`,
    glossary: [
      { term: 'Black Box Problem', meaning: 'In AI, where an algorithm produces predictions without revealing its internal mathematical reasoning.' },
      { term: 'Opaque', meaning: 'Not transparent or easily understood.' },
      { term: 'Disparities', meaning: 'Significant inequalities or differences.' }
    ],
    questions: [
      {
        id: 'rq5_1',
        prompt: 'What constitutes the "black box" problem in diagnostic artificial intelligence?',
        questionType: 'detail',
        options: [
          'Medical computers overheat when running image recognition software.',
          'The internal reasoning and mathematical pathways of deep neural networks cannot be easily audited or understood by human physicians.',
          'Hospitals cannot afford cloud storage servers.',
          'Patients refuse to have their x-rays stored digitally.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 2 explains that neural networks operate through opaque architectures where the pathways between input and output cannot be interpreted by clinicians.',
        lineReference: 'Paragraph 2'
      },
      {
        id: 'rq5_2',
        prompt: 'How does dataset bias affect dermatological diagnostic algorithms according to paragraph 3?',
        questionType: 'detail',
        options: [
          'It makes the software run twice as fast.',
          'It causes elevated error rates when evaluating pigmented lesions on darker skin tones because the training data lacked diversity.',
          'It forces doctors to perform manual surgery on every patient.',
          'It eliminates all melanoma diagnoses worldwide.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 3 notes that algorithms trained mostly on fair-skinned individuals have higher error rates on darker skin tones.',
        lineReference: 'Paragraph 3'
      },
      {
        id: 'rq5_3',
        prompt: 'What solution does the author propose in the conclusion?',
        questionType: 'main_idea',
        options: [
          'Ban all artificial intelligence from medical clinics permanently.',
          'Mandate explainable AI (XAI) standards and require human clinical oversight and demographic validation.',
          'Allow algorithms to make surgical decisions without physician review.',
          'Discontinue training software on medical images.'
        ],
        correctIndex: 1,
        whyExplanation: 'The final paragraph urges regulatory authorities to mandate explainable AI (XAI) standards and treat AI as auxiliary aids with human oversight.',
        lineReference: 'Paragraph 4'
      }
    ]
  },
  {
    id: 'read_6_storytelling',
    title: 'The Lighthouse Keeper\'s Final Logbook',
    genre: 'Narrative',
    level: 'Intermediate',
    wordCount: 315,
    estimatedMinutes: 4,
    passage: `For thirty-four winters, Arthur had ascended the spiraling cast-iron staircase of Cape Sorrow Lighthouse. At seventy-two, his knees protested each of the one hundred and eighty-six granite steps, but his rhythm remained steady. Every evening as dusk bruised the North Atlantic horizon into shades of violet and slate, Arthur illuminated the massive biconvex Fresnel lens, sending a beam of pure amber cutting through thirty nautical miles of gale and spray.

Tonight, however, the silence inside the lantern room was different. Down in the harbor, automated solar beacons hummed atop newly anchored steel pylons. Next week, the Coast Guard would decommission the century-old kerosene prism in favor of digital satellite telemetry. Arthur understood the inevitability of progress; satellite guidance did not suffer from sea-blindness or fatigue, nor did it require forty gallons of fuel hoisted up iron rungs in blinding blizzards.

Still, as he wiped condensation from the brass casing with his oilcloth, he thought of the countless vessels that had steered clear of the submerged reefs solely because a human hand had trimmed the wick and scraped the frost. In his leather logbook, beside the barometric pressure and wind velocity entries, Arthur wrote his final notation: "Wick trimmed. Lens polished. Horizon clear. Handing the light over to the stars." He closed the book, sat by the brass compass, and watched the amber beam sweep across the surging swells one last time.`,
    glossary: [
      { term: 'Fresnel Lens', meaning: 'A specialized optical lens that concentrates light into a powerful, long-range beam.' },
      { term: 'Decommission', meaning: 'To officially take something out of service or use.' },
      { term: 'Telemetry', meaning: 'The automatic transmission and measurement of data from remote sources.' }
    ],
    questions: [
      {
        id: 'rq6_1',
        prompt: 'Why is Arthur preparing his final logbook entry?',
        questionType: 'detail',
        options: [
          'He has been fired for failing to trim the lighthouse lamp.',
          'The historical lighthouse is being decommissioned in favor of modern automated satellite telemetry.',
          'The lighthouse was destroyed by a severe gale.',
          'He is relocating to a lighthouse in the Pacific Ocean.'
        ],
        correctIndex: 1,
        whyExplanation: 'Paragraph 2 explains that automated beacons and digital satellite telemetry are replacing the century-old manned lighthouse.',
        lineReference: 'Paragraph 2'
      },
      {
        id: 'rq6_2',
        prompt: 'What attitude does Arthur display toward modern technological progress?',
        questionType: 'inference',
        options: [
          'Bitter hatred and violent defiance',
          'Thoughtful acceptance, acknowledging its safety advantages while reflecting on his decades of service with nostalgic dignity',
          'Complete indifference and eagerness to abandon his duties',
          'Confusion and inability to understand modern tools'
        ],
        correctIndex: 1,
        whyExplanation: 'Arthur acknowledges that satellite guidance does not suffer from fatigue in blizzards, yet reflects fondly on the vessels he saved.',
        lineReference: 'Paragraphs 2 & 3'
      },
      {
        id: 'rq6_3',
        prompt: 'What is the emotional effect of Arthur\'s final journal entry: "Handing the light over to the stars"?',
        questionType: 'tone_purpose',
        options: [
          'It expresses confusion about navigation astronomy.',
          'It provides a poetic and dignified closure to thirty-four years of solitary maritime duty.',
          'It serves as a legal notice to the Coast Guard.',
          'It indicates that Arthur plans to build an astronomical telescope.'
        ],
        correctIndex: 1,
        whyExplanation: 'The poetic phrasing creates a poignant, respectful farewell to his career as a lighthouse keeper.',
        lineReference: 'Paragraph 3'
      }
    ]
  }
];

// ==========================================
// 3. WRITING PRACTICE TESTS (6 Comprehensive Writing Tasks)
// ==========================================
export const WRITING_TESTS: WritingTest[] = [
  {
    id: 'write_1_formal_email_extension',
    title: 'Workplace Writing: Requesting a Project Deadline Extension',
    taskType: 'formal_email',
    level: 'Beginner',
    estimatedMinutes: 8,
    prompt: 'You are leading the design phase of a website redesign for an external client. Due to unexpected vendor delays, you need to request a 5-day extension from your client, Ms. Katherine Vance.',
    instructions: [
      'Write a formal, polite professional email of 60 to 120 words.',
      'State the current deadline and propose the new target submission date.',
      'Explain the objective cause of the delay without making excuses.',
      'Highlight the proactive quality checks your team is conducting during this extra time.',
      'End with a courteous call-to-action inviting their feedback.'
    ],
    starterTemplate: 'Dear Ms. Vance,\n\nI am writing to update you on the progress of our website redesign project...\n\nSincerely,\n[Your Name]',
    targetGrammarPoints: [
      'Polite modals (would, could, appreciate)',
      'Present continuous for ongoing actions (we are finalizing, testing)',
      'Subordinating conjunctions (although, because, in order to)'
    ],
    minWords: 50,
    maxWords: 150,
    keyConnectorsToUse: ['However', 'In order to', 'Furthermore', 'Therefore'],
    sampleModelAnswer: `Dear Ms. Vance,

I am writing to provide an update regarding our website redesign project. Our creative team has completed the user interface drafts; however, due to an unexpected delay in our third-party payment gateway integration, we would like to request a brief five-day extension on the final delivery.

In order to ensure flawless data security and cross-browser responsiveness, our engineering team is conducting comprehensive regression testing. We propose delivering the fully verified build on Wednesday, November 12th.

We sincerely appreciate your understanding and flexibility. Please let us know if you have any questions or would like to review the interim staging prototype.

Best regards,
Alex Rivera
Project Lead`,
    rubric: [
      { label: 'Task Achievement & Completeness', description: 'Covers reason, new date, quality assurance, and polite closing.', maxScore: 25 },
      { label: 'Grammar & Mechanics', description: 'Accurate verb tenses, polite modal auxiliary usage, and correct punctuation.', maxScore: 25 },
      { label: 'Tone & Register', description: 'Professional, courteous, and non-defensive corporate voice.', maxScore: 25 },
      { label: 'Cohesion & Organization', description: 'Logical paragraph structure and clear transitional connectors.', maxScore: 25 }
    ]
  },
  {
    id: 'write_2_sentence_transformation',
    title: 'Grammar Mastery: Sentence Combination and Transformation',
    taskType: 'sentence_transformation',
    level: 'Beginner',
    estimatedMinutes: 6,
    prompt: 'Transform and combine simple sentences into elegant, compound-complex sentences using conjunctions, relative clauses, and passive voice.',
    instructions: [
      'Task 1: Combine using a subordinating conjunction: "The rain was heavy. The team completed the outdoor inspection on time."',
      'Task 2: Convert to passive voice: "The senior committee reviewed the financial audit report yesterday."',
      'Task 3: Combine with a relative clause: "Dr. Rachel Harris presented the keynote address. She is our chief data scientist."'
    ],
    starterTemplate: '1. Although...\n2. The financial audit report...\n3. Dr. Rachel Harris, who...',
    targetGrammarPoints: [
      'Subordinating conjunctions (Although, Even though, Despite)',
      'Passive voice transformation (was reviewed by)',
      'Non-essential appositive relative clauses (who is...)'
    ],
    minWords: 30,
    maxWords: 90,
    sampleModelAnswer: `1. Although the rain was heavy, the team completed the outdoor inspection on time.
2. The financial audit report was reviewed by the senior committee yesterday.
3. Dr. Rachel Harris, who is our chief data scientist, presented the keynote address.`,
    rubric: [
      { label: 'Subordinating Clause Precision', description: 'Correct punctuation with introductory dependent clause.', maxScore: 30 },
      { label: 'Passive Voice Accuracy', description: 'Correct past BE verb + past participle agreement.', maxScore: 35 },
      { label: 'Relative Clause Punctuation', description: 'Enclosing non-essential relative clauses in commas.', maxScore: 35 }
    ]
  },
  {
    id: 'write_3_opinion_paragraph',
    title: 'Argumentative Writing: Remote Work vs. In-Office Collaboration',
    taskType: 'opinion_paragraph',
    level: 'Intermediate',
    estimatedMinutes: 10,
    prompt: 'Write a persuasive paragraph (80-150 words) answering: "Should modern companies offer flexible remote working options to their staff?"',
    instructions: [
      'State your thesis clearly in the opening topic sentence.',
      'Provide two distinct supporting arguments (e.g. employee well-being, talent retention, operational overhead).',
      'Address a counterargument and refute it with logic.',
      'Conclude with an impactful summary sentence.'
    ],
    starterTemplate: 'In today’s competitive global economy, providing flexible remote work options is essential for companies that wish to retain top talent...',
    targetGrammarPoints: [
      'Conjunctive adverbs (Consequently, Furthermore, On the other hand)',
      'Comparative adjectives (more productive, higher, lower)',
      'Complex sentence architecture (If..., While...)'
    ],
    minWords: 70,
    maxWords: 180,
    keyConnectorsToUse: ['Furthermore', 'While some argue that', 'Consequently', 'Ultimately'],
    sampleModelAnswer: `In today’s competitive global economy, offering flexible remote work options is indispensable for companies that wish to retain elite talent and optimize productivity. First, remote work eliminates tedious daily commutes, allowing employees to achieve superior work-life balance and higher cognitive focus. Furthermore, geographic flexibility empowers organizations to recruit specialized professionals from across the globe without incurring relocation expenses. While skeptics argue that remote arrangements diminish team camaraderie, structured digital standups and asynchronous collaboration tools effectively preserve cohesion. Consequently, adopting hybrid flexibility creates a win-win paradigm where both employee well-being and corporate profitability thrive.`,
    rubric: [
      { label: 'Thesis & Argument Strength', description: 'Clear position backed by concrete reasoning.', maxScore: 25 },
      { label: 'Grammar & Complexity', description: 'Use of varied compound-complex sentences and accurate verb forms.', maxScore: 25 },
      { label: 'Vocabulary & Style', description: 'Academic and professional vocabulary choices.', maxScore: 25 },
      { label: 'Transitions & Counterargument', description: 'Smooth bridging phrases and counterargument refutation.', maxScore: 25 }
    ]
  },
  {
    id: 'write_4_complaint_resolution',
    title: 'Professional Email: Customer Complaint and Remediation',
    taskType: 'formal_email',
    level: 'Intermediate',
    estimatedMinutes: 8,
    prompt: 'A client, Mr. Arthur Morgan, sent an angry email because their software subscription was accidentally billed twice. Write an empathetic, professional email response resolving the issue.',
    instructions: [
      'Acknowledge the billing error promptly and apologize sincerely without shifting blame.',
      'State clearly that the duplicate charge has already been refunded ($149.00).',
      'Explain the automated fix applied to prevent recurrence.',
      'Offer a complimentary 1-month service credit as a gesture of goodwill.',
      'Provide your direct contact details.'
    ],
    starterTemplate: 'Dear Mr. Morgan,\n\nThank you for bringing this billing matter to our attention...\n\nWarm regards,\n[Your Name]',
    targetGrammarPoints: [
      'Present perfect tense (has been refunded, have applied)',
      'Polite diplomatic phrasing (Please accept our sincere apologies)',
      'Conditional clauses (If you notice, should you require)'
    ],
    minWords: 70,
    maxWords: 160,
    sampleModelAnswer: `Dear Mr. Morgan,

Thank you for bringing this billing discrepancy to our immediate attention. Please accept our sincere apologies for the frustration and inconvenience caused by the duplicate subscription charge on your account.

I have already processed a full refund of $149.00 to your original payment method, which should reflect in your banking statement within two to three business days. Additionally, our engineering team has resolved the synchronization glitch to ensure this error will not recur.

As a gesture of our appreciation for your patience and loyalty, we have applied a complimentary one-month service credit to your account. Please feel free to reach out to me directly at this email address should you have any further questions.

Warm regards,
Marcus Chen
Client Experience Manager`,
    rubric: [
      { label: 'Empathy & Professionalism', description: 'Sincere tone without corporate defensiveness.', maxScore: 25 },
      { label: 'Resolution Clarity', description: 'Clearly states refund, technical fix, and courtesy credit.', maxScore: 25 },
      { label: 'Grammar & Present Perfect Accuracy', description: 'Accurate verb tenses and polite modals.', maxScore: 25 },
      { label: 'Mechanics & Structure', description: 'Pristine punctuation, paragraphing, and salutations.', maxScore: 25 }
    ]
  },
  {
    id: 'write_5_data_summary',
    title: 'Analytical Writing: Summarizing Quarterly Sales Metrics',
    taskType: 'data_summary',
    level: 'Advanced',
    estimatedMinutes: 10,
    prompt: 'Summarize the following data in a concise executive report (80-140 words):\n- Q1 Revenue: $2.4M (up 15% YoY)\n- European Region: +28% growth (driven by cloud services)\n- Asia-Pacific Region: -4% dip (due to supply chain disruption)\n- Projected Q2 Target: $2.8M.',
    instructions: [
      'Provide an introductory summary statement of overall financial performance.',
      'Contrast the strong European expansion against the regional APAC decline.',
      'Cite specific percentages and metrics accurately.',
      'Conclude with the forward-looking Q2 outlook and growth drivers.'
    ],
    starterTemplate: 'During the first quarter of the fiscal year, global revenue reached $2.4 million, representing a 15% increase compared to the previous year...',
    targetGrammarPoints: [
      'Contrasting conjunctions (whereas, while, in contrast to)',
      'Prepositional phrases with numbers (rose by 15%, reached $2.4M, fell to)',
      'Participle clauses (driven by, representing a)'
    ],
    minWords: 60,
    maxWords: 150,
    sampleModelAnswer: `During the first quarter of the fiscal year, global revenue reached $2.4 million, representing a robust 15% year-over-year expansion. Performance varied significantly across regional markets: while European sales surged by 28%—primarily propelled by enterprise cloud adoption—the Asia-Pacific market experienced a modest 4% contraction due to temporary supply chain bottlenecks. 

Looking forward, the leadership team anticipates accelerated momentum in the second quarter, targeting $2.8 million in gross revenue. This optimistic projection is underpinned by expanding cloud subscriptions and resolved logistics channels across all major territories.`,
    rubric: [
      { label: 'Data Accuracy & Completeness', description: 'Accurately reports all figures, comparisons, and targets.', maxScore: 30 },
      { label: 'Syntactic Variety & Flow', description: 'Use of contrasting clauses and participial modifiers.', maxScore: 35 },
      { label: 'Executive Tone & Precision', description: 'Crisp, objective business analysis vocabulary.', maxScore: 35 }
    ]
  },
  {
    id: 'write_6_ai_education_essay',
    title: 'Argumentative Essay: Artificial Intelligence in Higher Education',
    taskType: 'argument_essay',
    level: 'Advanced',
    estimatedMinutes: 12,
    prompt: 'Write a short argumentative essay (100-180 words) debating whether universities should ban or embrace generative AI tools in academic curricula.',
    instructions: [
      'Introduce the debate and state a nuanced thesis.',
      'Explain how AI serves as an interactive cognitive tutor when regulated.',
      'Address the ethical risks of plagiarism and academic dishonesty.',
      'Propose ethical AI literacy frameworks as the path forward.'
    ],
    starterTemplate: 'The rapid emergence of generative artificial intelligence has presented higher education institutions with a profound pedagogical dilemma...',
    targetGrammarPoints: [
      'Correlative conjunctions (not only... but also, neither... nor)',
      'Subjunctive / Modal mood (institutions should mandate, it is vital that students learn)',
      'Sophisticated transitions (Consequently, On the contrary, Thus)'
    ],
    minWords: 90,
    maxWords: 200,
    sampleModelAnswer: `The rapid emergence of generative artificial intelligence has presented higher education with a profound pedagogical dilemma. While some administrators advocate for complete prohibition due to plagiarism concerns, outright bans are fundamentally short-sighted. Instead, universities must thoughtfully integrate AI tools into academic curricula.

When utilized responsibly, artificial intelligence functions not as a replacement for human intellect, but as an interactive cognitive scaffold. AI tutors can provide real-time programming feedback, simulate complex scientific scenarios, and refine multilingual students' grammatical precision. Nevertheless, academic integrity must remain paramount. Rather than punishing technological curiosity, institutions should mandate comprehensive AI literacy courses and redesign assessments to emphasize oral defense and critical thinking.

Ultimately, preparing students for the contemporary workforce requires cultivating ethical discernment alongside digital fluency. By embracing artificial intelligence with robust guardrails, universities empower scholars to become both innovative creators and critical thinkers.`,
    rubric: [
      { label: 'Nuanced Thesis & Argumentation', description: 'Avoids simplistic extremes; presents balanced, forward-looking insights.', maxScore: 25 },
      { label: 'Grammar Precision & Advanced Structures', description: 'Correlative conjunctions, subjunctive constructions, and flawless mechanics.', maxScore: 25 },
      { label: 'Lexical Sophistication', description: 'Rich academic vocabulary (pedagogical, prohibition, cognitive scaffold).', maxScore: 25 },
      { label: 'Structural Coherence', description: 'Flawless transitions between introduction, body, and conclusion.', maxScore: 25 }
    ]
  }
];

// ==========================================
// 4. SPEAKING PRACTICE & PRONUNCIATION TESTS (6 Comprehensive Speaking Tasks)
// ==========================================
export const SPEAKING_TESTS: SpeakingTest[] = [
  {
    id: 'speak_1_read_aloud_clarity',
    title: 'Pronunciation & Read-Aloud: Consonant Clusters and Intonation',
    taskType: 'read_aloud',
    level: 'Beginner',
    prepTimeSeconds: 10,
    speakingTimeSeconds: 25,
    targetSentence: 'Although the project encountered unexpected technical difficulties, the engineering team successfully delivered the final software update on schedule.',
    prompt: 'Read the following sentence aloud with clear pronunciation, steady pacing, and natural sentence stress on key content words.',
    pronunciationFocus: [
      'Clear "th" sound in "Although" / "the"',
      'Past tense -ed in "encountered" (/d/) and "delivered" (/d/)',
      'Word stress on "exPECted", "techNIcal", and "SUCcessfully"'
    ],
    grammarTarget: 'Introductory dependent clause with past tense active verbs',
    modelSpokenAudioText: 'Although the project encountered unexpected technical difficulties, the engineering team successfully delivered the final software update on schedule.',
    tips: [
      'Pause briefly after the comma ("...technical difficulties,")',
      'Raise pitch slightly on "difficulties" and drop pitch at the final period ("...on schedule.")',
      'Speak smoothly without rushing through the multi-syllable adverbs.'
    ]
  },
  {
    id: 'speak_2_describe_workplace_image',
    title: 'Describe a Scenario: Collaborative Tech Workshop',
    taskType: 'describe_situation',
    level: 'Beginner',
    prepTimeSeconds: 15,
    speakingTimeSeconds: 45,
    scenarioContext: 'You are presenting an observation of a collaborative design sprint where four software engineers are analyzing data charts on an interactive digital whiteboard.',
    prompt: 'Describe what is happening in this scenario using present continuous verbs, prepositions of location, and descriptive adjectives (Speak for 30 to 45 seconds).',
    imageOrGraphicDescription: 'Four professionals gathered around a large interactive whiteboard in a modern glass-walled conference room. One woman is pointing at a rising quarterly sales graph, while three colleagues are taking notes on laptops and exchanging ideas.',
    pronunciationFocus: [
      'Present continuous verb endings (-ing: pointing, discussing, analyzing)',
      'Preposition linking (in the room, on the screen, around the table)'
    ],
    grammarTarget: 'Present Continuous (is pointing, are discussing) + Prepositions of Place',
    modelSpokenAudioText: 'In this conference room, four professionals are collaborating on a product strategy. A woman on the left is pointing at a rising sales graph on the digital whiteboard, while her colleagues are actively taking notes on their laptops and discussing the quarterly results. The atmosphere appears focused, professional, and productive.',
    tips: [
      'Start with the overall setting (where and who).',
      'Describe specific actions using "is/are + verb-ing".',
      'Mention locations using prepositions (on the left, in the center, around the table).'
    ]
  },
  {
    id: 'speak_3_grammar_transformation_speech',
    title: 'Spoken Grammar Transformation: Direct to Indirect Speech',
    taskType: 'grammar_transformation',
    level: 'Intermediate',
    prepTimeSeconds: 10,
    speakingTimeSeconds: 20,
    targetSentence: 'Direct: The client asked, "Can you deliver the revised contract by Friday afternoon?"',
    prompt: 'Transform the direct question into indirect reported speech aloud into your microphone.',
    grammarTarget: 'Indirect Questions (if/whether + subject + could + base verb)',
    pronunciationFocus: [
      'Backshifting "can" to "could"',
      'Statement word order (no question inversion in reported clause)',
      'Intonation falls at the end of reported statements'
    ],
    modelSpokenAudioText: 'The client asked if we could deliver the revised contract by Friday afternoon.',
    tips: [
      'Change "Can you" to "if we could" or "whether we could".',
      'Do not use an auxiliary inversion in the embedded clause.',
      'End with a falling statement tone.'
    ]
  },
  {
    id: 'speak_4_passive_voice_transformation',
    title: 'Spoken Grammar Transformation: Active to Passive Voice',
    taskType: 'grammar_transformation',
    level: 'Intermediate',
    prepTimeSeconds: 10,
    speakingTimeSeconds: 20,
    targetSentence: 'Active: The cybersecurity department has investigated the recent data security breach.',
    prompt: 'Convert this active sentence into the present perfect passive voice aloud.',
    grammarTarget: 'Present Perfect Passive (has/have been + past participle)',
    pronunciationFocus: [
      'Reduced pronunciation of "been" (/bɪn/)',
      'Past participle ending in "investigated" (/ɪd/)',
      'Emphasis on the patient subject "data security breach"'
    ],
    modelSpokenAudioText: 'The recent data security breach has been investigated by the cybersecurity department.',
    tips: [
      'Make "The recent data security breach" the subject.',
      'Use "has been investigated".',
      'Keep the agent at the end with "by...".'
    ]
  },
  {
    id: 'speak_5_express_opinion_fluency',
    title: 'Express an Opinion: The Importance of Learning Multiple Languages',
    taskType: 'express_opinion',
    level: 'Intermediate',
    prepTimeSeconds: 20,
    speakingTimeSeconds: 60,
    prompt: 'Speak for 45 to 60 seconds answering: "How does learning a foreign language benefit a person\'s personal and professional life?"',
    scenarioContext: 'Explain two specific cognitive, cultural, or career benefits using transitional phrases and clear examples.',
    pronunciationFocus: [
      'Sentence stress on opinion markers ("In my opinion", "Furthermore", "Ultimately")',
      'Smooth linking between words (e.g. "benefit_of", "allows_us")'
    ],
    grammarTarget: 'Modal verbs of ability (enables, allows, can) + Conditional structures (If you speak...)',
    modelSpokenAudioText: 'In my view, learning a foreign language provides profound advantages for both personal growth and professional success. Professionally, speaking multiple languages enhances career mobility and allows individuals to communicate effectively with international clients and cross-border teams. Personally, acquiring another language expands cultural empathy and improves cognitive agility. Furthermore, research demonstrates that bilingual individuals develop superior multitasking abilities. Therefore, investing time in mastering a new language is one of the most rewarding endeavors anyone can pursue.',
    tips: [
      'Open with a clear stance: "In my view..." or "I firmly believe that..."',
      'Use "First," and "Furthermore," to organize your two points.',
      'Finish with a concluding summary sentence: "Therefore,..."'
    ]
  },
  {
    id: 'speak_6_advanced_read_aloud',
    title: 'Advanced Read-Aloud: Academic Argumentation',
    taskType: 'read_aloud',
    level: 'Advanced',
    prepTimeSeconds: 15,
    speakingTimeSeconds: 30,
    targetSentence: 'Although technological advancements have undoubtedly accelerated global communication, educators must ensure that students develop rigorous critical thinking and ethical discernment alongside digital literacy.',
    prompt: 'Read this academic sentence aloud with executive poise, natural pauses at clause boundaries, and authoritative intonation.',
    pronunciationFocus: [
      'Multi-syllable word stress: "tech-no-LO-gi-cal", "un-DOUBT-ed-ly", "dis-CERN-ment"',
      'Flawless rhythm across the parenthetical and compound elements'
    ],
    grammarTarget: 'Subordinate concession clause + Modal imperative with parallel nominal objects',
    modelSpokenAudioText: 'Although technological advancements have undoubtedly accelerated global communication, educators must ensure that students develop rigorous critical thinking and ethical discernment alongside digital literacy.',
    tips: [
      'Breathe before starting and pause after "communication,".',
      'Emphasize "critical thinking" and "ethical discernment".',
      'Conclude with authoritative, descending pitch.'
    ]
  }
];
