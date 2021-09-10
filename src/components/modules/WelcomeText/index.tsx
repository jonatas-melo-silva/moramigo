import { memo } from 'react';

import styles from './styles.module.css';

const WelcomeText: React.FC = () => {
  return (
    <>
      <div className={styles.card1}>
        <h1>SEJA BEM-VINDO(A) AO MORAMIGO!</h1>
        <p>
          SOMOS UMA PLATAFORMA INOVADORA NO MERCADO, NOSSA MISSÃO É CONECTAR
          PESSOAS QUE DESEJAM MORAR JUNTAS, CONHEÇA NOSSO SISTEMA.
        </p>
        <h3>MORE COM QUEM COMBINA COM VOCÊ</h3>
      </div>

      <div className={styles.containerDescription}>
        <div className={styles.description}>
          <p>DESTAQUES</p>
        </div>
      </div>
    </>
  );
};
export default memo(WelcomeText);
