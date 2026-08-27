import { RealLifeSituationTopic } from '../types';

export const REAL_LIFE_SITUATIONS: RealLifeSituationTopic[] = [
  {
    id: 'sit_workplace',
    title: 'At the Office & Workplace',
    category: 'Workplace',
    icon: 'Briefcase',
    grammarFocus: 'Present Simple & Professional Modals (Can, Could, Would)',
    description: 'Master introducing your role, setting up meetings, asking colleagues for updates, and writing polite work requests.',
    dialogue: [
      {
        speaker: 'Marcus (Project Lead)',
        avatar: '👨‍💼',
        text: 'Good morning, Elena. Do you have a few minutes to review the project status?',
        grammarHighlight: 'Do you have... (Present Simple Question)',
        translationOrTip: 'Standard polite check before interrupting a colleague.'
      },
      {
        speaker: 'Elena (Senior Analyst)',
        avatar: '👩‍💼',
        text: 'Yes, absolutely. I usually finish checking my emails by 9:15 AM, so I am free now.',
        grammarHighlight: 'I usually finish... (Frequency Adverb + Present Simple)',
        translationOrTip: 'Explaining a regular schedule routine.'
      },
      {
        speaker: 'Marcus (Project Lead)',
        avatar: '👨‍💼',
        text: 'Could you please send me the revised budget spreadsheet before our 2 PM call?',
        grammarHighlight: 'Could you please + base verb (Polite Request)',
        translationOrTip: 'Professional request instead of direct command.'
      },
      {
        speaker: 'Elena (Senior Analyst)',
        avatar: '👩‍💼',
        text: 'Certainly. I will finalize the numbers and email them to you in twenty minutes.',
        grammarHighlight: 'I will finalize (Future spontaneous commitment)',
        translationOrTip: 'Clear time commitment builds workplace trust.'
      }
    ],
    keyPhrases: [
      {
        phrase: 'I work in administration and manage the regional database.',
        explanation: 'State your department and core responsibility clearly.',
        grammarRule: 'Present Simple (I + base verb) for permanent job roles.'
      },
      {
        phrase: 'Could you please send me the updated file?',
        explanation: 'Polite workplace request.',
        grammarRule: 'Modal "Could" + Subject + please + Base Verb.'
      },
      {
        phrase: 'I will submit the quarterly report by Friday.',
        explanation: 'Clear deadline promise.',
        grammarRule: 'Will + Base Verb for future commitments.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_work_1',
        type: 'real_life_situation',
        prompt: 'Workplace Scenario',
        scenario: 'Your supervisor asks if you can attend an unexpected client meeting at 3 PM today.',
        speaker: 'Supervisor',
        promptQuestion: 'What is the most professional and grammatically correct response if you are available?',
        options: [
          'Yes, I am available and I will attend the meeting.',
          'Yes, I am attend the meeting at 3 PM.',
          'Yes, I have available to attend.'
        ],
        correctIndex: 0,
        pragmaticTip: 'Combine the BE state ("I am available") with a future commitment ("I will attend").',
        whyExplanation: '"I am available" uses the BE verb correctly, and "I will attend" shows a clear future action.'
      },
      {
        id: 'q_sit_work_2',
        type: 'fill_blank',
        sentenceWithBlank: 'Our department ___ weekly progress meetings every Tuesday morning.',
        options: ['holds', 'hold', 'is hold'],
        correctIndex: 0,
        grammarFocus: 'Singular subject "Our department" = third person singular (-s)',
        whyExplanation: '"Our department" is a singular collective unit (it), requiring the third-person verb "holds".'
      }
    ]
  },
  {
    id: 'sit_restaurant',
    title: 'At a Restaurant & Cafe',
    category: 'Daily Life',
    icon: 'Utensils',
    grammarFocus: 'Polite Requests (I would like...), Articles & Countable Food Nouns',
    description: 'Order meals confidently, ask about dietary ingredients, request the bill, and interact smoothly with restaurant staff.',
    dialogue: [
      {
        speaker: 'Server',
        avatar: '🧑‍🍳',
        text: 'Good evening! Are you ready to order, or would you like a few more minutes?',
        grammarHighlight: 'Are you ready... / would you like... (Polite Questions)',
        translationOrTip: 'Standard greeting in dining service.'
      },
      {
        speaker: 'Customer',
        avatar: '🙋‍♂️',
        text: 'We are ready, thank you. I would like the grilled sea bass with steamed vegetables, please.',
        grammarHighlight: 'I would like + noun phrase (Polite Order)',
        translationOrTip: 'Always prefer "I would like" over "I want".'
      },
      {
        speaker: 'Server',
        avatar: '🧑‍🍳',
        text: 'Excellent choice. And for you, madam?',
        grammarHighlight: 'And for you...',
        translationOrTip: 'Prompting the dining partner.'
      },
      {
        speaker: 'Customer 2',
        avatar: '🙋‍♀️',
        text: 'Does this pasta dish contain any nuts? I have a severe allergy.',
        grammarHighlight: 'Does this pasta dish contain... (Present Simple Question)',
        translationOrTip: 'Vital for food safety and health preferences.'
      }
    ],
    keyPhrases: [
      {
        phrase: 'I would like a table for two, please.',
        explanation: 'Polite table reservation or walk-in greeting.',
        grammarRule: 'I would like (I\'d like) + noun.'
      },
      {
        phrase: 'Could we please have the bill?',
        explanation: 'Polite way to ask for payment.',
        grammarRule: 'Could we have + object.'
      },
      {
        phrase: 'Does the soup contain dairy or gluten?',
        explanation: 'Dietary restriction inquiry.',
        grammarRule: 'Does + singular subject + base verb contain?'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_rest_1',
        type: 'multiple_choice',
        prompt: 'What is the most polite and natural way to order a coffee in a cafe?',
        options: [
          'I would like a medium cappuccino, please.',
          'I want cappuccino now.',
          'Give me a medium cappuccino.'
        ],
        correctIndex: 0,
        whyExplanation: '"I would like... please" is the standard polite formula in English-speaking hospitality.'
      }
    ]
  },
  {
    id: 'sit_travel_airport',
    title: 'Airport, Flights & Hotel Check-in',
    category: 'Travel',
    icon: 'Plane',
    grammarFocus: 'Past Simple, Present Continuous, Prepositions of Place (at/in/gate)',
    description: 'Navigate check-in desks, security inquiries, boarding announcements, luggage claims, and hotel concierge desks.',
    dialogue: [
      {
        speaker: 'Airline Agent',
        avatar: '👩‍✈️',
        text: 'Good afternoon. May I see your passport and booking confirmation, please?',
        grammarHighlight: 'May I see... (Formal Permission Question)',
        translationOrTip: 'Standard check-in desk opening.'
      },
      {
        speaker: 'Traveler',
        avatar: '🧳',
        text: 'Here you go. I checked in online yesterday, but I need to drop off this suitcase.',
        grammarHighlight: 'I checked in (Past Simple) + I need to drop off (Present Need)',
        translationOrTip: 'Explaining pre-arrival actions and current requirement.'
      },
      {
        speaker: 'Airline Agent',
        avatar: '👩‍✈️',
        text: 'Your flight is departing from Gate B12 at 4:30 PM. Boarding begins at 3:50 PM.',
        grammarHighlight: 'is departing from Gate... at 4:30 PM (Prepositions of Place & Time)',
        translationOrTip: 'From Gate (Point), at time (Clock time).'
      }
    ],
    keyPhrases: [
      {
        phrase: 'I have a reservation under the name Wilson.',
        explanation: 'Checking into a hotel or rental car desk.',
        grammarRule: 'Present Simple with "under the name...".'
      },
      {
        phrase: 'What time is breakfast served in the morning?',
        explanation: 'Asking for hotel amenity hours.',
        grammarRule: 'Passive present inquiry with "What time is...".'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_travel_1',
        type: 'fill_blank',
        sentenceWithBlank: 'The express shuttle bus leaves ___ Gate 4 ___ 15 minutes.',
        options: ['from / in', 'at / at', 'to / on'],
        correctIndex: 0,
        grammarFocus: 'Prepositions: leaves from (origin) in 15 minutes (time duration)',
        whyExplanation: 'We depart "from" a gate, and events happen "in" X minutes.'
      }
    ]
  },
  {
    id: 'sit_doctor_clinic',
    title: 'Doctor & Healthcare Clinic',
    category: 'Healthcare',
    icon: 'Activity',
    grammarFocus: 'Present Perfect vs Past Simple (I have had this pain for 3 days), Describing Symptoms',
    description: 'Communicate pain levels, symptoms, medical history, and understand prescription instructions clearly.',
    dialogue: [
      {
        speaker: 'Doctor',
        avatar: '👨‍⚕️',
        text: 'Hello, Mr. Ramos. What seems to be the problem today?',
        grammarHighlight: 'What seems to be... (Polite Clinical Inquiry)',
        translationOrTip: 'Standard medical consultation opening.'
      },
      {
        speaker: 'Patient',
        avatar: '🤕',
        text: 'I have a persistent headache and a fever that started two days ago.',
        grammarHighlight: 'I have (Present) + that started two days ago (Past Simple with ago)',
        translationOrTip: 'Clear timeline helps diagnosis.'
      },
      {
        speaker: 'Doctor',
        avatar: '👨‍⚕️',
        text: 'Are you taking any medication currently, or do you have any allergies?',
        grammarHighlight: 'Are you taking (Present Continuous) / do you have (Present Simple)',
        translationOrTip: 'Routine safety questions.'
      }
    ],
    keyPhrases: [
      {
        phrase: 'I feel dizzy and have a sore throat.',
        explanation: 'Describing physical sensations.',
        grammarRule: 'Feel + adjective (dizzy) / have + noun phrase (a sore throat).'
      },
      {
        phrase: 'How many times a day should I take this medication?',
        explanation: 'Clarifying dosage and instructions.',
        grammarRule: 'How many times + modal should.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_doc_1',
        type: 'multiple_choice',
        prompt: 'How do you accurately tell a doctor when a symptom began?',
        options: [
          'The stomach ache started two days ago.',
          'The stomach ache starts since two days ago.',
          'The stomach ache was started two days ago.'
        ],
        correctIndex: 0,
        whyExplanation: 'Past action with finished time marker ("two days ago") uses Past Simple: "started".'
      }
    ]
  },
  {
    id: 'sit_job_interview',
    title: 'Job Interview & Professional Introduction',
    category: 'Career',
    icon: 'Award',
    grammarFocus: 'Present Simple (Current role), Past Simple (Achievements), Present Perfect (Experience)',
    description: 'Confidently answer "Tell me about yourself", describe previous accomplishments, and ask insightful questions to interviewers.',
    dialogue: [
      {
        speaker: 'Interviewer',
        avatar: '👔',
        text: 'Welcome, David. Could you please tell us a little bit about your professional background?',
        grammarHighlight: 'Could you please tell us... (Polite prompt)',
        translationOrTip: 'The #1 opening question in adult job interviews.'
      },
      {
        speaker: 'David (Candidate)',
        avatar: '💼',
        text: 'Certainly. I have worked in supply chain logistics for seven years, and I currently manage inventory for a retail distributor.',
        grammarHighlight: 'I have worked (Experience span) + I currently manage (Present Simple role)',
        translationOrTip: 'Balances career tenure with current practical value.'
      }
    ],
    keyPhrases: [
      {
        phrase: 'In my previous position, I led a team of six coordinators.',
        explanation: 'Past leadership experience.',
        grammarRule: 'Past Simple (led) for finished previous job.'
      },
      {
        phrase: 'I am looking for an opportunity where I can develop my analytical skills.',
        explanation: 'Stating career objective.',
        grammarRule: 'Present Continuous (am looking) + modal (can develop).'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_int_1',
        type: 'fill_blank',
        sentenceWithBlank: 'In my last role, I ___ the company\'s inventory software system.',
        options: ['upgraded', 'upgrade', 'have upgraded yesterday'],
        correctIndex: 0,
        grammarFocus: 'Past Simple for finished prior position',
        whyExplanation: 'Actions in a finished past job require the Past Simple ("upgraded").'
      }
    ]
  },
  {
    id: 'sit_phone_calls',
    title: 'Phone Calls & Voicemails',
    category: 'Workplace',
    icon: 'PhoneCall',
    grammarFocus: 'Telephone Conventions ("This is...", "May I speak with...", "Can I take a message?")',
    description: 'Handle professional phone calls, transfer lines, leave voicemails, and clarify poor connections.',
    dialogue: [
      {
        speaker: 'Caller',
        avatar: '📞',
        text: 'Hello, this is Sandra Chen from Apex Logistics. May I speak with Mr. Harrison, please?',
        grammarHighlight: 'This is [Name] (Telephone convention - NOT "I am Sandra")',
        translationOrTip: 'In English telephone etiquette, we say "This is..." or "My name is...".'
      },
      {
        speaker: 'Receptionist',
        avatar: '🎧',
        text: 'I am afraid Mr. Harrison is in a meeting at the moment. Would you like to leave a message?',
        grammarHighlight: 'is in a meeting at the moment / Would you like to...',
        translationOrTip: 'Polite notice of unavailability.'
      }
    ],
    keyPhrases: [
      {
        phrase: 'Hello, this is Robert calling regarding your inquiry.',
        explanation: 'Standard professional telephone identification.',
        grammarRule: 'This is + Name (Do not say "I am Robert" when calling).'
      },
      {
        phrase: 'Could you please ask her to call me back at this number?',
        explanation: 'Leaving a callback request.',
        grammarRule: 'Could you please ask [person] to [base verb]?'
      }
    ],
    practiceQuestions: [
      {
        id: 'q_sit_phone_1',
        type: 'multiple_choice',
        prompt: 'How do you identify yourself naturally when answering or placing a professional phone call?',
        options: [
          'Hello, this is Mark speaking.',
          'Hello, I am Mark on the phone.',
          'Hello, Mark is here speaking to you.'
        ],
        correctIndex: 0,
        whyExplanation: '"This is [Name] speaking" is the universal English telephone standard.'
      }
    ]
  }
];

export const REAL_LIFE_SCENARIOS = REAL_LIFE_SITUATIONS;
