import React from 'react';
import { PersonalInfo as PersonalInfoType } from '@/types/cv.types';

// Single Responsibility Principle - Only responsible for displaying personal information
interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => {
  return (
    <div className="glass-card p-8 text-center relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 opacity-20 animated-gradient" 
           style={{ background: 'var(--gradient-tech)' }}></div>
      
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-[--color-foreground] mb-3 leading-tight">
          <span className="keyword-glow">{personalInfo.name.split(' ')[0]}</span>{' '}
          {personalInfo.name.split(' ').slice(1).join(' ')}
        </h1>
        <h2 className="text-xl text-[--color-foreground] mb-6 font-medium">
          {personalInfo.title.split(' ').map((word, index) => 
            ['AI', 'Automation', 'Engineer', 'Intelligence', 'Developer', 'Specialist'].includes(word) ? (
              <span key={index} className="keyword-subtitle">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h2>
        
        <div className="flex justify-center items-center space-x-6 text-[--color-muted] mb-4">
          <span className="flex items-center space-x-2 glass-card px-3 py-1 text-sm">
            <span className="text-[--color-accent]">📍</span>
            <span>{personalInfo.location}</span>
          </span>
          <span className="flex items-center space-x-2 glass-card px-3 py-1 text-sm">
            {personalInfo.available ? (
              <>
                <span className="w-2 h-2 bg-[--success] rounded-full animate-pulse"></span>
                <span className="text-[--success] font-medium keyword">Available</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                <span className="text-red-400 font-medium">Not Available</span>
              </>
            )}
          </span>
        </div>
        
        <div className="mt-4 text-[--color-foreground] font-medium glass-card p-3 inline-block">
          {personalInfo.focus.split(' ').map((word, index) => 
            ['AI', 'Automation', 'Intelligent', 'Agents', 'Machine', 'Learning', 'Tech'].includes(word) ? (
              <span key={index} className="keyword">{word} </span>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};
