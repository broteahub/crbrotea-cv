import { CVData } from '@/types/cv.types';
import { IDataValidator } from '@/interfaces/data.interface';

// Single Responsibility Principle - Only responsible for data validation
export class CVDataValidator implements IDataValidator {
  validate(data: unknown): data is CVData {
    if (!data || typeof data !== 'object') {
      return false;
    }

    const cvData = data as any;

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

  private validatePersonalInfo(personal: any): boolean {
    return personal && 
           typeof personal.name === 'string' &&
           typeof personal.title === 'string' &&
           typeof personal.location === 'string' &&
           typeof personal.available === 'boolean' &&
           typeof personal.focus === 'string';
  }

  private validateContactInfo(contact: any): boolean {
    return contact &&
           Array.isArray(contact.phones) &&
           typeof contact.email === 'string' &&
           typeof contact.linkedin === 'string' &&
           typeof contact.github === 'string';
  }

  private validateSkills(skills: any): boolean {
    return skills &&
           Array.isArray(skills.aiAutomation) &&
           Array.isArray(skills.development) &&
           Array.isArray(skills.languages);
  }
}
