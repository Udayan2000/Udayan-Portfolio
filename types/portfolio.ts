export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'Website Development' | 'Ecommerce Website' | 'Wordpress' | 'App Development' | 'Product' | 'Agentic AI' | string;
  features: string[];
  outcome: string;
  techStack?: string[];
  metrics?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  role: string;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  // company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Freelance' | 'Contract' | 'Full-time';
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  idealFor?: string;
  deliverables: string[];
  technologies: string[];
  turnaround: string;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarText: string;
  rating: number;
  text: string;
  projectWorkedOn: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number; // percentage (e.g. 95)
    years: string;
    featured?: boolean;
  }[];
}

export interface ProfileDossier {
  fullName: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  website: string;
  summary: string;
  connections: string;
  openToWork: boolean;
  education: {
    degree: string;
    institution: string;
    period: string;
    details: string;
  }[];
  certifications: {
    name: string;
    issuer: string;
    issuedDate: string;
    credentialId?: string;
  }[];
  endorsements: {
    skill: string;
    count: number;
    endorsersSummary: string;
  }[];
}
