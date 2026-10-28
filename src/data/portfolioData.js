import resqAI from "../assets/project-images/resq-ai.png";
import stackMind from "../assets/project-images/stack-mind.png";
import wanderlust from "../assets/project-images/wanderlust.png";
import tenTicketBooking from "../assets/project-images/TEN_Ticket_Booking_System.png";
import cctCertificate from "../assets/pdf/CCT-internship.pdf";
import sihCertificate from "../assets/pdf/SIH-Certificate.jpeg";
import bsercCertificate from "../assets/pdf/BSERC-Offer-Letter.pdf";
import tenCertificate from "../assets/pdf/TEN_SDE_LOC.pdf";

export const homeData = {
  welcomeTag: "Hi there, i am ",
  name: "Vivek Kumar",
  title: "I craft seamless web experiences.",
  subtitle:
    "I am a focused frontend developer specializing in building modern web applications. Currently, I love building responsive products using React 19 and clean utility-first styling.",
  ctaWork: "View My Work",
  ctaConnect: "Let's Connect",
};

export const aboutData = {
  subHeading:
    "Building thoughtful digital experiences with a focus on performance and usability.",
  description:
    "I am a proactive full-stack developer who enjoys turning complex ideas into clean, accessible, and high-performance web applications. I work across frontend and backend technologies to build reliable products with intuitive user experiences.",
  stats: [
    { label: "Internship Experience", value: "3 Months+" },
    { label: "Projects Completed", value: "3" },
    { label: "Open Source Contributions", value: "Growing" },
  ],
};

export const experiences = [
  {
    id: 1,
    role: "Software Development Engineer Intern",
    company: "The Entrepreneurship Network (TEN)",
    location: "Remote",
    duration: "Aug 2026 - Oct 2026",

    points: [
      "Architected a 4-layer RESTful backend (Routes → Controllers → Models → MongoDB) using Node.js, Express.js, and Mongoose, delivering 20+ REST API endpoints for authentication, train, and station management.",
      "Engineered train management APIs with MongoDB ObjectId validation, station existence checks, duplicate train-number prevention, source/destination validation, and structured HTTP error handling using status codes 400, 404, and 409.",
      "Designed 6 Mongoose data models and document relationships across users, trains, stations, schedules, bookings, and payments, using MongoDB references and populate() to retrieve associated entities.",
      "Implemented JWT-based authentication with bcrypt password hashing, credential verification, Bearer-token validation, and protected API middleware, with USER and ADMIN role-based access control.",
    ],
    certificateUrl: tenCertificate,
  },

  {
    id: 2,
    role: "Def-Space Intern",
    company: "Bharat Space Education Research Center",
    location: "New Delhi, India",
    duration: "June 2026 - July 2026",

    points: [
      "Selected for Def-Space Summer Internship 2026.",
      "Exploring Generative AI.",
      "Autonomous UAV Systems.",
      "Cyber Security.",
      "Military Intelligence.",
    ],

    certificateUrl: bsercCertificate,
  },

  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "CloudCredits Technologies Pvt. Ltd.",
    location: "Jaipur, Rajasthan, India (Remote)",
    duration: "June 2025 - September 2025",

    points: [
      "Built responsive, cross-browser interfaces using HTML5, CSS3, and JavaScript, ensuring full mobile responsiveness across the product's frontend.",
      "Integrated RESTful APIs for frontend-backend communication and debugged API integration and data retrieval issues across the application.",
      "Independently delivered assigned development tasks within strict 3-month remote internship deadlines.",
      "Maintained code quality and version control using Git and GitHub.",
      "Contributed to UI/UX design discussions.",
    ],
    certificateUrl: cctCertificate,
  },

  {
    id: 4,
    role: "2x SIH Internal Round Winner & Lead",
    company: "Smart India Hackathon (Jagannath University)",
    location: "Jaipur, India",
    duration: "2024 - 2025",

    points: ["Led cross-functional teams.", "Demonstrated frontend expertise."],

    certificateUrl: sihCertificate,
  },
];

export const projects = [
  {
    id: 1,
    title: "ResQ-AI",
    points: [
      "Engineered an autonomous multi-modal disaster management and intelligence platform tailored for tactical emergency mitigation in crisis zones.",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "Express.jsx",
      "PostgreSQL",
      "YOLOv8 / TensorFlow.js",
    ],
    github: "https://github.com/vivekkr620/ResQ-AI",
    live: "#",
    image: resqAI,
  },

  {
    id: 2,
    title: "StackMind",
    points: [
      "Designed and engineered a high-performance developer knowledge repository and collaborative technical ecosystem.",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Tailwind CSS",
      "Docker",
    ],
    github: "https://github.com/vivekkr620/StackMind",
    live: "https://stack-mind-dusky.vercel.app/",
    image: stackMind,
  },

  {
    id: 3,
    title: "WanderLust",
    points: [
      "Built a full-stack accommodation marketplace with React, Node.js, Express, MongoDB, Cloudinary, JWT authentication, and Socket.IO for property listings, bookings, reviews, and real-time booking updates.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Joi",
      "Cloudinary",
    ],
    github: "https://github.com/vivek-kr011/WanderLust",
    live: "https://wander-lust-two-silk.vercel.app/",
    image: wanderlust,
  },

  {
    id: 4,
    title: "TEN Railway Ticket Booking Platform",
    points: [
      "Architected a 4-layer RESTful backend using Node.js, Express.js, Mongoose, and MongoDB, delivering 20+ REST API endpoints for authentication, train, and station management.",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
    github:
      "https://github.com/vivek-kr011/ten-railway-ticket-booking-platform",
    live: "#",
    image: tenTicketBooking,
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Java", "JavaScript (ES6+)", "Python"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Docker", "REST APIs"],
  },
  {
    title: "AI / ML & Cloud",
    skills: ["Python", "Azure Synapse SQL Pool"],
  },
];

export const educationData = {
  institution: "Jagannath University, Jaipur",
  degree: "Bachelor of Technology",
  field: "Computer Science and Engineering",
  timeline: "2023 - 2027",
  location: "Jaipur, Rajasthan, India",
  metrics: "SGPA: 7.23 / 10.00 (5th Semester)",
  highlights: [
    "Focusing on Core Data Structures, Algorithms, Full-Stack Web Architecture, and Applied AI paradigms.",
    "Actively involved in technical hackathons and institutional R&D ecosystem implementations.",
  ],
};

export const faqData = [
  {
    question: "What is your primary technical stack?",
    answer:
      "I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with Next.js, TypeScript, and Tailwind CSS. I am also highly comfortable with languages like Java (DSA), C++, and Python for data-driven backends.",
  },
  {
    question: "Are you available for internships or freelance roles?",
    answer:
      "Yes, absolutely! I am looking for software engineering internships, open-source research collaborations, or frontend freelance contracts where I can optimize web systems and interface architectures.",
  },
  {
    question: "How do you ensure clean, maintainable code structures?",
    answer:
      "I adhere to strict component modularization, single-responsibility principles, and utility-first formatting using tools like ESLint and Prettier. I prefer centralizing static content to decouple logic from design layouts.",
  },
  {
    question:
      "Do you have experience working with cloud or intelligent systems?",
    answer:
      "Yes, I hold an Azure Synapse Serverless SQL Pool certification for cloud data analytics and have worked on specialized multi-modal disaster management concepts integrating image classification parameters.",
  },
];

export const contactData = {
  title: "Get In Touch",
  subtitle:
    "I'm always open to discussing new ideas, internship or full-time opportunities, and exciting collaborations. Let's connect!",
  email: "vk431152@gmail.com",
  phone: "+91-6205606989",
  location: "Jaipur, Rajasthan, India",
  github: "https://github.com/vivekkr620",
  linkedin: "https://www.linkedin.com/in/vivek-kumar011/",
  medium: "https://medium.com/@vk431152",
};
