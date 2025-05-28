import React from 'react';
import { skillsData } from '../../data/skillsData';

const Skills = () => {
  return (
    <div className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {skillsData.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center sm:text-left">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Continuing Education
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I'm constantly learning and expanding my skill set. Currently exploring:
          </p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {['React.js', 'Node.js', 'Svelte', ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;