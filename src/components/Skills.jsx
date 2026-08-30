import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Skills() {
  const { skills, skillCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelBadgeClass = (level) => {
    switch (level) {
      case 'Advanced':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      case 'Working Knowledge':
      default:
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-4">
            <span>⚡</span>
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            My toolkit for data analysis and visualization.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              onClick={() => setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)}
              className="glass-panel p-5 cursor-pointer hover:border-purple-500/50 flex flex-col justify-between group relative transition-all"
            >
              <div>
                {/* Header: Name + Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                      {skill.name.includes('Python') && '🐍'}
                      {skill.name.includes('Pandas') && '🐼'}
                      {skill.name.includes('NumPy') && '🔢'}
                      {skill.name.includes('Excel') && '📊'}
                      {skill.name.includes('Power BI') && '📈'}
                      {skill.name.includes('SQL') && '🗄️'}
                      {skill.name.includes('Cleaning') && '🧹'}
                      {skill.name.includes('Exploratory') && '🧭'}
                      {skill.name.includes('Transformation') && '🔄'}
                      {skill.name.includes('Statistical') && '∑'}
                      {skill.name.includes('Insights') && '💡'}
                      {skill.name.includes('Jupyter') && '📓'}
                      {skill.name.includes('Dashboards') && '📱'}
                      {skill.name.includes('KPI') && '🎯'}
                      {skill.name.includes('Storytelling') && '🗣️'}
                      {skill.name.includes('HTML') && '🌐'}
                      {skill.name.includes('CSS') && '🎨'}
                      {skill.name.includes('Responsive') && '📐'}
                      {skill.name.includes('UI') && '✨'}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>

                {/* Level Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${getLevelBadgeClass(skill.level)}`}>
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Subtle Tag */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span className="capitalize">{skill.category}</span>
                <span className="text-purple-400 group-hover:translate-x-0.5 transition-transform">Click details ↗</span>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Detail Popup / Drawer */}
        {selectedSkill && (
          <div className="mt-8 p-6 rounded-2xl glass-panel border border-purple-500/40 bg-slate-900/90 max-w-2xl mx-auto animate-float">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-lg font-bold text-white">{selectedSkill.name}</h4>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getLevelBadgeClass(selectedSkill.level)} mt-1`}>
                    {selectedSkill.level}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedSkill(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-slate-200 mt-4 leading-relaxed">
              {selectedSkill.description}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Domain: {selectedSkill.category.toUpperCase()}</span>
              <span className="text-emerald-400">Ready for Production & Analysis</span>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
