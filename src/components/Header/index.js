import styles from "./Header.module.css";
import { useAuth } from "../../contexts/auth";
import { useInterest } from "../../contexts/interest";
import Link from "next/link";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
                  


const MyHeader = () => {
  const { logado, logout, user } = useAuth();
  const { listarPendentes } = useInterest();




  const onClickSair = () => {
    logout();
  };
  return (
    <>
      <header className={styles.containerHeader}>
        <div className="logo">
   

          <Link href="/">
            <img src="/img/logo.svg" alt="MorAmigo" />
          </Link>
        </div>
   
        <div className={styles.menu}>
          <Link href="/sobrenos" className={styles.active}>
            <a> <FontAwesomeIcon icon="home"/> Sobre - Nós</a>
          </Link>
          <Link href="/buscar/pessoas">
           <a><FontAwesomeIcon icon="user-friends"/> Buscar Pessoas</a>
          </Link>
          {logado ? (
            <>
              <Link href="/interesses/solicitacoes" >
                <a onClick={listarPendentes}><FontAwesomeIcon icon="user-friends"/> Meus interesses</a>
              </Link>
            
              <Link
                href="/usuario/[id]}"
                as={`/usuario/${user.id}`}
              >
                <div id={styles.avatarProfile}>
                  <p>
                    {user.nome}<span>Ver perfil</span>
                  </p>
                  <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                </div>
              </Link>
           
              
              <Link href="/usuario/login">
             
             <a onClick={onClickSair}> <FontAwesomeIcon icon="sign-out-alt"/> Sair</a>
              </Link>
   


            </>
          ) : (
            <>
              <Link href="/usuario/login">
                <a><FontAwesomeIcon icon="sign-in-alt"/> Entrar</a>
              </Link>
              <Link href="/usuario/registrar">
                <a> <FontAwesomeIcon icon="file-alt"/> Cadastre-se</a>
              </Link>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default MyHeader;
