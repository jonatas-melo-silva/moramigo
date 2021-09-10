import React, { memo } from 'react';
import Link from 'next/link';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import { encodeId } from '../../../libs';
import { Person } from '../../../types/Person';

import styles from './styles.module.css';

type Props = {
  person: Person;
}

const SearchViewProfile = ({ person }: Props) => {
  const { id, name } = person;
  const formattedName = name.replaceAll('-', ' ');
    return (
      <div>
        <Link
          href="/perfil/[slug]/"
          as={`/perfil/${formattedName}-${encodeId(id)}/`}
        >
          <button data-cy="ver-perfil-btn" className={styles.button}>
            <a>
              <FontAwesomeIcon icon="user" /> Visualizar perfil
            </a>
          </button>
        </Link>
      </div>
    );
};

export default memo(SearchViewProfile);
