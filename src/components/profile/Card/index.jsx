import React from 'react';

import { ShowInterest } from "../ShowInterest"

export import { styles } from './Card.module.css';

export function Card({ User }) {
  return (
    <>
      <div className={styles.cardContainer} key={User.id}>
        <img src="/img/pessoa1.svg" alt="Avatar perfil"></img>
        <h2>{User.nome}</h2>

        <ShowInterest User={User} />

      </div>
    </>
  )
}
