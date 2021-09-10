import React, { memo } from 'react';

import styles from './styles.module.css';

const TextBanner: React.FC = () => {
  return (
    <div className={styles.text}>
      <span>
        Encontrar uma galera bacana
        <br />
        para compartilhar moradia
        <br />
        não precisa ser uma tarefa difícil.
      </span>
    </div>
  );
};

export default memo(TextBanner);
