import React from 'react';
import Link from 'next/link';
import {
  ZapIcon,
  ShieldIcon,
  CheckIcon,
  CheckCircleIcon,
  CpuIcon,
  ClockIcon,
  PhoneIcon,
  AwardIcon,
  ArrowRightIcon,
  FileTextIcon,
} from '@/components/ui/icons';

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/60 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            <span className="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" />
            About Me • Direct Partnership &amp; Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Why Founders &amp; Clients Hire Me <span className="text-gradient-cyan">As Their Dedicated Developer</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Direct developer collaboration, transparent milestone delivery, and 100% code ownership — taking your web projects from initial concept to a seamless, on-time launch.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Direct Senior Engineering &amp; <span className="text-gradient-cyan">How I Deliver For You</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              For the past 4+ years, I have partnered directly with founders, business owners, and growing teams. When you hire me, there is zero middleman communication or junior handoffs. You work directly with a dedicated senior engineer driving your architecture, building with craft, and communicating with complete transparency at every stage.
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Whether you need a high-converting business website, a custom WordPress architecture, or an interactive web application, I manage the entire process end-to-end — delivering fast load times, clean maintainable code, and guaranteed on-time launch.
            </p>

            {/* Core Pillars (Pure Cyan, zero shadow, 4px border radius) */}
            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center shrink-0 border border-[#06b6d4]/20">
                  <ZapIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Direct Collaboration (Zero Junior Handoffs)
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    You talk directly with the engineer writing your code. Daily check-ins via WhatsApp or Slack, fast feedback loops, and zero telephone games.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center shrink-0 border border-[#06b6d4]/20">
                  <CpuIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    Live Staging Previews &amp; Clear Milestones
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    Review live progress at every stage on a private staging URL. Predictable flat-rate pricing, weekly demos, and guaranteed sprint delivery dates.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center shrink-0 border border-[#06b6d4]/20">
                  <ShieldIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    100% Code Ownership &amp; 30-Day Warranty
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                    Full GitHub repository transfer, zero vendor lock-in, and 30 days of included post-launch bug warranty support so you launch with complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/profile"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#06b6d4] hover:text-[#0891b2] transition-colors"
              >
                <FileTextIcon className="w-4 h-4" />
                <span>Read Full Background, Certifications &amp; Education in Dossier →</span>
              </Link>
            </div>
          </div>

          {/* Client Standards & Guarantees Column */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Project Standards &amp; <span className="text-gradient-cyan">What You Can Expect</span>
            </h3>

            {/* 4 Guarantees 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Turnaround Time
                  </span>
                  <div className="w-7 h-7 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center border border-[#06b6d4]/20">
                    <ClockIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  1 – 3 Weeks
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Fast, predictable sprint delivery with weekly live demo checkpoints so you launch on schedule.
                </p>
              </div>

              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Direct Response
                  </span>
                  <div className="w-7 h-7 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center border border-[#06b6d4]/20">
                    <PhoneIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  &lt; 2h Response
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Direct communication via WhatsApp, Slack, or email. Zero middle managers or delayed email threads.
                </p>
              </div>

              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Asset Ownership
                  </span>
                  <div className="w-7 h-7 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center border border-[#06b6d4]/20">
                    <ShieldIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  100% Yours
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Full code, domain, and account ownership transferred to you upon completion. Zero vendor lock-in.
                </p>
              </div>

              <div className="p-4 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                    Post-Launch Care
                  </span>
                  <div className="w-7 h-7 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] flex items-center justify-center border border-[#06b6d4]/20">
                    <AwardIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">
                  30 Days Free
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Complimentary bug warranty &amp; technical check-ins after going live to guarantee flawless performance.
                </p>
              </div>
            </div>

            {/* Included in Every Project Card */}
            <div className="p-5 rounded-[4px] realistic-card border border-zinc-200 dark:border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <CheckCircleIcon className="w-4 h-4 text-[#06b6d4]" />
                  <span>Standard With Every Project</span>
                </h4>
                <span className="text-[11px] font-mono text-[#06b6d4] bg-[#06b6d4]/10 px-2 py-0.5 rounded-[4px] border border-[#06b6d4]/20 font-semibold">
                  Zero Extra Fees
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>100% Mobile &amp; Tablet Responsive</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>Sub-Second Page Load Speeds</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>Google Search (SEO) Setup</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>Private Staging Preview Link</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>Easy-to-Manage Content Controls</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                  <CheckIcon className="w-3.5 h-3.5 text-[#06b6d4] shrink-0 mt-0.5" />
                  <span>Domain, HTTPS &amp; SSL Security</span>
                </div>
              </div>
            </div>

            {/* Live Availability Status Strip */}
            <div className="p-4 rounded-[4px] bg-[#06b6d4]/5 border border-[#06b6d4]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    Currently Accepting New Client Projects
                  </div>
                  <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Typical project kick-off within 48 to 72 hours
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-bold bg-[#0219ac] text-white hover:bg-[#0219ac]/90 transition-colors shrink-0"
              >
                <span>Discuss Your Project</span>
                <ArrowRightIcon className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
