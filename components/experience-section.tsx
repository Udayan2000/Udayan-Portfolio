import React from 'react';
import { EXPERIENCES } from '@/data/portfolio-data';
import { BriefcaseIcon, CheckIcon, MapPinIcon, CalendarIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            Work History &amp; Proven Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            4+ Years of <span className="text-gradient-cyan">Professional Web Developer &amp; Proven Delivery</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            A hands-on journey from frontend developer to autonomous full-stack engineer, trusted by founders, businesses, and agencies for turnkey web solutions.
          </p>
        </div>

        {/* Timeline Container (Pure Cyan Theme, Zero Box Shadows) */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-[#06b6d4] via-[#0891b2] to-zinc-400 -translate-x-1/2 hidden sm:block opacity-50" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="hidden sm:flex absolute left-1/2 top-7 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-zinc-900 border-2 border-[#06b6d4] items-center justify-center z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
                  </div>

                  {/* Date Badge Side (Desktop) */}
                  <div className={`hidden sm:block w-1/2 ${isEven ? 'text-right' : 'text-left'}`}>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-xs font-mono font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700">
                      <CalendarIcon className="w-3 h-3 text-[#06b6d4]" />
                      <span>{exp.period}</span>
                    </div>
                    <div className={`text-xs text-zinc-500 dark:text-zinc-400 mt-1 flex items-center gap-1 ${isEven ? 'justify-start' : 'justify-end'} sm:justify-inherit`}>
                      <MapPinIcon className="w-3 h-3 text-[#06b6d4]" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Card Content Side (Realistic Flat Card, 4px border radius) */}
                  <div className="w-full sm:w-1/2">
                    <div className="realistic-card p-6 rounded-[4px] border border-zinc-200 dark:border-zinc-800 space-y-3.5">
                      
                      {/* Mobile Date & Tag */}
                      <div className="flex sm:hidden items-center justify-between gap-2 flex-wrap mb-1">
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-[#06b6d4] font-semibold">
                          <CalendarIcon className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                          <MapPinIcon className="w-3 h-3 text-[#06b6d4]" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                            {exp.role}
                          </h3>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] border bg-[#06b6d4]/10 text-[#06b6d4] border-[#06b6d4]/30">
                            {exp.type}
                          </span>
                        </div>
                        {/* <p className="text-xs font-semibold text-[#06b6d4] mt-0.5">
                          {exp.company}
                        </p> */}
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        {exp.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                            <span className="text-[#06b6d4] mt-0.5 shrink-0">
                              <CheckIcon className="w-3 h-3" />
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 pt-2 border-t border-zinc-200 dark:border-zinc-800">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-1.5 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View More Button Section linking to Profile / CV using Reusable Button */}
        <div className="mt-14 text-center">
          <Button href="/profile" variant="outline">
            <BriefcaseIcon className="w-4 h-4 text-[#06b6d4]" />
            <span>View More Experience & Full LinkedIn Dossier</span>
            <ArrowRightIcon className="w-4 h-4 text-[#06b6d4]" />
          </Button>
        </div>

      </div>
    </section>
  );
}
