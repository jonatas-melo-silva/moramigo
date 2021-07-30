import { memo } from 'react';

import Card from '../Card';

import styles from './Cards.module.css';

import { useAuth } from '../../../contexts/auth';

export const Cards = ({ perfis }) => {
  const { user } = useAuth();
  if (!perfis) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div className={styles.cardsContainer}>
      {perfis.map((perfil) => (
        perfil.pessoa.id !== user?.id && <Card perfil={perfil} />
      ))}
    </div>
  );
};

export default memo(Cards);
