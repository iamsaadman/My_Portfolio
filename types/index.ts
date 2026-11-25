export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type ExpertiseCategory = {
  title: string;
  icon: string;
  technologies: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  role: string;
  description: string;
  features: string[];
  tech: string[];
  timeline: string;
  github?: string;
  live?: string;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

export type LeadershipEntry = {
  title: string;
  organization: string;
  position: string;
  period: string;
  responsibilities: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  period: string;
  details?: string;
};

export type Certification = {
  title: string;
  provider: string;
  issued: string;
};

export type Achievement = {
  title: string;
  project: string;
  role: string;
  tech: string[];
  description: string;
};
