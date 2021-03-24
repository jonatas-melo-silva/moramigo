import Link from 'next/link'
import styles from '../styles/components/HederMain.module.css';

const HeaderMain = () => {
  return (
    <>
      <header className = {styles.containerHeader}>
        
      <div className = "logo">
        <Link href="/">
            <img src="img/logo.svg" alt="MorAmigo"/>
        </Link>
          
        </div>

        <div className={styles.menu}>
          <Link href="/">Sobre - Nós</Link>
          <Link href="/buscarPessoas">Buscar Pessoas</Link>
          <Link href="/">Entrar</Link>
          <Link href="/">Cadastre-se</Link>
        </div>

      </header>
    </>
  );
}

export default HeaderMain;
