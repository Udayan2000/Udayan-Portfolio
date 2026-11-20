'use client';

import React, { useState } from 'react';
import { SparklesIcon, CheckCircleIcon } from '@/components/ui/icons';

interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  badge: string;
  highlightColor?: string;
}

const METRICS: MetricItem[] = [
  {
    id: 'experience',
    value: '4+ Years',
    label: 'Freelance Experience',
    subtext: 'Active Since 2020',
    badge: 'Proven Impact',
  },
  {
    id: 'projects',
    value: '38+',
    label: 'Projects Delivered',
    subtext: 'Websites & Web Apps',
    badge: '100% On-Time',
  },
  {
    id: 'satisfaction',
    value: '100%',
    label: 'Client Satisfaction',
    subtext: '5.0 ★ Client Rating',
    badge: 'Zero Ghosting',
  },
  {
    id: 'performance',
    value: '99/100',
    label: 'Core Web Vitals',
    subtext: 'Sub-Second Speed',
    badge: 'SEO Optimized',
  },
];

export function HeroStats() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div className="pt-4 select-none">
      {/* Matte Realistic Container - Zero Box Shadow, Crisp Borders */}
      <div className="rounded-[4px] border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-3.5 sm:p-4 transition-all duration-300">
        
        {/* Top Trust Header: Live Pulsing Beacon for Eye Contact */}
        <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              VERIFIED FREELANCE TRACK RECORD
              <span className="text-[#06b6d4] font-sans font-semibold text-[10px] hidden sm:inline">• Q1/Q2 Active</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono">
            <span className="px-2 py-0.5 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] font-bold border border-[#06b6d4]/20 hidden xs:inline-flex items-center gap-1">
              <span>Direct Developer Hire</span>
              <span className="text-emerald-500">✓</span>
            </span>
          </div>
        </div>

        {/* 4 Interactive Columns with Micro-Animations & Eye-Contact Hover Dynamics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
          {METRICS.map((metric, idx) => {
            const isHovered = activeIdx === idx;
            return (
              <div
                key={metric.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                className={`relative p-2.5 sm:p-3 rounded-[4px] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isHovered
                    ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#06b6d4] -translate-y-0.5'
                    : 'bg-zinc-50/50 dark:bg-zinc-900/50 border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700'
                }`}
              >
                {/* Top Value with Cyan Gradient & Scale Animation */}
                <div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-2xl sm:text-[28px] font-black tracking-tight text-gradient-cyan block leading-none transition-transform duration-300">
                      {metric.value}
                    </span>
                    {/* Dynamic Active Micro-Indicator */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isHovered ? 'bg-[#06b6d4] scale-125' : 'bg-transparent'
                      }`}
                    />
                  </div>

                  {/* Primary Label */}
                  <span className="text-xs sm:text-[12.5px] font-bold text-zinc-900 dark:text-zinc-100 block mt-1.5 leading-snug">
                    {metric.label}
                  </span>

                  {/* Subtext */}
                  <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-medium">
                    {metric.subtext}
                  </span>
                </div>

                {/* Bottom Trust Badge Pill */}
                <div className="mt-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
                  <span
                    className={`text-[9.5px] font-mono font-bold px-1.5 py-0.5 rounded-[3px] transition-colors duration-300 ${
                      isHovered
                        ? 'bg-[#06b6d4]/15 text-[#06b6d4]'
                        : 'bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-400'
                    }`}
                  >
                    {metric.badge}
                  </span>
                  <span className="text-[10px] text-emerald-500 font-bold">✓</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Micro-Guarantee Bar */}
        <div className="mt-3 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-500">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="text-[#06b6d4]">⚡</span>
            <span>Sub-second page loads • Clean maintainable code • Transparent weekly updates</span>
          </div>
          <span className="font-mono text-[10px] text-zinc-600 dark:text-zinc-400 font-semibold">
            Guaranteed On-Time Delivery
          </span>
        </div>

      </div>
    </div>
  );
}
