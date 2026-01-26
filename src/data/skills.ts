import type { Skill } from './types';

export const technicalSkills: Skill[] = [
  {
    name: 'Développement Web',
    level: 85,
    icon: '🌐',
    projects: ['Application Web', 'Site E-commerce'],
    description: 'HTML, CSS, JavaScript, React'
  },
  {
    name: 'React & TypeScript',
    level: 80,
    icon: '⚛️',
    projects: ['Application Web', 'Portfolio Interactif'],
    description: 'Composants, Hooks, Context API'
  },
  {
    name: 'Backend (Node.js)',
    level: 75,
    icon: '🔧',
    projects: ['Application Web', 'API REST'],
    description: 'Express, API REST, JWT'
  },
  {
    name: 'Base de Données',
    level: 70,
    icon: '🗄️',
    projects: ['Application Web', 'Site E-commerce'],
    description: 'MySQL, MongoDB, PostgreSQL'
  }
];

export const softSkills: Skill[] = [
  {
    name: 'Gestion de Projet',
    level: 80,
    icon: '📋',
    projects: [],
    description: 'Méthodes Agile/Scrum'
  },
  {
    name: 'Travail d\'équipe',
    level: 90,
    icon: '👥',
    projects: [],
    description: 'Collaboration efficace'
  },
  {
    name: 'Communication',
    level: 85,
    icon: '💬',
    projects: [],
    description: 'Présentation & documentation'
  },
  {
    name: 'Résolution de problèmes',
    level: 88,
    icon: '🧩',
    projects: [],
    description: 'Approche analytique'
  }
];

export const learningSkills = ['Docker', 'Kubernetes', 'GraphQL', 'Three.js'];