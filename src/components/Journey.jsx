import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Journey() {
  const { journey } = portfolioData;

  const getTypeBadge = (type) => {
    switch (type) {
      case 'experience':
        return { label: 'Professional Experience', color: 'bg-purple-500/10 text-purple-400 border-purple-500/30' };
      case 'education':
        return { label: 'Formal Education', color: 'bg-blue-500/10 text-blue-400 border-blue-500/30' };
      case 'certification':
      default:
        return { label: 'Specialized Training', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
    }
  };

  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
            <span>🗺️</span>
            <span>BACKGROUND & CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            My Journey
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Education, practical experience, and continuous learning in data analysis.
          </p>
        </div>

        {/* Vertical Glowing Timeline */}
        <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-32 space-y-12">
          
          {journey.map((item, index) => {
            const badge = getTypeBadge(item.type);
            return (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                
                {/* Timeline Glowing Node Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover:bg-cyan-300 m-auto mt-[1px]"></div>
                </div>

                {/* Left Desktop Year Period Label */}
                <div className="hidden sm:block absolute -left-36 top-1 text-right w-24">
                  <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/40 border border-purple-500/30 px-2 py-1 rounded-md">
                    {item.period}
                  </span>
                </div>

                {/* Main Milestone Card */}
                <div className="glass-panel p-6 group-hover:border-purple-500/40 transition-all">
                  
                  {/* Mobile Year Badge */}
                  <div className="sm:hidden mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/40 border border-purple-500/30 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${badge.color}`}>
                      {badge.label}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      📍 {item.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {item.role}
                  </h3>

                  <div className="text-sm font-semibold text-cyan-400 mb-3">
                    {item.organization}
                  </div>

                  {/* Highlights Bullet Points */}
                  <ul className="space-y-1.5 text-xs text-slate-300 mb-4">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <span className="text-purple-400 mt-0.5">▪</span>
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {item.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-white/5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
