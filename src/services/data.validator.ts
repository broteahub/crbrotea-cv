import { CVData, PersonalInfo, ContactInfo, SkillCategory } from '@/types/cv.types';
import { IDataValidator } from '@/interfaces/data.interface';

// Single Responsibility Principle - Only responsible for data validation
export class CVDataValidator implements IDataValidator {
  validate(data: unknown): data is CVData {
    if (!data || typeof data !== 'object') {
      return false;
    }

    const cvData = data as Record<string, unknown>;

    // Validate required top-level properties
    const requiredProperties = [
      'personal', 'contact', 'skills', 'education', 
      'certifications', 'about', 'keyProjects', 'experience', 'footer'
    ];

    for (const prop of requiredProperties) {
      if (!(prop in cvData)) {
        console.error(`Missing required property: ${prop}`);
        return false;
      }
    }

    // Validate personal info
    if (!this.validatePersonalInfo(cvData.personal)) {
      return false;
    }

    // Validate contact info
    if (!this.validateContactInfo(cvData.contact)) {
      return false;
    }

    // Validate skills
    if (!this.validateSkills(cvData.skills)) {
      return false;
    }

    // Validate arrays
    if (!Array.isArray(cvData.education) || 
        !Array.isArray(cvData.certifications) || 
        !Array.isArray(cvData.keyProjects) || 
        !Array.isArray(cvData.experience)) {
      return false;
    }

    return true;
  }

  private validatePersonalInfo(personal: unknown): personal is PersonalInfo {
    if (!personal || typeof personal !== 'object') {
      return false;
    }
    const p = personal as Record<string, unknown>;
    return typeof p.name === 'string' &&
           typeof p.title === 'string' &&
           typeof p.location === 'string' &&
           typeof p.available === 'boolean' &&
           typeof p.focus === 'string';
  }

  private validateContactInfo(contact: unknown): contact is ContactInfo {
    if (!contact || typeof contact !== 'object') {
      return false;
    }
    const c = contact as Record<string, unknown>;
    return Array.isArray(c.phones) &&
           typeof c.email === 'string' &&
           typeof c.linkedin === 'string' &&
           typeof c.github === 'string';
  }

  private validateSkills(skills: unknown): skills is SkillCategory {
    if (!skills || typeof skills !== 'object') {
      return false;
    }
    const s = skills as Record<string, unknown>;
    return Array.isArray(s.aiAutomation) &&
           Array.isArray(s.development) &&
           Array.isArray(s.languages);
  }
}
