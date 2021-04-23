import React, { memo } from "react";

import Card from "../Card";

import { useInterest } from "../../../../contexts/interest";
import { useAuth } from "../../../../contexts/auth";

import styles from "./Cards.module.css";

export function Cards() {
  const { pendentes, listarPendentes } = useInterest();
  const { logado } = useAuth();

  if (logado && pendentes.length == 0) {
    setTimeout(() => {
      listarPendentes();
    }, 5000);
  }

  if (pendentes.length == 0) {
    return (
      <div className={styles.cardsContainer}>
        <h1>Buscando Solicitações....</h1>
      </div>
    );
  } else {
    return (
      <div className={styles.cardsContainer}>
        <>
          {pendentes.map((perfil) => (
            <Card perfil={perfil} />
          ))}
        </>
      </div>
    );
  }
}

export default memo(Cards);
