import { Project } from "./projectsData";

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      },
      {
        name: "Vercel",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg"
      }
    ]
  }
];
export const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce store owners with real-time analytics and inventory management.",
    image: "/img/fashion.png",
    category: "web",
    technologies: ["HTML", " CSS", "JavaScript"],
    github: "https://github.com/yadavankit7",
    liveDemo: "https://scottie-zeta.vercel.app/"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
    image: "/img/task.png",
    category: "web",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/yadavankit7",
    liveDemo: "https://smarttasker.vercel.app/"
  },
  {
    id: 3,
    title: "Landing Page",
    description: "A modern, responsive landing page designed to showcase products or services with a clean and engaging layout.",
    image: "/img/landing.png",
    category: "web",
    technologies: ["html", "CSS" , "Vercel"],
    github: "https://github.com/yadavankit7",
    liveDemo: "https://landing-page-2onm.vercel.app/"
  },
];
