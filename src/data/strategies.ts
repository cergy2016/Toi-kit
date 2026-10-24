import { StrategyGuide } from '../types';

export const STRATEGY_GUIDES: StrategyGuide[] = [
  {
    part: 1,
    name: 'Photographs',
    section: 'Listening',
    totalQuestions: 6,
    timeRecommendation: 'Listen actively during the 5-second silence between items; preview next photo immediately.',
    taskDescription:
      'You will look at a photograph in your test booklet and listen to four short spoken statements (A, B, C, D). You must choose the single statement that best describes what is shown in the picture.',
    traps: [
      {
        title: 'Similar-Sounding Words (Acoustic Distractors)',
        description: 'Using words that sound almost identical to the scene (e.g., "coffee" vs "copy", "dock" vs "duck", "walking" vs "working").',
        example: 'A photo shows a person making photocopies; the distractor says: "He is drinking a warm cup of coffee."'
      },
      {
        title: 'Subject / Object Confusion (Incorrect Agent)',
        description: 'The verb is correct, but the actor performing the action or the object receiving it does not match.',
        example: 'A customer is carrying a package; the distractor says: "The delivery driver is unloading a parcel."'
      },
      {
        title: 'Wrong Action / Present Continuous vs State',
        description: 'Describing an action in progress when only the finished result or static state is visible.',
        example: 'A person is already wearing a hard hat; the distractor says: "A worker is putting on a safety helmet." ("Putting on" is the action; "wearing" is the state).'
      },
      {
        title: 'Unwarranted Assumptions / Over-interpretation',
        description: 'Assuming feelings, relationships, or background facts that cannot be proven purely visually.',
        example: 'Two coworkers smiling at a desk; the distractor says: "The colleagues are celebrating a promotion."'
      },
      {
        title: 'Passive Voice with No Visible Agent',
        description: 'Statements using "is being + past participle" imply someone is currently performing the action. If no human is actively doing it, it is wrong!',
        example: 'Cars parked along a curb; distractor: "Vehicles are being parked along the sidewalk." (Unless a driver is literally parking right now, this is false).'
      }
    ],
    methodSteps: [
      'Preview the photo during instructions: scan for people, actions, locations, and prominent objects.',
      'Identify whether the scene is human-centered (focus on verbs/postures) or object/scenery-centered (focus on prepositions/spatial relationships).',
      'Listen for the Subject + Verb + Object structure of each option and eliminate immediately upon hearing a false element.',
      'Mark your answer immediately and use the remaining 4-5 seconds to preview the next photograph.'
    ],
    workedExamples: [
      {
        question: '[Photo of a woman sitting at an office desk typing on a laptop with notebooks beside her]',
        options: [
          { key: 'A', text: 'She is filing folders into a metal cabinet.' },
          { key: 'B', text: 'She is operating a portable computer.' },
          { key: 'C', text: 'She is presenting slides to an audience.' },
          { key: 'D', text: 'She is hanging a whiteboard on the wall.' }
        ],
        correctAnswer: 'B',
        explanation: '"Operating a portable computer" is a classic TOEIC synonym for working or typing on a laptop. Distractor A specifies an unpictured action, C assumes an audience, and D describes an unrelated task.',
        keyTakeaway: 'Expect high-register synonyms: "laptop" -> "portable computer", "car" -> "vehicle", "rake" -> "gardening tool".'
      },
      {
        question: '[Photo of an empty conference room with chairs neatly tucked around a glass table]',
        options: [
          { key: 'A', text: 'Meeting attendees are shaking hands.' },
          { key: 'B', text: 'Some chairs are arranged around a table.' },
          { key: 'C', text: 'The furniture is being delivered to the room.' },
          { key: 'D', text: 'Documents are being shredded.' }
        ],
        correctAnswer: 'B',
        explanation: 'In no-person photos, correct options usually describe static spatial arrangements in the passive state ("are arranged around", "have been placed"). C is wrong because nobody is actively delivering.',
        keyTakeaway: 'Distinguish "are arranged" (state, valid) from "are being arranged" (action in progress, invalid without humans).'
      },
      {
        question: '[Photo of a worker wearing safety goggles cutting a pipe in a workshop]',
        options: [
          { key: 'A', text: 'A technician is removing his protective eyewear.' },
          { key: 'B', text: 'A worker is wearing protective glasses.' },
          { key: 'C', text: 'A plumber is purchasing supplies.' },
          { key: 'D', text: 'Tools are being unpacked from a carton.' }
        ],
        correctAnswer: 'B',
        explanation: 'He is already wearing the goggles ("protective glasses"). A uses the wrong action ("removing"). C imagines a purchase. D assumes unpacking.',
        keyTakeaway: 'Watch out for "putting on" vs "wearing" and "taking off" vs "unclothed".'
      },
      {
        question: '[Photo of bicycles locked to a metal rack in front of a brick building]',
        options: [
          { key: 'A', text: 'Cyclists are riding through a busy intersection.' },
          { key: 'B', text: 'Bicycles have been secured to a stand.' },
          { key: 'C', text: 'Tires are being repaired at a shop.' },
          { key: 'D', text: 'A brick structure is being demolished.' }
        ],
        correctAnswer: 'B',
        explanation: '"Secured to a stand" is the accurate description of bicycles locked to a bike rack.',
        keyTakeaway: 'Passive present perfect ("have been secured") describes a completed state that remains visible.'
      },
      {
        question: '[Photo of a man holding a clipboard and inspecting shelves in a warehouse aisle]',
        options: [
          { key: 'A', text: 'He is examining items stored on shelves.' },
          { key: 'B', text: 'He is sweeping the warehouse floor.' },
          { key: 'C', text: 'He is loading cartons into a cargo van.' },
          { key: 'D', text: 'He is paying for merchandise at a counter.' }
        ],
        correctAnswer: 'A',
        explanation: 'He is looking closely at shelf inventory ("examining items stored on shelves"). B, C, and D invent actions not shown.',
        keyTakeaway: 'Broad verb "examine" or "inspect" frequently describes people looking carefully at objects.'
      }
    ],
    dos: [
      'Do preview the photograph 2-3 seconds before the audio starts.',
      'Do focus on the main action and primary foreground objects.',
      'Do anticipate verbs and general category nouns (luggage, merchandise, utensil).',
      'Do eliminate options the instant a single word is factually incorrect.'
    ],
    donts: [
      'Do not assume intent or emotional states ("They look stressed about a deadline").',
      'Do not get distracted by background clutter if the foreground has a clear action.',
      'Do not confuse "is putting on" (action) with "is wearing" (state).',
      'Do not look back at previous questions once the next audio begins.'
    ]
  },
  {
    part: 2,
    name: 'Question-Response',
    section: 'Listening',
    totalQuestions: 25,
    timeRecommendation: '5 seconds between responses. 3 options only (A, B, C).',
    taskDescription:
      'You will hear a question or statement, followed by three spoken responses. Both the question and responses are spoken only once and are NOT printed in your test book. Select the most appropriate response.',
    traps: [
      {
        title: 'Same-Word Repetition Distractor',
        description: 'Repeating an exact keyword or root word from the prompt in a totally illogical or unrelated context.',
        example: 'Prompt: "Where is the marketing conference being held?" Distractor: "Yes, she held the door open."'
      },
      {
        title: 'Direct Yes/No to a Wh- Question',
        description: 'Answering "Yes" or "No" to a question that starts with Who, Where, When, What, or Why.',
        example: 'Prompt: "When is the quarterly budget due?" Distractor: "Yes, next Friday."'
      },
      {
        title: 'Indirect or Deflective Answers (The Correct Trap!)',
        description: 'Modern TOEIC often uses evasive answers (e.g., checking with someone else, unexpected cancellation) instead of direct answers.',
        example: 'Prompt: "Who is in charge of catering?" Correct: "Isn\'t Mark handling that?" or "Check with Susan in HR."'
      },
      {
        title: 'Sound-Alikes (Homophones / Minimal Pairs)',
        description: 'Playing on similar sounds (e.g., "right" / "write", "depart" / "department", "plane" / "plan").',
        example: 'Prompt: "Has the flight departed?" Distractor: "No, that\'s in another department."'
      },
      {
        title: 'Wrong Pronoun or Time Reference',
        description: 'Responding with "He" when the prompt was about "Ms. Tanaka", or answering with past tense for a future question.',
        example: 'Prompt: "Will Sarah lead the orientation?" Distractor: "Yes, he did a great job."'
      }
    ],
    methodSteps: [
      'Identify the first word: Is it a Wh- question (Where, When, Who, Why, How), an auxiliary (Do, Did, Has, Can), or a statement?',
      'Track the verb and subject: Who did what, and when (tense)?',
      'Be prepared for indirect answers: "I was out sick", "The schedule changed", "It\'s posted on the intranet".',
      'Use the finger technique: touch A, B, or C on your desk to eliminate on the fly.'
    ],
    workedExamples: [
      {
        question: 'When will the final contract be ready for signature?',
        options: [
          { key: 'A', text: 'Yes, I signed it earlier.' },
          { key: 'B', text: 'Mr. Vance is reviewing the revisions right now.' },
          { key: 'C', text: 'At the downtown office branch.' }
        ],
        correctAnswer: 'B',
        explanation: 'When asked "When...", answering with an indirect status update ("Mr. Vance is reviewing revisions right now") is extremely typical on modern tests. A starts with "Yes" (invalid for "When"). C answers "Where".',
        keyTakeaway: 'Indirect explanations explaining why a time cannot be given yet are frequently correct.'
      },
      {
        question: 'Could you give me a ride to the airport tomorrow morning?',
        options: [
          { key: 'A', text: 'My car is still at the repair garage.' },
          { key: 'B', text: 'A round-trip ticket to Chicago.' },
          { key: 'C', text: 'Yes, airplanes are usually reliable.' }
        ],
        correctAnswer: 'A',
        explanation: 'Option A is an indirect polite refusal ("My car is in the garage"). B repeats "airport" association. C is irrelevant.',
        keyTakeaway: 'Requests are frequently answered with polite constraints rather than straightforward agreements.'
      },
      {
        question: 'Why has the maintenance crew shut off the air conditioning?',
        options: [
          { key: 'A', text: 'Turn right at the corridor.' },
          { key: 'B', text: 'They are replacing the primary filters.' },
          { key: 'C', text: 'No, it is warm outside.' }
        ],
        correctAnswer: 'B',
        explanation: 'Why question answered directly with the ongoing reason ("They are replacing the primary filters"). C uses "No", which is invalid for "Why".',
        keyTakeaway: 'For "Why" questions, look for causes, reasons, or "to + verb" purposes.'
      },
      {
        question: 'Should we order sandwiches from the deli or eat at the cafeteria?',
        options: [
          { key: 'A', text: 'Twelve slices of bread.' },
          { key: 'B', text: 'Neither, the meeting was postponed.' },
          { key: 'C', text: 'Yes, I ordered them yesterday.' }
        ],
        correctAnswer: 'B',
        explanation: 'Alternative question (A or B). The speaker chooses neither because the meeting got postponed. Alternative questions cannot be answered with "Yes" or "No".',
        keyTakeaway: 'Alternative choices often have a third, rejecting outcome ("Neither", "Whichever you prefer").'
      },
      {
        question: 'The client presentation went remarkably well this afternoon.',
        options: [
          { key: 'A', text: 'That is such a relief to hear!' },
          { key: 'B', text: 'He presented his identification badge.' },
          { key: 'C', text: 'At three o\'clock in conference room B.' }
        ],
        correctAnswer: 'A',
        explanation: 'The prompt is a declarative statement. An empathetic coworker reaction ("That is such a relief to hear!") is the natural dialogue response.',
        keyTakeaway: 'Statements require logical conversational rejoinders (agreement, relief, surprise, or inquiry).'
      }
    ],
    dos: [
      'Do lock your attention onto the first three words of the question.',
      'Do accept indirect responses ("I have no idea", "Check your inbox", "It was cancelled").',
      'Do eliminate choices that use acoustic sound-alikes with altered meaning.',
      'Do keep moving; if you miss one, guess immediately and focus on the next prompt.'
    ],
    donts: [
      'Do not choose an answer just because it repeats a word you heard in the prompt.',
      'Do not expect a direct "Yes" or "No" to every closed question.',
      'Do not pick "Yes" or "No" for Wh- questions.',
      'Do not hesitate between items; Part 2 has no recovery time.'
    ]
  },
  {
    part: 3,
    name: 'Conversations',
    section: 'Listening',
    totalQuestions: 39,
    timeRecommendation: '3 questions per dialogue. Read all 3 questions and options BEFORE dialogue starts.',
    taskDescription:
      'You will hear conversations between two or three people. For each conversation, you must answer three multiple-choice questions printed in your book. Includes graphic-based questions and quote-interpretation questions.',
    traps: [
      {
        title: 'Initial Keyword Distractor',
        description: 'Mentioning an answer choice in passing early in the conversation, before the true topic or consensus is reached.',
        example: 'Speaker says "I thought about taking the train, but the highway was clear so I drove." The question asks how they commuted; "train" is the trap.'
      },
      {
        title: 'Shift in Decision / Reversal',
        description: 'Speaker A proposes an idea, but Speaker B counters with a scheduling conflict or constraint that changes the outcome.',
        example: 'Proposing Friday lunch, but counter-offering Monday morning due to client meetings.'
      },
      {
        title: 'Contextual Graphic Misalignment',
        description: 'In graphic questions, picking the item stated aloud rather than using the graphic cross-reference.',
        example: 'Audio mentions "Section C". The question asks for the price, which requires looking at the graphic row for Section C ($45).'
      },
      {
        title: 'Literal Meaning in Implied Quote Questions',
        description: 'Interpreting "What does the woman mean when she says...?" literally instead of understanding pragmatic subtext.',
        example: '"The printer is jamming again" does not just describe hardware; it implies she cannot print the handouts right now.'
      },
      {
        title: 'Speaker Role Confusion',
        description: 'Confusing what the MAN will do with what the WOMAN promises to do.',
        example: 'Question: "What will the man do next?" Audio: Woman says "I\'ll call the client while you prepare the slides." Trap: Calling client.'
      }
    ],
    methodSteps: [
      'Rhythm is key: Read all three questions and their options during the 30-40 second direction audio or gap.',
      'Underline/note keywords: Who is the speaker? What is the main problem? What is the next step?',
      'Answer question 1 in real time during the beginning, question 2 in the middle, and question 3 at the conclusion.',
      'Mark answers immediately and begin previewing the next set while the audio reads the questions.'
    ],
    workedExamples: [
      {
        question: 'What problem are the speakers discussing?',
        options: [
          { key: 'A', text: 'A delayed software shipment' },
          { key: 'B', text: 'A malfunctioning air conditioning unit' },
          { key: 'C', text: 'An unexpected budget cut' },
          { key: 'D', text: 'A scheduling conflict for a seminar' }
        ],
        correctAnswer: 'B',
        explanation: 'When speakers mention room temperatures rising and contacting building facilities, "malfunctioning air conditioning" is the problem.',
        keyTakeaway: 'The overall topic or problem is almost always established in the first two turns of the dialogue.'
      },
      {
        question: 'What does the man offer to do?',
        options: [
          { key: 'A', text: 'Distribute conference badges' },
          { key: 'B', text: 'Send an updated spreadsheet' },
          { key: 'C', text: 'Reserve an off-site venue' },
          { key: 'D', text: 'Proofread a marketing brochure' }
        ],
        correctAnswer: 'B',
        explanation: 'Listen for polite offer markers: "I can...", "Why don\'t I...", "Let me...", "I\'ll take care of...".',
        keyTakeaway: 'Identify which gender/speaker makes the offer and track the matching verb.'
      },
      {
        question: 'Why does the woman say, "Our flight leaves in two hours"?',
        options: [
          { key: 'A', text: 'To complain about airline punctuality' },
          { key: 'B', text: 'To urge the man to hurry' },
          { key: 'C', text: 'To suggest booking an earlier flight' },
          { key: 'D', text: 'To confirm an itinerary change' }
        ],
        correctAnswer: 'B',
        explanation: 'Implication question: Stating that time is limited when discussing luggage or taxi delays serves as a pragmatic urge to hurry.',
        keyTakeaway: 'Look for speaker intentions (warning, refusal, urgency, skepticism).'
      },
      {
        question: 'Look at the graphic. Which seminar room will the man attend?',
        options: [
          { key: 'A', text: 'Room 101' },
          { key: 'B', text: 'Room 204' },
          { key: 'C', text: 'Room 305' },
          { key: 'D', text: 'Room 412' }
        ],
        correctAnswer: 'C',
        explanation: 'The speaker says aloud: "I\'m going to the session hosted by Dr. Patel." The graphic shows Dr. Patel in Room 305.',
        keyTakeaway: 'Graphic questions always connect an audio cue (speaker/topic) with a visual column.'
      },
      {
        question: 'What will happen next Thursday?',
        options: [
          { key: 'A', text: 'A vendor contract will expire.' },
          { key: 'B', text: 'New equipment will be installed.' },
          { key: 'C', text: 'An executive will visit the branch.' },
          { key: 'D', text: 'Employee evaluations will begin.' }
        ],
        correctAnswer: 'B',
        explanation: 'Closing statements usually mention future timeline commitments ("The technicians will set up the servers next Thursday").',
        keyTakeaway: 'Future actions and schedules are almost always found in the dialogue\'s final sentences.'
      }
    ],
    dos: [
      'Do read all 3 questions and options before the conversation begins.',
      'Do keep track of who is talking (man, woman 1, woman 2).',
      'Do look at the graphic as soon as you see the cue [Look at the graphic].',
      'Do stay in sync: when the narrator reads question 1, you should already be previewing the next set.'
    ],
    donts: [
      'Do not wait until the dialogue finishes to read the questions.',
      'Do not get fixated on a missed question; guess and stay on schedule.',
      'Do not overlook tone of voice and emotional inflection in quote questions.',
      'Do not forget that some conversations in the 2026 format feature three speakers.'
    ]
  },
  {
    part: 4,
    name: 'Short Talks',
    section: 'Listening',
    totalQuestions: 30,
    timeRecommendation: '10 talks with 3 questions each. Preview during intro and question reading.',
    taskDescription:
      'You will hear a single speaker giving a talk, announcement, telephone voicemail, corporate broadcast, tour guide speech, or radio commercial. You must answer three questions printed in your test book.',
    traps: [
      {
        title: 'Broad Topic vs Specific Announcement',
        description: 'Selecting an option that describes general business operations rather than the specific trigger for the announcement.',
        example: 'Speaker talks about company expansion, but the specific purpose is announcing a parking lot closure.'
      },
      {
        title: 'Chronology Distortion',
        description: 'Confusing past achievements with future policy implementations.',
        example: 'Audio: "Last quarter we introduced flexible hours; starting next month, badge scans will be mandatory." Trap: "Flexible hours will start next month."'
      },
      {
        title: 'Overlooked Audience Identity',
        description: 'Misidentifying who is being addressed (airline passengers vs flight attendants, store customers vs sales associates).',
        example: 'Speaker says "Please check that overhead bins are latched before landing" -> Audience is cabin crew.'
      },
      {
        title: 'Implicit Graphic Cross-Matching',
        description: 'Selecting the graphic label heard in the audio rather than the corresponding attribute (price, date, room).',
        example: 'Speaker mentions the "Silver Tier plan"; the question asks for the monthly subscription fee shown in the graphic.'
      },
      {
        title: 'Distracted by Technical Jargon',
        description: 'Getting confused by unfamiliar industry terms instead of tracking the communicative intention.',
        example: 'Software technical terms masking a simple request to restart a computer terminal.'
      }
    ],
    methodSteps: [
      'Preview questions before the talk starts: establish the genre (voicemail, tour, announcement, radio broadcast).',
      'Listen for the hook in the first sentence: Who is speaking and why are they calling/broadcasting?',
      'Track transitional markers ("However", "Unfortunately", "Please note that", "In addition").',
      'Note the call-to-action at the end: What are listeners instructed or requested to do?'
    ],
    workedExamples: [
      {
        question: 'Where is the announcement most likely being made?',
        options: [
          { key: 'A', text: 'At an airport boarding gate' },
          { key: 'B', text: 'On board a commuter train' },
          { key: 'C', text: 'Inside a department store' },
          { key: 'D', text: 'At a museum exhibition' }
        ],
        correctAnswer: 'A',
        explanation: 'Announcements mentioning gate changes, overhead bins, and boarding group numbers are set at an airport boarding gate.',
        keyTakeaway: 'The venue is indicated by vocabulary clusters (gate, passenger, delay -> airport).'
      },
      {
        question: 'What is the purpose of the telephone message?',
        options: [
          { key: 'A', text: 'To reschedule a medical appointment' },
          { key: 'B', text: 'To request an estimate for home repairs' },
          { key: 'C', text: 'To confirm receipt of a resume' },
          { key: 'D', text: 'To report a billing discrepancy' }
        ],
        correctAnswer: 'B',
        explanation: 'Voicemails start with purpose: "I\'m calling to see if someone can inspect our roof and provide a cost quotation."',
        keyTakeaway: 'Look for phrases like "I\'m calling regarding...", "The reason for this call is..."'
      },
      {
        question: 'What does the speaker remind listeners to do?',
        options: [
          { key: 'A', text: 'Keep their receipts for reimbursement' },
          { key: 'B', text: 'Silence all personal mobile devices' },
          { key: 'C', text: 'Submit time sheets by 5:00 P.M.' },
          { key: 'D', text: 'Wear safety goggles at all times' }
        ],
        correctAnswer: 'C',
        explanation: 'Final directives: "As a reminder, all weekly hours must be submitted electronically before five today."',
        keyTakeaway: 'Pay special attention to words like "reminder", "please remember", "be sure to".'
      },
      {
        question: 'Why does the speaker say, "I have three meetings scheduled back-to-back"?',
        options: [
          { key: 'A', text: 'To explain why she cannot assist immediately' },
          { key: 'B', text: 'To celebrate a productive work day' },
          { key: 'C', text: 'To complain about management decisions' },
          { key: 'D', text: 'To request a quiet office space' }
        ],
        correctAnswer: 'A',
        explanation: 'Mentioning continuous meetings justifies unavailable status or delayed response.',
        keyTakeaway: 'Pragmatic quotes usually convey availability, inability, or urgency.'
      },
      {
        question: 'Look at the map. Which exit should visitors take?',
        options: [
          { key: 'A', text: 'Exit 4' },
          { key: 'B', text: 'Exit 6' },
          { key: 'C', text: 'Exit 8' },
          { key: 'D', text: 'Exit 12' }
        ],
        correctAnswer: 'B',
        explanation: 'Speaker: "Due to construction near the botanical gardens, take the turn towards Oak Boulevard." Graphic matches Oak Blvd to Exit 6.',
        keyTakeaway: 'Cross-reference spoken road/landmark name with the map\'s exit numbered code.'
      }
    ],
    dos: [
      'Do predict the talk category from the questions before the audio plays.',
      'Do listen for chronological transition words: "First", "Currently", "Starting next week".',
      'Do answer each question the instant the cue occurs in the audio.',
      'Do focus on the final directive (what listeners should do).'
    ],
    donts: [
      'Do not linger on a talk after it finishes; preview the next set immediately.',
      'Do not assume general background knowledge overrides what the speaker stated.',
      'Do not get distracted if the speaker mentions an unexpected accent.',
      'Do not confuse the speaker\'s profession with the audience\'s role.'
    ]
  },
  {
    part: 5,
    name: 'Incomplete Sentences',
    section: 'Reading',
    totalQuestions: 30,
    timeRecommendation: 'Target 15 to 20 seconds per question (Total: ~8 to 10 minutes max).',
    taskDescription:
      'A sentence has one blank. Four words or phrases, marked A, B, C, D, are given beneath each sentence. Choose the word or phrase that best completes the sentence grammatically and semantically.',
    traps: [
      {
        title: 'Word Form / Part of Speech Confusion',
        description: 'Using an adjective where an adverb is required to modify a verb, participle, or adjective.',
        example: '"The board reviewed the proposal [thorough / thoroughly]." Adverb modifies the verb "reviewed".'
      },
      {
        title: 'Conjunction vs Preposition',
        description: 'Choosing a preposition (e.g., "despite", "due to") before a full clause [Subject + Verb], or a conjunction (e.g., "although", "because") before a noun phrase.',
        example: '"[Although / Despite] the unexpected snowfall, the delivery arrived on time." Followed by a noun phrase, so "Despite" is required.'
      },
      {
        title: 'Active vs Passive Participle',
        description: 'Confusing present participles (-ing) representing the doer/characteristic with past participles (-ed) representing the recipient of action.',
        example: '"The [revised / revising] itinerary was emailed to all conference participants."'
      },
      {
        title: 'Subject-Verb Agreement Distracted by Prepositional Phrases',
        description: 'Placing a plural verb because of an intervening noun inside a prepositional phrase, ignoring the true singular subject.',
        example: '"The shipment of modern computer components [has / have] arrived." The subject is "shipment" (singular), so "has" is correct.'
      },
      {
        title: 'Collocation and Dependent Prepositions',
        description: 'Words that require exact prepositions (e.g., "comply with", "participate in", "rely on", "prior to", "eligible for").',
        example: '"All laboratory staff must comply [with / to / of] safety standards."'
      }
    ],
    methodSteps: [
      'Look at the 4 options FIRST: Determine if it is a GRAMMAR question (same root word: create, creation, creative, creatively) or a VOCABULARY question (4 different words).',
      'If Grammar: Identify the sentence skeleton [Subject + Verb + Object]. Look immediately before and after the blank to spot the missing part of speech.',
      'If Vocabulary: Read the full clause, identify key business collocations and semantic constraints.',
      'Eliminate obviously wrong options rapidly and select your answer within 15-20 seconds to preserve time for Part 7.'
    ],
    workedExamples: [
      {
        question: 'Ms. Thornton asked the accounting team to review the quarterly figures _______ before presenting them to the board.',
        options: [
          { key: 'A', text: 'careful' },
          { key: 'B', text: 'carefully' },
          { key: 'C', text: 'care' },
          { key: 'D', text: 'caring' }
        ],
        correctAnswer: 'B',
        explanation: 'The blank modifies the transitive verb phrase "review the quarterly figures". An adverb ("carefully") is required to modify a verb.',
        keyTakeaway: 'When modifying an action verb, choose the adverb ending in -ly.'
      },
      {
        question: '_______ the economic downturn, Apex Logistics reported record quarterly earnings.',
        options: [
          { key: 'A', text: 'Although' },
          { key: 'B', text: 'Despite' },
          { key: 'C', text: 'Even though' },
          { key: 'D', text: 'Whereas' }
        ],
        correctAnswer: 'B',
        explanation: '"The economic downturn" is a noun phrase (no conjugated verb). "Despite" is a preposition introducing a noun phrase. "Although", "Even though", and "Whereas" are subordinate conjunctions requiring a full clause [S+V].',
        keyTakeaway: 'Preposition + Noun Phrase vs Conjunction + Subject + Verb.'
      },
      {
        question: 'Employees interested in participating in the mentoring program must submit an application _______ Friday.',
        options: [
          { key: 'A', text: 'by' },
          { key: 'B', text: 'until' },
          { key: 'C', text: 'at' },
          { key: 'D', text: 'while' }
        ],
        correctAnswer: 'A',
        explanation: 'For a one-time deadline completion, use "by" (at or before). "Until" indicates an ongoing continuous action (e.g., "The library is open until 9 P.M.").',
        keyTakeaway: 'Deadlines (submit, arrive, finish) take "by"; continuous states take "until".'
      },
      {
        question: 'The newly hired marketing director has proven remarkably _______ at identifying niche consumer segments.',
        options: [
          { key: 'A', text: 'adept' },
          { key: 'B', text: 'adapted' },
          { key: 'C', text: 'adoption' },
          { key: 'D', text: 'adeptly' }
        ],
        correctAnswer: 'A',
        explanation: '"Has proven + adverb [remarkably] + adjective [adept]". "Adept at" is a high-frequency business collocation meaning skilled or proficient.',
        keyTakeaway: 'Watch out for words that sound alike: "adept" (skillful), "adapt" (adjust), "adopt" (take on).'
      },
      {
        question: 'Neither the regional manager nor the branch supervisors _______ informed about the change in software.',
        options: [
          { key: 'A', text: 'was' },
          { key: 'B', text: 'were' },
          { key: 'C', text: 'is' },
          { key: 'D', text: 'has' }
        ],
        correctAnswer: 'B',
        explanation: 'In "neither... nor" structures, the verb agrees with the closer subject ("branch supervisors" -> plural). Past passive requires "were informed".',
        keyTakeaway: 'Correlative conjunction agreement rule: verb matches the subject closest to it.'
      }
    ],
    dos: [
      'Do classify the question as Grammar (options have same root) or Vocab (different roots) in 1 second.',
      'Do prioritize strict 15-20 second pacing per question.',
      'Do memorize high-frequency TOEIC dependent prepositions (comply with, refrain from, consist of).',
      'Do check subject-verb agreement by finding the actual grammatical head noun.'
    ],
    donts: [
      'Do not spend more than 30 seconds on any single Part 5 item.',
      'Do not confuse prepositions (despite, due to) with conjunctions (although, because).',
      'Do not read the sentence three times if you already identified the grammatical blank.',
      'Do not forget that time saved here is crucial for Part 7 passages.'
    ]
  },
  {
    part: 6,
    name: 'Text Completion',
    section: 'Reading',
    totalQuestions: 16,
    timeRecommendation: '4 texts with 4 questions each. Target 1.5 to 2 minutes per text (Total: ~8 minutes).',
    taskDescription:
      'You will read four business texts (emails, memos, notices, articles). In each text, four blanks are missing. You must choose the best word, phrase, or entire sentence to fit each blank.',
    traps: [
      {
        title: 'Sentence Insertion Out of Context',
        description: 'Choosing an inserted sentence that sounds good on its own but breaks the logical progression or pronoun reference of surrounding sentences.',
        example: 'Inserting a sentence about parking permits into a paragraph describing IT password policies.'
      },
      {
        title: 'Ignoring Discourse Markers & Transitions',
        description: 'Selecting "Furthermore" instead of "However" or "Therefore" without checking whether the relationship is contrast, addition, or cause.',
        example: 'Sentences: "Sales grew 10%. [Consequently / However], net profits fell due to raw material inflation."'
      },
      {
        title: 'Tense Inconsistency Across the Paragraph',
        description: 'Picking present tense when time indicators in preceding or succeeding sentences establish that the event occurred in the past or is scheduled for next year.',
        example: 'Preceding sentence mentions "Last October"; distractor provides present continuous.'
      },
      {
        title: 'Demonstrative Pronoun Trap in Sentence Insertion',
        description: 'Failing to check words like "This initiative", "These concerns", or "Such delays" which must refer to something explicitly stated in the sentence immediately before!',
        example: 'A sentence beginning with "These changes will take effect..." must follow a sentence detailing changes.'
      },
      {
        title: 'Locally Plausible but Globally Contradictory Words',
        description: 'Selecting a vocabulary word that fits the isolated sentence, but directly contradicts the main message of the entire memo.',
        example: 'Memo announces a store closure; option suggests "celebrating the expansion".'
      }
    ],
    methodSteps: [
      'Read the title, sender/recipient, and first sentence to establish context (purpose, tone, timeline).',
      'Read through continuously: do not just look at the blank in isolation.',
      'For sentence-insertion questions, pay close attention to pronouns (he, they, this, these) and transition words (however, for example, in contrast).',
      'Verify verb tenses against the global timeline of the document (past actions vs upcoming deadlines).'
    ],
    workedExamples: [
      {
        question: 'Dear Valued Customer, We are writing to notify you that our customer billing portal _______ scheduled maintenance this Saturday evening.',
        options: [
          { key: 'A', text: 'underwent' },
          { key: 'B', text: 'will undergo' },
          { key: 'C', text: 'is undergoing' },
          { key: 'D', text: 'has undergone' }
        ],
        correctAnswer: 'B',
        explanation: 'The time marker "this Saturday evening" combined with an advance notification email indicates a scheduled future event: "will undergo".',
        keyTakeaway: 'Always align verb tenses with contextual time markers in the document.'
      },
      {
        question: 'During this window, online account access will be temporarily unavailable. _______. We apologize for any inconvenience.',
        options: [
          { key: 'A', text: 'Our telephone support lines will remain operational for urgent assistance.' },
          { key: 'B', text: 'We have already charged your credit card for the annual fee.' },
          { key: 'C', text: 'Please bring your photo ID to our downtown branch tomorrow.' },
          { key: 'D', text: 'New account registrations have exceeded our annual expectations.' }
        ],
        correctAnswer: 'A',
        explanation: 'Sentence insertion: The previous sentence mentions online access is down. Option A logically provides an alternative support channel ("telephone support lines will remain operational").',
        keyTakeaway: 'The correct inserted sentence acts as a bridge between the preceding problem and subsequent closing apology.'
      },
      {
        question: 'The management board has decided to implement a hybrid work policy. _______, all staff members will be eligible to work remotely up to two days per week.',
        options: [
          { key: 'A', text: 'Consequently' },
          { key: 'B', text: 'Otherwise' },
          { key: 'C', text: 'In contrast' },
          { key: 'D', text: 'Nevertheless' }
        ],
        correctAnswer: 'A',
        explanation: 'The second sentence is the direct outcome/result of the board\'s decision. "Consequently" signifies cause and effect.',
        keyTakeaway: 'Analyze the logical relationship: Result = Consequently/Therefore; Contrast = However/Nevertheless; Condition = Otherwise.'
      },
      {
        question: 'Please submit your department\'s equipment requests _______ Friday at 5:00 P.M.',
        options: [
          { key: 'A', text: 'prior' },
          { key: 'B', text: 'by' },
          { key: 'C', text: 'during' },
          { key: 'D', text: 'since' }
        ],
        correctAnswer: 'B',
        explanation: '"By" indicates deadline. "Prior" requires "to" ("prior to Friday"). "Since" requires present perfect. "During" denotes duration.',
        keyTakeaway: 'Check required prepositions: "prior to", but simply "by + deadline".'
      },
      {
        question: 'Please review the attached guideline carefully. Compliance with these procedures is _______ for all personnel.',
        options: [
          { key: 'A', text: 'mandatory' },
          { key: 'B', text: 'mandate' },
          { key: 'C', text: 'mandating' },
          { key: 'D', text: 'mandatorily' }
        ],
        correctAnswer: 'A',
        explanation: 'Predicate adjective after linking verb "is": "mandatory" (obligatory/compulsory).',
        keyTakeaway: 'Be + Adjective pattern is one of the most tested structures in Parts 5 and 6.'
      }
    ],
    dos: [
      'Do read the surrounding sentences before choosing an answer.',
      'Do check pronoun antecedents (does "this policy" refer to the preceding line?).',
      'Do identify whether the text is an internal memo, customer email, or press release.',
      'Do confirm transition word logic (cause, contrast, sequence).'
    ],
    donts: [
      'Do not treat blanks as isolated sentences; Part 6 tests paragraph cohesion.',
      'Do not spend more than 2 minutes on any single passage.',
      'Do not choose a sentence insertion option without rereading the sentence before and after it.',
      'Do not overlook document date stamps and email headers.'
    ]
  },
  {
    part: 7,
    name: 'Reading Comprehension',
    section: 'Reading',
    totalQuestions: 54,
    timeRecommendation: '54 questions in ~55 minutes. Single passages: 2-3 min each; Double/Triple sets: 4-5 min each.',
    taskDescription:
      'You will read single passages (articles, emails, notices, text-message threads) and multi-passage sets (two or three related documents like an email + schedule + invoice). You must answer 2 to 5 questions per set.',
    traps: [
      {
        title: 'Verbatim Word Match (The Surface Match Trap)',
        description: 'An incorrect option copies exact words from the passage, but changes the meaning, condition, or timeline.',
        example: 'Passage: "Employees may purchase discounted parking passes if space permits." Distractor: "Free parking passes are distributed."'
      },
      {
        title: 'Cross-Passage Synthesis Failure',
        description: 'In double and triple passage sets, at least 2 questions REQUIRE combining a fact from Document 1 with a fact from Document 2.',
        example: 'Doc 1: "Contact the head of logistics." Doc 2 (Directory): "Elena Rostova: Logistics Director." Question: "Who should you contact?" Correct: Elena Rostova.'
      },
      {
        title: 'Vocabulary-in-Context Trap (Secondary Meanings)',
        description: 'The tested word has multiple meanings. The most common dictionary definition is usually the trap; the specific business contextual meaning is correct.',
        example: 'Word: "secure". Trap: "safe/protected". Business context: "The team secured a million-dollar contract" = "obtained / acquired".'
      },
      {
        title: 'Text-Message Thread / Chat Implication',
        description: 'Missing the tone, time stamps, or rapid changes of subject in modern chat/instant messaging questions.',
        example: 'Colleague writes at 10:04 AM: "I\'m tied up until noon." Implication: Cannot join the 11:00 AM status call.'
      },
      {
        title: 'Extreme Language in Inference Questions',
        description: 'Options using absolute words like "always", "never", "only", "exclusively", "must" are rarely supported by business passages.',
        example: 'Passage: "We generally favor local vendors." Distractor: "The firm never works with foreign suppliers."'
      }
    ],
    methodSteps: [
      'Skim the questions FIRST (not options): memorize 2-3 specific keywords (names, dates, dollar amounts, specific nouns).',
      'Scan the text for those keywords and read 2 sentences before and after with high focus.',
      'For "NOT / EXCEPT" questions: recognize that 3 options are mentioned in the text; eliminate them as you find them.',
      'In Double/Triple sets: determine the relationship between documents (e.g., Doc 1 is an ad, Doc 2 is an application email, Doc 3 is an interview schedule).',
      'For vocabulary questions: substitute each option into the original sentence to verify semantic fit.'
    ],
    workedExamples: [
      {
        question: 'What is indicated about the workshop schedule?',
        options: [
          { key: 'A', text: 'It has been postponed until autumn.' },
          { key: 'B', text: 'The morning session will begin at 9:00 A.M.' },
          { key: 'C', text: 'Lunch will be provided at no extra cost.' },
          { key: 'D', text: 'Participants must register in person.' }
        ],
        correctAnswer: 'B',
        explanation: 'Factual retrieval: The schedule clearly lists "Opening Keynote & Workshop: 9:00 A.M. to 12:00 P.M."',
        keyTakeaway: 'Scan headings and bullet points for times, numbers, and dates.'
      },
      {
        question: 'In the email, the word "accommodate" in paragraph 2, line 4, is closest in meaning to:',
        options: [
          { key: 'A', text: 'lodge' },
          { key: 'B', text: 'oblige' },
          { key: 'C', text: 'fulfill' },
          { key: 'D', text: 'contain' }
        ],
        correctAnswer: 'C',
        explanation: 'Context: "We will make every effort to accommodate your special dietary requests." In this business context, accommodate a request means fulfill or satisfy it.',
        keyTakeaway: 'Do not automatically pick the first dictionary meaning (lodge/housing); look at what follows (requests).'
      },
      {
        question: 'What is suggested about Mr. Delgado?',
        options: [
          { key: 'A', text: 'He is visiting the Tokyo office for the first time.' },
          { key: 'B', text: 'He will receive an express shipping discount.' },
          { key: 'C', text: 'He recently changed his flight reservation.' },
          { key: 'D', text: 'He has worked for the company for over ten years.' }
        ],
        correctAnswer: 'B',
        explanation: 'Cross-document synthesis: Doc 1 states that Gold Tier members receive 20% off express courier rates. Doc 2 shows Mr. Delgado\'s membership badge marked "Gold Tier".',
        keyTakeaway: 'Multi-passage questions bridge two separate clues across documents.'
      },
      {
        question: 'At 2:15 P.M., what does Ms. Sato mean when she texts, "I\'m on it"?',
        options: [
          { key: 'A', text: 'She is boarding a train.' },
          { key: 'B', text: 'She will handle the client request.' },
          { key: 'C', text: 'She is reviewing a financial report.' },
          { key: 'D', text: 'She agrees with a proposed schedule.' }
        ],
        correctAnswer: 'B',
        explanation: 'Colloquial idiom in text chats: "I\'m on it" means "I am actively taking care of this task / handling it now".',
        keyTakeaway: 'Modern TOEIC frequently includes text chat transcripts with workplace idioms.'
      },
      {
        question: 'Which of the following is NOT mentioned as a benefit of the new software?',
        options: [
          { key: 'A', text: 'Automated invoice generation' },
          { key: 'B', text: 'Real-time inventory tracking' },
          { key: 'C', text: 'Unlimited cloud backup storage' },
          { key: 'D', text: 'Free 24/7 technical phone support' }
        ],
        correctAnswer: 'D',
        explanation: 'Negative factual question: The text mentions A, B, and C explicitly. The text notes phone support is available during regular office hours only, making D untrue.',
        keyTakeaway: 'For NOT/EXCEPT questions, verify three true statements in the text; the unmentioned or contradicted one is the answer.'
      }
    ],
    dos: [
      'Do read the question stems before reading lengthy passages.',
      'Do watch the clock: 55 minutes for 54 questions = ~1 minute per question average.',
      'Do look for cross-document connections in double/triple sets.',
      'Do practice scanning for proper nouns, numbers, and quotation marks.'
    ],
    donts: [
      'Do not get stuck on a single difficult passage; guess and move to easier sets.',
      'Do not pick an answer simply because it repeats words verbatim from the text.',
      'Do not leave any question blank on your answer sheet.',
      'Do not assume outside real-world facts not supported by the passage.'
    ]
  }
];
