import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ArrowRightIcon, FileTextIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { HeroStats } from '@/components/hero-stats';

export function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden ambient-bg">
      {/* Subtle realistic ambient tint lines */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 w-80 h-80 bg-[#06b6d4]/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content (Left Value Proposition expanded cleanly) */}
        <div className="max-w-4xl space-y-6 text-center lg:text-left">

          {/* Availability Pill (Matte Cyan, 4px border radius) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] text-xs font-semibold bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-zinc-900 dark:text-zinc-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]"></span>
            </span>
            <span>{PERSONAL_INFO.availability}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.18]">
            {/* Primary Role Anchor */}
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gradient-cyan mb-2">
              Freelance Web Developer
            </span>

            {/* Delivery Scope & Execution */}
            <span className="block text-base sm:text-lg lg:text-xl font-semibold text-zinc-600 dark:text-zinc-400 mt-2 leading-snug">
              Business Websites &amp; Web Applications{' '}
              <span className="text-[#06b6d4] font-light mx-1 sm:mx-1.5 opacity-80">|</span>{' '}
              End-to-End Project Management
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Hi, I&apos;m <strong className="text-zinc-900 dark:text-zinc-100 font-bold">Udayan Ghosh</strong>.
            I help businesses and founders build websites and web apps that look great, load fast, and work reliably.
            Whether you need an easy-to-manage WordPress site or custom full-stack software, I take care of the entire
            project from design to launch — on time and without the technical headache.
          </p>

          {/* CTA Buttons (#0219ac, 44px uniform height, 4px radius) */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <Button href="#contact" variant="primary">
              <span>Hire for a Project</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>

            <Button href="/profile" variant="outline">
              <FileTextIcon className="w-4 h-4 text-[#06b6d4]" />
              <span>View Full Profile & CV</span>
            </Button>
          </div>

        </div>

        {/* High-Engagement Freelance Stats - Aligned within max-w-7xl with uniform spacing */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <HeroStats />
        </div>
      </div>
    </section>
  );
}
