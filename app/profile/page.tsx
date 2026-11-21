'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PERSONAL_INFO, PROFILE_DOSSIER, EXPERIENCES, PROJECTS, TESTIMONIALS, SKILL_CATEGORIES } from '@/data/portfolio-data';
import {
  LinkedinIcon,
  GithubIcon,
  MailIcon,
  MapPinIcon,
  GlobeIcon,
  CheckCircleIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  AwardIcon,
  DownloadIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  ThumbsUpIcon,
  FileTextIcon,
  TerminalIcon,
  CalendarIcon,
  StarIcon
} from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

type ViewMode = 'linkedin' | 'document';

export default function ProfilePage() {
  const [viewMode, setViewMode] = useState<ViewMode>('linkedin');

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Udayan_Ghosh_CV.pdf';
    link.download = 'Udayan_Ghosh_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
      
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-40 flat-panel border-b border-zinc-200 dark:border-zinc-800 py-2.5 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          
          {/* Back to Home Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#06b6d4] transition-colors"
          >
            <span>← Back to Portfolio Landing</span>
          </Link>

          {/* View Mode Toggle: LinkedIn Profile vs Executive CV Document (4px radius, 44px height) */}
          <div className="flex items-center gap-1 p-1 rounded-[4px] bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800">
            <button
              onClick={() => setViewMode('linkedin')}
              className={`flex items-center gap-1.5 h-[36px] px-3 rounded-[4px] text-xs font-bold transition-all duration-200 ${
                viewMode === 'linkedin'
                  ? 'bg-[#0219ac] text-white'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn Profile View</span>
            </button>

            <button
              onClick={() => setViewMode('document')}
              className={`flex items-center gap-1.5 h-[36px] px-3 rounded-[4px] text-xs font-bold transition-all duration-200 ${
                viewMode === 'document'
                  ? 'bg-[#0219ac] text-white'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <FileTextIcon className="w-3.5 h-3.5" />
              <span>Executive CV Document</span>
            </button>
          </div>

          {/* Direct Download Button using Reusable Button Component */}
          <Button variant="outline" onClick={handleDownloadCV}>
            <DownloadIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
            <span>Download CV (PDF)</span>
          </Button>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        
        {/* ============================================================== */}
        {/* VIEW 1: LINKEDIN PROFILE VIEW */}
        {/* ============================================================== */}
        {viewMode === 'linkedin' && (
          <div className="space-y-5">
            
            {/* 1. Header Card (Cover, Avatar, Info, Actions - 4px border radius) */}
            <div className="rounded-[4px] overflow-hidden realistic-card border border-zinc-200 dark:border-zinc-800">
              {/* Cover Banner */}
              <div
                className="h-40 sm:h-52 w-full relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #06b6d4 100%)'
                }}
              >
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-3 right-3 bg-black/40 px-2.5 py-0.5 rounded-[4px] text-white text-[11px] font-mono border border-white/20">
                  Senior Full-Stack Freelancer
                </div>
              </div>

              {/* Profile Bar */}
              <div className="px-6 sm:px-8 pb-7 pt-0 relative">
                {/* Avatar with Open to Work Ring */}
                <div className="relative -mt-16 sm:-mt-20 mb-3.5 inline-block">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-zinc-900 bg-zinc-900 text-white flex items-center justify-center font-black text-2xl relative overflow-hidden">
                    <span className="text-gradient-cyan">UG</span>
                    <div className="absolute inset-0 rounded-full border-3 border-[#06b6d4] pointer-events-none" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#06b6d4] border-2 border-white dark:border-zinc-900" title="Available for Hire" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h1 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">
                        <span className="text-gradient-cyan">{PROFILE_DOSSIER.fullName}</span>
                      </h1>
                      <span className="text-xs text-zinc-500">(He/Him)</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20">
                        <CheckCircleIcon className="w-3 h-3 text-[#06b6d4]" />
                        Verified Freelance Engineer
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-snug">
                      {PROFILE_DOSSIER.headline}
                    </p>

                    <div className="flex items-center gap-2.5 text-xs text-zinc-500 pt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPinIcon className="w-3 h-3 text-[#06b6d4]" />
                        {PROFILE_DOSSIER.location}
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-[#06b6d4]">
                        {PROFILE_DOSSIER.connections}
                      </span>
                    </div>
                  </div>

                  {/* Top Right Mini Org / Education pills */}
                  <div className="text-xs space-y-1 text-zinc-600 dark:text-zinc-400 shrink-0">
                    <div className="flex items-center gap-1.5">
                      <BriefcaseIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">Independent Freelance </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCapIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                      <span>University of Calcutta, Bangabasi c
ollege • B.Sc. in Computer Science (2019 - 2022)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Open to Work Banner */}
                <div className="mt-4 p-3 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 flex-wrap">
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                      Open to Work • Freelance, Contract & Full-Stack Consulting
                    </div>
                    <div className="text-[11px] text-zinc-500">
                      Roles: Senior Full-Stack Engineer, Next.js Architect, MVP Specialist
                    </div>
                  </div>
                  <Button href="/#contact" variant="primary">
                    Send Direct Inquiry →
                  </Button>
                </div>

                {/* Primary Action Buttons (Uniform height, #0219ac, 4px border radius) */}
                <div className="flex items-center gap-2.5 mt-4 flex-wrap">
                  <Button href="/#contact" variant="primary">
                    Open to Work
                  </Button>

                  <Button href={`mailto:${PERSONAL_INFO.email}`} variant="outline">
                    Direct Message
                  </Button>

                  <Button variant="outline" onClick={handleDownloadCV}>
                    <DownloadIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                    <span>Save as PDF / CV</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 2. About Summary Card */}
            <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-2">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                About
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {PROFILE_DOSSIER.summary}
              </p>
            </div>

            {/* 3. Featured Portfolio Projects */}
            <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-4">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Featured Work & <span className="text-gradient-cyan">Case Studies</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {PROJECTS.map((proj) => (
                  <div
                    key={proj.id}
                    className="p-4 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#06b6d4] mb-1">
                        <span>{proj.category}</span>
                        <span>{proj.year}</span>
                      </div>
                      <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-0.5">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-zinc-500 mb-2.5 line-clamp-2">
                        {proj.tagline}
                      </p>
                      {proj.outcome && (
                        <div className="text-[11px] text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/80 p-2 rounded-[4px] border border-zinc-200 dark:border-zinc-700/60 mb-3">
                          <span className="text-[#06b6d4] font-bold mr-1">✓ Result:</span>
                          <span>{proj.outcome}</span>
                        </div>
                      )}
                    </div>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#06b6d4] hover:underline"
                      >
                        <ExternalLinkIcon className="w-3 h-3" />
                        <span>View Live Deployment</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Experience Section */}
            <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-5">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Experience
              </h2>

              <div className="space-y-5">
                {EXPERIENCES.map((exp, idx) => (
                  <div key={exp.id} className={`flex items-start gap-3.5 ${idx !== 0 ? 'pt-5 border-t border-zinc-200 dark:border-zinc-800' : ''}`}>
                    <div className="w-10 h-10 rounded-[4px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[#06b6d4] flex items-center justify-center shrink-0">
                      <BriefcaseIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5 w-full">
                      <div>
                        <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
                          {exp.role}
                        </h3>
                        <div className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                           <span className="text-[#06b6d4]">{exp.type}</span>
                        </div>
                        <div className="text-[11px] text-zinc-500 flex items-center gap-2 mt-0.5">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-xs text-zinc-600 dark:text-zinc-300">
                        {exp.description}
                      </p>

                      <ul className="space-y-1 list-disc list-inside text-xs text-zinc-600 dark:text-zinc-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1 pt-1.5">
                        {exp.technologies.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono px-1.5 py-0.5 rounded-[4px] bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Education & Certifications */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Education */}
              <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-3.5">
                <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <GraduationCapIcon className="w-4 h-4 text-[#06b6d4]" />
                  <span>Education</span>
                </h2>
                {PROFILE_DOSSIER.education.map((edu, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <h3 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                      {edu.institution}
                    </h3>
                    <p className="text-xs text-[#06b6d4] font-semibold">
                      {edu.degree}
                    </p>
                    <p className="text-[11px] text-zinc-500">{edu.period}</p>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 mt-1">{edu.details}</p>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-3.5">
                <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                  <AwardIcon className="w-4 h-4 text-[#06b6d4]" />
                  <span>Licenses & Certifications</span>
                </h2>
                <div className="space-y-2.5">
                  {PROFILE_DOSSIER.certifications.map((cert, idx) => (
                    <div key={idx} className="p-2.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-0.5">
                      <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {cert.name}
                      </div>
                      <div className="text-[11px] text-zinc-500">
                        {cert.issuer} • Issued {cert.issuedDate}
                      </div>
                      {cert.credentialId && (
                        <div className="text-[10px] font-mono text-[#06b6d4]">
                          Credential ID: {cert.credentialId}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. Skills & Endorsements */}
            <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-3.5">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Skills & Endorsements
              </h2>
              <div className="space-y-2.5">
                {PROFILE_DOSSIER.endorsements.map((end, idx) => (
                  <div key={idx} className="p-3 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                        <span>{end.skill}</span>
                        <span className="text-[11px] px-1.5 py-0.2 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] font-mono border border-[#06b6d4]/30">
                          {end.count}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500">{end.endorsersSummary}</p>
                    </div>
                    <div className="w-7 h-7 rounded-[4px] bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center shrink-0">
                      <ThumbsUpIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Recommendations */}
            <div className="rounded-[4px] p-5 sm:p-7 realistic-card border border-zinc-200 dark:border-zinc-800 space-y-3.5">
              <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                Client Recommendations
              </h2>
              <div className="space-y-3">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="p-3.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-[4px] bg-zinc-200 dark:bg-zinc-800 text-[#06b6d4] font-bold flex items-center justify-center text-xs">
                        {t.avatarText}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{t.clientName}</div>
                        <div className="text-[11px] text-zinc-500">{t.clientRole} • {t.company}</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-300 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW 2: EXECUTIVE CV / DOCUMENT DOSSIER VIEW */}
        {/* ============================================================== */}
        {viewMode === 'document' && (
          <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-[4px] border border-zinc-300 dark:border-zinc-800 max-w-4xl mx-auto space-y-7 font-sans">
            
            {/* Document Header */}
            <div className="border-b-2 border-[#06b6d4] pb-5 space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                  <span className="text-gradient-cyan">{PROFILE_DOSSIER.fullName}</span>
                </h1>
                <span className="text-xs font-mono font-bold text-[#06b6d4]">
                  4+ Years Professional Experience
                </span>
              </div>
              <p className="text-sm font-semibold text-[#06b6d4]">
                Senior Full-Stack Engineer & Freelance Architecture Specialist
              </p>
              
              {/* Contact meta strip */}
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 flex-wrap pt-1.5">
                <span>📧 {PROFILE_DOSSIER.email}</span>
                <span>•</span>
                <span>📍 {PROFILE_DOSSIER.location}</span>
                <span>•</span>
                <span>🔗 {PROFILE_DOSSIER.website}</span>
              </div>
            </div>

            {/* Executive Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">
                Executive Profile <span className="text-gradient-cyan">Summary</span>
              </h2>
              <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {PROFILE_DOSSIER.summary}
              </p>
            </div>

            {/* Core Competencies Matrix */}
            <div className="space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">
                Technical Competencies & Systems Proficiency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="p-3 rounded-[4px] bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700">
                    <span className="font-bold text-[#06b6d4] block mb-1">{cat.category}</span>
                    <ul className="space-y-0.5 text-zinc-600 dark:text-zinc-300">
                      {cat.skills.map((s, i) => (
                        <li key={i}>• {s.name}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Chronological Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">
                Professional Experience <span className="text-gradient-cyan">History</span>
              </h2>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">
                        {exp.role} — <span className="text-[#06b6d4] font-semibold"></span>
                      </span>
                      <span className="font-mono text-[11px] text-zinc-500">
                        {exp.period} | {exp.location}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-300 italic">
                      {exp.description}
                    </p>

                    <ul className="list-disc list-inside text-xs text-zinc-700 dark:text-zinc-300 space-y-0.5">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4]">
                Selected Production Deployments
              </h2>
              <div className="space-y-2.5">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="text-xs space-y-0.5 border-l-2 border-[#06b6d4] pl-2.5">
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">
                      {proj.title} ({proj.year}) — <span className="font-normal text-zinc-500">{proj.role}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-300">{proj.description}</p>
                    <p className="text-[11px] text-[#06b6d4] font-medium">
                      Outcome: {proj.outcome || proj.metrics?.join(' • ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3.5 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-1.5">
                  Formal Education
                </h2>
                {PROFILE_DOSSIER.education.map((edu, idx) => (
                  <div key={idx} className="text-xs space-y-0.5">
                    <div className="font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</div>
                    <div className="text-zinc-500">{edu.institution} ({edu.period})</div>
                    <div className="text-zinc-600 dark:text-zinc-400">{edu.details}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#06b6d4] mb-1.5">
                  Verified Certifications
                </h2>
                <div className="text-xs space-y-1">
                  {PROFILE_DOSSIER.certifications.map((c, idx) => (
                    <div key={idx}>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">• {c.name}</span>
                      <span className="text-zinc-500 text-[11px] block pl-2">{c.issuer} ({c.issuedDate})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Document Footer Callout with Reusable Button */}
            <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 flex-wrap gap-2">
              <span>Verified Confidential Engineering Dossier • Udayan Ghosh</span>
              <Button variant="primary" onClick={handleDownloadCV}>
                <DownloadIcon className="w-3.5 h-3.5" />
                <span>Download Official CV (PDF)</span>
              </Button>
            </div>

          </div>
        )}

      </main>

    </div>
  );
}
