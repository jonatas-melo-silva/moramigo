import styles from "./Header.module.css";
import AuthContext from '../../contexts/auth'

import { useContext } from "react";
import Link from "next/link";

const MyHeader = () => {
  const { logado, logout, user } = useContext(AuthContext)
  console.log(logado)
  // console.log(user)

  const onClick = (event) => {
    // event.preventDefault();
    logout()
  }
  return (
    <>
      <header className={styles.containerHeader}>
        <div className="logo">
          <Link href="/">
            <img src="/img/logo.svg" alt="MorAmigo" />
          </Link>
        </div>

        <div className={styles.menu}>
          <Link href="/sobrenos">
            <a>Sobre - Nós</a>
          </Link>
          <Link href="/buscar/pessoas">
            <a>Buscar Pessoas</a>
          </Link>
          {(logado == true) ? (
            <>
            <Link href="/interesses/solicitacoes">
              <a>Meus interesses</a>
            </Link>
            <Link href="/usuario/login">
              <a onClick={onClick}>Sair</a>
            </Link>
            </>
          ) : (
            <>
            <Link href="/usuario/login">
              <a>Entrar</a>
            </Link>
            <Link href="/usuario/registrar">
              <a>Cadastre-se</a>
            </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default MyHeader;
