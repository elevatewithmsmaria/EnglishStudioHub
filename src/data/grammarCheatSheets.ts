import { GrammarCheatSheet } from '../types';

export const GRAMMAR_CHEAT_SHEETS: GrammarCheatSheet[] = [
  {
    id: 'sheet_has_vs_have',
    category: 'Verbs & Agreement',
    title: 'HAS vs. HAVE (When to Use Each)',
    summary: 'Use "have" with I, You, We, They and plural nouns. Use "has" with He, She, It and singular nouns.',
    keywords: ['has', 'have', 'when do i use has', 'has vs have', 'have vs has', 'third person has', 'possession'],
    rules: [
      {
        title: 'Basic Subject Rule',
        explanation: 'In the present tense, "have" changes to "has" ONLY for third-person singular subjects (He, She, It, or one named person/thing).',
        formula: 'I / You / We / They + HAVE | He / She / It + HAS',
        examples: [
          { text: 'I have a meeting at 2 PM.', note: 'Subject is "I" -> have' },
          { text: 'Sarah has three years of accounting experience.', note: 'Subject is "Sarah" (she) -> has' },
          { text: 'Our company has branches in five countries.', note: 'Subject is "Our company" (singular unit) -> has' },
          { text: 'They have two children.', note: 'Subject is "They" -> have' }
        ]
      },
      {
        title: 'Negative & Question Rule (Watch Out!)',
        explanation: 'In negative sentences (don\'t / doesn\'t) and questions (Do / Does), ALWAYS use "HAVE" because the auxiliary verb does/doesn\'t absorbs the third-person marker.',
        formula: 'doesn\'t + HAVE | Does he + HAVE?',
        examples: [
          { text: 'He doesn\'t have the report.', note: 'NOT "doesn\'t has"' },
          { text: 'Does she have a car?', note: 'NOT "Does she has"' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'She have a new laptop.', right: 'She has a new laptop.', reason: 'She is singular third-person, so use "has".' },
      { wrong: 'He doesn\'t has time.', right: 'He doesn\'t have time.', reason: 'After "doesn\'t", the verb always returns to base form "have".' }
    ],
    comparisonTable: {
      headers: ['Subject Group', 'Positive (+)', 'Negative (-)', 'Question (?)'],
      rows: [
        ['I / You / We / They', 'have (I have time)', 'don\'t have', 'Do you have...?'],
        ['He / She / It / Maria', 'has (She has time)', 'doesn\'t have', 'Does he have...?']
      ]
    },
    quickTip: 'Remember: Only positive He/She/It uses "HAS". As soon as "does" or "doesn\'t" enters the sentence, it goes back to "HAVE"!'
  },
  {
    id: 'sheet_in_on_at',
    category: 'Prepositions',
    title: 'IN vs. ON vs. AT (Time & Place Master Guide)',
    summary: 'The inverted pyramid rule: IN for broad time/places, ON for dates/days/streets, AT for precise times/addresses.',
    keywords: ['in', 'on', 'at', 'prepositions of time', 'prepositions of place', 'in on at', 'at the airport', 'on monday', 'in july'],
    rules: [
      {
        title: 'Time Guidelines',
        explanation: 'IN = Months, Years, Decades, Centuries, Seasons (In July, In 2026, In summer).\nON = Days, Specific Dates (On Monday, On May 14th, On my birthday).\nAT = Clock Times, Exact Moments (At 5 PM, At midnight, At noon).',
        examples: [
          { text: 'We will launch the product in November.', note: 'Month -> IN' },
          { text: 'The interview is on Thursday morning.', note: 'Day -> ON' },
          { text: 'The flight departs at 6:45 AM.', note: 'Clock time -> AT' }
        ]
      },
      {
        title: 'Place Guidelines',
        explanation: 'IN = Enclosed spaces, Cities, Countries (In Qatar, In Paris, In the kitchen).\nON = Surfaces, Streets, Public Transit (On the table, On Main Street, On the train).\nAT = Specific points, Addresses, Venues (At the bus stop, At the airport, At 22 Baker St).',
        examples: [
          { text: 'I live in London.', note: 'City -> IN' },
          { text: 'The documents are on your desk.', note: 'Surface -> ON' },
          { text: 'Let\'s meet at the conference center entrance.', note: 'Specific landmark/point -> AT' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'I was born in 15th August.', right: 'I was born on 15th August.', reason: 'Specific dates require ON.' },
      { wrong: 'The meeting starts in 2:00 PM.', right: 'The meeting starts at 2:00 PM.', reason: 'Exact clock times require AT.' }
    ],
    quickTip: 'Think size: IN is a big container (city/month), ON is a line or surface (day/street), AT is a laser pointer (exact time/location).'
  },
  {
    id: 'sheet_simple_vs_continuous',
    category: 'Tenses',
    title: 'Present Simple vs. Present Continuous',
    summary: 'Present Simple is for habits, routines, and permanent facts. Present Continuous is for actions happening right now or temporary situations.',
    keywords: ['present simple vs continuous', 'ing vs simple', 'when to use ing', 'habits vs now', 'tenses comparison'],
    rules: [
      {
        title: 'How to Choose Instantly',
        explanation: 'Ask yourself: Is this something I do repeatedly or generally (Simple)? Or is it happening at this very moment / temporary (Continuous)?',
        examples: [
          { text: 'I drink coffee every morning.', note: 'Daily routine -> Present Simple' },
          { text: 'I am drinking coffee right now.', note: 'Action happening at this second -> Present Continuous' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'I am living in Canada since 10 years.', right: 'I live in Canada. / I have lived in Canada for 10 years.', reason: 'Permanent residence is expressed with Present Simple or Present Perfect.' },
      { wrong: 'Look! It rains.', right: 'Look! It is raining.', reason: 'Action happening right in front of your eyes requires Continuous (is raining).' }
    ],
    comparisonTable: {
      headers: ['Feature', 'Present Simple', 'Present Continuous'],
      rows: [
        ['Purpose', 'Routines, habits, universal truths', 'Happening right now, temporary states'],
        ['Time Words', 'Every day, usually, always, on Fridays', 'Right now, at the moment, currently, today'],
        ['Formula', 'Subject + Verb(s)', 'Subject + am/is/are + Verb-ing'],
        ['Example', 'I work at a bank. (Permanent job)', 'I am working from home today. (Temporary)']
      ]
    },
    quickTip: 'If you can add "right now" naturally, use -ing (am/is/are + verb-ing). If you can add "usually" or "every week", use Simple!'
  },
  {
    id: 'sheet_much_vs_many',
    category: 'Nouns & Quantifiers',
    title: 'MUCH vs. MANY vs. A LOT OF',
    summary: 'Use "Much" with uncountable nouns (much time, much money). Use "Many" with plural countable nouns (many people, many emails).',
    keywords: ['much vs many', 'how much vs how many', 'quantifiers', 'countable uncountable quantifiers'],
    rules: [
      {
        title: 'Core Distinction',
        explanation: 'Much = Uncountable (things you cannot count with numbers: time, money, sugar, information).\nMany = Countable plural (things you can count: hours, dollars, cups, emails).\nA lot of = Works with BOTH in positive statements!',
        examples: [
          { text: 'How much money do we need?', note: 'Money is uncountable mass -> Much' },
          { text: 'How many dollars does this cost?', note: 'Dollars are countable units -> Many' },
          { text: 'We have a lot of time and a lot of questions.', note: '"A lot of" works for both!' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'How many money do you have?', right: 'How much money do you have?', reason: 'Money is an uncountable concept. Coins and bills are countable, but the word "money" is uncountable.' },
      { wrong: 'There isn\'t many traffic today.', right: 'There isn\'t much traffic today.', reason: 'Traffic is uncountable mass.' }
    ],
    quickTip: 'If the noun ends with plural -s (cars, days, clients), use MANY. If it has no -s (water, advice, time), use MUCH!'
  },
  {
    id: 'sheet_a_vs_an_vs_the',
    category: 'Articles',
    title: 'A vs. AN vs. THE (Articles Quick Guide)',
    summary: 'A before consonant sounds, AN before vowel sounds, THE when both speaker and listener know the specific item.',
    keywords: ['a vs an', 'a an the', 'when do i use a', 'articles cheat sheet', 'definite vs indefinite'],
    rules: [
      {
        title: 'Sound Rule for A vs. AN',
        explanation: 'It is based on the FIRST SPOKEN SOUND, not just the written letter!',
        examples: [
          { text: 'An hour (/aʊər/ - vowel sound)', note: 'Silent H -> use AN' },
          { text: 'A university (/juːnɪ.../ - consonant "y" sound)', note: 'Starts with "Y" sound -> use A' },
          { text: 'An MBA graduate', note: 'Letter M sounds like "em" (vowel sound) -> use AN' },
          { text: 'A European trip', note: 'Eu sounds like "yoo" -> use A' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'A honest mistake', right: 'An honest mistake', reason: 'The H in "honest" is silent, so the word begins with vowel sound /ɒ/.' },
      { wrong: 'I bought the car yesterday. A car is blue.', right: 'I bought a car yesterday. The car is blue.', reason: 'First mention = a car. Second mention (now specific) = the car.' }
    ],
    quickTip: 'Say the word out loud! If your throat opens with an "ah/eh/ih/oh/uh" sound, use AN.'
  },
  {
    id: 'sheet_irregular_verbs',
    category: 'Verbs & Tenses',
    title: 'Top 25 Most Common Irregular Verbs in English',
    summary: 'The essential irregular verbs you will hear and speak every single day in adult English.',
    keywords: ['irregular verbs', 'past tense irregular', 'went', 'saw', 'bought', 'did', 'had', 'irregular verb table'],
    rules: [
      {
        title: 'High-Frequency Workplace & Daily Verbs',
        explanation: 'These verbs do not take -ed. Memorize their past simple and past participle forms.',
        examples: [
          { text: 'be -> was/were -> been', note: 'I was in the meeting.' },
          { text: 'have -> had -> had', note: 'We had a good discussion.' },
          { text: 'do -> did -> done', note: 'She did a fantastic job.' },
          { text: 'go -> went -> gone', note: 'They went to the branch office.' },
          { text: 'get -> got -> got/gotten', note: 'I got your voicemail.' },
          { text: 'make -> made -> made', note: 'He made a reservation.' },
          { text: 'know -> knew -> known', note: 'We knew about the schedule change.' },
          { text: 'think -> thought -> thought', note: 'I thought the deadline was Friday.' },
          { text: 'take -> took -> taken', note: 'She took the train.' },
          { text: 'see -> saw -> seen', note: 'I saw the notification.' },
          { text: 'come -> came -> come', note: 'The manager came to our desk.' },
          { text: 'find -> found -> found', note: 'We found an affordable option.' },
          { text: 'give -> gave -> given', note: 'He gave me his business card.' },
          { text: 'tell -> told -> told', note: 'She told us the outcome.' },
          { text: 'say -> said -> said', note: 'They said everything was fine.' }
        ]
      }
    ],
    watchOuts: [
      { wrong: 'I buyed a new ticket.', right: 'I bought a new ticket.', reason: 'Buy is irregular: buy -> bought.' },
      { wrong: 'She writed an email.', right: 'She wrote an email.', reason: 'Write is irregular: write -> wrote.' }
    ],
    quickTip: 'In questions and negatives with did/didn\'t, irregular verbs ALWAYS return to base form ("Did you go?", "I didn\'t buy")!'
  }
];

export const searchGrammarCheatSheets = (query: string): GrammarCheatSheet[] => {
  if (!query || query.trim() === '') return GRAMMAR_CHEAT_SHEETS;
  const clean = query.toLowerCase().trim();
  
  return GRAMMAR_CHEAT_SHEETS.filter((sheet) => {
    if (sheet.title.toLowerCase().includes(clean)) return true;
    if (sheet.summary.toLowerCase().includes(clean)) return true;
    if (sheet.category.toLowerCase().includes(clean)) return true;
    if (sheet.keywords.some((kw) => kw.toLowerCase().includes(clean) || clean.includes(kw.toLowerCase()))) return true;
    if (sheet.watchOuts.some((w) => w.wrong.toLowerCase().includes(clean) || w.right.toLowerCase().includes(clean))) return true;
    return false;
  });
};
