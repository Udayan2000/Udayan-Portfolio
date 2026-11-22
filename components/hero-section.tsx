'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import {
  ArrowRightIcon,
  FileTextIcon,
  SparklesIcon,
  BotIcon,
  SendIcon,
} from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import { HeroVideoShowcase } from '@/components/hero-video-showcase';
import { HeroStats } from '@/components/hero-stats';

const QUICK_PROMPTS = [
  {
    label: '⚡ 48-Hour Turnaround',
    query: 'What is your typical project delivery timeline and turnaround?',
  },
  {
    label: '🤖 Custom AI Copilots',
    query: 'How do you build custom AI chatbots and automated workflows?',
  },
  {
    label: '💼 Project Quote',
    query: 'Can you provide a pricing estimate and quote for a new web project?',
  },
];

export function HeroSection() {
  const [aiPromptInput, setAiPromptInput] = useState('');

  const triggerAiChat = (message: string, autoSend = true) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat', {
          detail: { message, autoSend },
        })
      );
    }
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPromptInput.trim()) return;
    triggerAiChat(aiPromptInput.trim(), true);
    setAiPromptInput('');
  };

  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden ambient-bg">
      {/* Neural Matrix & Radial Grid Background Overlay */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        {/* Subtle Neural Matrix Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px] opacity-20 dark:opacity-25" />
        {/* Soft Ambient Depth Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#06b6d4]/10 rounded-full blur-3xl" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-[#0219ac]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

          {/* Left Column: Full-Stack & AI Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">

            {/* Status Pills: Availability + Live AI Copilot */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Availability Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] text-xs font-semibold bg-[#06b6d4]/10 border border-[#06b6d4]/30 text-zinc-900 dark:text-zinc-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]" />
                </span>
                <span>{PERSONAL_INFO.availability}</span>
              </div>

              {/* AI Copilot Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] text-xs font-mono font-medium bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300">
                <SparklesIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span>AI Copilot Active</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.18]">
              {/* Primary Role Anchor */}
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gradient-cyan mb-2">
                Full-Stack &amp; AI Engineer
              </span>

              {/* Delivery Scope & Execution */}
              <span className="block text-base sm:text-lg lg:text-xl font-semibold text-zinc-600 dark:text-zinc-400 mt-2 leading-snug">
                Autonomous AI Systems &amp; Web Applications{' '}
                <span className="text-[#06b6d4] font-light mx-1 sm:mx-1.5 opacity-80">|</span>{' '}
                Production-Ready Code
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Hi, I&apos;m <strong className="text-zinc-900 dark:text-zinc-100 font-bold">Udayan Ghosh</strong>.
              I engineer high-converting web applications, intelligent AI copilot agents, and robust full-stack software.
              Whether you need scalable cloud architectures, custom WordPress portals, or autonomous chatbot pipelines,
              I build reliable solutions from concept to launch with zero vendor lock-in.
            </p>

            {/* Interactive AI Prompt Command Capsule (Realistic AI Feature) */}
            <div className="p-3 rounded-[4px] border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md realistic-card text-left">
              <div className="flex items-center justify-between pb-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5 font-bold text-zinc-800 dark:text-zinc-200">
                  <BotIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                  <span>Interactive AI Copilot</span>
                </span>
                <span className="text-[10px] text-[#06b6d4] font-semibold">Gemini 3.5 • Instant Replies</span>
              </div>

              {/* Prompt Input Form */}
              <form onSubmit={handlePromptSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={aiPromptInput}
                  onChange={(e) => setAiPromptInput(e.target.value)}
                  placeholder="Ask my AI copilot about project timeline, rates, tech..."
                  className="flex-1 h-[40px] px-3 text-xs rounded-[4px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 focus:border-[#06b6d4] outline-none text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 font-sans"
                />
                <button
                  type="submit"
                  aria-label="Send query to AI copilot"
                  className="h-[40px] px-3.5 rounded-[4px] bg-[#0219ac] hover:bg-[#0219ac]/90 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <span>Ask AI</span>
                  <SendIcon className="w-3 h-3 text-[#06b6d4]" />
                </button>
              </form>

              {/* Quick-Trigger Prompt Chips */}
              <div className="mt-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-wrap items-center gap-1.5">
                <span className="text-[10px] font-mono text-zinc-400 mr-0.5">Quick Ask:</span>
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => triggerAiChat(prompt.query, true)}
                    className="text-[11px] px-2 py-0.5 rounded-[3px] bg-zinc-100 dark:bg-zinc-800/80 hover:bg-[#06b6d4]/10 border border-zinc-200 dark:border-zinc-700/80 hover:border-[#06b6d4]/40 text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors cursor-pointer leading-tight"
                  >
                    {prompt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons (#0219ac, 44px uniform height, 4px radius) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Button href="#contact" variant="primary">
                <span>Hire for a Project</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Button>

              <Button href="/profile" variant="outline">
                <FileTextIcon className="w-4 h-4 text-[#06b6d4]" />
                <span>View Full Profile &amp; CV</span>
              </Button>
            </div>

          </div>

          {/* Right Column: Modern Video Showcase Player */}
          <div className="lg:col-span-6 relative w-full">
            <HeroVideoShowcase />
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