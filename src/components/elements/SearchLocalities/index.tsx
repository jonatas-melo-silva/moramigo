import React, {memo} from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import styles from "./styles.module.css";

type Props = {
  localities: string[];
}

const SearchLocalities = ({ localities }: Props) => {
  return (
    <>
      <div className={styles.content}>
        <span>
          <FontAwesomeIcon icon="home" />:
          {localities.map((locality, index) => (
            <span key={`${index}-${locality}`}> {locality},</span>
          ))}
        </span>
      </div>
    </>
  );
}

export default memo(SearchLocalities)
