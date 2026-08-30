import React from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Services() {
  const { services } = portfolioData;

  const serviceIcons = {
    'data-cleaning': '🧹',
    'eda': '🔍',
    'power-bi': '📊',
    'excel-analysis': '📑',
    'python-analysis': '🐍',
    'data-visualization': '📈'
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      {/* Subtle Background Glow */}
      <div className="orb-glow w-80 h-80 bg-blue-600/10 bottom-10 left-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-4">
            <span>💼</span>
            <span>SOLUTIONS & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Help With
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            End-to-end data analytics solutions tailored to business goals.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id || index}
              className="glass-panel p-7 flex flex-col justify-between group hover:border-purple-500/50 relative overflow-hidden"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Icon & Service Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600/20 via-indigo-600/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:border-purple-400 transition-all">
                    {serviceIcons[service.id] || '📊'}
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-slate-700 group-hover:text-purple-400/60 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Deliverables List */}
                {service.deliverables && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs text-slate-300 flex items-start space-x-2">
                          <span className="text-purple-400 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Action / CTA indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-purple-400 group-hover:text-cyan-300 transition-colors">
                <a href="#contact" className="flex items-center space-x-1.5">
                  <span>Discuss a Project</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
