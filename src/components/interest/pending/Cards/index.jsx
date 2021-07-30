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
      <div data-cy="mensagem-de-aviso" className={styles.cardsContainer}>
        <h1>Você ainda não recebeu solicitações de interesse.</h1>
      </div>
    );
  } else {
    return (
      <div data-cy="lista-de-solicitacoes" className={styles.cardsContainer}>
        <>
          {pendentes.map(perfil => (
            <Card perfil={perfil} />
          ))}
        </>
      </div>
    );
  }
}

export default memo(Cards);
