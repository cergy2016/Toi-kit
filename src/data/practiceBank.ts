import { balanceFlat, balanceNested } from './balance';
import part5Extra from '../content/part5_extra.json';
import part1Extra from '../content/part1_extra.json';
import part2Extra from '../content/part2_extra.json';
import part3Extra from '../content/part3_extra.json';
import part4Extra from '../content/part4_extra.json';
import part6Extra from '../content/part6_extra.json';
import part7Extra from '../content/part7_extra.json';
import { PracticeQuestion, Part6Passage, Part7Passage, ListeningItem } from '../types';

// ==========================================
// PART 5: 60 ORIGINAL QUESTIONS
// ==========================================
const RAW_PART_5_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'p5-01',
    part: 5,
    category: 'Word Form - Adverb',
    difficulty: 'Intermediate (750)',
    questionText: 'The quality assurance team _______ inspects every batch of medical sensors before packaging.',
    options: [
      { key: 'A', text: 'rigor' },
      { key: 'B', text: 'rigorous' },
      { key: 'C', text: 'rigorously' },
      { key: 'D', text: 'rigorousness' }
    ],
    correctAnswer: 'C',
    explanation: 'The blank modifies the verb "inspects". An adverb ("rigorously") is required to describe how the inspection is performed.'
  },
  {
    id: 'p5-02',
    part: 5,
    category: 'Conjunction vs Preposition',
    difficulty: 'Intermediate (750)',
    questionText: '_______ the sudden snowfall, the courier arrived at the loading dock on schedule.',
    options: [
      { key: 'A', text: 'Although' },
      { key: 'B', text: 'Despite' },
      { key: 'C', text: 'Even though' },
      { key: 'D', text: 'Whereas' }
    ],
    correctAnswer: 'B',
    explanation: '"The sudden snowfall" is a noun phrase with no verb. "Despite" is a preposition introducing a noun phrase. "Although", "Even though", and "Whereas" are conjunctions requiring a subject and verb.'
  },
  {
    id: 'p5-03',
    part: 5,
    category: 'Dependent Preposition',
    difficulty: 'Elementary (500)',
    questionText: 'All laboratory technicians must strictly adhere _______ safety protocols when handling volatile solvents.',
    options: [
      { key: 'A', text: 'to' },
      { key: 'B', text: 'with' },
      { key: 'C', text: 'on' },
      { key: 'D', text: 'at' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "adhere" pairs with the dependent preposition "to" ("adhere to rules/protocols").'
  },
  {
    id: 'p5-04',
    part: 5,
    category: 'Verb Tense - Future Time Clause',
    difficulty: 'Advanced (900)',
    questionText: 'As soon as the regional director _______ at the branch, the awards banquet will commence.',
    options: [
      { key: 'A', text: 'will arrive' },
      { key: 'B', text: 'arrives' },
      { key: 'C', text: 'arrived' },
      { key: 'D', text: 'is arriving' }
    ],
    correctAnswer: 'B',
    explanation: 'In subordinate adverbial time clauses introduced by "as soon as", the simple present tense ("arrives") is used to express future meaning.'
  },
  {
    id: 'p5-05',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The boutique investment firm specializes in helping green tech startups _______ venture capital.',
    options: [
      { key: 'A', text: 'procure' },
      { key: 'B', text: 'relinquish' },
      { key: 'C', text: 'depreciate' },
      { key: 'D', text: 'forfeit' }
    ],
    correctAnswer: 'A',
    explanation: '"Procure" means to obtain or secure capital or goods through effort. The other words have negative or contradictory meanings (relinquish = give up; depreciate = lose value; forfeit = surrender).'
  },
  {
    id: 'p5-06',
    part: 5,
    category: 'Subject-Verb Agreement',
    difficulty: 'Intermediate (750)',
    questionText: 'A detailed inventory of warehouse spare parts _______ conducted every Friday afternoon.',
    options: [
      { key: 'A', text: 'are' },
      { key: 'B', text: 'is' },
      { key: 'C', text: 'were' },
      { key: 'D', text: 'have been' }
    ],
    correctAnswer: 'B',
    explanation: 'The subject is the singular noun phrase "A detailed inventory", not the plural prepositional object "parts". Therefore, the singular verb "is" is correct.'
  },
  {
    id: 'p5-07',
    part: 5,
    category: 'Word Form - Adjective',
    difficulty: 'Elementary (500)',
    questionText: 'Mr. Tanaka delivered a _______ presentation outlining the firm\'s quarterly financial accomplishments.',
    options: [
      { key: 'A', text: 'persuade' },
      { key: 'B', text: 'persuasive' },
      { key: 'C', text: 'persuasively' },
      { key: 'D', text: 'persuasion' }
    ],
    correctAnswer: 'B',
    explanation: 'An adjective is required between the indefinite article "a" and the noun "presentation": "persuasive".'
  },
  {
    id: 'p5-08',
    part: 5,
    category: 'Relative Pronoun',
    difficulty: 'Intermediate (750)',
    questionText: 'The research chemist _______ patent application was approved will lead the new pharmaceutical lab.',
    options: [
      { key: 'A', text: 'who' },
      { key: 'B', text: 'whom' },
      { key: 'C', text: 'whose' },
      { key: 'D', text: 'which' }
    ],
    correctAnswer: 'C',
    explanation: 'Possessive relative pronoun "whose" shows ownership of the following noun phrase "patent application".'
  },
  {
    id: 'p5-09',
    part: 5,
    category: 'Preposition of Time',
    difficulty: 'Elementary (500)',
    questionText: 'All travel expense reimbursement forms must be submitted to human resources _______ Friday at 5:00 P.M.',
    options: [
      { key: 'A', text: 'by' },
      { key: 'B', text: 'until' },
      { key: 'C', text: 'for' },
      { key: 'D', text: 'during' }
    ],
    correctAnswer: 'A',
    explanation: '"By" indicates a strict deadline (at or before). "Until" describes an ongoing state up to a time.'
  },
  {
    id: 'p5-10',
    part: 5,
    category: 'Inversion',
    difficulty: 'Advanced (900)',
    questionText: '_______ you experience any difficulties accessing the cloud server, please notify IT support immediately.',
    options: [
      { key: 'A', text: 'Should' },
      { key: 'B', text: 'Would' },
      { key: 'C', text: 'Could' },
      { key: 'D', text: 'Were' }
    ],
    correctAnswer: 'A',
    explanation: 'Inverted first conditional: "Should you experience..." replaces "If you should experience...".'
  },
  {
    id: 'p5-11',
    part: 5,
    category: 'Participle as Adjective',
    difficulty: 'Intermediate (750)',
    questionText: 'Please refer to the _______ diagram for step-by-step instructions on assembling the office desk.',
    options: [
      { key: 'A', text: 'attach' },
      { key: 'B', text: 'attached' },
      { key: 'C', text: 'attaching' },
      { key: 'D', text: 'attachment' }
    ],
    correctAnswer: 'B',
    explanation: 'The past participle "attached" functions as an adjective modifying "diagram" (the diagram that has been attached).'
  },
  {
    id: 'p5-12',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The proposed factory expansion is _______ upon receiving environmental approval from the municipal council.',
    options: [
      { key: 'A', text: 'contingent' },
      { key: 'B', text: 'redundant' },
      { key: 'C', text: 'subprime' },
      { key: 'D', text: 'perpetual' }
    ],
    correctAnswer: 'A',
    explanation: '"Contingent upon" is a common business collocation meaning dependent on a certain condition occurring.'
  },
  {
    id: 'p5-13',
    part: 5,
    category: 'Gerund vs Infinitive',
    difficulty: 'Intermediate (750)',
    questionText: 'Management decided to postpone _______ the new marketing software until staff complete training.',
    options: [
      { key: 'A', text: 'roll out' },
      { key: 'B', text: 'rolling out' },
      { key: 'C', text: 'to roll out' },
      { key: 'D', text: 'rolled out' }
    ],
    correctAnswer: 'B',
    explanation: 'The verb "postpone" takes a gerund (-ing) complement: "postpone rolling out".'
  },
  {
    id: 'p5-14',
    part: 5,
    category: 'Pronoun - Reflexive',
    difficulty: 'Elementary (500)',
    questionText: 'Ms. Diaz completed the complex financial audit entirely by _______ before the audit deadline.',
    options: [
      { key: 'A', text: 'her' },
      { key: 'B', text: 'hers' },
      { key: 'C', text: 'herself' },
      { key: 'D', text: 'she' }
    ],
    correctAnswer: 'C',
    explanation: 'The idiom "by oneself" denotes independent effort: "by herself".'
  },
  {
    id: 'p5-15',
    part: 5,
    category: 'Subjunctive Mood',
    difficulty: 'Advanced (900)',
    questionText: 'The lead auditor recommended that the billing team _______ all foreign wire transactions.',
    options: [
      { key: 'A', text: 'verifies' },
      { key: 'B', text: 'verify' },
      { key: 'C', text: 'verified' },
      { key: 'D', text: 'verifying' }
    ],
    correctAnswer: 'B',
    explanation: 'Verbs of recommendation ("recommended that...") require the subjunctive base form verb: "verify".'
  },
  {
    id: 'p5-16',
    part: 5,
    category: 'Comparatives',
    difficulty: 'Intermediate (750)',
    questionText: 'This fiscal quarter\'s operating costs were _______ lower than projected by the accounting department.',
    options: [
      { key: 'A', text: 'very' },
      { key: 'B', text: 'significantly' },
      { key: 'C', text: 'more' },
      { key: 'D', text: 'so' }
    ],
    correctAnswer: 'B',
    explanation: 'Comparative adjectives like "lower" are intensified by adverbs such as "significantly", "much", or "far", never "very".'
  },
  {
    id: 'p5-17',
    part: 5,
    category: 'Correlative Conjunctions',
    difficulty: 'Elementary (500)',
    questionText: 'Clients can pay their monthly subscription fees _______ online through the portal or by paper check.',
    options: [
      { key: 'A', text: 'both' },
      { key: 'B', text: 'neither' },
      { key: 'C', text: 'either' },
      { key: 'D', text: 'not only' }
    ],
    correctAnswer: 'C',
    explanation: 'The paired correlative conjunction for "... or" is "either": "either ... or ...".'
  },
  {
    id: 'p5-18',
    part: 5,
    category: 'Word Form - Noun',
    difficulty: 'Elementary (500)',
    questionText: 'Customer satisfaction _______ have risen steadily following the implementation of 24/7 chat support.',
    options: [
      { key: 'A', text: 'rates' },
      { key: 'B', text: 'rated' },
      { key: 'C', text: 'rating' },
      { key: 'D', text: 'rateable' }
    ],
    correctAnswer: 'A',
    explanation: 'A plural noun subject is required to match the plural verb "have risen": "Customer satisfaction rates".'
  },
  {
    id: 'p5-19',
    part: 5,
    category: 'Uncountable Noun',
    difficulty: 'Intermediate (750)',
    questionText: 'The consultant provided insightful _______ regarding strategies to improve factory assembly line throughput.',
    options: [
      { key: 'A', text: 'advice' },
      { key: 'B', text: 'advices' },
      { key: 'C', text: 'an advice' },
      { key: 'D', text: 'advises' }
    ],
    correctAnswer: 'A',
    explanation: '"Advice" is an uncountable noun in English. It cannot be pluralized with -s or preceded by "an".'
  },
  {
    id: 'p5-20',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The legal department reviewed the non-disclosure clause to ensure it was legally _______ in all fifty states.',
    options: [
      { key: 'A', text: 'enforceable' },
      { key: 'B', text: 'exhaustible' },
      { key: 'C', text: 'inflated' },
      { key: 'D', text: 'tentative' }
    ],
    correctAnswer: 'A',
    explanation: '"Legally enforceable" is the established legal/business collocation meaning able to be upheld in court.'
  },
  {
    id: 'p5-21',
    part: 5,
    category: 'Preposition of Duration',
    difficulty: 'Intermediate (750)',
    questionText: 'Network engineers worked diligently _______ the weekend to restore connectivity to the European branches.',
    options: [
      { key: 'A', text: 'throughout' },
      { key: 'B', text: 'between' },
      { key: 'C', text: 'among' },
      { key: 'D', text: 'since' }
    ],
    correctAnswer: 'A',
    explanation: '"Throughout" signifies continuous activity during the entire period of the weekend.'
  },
  {
    id: 'p5-22',
    part: 5,
    category: 'Dependent Preposition',
    difficulty: 'Intermediate (750)',
    questionText: 'Only employees with at least one year of tenure are eligible _______ company-sponsored tuition assistance.',
    options: [
      { key: 'A', text: 'to' },
      { key: 'B', text: 'for' },
      { key: 'C', text: 'with' },
      { key: 'D', text: 'by' }
    ],
    correctAnswer: 'B',
    explanation: 'The adjective "eligible" takes the preposition "for" before a noun phrase: "eligible for tuition assistance".'
  },
  {
    id: 'p5-23',
    part: 5,
    category: 'Verb Tense - Present Perfect',
    difficulty: 'Elementary (500)',
    questionText: 'Over the past six months, our supply chain division _______ shipping lead times by nearly 30 percent.',
    options: [
      { key: 'A', text: 'reduces' },
      { key: 'B', text: 'has reduced' },
      { key: 'C', text: 'reducing' },
      { key: 'D', text: 'reduce' }
    ],
    correctAnswer: 'B',
    explanation: 'The time phrase "Over the past six months" requires the present perfect tense ("has reduced") to denote ongoing impact.'
  },
  {
    id: 'p5-24',
    part: 5,
    category: 'Causative Verb',
    difficulty: 'Advanced (900)',
    questionText: 'The operations manager had the certified technician _______ the emergency backup generators.',
    options: [
      { key: 'A', text: 'test' },
      { key: 'B', text: 'tested' },
      { key: 'C', text: 'to test' },
      { key: 'D', text: 'testing' }
    ],
    correctAnswer: 'A',
    explanation: 'Active causative structure: "had + person + base verb" -> "had the technician test".'
  },
  {
    id: 'p5-25',
    part: 5,
    category: 'Conjunctive Adverb',
    difficulty: 'Intermediate (750)',
    questionText: 'Sales in retail stores fell slightly; _______, online digital purchases expanded by more than 40 percent.',
    options: [
      { key: 'A', text: 'nevertheless' },
      { key: 'B', text: 'therefore' },
      { key: 'C', text: 'furthermore' },
      { key: 'D', text: 'similarly' }
    ],
    correctAnswer: 'A',
    explanation: '"Nevertheless" introduces a contrasting, compensatory positive outcome after the negative sales decline.'
  },
  {
    id: 'p5-26',
    part: 5,
    category: 'Word Form - Verb',
    difficulty: 'Elementary (500)',
    questionText: 'The human resources committee plans to _______ three candidates for the regional sales position.',
    options: [
      { key: 'A', text: 'interview' },
      { key: 'B', text: 'interviewed' },
      { key: 'C', text: 'interviewing' },
      { key: 'D', text: 'interviewer' }
    ],
    correctAnswer: 'A',
    explanation: 'After the infinitive marker "to", use the base form of the verb: "to interview".'
  },
  {
    id: 'p5-27',
    part: 5,
    category: 'Passive Voice',
    difficulty: 'Elementary (500)',
    questionText: 'The commemorative plaque was _______ to Dr. Patel during the annual alumni banquet.',
    options: [
      { key: 'A', text: 'present' },
      { key: 'B', text: 'presented' },
      { key: 'C', text: 'presenting' },
      { key: 'D', text: 'presentation' }
    ],
    correctAnswer: 'B',
    explanation: 'Passive past structure: "was + past participle" -> "was presented".'
  },
  {
    id: 'p5-28',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'Automating the repetitive data entry process will significantly reduce operational _______ for the firm.',
    options: [
      { key: 'A', text: 'overhead' },
      { key: 'B', text: 'endorsement' },
      { key: 'C', text: 'concession' },
      { key: 'D', text: 'jurisdiction' }
    ],
    correctAnswer: 'A',
    explanation: '"Overhead" refers to ongoing business operational costs. Reducing overhead is a central business goal.'
  },
  {
    id: 'p5-29',
    part: 5,
    category: 'Reduced Relative Clause',
    difficulty: 'Advanced (900)',
    questionText: 'Goods _______ during maritime transit are fully protected under our comprehensive shipping insurance.',
    options: [
      { key: 'A', text: 'damaging' },
      { key: 'B', text: 'damaged' },
      { key: 'C', text: 'damage' },
      { key: 'D', text: 'are damaged' }
    ],
    correctAnswer: 'B',
    explanation: 'Reduced passive relative clause: "Goods [which were] damaged during transit".'
  },
  {
    id: 'p5-30',
    part: 5,
    category: 'Preposition vs Conjunction',
    difficulty: 'Intermediate (750)',
    questionText: 'Production was temporarily halted _______ a mechanical defect in the primary conveyer system.',
    options: [
      { key: 'A', text: 'because of' },
      { key: 'B', text: 'because' },
      { key: 'C', text: 'since' },
      { key: 'D', text: 'as' }
    ],
    correctAnswer: 'A',
    explanation: '"A mechanical defect in the primary conveyer system" is a noun phrase, requiring the preposition "because of".'
  },
  {
    id: 'p5-31',
    part: 5,
    category: 'Word Form - Adverb',
    difficulty: 'Intermediate (750)',
    questionText: 'The newly appointed director responded _______ to all press inquiries regarding the merger.',
    options: [
      { key: 'A', text: 'courteous' },
      { key: 'B', text: 'courteously' },
      { key: 'C', text: 'courtesy' },
      { key: 'D', text: 'courteousness' }
    ],
    correctAnswer: 'B',
    explanation: 'The blank modifies the verb "responded". An adverb ("courteously") is required.'
  },
  {
    id: 'p5-32',
    part: 5,
    category: 'Quantifiers',
    difficulty: 'Intermediate (750)',
    questionText: 'The board spent a considerable _______ of time reviewing the quarterly sustainability metrics.',
    options: [
      { key: 'A', text: 'amount' },
      { key: 'B', text: 'number' },
      { key: 'C', text: 'many' },
      { key: 'D', text: 'few' }
    ],
    correctAnswer: 'A',
    explanation: '"Time" is uncountable here, taking "amount of" rather than "number of".'
  },
  {
    id: 'p5-33',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Intermediate (750)',
    questionText: 'The airline offers complimentary meal vouchers to passengers affected by flight _______.',
    options: [
      { key: 'A', text: 'cancellations' },
      { key: 'B', text: 'conventions' },
      { key: 'C', text: 'configurations' },
      { key: 'D', text: 'credentials' }
    ],
    correctAnswer: 'A',
    explanation: '"Flight cancellations" is the logical travel context for issuing meal vouchers.'
  },
  {
    id: 'p5-34',
    part: 5,
    category: 'Parallel Structure',
    difficulty: 'Intermediate (750)',
    questionText: 'The executive retreat aims to foster creativity, enhance collaboration, and _______ team communication.',
    options: [
      { key: 'A', text: 'strengthen' },
      { key: 'B', text: 'strengthening' },
      { key: 'C', text: 'strengthened' },
      { key: 'D', text: 'strength' }
    ],
    correctAnswer: 'A',
    explanation: 'Parallel structure with "foster" and "enhance": requires base verb "strengthen".'
  },
  {
    id: 'p5-35',
    part: 5,
    category: 'Preposition of Condition',
    difficulty: 'Elementary (500)',
    questionText: 'Please review the enclosed contract carefully _______ signing and dating the final page.',
    options: [
      { key: 'A', text: 'before' },
      { key: 'B', text: 'during' },
      { key: 'C', text: 'between' },
      { key: 'D', text: 'with' }
    ],
    correctAnswer: 'A',
    explanation: '"Before" + gerund ("before signing") denotes the chronological sequence required.'
  },
  {
    id: 'p5-36',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The CEO emphasized that customer retention remains the company\'s _______ priority for 2026.',
    options: [
      { key: 'A', text: 'foremost' },
      { key: 'B', text: 'tentative' },
      { key: 'C', text: 'subordinate' },
      { key: 'D', text: 'preliminary' }
    ],
    correctAnswer: 'A',
    explanation: '"Foremost priority" is a common business collocation meaning the highest or primary priority.'
  },
  {
    id: 'p5-37',
    part: 5,
    category: 'Dependent Preposition',
    difficulty: 'Intermediate (750)',
    questionText: 'The corporate security department specializes _______ investigating unauthorized digital data breaches.',
    options: [
      { key: 'A', text: 'in' },
      { key: 'B', text: 'at' },
      { key: 'C', text: 'on' },
      { key: 'D', text: 'for' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "specialize" takes the preposition "in" ("specialize in investigating").'
  },
  {
    id: 'p5-38',
    part: 5,
    category: 'Negative Inversion',
    difficulty: 'Advanced (900)',
    questionText: 'Rarely _______ seen such rapid adoption of a corporate enterprise cloud platform.',
    options: [
      { key: 'A', text: 'we have' },
      { key: 'B', text: 'have we' },
      { key: 'C', text: 'we had' },
      { key: 'D', text: 'we did' }
    ],
    correctAnswer: 'B',
    explanation: 'Fronted negative adverbial "Rarely" triggers subject-auxiliary inversion: "have we seen".'
  },
  {
    id: 'p5-39',
    part: 5,
    category: 'Word Form - Noun',
    difficulty: 'Elementary (500)',
    questionText: 'Successful candidates must demonstrate exceptional _______ in written business communication.',
    options: [
      { key: 'A', text: 'proficient' },
      { key: 'B', text: 'proficiency' },
      { key: 'C', text: 'proficiently' },
      { key: 'D', text: 'proficiencies' }
    ],
    correctAnswer: 'B',
    explanation: 'Following the adjective "exceptional", an abstract noun is required: "proficiency".'
  },
  {
    id: 'p5-40',
    part: 5,
    category: 'Verb Tense - Conditional',
    difficulty: 'Intermediate (750)',
    questionText: 'If the software upgrade _______ tested properly last month, the system crash would not have occurred.',
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'has been' },
      { key: 'C', text: 'had been' },
      { key: 'D', text: 'would be' }
    ],
    correctAnswer: 'C',
    explanation: 'Third conditional (past unreal): "If + past perfect (had been tested) ... would not have occurred".'
  },
  {
    id: 'p5-41',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Intermediate (750)',
    questionText: 'The marketing manager requested an itemized _______ for the exhibition booth construction.',
    options: [
      { key: 'A', text: 'receipt' },
      { key: 'B', text: 'estimate' },
      { key: 'C', text: 'agenda' },
      { key: 'D', text: 'manifest' }
    ],
    correctAnswer: 'B',
    explanation: 'Before work commences, clients request an "itemized estimate" (or cost quote).'
  },
  {
    id: 'p5-42',
    part: 5,
    category: 'Word Form - Adjective',
    difficulty: 'Intermediate (750)',
    questionText: 'The committee praised Dr. Ross for presenting a remarkably _______ solution to the logistics issue.',
    options: [
      { key: 'A', text: 'innovate' },
      { key: 'B', text: 'innovative' },
      { key: 'C', text: 'innovatively' },
      { key: 'D', text: 'innovation' }
    ],
    correctAnswer: 'B',
    explanation: 'Adjective required between adverb "remarkably" and noun "solution": "innovative".'
  },
  {
    id: 'p5-43',
    part: 5,
    category: 'Dependent Preposition',
    difficulty: 'Elementary (500)',
    questionText: 'Conference attendees are kindly requested to refrain _______ taking flash photographs during speeches.',
    options: [
      { key: 'A', text: 'from' },
      { key: 'B', text: 'to' },
      { key: 'C', text: 'by' },
      { key: 'D', text: 'with' }
    ],
    correctAnswer: 'A',
    explanation: '"Refrain from + gerund" is the standard formal polite expression for abstaining.'
  },
  {
    id: 'p5-44',
    part: 5,
    category: 'Pronouns - Possessive',
    difficulty: 'Elementary (500)',
    questionText: 'The multinational pharmaceutical firm decided to expand _______ research facilities in Switzerland.',
    options: [
      { key: 'A', text: 'its' },
      { key: 'B', text: 'it\'s' },
      { key: 'C', text: 'their' },
      { key: 'D', text: 'itself' }
    ],
    correctAnswer: 'A',
    explanation: 'Possessive adjective referring to the singular entity "firm": "its" (without apostrophe).'
  },
  {
    id: 'p5-45',
    part: 5,
    category: 'Preposition of Deadline',
    difficulty: 'Elementary (500)',
    questionText: 'All defective merchandise will be refunded or replaced _______ thirty days of purchase.',
    options: [
      { key: 'A', text: 'within' },
      { key: 'B', text: 'between' },
      { key: 'C', text: 'during' },
      { key: 'D', text: 'while' }
    ],
    correctAnswer: 'A',
    explanation: '"Within + time duration" denotes inside that period (within thirty days).'
  },
  {
    id: 'p5-46',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The newly drafted distribution contract includes a strict confidentiality _______ to protect trade secrets.',
    options: [
      { key: 'A', text: 'clause' },
      { key: 'B', text: 'toll' },
      { key: 'C', text: 'voucher' },
      { key: 'D', text: 'itinerary' }
    ],
    correctAnswer: 'A',
    explanation: '"Confidentiality clause" is the formal legal term for a provision protecting trade secrets.'
  },
  {
    id: 'p5-47',
    part: 5,
    category: 'Word Form - Adverb',
    difficulty: 'Elementary (500)',
    questionText: 'Technicians worked _______ throughout the night to replace the damaged fiber-optic lines.',
    options: [
      { key: 'A', text: 'tireless' },
      { key: 'B', text: 'tirelessly' },
      { key: 'C', text: 'tirelessness' },
      { key: 'D', text: 'tired' }
    ],
    correctAnswer: 'B',
    explanation: 'Modifies the intransitive verb "worked": requires adverb "tirelessly".'
  },
  {
    id: 'p5-48',
    part: 5,
    category: 'Verb Complements',
    difficulty: 'Intermediate (750)',
    questionText: 'The chief executive looks forward to _______ the prospective buyers at the trade expo.',
    options: [
      { key: 'A', text: 'meet' },
      { key: 'B', text: 'meeting' },
      { key: 'C', text: 'met' },
      { key: 'D', text: 'have met' }
    ],
    correctAnswer: 'B',
    explanation: 'In "look forward to", "to" is a preposition, which requires a gerund (-ing): "meeting".'
  },
  {
    id: 'p5-49',
    part: 5,
    category: 'Subject-Verb Agreement',
    difficulty: 'Intermediate (750)',
    questionText: 'Neither the branch supervisor nor the regional managers _______ aware of the revised shipping schedule.',
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'has been' }
    ],
    correctAnswer: 'B',
    explanation: 'In "neither... nor", the verb agrees with the closer subject ("regional managers" -> plural "were").'
  },
  {
    id: 'p5-50',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'Rising fuel prices have forced the courier company to add a temporary _______ to express deliveries.',
    options: [
      { key: 'A', text: 'surcharge' },
      { key: 'B', text: 'appraisal' },
      { key: 'C', text: 'turnout' },
      { key: 'D', text: 'severance' }
    ],
    correctAnswer: 'A',
    explanation: '"Fuel surcharge" is the standard additional fee applied to shipping to cover rising fuel costs.'
  },
  {
    id: 'p5-51',
    part: 5,
    category: 'Word Form - Verb',
    difficulty: 'Elementary (500)',
    questionText: 'The project manager asked the team to _______ their weekly progress reports by noon.',
    options: [
      { key: 'A', text: 'finalize' },
      { key: 'B', text: 'final' },
      { key: 'C', text: 'finally' },
      { key: 'D', text: 'finalization' }
    ],
    correctAnswer: 'A',
    explanation: '"Ask someone to + base verb": "to finalize".'
  },
  {
    id: 'p5-52',
    part: 5,
    category: 'Conjunction of Reason',
    difficulty: 'Intermediate (750)',
    questionText: '_______ the factory had achieved record safety milestones, all line workers were awarded extra leave.',
    options: [
      { key: 'A', text: 'Since' },
      { key: 'B', text: 'Due to' },
      { key: 'C', text: 'Despite' },
      { key: 'D', text: 'Regardless' }
    ],
    correctAnswer: 'A',
    explanation: 'Introduces a clause [Subject + Verb] expressing reason: "Since the factory had achieved...".'
  },
  {
    id: 'p5-53',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Intermediate (750)',
    questionText: 'The annual shareholder meeting reached a _______ after four ballots yielded identical results.',
    options: [
      { key: 'A', text: 'deadlock' },
      { key: 'B', text: 'deficit' },
      { key: 'C', text: 'detour' },
      { key: 'D', text: 'demographic' }
    ],
    correctAnswer: 'A',
    explanation: '"Reached a deadlock" means arrived at a complete stalemate where no progress can occur.'
  },
  {
    id: 'p5-54',
    part: 5,
    category: 'Superlative',
    difficulty: 'Elementary (500)',
    questionText: 'Apex Energy was recognized as _______ reliable power utility company in the Pacific Northwest.',
    options: [
      { key: 'A', text: 'most' },
      { key: 'B', text: 'the most' },
      { key: 'C', text: 'more' },
      { key: 'D', text: 'mostly' }
    ],
    correctAnswer: 'B',
    explanation: 'Superlatives require the definite article: "the most reliable".'
  },
  {
    id: 'p5-55',
    part: 5,
    category: 'Word Form - Noun',
    difficulty: 'Elementary (500)',
    questionText: 'Please obtain the written _______ of the department head before placing orders for office furniture.',
    options: [
      { key: 'A', text: 'approve' },
      { key: 'B', text: 'approved' },
      { key: 'C', text: 'approval' },
      { key: 'D', text: 'approvingly' }
    ],
    correctAnswer: 'C',
    explanation: 'Following the adjective "written", a noun is required: "written approval".'
  },
  {
    id: 'p5-56',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'The legal agreement will remain _______ for five years, unless terminated earlier by mutual consent.',
    options: [
      { key: 'A', text: 'binding' },
      { key: 'B', text: 'obsolete' },
      { key: 'C', text: 'defective' },
      { key: 'D', text: 'fragile' }
    ],
    correctAnswer: 'A',
    explanation: '"Remain binding" is the standard legal phrasing meaning legally enforceable.'
  },
  {
    id: 'p5-57',
    part: 5,
    category: 'Modal Verbs',
    difficulty: 'Elementary (500)',
    questionText: 'All conference participants must _______ their registration badges at the welcome desk.',
    options: [
      { key: 'A', text: 'claim' },
      { key: 'B', text: 'claimed' },
      { key: 'C', text: 'claiming' },
      { key: 'D', text: 'to claim' }
    ],
    correctAnswer: 'A',
    explanation: 'Modal verb "must" is followed directly by the base form verb: "must claim".'
  },
  {
    id: 'p5-58',
    part: 5,
    category: 'Passive Infinitive',
    difficulty: 'Intermediate (750)',
    questionText: 'Important customer records ought to _______ in fireproof cabinets or secure digital vaults.',
    options: [
      { key: 'A', text: 'store' },
      { key: 'B', text: 'be stored' },
      { key: 'C', text: 'storing' },
      { key: 'D', text: 'been stored' }
    ],
    correctAnswer: 'B',
    explanation: 'Passive infinitive after "ought to": "ought to be stored".'
  },
  {
    id: 'p5-59',
    part: 5,
    category: 'Word Form - Adjective',
    difficulty: 'Intermediate (750)',
    questionText: 'The customer service representative remained calm and _______ throughout the difficult phone conversation.',
    options: [
      { key: 'A', text: 'profession' },
      { key: 'B', text: 'professional' },
      { key: 'C', text: 'professionally' },
      { key: 'D', text: 'professionalism' }
    ],
    correctAnswer: 'B',
    explanation: 'Predicate adjective after linking verb "remained": "calm and professional".'
  },
  {
    id: 'p5-60',
    part: 5,
    category: 'Vocabulary in Business Context',
    difficulty: 'Advanced (900)',
    questionText: 'Our international marketing team created targeted campaigns to build brand _______ in Southeast Asia.',
    options: [
      { key: 'A', text: 'awareness' },
      { key: 'B', text: 'absenteeism' },
      { key: 'C', text: 'depreciation' },
      { key: 'D', text: 'arbitration' }
    ],
    correctAnswer: 'A',
    explanation: '"Brand awareness" is the core marketing term for consumer recognition of a brand.'
  }
];

// ==========================================
// PART 6: 15 TEXT COMPLETION PASSAGES (4 BLANKS EACH = 60 QUESTIONS)
// ==========================================
const RAW_PART_6_PASSAGES: Part6Passage[] = [
  {
    id: 'p6-01',
    title: 'Internal Memo: Server Maintenance Schedule',
    type: 'Memo',
    text: `To: All Headquarters Staff
From: Information Technology Department
Date: September 12
Subject: Upcoming Server Maintenance

Please be advised that the central database server [131] routine maintenance this coming Saturday, September 15. The maintenance window will begin at 10:00 P.M. and conclude by 4:00 A.M. on Sunday.

During this timeframe, internal file repositories and remote VPN access will be completely [132]. [133].

We kindly request that all personnel save and close all active files before leaving the office on Friday afternoon. We apologize for any [134] this scheduled maintenance may cause.`,
    questions: [
      {
        number: 131,
        options: [
          { key: 'A', text: 'underwent' },
          { key: 'B', text: 'will undergo' },
          { key: 'C', text: 'undergoes' },
          { key: 'D', text: 'is undergoing' }
        ],
        correctAnswer: 'B',
        explanation: 'Scheduled future maintenance event on "this coming Saturday": future tense "will undergo".'
      },
      {
        number: 132,
        options: [
          { key: 'A', text: 'unavailable' },
          { key: 'B', text: 'unavailably' },
          { key: 'C', text: 'availability' },
          { key: 'D', text: 'unavail' }
        ],
        correctAnswer: 'A',
        explanation: 'Predicate adjective after linking verb "will be": "unavailable".'
      },
      {
        number: 133,
        options: [
          { key: 'A', text: 'Emergency technical staff will be on standby throughout the procedure.' },
          { key: 'B', text: 'New ergonomic furniture will be distributed on Monday morning.' },
          { key: 'C', text: 'Company vehicles should be parked in the visitors\' lot.' },
          { key: 'D', text: 'The annual holiday party has been moved to November.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Provides reassuring operational context regarding technical support during the server maintenance window.'
      },
      {
        number: 134,
        options: [
          { key: 'A', text: 'inconvenience' },
          { key: 'B', text: 'convenience' },
          { key: 'C', text: 'inconvenient' },
          { key: 'D', text: 'inconveniently' }
        ],
        correctAnswer: 'A',
        explanation: 'Standard corporate closing phrase: "apologize for any inconvenience".'
      }
    ]
  },
  {
    id: 'p6-02',
    title: 'Customer Email: Warranty Claim Update',
    type: 'Email',
    text: `Dear Mr. O\'Connor,

Thank you for contacting Apex Electronics regarding your model X400 laser printer. We have received your purchase receipt and the diagnostic logs you [135] on Tuesday.

After reviewing the technical data, our engineering team determined that the paper feeder mechanism is [136]. Under the terms of our two-year manufacturer warranty, you are entitled to a full replacement unit at no additional charge.

[137]. Please affix the prepaid shipping label to the original packaging and hand it to any authorized courier.

We value your [138] and look forward to serving you again in the future.

Sincerely,
Customer Support Team`,
    questions: [
      {
        number: 135,
        options: [
          { key: 'A', text: 'forward' },
          { key: 'B', text: 'forwarded' },
          { key: 'C', text: 'forwarding' },
          { key: 'D', text: 'will forward' }
        ],
        correctAnswer: 'B',
        explanation: 'Past relative clause modifying "diagnostic logs" sent "on Tuesday": past tense "forwarded".'
      },
      {
        number: 136,
        options: [
          { key: 'A', text: 'defective' },
          { key: 'B', text: 'defect' },
          { key: 'C', text: 'defectively' },
          { key: 'D', text: 'defects' }
        ],
        correctAnswer: 'A',
        explanation: 'Predicate adjective describing the mechanism: "defective".'
      },
      {
        number: 137,
        options: [
          { key: 'A', text: 'A replacement printer will be dispatched to your address within two business days.' },
          { key: 'B', text: 'Our annual general meeting will take place in Chicago.' },
          { key: 'C', text: 'Please pay the outstanding balance shown on your invoice.' },
          { key: 'D', text: 'Retail store hours will be extended for the holidays.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Follows the sentence granting a replacement unit by explaining when the replacement will be shipped.'
      },
      {
        number: 138,
        options: [
          { key: 'A', text: 'patronage' },
          { key: 'B', text: 'complaint' },
          { key: 'C', text: 'hesitation' },
          { key: 'D', text: 'vacancy' }
        ],
        correctAnswer: 'A',
        explanation: '"We value your patronage" is the classic formal business expression thanking a customer for their business.'
      }
    ]
  },
  {
    id: 'p6-03',
    title: 'Company Announcement: Promotion of Regional Vice President',
    type: 'Announcement',
    text: `Apex Logistics is pleased to announce the promotion of Elena Rostova to Regional Vice President of European Operations. Ms. Rostova has been with our organization [139] more than a decade.

During her tenure as Logistics Director, she [140] restructured our transit routes, cutting average fuel consumption by 18 percent.

[141]. Her strategic foresight has made her one of the most respected figures in our corporate group.

In her new role, Ms. Rostova will oversee distribution hubs across seven countries. Please join us in [142] her on this well-deserved advancement.`,
    questions: [
      {
        number: 139,
        options: [
          { key: 'A', text: 'for' },
          { key: 'B', text: 'since' },
          { key: 'C', text: 'during' },
          { key: 'D', text: 'while' }
        ],
        correctAnswer: 'A',
        explanation: 'Preposition of duration before a period of time ("more than a decade") with present perfect: "for".'
      },
      {
        number: 140,
        options: [
          { key: 'A', text: 'successful' },
          { key: 'B', text: 'successfully' },
          { key: 'C', text: 'success' },
          { key: 'D', text: 'succeed' }
        ],
        correctAnswer: 'B',
        explanation: 'Adverb modifying the action verb "restructured": "successfully".'
      },
      {
        number: 141,
        options: [
          { key: 'A', text: 'Furthermore, she played an instrumental role in launching our electric vehicle pilot program.' },
          { key: 'B', text: 'Travel expenses must be submitted to human resources by Friday.' },
          { key: 'C', text: 'The conference room chairs are being replaced next week.' },
          { key: 'D', text: 'All visitors must sign in at the front reception desk.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Adds an additional career achievement reinforcing her track record.'
      },
      {
        number: 142,
        options: [
          { key: 'A', text: 'congratulating' },
          { key: 'B', text: 'congratulate' },
          { key: 'C', text: 'congratulated' },
          { key: 'D', text: 'congratulation' }
        ],
        correctAnswer: 'A',
        explanation: 'After the preposition "in", a gerund is required: "join us in congratulating her".'
      }
    ]
  },
  {
    id: 'p6-04',
    title: 'Press Release: Sustainable Packaging Transition',
    type: 'Press Release',
    text: `PORTLAND — Verde Organics announced today that all its beverage bottles will transition to 100 percent plant-based biodegradable materials by year-end.

This environmental milestone reflects the brand\'s long-standing [143] to sustainable manufacturing practices.

According to CEO Marcus Vance, early customer trials [144] overwhelmingly positive feedback. [145].

The company confirmed that the packaging redesign will not result in any price [146] for consumers.`,
    questions: [
      {
        number: 143,
        options: [
          { key: 'A', text: 'commitment' },
          { key: 'B', text: 'hesitation' },
          { key: 'C', text: 'reluctance' },
          { key: 'D', text: 'deficit' }
        ],
        correctAnswer: 'A',
        explanation: '"Commitment to sustainable practices" is the established business collocation.'
      },
      {
        number: 144,
        options: [
          { key: 'A', text: 'yielded' },
          { key: 'B', text: 'yielding' },
          { key: 'C', text: 'yield' },
          { key: 'D', text: 'will yield' }
        ],
        correctAnswer: 'A',
        explanation: 'Completed past trial results: simple past verb "yielded".'
      },
      {
        number: 145,
        options: [
          { key: 'A', text: 'Over ninety percent of surveyed shoppers preferred the lightweight feel of the new bottles.' },
          { key: 'B', text: 'Our office copier was repaired by technicians early this morning.' },
          { key: 'C', text: 'Please remember to turn off computer monitors before leaving.' },
          { key: 'D', text: 'The municipal train station is closed for repairs this weekend.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Provides the supporting survey data backing up the "overwhelmingly positive feedback".'
      },
      {
        number: 146,
        options: [
          { key: 'A', text: 'increases' },
          { key: 'B', text: 'increasable' },
          { key: 'C', text: 'increasingly' },
          { key: 'D', text: 'increased' }
        ],
        correctAnswer: 'A',
        explanation: 'Noun required following the noun adjunct "price": "price increases".'
      }
    ]
  },
  {
    id: 'p6-05',
    title: 'Hotel Notice: Renovation of Wellness Facilities',
    type: 'Notice',
    text: `To: Our Esteemed Guests
From: The Grandview Hotel Management
Subject: Facility Renovation Update

We are dedicated to providing our visitors with world-class hospitality and comfort. In keeping with this mission, our fourth-floor indoor pool and fitness studio will undergo complete renovation from October 5 [147] October 18.

During this period, guests may use the private health club across the street at no additional fee. [148]. Simply show your room key at their front desk.

Our concierge team is available around the clock to [149] any inquiries regarding nearby recreational facilities.

We thank you for your understanding and [150] while we improve our amenities.`,
    questions: [
      {
        number: 147,
        options: [
          { key: 'A', text: 'until' },
          { key: 'B', text: 'to' },
          { key: 'C', text: 'through' },
          { key: 'D', text: 'towards' }
        ],
        correctAnswer: 'C',
        explanation: 'In US business English, "from [date] through [date]" means including the entire final date.'
      },
      {
        number: 148,
        options: [
          { key: 'A', text: 'We have arranged complimentary access for all registered hotel guests.' },
          { key: 'B', text: 'The parking lot is full due to severe weekend snow.' },
          { key: 'C', text: 'All breakfast receipts must be submitted to the accounting department.' },
          { key: 'D', text: 'Board members will arrive at terminal 3 tomorrow.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Logically connects the alternate facility with the instruction to present room keys.'
      },
      {
        number: 149,
        options: [
          { key: 'A', text: 'address' },
          { key: 'B', text: 'addressing' },
          { key: 'C', text: 'addressed' },
          { key: 'D', text: 'addresses' }
        ],
        correctAnswer: 'A',
        explanation: 'Infinitive "to + base verb": "to address any inquiries".'
      },
      {
        number: 150,
        options: [
          { key: 'A', text: 'patience' },
          { key: 'B', text: 'patient' },
          { key: 'C', text: 'patiently' },
          { key: 'D', text: 'patients' }
        ],
        correctAnswer: 'A',
        explanation: 'Noun paired with "understanding": "your understanding and patience".'
      }
    ]
  },
  {
    id: 'p6-06',
    title: 'Business Letter: Invitation to Annual Supplier Summit',
    type: 'Letter',
    text: `Dear Vendor Partner,

On behalf of Apex Manufacturing, I cordially invite your senior leadership to attend our 2026 Annual Supplier Summit. The gathering will take place on Thursday, November 12, at the Hyatt Regency Ballroom.

The theme of this year\'s summit is "Resilience and Digital Innovation." [151]. Industry experts will also lead interactive workshops on real-time inventory tracking.

Attendance is [152] free of charge, but advance registration is required due to limited banquet seating.

Please complete the enclosed confirmation card and return it by October 20 so that we can [153] your place.

We look forward to [154] our successful commercial collaboration in the year ahead.`,
    questions: [
      {
        number: 151,
        options: [
          { key: 'A', text: 'Keynote speakers will discuss AI-driven procurement strategies and supply chain forecasting.' },
          { key: 'B', text: 'The printer on the second floor has run out of toner.' },
          { key: 'C', text: 'Flight cancellations were announced due to poor runway conditions.' },
          { key: 'D', text: 'Please leave your company car in garage level B.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Elaborates on the conference theme ("Resilience and Digital Innovation").'
      },
      {
        number: 152,
        options: [
          { key: 'A', text: 'entirely' },
          { key: 'B', text: 'entire' },
          { key: 'C', text: 'entirety' },
          { key: 'D', text: 'entired' }
        ],
        correctAnswer: 'A',
        explanation: 'Adverb modifying adjective phrase "free of charge": "entirely free of charge".'
      },
      {
        number: 153,
        options: [
          { key: 'A', text: 'secure' },
          { key: 'B', text: 'secures' },
          { key: 'C', text: 'securing' },
          { key: 'D', text: 'security' }
        ],
        correctAnswer: 'A',
        explanation: 'Modal verb phrase: "can + base verb" -> "can secure your place".'
      },
      {
        number: 154,
        options: [
          { key: 'A', text: 'continuing' },
          { key: 'B', text: 'continue' },
          { key: 'C', text: 'continued' },
          { key: 'D', text: 'continuation' }
        ],
        correctAnswer: 'A',
        explanation: '"Look forward to + gerund": "look forward to continuing".'
      }
    ]
  },
  {
    id: 'p6-07',
    title: 'Policy Update: Workplace Telecommuting Guidelines',
    type: 'Policy Document',
    text: `To: All Full-Time Personnel
From: Human Resources Committee
Subject: Updated Remote Work Policy

In response to employee feedback, management has approved revisions to our flexible working policy. Starting next month, eligible personnel may work remotely up to two days per week, [155] their supervisor approves the schedule in advance.

Employees participating in telecommuting must maintain regular working hours and be [156] via company chat during core operational hours.

[157]. The company will provide each approved participant with a secure remote workstation laptop and an ergonomic monitor.

Any inquiries regarding eligibility should be [158] to your department HR liaison.`,
    questions: [
      {
        number: 155,
        options: [
          { key: 'A', text: 'provided that' },
          { key: 'B', text: 'in spite of' },
          { key: 'C', text: 'regardless' },
          { key: 'D', text: 'whereas' }
        ],
        correctAnswer: 'A',
        explanation: '"Provided that" means "on condition that" (introducing a conditional clause).'
      },
      {
        number: 156,
        options: [
          { key: 'A', text: 'accessible' },
          { key: 'B', text: 'access' },
          { key: 'C', text: 'accessibly' },
          { key: 'D', text: 'accessibility' }
        ],
        correctAnswer: 'A',
        explanation: 'Predicate adjective after linking verb "be": "be accessible via company chat".'
      },
      {
        number: 157,
        options: [
          { key: 'A', text: 'Reliable high-speed home internet connectivity is required for all telecommuters.' },
          { key: 'B', text: 'All business meal receipts must be stapled to expense forms.' },
          { key: 'C', text: 'The airport shuttle arrives every thirty minutes outside terminal B.' },
          { key: 'D', text: 'Please turn off conference room air conditioners after meetings.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Adds an essential technological prerequisite for remote workers.'
      },
      {
        number: 158,
        options: [
          { key: 'A', text: 'directed' },
          { key: 'B', text: 'direct' },
          { key: 'C', text: 'direction' },
          { key: 'D', text: 'directing' }
        ],
        correctAnswer: 'A',
        explanation: 'Passive structure: "should be directed to...".'
      }
    ]
  },
  {
    id: 'p6-08',
    title: 'Newsletter Article: Commercial Energy Efficiency',
    type: 'Article',
    text: `Commercial office buildings account for a substantial portion of urban electrical consumption. However, smart sensor technologies are transforming energy management [159].

By installing motion-activated LED lighting and automated thermostats, modern facilities can reduce power usage by up to 35 percent.

[160]. In addition to lowering monthly utility expenses, green retrofitting boosts tenant satisfaction ratings.

Companies that invest in sustainable technologies may also be [161] for state tax credits.

Facility managers interested in modernizing their buildings should consult a certified energy audit [162] for a baseline assessment.`,
    questions: [
      {
        number: 159,
        options: [
          { key: 'A', text: 'dramatically' },
          { key: 'B', text: 'drama' },
          { key: 'C', text: 'dramatic' },
          { key: 'D', text: 'dramatics' }
        ],
        correctAnswer: 'A',
        explanation: 'Adverb modifying the verb phrase "transforming energy management": "dramatically".'
      },
      {
        number: 160,
        options: [
          { key: 'A', text: 'These improvements often pay for themselves in reduced utility bills within two years.' },
          { key: 'B', text: 'The cafeteria menu will feature Mediterranean specials every Wednesday.' },
          { key: 'C', text: 'Visitors are required to display photo identification badges at all times.' },
          { key: 'D', text: 'Flight arrivals were grounded due to a severe thunderstorm in Detroit.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: "These improvements" links to the motion sensors and automated thermostats described previously.'
      },
      {
        number: 161,
        options: [
          { key: 'A', text: 'eligible' },
          { key: 'B', text: 'eligibility' },
          { key: 'C', text: 'eligibly' },
          { key: 'D', text: 'electable' }
        ],
        correctAnswer: 'A',
        explanation: '"Eligible for" is the correct predicate adjective structure.'
      },
      {
        number: 162,
        options: [
          { key: 'A', text: 'specialist' },
          { key: 'B', text: 'specialize' },
          { key: 'C', text: 'special' },
          { key: 'D', text: 'specializing' }
        ],
        correctAnswer: 'A',
        explanation: 'Person noun needed to denote the expert professional: "energy audit specialist".'
      }
    ]
  },
  {
    id: 'p6-09',
    title: 'Customer Advisory: Online Banking Security Enhancements',
    type: 'Advisory',
    text: `Dear Account Holder,

At Horizon Financial, safeguarding your personal and financial data is our highest priority. To enhance account defense against unauthorized access, we [163] mandatory multi-factor authentication starting November 1.

Under the updated security protocol, you will be prompted to enter a one-time verification passcode sent to your registered mobile device [164] logging in from an unrecognized browser.

[165]. This extra layer of verification ensures that only you can access your funds.

Please take a moment to confirm that your contact telephone number on file is [166] by visiting the account settings tab.`,
    questions: [
      {
        number: 163,
        options: [
          { key: 'A', text: 'are introducing' },
          { key: 'B', text: 'introduced' },
          { key: 'C', text: 'have introduced' },
          { key: 'D', text: 'were introducing' }
        ],
        correctAnswer: 'A',
        explanation: 'Present continuous denoting an imminent scheduled policy rollout: "are introducing".'
      },
      {
        number: 164,
        options: [
          { key: 'A', text: 'whenever' },
          { key: 'B', text: 'despite' },
          { key: 'C', text: 'during' },
          { key: 'D', text: 'whereas' }
        ],
        correctAnswer: 'A',
        explanation: '"Whenever" introduces the conditional recurring circumstance: "whenever logging in from an unrecognized browser".'
      },
      {
        number: 165,
        options: [
          { key: 'A', text: 'The passcode will expire automatically after ten minutes for your protection.' },
          { key: 'B', text: 'Airport luggage allowances will be restricted during peak summer travel.' },
          { key: 'C', text: 'All catering invoices must be settled within thirty calendar days.' },
          { key: 'D', text: 'The company holiday gala has been rescheduled to Friday evening.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Explains how the one-time verification passcode operates.'
      },
      {
        number: 166,
        options: [
          { key: 'A', text: 'current' },
          { key: 'B', text: 'currently' },
          { key: 'C', text: 'currency' },
          { key: 'D', text: 'currencies' }
        ],
        correctAnswer: 'A',
        explanation: 'Predicate adjective after linking verb "is": "is current" (up-to-date).'
      }
    ]
  },
  {
    id: 'p6-10',
    title: 'Recruitment Ad: Senior Data Analyst Position',
    type: 'Job Posting',
    text: `Crestview Analytics is seeking an experienced Senior Data Analyst to join our quantitative research division in Boston.

The ideal candidate will possess advanced expertise in SQL, statistical modeling, and data visualization software. Responsibilities include [167] consumer purchasing trends and delivering actionable business insights to executive stakeholders.

[168]. In return, Crestview offers a highly competitive salary, comprehensive medical benefits, and generous retirement fund matching.

Applicants must have at least five years of [169] industry experience.

To apply, please submit your resumé and a cover letter [170] your technical portfolio by October 15.`,
    questions: [
      {
        number: 167,
        options: [
          { key: 'A', text: 'analyzing' },
          { key: 'B', text: 'analyze' },
          { key: 'C', text: 'analysis' },
          { key: 'D', text: 'analyzed' }
        ],
        correctAnswer: 'A',
        explanation: 'Gerund required after transitive verb "include": "Responsibilities include analyzing...".'
      },
      {
        number: 168,
        options: [
          { key: 'A', text: 'Strong written and verbal presentation skills are essential for this client-facing position.' },
          { key: 'B', text: 'The photocopier paper tray is located adjacent to the mail room.' },
          { key: 'C', text: 'Conference parking permits can be purchased at the information booth.' },
          { key: 'D', text: 'All hotel reservations must be cancelled at least 24 hours in advance.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Adds an essential soft-skill job requirement matching "delivering actionable insights".'
      },
      {
        number: 169,
        options: [
          { key: 'A', text: 'relevant' },
          { key: 'B', text: 'relevance' },
          { key: 'C', text: 'relevantly' },
          { key: 'D', text: 'relieve' }
        ],
        correctAnswer: 'A',
        explanation: 'Adjective modifying the noun "experience": "relevant industry experience".'
      },
      {
        number: 170,
        options: [
          { key: 'A', text: 'highlighting' },
          { key: 'B', text: 'highlight' },
          { key: 'C', text: 'highlighted' },
          { key: 'D', text: 'highlights' }
        ],
        correctAnswer: 'A',
        explanation: 'Active present participle modifying "cover letter": "a cover letter highlighting your portfolio".'
      }
    ]
  },
  {
    id: 'p6-11',
    title: 'Product Recall Notice: Portable Power Bank Model PB-20',
    type: 'Notice',
    text: `IMPORTANT SAFETY RECALL

Voltex Power Inc. is voluntarily recalling its PB-20 portable power banks manufactured between January and April 2026. A small number of units contain battery cells that may overheat while [171], presenting a potential fire hazard.

No injuries or property damage [172] to date, but consumer safety is our highest priority.

[173]. Voltex will immediately ship you a free upgraded replacement unit along with a prepaid box to return the affected device.

We sincerely regret any inconvenience this [174] measure may cause.`,
    questions: [
      {
        number: 171,
        options: [
          { key: 'A', text: 'recharging' },
          { key: 'B', text: 'recharge' },
          { key: 'C', text: 'recharged' },
          { key: 'D', text: 'recharges' }
        ],
        correctAnswer: 'A',
        explanation: 'After conjunction "while" in an abbreviated clause: "while recharging".'
      },
      {
        number: 172,
        options: [
          { key: 'A', text: 'have been reported' },
          { key: 'B', text: 'reported' },
          { key: 'C', text: 'were reporting' },
          { key: 'D', text: 'are reporting' }
        ],
        correctAnswer: 'A',
        explanation: 'Passive present perfect with "to date": "have been reported".'
      },
      {
        number: 173,
        options: [
          { key: 'A', text: 'Consumers should stop using the PB-20 immediately and visit our recall portal.' },
          { key: 'B', text: 'The new office furniture will be assembled in the boardroom tomorrow.' },
          { key: 'C', text: 'Please turn in your parking permits to the security guard.' },
          { key: 'D', text: 'The airline offers discounted rates for business class travelers.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: The core safety directive telling consumers what action to take immediately.'
      },
      {
        number: 174,
        options: [
          { key: 'A', text: 'precautionary' },
          { key: 'B', text: 'precaution' },
          { key: 'C', text: 'precautionarily' },
          { key: 'D', text: 'precautioned' }
        ],
        correctAnswer: 'A',
        explanation: 'Adjective modifying the noun "measure": "precautionary measure".'
      }
    ]
  },
  {
    id: 'p6-12',
    title: 'Executive Email: Annual Budget Planning Timeline',
    type: 'Email',
    text: `To: Department Heads
From: Chief Financial Officer
Date: October 2
Subject: FY 2027 Budget Submission Schedule

As we approach the end of the current fiscal year, it is time to prepare operating expenditure estimates for FY 2027. All department heads must submit their preliminary budgetary requests [175] Friday, November 6.

To assist in your forecasting, the finance team has updated the corporate expense template on the intranet. Please ensure all projected software licenses and staff additions [176] itemized clearly.

[177]. Final department allocations will be formally ratified during the December board meeting.

Thank you in advance for your diligent [178] with this critical strategic planning process.`,
    questions: [
      {
        number: 175,
        options: [
          { key: 'A', text: 'by' },
          { key: 'B', text: 'until' },
          { key: 'C', text: 'during' },
          { key: 'D', text: 'while' }
        ],
        correctAnswer: 'A',
        explanation: '"By" indicates the completion deadline for budget submission.'
      },
      {
        number: 176,
        options: [
          { key: 'A', text: 'are' },
          { key: 'B', text: 'is' },
          { key: 'C', text: 'was' },
          { key: 'D', text: 'be' }
        ],
        correctAnswer: 'A',
        explanation: 'Plural passive verb matching plural compound subject ("software licenses and staff additions"): "are itemized".'
      },
      {
        number: 177,
        options: [
          { key: 'A', text: 'Budget review meetings will be scheduled between November 10 and November 20.' },
          { key: 'B', text: 'The airport lounge is accessible to all platinum ticket holders.' },
          { key: 'C', text: 'Please return your rented laptops to IT support before leaving.' },
          { key: 'D', text: 'Coffee and snacks will be served in the cafeteria at 10:00 A.M.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Follows the submission deadline by detailing the subsequent review meeting dates.'
      },
      {
        number: 178,
        options: [
          { key: 'A', text: 'cooperation' },
          { key: 'B', text: 'cooperate' },
          { key: 'C', text: 'cooperative' },
          { key: 'D', text: 'cooperatively' }
        ],
        correctAnswer: 'A',
        explanation: 'Noun modified by possessive and adjective: "your diligent cooperation".'
      }
    ]
  },
  {
    id: 'p6-13',
    title: 'Customer Feedback Response Letter',
    type: 'Letter',
    text: `Dear Ms. Zhao,

Thank you for your letter dated August 14 concerning the delay in your furniture delivery. We deeply regret that your order did not arrive [179] the guaranteed four-day shipping window.

A sudden mechanical breakdown at our regional freight facility created an unexpected [180] in dispatching custom dining tables.

[181]. As a sincere gesture of our goodwill, we have credited twenty percent of your purchase total back to your credit card.

We appreciate your patience and look forward to regaining your [182] in our service.

Sincerely,
Customer Relations Team`,
    questions: [
      {
        number: 179,
        options: [
          { key: 'A', text: 'within' },
          { key: 'B', text: 'between' },
          { key: 'C', text: 'along' },
          { key: 'D', text: 'towards' }
        ],
        correctAnswer: 'A',
        explanation: '"Within + time frame" denotes inside the promised period: "within the guaranteed four-day window".'
      },
      {
        number: 180,
        options: [
          { key: 'A', text: 'bottleneck' },
          { key: 'B', text: 'dividend' },
          { key: 'C', text: 'agenda' },
          { key: 'D', text: 'brochure' }
        ],
        correctAnswer: 'A',
        explanation: '"Bottleneck" describes an operational logjam or congestion slowing down distribution.'
      },
      {
        number: 181,
        options: [
          { key: 'A', text: 'Our delivery records confirm that your dining set was safely delivered on August 18.' },
          { key: 'B', text: 'The hotel gym is located on the second floor near the elevator.' },
          { key: 'C', text: 'Employee attendance was exceptionally high at this year\'s conference.' },
          { key: 'D', text: 'All air passengers must clear customs prior to baggage claim.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Confirms that the delayed item was indeed delivered prior to offering compensation.'
      },
      {
        number: 182,
        options: [
          { key: 'A', text: 'confidence' },
          { key: 'B', text: 'confident' },
          { key: 'C', text: 'confidently' },
          { key: 'D', text: 'confide' }
        ],
        correctAnswer: 'A',
        explanation: '"Regaining your confidence" is the formal business phrase for rebuilding trust.'
      }
    ]
  },
  {
    id: 'p6-14',
    title: 'Trade Expo Announcement: Exhibit Space Reservations',
    type: 'Announcement',
    text: `Exhibitor registration is now officially open for the 2026 International Green Building Expo in Denver.

With more than 15,000 architectural and engineering professionals expected to attend, this convention provides unmatched commercial [183] for renewable material manufacturers.

Early applicants who reserve exhibition booths before November 1 will receive a fifteen percent discount on premium showroom floor space. [184].

All booth reservations include high-speed Wi-Fi, electricity hookups, and two complimentary all-access passes for company [185].

Spaces are assigned on a first-come, first-served basis, so we encourage vendors to act [186].`,
    questions: [
      {
        number: 183,
        options: [
          { key: 'A', text: 'exposure' },
          { key: 'B', text: 'expose' },
          { key: 'C', text: 'exposing' },
          { key: 'D', text: 'exposed' }
        ],
        correctAnswer: 'A',
        explanation: 'Noun modified by "commercial": "commercial exposure" (visibility to potential buyers).'
      },
      {
        number: 184,
        options: [
          { key: 'A', text: 'Over half of the central hall spaces have already been claimed by returning sponsors.' },
          { key: 'B', text: 'The printer on the third floor is experiencing frequent paper jams.' },
          { key: 'C', text: 'Flight cancellations were announced due to severe turbulence.' },
          { key: 'D', text: 'Company vehicles must be inspected annually for safety.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Reinforces urgency by explaining that spaces are rapidly filling up.'
      },
      {
        number: 185,
        options: [
          { key: 'A', text: 'representatives' },
          { key: 'B', text: 'representation' },
          { key: 'C', text: 'represent' },
          { key: 'D', text: 'representative' }
        ],
        correctAnswer: 'A',
        explanation: 'Plural person noun: "passes for company representatives".'
      },
      {
        number: 186,
        options: [
          { key: 'A', text: 'promptly' },
          { key: 'B', text: 'prompt' },
          { key: 'C', text: 'promptness' },
          { key: 'D', text: 'prompted' }
        ],
        correctAnswer: 'A',
        explanation: 'Adverb modifying the action verb "act": "act promptly".'
      }
    ]
  },
  {
    id: 'p6-15',
    title: 'Corporate Transit Benefit Notice',
    type: 'Memo',
    text: `To: All Branch Staff
From: Corporate Sustainability Office
Subject: Commuter Transit Subsidy Program

As part of our commitment to reducing carbon emissions, Apex Financial is proud to announce an enhanced public transit subsidy. Starting next month, the company will reimburse up to 60 percent of the cost of monthly train, bus, and subway [187].

To participate, employees must purchase their pass through our designated corporate commuter portal. [188].

Subsidies will be reflected automatically as a pre-tax payroll credit each month.

Please review the attached FAQ sheet for complete program details and [189] requirements.

Let us work together to make our daily commutes both economical and [190] sound.`,
    questions: [
      {
        number: 187,
        options: [
          { key: 'A', text: 'passes' },
          { key: 'B', text: 'passed' },
          { key: 'C', text: 'passing' },
          { key: 'D', text: 'passable' }
        ],
        correctAnswer: 'A',
        explanation: 'Plural noun object: "monthly train, bus, and subway passes".'
      },
      {
        number: 188,
        options: [
          { key: 'A', text: 'Transit passes purchased directly from ticket vending machines are not eligible for reimbursement.' },
          { key: 'B', text: 'The hotel room has been reserved under the vice president\'s name.' },
          { key: 'C', text: 'Emergency generator testing will occur on Saturday afternoon.' },
          { key: 'D', text: 'All conference participants must display their name tags.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: Clarifies the specific stipulation regarding how and where passes must be bought.'
      },
      {
        number: 189,
        options: [
          { key: 'A', text: 'eligibility' },
          { key: 'B', text: 'eligible' },
          { key: 'C', text: 'eligibly' },
          { key: 'D', text: 'electable' }
        ],
        correctAnswer: 'A',
        explanation: 'Noun adjunct modifying "requirements": "eligibility requirements".'
      },
      {
        number: 190,
        options: [
          { key: 'A', text: 'environmentally' },
          { key: 'B', text: 'environmental' },
          { key: 'C', text: 'environment' },
          { key: 'D', text: 'environmentalist' }
        ],
        correctAnswer: 'A',
        explanation: 'Adverb modifying the predicate adjective "sound": "economical and environmentally sound".'
      }
    ]
  }
];

// ==========================================
// PART 7: 12 READING COMPREHENSION PASSAGES (3-4 QUESTIONS EACH = 42 QUESTIONS)
// ==========================================
const RAW_PART_7_PASSAGES: Part7Passage[] = [
  {
    id: 'p7-01',
    title: 'Customer Service Email & Return Policy',
    format: 'Single Passage',
    type: 'Email',
    passages: [
      {
        label: 'Email Correspondence',
        text: `From: support@nordicgear.com
To: sarah.jenkins@webmail.net
Date: October 14
Subject: Replacement Order #NG-88412

Dear Ms. Jenkins,

Thank you for contacting Nordic Gear Customer Care regarding your recent purchase of the Alpine Pro Hiker Backpack. We sincerely apologize that the zipper on the outer compartment separated during your initial hiking trip.

Under our Lifetime Durability Guarantee, all Nordic Gear manufactured items that suffer hardware defects within five years of purchase are eligible for complimentary repair or replacement. Because the Alpine Pro Hiker in forest green is currently out of stock at our regional distribution center, we have dispatched the updated 2026 edition in slate grey, which features water-resistant taped seams.

Your replacement package was handed to FedEx Express this morning (Tracking Number: 9812-4402-9182) and is estimated to arrive at your Portland address on Thursday, October 16.

Inside the package, you will find a prepaid return carton. Please place the defective green backpack inside and drop it off at any authorized FedEx drop box at your convenience within thirty days. No postage fee is required.

As an expression of our appreciation for your patience, we have credited 2,500 loyalty points to your Nordic Rewards profile, which can be applied toward any future equipment order.

Warm regards,
Lars Lindqvist
Nordic Gear Quality Assurance Specialist`
      }
    ],
    questions: [
      {
        id: 'p7-01-q1',
        questionText: 'What problem did Ms. Jenkins experience with her backpack?',
        options: [
          { key: 'A', text: 'The fabric was torn during shipment.' },
          { key: 'B', text: 'A zipper mechanism broke.' },
          { key: 'C', text: 'The wrong color was initially sent.' },
          { key: 'D', text: 'Water leaked through the bottom seams.' }
        ],
        correctAnswer: 'B',
        explanation: 'The email explicitly states: "the zipper on the outer compartment separated during your initial hiking trip."'
      },
      {
        id: 'p7-01-q2',
        questionText: 'Why did Nordic Gear send the slate grey backpack instead of the forest green one?',
        options: [
          { key: 'A', text: 'The forest green model was discontinued.' },
          { key: 'B', text: 'The forest green version was temporarily unavailable in stock.' },
          { key: 'C', text: 'The slate grey backpack was on clearance.' },
          { key: 'D', text: 'Ms. Jenkins requested a color change in her email.' }
        ],
        correctAnswer: 'B',
        explanation: 'The letter explains: "Because the Alpine Pro Hiker in forest green is currently out of stock at our regional distribution center..."'
      },
      {
        id: 'p7-01-q3',
        questionText: 'What is Ms. Jenkins asked to do within thirty days?',
        options: [
          { key: 'A', text: 'Pay a discounted shipping fee' },
          { key: 'B', text: 'Return the defective backpack using the provided prepaid box' },
          { key: 'C', text: 'Redeem her 2,500 loyalty points' },
          { key: 'D', text: 'Submit a product review on the website' }
        ],
        correctAnswer: 'B',
        explanation: 'The email directs: "Please place the defective green backpack inside and drop it off at any authorized FedEx drop box... within thirty days."'
      }
    ]
  },
  {
    id: 'p7-02',
    title: 'Executive Schedule & Internal Office Memo',
    format: 'Multiple Passages',
    type: 'Double Passage (Schedule & Memo)',
    passages: [
      {
        label: 'Document 1: Conference Room Schedule',
        text: `PACIFIC TOWER CONFERENCE ROOM SCHEDULE
Date: Tuesday, November 4

Room 301 (Auditorium, Capacity 120):
• 09:00 - 11:30: Annual Investor Financial Briefing (Finance Dept)
• 13:00 - 15:30: New Software Security Training (IT Dept)
• 16:00 - 17:30: Executive Leadership Committee (Closed Session)

Room 204 (Boardroom, Capacity 25):
• 09:30 - 11:00: Client Proposal Presentation (Marketing Dept - Lead: D. Kim)
• 11:30 - 13:00: Vendor Contract Negotiations (Procurement - Lead: M. Vance)
• 14:00 - 16:00: Regional Sales Review (Sales Division)`
      },
      {
        label: 'Document 2: Internal Email',
        text: `From: d.kim@pacifictower.com
To: marketing_team@pacifictower.com
Date: November 3, 4:15 P.M.
Subject: Room Change for Tomorrow\'s Presentation

Team,

Please note that our presentation to Apex Global tomorrow morning will need to be adjusted. The clients have informed me that they are bringing three additional technical advisers from their Tokyo headquarters. Because Room 204 only has twenty-two functioning ergonomic chairs following yesterday\'s maintenance, we risk overcrowding.

I spoke with facilities coordinator Susan Park this afternoon. Fortunately, the morning session in Room 301 will conclude at 11:30, and the afternoon IT session does not begin until 1:00 P.M. We will therefore host our catered lunch and presentation in Room 301 during that midday window instead.

Please report to Room 301 at 11:45 A.M. to help test the digital projectors and set out the printed marketing brochures.

Best regards,
David Kim
Senior Marketing Director`
      }
    ],
    questions: [
      {
        id: 'p7-02-q1',
        questionText: 'According to Document 1, who was originally scheduled to use Room 204 at 11:30 A.M.?',
        options: [
          { key: 'A', text: 'David Kim' },
          { key: 'B', text: 'Marcus Vance' },
          { key: 'C', text: 'Susan Park' },
          { key: 'D', text: 'The IT Department' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 1 schedule clearly shows Room 204 from 11:30 to 13:00 is: "Vendor Contract Negotiations (Procurement - Lead: M. Vance)".'
      },
      {
        id: 'p7-02-q2',
        questionText: 'Why did Mr. Kim request a room adjustment?',
        options: [
          { key: 'A', text: 'The projector in Room 204 was malfunctioning.' },
          { key: 'B', text: 'More attendees will be joining than Room 204 can comfortably seat.' },
          { key: 'C', text: 'The client requested an afternoon meeting time.' },
          { key: 'D', text: 'The finance department cancelled their presentation.' }
        ],
        correctAnswer: 'B',
        explanation: 'Mr. Kim notes: "The clients have informed me that they are bringing three additional technical advisers... we risk overcrowding."'
      },
      {
        id: 'p7-02-q3',
        questionText: 'When are marketing team members asked to arrive in Room 301?',
        options: [
          { key: 'A', text: 'At 9:30 A.M.' },
          { key: 'B', text: 'At 11:30 A.M.' },
          { key: 'C', text: 'At 11:45 A.M.' },
          { key: 'D', text: 'At 1:00 P.M.' }
        ],
        correctAnswer: 'C',
        explanation: 'Mr. Kim instructs: "Please report to Room 301 at 11:45 A.M. to help test the digital projectors..."'
      }
    ]
  },
  {
    id: 'p7-03',
    title: 'Workplace Chat Transcript: Urgent Shipment Re-routing',
    format: 'Single Passage',
    type: 'Chat Transcript',
    passages: [
      {
        label: 'Internal Instant Messaging Thread',
        text: `Logistics Team Channel — September 23

[10:14 AM] Mark Jensen:
Hey Elena, are you at your desk? The carrier just phoned from the harbor.

[10:16 AM] Elena Rostova:
Yes Mark, what\'s going on? Has vessel Baltic Dawn finished unloading container #702?

[10:17 AM] Mark Jensen:
Yes, but there is a major problem on Interstate 90. A tanker overturned near exit 14, and highway patrol has closed both eastbound lanes until at least 4:00 PM.

[10:19 AM] Elena Rostova:
That\'s the route our driver took! That container has 400 micro-inverters destined for the Greenfield Solar installation. The contractor is expecting delivery before 2:00 PM today or they face penalty clauses.

[10:21 AM] Mark Jensen:
Our driver is currently waiting at the toll plaza. Should we reroute him along Highway 12 through Maple Valley? It adds about 25 miles, but traffic is moving smoothly.

[10:23 AM] Elena Rostova:
I\'m on it. I\'ll call Greenfield\'s site manager to notify him of the detour. Tell the driver to take Highway 12 immediately.

[10:24 AM] Mark Jensen:
Will do. Dispatching the updated route now.`
      }
    ],
    questions: [
      {
        id: 'p7-03-q1',
        questionText: 'What is the cause of the delivery delay discussed in the chat?',
        options: [
          { key: 'A', text: 'The cargo ship was delayed by rough seas.' },
          { key: 'B', text: 'A vehicle accident closed a major interstate highway.' },
          { key: 'C', text: 'The driver went to the wrong warehouse.' },
          { key: 'D', text: 'The micro-inverters failed quality testing.' }
        ],
        correctAnswer: 'B',
        explanation: 'Mark explains: "A tanker overturned near exit 14, and highway patrol has closed both eastbound lanes..."'
      },
      {
        id: 'p7-03-q2',
        questionText: 'At 10:23 AM, what does Elena mean when she writes, "I\'m on it"?',
        options: [
          { key: 'A', text: 'She is getting on a commuter train.' },
          { key: 'B', text: 'She is taking responsibility for contacting the client.' },
          { key: 'C', text: 'She is reviewing a financial spreadsheet.' },
          { key: 'D', text: 'She has arrived at the construction site.' }
        ],
        correctAnswer: 'B',
        explanation: 'The idiom "I\'m on it" indicates she is handling the task (calling Greenfield\'s site manager).'
      },
      {
        id: 'p7-03-q3',
        questionText: 'What decision do the speakers make?',
        options: [
          { key: 'A', text: 'To cancel the delivery until tomorrow morning' },
          { key: 'B', text: 'To direct the driver along an alternative highway route' },
          { key: 'C', text: 'To hire an express helicopter courier' },
          { key: 'D', text: 'To return the cargo to the harbor terminal' }
        ],
        correctAnswer: 'B',
        explanation: 'Elena orders: "Tell the driver to take Highway 12 immediately." Mark confirms: "Dispatching the updated route now."'
      }
    ]
  },
  {
    id: 'p7-04',
    title: 'Business Article: Commercial Real Estate Trends',
    format: 'Single Passage',
    type: 'Magazine Article',
    passages: [
      {
        label: 'Business Metro Weekly — Commercial Insight',
        text: `RETHINKING THE METROPOLITAN WORKSPACE
By Amanda Holbrook

Over the past three years, commercial real estate developers in downtown Chicago have observed a distinct evolution in corporate leasing demands. Rather than committing to traditional long-term ten-year leases for massive single-tenant floorplates, multinational firms are increasingly gravitating towards modular, flexible leases that allow headcount fluctuations without severe financial penalties.

According to a survey conducted by the Urban Commercial Property Association, 68 percent of enterprise tenants now require landlord-provided communal amenities, including collaborative video conferencing suites, high-tech fitness centers, and secure bicycle storage. Furthermore, corporate sustainability mandates have made environmental accreditation paramount. Buildings certified under the LEED Gold or Platinum standards are commanding rental premiums of up to 14 percent over comparable uncertified properties.

"Tenants no longer view an office as simply a collection of cubicles," explains Julian Sterling, chief executive of Sterling Commercial Brokerage. "They see it as a recruitment and retention tool. If an office space fails to inspire talent or support hybrid operational models, companies will simply look elsewhere."

In response, developers are retrofitting older brick and timber warehouse structures in the Fulton Market district into dynamic creative hubs. These properties feature operable windows, biophilic plant installations, and energy-efficient heat pump systems, proving that heritage buildings can satisfy the stringent environmental demands of 21st-century commerce.`
      }
    ],
    questions: [
      {
        id: 'p7-04-q1',
        questionText: 'What change in corporate leasing is highlighted in the article?',
        options: [
          { key: 'A', text: 'A preference for flexible, modular lease agreements' },
          { key: 'B', text: 'A complete abandonment of physical offices' },
          { key: 'C', text: 'A shift toward longer fifteen-year contracts' },
          { key: 'D', text: 'A requirement that all staff work exclusively in cubicles' }
        ],
        correctAnswer: 'A',
        explanation: 'The first paragraph states firms are "increasingly gravitating towards modular, flexible leases that allow headcount fluctuations".'
      },
      {
        id: 'p7-04-q2',
        questionText: 'According to the article, why can green-certified buildings charge higher rent?',
        options: [
          { key: 'A', text: 'They are located exclusively near airports.' },
          { key: 'B', text: 'Corporate sustainability policies prioritize environmentally accredited facilities.' },
          { key: 'C', text: 'They provide free lunch to all tenant employees.' },
          { key: 'D', text: 'They are exempt from municipal utility billing.' }
        ],
        correctAnswer: 'B',
        explanation: 'The text explains: "corporate sustainability mandates have made environmental accreditation paramount", yielding premiums up to 14%.'
      },
      {
        id: 'p7-04-q3',
        questionText: 'The word "stringent" in paragraph 4, line 4, is closest in meaning to:',
        options: [
          { key: 'A', text: 'strict' },
          { key: 'B', text: 'temporary' },
          { key: 'C', text: 'expensive' },
          { key: 'D', text: 'lenient' }
        ],
        correctAnswer: 'A',
        explanation: '"Stringent environmental demands" means rigorous, exacting, or strict requirements.'
      }
    ]
  },
  {
    id: 'p7-05',
    title: 'Product Advertisement & Customer Inquiry Email',
    format: 'Multiple Passages',
    type: 'Double Passage (Ad & Email)',
    passages: [
      {
        label: 'Document 1: Magazine Advertisement',
        text: `SOLARGUARD ENTERPRISE CLOUD BACKUP
Protect your enterprise data with military-grade redundancy.

Features & Plans:
• Starter Plan: $120/month — Up to 5 TB storage, daily automated snapshots, standard email support.
• Professional Plan: $280/month — Up to 20 TB storage, hourly incremental backups, 24/7 live telephone support.
• Enterprise Unlimited: $600/month — Unlimited storage, dedicated account engineer, zero-downtime failover redundancy.

Special Autumn Promotion:
Sign an annual agreement for any tier before November 30 and receive two complimentary months of service plus free migration assistance from your current cloud host!
Visit www.solarguardcloud.com or email enterprise@solarguardcloud.com.`
      },
      {
        label: 'Document 2: Inquiry Email',
        text: `From: r.vasquez@vanguardtech.com
To: enterprise@solarguardcloud.com
Date: November 18
Subject: Inquiry regarding Professional Plan promotion

Dear SolarGuard Sales Team,

Our software development agency is currently evaluating options to replace our legacy on-premises backup server. We currently generate approximately 12 TB of active database assets and require continuous 24/7 phone assistance in the event of an outage.

We would like to take advantage of your Autumn Promotion for the Professional Plan under an annual contract. However, we anticipate our storage requirements will grow to approximately 25 TB by the end of next summer.

Could you confirm whether we can upgrade to the Enterprise Unlimited tier midway through our annual agreement while maintaining the complimentary two-month promotional credit? Furthermore, how quickly can your migration team assist us with transferring our existing 12 TB database?

Sincerely,
Roberto Vasquez
Chief Information Officer, Vanguard Technologies`
      }
    ],
    questions: [
      {
        id: 'p7-05-q1',
        questionText: 'Which plan is Mr. Vasquez interested in purchasing initially?',
        options: [
          { key: 'A', text: 'Starter Plan' },
          { key: 'B', text: 'Professional Plan' },
          { key: 'C', text: 'Enterprise Unlimited' },
          { key: 'D', text: 'Custom On-Premises Plan' }
        ],
        correctAnswer: 'B',
        explanation: 'Mr. Vasquez states: "We would like to take advantage of your Autumn Promotion for the Professional Plan under an annual contract."'
      },
      {
        id: 'p7-05-q2',
        questionText: 'What benefit is included in the Autumn Promotion?',
        options: [
          { key: 'A', text: 'A free physical hard drive array' },
          { key: 'B', text: 'Two free months of service and free data migration' },
          { key: 'C', text: '50% off monthly subscription fees permanently' },
          { key: 'D', text: 'Free on-site hardware installation' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 1 states: "receive two complimentary months of service plus free migration assistance from your current cloud host!"'
      },
      {
        id: 'p7-05-q3',
        questionText: 'Why does Mr. Vasquez anticipate needing to upgrade his plan in the future?',
        options: [
          { key: 'A', text: 'He wants to downgrade his phone support tier.' },
          { key: 'B', text: 'His company\'s data volume will exceed the Professional Plan\'s 20 TB limit.' },
          { key: 'C', text: 'His company is opening an office in Europe.' },
          { key: 'D', text: 'The promotional discount will expire.' }
        ],
        correctAnswer: 'B',
        explanation: 'The Professional plan caps storage at 20 TB, and Mr. Vasquez notes his storage will expand to 25 TB by next summer.'
      }
    ]
  },
  {
    id: 'p7-06',
    title: 'Press Release: Green Energy Plant Opening',
    format: 'Single Passage',
    type: 'Press Release',
    passages: [
      {
        label: 'Corporate Press Release',
        text: `FOR IMMEDIATE RELEASE

AURA ENERGY POWERS UP 200-MEGAWATT OFFSHORE WIND FARM

GLASGOW — Aura Energy announced today the full commercial commissioning of the Moray Reach Offshore Wind Facility, located twelve miles off the northeastern coast of Scotland. The £650 million infrastructure project was completed three weeks ahead of schedule and within projected capital expenditures.

Comprising 45 state-of-the-art turbines, each soaring 185 meters above sea level, the installation will generate enough clean electricity to power more than 170,000 households annually. The clean power produced will offset an estimated 340,000 metric tons of carbon emissions each year.

"Completing a project of this magnitude in the North Sea\'s demanding weather conditions is a testament to the resilience and technical excellence of our engineering consortium," stated Fiona MacIntyre, Aura Energy\'s Chief Operating Officer. "Furthermore, the project generated over 800 local maritime construction jobs during the peak assembly phase."

Long-term operations and turbine maintenance will be coordinated from Aura\'s newly renovated shore base at Fraserburgh Harbour, which will employ 60 permanent offshore technicians, vessel operators, and control room data analysts.`
      }
    ],
    questions: [
      {
        id: 'p7-06-q1',
        questionText: 'What is indicated about the construction of the wind facility?',
        options: [
          { key: 'A', text: 'It took longer than initially planned.' },
          { key: 'B', text: 'It was completed earlier than scheduled and on budget.' },
          { key: 'C', text: 'It was funded entirely by local homeowners.' },
          { key: 'D', text: 'It suffered extensive equipment damage from storms.' }
        ],
        correctAnswer: 'B',
        explanation: 'The release specifies: "completed three weeks ahead of schedule and within projected capital expenditures."'
      },
      {
        id: 'p7-06-q2',
        questionText: 'Where will ongoing maintenance operations be managed from?',
        options: [
          { key: 'A', text: 'A floating vessel twelve miles offshore' },
          { key: 'B', text: 'Corporate headquarters in Glasgow' },
          { key: 'C', text: 'A shore base at Fraserburgh Harbour' },
          { key: 'D', text: 'A control station in Edinburgh' }
        ],
        correctAnswer: 'C',
        explanation: 'The text specifies: "Long-term operations and turbine maintenance will be coordinated from Aura\'s newly renovated shore base at Fraserburgh Harbour".'
      },
      {
        id: 'p7-06-q3',
        questionText: 'In the passage, the word "magnitude" in paragraph 3, line 1, is closest in meaning to:',
        options: [
          { key: 'A', text: 'scale' },
          { key: 'B', text: 'urgency' },
          { key: 'C', text: 'danger' },
          { key: 'D', text: 'altitude' }
        ],
        correctAnswer: 'A',
        explanation: '"A project of this magnitude" refers to its massive size, scope, or scale.'
      }
    ]
  },
  {
    id: 'p7-07',
    title: 'Hotel Booking Confirmation & Customer Review',
    format: 'Multiple Passages',
    type: 'Double Passage (Confirmation & Review)',
    passages: [
      {
        label: 'Document 1: Hotel Reservation Confirmation',
        text: `THE MERIDIAN GRAND HOTEL & SUITES
Reservation Confirmation Number: MG-91820
Guest Name: Arthur Pendelton
Check-in: Friday, September 18 (From 3:00 P.M.)
Check-out: Sunday, September 20 (By 11:00 A.M.)
Room Type: Deluxe King Suite (Non-Smoking, City View)
Nightly Rate: $210.00 x 2 nights = $420.00
Taxes & Municipal Fees: $54.60
Total Amount Charged: $474.60 (Paid via Visa ending in 4109)

Included Amenities:
• Daily complimentary hot buffet breakfast in the Veranda Dining Room (6:30 A.M. - 10:00 A.M.)
• Complimentary high-speed fiber Wi-Fi
• Access to the rooftop pool and fitness center
• Underground valet parking available for $25/night (Optional surcharge)`
      },
      {
        label: 'Document 2: Online Traveler Review',
        text: `Traveler Review: The Meridian Grand Hotel
Rating: ★★★★☆ (4 out of 5 stars)
Posted by: Arthur P. on September 22

My wife and I recently spent two nights at The Meridian Grand for a weekend anniversary getaway. Overall, our experience was exceptional. The room on the 14th floor was spotless, the bed was extremely comfortable, and the panoramic city view at sunset was spectacular. The complimentary breakfast buffet in the Veranda Room offered an extensive selection of fresh pastries, fruit, and made-to-order omelets.

The only minor setback was our experience upon arrival. We arrived at the hotel at 1:30 P.M. hoping to unpack our luggage early, but the front desk agent informed us that our suite was still being cleaned by housekeeping and would not be ready until the official 3:00 P.M. check-in time. While the bell staff kindly stored our bags in the luggage room while we had lunch at a nearby bistro, an earlier room readiness would have made our arrival much smoother.

Regardless, we would certainly recommend this property to anyone visiting downtown.`
      }
    ],
    questions: [
      {
        id: 'p7-07-q1',
        questionText: 'What amenity did Mr. Pendelton specifically praise in his review?',
        options: [
          { key: 'A', text: 'The underground valet parking' },
          { key: 'B', text: 'The rooftop swimming pool' },
          { key: 'C', text: 'The buffet breakfast in the Veranda Room' },
          { key: 'D', text: 'The fitness center equipment' }
        ],
        correctAnswer: 'C',
        explanation: 'Mr. Pendelton praises the breakfast buffet in the Veranda Room, noting its fresh pastries and made-to-order omelets.'
      },
      {
        id: 'p7-07-q2',
        questionText: 'Why was Mr. Pendelton unable to access his room at 1:30 P.M.?',
        options: [
          { key: 'A', text: 'His credit card payment had not cleared.' },
          { key: 'B', text: 'The room was still being cleaned by housekeeping staff.' },
          { key: 'C', text: 'The hotel had mistakenly given the room to another guest.' },
          { key: 'D', text: 'The electronic door lock was broken.' }
        ],
        correctAnswer: 'B',
        explanation: 'The review notes: "the front desk agent informed us that our suite was still being cleaned by housekeeping and would not be ready until... 3:00 P.M."'
      },
      {
        id: 'p7-07-q3',
        questionText: 'How much was Mr. Pendelton charged for his room before taxes?',
        options: [
          { key: 'A', text: '$210.00' },
          { key: 'B', text: '$420.00' },
          { key: 'C', text: '$474.60' },
          { key: 'D', text: '$54.60' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 1 states: "Nightly Rate: $210.00 x 2 nights = $420.00".'
      }
    ]
  },
  {
    id: 'p7-08',
    title: 'Technical Service Invoice & Discrepancy Email',
    format: 'Multiple Passages',
    type: 'Double Passage (Invoice & Email)',
    passages: [
      {
        label: 'Document 1: Billing Invoice',
        text: `VORTEX HVAC & REFRIGERATION SERVICES
Invoice #VH-55102
Date of Issue: August 12
Billed To: Maple Leaf Bakery, 440 Queen Street West, Toronto
Service Date: August 10

Itemized Charges:
1. Emergency Diagnostic Callout Fee: $150.00
2. Labor: 3.5 hours @ $90.00/hour: $315.00
3. Replacement Compressor Motor (Model CM-40): $480.00
4. Refrigerant Recharge (5 lbs @ $25.00/lb): $125.00
Subtotal: $1,070.00
Harmonized Sales Tax (HST 13%): $139.10
Total Amount Payable: $1,209.10
Payment Due Date: September 11`
      },
      {
        label: 'Document 2: Inquiry Email',
        text: `From: accounting@mapleleafbakery.ca
To: billing@vortexhvac.ca
Date: August 16
Subject: Inquiry regarding Invoice #VH-55102

Dear Vortex Accounts Team,

We have received Invoice #VH-55102 for the emergency repair of our walk-in bakery cooling unit on August 10. While we are very grateful for the rapid response of your technician, Greg, there appears to be a billing discrepancy regarding the labor charge.

Our security entrance log indicates that Greg arrived at our premises at 8:15 A.M. and completed the repair and signature sign-off at 10:45 A.M., which represents a total on-site time of exactly 2.5 hours, rather than the 3.5 hours billed.

Furthermore, under our Preferred Commercial Service Agreement signed last January (Contract #CS-881), emergency callout fees are discounted by 50 percent for commercial culinary clients.

Could you please review these two items and issue an adjusted invoice? We will remit payment promptly once the revised invoice is received.

Warm regards,
Claire Tremblay
Office Manager, Maple Leaf Bakery`
      }
    ],
    questions: [
      {
        id: 'p7-08-q1',
        questionText: 'What appliance was serviced by the technician on August 10?',
        options: [
          { key: 'A', text: 'A commercial bread oven' },
          { key: 'B', text: 'A walk-in bakery cooling unit' },
          { key: 'C', text: 'A computerized dough mixer' },
          { key: 'D', text: 'A building ventilation fan' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 2 specifies: "emergency repair of our walk-in bakery cooling unit on August 10."'
      },
      {
        id: 'p7-08-q2',
        questionText: 'According to Ms. Tremblay, how long was the technician on site?',
        options: [
          { key: 'A', text: '1.5 hours' },
          { key: 'B', text: '2.5 hours' },
          { key: 'C', text: '3.5 hours' },
          { key: 'D', text: '4.0 hours' }
        ],
        correctAnswer: 'B',
        explanation: 'Ms. Tremblay points out: "arrived at our premises at 8:15 A.M. and completed... at 10:45 A.M., which represents a total on-site time of exactly 2.5 hours".'
      },
      {
        id: 'p7-08-q3',
        questionText: 'What contract benefit does Ms. Tremblay claim Maple Leaf Bakery is entitled to?',
        options: [
          { key: 'A', text: 'Free replacement motors' },
          { key: 'B', text: 'A 50 percent discount on the emergency callout fee' },
          { key: 'C', text: 'An exemption from sales tax' },
          { key: 'D', text: 'Ninety days to pay invoices' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 2 notes: "emergency callout fees are discounted by 50 percent for commercial culinary clients."'
      }
    ]
  },
  {
    id: 'p7-09',
    title: 'Corporate Transit Program Notice & Employee Survey',
    format: 'Multiple Passages',
    type: 'Double Passage (Notice & Survey Results)',
    passages: [
      {
        label: 'Document 1: Corporate Commuter Notice',
        text: `SYNERGY PHARMA COMMUTER BENEFIT PROGRAM
Effective Date: January 15

To promote employee wellness and support environmental sustainability, Synergy Pharma is launching three commuting incentive options:

Option A: Public Transit Pass Subsidy — Employees who commute via subway, light rail, or city bus receive a 50% monthly subsidy (up to $100/month) loaded directly onto their regional smartcard.
Option B: Bicycle Commuter Allowance — Staff who commute by bicycle at least 12 days per month receive a $40 monthly maintenance credit for local bicycle repair shops, plus free towel service in the company locker rooms.
Option C: Carpool Fuel Voucher — Vehicles carrying three or more employees receive a $60 monthly fuel card and guaranteed reserved parking spaces in Level 1 of the executive parking deck.

Enrollment takes place through the HR portal. Changes to options can be made quarterly.`
      },
      {
        label: 'Document 2: Employee Commuter Survey Excerpt',
        text: `Excerpt from Annual Sustainability Report (Published October):
Commuter Participation Rates After Six Months:
• Total Employees Enrolled: 640
• Option A (Public Transit): 58% (371 employees)
• Option B (Bicycle Program): 14% (90 employees)
• Option C (Carpooling): 28% (179 employees)

Employee Feedback Highlights:
"The locker room shower facilities and towel service have made cycling to work practical even in humid summer weather. However, many cyclists requested additional covered bike racks near the main entrance, as the current basement storage fills up quickly by 8:30 A.M."`
      }
    ],
    questions: [
      {
        id: 'p7-09-q1',
        questionText: 'What perk is offered exclusively to employees participating in Option C?',
        options: [
          { key: 'A', text: 'A $100 transit pass subsidy' },
          { key: 'B', text: 'Free towel service in locker rooms' },
          { key: 'C', text: 'Reserved parking spaces in the executive deck' },
          { key: 'D', text: 'A quarterly bicycle maintenance card' }
        ],
        correctAnswer: 'C',
        explanation: 'Document 1 states Option C includes: "guaranteed reserved parking spaces in Level 1 of the executive parking deck."'
      },
      {
        id: 'p7-09-q2',
        questionText: 'According to Document 2, which commuter option proved most popular among staff?',
        options: [
          { key: 'A', text: 'Option A (Public Transit)' },
          { key: 'B', text: 'Option B (Bicycle Program)' },
          { key: 'C', text: 'Option C (Carpooling)' },
          { key: 'D', text: 'Private driving' }
        ],
        correctAnswer: 'A',
        explanation: 'Document 2 shows Option A has a 58% participation rate (371 employees), by far the largest.'
      },
      {
        id: 'p7-09-q3',
        questionText: 'What improvement did cycling employees suggest in their feedback?',
        options: [
          { key: 'A', text: 'Increasing the cash allowance to $100' },
          { key: 'B', text: 'Installing more covered bicycle racks near the main entrance' },
          { key: 'C', text: 'Closing the parking garage to non-carpoolers' },
          { key: 'D', text: 'Offering free breakfast to cyclists' }
        ],
        correctAnswer: 'B',
        explanation: 'Feedback excerpt notes: "many cyclists requested additional covered bike racks near the main entrance".'
      }
    ]
  },
  {
    id: 'p7-10',
    title: 'Internal Performance Review Memo & Training Guide',
    format: 'Single Passage',
    type: 'Internal Memo',
    passages: [
      {
        label: 'Human Resources Memorandum',
        text: `To: All Senior Supervisors and Team Leaders
From: Rebecca Sterling, Director of Human Resources Development
Date: November 12
Subject: Revised Annual Performance Appraisal Guidelines

In response to extensive feedback gathered during last spring\'s employee engagement surveys, the executive council has approved substantial updates to our annual appraisal procedure. The traditional once-a-year numeric scoring evaluation is being replaced with our new "Continuous Growth & Development Framework."

Key Updates for the 2026 Review Cycle:
1. Quarterly Check-ins: Supervisors will conduct formal 30-minute developmental coaching sessions once every quarter, rather than holding a single marathon review at year-end. This ensures feedback is timely and actionable.
2. 360-Degree Peer Input: To eliminate supervisory bias, appraisals will now incorporate anonymous feedback from two peers and, where applicable, direct subordinates.
3. Goal Realignment: Professional milestones will be tracked using dynamic Objectives and Key Results (OKRs) inside our new intranet portal, allowing goals to be adjusted as departmental priorities evolve.

Supervisor Training Sessions:
All managers must attend a mandatory two-hour interactive workshop covering constructive coaching techniques and objective evaluation criteria. Sessions will be held in the third-floor training center on November 20, 22, and 24. Please log onto the corporate training portal before November 16 to select your preferred workshop date.

Thank you for your dedicated commitment to cultivating talent across our organization.`
      }
    ],
    questions: [
      {
        id: 'p7-10-q1',
        questionText: 'What major change is being made to employee evaluations?',
        options: [
          { key: 'A', text: 'Reviews will now take place quarterly instead of once a year.' },
          { key: 'B', text: 'Salaries will be determined strictly by customer ratings.' },
          { key: 'C', text: 'Evaluations will be conducted entirely by outside consultants.' },
          { key: 'D', text: 'Appraisals are being eliminated for senior managers.' }
        ],
        correctAnswer: 'A',
        explanation: 'Item 1 specifies: "conduct formal 30-minute developmental coaching sessions once every quarter, rather than holding a single marathon review at year-end."'
      },
      {
        id: 'p7-10-q2',
        questionText: 'What is the stated purpose of incorporating peer feedback?',
        options: [
          { key: 'A', text: 'To reduce the workload of human resources' },
          { key: 'B', text: 'To prevent supervisory bias' },
          { key: 'C', text: 'To identify candidates for overseas transfer' },
          { key: 'D', text: 'To cut corporate training expenses' }
        ],
        correctAnswer: 'B',
        explanation: 'Item 2 states: "To eliminate supervisory bias, appraisals will now incorporate anonymous feedback from two peers..."'
      },
      {
        id: 'p7-10-q3',
        questionText: 'What must supervisors do before November 16?',
        options: [
          { key: 'A', text: 'Submit year-end bonus calculations' },
          { key: 'B', text: 'Sign up for a preferred training workshop date' },
          { key: 'C', text: 'Conduct their first peer review session' },
          { key: 'D', text: 'Order new training textbooks' }
        ],
        correctAnswer: 'B',
        explanation: 'The memo directs: "Please log onto the corporate training portal before November 16 to select your preferred workshop date."'
      }
    ]
  },
  {
    id: 'p7-11',
    title: 'Customer Advisory & Return Policy Notice',
    format: 'Single Passage',
    type: 'Notice',
    passages: [
      {
        label: 'Retail Return & Exchange Policy',
        text: `BEACON & CO. RETAIL STORES — MERCHANDISE POLICY

At Beacon & Co., we stand behind the craftsmanship of our home goods and apparel. If you are not completely satisfied with your purchase, please review the return guidelines below:

Standard Returns:
• Unworn apparel and unopened home merchandise may be returned for a full refund within 30 days of the original purchase date.
• The original paper receipt or digital order confirmation must accompany the merchandise.
• Refunds will be credited back to the original method of payment. Credit card processing typically requires 3 to 5 business days to appear on your bank statement.

Exchanges & Store Credit:
• Returns made between 31 and 60 days of purchase, or returns accompanied by a gift receipt, are eligible for store merchandise credit or an immediate even exchange.
• Store credits never expire and can be redeemed at any Beacon & Co. brick-and-mortar boutique or online.

Non-Returnable Items:
• Monogrammed or custom-embroidered linens
• Intimate apparel and swimwear
• Clearance merchandise marked with red "FINAL SALE" tags

Online Returns by Mail:
Customers may generate a prepaid return shipping label via our website portal. A $6.95 return shipping deduction will be subtracted from your total refund, unless the return is due to a documented defective item or shipping error on our part.`
      }
    ],
    questions: [
      {
        id: 'p7-11-q1',
        questionText: 'What type of refund is provided for eligible items returned on day 45?',
        options: [
          { key: 'A', text: 'A full cash refund' },
          { key: 'B', text: 'Store merchandise credit or an immediate exchange' },
          { key: 'C', text: 'A 50 percent restocking charge' },
          { key: 'D', text: 'No return is permitted after 30 days' }
        ],
        correctAnswer: 'B',
        explanation: 'Under Exchanges & Store Credit: "Returns made between 31 and 60 days of purchase... are eligible for store merchandise credit or an immediate even exchange."'
      },
      {
        id: 'p7-11-q2',
        questionText: 'Which item is NOT eligible for return under any circumstances?',
        options: [
          { key: 'A', text: 'An unworn jacket with tags attached' },
          { key: 'B', text: 'An unopened ceramic dinnerware set' },
          { key: 'C', text: 'A custom-monogrammed linen set' },
          { key: 'D', text: 'Merchandise bought with a gift receipt' }
        ],
        correctAnswer: 'C',
        explanation: 'Under Non-Returnable Items: "Monogrammed or custom-embroidered linens" cannot be returned.'
      },
      {
        id: 'p7-11-q3',
        questionText: 'When is the $6.95 return shipping fee waived for mail-in returns?',
        options: [
          { key: 'A', text: 'When the order value exceeds $100' },
          { key: 'B', text: 'When the customer is returning a defective item or company error' },
          { key: 'C', text: 'When the customer chooses store credit' },
          { key: 'D', text: 'During the annual autumn clearance sale' }
        ],
        correctAnswer: 'B',
        explanation: 'The final line specifies the fee is subtracted "unless the return is due to a documented defective item or shipping error on our part."'
      }
    ]
  },
  {
    id: 'p7-12',
    title: 'Boutique Hotel Conference Package & Client Email',
    format: 'Multiple Passages',
    type: 'Double Passage (Package Brochure & Client Email)',
    passages: [
      {
        label: 'Document 1: Corporate Event Package Brochure',
        text: `PINNACLE MOUNTAIN LODGE & CONFERENCE CENTER
Executive Retreat Packages

Silver Tier ($125 per attendee / day):
• Use of meeting breakout salon (8:00 A.M. - 5:00 P.M.)
• Continental breakfast & continuous morning coffee/tea service
• Standard audiovisual package (digital projector, screen, whiteboard)

Gold Tier ($195 per attendee / day):
• Full access to mountain-view Alpine Ballroom
• Hot buffet lunch prepared by executive chef
• Upgraded audiovisual package (wireless microphones, live streaming setup)
• Afternoon refreshment break featuring artisanal cheese and pastries

Platinum Tier ($275 per attendee / day):
• All Gold Tier inclusions plus:
• Three-course seated dinner in the Cedar Dining Room
• Guided evening nature hike or wine tasting session
• Complimentary high-speed private encrypted Wi-Fi network

Group Accommodation Discount:
Retreats booking 20 or more attendee packages qualify for a 25% discount on deluxe lodge guest rooms.`
      },
      {
        label: 'Document 2: Reservation Inquiry Email',
        text: `From: h.chen@apextechnologies.com
To: events@pinnaclemountainlodge.com
Date: September 5
Subject: Inquiry for 28-Person Executive Retreat in October

Dear Events Team,

Our software executive board is planning a three-day strategic leadership retreat from Wednesday, October 21 through Friday, October 23. We anticipate exactly twenty-eight participants.

We reviewed your retreat brochure and would like to proceed with the Gold Tier package. Because several of our senior board members will be participating remotely from our London and Tokyo offices, the live streaming setup and wireless microphones in the Gold Tier are essential for our presentations.

We will also require overnight guest rooms for all twenty-eight attendees for two nights (October 21 and 22). Based on your brochure, we understand our booking qualifies for the 25% group room discount.

Could you please prepare a detailed itemized cost quotation for the 28 Gold Tier packages and 28 deluxe rooms?

Sincerely,
Howard Chen
Chief of Staff, Apex Technologies`
      }
    ],
    questions: [
      {
        id: 'p7-12-q1',
        questionText: 'Why did Mr. Chen select the Gold Tier package rather than the Silver Tier?',
        options: [
          { key: 'A', text: 'The Silver Tier was sold out on those dates.' },
          { key: 'B', text: 'His team requires live streaming and wireless microphone capabilities.' },
          { key: 'C', text: 'He wanted the complimentary wine tasting session.' },
          { key: 'D', text: 'The Silver Tier does not include coffee service.' }
        ],
        correctAnswer: 'B',
        explanation: 'Mr. Chen explains: "Because several of our senior board members will be participating remotely... the live streaming setup and wireless microphones in the Gold Tier are essential".'
      },
      {
        id: 'p7-12-q2',
        questionText: 'What is the daily package cost per person for the Gold Tier?',
        options: [
          { key: 'A', text: '$125' },
          { key: 'B', text: '$195' },
          { key: 'C', text: '$275' },
          { key: 'D', text: '$325' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 1 lists Gold Tier at "$195 per attendee / day".'
      },
      {
        id: 'p7-12-q3',
        questionText: 'Why does Mr. Chen\'s reservation qualify for the 25% hotel room discount?',
        options: [
          { key: 'A', text: 'He is paying with a corporate platinum card.' },
          { key: 'B', text: 'The retreat has 28 attendees, which exceeds the 20-package minimum threshold.' },
          { key: 'C', text: 'His company has visited the lodge previously.' },
          { key: 'D', text: 'He booked during the autumn off-season promotion.' }
        ],
        correctAnswer: 'B',
        explanation: 'Document 1 states: "Retreats booking 20 or more attendee packages qualify for a 25% discount". Mr. Chen has 28 attendees.'
      }
    ]
  }
];

// ==========================================
// PARTS 2 TO 4 (LISTENING): 15 AUDIO SCRIPTS WITH TTS INTEGRATION
// ==========================================
const RAW_LISTENING_ITEMS: ListeningItem[] = [
  // --- Part 2: Question-Response (Items 1 to 5) ---
  {
    id: 'list-01',
    part: 2,
    type: 'Question-Response',
    audioScript: `Number 1. When will the quarterly revenue report be ready for distribution?
(A) In the conference room on the second floor.
(B) Mr. Vance is reviewing the final revisions right now.
(C) Yes, I reported the damaged printer.`,
    questions: [
      {
        id: 'list-01-q1',
        questionText: 'Select the best response to the spoken question: "When will the quarterly revenue report be ready for distribution?"',
        options: [
          { key: 'A', text: '(A) In the conference room on the second floor.' },
          { key: 'B', text: '(B) Mr. Vance is reviewing the final revisions right now.' },
          { key: 'C', text: '(C) Yes, I reported the damaged printer.' }
        ],
        correctAnswer: 'B',
        explanation: 'Answering a "When" question with an indirect status update ("Mr. Vance is reviewing final revisions right now") is a classic TOEIC response. A answers "Where", and C starts with "Yes" (invalid for "When").'
      }
    ]
  },
  {
    id: 'list-02',
    part: 2,
    type: 'Question-Response',
    audioScript: `Number 2. Who was appointed as the new head of European operations?
(A) The appointment was scheduled for two o\'clock.
(B) Ms. Rostova from the Frankfurt branch.
(C) Across the hall from the cafeteria.`,
    questions: [
      {
        id: 'list-02-q1',
        questionText: 'Select the best response: "Who was appointed as the new head of European operations?"',
        options: [
          { key: 'A', text: '(A) The appointment was scheduled for two o\'clock.' },
          { key: 'B', text: '(B) Ms. Rostova from the Frankfurt branch.' },
          { key: 'C', text: '(C) Across the hall from the cafeteria.' }
        ],
        correctAnswer: 'B',
        explanation: 'Directly answers "Who" with a person and affiliation: "Ms. Rostova from the Frankfurt branch." A repeats "appointed/appointment" as an acoustic distractor.'
      }
    ]
  },
  {
    id: 'list-03',
    part: 2,
    type: 'Question-Response',
    audioScript: `Number 3. Could you give me a ride to the airport tomorrow morning?
(A) My car is still at the repair garage.
(B) A round-trip ticket to Chicago.
(C) Yes, flight 814 has already departed.`,
    questions: [
      {
        id: 'list-03-q1',
        questionText: 'Select the best response: "Could you give me a ride to the airport tomorrow morning?"',
        options: [
          { key: 'A', text: '(A) My car is still at the repair garage.' },
          { key: 'B', text: '(B) A round-trip ticket to Chicago.' },
          { key: 'C', text: '(C) Yes, flight 814 has already departed.' }
        ],
        correctAnswer: 'A',
        explanation: 'Option A provides a polite, indirect refusal explaining why the speaker cannot provide a ride ("My car is in the repair garage").'
      }
    ]
  },
  {
    id: 'list-04',
    part: 2,
    type: 'Question-Response',
    audioScript: `Number 4. Should we order catering from the Italian deli or eat at the cafeteria?
(A) Twelve slices of bread.
(B) Neither, the executive meeting was postponed until Friday.
(C) Yes, I ordered the supplies yesterday.`,
    questions: [
      {
        id: 'list-04-q1',
        questionText: 'Select the best response: "Should we order catering from the Italian deli or eat at the cafeteria?"',
        options: [
          { key: 'A', text: '(A) Twelve slices of bread.' },
          { key: 'B', text: '(B) Neither, the executive meeting was postponed until Friday.' },
          { key: 'C', text: '(C) Yes, I ordered the supplies yesterday.' }
        ],
        correctAnswer: 'B',
        explanation: 'Alternative question (A or B). The speaker chooses "Neither" because the meeting was postponed. Alternative questions cannot be answered with "Yes" or "No".'
      }
    ]
  },
  {
    id: 'list-05',
    part: 2,
    type: 'Question-Response',
    audioScript: `Number 5. The presentation to the prospective client went remarkably well this afternoon.
(A) That is such a relief to hear!
(B) He presented his identification badge.
(C) At three o\'clock in conference room B.`,
    questions: [
      {
        id: 'list-05-q1',
        questionText: 'Select the best response: "The presentation to the prospective client went remarkably well this afternoon."',
        options: [
          { key: 'A', text: '(A) That is such a relief to hear!' },
          { key: 'B', text: '(B) He presented his identification badge.' },
          { key: 'C', text: '(C) At three o\'clock in conference room B.' }
        ],
        correctAnswer: 'A',
        explanation: 'Declarative statement. An empathetic coworker reaction expressing relief ("That is such a relief to hear!") is the natural dialogue response.'
      }
    ]
  },

  // --- Part 3: Conversations (Items 6 to 10) ---
  {
    id: 'list-06',
    part: 3,
    type: 'Conversation',
    audioScript: `Questions 1 through 3 refer to the following conversation.
Man: Good morning, Clara. Did you get a chance to look over the blueprints for the new distribution warehouse in Denver?
Woman: Yes, David. The layout looks very efficient, but I noticed the loading dock only has two bays for freight trailers. Given our projected shipping volume, I think we really need at least four bays to avoid bottleneck delays.
Man: That\'s a good point. Expanding to four bays will increase our initial excavation budget by about twelve percent, but it will save us a lot of headaches later.
Woman: Exactly. Why don\'t I contact the lead architect, Mr. Tanaka, and ask him to draw up a revised blueprint before our board meeting on Thursday?
Man: Perfect. While you do that, I\'ll update the financial projections so the board can review the adjusted figures.`,
    questions: [
      {
        id: 'list-06-q1',
        questionText: 'What problem does the woman identify in the blueprints?',
        options: [
          { key: 'A', text: 'The office area is too small.' },
          { key: 'B', text: 'There are not enough loading bays for freight trucks.' },
          { key: 'C', text: 'The parking lot lacks electric vehicle chargers.' },
          { key: 'D', text: 'The roof construction violates zoning regulations.' }
        ],
        correctAnswer: 'B',
        explanation: 'The woman states: "I noticed the loading dock only has two bays... I think we really need at least four bays to avoid bottleneck delays."'
      },
      {
        id: 'list-06-q2',
        questionText: 'What does the woman offer to do?',
        options: [
          { key: 'A', text: 'Contact the architect to request revised drawings' },
          { key: 'B', text: 'Reserve a conference room for Thursday' },
          { key: 'C', text: 'Inspect the construction site in Denver' },
          { key: 'D', text: 'Order new loading dock equipment' }
        ],
        correctAnswer: 'A',
        explanation: 'The woman says: "Why don\'t I contact the lead architect, Mr. Tanaka, and ask him to draw up a revised blueprint..."'
      },
      {
        id: 'list-06-q3',
        questionText: 'What will the man do next?',
        options: [
          { key: 'A', text: 'Fly to Denver' },
          { key: 'B', text: 'Update the project financial figures' },
          { key: 'C', text: 'Cancel the Thursday board meeting' },
          { key: 'D', text: 'Hire a new excavation contractor' }
        ],
        correctAnswer: 'B',
        explanation: 'The man concludes: "While you do that, I\'ll update the financial projections so the board can review the adjusted figures."'
      }
    ]
  },
  {
    id: 'list-07',
    part: 3,
    type: 'Conversation',
    audioScript: `Questions 1 through 3 refer to the following conversation.
Woman: Excuse me, Mark. Have you had any issues printing color documents from the third-floor printer this morning?
Man: Actually, yes! Every time I try to print our client presentation slides, the pages come out with heavy black streaks down the right margin.
Woman: That sounds like the imaging drum needs replacement. I called facilities management twenty minutes ago, but they said their technician is currently in building B repairing an air conditioning unit.
Man: Well, our meeting with the prospective investors is in forty-five minutes, so we can\'t wait for him.
Woman: You\'re right. The marketing team on the fifth floor has a heavy-duty color printer. I know their director, Sarah. Let me call her and ask if we can print our sixty copies up there.
Man: Thanks, Clara. That would be a lifesaver. I\'ll stay here and assemble the presentation binders.`,
    questions: [
      {
        id: 'list-07-q1',
        questionText: 'What problem are the speakers experiencing?',
        options: [
          { key: 'A', text: 'Their office internet connection is disconnected.' },
          { key: 'B', text: 'A printer is producing streaked pages.' },
          { key: 'C', text: 'An investor meeting has been cancelled.' },
          { key: 'D', text: 'The air conditioning in building B is broken.' }
        ],
        correctAnswer: 'B',
        explanation: 'The man reports: "the pages come out with heavy black streaks down the right margin."'
      },
      {
        id: 'list-07-q2',
        questionText: 'Why does the man say, "our meeting with the prospective investors is in forty-five minutes"?',
        options: [
          { key: 'A', text: 'To urge the woman to find an immediate alternative solution' },
          { key: 'B', text: 'To complain about investor punctuality' },
          { key: 'C', text: 'To reschedule the investor presentation' },
          { key: 'D', text: 'To invite the woman to join the meeting' }
        ],
        correctAnswer: 'A',
        explanation: 'He points out the imminent deadline to emphasize that they cannot afford to wait for the technician.'
      },
      {
        id: 'list-07-q3',
        questionText: 'What does the woman suggest doing?',
        options: [
          { key: 'A', text: 'Purchasing a new printer online' },
          { key: 'B', text: 'Using a color printer located on the fifth floor' },
          { key: 'C', text: 'Sending the slides to investors by email instead' },
          { key: 'D', text: 'Postponing the presentation until tomorrow' }
        ],
        correctAnswer: 'B',
        explanation: 'The woman suggests: "The marketing team on the fifth floor has a heavy-duty color printer... Let me call her and ask if we can print our sixty copies up there."'
      }
    ]
  },
  {
    id: 'list-08',
    part: 3,
    type: 'Conversation',
    audioScript: `Questions 1 through 3 refer to the following conversation.
Man: Hi, Rachel. Are you all packed for the annual cybersecurity summit in Vancouver tomorrow?
Woman: Almost, Greg. But I just checked my flight status on the airline app, and our 7:30 A.M. departure was cancelled due to a mechanical issue with the aircraft.
Man: Oh no! Did the airline automatically rebook us onto another flight?
Woman: They offered to put us on a 3:00 P.M. flight, but if we take that one, we\'ll miss the opening keynote speech by Dr. Aris Thorne at 1:00 P.M.
Man: That keynote was the main reason our department funded this trip. Isn\'t there an express train leaving Seattle around 6:00 A.M.?
Woman: That\'s a great idea! The morning train arrives in downtown Vancouver by 10:30 A.M., which gives us plenty of time to check into the hotel and get to the convention center before noon.
Man: Great. I\'ll book two train tickets right now on the transit portal, and you can cancel our airline reservation for a full refund.`,
    questions: [
      {
        id: 'list-08-q1',
        questionText: 'What problem does the woman describe?',
        options: [
          { key: 'A', text: 'Her hotel reservation was lost.' },
          { key: 'B', text: 'Her morning flight was cancelled.' },
          { key: 'C', text: 'The keynote speaker postponed his talk.' },
          { key: 'D', text: 'The conference registration fee was rejected.' }
        ],
        correctAnswer: 'B',
        explanation: 'The woman explains: "our 7:30 A.M. departure was cancelled due to a mechanical issue with the aircraft."'
      },
      {
        id: 'list-08-q2',
        questionText: 'Why do the speakers reject the 3:00 P.M. flight offer?',
        options: [
          { key: 'A', text: 'It was too expensive.' },
          { key: 'B', text: 'They would miss an important keynote speech at 1:00 P.M.' },
          { key: 'C', text: 'The flight requires two layovers.' },
          { key: 'D', text: 'There were no business class seats available.' }
        ],
        correctAnswer: 'B',
        explanation: 'She notes: "if we take that one, we\'ll miss the opening keynote speech by Dr. Aris Thorne at 1:00 P.M."'
      },
      {
        id: 'list-08-q3',
        questionText: 'How will the speakers travel to Vancouver?',
        options: [
          { key: 'A', text: 'By rental car' },
          { key: 'B', text: 'By morning passenger train' },
          { key: 'C', text: 'By evening flight' },
          { key: 'D', text: 'By charter bus' }
        ],
        correctAnswer: 'B',
        explanation: 'They agree to take the 6:00 A.M. morning train: "I\'ll book two train tickets right now on the transit portal...".'
      }
    ]
  },
  {
    id: 'list-09',
    part: 3,
    type: 'Conversation',
    audioScript: `Questions 1 through 3 refer to the following conversation.
Woman: Good afternoon, Arthur. Do you have a moment to talk about our software licensing budget for next quarter?
Man: Sure, Elena. What\'s on your mind?
Woman: Well, our cloud analytics provider, Datametric, announced they are increasing their monthly per-user subscription rate by fifteen percent starting January 1st.
Man: That\'s a steep increase. We currently have eighty employees using that software, so that would add nearly twenty thousand dollars to our annual IT overhead.
Woman: Exactly. However, I reached out to a competing platform, CloudStream Analytics. They offered us a price-lock guarantee for three years at our current rate, plus free data migration and staff onboarding.
Man: That sounds very compelling. Before we make a commitment, though, let\'s set up a one-week pilot test with five of our senior data engineers to ensure the interface meets our workflow needs.
Woman: Good plan. I\'ll contact CloudStream today to request demo credentials for the pilot group.`,
    questions: [
      {
        id: 'list-09-q1',
        questionText: 'What problem are the speakers discussing?',
        options: [
          { key: 'A', text: 'A vendor is increasing software subscription rates.' },
          { key: 'B', text: 'Several software engineers have resigned.' },
          { key: 'C', text: 'A cloud database suffered a security breach.' },
          { key: 'D', text: 'The company needs to cut eighty jobs.' }
        ],
        correctAnswer: 'A',
        explanation: 'The woman reports: "Datametric, announced they are increasing their monthly per-user subscription rate by fifteen percent..."'
      },
      {
        id: 'list-09-q2',
        questionText: 'What advantage does CloudStream Analytics offer?',
        options: [
          { key: 'A', text: 'A three-year price guarantee and free migration' },
          { key: 'B', text: 'Free hardware upgrades for all staff' },
          { key: 'C', text: 'An on-site permanent technician' },
          { key: 'D', text: 'Unlimited free user accounts' }
        ],
        correctAnswer: 'A',
        explanation: 'The woman states: "They offered us a price-lock guarantee for three years at our current rate, plus free data migration and staff onboarding."'
      },
      {
        id: 'list-09-q3',
        questionText: 'What will the speakers do before making a final decision?',
        options: [
          { key: 'A', text: 'Conduct a pilot trial with a small group of engineers' },
          { key: 'B', text: 'Consult the corporate legal attorney' },
          { key: 'C', text: 'Cancel all software subscriptions' },
          { key: 'D', text: 'Wait until the annual general meeting' }
        ],
        correctAnswer: 'A',
        explanation: 'The man suggests: "let\'s set up a one-week pilot test with five of our senior data engineers..."'
      }
    ]
  },
  {
    id: 'list-10',
    part: 3,
    type: 'Conversation',
    audioScript: `Questions 1 through 3 refer to the following conversation.
Man: Hi, Sonia. Have you seen the revised catering menu for the annual awards banquet next Friday?
Woman: Yes, Kevin. The hotel catering manager sent it over this morning. Everything looks delicious, but they forgot to include a vegetarian entrée option for the main course.
Man: Oh, that\'s right! We have at least twelve attendees who indicated dietary restrictions on their RSVP cards.
Woman: I\'ll call the banquet coordinator, Chef Laurent, immediately to ask for a roasted vegetable risotto or pasta alternative.
Man: Great. While you do that, I\'ll finalize the seating chart and send the name badge file to the commercial printer.
Woman: Sounds like a plan. Let\'s touch base again at 3:00 P.M. to make sure all preparations are locked in.`,
    questions: [
      {
        id: 'list-10-q1',
        questionText: 'What event are the speakers organizing?',
        options: [
          { key: 'A', text: 'An annual awards banquet' },
          { key: 'B', text: 'A product launch press conference' },
          { key: 'C', text: 'A shareholder general meeting' },
          { key: 'D', text: 'A university graduation ceremony' }
        ],
        correctAnswer: 'A',
        explanation: 'The man opens: "Have you seen the revised catering menu for the annual awards banquet next Friday?"'
      },
      {
        id: 'list-10-q2',
        questionText: 'What oversight did the woman notice on the menu?',
        options: [
          { key: 'A', text: 'Dessert was omitted.' },
          { key: 'B', text: 'There was no vegetarian entrée choice.' },
          { key: 'C', text: 'Prices were listed in the wrong currency.' },
          { key: 'D', text: 'Beverages were not included.' }
        ],
        correctAnswer: 'B',
        explanation: 'The woman observes: "they forgot to include a vegetarian entrée option for the main course."'
      },
      {
        id: 'list-10-q3',
        questionText: 'What will the man do next?',
        options: [
          { key: 'A', text: 'Call Chef Laurent' },
          { key: 'B', text: 'Finalize the seating arrangement and send badges to print' },
          { key: 'C', text: 'Cancel the banquet reservations' },
          { key: 'D', text: 'Collect RSVP cards from employees' }
        ],
        correctAnswer: 'B',
        explanation: 'The man confirms: "While you do that, I\'ll finalize the seating chart and send the name badge file to the commercial printer."'
      }
    ]
  },

  // --- Part 4: Short Talks (Items 11 to 15) ---
  {
    id: 'list-11',
    part: 4,
    type: 'Short Talk',
    audioScript: `Questions 1 through 3 refer to the following airport announcement.
Attention passengers booked on Continental Express Flight 642 with nonstop service to London Heathrow. Due to late incoming aircraft arrival caused by weather delays over the Atlantic, our departure gate has been reassigned from Gate B12 to Gate C24. In addition, boarding will now commence at approximately 4:45 P.M., forty minutes behind our scheduled time.

Passengers requiring priority boarding assistance or traveling with small children are requested to proceed to Gate C24 now. Overhead compartment carry-on luggage is strictly limited to one personal item and one standard rollaboard bag per passenger. Please ensure all personal items are tagged with your name and contact phone number. Thank you for your patience and cooperation.`,
    questions: [
      {
        id: 'list-11-q1',
        questionText: 'Where is the announcement most likely being broadcast?',
        options: [
          { key: 'A', text: 'On board a passenger train' },
          { key: 'B', text: 'At an airport departure terminal' },
          { key: 'C', text: 'Inside a hotel lobby' },
          { key: 'D', text: 'At a subway station' }
        ],
        correctAnswer: 'B',
        explanation: 'Flight numbers, gate reassignments, and boarding instructions place the announcement inside an airport terminal.'
      },
      {
        id: 'list-11-q2',
        questionText: 'What change has been made to Flight 642?',
        options: [
          { key: 'A', text: 'It has been cancelled entirely.' },
          { key: 'B', text: 'Its departure gate and boarding time have been changed.' },
          { key: 'C', text: 'It will make an unscheduled stop in Paris.' },
          { key: 'D', text: 'Passengers must collect their luggage immediately.' }
        ],
        correctAnswer: 'B',
        explanation: 'The speaker states: "departure gate has been reassigned from Gate B12 to Gate C24... boarding will now commence at approximately 4:45 P.M."'
      },
      {
        id: 'list-11-q3',
        questionText: 'What are passengers reminded to do?',
        options: [
          { key: 'A', text: 'Exchange foreign currency' },
          { key: 'B', text: 'Ensure carry-on bags have name tags attached' },
          { key: 'C', text: 'Purchase meal vouchers at the kiosk' },
          { key: 'D', text: 'Turn off mobile phones completely' }
        ],
        correctAnswer: 'B',
        explanation: 'The announcement reminds passengers: "Please ensure all personal items are tagged with your name and contact phone number."'
      }
    ]
  },
  {
    id: 'list-12',
    part: 4,
    type: 'Short Talk',
    audioScript: `Questions 1 through 3 refer to the following telephone message.
Hello, Ms. Tremblay. This is Marcus Vance calling from Apex Fleet Maintenance. I\'m calling regarding the commercial delivery van your company brought in yesterday morning for transmission repairs.

Our technicians completed the diagnostic inspection, and the good news is that the transmission fluid pump did not need replacement. We only had to replace a worn sensor valve and flush the cooling lines. The total cost, including parts and labor, comes out to $340, which is significantly lower than our initial estimate of $850.

The vehicle is fully assembled, road-tested, and ready for pickup at our West Avenue service garage anytime before 6:00 P.M. today. When you arrive, please ask for Carlos at the cashier counter. If you need us to keep the van overnight in our secured garage lot, please call me back at 555-0194. Thank you for your business.`,
    questions: [
      {
        id: 'list-12-q1',
        questionText: 'What is the primary purpose of the telephone message?',
        options: [
          { key: 'A', text: 'To schedule an annual vehicle inspection' },
          { key: 'B', text: 'To report that a delivery vehicle has been repaired and is ready for pickup' },
          { key: 'C', text: 'To order spare transmission components' },
          { key: 'D', text: 'To dispute an unpaid billing charge' }
        ],
        correctAnswer: 'B',
        explanation: 'The caller announces the van is repaired, costs less than expected, and is ready for pickup.'
      },
      {
        id: 'list-12-q2',
        questionText: 'Why was the final cost lower than the original estimate?',
        options: [
          { key: 'A', text: 'A warranty coupon was applied.' },
          { key: 'B', text: 'The transmission pump did not require replacement.' },
          { key: 'C', text: 'Labor charges were waived.' },
          { key: 'D', text: 'The customer provided their own replacement parts.' }
        ],
        correctAnswer: 'B',
        explanation: 'The speaker explains: "the good news is that the transmission fluid pump did not need replacement. We only had to replace a worn sensor valve..."'
      },
      {
        id: 'list-12-q3',
        questionText: 'What should Ms. Tremblay do when she arrives at the garage?',
        options: [
          { key: 'A', text: 'Present a driver\'s license to security' },
          { key: 'B', text: 'Ask for Carlos at the cashier counter' },
          { key: 'C', text: 'Sign an insurance waiver form' },
          { key: 'D', text: 'Test-drive the vehicle on the highway' }
        ],
        correctAnswer: 'B',
        explanation: 'Marcus directs: "When you arrive, please ask for Carlos at the cashier counter."'
      }
    ]
  },
  {
    id: 'list-13',
    part: 4,
    type: 'Short Talk',
    audioScript: `Questions 1 through 3 refer to the following corporate broadcast.
Good morning, all Apex Technologies personnel. This is Chief Sustainability Officer David Kim with a brief announcement regarding our facility energy-conservation campaign.

As part of our commitment to reaching net-zero carbon operations by 2030, our facilities management team will be upgrading all interior light fixtures to smart motion-detecting LED systems throughout next week. Contractors will be working floor by floor, beginning on the first floor on Monday and concluding on the fifth floor on Friday. Work will take place after normal business hours, between 6:00 P.M. and 10:00 P.M., so daily office activities will not be disrupted.

However, we kindly ask all employees to clear any personal items off their desk surfaces before leaving each evening to allow technicians safe access to ceiling fixtures. Thank you for your cooperation as we modernize our headquarters into a sustainable, energy-efficient workplace.`,
    questions: [
      {
        id: 'list-13-q1',
        questionText: 'What project is being announced in the broadcast?',
        options: [
          { key: 'A', text: 'An upgrade to energy-saving smart LED light fixtures' },
          { key: 'B', text: 'Installation of a new rooftop cafeteria' },
          { key: 'C', text: 'A mandatory reduction in weekly working hours' },
          { key: 'D', text: 'Replacement of company desktop computers' }
        ],
        correctAnswer: 'A',
        explanation: 'David Kim announces: "upgrading all interior light fixtures to smart motion-detecting LED systems throughout next week."'
      },
      {
        id: 'list-13-q2',
        questionText: 'Why will daily work not be disrupted?',
        options: [
          { key: 'A', text: 'All work is being done remotely.' },
          { key: 'B', text: 'Contractors will work after business hours between 6:00 P.M. and 10:00 P.M.' },
          { key: 'C', text: 'The building will be closed for a holiday.' },
          { key: 'D', text: 'Technicians will work only on the roof.' }
        ],
        correctAnswer: 'B',
        explanation: 'He clarifies: "Work will take place after normal business hours, between 6:00 P.M. and 10:00 P.M., so daily office activities will not be disrupted."'
      },
      {
        id: 'list-13-q3',
        questionText: 'What are staff requested to do each evening?',
        options: [
          { key: 'A', text: 'Unplug their computers' },
          { key: 'B', text: 'Clear personal objects from their desk tops' },
          { key: 'C', text: 'Lock their office doors' },
          { key: 'D', text: 'Leave desk lamps turned on' }
        ],
        correctAnswer: 'B',
        explanation: 'Employees are asked to "clear any personal items off their desk surfaces before leaving each evening".'
      }
    ]
  },
  {
    id: 'list-14',
    part: 4,
    type: 'Short Talk',
    audioScript: `Questions 1 through 3 refer to the following museum tour introduction.
Welcome, everyone, to the Maritime Heritage Museum. My name is Gordon, and I will be guiding you through our special exhibition: "Trade Routes of the Pacific: 1850 to 1950."

Today, you will see authentic navigational instruments, hand-drawn nautical charts, and scale models of cargo clipper ships that transported tea and spices across the globe. Before we enter the exhibition hall, I have two quick reminders. First, while photography is permitted throughout the galleries, the use of flash is strictly prohibited, as bright light deteriorates the fragile 19th-century pigments on the canvas maps. Second, please silence all mobile phones so as not to disturb other patrons.

At the conclusion of our 45-minute tour, you are welcome to visit our rooftop terrace café or explore the museum gift shop on the ground floor. Let\'s begin our journey inside Gallery 1 right through these glass doors.`,
    questions: [
      {
        id: 'list-14-q1',
        questionText: 'Who is the speaker?',
        options: [
          { key: 'A', text: 'A ship captain' },
          { key: 'B', text: 'A museum tour guide' },
          { key: 'C', text: 'A café manager' },
          { key: 'D', text: 'An antique auctioneer' }
        ],
        correctAnswer: 'B',
        explanation: 'The speaker introduces himself: "My name is Gordon, and I will be guiding you through our special exhibition: Trade Routes of the Pacific..."'
      },
      {
        id: 'list-14-q2',
        questionText: 'Why is flash photography prohibited?',
        options: [
          { key: 'A', text: 'It triggers security alarms.' },
          { key: 'B', text: 'It can damage delicate antique canvas maps.' },
          { key: 'C', text: 'It distracts the tour guide.' },
          { key: 'D', text: 'The museum has exclusive copyright contracts.' }
        ],
        correctAnswer: 'B',
        explanation: 'Gordon warns: "the use of flash is strictly prohibited, as bright light deteriorates the fragile 19th-century pigments on the canvas maps."'
      },
      {
        id: 'list-14-q3',
        questionText: 'What will visitors do at the end of the tour?',
        options: [
          { key: 'A', text: 'Board an authentic clipper ship' },
          { key: 'B', text: 'Visit the café or museum gift shop' },
          { key: 'C', text: 'Take a written navigation test' },
          { key: 'D', text: 'Return audio headsets to the desk' }
        ],
        correctAnswer: 'B',
        explanation: 'Gordon states: "you are welcome to visit our rooftop terrace café or explore the museum gift shop on the ground floor."'
      }
    ]
  },
  {
    id: 'list-15',
    part: 4,
    type: 'Short Talk',
    audioScript: `Questions 1 through 3 refer to the following radio broadcast.
This is Brenda Miller with your 98.5 FM Midday Business Briefing.

Shares of global pharmaceutical leader BioCrest jumped nearly eight percent in morning trading following the announcement that the European Medicines Agency has approved their breakthrough allergy treatment, RespiCare. The inhalable medication is designed to provide 24-hour symptom relief with fewer side effects than traditional antihistamines.

BioCrest announced that commercial manufacturing will commence immediately at their expanded production facility in Dublin, with pharmacy distribution across sixteen European nations scheduled to begin by mid-November. Analysts forecast that RespiCare could generate upwards of €400 million in annual gross revenue within its first two years on the market.

Coming up after the break: how rising international ocean freight container rates are impacting local holiday retail inventories. Stay tuned.`,
    questions: [
      {
        id: 'list-15-q1',
        questionText: 'What is the main topic of the business news report?',
        options: [
          { key: 'A', text: 'Regulatory approval of a new pharmaceutical medication' },
          { key: 'B', text: 'A corporate bankruptcy filing by an airline' },
          { key: 'C', text: 'A worker strike at an Irish factory' },
          { key: 'D', text: 'A drop in European stock markets' }
        ],
        correctAnswer: 'A',
        explanation: 'The broadcast reports: "Shares of global pharmaceutical leader BioCrest jumped... following the announcement that the European Medicines Agency has approved their breakthrough allergy treatment, RespiCare."'
      },
      {
        id: 'list-15-q2',
        questionText: 'Where will commercial production take place?',
        options: [
          { key: 'A', text: 'London' },
          { key: 'B', text: 'Dublin' },
          { key: 'C', text: 'Frankfurt' },
          { key: 'D', text: 'Geneva' }
        ],
        correctAnswer: 'B',
        explanation: 'The report specifies: "commercial manufacturing will commence immediately at their expanded production facility in Dublin".'
      },
      {
        id: 'list-15-q3',
        questionText: 'What will be discussed after the commercial break?',
        options: [
          { key: 'A', text: 'Local weather forecasts' },
          { key: 'B', text: 'The impact of ocean freight rates on retail supplies' },
          { key: 'C', text: 'An interview with a hospital doctor' },
          { key: 'D', text: 'Tips for opening a small business' }
        ],
        correctAnswer: 'B',
        explanation: 'The anchor announces: "Coming up after the break: how rising international ocean freight container rates are impacting local holiday retail inventories."'
      }
    ]
  }
];

export const PART_5_QUESTIONS: PracticeQuestion[] = [
  ...balanceFlat(RAW_PART_5_QUESTIONS, 5),
  ...(part5Extra as unknown as PracticeQuestion[]),
];
export const PART_6_PASSAGES: Part6Passage[] = [
  ...balanceNested(RAW_PART_6_PASSAGES, 6),
  ...(part6Extra as unknown as Part6Passage[]),
];
// Part 7 explanations quote "Option A/B/C" from inside the documents, so they are left untouched.
export const PART_7_PASSAGES: Part7Passage[] = [
  ...balanceNested(RAW_PART_7_PASSAGES, 7, false),
  ...(part7Extra as unknown as Part7Passage[]),
];
export const LISTENING_ITEMS: ListeningItem[] = [
  ...(part1Extra as unknown as ListeningItem[]),
  ...balanceNested(RAW_LISTENING_ITEMS, 11),
  ...(part2Extra as unknown as ListeningItem[]),
  ...(part3Extra as unknown as ListeningItem[]),
  ...(part4Extra as unknown as ListeningItem[]),
];
