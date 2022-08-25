import { Lesson } from '../types';

const schedule: Lesson[] = [
  {
    week: 0,
    date: 'Sept. 12',
    format: 'Lecture 0',
    topic: 'Introduction',
    lectureLink: '',
    readingTitle: 'Setup, Overview, Motivation, Git, and the Terminal ',
    readingLink: '/docs/Lessons/Lesson1',
    slides: '',
    assigmentFormat: 'Homework 0',
    assigmentTitle: 'Getting Started',
    assigmentDueDate: 'Sept. 19',
    assigmentLink: '/docs/Assignments/Homework/HW0',
  },
  {
    week: 0,
    date: 'Sept. 14',
    format: 'Lecture 1',
    topic: 'HTML',
    lectureLink: 'https://www.youtube.com/watch?v=iH6YOlW6YtI',
    readingTitle: 'HTML',
    readingLink: '/docs/Lessons/Lesson2',
    slides:
      'https://docs.google.com/presentation/d/1IVrdLRavmnLHiFNZ6iteF6GMqoRJl1JwW1COxscqIsA/edit?usp=sharing',
    assigmentFormat: 'Homework 1',
    assigmentTitle: 'Tribute Page',
    assigmentDueDate: 'Sept. 21',
    assigmentLink: '/docs/Assignments/Homework/HW1',
  },
  {
    week: 1,
    date: 'Sept. 19',
    format: 'Lecture 2',
    topic: 'CSS 1',
    lectureLink: 'https://www.youtube.com/watch?v=K3gbbhbjJJ4',
    readingTitle: 'Introduction to CSS',
    readingLink: '/docs/Lessons/Lesson3',
    slides:
    'https://docs.google.com/presentation/d/1hi1Wj05HK2tiB_Q0Zay5sH114mzBV_6Mxpcxb4tFAO8/edit?usp=sharing',
    assigmentFormat: 'Homework 2',
    assigmentTitle: 'Country Flags',
    assigmentDueDate: 'Sept. 26',
    assigmentLink: '/docs/Assignments/Homework/HW2',
  },

  {
    week: 1,
    date: 'Sept. 21',
    format: 'Lecture 3',
    topic: 'CSS 2',
    lectureLink: 'https://www.youtube.com/watch?v=iqzrTGMYNe0',
    readingTitle: 'Advanced CSS',
    readingLink: '/docs/Lessons/Lesson4',
    slides: 'https://docs.google.com/presentation/d/16adVo8gHZYjOC5GJK9ou3j9iQf088LjYivQeEFJculk/edit?usp=sharing',
    assigmentFormat: 'Project 1',
    assigmentTitle: 'Personal Website',
    assigmentDueDate: 'Sept. 28',
    assigmentLink: '/docs/Assignments/Projects/Project1',
  },
  {
    week: 2,
    date: 'Sept. 26',
    format: 'Lecture 4',
    topic: 'JavaScript 1',
    lectureLink: 'https://www.youtube.com/watch?v=Uuw9_iuFeZs',
    slides: 'https://docs.google.com/presentation/d/1wp8pkY9fQ4THzmCtZImdPN7Y5UAHAhXOcryRkn17g9Y/edit?usp=sharing',
    readingTitle: 'Basic JavaScript',
    readingLink: '/docs/Lessons/Lesson5',
    assigmentFormat: 'Homework 3',
    assigmentTitle: 'Fun With JavaScript',
    assigmentDueDate: 'Oct. 10',
    assigmentLink: '/docs/Assignments/Homework/HW3',
  },

  {
    week: 2,
    date: 'Sept. 28',
    format: 'Lecture 5',
    topic: 'JavaScript 2',
    lectureLink: 'https://www.youtube.com/watch?v=UM3ClbuYmdo',
    slides: 'https://docs.google.com/presentation/d/16gdrUI-P53lplgECG9JXF0Qv8mb0Zb1rOZ6fNPu2HCo/edit?usp=sharing',
    readingTitle: 'DOM',
    readingLink: '/docs/Lessons/Lesson6',
  },
  {
    week: 3,
    date: 'Oct. 3',
    format: 'Lecture 6',
    topic: 'JavaScript 3',
    lectureLink: 'https://www.youtube.com/watch?v=Zlwg-wLmMwo',
    slides: 'https://docs.google.com/presentation/d/1N4-R0It5U2bWUIObQBxhgQhuQRfcvzB1ze_bjp0ghWs/edit?usp=sharing',
    readingTitle: 'Scope and Asynchronous JS',
    readingLink: '/docs/Lessons/Lesson7',
    assigmentFormat: 'Project 2',
    assigmentTitle: 'Calculator',
    assigmentDueDate: 'Oct. 17',
    assigmentLink: '/docs/Assignments/Projects/Project2',
  },

  {
    week: 3,
    date: 'Oct. 5',
    format: 'Lecture 7',
    topic: 'Node',
    lectureLink: '',
    slides: '',
    readingTitle: 'Node.js, NPM, and Yarn',
    readingLink: '/docs/Lessons/Lesson8',
  },
  {
    week: 4,
    date: 'Oct. 10',
    format: 'Lab 1',
    topic: 'Frontend Website Lab',
    lectureLink: '',
  },

  {
    week: 4,
    date: 'Oct. 12',
    format: 'Lecture 8',
    topic: 'React 1',
    lectureLink: '',
    slides: '',
    readingTitle: 'Intro to React',
    readingLink: '/docs/Lessons/Lesson9',
    assigmentFormat: 'Homework 4',
    assigmentTitle: 'Tic-Tac-Toe',
    assigmentDueDate: 'Oct. 19',
    assigmentLink: '/docs/Assignments/Homework/HW4',
  },
  {
    week: 5,
    date: 'Oct. 17',
    format: 'Lecture 9',
    topic: 'React 2',
    lectureLink: '',
    slides: '',
    readingTitle: 'Routing, Styling, and Libraries',
    readingLink: '/docs/Lessons/Lesson10',
  },

  {
    week: 5,
    date: 'Oct. 19',
    format: 'Lecture 10',
    topic: 'Backend 1',
    lectureLink: '',
    readingTitle: 'HTTP, REST, Postman',
    readingLink: '/docs/Lessons/Lesson11',
    assigmentFormat: 'Homework 5',
    assigmentTitle: 'Using the NASA API',
    assigmentDueDate: 'Oct. 26',
    assigmentLink: '/docs/Assignments/Homework/HW5',
  },
  {
    week: 6,
    date: 'Oct. 24',
    format: 'Lab 2',
    topic: 'React Lab / Catchup',
    assigmentFormat: 'Homework 6',
    assigmentTitle: 'Full-Stack Social Media Platform',
    assigmentDueDate: 'Oct. 31',
  },

  {
    week: 6,
    date: 'Oct. 26',
    format: 'Lecture 11',
    topic: 'Backend 2',
    readingTitle: 'MongoDB, Authentication',
    readingLink: '/docs/Lessons/Lesson14',
    assigmentFormat: 'Homework 8',
    assigmentTitle: 'RESTful API Creation and CRUD Operations',
    assigmentDueDate: 'Nov. 2',
  },
  {
    week: 7,
    date: 'Oct. 31',
    format: 'Lecture 12',
    topic: 'Project Introduction',
    readingTitle: '',
    readingLink: '',
    assigmentFormat: 'Project Proposal',
    assigmentTitle: 'Final Project Design & Architecture Proposal',
    assigmentDueDate: 'Nov. 7',
  },
  {
    week: 7,
    date: 'Nov. 2',
    format: 'Lecture 13',
    topic: 'React 3',
    readingTitle: 'React 3',
    readingLink: '/docs/Lessons/Lesson13',
    assigmentFormat: 'Project 4',
    assigmentTitle: 'Final Project',
    assigmentDueDate: 'Nov. 16',
  },
  {
    week: 8,
    date: 'Nov. 7',
    format: 'Lecture 14',
    topic: 'UI/UX 1',
    readingTitle: 'Basic UI/UX',
    readingLink: '/docs/Lessons/Lesson12',
    assigmentFormat: 'Homework 8',
    assigmentTitle: 'Design HW',
    assigmentDueDate: 'Nov. 14',
  },
  {
    week: 8,
    date: 'Nov. 9',
    format: 'Lecture 14',
    topic: 'UI/UX 2',
    readingTitle: 'UI/UX Principles',
    readingLink: '/docs/Lessons/Lesson15',
    assigmentFormat: 'Homework 9',
    assigmentTitle: 'Advanced Design HW',
    assigmentDueDate: 'Nov. 16',
  },
  {
    week: 9,
    date: 'Nov. 14',
    format: 'Lecture 15',
    topic: 'Backend 3',
  },
  {
    week: 9,
    date: 'Nov. 16',
    format: 'Lab 2',
    topic: 'Full Stack Lab',
  },
  {
    week: 10,
    date: 'Nov. 21',
    format: 'Fall Break',
    topic: ''
  },
  {
    week: 10,
    date: 'Nov. 23',
    format: 'Fall Break',
    topic: ''
  },
  {
    week: 11,
    date: 'Nov. 28',
    format: 'Lecture 16',
    topic: 'Cloud & DevOps',
    readingTitle: 'Cloud & DevOps',
    readingLink: '/docs/Lessons/Lesson17',
  },
  {
    week: 11,
    date: 'Nov. 30',
    format: 'Special Lecture',
    topic: '',
  },
];

export default schedule;
