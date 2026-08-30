import React, { useEffect } from 'react';

export function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const { caseStudy } = project;

  // Close modal on Escape key press and prevent background scrolling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-900/40 overflow-hidden text-left my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-slate-950/90 p-6 border-b border-white/10 flex items-start justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono">
                {project.category} Case Study
              </span>
              {project.tools.map((tool, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-white/5">
                  {tool}
                </span>
              ))}
            </div>
            <h3 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
          
          {/* Quick Metrics Bar */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/60 p-4 rounded-xl border border-white/5">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-[11px] text-slate-400 font-mono uppercase">{m.label}</div>
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300 font-mono mt-0.5">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Structured Analytics Process: Problem -> Data -> Analysis -> Insights -> Recommendation -> Result */}
          <div className="space-y-6">
            
            {/* 1. Problem */}
            <div className="p-5 rounded-xl bg-slate-950/50 border-l-4 border-purple-500 border-t border-r border-b border-white/5">
              <div className="flex items-center space-x-2 text-purple-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>🎯 1. Business Problem & Objective</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            {/* 2. Dataset & Scope */}
            <div className="p-5 rounded-xl bg-slate-950/50 border-l-4 border-indigo-500 border-t border-r border-b border-white/5">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>📁 2. Dataset & Features</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.data}
              </p>
            </div>

            {/* 3. Data Cleaning & Analysis Process */}
            <div className="p-5 rounded-xl bg-slate-950/50 border-l-4 border-blue-500 border-t border-r border-b border-white/5">
              <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>⚙️ 3. Data Cleaning & Analysis Methodology</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.analysis}
              </p>
            </div>

            {/* 4. Key Analytical Insights */}
            <div className="p-5 rounded-xl bg-slate-950/50 border-l-4 border-cyan-500 border-t border-r border-b border-white/5">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>💡 4. Discovered Insights & Trends</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed mb-3">
                {caseStudy.insights}
              </p>
              <ul className="space-y-1.5 pl-2">
                {project.insights.map((insight, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start space-x-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Business Recommendations */}
            <div className="p-5 rounded-xl bg-slate-950/50 border-l-4 border-amber-500 border-t border-r border-b border-white/5">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>🚀 5. Actionable Recommendations</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.recommendation}
              </p>
            </div>

            {/* 6. Measurable Result & Impact */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border-l-4 border-emerald-500 border-t border-r border-b border-emerald-500/20">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                <span>📈 6. Business Result & Deliverable</span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {caseStudy.result}
              </p>
            </div>

            {/* Challenges & Solutions */}
            {caseStudy.challenges && (
              <div className="p-5 rounded-xl bg-slate-950/50 border border-white/10">
                <div className="flex items-center space-x-2 text-slate-300 font-bold text-sm uppercase tracking-wider mb-2 font-mono">
                  <span>⚡ Challenges Encountered & Technical Solutions</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {caseStudy.challenges}
                </p>
              </div>
            )}

          </div>

        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="bg-slate-950/90 p-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all flex items-center space-x-2"
            >
              <span>View Dashboard / Project</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-all flex items-center space-x-2"
            >
              <span>GitHub Repository</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
