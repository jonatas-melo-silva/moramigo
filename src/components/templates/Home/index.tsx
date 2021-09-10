import React, { memo, useEffect } from 'react';

import { usePersons } from '../../../contexts/PersonsContext';

import {
  HomeBanner,
  HomeInformation,
  WelcomeText,
  SearchList,
  Pagination,
  TeamDesenvolvedor,
  Objectives
} from '../../modules';

import { Default } from '../../Layout';

const title = 'Moramigo';

const Home: React.FC = () => {
  const { persons, searchPersons } = usePersons();

  useEffect(() => {
    const initializeData = async () => {

      await searchPersons('');
    };
    initializeData();
  }, []);

  return (
    <Default title={title}>
      <HomeBanner />
      <HomeInformation />
      <WelcomeText />
      <SearchList persons={persons}/>
      <Pagination />
      <Objectives />
      <TeamDesenvolvedor />
    </Default>
  );
};

export default memo(Home);
