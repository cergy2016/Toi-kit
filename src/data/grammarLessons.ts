import { balanceFlat } from './balance';
import { GrammarLesson } from '../types';

const RAW_GRAMMAR_LESSONS: GrammarLesson[] = [
  {
    id: 1,
    title: 'Verb Tenses: Present Perfect vs Simple Past & Future Time Clauses',
    category: 'Tenses & Aspect',
    ruleExplanation:
      'The Simple Past describes an action completed at a definite past time (yesterday, last month, in 2024). The Present Perfect (have/has + past participle) connects past actions to the present, especially with "since", "for", "already", "recently", and "over the past decade". In adverb clauses of time introduced by "when", "as soon as", "before", "after", and "until", use the Simple Present to express future meaning instead of "will".',
    toeicTrap:
      'Using "will" in a time clause (e.g., "When the shipment will arrive..." -> WRONG! Correct: "When the shipment arrives..."). Also confusing "since" + past point in time with present perfect in the main clause.',
    practiceItems: [
      {
        question: 'Mr. Henderson _______ the quarterly earnings report before the executive committee met yesterday.',
        options: [
          { key: 'A', text: 'has finalized' },
          { key: 'B', text: 'finalized' },
          { key: 'C', text: 'finalizes' },
          { key: 'D', text: 'will finalize' }
        ],
        correctAnswer: 'B',
        explanation: '"Yesterday" establishes a completed past event. Simple past "finalized" is required.',
      },
      {
        question: 'Apex Global _______ its European workforce by 15 percent since opening its Berlin office last year.',
        options: [
          { key: 'A', text: 'expanded' },
          { key: 'B', text: 'has expanded' },
          { key: 'C', text: 'expands' },
          { key: 'D', text: 'will expand' }
        ],
        correctAnswer: 'B',
        explanation: '"Since + past event" in the dependent clause requires the present perfect ("has expanded") in the main clause.',
      },
      {
        question: 'As soon as the technician _______ the software patch, employees may restart their workstations.',
        options: [
          { key: 'A', text: 'installs' },
          { key: 'B', text: 'will install' },
          { key: 'C', text: 'installed' },
          { key: 'D', text: 'is installing' }
        ],
        correctAnswer: 'A',
        explanation: 'In a future time clause introduced by "as soon as", use the simple present ("installs") rather than "will install".',
      },
      {
        question: 'Over the past three years, customer satisfaction scores _______ steadily across all regional branches.',
        options: [
          { key: 'A', text: 'rise' },
          { key: 'B', text: 'have risen' },
          { key: 'C', text: 'rose' },
          { key: 'D', text: 'are rising' }
        ],
        correctAnswer: 'B',
        explanation: '"Over the past/last X years" is a textbook trigger for the present perfect ("have risen").',
      },
      {
        question: 'When the keynote speaker _______ at noon tomorrow, please escort him directly to the VIP lounge.',
        options: [
          { key: 'A', text: 'arrived' },
          { key: 'B', text: 'arrives' },
          { key: 'C', text: 'will arrive' },
          { key: 'D', text: 'has arrived' }
        ],
        correctAnswer: 'B',
        explanation: 'Time clause "When + simple present" refers to future action.',
      }
    ]
  },
  {
    id: 2,
    title: 'Passive Voice & Agentless Passives',
    category: 'Voice & Transitivity',
    ruleExplanation:
      'The passive voice (be + past participle) shifts focus to the receiver of the action. On the TOEIC, passive is frequent in business correspondence: "The meeting has been rescheduled", "Payment must be received". Remember: Intransitive verbs (arrive, occur, happen, remain, exist, rise) CANNOT be made passive.',
    toeicTrap:
      'Choosing an active verb when the subject cannot perform the action (e.g., "The documents delivered yesterday" vs "were delivered"), or making intransitive verbs passive (e.g., "The delay was occurred" is incorrect; "The delay occurred" is correct).',
    practiceItems: [
      {
        question: 'All travel expense receipts must be _______ to the accounting department within five business days.',
        options: [
          { key: 'A', text: 'submit' },
          { key: 'B', text: 'submitting' },
          { key: 'C', text: 'submitted' },
          { key: 'D', text: 'submission' }
        ],
        correctAnswer: 'C',
        explanation: 'Modal passive structure: "must be + past participle" -> "submitted".',
      },
      {
        question: 'The scheduled power outage _______ unexpectedly during routine generator testing yesterday.',
        options: [
          { key: 'A', text: 'was occurred' },
          { key: 'B', text: 'occurred' },
          { key: 'C', text: 'is occurred' },
          { key: 'D', text: 'occurring' }
        ],
        correctAnswer: 'B',
        explanation: '"Occur" is an intransitive verb and cannot take passive voice. The simple past active form "occurred" is correct.',
      },
      {
        question: 'A commemorative plaque was _______ to Ms. Lin in honor of her twenty years of service.',
        options: [
          { key: 'A', text: 'present' },
          { key: 'B', text: 'presenting' },
          { key: 'C', text: 'presented' },
          { key: 'D', text: 'presentation' }
        ],
        correctAnswer: 'C',
        explanation: 'Passive voice: "was + past participle" -> "was presented".',
      },
      {
        question: 'New ergonomic chairs are currently being _______ in all third-floor workstations.',
        options: [
          { key: 'A', text: 'install' },
          { key: 'B', text: 'installation' },
          { key: 'C', text: 'installed' },
          { key: 'D', text: 'installs' }
        ],
        correctAnswer: 'C',
        explanation: 'Present continuous passive: "are being + past participle" -> "installed".',
      },
      {
        question: 'The flight delay was caused by severe weather conditions that _______ across the Midwest.',
        options: [
          { key: 'A', text: 'developed' },
          { key: 'B', text: 'were developed' },
          { key: 'C', text: 'was developed' },
          { key: 'D', text: 'developing' }
        ],
        correctAnswer: 'A',
        explanation: 'Weather conditions "developed" (intransitive active sense here, describing a natural phenomenon).',
      }
    ]
  },
  {
    id: 3,
    title: 'Conditionals & Inverted Conditionals (Should / Were / Had)',
    category: 'Sentence Structure',
    ruleExplanation:
      'Conditionals express cause-and-effect scenarios. Type 1: If + present, will + verb. Type 2: If + past, would + verb. Type 3: If + had + p.p., would have + p.p. In formal business English, "If" can be omitted via INVERSION: "If you should need" -> "Should you need"; "If we had known" -> "Had we known".',
    toeicTrap:
      'Failing to recognize inversion. When a sentence starts with "Should you...", "Had we...", or "Were the board...", it is an inverted conditional, NOT a question!',
    practiceItems: [
      {
        question: '_______ you require additional assistance, please contact the help desk at extension 402.',
        options: [
          { key: 'A', text: 'Should' },
          { key: 'B', text: 'Would' },
          { key: 'C', text: 'Could' },
          { key: 'D', text: 'Might' }
        ],
        correctAnswer: 'A',
        explanation: 'Inverted first conditional: "Should you require..." equals "If you require...".',
      },
      {
        question: 'If the budget _______ approved earlier, construction on the new research facility would have started last spring.',
        options: [
          { key: 'A', text: 'was' },
          { key: 'B', text: 'has been' },
          { key: 'C', text: 'had been' },
          { key: 'D', text: 'would be' }
        ],
        correctAnswer: 'C',
        explanation: 'Past unreal conditional (Type 3): "If + past perfect (had been approved)... would have started".',
      },
      {
        question: '_______ the management team known about the supply chain bottlenecks, they would have stockpiled additional raw materials.',
        options: [
          { key: 'A', text: 'Had' },
          { key: 'B', text: 'If' },
          { key: 'C', text: 'Were' },
          { key: 'D', text: 'Did' }
        ],
        correctAnswer: 'A',
        explanation: 'Inverted third conditional: "Had [subject] known..." replaces "If [subject] had known...".',
      },
      {
        question: 'If we _______ our sales target this quarter, all branch associates will receive an annual bonus.',
        options: [
          { key: 'A', text: 'reach' },
          { key: 'B', text: 'reached' },
          { key: 'C', text: 'had reached' },
          { key: 'D', text: 'will reach' }
        ],
        correctAnswer: 'A',
        explanation: 'First conditional: "If + simple present (reach)... will receive".',
      },
      {
        question: 'Were Ms. Gomez _______ to accept the regional directorship, she would have to relocate to Chicago.',
        options: [
          { key: 'A', text: 'decided' },
          { key: 'B', text: 'to decide' },
          { key: 'C', text: 'decides' },
          { key: 'D', text: 'deciding' }
        ],
        correctAnswer: 'B',
        explanation: 'Inverted second conditional: "Were + subject + to-infinitive" replaces "If Ms. Gomez decided...".',
      }
    ]
  },
  {
    id: 4,
    title: 'Relative Clauses & Reduced Relative Clauses',
    category: 'Clauses & Modifiers',
    ruleExplanation:
      'Relative pronouns link clauses: "who" (people, subject), "whom" (people, object), "which/that" (things), "whose" (possession). In reduced relative clauses, the pronoun and "be" are omitted, leaving a present participle (-ing) for active meaning or a past participle (-ed) for passive meaning: "Employees [who are] working overtime" -> "Employees working overtime"; "Products [which were] manufactured in Ohio" -> "Products manufactured in Ohio".',
    toeicTrap:
      'Confusing active participle (-ing) and passive participle (-ed) in reduced clauses, or confusing "whose" (possessive) with "who\'s" (who is).',
    practiceItems: [
      {
        question: 'All employees _______ badges have expired must visit human resources for a renewal.',
        options: [
          { key: 'A', text: 'who' },
          { key: 'B', text: 'whom' },
          { key: 'C', text: 'whose' },
          { key: 'D', text: 'which' }
        ],
        correctAnswer: 'C',
        explanation: 'Possessive relative pronoun "whose" modifies the noun "badges" (their badges).',
      },
      {
        question: 'The proposal _______ by the marketing team was praised by the executive council.',
        options: [
          { key: 'A', text: 'submitting' },
          { key: 'B', text: 'submitted' },
          { key: 'C', text: 'was submitted' },
          { key: 'D', text: 'submits' }
        ],
        correctAnswer: 'B',
        explanation: 'Reduced relative clause with passive meaning: "The proposal [which was] submitted by... was praised".',
      },
      {
        question: 'Passengers _______ on flight 814 to London should proceed to gate B22.',
        options: [
          { key: 'A', text: 'travel' },
          { key: 'B', text: 'traveling' },
          { key: 'C', text: 'traveled' },
          { key: 'D', text: 'travels' }
        ],
        correctAnswer: 'B',
        explanation: 'Active reduced relative clause: "Passengers [who are] traveling on flight 814".',
      },
      {
        question: 'The firm hired an outside auditor _______ qualifications met international standards.',
        options: [
          { key: 'A', text: 'whose' },
          { key: 'B', text: 'who' },
          { key: 'C', text: 'whom' },
          { key: 'D', text: 'which' }
        ],
        correctAnswer: 'A',
        explanation: 'Possessive "whose" indicates the auditor\'s qualifications.',
      },
      {
        question: 'Goods _______ during transit will be replaced at no additional cost to the customer.',
        options: [
          { key: 'A', text: 'damaging' },
          { key: 'B', text: 'damaged' },
          { key: 'C', text: 'damage' },
          { key: 'D', text: 'are damaged' }
        ],
        correctAnswer: 'B',
        explanation: 'Reduced passive relative clause modifying "Goods": "Goods [that are] damaged during transit".',
      }
    ]
  },
  {
    id: 5,
    title: 'Prepositions of Time and Place',
    category: 'Prepositions',
    ruleExplanation:
      'Time: "at" (specific times: at 9:00, at noon), "on" (days and dates: on Monday, on May 4), "in" (months, years, centuries, seasons: in June, in 2026, in summer). "Within" denotes a duration limit ("within 30 days"). "Throughout" indicates entire duration ("throughout the fiscal year"). Place: "at" (specific address or location), "on" (surface, floor), "in" (enclosed area, city, country).',
    toeicTrap:
      'Confusing "by" (deadline: action must happen at or before) with "until" (continuous state continuing up to a time). Confusing "in" with "within" when referring to a deadline window.',
    practiceItems: [
      {
        question: 'The quarterly shareholder meeting is scheduled to commence _______ October 14.',
        options: [
          { key: 'A', text: 'at' },
          { key: 'B', text: 'in' },
          { key: 'C', text: 'on' },
          { key: 'D', text: 'for' }
        ],
        correctAnswer: 'C',
        explanation: 'For specific calendar dates (October 14), the preposition is "on".',
      },
      {
        question: 'Warranty service requests are typically processed _______ forty-eight hours of submission.',
        options: [
          { key: 'A', text: 'within' },
          { key: 'B', text: 'between' },
          { key: 'C', text: 'at' },
          { key: 'D', text: 'for' }
        ],
        correctAnswer: 'A',
        explanation: '"Within + time span" expresses completion inside that time limit.',
      },
      {
        question: 'Our customer support hotline is staffed continuously _______ the holiday weekend.',
        options: [
          { key: 'A', text: 'throughout' },
          { key: 'B', text: 'between' },
          { key: 'C', text: 'among' },
          { key: 'D', text: 'since' }
        ],
        correctAnswer: 'A',
        explanation: '"Throughout" means from beginning to end of a period.',
      },
      {
        question: 'All safety inspection checklists must be returned to the supervisor _______ 5:00 P.M.',
        options: [
          { key: 'A', text: 'by' },
          { key: 'B', text: 'until' },
          { key: 'C', text: 'while' },
          { key: 'D', text: 'during' }
        ],
        correctAnswer: 'A',
        explanation: '"By" indicates the completion deadline (at or before 5:00 P.M.).',
      },
      {
        question: 'The annual trade expo will take place _______ the Vancouver Convention Centre.',
        options: [
          { key: 'A', text: 'at' },
          { key: 'B', text: 'on' },
          { key: 'C', text: 'to' },
          { key: 'D', text: 'along' }
        ],
        correctAnswer: 'A',
        explanation: '"At" marks a specific venue or institution.',
      }
    ]
  },
  {
    id: 6,
    title: 'Dependent Prepositions in Business English',
    category: 'Prepositions & Collocations',
    ruleExplanation:
      'Certain verbs and adjectives must be followed by fixed prepositions. Essential TOEIC pairs: comply with, agree to/with, participate in, adhere to, refrain from, consist of, specialize in, contribute to, rely on, dispose of, apologize for, eligible for, responsible for, capable of, prior to, exempt from.',
    toeicTrap:
      'Translating directly from native languages or guessing the preposition based on surface intuition instead of fixed business English collocations.',
    practiceItems: [
      {
        question: 'All contractors working on site must strictly adhere _______ safety regulations.',
        options: [
          { key: 'A', text: 'with' },
          { key: 'B', text: 'to' },
          { key: 'C', text: 'at' },
          { key: 'D', text: 'for' }
        ],
        correctAnswer: 'B',
        explanation: 'The verb "adhere" always takes the preposition "to" ("adhere to regulations").',
      },
      {
        question: 'Employees are kindly requested to refrain _______ using personal mobile phones during client presentations.',
        options: [
          { key: 'A', text: 'from' },
          { key: 'B', text: 'of' },
          { key: 'C', text: 'by' },
          { key: 'D', text: 'with' }
        ],
        correctAnswer: 'A',
        explanation: '"Refrain from + gerund" is the fixed business expression for abstaining.',
      },
      {
        question: 'Only full-time staff who have completed six months of service are eligible _______ tuition reimbursement.',
        options: [
          { key: 'A', text: 'with' },
          { key: 'B', text: 'for' },
          { key: 'C', text: 'to' },
          { key: 'D', text: 'about' }
        ],
        correctAnswer: 'B',
        explanation: 'The adjective "eligible" takes "for + noun" (or "to + verb").',
      },
      {
        question: 'The boutique consulting firm specializes _______ corporate mergers and acquisitions.',
        options: [
          { key: 'A', text: 'in' },
          { key: 'B', text: 'at' },
          { key: 'C', text: 'on' },
          { key: 'D', text: 'with' }
        ],
        correctAnswer: 'A',
        explanation: '"Specialize in" is the standard business collocation.',
      },
      {
        question: 'Any hazardous chemical waste must be disposed _______ in accordance with local environmental statutes.',
        options: [
          { key: 'A', text: 'of' },
          { key: 'B', text: 'off' },
          { key: 'C', text: 'away' },
          { key: 'D', text: 'out' }
        ],
        correctAnswer: 'A',
        explanation: '"Dispose of" (single \'f\') means to get rid of or discard properly.',
      }
    ]
  },
  {
    id: 7,
    title: 'Word Families & Derivational Suffixes',
    category: 'Word Formation',
    ruleExplanation:
      'Identifying the part of speech required by syntactic position: Nouns end in -tion, -sion, -ment, -ance, -ence, -ity. Adjectives end in -able, -ible, -al, -ive, -ous, -ic. Adverbs end in -ly. Verbs end in -ize, -ify, -en, -ate. Rule: Determiner + Adjective + Noun; Subject + Adverb + Verb + Object.',
    toeicTrap:
      'Choosing an adjective to modify a verb, or choosing an abstract noun when an agent/person noun (e.g., "applicant" vs "application") is needed.',
    practiceItems: [
      {
        question: 'The board expressed high _______ with the construction company\'s adherence to the deadline.',
        options: [
          { key: 'A', text: 'satisfy' },
          { key: 'B', text: 'satisfied' },
          { key: 'C', text: 'satisfaction' },
          { key: 'D', text: 'satisfactorily' }
        ],
        correctAnswer: 'C',
        explanation: 'Following the adjective "high", a noun is required: "satisfaction".',
      },
      {
        question: 'Dr. Rossi presented a _______ overview of the clinical trial outcomes at the symposium.',
        options: [
          { key: 'A', text: 'comprehensive' },
          { key: 'B', text: 'comprehensively' },
          { key: 'C', text: 'comprehend' },
          { key: 'D', text: 'comprehension' }
        ],
        correctAnswer: 'A',
        explanation: 'Between the article "a" and the noun "overview", an adjective is required: "comprehensive".',
      },
      {
        question: 'Qualified _______ are encouraged to submit their resumes to the human resources portal.',
        options: [
          { key: 'A', text: 'applicants' },
          { key: 'B', text: 'applications' },
          { key: 'C', text: 'apply' },
          { key: 'D', text: 'applicable' }
        ],
        correctAnswer: 'A',
        explanation: 'The subject must be the people who submit resumes: "applicants" (person noun, plural).',
      },
      {
        question: 'The new inventory management system functions _______ even during peak holiday traffic.',
        options: [
          { key: 'A', text: 'efficient' },
          { key: 'B', text: 'efficiently' },
          { key: 'C', text: 'efficiency' },
          { key: 'D', text: 'efficiencies' }
        ],
        correctAnswer: 'B',
        explanation: 'Modifying the intransitive verb "functions", an adverb is required: "efficiently".',
      },
      {
        question: 'The engineering firm plans to _______ the old factory building into a state-of-the-art laboratory.',
        options: [
          { key: 'A', text: 'conversion' },
          { key: 'B', text: 'convertible' },
          { key: 'C', text: 'convert' },
          { key: 'D', text: 'converted' }
        ],
        correctAnswer: 'C',
        explanation: 'After the infinitive marker "to", the base form verb is required: "to convert".',
      }
    ]
  },
  {
    id: 8,
    title: 'Conjunctions vs Prepositions (Although vs Despite)',
    category: 'Clauses vs Phrases',
    ruleExplanation:
      'Conjunctions (although, even though, while, because, since, whereas) introduce a subordinate clause containing a Subject and a conjugated Verb [S + V]. Prepositions (despite, in spite of, due to, because of, during, regardless of) introduce a noun phrase, pronoun, or gerund without a conjugated verb.',
    toeicTrap:
      'Confusing "Because" [clause] with "Because of" [noun phrase], and "Although" [clause] with "Despite" [noun phrase].',
    practiceItems: [
      {
        question: '_______ the torrential rainstorm, all scheduled deliveries were completed on schedule.',
        options: [
          { key: 'A', text: 'Although' },
          { key: 'B', text: 'Despite' },
          { key: 'C', text: 'Even though' },
          { key: 'D', text: 'Whereas' }
        ],
        correctAnswer: 'B',
        explanation: '"The torrential rainstorm" is a noun phrase with no verb. Therefore, the preposition "Despite" is required.',
      },
      {
        question: 'The flight was delayed _______ there was a mechanical issue with the left engine.',
        options: [
          { key: 'A', text: 'because of' },
          { key: 'B', text: 'because' },
          { key: 'C', text: 'due to' },
          { key: 'D', text: 'owing to' }
        ],
        correctAnswer: 'B',
        explanation: 'Introduces a full clause with verb "was": "because there was...".',
      },
      {
        question: 'Mr. Sterling decided to accept the overseas assignment _______ the relocation package was modest.',
        options: [
          { key: 'A', text: 'even though' },
          { key: 'B', text: 'in spite of' },
          { key: 'C', text: 'despite' },
          { key: 'D', text: 'regardless of' }
        ],
        correctAnswer: 'A',
        explanation: '"The relocation package was modest" contains Subject + Verb, requiring the conjunction "even though".',
      },
      {
        question: 'Operations at the manufacturing facility continued smoothly _______ the week-long system migration.',
        options: [
          { key: 'A', text: 'during' },
          { key: 'B', text: 'while' },
          { key: 'C', text: 'whereas' },
          { key: 'D', text: 'as' }
        ],
        correctAnswer: 'A',
        explanation: '"The week-long system migration" is a noun phrase, requiring the preposition "during". "While" requires a clause.',
      },
      {
        question: 'Construction was temporarily suspended _______ severe blizzard warnings issued by meteorologists.',
        options: [
          { key: 'A', text: 'because' },
          { key: 'B', text: 'due to' },
          { key: 'C', text: 'since' },
          { key: 'D', text: 'as' }
        ],
        correctAnswer: 'B',
        explanation: '"Severe blizzard warnings..." is a noun phrase (with past participle modifier "issued"). Requires preposition "due to".',
      }
    ]
  },
  {
    id: 9,
    title: 'Comparatives, Superlatives & Parallel Comparison',
    category: 'Modifiers & Comparison',
    ruleExplanation:
      'Comparatives compare two entities: "adjective-er than" or "more / less + adjective + than". Can be intensified by "much", "far", "significantly", "substantially" (NEVER "very"). Superlatives compare three or more: "the + adjective-est" or "the most + adjective". Equatives use "as + adjective/adverb + as".',
    toeicTrap:
      'Using "very" before a comparative (e.g., "very higher" -> WRONG; use "much higher"). Forgetting "the" before superlatives.',
    practiceItems: [
      {
        question: 'This quarter\'s production costs were _______ lower than projected by the finance department.',
        options: [
          { key: 'A', text: 'very' },
          { key: 'B', text: 'significantly' },
          { key: 'C', text: 'more' },
          { key: 'D', text: 'so' }
        ],
        correctAnswer: 'B',
        explanation: 'Comparatives like "lower" are intensified by adverbs such as "significantly", "much", or "substantially", never "very".',
      },
      {
        question: 'The newest model in our line of commercial printers is _______ energy-efficient on the market.',
        options: [
          { key: 'A', text: 'most' },
          { key: 'B', text: 'the most' },
          { key: 'C', text: 'more' },
          { key: 'D', text: 'as' }
        ],
        correctAnswer: 'B',
        explanation: 'Superlative adjective requires the definite article: "the most energy-efficient".',
      },
      {
        question: 'Our logistics network delivers packages twice as _______ as our nearest competitor.',
        options: [
          { key: 'A', text: 'quick' },
          { key: 'B', text: 'quickly' },
          { key: 'C', text: 'quicker' },
          { key: 'D', text: 'quickest' }
        ],
        correctAnswer: 'B',
        explanation: 'In the equative "as ... as", the word modifies the action verb "delivers", so the adverb "quickly" is required.',
      },
      {
        question: 'The second candidate possessed _______ experience in international trade than the first applicant.',
        options: [
          { key: 'A', text: 'much' },
          { key: 'B', text: 'more' },
          { key: 'C', text: 'most' },
          { key: 'D', text: 'many' }
        ],
        correctAnswer: 'B',
        explanation: 'The presence of "than" requires the comparative form "more experience".',
      },
      {
        question: 'Automating routine data entry has made the audit process far _______ cumbersome for the staff.',
        options: [
          { key: 'A', text: 'less' },
          { key: 'B', text: 'least' },
          { key: 'C', text: 'lesser' },
          { key: 'D', text: 'little' }
        ],
        correctAnswer: 'A',
        explanation: '"Far less + adjective" is a comparative structure expressing degree.',
      }
    ]
  },
  {
    id: 10,
    title: 'Gerunds vs Infinitives in Business Contexts',
    category: 'Verb Complements',
    ruleExplanation:
      'Certain verbs take ONLY gerunds (-ing): consider, suggest, recommend, postpone, delay, avoid, finish, enjoy, mind. Certain verbs take ONLY infinitives (to + base): decide, plan, intend, refuse, agree, manage, promise, afford, offer. After prepositions, ALWAYS use gerunds (e.g., "instead of asking", "look forward to meeting").',
    toeicTrap:
      'The expression "look forward to" ends in a preposition "to", so it requires a GERUND ("look forward to hearing from you"), NOT base verb!',
    practiceItems: [
      {
        question: 'The committee decided to postpone _______ the new marketing campaign until after the holiday season.',
        options: [
          { key: 'A', text: 'launch' },
          { key: 'B', text: 'launching' },
          { key: 'C', text: 'to launch' },
          { key: 'D', text: 'launched' }
        ],
        correctAnswer: 'B',
        explanation: 'The verb "postpone" is followed by a gerund (-ing): "postpone launching".',
      },
      {
        question: 'We look forward to _______ you at the annual leadership conference next month.',
        options: [
          { key: 'A', text: 'meet' },
          { key: 'B', text: 'meeting' },
          { key: 'C', text: 'met' },
          { key: 'D', text: 'have met' }
        ],
        correctAnswer: 'B',
        explanation: 'In "look forward to", "to" is a preposition, which must be followed by a gerund ("meeting").',
      },
      {
        question: 'The architectural firm agreed _______ the building blueprint to incorporate wheelchair ramps.',
        options: [
          { key: 'A', text: 'modify' },
          { key: 'B', text: 'to modify' },
          { key: 'C', text: 'modifying' },
          { key: 'D', text: 'modification' }
        ],
        correctAnswer: 'B',
        explanation: 'The verb "agree" takes an infinitive: "agreed to modify".',
      },
      {
        question: 'Before _______ the building for the night, security personnel must ensure all doors are locked.',
        options: [
          { key: 'A', text: 'leave' },
          { key: 'B', text: 'leaving' },
          { key: 'C', text: 'to leave' },
          { key: 'D', text: 'left' }
        ],
        correctAnswer: 'B',
        explanation: 'After a preposition ("before"), use a gerund: "before leaving".',
      },
      {
        question: 'Management is considering _______ a flexible telecommuting policy for senior analysts.',
        options: [
          { key: 'A', text: 'adopting' },
          { key: 'B', text: 'to adopt' },
          { key: 'C', text: 'adopt' },
          { key: 'D', text: 'adopted' }
        ],
        correctAnswer: 'A',
        explanation: '"Consider" takes a gerund: "considering adopting".',
      }
    ]
  },
  {
    id: 11,
    title: 'Participles as Adjectives (-ing vs -ed)',
    category: 'Modifiers',
    ruleExplanation:
      'Participles can function as adjectives. Present participles (-ing) describe the CAUSING quality (an exciting announcement, an overwhelming workload, demanding clients). Past participles (-ed) describe the EXPERIENCING state (an interested buyer, a pleased manager, damaged merchandise).',
    toeicTrap:
      'Saying "The customers were very satisfying" instead of "satisfied". Inanimate things can also take past participles if they received an action ("revised proposal", "enclosed document").',
    practiceItems: [
      {
        question: 'Please review the _______ itinerary and confirm your flight reservation details.',
        options: [
          { key: 'A', text: 'attach' },
          { key: 'B', text: 'attaching' },
          { key: 'C', text: 'attached' },
          { key: 'D', text: 'attachment' }
        ],
        correctAnswer: 'C',
        explanation: 'Past participle adjective: "the attached itinerary" (the itinerary that has been attached).',
      },
      {
        question: 'The executive director delivered an _______ keynote speech on emerging sustainable technologies.',
        options: [
          { key: 'A', text: 'inspire' },
          { key: 'B', text: 'inspiring' },
          { key: 'C', text: 'inspired' },
          { key: 'D', text: 'inspiration' }
        ],
        correctAnswer: 'B',
        explanation: 'The speech causes inspiration: "an inspiring keynote speech".',
      },
      {
        question: 'Any _______ goods must be returned in their original packaging within 14 days.',
        options: [
          { key: 'A', text: 'defect' },
          { key: 'B', text: 'defective' },
          { key: 'C', text: 'defecting' },
          { key: 'D', text: 'defectively' }
        ],
        correctAnswer: 'B',
        explanation: '"Defective goods" uses standard adjective ending in -ive.',
      },
      {
        question: 'The client expressed that they were extremely _______ with the rapid turnaround time.',
        options: [
          { key: 'A', text: 'satisfying' },
          { key: 'B', text: 'satisfied' },
          { key: 'C', text: 'satisfy' },
          { key: 'D', text: 'satisfaction' }
        ],
        correctAnswer: 'B',
        explanation: 'The client feels satisfaction: "were satisfied with".',
      },
      {
        question: 'Due to _______ demand, the airline added two additional daily flights to Tokyo.',
        options: [
          { key: 'A', text: 'grow' },
          { key: 'B', text: 'growing' },
          { key: 'C', text: 'grown' },
          { key: 'D', text: 'growth' }
        ],
        correctAnswer: 'B',
        explanation: 'Active ongoing participle modifying "demand": "growing demand".',
      }
    ]
  },
  {
    id: 12,
    title: 'Subject-Verb Agreement with Complex Subjects',
    category: 'Agreement',
    ruleExplanation:
      'Singular subjects take singular verbs; plural subjects take plural verbs. Distractions on TOEIC: 1) Prepositional phrases between subject and verb: "A shipment [of electronic components] HAS arrived" (subject is shipment). 2) "Each", "Every", "Neither of", "Either of" take SINGULAR verbs. 3) "A number of" = plural; "The number of" = singular.',
    toeicTrap:
      'Matching the verb with the nearest noun inside a prepositional phrase rather than the actual subject head.',
    practiceItems: [
      {
        question: 'The installation of modern fiber-optic cables _______ scheduled for completion next week.',
        options: [
          { key: 'A', text: 'is' },
          { key: 'B', text: 'are' },
          { key: 'C', text: 'were' },
          { key: 'D', text: 'have been' }
        ],
        correctAnswer: 'A',
        explanation: 'The subject is "The installation" (singular), not "cables". Therefore, "is" is correct.',
      },
      {
        question: 'Each of the participants _______ a comprehensive information packet upon arrival.',
        options: [
          { key: 'A', text: 'receive' },
          { key: 'B', text: 'receives' },
          { key: 'C', text: 'are receiving' },
          { key: 'D', text: 'have received' }
        ],
        correctAnswer: 'B',
        explanation: '"Each of + plural noun" takes a singular verb: "receives".',
      },
      {
        question: 'The number of international tourists visiting the city _______ by 12 percent this year.',
        options: [
          { key: 'A', text: 'has increased' },
          { key: 'B', text: 'have increased' },
          { key: 'C', text: 'are increasing' },
          { key: 'D', text: 'increase' }
        ],
        correctAnswer: 'A',
        explanation: '"The number of" takes a singular verb: "has increased". (Contrast with "A number of", which is plural).',
      },
      {
        question: 'Neither the department manager nor her assistants _______ present at the safety briefing.',
        options: [
          { key: 'A', text: 'was' },
          { key: 'B', text: 'were' },
          { key: 'C', text: 'is' },
          { key: 'D', text: 'has been' }
        ],
        correctAnswer: 'B',
        explanation: 'With "neither... nor", the verb agrees with the closer subject ("assistants" -> plural "were").',
      },
      {
        question: 'A variety of delicious refreshments _______ available during the morning coffee break.',
        options: [
          { key: 'A', text: 'is' },
          { key: 'B', text: 'are' },
          { key: 'C', text: 'was' },
          { key: 'D', text: 'be' }
        ],
        correctAnswer: 'B',
        explanation: '"A variety of + plural noun" takes a plural verb: "are".',
      }
    ]
  },
  {
    id: 13,
    title: 'Modal Verbs in Workplace Politeness & Necessity',
    category: 'Modality',
    ruleExplanation:
      'Modal verbs (can, could, may, might, should, must, will, would) are always followed by the base form of the verb without "to". "Should" expresses advice or expectation; "Must" expresses obligation; "May/Can" expresses permission or possibility. Modal perfect "should have + p.p." expresses an unfulfilled past obligation.',
    toeicTrap:
      'Adding "to" after modal verbs (e.g., "should to attend" -> WRONG; "should attend").',
    practiceItems: [
      {
        question: 'All employees must _______ their security identification badges while on company premises.',
        options: [
          { key: 'A', text: 'display' },
          { key: 'B', text: 'to display' },
          { key: 'C', text: 'displaying' },
          { key: 'D', text: 'displayed' }
        ],
        correctAnswer: 'A',
        explanation: 'Modal verb "must" is followed directly by the base verb "display".',
      },
      {
        question: 'We should have _______ the supplier regarding the defect as soon as the crate arrived.',
        options: [
          { key: 'A', text: 'notify' },
          { key: 'B', text: 'notified' },
          { key: 'C', text: 'notifying' },
          { key: 'D', text: 'notification' }
        ],
        correctAnswer: 'B',
        explanation: '"Should have + past participle" -> "notified".',
      },
      {
        question: 'Visitors may _______ their vehicles in the guest parking lot for up to three hours.',
        options: [
          { key: 'A', text: 'park' },
          { key: 'B', text: 'parked' },
          { key: 'C', text: 'to park' },
          { key: 'D', text: 'parking' }
        ],
        correctAnswer: 'A',
        explanation: 'Modal "may" takes the base verb "park".',
      },
      {
        question: 'Under no circumstances should confidential files _______ unattended on conference tables.',
        options: [
          { key: 'A', text: 'be left' },
          { key: 'B', text: 'leave' },
          { key: 'C', text: 'been left' },
          { key: 'D', text: 'leaving' }
        ],
        correctAnswer: 'A',
        explanation: 'Passive modal structure: "should [subject] be left".',
      },
      {
        question: 'The committee could not _______ on a single location for the annual retreat.',
        options: [
          { key: 'A', text: 'agree' },
          { key: 'B', text: 'agreed' },
          { key: 'C', text: 'agreement' },
          { key: 'D', text: 'agreeing' }
        ],
        correctAnswer: 'A',
        explanation: 'Modal "could not" takes base verb "agree".',
      }
    ]
  },
  {
    id: 14,
    title: 'Pronouns: Subject, Object, Possessive & Reflexive',
    category: 'Pronouns',
    ruleExplanation:
      'Subject pronouns (I, he, she, they) act as subjects. Object pronouns (me, him, her, them) receive actions or follow prepositions. Possessive adjectives (my, his, her, their) precede nouns. Possessive pronouns (mine, his, hers, theirs) replace noun phrases. Reflexive pronouns (himself, themselves) reflect back to the subject or emphasize completion alone ("by herself" = alone).',
    toeicTrap:
      'Using a reflexive pronoun as a subject (e.g., "Myself and Mr. Kim attended" -> WRONG; "Mr. Kim and I attended").',
    practiceItems: [
      {
        question: 'Ms. Alvarez prepared the entire investor presentation by _______.',
        options: [
          { key: 'A', text: 'her' },
          { key: 'B', text: 'hers' },
          { key: 'C', text: 'herself' },
          { key: 'D', text: 'she' }
        ],
        correctAnswer: 'C',
        explanation: 'Idiom "by oneself" means independently: "by herself".',
      },
      {
        question: 'Our engineering department completed its assessment faster than _______ did.',
        options: [
          { key: 'A', text: 'their' },
          { key: 'B', text: 'theirs' },
          { key: 'C', text: 'them' },
          { key: 'D', text: 'themselves' }
        ],
        correctAnswer: 'B',
        explanation: 'Possessive pronoun "theirs" stands for "their engineering department".',
      },
      {
        question: 'The regional manager thanked _______ for our hard work during the product launch.',
        options: [
          { key: 'A', text: 'we' },
          { key: 'B', text: 'us' },
          { key: 'C', text: 'our' },
          { key: 'D', text: 'ourselves' }
        ],
        correctAnswer: 'B',
        explanation: 'Object pronoun receiving the verb "thanked": "thanked us".',
      },
      {
        question: 'The software company updated _______ privacy policy in response to new data regulations.',
        options: [
          { key: 'A', text: 'it' },
          { key: 'B', text: 'its' },
          { key: 'C', text: 'it\'s' },
          { key: 'D', text: 'itself' }
        ],
        correctAnswer: 'B',
        explanation: 'Possessive adjective modifying "privacy policy": "its" (without apostrophe).',
      },
      {
        question: 'The CEO _______ visited the research laboratory to inspect the new prototype.',
        options: [
          { key: 'A', text: 'him' },
          { key: 'B', text: 'himself' },
          { key: 'C', text: 'his' },
          { key: 'D', text: 'he' }
        ],
        correctAnswer: 'B',
        explanation: 'Intensive reflexive pronoun emphasizing the subject: "The CEO himself".',
      }
    ]
  },
  {
    id: 15,
    title: 'Subjunctive Mood & Verbs of Mandate / Suggestion',
    category: 'Subjunctive',
    ruleExplanation:
      'Verbs of demand, recommendation, and necessity (recommend, suggest, request, require, insist, demand, propose, mandate) followed by a "that" clause require the SUBJUNCTIVE BASE FORM (without -s, without past tense, and "be" for passive): "Management recommends that he [be] on time" (NOT "is" or "was").',
    toeicTrap:
      'Adding third-person "-s" or past tense inside the "that" clause (e.g., "The manager requested that she submits the report" -> WRONG! Correct: "that she SUBMIT").',
    practiceItems: [
      {
        question: 'The auditor recommended that the finance team _______ the accounts once more.',
        options: [
          { key: 'A', text: 'verifies' },
          { key: 'B', text: 'verify' },
          { key: 'C', text: 'verified' },
          { key: 'D', text: 'verifying' }
        ],
        correctAnswer: 'B',
        explanation: 'Subjunctive structure after "recommended that": base form "verify".',
      },
      {
        question: 'It is imperative that every candidate _______ on time for the written examination.',
        options: [
          { key: 'A', text: 'is' },
          { key: 'B', text: 'be' },
          { key: 'C', text: 'was' },
          { key: 'D', text: 'are' }
        ],
        correctAnswer: 'B',
        explanation: 'After "It is imperative that...", the subjunctive base form "be" is required.',
      },
      {
        question: 'The safety officer requested that protective eyewear _______ worn inside the assembly area.',
        options: [
          { key: 'A', text: 'is' },
          { key: 'B', text: 'be' },
          { key: 'C', text: 'was' },
          { key: 'D', text: 'being' }
        ],
        correctAnswer: 'B',
        explanation: 'Subjunctive passive: "requested that protective eyewear BE worn".',
      },
      {
        question: 'The president demanded that the supplier _______ the replacement units immediately.',
        options: [
          { key: 'A', text: 'dispatch' },
          { key: 'B', text: 'dispatches' },
          { key: 'C', text: 'dispatched' },
          { key: 'D', text: 'dispatching' }
        ],
        correctAnswer: 'A',
        explanation: 'Base form subjunctive "dispatch" after "demanded that".',
      },
      {
        question: 'It is essential that each employee _______ familiar with the emergency evacuation plan.',
        options: [
          { key: 'A', text: 'become' },
          { key: 'B', text: 'becomes' },
          { key: 'C', text: 'became' },
          { key: 'D', text: 'is becoming' }
        ],
        correctAnswer: 'A',
        explanation: 'Subjunctive base verb "become" after "It is essential that".',
      }
    ]
  },
  {
    id: 16,
    title: 'Parallel Structure & Correlative Conjunctions',
    category: 'Coordination',
    ruleExplanation:
      'Items in a list or connected by coordinating (and, but, or) or correlative conjunctions (both... and, either... or, neither... nor, not only... but also) must have identical grammatical form: noun with noun, gerund with gerund, infinitive with infinitive, adjective with adjective.',
    toeicTrap:
      'Mixing word classes (e.g., "The workshop was informative, engaging, and had lots of fun" -> WRONG! Correct: "...informative, engaging, and enjoyable").',
    practiceItems: [
      {
        question: 'The executive director was known for her leadership, vision, and _______.',
        options: [
          { key: 'A', text: 'integrity' },
          { key: 'B', text: 'honest' },
          { key: 'C', text: 'sincerely' },
          { key: 'D', text: 'reliable' }
        ],
        correctAnswer: 'A',
        explanation: 'Parallel series of three abstract nouns: leadership, vision, and integrity.',
      },
      {
        question: 'The proposed software upgrade is not only cost-effective _______ highly reliable.',
        options: [
          { key: 'A', text: 'and also' },
          { key: 'B', text: 'but also' },
          { key: 'C', text: 'as well as' },
          { key: 'D', text: 'either' }
        ],
        correctAnswer: 'B',
        explanation: 'Correlative pair: "not only... but also".',
      },
      {
        question: 'Applicants must demonstrate proficiency in analyzing market data and _______ financial reports.',
        options: [
          { key: 'A', text: 'compile' },
          { key: 'B', text: 'compiling' },
          { key: 'C', text: 'compiled' },
          { key: 'D', text: 'compilation' }
        ],
        correctAnswer: 'B',
        explanation: 'Parallel gerunds after preposition "in": "analyzing... and compiling".',
      },
      {
        question: 'The retreat offers employees an opportunity to collaborate, brainstorm, and _______ with colleagues.',
        options: [
          { key: 'A', text: 'network' },
          { key: 'B', text: 'networking' },
          { key: 'C', text: 'networked' },
          { key: 'D', text: 'networks' }
        ],
        correctAnswer: 'A',
        explanation: 'Parallel base verbs after "to": "collaborate, brainstorm, and network".',
      },
      {
        question: 'You may pay your invoice either online through our portal _______ by mailing a check.',
        options: [
          { key: 'A', text: 'nor' },
          { key: 'B', text: 'or' },
          { key: 'C', text: 'and' },
          { key: 'D', text: 'also' }
        ],
        correctAnswer: 'B',
        explanation: 'Correlative pair: "either... or".',
      }
    ]
  },
  {
    id: 17,
    title: 'Causative Verbs (Have, Make, Let, Get)',
    category: 'Verb Patterns',
    ruleExplanation:
      'Causatives express causing someone to do something: Have + person + BASE VERB ("I had the plumber fix the pipe"). Make + person + BASE VERB ("The manager made him rewrite the report"). Let + person + BASE VERB ("Let employees leave early"). Get + person + TO-INFINITIVE ("I got the technician to install it"). Passive causative: Have/Get + thing + PAST PARTICIPLE ("I had/got the car repaired").',
    toeicTrap:
      'Using "to" after "have", "make", or "let" (e.g., "She had the assistant to print..." -> WRONG!). Forgetting that "get" requires "to" when active.',
    practiceItems: [
      {
        question: 'The department head had the administrative assistant _______ copies of the agenda.',
        options: [
          { key: 'A', text: 'make' },
          { key: 'B', text: 'to make' },
          { key: 'C', text: 'making' },
          { key: 'D', text: 'made' }
        ],
        correctAnswer: 'A',
        explanation: 'Causative "have + person + base verb": "had the assistant make".',
      },
      {
        question: 'The office manager got a licensed electrician _______ the conference room wiring.',
        options: [
          { key: 'A', text: 'inspect' },
          { key: 'B', text: 'to inspect' },
          { key: 'C', text: 'inspected' },
          { key: 'D', text: 'inspecting' }
        ],
        correctAnswer: 'B',
        explanation: 'Causative "get + person + to-infinitive": "got an electrician to inspect".',
      },
      {
        question: 'Before leaving on business, Mr. Drake had his laptop _______ by the IT team.',
        options: [
          { key: 'A', text: 'upgrade' },
          { key: 'B', text: 'upgraded' },
          { key: 'C', text: 'to upgrade' },
          { key: 'D', text: 'upgrading' }
        ],
        correctAnswer: 'B',
        explanation: 'Passive causative: "had + object [laptop] + past participle [upgraded]".',
      },
      {
        question: 'The strict regulations make all pharmaceutical companies _______ clinical trial results public.',
        options: [
          { key: 'A', text: 'make' },
          { key: 'B', text: 'release' },
          { key: 'C', text: 'to release' },
          { key: 'D', text: 'releasing' }
        ],
        correctAnswer: 'B',
        explanation: 'Causative "make + object + base verb": "make companies release".',
      },
      {
        question: 'The supervisor let the interns _______ the quarterly strategy workshop.',
        options: [
          { key: 'A', text: 'attend' },
          { key: 'B', text: 'to attend' },
          { key: 'C', text: 'attending' },
          { key: 'D', text: 'attended' }
        ],
        correctAnswer: 'A',
        explanation: 'Causative "let + object + base verb": "let the interns attend".',
      }
    ]
  },
  {
    id: 18,
    title: 'Inversion with Negative & Restrictive Adverbials',
    category: 'Inversion',
    ruleExplanation:
      'When negative or restrictive words begin a sentence, the auxiliary verb comes BEFORE the subject (just like a question): Seldom, Rarely, Never, Scarcely, Hardly, Little, Only after, Under no circumstances. Example: "Seldom have we witnessed such growth" (NOT "Seldom we have witnessed").',
    toeicTrap:
      'Using standard subject-verb order after a fronted negative adverbial.',
    practiceItems: [
      {
        question: 'Seldom _______ such rapid adoption of a enterprise software platform.',
        options: [
          { key: 'A', text: 'we have seen' },
          { key: 'B', text: 'have we seen' },
          { key: 'C', text: 'we saw' },
          { key: 'D', text: 'we are seeing' }
        ],
        correctAnswer: 'B',
        explanation: 'Fronted negative adverb "Seldom" triggers subject-auxiliary inversion: "have we seen".',
      },
      {
        question: 'Under no circumstances _______ unauthorized personnel enter the server vault.',
        options: [
          { key: 'A', text: 'may' },
          { key: 'B', text: 'should' },
          { key: 'C', text: 'must' },
          { key: 'D', text: 'shall' }
        ],
        correctAnswer: 'A',
        explanation: 'Negative phrase "Under no circumstances" triggers inversion before subject "unauthorized personnel": "may unauthorized personnel enter".',
      },
      {
        question: 'Only after reviewing the client survey results _______ decide on the advertising campaign.',
        options: [
          { key: 'A', text: 'did the board' },
          { key: 'B', text: 'the board did' },
          { key: 'C', text: 'the board' },
          { key: 'D', text: 'has the board' }
        ],
        correctAnswer: 'A',
        explanation: '"Only after..." at the start of a sentence triggers inversion in the main clause: "did the board decide".',
      },
      {
        question: 'Rarely _______ an applicant with both engineering and finance degrees.',
        options: [
          { key: 'A', text: 'we encounter' },
          { key: 'B', text: 'do we encounter' },
          { key: 'C', text: 'we did encounter' },
          { key: 'D', text: 'encounter we' }
        ],
        correctAnswer: 'B',
        explanation: '"Rarely" triggers inversion: "do we encounter".',
      },
      {
        question: 'Little _______ that the supply chain disruption would last over eight months.',
        options: [
          { key: 'A', text: 'they knew' },
          { key: 'B', text: 'did they know' },
          { key: 'C', text: 'they had known' },
          { key: 'D', text: 'knew they' }
        ],
        correctAnswer: 'B',
        explanation: '"Little" with negative meaning triggers inversion: "did they know".',
      }
    ]
  },
  {
    id: 19,
    title: 'Countable vs Uncountable Nouns in Business',
    category: 'Nouns & Quantifiers',
    ruleExplanation:
      'Uncountable nouns in business English CANNOT take an indefinite article ("a/an") or be made plural with "-s". Essential TOEIC uncountables: information, equipment, luggage/baggage, advice, merchandise, furniture, machinery, stationery, research, funding, feedback. Use "much/little/amount of" for uncountables; use "many/few/number of" for countables.',
    toeicTrap:
      'Adding "-s" to uncountables (e.g., "informations" or "furnitures" -> NEVER valid in English). Choosing "many equipments" instead of "much equipment" or "pieces of equipment".',
    practiceItems: [
      {
        question: 'The newly opened distribution hub has acquired modern robotic _______.',
        options: [
          { key: 'A', text: 'equipment' },
          { key: 'B', text: 'equipments' },
          { key: 'C', text: 'piece of equipment' },
          { key: 'D', text: 'an equipment' }
        ],
        correctAnswer: 'A',
        explanation: '"Equipment" is an uncountable noun. It never takes plural -s and cannot be preceded by "an".',
      },
      {
        question: 'The consultant provided valuable _______ on how to streamline accounting procedures.',
        options: [
          { key: 'A', text: 'advices' },
          { key: 'B', text: 'advice' },
          { key: 'C', text: 'an advice' },
          { key: 'D', text: 'advises' }
        ],
        correctAnswer: 'B',
        explanation: '"Advice" is uncountable. It cannot take plural "s" or "an".',
      },
      {
        question: 'For further _______ regarding the warranty policy, please visit our customer support webpage.',
        options: [
          { key: 'A', text: 'information' },
          { key: 'B', text: 'informations' },
          { key: 'C', text: 'an information' },
          { key: 'D', text: 'inform' }
        ],
        correctAnswer: 'A',
        explanation: '"Information" is uncountable in English.',
      },
      {
        question: 'Due to automated assembly lines, a significant _______ of manual labor has been eliminated.',
        options: [
          { key: 'A', text: 'number' },
          { key: 'B', text: 'amount' },
          { key: 'C', text: 'many' },
          { key: 'D', text: 'few' }
        ],
        correctAnswer: 'B',
        explanation: 'Labor is uncountable; use "amount of" (not "number of").',
      },
      {
        question: 'All promotional _______ displayed on the showroom floor is discounted by twenty percent.',
        options: [
          { key: 'A', text: 'merchandise' },
          { key: 'B', text: 'merchandises' },
          { key: 'C', text: 'product' },
          { key: 'D', text: 'item' }
        ],
        correctAnswer: 'A',
        explanation: '"Merchandise" is uncountable (and matches singular verb "is"). "Product" or "item" would require "items/products are".',
      }
    ]
  },
  {
    id: 20,
    title: 'Conjunctive Adverbs & Discourse Transitions',
    category: 'Cohesion & Transitions',
    ruleExplanation:
      'Conjunctive adverbs connect two independent clauses (separated by a semicolon and comma, or starting a new sentence): Contrast (However, Nevertheless, In contrast, On the other hand), Result/Cause (Consequently, Therefore, Thus, As a result), Addition (Furthermore, In addition, Moreover), Condition/Time (Otherwise, Meanwhile, Subsequently).',
    toeicTrap:
      'Treating conjunctive adverbs as subordinate conjunctions. You cannot say "However it rained, we went." You must say "Although it rained, we went" OR "It rained. However, we went."',
    practiceItems: [
      {
        question: 'The marketing budget was cut substantially; _______, our advertising reach increased due to viral social media campaigns.',
        options: [
          { key: 'A', text: 'nevertheless' },
          { key: 'B', text: 'therefore' },
          { key: 'C', text: 'furthermore' },
          { key: 'D', text: 'similarly' }
        ],
        correctAnswer: 'A',
        explanation: 'Connects two contrasting statements: budget cut vs reach increased. "Nevertheless" denotes contrast.',
      },
      {
        question: 'Please submit the signed agreement by 5:00 P.M.; _______, the delivery will be delayed until Monday.',
        options: [
          { key: 'A', text: 'otherwise' },
          { key: 'B', text: 'consequently' },
          { key: 'C', text: 'in fact' },
          { key: 'D', text: 'likewise' }
        ],
        correctAnswer: 'A',
        explanation: '"Otherwise" expresses the negative consequence if the condition is not met.',
      },
      {
        question: 'The firm invested heavily in employee training programs. _______, staff retention rates reached an all-time high.',
        options: [
          { key: 'A', text: 'As a result' },
          { key: 'B', text: 'In spite of' },
          { key: 'C', text: 'On the contrary' },
          { key: 'D', text: 'Whereas' }
        ],
        correctAnswer: 'A',
        explanation: 'Retention is the direct result of the investment: "As a result" or "Consequently".',
      },
      {
        question: 'The new model features a faster processor. _______, it consumes 30 percent less electrical power.',
        options: [
          { key: 'A', text: 'Furthermore' },
          { key: 'B', text: 'However' },
          { key: 'C', text: 'Instead' },
          { key: 'D', text: 'Unless' }
        ],
        correctAnswer: 'A',
        explanation: 'Adds another positive feature to the first one: "Furthermore" / "In addition".',
      },
      {
        question: 'Senior engineers were inspecting the turbine; _______, junior technicians were calibrating the sensors.',
        options: [
          { key: 'A', text: 'meanwhile' },
          { key: 'B', text: 'therefore' },
          { key: 'C', text: 'despite' },
          { key: 'D', text: 'although' }
        ],
        correctAnswer: 'A',
        explanation: '"Meanwhile" describes two actions occurring at the same time.',
      }
    ]
  }
];

export const GRAMMAR_LESSONS: GrammarLesson[] = (() => {
  const flat = balanceFlat(RAW_GRAMMAR_LESSONS.flatMap(l => l.practiceItems), 9);
  let i = 0;
  return RAW_GRAMMAR_LESSONS.map(l => ({ ...l, practiceItems: l.practiceItems.map(() => flat[i++]) }));
})();
