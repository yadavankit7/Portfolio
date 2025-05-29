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
  {
    id: 4,
    title: "Fitness Tracker Mobile App",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "Expo", "GraphQL", "Node.js", "MongoDB"],
    github: "https://github.com"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A weather application with 7-day forecasts, location-based weather data, and interactive visualizations.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Vue.js", "Vuetify", "OpenWeather API", "D3.js", "Netlify"],
    github: "https://github.com",
    liveDemo: "https://example.com"
  },
  {
    id: 6,
    title: "Restaurant Ordering System",
    description: "A full-stack application for restaurant owners to manage orders, tables, and menu items in real-time.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fullstack",
    technologies: ["React", "Express.js", "Socket.io", "MySQL", "Docker"],
    github: "https://github.com",
    liveDemo: "https://example.com"
  }
];
