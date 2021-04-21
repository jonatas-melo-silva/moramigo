import styles from "../../../styles/pages/perfil.module.css";
import Head from "../../../components/Head";
import Header from "../../../components/Header";
import Rodape from "../../../components/Rodape";
import api from "../../../services/api";
import { useAuth } from "../../../contexts/auth";
import { useInterest } from "../../../contexts/interest";

import Link from "next/link";
import { Botao } from "../../../components/Botao";

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

    //envio de email
    Email.send({
      SecureToken: "9e2682c6-a381-4bd3-8c00-2b0bcc556ad5",
      To: User.email,
      From: "moramigo.comunicacao@gmail.com",
      Subject: "Nova demonstração de interesse",
      Body:
        `<html><body><table width="100%" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td align="center"> <table> <tr> <td width="570" cellpadding="0" cellspacing="0"> <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td > <div> <h1>Olá, ` +
        User.nome +
        ` </h1> <p>Você recebeu uma nova demonstração de interesse. <strong>Acesse o site para ver suas novas interações.</strong> </p> <!-- Action --> <table align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation"> </table> <p>Atenciosamente, <br>Equipe moramigo </p> <!-- Sub copy --> <table role="presentation"> <tr> <td> <p>Encontrar uma galera bacana para dividir moradia não precisa ser uma tarefa difícil.</p> </td> </tr> </table> </div> </td> </tr> </table> </td> </tr> <tr> <td> <table align="center" width="570" cellpadding="0" cellspacing="0" role="presentation"> <tr> <td align="center"> <p>&copy; 2021 moramigo. Todos os direitos reservados.</p> <p> [moramigo] <br>Natal <br>Rio Grande do Norte </p> </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> <style> @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'); * { font-family: 'Alegreya', serif; } </style></body></html>`,
    }).then((message) => alert("Solicitação enviada!"));
  };

  return (
    <>
      <Head title={title} />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      <div className={styles.pageProfile}>
        <Header />

        <div className={styles.container}>
          <div className={styles.card} key={User.id}>
            <img src="/img/pessoa1.svg" alt="Foto"></img>
            <h2>{User.nome}</h2>

            {logado && User.id != user.id ? (
              <Botao User={User}/>
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
