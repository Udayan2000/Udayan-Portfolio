'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/components/theme-provider';
import { SunIcon, MoonIcon, TerminalIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-[background-color,border-color,backdrop-filter] duration-300 ease-out border-b ${scrolled
          ? 'bg-white/90 dark:bg-[#090b0e]/90 backdrop-blur-md border-zinc-200/80 dark:border-zinc-800/80'
          : 'bg-transparent backdrop-blur-none border-transparent'
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-[4px] bg-[#06b6d4] flex items-center justify-center text-white border border-[#06b6d4]/40">
              <TerminalIcon className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight block text-zinc-900 dark:text-zinc-100 leading-tight">
              Udayan Ghosh<span className="text-[#06b6d4]">.</span>
              </span>
              <span className="text-[11px] font-semibold text-[#06b6d4] tracking-wide uppercase">
                Freelance Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md">
            <Link
              href="#experience"
              className="px-3.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
            >
              Experience
            </Link>

            <Link
              href="#services"
              className="px-3.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
            >
              Services
            </Link>

            <Link
              href="#projects"
              className="px-3.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="px-3.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="px-3.5 py-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/profile"
              className="px-3 py-1 text-xs font-bold text-[#06b6d4] hover:text-[#0891b2] transition-colors flex items-center gap-1.5"
            >
              <span>Profile & CV</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded-[4px] border border-[#06b6d4]/40 bg-[#06b6d4]/10 text-[#06b6d4]">
                Dossier
              </span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-[44px] h-[44px] rounded-[4px] flex items-center justify-center border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:border-[#0219ac] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              {mounted ? (
                resolvedTheme === 'dark' ? (
                  <SunIcon className="w-4 h-4 text-[#06b6d4]" />
                ) : (
                  <MoonIcon className="w-4 h-4 text-[#06b6d4]" />
                )
              ) : (
                <div className="w-4 h-4" />
              )}
            </button>

            {/* Hire Me CTA using Reusable Button Component */}
            <div className="hidden sm:block">
              <Button href="#contact" variant="primary">
                <span>Hire Me</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-[4px] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 h-[44px] w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[72px] left-4 right-4 p-4 rounded-[4px] bg-white/95 dark:bg-[#11141a]/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 space-y-2.5">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#06b6d4]"
            >
              Services
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#06b6d4]"
            >
              Experience
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#06b6d4]"
            >
              Projects
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#06b6d4]"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-zinc-700 dark:text-zinc-200 hover:text-[#06b6d4]"
            >
              Contact
            </Link>
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold text-[#06b6d4]"
            >
              Full Profile & LinkedIn Dossier →
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
