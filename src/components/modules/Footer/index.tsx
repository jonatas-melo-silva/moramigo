import React, { memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);
import { fas } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.css';
const Footer: React.FC = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.card01}>
          <Link href="/">
            <a>
              <img src="/img/moramigo-footer.svg" alt="moramigo" />
            </a>
          </Link>

          <div>
            <h4>
              <FontAwesomeIcon icon="home" className={styles.icon} />
              ENDEREÇO
            </h4>
            <p>Av. Senador Salgado Filho, 1559</p>
            <p>IFRN - Natal Central</p>
          </div>
        </div>
        <div className={styles.card02}>
          <p>Copyright © 2021 - Moramigo - Todos os direitos reservados.</p>
          <div>
            <h4>
              <FontAwesomeIcon icon="envelope" className={styles.icon} />
              ENTRE EM CONTATO
            </h4>
            <span>moramigo.ifrn@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
