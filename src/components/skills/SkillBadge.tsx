import React from 'react';
import { Skill } from '@/types/cv.types';

// Single Responsibility Principle - Only responsible for displaying a skill badge
interface SkillBadgeProps {
  skill: Skill;
  variant?: 'featured' | 'normal';
}

export const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  skill, 
  variant = 'normal' 
}) => {
  const isFeatured = skill.featured || variant === 'featured';
  
  const baseClasses = "inline-block px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg";
  
  const variantClasses = isFeatured
    ? "bg-gradient-to-r from-[--color-accent] to-[--color-secondary] text-white border border-[--color-accent] shadow-[0_0_10px_rgba(0,212,255,0.3)] font-display"
    : "bg-[--color-surface] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent] hover:bg-[--color-surface-hover]";

  const techKeywords = ['AI', 'Python', 'React', 'Next.js', 'TypeScript', 'Docker', 'AWS', 'Machine Learning', 'TensorFlow', 'Node.js', 'API', 'SQL', 'NoSQL', 'Git', 'DevOps'];
  const isTechKeyword = techKeywords.some(keyword => skill.name.includes(keyword));

  return (
    <span className={`${baseClasses} ${variantClasses} ${isTechKeyword && !isFeatured ? 'keyword-badge' : ''}`}>
      {isFeatured && <span className="keyword">{skill.name}</span>}
      {!isFeatured && skill.name}
      {skill.featured && (
        <span className="ml-2 text-yellow-300 animate-pulse">✦</span>
      )}
    </span>
  );
};
