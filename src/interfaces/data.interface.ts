import { CVData } from '@/types/cv.types';

// Interface Segregation Principle - Specific interfaces for different responsibilities
export interface IDataRepository {
  getCVData(): Promise<CVData>;
}

export interface IDataValidator {
  validate(data: unknown): data is CVData;
}

export interface IDataTransformer {
  transform(rawData: unknown): CVData;
}

// Dependency Inversion Principle - High-level modules depend on abstractions
export interface IDataService {
  loadCVData(): Promise<CVData>;
  validateData(data: unknown): boolean;
}
