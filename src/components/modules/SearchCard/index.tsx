import React, { memo } from 'react';

import { SearchLocalities, SearchViewProfile } from '../../elements';
import { Person } from '../../../types/Person';

import styles from './styles.module.css';

type Props = {
  person: Person;
};

const SearchCard = ({ person }: Props) => {
  const { name, age, contributionValue, localities } = person;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        {person.avatar ? (
          <img src={`${person.avatar}`} alt="Avatar perfil"></img>
        ) : (
          <img src="/img/pessoa1.svg" alt="Avatar perfil"></img>
        )}
        <div className={styles.card1}>
          <h1>{name}</h1>
          <p>{age} Anos</p>
        </div>
      </div>

      <span>Deseja Contribuir: R$ {contributionValue}</span>
      <SearchLocalities localities={localities} />
      <SearchViewProfile person={person} />
    </div>
  );
};

export default memo(SearchCard);
