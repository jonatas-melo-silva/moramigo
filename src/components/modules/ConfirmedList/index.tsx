import React, { memo } from 'react';

import { useAuth } from '../../../contexts/AuthUserContext';
import { useInterest } from "../../../contexts/interest";

import ConfirmedCard from '../ConfirmedCard';

import styles from './styles.module.css';

const ConfirmedList = () => {
  const { confirmados, listarConfirmados } = useInterest() as any;
  const { authUser } = useAuth();

  if (authUser && confirmados.length == 0) {
    setTimeout(() => {
      listarConfirmados();
    }, 5000);
  }

  if (confirmados.length == 0) {
    return (
      <div data-cy="mensagem-de-aviso" className={styles.aviso}>
        <h1>Você ainda não tem interesses confirmados.</h1>
      </div>
    );
  } else {
    return (
      <div
        data-cy="lista-interesses-confirmados"
        className={styles.cardsContainer}
      >
        {confirmados.map(perfil => (
          <>
            {authUser.name != perfil.origem.nome ? (
              <ConfirmedCard perfil={perfil.origem} />
            ) : (
              <ConfirmedCard perfil={perfil.destino} />
            )}
          </>
        ))}
      </div>
    );
  }
}

export default memo(ConfirmedList);
