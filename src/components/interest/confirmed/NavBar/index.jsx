import React, {memo} from "react";
import Link from "next/link";

import {useInterest} from "../../../../contexts/interest"

import styles from "./NavBar.module.css"

export function NavBar() {
  const {listarPendentes, listarConfirmados} = useInterest();
  return (
    <div className={styles.links}>
      <nav>
        <Link href="/interesses/solicitacoes">
          <a onClick={listarPendentes}>Solicitação de Interesses</a>
        </Link>
        <Link href="/interesses/confirmados">
          <a onClick={listarConfirmados} className={styles.active}>
            Interesses Confirmados
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default memo(NavBar);
