import { CVData } from '@/types/cv.types';
import { IDataService, IDataRepository, IDataValidator } from '@/interfaces/data.interface';

// Dependency Inversion Principle - Depends on abstractions, not concretions
export class CVDataService implements IDataService {
  constructor(
    private repository: IDataRepository,
    private validator: IDataValidator
  ) {}

  async loadCVData(): Promise<CVData> {
    try {
      const data = await this.repository.getCVData();
      
      if (!this.validator.validate(data)) {
        throw new Error('Invalid CV data structure');
      }

      return data;
    } catch (error) {
      console.error('Error loading CV data:', error);
      throw new Error('Failed to load CV data');
    }
  }

  validateData(data: unknown): boolean {
    return this.validator.validate(data);
  }
}
