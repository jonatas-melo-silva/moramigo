import React, { memo } from 'react';

import TextBanner from '../TextBanner';

import styles from './styles.module.css';

const HomeBanner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div id={styles.image}>
        <img src="/img/banner.svg" alt="MorAmigo | Banner" />
        <TextBanner />
      </div>
    </div>
  );
}

export default memo(HomeBanner);
