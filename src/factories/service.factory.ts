import { IDataService, IDataRepository, IDataValidator } from '@/interfaces/data.interface';
import { CVDataService } from '@/services/data.service';
import { JsonDataRepository } from '@/services/data.repository';
import { CVDataValidator } from '@/services/data.validator';

// Factory Pattern + Dependency Injection
export class ServiceFactory {
  private static dataServiceInstance: IDataService | null = null;

  static createDataService(): IDataService {
    if (!this.dataServiceInstance) {
      const repository = new JsonDataRepository();
      const validator = new CVDataValidator();
      this.dataServiceInstance = new CVDataService(repository, validator);
    }
    return this.dataServiceInstance;
  }

  // For testing or different configurations
  static createDataServiceWithDependencies(
    repository: IDataRepository,
    validator: IDataValidator
  ): IDataService {
    return new CVDataService(repository, validator);
  }
}
