import React, { memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { useInterest } from '../../../contexts/interest';
import { useAuth } from '../../../contexts/AuthUserContext';

import { ViewProfileInterest, Localities } from '../../elements';

import styles from './styles.module.css';

const RequestCard = ({ perfil }) => {
  const { aceitar, recusar } = useInterest() as any;
  const { authUser } = useAuth();

  const onClickAceitar = async (id, origem_id) => {
    const body = await {
      origem: origem_id,
      destino: authUser.id,
      aceito: true
    };
    aceitar(id, body);
  };

  const onClickRecusar = id => {
    recusar(id);
  };

  return (
    <>
      <div className={styles.card} key={perfil.origem.id}>
        <section>
          <div className={styles.perfil}>
            <div>
              {perfil.origem.foto !== null ? (
              <img src={`${perfil.origem.foto.imagem}`} alt="Foto"></img>
            ) : (
              <img src="/img/pessoa1.svg" alt="Foto"></img>
            )}
            </div>
            <div>
              <h1>{perfil.origem.nome}</h1>
              <p>{perfil.origem.idade} Anos</p>
            </div>
          </div>
          <ViewProfileInterest name={perfil.origem.nome} id={perfil.origem.id} />

          <div className={styles.cardContent}>
            <span>Deseja Contribuir: R$ {perfil.origem.restricoes.valor_contribuicao}</span>
            <Localities localidades={perfil.origem.restricoes.localidades} />
          </div>

          <div className={styles.button}>
            <Link href="/interesses/confirmados">
              <button
                className={styles.btnAceitar}
                onClick={onClickAceitar.bind(this, perfil.id, perfil.origem.id)}
              >
                <a>
                  <FontAwesomeIcon icon="check-circle" /> Aceitar
                </a>
              </button>
            </Link>
            <Link href="">
              <button
                className={styles.btnCancelar}
                onClick={onClickRecusar.bind(this, perfil.id)}
              >
                <a>
                  <FontAwesomeIcon icon="times-circle" /> Cancelar
                </a>
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(RequestCard);
