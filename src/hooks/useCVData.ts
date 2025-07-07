import { useState, useEffect } from 'react';
import { CVData } from '@/types/cv.types';
import { ServiceFactory } from '@/factories/service.factory';

// Custom hook following Single Responsibility Principle
export const useCVData = () => {
  const [cvData, setCvData] = useState<CVData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const dataService = ServiceFactory.createDataService();
        const data = await dataService.loadCVData();
        
        setCvData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load CV data');
        console.error('Error loading CV data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return {
    cvData,
    loading,
    error,
    refetch: () => {
      const loadData = async () => {
        try {
          setLoading(true);
          setError(null);
          
          const dataService = ServiceFactory.createDataService();
          const data = await dataService.loadCVData();
          
          setCvData(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to load CV data');
        } finally {
          setLoading(false);
        }
      };
      loadData();
    }
  };
};
