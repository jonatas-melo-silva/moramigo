import Link from "next/link";
import styles from "../styles/components/HeaderMain.module.css";

const HeaderMain = () => {
  return (
    <>
      <header className={styles.containerHeader}>
        <div className="logo">
          <Link href="/">
            <img src="img/logo.svg" alt="MorAmigo" />
          </Link>
        </div>

        <div className={styles.menu}>
        <Link href="/sobrenos">
            <a>Sobre nós</a>
          </Link>
          <Link href="/buscarPessoas">
            <a>Buscar Pessoas</a>
          </Link>
          <Link href="meusInteresses">
            <a>Meus interesses</a>
          </Link>
          <Link href="/login">
            <a>Entrar</a>
          </Link>
          <Link href="/registrarUsuario">
            <a>Cadastre-se</a>
          </Link>
        
        </div>
      </header>
    </>
  );
};

export default HeaderMain;
