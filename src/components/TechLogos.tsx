// Mapping des logos SVG pour les technologies
// Logos simples et sobres en noir et blanc

import React from 'react';

export const TechLogo: React.FC<{ tech: string; size?: number; className?: string }> = ({ tech, size = 28, className }) => {
  const logoProps = { 
    width: size, 
    height: size, 
    viewBox: "0 0 24 24", 
    fill: "none", 
    stroke: "currentColor", 
    strokeWidth: 2, 
    strokeLinecap: "round" as const, 
    strokeLinejoin: "round" as const, 
    className 
  };

  const logos: Record<string, React.ReactNode> = {
    java: (
      <svg {...logoProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="M10.5 8.5a1.5 1.5 0 0 1 2.5 1.4c-.4.6-.9 1.1-1.5 1.4" />
        <path d="M13.5 13.5a1.5 1.5 0 0 1-2.5 1.4c.4-.6.9-1.1 1.5-1.4" />
        <path d="M8.5 12a1.5 1.5 0 0 1 2.5-1.4 4.5 4.5 0 0 1 3 4.8 1.5 1.5 0 0 1-3 1.4" />
        <path d="M15.5 12a1.5 1.5 0 0 1-2.5-1.4 4.5 4.5 0 0 1-3 4.8 1.5 1.5 0 0 1 3 1.4" />
      </svg>
    ),
    python: (
      <svg {...logoProps}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    arduino: (
      <svg {...logoProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="8" cy="12" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
      </svg>
    ),
    bash: (
      <svg {...logoProps}>
        <path d="M4 18h8" />
        <path d="M4 12h12a4 4 0 0 1 4 4v1" />
        <path d="M14 8l4 4-4 4" />
        <path d="M18 6h-8" />
        <circle cx="6" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
    docker: (
      <svg {...logoProps}>
        <path d="M3 21h18" />
        <path d="M9 21V9H3v12" />
        <path d="M21 21V3h-6v18" />
        <path d="M15 3h6v6h-6z" fill="currentColor" />
      </svg>
    ),
    sql: (
      <svg {...logoProps}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    neo4j: (
      <svg {...logoProps}>
        <circle cx="6" cy="6" r="3" fill="currentColor" />
        <circle cx="18" cy="6" r="3" fill="currentColor" />
        <circle cx="12" cy="18" r="3" fill="currentColor" />
        <path d="M6 6l6 5" />
        <path d="M18 6l-6 5" />
        <path d="M12 13l-3 2" />
        <path d="M9 9l3 2" />
        <path d="M15 9l-3 2" />
      </svg>
    ),
    react: (
      <svg {...logoProps}>
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <path d="M12 2a10 10 0 0 1 0 20" opacity="0.5" />
        <path d="M12 2a10 10 0 0 0 0 20" opacity="0.5" />
        <path d="M2 12h20" opacity="0.3" />
      </svg>
    ),
    ts: (
      <svg {...logoProps}>
        <path d="M4 4h16v16H4z" fill="none" />
        <path d="M15 7h4a2 2 0 0 1 2 2v4h-2" />
        <path d="M9 17h6a2 2 0 0 0 2-2v-4h-2" />
        <path d="M9 7l6 8" />
        <path d="M15 7l-6 8" />
      </svg>
    ),
    angular: (
      <svg {...logoProps}>
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" fill="none" />
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="8.5" x2="22" y2="15.5" />
        <line x1="2" y1="15.5" x2="22" y2="8.5" />
      </svg>
    ),
    'vue.js': (
      <svg {...logoProps}>
        <path d="M4 14h4l2-4 2 4h4" />
        <path d="M4 18h4l2-8h-4" />
        <path d="M20 14l-2 4-2-4h-4" />
        <path d="M10 10l2 8H8l2-8" />
        <path d="M12 4l4 6" />
      </svg>
    ),
    godot: (
      <svg {...logoProps}>
        <rect x="6" y="4" width="12" height="4" rx="1" fill="currentColor" />
        <rect x="4" y="10" width="16" height="4" rx="1" fill="currentColor" />
        <rect x="8" y="16" width="8" height="4" rx="1" fill="currentColor" />
      </svg>
    ),
  };

  return logos[tech.toLowerCase()] || null;
};

export const techList = [
  'java',
  'python',
  'arduino',
  'bash',
  'docker',
  'sql',
  'neo4j',
  'react',
  'ts',
  'angular',
  'vue.js',
  'godot'
];

export default TechLogo;

