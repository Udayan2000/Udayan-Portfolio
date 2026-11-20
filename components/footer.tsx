'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { TerminalIcon, GithubIcon, LinkedinIcon, ArrowRightIcon } from '@/components/ui/icons';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-12 sm:py-16 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Freelance Status */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#06b6d4] flex items-center justify-center text-white border border-[#06b6d4]/40">
              <TerminalIcon className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100">
                Udayan Ghosh <span className="text-[#06b6d4]">.</span>
              </span>
              <span className="text-[11px] text-zinc-500 block">
                Senior Full-Stack Freelance Engineer (4+ Years Exp)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-5 text-xs font-medium text-zinc-600 dark:text-zinc-400 flex-wrap justify-center">
            <Link href="#services" className="hover:text-[#06b6d4] transition-colors">
              Services
            </Link>
            <Link href="#experience" className="hover:text-[#06b6d4] transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="hover:text-[#06b6d4] transition-colors">
              Projects
            </Link>
            <Link href="#about" className="hover:text-[#06b6d4] transition-colors">
              About
            </Link>
            <Link href="/profile" className="text-[#06b6d4] font-semibold hover:underline flex items-center gap-1 transition-colors">
              <span>LinkedIn Dossier & CV</span>
              <ArrowRightIcon className="w-3 h-3" />
            </Link>
          </div>

          {/* Socials & Copyright */}
          <div className="flex items-center gap-3 text-xs text-zinc-500">
            <span>© {currentYear} Udayan Ghosh All rights reserved.</span>
            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#06b6d4] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#06b6d4] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
