import React from 'react';
import { TESTIMONIALS } from '@/data/portfolio-data';
import { StarIcon } from '@/components/ui/icons';

export function TestimonialsSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 lg:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/30">
            Client Endorsements & Proof
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
            Trusted by <span className="text-gradient-cyan">Founders, CTOs & Agencies</span>
          </h2>
          <p className="text-base text-zinc-600 dark:text-zinc-300">
            Hear directly from tech founders and engineering leaders who relied on me to deliver their high-stakes web software.
          </p>
        </div>

        {/* Testimonials Grid (Realistic Flat Cards, Pure Cyan Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="realistic-card rounded-xl p-6 flex flex-col justify-between border border-zinc-200 dark:border-zinc-800"
            >
              <div>
                {/* 5 Stars with Cyan tone */}
                <div className="flex items-center gap-1 text-[#06b6d4] mb-3.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 italic leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 flex items-center justify-center font-bold text-xs">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] text-zinc-500">
                    {t.clientRole} • {t.company}
                  </p>
                  <p className="text-[10px] font-mono text-[#06b6d4] mt-0.5">
                    Project: {t.projectWorkedOn}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
