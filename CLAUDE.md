# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a dynamic CV/portfolio application built with Next.js 15.3.5, React 19, and TypeScript following SOLID principles. The architecture prioritizes maintainability, testability, and extensibility through clean separation of concerns.

## Development Commands

```bash
# Development with Turbopack
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Run linting
yarn lint
```

## Architecture Overview

### SOLID Implementation

The project implements all five SOLID principles:

1. **Single Responsibility**: Each service, component, and hook has one clear purpose
2. **Open/Closed**: New data sources can be added by implementing `IDataRepository` without modifying existing code
3. **Liskov Substitution**: `JsonDataRepository` and `ApiDataRepository` are interchangeable
4. **Interface Segregation**: Small, focused interfaces (`IDataRepository`, `IDataValidator`, `IDataService`)
5. **Dependency Inversion**: High-level modules depend on abstractions, not concrete implementations

### Dependency Injection

The project uses a manual dependency injection system through the Factory pattern:

```typescript
// src/factories/service.factory.ts
ServiceFactory.createDataService() // Returns singleton with default dependencies
ServiceFactory.createDataServiceWithDependencies(repo, validator) // For testing
```

### Data Flow

1. Components use the `useCVData` hook
2. Hook calls `ServiceFactory.createDataService()`
3. Service orchestrates repository (data fetching) and validator (data validation)
4. Data flows back through the hook to the component

### Key Architectural Decisions

- **No external state management**: Uses React hooks and services for state
- **Manual DI over framework**: Keeps the solution simple and framework-agnostic
- **Interface-first design**: All major components work with abstractions
- **Singleton services**: Services are instantiated once and reused

## Project Structure

```
src/
├── types/              # Domain models (CVData, PersonalInfo, etc.)
├── interfaces/         # Abstractions (IDataRepository, IDataValidator, IDataService)
├── services/          # Business logic implementations
├── factories/         # Dependency injection
├── hooks/            # React hooks (useCVData)
├── components/       # UI components organized by feature
├── data/            # Static JSON data
└── app/            # Next.js app directory
```

## Adding New Features

### New Data Source
Implement `IDataRepository` and update the factory:
```typescript
export class ApiDataRepository implements IDataRepository {
  async getCVData(): Promise<CVData> {
    // Implementation
  }
}
```

### New Validation Rules
Extend `CVDataValidator` or create a new implementation of `IDataValidator`.

### New Components
Follow the established pattern: single responsibility, typed props, use the `useCVData` hook for data access.

## Testing Approach

The architecture supports easy unit testing through dependency injection:
```typescript
const mockRepository = { getCVData: jest.fn() };
const mockValidator = { validate: jest.fn() };
const service = ServiceFactory.createDataServiceWithDependencies(mockRepository, mockValidator);
```

## Technology Stack

- **Next.js 15.3.5** with App Router and Turbopack
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Yarn** as package manager
- **ESLint** for code quality

## Data Structure

The CV data follows a structured format defined in `src/types/cv.types.ts`. The main `CVData` interface includes:
- Personal information
- Contact details
- Skills (organized by categories)
- Work experience
- Projects
- Education and certifications
- Footer information

Data is currently loaded from `src/data/data.json` but the architecture supports easy migration to API or CMS sources.