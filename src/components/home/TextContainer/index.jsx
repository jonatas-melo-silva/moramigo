import styles from "./TextContainer.module.css";
import { memo } from "react";


export function TextContainer(){
  return(
    <>
    <div className={styles.card1}>
      <h1>SEJA BEM - VINDO AO MORAMIGO!</h1>
      <p>SOMOS UMA PLATAFORMA INOVADORA NO MERCADO, NOSSO MISSÃO É CONECTAR PESSOAS QUE
          DESEJAM MORAR JUNTAS, CONHEÇA NOSSO SISTEMA.
      </p>
      <h3>MORE COM QUEM COMBINA COM VOCÊ</h3>

    </div>

    <div className={styles.buttonDescription}>
      <div className={styles.description}>
      <p>DESTAQUES</p>
      </div>

    </div>


    </>

  )
}
export default memo(TextContainer);
