import styles from "../../../styles/pages/perfil.module.css";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import Rodape from "../../../components/Rodape";
import api from "../../../services/api";
import { useAuth } from "../../../contexts/auth";
import { useInterest } from "../../../contexts/interest";

import Link from "next/link";

const title = "Moramigo | Perfil";

const Perfil = ({ User }) => {
  const { logado, user } = useAuth();
  const { solicitar } = useInterest();

  const onClick = async () => {
    const solicitacao = await {
      origem: user.id,
      destino: User.id,
      aceito: false,
    };
    solicitar(solicitacao);
  };

  return (
    <>
      <Head title={title} />
      <div className={styles.pageProfile}>
        <Header />

        <div className={styles.container}>
          <div className={styles.card} key={User.id}>
            <img src="/img/pessoa1.svg" alt="Foto"></img>
            <h2>{User.nome}</h2>

            {logado && User.id != user.id ? (
              <button
                className={styles.button}
                id={styles.btnDemostrarInteresse}
                onClick={onClick}
              >
                Demostrar Interesse
              </button>
            ) : (
              <Link href="/usuario/login">
                <button
                  className={styles.button}
                  id={styles.btnDemostrarInteresse}
                >
                  Faça o login para demostrar interesse
                </button>
              </Link>
            )}
            {/* <button
              className={styles.button}
              id={styles.btnConversar}
              type="submit"
            >
              Iniciar Conversar
            </button> */}
          </div>
          <main className={styles.containerMain}>
            <form className={styles.formProfile}>
              <fieldset>
                <legend>Dados do perfil</legend>
                <div className={styles.separator} id={styles.light}></div>

                <div className={styles.inputWrapper}>
                  <label name="nome">Usuário</label>
                  <span>{User.nome}</span>
                </div>

                <div className={styles.inputWrapper}>
                  <label name="descricao">Descrição</label>

                  <p>{User.descricao}</p>
                </div>
              </fieldset>
              <fieldset>
                <legend>Dados Pessoais</legend>
                <div className={styles.separator} id={styles.light}>
                  {" "}
                </div>
                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label>Idade</label>
                    <span>{User.idade}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Sexo</label>
                    <span>{User.genero}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Ocupação/ Serviço</label>
                    <span>{User.ocupacao}</span>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Interesse</legend>
                <div className={styles.separator} id={styles.light}>
                  {" "}
                </div>

                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label>Bairro</label>

                    {User.restricoes.localidades.map((local) => (
                      <span key={local.nome}>{local.nome}</span>
                    ))}
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>valor que deseja Contribuir</label>
                    <span>{User.restricoes.valor_contribuicao}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Genero de Pessoas</label>
                    <span>{User.restricoes.genero_colega}</span>
                  </div>
                </div>
              </fieldset>

              <fieldset>
                <legend>Restrições</legend>
                <div className={styles.separator} id={styles.light}>
                  {" "}
                </div>

                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label>Animais</label>
                    <span>{User.restricoes.animais}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Bebidas Alcoólicas</label>
                    <span>{User.restricoes.bebidas}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Fumantes</label>
                    <span>{User.restricoes.fumantes}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Visitas</label>
                    <span>{User.restricoes.visitas}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Festas</label>
                    <span>{User.restricoes.festas}</span>
                  </div>
                </div>
              </fieldset>
            </form>

            <br></br>
          </main>
        </div>
      </div>
      <Rodape />
    </>
  );
};

export async function getStaticProps(context) {
  const url = "pessoas/";
  const id = context.params.id;
  const response = await api.get(url + id);
  const User = await response.data;
  return {
    props: { User, revalidate: 1 },
  };
}

export async function getStaticPaths() {
  const url = "pessoas/";
  const response = await api.get(url);
  const users = await response.data.slice(0, 5);
  const paths = users.map((user) => {
    return { params: { id: String(user.id) } };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export default Perfil;
