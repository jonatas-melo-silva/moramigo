import React, { memo } from 'react';

import styles from './styles.module.css';

const Objectives: React.FC = () => {
  return (
    <>
      <div className={styles.dividir} />
      <div className={styles.titulo}>
        <h1>CONHEÇA NOSSOS DIFERENCIAS</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.card1}>
          <img src="/img/valores.svg" alt="valores" />
          <h1>Nossos Valores</h1>
          <p>
            Responsabilidade, Colaboração, Qualidade, Ética, respeito, Inovação,
            Compromisso com crescimento e resultados, Reconhecimento da empresa.
          </p>
        </div>
        <div className={styles.card2}>
          <img src="/img/missao.svg" alt="valores" />

          <h1>Nossa Missão</h1>
          <p>
            A missão do moramigo é oferecer aos usuários uma melhor experiência
            no processo de dividir moradia em grupo. Que através dos nossos
            filtros, encontram pessoas com características semelhantes seja uma
            tarefa simples e satisfatória, visualizar perfis, dar match, iniciar
            uma conversa. O moramigo visa aprimorar cada vez mais sua
            usabilidade, oferecendo aos usuários um sistema eficiente e
            extremamente prático e fácil de usar.
          </p>
        </div>
        <div className={styles.card3}>
          <img src="/img/visao.svg" alt="valores" />

          <h1>Nossa Visão</h1>
          <p>
            Tornar fácil e simples a experiência de buscar pessoas para dividir
            moradia compartilhada. Fazer do moramigo um sistema inovador e
            revolucionário no mercado de software!
          </p>
        </div>
      </div>
    </>
  );
};

export default memo(Objectives);
