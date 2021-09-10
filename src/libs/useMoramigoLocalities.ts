import { useCallback, useState } from 'react';

import api from '../services/api';

import { formatLocality } from './';

import { Locality } from '../types';

const useMoramigoLocalities = () => {
  const [localities, setLocalities] = useState<Locality[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLocalities = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('bairros/');
      const localities: Locality[] = response.data.map(formatLocality);
      setLocalities(localities);
    } catch (error) {
      setError('Não foi possível buscar os bairros');
    }
    setLoading(false);
  }, [localities]);

  return {
    localities,
    loading,
    error,
    fetchLocalities
  };
};

export default useMoramigoLocalities;
