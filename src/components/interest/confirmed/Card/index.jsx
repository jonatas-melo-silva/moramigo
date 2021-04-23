import React, { memo } from "react";

import styles from "./Card.module.css";
import ViewProfile from "../../ViewProfile";
import LocaleItems from "../../LocaleItems";
import StartConversation from "../StartConversation";

export function Card({ perfil }) {
  return (
    <div className={styles.cardContainer} key={perfil.id}>
      <section>
        <div className={styles.profileData}>
          <div>
            <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
          </div>
          <div>
            <h1>{perfil.nome}</h1>
            <p>{perfil.idade}</p>
          </div>
        </div>

        <ViewProfile idOrigem={perfil.id} />

        <div className={styles.cardContent}>
          <span>Descrição: {perfil.descricao}</span>

          <LocaleItems localidades={perfil.restricoes.localidades} />
        </div>

        <StartConversation />
      </section>
    </div>
  );
}

export default memo(Card);
