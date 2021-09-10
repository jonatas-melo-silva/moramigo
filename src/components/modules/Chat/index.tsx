import React from 'react';
import styles from './styles.module.css';

export default function Chat() {
  return (
    <div className={styles.container}>
    <div className={styles.chatSupport}>
      <div className={styles.supportHeader}>
        <img src="/img/chat.png" />
        <span>Chat Moramigo</span>
      </div>
      <div className={styles.textSupport}>
        <div className={styles.admin}>
          <span className={styles.adminName}>Rafael</span>
          <span className={styles.amigoMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
            massa. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
            magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
            felis ut adipiscing
          </span>
        </div>

        <div className={styles.admin}>
          <span className={styles.usuarioName}>Jonatas</span>

          <span className={styles.usuarioMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
            massa.
          </span>
        </div>
        <div className={styles.admin}>
          <span className={styles.adminName}>Rafael</span>
          <span className={styles.amigoMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
            massa. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
            magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
            felis ut adipiscing
          </span>
        </div>

        <div className={styles.admin}>
          <span className={styles.usuarioName}>Jonatas</span>

          <span className={styles.usuarioMessage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor
            massa. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Nulla at risus. Quisque purus
            magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis,
            felis ut adipiscing
          </span>
        </div>


      </div>
      <div className={styles.messageSend}>
          <input
            type="text"
            placeholder="Digite sua mensagem aqui"
            id="message"
          />
          <div className={styles.sendMessageButton}>
            <button>
              <img src="/img/send.png" />
            </button>
          </div>
        </div>
    </div>
  </div>
  )
}
