import React, { memo } from 'react';

import { ViewProfileInterest } from '../../elements';
import { Localities } from '../../elements';
import StartConversation from '../StartConversation';

import styles from './styles.module.css';

export function ConfirmedCard({ perfil }) {
  return (
    <div className={styles.cardContainer} key={perfil.id}>
      <section>
        <div className={styles.profileData}>
          <div>
            {perfil.foto !== null ? (
              <img src={`${perfil.foto.imagem}`} alt="Foto"></img>
            ) : (
              <img src="/img/pessoa1.svg" alt="Foto"></img>
            )}
          </div>
          <div>
            <h1>{perfil.nome}</h1>
            <p>{perfil.idade} Anos</p>
          </div>
        </div>

        <ViewProfileInterest name={perfil.nome} id={perfil.id} />

        <div className={styles.cardContent}>
          <span>
            Deseja Contribuir: R$ {perfil.restricoes.valor_contribuicao}
          </span>

          <Localities localidades={perfil.restricoes.localidades} />
        </div>

        <StartConversation name={perfil.nome} id={perfil.id} />
      </section>
    </div>
  );
}

export default memo(ConfirmedCard);
