'use client';

import React from 'react';
import { SERVICES } from '@/data/portfolio-data';
import {
  CheckIcon,
  ArrowRightIcon,
  ZapIcon,
  SparklesIcon,
  CpuIcon,
  CodeIcon,
  GlobeIcon,
  BriefcaseIcon,
  AwardIcon,
  ShieldIcon,
  CheckCircleIcon,
  ClockIcon
} from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

const serviceIcons: Record<string, React.ReactNode> = {
  'website-development': <CodeIcon className="w-5 h-5 text-[#06b6d4]" />,
  'wordpress-development': <GlobeIcon className="w-5 h-5 text-[#06b6d4]" />,
  'app-development': <ZapIcon className="w-5 h-5 text-[#06b6d4]" />,
  'product-development': <SparklesIcon className="w-5 h-5 text-[#06b6d4]" />,
  'ai-workflow-automation': <CpuIcon className="w-5 h-5 text-[#06b6d4]" />,
  'b2b-services': <BriefcaseIcon className="w-5 h-5 text-[#06b6d4]" />,
  'seo-digital-marketing': <AwardIcon className="w-5 h-5 text-[#06b6d4]" />,
  'website-maintenance': <ShieldIcon className="w-5 h-5 text-[#06b6d4]" />,
};

// 4-Step Client Journey for maximum trust & clarity
const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Discovery & Scope',
    timeframe: 'Day 1',
    description: 'A focused 20-min strategy call to analyze your goals, user flows, and technical requirements. No jargon, just clear alignment.'
  },
  {
    step: '02',
    title: 'Milestone Proposal',
    timeframe: 'Day 2',
    description: 'Guaranteed flat-rate proposal with a concrete sprint breakdown, exact delivery dates, and clear deliverables. Zero surprise fees.'
  },
  {
    step: '03',
    title: 'Rapid Build & Staging',
    timeframe: 'Sprint Phase',
    description: 'Continuous development with live staging previews. You test and see real progress daily with direct WhatsApp or Slack collaboration.'
  },
  {
    step: '04',
    title: 'Launch & 30-Day Care',
    timeframe: 'Deployment',
    description: 'Production cloud launch, 100% full GitHub repository handover, DNS setup, plus 30 days of included post-launch bug warranty.'
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            Freelance Services &amp; Core Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            High-Impact Web Engineering &amp;{' '}
            <span className="text-gradient-cyan">Digital Growth Services</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Whether you are a founder launching a new venture, an established business looking to scale, or an agency needing an elite freelance engineer — I deliver production-ready web architectures with 100% code ownership, zero agency overhead, and guaranteed on-time delivery.
          </p>

      
        </div>

        {/* Services Grid (All 8 Core Offerings Visible Directly • Zero Box Shadows • Pure Cyan Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {SERVICES.map((service, index) => {
            const isHighlight = service.highlight !== undefined;
            const serviceIndexFormatted = String(index + 1).padStart(2, '0');

            return (
              <div
                key={service.id}
                className={`realistic-card  p-6 flex flex-col justify-between transition-all duration-300 relative group  ${
                  isHighlight
                    ? 'border-2 border-[#06b6d4]/70 bg-white dark:bg-zinc-900'
                    : 'border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 hover:border-[#06b6d4]'
                }`}
              >
                {/* Highlight Badge if applicable */}
                {service.highlight && (
                  <div className="absolute -top-3 right-5 px-2.5 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider bg-[#06b6d4] text-white">
                    {service.highlight}
                  </div>
                )}

                <div>
                  {/* Top Meta Bar: Service Number & Turnaround Time */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-xs font-mono font-bold text-zinc-400 dark:text-zinc-500">
                      [{serviceIndexFormatted} / 08]
                    </span>
                    <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                      ⚡ {service.turnaround}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-[4px] bg-[#06b6d4]/10 flex items-center justify-center border border-[#06b6d4]/20 group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                      {serviceIcons[service.id] || <CodeIcon className="w-5 h-5 text-[#06b6d4]" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug group-hover:text-[#06b6d4] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-[#06b6d4]">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* "Best Suited For" Callout - Immediate Clarity for Non-Technical Clients */}
                  {service.idealFor && (
                    <div className="mb-4 p-2.5 rounded-[4px] bg-zinc-100/80 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-0.5">
                        🎯 Best Suited For:
                      </span>
                      <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                        {service.idealFor}
                      </p>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Deliverables Checklist */}
                  <div className="space-y-2 pt-3.5 border-t border-zinc-200 dark:border-zinc-800 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block mb-1">
                      Key Deliverables
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="text-[#06b6d4] mt-0.5 shrink-0">
                          <CheckIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Pills & Standardized Button (#0219ac, 44px uniform height, 4px radius) */}
                <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button href="#contact" variant="primary" className="w-full">
                    <span>Inquire for This Service</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent 4-Step Client Journey Workflow */}
        <div className="mt-16 p-6 sm:p-8 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] text-[11px] font-mono font-bold uppercase tracking-wider text-[#06b6d4] bg-[#06b6d4]/10 border border-[#06b6d4]/30 mb-2">
              <ClockIcon className="w-3.5 h-3.5" />
              Transparent Working Process
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              How We Collaborate From Concept to Launch
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
              Zero ambiguity, no technical runarounds. Here is exactly what happens when you work with me:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-[4px] bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-extrabold font-mono text-[#06b6d4]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-[4px] bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                      {step.timeframe}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center gap-1.5 text-[11px] text-[#06b6d4] font-semibold">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Realistic Client Peace-of-Mind Guarantee Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-[4px] realistic-card border border-zinc-300 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-white dark:bg-zinc-900">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#06b6d4] font-bold">
              <span>🛡️ FREELANCE CLIENT GUARANTEE</span>
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Need a custom bundle or strategic technical retainer?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 max-w-2xl">
              100% full code ownership • Clean GitHub repository transfer • 30 days of post-launch bug warranty support included on every project. Available to start within 48 hours.
            </p>
          </div>
          <Button href="#contact" variant="primary">
            <span>Schedule a Project Discovery Call</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
