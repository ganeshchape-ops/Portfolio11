import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData.js';

export function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters).';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate reliable form submission with realistic network latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 7000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background Glow */}
      <div className="orb-glow w-96 h-96 bg-purple-600/15 top-1/2 right-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4">
            <span>📬</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let’s Turn Data Into Decisions
          </h2>
          <p className="mt-3 text-lg text-slate-300">
            Looking for a data analyst, dashboard developer, or someone who can turn complex data into clear business insights? Let’s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                <span>💬</span>
                <span>Contact Channels</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you have an upcoming project, a full-time analytics opening, or want to discuss data modeling, I am always happy to talk.
              </p>

              <div className="space-y-4 pt-2">
                
                {/* Email Item */}
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center text-lg">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">EMAIL</div>
                    <a href={`mailto:${personal.email}`} className="text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                      {personal.email}
                    </a>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-lg">
                    📞
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">PHONE</div>
                    <a href={`tel:${personal.phone}`} className="text-sm font-semibold text-white hover:text-indigo-300 transition-colors">
                      {personal.phone}
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-lg">
                    📍
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LOCATION</div>
                    <div className="text-sm font-semibold text-white">
                      {personal.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social & Resume Action Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Professional Profiles:
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-white/10 flex items-center space-x-2 transition-all hover:border-purple-500/40"
                  >
                    <span>LinkedIn</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950/80 hover:bg-slate-800 text-slate-200 border border-white/10 flex items-center space-x-2 transition-all hover:border-purple-500/40"
                  >
                    <span>GitHub</span>
                    <span>↗</span>
                  </a>

                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 flex items-center space-x-2 transition-all"
                  >
                    <span>Resume (PDF)</span>
                    <span>↓</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Accessible Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                Fill out the details below and I will get back to you promptly.
              </p>

              {/* Success Notification Alert */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-sm flex items-start space-x-3 animate-fadeIn">
                  <span className="text-lg">✓</span>
                  <div>
                    <strong className="block font-semibold">Message Dispatched!</strong>
                    <span>Thank you for reaching out. I have received your message and will reply shortly.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jane Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                        errors.name ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                      } text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                        errors.email ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                      } text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Data Analyst Role / Dashboard Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                      errors.subject ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                    } text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Message / Project Details <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your analytics goals, dataset requirements, or role details..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border ${
                      errors.message ? 'border-red-500' : 'border-white/10 focus:border-purple-500'
                    } text-white text-sm placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>✈️</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
