import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);


import Link from "next/link";

import styles from "./Styles.module.css";
export function Paginacao(){
  return(
    <div className={styles.paginacao}>
      <Link href="/" className={styles.link}>
            <a>
              <FontAwesomeIcon icon= "angle-double-left" />
                     <span> anterior</span>
            </a>
      </Link>
        1
      <Link href="/">
            <a>
                <span> Proximo </span>
              <FontAwesomeIcon icon="angle-double-right" />
            </a>
      </Link>

    </div>

  )
};
