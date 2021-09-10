import React, { createContext, useContext } from 'react';

import { useMoramigoLocalities } from '../libs';

import { Locality } from '../types/Locality';

type LocalitiesContext = {
  localities: Locality[] | null;
  loading: boolean;
  error: string | null;
  fetchLocalities: () => void;
};

const LocalitiesContext = createContext<LocalitiesContext>({
  localities: null,
  loading: false,
  error: null,
  fetchLocalities: () => {}
});

type Props = {
  children: React.ReactNode;
};

const LocalitiesProvider: React.FC = ({ children }: Props) => {
  const localities = useMoramigoLocalities();

  return (
    <LocalitiesContext.Provider value={localities}>
      {children}
    </LocalitiesContext.Provider>
  );
};

export default LocalitiesProvider;

export const useLocalities = () => {
  const context = useContext(LocalitiesContext);

  if (!context) {
    throw new Error('useLocalities deve ser usado em um LocalitiesProvider');
  }

  return context;
};
