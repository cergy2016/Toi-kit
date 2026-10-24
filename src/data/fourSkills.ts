// Original practice material modeled on the general format (task types and timings) of the TOEIC Speaking and Writing tests.
// Nothing here is copied from ETS. Model answers are examples, not official answers.

export type TaskType = 'readaloud' | 'describe' | 'respond' | 'info' | 'solution' | 'opinion' | 'sentence' | 'email' | 'essay';

export interface Task {
  id: string;
  skill: 'speaking' | 'writing';
  type: TaskType;
  label: string;          // e.g. "Question 4"
  directions: string;
  prep: number;           // seconds to prepare (speaking) or 0
  limit: number;          // seconds to respond / write
  max: number;            // maximum self-score
  text?: string;          // text to read aloud, email, prompt
  spoken?: string;        // text read by the voice
  image?: string;
  imageAlt?: string;
  words?: [string, string];
  info?: { title: string; lines: string[] };
  model: string;
  checklist: string[];
}

const CHECK: Record<TaskType, string[]> = {
  readaloud: ['Every word is clear and easy to understand', 'Stress and intonation sound natural (lists, questions, key words)', 'Steady pace with short pauses at punctuation', 'You finished the whole text'],
  describe: ['You named the main subject and what they are doing', 'You described the place or background', 'You used present continuous correctly (is carrying, are waiting)', 'You kept speaking for the whole time'],
  respond: ['You answered the question directly in the first sentence', 'You gave a reason or a short example', 'Grammar is mostly correct', 'No long silences'],
  info: ['The details (times, places, prices) are correct', 'You answered what was asked, nothing more', 'For the last question, you covered all the key points', 'Speech is smooth'],
  solution: ['You showed you understood the problem', 'You proposed a clear solution', 'You gave a second option or a reason', 'You used a polite, professional tone'],
  opinion: ['You stated your opinion clearly at the start', 'You gave at least two reasons', 'You gave an example', 'You used linking words (first, also, however, for this reason)'],
  sentence: ['You used both given words or phrases, unchanged', 'The sentence is grammatically correct', 'It matches the picture', 'Capital letter and punctuation are correct'],
  email: ['You made at least two requests or asked two questions', 'The tone fits the situation', 'The ideas are well organized', 'Grammar and spelling are accurate'],
  essay: ['The first paragraph states a clear opinion', 'Each reason has an example or explanation', 'The essay is organized (introduction, body, conclusion)', 'You wrote about 300 words', 'Vocabulary and grammar are varied and accurate'],
};

// ---------- SPEAKING ----------
const RA: [string, string][] = [
  ['Airport boarding', 'Good morning, passengers. Flight 482 to Toronto is now ready for boarding at Gate 12. Please have your boarding pass and passport ready. Passengers traveling with small children or needing assistance may board first. Please note that overhead storage space is limited, so we ask you to check large bags at the gate. Thank you for flying with us.'],
  ['Museum welcome', 'Welcome to the Harbor View Museum. Our new exhibition on early navigation opens today on the second floor. Guided tours leave every hour from the main lobby, and audio guides are available in six languages. Photography is allowed, but flash is not permitted. The museum cafe, located next to the gift shop, serves lunch until three o\'clock.'],
  ['Clinic voicemail', 'Thank you for calling Redwood Dental Clinic. Our office is currently closed. Our regular hours are Monday through Friday, from eight in the morning until six in the evening. If you are calling about an emergency, please press one to reach the doctor on duty. To schedule an appointment, leave your name and phone number, and we will call you back within one business day.'],
  ['Parking notice', 'Attention, all employees. Beginning next Monday, the main parking lot will be closed for repaving. During this time, staff may park in the lot behind the Westside Building. A free shuttle bus will run every ten minutes between that lot and the main entrance. We apologize for any inconvenience, and we expect the work to be completed by the end of the month.'],
  ['Weather report', 'Today\'s weather report: expect clear skies this morning, with clouds moving in around noon. Temperatures will reach twenty-two degrees by the afternoon, followed by light rain in the evening. Tomorrow will be cooler and windy, so travelers should check their flight status before leaving home. Now, let\'s turn to the traffic report.'],
  ['New office', 'Our company is pleased to announce the opening of a new regional office in Lisbon. The office will serve customers across southern Europe and will create more than sixty jobs over the next two years. A ceremony will be held on Friday, March ninth, at ten o\'clock. All staff members and their guests are warmly invited to attend.'],
  ['Train announcement', 'Welcome aboard the City Express train to Glasgow. We will be making stops in Leeds, Newcastle, and Edinburgh. Refreshments are available in the dining car, which is located in the middle of the train. Please keep your belongings with you at all times. Passengers are asked to take phone calls in the entrance areas so that others can enjoy a quiet journey.'],
  ['Webinar start', 'Good afternoon, and thank you for joining today\'s webinar on workplace safety. Before we begin, please make sure your microphone is muted. You may type questions in the chat box at any time, and our presenter will answer them at the end of the session. A recording and the slides will be emailed to all participants tomorrow morning.'],
];

const DESC: [string, string, string][] = [
  ['01', 'A woman typing on a laptop at an office desk', 'In this picture, a woman is typing on a laptop at an office desk. She seems to be concentrating on her work. The setting looks like a modern office. I think she is writing an email or a report.'],
  ['02', 'A man in an apron slicing vegetables in a restaurant kitchen', 'A man in an apron is slicing vegetables in a restaurant kitchen. He is holding a knife and looks careful. It looks like he is preparing food for customers. I think the restaurant will open soon.'],
  ['04', 'A man in a hard hat carrying a stack of boxes in a warehouse', 'A man wearing a hard hat is carrying a stack of boxes in a warehouse. He seems to be moving goods from one place to another. This looks like a busy workplace, and I think he is getting an order ready to ship.'],
  ['13', 'Two colleagues looking at a laptop screen together', 'Two colleagues are looking at a laptop screen together. They seem to be discussing something on the screen, maybe a project or a report. They look focused. I think they are working as a team to solve a problem.'],
  ['14', 'Four business people in a meeting while one presents a chart', 'Four business people are in a meeting, and one of them is presenting a chart. The others are listening and looking at it. It looks like a presentation about sales results or a plan. The atmosphere seems serious and professional.'],
  ['16', 'People waiting in line at a ticket counter in a station', 'People are waiting in line at a ticket counter in a station. They seem patient. I think they are buying tickets for a train trip. The station looks busy.'],
  ['17', 'A hotel receptionist handing keys to a guest', 'A hotel receptionist is handing keys to a guest. The receptionist is probably welcoming the guest who has just arrived. It looks like the check-in process. I think the guest is going to stay for a few nights.'],
  ['18', 'Two construction workers studying a blueprint', 'Two construction workers are studying a blueprint. They are probably planning the next step of a building project. They look serious and focused. I think they want to make sure the work is done correctly.'],
  ['19', 'A waiter pouring water for two customers in a restaurant', 'A waiter is pouring water for two customers in a restaurant. The customers are seated at a table and waiting for their meal. The waiter looks polite and professional. I think the customers have just arrived.'],
  ['21', 'Two women pushing shopping carts in a supermarket', 'Two women are pushing shopping carts in a supermarket. They are probably shopping for groceries. They may be comparing products or looking for items on a list. It looks like an ordinary shopping trip.'],
  ['24', 'Travelers with suitcases walking through an airport terminal', 'Travelers with suitcases are walking through an airport terminal. They are probably heading to their gates or to the check-in area. The terminal seems busy. I think many of them are about to board a flight.'],
  ['36', 'Customers seated at an outdoor cafe table with a waiter nearby', 'Customers are seated at an outdoor cafe table, and a waiter is standing nearby. The customers seem to be relaxing and may be ordering drinks. The weather is probably pleasant, since they chose to sit outside.'],
];

// Respond to questions: topic, [q4,q5,q6], models
const RESP: { topic: string; q: [string, string, string]; m: [string, string, string] }[] = [
  { topic: 'Public transportation', q: ['How do you usually travel to work or school?', 'What do you like or dislike about public transportation in your area?', 'Some people say cities should make public transportation free. What is your opinion?'],
    m: ['I usually take the bus to work because it stops near my house. The trip takes about thirty minutes, and I can read during the ride.', 'I like that it is cheaper than driving. However, buses are sometimes late during rush hour, which can be frustrating.', 'I think free public transportation is a good idea in big cities. It would reduce traffic and pollution, and it would help people with low incomes. However, the city would need to find money to improve the service, so the government should plan carefully.'] },
  { topic: 'Shopping online', q: ['How often do you shop online?', 'What kinds of products do you prefer to buy online instead of in stores?', 'Describe a problem you or someone you know has had when buying something online, and how it was solved.'],
    m: ['I shop online about twice a month, mostly when I need something quickly and do not want to go to a crowded store.', 'I prefer to buy books and electronics online because the prices are often lower and there is a bigger choice than in local stores.', 'My friend ordered a jacket in the wrong size. She contacted customer service, and they sent a new one for free within three days. I was impressed, because the company solved the problem quickly and she did not have to pay for the return.'] },
  { topic: 'Restaurants', q: ['How often do you eat at restaurants?', 'What is the most important thing for you when choosing a restaurant?', 'Do you think restaurants should list calories on their menus? Explain.'],
    m: ['I eat at restaurants about once a week, usually on Friday evening with my family.', 'For me, the most important thing is the quality of the food. Price and location matter too, but I will travel farther for a really good meal.', 'I think it is a good idea. Many people want to eat healthily, and calorie information helps them make better choices. Of course, it costs restaurants some money to prepare the information, but customers would probably appreciate it.'] },
  { topic: 'Free time', q: ['What do you usually do on weekends?', 'Do you prefer to spend free time alone or with others? Why?', 'Describe a hobby you would like to try and explain why.'],
    m: ['On weekends I usually sleep a little later, do some housework, and then meet friends for lunch or go for a walk.', 'I prefer to spend free time with others, because I enjoy talking and sharing activities. But sometimes I need quiet time alone to relax.', 'I would like to try photography. I often see beautiful places when I travel, and I would like to capture them properly. It is also a hobby I could practice outdoors, which is good for my health, and I could share my pictures with friends.'] },
  { topic: 'The workplace', q: ['What kind of work do you do, or what would you like to do?', 'What do you enjoy most about your workplace or school?', 'Do you think working from home is better than working in an office? Explain.'],
    m: ['I work as an accountant at a small company. I prepare reports and help customers with tax questions.', 'What I enjoy most is the team. My colleagues are friendly and always ready to help when a project is difficult.', 'I think working from home has advantages, such as saving commuting time and having a quiet space. But I believe a mix is best. Meeting in the office helps teams share ideas quickly and build good relationships, so I would work from home two or three days a week.'] },
  { topic: 'Travel', q: ['When was the last time you took a trip?', 'What do you prefer: a beach vacation or a city trip? Why?', 'What advice would you give to someone visiting your country for the first time?'],
    m: ['I took a trip to the coast last August. We stayed for four days in a small hotel near the beach.', 'I prefer a city trip because there is more to see, such as museums, markets, and restaurants. Beach vacations are relaxing, but I get bored after a few days.', 'I would tell them to try the local food and to use public transportation, because it is cheap and shows you the real life of the city. I would also recommend learning a few basic words in the local language, because people appreciate it very much.'] },
  { topic: 'Technology', q: ['What kind of phone or computer do you use every day?', 'How has technology changed the way you learn or work?', 'Some people think children should not use smartphones until they are teenagers. What do you think?'],
    m: ['I use a laptop for work and a smartphone for everything else, such as messages, maps, and photos.', 'Technology has made learning easier. I can take online courses and watch tutorials whenever I have time, which saves a lot of travel.', 'I partly agree. Young children can be distracted by phones and may spend too little time playing outside. However, phones also help parents stay in contact. I think parents should set clear rules about when and how long children use them.'] },
  { topic: 'Health and fitness', q: ['How often do you exercise?', 'What do you do to stay healthy?', 'Should companies offer gym memberships to employees? Why or why not?'],
    m: ['I exercise about three times a week, usually by running in the park or going to a short fitness class.', 'I try to sleep at least seven hours, eat fresh vegetables, and drink plenty of water. I also walk to work when the weather is good.', 'I think it is a good idea. Healthy employees are usually happier and take fewer sick days, which benefits the company. Gym memberships can also help colleagues meet each other outside of work. The cost should be shared, though, so that the program stays affordable.'] },
];

// Respond using information provided
const INFO: { title: string; lines: string[]; q: [string, string, string]; m: [string, string, string] }[] = [
  { title: 'Hartwell Business Forum, June 12', lines: ['9:00 Registration (Lobby)', '9:30 Opening speech, Dr. Lena Ortiz (Hall A)', '10:30 Workshop: Digital Marketing, Mr. Paul Reid (Room 2)', '12:00 Lunch (Garden Terrace)', '1:30 Panel: The Future of Retail (Hall A)', '3:30 Networking session (Lobby)'],
    q: ['What time does the opening speech begin, and who is giving it?', 'I will be arriving at noon. What will be happening, and where?', 'I am interested in marketing and retail. Which sessions should I attend?'],
    m: ['The opening speech begins at nine thirty, and it will be given by Dr. Lena Ortiz in Hall A.', 'At noon, there will be lunch on the Garden Terrace.', 'You should attend the Digital Marketing workshop with Mr. Paul Reid at ten thirty in Room 2, and then the panel on the Future of Retail at one thirty in Hall A.'] },
  { title: 'Itinerary for Mr. Alan Brooks', lines: ['Monday, May 5: Depart Paris 7:45 a.m. / Arrive London 8:10 a.m.', 'Tuesday, May 6: 10:00 a.m. Meeting with Ms. Davies, Kent Trading', 'Tuesday, May 6: 2:00 p.m. Factory tour', 'Wednesday, May 7: Depart London 6:30 p.m. / Arrive Paris 8:55 p.m.'],
    q: ['When does Mr. Brooks leave Paris, and when does he arrive in London?', 'What is he doing on Tuesday afternoon?', 'Can you summarize what Mr. Brooks will be doing during his trip?'],
    m: ['He leaves Paris at seven forty-five on Monday morning, and he arrives in London at eight ten.', 'On Tuesday afternoon, he will take a tour of the factory at two o\'clock.', 'Mr. Brooks will fly to London on Monday, meet Ms. Davies at Kent Trading on Tuesday morning, tour the factory that afternoon, and fly back to Paris on Wednesday evening.'] },
  { title: 'Fit Zone Class Schedule', lines: ['Monday 7:00 p.m. Yoga (Studio 1, instructor Rita)', 'Wednesday 7:00 a.m. Spin (Studio 2, instructor Marco)', 'Wednesday 6:00 p.m. Boxing (Studio 3)', 'Saturday 9:00 a.m. Family swim (Pool)', 'Classes are free for members. Guests pay $8 per class.'],
    q: ['What classes are offered on Wednesday?', 'How much would a guest pay for a class?', 'I finish work at six thirty and I am new to exercise. Which class would you recommend, and why?'],
    m: ['On Wednesday, there is a spin class at seven in the morning in Studio 2, and a boxing class at six in the evening in Studio 3.', 'A guest would pay eight dollars per class.', 'I would recommend the Monday yoga class at seven p.m. It starts after you finish work, so you will have time to arrive, and yoga is gentle, so it is a good way for a beginner to start.'] },
  { title: 'New Employee Schedule', lines: ['Monday 9:00 a.m. Orientation, Human Resources (Room 101)', 'Monday 10:30 a.m. IT account setup (Room 204)', 'Monday 12:30 p.m. Lunch with your team', 'Tuesday 9:00 a.m. Safety training (Training Center)', 'Tuesday 2:00 p.m. Software workshop (Room 305)'],
    q: ['Where is the orientation held, and at what time?', 'What happens on the second day?', 'Briefly describe what new employees should expect during their first two days.'],
    m: ['The orientation is in Room 101, and it begins at nine o\'clock on Monday.', 'On the second day, there is safety training at nine in the Training Center, and a software workshop at two in Room 305.', 'During the first two days, new employees will attend an orientation, set up their computer accounts with IT, have lunch with their team, and then complete safety training and a software workshop.'] },
  { title: 'Library Open House, Saturday, May 18', lines: ['10:00 Story time for children (Reading Room)', '11:30 Book sale, every book $2 (Entrance Hall)', '1:00 Author talk with Karen Lee (Auditorium)', '2:30 Computer skills class for seniors (Lab)'],
    q: ['What time is the author talk, and where is it?', 'How much do the books cost at the sale?', 'I have two children, aged five and eight. What would you suggest we do?'],
    m: ['The author talk is at one o\'clock in the Auditorium.', 'All the books at the sale cost two dollars.', 'With a five-year-old and an eight-year-old, I would suggest starting with story time at ten in the Reading Room. Then you can visit the book sale at eleven thirty, where every book costs only two dollars, and let the children choose a few.'] },
];

const SOL: { role: string; spoken: string; model: string }[] = [
  { role: 'You are the facilities coordinator.', spoken: 'Hello, this is David Lee from Sales. I booked Conference Room B for Thursday at two o\'clock for an important client presentation, but I heard that the projector in that room is not working. The presentation cannot be done without it. Please call me back to tell me how you can help.',
    model: 'Hello Mr. Lee, thank you for calling about the projector. I understand how important your client presentation is. I suggest two options. First, we can move your meeting to Conference Room C on the same floor, which has a working projector and is free on Thursday at two. Second, I can ask the IT team to bring a portable projector to Room B by one thirty. I recommend the first option because it is simpler. Please let me know which you prefer, and I will arrange it right away.' },
  { role: 'You are the client who ordered lunch for a company event.', spoken: 'Hi, this is Jenna from Green Fork Catering. I am calling about the lunch order for your company event on Friday. We have had a problem with our delivery truck, and we cannot deliver until one p.m., which is an hour after your event begins. I am very sorry. Could you let me know what you would like to do?',
    model: 'Hello Jenna, thank you for letting me know. A delayed lunch would be a problem, so I have a suggestion. Could you send the food by taxi or with a second driver, so that it arrives by noon? If that is not possible, I can ask a nearby restaurant to provide sandwiches for the first hour, and you could still deliver your order at one o\'clock, with a discount for the delay. Please call me back so we can decide quickly.' },
  { role: 'You work in a computer store.', spoken: 'Hello, this is Mr. Alvarez. I ordered a laptop from your store two weeks ago, and it still has not arrived. The tracking page says the package is stuck at a warehouse. I need the laptop for work next week. Please call me back and tell me what you can do.',
    model: 'Hello Mr. Alvarez, I am sorry about the delay. I have two solutions. First, I can contact the warehouse today and ask for an express shipment, which should reach you in two days at no extra cost. If it does not arrive by Friday, I can offer you the same laptop for pickup at our nearest store, or a full refund. I will call you tomorrow morning with news. Again, I apologize for the problem.' },
  { role: 'You are Priya\'s colleague.', spoken: 'Hi, this is Priya. I am supposed to present the sales report at tomorrow\'s meeting, but I am sick and cannot come in. The meeting is at nine and the report is on my computer. Could you tell me how we should handle this?',
    model: 'Hi Priya, I am sorry you are ill, please rest. For tomorrow, I suggest that you email me the report tonight, and I will present it at the meeting. If you feel well enough, you could also join by video call to answer questions. Alternatively, we can ask our manager to move your presentation to next week. Let me know which you prefer, and I will tell the team.' },
  { role: 'You are a guest with a reservation.', spoken: 'Good evening, this is Tom at the Lakeside Hotel. We have a problem with your booking for next weekend. The hotel is overbooked because of a large sports event, and we do not have a room for you on Saturday night. I am very sorry about this. Please call me back as soon as possible.',
    model: 'Hello Tom, thank you for telling me. Since I need a room on Saturday, could you find me a place at a nearby hotel of the same quality? I would like your hotel to pay the difference in price, and to provide transport. Alternatively, I could move my stay by one day to Sunday, if you have a room. Please call me with the options.' },
  { role: 'You are an employee who signed up for training.', spoken: 'Hello, this is Ms. Kim from the Training Department. The software training you signed up for on Tuesday has been cancelled because the trainer is ill. The next available session is in three weeks, but you need to learn the system before the new project starts on Monday. Please call and let me know what you would like to do.',
    model: 'Hello Ms. Kim, thank you for the call. Because I need to learn the system before Monday, could I attend a short private session with another trainer or with a colleague who already knows the software? If that is not possible, I would like to receive the training videos and manual today so that I can study over the weekend. I could also ask my manager to help me during the first week.' },
];

const OPN: { q: string; m: string }[] = [
  { q: 'Some people believe that working from home is more productive than working in an office. Do you agree or disagree? Give reasons for your opinion.', m: 'I agree that working from home can be more productive. At home, I have fewer interruptions, so I can concentrate on difficult tasks. Also, I save about an hour each day that I would spend commuting, and I can use that time to work or rest. However, I think some office time is useful, because meeting colleagues helps us share ideas. For this reason, I think the best system is working from home most days and visiting the office once or twice a week.' },
  { q: 'Do you think it is better to live in a big city or in a small town? Give reasons for your opinion.', m: 'I prefer living in a big city. First, there are more job opportunities, which is important for building a career. Second, there is better public transportation, so I do not need a car. For example, I can reach any part of the city by train in about thirty minutes. A small town is quieter, but I find it limited, especially for entertainment and shopping. That is why I choose a big city.' },
  { q: 'Some people prefer to study alone. Others prefer to study in a group. Which do you prefer, and why?', m: 'I prefer studying in a group. When I study with others, I can ask questions immediately, and explaining things to my friends helps me remember them. For example, before my last exam, my study group went through the difficult topics together, and I understood them much better. However, I also study alone to review details, because it is quieter. Overall, group study is more effective for me.' },
  { q: 'Do you agree or disagree: companies should give employees a four-day work week. Give reasons for your opinion.', m: 'I agree that companies should offer a four-day work week. Employees would have more time to rest, so they would be less stressed and more productive on the days they work. In addition, companies could save money on electricity and office supplies. Some trials in different countries showed that productivity stayed the same. Of course, not every business can do this, for example hospitals, but for office jobs I think it is a good idea.' },
  { q: 'Is it more important for a job to have a high salary or to be enjoyable? Give reasons for your opinion.', m: 'I believe that an enjoyable job is more important than a high salary. If you dislike your work, you will feel tired and unhappy even when you earn a lot. A friend of mine left a well-paid job in banking for a job in education, and she says she is much happier. Of course, salary matters because everyone needs to pay bills, but once you earn enough to live comfortably, enjoyment matters more.' },
  { q: 'Do you think children should learn a foreign language in primary school? Why or why not?', m: 'I think children should learn a foreign language in primary school. Young children learn pronunciation and vocabulary more easily than adults. Also, speaking another language opens doors later, for example in jobs and travel. In my country, students who start English early are usually more confident when they are older. The only requirement is that the lessons should be fun, with songs and games, so that children enjoy learning.' },
  { q: 'Some people think online learning is as good as classroom learning. Do you agree or disagree? Give reasons.', m: 'I partly agree. Online learning is flexible and often cheaper, which is excellent for working adults. I took an online course last year and finished it in the evenings. However, in a classroom, teachers can see when students are confused and respond immediately, and students can talk with each other. For these reasons, I think online learning is good, but it is not always as effective, especially for beginners.' },
  { q: 'Is it better to travel alone or with a group? Give reasons for your opinion.', m: 'I prefer traveling with a group, even a small one. It is safer, and you can share the cost of hotels and taxis. Also, it is more fun to share memories with friends. For example, on my last trip, my friends and I helped each other when we missed a train. Traveling alone is more flexible, but I find it lonely, so I choose groups.' },
];

// ---------- WRITING ----------
const SENT: [string, [string, string], string][] = [
  ['01', ['laptop', 'while'], 'She is typing on a laptop while sitting at her desk.'],
  ['02', ['vegetables', 'because'], 'The man is slicing vegetables in the kitchen because dinner service starts soon.'],
  ['03', ['paper', 'before'], 'She places a sheet of paper on the photocopier before making copies.'],
  ['04', ['boxes', 'warehouse'], 'The worker is carrying a stack of boxes through the warehouse.'],
  ['05', ['plants', 'so that'], 'She is watering the plants so that they will stay healthy.'],
  ['06', ['phone', 'near'], 'The man is talking on his phone near the window.'],
  ['07', ['customer', 'after'], 'The employee hands the customer a paper bag after he pays.'],
  ['08', ['wall', 'roller'], 'He is painting the wall with a roller.'],
  ['09', ['microscope', 'because'], 'The scientist looks through a microscope because she is examining a sample.'],
  ['10', ['car', 'while'], 'The mechanic is leaning over the open hood while he checks the car.'],
  ['11', ['document', 'before'], 'She reads the document carefully before she signs it.'],
  ['12', ['dish', 'counter'], 'The chef places a plated dish on the kitchen counter.'],
  ['13', ['together', 'screen'], 'Two colleagues look at the screen together.'],
  ['14', ['chart', 'while'], 'One person presents a chart while the others listen.'],
  ['15', ['office', 'after'], 'The two men shake hands in the office lobby after their meeting.'],
];

const EMAIL: { from: string; subject: string; body: string; role: string; model: string }[] = [
  { from: 'Melissa Grant, Customer Service', subject: 'Your recent order', role: 'Respond as the customer.', body: 'Thank you for ordering the Lumen desk lamp. Unfortunately, the item you chose is out of stock. We can send a similar model or give you a full refund. Please tell us what you prefer.',
    model: 'Dear Ms. Grant, thank you for your message. I would prefer the similar model, if it has the same size and brightness. Could you send me its description and tell me the price? Also, could you confirm how long delivery will take? I need the lamp before the end of the month. If the price is higher, please let me know before you ship it. Thank you for your help.' },
  { from: 'Daniel Ross, Human Resources', subject: 'Interview schedule', role: 'Respond as the job applicant.', body: 'We would like to invite you for an interview for the Marketing Assistant position. Are you available next Tuesday at 10 a.m.? Please confirm, and tell us if you need any special arrangements.',
    model: 'Dear Mr. Ross, thank you for the invitation. I am available next Tuesday at 10 a.m. Could you tell me how long the interview will take and who I will meet? Also, please let me know where to park and which documents I should bring. I look forward to meeting you. Best regards.' },
  { from: 'Peter Hall, Lakeside Hotel', subject: 'Your reservation', role: 'Respond as the hotel guest.', body: 'Your room for April 14 to 17 is confirmed. Check-in starts at 3 p.m. Breakfast is served from 6:30 to 10:00. Please let us know your expected arrival time.',
    model: 'Dear Mr. Hall, thank you for confirming my reservation. I expect to arrive at about 1 p.m. Would it be possible to check in earlier, or to leave my luggage at the front desk? I would also like to ask whether the hotel has a shuttle from the train station. Thank you very much.' },
  { from: 'Sandra Moore, Facilities Manager', subject: 'Office renovation', role: 'Respond as an employee on the third floor.', body: 'Next month, the third floor will be renovated. Employees will work from the second floor for two weeks. Please tell us whether you need any special equipment during that time.',
    model: 'Dear Ms. Moore, thank you for the notice. I will need a second monitor and a docking station for my laptop. Could you also tell me which desks on the second floor will be available for our team, so that we can sit together? Finally, will the printer on the second floor be connected to our network? Thank you.' },
  { from: 'City Library', subject: 'Overdue book notice', role: 'Respond as the library member.', body: 'Our records show that the book "Modern Design" is two weeks overdue. Please return it as soon as possible. A late fee may apply.',
    model: 'Dear Sir or Madam, I am sorry for the delay. I will return the book tomorrow morning. Could you tell me the exact amount of the late fee? Also, would it be possible to waive the fee, since this is the first time I have returned a book late? Thank you for your understanding.' },
  { from: 'Karen Lopez, Training Coordinator', subject: 'Software workshop on May 3', role: 'Respond as an employee who will attend.', body: 'Our new software workshop will take place on May 3 from 9:00 to 12:00. Please reply with any questions about the schedule or materials.',
    model: 'Dear Ms. Lopez, thank you for organizing the workshop. Will the training take place in person or online? Could you send us the materials before May 3 so we can prepare? Also, please tell us whether lunch will be provided after the session. Thank you.' },
  { from: 'Mr. Evans, Property Manager', subject: 'Apartment inspection', role: 'Respond as the tenant.', body: 'We plan to inspect the apartments next Friday between 9 and 11 a.m. Please tell us if this time is acceptable.',
    model: 'Dear Mr. Evans, I will be at work on Friday morning. Could the inspection take place in the afternoon, after 2 p.m.? If that is not possible, could my neighbor let you in? Please also tell me if I need to prepare anything. Thank you for letting me know.' },
  { from: 'Global Retail Summit Team', subject: 'Registration confirmed', role: 'Respond as the attendee.', body: 'Thank you for registering for the Global Retail Summit. We are collecting dietary requirements and hotel preferences. Please send us your details.',
    model: 'Dear Summit Team, thank you for the confirmation. I am vegetarian and would like meals without meat. I would also like a hotel near the conference center. Could you send me a list of recommended hotels with prices? And could you tell me whether a shuttle bus runs between the hotels and the venue? Thank you.' },
];

const ESS: { q: string; m: string }[] = [
  { q: 'Do you agree or disagree: it is better for companies to hire experienced workers than to train new graduates? Give reasons and examples to support your opinion.',
    m: 'I disagree with the idea that companies should always hire experienced workers. In my opinion, hiring new graduates and training them is often the better choice.\n\nFirst, new graduates are usually more flexible. They have not developed fixed habits, so they learn the methods of the company quickly. For example, a friend of mine joined a software company straight from university. In six months, she had learned the company\'s tools and became an important member of the team.\n\nSecond, graduates cost less. Experienced workers ask for high salaries, while graduates accept lower pay at the start. A company can use this money to train them. After a year or two, the company has a skilled employee who also feels loyal, because the company invested in him or her. This reduces the cost of hiring new people again.\n\nThird, graduates bring new ideas. They have just studied the latest technologies and ways of thinking. A company that only hires experienced workers may continue to do things the old way. In contrast, young employees often suggest improvements that save time or money.\n\nOf course, experienced workers have advantages. They can start working immediately, and they need little supervision. For urgent projects, this is very valuable. However, companies can solve this by having a few experienced employees who train the graduates.\n\nIn conclusion, I believe hiring graduates is a wise long-term decision. They learn fast, they cost less, and they bring fresh ideas. With good training, they can become even better than experienced workers.' },
  { q: 'Some people prefer to work for a large company. Others prefer a small company. Which do you prefer, and why? Give reasons and examples to support your opinion.',
    m: 'I prefer to work for a small company. Although large companies offer security, I believe small companies give more opportunities to learn and grow.\n\nThe first reason is that employees in a small company do many different tasks. For example, my cousin works for a company of twenty people. In his first year, he worked in sales, helped with the website, and met customers. In a large company, he would probably have done only one small task. This variety helped him develop many skills quickly.\n\nThe second reason is that relationships are closer. In a small company, everyone knows each other, including the manager. This makes communication easy, and decisions are made fast. If you have an idea, you can talk to the owner directly and see it become real within weeks. In a large company, an idea may have to pass through many departments, and it may never be heard.\n\nThe third reason is that the atmosphere is usually friendlier. People help each other and celebrate successes together. I feel that this makes work more enjoyable, and I am more motivated when I feel that my contribution matters.\n\nHowever, I recognize that large companies have clear advantages. They usually pay higher salaries, offer more benefits, and provide formal training. They are also more stable, so employees worry less about losing their jobs. For someone who values security, a large company is a good choice.\n\nIn conclusion, I prefer a small company because it offers variety, close relationships, and a friendly atmosphere. These things are more important to me than a high salary or a famous name.' },
  { q: 'Do you think employees should be allowed to choose their own working hours? Give reasons and examples.', m: 'Outline: Position: yes, with some limits. Reason 1: people have different energy peaks, so flexible hours raise productivity (example: an early riser who finishes the hardest work by noon). Reason 2: flexibility helps parents and people with long commutes (example: starting at 10 to avoid rush hour). Counterpoint: teams need shared hours for meetings, so set core hours, for example 10 to 3. Conclusion: flexible hours with core hours give the best balance.' },
  { q: 'Is it better for students to study abroad or in their own country? Give reasons and examples.', m: 'Outline: Position: study abroad, if the student can afford it. Reason 1: you improve the language and learn to be independent (example: a friend who became fluent in one year). Reason 2: international contacts help your career. Counterpoint: cost and homesickness. Solution: scholarships and short exchange programs. Conclusion: the benefits outweigh the costs.' },
  { q: 'Should companies be required to reduce the amount of packaging they use? Give reasons and examples.', m: 'Outline: Position: yes. Reason 1: packaging creates huge amounts of waste and pollution (example: plastic bags and boxes in online delivery). Reason 2: less packaging saves money on materials and shipping. Counterpoint: packaging protects products and keeps food fresh, so rules should allow recyclable materials. Conclusion: reduce, reuse, recycle should be a legal duty.' },
  { q: 'At work, is it more important to be good at teamwork or good at working alone? Give reasons and examples.', m: 'Outline: Position: teamwork is more important in most jobs. Reason 1: most projects need several skills (example: a product launch needs design, sales and support). Reason 2: teams solve problems faster and catch mistakes. Counterpoint: some tasks, such as writing a report, need focus alone. Conclusion: both are useful, but teamwork matters more for career success.' },
  { q: 'Do you agree or disagree: cities should limit the number of private cars in the city center? Give reasons and examples.', m: 'Outline: Position: agree. Reason 1: fewer cars means less traffic and cleaner air (example: cities that created low-emission zones). Reason 2: space can be used for parks, cafes and bicycle lanes. Counterpoint: people with disabilities and delivery workers need access, so exceptions are needed. Condition: good public transportation first. Conclusion: limits improve life in the center.' },
  { q: 'Some people think social media has improved communication between colleagues. Do you agree or disagree? Give reasons and examples.', m: 'Outline: Position: partly agree. Reason 1: instant messaging makes quick questions easy, especially across offices (example: a team in two countries). Reason 2: it helps people share files and news quickly. Counterpoint: constant messages interrupt work and can cause misunderstandings. Solution: rules about when to use chat and when to meet. Conclusion: useful tool if used with limits.' },
  { q: 'What is the most important quality of a good manager? Give reasons and examples to support your answer.', m: 'Outline: Position: good communication. Reason 1: clear instructions avoid mistakes (example: a manager who writes down goals each week). Reason 2: listening builds trust, so employees share problems early. Counterpoint: other qualities, such as knowledge, matter, but without communication they are not shared. Conclusion: communication is the base of good management.' },
  { q: 'Do you think learning English is necessary for career success in your country? Give reasons and examples.', m: 'Outline: Position: yes, for most international careers. Reason 1: many companies work with foreign partners in English (example: emails and meetings). Reason 2: better jobs and higher salaries often require English. Counterpoint: some local jobs do not need it. Conclusion: English is not required for everyone, but it opens many doors.' },
];

// ---------- BUILDERS ----------
const sp = (o: Omit<Task, 'skill' | 'checklist'>): Task => ({ ...o, skill: 'speaking', checklist: CHECK[o.type] });
const wr = (o: Omit<Task, 'skill' | 'checklist'>): Task => ({ ...o, skill: 'writing', checklist: CHECK[o.type] });

export const READ_ALOUD: Task[] = RA.map(([title, text], i) => sp({
  id: `ra${i + 1}`, type: 'readaloud', label: 'Read a text aloud', directions: 'Read the text aloud. You have 45 seconds to prepare and 45 seconds to read.',
  prep: 45, limit: 45, max: 3, text, model: `Model delivery for "${title}": read at a steady pace, pause briefly at each full stop, stress the key information (numbers, places, times) and let your voice rise slightly on items in a list.` }));

export const DESCRIBE: Task[] = DESC.map(([n, alt, model], i) => sp({
  id: `de${i + 1}`, type: 'describe', label: 'Describe a picture', directions: 'Describe the picture in as much detail as you can. You have 30 seconds to prepare and 45 seconds to speak.',
  prep: 30, limit: 45, max: 3, image: `img/p1-${n}.jpg`, imageAlt: alt, model }));

export const RESPOND: Task[][] = RESP.map((s, i) => [0, 1, 2].map(k => sp({
  id: `rq${i + 1}-${k + 4}`, type: 'respond', label: `Respond to questions: question ${k + 4}`,
  directions: `Imagine a market researcher is asking you questions about: ${s.topic}. Answer as if you are speaking on the phone. ${k < 2 ? 'You have 15 seconds.' : 'You have 30 seconds.'}`,
  prep: 0, limit: k < 2 ? 15 : 30, max: 3, spoken: s.q[k], text: s.q[k], model: s.m[k] })));

export const INFO_SETS: Task[][] = INFO.map((s, i) => [0, 1, 2].map(k => sp({
  id: `if${i + 1}-${k + 7}`, type: 'info', label: `Respond using information: question ${k + 7}`,
  directions: `Read the information for 30 seconds, then answer the question. ${k < 2 ? 'You have 15 seconds.' : 'You have 30 seconds.'}`,
  prep: k === 0 ? 30 : 0, limit: k < 2 ? 15 : 30, max: 3, info: { title: s.title, lines: s.lines }, spoken: s.q[k], text: s.q[k], model: s.m[k] })));

export const SOLUTION: Task[] = SOL.map((s, i) => sp({
  id: `so${i + 1}`, type: 'solution', label: 'Propose a solution',
  directions: `Listen to the voicemail message. ${s.role} Describe the problem and propose a solution. You have 30 seconds to prepare and 60 seconds to speak.`,
  prep: 30, limit: 60, max: 5, spoken: s.spoken, text: s.spoken, model: s.model }));

export const OPINION: Task[] = OPN.map((s, i) => sp({
  id: `op${i + 1}`, type: 'opinion', label: 'Express an opinion', directions: 'Give your opinion about the topic. You have 15 seconds to prepare and 60 seconds to speak.',
  prep: 15, limit: 60, max: 5, spoken: s.q, text: s.q, model: s.m }));

export const SENTENCE: Task[] = SENT.map(([n, w, model], i) => wr({
  id: `se${i + 1}`, type: 'sentence', label: 'Write a sentence based on a picture', directions: 'Write ONE sentence about the picture. Use both words or phrases, in any order. You may change the form of a word (for example, a verb ending).',
  prep: 0, limit: 0, max: 3, image: `img/p1-${n}.jpg`, imageAlt: '', words: w, model }));

export const EMAILS: Task[] = EMAIL.map((e, i) => wr({
  id: `em${i + 1}`, type: 'email', label: 'Respond to a written request', directions: `Read the email. ${e.role} In your reply, ask at least two questions or make at least two requests. You have 10 minutes.`,
  prep: 0, limit: 600, max: 4, text: `From: ${e.from}\nSubject: ${e.subject}\n\n${e.body}`, model: e.model }));

export const ESSAYS: Task[] = ESS.map((e, i) => wr({
  id: `es${i + 1}`, type: 'essay', label: 'Write an opinion essay', directions: 'Read the question and write an essay of at least 300 words. Give your opinion and support it with reasons and examples. You have 30 minutes.',
  prep: 0, limit: 1800, max: 5, text: e.q, model: e.m }));

export const SENTENCE_BLOCK_SECONDS = 480;

// ---------- TEST BUILDERS ----------
export interface Page { id: string; title: string; seconds: number; tasks: Task[] }

export function speakingTest(n: number): Page[] {
  const pick = <T,>(a: T[], k: number) => a[(n + k) % a.length];
  const tasks: Task[] = [
    pick(READ_ALOUD, 0), pick(READ_ALOUD, 4), pick(DESCRIBE, 0),
    ...pick(RESPOND, 0), ...pick(INFO_SETS, 0), pick(SOLUTION, 0), pick(OPINION, 0),
  ];
  return tasks.map((t, i) => ({ id: `${t.id}-${i}`, title: `Question ${i + 1} of 11`, seconds: t.prep + t.limit, tasks: [t] }));
}

export function writingTest(n: number): Page[] {
  const sents = [0, 1, 2, 3, 4].map(k => SENTENCE[(n * 5 + k) % SENTENCE.length]);
  return [
    { id: `ws${n}`, title: 'Questions 1 to 5: write a sentence based on a picture', seconds: SENTENCE_BLOCK_SECONDS, tasks: sents },
    { id: `we1${n}`, title: 'Question 6', seconds: 600, tasks: [EMAILS[(n * 2) % EMAILS.length]] },
    { id: `we2${n}`, title: 'Question 7', seconds: 600, tasks: [EMAILS[(n * 2 + 1) % EMAILS.length]] },
    { id: `wes${n}`, title: 'Question 8', seconds: 1800, tasks: [ESSAYS[n % ESSAYS.length]] },
  ];
}

export const SPEAKING_TEST_COUNT = INFO.length;
export const WRITING_TEST_COUNT = 3;

export const DRILLS: { key: string; skill: 'speaking' | 'writing'; title: string; hint: string; pages: () => Page[] }[] = [
  { key: 'ra', skill: 'speaking', title: 'Read a text aloud (Q1-2)', hint: `${READ_ALOUD.length} texts`, pages: () => READ_ALOUD.map(t => ({ id: t.id, title: t.label, seconds: t.prep + t.limit, tasks: [t] })) },
  { key: 'de', skill: 'speaking', title: 'Describe a picture (Q3)', hint: `${DESCRIBE.length} photos`, pages: () => DESCRIBE.map(t => ({ id: t.id, title: t.label, seconds: t.prep + t.limit, tasks: [t] })) },
  { key: 'rq', skill: 'speaking', title: 'Respond to questions (Q4-6)', hint: `${RESPOND.length} sets of 3`, pages: () => RESPOND.flat().map(t => ({ id: t.id, title: t.label, seconds: t.limit, tasks: [t] })) },
  { key: 'if', skill: 'speaking', title: 'Respond using information (Q7-9)', hint: `${INFO_SETS.length} sets of 3`, pages: () => INFO_SETS.flat().map(t => ({ id: t.id, title: t.label, seconds: t.prep + t.limit, tasks: [t] })) },
  { key: 'so', skill: 'speaking', title: 'Propose a solution (Q10)', hint: `${SOLUTION.length} voicemails`, pages: () => SOLUTION.map(t => ({ id: t.id, title: t.label, seconds: t.prep + t.limit, tasks: [t] })) },
  { key: 'op', skill: 'speaking', title: 'Express an opinion (Q11)', hint: `${OPINION.length} topics`, pages: () => OPINION.map(t => ({ id: t.id, title: t.label, seconds: t.prep + t.limit, tasks: [t] })) },
  { key: 'se', skill: 'writing', title: 'Sentence from a picture (Q1-5)', hint: `${SENTENCE.length} pictures, 5 per round`, pages: () => [0, 1, 2].map(n => ({ id: `ws${n}`, title: `Round ${n + 1}`, seconds: SENTENCE_BLOCK_SECONDS, tasks: SENTENCE.slice(n * 5, n * 5 + 5) })) },
  { key: 'em', skill: 'writing', title: 'Respond to an email (Q6-7)', hint: `${EMAILS.length} emails`, pages: () => EMAILS.map(t => ({ id: t.id, title: t.label, seconds: 600, tasks: [t] })) },
  { key: 'es', skill: 'writing', title: 'Opinion essay (Q8)', hint: `${ESSAYS.length} questions`, pages: () => ESSAYS.map(t => ({ id: t.id, title: t.label, seconds: 1800, tasks: [t] })) },
];

// Estimated 0-200 scale (linear). This is an approximation, not an ETS score.
export function estimate200(raw: number, max: number): number {
  if (!max) return 0;
  return Math.round(((raw / max) * 200) / 10) * 10;
}
