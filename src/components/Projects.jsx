import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';
import { CaseStudyModal } from './CaseStudyModal.jsx';

export function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Power BI', 'Python'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background Ambient Glow */}
      <div className="orb-glow w-[30rem] h-[30rem] bg-indigo-900/15 top-1/3 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <span>🚀</span>
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Data Projects
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            A selection of projects where I used data to find insights and solve problems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center space-x-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel overflow-hidden flex flex-col justify-between group hover:border-purple-500/50 transition-all duration-300"
            >
              <div>
                
                {/* Project Visual / Interactive Dashboard Mockup Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/60 p-5 border-b border-white/10 overflow-hidden flex flex-col justify-between">
                  {/* Subtle Grid overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-600/30 text-purple-300 border border-purple-400/30">
                      {project.category}
                    </span>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all flex items-center space-x-1"
                    >
                      <span>Case Study</span>
                      <span>↗</span>
                    </button>
                  </div>

                  {/* Simulated Visual Mini Chart Indicator */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center space-x-3 text-xs font-mono text-slate-300">
                      {project.metrics ? (
                        project.metrics.slice(0, 2).map((m, i) => (
                          <div key={i} className="bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10">
                            <span className="text-slate-400 text-[10px]">{m.label}: </span>
                            <span className="text-cyan-300 font-bold">{m.value}</span>
                          </div>
                        ))
                      ) : (
                        <div className="bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10">
                          <span className="text-purple-300 font-semibold">Verified Analysis</span>
                        </div>
                      )}
                    </div>

                    <div className="text-lg font-bold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5">
                  
                  {/* Description */}
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tools Used Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-purple-300 border border-purple-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Key Insights List */}
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Key Business Insights:
                    </div>
                    <ul className="space-y-1.5">
                      {project.insights.map((insight, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                          <span className="text-cyan-400 font-bold mt-0.5">▪</span>
                          <span>{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

              {/* Card Footer Action Buttons */}
              <div className="p-6 pt-0 border-t border-white/5 mt-4 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all flex items-center space-x-1.5"
                >
                  <span>View Details & Case Study</span>
                  <span>↗</span>
                </button>

                <div className="flex items-center space-x-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View Dashboard / Live Demo"
                    aria-label="View Dashboard / Live Demo"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="View GitHub Repository"
                    aria-label="View GitHub Repository"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Interactive Case Study Modal */}
        {activeModalProject && (
          <CaseStudyModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}

      </div>
    </section>
  );
}
