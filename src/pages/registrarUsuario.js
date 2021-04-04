import Head from "next/head";
import styles from "../styles/components/pages/RegistrarUsuario.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";
import Link from "next/link";

const RegistrarUsuario = () => {
  return (
    <>
      <Head>
        <title>Moramigo | Cadastre - se</title>
      </Head>
      <HeaderMain />
      <div className={styles.telaLogin}>
        <div className={styles.imglogo}>
          <h1>Faça seu cadastro na Plataforma</h1>

          <div className={styles.imgForm}>
            <img src="./img/imgLogin.svg" alt="imgBannerForm" />
          </div>
        </div>

        <div className={styles.formLogin}>
          <img src="./img/imgForm.svg" alt="imgBannerForm" />

          <form action="">
            <fieldset>
              <span>Criar conta</span>

              <hr />

              <div className={styles.inputBlock}>
                <label for="username"></label>

                <input
                  name="username"
                  placeholder="Digite seu usuario"
                  id="name"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label for="senha"></label>
                <input
                  name="senha"
                  placeholder="Digite sua senha"
                  type="password"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label for="confirmeSenha"></label>
                <input
                  name="confirmeSenha"
                  placeholder="Confirme sua senha"
                  type="password"
                  required
                />
              </div>

              {/* <div className={styles.termoUso}>
                Ao se cadastrar no MORAMIGO você aceita os termos 
                de uso e politica de privacidade
              </div> */}

              <div className={styles.btncadastrar}>
                <button type="submit">
                  <a href="">Cadastrar</a>
                </button>
              </div>

              <Link href="/login">
                <p>
                  ja possui conta?<a> Entre aqui</a>
                </p>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>

      <Rodape />
    </>
  );
};

export default RegistrarUsuario;
