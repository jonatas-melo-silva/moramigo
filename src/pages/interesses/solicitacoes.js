import styles from "../../styles/pages/solicitacoes.module.css";
import Layout from "../../components/Layout"

import Link from "next/link";

const title = 'Moramigo | Meus Interesses'

const Solicitacoes = () => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a className={styles.active}>
            Solicitação de Interesses
          </a>
          <a href="/interesses/confirmados">Interesses Confirmados</a>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <section>
              <div className={styles.perfil}>
                <div>
                  <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                </div>
                <div>
                  <h1>Rafael Rufino</h1>
                  <p>25 Anos</p>
                </div>
              </div>
              <div className={styles.verPerfil}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
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
              <div className={styles.perfil}>
                <div>
                  <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                </div>
                <div>
                  <h1>Rafael Rufino</h1>
                  <p>25 Anos</p>
                </div>
              </div>
              <div className={styles.verPerfil}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
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
              <div className={styles.perfil}>
                <div>
                  <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                </div>
                <div>
                  <h1>Rafael Rufino</h1>
                  <p>25 Anos</p>
                </div>
              </div>
              <div className={styles.verPerfil}>
                <Link href="/perfil">
                  <a>Ver Perfil</a>
                </Link>
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
    </Layout>
  );
};

export default Solicitacoes;
