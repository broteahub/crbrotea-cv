import React from 'react';
import { Project } from '@/types/cv.types';

// Single Responsibility Principle - Only responsible for displaying a single project
interface ProjectItemProps {
  project: Project;
}

export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const formatTitle = (title: string) => {
    return title.split(' ').map((word, index) => 
      ['AI', 'Automation', 'System', 'Platform', 'API', 'Dashboard', 'Analytics', 'Intelligence', 'Bot', 'Agent', 'ML', 'Tech'].includes(word) ? (
        <span key={index} className="keyword-subtitle">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };

  const formatDescription = (description: string) => {
    const techKeywords = ['AI', 'automation', 'API', 'database', 'system', 'platform', 'integration', 'optimization', 'deployment', 'architecture', 'performance', 'analytics', 'intelligence', 'machine learning', 'algorithms'];
    return description.split(' ').map((word, index) => 
      techKeywords.some(keyword => word.toLowerCase().includes(keyword.toLowerCase())) ? (
        <span key={index} className="tech-highlight">{word} </span>
      ) : (
        <span key={index}>{word} </span>
      )
    );
  };

  return (
    <div className="glass-card p-6 mb-4 relative overflow-hidden">
      {/* Success-themed gradient accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[--success] to-[--color-accent]"></div>
      
      <div className="pl-4">
        <h3 className="text-lg font-semibold text-[--color-foreground] mb-3">
          {formatTitle(project.title)}
        </h3>
        
        <p className="text-[--color-foreground] mb-4 leading-relaxed">
          {formatDescription(project.description)}
        </p>
        
        <div>
          <h5 className="text-sm font-semibold text-[--color-foreground] mb-3">
            <span className="keyword">Key</span> Metrics:
          </h5>
          <div className="flex flex-wrap gap-2">
            {project.metrics.map((metric, index) => {
              const isPerformanceMetric = metric.includes('%') || metric.includes('x') || metric.includes('increase') || metric.includes('reduction') || metric.includes('improvement');
              
              return (
                <span 
                  key={index}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isPerformanceMetric 
                      ? 'bg-gradient-to-r from-[--success] to-[--color-accent] text-white shadow-[0_0_10px_rgba(16,185,129,0.3)] font-display'
                      : 'bg-[--color-surface] text-[--color-foreground] border border-[--color-border] hover:border-[--success]'
                  }`}
                >
                  {isPerformanceMetric ? <span className="keyword">{metric}</span> : metric}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
