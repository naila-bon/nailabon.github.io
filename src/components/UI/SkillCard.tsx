import React from 'react';
import type { Skill } from '../../data/types';

interface SkillCardProps {
  skill: Skill;
  colorScheme?: 'blue' | 'cyan';
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, colorScheme = 'blue' }) => {
  const colors = {
    blue: {
      bg: 'bg-white bg-opacity-70',
      border: 'border-blue-300',
      text: 'text-blue-900',
      badge: 'bg-blue-800 text-white',
      bar: 'bg-blue-100',
      fill: 'bg-gradient-to-r from-blue-600 to-blue-800'
    },
    cyan: {
      bg: 'bg-white bg-opacity-70',
      border: 'border-cyan-300',
      text: 'text-blue-900',
      badge: 'bg-cyan-800 text-white',
      bar: 'bg-cyan-100',
      fill: 'bg-gradient-to-r from-cyan-600 to-blue-600'
    }
  };

  const c = colors[colorScheme];

  return (
    <div className={`${c.bg} p-3 rounded-lg border-2 ${c.border} shadow-sm`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <div>
            <span className={`font-bold ${c.text} text-sm`}>{skill.name}</span>
            {skill.description && (
              <div className="text-xs text-blue-700">{skill.description}</div>
            )}
          </div>
        </div>
        {skill.projects.length > 0 && (
          <span className={`text-xs ${c.badge} px-2 py-1 rounded`}>
            {skill.projects.length} projet{skill.projects.length > 1 ? 's' : ''}
          </span>
        )}
      </div>
      <div className={`w-full ${c.bar} rounded-full h-2`}>
        <div 
          className={`${c.fill} h-2 rounded-full transition-all duration-500`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      {skill.projects.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-2">
          {skill.projects.map((proj, i) => (
            <span 
              key={i} 
              className={`text-xs bg-${colorScheme}-200 text-${colorScheme}-800 px-2 py-1 rounded cursor-pointer hover:bg-${colorScheme}-300`}
            >
              {proj}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;