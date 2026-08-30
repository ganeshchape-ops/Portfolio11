import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function About() {
  const { personal, aboutCards, approachSteps } = portfolioData;

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Background Subtle Gradient */}
      <div className="orb-glow w-96 h-96 bg-purple-900/10 top-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <span>🔍</span>
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Turning numbers into meaningful stories.
          </p>
        </div>

        {/* Top Split: Bio & Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Bio & Philosophy */}
          <div className="lg:col-span-6 glass-panel p-8 space-y-6">
            
            <div className="flex items-center space-x-4 pb-4 border-b border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-cyan-300">
                  {personal.initials || 'DA'}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{personal.name}</h3>
                <p className="text-sm text-purple-400 font-medium">{personal.role}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">{personal.location}</p>
              </div>
            </div>

            <p className="text-slate-200 leading-relaxed text-base">
              {personal.bioLong}
            </p>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20">
              <h4 className="text-sm font-semibold text-purple-300 flex items-center space-x-2">
                <span>🎯</span>
                <span>Core Analytics Philosophy</span>
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                "Data is only as valuable as the decisions it inspires. I strive to connect raw datasets to executive clarity, eliminating guesswork through verifiable metrics."
              </p>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
              <div className="flex items-center space-x-2 bg-slate-950/60 px-3 py-2 rounded-lg border border-white/5">
                <span className="text-purple-400">✉️</span>
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-950/60 px-3 py-2 rounded-lg border border-white/5">
                <span className="text-emerald-400">🟢</span>
                <span>{personal.availability}</span>
              </div>
            </div>

          </div>

          {/* Right: 4 Quick Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutCards.map((card, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 flex flex-col justify-between hover:border-purple-500/40 relative overflow-hidden"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600/30 to-indigo-600/30 border border-purple-500/30 flex items-center justify-center text-purple-300 font-bold mb-4">
                    {idx === 0 && '🎓'}
                    {idx === 1 && '🎯'}
                    {idx === 2 && '📍'}
                    {idx === 3 && '⚡'}
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400">
                    {card.title}
                  </h4>
                  <div className="text-base font-semibold text-white mt-1">
                    {card.subtitle}
                  </div>
                </div>

                <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-white/5 leading-relaxed">
                  {card.detail}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Section: "My Approach" Process (4 Steps) */}
        <div className="mt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              My Analytics Methodology
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              A structured 4-step framework from raw data exploration to executive action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="glass-panel p-6 relative group hover:border-purple-500/50 flex flex-col justify-between"
              >
                {/* Step Indicator Header */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-slate-600 group-hover:text-purple-400 transition-colors">
                      {step.step}
                    </span>
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold border ${step.color}`}>
                      {index === 0 && '🎯'}
                      {index === 1 && '🧹'}
                      {index === 2 && '📊'}
                      {index === 3 && '💡'}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
                    {step.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Phase {index + 1} of 4</span>
                  <span className="text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
