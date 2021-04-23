import React, { memo }from "react";

import  Text  from "../Text";

import styles from "./Banner.module.css";

export function Banner() {
  return (
    <div className={styles.banner}>
      <div id={styles.image}>
        <img src="/img/banner.svg" alt="MorAmigo | Banner" />

        <Text />
      </div>
    </div>
  );
}

export default memo(Banner)
