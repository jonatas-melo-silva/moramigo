import React, { memo } from 'react';

import styles from './styles.module.css';

const TeamDesenvolvedor: React.FC = () => {
  return (
    <>
      <div className={styles.dividir} />
      <div className={styles.title}>
        <h1>Profissionais </h1>
        <h1>Que desenvolveram o Moramigo</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div>
            <img src="/img/rafael1.jpg" alt="Rafael Rufino" />
          </div>
          <div className={styles.description}>
            <p>Rafael Rufino</p>
            <span>Desenvolvedor Front End e UI/UX</span>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img src="/img/romulo.png" alt="Rômulo Valentim" />
          </div>
          <div className={styles.description}>
            <p>Rômulo Valentim</p>
            <span>Desenvolvedor Front End</span>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img src="/img/ana.jpeg" alt="Ana Paula Oliveira" />
          </div>
          <div className={styles.description}>
            <p>Ana Paula Oliveira</p>
            <span>Desenvolvedor Front End</span>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img src="/img/luiz.png" alt="José Luiz Dantas" />
          </div>
          <div className={styles.description}>
            <p>José Luiz Dantas</p>
            <span>Desenvolvedor Back End</span>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img src="/img/jonata.jpg" alt="Rafael Rufino" />
          </div>
          <div className={styles.description}>
            <p>Jonatas Silva</p>
            <span>Desenvolvedor Back End</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(TeamDesenvolvedor);
