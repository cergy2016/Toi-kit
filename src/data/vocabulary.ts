import { VocabWord } from '../types';

export const VOCABULARY_LIST: VocabWord[] = [
  // --- 1. Meetings & Negotiations (1 - 65) ---
  {
    id: 1,
    word: 'adjourn',
    pos: 'verb',
    definition: 'To suspend the meeting of a committee or other gathering to a future time.',
    example: 'The board chair decided to adjourn the session until Friday morning.',
    collocation: 'adjourn the meeting / session',
    category: 'Meetings & Negotiations'
  },
  {
    id: 2,
    word: 'agenda',
    pos: 'noun',
    definition: 'A list of items of business to be considered and discussed at a meeting.',
    example: 'Please send any additional topics for the agenda before 3:00 P.M.',
    collocation: 'on the agenda / set an agenda',
    category: 'Meetings & Negotiations'
  },
  {
    id: 3,
    word: 'consensus',
    pos: 'noun',
    definition: 'A general agreement arrived at by mutual consent of all members.',
    example: 'After two hours of discussion, the committee reached a clear consensus.',
    collocation: 'reach a consensus / general consensus',
    category: 'Meetings & Negotiations'
  },
  {
    id: 4,
    word: 'unanimous',
    pos: 'adjective',
    definition: 'Formed or accepted with the agreement of all people involved.',
    example: 'The proposal passed by a unanimous vote of the board of directors.',
    collocation: 'unanimous decision / unanimous agreement',
    category: 'Meetings & Negotiations'
  },
  {
    id: 5,
    word: 'convene',
    pos: 'verb',
    definition: 'To come together or assemble for a formal meeting or conference.',
    example: 'The annual strategy council will convene next Tuesday at 9:00 A.M.',
    collocation: 'convene a meeting / conference',
    category: 'Meetings & Negotiations'
  },
  {
    id: 6,
    word: 'compromise',
    pos: 'noun',
    definition: 'An agreement in which both sides make concessions to settle a dispute.',
    example: 'Both labor representatives and management agreed on a fair compromise.',
    collocation: 'reach a compromise / compromise on',
    category: 'Meetings & Negotiations'
  },
  {
    id: 7,
    word: 'concession',
    pos: 'noun',
    definition: 'Something that is granted or yielded in response to demands during negotiations.',
    example: 'The supplier offered a price concession in exchange for a five-year contract.',
    collocation: 'make concessions / grant a concession',
    category: 'Meetings & Negotiations'
  },
  {
    id: 8,
    word: 'minutes',
    pos: 'noun',
    definition: 'The official written summary record of what took place at a meeting.',
    example: 'The secretary will distribute the minutes of today\'s meeting by tomorrow.',
    collocation: 'take the minutes / approve the minutes',
    category: 'Meetings & Negotiations'
  },
  {
    id: 9,
    word: 'counterproposal',
    pos: 'noun',
    definition: 'An alternative proposal made in response to an existing offer.',
    example: 'The union prepared a counterproposal regarding overtime wage rates.',
    collocation: 'submit a counterproposal / reject a counterproposal',
    category: 'Meetings & Negotiations'
  },
  {
    id: 10,
    word: 'deadlock',
    pos: 'noun',
    definition: 'A state where progress is impossible, especially due to disagreement; stalemate.',
    example: 'A federal mediator was appointed to break the deadlock in wage talks.',
    collocation: 'break a deadlock / reach a deadlock',
    category: 'Meetings & Negotiations'
  },
  {
    id: 11,
    word: 'impasse',
    pos: 'noun',
    definition: 'A situation in which no progress seems possible; deadlock.',
    example: 'Negotiations reached an impasse when neither side would compromise on royalties.',
    collocation: 'reach an impasse / resolve an impasse',
    category: 'Meetings & Negotiations'
  },
  {
    id: 12,
    word: 'facilitate',
    pos: 'verb',
    definition: 'To make an action, process, or discussion easier or less difficult.',
    example: 'A professional moderator was hired to facilitate the joint venture talks.',
    collocation: 'facilitate discussion / facilitate communication',
    category: 'Meetings & Negotiations'
  },
  {
    id: 13,
    word: 'clarify',
    pos: 'verb',
    definition: 'To make understandable, clear, or free from confusion.',
    example: 'Could you clarify your department\'s budget allocation for this quarter?',
    collocation: 'clarify a point / clarify misunderstandings',
    category: 'Meetings & Negotiations'
  },
  {
    id: 14,
    word: 'brainstorm',
    pos: 'verb',
    definition: 'To generate spontaneous ideas and creative solutions within a group.',
    example: 'The marketing team met to brainstorm names for the new skincare line.',
    collocation: 'brainstorm solutions / brainstorming session',
    category: 'Meetings & Negotiations'
  },
  {
    id: 15,
    word: 'quorum',
    pos: 'noun',
    definition: 'The minimum number of voting members required to conduct valid business.',
    example: 'Since a quorum was not present, no formal vote could be recorded.',
    collocation: 'establish a quorum / lack a quorum',
    category: 'Meetings & Negotiations'
  },
  {
    id: 16,
    word: 'deliberate',
    pos: 'verb',
    definition: 'To think about or discuss issues carefully before deciding.',
    example: 'The board will deliberate for three days before selecting the next CEO.',
    collocation: 'deliberate on / deliberate carefully',
    category: 'Meetings & Negotiations'
  },
  {
    id: 17,
    word: 'tentative',
    pos: 'adjective',
    definition: 'Not certain or fixed; provisional; subject to revision.',
    example: 'We established a tentative schedule for the product rollout.',
    collocation: 'tentative agreement / tentative plan',
    category: 'Meetings & Negotiations'
  },
  {
    id: 18,
    word: 'discrepancy',
    pos: 'noun',
    definition: 'A lack of compatibility or similarity between two or more facts.',
    example: 'The auditors noted a discrepancy between the receipts and bank records.',
    collocation: 'resolve a discrepancy / notice a discrepancy',
    category: 'Meetings & Negotiations'
  },
  {
    id: 19,
    word: 'motion',
    pos: 'noun',
    definition: 'A formal proposal put to a vote under parliamentary rules.',
    example: 'Mr. Vance made a motion to approve the revised architectural blueprints.',
    collocation: 'second a motion / pass a motion',
    category: 'Meetings & Negotiations'
  },
  {
    id: 20,
    word: 'leverage',
    pos: 'noun',
    definition: 'Power or influence to achieve a desired result in negotiations.',
    example: 'Holding two alternative offers gave the supplier significant bargaining leverage.',
    collocation: 'bargaining leverage / gain leverage',
    category: 'Meetings & Negotiations'
  },
  {
    id: 21,
    word: 'postpone',
    pos: 'verb',
    definition: 'To delay an event or arrangement until a later time.',
    example: 'We must postpone the quarterly review until the financial numbers are ready.',
    collocation: 'postpone until / postpone a meeting',
    category: 'Meetings & Negotiations'
  },
  {
    id: 22,
    word: 'reschedule',
    pos: 'verb',
    definition: 'To change the scheduled time or date of an appointment.',
    example: 'Can we reschedule our briefing for Thursday afternoon?',
    collocation: 'reschedule an appointment / reschedule for',
    category: 'Meetings & Negotiations'
  },
  {
    id: 23,
    word: 'collaborate',
    pos: 'verb',
    definition: 'To work jointly with others on an intellectual or business endeavor.',
    example: 'Both departments agreed to collaborate closely on the sustainability audit.',
    collocation: 'collaborate with / collaborate on a project',
    category: 'Meetings & Negotiations'
  },
  {
    id: 24,
    word: 'stipulate',
    pos: 'verb',
    definition: 'To demand or specify a requirement as part of a bargain.',
    example: 'The buyer stipulated that delivery must occur before the end of the fiscal month.',
    collocation: 'stipulate conditions / as stipulated in',
    category: 'Meetings & Negotiations'
  },
  {
    id: 25,
    word: 'perspective',
    pos: 'noun',
    definition: 'A particular point of view or way of regarding situations.',
    example: 'Her legal perspective proved invaluable throughout the merger negotiations.',
    collocation: 'from the perspective of / offer a perspective',
    category: 'Meetings & Negotiations'
  },
  {
    id: 26,
    word: 'table',
    pos: 'verb',
    definition: 'To postpone consideration of a topic or proposal indefinitely (US usage).',
    example: 'The committee decided to table the budget amendment until next quarter.',
    collocation: 'table a motion / table the discussion',
    category: 'Meetings & Negotiations'
  },
  {
    id: 27,
    word: 'briefing',
    pos: 'noun',
    definition: 'A meeting for imparting information or giving instructions succinctly.',
    example: 'All sales agents attended the morning briefing regarding new client tariffs.',
    collocation: 'attend a briefing / conduct a briefing',
    category: 'Meetings & Negotiations'
  },
  {
    id: 28,
    word: 'arbitration',
    pos: 'noun',
    definition: 'The hearing and determining of a dispute by an impartial third party.',
    example: 'The contract mandates binding arbitration in the event of non-performance.',
    collocation: 'binding arbitration / submit to arbitration',
    category: 'Meetings & Negotiations'
  },
  {
    id: 29,
    word: 'mediator',
    pos: 'noun',
    definition: 'A person who attempts to make people involved in a conflict come to an agreement.',
    example: 'The neutral mediator urged both executives to consider long-term synergies.',
    collocation: 'act as a mediator / independent mediator',
    category: 'Meetings & Negotiations'
  },
  {
    id: 30,
    word: 'standpoint',
    pos: 'noun',
    definition: 'An attitude or position towards an issue; viewpoint.',
    example: 'From an operational standpoint, switching to automation will reduce errors.',
    collocation: 'from a financial standpoint / operational standpoint',
    category: 'Meetings & Negotiations'
  },
  {
    id: 31,
    word: 'reiterate',
    pos: 'verb',
    definition: 'To say something again or several times, typically for emphasis.',
    example: 'The director reiterated that workplace safety remains our utmost priority.',
    collocation: 'reiterate the importance / reiterate a point',
    category: 'Meetings & Negotiations'
  },
  {
    id: 32,
    word: 'feasible',
    pos: 'adjective',
    definition: 'Possible to do easily or conveniently; workable.',
    example: 'Our engineering consultants concluded that the timeline was commercially feasible.',
    collocation: 'economically feasible / feasible solution',
    category: 'Meetings & Negotiations'
  },
  {
    id: 33,
    word: 'receptive',
    pos: 'adjective',
    definition: 'Willing to consider or accept new suggestions and ideas.',
    example: 'The prospective client was very receptive to our proposed pricing model.',
    collocation: 'receptive to ideas / receptive audience',
    category: 'Meetings & Negotiations'
  },
  {
    id: 34,
    word: 'outline',
    pos: 'verb',
    definition: 'To give a summary of the essential features of something.',
    example: 'The presentation outlined three strategic growth pillars for 2027.',
    collocation: 'outline a plan / outline the objectives',
    category: 'Meetings & Negotiations'
  },
  {
    id: 35,
    word: 'summarize',
    pos: 'verb',
    definition: 'To give a brief statement of the main points of something.',
    example: 'At the end of the call, she summarized the action items assigned to each team.',
    collocation: 'summarize findings / briefly summarize',
    category: 'Meetings & Negotiations'
  },
  {
    id: 36,
    word: 'concur',
    pos: 'verb',
    definition: 'To be of the same opinion; agree.',
    example: 'All regional managers concurred with the recommendation to expand online support.',
    collocation: 'concur with / concur that',
    category: 'Meetings & Negotiations'
  },
  {
    id: 37,
    word: 'dissent',
    pos: 'noun',
    definition: 'The expression of opinions at variance with those previously or commonly held.',
    example: 'There was considerable dissent among shareholders regarding the proposed acquisition.',
    collocation: 'voice dissent / express dissent',
    category: 'Meetings & Negotiations'
  },
  {
    id: 38,
    word: 'viable',
    pos: 'adjective',
    definition: 'Capable of working successfully; feasible.',
    example: 'We need to develop a commercially viable business plan before approaching investors.',
    collocation: 'viable option / viable alternative',
    category: 'Meetings & Negotiations'
  },
  {
    id: 39,
    word: 'provisional',
    pos: 'adjective',
    definition: 'Arranged or existing for the present, possibly to be changed later.',
    example: 'The dates listed in the pamphlet are provisional and subject to venue confirmation.',
    collocation: 'provisional schedule / provisional approval',
    category: 'Meetings & Negotiations'
  },
  {
    id: 40,
    word: 'preliminary',
    pos: 'adjective',
    definition: 'Denoting an action or event preceding or done in preparation for something fuller.',
    example: 'Preliminary negotiations indicate that both enterprises favor a merger.',
    collocation: 'preliminary discussions / preliminary findings',
    category: 'Meetings & Negotiations'
  },
  {
    id: 41,
    word: 'reconcile',
    pos: 'verb',
    definition: 'To restore friendly relations or harmonize incompatible opinions.',
    example: 'The two departments must reconcile their conflicting estimates before the board meeting.',
    collocation: 'reconcile differences / reconcile accounts',
    category: 'Meetings & Negotiations'
  },
  {
    id: 42,
    word: 'actionable',
    pos: 'adjective',
    definition: 'Giving sufficient reason to take practical action.',
    example: 'The consultant provided five actionable steps to improve customer loyalty.',
    collocation: 'actionable insights / actionable items',
    category: 'Meetings & Negotiations'
  },
  {
    id: 43,
    word: 'turnout',
    pos: 'noun',
    definition: 'The number of people attending or participating in an event.',
    example: 'There was an impressive turnout for the annual general meeting.',
    collocation: 'record turnout / heavy turnout',
    category: 'Meetings & Negotiations'
  },
  {
    id: 44,
    word: 'repertoire',
    pos: 'noun',
    definition: 'A stock of skills or types of behavior that a person regularly uses.',
    example: 'Effective negotiators possess a broad repertoire of conflict resolution tactics.',
    collocation: 'negotiating repertoire / wide repertoire',
    category: 'Meetings & Negotiations'
  },
  {
    id: 45,
    word: 'amicable',
    pos: 'adjective',
    definition: 'Characterized by friendliness and absence of discord.',
    example: 'The partners reached an amicable settlement regarding the division of assets.',
    collocation: 'amicable agreement / amicable solution',
    category: 'Meetings & Negotiations'
  },
  {
    id: 46,
    word: 'counterpart',
    pos: 'noun',
    definition: 'A person holding a position corresponding to that of another in a different organization.',
    example: 'The Japanese finance minister met with her European counterpart in Geneva.',
    collocation: 'international counterpart / managerial counterpart',
    category: 'Meetings & Negotiations'
  },
  {
    id: 47,
    word: 'synergy',
    pos: 'noun',
    definition: 'The interaction of elements that produces a total effect greater than the sum of individual elements.',
    example: 'The merger is projected to create operational synergies of $50 million annually.',
    collocation: 'create synergies / operational synergy',
    category: 'Meetings & Negotiations'
  },
  {
    id: 48,
    word: 'veto',
    pos: 'verb',
    definition: 'To exercise a constitutional right to reject a decision or proposal.',
    example: 'The managing director has the authority to veto capital expenditure proposals.',
    collocation: 'veto a proposal / power to veto',
    category: 'Meetings & Negotiations'
  },
  {
    id: 49,
    word: 'ratify',
    pos: 'verb',
    definition: 'To sign or give formal consent to a treaty, contract, or agreement.',
    example: 'Union delegates voted overwhelmingly to ratify the collective bargaining accord.',
    collocation: 'ratify an agreement / ratify a treaty',
    category: 'Meetings & Negotiations'
  },
  {
    id: 50,
    word: 'contingency',
    pos: 'noun',
    definition: 'A future event or circumstance which is possible but cannot be predicted with certainty.',
    example: 'We established a contingency fund in case supply shipping rates increase.',
    collocation: 'contingency plan / contingency fund',
    category: 'Meetings & Negotiations'
  },
  {
    id: 51,
    word: 'protocol',
    pos: 'noun',
    definition: 'The official procedure or system of rules governing formal affairs.',
    example: 'Security protocol requires all visitors to wear guest badges at all times.',
    collocation: 'follow protocol / strict protocol',
    category: 'Meetings & Negotiations'
  },
  {
    id: 52,
    word: 'concede',
    pos: 'verb',
    definition: 'To admit that something is true or valid after first denying or resisting it.',
    example: 'The supplier finally conceded that delivery delays were due to warehouse shortages.',
    collocation: 'concede defeat / concede a point',
    category: 'Meetings & Negotiations'
  },
  {
    id: 53,
    word: 'dispute',
    pos: 'noun',
    definition: 'A disagreement, argument, or debate between two parties.',
    example: 'The legal department worked to resolve the trademark dispute out of court.',
    collocation: 'resolve a dispute / trade dispute',
    category: 'Meetings & Negotiations'
  },
  {
    id: 54,
    word: 'settlement',
    pos: 'noun',
    definition: 'An official agreement intended to resolve a dispute or conflict.',
    example: 'The company reached a financial settlement with the former contractor.',
    collocation: 'out-of-court settlement / reach a settlement',
    category: 'Meetings & Negotiations'
  },
  {
    id: 55,
    word: 'mandate',
    pos: 'noun',
    definition: 'An official order or commission to do something.',
    example: 'The committee was given a strict mandate to reduce operational overhead.',
    collocation: 'carry out a mandate / clear mandate',
    category: 'Meetings & Negotiations'
  },
  {
    id: 56,
    word: 'provision',
    pos: 'noun',
    definition: 'A condition or requirement in a legal document or contract.',
    example: 'Under the provisions of the contract, either party may terminate with 30 days’ notice.',
    collocation: 'under the provision / contractual provisions',
    category: 'Meetings & Negotiations'
  },
  {
    id: 57,
    word: 'tactful',
    pos: 'adjective',
    definition: 'Having or showing skill and sensitivity in dealing with others or difficult issues.',
    example: 'The manager gave tactful feedback so as not to discourage the junior copywriter.',
    collocation: 'tactful response / tactful manner',
    category: 'Meetings & Negotiations'
  },
  {
    id: 58,
    word: 'unilateral',
    pos: 'adjective',
    definition: 'Performed by or affecting only one person, group, or country without agreement.',
    example: 'A unilateral decision to cancel the contract could lead to litigation.',
    collocation: 'unilateral decision / unilateral action',
    category: 'Meetings & Negotiations'
  },
  {
    id: 59,
    word: 'bilateral',
    pos: 'adjective',
    definition: 'Having or relating to two sides; affecting both sides.',
    example: 'The two countries entered into bilateral discussions to reduce import tariffs.',
    collocation: 'bilateral agreement / bilateral trade',
    category: 'Meetings & Negotiations'
  },
  {
    id: 60,
    word: 'multilateral',
    pos: 'adjective',
    definition: 'Agreed upon or participated in by three or more parties.',
    example: 'The multilateral trade accord was signed by delegates from seven nations.',
    collocation: 'multilateral treaty / multilateral negotiations',
    category: 'Meetings & Negotiations'
  },
  {
    id: 61,
    word: 'rapport',
    pos: 'noun',
    definition: 'A close and harmonious relationship in which people understand each other\'s feelings.',
    example: 'The sales representative built an exceptional rapport with key account holders.',
    collocation: 'build rapport / establish a rapport',
    category: 'Meetings & Negotiations'
  },
  {
    id: 62,
    word: 'yield',
    pos: 'verb',
    definition: 'To give way to arguments, demands, or pressure; surrender.',
    example: 'Neither side was willing to yield on the contentious issue of patent rights.',
    collocation: 'yield to pressure / yield results',
    category: 'Meetings & Negotiations'
  },
  {
    id: 63,
    word: 'reciprocal',
    pos: 'adjective',
    definition: 'Given, felt, or done in return; mutual.',
    example: 'The companies signed a reciprocal agreement granting access to shared data.',
    collocation: 'reciprocal agreement / reciprocal benefits',
    category: 'Meetings & Negotiations'
  },
  {
    id: 64,
    word: 'discourse',
    pos: 'noun',
    definition: 'Written or spoken communication or debate.',
    example: 'Constructive discourse during the summit allowed partners to align their vision.',
    collocation: 'civil discourse / public discourse',
    category: 'Meetings & Negotiations'
  },
  {
    id: 65,
    word: 'resolution',
    pos: 'noun',
    definition: 'A firm decision to do or not to do something; a formal motion passed.',
    example: 'The board adopted a formal resolution to divest from non-core real estate.',
    collocation: 'pass a resolution / adopt a resolution',
    category: 'Meetings & Negotiations'
  },

  // --- 2. Finance & Accounting (66 - 130) ---
  {
    id: 66,
    word: 'audit',
    pos: 'noun',
    definition: 'An official inspection of an individual\'s or organization\'s accounts.',
    example: 'The external accounting firm will conduct the annual financial audit next week.',
    collocation: 'conduct an audit / audit report',
    category: 'Finance & Accounting'
  },
  {
    id: 67,
    word: 'fiscal',
    pos: 'adjective',
    definition: 'Relating to government or corporate financial and budgetary matters.',
    example: 'Our fiscal year concludes on December 31.',
    collocation: 'fiscal year / fiscal policy',
    category: 'Finance & Accounting'
  },
  {
    id: 68,
    word: 'revenue',
    pos: 'noun',
    definition: 'Income, especially when of a company or organization and of a substantial nature.',
    example: 'Total gross revenue rose twelve percent due to software subscription renewals.',
    collocation: 'generate revenue / annual revenue',
    category: 'Finance & Accounting'
  },
  {
    id: 69,
    word: 'expenditure',
    pos: 'noun',
    definition: 'The action of spending funds; an amount of money spent.',
    example: 'Capital expenditure on automated manufacturing machinery will increase in 2027.',
    collocation: 'capital expenditure / curb expenditure',
    category: 'Finance & Accounting'
  },
  {
    id: 70,
    word: 'liability',
    pos: 'noun',
    definition: 'A company\'s financial debts or obligations that arise during business operations.',
    example: 'The balance sheet clearly separates short-term assets from long-term liabilities.',
    collocation: 'current liabilities / assume liability',
    category: 'Finance & Accounting'
  },
  {
    id: 71,
    word: 'asset',
    pos: 'noun',
    definition: 'A useful or valuable quality, person, or thing; corporate property.',
    example: 'Liquid assets, including cash and treasury bills, exceeded $40 million.',
    collocation: 'fixed assets / liquid assets',
    category: 'Finance & Accounting'
  },
  {
    id: 72,
    word: 'depreciation',
    pos: 'noun',
    definition: 'A reduction in the value of an asset over time, particularly through wear and tear.',
    example: 'The accountant calculated depreciation on the delivery fleet over five years.',
    collocation: 'accelerated depreciation / asset depreciation',
    category: 'Finance & Accounting'
  },
  {
    id: 73,
    word: 'dividend',
    pos: 'noun',
    definition: 'A sum of money paid regularly by a company to its shareholders out of its profits.',
    example: 'The board voted to increase the quarterly dividend to seventy-five cents per share.',
    collocation: 'pay a dividend / quarterly dividend',
    category: 'Finance & Accounting'
  },
  {
    id: 74,
    word: 'fluctuation',
    pos: 'noun',
    definition: 'An irregular rising and falling in number or amount; a variation.',
    example: 'Currency fluctuations in foreign exchange markets impacted our overseas earnings.',
    collocation: 'currency fluctuation / market fluctuations',
    category: 'Finance & Accounting'
  },
  {
    id: 75,
    word: 'portfolio',
    pos: 'noun',
    definition: 'A range of investments held by an individual or organization.',
    example: 'Financial advisers recommend diversifying your investment portfolio across asset classes.',
    collocation: 'diversified portfolio / investment portfolio',
    category: 'Finance & Accounting'
  },
  {
    id: 76,
    word: 'solvent',
    pos: 'adjective',
    definition: 'Having assets in excess of liabilities; able to pay one\'s debts.',
    example: 'Despite the severe market downturn, the multinational bank remained fully solvent.',
    collocation: 'remain solvent / solvent institution',
    category: 'Finance & Accounting'
  },
  {
    id: 77,
    word: 'overhead',
    pos: 'noun',
    definition: 'Ongoing business expenses not directly attributed to creating a product or service.',
    example: 'Switching to remote work helped the consulting startup lower its monthly overhead.',
    collocation: 'reduce overhead / overhead costs',
    category: 'Finance & Accounting'
  },
  {
    id: 78,
    word: 'invoice',
    pos: 'noun',
    definition: 'A commercial document that itemizes and records a transaction between buyer and seller.',
    example: 'Payment must be remitted within thirty days of the date on the invoice.',
    collocation: 'issue an invoice / pay an invoice',
    category: 'Finance & Accounting'
  },
  {
    id: 79,
    word: 'remittance',
    pos: 'noun',
    definition: 'A sum of money sent in payment for goods or services or as a gift.',
    example: 'Please include your invoice number with your electronic wire remittance.',
    collocation: 'remittance advice / send a remittance',
    category: 'Finance & Accounting'
  },
  {
    id: 80,
    word: 'reimburse',
    pos: 'verb',
    definition: 'To repay a person who has spent or lost money.',
    example: 'The accounting team will reimburse all travel meal expenses upon receipt review.',
    collocation: 'reimburse expenses / reimburse employees',
    category: 'Finance & Accounting'
  },
  {
    id: 81,
    word: 'deficit',
    pos: 'noun',
    definition: 'The amount by which something, especially a sum of money, is too small.',
    example: 'The municipal transit authority projected a $14 million budget deficit this year.',
    collocation: 'budget deficit / trade deficit',
    category: 'Finance & Accounting'
  },
  {
    id: 82,
    word: 'surplus',
    pos: 'noun',
    definition: 'An amount of something left over when requirements have been met; an excess.',
    example: 'The manufacturing plant recorded an operating surplus at the end of the quarter.',
    collocation: 'budget surplus / surplus funds',
    category: 'Finance & Accounting'
  },
  {
    id: 83,
    word: 'ledger',
    pos: 'noun',
    definition: 'A book or electronic file of accounts in which transactions are recorded.',
    example: 'The head bookkeeper cross-checked entries in the general ledger with supplier vouchers.',
    collocation: 'general ledger / ledger balance',
    category: 'Finance & Accounting'
  },
  {
    id: 84,
    word: 'yield',
    pos: 'noun',
    definition: 'The financial return or income generated by an investment.',
    example: 'Government treasury bonds provide a reliable, low-risk annual yield.',
    collocation: 'high yield / dividend yield',
    category: 'Finance & Accounting'
  },
  {
    id: 85,
    word: 'allocation',
    pos: 'noun',
    definition: 'The action or process of distributing resources or funds.',
    example: 'The board approved an increased capital allocation for cloud security software.',
    collocation: 'resource allocation / budget allocation',
    category: 'Finance & Accounting'
  },
  {
    id: 86,
    word: 'discrepancy',
    pos: 'noun',
    definition: 'An illogical or unexpected difference between two figures or amounts.',
    example: 'The quarterly audit revealed a $12,000 discrepancy in inventory accounts.',
    collocation: 'financial discrepancy / unexplained discrepancy',
    category: 'Finance & Accounting'
  },
  {
    id: 87,
    word: 'insolvent',
    pos: 'adjective',
    definition: 'Unable to pay debts owed; bankrupt.',
    example: 'The airline declared itself insolvent after rising jet fuel prices crippled its reserves.',
    collocation: 'become insolvent / insolvent debtor',
    category: 'Finance & Accounting'
  },
  {
    id: 88,
    word: 'amortization',
    pos: 'noun',
    definition: 'The action or process of gradually writing off the initial cost of an asset.',
    example: 'The financial schedule displays the monthly amortization of the mortgage loan.',
    collocation: 'loan amortization / amortization schedule',
    category: 'Finance & Accounting'
  },
  {
    id: 89,
    word: 'collateral',
    pos: 'noun',
    definition: 'Something pledged as security for repayment of a loan, to be forfeited in event of default.',
    example: 'The business owner used commercial real estate as collateral for the line of credit.',
    collocation: 'put up collateral / collateral for a loan',
    category: 'Finance & Accounting'
  },
  {
    id: 90,
    word: 'accrue',
    pos: 'verb',
    definition: 'To be received by someone in regular or increasing amounts over time.',
    example: 'Interest on the savings certificate will accrue on a compounded monthly basis.',
    collocation: 'accrue interest / accrued expenses',
    category: 'Finance & Accounting'
  },
  {
    id: 91,
    word: 'appraisal',
    pos: 'noun',
    definition: 'An act of assessing something or someone, especially the value of property.',
    example: 'Before approving the commercial mortgage, the bank required an independent appraisal.',
    collocation: 'property appraisal / formal appraisal',
    category: 'Finance & Accounting'
  },
  {
    id: 92,
    word: 'equity',
    pos: 'noun',
    definition: 'The value of the shares issued by a company; ownership interest.',
    example: 'The founders retained a sixty percent equity stake in the tech enterprise.',
    collocation: 'private equity / equity stake',
    category: 'Finance & Accounting'
  },
  {
    id: 93,
    word: 'lucrative',
    pos: 'adjective',
    definition: 'Producing a great deal of profit; financially rewarding.',
    example: 'The pharmaceutical manufacturer secured a lucrative government research grant.',
    collocation: 'lucrative contract / lucrative market',
    category: 'Finance & Accounting'
  },
  {
    id: 94,
    word: 'maturity',
    pos: 'noun',
    definition: 'The time when an insurance policy, security, or loan bond becomes payable.',
    example: 'The corporate bonds will reach full maturity in September 2030.',
    collocation: 'reach maturity / date of maturity',
    category: 'Finance & Accounting'
  },
  {
    id: 95,
    word: 'recession',
    pos: 'noun',
    definition: 'A period of temporary economic decline during which trade and activity reduce.',
    example: 'During the global recession, corporate expansion slowed across retail sectors.',
    collocation: 'economic recession / enter a recession',
    category: 'Finance & Accounting'
  },
  {
    id: 96,
    word: 'speculate',
    pos: 'verb',
    definition: 'To invest in stocks or property in the hope of gain but with risk of loss.',
    example: 'Financial regulators cautioned retail investors against speculating on volatile tokens.',
    collocation: 'speculate on / speculate in commodities',
    category: 'Finance & Accounting'
  },
  {
    id: 97,
    word: 'subsidy',
    pos: 'noun',
    definition: 'A sum of money granted by the government to assist an industry or business.',
    example: 'Electric vehicle manufacturers received a state subsidy to lower consumer prices.',
    collocation: 'government subsidy / state subsidies',
    category: 'Finance & Accounting'
  },
  {
    id: 98,
    word: 'tariff',
    pos: 'noun',
    definition: 'A tax or duty to be paid on a particular class of imports or exports.',
    example: 'New tariffs imposed on imported steel caused construction costs to rise sharply.',
    collocation: 'impose a tariff / trade tariff',
    category: 'Finance & Accounting'
  },
  {
    id: 99,
    word: 'venture',
    pos: 'noun',
    definition: 'A risky or daring journey or undertaking, especially a business enterprise.',
    example: 'Venture capitalists injected $15 million into the artificial intelligence startup.',
    collocation: 'joint venture / venture capital',
    category: 'Finance & Accounting'
  },
  {
    id: 100,
    word: 'withhold',
    pos: 'verb',
    definition: 'To deduct money from an employee’s gross pay as taxes.',
    example: 'The payroll software will automatically withhold federal income taxes.',
    collocation: 'withhold taxes / withholding tax',
    category: 'Finance & Accounting'
  },
  {
    id: 101,
    word: 'brokerage',
    pos: 'noun',
    definition: 'A company that buys and sells securities or assets for clients on commission.',
    example: 'She opened an account with a discount brokerage to manage her stock holdings.',
    collocation: 'brokerage firm / brokerage fee',
    category: 'Finance & Accounting'
  },
  {
    id: 102,
    word: 'contingent',
    pos: 'adjective',
    definition: 'Dependent on or conditioned by something else.',
    example: 'The acquisition of the logistics hub is contingent on obtaining regulatory clearance.',
    collocation: 'contingent on / contingent upon',
    category: 'Finance & Accounting'
  },
  {
    id: 103,
    word: 'default',
    pos: 'verb',
    definition: 'To fail to fulfill an obligation, especially to repay a loan.',
    example: 'Borrowers who default on commercial mortgages risk property foreclosure.',
    collocation: 'default on a loan / risk of default',
    category: 'Finance & Accounting'
  },
  {
    id: 104,
    word: 'dividend',
    pos: 'noun',
    definition: 'A share of profits received by a stockholder.',
    example: 'Stockholders were pleased to see the board announce an increased annual dividend.',
    collocation: 'dividend yield / dividend distribution',
    category: 'Finance & Accounting'
  },
  {
    id: 105,
    word: 'due',
    pos: 'adjective',
    definition: 'Expected at or planned for a certain time; owing or payable.',
    example: 'The balance of the service fee is due within fifteen business days.',
    collocation: 'payment is due / past due',
    category: 'Finance & Accounting'
  },
  {
    id: 106,
    word: 'endorse',
    pos: 'verb',
    definition: 'To sign the back of a check to make it payable to another party.',
    example: 'Please endorse the check before presenting it to the bank teller.',
    collocation: 'endorse a check / check endorsement',
    category: 'Finance & Accounting'
  },
  {
    id: 107,
    word: 'exempt',
    pos: 'adjective',
    definition: 'Free from an obligation or liability imposed on others.',
    example: 'Nonprofit charitable institutions are exempt from municipal property taxes.',
    collocation: 'exempt from / tax-exempt status',
    category: 'Finance & Accounting'
  },
  {
    id: 108,
    word: 'foreclosure',
    pos: 'noun',
    definition: 'The action of taking possession of a mortgaged property when payments fail.',
    example: 'The regional bank avoided foreclosure by negotiating a loan restructuring plan.',
    collocation: 'face foreclosure / foreclosure proceedings',
    category: 'Finance & Accounting'
  },
  {
    id: 109,
    word: 'inflation',
    pos: 'noun',
    definition: 'A general increase in prices and fall in the purchasing value of money.',
    example: 'The central bank raised interest rates to combat rising consumer price inflation.',
    collocation: 'rate of inflation / curb inflation',
    category: 'Finance & Accounting'
  },
  {
    id: 110,
    word: 'liquidity',
    pos: 'noun',
    definition: 'The availability of liquid assets to a market or company.',
    example: 'Maintaining adequate cash liquidity allows the firm to navigate seasonal slumps.',
    collocation: 'ensure liquidity / liquidity crisis',
    category: 'Finance & Accounting'
  },
  {
    id: 111,
    word: 'margin',
    pos: 'noun',
    definition: 'The difference between the cost of producing something and its selling price.',
    example: 'Automating the packaging facility widened our net profit margin by 4%.',
    collocation: 'profit margin / operating margin',
    category: 'Finance & Accounting'
  },
  {
    id: 112,
    word: 'procure',
    pos: 'verb',
    definition: 'To obtain something, especially with care or effort.',
    example: 'The CFO successfully procured a low-interest credit line from a state development bank.',
    collocation: 'procure financing / procure resources',
    category: 'Finance & Accounting'
  },
  {
    id: 113,
    word: 'prospective',
    pos: 'adjective',
    definition: 'Expected or expecting to be something specified in the future.',
    example: 'The investment banker hosted a webinar for prospective European shareholders.',
    collocation: 'prospective investors / prospective clients',
    category: 'Finance & Accounting'
  },
  {
    id: 114,
    word: 'reconciliation',
    pos: 'noun',
    definition: 'The process of ensuring that two sets of financial records are in agreement.',
    example: 'Monthly bank account reconciliation prevents undetected accounting discrepancies.',
    collocation: 'account reconciliation / bank reconciliation',
    category: 'Finance & Accounting'
  },
  {
    id: 115,
    word: 'solvency',
    pos: 'noun',
    definition: 'The possession of assets by which debts may be paid; ability to pay debts.',
    example: 'The insurance regulator carried out stress tests to ensure the firm\'s solvency.',
    collocation: 'ensure solvency / financial solvency',
    category: 'Finance & Accounting'
  },
  {
    id: 116,
    word: 'stagnation',
    pos: 'noun',
    definition: 'Lack of activity, growth, or development in an economy.',
    example: 'Economists warned that wage stagnation could dampen domestic consumer spending.',
    collocation: 'economic stagnation / period of stagnation',
    category: 'Finance & Accounting'
  },
  {
    id: 117,
    word: 'subprime',
    pos: 'adjective',
    definition: 'Denoting or relating to credit or loan arrangements for borrowers with poor ratings.',
    example: 'The commercial lender discontinued subprime leasing packages.',
    collocation: 'subprime loan / subprime borrower',
    category: 'Finance & Accounting'
  },
  {
    id: 118,
    word: 'underwrite',
    pos: 'verb',
    definition: 'To accept financial responsibility for something and promise to pay in case of loss.',
    example: 'Three international investment banks agreed to underwrite the tech IPO.',
    collocation: 'underwrite an IPO / underwrite insurance',
    category: 'Finance & Accounting'
  },
  {
    id: 119,
    word: 'write-off',
    pos: 'noun',
    definition: 'A cancellation from an account of a bad debt or an asset that has lost value.',
    example: 'The manufacturer recorded a $2 million write-off on obsolete computer hardware.',
    collocation: 'tax write-off / take a write-off',
    category: 'Finance & Accounting'
  },
  {
    id: 120,
    word: 'accrual',
    pos: 'noun',
    definition: 'The accumulation of interest or different investments over time.',
    example: 'Under accrual accounting, expenses are recognized when incurred, not when paid.',
    collocation: 'accrual basis / interest accrual',
    category: 'Finance & Accounting'
  },
  {
    id: 121,
    word: 'balance',
    pos: 'noun',
    definition: 'The amount of money remaining in an account after all credits and debits.',
    example: 'Please settle the outstanding balance before the end of the billing cycle.',
    collocation: 'outstanding balance / account balance',
    category: 'Finance & Accounting'
  },
  {
    id: 122,
    word: 'bond',
    pos: 'noun',
    definition: 'A debt security issued by a corporation or government to raise capital.',
    example: 'Municipal bonds provide steady, tax-advantaged fixed income for investors.',
    collocation: 'issue a bond / corporate bonds',
    category: 'Finance & Accounting'
  },
  {
    id: 123,
    word: 'capital',
    pos: 'noun',
    definition: 'Wealth in the form of money or assets owned by an individual or organization.',
    example: 'The startup is seeking $5 million in venture capital for product expansion.',
    collocation: 'raise capital / working capital',
    category: 'Finance & Accounting'
  },
  {
    id: 124,
    word: 'credit',
    pos: 'noun',
    definition: 'The ability of a customer to obtain goods or services before payment.',
    example: 'The supplier agreed to extend commercial trade credit on ninety-day terms.',
    collocation: 'line of credit / credit rating',
    category: 'Finance & Accounting'
  },
  {
    id: 125,
    word: 'debit',
    pos: 'verb',
    definition: 'To remove an amount of money from a bank account.',
    example: 'The subscription fee will be automatically debited from your checking account.',
    collocation: 'debit an account / direct debit',
    category: 'Finance & Accounting'
  },
  {
    id: 126,
    word: 'ledger',
    pos: 'noun',
    definition: 'A principal book or computer file for recording and totaling transactions.',
    example: 'Auditors inspected the digital general ledger for unauthorized adjustments.',
    collocation: 'general ledger / ledger entry',
    category: 'Finance & Accounting'
  },
  {
    id: 127,
    word: 'overdraft',
    pos: 'noun',
    definition: 'A deficit in a bank account caused by drawing more money than the account holds.',
    example: 'The bank charges a thirty-dollar fee for every unauthorized account overdraft.',
    collocation: 'overdraft protection / overdraft facility',
    category: 'Finance & Accounting'
  },
  {
    id: 128,
    word: 'premium',
    pos: 'noun',
    definition: 'An amount to be paid for an insurance policy.',
    example: 'Companies that adopt proactive wellness programs can lower their health insurance premiums.',
    collocation: 'monthly premium / pay a premium',
    category: 'Finance & Accounting'
  },
  {
    id: 129,
    word: 'reimbursement',
    pos: 'noun',
    definition: 'The action of repaying someone what has been spent on official business.',
    example: 'Submit all travel receipts to accounting to ensure prompt reimbursement.',
    collocation: 'seek reimbursement / expense reimbursement',
    category: 'Finance & Accounting'
  },
  {
    id: 130,
    word: 'turnover',
    pos: 'noun',
    definition: 'The amount of money taken by a business in a particular period.',
    example: 'The multinational retail chain reported annual turnover exceeding €3 billion.',
    collocation: 'annual turnover / turnover rate',
    category: 'Finance & Accounting'
  },

  // --- 3. HR & Personnel (131 - 195) ---
  {
    id: 131,
    word: 'applicant',
    pos: 'noun',
    definition: 'A person who makes a formal application for something, especially a job.',
    example: 'Over four hundred qualified applicants submitted portfolios for the design position.',
    collocation: 'qualified applicant / successful applicant',
    category: 'HR & Personnel'
  },
  {
    id: 132,
    word: 'probationary',
    pos: 'adjective',
    definition: 'Relating to a trial period during which a new employee is evaluated.',
    example: 'All newly hired staff members undergo a three-month probationary period.',
    collocation: 'probationary period / probationary employee',
    category: 'HR & Personnel'
  },
  {
    id: 133,
    word: 'appraisal',
    pos: 'noun',
    definition: 'A formal assessment or evaluation of an employee’s job performance.',
    example: 'Annual performance appraisals determine year-end bonuses and promotions.',
    collocation: 'performance appraisal / conduct an appraisal',
    category: 'HR & Personnel'
  },
  {
    id: 134,
    word: 'remuneration',
    pos: 'noun',
    definition: 'Money paid for work or a service; salary and financial compensation.',
    example: 'The company offers competitive remuneration packages including stock options.',
    collocation: 'remuneration package / financial remuneration',
    category: 'HR & Personnel'
  },
  {
    id: 135,
    word: 'severance',
    pos: 'noun',
    definition: 'An amount paid to an employee upon dismissal or layoff.',
    example: 'Employees affected by the facility closure received six months of severance pay.',
    collocation: 'severance package / severance pay',
    category: 'HR & Personnel'
  },
  {
    id: 136,
    word: 'turnover',
    pos: 'noun',
    definition: 'The rate at which employees leave a workforce and are replaced.',
    example: 'Offering flexible telecommuting substantially reduced employee turnover in IT.',
    collocation: 'high turnover / turnover rate',
    category: 'HR & Personnel'
  },
  {
    id: 137,
    word: 'credential',
    pos: 'noun',
    definition: 'A qualification, achievement, personal quality, or aspect of a person\'s background.',
    example: 'Candidates must possess relevant academic and professional credentials in accounting.',
    collocation: 'academic credentials / verify credentials',
    category: 'HR & Personnel'
  },
  {
    id: 138,
    word: 'onboarding',
    pos: 'noun',
    definition: 'The action or process of integrating a new employee into an organization.',
    example: 'The comprehensive onboarding program includes ethics and cybersecurity modules.',
    collocation: 'onboarding process / onboarding program',
    category: 'HR & Personnel'
  },
  {
    id: 139,
    word: 'morale',
    pos: 'noun',
    definition: 'The confidence, enthusiasm, and discipline of a person or group at a particular time.',
    example: 'Management hosted a team-building retreat to boost office morale.',
    collocation: 'boost morale / employee morale',
    category: 'HR & Personnel'
  },
  {
    id: 140,
    word: 'disciplinary',
    pos: 'adjective',
    definition: 'Concerning or enforcing discipline or rules of conduct within an organization.',
    example: 'Violations of the corporate harassment policy will result in disciplinary action.',
    collocation: 'disciplinary action / disciplinary hearing',
    category: 'HR & Personnel'
  },
  {
    id: 141,
    word: 'resignation',
    pos: 'noun',
    definition: 'An act of retiring or giving up a position, usually by written notice.',
    example: 'The vice president tendered his resignation to pursue opportunities in academia.',
    collocation: 'tender one\'s resignation / letter of resignation',
    category: 'HR & Personnel'
  },
  {
    id: 142,
    word: 'pension',
    pos: 'noun',
    definition: 'A regular payment made during a person\'s retirement from an investment fund.',
    example: 'The company contributes 6% of each worker\'s gross salary to a private pension fund.',
    collocation: 'pension plan / retirement pension',
    category: 'HR & Personnel'
  },
  {
    id: 143,
    word: 'vacate',
    pos: 'verb',
    definition: 'To leave a position, office, or post, making it available for someone else.',
    example: 'When the chief operations officer vacates her role, a search committee will form.',
    collocation: 'vacate a position / vacate an office',
    category: 'HR & Personnel'
  },
  {
    id: 144,
    word: 'competence',
    pos: 'noun',
    definition: 'The ability to do something successfully or efficiently; expertise.',
    example: 'The certification validates the engineer\'s technical competence in cloud systems.',
    collocation: 'demonstrate competence / core competence',
    category: 'HR & Personnel'
  },
  {
    id: 145,
    word: 'headhunter',
    pos: 'noun',
    definition: 'A person or agency that identifies and enlists individuals for senior executive jobs.',
    example: 'The enterprise engaged an executive headhunter to find a global chief marketing officer.',
    collocation: 'hire a headhunter / executive headhunter',
    category: 'HR & Personnel'
  },
  {
    id: 146,
    word: 'grievance',
    pos: 'noun',
    definition: 'A formal complaint over something believed to be wrong or unfair at work.',
    example: 'Staff members may file a confidential grievance through the employee ombudsman.',
    collocation: 'file a grievance / air a grievance',
    category: 'HR & Personnel'
  },
  {
    id: 147,
    word: 'recruit',
    pos: 'verb',
    definition: 'To enlist someone in an organization, company, or cause.',
    example: 'Our talent acquisition team visits university campuses every spring to recruit top talent.',
    collocation: 'recruit graduates / actively recruit',
    category: 'HR & Personnel'
  },
  {
    id: 148,
    word: 'incentive',
    pos: 'noun',
    definition: 'A thing that motivates or encourages someone to do something; a reward.',
    example: 'Sales commissions provide a powerful financial incentive for our representatives.',
    collocation: 'performance incentive / financial incentive',
    category: 'HR & Personnel'
  },
  {
    id: 149,
    word: 'succession',
    pos: 'noun',
    definition: 'The process of inheriting a title, office, or property; leadership continuity.',
    example: 'The board approved a detailed succession plan to ensure corporate continuity.',
    collocation: 'succession planning / order of succession',
    category: 'HR & Personnel'
  },
  {
    id: 150,
    word: 'compensation',
    pos: 'noun',
    definition: 'Money awarded to someone as recompense for work, injury, or loss.',
    example: 'The executive committee agreed to restructure total executive compensation.',
    collocation: 'compensation package / workers\' compensation',
    category: 'HR & Personnel'
  },
  {
    id: 151,
    word: 'relocate',
    pos: 'verb',
    definition: 'To move to a new place and establish one’s home or business there.',
    example: 'The corporation offered a generous allowance for engineers willing to relocate to Seattle.',
    collocation: 'relocate to / willing to relocate',
    category: 'HR & Personnel'
  },
  {
    id: 152,
    word: 'fringe',
    pos: 'adjective',
    definition: 'Supplementary or additional to regular wages or salary.',
    example: 'Fringe benefits include dental coverage, gym memberships, and transit subsidies.',
    collocation: 'fringe benefits / fringe perk',
    category: 'HR & Personnel'
  },
  {
    id: 153,
    word: 'benchmark',
    pos: 'noun',
    definition: 'A standard or point of reference against which things may be compared or assessed.',
    example: 'Our human resources department benchmarks starting salaries against industry averages.',
    collocation: 'benchmark against / industry benchmark',
    category: 'HR & Personnel'
  },
  {
    id: 154,
    word: 'mandatory',
    pos: 'adjective',
    definition: 'Required by law or rules; compulsory.',
    example: 'Attendance at the annual workplace cybersecurity seminar is mandatory for all personnel.',
    collocation: 'mandatory training / mandatory compliance',
    category: 'HR & Personnel'
  },
  {
    id: 155,
    word: 'delegate',
    pos: 'verb',
    definition: 'To entrust a task or responsibility to another person, typically a subordinate.',
    example: 'Effective managers learn to delegate routine administrative duties.',
    collocation: 'delegate authority / delegate tasks',
    category: 'HR & Personnel'
  },
  {
    id: 156,
    word: 'absenteeism',
    pos: 'noun',
    definition: 'The practice of regularly staying away from work or school without good reason.',
    example: 'Introducing flexible remote work policies led to a steep reduction in absenteeism.',
    collocation: 'chronic absenteeism / rate of absenteeism',
    category: 'HR & Personnel'
  },
  {
    id: 157,
    word: 'candidate',
    pos: 'noun',
    definition: 'A person who applies for a job or is nominated for election.',
    example: 'The hiring committee will interview four shortlisted candidates this afternoon.',
    collocation: 'prospective candidate / qualified candidate',
    category: 'HR & Personnel'
  },
  {
    id: 158,
    word: 'compliance',
    pos: 'noun',
    definition: 'The state or fact of according with or meeting rules or standards.',
    example: 'The compliance officer inspected factory logs to verify adherence to labor codes.',
    collocation: 'in compliance with / regulatory compliance',
    category: 'HR & Personnel'
  },
  {
    id: 159,
    word: 'diversity',
    pos: 'noun',
    definition: 'The practice of including or involving people from a range of different backgrounds.',
    example: 'The company launched an initiative to champion diversity in executive leadership.',
    collocation: 'workforce diversity / promote diversity',
    category: 'HR & Personnel'
  },
  {
    id: 160,
    word: 'mentor',
    pos: 'noun',
    definition: 'An experienced and trusted adviser.',
    example: 'Each incoming graduate recruit is paired with a senior department mentor.',
    collocation: 'assign a mentor / mentor program',
    category: 'HR & Personnel'
  },
  {
    id: 161,
    word: 'orientation',
    pos: 'noun',
    definition: 'Familiarization with something; introduction course for new employees.',
    example: 'New hires must attend an orientation session on Monday morning at 8:30 A.M.',
    collocation: 'new-employee orientation / orientation packet',
    category: 'HR & Personnel'
  },
  {
    id: 162,
    word: 'payroll',
    pos: 'noun',
    definition: 'A list of a company\'s employees and the amount of money they are to be paid.',
    example: 'The payroll department processes salaries on the fifteenth of each month.',
    collocation: 'on the payroll / payroll department',
    category: 'HR & Personnel'
  },
  {
    id: 163,
    word: 'proficiency',
    pos: 'noun',
    definition: 'A high degree of competence or skill; expertise.',
    example: 'The position requires demonstrated proficiency in both English and Japanese.',
    collocation: 'language proficiency / technical proficiency',
    category: 'HR & Personnel'
  },
  {
    id: 164,
    word: 'reprimand',
    pos: 'noun',
    definition: 'A formal expression of disapproval by someone in authority.',
    example: 'The employee received a written reprimand for violating safety protocols.',
    collocation: 'written reprimand / official reprimand',
    category: 'HR & Personnel'
  },
  {
    id: 165,
    word: 'retention',
    pos: 'noun',
    definition: 'The continued possession, use, or control of something; keeping employees.',
    example: 'Offering competitive salaries and remote work options increased employee retention.',
    collocation: 'employee retention / retention rate',
    category: 'HR & Personnel'
  },
  {
    id: 166,
    word: 'shortlist',
    pos: 'verb',
    definition: 'To put someone or something on a list of selected candidates for a job or prize.',
    example: 'The search committee will shortlist five candidates for final interviews.',
    collocation: 'shortlist a candidate / on the shortlist',
    category: 'HR & Personnel'
  },
  {
    id: 167,
    word: 'stipend',
    pos: 'noun',
    definition: 'A fixed regular sum paid as a salary or allowance to an intern or researcher.',
    example: 'Summer interns receive a monthly living stipend in addition to transit passes.',
    collocation: 'monthly stipend / research stipend',
    category: 'HR & Personnel'
  },
  {
    id: 168,
    word: 'tenure',
    pos: 'noun',
    definition: 'The conditions or period of holding an office or employment.',
    example: 'During his decade-long tenure as CEO, company shares appreciated by 200 percent.',
    collocation: 'tenure of office / long tenure',
    category: 'HR & Personnel'
  },
  {
    id: 169,
    word: 'vacancy',
    pos: 'noun',
    definition: 'An unoccupied job or office available for an applicant.',
    example: 'We currently have three job vacancies in our international marketing department.',
    collocation: 'job vacancy / fill a vacancy',
    category: 'HR & Personnel'
  },
  {
    id: 170,
    word: 'workforce',
    pos: 'noun',
    definition: 'The people engaged in or available for work, either in a country, area, or company.',
    example: 'Automation has allowed the manufacturer to reskill its existing workforce.',
    collocation: 'skilled workforce / workforce development',
    category: 'HR & Personnel'
  },
  {
    id: 171,
    word: 'demote',
    pos: 'verb',
    definition: 'To give someone a lower rank or less senior position, usually as a punishment.',
    example: 'The supervisor was demoted after repeatedly ignoring workplace safety standards.',
    collocation: 'demote to / demoted for misconduct',
    category: 'HR & Personnel'
  },
  {
    id: 172,
    word: 'eligible',
    pos: 'adjective',
    definition: 'Having the right to do or obtain something; satisfying the appropriate conditions.',
    example: 'Full-time staff are eligible for comprehensive medical benefits after 90 days.',
    collocation: 'eligible for / eligible to receive',
    category: 'HR & Personnel'
  },
  {
    id: 173,
    word: 'expertise',
    pos: 'noun',
    definition: 'Expert skill or knowledge in a particular field.',
    example: 'Her legal expertise in international copyright proved crucial for the publishing firm.',
    collocation: 'technical expertise / area of expertise',
    category: 'HR & Personnel'
  },
  {
    id: 174,
    word: 'liaison',
    pos: 'noun',
    definition: 'Communication or cooperation that facilitates a close working relationship.',
    example: 'She was appointed as the official liaison between management and the union.',
    collocation: 'act as a liaison / community liaison',
    category: 'HR & Personnel'
  },
  {
    id: 175,
    word: 'leave',
    pos: 'noun',
    definition: 'Time when one has permission to be absent from work.',
    example: 'Staff members may apply for up to twelve weeks of parental leave.',
    collocation: 'on leave / take sick leave',
    category: 'HR & Personnel'
  },
  {
    id: 176,
    word: 'nominate',
    pos: 'verb',
    definition: 'To propose formally or enter someone as a candidate for election or an honor.',
    example: 'The committee nominated Ms. Patel for the Employee of the Year award.',
    collocation: 'nominate for / nominate a candidate',
    category: 'HR & Personnel'
  },
  {
    id: 177,
    word: 'overtime',
    pos: 'noun',
    definition: 'Time worked in addition to one\'s normal working hours.',
    example: 'Production workers were compensated at time-and-a-half for all weekend overtime.',
    collocation: 'work overtime / overtime pay',
    category: 'HR & Personnel'
  },
  {
    id: 178,
    word: 'personnel',
    pos: 'noun',
    definition: 'People employed in an organization or engaged in an organized undertaking.',
    example: 'Only authorized security personnel are permitted beyond this checkpoint.',
    collocation: 'personnel department / trained personnel',
    category: 'HR & Personnel'
  },
  {
    id: 179,
    word: 'recruit',
    pos: 'noun',
    definition: 'A person newly enlisted in a company or workforce.',
    example: 'The latest batch of university recruits will begin training on Monday.',
    collocation: 'new recruit / recruit intake',
    category: 'HR & Personnel'
  },
  {
    id: 180,
    word: 'resumé',
    pos: 'noun',
    definition: 'A brief account of a person\'s education, qualifications, and previous experience.',
    example: 'Please send an updated copy of your resumé and three references.',
    collocation: 'submit a resumé / update one\'s resumé',
    category: 'HR & Personnel'
  },
  {
    id: 181,
    word: 'roster',
    pos: 'noun',
    definition: 'A list or plan showing turns of duty or leave for individuals or groups.',
    example: 'Check the duty roster posted in the staff lounge to see your weekend shifts.',
    collocation: 'duty roster / on the roster',
    category: 'HR & Personnel'
  },
  {
    id: 182,
    word: 'seniority',
    pos: 'noun',
    definition: 'The fact or state of being older or higher in position or status than someone else.',
    example: 'Shift assignments and choice of vacation weeks are determined based on seniority.',
    collocation: 'based on seniority / seniority privileges',
    category: 'HR & Personnel'
  },
  {
    id: 183,
    word: 'shift',
    pos: 'noun',
    definition: 'One of the working periods into which the day is divided in a factory or hospital.',
    example: 'Technicians on the night shift are entitled to an additional hourly differential.',
    collocation: 'night shift / work in shifts',
    category: 'HR & Personnel'
  },
  {
    id: 184,
    word: 'solicit',
    pos: 'verb',
    definition: 'To ask for or try to obtain something from someone.',
    example: 'The human resources division solicited feedback on the proposed dental plan.',
    collocation: 'solicit feedback / solicit applications',
    category: 'HR & Personnel'
  },
  {
    id: 185,
    word: 'subordinate',
    pos: 'noun',
    definition: 'A person under the authority or control of another within an organization.',
    example: 'An effective manager provides regular constructive coaching to subordinates.',
    collocation: 'direct subordinate / manage subordinates',
    category: 'HR & Personnel'
  },
  {
    id: 186,
    word: 'terminate',
    pos: 'verb',
    definition: 'To bring an end to employment or an agreement.',
    example: 'The firm chose to terminate the contractor\'s agreement for repeated non-compliance.',
    collocation: 'terminate employment / terminate a contract',
    category: 'HR & Personnel'
  },
  {
    id: 187,
    word: 'testimonial',
    pos: 'noun',
    definition: 'A formal statement testifying to someone\'s character and qualifications.',
    example: 'The candidate submitted glowing written testimonials from two previous employers.',
    collocation: 'written testimonial / client testimonial',
    category: 'HR & Personnel'
  },
  {
    id: 188,
    word: 'transfer',
    pos: 'verb',
    definition: 'To move from one department, office, or location to another.',
    example: 'Ms. Chen will transfer to the Singapore branch office starting next month.',
    collocation: 'transfer to / request a transfer',
    category: 'HR & Personnel'
  },
  {
    id: 189,
    word: 'upgrade',
    pos: 'verb',
    definition: 'To raise to a higher grade or standard; promote.',
    example: 'Workers were offered subsidies to upgrade their cloud computing certifications.',
    collocation: 'upgrade skills / upgrade qualifications',
    category: 'HR & Personnel'
  },
  {
    id: 190,
    word: 'vetting',
    pos: 'noun',
    definition: 'The process of thoroughly investigating an individual before employment.',
    example: 'All security personnel must undergo comprehensive background vetting.',
    collocation: 'vetting process / background vetting',
    category: 'HR & Personnel'
  },
  {
    id: 191,
    word: 'wage',
    pos: 'noun',
    definition: 'A fixed regular payment earned for work or services, typically on a daily or hourly basis.',
    example: 'The government recently announced a raise in the federal minimum wage.',
    collocation: 'hourly wage / minimum wage',
    category: 'HR & Personnel'
  },
  {
    id: 192,
    word: 'workstation',
    pos: 'noun',
    definition: 'An area where an employee works, typically including a desk and computer terminal.',
    example: 'Facilities management will sanitize each employee workstation over the weekend.',
    collocation: 'ergonomic workstation / assigned workstation',
    category: 'HR & Personnel'
  },
  {
    id: 193,
    word: 'whistleblower',
    pos: 'noun',
    definition: 'A person who informs on a person or organization engaged in illicit activity.',
    example: 'Corporate ethics rules guarantee legal protection for any verified whistleblower.',
    collocation: 'whistleblower policy / whistleblower protection',
    category: 'HR & Personnel'
  },
  {
    id: 194,
    word: 'year-end',
    pos: 'adjective',
    definition: 'Occurring at the end of a financial or calendar year.',
    example: 'Top performers in sales were awarded generous year-end performance bonuses.',
    collocation: 'year-end bonus / year-end review',
    category: 'HR & Personnel'
  },
  {
    id: 195,
    word: 'zeal',
    pos: 'noun',
    definition: 'Great energy or enthusiasm in pursuit of a cause or an objective.',
    example: 'The young associate tackled the customer onboarding initiative with great zeal.',
    collocation: 'show zeal / missionary zeal',
    category: 'HR & Personnel'
  },

  // --- 4. Travel & Commuting (196 - 255) ---
  {
    id: 196,
    word: 'itinerary',
    pos: 'noun',
    definition: 'A planned route or detailed journey timetable.',
    example: 'The travel coordinator emailed the executive\'s five-day business flight itinerary.',
    collocation: 'travel itinerary / flight itinerary',
    category: 'Travel & Commuting'
  },
  {
    id: 197,
    word: 'accommodate',
    pos: 'verb',
    definition: 'To provide lodging or sufficient space for; fit in with the wishes or needs of.',
    example: 'The conference hotel can comfortably accommodate up to 600 overnight delegates.',
    collocation: 'accommodate guests / accommodate a request',
    category: 'Travel & Commuting'
  },
  {
    id: 198,
    word: 'amenity',
    pos: 'noun',
    definition: 'A desirable or useful feature or facility of a building or lodging place.',
    example: 'Hotel amenities include complimentary high-speed Wi-Fi and access to the fitness center.',
    collocation: 'hotel amenities / modern amenities',
    category: 'Travel & Commuting'
  },
  {
    id: 199,
    word: 'commute',
    pos: 'verb',
    definition: 'To travel some distance between home and one\'s place of work on a regular basis.',
    example: 'Many senior analysts commute into Manhattan by express passenger train.',
    collocation: 'daily commute / commute by rail',
    category: 'Travel & Commuting'
  },
  {
    id: 200,
    word: 'congestion',
    pos: 'noun',
    definition: 'The state of being congested with traffic, people, or delays.',
    example: 'To avoid morning highway congestion, many commuters opt for the subway system.',
    collocation: 'traffic congestion / avoid congestion',
    category: 'Travel & Commuting'
  },
  {
    id: 201,
    word: 'boarding',
    pos: 'noun',
    definition: 'The action of getting on or into a ship, aircraft, train, or other vehicle.',
    example: 'Passengers requiring special assistance are invited to begin boarding first.',
    collocation: 'boarding pass / boarding gate',
    category: 'Travel & Commuting'
  },
  {
    id: 202,
    word: 'layover',
    pos: 'noun',
    definition: 'A period of rest or waiting before a further stage in a journey.',
    example: 'We had a four-hour layover in Frankfurt before connecting to our flight to Milan.',
    collocation: 'extended layover / layover flight',
    category: 'Travel & Commuting'
  },
  {
    id: 203,
    word: 'transit',
    pos: 'noun',
    definition: 'The carrying of people, goods, or materials from one place to another.',
    example: 'Public transit passes are subsidized by 50% for all full-time corporate staff.',
    collocation: 'public transit / in transit',
    category: 'Travel & Commuting'
  },
  {
    id: 204,
    word: 'shuttle',
    pos: 'noun',
    definition: 'A form of transport that travels regularly between two places.',
    example: 'A complimentary airport shuttle runs every fifteen minutes from terminal 2.',
    collocation: 'airport shuttle / shuttle bus',
    category: 'Travel & Commuting'
  },
  {
    id: 205,
    word: 'per diem',
    pos: 'noun',
    definition: 'An allowance or payment made for each day of travel or official duty.',
    example: 'Sales executives traveling abroad receive a seventy-dollar per diem for meals.',
    collocation: 'per diem rate / per diem allowance',
    category: 'Travel & Commuting'
  },
  {
    id: 206,
    word: 'concierge',
    pos: 'noun',
    definition: 'A hotel staff member whose job is to assist guests by booking tours and making reservations.',
    example: 'The hotel concierge arranged taxi transport and dinner reservations for our clients.',
    collocation: 'hotel concierge / ask the concierge',
    category: 'Travel & Commuting'
  },
  {
    id: 207,
    word: 'reservation',
    pos: 'noun',
    definition: 'An arrangement to secure a seat, room, or ticket in advance.',
    example: 'Please confirm your hotel reservation number prior to departure.',
    collocation: 'make a reservation / confirm a reservation',
    category: 'Travel & Commuting'
  },
  {
    id: 208,
    word: 'cancellation',
    pos: 'noun',
    definition: 'The action of cancelling something; an annulment of a booking.',
    example: 'The hotel provides full refunds for cancellations made at least 24 hours in advance.',
    collocation: 'cancellation policy / cancellation fee',
    category: 'Travel & Commuting'
  },
  {
    id: 209,
    word: 'departure',
    pos: 'noun',
    definition: 'The action of leaving, especially to start a journey.',
    example: 'Flight departures were temporarily delayed due to heavy fog on the runway.',
    collocation: 'departure gate / departure time',
    category: 'Travel & Commuting'
  },
  {
    id: 210,
    word: 'destination',
    pos: 'noun',
    definition: 'The place to which someone or something is going or being sent.',
    example: 'Tokyo is the preferred regional destination for our annual tech summit.',
    collocation: 'final destination / travel destination',
    category: 'Travel & Commuting'
  },
  {
    id: 211,
    word: 'customs',
    pos: 'noun',
    definition: 'The place at a port, airport, or frontier where travelers\' bags are examined for duty.',
    example: 'International travelers must declare all commercial merchandise at customs.',
    collocation: 'clear customs / customs declaration',
    category: 'Travel & Commuting'
  },
  {
    id: 212,
    word: 'reimburse',
    pos: 'verb',
    definition: 'To repay an employee for out-of-pocket business expenses incurred during travel.',
    example: 'Retain all taxi and meal receipts so accounting can reimburse you promptly.',
    collocation: 'reimburse travel expenses / expense reimbursement',
    category: 'Travel & Commuting'
  },
  {
    id: 213,
    word: 'detour',
    pos: 'noun',
    definition: 'A long or roundabout route that is taken to avoid something or visit somewhere.',
    example: 'Highway construction required motorists to take a ten-mile detour.',
    collocation: 'take a detour / traffic detour',
    category: 'Travel & Commuting'
  },
  {
    id: 214,
    word: 'fare',
    pos: 'noun',
    definition: 'The money a passenger on public transportation has to pay.',
    example: 'Subway fares can be paid via contactless credit cards or transit passes.',
    collocation: 'bus fare / train fare',
    category: 'Travel & Commuting'
  },
  {
    id: 215,
    word: 'hospitality',
    pos: 'noun',
    definition: 'The friendly and generous reception and entertainment of guests or visitors.',
    example: 'The host company extended warm hospitality to the visiting international delegation.',
    collocation: 'hospitality industry / warm hospitality',
    category: 'Travel & Commuting'
  },
  {
    id: 216,
    word: 'luggage',
    pos: 'noun',
    definition: 'Suitcases or other bags in which to pack personal belongings for traveling.',
    example: 'Airlines allow passengers one carry-on bag and one piece of checked luggage.',
    collocation: 'checked luggage / luggage carousel',
    category: 'Travel & Commuting'
  },
  {
    id: 217,
    word: 'passport',
    pos: 'noun',
    definition: 'An official document issued by a government certifying identity and citizenship.',
    example: 'Ensure your passport is valid for at least six months beyond your travel dates.',
    collocation: 'valid passport / passport control',
    category: 'Travel & Commuting'
  },
  {
    id: 218,
    word: 'terminal',
    pos: 'noun',
    definition: 'A departure and arrival building for air passengers or freight.',
    example: 'International flights depart from terminal 4 of the metropolitan airport.',
    collocation: 'airport terminal / ferry terminal',
    category: 'Travel & Commuting'
  },
  {
    id: 219,
    word: 'upgrade',
    pos: 'verb',
    definition: 'To raise to a higher standard of travel or accommodation.',
    example: 'Frequent fliers with platinum status were automatically upgraded to business class.',
    collocation: 'upgrade to business class / room upgrade',
    category: 'Travel & Commuting'
  },
  {
    id: 220,
    word: 'validity',
    pos: 'noun',
    definition: 'The state of being legally or officially acceptable or binding.',
    example: 'The validity of the round-trip ticket expires exactly thirty days after purchase.',
    collocation: 'period of validity / ticket validity',
    category: 'Travel & Commuting'
  },
  {
    id: 221,
    word: 'carpool',
    pos: 'verb',
    definition: 'To make an arrangement to travel together in a car, typically with coworkers.',
    example: 'Several employees carpool together to reduce parking costs and vehicle emissions.',
    collocation: 'carpool to work / carpool lane',
    category: 'Travel & Commuting'
  },
  {
    id: 222,
    word: 'charter',
    pos: 'verb',
    definition: 'To hire a plane, boat, or bus for special or private use.',
    example: 'The executive committee chartered a private aircraft to visit four regional sites.',
    collocation: 'charter a flight / charter bus',
    category: 'Travel & Commuting'
  },
  {
    id: 223,
    word: 'delay',
    pos: 'noun',
    definition: 'A period of time by which something is late or postponed.',
    example: 'Due to severe thunderstorms, incoming flights suffered an average two-hour delay.',
    collocation: 'flight delay / delay in arrival',
    category: 'Travel & Commuting'
  },
  {
    id: 224,
    word: 'embark',
    pos: 'verb',
    definition: 'To go on board a ship, aircraft, or other vehicle.',
    example: 'Cruise passengers will embark from the pier starting at 2:00 P.M.',
    collocation: 'embark on a journey / embark passengers',
    category: 'Travel & Commuting'
  },
  {
    id: 225,
    word: 'disembark',
    pos: 'verb',
    definition: 'To leave a ship, aircraft, or other vehicle.',
    example: 'Passengers are requested to remain seated until all crew members disembark.',
    collocation: 'disembark from / disembark passengers',
    category: 'Travel & Commuting'
  },
  {
    id: 226,
    word: 'express',
    pos: 'adjective',
    definition: 'Operating at high speed or making few stops along a route.',
    example: 'The express train from the airport reaches the city center in under 20 minutes.',
    collocation: 'express train / express service',
    category: 'Travel & Commuting'
  },
  {
    id: 227,
    word: 'hospitality',
    pos: 'noun',
    definition: 'The business of providing food, drink, and accommodation to travelers.',
    example: 'Many graduates in hospitality management find employment in luxury hotel chains.',
    collocation: 'hospitality sector / corporate hospitality',
    category: 'Travel & Commuting'
  },
  {
    id: 228,
    word: 'inbound',
    pos: 'adjective',
    definition: 'Traveling towards a particular station, airport, or location.',
    example: 'All inbound commuter trains were delayed due to power signal maintenance.',
    collocation: 'inbound flight / inbound traffic',
    category: 'Travel & Commuting'
  },
  {
    id: 229,
    word: 'outbound',
    pos: 'adjective',
    definition: 'Traveling away from a particular place, towards a destination.',
    example: 'Outbound passengers must pass through security screening before accessing the concourse.',
    collocation: 'outbound flight / outbound lane',
    category: 'Travel & Commuting'
  },
  {
    id: 230,
    word: 'mileage',
    pos: 'noun',
    definition: 'Travel allowance based on the number of miles traveled in one\'s own vehicle.',
    example: 'The company reimburses personal automobile mileage at sixty cents per mile.',
    collocation: 'mileage reimbursement / frequent-flyer mileage',
    category: 'Travel & Commuting'
  },
  {
    id: 231,
    word: 'occupancy',
    pos: 'noun',
    definition: 'The proportion of accommodation used or occupied in a hotel or property.',
    example: 'Hotel occupancy reached ninety percent during the international medical conference.',
    collocation: 'occupancy rate / full occupancy',
    category: 'Travel & Commuting'
  },
  {
    id: 232,
    word: 'pedestrian',
    pos: 'noun',
    definition: 'A person walking along a road or in a developed area.',
    example: 'The company built a covered pedestrian walkway connecting the parking lot to reception.',
    collocation: 'pedestrian zone / pedestrian crossing',
    category: 'Travel & Commuting'
  },
  {
    id: 233,
    word: 'punctual',
    pos: 'adjective',
    definition: 'Happening or doing something at the agreed or proper time; on time.',
    example: 'The bullet train service in Japan is renowned for being exceptionally punctual.',
    collocation: 'punctual service / remain punctual',
    category: 'Travel & Commuting'
  },
  {
    id: 234,
    word: 'receipt',
    pos: 'noun',
    definition: 'A written statement that money, goods, or information has been received.',
    example: 'Always request an itemized receipt when purchasing business meals.',
    collocation: 'itemized receipt / keep your receipts',
    category: 'Travel & Commuting'
  },
  {
    id: 235,
    word: 'route',
    pos: 'noun',
    definition: 'A way or course taken in getting from a starting point to a destination.',
    example: 'Delivery drivers take alternate routes to circumvent morning highway gridlock.',
    collocation: 'alternate route / direct route',
    category: 'Travel & Commuting'
  },
  {
    id: 236,
    word: 'standby',
    pos: 'noun',
    definition: 'Readiness for duty or immediate deployment; flight ticket awaiting open seats.',
    example: 'Travelers flying on standby must wait at the departure gate until final boarding calls.',
    collocation: 'fly standby / on standby',
    category: 'Travel & Commuting'
  },
  {
    id: 237,
    word: 'toll',
    pos: 'noun',
    definition: 'A charge payable for permission to use a particular bridge or road.',
    example: 'Express toll lanes require an electronic transponder mounted on the windshield.',
    collocation: 'toll booth / toll road',
    category: 'Travel & Commuting'
  },
  {
    id: 238,
    word: 'transfer',
    pos: 'noun',
    definition: 'An act of moving from one vehicle, vessel, or flight to another.',
    example: 'The bus ticket allows a free transfer to the subway within ninety minutes.',
    collocation: 'free transfer / flight transfer',
    category: 'Travel & Commuting'
  },
  {
    id: 239,
    word: 'transit',
    pos: 'noun',
    definition: 'Passage through or across; conveying passengers or cargo.',
    example: 'The package was damaged while in transit between warehouses.',
    collocation: 'in transit / transit authority',
    category: 'Travel & Commuting'
  },
  {
    id: 240,
    word: 'valet',
    pos: 'noun',
    definition: 'A person employed to park cars for guests at a hotel or restaurant.',
    example: 'The hotel provides complimentary valet parking for all attending banquet guests.',
    collocation: 'valet parking / valet service',
    category: 'Travel & Commuting'
  },
  {
    id: 241,
    word: 'via',
    pos: 'preposition',
    definition: 'Traveling through (a place) en route to a destination.',
    example: 'The express flight to Frankfurt travels via Reykjavik for refueling.',
    collocation: 'fly via / travel via',
    category: 'Travel & Commuting'
  },
  {
    id: 242,
    word: 'voucher',
    pos: 'noun',
    definition: 'A small printed piece of paper that entitles the holder to a discount or good.',
    example: 'The airline issued dinner vouchers to passengers whose flight was cancelled.',
    collocation: 'meal voucher / travel voucher',
    category: 'Travel & Commuting'
  },
  {
    id: 243,
    word: 'waitlist',
    pos: 'noun',
    definition: 'A list of people waiting for something that may become available.',
    example: 'The hotel was fully booked, but our name was added to the priority waitlist.',
    collocation: 'on the waitlist / join a waitlist',
    category: 'Travel & Commuting'
  },
  {
    id: 244,
    word: 'boarding',
    pos: 'adjective',
    definition: 'Relating to entering an aircraft or vessel.',
    example: 'Please have your government photo ID ready at the boarding door.',
    collocation: 'boarding call / boarding zone',
    category: 'Travel & Commuting'
  },
  {
    id: 245,
    word: 'carry-on',
    pos: 'noun',
    definition: 'A piece of luggage suitable for taking aboard an aircraft by a passenger.',
    example: 'Ensure your carry-on fits within the overhead compartment dimensions.',
    collocation: 'carry-on bag / carry-on luggage',
    category: 'Travel & Commuting'
  },
  {
    id: 246,
    word: 'check-in',
    pos: 'noun',
    definition: 'The act of reporting one\'s presence and obtaining boarding passes or room keys.',
    example: 'Online check-in opens twenty-four hours prior to departure.',
    collocation: 'hotel check-in / check-in counter',
    category: 'Travel & Commuting'
  },
  {
    id: 247,
    word: 'checkout',
    pos: 'noun',
    definition: 'The act of vacating and paying for one\'s hotel room.',
    example: 'Standard hotel checkout time is 11:00 A.M., but late checkout can be requested.',
    collocation: 'late checkout / checkout time',
    category: 'Travel & Commuting'
  },
  {
    id: 248,
    word: 'concourse',
    pos: 'noun',
    definition: 'A large open area inside or in front of a public building like an airport terminal.',
    example: 'Duty-free shops and restaurants line the newly renovated airport concourse.',
    collocation: 'airport concourse / main concourse',
    category: 'Travel & Commuting'
  },
  {
    id: 249,
    word: 'courtesy',
    pos: 'adjective',
    definition: 'Provided free of charge for the convenience of clients or passengers.',
    example: 'The resort provides a courtesy van to transport guests to the beach.',
    collocation: 'courtesy shuttle / courtesy phone',
    category: 'Travel & Commuting'
  },
  {
    id: 250,
    word: 'deck',
    pos: 'noun',
    definition: 'A floor or level of a ship, bus, or parking structure.',
    example: 'Visitor parking is located on the second deck of the parking structure.',
    collocation: 'parking deck / observation deck',
    category: 'Travel & Commuting'
  },
  {
    id: 251,
    word: 'expressway',
    pos: 'noun',
    definition: 'A highway planned for high-speed traffic, usually with few intersections.',
    example: 'The new expressway bypasses downtown traffic and links directly to the industrial park.',
    collocation: 'toll expressway / take the expressway',
    category: 'Travel & Commuting'
  },
  {
    id: 252,
    word: 'fleet',
    pos: 'noun',
    definition: 'A number of vehicles or vessels operating together under the same ownership.',
    example: 'The courier company converted its urban delivery fleet to electric vehicles.',
    collocation: 'delivery fleet / vehicle fleet',
    category: 'Travel & Commuting'
  },
  {
    id: 253,
    word: 'junction',
    pos: 'noun',
    definition: 'A point where two or more roads, railway lines, or rivers meet.',
    example: 'Expect heavy delays at the highway junction due to resurfacing work.',
    collocation: 'highway junction / railway junction',
    category: 'Travel & Commuting'
  },
  {
    id: 254,
    word: 'oversold',
    pos: 'adjective',
    definition: 'Having sold more tickets or reservations than there are places available.',
    example: 'Because the flight was oversold, airline staff asked for voluntary rebooking.',
    collocation: 'oversold flight / oversold hotel',
    category: 'Travel & Commuting'
  },
  {
    id: 255,
    word: 'runway',
    pos: 'noun',
    definition: 'A strip of hard ground along which aircraft take off and land.',
    example: 'The airport opened a second runway to accommodate increased international flights.',
    collocation: 'airport runway / runway lights',
    category: 'Travel & Commuting'
  },

  // --- 5. Office Operations & Tech (256 - 320) ---
  {
    id: 256,
    word: 'troubleshoot',
    pos: 'verb',
    definition: 'To identify and solve serious problems or errors in software, machinery, or systems.',
    example: 'Our IT specialist was dispatched to troubleshoot the network outage.',
    collocation: 'troubleshoot an issue / troubleshoot errors',
    category: 'Office Operations & Tech'
  },
  {
    id: 257,
    word: 'malfunction',
    pos: 'noun',
    definition: 'A failure to function normally or properly.',
    example: 'A hardware malfunction in the server room disrupted online email services.',
    collocation: 'equipment malfunction / technical malfunction',
    category: 'Office Operations & Tech'
  },
  {
    id: 258,
    word: 'maintenance',
    pos: 'noun',
    definition: 'The process of preserving or keeping something in good condition.',
    example: 'Routine maintenance of heating and cooling systems takes place every autumn.',
    collocation: 'routine maintenance / schedule maintenance',
    category: 'Office Operations & Tech'
  },
  {
    id: 259,
    word: 'procurement',
    pos: 'noun',
    definition: 'The act of obtaining or buying goods and services for business operations.',
    example: 'The procurement team negotiated bulk discounts on high-end office laptops.',
    collocation: 'procurement process / procurement department',
    category: 'Office Operations & Tech'
  },
  {
    id: 260,
    word: 'inventory',
    pos: 'noun',
    definition: 'A complete list of items such as property, goods in stock, or contents of a building.',
    example: 'Warehouse associates conduct a monthly inventory count to reconcile digital logs.',
    collocation: 'take inventory / inventory management',
    category: 'Office Operations & Tech'
  },
  {
    id: 261,
    word: 'requisition',
    pos: 'noun',
    definition: 'An official order laying claim to the use of property or materials.',
    example: 'Submit an electronic requisition form for any office furniture over two hundred dollars.',
    collocation: 'purchase requisition / submit a requisition',
    category: 'Office Operations & Tech'
  },
  {
    id: 262,
    word: 'compatible',
    pos: 'adjective',
    definition: 'Able to exist or occur together without conflict; capable of working together.',
    example: 'Ensure the new design software is compatible with existing graphic tablets.',
    collocation: 'compatible with / fully compatible',
    category: 'Office Operations & Tech'
  },
  {
    id: 263,
    word: 'outdated',
    pos: 'adjective',
    definition: 'Out of date; obsolete; no longer current or usable.',
    example: 'The firm replaced its outdated phone system with modern cloud VoIP software.',
    collocation: 'outdated technology / outdated system',
    category: 'Office Operations & Tech'
  },
  {
    id: 264,
    word: 'streamline',
    pos: 'verb',
    definition: 'To make an organization or system more efficient and effective by simplifying it.',
    example: 'We integrated accounting and inventory tools to streamline invoice processing.',
    collocation: 'streamline operations / streamline the process',
    category: 'Office Operations & Tech'
  },
  {
    id: 265,
    word: 'configuration',
    pos: 'noun',
    definition: 'An arrangement of elements in a particular form, figure, or combination.',
    example: 'The IT technician adjusted the router configuration to boost wireless bandwidth.',
    collocation: 'system configuration / network configuration',
    category: 'Office Operations & Tech'
  },
  {
    id: 266,
    word: 'backup',
    pos: 'noun',
    definition: 'A copy of a file or other item of data made in case the original is lost or damaged.',
    example: 'Our cloud servers perform an automated daily backup of the client database.',
    collocation: 'data backup / backup system',
    category: 'Office Operations & Tech'
  },
  {
    id: 267,
    word: 'obsolete',
    pos: 'adjective',
    definition: 'No longer produced or used; out of date.',
    example: 'Floppy disks and cathode monitors are now completely obsolete in modern offices.',
    collocation: 'render obsolete / obsolete equipment',
    category: 'Office Operations & Tech'
  },
  {
    id: 268,
    word: 'downtime',
    pos: 'noun',
    definition: 'Time during which a machine, especially a computer, is out of action or unavailable.',
    example: 'The server migration was scheduled for midnight to minimize business downtime.',
    collocation: 'minimize downtime / unscheduled downtime',
    category: 'Office Operations & Tech'
  },
  {
    id: 269,
    word: 'deploy',
    pos: 'verb',
    definition: 'To bring into effective action; roll out a software update or system.',
    example: 'The engineering division will deploy the security patch over the weekend.',
    collocation: 'deploy software / deploy resources',
    category: 'Office Operations & Tech'
  },
  {
    id: 270,
    word: 'authenticate',
    pos: 'verb',
    definition: 'To prove or verify the identity of a user or system.',
    example: 'Employees must authenticate their identity using two-factor authorization.',
    collocation: 'authenticate a user / authenticate credentials',
    category: 'Office Operations & Tech'
  },
  {
    id: 271,
    word: 'credential',
    pos: 'noun',
    definition: 'User login information, such as usernames and passwords, used to access systems.',
    example: 'Never share your administrative login credentials with outside contractors.',
    collocation: 'login credentials / security credentials',
    category: 'Office Operations & Tech'
  },
  {
    id: 272,
    word: 'bandwidth',
    pos: 'noun',
    definition: 'The capacity for data transfer of an electronic communications system.',
    example: 'Video conferencing requires high network bandwidth to prevent audio lagging.',
    collocation: 'network bandwidth / consume bandwidth',
    category: 'Office Operations & Tech'
  },
  {
    id: 273,
    word: 'encryption',
    pos: 'noun',
    definition: 'The process of converting information or data into a code to prevent unauthorized access.',
    example: 'All customer credit card transactions are protected with 256-bit SSL encryption.',
    collocation: 'data encryption / strong encryption',
    category: 'Office Operations & Tech'
  },
  {
    id: 274,
    word: 'ergonomic',
    pos: 'adjective',
    definition: 'Designed for efficiency and comfort in the working environment.',
    example: 'The company purchased ergonomic keyboards and adjustable desks for all programmers.',
    collocation: 'ergonomic chair / ergonomic design',
    category: 'Office Operations & Tech'
  },
  {
    id: 275,
    word: 'intranet',
    pos: 'noun',
    definition: 'A local or restricted communications network created using World Wide Web software.',
    example: 'Company policies and internal job postings are published on the employee intranet.',
    collocation: 'company intranet / access the intranet',
    category: 'Office Operations & Tech'
  },
  {
    id: 276,
    word: 'telecommuting',
    pos: 'noun',
    definition: 'Working from home using the internet, telephone, and email.',
    example: 'Telecommuting has increased overall productivity and reduced office overhead.',
    collocation: 'telecommuting policy / allow telecommuting',
    category: 'Office Operations & Tech'
  },
  {
    id: 277,
    word: 'interface',
    pos: 'noun',
    definition: 'A device or program enabling a user to communicate with a computer.',
    example: 'The redesigned customer portal offers an intuitive and responsive user interface.',
    collocation: 'user interface / intuitive interface',
    category: 'Office Operations & Tech'
  },
  {
    id: 278,
    word: 'automation',
    pos: 'noun',
    definition: 'The use of largely automatic equipment in a system of manufacturing or operations.',
    example: 'Office automation tools have accelerated expense report processing.',
    collocation: 'office automation / workflow automation',
    category: 'Office Operations & Tech'
  },
  {
    id: 279,
    word: 'synchronize',
    pos: 'verb',
    definition: 'To cause to occur or operate at the same time or rate; keep data identical.',
    example: 'The calendar application will automatically synchronize across all mobile devices.',
    collocation: 'synchronize data / synchronize schedules',
    category: 'Office Operations & Tech'
  },
  {
    id: 280,
    word: 'deprecate',
    pos: 'verb',
    definition: 'To declare a software feature obsolescent and advise against its use.',
    example: 'The legacy software API will be deprecated by the end of the second quarter.',
    collocation: 'deprecated feature / plan to deprecate',
    category: 'Office Operations & Tech'
  },
  {
    id: 281,
    word: 'firewall',
    pos: 'noun',
    definition: 'A part of a computer system or network designed to block unauthorized access.',
    example: 'The corporate firewall prevents suspicious external IP addresses from reaching internal servers.',
    collocation: 'network firewall / configure a firewall',
    category: 'Office Operations & Tech'
  },
  {
    id: 282,
    word: 'glitch',
    pos: 'noun',
    definition: 'A momentary or small problem, malfunction, or setback.',
    example: 'A minor software glitch caused invoices to print without company logos.',
    collocation: 'technical glitch / minor glitch',
    category: 'Office Operations & Tech'
  },
  {
    id: 283,
    word: 'hardware',
    pos: 'noun',
    definition: 'The physical components that make up a computer system.',
    example: 'The company allocates $1,500 every three years for personal employee hardware upgrades.',
    collocation: 'computer hardware / upgrade hardware',
    category: 'Office Operations & Tech'
  },
  {
    id: 284,
    word: 'infrastructure',
    pos: 'noun',
    definition: 'The basic physical and organizational structures and facilities needed for operation.',
    example: 'Upgrading our digital server infrastructure improved website loading speeds by 40%.',
    collocation: 'IT infrastructure / digital infrastructure',
    category: 'Office Operations & Tech'
  },
  {
    id: 285,
    word: 'installation',
    pos: 'noun',
    definition: 'The action or process of installing equipment or software.',
    example: 'Software installation instructions are available on the internal tech support portal.',
    collocation: 'software installation / complete the installation',
    category: 'Office Operations & Tech'
  },
  {
    id: 286,
    word: 'manual',
    pos: 'noun',
    definition: 'A book or pamphlet giving instructions on how to operate equipment.',
    example: 'Please consult the equipment manual before attempting to clear paper jams.',
    collocation: 'instruction manual / user manual',
    category: 'Office Operations & Tech'
  },
  {
    id: 287,
    word: 'network',
    pos: 'noun',
    definition: 'A group of two or more computer systems linked together.',
    example: 'All computers in the regional branch connect to a centralized secure corporate network.',
    collocation: 'secure network / local area network',
    category: 'Office Operations & Tech'
  },
  {
    id: 288,
    word: 'operating',
    pos: 'adjective',
    definition: 'In current use or functionality.',
    example: 'The new computer terminal is running the latest enterprise operating system.',
    collocation: 'operating system / operating instructions',
    category: 'Office Operations & Tech'
  },
  {
    id: 289,
    word: 'patch',
    pos: 'noun',
    definition: 'A piece of software designed to update a computer program or fix bugs.',
    example: 'The cybersecurity team deployed an emergency security patch to remediate vulnerability.',
    collocation: 'security patch / install a patch',
    category: 'Office Operations & Tech'
  },
  {
    id: 290,
    word: 'phishing',
    pos: 'noun',
    definition: 'The fraudulent practice of sending emails masquerading as reputable companies.',
    example: 'Employees are warned never to click links in suspicious phishing emails.',
    collocation: 'phishing scam / phishing attack',
    category: 'Office Operations & Tech'
  },
  {
    id: 291,
    word: 'protocol',
    pos: 'noun',
    definition: 'A set of rules governing the exchange or transmission of data between devices.',
    example: 'Data transfer follows the standard HTTPS secure protocol.',
    collocation: 'communications protocol / security protocol',
    category: 'Office Operations & Tech'
  },
  {
    id: 292,
    word: 'reboot',
    pos: 'verb',
    definition: 'To restart a computer or operating system.',
    example: 'After installing the driver update, you will be prompted to reboot your computer.',
    collocation: 'reboot the system / reboot the server',
    category: 'Office Operations & Tech'
  },
  {
    id: 293,
    word: 'repository',
    pos: 'noun',
    definition: 'A central location in which data or digital assets are stored and managed.',
    example: 'All design blueprints are archived in our cloud document repository.',
    collocation: 'central repository / data repository',
    category: 'Office Operations & Tech'
  },
  {
    id: 294,
    word: 'scalable',
    pos: 'adjective',
    definition: 'Able to be changed in size or scale; adaptable to growth.',
    example: 'The cloud database architecture is fully scalable as client volume expands.',
    collocation: 'scalable architecture / scalable solution',
    category: 'Office Operations & Tech'
  },
  {
    id: 295,
    word: 'server',
    pos: 'noun',
    definition: 'A computer or computer program which manages access to a centralized resource.',
    example: 'The primary web server responded without delay during the annual flash sale.',
    collocation: 'web server / server maintenance',
    category: 'Office Operations & Tech'
  },
  {
    id: 296,
    word: 'stationery',
    pos: 'noun',
    definition: 'Writing materials and other office supplies such as envelopes and printer paper.',
    example: 'Requisitions for desk stationery should be submitted to the office manager.',
    collocation: 'office stationery / stationery cupboard',
    category: 'Office Operations & Tech'
  },
  {
    id: 297,
    word: 'storage',
    pos: 'noun',
    definition: 'The retention of retrievable data on a computer or other electronic system.',
    example: 'Staff members receive fifty gigabytes of complimentary cloud document storage.',
    collocation: 'cloud storage / storage capacity',
    category: 'Office Operations & Tech'
  },
  {
    id: 298,
    word: 'support',
    pos: 'noun',
    definition: 'Assistance provided to users of technology products like computers and software.',
    example: 'Contact the technical support helpdesk if you experience difficulty logging in.',
    collocation: 'technical support / customer support',
    category: 'Office Operations & Tech'
  },
  {
    id: 299,
    word: 'template',
    pos: 'noun',
    definition: 'A preset format for a document or file, used so the format doesn\'t have to be recreated.',
    example: 'Please use the standardized corporate presentation template for your client pitch.',
    collocation: 'document template / slide template',
    category: 'Office Operations & Tech'
  },
  {
    id: 300,
    word: 'toner',
    pos: 'noun',
    definition: 'A powder used in laser printers and photocopiers to form the printed text and images.',
    example: 'The administrative assistant replaced the black toner cartridge in the copier.',
    collocation: 'toner cartridge / replace toner',
    category: 'Office Operations & Tech'
  },
  {
    id: 301,
    word: 'upgrade',
    pos: 'noun',
    definition: 'An act of improving the quality, value, or performance of something.',
    example: 'The scheduled software upgrade will take place on Sunday between 1:00 AM and 3:00 AM.',
    collocation: 'system upgrade / major upgrade',
    category: 'Office Operations & Tech'
  },
  {
    id: 302,
    word: 'user-friendly',
    pos: 'adjective',
    definition: 'Easy for people who are not experts to use or understand.',
    example: 'The new expense filing app has a user-friendly design that cuts submission time in half.',
    collocation: 'user-friendly interface / highly user-friendly',
    category: 'Office Operations & Tech'
  },
  {
    id: 303,
    word: 'vendor',
    pos: 'noun',
    definition: 'A person or company offering something for sale, especially hardware or software.',
    example: 'We interviewed three software vendors before selecting an enterprise resource system.',
    collocation: 'software vendor / preferred vendor',
    category: 'Office Operations & Tech'
  },
  {
    id: 304,
    word: 'virus',
    pos: 'noun',
    definition: 'A piece of code that is capable of copying itself and corrupting a computer system.',
    example: 'Antivirus definitions must be updated daily to safeguard company workstations.',
    collocation: 'computer virus / virus protection',
    category: 'Office Operations & Tech'
  },
  {
    id: 305,
    word: 'warranty',
    pos: 'noun',
    definition: 'A written guarantee promising to repair or replace an article within a specified period.',
    example: 'All refurbished office computers carry a two-year parts and labor warranty.',
    collocation: 'under warranty / extended warranty',
    category: 'Office Operations & Tech'
  },
  {
    id: 306,
    word: 'archive',
    pos: 'verb',
    definition: 'To place or store in an archive for long-term preservation.',
    example: 'Emails older than three years are automatically archived in accordance with record laws.',
    collocation: 'archive files / archive records',
    category: 'Office Operations & Tech'
  },
  {
    id: 307,
    word: 'shredder',
    pos: 'noun',
    definition: 'A machine for cutting documents into small strips or pieces to destroy confidential text.',
    example: 'Employees must place all discarded paper files containing client names in the shredder.',
    collocation: 'paper shredder / feed into the shredder',
    category: 'Office Operations & Tech'
  },
  {
    id: 308,
    word: 'teleconference',
    pos: 'noun',
    definition: 'A conference with participants in different locations linked by telecommunications.',
    example: 'The regional vice president joined the morning teleconference from her Zurich hotel.',
    collocation: 'join a teleconference / teleconference link',
    category: 'Office Operations & Tech'
  },
  {
    id: 309,
    word: 'virtual',
    pos: 'adjective',
    definition: 'Carried out, accessed, or existing online, rather than in physical form.',
    example: 'The enterprise transitioned to virtual quarterly meetings to reduce executive travel.',
    collocation: 'virtual meeting / virtual workstation',
    category: 'Office Operations & Tech'
  },
  {
    id: 310,
    word: 'workspace',
    pos: 'noun',
    definition: 'Space used or required for one’s work, as in an office.',
    example: 'The open-plan office features collaborative lounges and quiet private workspaces.',
    collocation: 'collaborative workspace / clean workspace',
    category: 'Office Operations & Tech'
  },
  {
    id: 311,
    word: 'access',
    pos: 'noun',
    definition: 'The right or opportunity to use or benefit from something.',
    example: 'Temporary contractors are granted restricted network access for sixty days.',
    collocation: 'gain access / unauthorized access',
    category: 'Office Operations & Tech'
  },
  {
    id: 312,
    word: 'authenticate',
    pos: 'verb',
    definition: 'To validate identity.',
    example: 'Use the authenticator token to verify network sign-ins.',
    collocation: 'two-factor authentication / authenticated user',
    category: 'Office Operations & Tech'
  },
  {
    id: 313,
    word: 'cloud',
    pos: 'noun',
    definition: 'A network of remote servers hosted on the Internet to store, manage, and process data.',
    example: 'Migrating to the cloud has lowered our on-premises IT electricity expenses.',
    collocation: 'cloud computing / cloud migration',
    category: 'Office Operations & Tech'
  },
  {
    id: 314,
    word: 'digitalize',
    pos: 'verb',
    definition: 'To convert information into a digital format.',
    example: 'The legal department worked for six months to digitalize paper contracts.',
    collocation: 'digitalize records / digitalize documents',
    category: 'Office Operations & Tech'
  },
  {
    id: 315,
    word: 'ergonomics',
    pos: 'noun',
    definition: 'The study of people\'s efficiency in their working environment.',
    example: 'Investing in workplace ergonomics has reduced repetitive strain injuries.',
    collocation: 'workplace ergonomics / office ergonomics',
    category: 'Office Operations & Tech'
  },
  {
    id: 316,
    word: 'facsimile',
    pos: 'noun',
    definition: 'An exact copy, especially of written or printed material; a fax.',
    example: 'Some financial institutions still accept authorized loan forms transmitted by facsimile.',
    collocation: 'send a facsimile / facsimile transmission',
    category: 'Office Operations & Tech'
  },
  {
    id: 317,
    word: 'jam',
    pos: 'noun',
    definition: 'An instance of a machine becoming stuck or wedged.',
    example: 'Follow the on-screen diagram to safely clear the paper jam in tray 2.',
    collocation: 'paper jam / clear a jam',
    category: 'Office Operations & Tech'
  },
  {
    id: 318,
    word: 'modem',
    pos: 'noun',
    definition: 'A combined device for modulation and demodulation, for example between digital data and phone lines.',
    example: 'Reset the broadband modem if the internet connection is disrupted.',
    collocation: 'cable modem / restart the modem',
    category: 'Office Operations & Tech'
  },
  {
    id: 319,
    word: 'scanner',
    pos: 'noun',
    definition: 'A device for capturing and converting printed images or documents into digital code.',
    example: 'The multifunction photocopier includes a high-speed double-sided document scanner.',
    collocation: 'document scanner / flatbed scanner',
    category: 'Office Operations & Tech'
  },
  {
    id: 320,
    word: 'voicemail',
    pos: 'noun',
    definition: 'A centralized electronic system which can store messages from telephone callers.',
    example: 'If I am away from my desk, please leave a brief voicemail and I will return your call.',
    collocation: 'leave a voicemail / check voicemail',
    category: 'Office Operations & Tech'
  },

  // --- 6. Marketing & Sales (321 - 385) ---
  {
    id: 321,
    word: 'demographic',
    pos: 'noun',
    definition: 'A particular sector of a population, especially considered as a consumer market.',
    example: 'Our new mobile banking application targets the tech-savvy millennial demographic.',
    collocation: 'target demographic / key demographic',
    category: 'Marketing & Sales'
  },
  {
    id: 322,
    word: 'campaign',
    pos: 'noun',
    definition: 'An organized course of action to promote a product, service, or brand.',
    example: 'The digital marketing campaign generated over 500,000 views in its opening week.',
    collocation: 'launch a campaign / marketing campaign',
    category: 'Marketing & Sales'
  },
  {
    id: 323,
    word: 'endorsement',
    pos: 'noun',
    definition: 'An act of giving one\'s public approval or support to a product or brand.',
    example: 'Celebrity endorsements helped propel the new sports apparel line into market leadership.',
    collocation: 'celebrity endorsement / product endorsement',
    category: 'Marketing & Sales'
  },
  {
    id: 324,
    word: 'niche',
    pos: 'noun',
    definition: 'A specialized segment of the market for a particular kind of product or service.',
    example: 'The boutique coffee roaster carved out a profitable niche in organic beans.',
    collocation: 'niche market / carve out a niche',
    category: 'Marketing & Sales'
  },
  {
    id: 325,
    word: 'penetrate',
    pos: 'verb',
    definition: 'To gain access to or establish a foothold in a new commercial market.',
    example: 'Domestic manufacturers are finding it challenging to penetrate the Asian electronics market.',
    collocation: 'penetrate the market / market penetration',
    category: 'Marketing & Sales'
  },
  {
    id: 326,
    word: 'brand',
    pos: 'noun',
    definition: 'A type of product manufactured by a particular company under a particular name.',
    example: 'Building strong brand loyalty requires consistent quality and exceptional service.',
    collocation: 'brand loyalty / brand awareness',
    category: 'Marketing & Sales'
  },
  {
    id: 327,
    word: 'brochure',
    pos: 'noun',
    definition: 'A small book or magazine containing pictures and information about a product or service.',
    example: 'Sales associates distributed informational brochures to all attendees at the trade expo.',
    collocation: 'promotional brochure / product brochure',
    category: 'Marketing & Sales'
  },
  {
    id: 328,
    word: 'clientele',
    pos: 'noun',
    definition: 'The clients or customers of a shop, restaurant, or business collectively.',
    example: 'The upscale boutique caters primarily to an international business clientele.',
    collocation: 'exclusive clientele / loyal clientele',
    category: 'Marketing & Sales'
  },
  {
    id: 329,
    word: 'competitor',
    pos: 'noun',
    definition: 'An organization engaged in commercial or economic competition with others.',
    example: 'Our primary competitor lowered its subscription rates by fifteen percent.',
    collocation: 'fierce competitor / nearest competitor',
    category: 'Marketing & Sales'
  },
  {
    id: 330,
    word: 'conversion',
    pos: 'noun',
    definition: 'The act of converting website visitors or leads into paying customers.',
    example: 'Simplifying the checkout page increased online sales conversion by 22%.',
    collocation: 'conversion rate / lead conversion',
    category: 'Marketing & Sales'
  },
  {
    id: 331,
    word: 'discount',
    pos: 'noun',
    definition: 'A deduction from the usual cost of something, typically given for prompt or advance payment.',
    example: 'Wholesale buyers who order in bulk are entitled to a twenty percent volume discount.',
    collocation: 'volume discount / offer a discount',
    category: 'Marketing & Sales'
  },
  {
    id: 332,
    word: 'flyer',
    pos: 'noun',
    definition: 'A small handbill advertising an event or product.',
    example: 'Volunteers handed out promotional flyers outside the subway entrance.',
    collocation: 'promotional flyer / distribute flyers',
    category: 'Marketing & Sales'
  },
  {
    id: 333,
    word: 'loyalty',
    pos: 'noun',
    definition: 'A strong feeling of support, allegiance, or repeat purchasing.',
    example: 'The retailer rewards customer loyalty with points redeemable for future store credit.',
    collocation: 'customer loyalty / loyalty program',
    category: 'Marketing & Sales'
  },
  {
    id: 334,
    word: 'market share',
    pos: 'noun',
    definition: 'The portion of a market controlled by a particular company or product.',
    example: 'The smartphone manufacturer captured a thirty percent domestic market share.',
    collocation: 'gain market share / loss of market share',
    category: 'Marketing & Sales'
  },
  {
    id: 335,
    word: 'patron',
    pos: 'noun',
    definition: 'A customer, especially a regular one, of a store, restaurant, or theater.',
    example: 'Restaurant patrons are invited to complete a brief satisfaction survey.',
    collocation: 'regular patron / patrons of the arts',
    category: 'Marketing & Sales'
  },
  {
    id: 336,
    word: 'patronage',
    pos: 'noun',
    definition: 'The regular support or custom given to a store, restaurant, or other business.',
    example: 'We sincerely thank you for your ongoing patronage over the past decade.',
    collocation: 'thank you for your patronage / continuous patronage',
    category: 'Marketing & Sales'
  },
  {
    id: 337,
    word: 'pitch',
    pos: 'noun',
    definition: 'A form of words used by someone trying to persuade someone to buy or accept something.',
    example: 'The sales team delivered a persuasive five-minute pitch to the prospective investor.',
    collocation: 'sales pitch / elevator pitch',
    category: 'Marketing & Sales'
  },
  {
    id: 338,
    word: 'press release',
    pos: 'noun',
    definition: 'An official statement issued to newspapers and media giving information on a matter.',
    example: 'The public relations team issued a press release announcing the corporate merger.',
    collocation: 'issue a press release / official press release',
    category: 'Marketing & Sales'
  },
  {
    id: 339,
    word: 'prospective',
    pos: 'adjective',
    definition: 'Expected or expecting to be something specified in the future; potential.',
    example: 'Sales reps arranged demonstration calls with six prospective corporate buyers.',
    collocation: 'prospective customer / prospective client',
    category: 'Marketing & Sales'
  },
  {
    id: 340,
    word: 'publicity',
    pos: 'noun',
    definition: 'Notice or attention given to someone or something by the media.',
    example: 'The viral social video generated immense positive publicity for the brand.',
    collocation: 'gain publicity / adverse publicity',
    category: 'Marketing & Sales'
  },
  {
    id: 341,
    word: 'quota',
    pos: 'noun',
    definition: 'A fixed minimum or maximum quantity or number of sales required.',
    example: 'Top sales performers consistently exceed their monthly sales quotas.',
    collocation: 'meet a quota / sales quota',
    category: 'Marketing & Sales'
  },
  {
    id: 342,
    word: 'rebate',
    pos: 'noun',
    definition: 'A partial refund to someone who has paid too much money for tax, rent, or a utility.',
    example: 'Customers who purchase energy-efficient home appliances are eligible for a cash rebate.',
    collocation: 'mail-in rebate / tax rebate',
    category: 'Marketing & Sales'
  },
  {
    id: 343,
    word: 'sample',
    pos: 'noun',
    definition: 'A small quantity of a product given to customers to try before purchasing.',
    example: 'Cosmetics counters frequently offer complimentary fragrance samples to shoppers.',
    collocation: 'free sample / product sample',
    category: 'Marketing & Sales'
  },
  {
    id: 344,
    word: 'segment',
    pos: 'noun',
    definition: 'Each of the parts into which something is or may be divided; group of consumers.',
    example: 'The premium coffee line targets an affluent segment of urban consumers.',
    collocation: 'market segment / customer segment',
    category: 'Marketing & Sales'
  },
  {
    id: 345,
    word: 'slogan',
    pos: 'noun',
    definition: 'A short and striking or memorable phrase used in advertising.',
    example: 'The company\'s catchy advertising slogan has remained popular for over twenty years.',
    collocation: 'advertising slogan / memorable slogan',
    category: 'Marketing & Sales'
  },
  {
    id: 346,
    word: 'survey',
    pos: 'noun',
    definition: 'An investigation of the opinions or experience of a group of people by asking questions.',
    example: 'Results of the annual customer satisfaction survey will be published next Friday.',
    collocation: 'conduct a survey / customer survey',
    category: 'Marketing & Sales'
  },
  {
    id: 347,
    word: 'target',
    pos: 'verb',
    definition: 'To aim or direct something at a particular group of people.',
    example: 'The television commercial is specifically targeted at young working professionals.',
    collocation: 'target consumers / target audience',
    category: 'Marketing & Sales'
  },
  {
    id: 348,
    word: 'testimonial',
    pos: 'noun',
    definition: 'A formal statement testifying to someone\'s character or a product\'s efficacy.',
    example: 'Our homepage showcases video testimonials from satisfied corporate clients.',
    collocation: 'customer testimonial / glowing testimonial',
    category: 'Marketing & Sales'
  },
  {
    id: 349,
    word: 'trend',
    pos: 'noun',
    definition: 'A general direction in which something is developing or changing.',
    example: 'Consumer trends indicate an accelerating shift toward eco-friendly packaging.',
    collocation: 'consumer trends / market trend',
    category: 'Marketing & Sales'
  },
  {
    id: 350,
    word: 'upsell',
    pos: 'verb',
    definition: 'To persuade a customer to buy something additional or more expensive.',
    example: 'Customer service representatives are trained to politely upsell premium warranty plans.',
    collocation: 'upsell products / cross-sell and upsell',
    category: 'Marketing & Sales'
  },
  {
    id: 351,
    word: 'warranty',
    pos: 'noun',
    definition: 'A guarantee that a manufacturer will repair or replace a defective product.',
    example: 'The luxury automobile comes with an industry-leading 10-year powertrain warranty.',
    collocation: 'under warranty / full warranty',
    category: 'Marketing & Sales'
  },
  {
    id: 352,
    word: 'wholesale',
    pos: 'noun',
    definition: 'The selling of goods in large quantities to be retailed by others.',
    example: 'Purchasing goods at wholesale prices allows retailers to achieve healthy profit margins.',
    collocation: 'wholesale price / buy wholesale',
    category: 'Marketing & Sales'
  },
  {
    id: 353,
    word: 'awareness',
    pos: 'noun',
    definition: 'Knowledge or perception of a situation, fact, or consumer brand.',
    example: 'Social media influencer collaborations significantly boosted brand awareness among teens.',
    collocation: 'raise brand awareness / public awareness',
    category: 'Marketing & Sales'
  },
  {
    id: 354,
    word: 'billboard',
    pos: 'noun',
    definition: 'A large outdoor board for displaying advertisements.',
    example: 'The beverage company leased ten roadside billboards along the interstate highway.',
    collocation: 'highway billboard / billboard advertisement',
    category: 'Marketing & Sales'
  },
  {
    id: 355,
    word: 'cannibalize',
    pos: 'verb',
    definition: 'To reduce the sales of an existing product by introducing a similar new product.',
    example: 'Management feared the budget tablet would cannibalize sales of their flagship device.',
    collocation: 'cannibalize sales / cannibalize market share',
    category: 'Marketing & Sales'
  },
  {
    id: 356,
    word: 'catalogue',
    pos: 'noun',
    definition: 'A complete list of items, typically one in alphabetical or other systematic order.',
    example: 'Customers may browse our full seasonal catalogue online or request a printed copy.',
    collocation: 'product catalogue / mail-order catalogue',
    category: 'Marketing & Sales'
  },
  {
    id: 357,
    word: 'client',
    pos: 'noun',
    definition: 'A person or organization using the services of a lawyer or other professional company.',
    example: 'The architecture firm prides itself on maintaining long-term relationships with clients.',
    collocation: 'corporate client / prospective client',
    category: 'Marketing & Sales'
  },
  {
    id: 358,
    word: 'commercial',
    pos: 'noun',
    definition: 'A television or radio advertisement.',
    example: 'The thirty-second commercial aired during the championship football broadcast.',
    collocation: 'television commercial / radio commercial',
    category: 'Marketing & Sales'
  },
  {
    id: 359,
    word: 'demonstration',
    pos: 'noun',
    definition: 'An act of showing that something is in existence or how a machine works.',
    example: 'The sales representative gave a live demonstration of the floor-cleaning robot.',
    collocation: 'product demonstration / live demonstration',
    category: 'Marketing & Sales'
  },
  {
    id: 360,
    word: 'engagement',
    pos: 'noun',
    definition: 'Consumer interaction and involvement with a brand, social post, or advertisement.',
    example: 'Interactive polls generated high customer engagement on our corporate blog.',
    collocation: 'customer engagement / user engagement',
    category: 'Marketing & Sales'
  },
  {
    id: 361,
    word: 'focus group',
    pos: 'noun',
    definition: 'A group of people assembled to participate in a discussion about a new product.',
    example: 'The focus group provided critical feedback regarding the taste of the sugar-free soda.',
    collocation: 'conduct a focus group / focus group interview',
    category: 'Marketing & Sales'
  },
  {
    id: 362,
    word: 'guarantee',
    pos: 'noun',
    definition: 'A formal promise or assurance that certain conditions will be fulfilled.',
    example: 'All online purchases come with a 30-day money-back satisfaction guarantee.',
    collocation: 'money-back guarantee / written guarantee',
    category: 'Marketing & Sales'
  },
  {
    id: 363,
    word: 'hype',
    pos: 'noun',
    definition: 'Extravagant or intensive publicity or promotion.',
    example: 'Despite immense advance media hype, the movie underperformed at the box office.',
    collocation: 'media hype / live up to the hype',
    category: 'Marketing & Sales'
  },
  {
    id: 364,
    word: 'launch',
    pos: 'verb',
    definition: 'To set in motion; introduce a new product or service to the public market.',
    example: 'The tech conglomerate plans to launch its flagship electric SUV next quarter.',
    collocation: 'product launch / launch a campaign',
    category: 'Marketing & Sales'
  },
  {
    id: 365,
    word: 'lead',
    pos: 'noun',
    definition: 'A prospective customer or client who has shown interest in a company\'s products.',
    example: 'The website contact form generates approximately fifty qualified sales leads daily.',
    collocation: 'sales lead / generate leads',
    category: 'Marketing & Sales'
  },
  {
    id: 366,
    word: 'markup',
    pos: 'noun',
    definition: 'The amount added to the cost price of goods to cover overhead and profit.',
    example: 'Luxury jewelry brands often apply a 300 percent retail markup.',
    collocation: 'retail markup / high markup',
    category: 'Marketing & Sales'
  },
  {
    id: 367,
    word: 'merchandise',
    pos: 'noun',
    definition: 'Goods to be bought and sold.',
    example: 'Showroom staff are arranging new spring fashion merchandise on display tables.',
    collocation: 'promotional merchandise / display merchandise',
    category: 'Marketing & Sales'
  },
  {
    id: 368,
    word: 'positioning',
    pos: 'noun',
    definition: 'Promoting a brand or product in a particular way to differentiate it from rivals.',
    example: 'Market positioning as an eco-friendly brand attracted environmentally conscious buyers.',
    collocation: 'brand positioning / market positioning',
    category: 'Marketing & Sales'
  },
  {
    id: 369,
    word: 'premium',
    pos: 'adjective',
    definition: 'Relating to or denoting a commodity of superior quality and therefore higher price.',
    example: 'The company launched a premium subscription tier offering dedicated customer support.',
    collocation: 'premium product / premium price',
    category: 'Marketing & Sales'
  },
  {
    id: 370,
    word: 'prospect',
    pos: 'noun',
    definition: 'A potential customer, client, or commercial partner.',
    example: 'Cold-calling prospective corporate buyers is a core duty for junior sales staff.',
    collocation: 'sales prospect / hot prospect',
    category: 'Marketing & Sales'
  },
  {
    id: 371,
    word: 'questionnaire',
    pos: 'noun',
    definition: 'A set of printed or written questions with a choice of answers, for statistical study.',
    example: 'We invite you to take five minutes to fill out our post-service questionnaire.',
    collocation: 'complete a questionnaire / customer questionnaire',
    category: 'Marketing & Sales'
  },
  {
    id: 372,
    word: 'retention',
    pos: 'noun',
    definition: 'The ability of a company to keep its customers over a specified period.',
    example: 'Personalized email marketing newsletters have greatly improved customer retention.',
    collocation: 'customer retention / retention strategy',
    category: 'Marketing & Sales'
  },
  {
    id: 373,
    word: 'royalty',
    pos: 'noun',
    definition: 'A sum paid to a patentee or author for each copy of a work sold or for each use.',
    example: 'The software developer receives an eight percent royalty on every program licensed.',
    collocation: 'royalty payments / earn royalties',
    category: 'Marketing & Sales'
  },
  {
    id: 374,
    word: 'sample',
    pos: 'verb',
    definition: 'To take a small amount of something to test its quality or condition.',
    example: 'Shoppers were invited to sample artisanal cheeses at the supermarket demonstration.',
    collocation: 'sample a product / free sampling',
    category: 'Marketing & Sales'
  },
  {
    id: 375,
    word: 'saturation',
    pos: 'noun',
    definition: 'The state or process that occurs when no more of something can be absorbed or added.',
    example: 'Market saturation in North America forced the streaming service to expand to Latin America.',
    collocation: 'market saturation / point of saturation',
    category: 'Marketing & Sales'
  },
  {
    id: 376,
    word: 'showcase',
    pos: 'verb',
    definition: 'To exhibit or display something prominently.',
    example: 'The international electronics expo offers startups a stage to showcase prototypes.',
    collocation: 'showcase products / showcase talent',
    category: 'Marketing & Sales'
  },
  {
    id: 377,
    word: 'sponsor',
    pos: 'verb',
    definition: 'To provide funds for an event, person, or organization in return for advertising.',
    example: 'The athletic footwear company agreed to sponsor the city marathon.',
    collocation: 'sponsor an event / corporate sponsor',
    category: 'Marketing & Sales'
  },
  {
    id: 378,
    word: 'tailor',
    pos: 'verb',
    definition: 'To make or adapt for a particular purpose or person.',
    example: 'We tailor our enterprise software packages to fit the specific needs of each client.',
    collocation: 'tailor to / tailor solutions',
    category: 'Marketing & Sales'
  },
  {
    id: 379,
    word: 'testimonial',
    pos: 'noun',
    definition: 'A recommendation of a product by a customer.',
    example: 'Customer testimonials featured on the homepage increased sign-ups by 18 percent.',
    collocation: 'user testimonial / client testimonial',
    category: 'Marketing & Sales'
  },
  {
    id: 380,
    word: 'traction',
    pos: 'noun',
    definition: 'The extent to which an idea, product, or company gains popularity or momentum.',
    example: 'The subscription delivery service gained substantial traction in metropolitan hubs.',
    collocation: 'gain traction / lose traction',
    category: 'Marketing & Sales'
  },
  {
    id: 381,
    word: 'turnaround',
    pos: 'noun',
    definition: 'An abrupt or unexpected change, especially an improvement in commercial fortune.',
    example: 'Aggressive marketing caused a dramatic financial turnaround in third-quarter retail sales.',
    collocation: 'remarkable turnaround / corporate turnaround',
    category: 'Marketing & Sales'
  },
  {
    id: 382,
    word: 'unique',
    pos: 'adjective',
    definition: 'Being the only one of its kind; unlike anything else.',
    example: 'The brand\'s unique selling proposition is its 100 percent recycled raw materials.',
    collocation: 'unique selling proposition / unique feature',
    category: 'Marketing & Sales'
  },
  {
    id: 383,
    word: 'unveil',
    pos: 'verb',
    definition: 'To show or announce something publicly for the first time.',
    example: 'The CEO will unveil the next-generation electric sports sedan at the Geneva auto show.',
    collocation: 'unveil a product / unveil plans',
    category: 'Marketing & Sales'
  },
  {
    id: 384,
    word: 'viral',
    pos: 'adjective',
    definition: 'Relating to or involving an image, video, or piece of information that circulates rapidly.',
    example: 'The humorous social media commercial went viral, reaching 10 million views in two days.',
    collocation: 'go viral / viral marketing',
    category: 'Marketing & Sales'
  },
  {
    id: 385,
    word: 'visibility',
    pos: 'noun',
    definition: 'The degree to which something has attracted general attention or prominence.',
    example: 'Sponsoring the national soccer tournament gave the brand massive global visibility.',
    collocation: 'brand visibility / high visibility',
    category: 'Marketing & Sales'
  },

  // --- 7. Logistics, Shipping & Procurement (386 - 445) ---
  {
    id: 386,
    word: 'consignment',
    pos: 'noun',
    definition: 'A batch of goods destined for or delivered to someone; shipment.',
    example: 'The customs inspector cleared the latest consignment of medical equipment.',
    collocation: 'shipment on consignment / batch consignment',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 387,
    word: 'courier',
    pos: 'noun',
    definition: 'A company or employee that transports packages, mail, or documents rapidly.',
    example: 'Urgent legal documents were delivered across town by motorcycle courier.',
    collocation: 'express courier / courier service',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 388,
    word: 'manifest',
    pos: 'noun',
    definition: 'A document listing the cargo, passengers, and crew of a ship, aircraft, or vehicle.',
    example: 'The captain handed over the cargo manifest to the port authority officials.',
    collocation: 'cargo manifest / passenger manifest',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 389,
    word: 'freight',
    pos: 'noun',
    definition: 'Goods transported in bulk by truck, train, ship, or aircraft.',
    example: 'Air freight is significantly faster than ocean shipping, though more expensive.',
    collocation: 'freight forwarder / air freight',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 390,
    word: 'warehouse',
    pos: 'noun',
    definition: 'A large building where raw materials or manufactured goods may be stored.',
    example: 'The automated distribution warehouse operates twenty-four hours a day.',
    collocation: 'distribution warehouse / warehouse supervisor',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 391,
    word: 'dispatch',
    pos: 'verb',
    definition: 'To send off to a destination or for a purpose.',
    example: 'All orders placed before 2:00 P.M. will be dispatched from our regional hub on the same day.',
    collocation: 'dispatch goods / dispatch a technician',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 392,
    word: 'bill of lading',
    pos: 'noun',
    definition: 'A detailed list of a shipment of goods in the form of a receipt given by the carrier.',
    example: 'The port inspector requested the signed bill of lading before authorizing release of the container.',
    collocation: 'issue a bill of lading / original bill of lading',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 393,
    word: 'expedite',
    pos: 'verb',
    definition: 'To make an action or process happen sooner or be accomplished more quickly.',
    example: 'Customers may pay a twenty-dollar surcharge to expedite processing and delivery.',
    collocation: 'expedite shipping / expedite a request',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 394,
    word: 'pallet',
    pos: 'noun',
    definition: 'A portable wooden or plastic platform on which goods can be moved and stacked.',
    example: 'Forklift operators carefully stacked twelve pallets of electronic components.',
    collocation: 'wooden pallet / pallet jack',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 395,
    word: 'inventory',
    pos: 'noun',
    definition: 'The entire quantity of products or materials held in stock by a company.',
    example: 'Real-time barcode scanning keeps inventory counts accurately synchronized.',
    collocation: 'stock inventory / excess inventory',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 396,
    word: 'bottleneck',
    pos: 'noun',
    definition: 'A point of congestion or blockage that slows an entire supply chain process.',
    example: 'Port container congestion created severe supply chain bottlenecks across the nation.',
    collocation: 'supply chain bottleneck / remove bottlenecks',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 397,
    word: 'procure',
    pos: 'verb',
    definition: 'To obtain raw materials, components, or services for manufacturing.',
    example: 'The logistics division must procure semiconductor chips from certified suppliers.',
    collocation: 'procure materials / procure supplies',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 398,
    word: 'tracking',
    pos: 'noun',
    definition: 'The process of monitoring the continuous location of shipments in transit.',
    example: 'An automated email containing a parcel tracking number is sent upon shipment.',
    collocation: 'tracking number / shipment tracking',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 399,
    word: 'customs',
    pos: 'noun',
    definition: 'The government agency responsible for collecting duties and inspecting imported goods.',
    example: 'The cargo was held in customs until import duty documentation was verified.',
    collocation: 'clear customs / customs broker',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 400,
    word: 'crate',
    pos: 'noun',
    definition: 'A slatted wooden case used for transporting or storing goods.',
    example: 'Heavy industrial pump machinery is transported inside reinforced wooden crates.',
    collocation: 'wooden crate / pack into crates',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 401,
    word: 'dock',
    pos: 'noun',
    definition: 'A platform where trucks or ships load or unload materials.',
    example: 'Semi-trailers were lined up outside loading dock 4 awaiting morning cargo.',
    collocation: 'loading dock / cargo dock',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 402,
    word: 'tariffs',
    pos: 'noun',
    definition: 'Customs duties or taxes imposed on foreign imports.',
    example: 'Increased import tariffs prompted the manufacturer to source metals locally.',
    collocation: 'import tariffs / retaliatory tariffs',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 403,
    word: 'haul',
    pos: 'verb',
    definition: 'To pull or transport with effort or force; convey by truck.',
    example: 'Long-distance freight carriers haul dry goods across the country.',
    collocation: 'long haul / haul cargo',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 404,
    word: 'clearance',
    pos: 'noun',
    definition: 'Official certification that goods or travelers have satisfied customs requirements.',
    example: 'The shipment obtained customs clearance and is scheduled for morning delivery.',
    collocation: 'customs clearance / regulatory clearance',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 405,
    word: 'spoilage',
    pos: 'noun',
    definition: 'The process of decaying or becoming unfit for consumption; perishable loss.',
    example: 'Refrigerated container ships prevent produce spoilage during ocean crossings.',
    collocation: 'prevent spoilage / food spoilage',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 406,
    word: 'lead time',
    pos: 'noun',
    definition: 'The time between the initiation and completion of a production or supply process.',
    example: 'The supplier guaranteed a two-week lead time for custom printed boxes.',
    collocation: 'short lead time / delivery lead time',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 407,
    word: 'backorder',
    pos: 'noun',
    definition: 'A retailer\'s order for a product that is temporarily out of stock with the supplier.',
    example: 'Because of sudden demand, the ergonomic gaming chair was placed on backorder.',
    collocation: 'on backorder / fulfill backorders',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 408,
    word: 'fulfill',
    pos: 'verb',
    definition: 'To complete or satisfy an order or request; pack and dispatch goods.',
    example: 'Our distribution center strives to fulfill all customer orders within 24 hours.',
    collocation: 'fulfill orders / fulfillment center',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 409,
    word: 'shortage',
    pos: 'noun',
    definition: 'A state or situation in which something needed cannot be obtained in sufficient amounts.',
    example: 'A global shortage of microchips forced auto assembly plants to idle operations.',
    collocation: 'labor shortage / supply shortage',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 410,
    word: 'surcharge',
    pos: 'noun',
    definition: 'An additional charge, tax, or cost added to an existing fee.',
    example: 'Rising diesel prices caused shipping carriers to add a fuel surcharge to deliveries.',
    collocation: 'fuel surcharge / additional surcharge',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 411,
    word: 'fragile',
    pos: 'adjective',
    definition: 'Easily broken or damaged; requiring careful handling.',
    example: 'The carton was stamped with red warnings reading "FRAGILE: HANDLE WITH CARE".',
    collocation: 'fragile items / fragile handle with care',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 412,
    word: 'batch',
    pos: 'noun',
    definition: 'A quantity of goods produced or dispatched at one time.',
    example: 'Quality control rejected an entire production batch due to paint imperfections.',
    collocation: 'batch number / production batch',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 413,
    word: 'carrier',
    pos: 'noun',
    definition: 'A person or enterprise that undertakes the commercial transport of goods or people.',
    example: 'The retailer partners with multiple commercial carriers to ensure fast regional transit.',
    collocation: 'freight carrier / common carrier',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 414,
    word: 'carton',
    pos: 'noun',
    definition: 'A light box or container, typically one made of cardboard or paperboard.',
    example: 'Each corrugated cardboard carton contains twenty-four individual retail units.',
    collocation: 'cardboard carton / seal the carton',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 415,
    word: 'consignee',
    pos: 'noun',
    definition: 'The person or enterprise to whom a shipment is to be delivered.',
    example: 'The bill of lading lists Apex Electronics as the primary consignee.',
    collocation: 'deliver to the consignee / name of consignee',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 416,
    word: 'container',
    pos: 'noun',
    definition: 'A large metal box of standardized dimensions used for transporting cargo.',
    example: 'Cranes at the marine terminal unloaded 1,200 shipping containers from the vessel.',
    collocation: 'shipping container / cargo container',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 417,
    word: 'cross-docking',
    pos: 'noun',
    definition: 'Unloading materials from an incoming semi-trailer truck and loading directly onto outbound trucks.',
    example: 'Cross-docking eliminates warehouse storage costs and accelerates order dispatch.',
    collocation: 'cross-docking facility / practice cross-docking',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 418,
    word: 'demurrage',
    pos: 'noun',
    definition: 'A charge payable to the owner of a chartered ship or container for failure to load/unload in time.',
    example: 'The importer incurred demurrage fees when cargo remained unclaimed at the port.',
    collocation: 'demurrage charges / pay demurrage',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 419,
    word: 'distributor',
    pos: 'noun',
    definition: 'An agent who supplies goods to stores and other businesses that sell to consumers.',
    example: 'The manufacturer signed an exclusive agreement with a regional beverage distributor.',
    collocation: 'wholesale distributor / exclusive distributor',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 420,
    word: 'fleet',
    pos: 'noun',
    definition: 'A group of motor vehicles owned or leased by a company.',
    example: 'The delivery company manages a fleet of 500 temperature-controlled vans.',
    collocation: 'truck fleet / fleet management',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 421,
    word: 'forklift',
    pos: 'noun',
    definition: 'A vehicle with a pronged device in front for lifting and carrying heavy loads.',
    example: 'Warehouse staff must hold a valid operating license before driving a forklift.',
    collocation: 'forklift operator / operate a forklift',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 422,
    word: 'freight',
    pos: 'noun',
    definition: 'Cargo transported by land, sea, or air.',
    example: 'Rail freight remains the most cost-effective method for shipping raw grain.',
    collocation: 'freight charges / freight train',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 423,
    word: 'in transit',
    pos: 'phrase',
    definition: 'In the process of being transported or conveyed from one place to another.',
    example: 'Tracking logs indicate that your package is currently in transit to Chicago.',
    collocation: 'lost in transit / goods in transit',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 424,
    word: 'intermodal',
    pos: 'adjective',
    definition: 'Involving two or more different modes of transportation in conveying goods.',
    example: 'Intermodal freight combines railway flatcars with container ships to cut fuel costs.',
    collocation: 'intermodal transport / intermodal shipping',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 425,
    word: 'inventory',
    pos: 'noun',
    definition: 'A stock of merchandise.',
    example: 'Automated software alerts managers whenever inventory falls below safety thresholds.',
    collocation: 'depleted inventory / manage inventory',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 426,
    word: 'just-in-time',
    pos: 'adjective',
    definition: 'Denoting a manufacturing system in which materials or parts are delivered just before use.',
    example: 'Just-in-time inventory manufacturing minimizes warehouse holding expenses.',
    collocation: 'just-in-time delivery / just-in-time manufacturing',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 427,
    word: 'landing',
    pos: 'noun',
    definition: 'The act of bringing goods ashore or to port.',
    example: 'Port fees are assessed upon cargo landing and weigh-in.',
    collocation: 'landing fees / landing charges',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 428,
    word: 'logistics',
    pos: 'noun',
    definition: 'The detailed organization and implementation of a complex operation.',
    example: 'She earned a master’s degree in global logistics and supply chain management.',
    collocation: 'third-party logistics / logistics coordinator',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 429,
    word: 'overstock',
    pos: 'verb',
    definition: 'To provide or stock with more than what is needed or wanted.',
    example: 'Retailers were forced to discount winter coats after overstocking before a mild season.',
    collocation: 'overstock inventory / overstock items',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 430,
    word: 'packaging',
    pos: 'noun',
    definition: 'Materials used to wrap or protect goods.',
    example: 'The firm redesigned its packaging using biodegradable cornstarch materials.',
    collocation: 'sustainable packaging / protective packaging',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 431,
    word: 'perishable',
    pos: 'adjective',
    definition: 'Likely to decay or go bad quickly, especially foods.',
    example: 'Perishable agricultural goods must be transported in refrigerated containers.',
    collocation: 'perishable goods / perishable items',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 432,
    word: 'pipeline',
    pos: 'noun',
    definition: 'A channel, system, or sequence for delivering products, supplies, or services.',
    example: 'The logistics director assured investors that multiple orders remain in the pipeline.',
    collocation: 'in the pipeline / supply pipeline',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 433,
    word: 'procurement',
    pos: 'noun',
    definition: 'The action of obtaining or procuring equipment or supplies.',
    example: 'Government procurement rules require open bidding among competing suppliers.',
    collocation: 'public procurement / procurement guidelines',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 434,
    word: 'replenish',
    pos: 'verb',
    definition: 'To fill something up again; restore to a former level or condition.',
    example: 'Night shift stockers replenish retail shelves before the store opens at 8:00 A.M.',
    collocation: 'replenish stock / replenish inventory',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 435,
    word: 'routing',
    pos: 'noun',
    definition: 'The process of selecting paths or courses for traffic or cargo in a network.',
    example: 'GPS routing software calculates the fastest transit paths to avoid city roadblocks.',
    collocation: 'optimal routing / delivery routing',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 436,
    word: 'salvage',
    pos: 'verb',
    definition: 'To retrieve or preserve something from potential loss or destruction.',
    example: 'Crews managed to salvage undamaged computer parts from the flooded storage bay.',
    collocation: 'salvage goods / salvage cargo',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 437,
    word: 'scale',
    pos: 'noun',
    definition: 'An instrument or machine for weighing goods.',
    example: 'All outgoing parcel packages are weighed on a digital scale before labeling.',
    collocation: 'digital scale / truck scale',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 438,
    word: 'shortage',
    pos: 'noun',
    definition: 'A lack of something.',
    example: 'Due to severe timber shortages, paper manufacturing mills reduced daily output.',
    collocation: 'acute shortage / materials shortage',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 439,
    word: 'stock',
    pos: 'noun',
    definition: 'The goods or merchandise kept on the premises of a business or warehouse.',
    example: 'The warehouse has run out of stock for popular 65-inch television models.',
    collocation: 'out of stock / in stock',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 440,
    word: 'supplier',
    pos: 'noun',
    definition: 'A person or organization that provides something needed such as a product or service.',
    example: 'Our primary automotive glass supplier is located three miles from the assembly plant.',
    collocation: 'reliable supplier / component supplier',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 441,
    word: 'tariff',
    pos: 'noun',
    definition: 'A tax levied by governments on imports or exports.',
    example: 'Trade negotiators agreed to eliminate retaliatory tariffs on agricultural produce.',
    collocation: 'customs tariff / protective tariff',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 442,
    word: 'tracking',
    pos: 'noun',
    definition: 'Monitoring the movement of goods.',
    example: 'Logistics managers utilize GPS tracking to oversee vehicle delivery progress.',
    collocation: 'real-time tracking / package tracking',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 443,
    word: 'turnaround',
    pos: 'noun',
    definition: 'The time taken to complete a process or receive a shipment.',
    example: 'The fulfillment hub boasts an impressive 24-hour turnaround for domestic orders.',
    collocation: 'turnaround time / rapid turnaround',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 444,
    word: 'vessel',
    pos: 'noun',
    definition: 'A ship or large boat.',
    example: 'The container vessel docked at the deep-water harbor early Thursday morning.',
    collocation: 'cargo vessel / merchant vessel',
    category: 'Logistics, Shipping & Procurement'
  },
  {
    id: 445,
    word: 'waybill',
    pos: 'noun',
    definition: 'A document issued by a carrier giving details and instructions relating to the shipment of a consignment.',
    example: 'Attach the stamped air waybill securely to the exterior of the parcel crate.',
    collocation: 'air waybill / check the waybill',
    category: 'Logistics, Shipping & Procurement'
  },

  // --- 8. Contracts & Legal Business (446 - 500) ---
  {
    id: 446,
    word: 'stipulation',
    pos: 'noun',
    definition: 'A condition or requirement that is specified or demanded as part of an agreement.',
    example: 'One key stipulation of the lease requires the tenant to cover all interior repairs.',
    collocation: 'contractual stipulation / clear stipulation',
    category: 'Contracts & Legal'
  },
  {
    id: 447,
    word: 'binding',
    pos: 'adjective',
    definition: 'Involving an obligation that cannot be legally broken or avoided.',
    example: 'Once both parties append their signatures, this becomes a legally binding contract.',
    collocation: 'legally binding / binding agreement',
    category: 'Contracts & Legal'
  },
  {
    id: 448,
    word: 'indemnify',
    pos: 'verb',
    definition: 'To compensate someone for harm or loss; secure against legal responsibility.',
    example: 'The contractor agreed to indemnify the building owners against third-party liability.',
    collocation: 'indemnify against / indemnify and hold harmless',
    category: 'Contracts & Legal'
  },
  {
    id: 449,
    word: 'clause',
    pos: 'noun',
    definition: 'A particular and separate article, stipulation, or proviso in a legal document.',
    example: 'The non-compete clause prohibits former employees from working for direct rivals.',
    collocation: 'confidentiality clause / penalty clause',
    category: 'Contracts & Legal'
  },
  {
    id: 450,
    word: 'null and void',
    pos: 'phrase',
    definition: 'Having no legal force or validity; invalid.',
    example: 'If permits are not granted by June 1st, this sales agreement becomes null and void.',
    collocation: 'render null and void / declare null and void',
    category: 'Contracts & Legal'
  },
  {
    id: 451,
    word: 'breach',
    pos: 'noun',
    definition: 'An act of breaking or failing to observe a law, agreement, or code of conduct.',
    example: 'Failing to deliver components on the agreed date constituted a material breach of contract.',
    collocation: 'breach of contract / security breach',
    category: 'Contracts & Legal'
  },
  {
    id: 452,
    word: 'litigation',
    pos: 'noun',
    definition: 'The process of taking legal action; a lawsuit.',
    example: 'Both corporations preferred mediation to avoid the expense of protracted courtroom litigation.',
    collocation: 'avoid litigation / pending litigation',
    category: 'Contracts & Legal'
  },
  {
    id: 453,
    word: 'terminate',
    pos: 'verb',
    definition: 'To bring to an end; conclude an agreement officially.',
    example: 'Either party may terminate the lease agreement by providing sixty days\' written notice.',
    collocation: 'terminate a contract / right to terminate',
    category: 'Contracts & Legal'
  },
  {
    id: 454,
    word: 'proviso',
    pos: 'noun',
    definition: 'A condition or qualification attached to an agreement or statement.',
    example: 'The proposal was approved with the proviso that environmental impact assessments pass.',
    collocation: 'with the proviso / legal proviso',
    category: 'Contracts & Legal'
  },
  {
    id: 455,
    word: 'non-disclosure',
    pos: 'noun',
    definition: 'The keeping of secret information; a legal agreement forbidding disclosure.',
    example: 'All freelance developers must execute a non-disclosure agreement before seeing source code.',
    collocation: 'non-disclosure agreement (NDA) / signed non-disclosure',
    category: 'Contracts & Legal'
  },
  {
    id: 456,
    word: 'jurisdiction',
    pos: 'noun',
    definition: 'The official power to make legal decisions and judgments; territory within which authority applies.',
    example: 'This agreement shall be governed under the jurisdiction of the courts of Delaware.',
    collocation: 'under the jurisdiction / legal jurisdiction',
    category: 'Contracts & Legal'
  },
  {
    id: 457,
    word: 'amendment',
    pos: 'noun',
    definition: 'A minor change or addition designed to improve or modify a text or contract.',
    example: 'Both corporate attorneys signed the amendment extending the service agreement.',
    collocation: 'contract amendment / propose an amendment',
    category: 'Contracts & Legal'
  },
  {
    id: 458,
    word: 'infringement',
    pos: 'noun',
    definition: 'The action of breaking the terms of a law, agreement, or intellectual property rights.',
    example: 'The software company filed a lawsuit alleging patent infringement by a foreign rival.',
    collocation: 'copyright infringement / patent infringement',
    category: 'Contracts & Legal'
  },
  {
    id: 459,
    word: 'arbitration',
    pos: 'noun',
    definition: 'Settlement of a dispute by an impartial third party selected by the disputants.',
    example: 'The contract mandates that commercial disputes must be submitted to binding arbitration.',
    collocation: 'binding arbitration / arbitration panel',
    category: 'Contracts & Legal'
  },
  {
    id: 460,
    word: 'covenant',
    pos: 'noun',
    definition: 'An agreement or promise, usually in a deed or contract, to do or not do something.',
    example: 'The real estate contract contained a restrictive covenant preventing industrial zoning.',
    collocation: 'restrictive covenant / sign a covenant',
    category: 'Contracts & Legal'
  },
  {
    id: 461,
    word: 'statute',
    pos: 'noun',
    definition: 'A written law passed by a legislative body.',
    example: 'Corporate operations must comply strictly with federal labor and environmental statutes.',
    collocation: 'statute of limitations / federal statute',
    category: 'Contracts & Legal'
  },
  {
    id: 462,
    word: 'liability',
    pos: 'noun',
    definition: 'The state of being responsible for something, especially by law.',
    example: 'The disclaimer explicitly limits the manufacturer\'s liability in cases of user negligence.',
    collocation: 'limit liability / legal liability',
    category: 'Contracts & Legal'
  },
  {
    id: 463,
    word: 'severability',
    pos: 'noun',
    definition: 'A contract provision stating that terms can remain effective even if others are invalid.',
    example: 'The severability clause protects the remainder of the contract if one sentence is voided.',
    collocation: 'severability clause / doctrine of severability',
    category: 'Contracts & Legal'
  },
  {
    id: 464,
    word: 'waiver',
    pos: 'noun',
    definition: 'An act or instance of relinquishing a right or claim voluntarily.',
    example: 'Participants in the team-building obstacle course signed a medical liability waiver.',
    collocation: 'sign a waiver / waiver of rights',
    category: 'Contracts & Legal'
  },
  {
    id: 465,
    word: 'testament',
    pos: 'noun',
    definition: 'Something that serves as clear sign or evidence of a specified fact or event.',
    example: 'The continuous twenty-year partnership is a testament to shared corporate integrity.',
    collocation: 'testament to / clear testament',
    category: 'Contracts & Legal'
  },
  {
    id: 466,
    word: 'accord',
    pos: 'noun',
    definition: 'An official agreement or treaty.',
    example: 'Both nations signed a historic free-trade accord reducing tariffs on consumer electronics.',
    collocation: 'trade accord / reach an accord',
    category: 'Contracts & Legal'
  },
  {
    id: 467,
    word: 'attorney',
    pos: 'noun',
    definition: 'A person appointed to act for another in business or legal matters.',
    example: 'Our corporate attorney is currently drafting the vendor service agreement.',
    collocation: 'power of attorney / corporate attorney',
    category: 'Contracts & Legal'
  },
  {
    id: 468,
    word: 'behalf',
    pos: 'noun',
    definition: 'In the interests of a person or group; as a representative of someone.',
    example: 'The legal counsel signed the revised licensing agreement on behalf of the board.',
    collocation: 'on behalf of / on one\'s behalf',
    category: 'Contracts & Legal'
  },
  {
    id: 469,
    word: 'counsel',
    pos: 'noun',
    definition: 'A lawyer or lawyers conducting a case or advising an organization.',
    example: 'The enterprise retained specialized external counsel to navigate European antitrust laws.',
    collocation: 'legal counsel / general counsel',
    category: 'Contracts & Legal'
  },
  {
    id: 470,
    word: 'custody',
    pos: 'noun',
    definition: 'The protective care or guardianship of someone or something.',
    example: 'Corporate bank escrows maintain secure custody of funds until project milestones are verified.',
    collocation: 'safe custody / custody of assets',
    category: 'Contracts & Legal'
  },
  {
    id: 471,
    word: 'damages',
    pos: 'noun',
    definition: 'A sum of money claimed or awarded in compensation for a loss or an injury.',
    example: 'The court awarded $1.2 million in compensatory damages for breach of warranty.',
    collocation: 'sue for damages / award damages',
    category: 'Contracts & Legal'
  },
  {
    id: 472,
    word: 'deed',
    pos: 'noun',
    definition: 'A legal document that is signed and delivered, especially one regarding the ownership of property.',
    example: 'The real estate developer took possession of the property deed upon full mortgage payment.',
    collocation: 'title deed / deed of ownership',
    category: 'Contracts & Legal'
  },
  {
    id: 473,
    word: 'enforceable',
    pos: 'adjective',
    definition: 'Able to be imposed so that it must be complied with; valid by law.',
    example: 'Oral promises made during informal lunches are rarely legally enforceable in court.',
    collocation: 'legally enforceable / enforceable agreement',
    category: 'Contracts & Legal'
  },
  {
    id: 474,
    word: 'escrow',
    pos: 'noun',
    definition: 'A bond, deed, or money kept in the custody of a third party and taking effect only when conditions are met.',
    example: 'The real estate deposit will be held in escrow until all home inspections are concluded.',
    collocation: 'hold in escrow / escrow account',
    category: 'Contracts & Legal'
  },
  {
    id: 475,
    word: 'exempt',
    pos: 'verb',
    definition: 'To free from an obligation or liability imposed on others.',
    example: 'Diplomatic imports are exempt from standard port inspection tariffs.',
    collocation: 'exempt from / tax-exempt',
    category: 'Contracts & Legal'
  },
  {
    id: 476,
    word: 'explicit',
    pos: 'adjective',
    definition: 'Stated clearly and in detail, leaving no room for confusion or doubt.',
    example: 'The agreement gives explicit instructions concerning the return of confidential prototypes.',
    collocation: 'explicit terms / explicit permission',
    category: 'Contracts & Legal'
  },
  {
    id: 477,
    word: 'forfeit',
    pos: 'verb',
    definition: 'To lose or be deprived of property or a right as a penalty for wrongdoing.',
    example: 'Buyers who fail to close by the scheduled date forfeit their initial cash deposit.',
    collocation: 'forfeit a deposit / forfeit one\'s rights',
    category: 'Contracts & Legal'
  },
  {
    id: 478,
    word: 'injunction',
    pos: 'noun',
    definition: 'An authoritative warning or order issued by a court requiring someone to cease an action.',
    example: 'The technology company sought a preliminary injunction to halt the sale of copycat phones.',
    collocation: 'court injunction / seek an injunction',
    category: 'Contracts & Legal'
  },
  {
    id: 479,
    word: 'lease',
    pos: 'noun',
    definition: 'A contract by which one party conveys land or property to another for a specified time.',
    example: 'The company signed a five-year commercial lease for modern office space downtown.',
    collocation: 'sign a lease / commercial lease',
    category: 'Contracts & Legal'
  },
  {
    id: 480,
    word: 'liability',
    pos: 'noun',
    definition: 'Legal responsibility for actions, debts, or damages.',
    example: 'Insurance policies protect small business owners against public liability claims.',
    collocation: 'admit liability / public liability',
    category: 'Contracts & Legal'
  },
  {
    id: 481,
    word: 'lien',
    pos: 'noun',
    definition: 'A right to keep possession of property belonging to another person until a debt is discharged.',
    example: 'The bank placed a lien on the commercial warehouse until the loan was paid in full.',
    collocation: 'place a lien / property lien',
    category: 'Contracts & Legal'
  },
  {
    id: 482,
    word: 'notary',
    pos: 'noun',
    definition: 'A person authorized to perform certain legal formalities, especially to certify contracts.',
    example: 'Both corporate executives must sign the contract in the presence of a licensed notary public.',
    collocation: 'notary public / notarize a document',
    category: 'Contracts & Legal'
  },
  {
    id: 483,
    word: 'obligation',
    pos: 'noun',
    definition: 'An act or course of action to which a person is morally or legally bound; duty.',
    example: 'The supplier has a contractual obligation to replace defective components within 48 hours.',
    collocation: 'contractual obligation / fulfill an obligation',
    category: 'Contracts & Legal'
  },
  {
    id: 484,
    word: 'party',
    pos: 'noun',
    definition: 'A person or group taking part in an agreement or proceeding.',
    example: 'Both parties agreed to the terms outlined in Section 4 of the commercial agreement.',
    collocation: 'third party / party to a contract',
    category: 'Contracts & Legal'
  },
  {
    id: 485,
    word: 'patent',
    pos: 'noun',
    definition: 'A government authority or licence conferring a sole right to exclude others from making an invention.',
    example: 'The biotechnology enterprise holds fifty patents for innovative diagnostic tests.',
    collocation: 'file a patent / patent application',
    category: 'Contracts & Legal'
  },
  {
    id: 486,
    word: 'penalty',
    pos: 'noun',
    definition: 'A punishment imposed for breaking a law, rule, or contract.',
    example: 'The agreement outlines a five-hundred-dollar daily penalty for project completion delays.',
    collocation: 'penalty clause / pay a penalty',
    category: 'Contracts & Legal'
  },
  {
    id: 487,
    word: 'perpetual',
    pos: 'adjective',
    definition: 'Never ending or changing; occurring repeatedly.',
    example: 'The software licence grants users a perpetual right to use version 4.0.',
    collocation: 'perpetual licence / perpetual right',
    category: 'Contracts & Legal'
  },
  {
    id: 488,
    word: 'precedent',
    pos: 'noun',
    definition: 'An earlier event or action that is regarded as an example or guide to be considered in similar circumstances.',
    example: 'The supreme court ruling set an important legal precedent for digital intellectual property.',
    collocation: 'set a precedent / legal precedent',
    category: 'Contracts & Legal'
  },
  {
    id: 489,
    word: 'prosecute',
    pos: 'verb',
    definition: 'To institute legal proceedings against a person or organization.',
    example: 'The company warned it will vigorously prosecute any unauthorized software piracy.',
    collocation: 'prosecute an offender / threaten to prosecute',
    category: 'Contracts & Legal'
  },
  {
    id: 490,
    word: 'redress',
    pos: 'noun',
    definition: 'Remedy or compensation for a wrong or grievance.',
    example: 'Consumers who received tainted batches sought legal redress through a class action.',
    collocation: 'seek redress / legal redress',
    category: 'Contracts & Legal'
  },
  {
    id: 491,
    word: 'rescind',
    pos: 'verb',
    definition: 'To revoke, cancel, or repeal a law, order, or agreement.',
    example: 'The government regulator decided to rescind the firm\'s commercial operating permit.',
    collocation: 'rescind an offer / rescind a contract',
    category: 'Contracts & Legal'
  },
  {
    id: 492,
    word: 'retainer',
    pos: 'noun',
    definition: 'A fee paid in advance to someone, especially an attorney, in order to secure their services.',
    example: 'The corporation pays an annual retainer to ensure immediate access to specialized counsel.',
    collocation: 'on retainer / pay a retainer',
    category: 'Contracts & Legal'
  },
  {
    id: 493,
    word: 'settlement',
    pos: 'noun',
    definition: 'An official agreement intended to resolve a dispute or lawsuit without trial.',
    example: 'The pharmaceutical rivals reached a multimillion-dollar patent settlement.',
    collocation: 'reach a settlement / confidential settlement',
    category: 'Contracts & Legal'
  },
  {
    id: 494,
    word: 'subcontract',
    pos: 'verb',
    definition: 'To employ a firm or person outside one\'s company to do work as part of a larger project.',
    example: 'The primary builder chose to subcontract electrical installation to a local company.',
    collocation: 'subcontract work / subcontract to',
    category: 'Contracts & Legal'
  },
  {
    id: 495,
    word: 'sue',
    pos: 'verb',
    definition: 'To institute legal proceedings against someone.',
    example: 'The property owner threatened to sue for damages caused by the excavation work.',
    collocation: 'sue for damages / threaten to sue',
    category: 'Contracts & Legal'
  },
  {
    id: 496,
    word: 'tenant',
    pos: 'noun',
    definition: 'A person who occupies land or property rented from a landlord.',
    example: 'Commercial tenants are required to carry general liability property insurance.',
    collocation: 'prospective tenant / commercial tenant',
    category: 'Contracts & Legal'
  },
  {
    id: 497,
    word: 'testify',
    pos: 'verb',
    definition: 'To give evidence as a witness in a law court.',
    example: 'The chief financial officer was called to testify regarding the internal bookkeeping records.',
    collocation: 'testify in court / testify under oath',
    category: 'Contracts & Legal'
  },
  {
    id: 498,
    word: 'trademark',
    pos: 'noun',
    definition: 'A symbol, word, or words legally registered as representing a company or product.',
    example: 'The corporate logo is a registered trademark protected under international law.',
    collocation: 'registered trademark / trademark infringement',
    category: 'Contracts & Legal'
  },
  {
    id: 499,
    word: 'validity',
    pos: 'noun',
    definition: 'The state of being legally binding or acceptable.',
    example: 'The judge affirmed the legal validity of the non-solicitation agreement.',
    collocation: 'legal validity / question the validity',
    category: 'Contracts & Legal'
  },
  {
    id: 500,
    word: 'void',
    pos: 'adjective',
    definition: 'Not valid or legally binding.',
    example: 'Any alteration of the printed text without written consent will render this warranty void.',
    collocation: 'null and void / render void',
    category: 'Contracts & Legal'
  }
];
