import React, { memo } from "react";

import  LocaleItems  from "../LocaleItems";
import  ViewProfile  from "../ViewProfile";

import styles from "./Card.module.css";

export function Card({ perfil }) {
  return (
    <div className={styles.cardContainer} key={perfil.pessoa.id}>
      <div className={styles.cardContent}>
        <img src="/img/pessoa1.svg" alt="Avatar perfil" />
        <div className={styles.idadeContent}>
          <h1>{perfil.pessoa.nome}</h1>
          <p>Idade: {perfil.pessoa.idade}</p>
        </div>
      </div>

      <span>Valor contribuição: {perfil.valor_contribuicao}</span>
      <LocaleItems localidades={perfil.localidades} />

      <ViewProfile idDestino={perfil.pessoa.id} />
    </div>
  );
}

export default memo(Card)
