import React, {memo} from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import styles from './styles.module.css';

const Pagination: React.FC = () => {
  return (
    <div className={styles.paginacao}>
      <Link href="/">
        <a className={styles.link}>
          <FontAwesomeIcon icon="angle-double-left" className={styles.icon} />
          <span> Anterior</span>
        </a>
      </Link>
      <p>1</p>
      <Link href="/">
        <a>
          <span> Proximo </span>
          <FontAwesomeIcon icon="angle-double-right" className={styles.icon} />
        </a>
      </Link>
    </div>
  );
};

export default memo(Pagination);
