import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData.js';
import { DashboardWidget } from './DashboardWidget.jsx';

export function Hero() {
  const { personal, animatedRoles, stats } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Typewriter effect for animated subtitles
  useEffect(() => {
    const fullText = animatedRoles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setTypingSpeed(80);

        if (displayedText === fullText) {
          // Pause at end of word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);

        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % animatedRoles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, animatedRoles, typingSpeed]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="orb-glow w-96 h-96 bg-purple-600/20 top-1/4 -left-20"></div>
      <div className="orb-glow w-[32rem] h-[32rem] bg-indigo-600/15 top-1/3 right-0"></div>
      <div className="orb-glow w-80 h-80 bg-cyan-500/15 bottom-10 left-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                <span>👋</span>
                <span>Hello, I am</span>
              </span>

              <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{personal.status || 'Open to Work'} • {personal.availability}</span>
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              <span className="block">{personal.name}</span>
              <span className="text-gradient block mt-1">Data Analyst</span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-400 font-medium">
                &gt; {displayedText}
                <span className="inline-block w-2 h-5 bg-cyan-400 ml-1 animate-pulse"></span>
              </span>
            </div>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personal.bioShort}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>View My Projects</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-purple-500/40 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-2"
              >
                <span>Contact Me</span>
                <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-all flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
            </div>

            {/* Quick Tool Badges Row */}
            <div className="pt-3 flex items-center justify-center lg:justify-start flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Stack:</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-purple-300">Python</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-blue-300">Pandas</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-indigo-300">NumPy</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-emerald-300">Excel</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-amber-300">Power BI</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 text-cyan-300">SQL</span>
            </div>

          </div>

          {/* Right Column: Interactive Dashboard & Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <DashboardWidget />
          </div>

        </div>

        {/* Quick Achievement Stats Grid */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-panel p-5 text-center relative overflow-hidden group hover:border-purple-500/40"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
