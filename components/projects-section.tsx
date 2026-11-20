'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/data/portfolio-data';
import { ExternalLinkIcon, CheckIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CATEGORIES = [
  'All',
  'Website Development',
  'Ecommerce Website',
  'Wordpress',
  'App Development',
  'Product',
  'Agentic AI',
] as const;

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            Selected Client Work &amp; Engineering Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Featured Projects &amp; <span className="text-gradient-cyan">Real Client Work</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Explore custom websites, e-commerce stores, WordPress platforms, web apps, and AI automations built and delivered for clients.
          </p>
        </div>

        {/* Category Filters (Clean tactile borders, 4px border radius) */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-[4px] text-xs font-semibold transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#0219ac] text-white border-[#0219ac] shadow-none'
                    : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:border-[#06b6d4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid (Matte Realistic Cards, 4px border radius) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="realistic-card rounded-[4px] p-6 sm:p-7 flex flex-col justify-between border border-zinc-200 dark:border-zinc-800 group"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
                      {project.year}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {project.role}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-[#06b6d4] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-semibold text-[#06b6d4] mb-2.5">
                  {project.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Solutions & What Was Built */}
                <div className="space-y-2 pt-3.5 border-t border-zinc-200 dark:border-zinc-800 mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block">
                    What Was Built &amp; Delivered
                  </span>
                  <div className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <span className="text-[#06b6d4] mt-0.5 shrink-0">
                          <CheckIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Result & Business Outcome */}
                <div className="p-3 rounded-[4px] bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-start gap-2 text-xs mb-2">
                  <span className="text-emerald-500 font-bold shrink-0">
                    ✓ Result:
                  </span>
                  <span className="text-zinc-700 dark:text-zinc-300 leading-snug">
                    {project.outcome}
                  </span>
                </div>
              </div>

              <div>
                {/* Action Links */}
                <div className="flex items-center justify-between gap-4 pt-3.5 border-t border-zinc-200 dark:border-zinc-800">
                  <div>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:text-[#06b6d4] transition-colors"
                      >
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                        <span>View Live Site</span>
                      </a>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#06b6d4] hover:text-[#0891b2] transition-colors"
                  >
                    <span>Inquire for Similar Project</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button Section linking to Profile / LinkedIn View using Reusable Button */}
        <div className="mt-14 text-center">
          <Button href="/profile" variant="primary">
            <span>View More Projects in Full Profile & Document Dossier</span>
            <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>

      </div>
    </section>
  );
}
