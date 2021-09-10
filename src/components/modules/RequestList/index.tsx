import React, { memo } from 'react';

import { useAuth } from '../../../contexts/AuthUserContext';

import { useInterest } from "../../../contexts/interest";

import RequestCard from '../RequestCard';

import styles from './styles.module.css';

const RequestList: React.FC = () =>{
  const { pendentes, listarPendentes } = useInterest() as any;
  const { authUser } = useAuth();


  if (authUser && pendentes.length == 0) {
    setTimeout(() => {
      listarPendentes();
    }, 5000);
  }

  if (pendentes.length == 0) {
    return (
      <div data-cy="mensagem-de-aviso" className={styles.aviso}>
        <h1>Você ainda não recebeu nenhuma solicitações de interesse.</h1>
      </div>
    );
  } else {
    return (
      <div data-cy="lista-de-solicitacoes" className={styles.cardsContainer}>
        <>
          {pendentes.map(perfil => (
            <RequestCard perfil={perfil} />
          ))}
        </>
      </div>
    );
  }
}

export default memo(RequestList);
