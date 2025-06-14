import breakout from "./assets/breakout.png";
import dashboard from "./assets/dashboard.png";
import taskify from "./assets/Tasky.png";
import storvi from "./assets/storvii.png";
import meal from "./assets/meal.png";
import bookra from "./assets/bokra.png";

export const data = [
  {
    id: 1,
    name: "Bokra",
    image: bookra,
    category: "Dev",
    description: "A full-stack web application for managing library books",
    fulldescription:
      "Bokra is a full-stack library management web app built with React.js, Redux Toolkit, Node.js, Express, and MongoDB. It allows users to browse, borrow, return, and rate books with features like real-time updates, search, filter, and pagination. The backend includes user authentication, role-based access, and robust API integration for smooth communication between frontend and backend.",
    keywords: "MERN Stack",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    features: ["User Authentication", "Real-time Updates", "Task Categories"],
    link: "https://github.com/moizaleem12/Bokra-ReactJs-Frontend",
  },
  {
    id: 2,
    name: "Taskify",
    image: taskify,
    category: "Dev",
    description:
      "A note-taking and task management app with real-time sync and cloud storage using Firebase.",
    fulldescription:
      "Taskify is a versatile task and notes management application designed for mobile and web users. It allows users to create, categorize, and manage tasks with features like text formatting, favorites, and trash management. It includes secure authentication, real-time sync, and a responsive UI for a seamless experience.",
    keywords: "Full Stack",
    technologies: ["React", "Tailwind CSS", "Firebase", "Git"],
    features: [
      "User Authentication & Profile Management",
      "Task and Notes Management",
      "Favorites & Trash Management",
      "Text Formatting Tools",
      "User Preferences",
    ],
    link: "https://github.com/moizaleem12/Taskify",
  },
  {
    id: 3,
    name: "Ecommerce Website",
    image: breakout,
    category: "Dev",
    description:
      "A React-based ecommerce website with product search, filtering, and cart features.",
    fulldescription:
      "Breakout is a stylish ecommerce website built using React.js. It offers seamless product browsing, searching, filtering, and cart management. Form handling and validation are powered by Formik and Yup to ensure a smooth user experience.",
    keywords: "Front-End",
    technologies: ["React", "React Redux", "Formik", "Yup"],
    features: [
      "Shopping Cart Management (Add, Remove, Update Items)",
      "Product Sorting (e.g., by price, popularity, category)",
      "Form Validation and Error Handling",
      "Product Browsing with Seamless Navigation",
      "User-Friendly Interaction & UX",
      "Responsive Design for All Devices",
    ],
    link: "https://github.com/moizaleem12/shoppingreactapp",
  },
  {
    id: 4,
    name: "Storvii",
    image: storvi,
    category: "Design",
    description:
      "A storytelling app for anonymous story sharing with chat and voice features.",
    fulldescription:
      "Storvii is a cross-platform storytelling platform where users can share experiences anonymously through public and private rooms. It includes live voice chat, real-time messaging, user authentication, and a reputation system for a rich, immersive experience.",
    keywords: "Product Design",
    technologies: ["Figma", "Miro", "Wireframing", "Prototyping"],
    link: "https://www.behance.net/gallery/220621795/STORVII",
    button: "View Case Study",
    features: [
      "Story Rooms (Public & Private)",
      "Live Voice Chat & Instant Messaging",
      "Reputation System & User Engagement",
      "Real-Time Communication & Secure Data Management",
      "Moderation & Safety Features",
    ],
  },
  {
    id: 5,
    name: "Meal App",
    image: meal,
    category: "Design",
    description:
      "A mobile app for discovering and bookmarking meals and recipes.",
    fulldescription:
      "Meals App is mobile application that simplifies meal discovery. It offers intuitive navigation, categorized recipes, detailed instructions, and bookmarking functionality to enhance user engagement.",
    keywords: "Product Design",
    technologies: ["Figma", "Miro", "Wireframing", "Prototyping"],
    button: "View Case Study",
    link: "https://www.behance.net/gallery/190134973/Meals-App",
    features: [
      "Course Management",
      "Grade Tracking",
      "Schedule Planning",
      "Communication Tools",
    ],
  },

  {
    id: 6,
    name: "Student Portal",
    image: dashboard,
    category: "Design",
    description: "A full student management portal design with academic tools.",
    fulldescription:
      "A comprehensive design for a university student portal with features such as course management, grade tracking, schedule planning, and communication tools. The UI emphasizes clarity, responsiveness, and accessibility for effective academic management.",
    keywords: "Web Design",
    technologies: ["Figma", "Adobe Illustrator", "Maze"],
    features: [
      "Course Management",
      "Grade Tracking",
      "Schedule Planning",
      "Communication Tools",
    ],
  },
];
