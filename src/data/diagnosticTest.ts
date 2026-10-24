import { balanceFlat } from './balance';
import { PracticeQuestion } from '../types';

export interface DiagnosticQuestion extends PracticeQuestion {
  diagnosticOrder: number;
  section: 'Listening' | 'Reading';
}

const RAW_DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // --- Part 1 (2 questions) ---
  {
    diagnosticOrder: 1,
    id: 'diag-01',
    part: 1,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    imagePrompt: 'A female architect wearing a hard hat unrolls a blueprint on a wooden table at a sunny construction site.',
    questionText: 'Look at the image description and listen to the four statements. Select the statement that best describes the photograph.',
    audioScript: `Statement (A): She is packing tools into a toolbox.
Statement (B): She is examining a schematic diagram on a table.
Statement (C): She is driving a bulldozer.
Statement (D): She is painting the exterior wall.`,
    options: [
      { key: 'A', text: '(A) She is packing tools into a toolbox.' },
      { key: 'B', text: '(B) She is examining a schematic diagram on a table.' },
      { key: 'C', text: '(C) She is driving a bulldozer.' },
      { key: 'D', text: '(D) She is painting the exterior wall.' }
    ],
    correctAnswer: 'B',
    explanation: '"Schematic diagram" is a formal synonym for blueprint. She is examining it on a wooden table.'
  },
  {
    diagnosticOrder: 2,
    id: 'diag-02',
    part: 1,
    section: 'Listening',
    difficulty: 'Elementary (500)',
    imagePrompt: 'Several passenger airplanes parked beside jet bridges at an airport terminal under a clear sky.',
    questionText: 'Look at the image description and listen to the statements. Choose the best description.',
    audioScript: `Statement (A): Airplanes are stationed alongside the boarding gates.
Statement (B): Passengers are retrieving luggage from the carousel.
Statement (C): Planes are taking off into a cloudy sky.
Statement (D): A runway is being paved by road workers.`,
    options: [
      { key: 'A', text: '(A) Airplanes are stationed alongside the boarding gates.' },
      { key: 'B', text: '(B) Passengers are retrieving luggage from the carousel.' },
      { key: 'C', text: '(C) Planes are taking off into a cloudy sky.' },
      { key: 'D', text: '(D) A runway is being paved by road workers.' }
    ],
    correctAnswer: 'A',
    explanation: 'The static state of planes parked at jet bridges matches "stationed alongside the boarding gates".'
  },

  // --- Part 2 (4 questions) ---
  {
    diagnosticOrder: 3,
    id: 'diag-03',
    part: 2,
    section: 'Listening',
    difficulty: 'Elementary (500)',
    questionText: 'Listen to the question and select the best response.',
    audioScript: `Where can I find extra printer cartridges?
(A) In the cabinet next to the copier.
(B) Yes, I printed fifteen copies.
(C) Tomorrow morning around ten o\'clock.`,
    options: [
      { key: 'A', text: '(A) In the cabinet next to the copier.' },
      { key: 'B', text: '(B) Yes, I printed fifteen copies.' },
      { key: 'C', text: '(C) Tomorrow morning around ten o\'clock.' }
    ],
    correctAnswer: 'A',
    explanation: 'Answers the "Where" question directly with a physical location ("In the cabinet next to the copier").'
  },
  {
    diagnosticOrder: 4,
    id: 'diag-04',
    part: 2,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'Listen to the question and select the best response.',
    audioScript: `When will the client contract be finalized?
(A) Mr. Vance is reviewing the revisions right now.
(B) At the downtown branch office.
(C) Yes, I signed the document.`,
    options: [
      { key: 'A', text: '(A) Mr. Vance is reviewing the revisions right now.' },
      { key: 'B', text: '(B) At the downtown branch office.' },
      { key: 'C', text: '(C) Yes, I signed the document.' }
    ],
    correctAnswer: 'A',
    explanation: 'Indirect status update explaining why a specific time is not yet known.'
  },
  {
    diagnosticOrder: 5,
    id: 'diag-05',
    part: 2,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'Listen to the statement and select the best response.',
    audioScript: `The projector in conference room B isn\'t turning on.
(A) Let me call the IT help desk for a replacement cable.
(B) She turned right at the lobby.
(C) Yes, the meeting started on time.`,
    options: [
      { key: 'A', text: '(A) Let me call the IT help desk for a replacement cable.' },
      { key: 'B', text: '(B) She turned right at the lobby.' },
      { key: 'C', text: '(C) Yes, the meeting started on time.' }
    ],
    correctAnswer: 'A',
    explanation: 'Problem-solution dialogue: The speaker immediately offers a practical resolution to the equipment trouble.'
  },
  {
    diagnosticOrder: 6,
    id: 'diag-06',
    part: 2,
    section: 'Listening',
    difficulty: 'Advanced (900)',
    questionText: 'Listen to the question and select the best response.',
    audioScript: `Why hasn\'t the catering order for the luncheon arrived yet?
(A) The delivery driver got caught in highway traffic.
(B) A table for eight guests, please.
(C) No, lunch was very flavorful.`,
    options: [
      { key: 'A', text: '(A) The delivery driver got caught in highway traffic.' },
      { key: 'B', text: '(B) A table for eight guests, please.' },
      { key: 'C', text: '(C) No, lunch was very flavorful.' }
    ],
    correctAnswer: 'A',
    explanation: 'Gives the cause for the delay: "The delivery driver got caught in highway traffic."'
  },

  // --- Part 3 (4 questions: 1 dialogue with 3 questions + 1 standalone dialogue) ---
  {
    diagnosticOrder: 7,
    id: 'diag-07',
    part: 3,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'What problem are the speakers discussing?',
    audioScript: `Man: Hi Clara. Did you get a chance to look at the budget proposal for next month\'s technology symposium?
Woman: Yes David. Everything looks realistic, but the registration fee for the venue ballroom increased by 20 percent since last year. We will exceed our departmental budget if we don\'t adjust other line items.
Man: Good catch. Why don\'t we switch the printed program booklets to digital QR code downloads instead? That will save about $1,200 on commercial printing.
Woman: That\'s a brilliant idea! I\'ll update the spreadsheet and email the revised figures to the director this afternoon.`,
    options: [
      { key: 'A', text: 'A keynote speaker cancelled' },
      { key: 'B', text: 'Venue ballroom costs increased significantly' },
      { key: 'C', text: 'The internet connection failed' },
      { key: 'D', text: 'Registrations are lower than expected' }
    ],
    correctAnswer: 'B',
    explanation: 'The woman states: "the registration fee for the venue ballroom increased by 20 percent... We will exceed our departmental budget".'
  },
  {
    diagnosticOrder: 8,
    id: 'diag-08',
    part: 3,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'What does the man suggest doing to reduce expenses?',
    audioScript: `(Refer to the previous conversation between Man and Woman)`,
    options: [
      { key: 'A', text: 'Moving the symposium to an off-site park' },
      { key: 'B', text: 'Using digital QR codes instead of printing booklets' },
      { key: 'C', text: 'Cancelling the coffee reception' },
      { key: 'D', text: 'Charging attendees an extra fee' }
    ],
    correctAnswer: 'B',
    explanation: 'The man suggests: "switch the printed program booklets to digital QR code downloads instead".'
  },
  {
    diagnosticOrder: 9,
    id: 'diag-09',
    part: 3,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'What will the woman do this afternoon?',
    audioScript: `(Refer to the previous conversation between Man and Woman)`,
    options: [
      { key: 'A', text: 'Call the venue manager' },
      { key: 'B', text: 'Send the revised financial figures to the director' },
      { key: 'C', text: 'Print sixty copies of the booklets' },
      { key: 'D', text: 'Reserve an airline flight' }
    ],
    correctAnswer: 'B',
    explanation: 'The woman confirms: "I\'ll update the spreadsheet and email the revised figures to the director this afternoon."'
  },
  {
    diagnosticOrder: 10,
    id: 'diag-10',
    part: 3,
    section: 'Listening',
    difficulty: 'Advanced (900)',
    questionText: 'Why does the speaker say, "Our flight leaves in two hours"?',
    audioScript: `Man: Clara, I can\'t find the project folders anywhere in the filing cabinet!
Woman: Our flight leaves in two hours!
Man: I know! I\'ll check the conference room desk right now.`,
    options: [
      { key: 'A', text: 'To complain about airline schedules' },
      { key: 'B', text: 'To convey urgent time pressure to the man' },
      { key: 'C', text: 'To ask the man to purchase airline tickets' },
      { key: 'D', text: 'To reschedule their upcoming business trip' }
    ],
    correctAnswer: 'B',
    explanation: 'Pragmatic meaning: Mentioning the tight airport timeline serves to urge the man to hurry.'
  },

  // --- Part 4 (4 questions: 1 short talk with 3 questions + 1 standalone talk) ---
  {
    diagnosticOrder: 11,
    id: 'diag-11',
    part: 4,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'Where is the announcement most likely being made?',
    audioScript: `Attention all shoppers at Brookfield Home Furnishings. Our annual summer clearance sale will conclude in thirty minutes at 9:00 P.M. All outdoor patio furniture, gardening decor, and floor lamps on the second level are currently discounted by an additional twenty percent off the marked clearance price.

Please bring your selected items to the checkout counters on the first floor. If you require assistance carrying heavy furniture boxes to your vehicle, our warehouse staff will be stationed outside the main entrance until 9:30. Thank you for shopping with us tonight.`,
    options: [
      { key: 'A', text: 'Inside a home furnishings store' },
      { key: 'B', text: 'At an airport departure gate' },
      { key: 'C', text: 'In a hotel conference room' },
      { key: 'D', text: 'At a railway transit station' }
    ],
    correctAnswer: 'A',
    explanation: '"Brookfield Home Furnishings", "patio furniture", and "checkout counters" clearly indicate a home furnishings retail store.'
  },
  {
    diagnosticOrder: 12,
    id: 'diag-12',
    part: 4,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'What discount is being offered on second-level items?',
    audioScript: `(Refer to the previous announcement at Brookfield Home Furnishings)`,
    options: [
      { key: 'A', text: 'Ten percent' },
      { key: 'B', text: 'An additional twenty percent off clearance' },
      { key: 'C', text: 'Fifty percent' },
      { key: 'D', text: 'Buy one, get one free' }
    ],
    correctAnswer: 'B',
    explanation: 'The speaker states: "discounted by an additional twenty percent off the marked clearance price."'
  },
  {
    diagnosticOrder: 13,
    id: 'diag-13',
    part: 4,
    section: 'Listening',
    difficulty: 'Intermediate (750)',
    questionText: 'What service is available outside the main entrance until 9:30 P.M.?',
    audioScript: `(Refer to the previous announcement at Brookfield Home Furnishings)`,
    options: [
      { key: 'A', text: 'Complimentary coffee and snacks' },
      { key: 'B', text: 'Assistance carrying heavy furniture items to cars' },
      { key: 'C', text: 'Free gift wrapping' },
      { key: 'D', text: 'Valet parking' }
    ],
    correctAnswer: 'B',
    explanation: 'The announcement offers: "If you require assistance carrying heavy furniture boxes to your vehicle, our warehouse staff will be stationed outside... until 9:30."'
  },
  {
    diagnosticOrder: 14,
    id: 'diag-14',
    part: 4,
    section: 'Listening',
    difficulty: 'Advanced (900)',
    questionText: 'What is the purpose of the telephone message?',
    audioScript: `Hello Mr. Henderson, this is Sarah Jenkins from Crestview Real Estate. I\'m calling to confirm that the sellers of the industrial park property have accepted your revised commercial offer. Our legal team has drafted the escrow purchase contract and uploaded it to your client portal for digital signature. Please review and sign before 5:00 P.M. tomorrow.`,
    options: [
      { key: 'A', text: 'To notify a buyer that a property offer was accepted' },
      { key: 'B', text: 'To cancel an upcoming open house tour' },
      { key: 'C', text: 'To request a mortgage interest rate reduction' },
      { key: 'D', text: 'To report damage to a warehouse roof' }
    ],
    correctAnswer: 'A',
    explanation: 'The caller states: "I\'m calling to confirm that the sellers of the industrial park property have accepted your revised commercial offer."'
  },

  // --- Part 5 (8 questions) ---
  {
    diagnosticOrder: 15,
    id: 'diag-15',
    part: 5,
    section: 'Reading',
    difficulty: 'Elementary (500)',
    category: 'Word Form - Adverb',
    questionText: 'The engineering team worked _______ to ensure the new medical sensors were ready for clinical trials.',
    options: [
      { key: 'A', text: 'diligent' },
      { key: 'B', text: 'diligently' },
      { key: 'C', text: 'diligence' },
      { key: 'D', text: 'diligences' }
    ],
    correctAnswer: 'B',
    explanation: 'Adverb modifying the verb "worked": "worked diligently".'
  },
  {
    diagnosticOrder: 16,
    id: 'diag-16',
    part: 5,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    category: 'Conjunction vs Preposition',
    questionText: '_______ the unexpected increase in raw material costs, the enterprise remained profitable this quarter.',
    options: [
      { key: 'A', text: 'Although' },
      { key: 'B', text: 'Despite' },
      { key: 'C', text: 'Even though' },
      { key: 'D', text: 'Whereas' }
    ],
    correctAnswer: 'B',
    explanation: '"The unexpected increase in raw material costs" is a noun phrase; preposition "Despite" is required.'
  },
  {
    diagnosticOrder: 17,
    id: 'diag-17',
    part: 5,
    section: 'Reading',
    difficulty: 'Elementary (500)',
    category: 'Dependent Preposition',
    questionText: 'All factory personnel must comply _______ international quality and safety standards.',
    options: [
      { key: 'A', text: 'with' },
      { key: 'B', text: 'to' },
      { key: 'C', text: 'for' },
      { key: 'D', text: 'at' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "comply" requires the dependent preposition "with" ("comply with standards").'
  },
  {
    diagnosticOrder: 18,
    id: 'diag-18',
    part: 5,
    section: 'Reading',
    difficulty: 'Advanced (900)',
    category: 'Future Time Clause',
    questionText: 'When the executive council _______ on Thursday morning, they will deliberate on the proposed merger.',
    options: [
      { key: 'A', text: 'convenes' },
      { key: 'B', text: 'will convene' },
      { key: 'C', text: 'convened' },
      { key: 'D', text: 'is convening' }
    ],
    correctAnswer: 'A',
    explanation: 'In time clauses starting with "When", use simple present ("convenes") to denote future action.'
  },
  {
    diagnosticOrder: 19,
    id: 'diag-19',
    part: 5,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    category: 'Subject-Verb Agreement',
    questionText: 'The shipment of fragile electronic components _______ scheduled to arrive tomorrow afternoon.',
    options: [
      { key: 'A', text: 'is' },
      { key: 'B', text: 'are' },
      { key: 'C', text: 'were' },
      { key: 'D', text: 'have been' }
    ],
    correctAnswer: 'A',
    explanation: 'The head noun is singular "The shipment", which requires singular verb "is".'
  },
  {
    diagnosticOrder: 20,
    id: 'diag-20',
    part: 5,
    section: 'Reading',
    difficulty: 'Advanced (900)',
    category: 'Inverted Conditional',
    questionText: '_______ you have any questions regarding your insurance coverage, please call human resources.',
    options: [
      { key: 'A', text: 'Should' },
      { key: 'B', text: 'Would' },
      { key: 'C', text: 'Could' },
      { key: 'D', text: 'Were' }
    ],
    correctAnswer: 'A',
    explanation: 'Inverted first conditional: "Should you have..." replaces "If you have...".'
  },
  {
    diagnosticOrder: 21,
    id: 'diag-21',
    part: 5,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    category: 'Gerund vs Infinitive',
    questionText: 'The management board is considering _______ a flexible telecommuting policy for senior analysts.',
    options: [
      { key: 'A', text: 'adopting' },
      { key: 'B', text: 'to adopt' },
      { key: 'C', text: 'adopt' },
      { key: 'D', text: 'adopted' }
    ],
    correctAnswer: 'A',
    explanation: 'The verb "consider" takes a gerund (-ing): "considering adopting".'
  },
  {
    diagnosticOrder: 22,
    id: 'diag-22',
    part: 5,
    section: 'Reading',
    difficulty: 'Advanced (900)',
    category: 'Vocabulary in Context',
    questionText: 'The enterprise entered into binding _______ to resolve the trademark disagreement without litigation.',
    options: [
      { key: 'A', text: 'arbitration' },
      { key: 'B', text: 'absenteeism' },
      { key: 'C', text: 'depreciation' },
      { key: 'D', text: 'contingency' }
    ],
    correctAnswer: 'A',
    explanation: '"Binding arbitration" is the formal legal procedure for out-of-court dispute resolution.'
  },

  // --- Part 6 (4 questions = 1 passage) ---
  {
    diagnosticOrder: 23,
    id: 'diag-23',
    part: 6,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    passageText: `To: All Facility Staff
From: Maintenance Department
Date: October 5
Subject: Elevator Modernization Project

Beginning next Monday, October 10, technicians will initiate a three-week modernization of our building\'s passenger elevators. To minimize traffic congestion, the modernization will be performed on one elevator bank at a time.

During the upgrade, elevator service will be [23] restricted. [24]. We encourage employees in good health who work on floors 2 through 4 to use the central stairwells whenever possible.

Contractors will conclude all noisy mechanical installations before 8:00 A.M. each morning so regular business hours are not [25].

We appreciate your [26] and patience during this essential infrastructure improvement.`,
    questionText: 'Select the best word for blank [23].',
    options: [
      { key: 'A', text: 'partially' },
      { key: 'B', text: 'partial' },
      { key: 'C', text: 'part' },
      { key: 'D', text: 'partiality' }
    ],
    correctAnswer: 'A',
    explanation: 'Adverb modifying the participle/adjective "restricted": "partially restricted".'
  },
  {
    diagnosticOrder: 24,
    id: 'diag-24',
    part: 6,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    passageText: `(Refer to the previous Elevator Modernization Memo)`,
    questionText: 'Select the best sentence to fill blank [24].',
    options: [
      { key: 'A', text: 'At least two elevators will remain fully operational at all times.' },
      { key: 'B', text: 'The annual holiday luncheon will be held at the Hilton Hotel.' },
      { key: 'C', text: 'All rental cars must be returned with a full tank of fuel.' },
      { key: 'D', text: 'Please turn in your old security keycards to reception.' }
    ],
    correctAnswer: 'A',
    explanation: 'Sentence insertion: Reassures staff that at least two elevators remain running while the others are upgraded.'
  },
  {
    diagnosticOrder: 25,
    id: 'diag-25',
    part: 6,
    section: 'Reading',
    difficulty: 'Elementary (500)',
    passageText: `(Refer to the previous Elevator Modernization Memo)`,
    questionText: 'Select the best word for blank [25].',
    options: [
      { key: 'A', text: 'disrupted' },
      { key: 'B', text: 'disrupting' },
      { key: 'C', text: 'disruption' },
      { key: 'D', text: 'disruptive' }
    ],
    correctAnswer: 'A',
    explanation: 'Passive verb structure: "are not disrupted".'
  },
  {
    diagnosticOrder: 26,
    id: 'diag-26',
    part: 6,
    section: 'Reading',
    difficulty: 'Elementary (500)',
    passageText: `(Refer to the previous Elevator Modernization Memo)`,
    questionText: 'Select the best word for blank [26].',
    options: [
      { key: 'A', text: 'cooperation' },
      { key: 'B', text: 'cooperate' },
      { key: 'C', text: 'cooperative' },
      { key: 'D', text: 'cooperatively' }
    ],
    correctAnswer: 'A',
    explanation: 'Noun phrase: "your cooperation and patience".'
  },

  // --- Part 7 (4 questions = 1 passage) ---
  {
    diagnosticOrder: 27,
    id: 'diag-27',
    part: 7,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    passageText: `COMMERCIAL NOTICE: PACIFIC CARGO EXPEDITED AIR SERVICES

Pacific Cargo is proud to introduce our "Guaranteed Sunrise" air freight delivery service, connecting Seattle, Portland, and San Francisco with Tokyo and Seoul.

Key Service Highlights:
• Next-day morning delivery for all customs-cleared cargo booked before 1:00 P.M. PST.
• Temperature-controlled cold chain cargo holds designed for perishable agricultural products and sensitive pharmaceuticals.
• Real-time continuous satellite GPS cargo tracking accessible through our customer online portal.
• Automatic cargo loss and damage liability coverage up to $50,000 per consignment at no extra charge.

Introductory Offer:
New commercial clients who open a corporate account before November 30 will receive a 15% discount on their first three shipments.

To schedule a pickup or speak with an air freight logistics specialist, visit www.pacificcargoair.com or call 1-800-555-CARGO.`,
    questionText: 'What is guaranteed by the new Pacific Cargo service?',
    options: [
      { key: 'A', text: 'Free international packaging supplies' },
      { key: 'B', text: 'Next-day morning arrival for shipments booked before 1:00 P.M.' },
      { key: 'C', text: 'Unlimited free storage at Tokyo harbor' },
      { key: 'D', text: 'Zero customs taxes in Asian ports' }
    ],
    correctAnswer: 'B',
    explanation: 'The notice highlights: "Next-day morning delivery for all customs-cleared cargo booked before 1:00 P.M. PST."'
  },
  {
    diagnosticOrder: 28,
    id: 'diag-28',
    part: 7,
    section: 'Reading',
    difficulty: 'Intermediate (750)',
    passageText: `(Refer to the Pacific Cargo Air Services Notice)`,
    questionText: 'What feature makes this service suitable for shipping medications?',
    options: [
      { key: 'A', text: 'Motorcycle courier delivery' },
      { key: 'B', text: 'Temperature-controlled cold storage holds' },
      { key: 'C', text: 'Weekend discount vouchers' },
      { key: 'D', text: 'Prepaid postage labels' }
    ],
    correctAnswer: 'B',
    explanation: 'The bullet states: "Temperature-controlled cold chain cargo holds designed for perishable agricultural products and sensitive pharmaceuticals."'
  },
  {
    diagnosticOrder: 29,
    id: 'diag-29',
    part: 7,
    section: 'Reading',
    difficulty: 'Elementary (500)',
    passageText: `(Refer to the Pacific Cargo Air Services Notice)`,
    questionText: 'What promotional incentive is offered to new corporate clients?',
    options: [
      { key: 'A', text: 'A free tablet computer' },
      { key: 'B', text: 'A 15 percent discount on their first three consignments' },
      { key: 'C', text: 'Complimentary customs brokering permanently' },
      { key: 'D', text: 'Free shipping on orders over $1,000' }
    ],
    correctAnswer: 'B',
    explanation: 'The introductory offer gives new corporate accounts "a 15% discount on their first three shipments."'
  },
  {
    diagnosticOrder: 30,
    id: 'diag-30',
    part: 7,
    section: 'Reading',
    difficulty: 'Advanced (900)',
    passageText: `(Refer to the Pacific Cargo Air Services Notice)`,
    questionText: 'In the notice, the word "consignment" in bullet 4 is closest in meaning to:',
    options: [
      { key: 'A', text: 'shipment' },
      { key: 'B', text: 'agreement' },
      { key: 'C', text: 'payment' },
      { key: 'D', text: 'flight' }
    ],
    correctAnswer: 'A',
    explanation: 'In logistics, "consignment" refers to a batch of goods or freight shipment.'
  }
];

export function calculateDiagnosticScore(answers: Record<string, 'A' | 'B' | 'C' | 'D'>) {
  let listeningCorrect = 0;
  let readingCorrect = 0;
  const partStats: Record<number, { total: number; correct: number }> = {
    1: { total: 0, correct: 0 },
    2: { total: 0, correct: 0 },
    3: { total: 0, correct: 0 },
    4: { total: 0, correct: 0 },
    5: { total: 0, correct: 0 },
    6: { total: 0, correct: 0 },
    7: { total: 0, correct: 0 }
  };

  DIAGNOSTIC_QUESTIONS.forEach(q => {
    const isCorrect = answers[q.id] === q.correctAnswer;
    partStats[q.part].total++;
    if (isCorrect) {
      partStats[q.part].correct++;
      if (q.section === 'Listening') listeningCorrect++;
      else readingCorrect++;
    }
  });

  // 14 listening questions, 16 reading questions
  // Estimated scaled score formula (min 5, max 495 per section):
  const listeningScaled = Math.round(5 + (listeningCorrect / 14) * 490 / 5) * 5;
  const readingScaled = Math.round(5 + (readingCorrect / 16) * 490 / 5) * 5;
  const totalEstimatedScore = Math.max(10, Math.min(990, listeningScaled + readingScaled));

  // Identify strongest and weakest part
  const partPercentages = Object.entries(partStats).map(([part, stats]) => ({
    part: Number(part),
    pct: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0,
    ...stats
  }));

  const sorted = [...partPercentages].sort((a, b) => b.pct - a.pct);
  const strongest = sorted[0];
  const weakest = sorted[sorted.length - 1];

  let recommendedFocus = '';
  if (weakest.part <= 4) {
    recommendedFocus = `Your diagnostic results indicate listening is your primary area for growth, specifically Part ${weakest.part}. Focus on high-frequency workplace distractors, similar-sounding words, and SpeechSynthesis training in the Practice Bank.`;
  } else {
    recommendedFocus = `Your diagnostic results highlight reading comprehension and grammar in Part ${weakest.part} as your key area to improve. Work through the 20 Part 5 Grammar Lessons and drill the 500-word Vocabulary Trainer to boost reading speed.`;
  }

  return {
    listeningCorrect,
    listeningTotal: 14,
    listeningScaled,
    readingCorrect,
    readingTotal: 16,
    readingScaled,
    totalEstimatedScore,
    partStats,
    strongestPart: strongest.part,
    weakestPart: weakest.part,
    recommendedFocus,
    disclaimer: 'ESTIMATE ONLY. This 30-question diagnostic test provides a statistical approximation of your performance level and is not an official ETS score report.'
  };
}

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = balanceFlat(RAW_DIAGNOSTIC_QUESTIONS, 3);
