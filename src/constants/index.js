import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  graphql,
  sass,
  firebase,
  gatsby,
  mui,
  contentful,
  scrimba,
  freecodecamp,
  linkedin,
  threejs,
  todo,
  recipe,
  admin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "gatsby",
    icon: gatsby,
  },
];

const experiences = [
  {
    title: "The UI Design Bootcamp",
    company_name: "Scrimba",
    icon: scrimba,
    iconBg: "#383E56",
    date: "Completed: March 2022",
    points: [
      "Skills:",
      "HTML5",
      "CSS3",
      "CSS Grid Layout",
      "CSS Flexbox",
      "Figma",
    ],
  },
  {
    title: "The Frontend Developer Career Path",
    company_name: "Scrimba",
    icon: scrimba,
    iconBg: "#E6DEDD",
    date: "Completed: March 2022",
    points: [
      "Skills:",
      "HTML5",
      "CSS3",
      "CSS Grid Layout",
      "JavaScript",
      "React.js",
      "Figma",
      "Responsive Web Design",
      "Frontend Web Development",
    ],
  },
  {
    title: "Learning 3D Graphics on the Web with Three.js",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#383E56",
    date: "Completed: September 7, 2022",
    points: ["Skills:", "Three.js"],
  },
  {
    title: "Advance Your Skills in HTML",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#383E56",
    date: "Completed: September 30, 2022",
    points: [
      "Top Skills:",
      "Web Design",
      "Front-End Development",
      "Cascading Style Sheets (CSS)",
      "HTML",
      "Courses Covered:",
      "HTML Essential Training",
      "HTML and CSS: Linking",
      "Crafting Meaningful HTML",
      "HTML: Tables",
      "HTML: Metadata in the Head",
      "HTML: Images and Figures",
      "HTML and CSS: Creating Forms",
      "Building Great Forms with HTML and CSS",
      "Learning Web Audio and Video",
      "HTML: Structured Semantic Data",
      "Developing for Web Performance",
    ],
  },
  {
    title: "Responsive Web Design",
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#E6DEDD",
    date: "Completed: October 27, 2022",
    points: ["Skills:", "HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    title: "Become a JavaScript Developer",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: November 22, 2022",
    points: [
      "Top Skills:",
      "Application Development",
      "JavaScript",
      "Front-end Development",
      "Courses Covered:",
      "JavaScript Essential Training",
      "Learning the JavaScript Language",
      "Learning ECMAScript 6+ (ES6+)",
      "JavaScript: Scope",
      "Learning App Building with Vanilla JavaScript",
      "JavaScript: Prototypes",
      "JavaScript: Closures",
      "JavaScript: Classes",
      "JavaScript: Ajax and Fetch",
      "JSON Essential Training",
    ],
  },
  {
    title: "Hands-On Introduction: Python",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: November 22, 2022",
    points: ["Skills:", "Python"],
  },
  {
    title: "React.js Essential Training",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: December 7, 2022",
    points: ["Skills:", "React.js", "GraphQL", "React Testing"],
  },
  {
    title: "React: Creating and Hosting a Full-Stack Site",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: January 29, 2023",
    points: [
      "Skills:",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Axios",
      "Postman API",
      "React.js",
      "Firebase",
    ],
  },
  {
    title: "Learn CSS",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: January 29, 2023",
    points: [
      "Top Skills:",
      "CSS Grid Layout",
      "Responsive Web Design",
      "Web Design",
      "CSS",
      "Courses Covered:",
      "CSS Essential Skills",
      "CSS: Selectors",
      "CSS: Inheritance, Specificity, and the Cascade",
      "CSS: Design Systems and Architectures",
      "CSS: Images",
      "CSS: Display",
      "CSS: Animation",
      "CSS: Advanced Layouts with Grid",
      "Advanced Responsive Layouts with CSS Flexbox",
      "CSS: Variables and Fluid Layouts",
      "CSS: Print Style Sheets",
      "CSS Layouts: From Float to Flexbox and Grid",
    ],
  },
  {
    title: "Python Essential Training",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: April 18, 2023",
    points: ["Skills:", "Python", "Jupyter"],
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    company_name: "freeCodeCamp",
    icon: freecodecamp,
    iconBg: "#E6DEDD",
    date: "Completed: April 23, 2023",
    points: ["Skills:", "JavaScript ES6+", "Object Oriented Programming"],
  },
  {
    title: "Building Modern Projects with React",
    company_name: "Linkedin Learning",
    icon: linkedin,
    iconBg: "#E6DEDD",
    date: "Completed: April 18, 2023",
    points: ["Skills:", "React Native", "Redux"],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Administration Website",
    description:
      "React Admin Dashboard built using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material.ui",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Matcha789/mz-react-admin",
    website_address: "https://mz-react-admin.netlify.app",
  },
  {
    name: "Todo List",
    description:
      "A todo list built on react that allows users to add, edit, and delete items.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/Matcha789/mz-todolist",
    website_address: "https://mz-todo-list.netlify.app",
  },
  {
    name: "Recipe Website",
    description:
      "A concept for a recipe website built using gatsby that allows users to search a catalouge of recipe cards.",
    tags: [
      {
        name: "gatsby.js",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "contentful",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/Matcha789/gatsby-tutorial-project",
    website_address: "https://gatsby-tutorial-recipe-website.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
