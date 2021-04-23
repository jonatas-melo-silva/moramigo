import React , { memo }from "react";
import Link from "next/link";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import styles from "./StartConversation.module.css"

export function StartConversation() {
  return (
    <div className={styles.button}>
      <button className={styles.startConversation}>
        <Link href="">
          <a>
            <FontAwesomeIcon icon="comment-alt" /> Iniciar Conversa
          </a>
        </Link>
      </button>
    </div>
  );
}

export default memo(StartConversation);
