import styles from "../../styles/components/Perfil.module.css";
import Rodape from "../../components/Rodape";
import api from "../../services/api";

import Link from "next/link";
import Head from "next/head";

const Perfil = ({ user }) => {
  return (
    <>
      <Head>
        <title>Moramigo | Perfil</title>
      </Head>

      <div className={styles.pageProfile}>
        <header className={styles.pageHeader} id={styles.inner}>
          <div className={styles.container}>
            <Link href="/">
              <a className={styles.back}>
                <img src="../img/back.svg" alt="voltar" />
              </a>
            </Link>

            <h1>Perfil</h1>
          </div>
        </header>

        <div className={styles.container}>
          <div className={styles.card}>
            <img src="../img/pessoa1.svg" alt="Foto"></img>
            <h2 key={user.id}>{user.nome}</h2>

            <button className={styles.button} id={styles.btnDemostrarInteresse}>
              Demostrar Interesse
            </button>
            <button
              className={styles.button}
              id={styles.btnConversar}
              type="submit"
            >
              Iniciar Conversar
            </button>
          </div>
          <main className={styles.containerMain}>
            <form className={styles.formProfile}>
              <fieldset>
                <legend>Dados do perfil</legend>
                <div className={styles.separator} id={styles.light}></div>

                <div className={styles.inputWrapper}>
                  <label name="nome">Usuário</label>
                  <span key={user.id}>{user.nome}</span>
                </div>

                <div className={styles.inputWrapper}>
                  <label name="descricao">Descrição</label>

                  <p key={user.id}>{user.descricao}</p>
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
                    <span key={user.id}>{user.idade}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Sexo</label>
                    <span key={user.id}>{user.genero}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Ocupação/ Serviço</label>
                    <span key={user.id}>{user.ocupacao}</span>
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
                    
                    {/* <span key={user.id}>
                      {user.restricoes.localidades[0].nome}
                    </span> */}
                    
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>valor que deseja Contribuir</label>
                    <span key={user.id}>
                      {user.restricoes.valor_contribuicao}
                    </span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Genero de Pessoas</label>
                    <span key={user.id}>{user.restricoes.genero_colega}</span>
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
                    <span key={user.id}>{user.restricoes.animais}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Bebidas Alcoólicas</label>
                    <span key={user.id}>{user.restricoes.bebidas}</span>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Fumantes</label>
                    <span key={user.id}>{user.restricoes.fumantes}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Visitas</label>
                    <span key={user.id}>{user.restricoes.visitas}</span>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Festas</label>
                    <span key={user.id}>{user.restricoes.festas}</span>
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
  const user = await response.data;
  return {
    props: { user, revalidate: 1 },
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
