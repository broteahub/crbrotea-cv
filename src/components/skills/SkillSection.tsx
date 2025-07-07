import React from 'react';
import { Skill } from '@/types/cv.types';
import { SkillBadge } from './SkillBadge';

// Single Responsibility Principle - Only responsible for displaying a skill section
interface SkillSectionProps {
  title: string;
  skills: Skill[];
  showFeaturedOnly?: boolean;
}

export const SkillSection: React.FC<SkillSectionProps> = ({ 
  title, 
  skills, 
  showFeaturedOnly = false 
}) => {
  const displaySkills = showFeaturedOnly 
    ? skills.filter(skill => skill.featured)
    : skills;

  if (displaySkills.length === 0) {
    return null;
  }

  const formatTitle = (title: string) => {
    return title.split(' ').map((word, index) => 
      ['AI', 'Automation', 'Development', 'Languages', 'Tech', 'Skills'].includes(word) ? (
        <span key={index} className="keyword-subtitle">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };

  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold mb-4 text-[--color-foreground]">
        {formatTitle(title)}
      </h3>
      <div className="flex flex-wrap gap-2">
        {displaySkills.map((skill, index) => (
          <SkillBadge 
            key={`${skill.name}-${index}`} 
            skill={skill} 
          />
        ))}
      </div>
    </div>
  );
};
