import React from 'react';
import type { Project } from '../../data/types';

interface ProjectCardProps {
  project: Project;
  colorScheme?: 'purple' | 'pink';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, colorScheme = 'purple' }) => {
  const colors = {
    purple: {
      bg: 'bg-white bg-opacity-70',
      border: 'border-purple-300',
      title: 'text-purple-900',
      subtitle: 'text-purple-700',
      desc: 'text-purple-800',
      badge: 'bg-purple-600 text-white',
      iconBg: 'bg-purple-200',
      divider: 'border-purple-200',
      skillText: 'text-purple-700'
    },
    pink: {
      bg: 'bg-white bg-opacity-70',
      border: 'border-pink-300',
      title: 'text-purple-900',
      subtitle: 'text-purple-700',
      desc: 'text-purple-800',
      badge: 'bg-pink-600 text-white',
      iconBg: 'bg-pink-200',
      divider: 'border-pink-200',
      skillText: 'text-purple-700'
    }
  };

  const c = colors[colorScheme];

  return (
    <div className={`${c.bg} p-4 rounded-lg border-2 ${c.border} shadow-sm hover:shadow-lg transition-shadow`}>
      <div className="flex items-start gap-3 mb-2">
        <div className={`w-16 h-16 ${c.iconBg} rounded flex items-center justify-center flex-shrink-0 text-2xl`}>
          {project.icon}
        </div>
        <div className="flex-1">
          <h3 className={`font-bold ${c.title} mb-1`}>{project.title}</h3>
          <p className={`text-xs ${c.subtitle} mb-2`}>{project.client} • {project.year}</p>
          <p className={`text-sm ${c.desc} leading-relaxed`}>
            {project.description}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-1 mt-3">
        {project.technologies.map((tech, i) => (
          <span key={i} className={`text-xs ${c.badge} px-2 py-1 rounded`}>
            {tech}
          </span>
        ))}
      </div>
      <div className={`mt-3 pt-3 border-t ${c.divider}`}>
        <div className={`text-xs ${c.skillText}`}>
          <span className="font-semibold">Compétences:</span> {project.skills.join(', ')}
        </div>
      </div>
      {project.link && (
        <div className="mt-2">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-xs ${c.subtitle} hover:underline`}
          >
            🔗 Voir sur GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;