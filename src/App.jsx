import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { About } from './components/About.jsx';
import { Skills } from './components/Skills.jsx';
import { Services } from './components/Services.jsx';
import { Projects } from './components/Projects.jsx';
import { Journey } from './components/Journey.jsx';
import { Certifications } from './components/Certifications.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export function App() {
  const [theme, setTheme] = useState('dark');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('da_theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('da_theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white transition-colors duration-300 ${theme === 'light' ? 'light' : ''}`}>
      
      {/* Dynamic Background Noise / Grid */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0"></div>

      {/* Navigation Bar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
