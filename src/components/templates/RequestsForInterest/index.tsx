import React, { memo } from 'react';

import { Default } from '../../Layout';
import { NavBarPendingRequests, RequestList } from '../../modules';

import styles from './styles.module.css';

const RequestsForInterest: React.FC = () => {
  const title = 'Moramigo | Solicitações Interesses';
  return (
    <Default title={title}>
      <div className={styles.container}>
        <NavBarPendingRequests />
        <RequestList />
      </div>
    </Default>
  );
};

export default memo(RequestsForInterest);
