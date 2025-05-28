import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header activeSection={activeSection} />
        <main>
          <section id="hero" className="section" onMouseEnter={() => handleSectionChange('hero')}>
            <Hero />
          </section>
          <section id="projects" className="section" onMouseEnter={() => handleSectionChange('projects')}>
            <Projects />
          </section>
          <section id="skills" className="section" onMouseEnter={() => handleSectionChange('skills')}>
            <Skills />
          </section>
          <section id="about" className="section" onMouseEnter={() => handleSectionChange('about')}>
            <About />
          </section>
          <section id="contact" className="section" onMouseEnter={() => handleSectionChange('contact')}>
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;