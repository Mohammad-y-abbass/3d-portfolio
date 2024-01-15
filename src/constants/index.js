import {
  meta,
  shopify,
  tesla,
  bracket,
  bigDataSpecialist,
} from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
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
      'Developed an advanced filtered search engine, enhancing the e-learning website usability by allowing users to efficiently search and discover educational content based on specific criteria, contributing to an intuitive and personalized learning experience.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
