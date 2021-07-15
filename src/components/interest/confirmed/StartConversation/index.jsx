import React , { memo }from "react";
import Link from "next/link";
import styles from "./StartConversation.module.css";

export function StartConversation() {
  return (
    <div className={styles.button}>
      <button className={styles.startConversation}>
        <Link href="https://api.whatsapp.com/send?1=pt_BR&phone=55">
          <a target="_blank">
            <img src="/img/Whatsapp.svg" alt="Whatsapp" /> Iniciar Conversa
          </a>
        </Link>
      </button>
    </div>
  );
}

export default memo(StartConversation);
