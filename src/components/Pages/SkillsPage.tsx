import React from 'react';
import SkillCard from '../UI/SkillCard';
import { technicalSkills, softSkills, learningSkills } from '../../data/skills';

interface SkillsPageProps {
  side: 'left' | 'right';
}

const SkillsPage: React.FC<SkillsPageProps> = ({ side }) => {
  if (side === 'left') {
    return (
      <div className="h-full p-6 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-y-auto">
        <div className="mb-4 pb-3 border-b-2 border-blue-800">
          <h2 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Georgia, serif' }}>
            Compétences Techniques
          </h2>
        </div>
        
        <div className="space-y-3">
          {technicalSkills.map((skill, idx) => (
            <SkillCard key={idx} skill={skill} colorScheme="blue" />
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-xs font-semibold border-2 border-blue-300">
            Voir détails →
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full p-6 bg-gradient-to-br from-cyan-50 to-blue-50 overflow-y-auto">
      <div className="mb-4 pb-3 border-b-2 border-blue-800">
        <h2 className="text-2xl font-bold text-blue-900" style={{ fontFamily: 'Georgia, serif' }}>
          Compétences Transversales
        </h2>
      </div>
      
      <div className="space-y-3">
        {softSkills.map((skill, idx) => (
          <SkillCard key={idx} skill={skill} colorScheme="cyan" />
        ))}
      </div>
      
      <div className="mt-6 bg-blue-100 bg-opacity-70 p-4 rounded-lg border-2 border-blue-300">
        <h3 className="font-bold text-blue-900 text-sm mb-2">💡 En cours d'apprentissage</h3>
        <div className="flex flex-wrap gap-2">
          {learningSkills.map((tech, i) => (
            <span key={i} className="text-xs bg-white text-blue-800 px-2 py-1 rounded border border-blue-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;