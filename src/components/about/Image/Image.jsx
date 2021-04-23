import React, { memo } from "react";

import styles from "./Image.module.css";

export function Image() {
  console.log("Image")
  return (
    <section>
      <div className={styles.image}>
        <div>
          {" "}
          <img src="img/equipemoramigo.png" alt="Equipe Moramigo" />{" "}
        </div>
      </div>
    </section>
  );
}

export default memo(Image)
