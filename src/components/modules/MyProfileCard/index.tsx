import React, { memo } from 'react';

import styles from './styles.module.css';

const MyProfileCard = ({ User }) => {
  return (
    <div className={styles.card} key={User.id}>
      {User.foto !== null ? (
        <img src={`${User.foto.imagem}`} alt="Foto"></img>
      ) : (
        <img src="/img/pessoa1.svg" alt="Foto"></img>
      )}
      <h2>{User.nome}</h2>
    </div>
  );
};

export default memo(MyProfileCard);
