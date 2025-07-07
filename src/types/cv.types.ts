// Domain Types - Following Single Responsibility Principle
export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  available: boolean;
  focus: string;
}

export interface ContactInfo {
  phones: string[];
  email: string;
  linkedin: string;
  github: string;
}

export interface Skill {
  name: string;
  featured: boolean;
}

export interface SkillCategory {
  aiAutomation: Skill[];
  development: Skill[];
  languages: Skill[];
}

export interface Education {
  title: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  organization: string;
  year: string;
}

export interface Project {
  title: string;
  description: string;
  metrics: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  techStack: string[];
}

export interface Footer {
  version: string;
  status: string;
  specialization: string;
  lastUpdated: string;
}

export interface CVData {
  personal: PersonalInfo;
  contact: ContactInfo;
  skills: SkillCategory;
  education: Education[];
  certifications: Certification[];
  about: string;
  keyProjects: Project[];
  experience: Experience[];
  footer: Footer;
}
