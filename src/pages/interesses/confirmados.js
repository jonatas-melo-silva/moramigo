import styles from "../../styles/pages/confirmados.module.css";
import Layout from "../../components/Layout"

import Link from "next/link";

const title = 'Moramigo | Meus Interesses'

const Confirmados = () => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <div className={styles.links}>
          <nav>
            <a href="/interesses/solicitacoes">Solicitação de Interesses</a>
            <a className={styles.active}>
              Interesses Confirmados
            </a>
          </nav>
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
                <button className={styles.inciarConversa}>
                  <Link href="/perfil">
                    <a>Iniciar Conversa</a>
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
                <button className={styles.inciarConversa}>
                  <Link href="/perfil">
                    <a>Iniciar Conversa</a>
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
                <button className={styles.inciarConversa}>
                  <Link href="/perfil">
                    <a>Iniciar Conversa</a>
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

export default Confirmados;
