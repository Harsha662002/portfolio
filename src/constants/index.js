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
  s7works,
  hcl,
  infinite,
  techaffairs,
  interiiit,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "S7Works",
    icon: s7works,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Developing and maintaining mobile applications using Flutter, Golang and other related technologies.",
      "Utilized Flutter for front-end development and integrated gRPC in Golang to implement efficient chat functionality.",
      "Integrated the Twilio Conversations API into a chat application, to enhance real-time communication capabilities.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "HCL Technologies",
    icon: hcl,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Engineered a user-centric Complaint Management System with distinct roles enhancing issue resolution efficiency.",
      "Crafted a full-stack web application using NextJs, Tailwind CSS and MongoDB to store and retrieve the data.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Inter-IIIT Sports Meet",
    description:
      "The Inter-IIIT Sports Meet website successfully managed registrations for 1000 students participating in various sports ensuring a smooth experience for both organizers and participants.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "googlesheets",
        color: "green-text-gradient",
      },
    ],
    image: interiiit,
    source_code_link: "https://github.com/PraneethKumar02/interIIIT",
  },
  {
    name: "IIITDM Technical Affairs",
    description:
      "The website offers a detailed showcase of the student team, diverse clubs, creating a digital space that captures the essence of technological innovation and creativity thriving within the IIITDM community.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: techaffairs,
    source_code_link: "https://github.com/Harsha662002/tech_affairs_website",
  },
  {
    name: "Infinite Challenger",
    description:
      "The website serves gateway into the world of the competitive team of SAE Baja. With a sleek design, the site offers valuable insights into the team's accomplishments, showcasing their prowess in their domain.",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
    ],
    image: infinite,
    source_code_link: "https://infinitechallenger.in/",
  },
];

export { services, technologies, experiences, projects };
