import React, { memo } from 'react';

import styles from './styles.module.css';

const ImageTeam: React.FC = () => {
  return (
    <section>
      <div className={styles.image}>
        <div>
          <img src="img/equipemoramigo.png" alt="Equipe Moramigo" />
        </div>
      </div>
    </section>
  );
};

export default memo(ImageTeam);
