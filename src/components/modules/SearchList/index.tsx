import { memo } from 'react';

import { useAuth } from '../../../contexts/AuthUserContext';
import { usePersons } from '../../../contexts/PersonsContext';
import { Person } from '../../../types/Person';

import SearchCard from '../SearchCard';

import styles from './styles.module.css';

type Props = {
  persons: Person[];
}

export const SearchList = ({ persons }: Props) => {
  const { authUser } = useAuth();
  const { loading, error } = usePersons();

  return loading ? (
    <h2>Carregando...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <>
      <div className={styles.cardsContainer}>
        {persons.map(
          (person, index) =>
            person.id !== authUser?.id && (
              <SearchCard key={index} person={person} />
            )
        )}
      </div>
    </>
  );
};

export default memo(SearchList);
