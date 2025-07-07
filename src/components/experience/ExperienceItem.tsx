import React from 'react';
import { Experience } from '@/types/cv.types';

// Single Responsibility Principle - Only responsible for displaying a single experience item
interface ExperienceItemProps {
  experience: Experience;
}

export const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  const formatTitle = (title: string) => {
    return title.split(' ').map((word, index) => 
      ['Engineer', 'Developer', 'Specialist', 'Lead', 'Senior', 'AI', 'Automation', 'Tech', 'Manager'].includes(word) ? (
        <span key={index} className="keyword-subtitle">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };

  const formatAchievement = (achievement: string) => {
    const techKeywords = ['AI', 'API', 'database', 'system', 'automation', 'deployment', 'optimization', 'integration', 'architecture', 'development', 'performance'];
    return achievement.split(' ').map((word, index) => 
      techKeywords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase())) ? (
        <span key={index} className="tech-highlight">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };

  return (
    <div className="glass-card p-6 mb-6 relative overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[--color-accent] to-[--color-secondary]"></div>
      
      <div className="pl-4">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-[--color-foreground]">
            {formatTitle(experience.title)}
          </h3>
          <span className="text-sm text-[--color-muted] bg-[--color-surface] px-3 py-1 rounded-lg border border-[--color-border]">
            {experience.period}
          </span>
        </div>
        
        <h4 className="text-lg text-[--color-accent] font-medium mb-4 font-display">
          {experience.company}
        </h4>
        
        <div className="mb-6">
          <h5 className="text-sm font-semibold text-[--color-foreground] mb-3">
            <span className="keyword">Key</span> Achievements:
          </h5>
          <ul className="space-y-2 text-[--color-foreground]">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="text-sm leading-relaxed flex items-start">
                <span className="text-[--color-accent] mr-2 mt-1">▶</span>
                <span>{formatAchievement(achievement)}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h5 className="text-sm font-semibold text-[--color-foreground] mb-3">
            <span className="keyword">Tech</span> Stack:
          </h5>
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, index) => {
              const techKeywords = ['AI', 'Python', 'React', 'Next.js', 'TypeScript', 'Docker', 'AWS', 'API', 'SQL', 'NoSQL', 'Git', 'DevOps', 'ML', 'TensorFlow'];
              const isTechKeyword = techKeywords.some(keyword => tech.includes(keyword));
              
              return (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 ${
                    isTechKeyword 
                      ? 'bg-gradient-to-r from-[--color-accent] to-[--color-secondary] text-white shadow-[0_0_10px_rgba(0,212,255,0.3)] font-display keyword'
                      : 'bg-[--color-surface] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]'
                  }`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
