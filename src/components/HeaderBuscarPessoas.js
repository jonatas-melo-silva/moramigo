import Link from 'next/link'

import styles from '../styles/components/HederMain.module.css';

const HeaderBuscarPessoas = () => {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <Link href="/main">
            <h1 id={styles.titulo}>MORAMIGO</h1>
          </Link>
        </div>
      </header>
    </>
  );
}

export default HeaderBuscarPessoas;
