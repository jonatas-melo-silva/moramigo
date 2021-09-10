import React, { memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { encodeId } from '../../../libs';

import styles from './styles.module.css';

const ViewProfileInterest = ({ name, id }) => {
  const formattedName = name.replaceAll('-', ' ');

  return (
    <div className={styles.viewProfile}>
      <Link
        href="/perfil/[slug]/"
        as={`/perfil/${formattedName}-${encodeId(id)}/`}
      >
        <a>Ver Perfil</a>
      </Link>
    </div>
  );
};

export default memo(ViewProfileInterest);
