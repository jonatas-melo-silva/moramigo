import styles from "../../styles/pages/solicitacoes.module.css";
import Layout from "../../components/Layout";
import { useInterest } from "../../contexts/interest";
import { useAuth } from "../../contexts/auth";

import Link from "next/link";

const title = "Moramigo | Meus Interesses";

const Solicitacoes = () => {
  const { pendentes, listarPendentes, listarConfirmados, aceitar, recusar } = useInterest();
  const { user } = useAuth();

  const onClickAceitar = async (id, origem_id) => {
    const body = await {
      origem: origem_id,
      destino: user.id,
      aceito: true,
    };
    aceitar(id, body)
  };

  const onClickRecusar = (id) => {
    recusar(id)
  };

  return (
    <Layout title={title}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a className={styles.active}>Solicitação de Interesses</a>
          <Link href="/interesses/confirmados">
            <a onClick={listarConfirmados}>Interesses Confirmados</a>
          </Link>
        </div>

        <div className={styles.cards}>
          {pendentes.map((p) => (
            <>
              <div className={styles.card} key={p.origem.id}>
                <section>
                  <div className={styles.perfil}>
                    <div>
                      <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
                    </div>
                    <div>
                      <h1>{p.origem.nome}</h1>
                      <p>{p.origem.idade}</p>
                    </div>
                  </div>
                  <div className={styles.verPerfil}>
                    <Link
                      href="/usuario/perfil/[id]}"
                      as={`/usuario/perfil/${p.origem.id}`}
                    >
                      <a>Ver Perfil</a>
                    </Link>
                  </div>

                  <span>{p.origem.descricao}</span>

                  <span>
                    Bairro:{" "}
                    {p.origem.restricoes.localidades.map((local) => (
                      <span key={local.nome}>{local.nome}</span>
                    ))}
                  </span>
                  <div className={styles.button}>
                    <Link href="/interesses/confirmados">
                      <button
                        className={styles.btnAceitar}
                        onClick={onClickAceitar.bind(this, p.id, p.origem.id)}
                      >
                        <a>Aceitar</a>
                      </button>
                    </Link>
                    <Link href="">
                      <button
                        className={styles.btnCancelar}
                        onClick={onClickRecusar.bind(this, p.id)}
                      >
                        <a>Cancelar</a>
                      </button>
                    </Link>
                  </div>
                </section>
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Solicitacoes;
