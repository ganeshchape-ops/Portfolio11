import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 mb-4">
            <span>📜</span>
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certificates & Learning
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Formal certifications and specialized training in analytics & tooling.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-panel p-6 flex flex-col justify-between group hover:border-purple-500/50 relative overflow-hidden"
            >
              <div>
                {/* Top Badge & Issuer */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {cert.badgeText || 'Verified Skill'}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {cert.date}
                  </span>
                </div>

                {/* Certificate Icon & Title */}
                <div className="flex items-start space-x-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 border border-purple-500/30 flex items-center justify-center text-lg flex-shrink-0">
                    {index === 0 && '🐍'}
                    {index === 1 && '📊'}
                    {index === 2 && '📑'}
                    {index === 3 && '🗄️'}
                    {index === 4 && '🌐'}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-medium text-cyan-400 mt-0.5">
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed mt-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Credential Link Button */}
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                  <span>✓</span>
                  <span>Verified Credential</span>
                </span>

                <a
                  href={cert.credentialId ? cert.credentialId : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center space-x-1"
                >
                  <span>Show Credential</span>
                  <span>↗</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
