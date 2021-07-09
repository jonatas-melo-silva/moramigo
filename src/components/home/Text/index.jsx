import React, {memo} from "react";

import styles from "./Text.module.css"

export function Text() {
  return (
    <div className={styles.text}>
      <span>
        Encontrar uma galera bacana
        <br />
        Para compartilhar moradia
        <br />
        Não precisa ser uma tarefa difícil.
      </span>
    </div>
  );
}

export default memo(Text)
