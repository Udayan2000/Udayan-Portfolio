'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TerminalIcon, CheckCircleIcon, SparklesIcon, ExternalLinkIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface ProjectSlide {
  id: string;
  category: string;
  title: string;
  codeFilename: string;
  url: string;
  codeSnippet: string;
  outputPreview: {
    badge: string;
    headline: string;
    subheadline: string;
    primaryMetric: { label: string; value: string; detail: string };
    secondaryMetric: { label: string; value: string; detail: string };
    actionText: string;
    extraUi: React.ReactNode;
  };
}

const PROJECT_SLIDES: ProjectSlide[] = [
  {
    id: 'ecom',
    category: 'E-Commerce Storefront',
    title: 'Modern Headless Store & Checkout',
    codeFilename: 'HyperCommerce.tsx',
    url: 'https://store.hypercommerce-preview.com',
    codeSnippet: `// 1. E-Commerce: Dynamic Catalog & Stripe Cart
export async function ProductCatalog({ category }: Props) {
  const products = await db.products.findMany({
    where: { inStock: true, category },
    include: { variants: true }
  });

  return (
    <StoreGrid items={products} currency="USD">
      <InstantStripeCheckout taxRate="auto" />
      <StockTelemetry lowStockWarning={3} />
    </StoreGrid>
  );
}`,
    outputPreview: {
      badge: 'E-Commerce Production',
      headline: 'Aura Stealth Runner v4',
      subheadline: 'Sub-second checkout • 48,000 active SKUs',
      primaryMetric: { label: 'Unit Price', value: '$189.00', detail: 'Instant Stripe Checkout' },
      secondaryMetric: { label: 'Stock Status', value: '4 Left', detail: 'Realtime inventory sync' },
      actionText: 'Instant Buy with Stripe',
      extraUi: (
        <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-zinc-500">Sizes: <strong className="text-zinc-900 dark:text-zinc-100">US 9, 10, 10.5</strong></span>
          <span className="font-mono text-[#06b6d4] font-semibold">Free Express Shipping</span>
        </div>
      )
    }
  },
  {
    id: 'dashboard',
    category: 'Dynamic Dashboard',
    title: 'Real-Time Record Telemetry & Analytics',
    codeFilename: 'TelemetryDashboard.tsx',
    url: 'https://analytics.saas-platform.io',
    codeSnippet: `// 2. Dashboard: Dynamic SQL Aggregation & Stream
export async function TelemetryFeed({ tenantId }: Props) {
  const stream = await sql\`
    SELECT event_type, sum(revenue), count(*) 
    FROM analytics_events 
    WHERE tenant_id = \${tenantId} 
    GROUP BY event_type ORDER BY sum DESC\`;

  return <MetricDashboard stream={stream} refreshRate="1s" />;
}`,
    outputPreview: {
      badge: 'Analytics Engine',
      headline: 'Enterprise Telemetry Hub',
      subheadline: 'Live WebSocket streaming • Sub-40ms latency',
      primaryMetric: { label: 'Live MRR Stream', value: '$128,450', detail: '+38.4% this quarter' },
      secondaryMetric: { label: 'Active Pipeline', value: '14,280/s', detail: 'Zero dropped events' },
      actionText: 'Export Live Telemetry',
      extraUi: (
        <div className="space-y-1.5 pt-1">
          <div className="flex justify-between text-[11px] font-mono">
            <span className="text-zinc-500">Server Capacity: 78%</span>
            <span className="text-[#06b6d4] font-bold">100/100 Vitals</span>
          </div>
          <div className="w-full h-1.5 rounded-[4px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
            <div className="h-full bg-[#06b6d4] rounded-[4px]" style={{ width: '78%' }} />
          </div>
        </div>
      )
    }
  },
  {
    id: 'realestate',
    category: 'Real Estate Platform',
    title: 'Luxury Property Engine & Virtual Tours',
    codeFilename: 'LuxuryEstates.tsx',
    url: 'https://estates.primeproperty-mls.com',
    codeSnippet: `// 3. Real Estate: Geo-Spatial Filter & Booking
export async function PropertyPortal({ zipCode }: Props) {
  const listings = await MLS.queryByBoundingBox({
    zipCode,
    priceMin: 750000,
    features: ['Pool', 'SmartHome', 'PanoramicView']
  });

  return <EstateShowcase listings={listings} map="MapboxGL" />;
}`,
    outputPreview: {
      badge: 'MLS Verified Listing',
      headline: 'The Grand Beverly Horizon',
      subheadline: '4 Beds • 5 Baths • 6,200 sq.ft • Private Infinity Pool',
      primaryMetric: { label: 'List Price', value: '$2,850,000', detail: 'Verified Escrow Ready' },
      secondaryMetric: { label: 'Virtual Tour', value: '4K 3D Walkthrough', detail: 'Interactive spatial view' },
      actionText: 'Schedule Private Viewing',
      extraUi: (
        <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-zinc-500 font-mono">MLS #CA-90210-74</span>
          <span className="text-[#06b6d4] font-semibold">Immediate Escrow</span>
        </div>
      )
    }
  },
  {
    id: 'agency',
    category: 'Digital Marketing Agency',
    title: 'High-Converting Client Growth Funnel',
    codeFilename: 'GrowthAgency.tsx',
    url: 'https://agency.digitalgrowthpartners.co',
    codeSnippet: `// 4. Marketing Agency: Attribution & Lead Scoring
export async function AttributionEngine({ client }: Props) {
  const leads = await CRM.fetchQualifiedPipeline({
    clientSlug: client,
    minAttributionScore: 92,
    syncWithHubspot: true
  });

  return <GrowthFunnel leads={leads} roiMultiplier={4.6} />;
}`,
    outputPreview: {
      badge: 'B2B Growth Engine',
      headline: 'Performance Attribution Suite',
      subheadline: 'Guaranteed pipeline generation for B2B tech',
      primaryMetric: { label: 'Attributed Revenue', value: '$3.4M', detail: '4.6x Verified ROAS' },
      secondaryMetric: { label: 'Cost Per Demo', value: '$84.20', detail: '-42% acquisition cost' },
      actionText: 'Book Strategic Growth Audit',
      extraUi: (
        <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-zinc-500">Case Study: <strong className="text-zinc-900 dark:text-zinc-100">Novasphere SaaS</strong></span>
          <span className="font-mono text-[#06b6d4] font-bold">+184% Bookings</span>
        </div>
      )
    }
  },
  {
    id: 'corporate',
    category: 'Corporate B2B Platform',
    title: 'Enterprise Multi-Tenant Infrastructure',
    codeFilename: 'EnterpriseB2B.tsx',
    url: 'https://enterprise.nexuslogistics.global',
    codeSnippet: `// 5. Corporate: Multi-Tenant RBAC & Audit Logs
export async function EnterprisePortal({ orgId }: Props) {
  await authorizeEnterpriseSession({
    orgId,
    requiredRoles: ['ORGANIZATION_ADMIN', 'SOC2_AUDITOR']
  });

  return <EnterpriseFleetManager slaGuarantee="99.99%" />;
}`,
    outputPreview: {
      badge: 'SOC2 Type II Certified',
      headline: 'Global Fleet & Supply Logistics',
      subheadline: 'Zero-trust architecture • Distributed node network',
      primaryMetric: { label: 'Fleet Throughput', value: '18,400 Nodes', detail: 'Global multi-region failover' },
      secondaryMetric: { label: 'SLA Guarantee', value: '99.99%', detail: '24/7 dedicated response' },
      actionText: 'Contact Enterprise Architect',
      extraUi: (
        <div className="flex items-center justify-between text-xs pt-1 border-t border-zinc-200 dark:border-zinc-800">
          <span className="text-zinc-500 font-mono">SOC2 • HIPAA • ISO27001</span>
          <span className="text-[#06b6d4] font-semibold">Zero Security Flaws</span>
        </div>
      )
    }
  }
];

export function HeroCodePreview() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'code' | 'output'>('code');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [pointerPosition, setPointerPosition] = useState<{ x: number; y: number; clicking: boolean }>({
    x: 40,
    y: 80,
    clicking: false,
  });

  const activeSlide = PROJECT_SLIDES[currentSlideIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Typewriter effect + automated mouse pointer workflow
  useEffect(() => {
    if (isPaused) return;

    let charIndex = 0;
    const fullCode = activeSlide.codeSnippet;
    setDisplayedCode('');
    setActiveTab('code');
    setIsTyping(true);

    // Initial mouse pointer position (editing code)
    setPointerPosition({ x: 50, y: 120, clicking: false });

    // Step 1: Type out code automatically with jitter
    const typeInterval = setInterval(() => {
      charIndex += 4;
      if (charIndex <= fullCode.length) {
        setDisplayedCode(fullCode.slice(0, charIndex));
        // Mouse moves subtly with code typing
        setPointerPosition((prev) => ({
          x: Math.min(260, 40 + (charIndex % 35) * 6),
          y: Math.min(220, 80 + Math.floor(charIndex / 35) * 16),
          clicking: false,
        }));
      } else {
        clearInterval(typeInterval);
        setDisplayedCode(fullCode);
        setIsTyping(false);

        // Step 2: Mouse glides over to "Launch Live Preview" button
        const glideTimer = setTimeout(() => {
          setPointerPosition({ x: 280, y: 22, clicking: true });

          // Step 3: Mouse clicks button and transitions to Live Output
          const clickTimer = setTimeout(() => {
            setActiveTab('output');
            setPointerPosition({ x: 280, y: 22, clicking: false });

            // Step 4: Display Output for 4.5 seconds, then glide to next slide
            const slideTimer = setTimeout(() => {
              setCurrentSlideIndex((prev) => (prev + 1) % PROJECT_SLIDES.length);
            }, 4200);

            timerRef.current = slideTimer;
          }, 450);

          timerRef.current = clickTimer;
        }, 800);

        timerRef.current = glideTimer;
      }
    }, 35);

    return () => {
      clearInterval(typeInterval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlideIndex, isPaused]);

  const handleSelectSlide = (index: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlideIndex(index);
    setActiveTab('code');
  };

  const handlePrevSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlideIndex((prev) => (prev === 0 ? PROJECT_SLIDES.length - 1 : prev - 1));
    setActiveTab('code');
  };

  const handleNextSlide = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlideIndex((prev) => (prev + 1) % PROJECT_SLIDES.length);
    setActiveTab('code');
  };

  return (
    <div
      className="rounded-[4px] overflow-hidden realistic-card border border-zinc-300 dark:border-zinc-800 relative group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top 5 Project Slider Tab Header */}
      <div className="bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center justify-between gap-2 overflow-x-auto">
        
        {/* Window Traffic Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-[#06b6d4] inline-block" />
        </div>

        {/* 5 Project Slide Selector Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          {PROJECT_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleSelectSlide(idx)}
              className={`px-2 py-1 rounded-[4px] text-[10px] font-bold tracking-tight whitespace-nowrap transition-all duration-200 border ${
                currentSlideIndex === idx
                  ? 'bg-[#0219ac] text-white border-[#0219ac]'
                  : 'bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-[#06b6d4]'
              }`}
            >
              <span>{idx + 1}. {slide.category.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Pause/Play indicator */}
        <div className="hidden sm:flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Resume Autoplay" : "Pause Simulator"}
            className="text-[10px] font-mono px-1.5 py-0.5 rounded-[4px] border border-zinc-300 dark:border-zinc-700 text-zinc-500 hover:text-[#06b6d4]"
          >
            {isPaused ? '▶ Resume' : '⏸ Auto'}
          </button>
        </div>
      </div>

      {/* Sub-Header: Active Tab Controller & Live URL */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-zinc-50 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800">
        
        {/* File name / Category badge */}
        <div className="flex items-center gap-2">
          <TerminalIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
          <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">
            {activeTab === 'code' ? activeSlide.codeFilename : activeSlide.url.replace('https://', '')}
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 hidden sm:inline-block">
            {activeSlide.category}
          </span>
        </div>

        {/* Manual Tab Switcher Buttons */}
        <div className="flex items-center gap-1 p-0.5 rounded-[4px] bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold transition-all ${
              activeTab === 'code'
                ? 'bg-[#0219ac] text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <span>&lt;/&gt; Code</span>
          </button>

          <button
            onClick={() => setActiveTab('output')}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold transition-all ${
              activeTab === 'output'
                ? 'bg-[#0219ac] text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4]" />
            <span>Output</span>
          </button>
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div className="relative min-h-[350px] flex flex-col justify-between bg-white dark:bg-zinc-950 overflow-hidden">
        
        {/* ============================================================== */}
        {/* SCREEN 1: AUTOMATIC CODE TYPING SCREEN */}
        {/* ============================================================== */}
        {activeTab === 'code' && (
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[12.5px] leading-relaxed text-zinc-800 dark:text-zinc-200 space-y-1 bg-white dark:bg-zinc-950">
            <div className="flex items-center justify-between text-zinc-400 dark:text-zinc-500 pb-1 border-b border-zinc-100 dark:border-zinc-900 text-[11px]">
              <span>// Step 1: Automatic Developer Code Implementation</span>
              <span className="text-[#06b6d4]">{isTyping ? 'Typing code...' : 'Build Ready ✓'}</span>
            </div>

            <pre className="whitespace-pre-wrap font-mono pt-2 text-zinc-800 dark:text-zinc-200">
              {displayedCode}
              {isTyping && <span className="inline-block w-2 h-4 bg-[#06b6d4] ml-0.5 animate-pulse" />}
            </pre>
          </div>
        )}

        {/* ============================================================== */}
        {/* SCREEN 2: LIVE RENDERED FRONTEND OUTPUT SCREEN */}
        {/* ============================================================== */}
        {activeTab === 'output' && (
          <div className="p-4 sm:p-5 space-y-3.5 animate-fadeIn">
            
            {/* Browser Address Bar with Live Production URL */}
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-500">
              <div className="flex items-center gap-1.5 truncate">
                <span className="text-[#06b6d4]">🔒</span>
                <span className="text-zinc-700 dark:text-zinc-300 truncate font-semibold">{activeSlide.url}</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.2 rounded-[4px] bg-[#06b6d4]/10 text-[#06b6d4] border border-[#06b6d4]/20 shrink-0 font-bold">
                100% Deployed
              </span>
            </div>

            {/* Frontend Component Rendered Output */}
            <div className="p-4 rounded-[4px] bg-zinc-50 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 space-y-3">
              
              <div className="flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#06b6d4] block">
                    {activeSlide.outputPreview.badge}
                  </span>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {activeSlide.outputPreview.headline}
                  </h4>
                  <p className="text-xs text-zinc-500">
                    {activeSlide.outputPreview.subheadline}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-[#06b6d4] bg-[#06b6d4]/10 px-2 py-0.5 rounded-[4px] border border-[#06b6d4]/20 shrink-0">
                  <CheckCircleIcon className="w-3.5 h-3.5" />
                  <span>Live</span>
                </div>
              </div>

              {/* Dynamic Metrics Row */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-2.5 rounded-[4px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase font-mono">{activeSlide.outputPreview.primaryMetric.label}</span>
                  <span className="text-base font-extrabold text-zinc-900 dark:text-zinc-100">{activeSlide.outputPreview.primaryMetric.value}</span>
                  <span className="text-[10px] text-[#06b6d4] font-semibold block mt-0.5">{activeSlide.outputPreview.primaryMetric.detail}</span>
                </div>
                <div className="p-2.5 rounded-[4px] bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                  <span className="text-[10px] text-zinc-500 block uppercase font-mono">{activeSlide.outputPreview.secondaryMetric.label}</span>
                  <span className="text-base font-extrabold text-[#06b6d4]">{activeSlide.outputPreview.secondaryMetric.value}</span>
                  <span className="text-[10px] text-zinc-400 font-semibold block mt-0.5">{activeSlide.outputPreview.secondaryMetric.detail}</span>
                </div>
              </div>

              {/* Project Specific Micro-UI */}
              {activeSlide.outputPreview.extraUi}
            </div>

            {/* Client Delivery Sign-Off Action */}
            <div className="flex items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <SparklesIcon className="w-3.5 h-3.5 text-[#06b6d4]" />
                <span className="text-zinc-700 dark:text-zinc-300 font-medium">Design & Code Delivered</span>
              </div>
              <Button href="#projects" variant="primary" className="h-[36px] px-3.5 text-xs">
                <span>{activeSlide.outputPreview.actionText}</span>
                <ArrowRightIcon className="w-3 h-3" />
              </Button>
            </div>

          </div>
        )}

        {/* Realistic Simulated Mouse Cursor Overlay */}
        <div
          className={`pointer-events-none absolute z-30 transition-all duration-300 ease-out flex items-center gap-1 ${
            pointerPosition.clicking ? 'scale-90' : 'scale-100'
          }`}
          style={{
            left: `${pointerPosition.x}px`,
            top: `${pointerPosition.y}px`,
          }}
        >
          {/* Mouse Arrow SVG */}
          <svg className="w-4 h-4 fill-black text-white filter drop-shadow(0 1px 2px rgba(0,0,0,0.4))" viewBox="0 0 24 24">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
          <span className="text-[9px] font-mono px-1 py-0.2 rounded-[2px] bg-zinc-900 text-white opacity-80 whitespace-nowrap">
            {activeTab === 'code' ? 'Typing...' : 'Simulating click'}
          </span>
        </div>

        {/* Slider Bottom Navigation Bar */}
        <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
          
          {/* Slide dots & Prev/Next */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Slide"
              className="p-1 rounded-[4px] hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              ←
            </button>
            <span className="font-mono text-[11px] text-zinc-600 dark:text-zinc-400">
              Slide {currentSlideIndex + 1} of 5
            </span>
            <button
              onClick={handleNextSlide}
              aria-label="Next Slide"
              className="p-1 rounded-[4px] hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
            >
              →
            </button>
          </div>

          {/* Current Project Name & Status */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06b6d4] animate-pulse" />
            <span className="font-mono text-[11px] text-[#06b6d4] font-semibold">
              {activeSlide.title}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
