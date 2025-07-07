import { CVData } from '@/types/cv.types';
import { IDataRepository } from '@/interfaces/data.interface';
import cvData from '@/data/data.json';

// Single Responsibility Principle - Only responsible for data access
export class JsonDataRepository implements IDataRepository {
  async getCVData(): Promise<CVData> {
    // Simulate async operation (could be API call, file read, etc.)
    return Promise.resolve(cvData as CVData);
  }
}

// Open/Closed Principle - Easy to extend with new data sources
export class ApiDataRepository implements IDataRepository {
  constructor(private apiUrl: string) {}

  async getCVData(): Promise<CVData> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch CV data from API');
    }
    return response.json();
  }
}
