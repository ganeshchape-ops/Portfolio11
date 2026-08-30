import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950/90 text-slate-400">
      
      {/* Top Gradient Divider Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/80 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Monogram */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
              {personal.initials || 'DA'}
            </div>
            <div>
              <span className="text-sm font-bold text-white block">{personal.name}</span>
              <span className="text-xs text-slate-500 font-mono">Data Analyst Portfolio</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a href="#home" className="hover:text-purple-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-300 transition-colors">Skills</a>
            <a href="#services" className="hover:text-purple-300 transition-colors">Services</a>
            <a href="#projects" className="hover:text-purple-300 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-300 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">LinkedIn</a>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">GitHub</a>
          </div>

          {/* Back to Top Action */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top of page"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 hover:border-purple-500/40 text-slate-300 hover:text-white text-xs transition-all hover:-translate-y-0.5"
          >
            <span>Back to top</span>
            <span>↑</span>
          </button>

        </div>

        {/* Copyright Line */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500 font-mono">
          <p>© 2026 {personal.name}. Built with Python mindset and modern web technologies.</p>
        </div>

      </div>
    </footer>
  );
}
