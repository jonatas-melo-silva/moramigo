import { useCallback, useState } from 'react';

import api from '../services/api';

import { formatPerson } from './';

import { Person } from '../types';

const useMoramigoPersons = () => {
  const [persons, setPersons] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPersons = useCallback(
    async (searchTerm: string) => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.get(`busca/${searchTerm}`);
        const persons: Person[] = response.data.map(formatPerson);
        setPersons(persons);
      } catch (error) {
        setError('Não foi possível buscar as pessoas!');
      }

      setLoading(false);
    },
    [persons]
  );

  return {
    persons,
    loading,
    error,
    searchPersons
  };
};

export default useMoramigoPersons;
