import React, { memo } from 'react';
import Link from 'next/link';
import { encodeId } from '../../../libs';
import styles from './styles.module.css';

const StartConversation = ({ name, id }) => {
  const formattedName = name.replaceAll('-', ' ');
  return (
    <div className={styles.button}>
      <button className={styles.startConversation}>
        <Link
          href="/perfil/[slug]/"
          as={`/perfil/${formattedName}-${encodeId(id)}/`}
        >
          <a>
            <img src="/img/chat.png" alt="Chat" /> Iniciar Conversa
          </a>
        </Link>
      </button>
    </div>
  );
};

export default memo(StartConversation);
