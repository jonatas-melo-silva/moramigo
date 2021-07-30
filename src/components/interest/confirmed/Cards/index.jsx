import React, { memo } from "react";

import Card from "../Card";

import { useInterest } from "../../../../contexts/interest";
import { useAuth } from "../../../../contexts/auth";

import styles from "./Cards.module.css";

export function Cards() {
  const { confirmados, listarConfirmados } = useInterest();
  const { user, logado } = useAuth();

  if (logado && confirmados.length == 0) {
    setTimeout(() => {
      listarConfirmados();
    }, 5000);
  }

  if (confirmados.length == 0) {
    return (
      <div data-cy="mensagem-de-aviso" className={styles.cardsContainer}>
        <h1>Você ainda não tem interesses confirmados.</h1>
      </div>
    );
  } else {
    return (
      <div data-cy="lista-interesses-confirmados" className={styles.cardsContainer}>
        {confirmados.map((perfil) => (
          <>
            {user.nome != perfil.origem.nome ? (
              <Card perfil={perfil.origem} />
            ) : (
              <Card perfil={perfil.destino} />
            )}
          </>
        ))}

      </div>

    );
  }
}

export default memo(Cards);
