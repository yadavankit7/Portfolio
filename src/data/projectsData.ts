export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  liveDemo?: string;
}


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
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["html", "CSS" , "Vercel"],
    github: "https://github.com/yadavankit7",
    liveDemo: "https://landing-page-2onm.vercel.app/"
  },
];
