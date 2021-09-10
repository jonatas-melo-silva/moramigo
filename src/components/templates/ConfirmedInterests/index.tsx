import React, { memo } from 'react';

import { Default } from '../../Layout';
import { NavBarConfirmedInterest, ConfirmedList } from '../../modules';

import styles from './styles.module.css';

const ConfirmedInterests: React.FC = () => {
  const title = 'Moramigo | Interesses Confirmados';
  return (
    <Default title={title}>
      <div className={styles.container}>
        <NavBarConfirmedInterest />
        <ConfirmedList />
      </div>
    </Default>
  );
};

export default memo(ConfirmedInterests);
