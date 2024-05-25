import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. Since I started coding in 2021, I have honed my skills in front-end technologies like React and back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = "I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I hold a Bachelor's degree in Software Engineering from Software University in Sofia, where I graduated with a perfect 6.00 GPA, and a Bachelor's degree in Finance. My journey in web development began during the COVID-19 pandemic, giving me three years of professional experience. Throughout my career, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I have actively contributed to multiple projects at Software University and have developed several live projects independently. Driven by a deep curiosity for how things work, I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Personal Projects",
    description: `
    Developed Crypto Easy React project, a comprehensive platform for exploring cryptocurrencies and NFTs, using React.js and Node.js. Implemented features for both public and private users, including live crypto data from the CoinGecko API and NFT management capabilities. Ensured a seamless user experience by integrating EmailJS for user communication and utilizing Vite for efficient frontend development.`,
    technologies: ["Javascript", "React.js", "Express.js", "mongoDB", "Bootstrap CSS"],
  },
  {
    year: "2021 - Present",
    role: "Software Engineering Student",
    company: "Software University",
    description: `
    As a JavaScript student at Software University, I've engaged in numerous projects, honing my skills in web development. I've demonstrated my dedication and proficiency in JavaScript programming and its application in building innovative web solutions. I excel in functional programming, manipulation of arrays and objects, DOM manipulation, and asynchronous programming, among other key concepts. Specializing in full-stack JavaScript development, I am adept at building modern web applications using HTML, CSS, TypeScript, Node.js, Express.js, MongoDB, React, and Angular.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "TypeScript", "Angular"],
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
      "A fully functional Crypto site called - Crypto Easy which utilizes technologies such as React.js for frontend development, Node.js for backend functionality, and MongoDB for database management, ensuring seamless integration and optimal performance for users exploring the dynamic world of cryptocurrencies and NFTs.",
    technologies: ["HTML", "BootStrap CSS", "React", "Node.js", "MongoDB", "Express.js"],
    link: "https://github.com/Mario1515/CryptoEasy",
  },
  {
    title: "Chat App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "TailwindCSS", "MongoDB", "Socket.io", "React.js", "Node.js", "Express.js"],
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
  address: "Sofia, Bulgaria /  Zurich, Switzerland",
  phoneNo: "+359 88 240 7945 ",
  email: "mariopetkovnfsg@gmail.com",
};
