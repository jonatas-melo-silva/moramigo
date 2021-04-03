import Link from "next/link";
import Head from "next/head";
import styles from "../styles/components/pages/MeusInteresses.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";

const SolicitacaoInteresses = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Moramigo | Meus Interesses</title>
        </Head>
        <HeaderMain />

        <div className={styles.links}>
          <a href="/meusInteresses" className={styles.active}>
            Solicitação de Interesses
          </a>
          <a href="/interessesConfirmados">Interesses Confirmados</a>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <section>
              <div className={styles.imgPerfil}>
                <img src="img/pessoa1.svg" alt="MorAmigo | Banner" />
                <h1>Rafael Rufino</h1>
              </div>
              <div className={styles.perfileIdade}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
                <p> 22 anos</p>
              </div>

              <span>
                Olá moramigo, estou precisando de um colega para dividir uma
                moradia.
              </span>
              <span> Bairro: Alecrim</span>
              <div className={styles.button}>
                <button className={styles.btnAceitar}>
                  <Link href="/perfil">
                    <a>Aceitar</a>
                  </Link>
                </button>
                <button className={styles.btnCancelar}>
                  <Link href="/perfil">
                    <a>Cancelar</a>
                  </Link>
                </button>
              </div>
            </section>
          </div>

          <div className={styles.card}>
            <section>
              <div className={styles.imgPerfil}>
                <img src="img/pessoa1.svg" alt="MorAmigo | Banner" />
                <h1>Rafael Rufino</h1>
              </div>
              <div className={styles.perfileIdade}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
                <p> 22 anos</p>
              </div>

              <span>
                Olá moramigo, estou precisando de um colega para dividir uma
                moradia.
              </span>
              <span> Bairro: Alecrim</span>
              <div className={styles.button}>
                <button className={styles.btnAceitar}>
                  <Link href="/perfil">
                    <a>Aceitar</a>
                  </Link>
                </button>
                <button className={styles.btnCancelar}>
                  <Link href="/perfil">
                    <a>Cancelar</a>
                  </Link>
                </button>
              </div>
            </section>
          </div>
          <div className={styles.card}>
            <section>
              <div className={styles.imgPerfil}>
                <img src="img/pessoa1.svg" alt="MorAmigo | Banner" />
                <h1>Rafael Rufino</h1>
              </div>
              <div className={styles.perfileIdade}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
                <p> 22 anos</p>
              </div>

              <span>
                Olá moramigo, estou precisando de um colega para dividir uma
                moradia.
              </span>
              <span> Bairro: Alecrim</span>
              <div className={styles.button}>
                <button className={styles.btnAceitar}>
                  <Link href="/perfil">
                    <a>Aceitar</a>
                  </Link>
                </button>
                <button className={styles.btnCancelar}>
                  <Link href="/perfil">
                    <a>Cancelar</a>
                  </Link>
                </button>
              </div>
            </section>
          </div>
        
          
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default SolicitacaoInteresses;
