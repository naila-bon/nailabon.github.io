import React from 'react';
import ProjectCard from '../UI/ProjectCard';
import { professionalProjects, personalProjects } from '../../data/projects';

interface ProjectsPageProps {
  side: 'left' | 'right';
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ side }) => {
  if (side === 'left') {
    return (
      <div className="h-full p-6 bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
        <div className="mb-4 pb-3 border-b-2 border-purple-800">
          <h2 className="text-2xl font-bold text-purple-900" style={{ fontFamily: 'Georgia, serif' }}>
            Projets Professionnels
          </h2>
        </div>
        
        <div className="space-y-4">
          {professionalProjects.map((project) => (
            <ProjectCard key={project.id} project={project} colorScheme="purple" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-6 bg-gradient-to-br from-pink-50 to-purple-50 overflow-y-auto">
      <div className="mb-4 pb-3 border-b-2 border-purple-800">
        <h2 className="text-2xl font-bold text-purple-900" style={{ fontFamily: 'Georgia, serif' }}>
          Projets Personnels
        </h2>
      </div>
      
      <div className="space-y-4">
        {personalProjects.map((project) => (
          <ProjectCard key={project.id} project={project} colorScheme="pink" />
        ))}
      </div>

      <div className="mt-4 bg-purple-100 bg-opacity-70 p-3 rounded-lg border-2 border-purple-300 text-center">
        <p className="text-xs text-purple-800 font-semibold">
          🔗 Tous les projets disponibles sur GitHub
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;