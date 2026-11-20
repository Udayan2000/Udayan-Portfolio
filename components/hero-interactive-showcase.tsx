'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TerminalIcon, CheckCircleIcon, SparklesIcon, ExternalLinkIcon, ArrowRightIcon } from '@/components/ui/icons';
import { Button } from '@/components/ui/button';

interface ProjectSpec {
  id: string;
  name: string;
  filename: string;
  url: string;
  tagline: string;
  themeColor: string;
  themeAccent: string;
  codeSnippet: string;
  renderUi: (state: any, setState: any) => React.ReactNode;
}

const PROJECTS: ProjectSpec[] = [
  // =========================================================================
  // 1. E-COMMERCE STOREFRONT (Design Pattern: Indigo & Emerald Luxury Streetwear)
  // =========================================================================
  {
    id: 'ecom',
    name: 'E-Commerce Storefront',
    filename: 'ECommerceStore.tsx',
    url: 'store.kinetic-luxe.io',
    tagline: 'Headless Catalog with Instant Stripe Checkout',
    themeColor: '#6366f1',
    themeAccent: '#10b981',
    codeSnippet: `// 1. E-Commerce: Dynamic Product & Stripe Cart
export function ProductShowcase() {
  const [color, setColor] = useState('Obsidian');
  const [size, setSize] = useState('US 10.5');

  return (
    <ProductCard brand="KINETIC • LUXE">
      <Badge status="Limited Stock">14 Pairs Left</Badge>
      <ProductInfo 
        name="Aura Runner Pro" 
        price={189} 
        discount="20% OFF" 
      />
      <SwatchSelector active={color} onChange={setColor} />
      <SizePicker selected={size} options={['US 9', 'US 10', 'US 10.5']} />
      <StripeCheckoutButton bg="#0219ac" radius={4} />
    </ProductCard>
  );
}`,
    renderUi: (state, setState) => (
      <div className="h-full flex flex-col justify-between space-y-2">
        {/* Brand Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="font-black text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
              KINETIC<span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />LUXE
            </span>
            <span className="text-[10px] text-zinc-400 font-mono hidden sm:inline">• Spring Drop v4</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded-[4px] bg-[#6366f1]/15 text-[#6366f1] font-bold border border-[#6366f1]/25">
              Cart (1) • $189
            </span>
            <span className="text-[#10b981] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              In Stock
            </span>
          </div>
        </div>

        {/* Product Visual & Buy Box Card */}
        <div className="p-3 rounded-[4px] bg-gradient-to-br from-[#6366f1]/5 via-zinc-50 to-zinc-100 dark:from-[#6366f1]/10 dark:via-zinc-900/90 dark:to-zinc-950 border border-[#6366f1]/25 space-y-2">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-[3px] bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25">
                  14 Pairs Left
                </span>
                <span className="text-[10px] text-amber-500 font-mono">★ 4.9 (1,420)</span>
              </div>
              <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-100">
                Aura Runner Pro Carbon
              </h4>
              <p className="text-[10px] text-zinc-500">Dual-density foam plate • Sub-second Next.js checkout</p>
            </div>
            <div className="text-right shrink-0">
              <div className="flex items-baseline gap-1 justify-end">
                <span className="text-base font-black text-[#6366f1]">$189.00</span>
                <span className="text-[10px] text-zinc-400 line-through">$240</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#10b981]">20% OFF TODAY</span>
            </div>
          </div>

          {/* Color Swatch & Interactive Size Selector */}
          <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-zinc-200/80 dark:border-zinc-800 text-[10px]">
            <div>
              <span className="text-zinc-500 block mb-1 font-medium">Colorway:</span>
              <div className="flex items-center gap-1.5">
                {[
                  { name: 'Obsidian', color: '#18181b' },
                  { name: 'Indigo', color: '#6366f1' },
                  { name: 'Arctic', color: '#e4e4e7' }
                ].map((c, idx) => (
                  <button
                    key={c.name}
                    onClick={() => setState({ ...state, colorIdx: idx })}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      (state.colorIdx ?? 0) === idx ? 'ring-2 ring-[#6366f1] scale-110' : 'opacity-70'
                    }`}
                    style={{ backgroundColor: c.color }}
                    title={c.name}
                  />
                ))}
                <span className="font-mono text-zinc-600 dark:text-zinc-400 text-[9px] ml-1">
                  {(state.colorIdx ?? 0) === 0 ? 'Obsidian' : (state.colorIdx ?? 0) === 1 ? 'Indigo' : 'Arctic'}
                </span>
              </div>
            </div>

            <div>
              <span className="text-zinc-500 block mb-1 font-medium">Size:</span>
              <div className="flex items-center gap-1">
                {['US 9', 'US 10', 'US 10.5'].map((size, idx) => (
                  <button
                    key={size}
                    onClick={() => setState({ ...state, sizeIdx: idx })}
                    className={`px-1.5 py-0.5 text-[9px] font-mono rounded-[3px] border transition-all ${
                      (state.sizeIdx ?? 2) === idx
                        ? 'bg-[#6366f1] text-white border-[#6366f1] font-bold'
                        : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] pt-1">
            <span className="text-zinc-500">Shipping: <strong className="text-zinc-800 dark:text-zinc-200">Express 2-Day Air</strong></span>
            <span className="font-mono text-[#10b981] font-semibold">Warehouse NJ</span>
          </div>
        </div>

        {/* Global Styled Action Button */}
        <Button href="#contact" variant="primary" className="w-full">
          <span>Instant Checkout with Stripe ($189.00)</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
    )
  },

  // =========================================================================
  // 2. DYNAMIC RECORDS DASHBOARD (Design Pattern: Cyber Teal & Neon Data Console)
  // =========================================================================
  {
    id: 'dashboard',
    name: 'Dynamic Records Dashboard',
    filename: 'LiveDashboard.tsx',
    url: 'telemetry.synapse-data.io',
    tagline: 'Real-Time Streaming Telemetry & Data Grid',
    themeColor: '#06b6d4',
    themeAccent: '#10b981',
    codeSnippet: `// 2. Dashboard: Live Telemetry & SQL Stream
export function TelemetryRecordsDashboard() {
  const { metrics, stream } = useLiveTelemetry({ interval: '1s' });

  return (
    <ConsoleEngine nodes={48} latency="18ms">
      <TelemetryRow throughput="14,280 rps" errorRate="0.001%" />
      <LiveFrequencyBarChart frequency={stream.frequencies} />
      <TransactionDataGrid autoSync={true} status="200 OK" />
      <QueryStreamButton bg="#0219ac" radius={4} />
    </ConsoleEngine>
  );
}`,
    renderUi: (state, setState) => (
      <div className="h-full flex flex-col justify-between space-y-2">
        {/* Console Header Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="font-mono font-bold text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[2px] bg-[#06b6d4] animate-pulse" />
              SYNAPSE<span className="text-[#06b6d4]">_</span>TELEMETRY
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <span className="px-1.5 py-0.5 rounded-[4px] bg-[#06b6d4]/15 text-[#06b6d4] font-bold border border-[#06b6d4]/30">
              18ms Ping
            </span>
            <span className="text-[#10b981] font-semibold">48/48 Healthy</span>
          </div>
        </div>

        {/* Dense Telemetry Console Layout */}
        <div className="p-2.5 rounded-[4px] bg-zinc-900/95 border border-[#06b6d4]/30 text-zinc-100 space-y-2">
          {/* Top 3 Realtime Stats */}
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-1.5 rounded-[3px] bg-black/40 border border-zinc-800">
              <span className="text-[9px] text-zinc-400 font-mono block">Throughput</span>
              <span className="text-xs font-mono font-black text-[#06b6d4]">14,280/s</span>
            </div>
            <div className="p-1.5 rounded-[3px] bg-black/40 border border-zinc-800">
              <span className="text-[9px] text-zinc-400 font-mono block">Error Rate</span>
              <span className="text-xs font-mono font-black text-[#10b981]">0.001%</span>
            </div>
            <div className="p-1.5 rounded-[3px] bg-black/40 border border-zinc-800">
              <span className="text-[9px] text-zinc-400 font-mono block">P99 Latency</span>
              <span className="text-xs font-mono font-black text-amber-400">24ms</span>
            </div>
          </div>

          {/* Visual Frequency Spectrum Bars */}
          <div className="space-y-1">
            <div className="flex justify-between text-[9px] font-mono text-zinc-400">
              <span>SQL Read/Write Buffer</span>
              <span className="text-[#06b6d4]">Zero Dropped Packets</span>
            </div>
            <div className="h-6 flex items-end gap-1 bg-black/60 p-1 rounded-[3px] border border-zinc-800">
              {[40, 65, 85, 55, 95, 75, 60, 90, 100, 70, 85, 60].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-[1px] transition-all duration-300 ${
                    i % 2 === 0 ? 'bg-[#06b6d4]' : 'bg-[#10b981]'
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Live Data Stream Rows */}
          <div className="text-[9.5px] font-mono space-y-1 pt-1 border-t border-zinc-800">
            <div className="flex justify-between items-center text-zinc-300">
              <span className="truncate max-w-[150px]">POST /v1/telemetry/nodes</span>
              <span className="text-[#06b6d4]">142.8 KB</span>
              <span className="text-[#10b981] font-bold">200 OK</span>
            </div>
            <div className="flex justify-between items-center text-zinc-400">
              <span className="truncate max-w-[150px]">STREAM sql.aggregate_sync</span>
              <span className="text-[#06b6d4]">1,420 rows</span>
              <span className="text-[#10b981] font-bold">SYNCED</span>
            </div>
          </div>
        </div>

        {/* Global Styled Action Button */}
        <Button href="#contact" variant="primary" className="w-full">
          <span>Export Analytics Telemetry Stream</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
    )
  },

  // =========================================================================
  // 3. REAL ESTATE WEBSITE (Design Pattern: RealHomes MLS Portal & Agent Engine)
  // =========================================================================
  {
    id: 'realestate',
    name: 'Real Estate Platform',
    filename: 'RealHomesPortal.tsx',
    url: 'portal.realhomes-mls.io',
    tagline: 'MLS Property Slider, Search Bar & Agent CRM Suite',
    themeColor: '#1b75d0',
    themeAccent: '#1e293b',
    codeSnippet: `// 3. Real Estate: RealHomes MLS Portal & Agent Engine
export function RealHomesPortal() {
  const [location, setLocation] = useState('Coral Gables, FL');
  const [status, setStatus] = useState('For Sale');
  const [propType, setType] = useState('Single Family');

  return (
    <RealHomesLayout phone="1-800-555-4321">
      <PropertyFilterBar 
        keyword="Coral Gables"
        location={location} 
        status={status} 
        type={propType} 
      />
      <div className="grid grid-cols-12 gap-2.5">
        <PropertySlider 
          title="Home in Coral Gables" 
          price="$850,000" 
          badges={['For Sale', 'Single Family']} 
        />
        <AgentInquiryCard 
          name="Melissa William" 
          office="1-222-333-4444" 
          email="robot@inspirythemes.com" 
        />
      </div>
    </RealHomesLayout>
  );
}`,
    renderUi: (state, setState) => (
      <div className="h-full flex flex-col justify-between space-y-2">
        {/* RealHomes Top Navigation Bar */}
        <div className="flex items-center justify-between pb-1 border-b border-zinc-200 dark:border-zinc-800 text-[10px]">
          {/* Brand Logo & Nav */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-[2px] bg-[#1b75d0] flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current">
                  <path d="M3 10.5L12 3l9 7.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20.5v-10z" />
                </svg>
              </div>
              <span className="font-extrabold text-[11px] tracking-tight text-zinc-900 dark:text-zinc-100">
                REAL<span className="text-[#1b75d0]">HOMES</span>
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-zinc-600 dark:text-zinc-400 font-medium text-[9px]">
              <span className="text-[#1b75d0] font-bold border-b-2 border-[#1b75d0] pb-0.5">Home</span>
              <span>Properties</span>
              <span>Gallery</span>
              <span>About</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Socials & Phone */}
          <div className="flex items-center gap-2 text-[9px]">
            <div className="hidden xs:flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded-full bg-sky-100 dark:bg-sky-950 text-[#1b75d0] flex items-center justify-center text-[7.5px] font-bold">f</span>
              <span className="w-3.5 h-3.5 rounded-full bg-sky-100 dark:bg-sky-950 text-[#1b75d0] flex items-center justify-center text-[7.5px] font-bold">t</span>
              <span className="w-3.5 h-3.5 rounded-full bg-sky-100 dark:bg-sky-950 text-[#1b75d0] flex items-center justify-center text-[7.5px] font-bold">▶</span>
            </div>
            <span className="text-rose-600 dark:text-rose-400 font-bold font-mono text-[9.5px] flex items-center gap-0.5">
              <span>📞</span>
              <span>1-800-555-4321</span>
            </span>
          </div>
        </div>

        {/* Real Estate Search Filter Bar */}
        <div className="rounded-[4px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1.5 grid grid-cols-12 gap-1.5 items-center">
          <div className="col-span-3">
            <input
              type="text"
              placeholder="Keyword"
              defaultValue="Coral Gables"
              className="w-full text-[9px] px-2 py-1 rounded-[3px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 outline-none"
              readOnly
            />
          </div>
          <div className="col-span-3">
            <div className="w-full text-[9px] px-1.5 py-1 rounded-[3px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
              <span className="truncate">All Locations</span>
              <span className="text-[7px] text-zinc-400">▼</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full text-[9px] px-1.5 py-1 rounded-[3px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
              <span className="truncate">For Sale</span>
              <span className="text-[7px] text-zinc-400">▼</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="w-full text-[9px] px-1.5 py-1 rounded-[3px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
              <span className="truncate">Single Family</span>
              <span className="text-[7px] text-zinc-400">▼</span>
            </div>
          </div>
          <div className="col-span-2">
            <button className="w-full text-[9px] font-bold py-1 px-1 rounded-[3px] bg-[#1b75d0] text-white flex items-center justify-center gap-1 hover:bg-[#1560b0] transition-colors">
              <span>🔍</span>
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Split Section: Left Hard-Coded Vector House Slider + Right Agent Card */}
        <div className="grid grid-cols-12 gap-2 flex-1 min-h-0">
          
          {/* LEFT: 100% Hard-Coded Architectural Vector Property Showcase (No External Images) */}
          <div className="col-span-7 relative rounded-[4px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-b from-[#d9ebfb] via-[#e8f3fe] to-[#c7e2fb] dark:from-slate-900 dark:via-sky-950/40 dark:to-slate-900 flex flex-col justify-between p-2.5">
            
            {/* Hard-Coded Vector Architecture Background */}
            <div className="absolute inset-0 pointer-events-none opacity-90 dark:opacity-75 flex items-end justify-center">
              <svg viewBox="0 0 320 180" className="w-full h-auto max-h-[92%]">
                {/* Soft Sun in Sky */}
                <circle cx="260" cy="40" r="22" fill="#fef08a" opacity="0.5" />
                {/* Palm Trees & Garden Silhouette */}
                <path d="M15 140 Q25 110 38 140 Q55 115 72 140 Z" fill="#94a3b8" opacity="0.35" />
                <path d="M245 140 Q260 110 278 140 Q292 120 308 140 Z" fill="#94a3b8" opacity="0.35" />
                {/* Main Ground Floor Building */}
                <rect x="52" y="75" width="160" height="65" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
                {/* Cantilever Second Floor */}
                <rect x="72" y="44" width="112" height="42" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
                {/* Dark Modern Roof Fascia */}
                <polygon points="44,75 220,75 212,69 52,69" fill="#334155" />
                <polygon points="66,44 190,44 184,39 72,39" fill="#1e293b" />
                {/* Floor-to-Ceiling Blue Glass Windows */}
                <rect x="80" y="50" width="42" height="30" fill="#bae6fd" stroke="#0284c7" strokeWidth="0.8" opacity="0.9" />
                <line x1="101" y1="50" x2="101" y2="80" stroke="#0284c7" strokeWidth="0.8" />
                <rect x="132" y="50" width="42" height="30" fill="#bae6fd" stroke="#0284c7" strokeWidth="0.8" opacity="0.9" />
                <line x1="153" y1="50" x2="153" y2="80" stroke="#0284c7" strokeWidth="0.8" />
                {/* Ground Windows & Architectural Wood Slat Door */}
                <rect x="62" y="88" width="62" height="46" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.8" opacity="0.85" />
                <line x1="93" y1="88" x2="93" y2="134" stroke="#0284c7" strokeWidth="0.8" />
                <rect x="138" y="92" width="22" height="48" fill="#d97706" opacity="0.9" />
                <rect x="172" y="88" width="32" height="46" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.8" opacity="0.85" />
                {/* Lawn & Terrace Base */}
                <rect x="0" y="140" width="320" height="40" fill="#86efac" opacity="0.3" />
                <line x1="0" y1="140" x2="320" y2="140" stroke="#64748b" strokeWidth="1" />
              </svg>
            </div>

            {/* Top Badges: [ For Sale ] [ Single Family ] */}
            <div className="relative z-10 flex items-center gap-1.5">
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-[3px] bg-[#1b75d0] text-white">
                For Sale
              </span>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-[3px] bg-slate-900 text-white">
                Single Family
              </span>
            </div>

            {/* Slider navigation circular arrows */}
            <div className="relative z-10 flex items-center justify-between w-full my-auto pointer-events-none">
              <button className="w-5 h-5 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] shadow-sm pointer-events-auto hover:bg-white">
                ‹
              </button>
              <button className="w-5 h-5 rounded-full bg-white/90 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[10px] shadow-sm pointer-events-auto hover:bg-white">
                ›
              </button>
            </div>

            {/* Bottom Property Title & Price Tag */}
            <div className="relative z-10 space-y-1">
              <h4 className="text-xs sm:text-sm font-extrabold text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] tracking-tight">
                Home in Coral Gables
              </h4>
              <div className="inline-block">
                <span className="text-xs font-black px-2 py-0.5 rounded-[3px] bg-[#1b75d0] text-white tracking-tight">
                  $850,000
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Agent Sidebar Card (Melissa William) */}
          <div className="col-span-5 rounded-[4px] border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/95 p-2 flex flex-col justify-between space-y-1">
            {/* Agent Info */}
            <div className="flex items-center gap-2 pb-1.5 border-b border-zinc-100 dark:border-zinc-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-300 via-sky-400 to-[#1b75d0] text-white flex items-center justify-center text-[11px] font-black shrink-0 border border-white dark:border-zinc-800">
                MW
              </div>
              <div className="min-w-0">
                <span className="text-[8px] font-mono text-zinc-400 block leading-none">Agent</span>
                <span className="text-[11px] font-extrabold text-zinc-900 dark:text-zinc-100 truncate block leading-tight">
                  Melissa William
                </span>
                <span className="text-[8.5px] font-bold text-[#1b75d0] hover:underline cursor-pointer block leading-none">
                  View My Listings
                </span>
              </div>
            </div>

            {/* Contact Specs Table */}
            <div className="space-y-0.5 text-[8.5px] font-mono">
              <div className="flex justify-between text-zinc-500">
                <span>Office</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">1-222-333-4444</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Mobile</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">1-234-456-7892</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>WhatsApp</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">1-222-333-4422</span>
              </div>
              <div className="flex justify-between text-zinc-500">
                <span>Email</span>
                <span className="font-semibold text-[#1b75d0] truncate max-w-[85px]">robot@inspirythemes.com</span>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="space-y-1 pt-1 border-t border-zinc-100 dark:border-zinc-800">
              <input
                type="text"
                placeholder="Name"
                defaultValue="Client Inquiry"
                className="w-full text-[8.5px] px-1.5 py-0.5 rounded-[2px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 outline-none"
                readOnly
              />
              <input
                type="text"
                placeholder="Email"
                defaultValue="inquiry@client.com"
                className="w-full text-[8.5px] px-1.5 py-0.5 rounded-[2px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 outline-none"
                readOnly
              />
            </div>

            {/* Send Action */}
            <button className="w-full py-1 text-[9px] font-bold rounded-[3px] bg-[#1b75d0] text-white hover:bg-[#1560b0] transition-colors">
              Send Message
            </button>
          </div>
        </div>

        {/* Global Standard Action Button */}
        <Button href="#contact" variant="primary" className="w-full">
          <span>Explore 142 Verified Real Estate Listings</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
    )
  },

  // =========================================================================
  // 4. DIGITAL MARKETING AGENCY (Design Pattern: Full-Funnel Digital Marketing Services)
  // =========================================================================
  {
    id: 'agency',
    name: 'Digital Marketing Agency',
    filename: 'MarketingServices.tsx',
    url: 'services.vortex-marketing.io',
    tagline: 'Types of Digital Marketing: SEO, Paid PPC, Social SMM & CRO',
    themeColor: '#d946ef',
    themeAccent: '#8b5cf6',
    codeSnippet: `// 4. Marketing Agency: Full-Funnel Digital Services
export function DigitalMarketingAgency() {
  const [activeService, setService] = useState('seo');

  const agencyServices = [
    { type: 'SEO & Organic Growth', metric: '+340% Traffic', roi: '#1 Rankings' },
    { type: 'PPC & Paid Search Ads', metric: '4.8x ROAS', roi: '$1.4M Pipeline' },
    { type: 'Social Media & Brand SMM', metric: '2.5M Views', roi: 'Viral UGC' },
    { type: 'CRO & Conversion Funnels', metric: '+85% Leads', roi: 'A/B Optimized' },
  ];

  return (
    <AgencyServicesHub brand="VORTEX DIGITAL">
      <ServicesHeader title="Types of Digital Marketing Services" />
      <ServicesGrid 
        catalog={agencyServices} 
        active={activeService} 
        onSelect={setService} 
      />
      <GrowthAuditButton bg="#0219ac" radius={4} />
    </AgencyServicesHub>
  );
}`,
    renderUi: (state, setState) => (
      <div className="h-full flex flex-col justify-between space-y-2">
        {/* Agency Brand Header Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
              VORTEX<span className="text-[#d946ef]">⚡</span>MARKETING
            </span>
            <span className="text-[9.5px] text-zinc-400 hidden sm:inline">• Full-Service Digital Agency</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span className="px-1.5 py-0.5 rounded-[3px] bg-[#d946ef]/15 text-[#d946ef] font-bold border border-[#d946ef]/30">
              Google &amp; Meta Partner
            </span>
          </div>
        </div>

        {/* Services Showcase Header Banner */}
        <div className="p-2 rounded-[4px] bg-gradient-to-r from-[#d946ef]/10 via-purple-500/5 to-transparent border border-[#d946ef]/20 flex items-center justify-between">
          <div>
            <span className="text-[8.5px] font-mono uppercase tracking-wider text-[#d946ef] font-bold block">
              Core Capabilities • 4 Service Verticals
            </span>
            <h4 className="text-xs sm:text-[13px] font-black text-zinc-900 dark:text-zinc-100">
              Types of Digital Marketing Services
            </h4>
          </div>
          <span className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-[3px] bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25">
            4.8x Avg. Client ROAS
          </span>
        </div>

        {/* 4 Dedicated Digital Marketing Service Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
          
          {/* 1. SEO & Organic Growth */}
          <div
            onClick={() => setState({ ...state, agencySvc: 0 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.agencySvc ?? 0) === 0
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#d946ef]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🔍</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#10b981]/15 text-[#10b981]">
                  +340% Traffic
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                SEO &amp; Organic Search
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Technical site audits, high-intent keywords &amp; authority backlinks.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>Google Rank #1</span>
              <span className="text-[#d946ef] font-bold">SEO Audit →</span>
            </div>
          </div>

          {/* 2. Performance PPC & Paid Ads */}
          <div
            onClick={() => setState({ ...state, agencySvc: 1 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.agencySvc ?? 0) === 1
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#d946ef]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🎯</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#d946ef]/15 text-[#d946ef]">
                  4.8x ROAS
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                PPC &amp; Paid Ads
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Google Search, Meta Ads &amp; targeted multi-touch retargeting.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>-41% Lower CPA</span>
              <span className="text-[#d946ef] font-bold">Scale Ads →</span>
            </div>
          </div>

          {/* 3. Social Media & Content Marketing */}
          <div
            onClick={() => setState({ ...state, agencySvc: 2 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.agencySvc ?? 0) === 2
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#d946ef]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">📱</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-purple-500/15 text-purple-600 dark:text-purple-400">
                  2.5M+ Reach
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                Social Media &amp; SMM
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                TikTok UGC, Instagram Reels &amp; high-engagement community growth.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>Viral Engagement</span>
              <span className="text-[#d946ef] font-bold">Explore SMM →</span>
            </div>
          </div>

          {/* 4. CRO & Sales Funnel Optimization */}
          <div
            onClick={() => setState({ ...state, agencySvc: 3 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.agencySvc ?? 0) === 3
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#d946ef]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🚀</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#10b981]/15 text-[#10b981]">
                  +85% Leads
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                CRO &amp; Funnel Optimization
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Landing page A/B tests, checkout optimization &amp; zero drop-offs.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>High Conversion</span>
              <span className="text-[#d946ef] font-bold">Boost CRO →</span>
            </div>
          </div>

        </div>

        {/* Global Styled Action Button */}
        <Button href="#contact" variant="primary" className="w-full">
          <span>Get Free Digital Marketing Strategy &amp; Audit</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
    )
  },

  // =========================================================================
  // 5. SOLAR ENERGY COMPANY (Design Pattern: Clean Renewable Energy & Services Suite)
  // =========================================================================
  {
    id: 'solar',
    name: 'Solar Energy Company',
    filename: 'SolarServicesSuite.tsx',
    url: 'cleanenergy.helios-solar.io',
    tagline: 'Types of Solar Services: Residential, Commercial, Battery Storage & O&M',
    themeColor: '#f59e0b',
    themeAccent: '#10b981',
    codeSnippet: `// 5. Solar Energy: Clean Power & Turnkey Services Suite
export function SolarEnergyCompany() {
  const [activeSolarService, setService] = useState('residential');

  const solarServices = [
    { type: 'Residential Rooftop Solar', savings: '85% Off Bills', warranty: '25-Yr Tier 1' },
    { type: 'Commercial Solar Microgrids', savings: '30% ITC Tax Credit', warranty: 'C&I Megawatt' },
    { type: 'Battery Backup & Storage', savings: 'Blackout Proof', warranty: 'Lithium ESS' },
    { type: 'Solar O&M & Smart EV Chargers', savings: 'IoT Monitored', warranty: 'Level-2 EV' },
  ];

  return (
    <SolarCompanyLayout brand="HELIOS SOLAR">
      <ServicesHeader title="Types of Solar Energy Services" />
      <SolarServicesGrid 
        catalog={solarServices} 
        active={activeSolarService} 
        onSelect={setService} 
      />
      <CalculateSavingsButton bg="#0219ac" radius={4} />
    </SolarCompanyLayout>
  );
}`,
    renderUi: (state, setState) => (
      <div className="h-full flex flex-col justify-between space-y-2">
        {/* Solar Brand Header Bar */}
        <div className="flex items-center justify-between pb-1.5 border-b border-zinc-200 dark:border-zinc-800 text-[10px]">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-xs tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
              <span className="text-[#f59e0b]">☀️</span>
              HELIOS<span className="text-[#f59e0b]">.</span>SOLAR
            </span>
            <span className="text-[9.5px] text-zinc-400 hidden sm:inline">• Clean Energy Systems</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono">
            <span className="px-1.5 py-0.5 rounded-[3px] bg-[#f59e0b]/15 text-[#f59e0b] font-bold border border-[#f59e0b]/30">
              Tier-1 Bloomberg Panels
            </span>
          </div>
        </div>

        {/* Solar Services Showcase Header Banner */}
        <div className="p-2 rounded-[4px] bg-gradient-to-r from-[#f59e0b]/10 via-amber-500/5 to-transparent border border-[#f59e0b]/20 flex items-center justify-between">
          <div>
            <span className="text-[8.5px] font-mono uppercase tracking-wider text-[#f59e0b] font-bold block">
              Renewable Power • 4 Core Verticals
            </span>
            <h4 className="text-xs sm:text-[13px] font-black text-zinc-900 dark:text-zinc-100">
              Types of Solar Energy Services
            </h4>
          </div>
          <span className="text-[9.5px] font-mono font-bold px-2 py-0.5 rounded-[3px] bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/25">
            25-Year Full Warranty
          </span>
        </div>

        {/* 4 Dedicated Solar Energy Service Cards (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-1.5 flex-1 min-h-0">
          
          {/* 1. Residential Rooftop Solar */}
          <div
            onClick={() => setState({ ...state, solarSvc: 0 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.solarSvc ?? 0) === 0
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#f59e0b]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🏡</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#10b981]/15 text-[#10b981]">
                  Save 70-85% Bills
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                Residential Rooftop Solar
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Monocrystalline rooftop PV panels, net metering &amp; zero-down financing.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>25-Yr Warranty</span>
              <span className="text-[#f59e0b] font-bold">Home Solar →</span>
            </div>
          </div>

          {/* 2. Commercial & Industrial Solar (C&I) */}
          <div
            onClick={() => setState({ ...state, solarSvc: 1 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.solarSvc ?? 0) === 1
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#f59e0b]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🏢</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#f59e0b]/15 text-[#f59e0b]">
                  30% ITC Tax Credit
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                Commercial Solar Systems
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Corporate rooftop arrays, warehouse solar microgrids &amp; peak load shaving.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>3.5-Yr Payback</span>
              <span className="text-[#f59e0b] font-bold">Business Solar →</span>
            </div>
          </div>

          {/* 3. Solar Battery Storage & Backup (ESS) */}
          <div
            onClick={() => setState({ ...state, solarSvc: 2 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.solarSvc ?? 0) === 2
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#f59e0b]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">🔋</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-amber-500/15 text-amber-600 dark:text-amber-400">
                  100% Blackout Proof
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                Battery Storage &amp; Backup
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Lithium-ion energy storage systems for continuous night power &amp; grid independence.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>Zero Blackouts</span>
              <span className="text-[#f59e0b] font-bold">Battery Backup →</span>
            </div>
          </div>

          {/* 4. Solar O&M, Audits & EV Chargers */}
          <div
            onClick={() => setState({ ...state, solarSvc: 3 })}
            className={`p-2 rounded-[4px] border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              (state.solarSvc ?? 0) === 3
                ? 'bg-zinc-50 dark:bg-zinc-800/90 border-[#f59e0b]'
                : 'bg-zinc-50/60 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">⚡</span>
                <span className="text-[8px] font-mono font-bold px-1 py-0.2 rounded-[2px] bg-[#10b981]/15 text-[#10b981]">
                  99.8% Uptime
                </span>
              </div>
              <h5 className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                O&amp;M Maintenance &amp; EV
              </h5>
              <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">
                Smart IoT performance monitoring, panel cleaning &amp; Level-2 solar EV chargers.
              </p>
            </div>
            <div className="pt-1 mt-1 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between text-[8px] font-mono text-zinc-400">
              <span>Smart Mobile App</span>
              <span className="text-[#f59e0b] font-bold">O&amp;M Care →</span>
            </div>
          </div>

        </div>

        {/* Global Styled Action Button */}
        <Button href="#contact" variant="primary" className="w-full">
          <span>Calculate Solar Savings &amp; Get Free Quote</span>
          <ArrowRightIcon className="w-3.5 h-3.5" />
        </Button>
      </div>
    )
  }
];

// Helper to syntax-highlight each line of code realistically
function renderHighlightedLine(line: string): React.ReactNode {
  if (line.trim().startsWith('//')) {
    return <span className="text-zinc-500 italic">{line}</span>;
  }

  // Tokenize strings, JSX tags, keywords, props, numbers, symbols
  const tokenRegex = /("[^"]*"|'[^']*'|<\/?[A-Z][A-Za-z0-9]*|\/?>|\b(?:export|function|const|return|useState|useLiveTelemetry|useMemo|useEffect|let|var|true|false)\b|\b[a-zA-Z0-9_]+(?==)|\b\d+\b|[{}()[\]=,;.:<>])/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push(line.slice(lastIndex, match.index));
    }

    const token = match[0];
    const key = `${match.index}-${token}`;

    if (token.startsWith('"') || token.startsWith("'")) {
      parts.push(<span key={key} className="text-emerald-400">{token}</span>);
    } else if (['export', 'function', 'const', 'return', 'useState', 'useLiveTelemetry', 'useMemo', 'useEffect', 'let', 'var', 'true', 'false'].includes(token)) {
      parts.push(<span key={key} className="text-purple-400 font-semibold">{token}</span>);
    } else if (token.startsWith('<') || token.startsWith('</') || token === '/>' || token === '>') {
      parts.push(<span key={key} className="text-[#06b6d4] font-semibold">{token}</span>);
    } else if (line[match.index + token.length] === '=') {
      parts.push(<span key={key} className="text-amber-300">{token}</span>);
    } else if (/^\d+$/.test(token)) {
      parts.push(<span key={key} className="text-sky-300">{token}</span>);
    } else {
      parts.push(<span key={key} className="text-zinc-300">{token}</span>);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push(line.slice(lastIndex));
  }

  return parts;
}

export function HeroInteractiveShowcase() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'code' | 'output'>('code');
  const [displayedCode, setDisplayedCode] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [clientUiState, setClientUiState] = useState<{ [key: string]: any }>({});
  const [isPaused, setIsPaused] = useState(false);
  const [pointer, setPointer] = useState<{
    x: number;
    y: number;
    visible: boolean;
    clicking: boolean;
    label: string;
  }>({
    x: 320,
    y: 46,
    visible: false,
    clicking: false,
    label: ''
  });

  const activeProject = PROJECTS[currentSlideIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const typewriterTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const outputButtonRef = useRef<HTMLButtonElement>(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the code viewport as characters are typed
  useEffect(() => {
    if (codeContainerRef.current) {
      codeContainerRef.current.scrollTop = codeContainerRef.current.scrollHeight;
    }
  }, [displayedCode]);

  // Automated human-paced typewriter + realistic tab transition
  useEffect(() => {
    if (isPaused) return;

    let charIndex = 0;
    const fullCode = activeProject.codeSnippet;
    setDisplayedCode('');
    setActiveTab('code');
    setIsTyping(true);
    setPointer({ x: 320, y: 46, visible: false, clicking: false, label: '' });

    function typeNextChar() {
      if (charIndex < fullCode.length) {
        charIndex++;
        setDisplayedCode(fullCode.slice(0, charIndex));

        // Natural typing delays
        const char = fullCode[charIndex - 1];
        let delay = 24; // Smooth, relaxed professional speed (~40 chars/sec)
        if (char === '\n') {
          delay = 120; // Realistic pause when hitting Enter for next line
        } else if (char === ';' || char === '{' || char === '}') {
          delay = 55; // Natural pause on closing token
        }

        typewriterTimerRef.current = setTimeout(typeNextChar, delay);
      } else {
        // Typing finished!
        setIsTyping(false);
        setDisplayedCode(fullCode);

        // Step 2: Brief pause to display full code & "Build Ready ✓"
        timerRef.current = setTimeout(() => {
          // Pointer glides over to "Output" tab
          let targetX = 320;
          let targetY = 46;
          if (outputButtonRef.current && containerRef.current) {
            const btnRect = outputButtonRef.current.getBoundingClientRect();
            const cRect = containerRef.current.getBoundingClientRect();
            targetX = btnRect.left - cRect.left + btnRect.width / 2 - 8;
            targetY = btnRect.top - cRect.top + btnRect.height / 2 - 8;
          }

          setPointer({ x: targetX, y: targetY, visible: true, clicking: false, label: 'Compiling Output...' });

          // Step 3: Pointer clicks tab and switches to Live Frontend Design Output
          timerRef.current = setTimeout(() => {
            setPointer((prev) => ({ ...prev, clicking: true }));

            timerRef.current = setTimeout(() => {
              setActiveTab('output');
              setPointer((prev) => ({ ...prev, clicking: false, label: 'Rendered Output' }));

              // Step 4: Pointer moves down to interact with client frontend design
              timerRef.current = setTimeout(() => {
                setPointer({ x: 200, y: 200, visible: true, clicking: false, label: 'Live Interaction' });

                timerRef.current = setTimeout(() => {
                  setPointer({ x: 200, y: 200, visible: true, clicking: false, label: 'Verified ✓' });

                  // Fade pointer out after 1.2s to leave clean unobstructed UI
                  timerRef.current = setTimeout(() => {
                    setPointer((prev) => ({ ...prev, visible: false }));

                    // Step 5: After 5 seconds on the live output, advance automatically to next project
                    timerRef.current = setTimeout(() => {
                      setCurrentSlideIndex((prev) => (prev + 1) % PROJECTS.length);
                    }, 5000);
                  }, 1200);
                }, 800);
              }, 700);
            }, 250);
          }, 600);
        }, 900);
      }
    }

    // Start typing after a short 250ms preparation pause
    typewriterTimerRef.current = setTimeout(typeNextChar, 250);

    return () => {
      if (typewriterTimerRef.current) clearTimeout(typewriterTimerRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlideIndex, isPaused, activeProject.codeSnippet]);

  // Handle clicking on any of the 5 project dots
  const handleDotClick = (index: number) => {
    if (typewriterTimerRef.current) clearTimeout(typewriterTimerRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    setCurrentSlideIndex(index);
    setActiveTab('code');
  };

  // Handle manual tab switching
  const handleTabSwitch = (tab: 'code' | 'output') => {
    if (typewriterTimerRef.current) clearTimeout(typewriterTimerRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveTab(tab);
    setPointer((prev) => ({ ...prev, visible: false }));
  };

  const codeLines = displayedCode.split('\n');

  return (
    <div
      ref={containerRef}
      className="rounded-[4px] overflow-hidden realistic-card border border-zinc-300 dark:border-zinc-800 relative group select-none flex flex-col h-[520px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Studio Header Bar: Fixed 44px height */}
      <div className="h-[44px] bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-4 flex items-center justify-between shrink-0">
        
        {/* Left: Window Traffic Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span className="w-2.5 h-2.5 rounded-[2px] bg-zinc-400 dark:bg-zinc-600 inline-block" />
          <span 
            className="w-2.5 h-2.5 rounded-[2px] inline-block transition-colors" 
            style={{ backgroundColor: activeProject.themeColor }} 
          />
        </div>

        {/* Center: 5 Interactive Project Navigation Dots */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-[4px] bg-zinc-200/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700">
          <span className="text-[10px] font-mono text-zinc-500 mr-1 hidden sm:inline-block">Project:</span>
          {PROJECTS.map((project, idx) => (
            <button
              key={project.id}
              onClick={() => handleDotClick(idx)}
              aria-label={`Switch to Project ${idx + 1}: ${project.name}`}
              title={`${idx + 1}. ${project.name}`}
              className={`transition-all duration-300 cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-5 h-2 rounded-[4px] bg-[#0219ac] ring-1'
                  : 'w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 hover:scale-125'
              }`}
              style={{
                borderColor: currentSlideIndex === idx ? project.themeColor : undefined
              }}
            />
          ))}
        </div>

        {/* Right: Autoplay Status & Quick Mode Indicator */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
          <span 
            className="w-1.5 h-1.5 rounded-full animate-pulse" 
            style={{ backgroundColor: activeProject.themeColor }}
          />
          <span 
            className="hidden sm:inline-block font-semibold truncate max-w-[120px]"
            style={{ color: activeProject.themeColor }}
          >
            {activeProject.name}
          </span>
        </div>
      </div>

      {/* URL & Tab Bar: Fixed 40px height */}
      <div className="h-[40px] flex items-center justify-between px-3.5 bg-zinc-50 dark:bg-zinc-900/90 border-b border-zinc-200 dark:border-zinc-800 shrink-0">
        
        {/* Filename & URL */}
        <div className="flex items-center gap-2 truncate">
          <TerminalIcon 
            className="w-3.5 h-3.5 shrink-0" 
            style={{ color: activeProject.themeColor }} 
          />
          <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200 truncate">
            {activeTab === 'code' ? activeProject.filename : activeProject.url}
          </span>
        </div>

        {/* Code / Output Switcher */}
        <div className="flex items-center gap-1 p-0.5 rounded-[4px] bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shrink-0">
          <button
            onClick={() => handleTabSwitch('code')}
            className={`px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold transition-all ${
              activeTab === 'code'
                ? 'bg-[#0219ac] text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            &lt;/&gt; Code
          </button>

          <button
            ref={outputButtonRef}
            onClick={() => handleTabSwitch('output')}
            className={`flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] text-[11px] font-bold transition-all ${
              activeTab === 'output'
                ? 'bg-[#0219ac] text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            <span 
              className="w-1.5 h-1.5 rounded-full" 
              style={{ backgroundColor: activeProject.themeColor }} 
            />
            <span>Output</span>
          </button>
        </div>
      </div>

      {/* Main Viewport: Exactly locked fixed height (h-[396px]) for BOTH Code and Output - ZERO Height Shift */}
      <div className="flex-1 h-[396px] max-h-[396px] bg-white dark:bg-zinc-950 overflow-hidden relative">
        
        {/* ------------------------------------------------------------- */}
        {/* SCREEN 1: AUTOMATIC REAL CODE TYPING SCREEN */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'code' && (
          <div className="h-full flex flex-col justify-between bg-zinc-950">
            {/* Code subheader */}
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 text-zinc-400 border-b border-zinc-800 text-[11px] font-mono shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                <span>// Architecture &amp; Client Component</span>
              </div>
              <span 
                className="font-semibold flex items-center gap-1.5" 
                style={{ color: activeProject.themeColor }}
              >
                {isTyping ? (
                  <>
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: activeProject.themeColor }} />
                    <span>Writing code...</span>
                  </>
                ) : (
                  <span>Build Ready ✓</span>
                )}
              </span>
            </div>

            {/* Code editor body with line numbers & syntax styling */}
            <div
              ref={codeContainerRef}
              className="flex-1 p-3.5 sm:p-4 font-mono text-xs sm:text-[12px] leading-[22px] bg-zinc-950 text-zinc-200 overflow-y-auto selection:bg-[#06b6d4]/30"
            >
              <div className="flex min-w-full">
                {/* Line numbers gutter */}
                <div className="select-none text-right pr-3 text-zinc-600 border-r border-zinc-800/80 shrink-0 w-7">
                  {codeLines.map((_, i) => (
                    <div key={i} className="leading-[22px] text-[11px] font-mono text-zinc-500">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code lines */}
                <div className="pl-3.5 flex-1 overflow-x-auto">
                  {codeLines.map((line, lineIdx) => {
                    const isLastLine = lineIdx === codeLines.length - 1;
                    return (
                      <div key={lineIdx} className="leading-[22px] whitespace-pre font-mono">
                        {renderHighlightedLine(line)}
                        {isLastLine && isTyping && (
                          <span 
                            className="inline-block w-[2px] h-[14px] ml-[1px] -mb-[2px] animate-pulse" 
                            style={{ backgroundColor: activeProject.themeColor }} 
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Code subfooter */}
            <div className="h-[28px] px-4 bg-zinc-900 border-t border-zinc-800 text-[10px] text-zinc-400 font-mono flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <span>TypeScript</span>
                <span>•</span>
                <span>React 19</span>
                <span>•</span>
                <span>Next.js 16</span>
              </div>
              <span style={{ color: activeProject.themeColor }}>
                {isTyping ? 'Live Typing...' : 'Compiled 0 Errors'}
              </span>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* SCREEN 2: LIVE RENDERED FRONTEND OUTPUT SCREEN */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'output' && (
          <div className="h-full p-4 sm:p-5 flex flex-col justify-between overflow-y-auto animate-fadeIn">
            
            {/* Live Address Bar */}
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-[4px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono text-zinc-500 shrink-0 mb-2">
              <div className="flex items-center gap-1.5 truncate">
                <span style={{ color: activeProject.themeColor }}>🔒</span>
                <span className="text-zinc-700 dark:text-zinc-300 truncate font-semibold">https://{activeProject.url}</span>
              </div>
              <span 
                className="text-[10px] px-2 py-0.2 rounded-[4px] shrink-0 font-bold border"
                style={{
                  backgroundColor: `${activeProject.themeColor}15`,
                  color: activeProject.themeColor,
                  borderColor: `${activeProject.themeColor}30`
                }}
              >
                Live Preview
              </span>
            </div>

            {/* Rendered Individual Project UI - Exact Fit */}
            <div className="flex-1 flex flex-col justify-between">
              {activeProject.renderUi(clientUiState, setClientUiState)}
            </div>

          </div>
        )}

        {/* Realistic Animated Mouse Pointer */}
        <div
          className={`pointer-events-none absolute z-30 transition-all duration-300 ease-out flex items-center gap-1 ${
            pointer.visible ? 'opacity-100' : 'opacity-0'
          } ${pointer.clicking ? 'scale-90' : 'scale-100'}`}
          style={{
            left: `${pointer.x}px`,
            top: `${pointer.y}px`,
          }}
        >
          {/* Mouse Arrow SVG */}
          <svg className="w-4 h-4 fill-black text-white filter drop-shadow(0 1px 2px rgba(0,0,0,0.5))" viewBox="0 0 24 24">
            <path d="M3 3l7 18 3-7 7-3L3 3z" />
          </svg>
          {pointer.label && (
            <span className="text-[9px] font-mono px-1 py-0.2 rounded-[2px] bg-zinc-900 text-white opacity-90 whitespace-nowrap shadow-sm">
              {pointer.label}
            </span>
          )}
        </div>

      </div>

      {/* Studio Bottom Bar: Fixed 40px height */}
      <div className="h-[40px] px-4 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300 font-semibold">
            Slide {currentSlideIndex + 1} of 5: {activeProject.name}
          </span>
        </div>
        <span 
          className="font-mono text-[11px] font-semibold"
          style={{ color: activeProject.themeColor }}
        >
          {activeTab === 'code' ? 'Code Editor' : 'Live UI Output'}
        </span>
      </div>

    </div>
  );
}
