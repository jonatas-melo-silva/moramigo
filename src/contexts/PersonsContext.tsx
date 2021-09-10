import React, { createContext, useContext } from 'react';

import { useMoramigoPersons } from '../libs';

import { Person } from '../types/Person';

type PersonsContext = {
  persons: Person[] | null;
  loading: boolean;
  error: string | null;
  searchPersons: (query: string) => void;
};

const PersonsContext = createContext<PersonsContext>({
  persons: null,
  loading: false,
  error: null,
  searchPersons: async () => {}
});

type Props = {
  children: React.ReactNode;
};

const PersonsProvider: React.FC = ({ children }: Props) => {
  const persons = useMoramigoPersons();

  return (
    <PersonsContext.Provider value={persons}>
      {children}
    </PersonsContext.Provider>
  );
};

export default PersonsProvider;

export const usePersons = () => {
  const context = useContext(PersonsContext);

  if (!context) {
    throw new Error('usePersons deve ser usando em um PeopleProvider');
  }

  return context;
};
