import Head from "next/head";
import styles from "../styles/components/pages/Login.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Head>
        <title>Moramigo | Login</title>
      </Head>
      <HeaderMain />
      <div className={styles.telaLogin}>
        <div className={styles.imglogo}>
          <h1>Faça seu login na Plataforma</h1>

          <div className={styles.imgForm}>
            <img src="./img/imgLogin.svg" alt="imgBannerForm" />
          </div>
        </div>

        <div className={styles.formLogin}>
          <img src="./img/imgForm.svg" alt="imgBannerForm" />

          <form action="">
            <fieldset>
              <span>Faça seu login</span>

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

              {/* <div className={styles.esqueceuSenha}>
             Esqueceu sua senha? <a href="">Clique aqui</a>
             </div> */}

              <div className={styles.btnEntrar}>
                <button type="submit">
                  <a href="">Entrar</a>
                </button>
              </div>

              <Link href="/registrarUsuario">
                <p>
                  Ainda não tem conta ? <a> Cadastre - se</a>
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

export default Login;
