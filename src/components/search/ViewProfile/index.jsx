import React, { memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { useAuth } from '../../../contexts/auth';

import styles from './ViewProfile.module.css';

export function ViewProfile({ idDestino }) {
  const { logado, user } = useAuth();

  if (logado && idDestino == user.id) {
    return (
      <div>
        <Link href="/usuario/[id]" as={`/usuario/${user.id}`}>
          <button data-cy="ver-perfil-btn" className={styles.button}>
            <a>
              <FontAwesomeIcon icon="user" /> Ver perfil
            </a>
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/usuario/perfil/[id]" as={`/usuario/perfil/${idDestino}`}>
          <button data-cy="ver-perfil-btn" className={styles.button}>
            <a>
              <FontAwesomeIcon icon="user" /> Ver perfil
            </a>
          </button>
        </Link>
      </div>
    );
  }
}

export default memo(ViewProfile);
