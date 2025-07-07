import React from 'react';
import { ContactInfo as ContactInfoType } from '@/types/cv.types';

// Single Responsibility Principle - Only responsible for displaying contact information
interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <div className="glass-card p-6">
      <h3 className="text-lg font-bold mb-4 text-[--color-foreground]">
        <span className="keyword-subtitle">Contact</span> Information
      </h3>
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-[--color-surface] hover:bg-[--color-surface-hover] transition-all duration-300">
          <span className="text-[--color-accent] text-lg">📧</span>
          <div className="flex-1">
            <span className="text-[--color-muted] text-sm font-medium">Email</span>
            <div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors font-medium"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-[--color-surface] hover:bg-[--color-surface-hover] transition-all duration-300">
          <span className="text-[--color-accent] text-lg">📱</span>
          <div className="flex-1">
            <span className="text-[--color-muted] text-sm font-medium">Phone</span>
            <div className="space-y-1">
              {contactInfo.phones.map((phone, index) => (
                <div key={index}>
                  <a 
                    href={`tel:${phone}`}
                    className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors font-medium"
                  >
                    {phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-[--color-surface] hover:bg-[--color-surface-hover] transition-all duration-300">
          <span className="text-[--color-accent] text-lg">💼</span>
          <div className="flex-1">
            <span className="text-[--color-muted] text-sm font-medium">
              <span className="keyword">LinkedIn</span>
            </span>
            <div>
              <a 
                href={`https://${contactInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors font-medium"
              >
                {contactInfo.linkedin}
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-[--color-surface] hover:bg-[--color-surface-hover] transition-all duration-300">
          <span className="text-[--color-accent] text-lg">🐙</span>
          <div className="flex-1">
            <span className="text-[--color-muted] text-sm font-medium">
              <span className="keyword">GitHub</span>
            </span>
            <div>
              <a 
                href={`https://${contactInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[--color-accent] hover:text-[--color-accent-dark] transition-colors font-medium"
              >
                {contactInfo.github}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
