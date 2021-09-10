import React, { memo } from 'react';

import { Default } from '../../Layout';
import { ImageTeam } from '../../elements';
import { TextOurStory } from '../../modules';

import styles from './styles.module.css';

const AboutUs: React.FC = () => {
  const title = 'Moramigo | Sobre nós';
  return (
    <Default title={title}>
      <div className={styles.aboutUsContainer}>
        <ImageTeam />
        <TextOurStory />
      </div>
    </Default>
  );
};

export default memo(AboutUs);
