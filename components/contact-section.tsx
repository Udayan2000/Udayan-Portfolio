'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { MailIcon, CopyIcon, CheckIcon, CalendarIcon, ClockIcon, GlobeIcon, ArrowRightIcon, LinkedinIcon, GithubIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

const BUDGETS = ['< $3,000', '$3,000 - $7,000', '$7,000 - $15,000', '$15,000+ / Retainer'];
const TIMELINES = ['Immediate (Under 2 wks)', '2 - 4 Weeks', '1 - 2 Months', 'Flexible / Long-term'];

export function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState(BUDGETS[1]);
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINES[1]);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            Let&apos;s Build Together
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Start a Project or <span className="text-gradient-cyan">Hire Me for Your Next Sprint</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Have a project in mind, an MVP to build, or a web platform that needs optimization? Send me a note and I will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info & Timezone Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-5">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                Direct <span className="text-gradient-cyan">Contact Channels</span>
              </h3>

              {/* Email Copy Card with Reusable Button */}
              <div className="p-3.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <div className="w-9 h-9 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center shrink-0 border border-[#06b6d4]/20">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-zinc-400 block font-medium">Direct Email</span>
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="px-3"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span className="text-[#06b6d4]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Timezone & Availability */}
              <div className="space-y-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-start gap-2.5">
                  <GlobeIcon className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Location & Timezone:</span>
                    <p className="text-xs text-zinc-500 mt-0.5">India (UTC+5:30) • Seamless 4-5 hour daily overlap with US EST & European CET work hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <ClockIcon className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Typical Turnaround:</span>
                    <p className="text-xs text-zinc-500 mt-0.5">Initial estimate within 24 hours. Code commits start within 48 hours of agreement.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CalendarIcon className="w-4 h-4 text-[#06b6d4] mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-zinc-900 dark:text-zinc-100">Engagement Models:</span>
                    <p className="text-xs text-zinc-500 mt-0.5">Fixed Price Milestones, Hourly Consulting ($65-$95/hr), or Monthly Dedicated Sprints.</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44px] h-[44px] rounded-[4px] bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] hover:border-[#0219ac] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-zinc-200 dark:border-zinc-800"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[44px] h-[44px] rounded-[4px] bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] hover:border-[#0219ac] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 border border-zinc-200 dark:border-zinc-800"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-12 h-12 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] mx-auto flex items-center justify-center border border-[#06b6d4]/30">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    Inquiry Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                    Thank you for reaching out, <strong className="text-zinc-900 dark:text-zinc-100">{formData.name}</strong>. I will review your project details and get back to you at <strong className="text-zinc-900 dark:text-zinc-100">{formData.email}</strong> within 24 hours.
                  </p>
                  <div className="pt-2">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', message: '' });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Budget Selector */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`h-[40px] px-2 rounded-[4px] text-xs font-semibold text-center transition-all duration-200 border ${
                            selectedBudget === b
                              ? 'bg-[#0219ac] text-white border-[#0219ac]'
                              : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-[#0219ac]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                      Expected Timeline
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TIMELINES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTimeline(t)}
                          className={`h-[40px] px-2 rounded-[4px] text-xs font-semibold text-center transition-all duration-200 border ${
                            selectedTimeline === t
                              ? 'bg-[#0219ac] text-white border-[#0219ac]'
                              : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-[#0219ac]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        Your Name / Organization
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Connor"
                        className="w-full h-[44px] px-3.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#0219ac]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@startup.com"
                        className="w-full h-[44px] px-3.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#0219ac]"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product, what you need built, existing tech stack or links to Figma mockups..."
                      className="w-full px-3.5 py-2.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 text-xs focus:outline-none focus:border-[#0219ac] resize-none"
                    />
                  </div>

                  {/* Submit Button Using Reusable Button Component (#0219ac, 44px uniform height, 4px radius) */}
                  <Button type="submit" variant="primary" className="w-full">
                    <span>Send Project Inquiry</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
