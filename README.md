# CV Next.js Project - SOLID Architecture

Este proyecto es un CV dinámico construido con Next.js siguiendo los principios SOLID para crear una arquitectura mantenible y extensible.

## 🏗️ Arquitectura SOLID

### 1. Single Responsibility Principle (SRP)
Cada clase y componente tiene una única responsabilidad:

- **Components**: Cada componente se encarga de una sola funcionalidad
  - `PersonalInfo`: Solo muestra información personal
  - `SkillBadge`: Solo renderiza una habilidad
  - `ExperienceItem`: Solo muestra un elemento de experiencia
- **Services**: Cada servicio tiene una responsabilidad específica
  - `CVDataRepository`: Solo acceso a datos
  - `CVDataValidator`: Solo validación de datos
  - `CVDataService`: Solo orquestación de servicios

### 2. Open/Closed Principle (OCP)
El sistema está abierto para extensión pero cerrado para modificación:

- **Nuevas fuentes de datos**: Puedes agregar `ApiDataRepository` sin modificar código existente
- **Nuevos validadores**: Implementa `IDataValidator` para diferentes tipos de validación
- **Nuevos componentes**: Extiende la UI sin modificar componentes existentes

### 3. Liskov Substitution Principle (LSP)
Las implementaciones pueden ser sustituidas por sus abstracciones:

- `JsonDataRepository` y `ApiDataRepository` son intercambiables
- Cualquier implementación de `IDataValidator` puede usarse sin cambios
- Los componentes reciben props tipadas que garantizan compatibilidad

### 4. Interface Segregation Principle (ISP)
Interfaces específicas en lugar de una interfaz monolítica:

- `IDataRepository`: Solo métodos de acceso a datos
- `IDataValidator`: Solo métodos de validación
- `IDataTransformer`: Solo métodos de transformación

### 5. Dependency Inversion Principle (DIP)
Los módulos de alto nivel no dependen de módulos de bajo nivel:

- `CVDataService` depende de abstracciones (`IDataRepository`, `IDataValidator`)
- `ServiceFactory` maneja la inyección de dependencias
- Los componentes usan el hook `useCVData` que abstrae la lógica de datos

## 📁 Estructura del Proyecto

```
src/
├── types/              # Tipos TypeScript (Domain Models)
│   └── cv.types.ts
├── interfaces/         # Contratos/Abstracciones
│   └── data.interface.ts
├── services/          # Lógica de negocio
│   ├── data.repository.ts
│   ├── data.validator.ts
│   └── data.service.ts
├── factories/         # Inyección de dependencias
│   └── service.factory.ts
├── hooks/            # Custom hooks
│   └── useCVData.ts
├── components/       # Componentes UI
│   ├── ui/
│   ├── personal/
│   ├── contact/
│   ├── skills/
│   ├── experience/
│   └── projects/
├── data/            # Datos estáticos
│   └── data.json
└── app/            # Páginas Next.js
    └── page.tsx
```

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Construir para producción**:
   ```bash
   npm run build
   ```

## 🔧 Cómo modificar y extender

### Agregar una nueva fuente de datos

1. Implementa `IDataRepository`:
```typescript
export class DatabaseRepository implements IDataRepository {
  async getCVData(): Promise<CVData> {
    // Tu lógica aquí
  }
}
```

2. Actualiza el factory:
```typescript
// En service.factory.ts
const repository = new DatabaseRepository();
```

### Agregar un nuevo componente

1. Crea el componente siguiendo SRP:
```typescript
interface NewComponentProps {
  data: SpecificType;
}

export const NewComponent: React.FC<NewComponentProps> = ({ data }) => {
  // Solo responsable de mostrar este tipo de datos
  return <div>{/* Tu UI aquí */}</div>;
};
```

2. Úsalo en la página principal importándolo y agregándolo al JSX.

### Modificar validación

1. Extiende o modifica `CVDataValidator`:
```typescript
export class EnhancedValidator extends CVDataValidator {
  validate(data: unknown): data is CVData {
    // Tu lógica de validación adicional
    return super.validate(data) && /* tus validaciones */;
  }
}
```

### Agregar nuevos tipos de datos

1. Actualiza `cv.types.ts` con los nuevos tipos
2. Actualiza las interfaces si es necesario
3. Modifica el validador para incluir los nuevos campos
4. Crea componentes para mostrar los nuevos datos

## 🎯 Beneficios de esta arquitectura

- **Mantenibilidad**: Cada pieza tiene una responsabilidad clara
- **Testabilidad**: Fácil de hacer unit tests por la separación de responsabilidades
- **Extensibilidad**: Agregar nuevas funcionalidades sin romper código existente
- **Reutilización**: Componentes y servicios reutilizables
- **Escalabilidad**: Arquitectura preparada para crecer

## 🧪 Testing

La arquitectura facilita el testing:

```typescript
// Ejemplo de test para el servicio
const mockRepository = {
  getCVData: jest.fn().mockResolvedValue(mockData)
};
const mockValidator = {
  validate: jest.fn().mockReturnValue(true)
};

const service = new CVDataService(mockRepository, mockValidator);
```

## 📝 Notas adicionales

- El proyecto usa TypeScript para type safety
- Tailwind CSS para estilos consistentes
- Arquitectura preparada para SSR/SSG de Next.js
- Fácil migración a diferentes fuentes de datos (API, CMS, etc.)
