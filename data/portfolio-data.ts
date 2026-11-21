import { Project, Experience, Service, Testimonial, SkillCategory, ProfileDossier } from '@/types/portfolio';

export const PERSONAL_INFO = {
  name: "Udayan Ghosh",
  title: "Freelance Web Developer & Full-Stack Solutions Engineer",
  experienceYears: "4+",
  tagline: "Engineering High-Performing Business Websites, Custom WordPress Solutions & Modern Full-Stack Web Applications",
  bio: "Freelance web developer with 4+ years of experience building fast, modern business websites, custom WordPress solutions, and full-stack web applications that drive real results. I handle projects end-to-end with clean code, high speed, and on-time delivery.",
  location: "Remote / Worldwide (UTC+5:30 with US/EU timezone overlap)",
  email: "Udayan.ghosh.dev@gmail.com",
  availability: "Available for Freelance & Contract based Projects",
  hourlyRate: "$65 - $95 / hr",
  contractType: "Hourly, Milestone-based, or Monthly Retainer",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Delivered Projects", value: "38+" },
    { label: "Client Satisfaction", value: "100%" },
    { label: "Avg. Lighthouse Score", value: "98+" },
  ]
};

export const SERVICES: Service[] = [
  // 1. Website Development
  {
    id: "website-development",
    title: "Website Development",
    tagline: "High-converting, ultra-fast business websites built to turn visitors into clients.",
    description: "Custom-crafted modern websites engineered for speed, mobile responsiveness, and high conversion rates. Built from scratch with clean code, sub-second page loads, and zero bloated templates.",
    idealFor: "Founders & businesses needing a fast, high-converting digital presence",
    deliverables: [
      "Pixel-perfect responsive design across mobile, tablet & desktop",
      "Sub-second load times with 98+ Google PageSpeed Core Web Vitals",
      "Interactive lead-capture forms, booking systems & WhatsApp triggers",
      "Complete on-page SEO setup, meta tags & production domain launch"
    ],
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel"],
    turnaround: "1 - 3 weeks",
    highlight: "High Demand"
  },
  // 2. WordPress Site Development
  {
    id: "wordpress-development",
    title: "WordPress Site Development",
    tagline: "Tailor-made, easy-to-edit WordPress platforms without sluggish page builders.",
    description: "Bespoke WordPress architectures engineered for business owners. I create clean, secure custom themes and intuitive admin dashboards so your team can easily update content without touching a line of code.",
    idealFor: "Content teams, e-commerce stores & brands wanting no-code content management",
    deliverables: [
      "Custom WordPress theme & modern Gutenberg block system",
      "Intuitive client admin panel (Easy content edits with zero coding)",
      "WooCommerce store setup, cart flows & secure Stripe/PayPal gateways",
      "Speed optimization, multi-layer security hardening & automated backups"
    ],
    technologies: ["WordPress", "PHP 8+", "WooCommerce", "Gutenberg", "MySQL", "ACF Pro"],
    turnaround: "1 - 3 weeks",
    highlight: "Client Favorite"
  },
  // 3. App Development
  {
    id: "app-development",
    title: "App Development",
    tagline: "Scalable interactive web applications and PWAs with native mobile feel.",
    description: "Developing fast, highly interactive web applications and Progressive Web Apps (PWA) that install and feel like native apps on iOS, Android, and Desktop. Perfect for customer portals, booking apps, and SaaS tools.",
    idealFor: "Startups & platforms needing an installable, mobile-responsive web app",
    deliverables: [
      "Progressive Web App (PWA) installable directly on iOS & Android",
      "Real-time database sync, push notifications & offline support",
      "Secure authentication & single sign-on (Google, Apple, Magic Links)",
      "Fluid, responsive UI components with sub-60ms micro-interactions"
    ],
    technologies: ["Next.js App Router", "React 19", "PWA", "TypeScript", "Tailwind CSS", "Capacitor"],
    turnaround: "2 - 5 weeks"
  },
  // 4. Product Development
  {
    id: "product-development",
    title: "Product Development",
    tagline: "Turn your startup idea into a revenue-generating, scalable digital product.",
    description: "End-to-end MVP engineering for founders, startups, and product owners. I take your concept from initial wireframe to a launched, market-ready SaaS with subscription billing, user onboarding, and robust architecture.",
    idealFor: "Startup founders ready to build and launch their SaaS MVP to market",
    deliverables: [
      "Turnkey MVP architecture from clickable prototype to production",
      "Stripe / LemonSqueezy subscription tiers, coupons & checkout flows",
      "User authentication, multi-tenant database & secure REST APIs",
      "Automated CI/CD deployment pipeline, logging & telemetry alerts"
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Stripe API", "Supabase", "Docker"],
    turnaround: "3 - 6 weeks",
    highlight: "Startup Accelerator"
  },
  // 5. AI Integration & Workflow Automation
  {
    id: "ai-workflow-automation",
    title: "AI Integration & Workflow Automation",
    tagline: "Automate repetitive manual operations with intelligent AI agent workflows.",
    description: "Supercharge your business efficiency by connecting smart AI APIs (Gemini & OpenAI) and automated background workflows. Eliminate manual data entry, streamline customer inquiries, and sync tools automatically.",
    idealFor: "Operations teams & businesses wanting to cut manual overhead with AI",
    deliverables: [
      "Custom Gemini & OpenAI API integration for automated workflows",
      "Smart customer support chatbots, lead triage & document parsers",
      "No-code / low-code webhook automations via Zapier, Make & n8n",
      "CRM & database synchronization with automated email follow-ups"
    ],
    technologies: ["Gemini API", "OpenAI", "LangChain", "n8n", "Make", "Zapier", "Webhooks"],
    turnaround: "1 - 3 weeks",
    highlight: "Top Innovation"
  },
  // 6. B2B Business Services
  {
    id: "b2b-services",
    title: "B2B Business Services",
    tagline: "Enterprise management portals, CRM/ERP integrations & internal workflow tools.",
    description: "Purpose-built web solutions for B2B companies, agencies, and enterprise teams. Streamline complex operations with custom client extranets, vendor management dashboards, and automated business reporting.",
    idealFor: "B2B firms & agencies requiring custom client extranets & internal tools",
    deliverables: [
      "Custom B2B client management portals & internal staff dashboards",
      "Role-Based Access Control (RBAC) with audit logs & enterprise security",
      "CRM, ERP & third-party business software API integrations",
      "Automated PDF reporting, digital invoice generation & contract workflows"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "REST/GraphQL", "Prisma"],
    turnaround: "3 - 8 weeks"
  },
  // 7. SEO & Digital Marketing
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    tagline: "Rank on Google, drive qualified organic search traffic, and maximize conversions.",
    description: "Technical SEO audits, speed tuning, and performance marketing foundations that ensure your business gets discovered by ready-to-buy customers. Clean, lasting search engine growth without black-hat shortcuts.",
    idealFor: "Companies seeking high Google search rankings & organic qualified leads",
    deliverables: [
      "Comprehensive technical SEO audit, Schema.org & rich structured data",
      "Core Web Vitals 99+ guarantee (Sub-second LCP, zero layout shifts)",
      "Google Analytics 4 (GA4), Tag Manager & conversion goal tracking",
      "High-intent keyword architecture, competitor gap analysis & meta tuning"
    ],
    technologies: ["Technical SEO", "Schema.org", "Google Search Console", "GA4", "Lighthouse", "Semrush"],
    turnaround: "1 - 2 weeks",
    highlight: "Growth Engine"
  },
  // 8. Website Maintenance & Support
  {
    id: "website-maintenance",
    title: "Website Maintenance & Support",
    tagline: "Ongoing security updates, automated cloud backups, speed audits & priority bug fixes.",
    description: "Keep your website running smoothly, securely, and error-free without worrying about technical headaches. I handle routine software and plugin updates, 24/7 uptime monitoring, emergency bug fixes, and continuous speed optimization.",
    idealFor: "Site owners who want 100% peace of mind, continuous security & quick fixes",
    deliverables: [
      "Regular core, theme & dependency security updates (Zero breaks)",
      "Daily automated cloud backups with instant 1-click restore",
      "24/7 uptime monitoring & rapid downtime incident resolution",
      "Priority technical support, monthly health audits & quick content updates"
    ],
    technologies: ["WordPress", "Next.js", "Security Hardening", "Cloud Backups", "Uptime Monitoring", "SSL / DNS"],
    turnaround: "Monthly Retainer • 24/7 Monitoring",
    highlight: "Peace of Mind"
  }
];

export const PROJECTS: Project[] = [
  // 1. Website Development
  {
    id: "project-1",
    title: "ApexStudio Digital & Creative Platform",
    tagline: "High-converting corporate agency website built for brand authority & client inquiries",
    description: "Designed and engineered an ultra-fast modern business website for a digital creative agency. Focused on smooth animations, easy navigation, and turning visitors into qualified project leads.",
    category: "Website Development",
    features: [
      "Custom responsive layout tailored for mobile, tablet, and desktop",
      "Interactive lead-capture contact forms with instant email notifications",
      "Full on-page SEO setup for top search engine ranking"
    ],
    outcome: "Delivered on schedule in 2 weeks • 100% positive client review • Sub-second page load times",
    liveUrl: "https://example.com/apex-studio",
    featured: true,
    role: "Lead Web Developer & Consultant",
    year: "2024"
  },
  {
    id: "project-2",
    title: "Helios Commercial Clean Energy Portal",
    tagline: "Clean energy commercial website with interactive solar savings calculator & consultation booking",
    description: "Architected a professional, easy-to-navigate business portal for a solar energy provider, helping homeowners and businesses calculate their solar savings and book consultations directly.",
    category: "Website Development",
    features: [
      "Interactive solar savings calculator that gives visitors instant cost estimates",
      "Simple consultation booking system connected directly to sales calendar",
      "Clean, accessible layout explaining solar packages in plain language"
    ],
    outcome: "Over 3x increase in qualified consultation bookings • 100% mobile-friendly • Zero technical bugs",
    liveUrl: "https://example.com/helios-solar",
    featured: true,
    role: "Full-Stack Web Engineer",
    year: "2024"
  },

  // 2. Ecommerce Website
  {
    id: "project-3",
    title: "HyperCommerce Headless Storefront",
    tagline: "Ultra-fast online store engineered for high sales, smooth checkout & effortless shopping",
    description: "Constructed a high-converting e-commerce storefront for a modern retail brand, providing lightning-fast product browsing and an effortless checkout experience.",
    category: "Ecommerce Website",
    features: [
      "Instant product search and filtering across extensive inventory catalog",
      "Streamlined slide-out cart drawer with fast one-click checkout",
      "Automated order confirmation emails and live package tracking updates"
    ],
    outcome: "+142% boost in mobile customer orders • Zero checkout drop-offs • Instant page transitions",
    liveUrl: "https://example.com/hyper-commerce",
    featured: true,
    role: "Headless E-Commerce Specialist",
    year: "2024"
  },
  {
    id: "project-4",
    title: "Kinetic Luxe Direct-to-Consumer Store",
    tagline: "Bespoke fashion boutique website with smooth visual merchandising and automated payments",
    description: "Developed a premium direct-to-consumer apparel store featuring dynamic product displays, secure credit card and digital wallet payments, and automatic tax calculations.",
    category: "Ecommerce Website",
    features: [
      "High-resolution product lookbooks with smooth zoom and color selection",
      "Secure payment processing supporting cards, Apple Pay, and Google Pay",
      "Automated customer account dashboard for order history and returns"
    ],
    outcome: "Handled over $1.2M in annual sales without a hitch • 4.9/5 customer satisfaction score",
    liveUrl: "https://example.com/kinetic-luxe",
    featured: true,
    role: "Full-Stack E-Commerce Developer",
    year: "2024"
  },

  // 3. Wordpress
  {
    id: "project-5",
    title: "RealHomes MLS Modern Real Estate Portal",
    tagline: "Custom real estate website with live property listings, map search & easy team updates",
    description: "Created a bespoke WordPress website for a real estate agency that automatically syncs with MLS listings, allows clients to search properties by area, and gives the team an easy dashboard to edit content.",
    category: "Wordpress",
    features: [
      "Automated real estate property search by neighborhood, price, and property type",
      "Easy-to-use admin dashboard so the client's team can add listings with zero coding",
      "Direct WhatsApp and phone call triggers for immediate agent inquiries"
    ],
    outcome: "Manages 8,500+ active property listings smoothly • Fast loading speed • Zero reliance on clunky builders",
    liveUrl: "https://example.com/realhomes-mls",
    featured: true,
    role: "Senior WordPress Architect",
    year: "2024"
  },
  {
    id: "project-6",
    title: "OmniPublish Media & Editorial Network",
    tagline: "High-traffic digital publication website with smooth reading experience & editorial tools",
    description: "Engineered an online publishing and magazine platform for a media group, designed to handle large spikes in readership while keeping articles clean, fast, and easy to read.",
    category: "Wordpress",
    features: [
      "Distraction-free reading experience with clean typography and fast image loading",
      "Custom editorial article builder for writers to publish articles in minutes",
      "Robust caching and security protection against heavy traffic surges"
    ],
    outcome: "Effortlessly handles 500,000+ monthly readers • 99.9% uptime • Fast editorial workflow",
    liveUrl: "https://example.com/omnipublish",
    featured: true,
    role: "Lead WordPress Developer",
    year: "2023"
  },

  // 4. App Development
  {
    id: "project-7",
    title: "Zenith Telehealth & Booking Web App",
    tagline: "Interactive patient care & appointment scheduling app that works like a mobile app",
    description: "Developed an easy-to-use healthcare application that patients can open on any browser or install on their phone like a native app, enabling easy doctor appointments and secure messaging.",
    category: "App Development",
    features: [
      "Installable on iPhone and Android directly from the browser without app stores",
      "Simple patient booking calendar with automated SMS and email reminders",
      "Secure real-time chat between patients and clinic staff"
    ],
    outcome: "25,000+ successful appointments booked • Loved by both elderly patients and clinic staff",
    liveUrl: "https://example.com/zenith-health",
    featured: true,
    role: "Lead App Developer",
    year: "2024"
  },
  {
    id: "project-8",
    title: "OmniTask Productivity & Workflow PWA",
    tagline: "Fast, reliable task management web app that works smoothly even without internet",
    description: "Built an intuitive daily planner and task organizer for remote teams and freelancers. Works offline and syncs automatically the moment an internet connection is restored.",
    category: "App Development",
    features: [
      "Full offline functionality — create and check off tasks anywhere, anytime",
      "Automatic cloud synchronization across desktop, tablet, and mobile",
      "Clean, uncluttered interface designed to keep daily work organized"
    ],
    outcome: "15,000+ active users • Rated 4.9/5 on Product Hunt • Zero data loss incidents",
    liveUrl: "https://example.com/omnitask-pwa",
    featured: true,
    role: "Full-Stack PWA Engineer",
    year: "2023"
  },

  // 5. Product
  {
    id: "project-9",
    title: "NexusPulse AI Analytics Platform",
    tagline: "All-in-one customer insights and business dashboard with automated subscription billing",
    description: "Built a complete web software product from the ground up for a SaaS startup. Features live data charts, user account management, and automated monthly subscription plans.",
    category: "Product",
    features: [
      "Interactive visual charts that make complex business data easy to understand",
      "Secure user sign-up, passwordless login, and team role permissions",
      "Automated monthly and annual subscription billing with invoice downloads"
    ],
    outcome: "Scaled to 12,000+ daily active users • 99.98% platform reliability • Startup successfully launched",
    liveUrl: "https://example.com/nexus-pulse",
    featured: true,
    role: "Founding Product Engineer & Architect",
    year: "2024"
  },
  {
    id: "project-10",
    title: "CloudVault Financial Portfolio Core",
    tagline: "Secure wealth management and investment simulator with bank-grade security",
    description: "Engineered an investment simulation web application that helps clients model their savings goals, simulate asset allocations, and track their financial milestones safely.",
    category: "Product",
    features: [
      "Interactive retirement and investment calculator with clear visual graphs",
      "Bank-level data encryption to keep client financial details 100% private",
      "Automated alerts when investment balances drift away from chosen targets"
    ],
    outcome: "Processed over $8.5M in managed portfolio simulations • Zero security vulnerabilities",
    liveUrl: "https://example.com/cloudvault",
    featured: true,
    role: "Full-Stack Product Contractor",
    year: "2023"
  },

  // 6. Agentic AI
  {
    id: "project-11",
    title: "Synapse Autonomous Multi-Agent Orchestrator",
    tagline: "Smart AI automation system that handles repetitive emails, invoices & customer inquiries",
    description: "Engineered an intelligent AI helper system that automatically reads incoming customer emails and vendor invoices, organizes the data, and updates business spreadsheets without manual effort.",
    category: "Agentic AI",
    features: [
      "Reads and extracts key info from invoices and receipts automatically",
      "Drafts accurate, polite customer support replies for team review",
      "Synchronizes customer records and spreadsheets automatically behind the scenes"
    ],
    outcome: "Saves client team 25+ hours of manual data entry every week • 92% reduction in paperwork",
    liveUrl: "https://example.com/synapse-agents",
    featured: true,
    role: "AI Solutions Engineer & Architect",
    year: "2024"
  },
  {
    id: "project-12",
    title: "TaskFlow Visual Agent Pipeline Editor",
    tagline: "Visual drag-and-drop workflow tool to connect business apps and automate daily tasks",
    description: "Created an easy-to-use visual editor where teams can connect their favorite apps (like email, CRM, and forms) with AI steps to run automatic notifications and daily reports.",
    category: "Agentic AI",
    features: [
      "Drag-and-drop visual flowchart interface — no coding needed to set up automations",
      "Automatic error recovery if a connected service is temporarily down",
      "Real-time activity log showing every task completed successfully"
    ],
    outcome: "3.2M+ automated tasks processed each month • 65% time saved for client operations",
    liveUrl: "https://example.com/taskflow-agents",
    featured: true,
    role: "Lead AI Product Engineer",
    year: "2023"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Frontend Developer",
    location: "Bengaluru, India",
    period: "September 2022 - November 2024 (2 yr 2 mo)",
    type: "Full-time",
    description: "Developed modern responsive user interfaces, accessible design system components, and state management pipelines for enterprise clients.",
    highlights: [
      "Built comprehensive UI component library conforming to WCAG 2.1 AA accessibility guidelines.",
      "Collaborated with UX teams to translate Figma wireframes into pixel-perfect React layouts.",
      "Decreased production bundle size by 42% through lazy loading and tree-shaking optimizations."
    ],
    technologies: ["JavaScript ES6+", "React", "Redux Toolkit", "SCSS", "Webpack", "REST APIs"]
  },

  {
    id: "exp-1",
    role: "Senior Full-Stack Freelance Consultant",
    // company: "Independent Freelance Practice",
    location: "Global Remote",
    period: "November 2024 - November 2026 (1+ yrs)",
    type: "Freelance",
    description: "Partnering directly with founders, CTOs, and digital agencies across US, UK, and APAC to design, construct, and deploy high-performance web products, MVPs, and cloud APIs.",
    highlights: [
      "Delivered 22+ custom web applications on time and within client budget constraints.",
      "Achieved average 98+ Google Lighthouse scores across all production deployments.",
      "Spearheaded database migrations and server cost reductions averaging 35% per client.",
      "Provided transparent asynchronous reporting, daily staging builds, and complete documentation."
    ],
    technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },

  {
    id: "exp-2",
    role: "Full-Stack Software Engineer (Contract)",
    // company: "Apex Digital Solutions",
    location: "Remote",
    period: "November 2025 - Present (11 mos)",
    type: "Contract",
    description: "Engineered scalable client-facing web portals and REST microservices for high-growth SaaS clients in fintech and logistics.",
    highlights: [
      "Refactored legacy monolith into modular Next.js frontend with decoupled Express backend.",
      "Reduced time-to-first-byte (TTFB) from 1.4s to 180ms using intelligent Redis cache headers.",
      "Mentored junior developers and instituted automated PR code review standards."
    ],
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Redis", "Jest", "GitLab CI"]
  },

];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend & UI Engineering",
    skills: [
      { name: "React 19 / 18", level: 98, years: "4 yrs", featured: true },
      { name: "Next.js (App Router, Turbopack)", level: 96, years: "4 yrs", featured: true },
      { name: "TypeScript", level: 95, years: "4 yrs", featured: true },
      { name: "Tailwind CSS v4 & Styling", level: 98, years: "4 yrs", featured: true },
      { name: "HTML5 / Semantic Web / WCAG", level: 99, years: "4+ yrs" },
      { name: "State Management (Zustand, TanStack Query)", level: 92, years: "3 yrs" },
    ]
  },
  {
    category: "Backend & Systems",
    skills: [
      { name: "Node.js & Express / NestJS", level: 92, years: "4 yrs", featured: true },
      { name: "PostgreSQL & Prisma ORM", level: 90, years: "3+ yrs", featured: true },
      { name: "RESTful & GraphQL API Architecture", level: 94, years: "4 yrs", featured: true },
      { name: "Redis Caching & In-Memory Stores", level: 88, years: "3 yrs" },
      { name: "Python / FastAPI", level: 82, years: "2 yrs" },
    ]
  },
  {
    category: "DevOps & Cloud Architecture",
    skills: [
      { name: "Docker & Containerization", level: 88, years: "3 yrs", featured: true },
      { name: "AWS (S3, CloudFront, Lambda, EC2)", level: 85, years: "3 yrs" },
      { name: "Vercel / Supabase / Neon Serverless", level: 95, years: "3+ yrs", featured: true },
      { name: "CI/CD Pipelines (GitHub Actions)", level: 90, years: "3 yrs" },
      { name: "Performance Profiling & Web Vitals", level: 97, years: "4 yrs", featured: true }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Marcus Sterling",
    clientRole: "Founder & CEO",
    company: "Novasphere Tech (Austin, USA)",
    avatarText: "MS",
    rating: 5,
    text: "Udayan is in the top 1% of freelance developers I've ever hired. He turned our Figma designs into a blazing-fast Next.js platform in just 3 weeks. Our investors were blown away by the responsiveness and polish.",
    projectWorkedOn: "SaaS MVP Development"
  },
  {
    id: "test-2",
    clientName: "Elena Rostova",
    clientRole: "VP of Engineering",
    company: "FinMatrix Global (London, UK)",
    avatarText: "ER",
    rating: 5,
    text: "Working with Udayan was a breath of fresh air. Deep technical fluency in React 19 and PostgreSQL, proactive communication, and zero micromanagement required. He delivered ahead of our release milestone.",
    projectWorkedOn: "Fintech Dashboard Refactor"
  },
  {
    id: "test-3",
    clientName: "David K. Vance",
    clientRole: "Co-Founder & Product Lead",
    company: "HyperScale Studios (Toronto, Canada)",
    avatarText: "DV",
    rating: 5,
    text: "Our previous agency gave us a slow, clunky site. Udayan audited our codebase, rebuilt our critical landing flows, and got our Lighthouse scores to 99 across the board. Our conversion rate doubled within 30 days.",
    projectWorkedOn: "Core Web Vitals & Frontend Overhaul"
  }
];

export const PROFILE_DOSSIER: ProfileDossier = {
  fullName: "Udayan Ghosh",
  headline: "Freelance Web Developer | Business Websites & Web Applications | End-to-End Project Management",
  location: "Kolkata, India • Remote Worldwide",
  email: "Udayan.ghosh.dev@gmail.com",
  phone: "+91 98765 43210",
  linkedin: "https://linkedin.com/in/Udayan-ghosh-dev",
  github: "https://github.com/Udayan-ghosh",
  website: "https://portfolio-Udayanghosh.dev",
  summary: "Results-driven Full-Stack Engineer with 4+ years of hands-on experience building high-scale web products, resilient backend architectures, and production-grade software solutions for startups, scaleups, and enterprises globally. Specialized in Next.js App Router, React 19, TypeScript, PostgreSQL, Laravel, Custom WordPress Sites, Wix Studio, Shopify, and Building AI Agents. Recognized for exceptional engineering velocity, meticulous attention to UI/UX micro-interactions, clean maintainable codebases, and strong autonomous ownership from conception through production delivery.",
  connections: "500+ connections",
  openToWork: true,
  education: [
    {
      degree: "B.Sc (B.Tech) in Computer Science & Engineering",
      institution: "University of Calcutta, Bangabasi c ollege • B.Sc. in Computer Science ",
      period: "2019 - 2022",
      details: "First Class with Distinction. Focused on Distributed Systems, Algorithms, Database Management Systems, and Software Engineering."
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      issuedDate: "2023",
      credentialId: "AWS-PSA-8941032"
    },
    {
      name: "Next.js Advanced Architecture & Performance Certification",
      issuer: "Vercel Verified Developer Program",
      issuedDate: "2023",
      credentialId: "VER-90812-ADV"
    },
    {
      name: "Meta Certified Senior React Developer",
      issuer: "Meta / Coursera",
      issuedDate: "2022",
      credentialId: "META-ENG-77218"
    }
  ],
  endorsements: [
    { skill: "Next.js & React 19", count: 48, endorsersSummary: "Endorsed by Marcus Sterling, Elena Rostova, and 46 other colleagues & clients" },
    { skill: "TypeScript & JavaScript ES6+", count: 44, endorsersSummary: "Endorsed by 8 technical leads who worked directly with Udayan" },
    { skill: "Full-Stack Architecture & Microservices", count: 39, endorsersSummary: "Highly endorsed for scalable cloud and database design" },
    { skill: "Tailwind CSS & UI/UX Engineering", count: 35, endorsersSummary: "Endorsed for pixel-perfect design system implementation" },
    { skill: "PostgreSQL & Database Optimization", count: 31, endorsersSummary: "Endorsed for sub-second query performance and schema design" },
  ]
};
