import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `
My journey with coding started back in 2021 and since then I’ve specialised in building and maintaining diverse web applications. I am proficient in JavaScript, NodeJS, TypeScript, Python. With frontend skills in React, React Native, Angular, and databases like MySQL, SQLite, PostgreSQL and MongoDB. I am also familiar with RESTful APIs, message brokers like Kafka, containerization with Docker and orchestrator Kubernetes.`;

export const ABOUT_TEXT = "I hold a Bachelor's degree in Software Engineering from Software University in Sofia, where I graduated with a perfect 6.00 GPA, as well as a Bachelor's degree in Finance. Over the course of my career, I've worked with a diverse range of technologies including both frontend and backend. I thrive in collaborative environments where I can contribute to team success while also learning from others. Solving complex problems to deliver high-quality solutions is what drives me, and I continuously seek out opportunities to innovate and enhance my skills.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Developer",
    company: "Full-Stack",
    description: `I have worked on multiple projects that highlight my skills. I have self-handedly created a Crypto Platofrm called Crypto Easy, in which I integrated CoinGecko Api for live crypto data and also added NFT creation. I have created a live marketplace for games called GameMarket and also a Crypto Monitor App (React + ethers.js) app which I've integrated with Metamask wallet. One of my recent projects is CineHub (React Native + Laravel) film app for ios and android.`,
    technologies: ["Node.js", "React.js", "Express.js", "mongoDB", "MySQL"],
  },
  {
    year: "2021 - 2023",
    role: "Software Engineering Student",
    company: "Software University",
    description: `
    As a JavaScript student at Software University, I've engaged in numerous projects, honing my skills in web development. I've demonstrated my dedication and proficiency in JavaScript programming and its application in building innovative web solutions. I excel in functional programming, manipulation of arrays and objects, DOM manipulation, and asynchronous programming, among other key concepts. Specializing in full-stack JavaScript development, I am adept at building modern web applications using HTML, CSS, TypeScript, Node.js, Express.js, MongoDB, React, and Angular.`,
    technologies: ["Javascript", "React.js", "Node.js", "Express.js", "TypeScript", "Angular"],
  },
  {
    year: "2022 - 2024",
    role: "Private Equity Analyst",
    company: "Apex",
    description: `Utilized Excel and VBA extensively for data analysis, financial modeling, and process
    automation. Used SQL on a daily basis to communicate with our Database. I have also used XML to manipulate and format XML documents for regulatory submissions.`,
    technologies: ["VBA", "SQL", "XML", "Javascript", "Excel"],
  },
  {
    year: "2021 - 2022",
    role: "Senior CEA",
    company: "Crypto.com",
    description: `At Crypto.com, I specialized in working closely with blockchain technology and DeFi protocols to locate and recover lost transactions for customers. I collaborated with cross-functional teams to analyze transaction data and implement solutions to ensure customer satisfaction. Additionally, I enhanced blockchain and DeFi protocols while providing technical support to resolve complex transaction issues efficiently.`,
    technologies: ["Blockchain", "JIRA", "DeFi" ],
  },
];

export const PROJECTS = [
  {
    title: "Crypto Easy",
    image: project1,
    description:
      "Crypto Easy is a platform that simplifies the exploration and management of cryptocurrencies ands. Using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for database management, it ensures seamless integration and performance. Leveraging the CoinGecko API, Crypto Easy provides real-time cryptocurrency data. Users can create their own NFTs, making digital collectibles accessible. Crypto Easy aims to offer a user-friendly, secure, and innovative experience for crypto enthusiasts.",
    technologies: ["Node.js", "Express.js", "React", "CoinGecko API", "MongoDB", "BootStrap CSS"],
    link: "https://github.com/Mario1515/CryptoEasy",
  },
  {
    title: "PetStagram - Social Media platform for pets",
    image: project8,
    description:
      "Petstagram is a social media platform dedicated to pets, created with Node.js and Express. Users can share pictures of their pets, comment on others' posts, and interact with the pet-loving community. The application supports full CRUD (Create, Read, Update, Delete) operations, authentication and authorization using JWT, secure password handling with bcrypt, and dynamic content rendering with Handlebars. The database is on MongoDB with ODM Mongoose. ",
    technologies: ["NodeJS", "ExpressJS", "HandleBars", "Mongoose", "bcrypt", "jsonwebtoken"],
    link: "https://github.com/Mario1515/petstagram"
  },
  {
    title: "Friendly World - Fundraising Project",
    image: project5,
    description:
      "An Animal Rescue Web Application built with Node.js, Express, MongoDB, and Handlebars. It allows users to register, login, and manage animal rescue posts with CRUD functionalities plus donating to posts. The application features authentication and authorization using JWT, secure password handling with bcrypt, and dynamic content rendering with Handlebars.",
    technologies: ["NodeJS", "ExpressJS", "HandleBars", "Mongoose", "bcrypt", "jsonwebtoken"],
    link: "https://github.com/Mario1515/friendly-word"
  },
  {
    title: "GameMarket - Marketplace for Games",
    image: project7,
    description:
      "GameMarket is a dedicated marketplace for buying, selling, and trading video games. Users can browse a wide selection of games, post their own games for sale, and interact with other gamers. The platform supports full CRUD (Create, Read, Update, Delete) operations, user authentication and authorization using JWT, secure password handling with bcrypt, and dynamic content rendering with Handlebars. The database is on MongoDB with ODM Mongoose.",
    technologies: ["NodeJS", "ExpressJS", "HandleBars", "Mongoose", "bcrypt", "jsonwebtoken"],
    link: "https://github.com/Mario1515/gaming-shop"
  },
  {
    title: "Chat App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["Node.js", "React.js",  "Express.js", "MongoDB", "Socket.io", "HTML", "TailwindCSS"],
    link: "https://github.com/Mario1515/chat-app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind CSS", "Framer"],
    link: "https://github.com/Mario1515/my-portfolio"
  },
];

export const CONTACT = {
  address: "Sofia, Bulgaria",
  phoneNo: "+359 88 240 7945 ",
  email: "mariopetkovnfsg@gmail.com",
};
