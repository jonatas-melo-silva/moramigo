import styles from "../../styles/pages/confirmados.module.css";
import Layout from "../../components/Layout";
import { useInterest } from "../../contexts/interest";
import { useAuth } from "../../contexts/auth";

import Link from "next/link";

const title = "Moramigo | Meus Interesses";

const Confirmados = () => {
  const { listarPendentes, confirmados } = useInterest();
  const { user } = useAuth();

  return (
    <Layout title={title}>
      <div className={styles.container}>
        <div className={styles.links}>
          <nav>
            <Link href="/interesses/solicitacoes">
              <a onClick={listarPendentes}>Solicitação de Interesses</a>
            </Link>
            <a className={styles.active}>Interesses Confirmados</a>
          </nav>
        </div>

        <div className={styles.cards}>
          {confirmados.map((c) => (
            <>
              {user.nome != c.origem.nome ? (
                <div className={styles.card} key={c.origem.id}>
                  <section>
                    <div className={styles.perfil}>
                      <div>
                        <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                      </div>
                      <div>
                        <h1>{c.origem.nome}</h1>
                        <p>{c.origem.idade}</p>
                      </div>
                    </div>
                    <div className={styles.verPerfil}>
                      <Link
                        href="/usuario/perfil/[id]}"
                        as={`/usuario/perfil/${c.origem.id}`}
                      >
                        <a>Ver Perfil</a>
                      </Link>
                    </div>

                    <span>{c.origem.descricao}</span>

                    <span>
                      Bairro:{" "}
                      {c.origem.restricoes.localidades.map((local) => (
                        <span key={local.nome}>{local.nome}</span>
                      ))}
                    </span>
                    <div className={styles.button}>
                      <button className={styles.inciarConversa}>
                        <Link href="/perfil">
                          <a>Iniciar Conversa</a>
                        </Link>
                      </button>
                    </div>
                  </section>
                </div>
              ) : (
                <div className={styles.card} key={c.destino.id}>
                  <section>
                    <div className={styles.perfil}>
                      <div>
                        <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                      </div>
                      <div>
                        <h1>{c.destino.nome}</h1>
                        <p>{c.destino.idade}</p>
                      </div>
                    </div>
                    <div className={styles.verPerfil}>
                      <Link
                        href="/usuario/perfil/[id]}"
                        as={`/usuario/perfil/${c.destino.id}`}
                      >
                        <a>Ver Perfil</a>
                      </Link>
                    </div>

                    <span>{c.destino.descricao}</span>

                    <span>
                      Bairro:{" "}
                      {c.destino.restricoes.localidades.map((local) => (
                        <span key={local.nome}>{local.nome}</span>
                      ))}
                    </span>
                    <div className={styles.button}>
                      <button className={styles.inciarConversa}>
                        <Link href="/perfil">
                          <a>Iniciar Conversa</a>
                        </Link>
                      </button>
                    </div>
                  </section>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Confirmados;
