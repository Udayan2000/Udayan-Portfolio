'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  PlayIcon,
  PauseIcon,
  Volume2Icon,
  VolumeXIcon,
  GlobeIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@/components/ui/icons';

export function HeroVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Play / Pause toggle
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Mute / Unmute toggle
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  // Trigger AI chat from hero showcase
  const askAiAboutDemo = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-ai-chat', {
          detail: { message: "Can you tell me about the architecture and AI workflows shown in the hero showcase?" },
        })
      );
    }
  };

  // Performance Optimization: IntersectionObserver
  // Pauses video when scrolled out of view to save CPU/GPU cycles, resumes when back in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay start
    const startPlay = () => {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });
    };
    startPlay();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!video) return;
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Ambient Neural Backlight Glow */}
      <div className="absolute -inset-1.5 -z-10 rounded-[12px] bg-gradient-to-tr from-[#06b6d4]/25 via-[#0219ac]/20 to-[#06b6d4]/10 blur-xl opacity-80" />

      {/* Modern Device / Window Shell */}
      <div className="relative rounded-[8px] border border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-900/95 shadow-2xl backdrop-blur-md overflow-hidden">
        
        {/* Window Top Titlebar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-zinc-100/90 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 select-none">
          {/* macOS Style Window Dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/90 border border-red-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/90 border border-amber-500/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/90 border border-emerald-500/30" />
          </div>

          {/* Browser URL Badge with AI Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-[4px] bg-zinc-200/60 dark:bg-zinc-800 text-[11px] font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-300/40 dark:border-zinc-700/60">
            <GlobeIcon className="w-3 h-3 text-[#06b6d4]" />
            <span className="truncate max-w-[140px] sm:max-w-xs">udayan.dev • ai-workspace</span>
          </div>

          {/* Live Status Pill with Pulsing Cyan LED */}
          <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-[#06b6d4] bg-[#06b6d4]/10 px-2.5 py-0.5 rounded-[4px] border border-[#06b6d4]/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]"></span>
            </span>
            <span className="tracking-wide">AI CORE ACTIVE</span>
          </div>
        </div>

        {/* Video Canvas Container (Fixed 16:9 Aspect Ratio guarantees Zero CLS) */}
        <div className="relative aspect-video w-full bg-zinc-950 overflow-hidden group">
          {/* Video Element */}
          <video
            ref={videoRef}
            src="/gemini_generated_video_de876149.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            onLoadedData={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            aria-label="Udayan Ghosh Full-Stack & AI Engineering Showcase Video"
          />

          {/* Loading Skeleton */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 text-zinc-400 gap-2">
              <span className="w-6 h-6 border-2 border-[#06b6d4] border-t-transparent rounded-full animate-spin" />
              <span className="text-xs font-mono tracking-wider text-zinc-500">INITIALIZING AI SHOWCASE...</span>
            </div>
          )}

          {/* Floating AI Telemetry HUD Pill (Top-Right) */}
          <div className="absolute top-3 right-3 flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-black/75 backdrop-blur-md border border-[#06b6d4]/40 text-white z-10 shadow-lg pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
           
            <span className="text-[10px] text-[#06b6d4] font-mono font-semibold hidden sm:inline">
              • 38ms TTFT
            </span>
          </div>

          {/* Floating Technology Pills at Bottom-Left */}
          <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-1.5 pointer-events-none z-10">
            <span className="px-2 py-0.5 rounded-[4px] bg-black/75 backdrop-blur-md text-[10px] font-semibold text-zinc-200 border border-white/10">
              Next.js 16
            </span>
            <span className="px-2 py-0.5 rounded-[4px] bg-black/75 backdrop-blur-md text-[10px] font-semibold text-zinc-200 border border-white/10">
              React 19
            </span>
            <span className="px-2 py-0.5 rounded-[4px] bg-black/75 backdrop-blur-md text-[10px] font-semibold text-[#06b6d4] border border-[#06b6d4]/30">
              ✨ AI Agents
            </span>
          </div>

          {/* Discreet Floating Interactive Controls & Audio Equalizer (Bottom-Right) */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
            {/* Neural Audio/Processing Wave Equalizer */}
            <div className="hidden sm:flex items-center gap-0.5 px-2 py-1.5 rounded-[4px] bg-black/70 backdrop-blur-md border border-white/10 mr-1">
              <span className={`w-0.5 rounded-full bg-[#06b6d4] transition-all duration-300 ${isPlaying ? 'h-3 animate-pulse' : 'h-1'}`} />
              <span className={`w-0.5 rounded-full bg-[#06b6d4] transition-all duration-300 delay-75 ${isPlaying ? 'h-4 animate-pulse' : 'h-1'}`} />
              <span className={`w-0.5 rounded-full bg-[#06b6d4] transition-all duration-300 delay-150 ${isPlaying ? 'h-2 animate-pulse' : 'h-1'}`} />
            </div>

            {/* Play/Pause Button */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="p-1.5 rounded-[4px] bg-black/75 hover:bg-black/95 backdrop-blur-md text-white border border-white/15 transition-colors focus:outline-none focus:ring-1 focus:ring-[#06b6d4]"
            >
              {isPlaying ? <PauseIcon className="w-3.5 h-3.5" /> : <PlayIcon className="w-3.5 h-3.5 text-[#06b6d4]" />}
            </button>

            {/* Mute/Unmute Button */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              className="p-1.5 rounded-[4px] bg-black/75 hover:bg-black/95 backdrop-blur-md text-white border border-white/15 transition-colors focus:outline-none focus:ring-1 focus:ring-[#06b6d4]"
            >
              {isMuted ? <VolumeXIcon className="w-3.5 h-3.5 text-zinc-300" /> : <Volume2Icon className="w-3.5 h-3.5 text-[#06b6d4]" />}
            </button>
          </div>
        </div>

        {/* Bottom Interactive Telemetry Ribbon */}
        <div className="px-3.5 py-2 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">Continuous 4K Loop</span>
            <span className="text-zinc-400 hidden sm:inline">• Full-Stack Code Architecture</span>
          </div>

          <button
            type="button"
            onClick={askAiAboutDemo}
            className="flex items-center gap-1.5 font-mono text-[10px] text-[#06b6d4] hover:text-[#0891b2] font-semibold transition-colors cursor-pointer"
          >
            <SparklesIcon className="w-3 h-3 text-[#06b6d4]" />
            <span>Ask AI About Demo →</span>
          </button>
        </div>

      </div>

      {/* Floating Realistic Badge Below Showcase */}
      <div className="mt-3 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1">
        <div className="flex items-center gap-1.5">
          <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">100% Custom Code Ownership</span>
        </div>
        <div className="flex items-center gap-1 text-[11px] font-mono text-[#06b6d4]">
          <span>Zero Vendor Lock-In</span>
        </div>
      </div>
    </div>
  );
}
