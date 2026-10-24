import { balanceFlat } from './balance';
import { PracticeQuestion, QuestionOption } from '../types';

export interface ExamQuestion {
  number: number;
  id: string;
  part: 5 | 6 | 7;
  questionText: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  passageText?: string;
  passageTitle?: string;
}

const RAW_EXAM_40_QUESTIONS: ExamQuestion[] = [
  // --- PART 5: QUESTIONS 1 - 20 ---
  {
    number: 1,
    id: 'exam-01',
    part: 5,
    questionText: 'Ms. Diaz was _______ promoted to Senior Vice President of European Operations after leading the Frankfurt office for five years.',
    options: [
      { key: 'A', text: 'recent' },
      { key: 'B', text: 'recently' },
      { key: 'C', text: 'recency' },
      { key: 'D', text: 'recentness' }
    ],
    correctAnswer: 'B',
    explanation: 'Adverb modifying the passive verb "was promoted": "recently".'
  },
  {
    number: 2,
    id: 'exam-02',
    part: 5,
    questionText: '_______ the economic downturn, Apex Logistics reported record quarterly profits due to expanded air freight routes.',
    options: [
      { key: 'A', text: 'Although' },
      { key: 'B', text: 'Despite' },
      { key: 'C', text: 'Even though' },
      { key: 'D', text: 'Whereas' }
    ],
    correctAnswer: 'B',
    explanation: '"The economic downturn" is a noun phrase; preposition "Despite" is required.'
  },
  {
    number: 3,
    id: 'exam-03',
    part: 5,
    questionText: 'All travel expense reimbursement claims must be submitted to the finance department _______ Friday at 5:00 P.M.',
    options: [
      { key: 'A', text: 'by' },
      { key: 'B', text: 'until' },
      { key: 'C', text: 'during' },
      { key: 'D', text: 'while' }
    ],
    correctAnswer: 'A',
    explanation: '"By" indicates the completion deadline (at or before 5:00 P.M.).'
  },
  {
    number: 4,
    id: 'exam-04',
    part: 5,
    questionText: 'The newly hired chief technology officer has proven remarkably _______ at restructuring the enterprise software architecture.',
    options: [
      { key: 'A', text: 'adept' },
      { key: 'B', text: 'adapt' },
      { key: 'C', text: 'adoption' },
      { key: 'D', text: 'adeptly' }
    ],
    correctAnswer: 'A',
    explanation: 'Predicate adjective "adept" followed by "at": skilled, proficient.'
  },
  {
    number: 5,
    id: 'exam-05',
    part: 5,
    questionText: 'As soon as the senior auditor _______ at headquarters tomorrow, the opening briefing will commence.',
    options: [
      { key: 'A', text: 'arrives' },
      { key: 'B', text: 'will arrive' },
      { key: 'C', text: 'arrived' },
      { key: 'D', text: 'is arriving' }
    ],
    correctAnswer: 'A',
    explanation: 'In a future adverb time clause introduced by "As soon as", use the simple present "arrives".'
  },
  {
    number: 6,
    id: 'exam-06',
    part: 5,
    questionText: 'The committee members reviewed the vendor contract _______ before appending their official signatures.',
    options: [
      { key: 'A', text: 'careful' },
      { key: 'B', text: 'carefully' },
      { key: 'C', text: 'caring' },
      { key: 'D', text: 'care' }
    ],
    correctAnswer: 'B',
    explanation: 'Adverb modifying the verb "reviewed": "carefully".'
  },
  {
    number: 7,
    id: 'exam-07',
    part: 5,
    questionText: 'Neither the regional marketing director nor the branch supervisors _______ informed of the sudden policy alteration.',
    options: [
      { key: 'A', text: 'was' },
      { key: 'B', text: 'were' },
      { key: 'C', text: 'is' },
      { key: 'D', text: 'has been' }
    ],
    correctAnswer: 'B',
    explanation: 'In "neither... nor", the verb agrees with the closer plural subject ("branch supervisors" -> "were").'
  },
  {
    number: 8,
    id: 'exam-08',
    part: 5,
    questionText: 'Contractors working on the refinery project must strictly adhere _______ industrial occupational health standards.',
    options: [
      { key: 'A', text: 'to' },
      { key: 'B', text: 'with' },
      { key: 'C', text: 'for' },
      { key: 'D', text: 'on' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "adhere" always takes the dependent preposition "to" ("adhere to standards").'
  },
  {
    number: 9,
    id: 'exam-09',
    part: 5,
    questionText: '_______ you experience any difficulty activating your virtual desktop credentials, please notify the IT desk.',
    options: [
      { key: 'A', text: 'Should' },
      { key: 'B', text: 'Would' },
      { key: 'C', text: 'Could' },
      { key: 'D', text: 'Were' }
    ],
    correctAnswer: 'A',
    explanation: 'Inverted first conditional: "Should you experience..." replaces "If you experience...".'
  },
  {
    number: 10,
    id: 'exam-10',
    part: 5,
    questionText: 'The human resources department announced that attendance at the annual ethics seminar is _______ for all personnel.',
    options: [
      { key: 'A', text: 'mandatory' },
      { key: 'B', text: 'mandate' },
      { key: 'C', text: 'mandatorily' },
      { key: 'D', text: 'mandating' }
    ],
    correctAnswer: 'A',
    explanation: 'Predicate adjective after linking verb "is": "mandatory".'
  },
  {
    number: 11,
    id: 'exam-11',
    part: 5,
    questionText: 'Our research and development team completed the software assessment faster than _______ did.',
    options: [
      { key: 'A', text: 'their' },
      { key: 'B', text: 'theirs' },
      { key: 'C', text: 'them' },
      { key: 'D', text: 'themselves' }
    ],
    correctAnswer: 'B',
    explanation: 'Possessive pronoun "theirs" stands for "their research and development team".'
  },
  {
    number: 12,
    id: 'exam-12',
    part: 5,
    questionText: 'The legal counsel advised the board that the non-disclosure agreement was legally _______ in federal court.',
    options: [
      { key: 'A', text: 'enforceable' },
      { key: 'B', text: 'exhaustible' },
      { key: 'C', text: 'inflated' },
      { key: 'D', text: 'redundant' }
    ],
    correctAnswer: 'A',
    explanation: '"Legally enforceable" is the established business collocation meaning binding and valid.'
  },
  {
    number: 13,
    id: 'exam-13',
    part: 5,
    questionText: 'The executive committee decided to postpone _______ the new e-commerce storefront until after the holidays.',
    options: [
      { key: 'A', text: 'launch' },
      { key: 'B', text: 'launching' },
      { key: 'C', text: 'to launch' },
      { key: 'D', text: 'launched' }
    ],
    correctAnswer: 'B',
    explanation: 'The verb "postpone" takes a gerund: "postpone launching".'
  },
  {
    number: 14,
    id: 'exam-14',
    part: 5,
    questionText: 'The company\'s operating expenses this quarter were _______ lower than projected by the finance department.',
    options: [
      { key: 'A', text: 'very' },
      { key: 'B', text: 'significantly' },
      { key: 'C', text: 'more' },
      { key: 'D', text: 'such' }
    ],
    correctAnswer: 'B',
    explanation: 'Comparatives ("lower") are intensified by adverbs such as "significantly", "much", or "far".'
  },
  {
    number: 15,
    id: 'exam-15',
    part: 5,
    questionText: 'Only employees with at least eighteen months of service are eligible _______ parental leave benefits.',
    options: [
      { key: 'A', text: 'to' },
      { key: 'B', text: 'for' },
      { key: 'C', text: 'with' },
      { key: 'D', text: 'at' }
    ],
    correctAnswer: 'B',
    explanation: 'The adjective "eligible" takes "for" before a noun phrase: "eligible for benefits".'
  },
  {
    number: 16,
    id: 'exam-16',
    part: 5,
    questionText: 'The external auditor recommended that the accounting team _______ the foreign currency accounts once more.',
    options: [
      { key: 'A', text: 'reconcile' },
      { key: 'B', text: 'reconciles' },
      { key: 'C', text: 'reconciled' },
      { key: 'D', text: 'reconciling' }
    ],
    correctAnswer: 'A',
    explanation: 'Subjunctive mood after "recommended that": base form verb "reconcile".'
  },
  {
    number: 17,
    id: 'exam-17',
    part: 5,
    questionText: 'Under no circumstances _______ employees share their administrative passwords with external contractors.',
    options: [
      { key: 'A', text: 'should' },
      { key: 'B', text: 'they should' },
      { key: 'C', text: 'do they' },
      { key: 'D', text: 'have' }
    ],
    correctAnswer: 'A',
    explanation: 'Negative fronted adverbial "Under no circumstances" triggers inversion before subject "employees": "should employees share".'
  },
  {
    number: 18,
    id: 'exam-18',
    part: 5,
    questionText: 'Automating the repetitive data entry process will substantially reduce operational _______ across our branches.',
    options: [
      { key: 'A', text: 'overhead' },
      { key: 'B', text: 'endorsement' },
      { key: 'C', text: 'concession' },
      { key: 'D', text: 'agenda' }
    ],
    correctAnswer: 'A',
    explanation: '"Operational overhead" refers to ongoing business running costs.'
  },
  {
    number: 19,
    id: 'exam-19',
    part: 5,
    questionText: 'Goods _______ during maritime freight transport will be replaced at no additional cost to the customer.',
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
    number: 20,
    id: 'exam-20',
    part: 5,
    questionText: 'The keynote speaker delivered an exceptionally _______ address on the future of green hydrogen power.',
    options: [
      { key: 'A', text: 'inspire' },
      { key: 'B', text: 'inspiring' },
      { key: 'C', text: 'inspired' },
      { key: 'D', text: 'inspiration' }
    ],
    correctAnswer: 'B',
    explanation: 'Active participle adjective modifying "address": "an inspiring address".'
  },

  // --- PART 6: QUESTIONS 21 - 28 (2 PASSAGES) ---
  {
    number: 21,
    id: 'exam-21',
    part: 6,
    passageTitle: 'Memo: Hybrid Work Policy Rollout',
    passageText: `To: All Branch Staff
From: Management Council
Date: October 14
Subject: New Flexible Scheduling Guidelines

Following an extensive six-month pilot program, Apex Financial is delighted to announce that our flexible hybrid work policy will take effect [21] November 1.

Under this policy, eligible staff members may work remotely up to two days per week. [22]. Department managers will coordinate team schedules to guarantee that on-site client coverage remains seamless.

All remote workers will be [23] with an enterprise laptop and secure VPN credentials.

We look forward to [24] higher productivity and work-life balance for our team.`,
    questionText: 'Select the best word for blank [21].',
    options: [
      { key: 'A', text: 'on' },
      { key: 'B', text: 'at' },
      { key: 'C', text: 'to' },
      { key: 'D', text: 'by' }
    ],
    correctAnswer: 'A',
    explanation: 'With specific calendar dates (November 1), use the preposition "on".'
  },
  {
    number: 22,
    id: 'exam-22',
    part: 6,
    passageTitle: 'Memo: Hybrid Work Policy Rollout',
    passageText: `(Refer to the Hybrid Work Policy Memo)`,
    questionText: 'Select the best sentence for blank [22].',
    options: [
      { key: 'A', text: 'Remote work days must be approved in advance by your immediate supervisor.' },
      { key: 'B', text: 'The second-floor cafeteria serves breakfast starting at 7:00 A.M.' },
      { key: 'C', text: 'Parking passes can be renewed at the security desk.' },
      { key: 'D', text: 'All flights were delayed due to severe headwinds.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sentence insertion: Adds an essential supervisory prerequisite for remote work scheduling.'
  },
  {
    number: 23,
    id: 'exam-23',
    part: 6,
    passageTitle: 'Memo: Hybrid Work Policy Rollout',
    passageText: `(Refer to the Hybrid Work Policy Memo)`,
    questionText: 'Select the best word for blank [23].',
    options: [
      { key: 'A', text: 'provided' },
      { key: 'B', text: 'providing' },
      { key: 'C', text: 'provide' },
      { key: 'D', text: 'provision' }
    ],
    correctAnswer: 'A',
    explanation: 'Passive structure: "will be provided with...".'
  },
  {
    number: 24,
    id: 'exam-24',
    part: 6,
    passageTitle: 'Memo: Hybrid Work Policy Rollout',
    passageText: `(Refer to the Hybrid Work Policy Memo)`,
    questionText: 'Select the best word for blank [24].',
    options: [
      { key: 'A', text: 'fostering' },
      { key: 'B', text: 'foster' },
      { key: 'C', text: 'fostered' },
      { key: 'D', text: 'fosters' }
    ],
    correctAnswer: 'A',
    explanation: '"Look forward to + gerund": "fostering".'
  },
  {
    number: 25,
    id: 'exam-25',
    part: 6,
    passageTitle: 'Customer Email: Billing Inquiries',
    passageText: `Dear Mr. Thornton,

Thank you for your inquiry regarding invoice #INV-8812. We have reviewed our billing records and confirmed that an unexpected software glitch caused a ten percent surcharge to be [25] applied to your monthly account.

We have corrected the ledger and issued a replacement invoice reflecting the accurate balance. [26].

Please note that payment for the revised balance is [27] by November 20.

We sincerely apologize for this administrative [28] and value your continued patronage.

Sincerely,
Billing Department`,
    questionText: 'Select the best word for blank [25].',
    options: [
      { key: 'A', text: 'erroneously' },
      { key: 'B', text: 'erroneous' },
      { key: 'C', text: 'error' },
      { key: 'D', text: 'erred' }
    ],
    correctAnswer: 'A',
    explanation: 'Adverb modifying passive participle "applied": "erroneously applied" (applied in error).'
  },
  {
    number: 26,
    id: 'exam-26',
    part: 6,
    passageTitle: 'Customer Email: Billing Inquiries',
    passageText: `(Refer to the Customer Billing Email)`,
    questionText: 'Select the best sentence for blank [26].',
    options: [
      { key: 'A', text: 'A credit of $120.00 has also been added to your client profile for future orders.' },
      { key: 'B', text: 'The conference room chairs will be delivered tomorrow morning.' },
      { key: 'C', text: 'Airport luggage allowances will be restricted during peak periods.' },
      { key: 'D', text: 'Employees must sign out when leaving for lunch.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sentence insertion: Provides goodwill compensation directly following the correction of the billing error.'
  },
  {
    number: 27,
    id: 'exam-27',
    part: 6,
    passageTitle: 'Customer Email: Billing Inquiries',
    passageText: `(Refer to the Customer Billing Email)`,
    questionText: 'Select the best word for blank [27].',
    options: [
      { key: 'A', text: 'due' },
      { key: 'B', text: 'owing' },
      { key: 'C', text: 'overdue' },
      { key: 'D', text: 'payable' }
    ],
    correctAnswer: 'A',
    explanation: 'Collocation with deadline preposition: "payment is due by [date]".'
  },
  {
    number: 28,
    id: 'exam-28',
    part: 6,
    passageTitle: 'Customer Email: Billing Inquiries',
    passageText: `(Refer to the Customer Billing Email)`,
    questionText: 'Select the best word for blank [28].',
    options: [
      { key: 'A', text: 'oversight' },
      { key: 'B', text: 'overlook' },
      { key: 'C', text: 'overseeing' },
      { key: 'D', text: 'overseer' }
    ],
    correctAnswer: 'A',
    explanation: '"Administrative oversight" is the standard business phrasing for an inadvertent bookkeeping mistake.'
  },

  // --- PART 7: QUESTIONS 29 - 40 (3 PASSAGES: 4 QUESTIONS EACH) ---
  {
    number: 29,
    id: 'exam-29',
    part: 7,
    passageTitle: 'Passage 1: Commercial Notice — Distribution Center Relocation',
    passageText: `BEACON LOGISTICS ANNOUNCES RELOCATION OF MIDWEST REGIONAL HUB

CHICAGO — Beacon Logistics today confirmed that operations at its Des Plaines distribution facility will permanently transfer to its newly constructed, 450,000-square-foot fulfillment center in Kenosha, Wisconsin, effective January 15.

The $85 million state-of-the-art facility features automated robotic sorting systems, high-density storage racks, and 64 trailer loading docks, allowing the company to triple its daily throughput capacity. The facility is directly adjacent to Interstate 94, ensuring rapid same-day transit to both Milwaukee and metropolitan Chicago.

All existing client inventory will be migrated in staggered phases between December 26 and January 10 to prevent delivery interruptions. Emergency expedited shipments will be routed through our regional partner in Rockford during this two-week transition window.

Current Des Plaines warehouse personnel have all been offered equivalent positions at the Kenosha hub, along with a $3,500 relocation assistance bonus or daily commuter shuttle service from northern Illinois. A job fair to hire an additional 120 logistics specialists will take place at the Kenosha facility on Saturday, November 18.`,
    questionText: 'What is the primary purpose of the notice?',
    options: [
      { key: 'A', text: 'To announce the closure of an unprofitable branch' },
      { key: 'B', text: 'To announce the relocation of a regional distribution facility' },
      { key: 'C', text: 'To recruit drivers for long-distance routes' },
      { key: 'D', text: 'To report on quarterly shareholder dividends' }
    ],
    correctAnswer: 'B',
    explanation: 'The headline and text clearly state the permanent transfer from Des Plaines to a new Kenosha fulfillment center.'
  },
  {
    number: 30,
    id: 'exam-30',
    part: 7,
    passageTitle: 'Passage 1: Commercial Notice — Distribution Center Relocation',
    passageText: `(Refer to the Beacon Logistics Relocation Notice)`,
    questionText: 'How will emergency shipments be handled during the migration window?',
    options: [
      { key: 'A', text: 'They will be paused until January 15.' },
      { key: 'B', text: 'They will be routed through a regional partner in Rockford.' },
      { key: 'C', text: 'They will incur a 25 percent surcharge.' },
      { key: 'D', text: 'They will be flown via private air courier.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 3 notes: "Emergency expedited shipments will be routed through our regional partner in Rockford during this two-week transition window."'
  },
  {
    number: 31,
    id: 'exam-31',
    part: 7,
    passageTitle: 'Passage 1: Commercial Notice — Distribution Center Relocation',
    passageText: `(Refer to the Beacon Logistics Relocation Notice)`,
    questionText: 'What incentive is offered to existing employees transferring to Kenosha?',
    options: [
      { key: 'A', text: 'Two weeks of extra vacation' },
      { key: 'B', text: 'A $3,500 relocation bonus or daily commuter shuttle service' },
      { key: 'C', text: 'A free company automobile' },
      { key: 'D', text: 'Stock options in the logistics company' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 4 specifies: "offered equivalent positions... along with a $3,500 relocation assistance bonus or daily commuter shuttle service".'
  },
  {
    number: 32,
    id: 'exam-32',
    part: 7,
    passageTitle: 'Passage 1: Commercial Notice — Distribution Center Relocation',
    passageText: `(Refer to the Beacon Logistics Relocation Notice)`,
    questionText: 'In the notice, the word "staggered" in paragraph 3, line 1, is closest in meaning to:',
    options: [
      { key: 'A', text: 'phased over time' },
      { key: 'B', text: 'unsteady' },
      { key: 'C', text: 'accidental' },
      { key: 'D', text: 'hasty' }
    ],
    correctAnswer: 'A',
    explanation: '"Migrated in staggered phases" means arranged in sequential, step-by-step intervals over time.'
  },

  // --- PASSAGE 2: DOUBLE PASSAGE (QUESTIONS 33 - 36) ---
  {
    number: 33,
    id: 'exam-33',
    part: 7,
    passageTitle: 'Passage 2: Conference Schedule & Registration Email',
    passageText: `DOCUMENT 1: PACIFIC GREEN ENERGY SUMMIT PROGRAM
Date: Friday, November 14 — Westin Waterfront Hotel, Seattle

Keynote Hall (8:30 A.M. - 10:00 A.M.):
"The Global Transition to Low-Carbon Hydrogen" — Dr. Fiona MacIntyre, Aura Energy

Breakout Sessions (10:30 A.M. - 12:00 P.M.):
• Room A: Offshore Wind Infrastructure Financing (Lead: Marcus Vance)
• Room B: Battery Energy Storage Grid Integration (Lead: Elena Rostova)
• Room C: Regulatory Compliance & Carbon Offsets (Lead: Arthur Pendelton)

Networking Luncheon (12:00 P.M. - 1:30 P.M.):
Terrace Dining Room — Open to All Full-Day Ticket Holders

Afternoon Panels (1:30 P.M. - 3:30 P.M.):
• Room A: Smart Grid Automation & AI Forecasting
• Room B: Next-Generation Solar Technologies

DOCUMENT 2: CONFIRMATION EMAIL
To: a.vasquez@solargreen.org
From: registration@pacificgreensummit.com
Date: October 20
Subject: Registration Confirmation — Pacific Green Energy Summit

Dear Mr. Vasquez,

Thank you for registering for the 2026 Pacific Green Energy Summit. We confirm receipt of your $350 Full-Day Delegate Pass payment.

Based on your registration profile, you have selected:
• Morning Breakout Session: Room B (Battery Energy Storage Grid Integration)
• Afternoon Panel: Room B (Next-Generation Solar Technologies)

Special Dietary Request Noted: Vegan meal for the networking luncheon.

Please bring a printed or digital copy of this email to the registration counter in the main lobby between 7:30 A.M. and 8:15 A.M. to collect your delegate badge, conference lanyard, and symposium portfolio.`,
    questionText: 'Who will lead the morning breakout session in Room B?',
    options: [
      { key: 'A', text: 'Dr. Fiona MacIntyre' },
      { key: 'B', text: 'Marcus Vance' },
      { key: 'C', text: 'Elena Rostova' },
      { key: 'D', text: 'Arthur Pendelton' }
    ],
    correctAnswer: 'C',
    explanation: 'Document 1 states: "Room B: Battery Energy Storage Grid Integration (Lead: Elena Rostova)".'
  },
  {
    number: 34,
    id: 'exam-34',
    part: 7,
    passageTitle: 'Passage 2: Conference Schedule & Registration Email',
    passageText: `(Refer to the Pacific Green Energy Summit Program and Email)`,
    questionText: 'What is indicated about Mr. Vasquez\'s luncheon meal?',
    options: [
      { key: 'A', text: 'He will eat at a restaurant outside the hotel.' },
      { key: 'B', text: 'He has requested a vegan meal in the Terrace Dining Room.' },
      { key: 'C', text: 'He did not purchase a lunch pass.' },
      { key: 'D', text: 'He will attend the sponsor luncheon in Room A.' }
    ],
    correctAnswer: 'B',
    explanation: 'Document 2 records: "Special Dietary Request Noted: Vegan meal for the networking luncheon" in the Terrace Dining Room.'
  },
  {
    number: 35,
    id: 'exam-35',
    part: 7,
    passageTitle: 'Passage 2: Conference Schedule & Registration Email',
    passageText: `(Refer to the Pacific Green Energy Summit Program and Email)`,
    questionText: 'What must Mr. Vasquez do between 7:30 A.M. and 8:15 A.M. on Friday?',
    options: [
      { key: 'A', text: 'Deliver a keynote presentation' },
      { key: 'B', text: 'Collect his delegate badge at the registration desk' },
      { key: 'C', text: 'Pay his outstanding registration fee' },
      { key: 'D', text: 'Submit a copy of his technical research paper' }
    ],
    correctAnswer: 'B',
    explanation: 'Document 2 directs him to the main lobby counter between 7:30 A.M. and 8:15 A.M. "to collect your delegate badge, conference lanyard, and symposium portfolio."'
  },
  {
    number: 36,
    id: 'exam-36',
    part: 7,
    passageTitle: 'Passage 2: Conference Schedule & Registration Email',
    passageText: `(Refer to the Pacific Green Energy Summit Program and Email)`,
    questionText: 'Which topic is discussed in the session Mr. Vasquez attends from 1:30 P.M. to 3:30 P.M.?',
    options: [
      { key: 'A', text: 'Smart Grid Automation' },
      { key: 'B', text: 'Next-Generation Solar Technologies' },
      { key: 'C', text: 'Offshore Wind Financing' },
      { key: 'D', text: 'Low-Carbon Hydrogen' }
    ],
    correctAnswer: 'B',
    explanation: 'Document 2 indicates Mr. Vasquez selected Room B for the afternoon, which Document 1 shows is "Next-Generation Solar Technologies".'
  },

  // --- PASSAGE 3: ARTICLE (QUESTIONS 37 - 40) ---
  {
    number: 37,
    id: 'exam-37',
    part: 7,
    passageTitle: 'Passage 3: Business Magazine Article — The Rise of Urban Cargo Cycling',
    passageText: `URBAN FREIGHT: CYCLING PAST CITY GRIDLOCK
By Amanda Holbrook

In dense metropolitan city centers from London and Amsterdam to New York and Seattle, last-mile commercial delivery is experiencing an eco-friendly revolution. Major courier conglomerates and boutique retailers alike are replacing heavy diesel delivery vans with electric-assist cargo bicycles.

A landmark study released this month by the Urban Transport Logistics Institute revealed that electric cargo bikes deliver packages up to 60 percent faster than conventional vans in congested downtown commercial districts. While vans frequently crawl in gridlock or circle blocks searching for scarce loading zones, nimble cargo trikes utilize dedicated bicycle lanes and can park directly on wide sidewalks outside office building lobbies.

Furthermore, operational cost savings are substantial. Maintenance expenditures for electric cargo bikes average just 12 percent of the upkeep costs of light commercial vans, while eliminating gasoline consumption and vehicle parking fines entirely. Environmental benefits are equally striking, with each cargo bike offsetting an estimated five metric tons of CO2 emissions annually.

However, widespread expansion still faces regulatory hurdles. Industry advocates point out that municipal infrastructure in many North American cities lacks adequately wide bicycle corridors, while commercial zoning codes frequently lack definitions for micro-consolidation distribution hubs where bulk freight can be transferred from semi-trailers to cargo bikes. Nevertheless, forward-looking transit authorities are already piloting dedicated curbside courier zones to encourage zero-emission logistics.`,
    questionText: 'What is the main advantage of cargo bikes over delivery vans in downtown centers?',
    options: [
      { key: 'A', text: 'They carry ten times more weight than trucks.' },
      { key: 'B', text: 'They deliver packages up to 60 percent faster in congested areas.' },
      { key: 'C', text: 'They do not require human operators.' },
      { key: 'D', text: 'They can travel on high-speed interstate expressways.' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 2 highlights that cargo bikes "deliver packages up to 60 percent faster than conventional vans in congested downtown commercial districts."'
  },
  {
    number: 38,
    id: 'exam-38',
    part: 7,
    passageTitle: 'Passage 3: Business Magazine Article — The Rise of Urban Cargo Cycling',
    passageText: `(Refer to the Urban Freight Cargo Cycling Article)`,
    questionText: 'According to the article, how do upkeep expenses for cargo bikes compare to delivery vans?',
    options: [
      { key: 'A', text: 'They are approximately 12 percent of van maintenance costs.' },
      { key: 'B', text: 'They are identical.' },
      { key: 'C', text: 'They are twice as expensive due to battery replacements.' },
      { key: 'D', text: 'They are paid for entirely by city subsidies.' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraph 3 notes: "Maintenance expenditures for electric cargo bikes average just 12 percent of the upkeep costs of light commercial vans".'
  },
  {
    number: 39,
    id: 'exam-39',
    part: 7,
    passageTitle: 'Passage 3: Business Magazine Article — The Rise of Urban Cargo Cycling',
    passageText: `(Refer to the Urban Freight Cargo Cycling Article)`,
    questionText: 'What obstacle to the growth of cargo bikes is mentioned in the article?',
    options: [
      { key: 'A', text: 'A shortage of trained bicycle mechanics' },
      { key: 'B', text: 'Lack of adequately wide bike corridors and micro-consolidation hub zoning' },
      { key: 'C', text: 'High customer resistance to bike deliveries' },
      { key: 'D', text: 'Excessive electricity charging rates' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraph 4 states: "municipal infrastructure in many North American cities lacks adequately wide bicycle corridors, while commercial zoning codes frequently lack definitions for micro-consolidation distribution hubs".'
  },
  {
    number: 40,
    id: 'exam-40',
    part: 7,
    passageTitle: 'Passage 3: Business Magazine Article — The Rise of Urban Cargo Cycling',
    passageText: `(Refer to the Urban Freight Cargo Cycling Article)`,
    questionText: 'The word "nimble" in paragraph 2, line 4, is closest in meaning to:',
    options: [
      { key: 'A', text: 'quick and agile' },
      { key: 'B', text: 'fragile' },
      { key: 'C', text: 'heavy' },
      { key: 'D', text: 'expensive' }
    ],
    correctAnswer: 'A',
    explanation: '"Nimble cargo trikes" describes their ability to maneuver quickly and easily through tight urban spaces.'
  }
];

export function calculateExamScore(answers: Record<string, 'A' | 'B' | 'C' | 'D'>) {
  let part5Correct = 0;
  let part6Correct = 0;
  let part7Correct = 0;
  const missedQuestions: ExamQuestion[] = [];

  EXAM_40_QUESTIONS.forEach(q => {
    const isCorrect = answers[q.id] === q.correctAnswer;
    if (q.part === 5 && isCorrect) part5Correct++;
    if (q.part === 6 && isCorrect) part6Correct++;
    if (q.part === 7 && isCorrect) part7Correct++;

    if (!isCorrect) {
      missedQuestions.push(q);
    }
  });

  const totalCorrect = part5Correct + part6Correct + part7Correct;
  // Scaled reading score out of 495:
  const estimatedReadingScaled = Math.round(5 + (totalCorrect / 40) * 490 / 5) * 5;

  return {
    totalCorrect,
    totalQuestions: 40,
    percentage: Math.round((totalCorrect / 40) * 100),
    part5Correct,
    part5Total: 20,
    part6Correct,
    part6Total: 8,
    part7Correct,
    part7Total: 12,
    estimatedReadingScaled,
    missedQuestions,
    disclaimer: 'ESTIMATE ONLY. Timed 40-question Reading simulation. Not an official ETS score.'
  };
}

export const EXAM_40_QUESTIONS: ExamQuestion[] = balanceFlat(RAW_EXAM_40_QUESTIONS, 4);
