import React, {memo} from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import styles from "./LocaleItems.module.css";

export function LocaleItems({ localidades }) {
  return (
    <>
      <div className={styles.cardContent}>
        <span>
          <FontAwesomeIcon icon="home" />:
          {localidades.map((local) => (
            <span key={local.nome}> {local.nome},</span>
          ))}
        </span>
      </div>
    </>
  );
}

export default memo(LocaleItems)
