import styles from "./InforHome.module.css";
import { memo } from "react";


export function InforHome(){
  return(
    <div className={styles.textInform}>
    <div className={styles.card1}>

      <div className={styles.span}>
        <span>Nossos</span><br/>
        <span>Benefícios</span>
      </div>

    </div>
    <div className={styles.card2}>
      <div>
            <img src="/img/home.svg" alt="casa" />
            <p>COMPARTILHE MOMENTOS</p>
      </div>
      <div>
            <img src="/img/pessoas.svg" alt="pessoas" />
            <p>ENCONTRE PESSOAS</p>
      </div>
      <div>
            <img src="/img/chat.svg" alt="chat" />
            <p>INICIE UMA CONVERSA</p>
      </div>

      <div>
            <img src="/img/economico.svg" alt="economico" />
            <p>DIVIDA  SUAS ECONOMIAS</p>
      </div>



    </div>

  </div>
  )
}
export default memo(InforHome);
