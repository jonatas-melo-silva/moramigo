import React from "react";

import styles from "./Profile.module.css";

export function ProfileData({ User }) {
  return (
    <fieldset>
      <legend>Dados do perfil</legend>
      <div className={styles.separator} id={styles.light}></div>

      <div className={styles.inputWrapper}>
        <label name="nome">Usuário</label>
        <span>{User.nome}</span>
      </div>

      <div className={styles.inputWrapper}>
        <label name="descricao">Descrição</label>

        <p>{User.descricao}</p>
      </div>
    </fieldset>
  );
}
