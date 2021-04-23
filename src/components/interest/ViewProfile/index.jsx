import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import React , { memo }from "react";
import Link from "next/link";

import styles from "./ViewProfile.module.css"

export function ViewProfile({ idOrigem }) {
  return (
    <div className={styles.viewProfile}>
      <Link href="/usuario/perfil/[id]}" as={`/usuario/perfil/${idOrigem}`}>
        <a>
          <FontAwesomeIcon icon="user" /> Ver Perfil
        </a>
      </Link>
    </div>
  );
}

export default memo(ViewProfile);
