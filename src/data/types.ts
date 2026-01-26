import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  icon: string;
  projects: string[];
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  client: string;
  year: string;
  skills: string[];
  link?: string;
}

export interface Spread {
  id: string;
  name: string;
  color: string;
  icon: LucideIcon;
  leftPage: string;
  rightPage: string;
}

export interface PageContent {
  id: string;
  component: React.ComponentType;
}