import React, { memo } from 'react';
import Link from 'next/link';

import { useInterest } from '../../../contexts/interest';

import styles from './styles.module.css';

const NavBarPendingRequests: React.FC = () => {
  const { listarPendentes, listarConfirmados } = useInterest() as any;
  return (
    <div className={styles.links}>
      <Link href="/interesses/solicitacoes">
        <a onClick={listarPendentes} className={styles.active}>
          Solicitações de Interesses
        </a>
      </Link>
      <Link href="/interesses/confirmados">
        <a onClick={listarConfirmados}>Interesses Confirmados</a>
      </Link>
    </div>
  );
};

export default memo(NavBarPendingRequests);
