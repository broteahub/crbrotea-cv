'use client';

import React from 'react';
import { useCVData } from '@/hooks/useCVData';
import { PersonalInfo } from '@/components/personal/PersonalInfo';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { SkillSection } from '@/components/skills/SkillSection';
import { ExperienceItem } from '@/components/experience/ExperienceItem';
import { ProjectItem } from '@/components/projects/ProjectItem';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

// Main CV Page Component - Following Single Responsibility Principle
export default function CVPage() {
  const { cvData, loading, error } = useCVData();

  if (loading) {
    return (
      <div className="min-h-screen tech-background flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <div className="loading-skeleton rounded-full h-12 w-12 mx-auto mb-4"></div>
          <p className="text-[--color-muted]">Loading <span className="keyword">CV</span> data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen tech-background flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <div className="text-[--warning] text-xl mb-4">⚠️ Error</div>
          <p className="text-[--color-muted]">{error}</p>
        </div>
      </div>
    );
  }

  if (!cvData) {
    return (
      <div className="min-h-screen tech-background flex items-center justify-center">
        <div className="text-center glass-card p-8">
          <p className="text-[--color-muted]">No <span className="keyword">CV</span> data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen tech-background py-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[--color-accent] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[--color-secondary] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[--color-accent] rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-[--color-secondary] rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Theme Toggle Button */}
        <div className="fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>
        
        {/* Header Section */}
        <div className="mb-8">
          <PersonalInfo personalInfo={cvData.personal} />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact & Skills */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo contactInfo={cvData.contact} />
            
            <SkillSection 
              title="AI & Automation" 
              skills={cvData.skills.aiAutomation}
            />
            
            <SkillSection 
              title="Development" 
              skills={cvData.skills.development}
            />
            
            <SkillSection 
              title="Languages" 
              skills={cvData.skills.languages}
            />

            {/* Education */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-[--color-foreground]">
                <span className="keyword-subtitle">Education</span>
              </h3>
              <div className="space-y-4">
                {cvData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-[--color-secondary] pl-4">
                    <h4 className="font-semibold text-[--color-foreground]">{edu.title}</h4>
                    <p className="text-sm text-[--color-accent]">{edu.period}</p>
                    <p className="text-sm text-[--color-muted]">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-[--color-foreground]">
                <span className="keyword">Certifications</span>
              </h3>
              <div className="space-y-3">
                {cvData.certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-[--warning] pl-4">
                    <h4 className="font-semibold text-[--color-foreground] text-sm">{cert.title}</h4>
                    <p className="text-xs text-[--color-accent]">{cert.organization}</p>
                    <p className="text-xs text-[--color-muted]">{cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-4 text-[--color-foreground]">
                <span className="keyword">About</span>
              </h3>
              <p className="text-[--color-foreground] leading-relaxed">{cvData.about}</p>
            </div>

            {/* Key Projects */}
            <div>
              <h2 className="text-2xl font-bold text-[--color-foreground] mb-6">
                <span className="keyword">Key</span> Projects
              </h2>
              <div className="space-y-4">
                {cvData.keyProjects.map((project, index) => (
                  <ProjectItem key={index} project={project} />
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl font-bold text-[--color-foreground] mb-6">
                Professional <span className="keyword">Experience</span>
              </h2>
              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-[--color-muted] glass-card p-4">
          <p><span className="keyword">CV</span> Version: {cvData.footer.version} | Last Updated: {cvData.footer.lastUpdated}</p>
          <p>Status: <span className="keyword">{cvData.footer.status}</span> | Specialization: <span className="keyword">{cvData.footer.specialization}</span></p>
        </div>
      </div>
    </div>
  );
}
