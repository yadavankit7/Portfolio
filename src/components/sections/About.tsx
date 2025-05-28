import React from 'react';
import { Download } from 'lucide-react';
import Button from '../ui/Button';
import img from '/img/ankit.jpg'

const About = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About Me
              </h2>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm Ankit Yadav, A passionate frontend developer with a strong foundation in creating engaging and user-friendly digital experiences. I specialize in building responsive and interactive web applications using modern HTML, CSS, and JavaScript frameworks. Eager to learn and grow in a dynamic development environment.
                </p>
                
                <p>
                  My journey began with a Bachelor’s degree in Information Technology, where I discovered my passion for the intersection of design and technology. This interest led me to frontend development, where I enjoy creating visually appealing and user-friendly web interfaces. I'm excited to apply my skills and continue learning in real-world projects.
                </p>
                
                <p>
                  I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real problems. When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new technologies.
                </p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Fresher 
                </h3>
                
                
              </div>
              
              <div className="mt-8">
                <Button href="/resume.pdf" variant="primary" size="lg">
                  Download Resume
                  <Download className="ml-2" size={18} />
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={img} 
                    alt="Ankit Yadav, Frontend Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;