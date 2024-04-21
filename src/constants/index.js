import { bracket, bigDataSpecialist, mo } from '../assets/images';
import {
  css,
  meals,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  tailwindcss,
  typescript,
  postgreSQL,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: mui,
    name: 'Material-UI',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: express,
    name: 'Express',
    type: 'Backend',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },

  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: postgreSQL,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: redux,
    name: 'Redux',
    type: 'State Management',
  },
];

export const experiences = [
  {
    title: 'Web Development Intern',
    company_name: 'Bracket Technologies',
    icon: bracket,
    iconBg: '#fbc3bc',
    date: 'June 2023 - August 2023',
    points: [
      'Developed and maintained web applications using Bracket programming language.',
      'Collaborated with a team of developers to contribute to the creation of a flight and hotel booking platform during my internship.',
      'Participated in the full development lifecycle, from conceptualization to implementation and testing.',
      'Demonstrated adaptability by quickly grasping project requirements and contributing to the timely delivery of features within the internship period.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Big Data Specialist Programming Community',
    icon: bigDataSpecialist,
    iconBg: '#f6f6f6',
    date: 'August 2023 - Present',
    points: [
      'Spearheading the frontend development for an e-learning website using Next.js, ensuring a modern and responsive user interface.',
      'Implementing dynamic and interactive features to enhance the overall user experience and engagement.',
      'Leveraging Next.js features like server-side rendering for optimized performance and SEO.',
      'Integrating with backend services, APIs, and databases to fetch and display educational content seamlessly.',
      'Conducting regular code reviews and optimizations to maintain code quality and improve website performance.',
      'Ensuring cross-browser compatibility and responsiveness for a smooth user experience across various devices.',
      'Configured custom ESLint and Prettier settings ensuring code consistency and adherence to best practices in collaboration with the development team.',
    ],
  },
];

export const projects = [
  {
    iconUrl: mo,
    theme: 'btn-back-black',
    name: 'Mo',
    description:
      'Mo is a unique programming language designed to challenge conventional programming paradigms. Unlike traditional languages, Mo eschews keywords in favor of symbols, resulting in a syntax that is both minimalist and distinctive.',
    link: 'https://github.com/Mohammad-y-abbass/mo-programming-language',
  },
  {
    iconUrl:
      'https://up.yimg.com/ib/th?id=OIP.fIEcQ7sr3R5f4MEOGSv7WwHaHa&%3Bpid=Api&rs=1&c=1&qlt=95&w=121&h=121',
    theme: 'btn-back-black',
    name: 'rapid-express',
    description:
      'Developed a CLI tool that that automates the creation of a boilerplate Express.js application with a predefined folder structure, middleware setup, error handling, and database configuration.',
    link: 'https://github.com/Mohammad-y-abbass/rapid-express',
  },
  {
    iconUrl: pricewise,
    theme: 'btn-back-green',
    name: 'Finance Tracker',
    description:
      'I developed a comprehensive finance Tracker utilizing the MERN stack, seamlessly integrating MongoDB, Express.js, React, and Node.js. The application offers robust features for tracking expenses and incomes. To provide users with insightful visualizations, I incorporated React-chart.js, enabling the representation of expense and income data through interactive charts. The seamless integration between the frontend and backend components ensures a smooth data flow, allowing for real-time updates. Leveraging MongoDB for efficient data storage and retrieval further optimizes the overall performance of the application. This project not only showcases my proficiency in full-stack development but also highlights my commitment to creating intuitive and visually engaging financial tracking solutions. I also implemeted redux for state management.',
    link: 'https://github.com/Mohammad-y-abbass/Expense-tracker',
  },
  {
    iconUrl: meals,
    theme: 'btn-back-orange',
    name: 'Meals Website',
    description:
      'Crafted a Meals Website featuring comprehensive CRUD operations using Next.js and SQLite. Leveraging the power of Next.js, the site provides a dynamic and responsive user interface. The integration of SQLite ensures efficient and lightweight database operations, allowing users to seamlessly create, read, update, and delete meal entries. This project showcases my proficiency in utilizing modern frameworks and databases to create a performant and user-friendly web application for managing and exploring meal-related content.',
    link: 'https://github.com/Mohammad-y-abbass/meals-app',
  },
];
