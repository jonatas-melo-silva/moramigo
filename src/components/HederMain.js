import Link from 'next/link'

import styles from '../styles/components/HederMain.module.css';

const HeaderMain = () => {
  return (
    <>
      <header>
        <div className={styles.menu}>
          <h1 id={styles.titulo}>MORAMIGO</h1>
          <Link href="/buscarPessoas">Buscar Pessoas</Link>
        </div>
      </header>
    </>
  );
}

export default HeaderMain;
