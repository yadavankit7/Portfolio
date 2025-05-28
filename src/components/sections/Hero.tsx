import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 bg-cover bg-center mix-blend-overlay" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block animate-fade-in-up">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-6 inline-block">
              Frontend Developer
            </span>
          </div>
          
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight animate-fade-in-up animation-delay-200">
            Creating beautiful <span className="text-blue-500">digital experiences</span> for the web
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Hi, I'm Ankit Yadav. I craft responsive websites where technology meets creativity to build exceptional user experiences.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button onClick={scrollToProjects} variant="primary" size="lg">
              View My Work
            </Button>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="secondary" size="lg">
              Get In Touch
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-6 animate-fade-in-up animation-delay-800">
            <a href="https://github.com/yadavankit7" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/ankit-yadav-905827256" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
          aria-label="Scroll down"
        >
          <ArrowDown className="text-blue-500 dark:text-blue-400" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Hero;