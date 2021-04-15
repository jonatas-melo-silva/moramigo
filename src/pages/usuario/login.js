import styles from "../../styles/pages/login.module.css";
import Layout from "../../components/Layout"
import { useAuth } from '../../contexts/auth'

import { useRouter } from 'next/router'
import Link from "next/link";
import { useState } from "react";

const initialState = () => {
  return {username: '', password: ''}
}

const title = 'Moramigo | Login'

const Login = () => {
  const { logar } = useAuth()
  const [values, setValues] = useState(initialState);
  const router = useRouter()

  const onChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const status = await logar({values})
    if (status == 200){
      router.push("/")
    }
  }

  return (

    <Layout title={title}>
      <div className={styles.telaLogin}>
        <div className={styles.imglogo}>
          <h1>Faça seu login na Plataforma</h1>

          <div className={styles.imgForm}>
            <img src="/img/imgLogin.svg" alt="imgBannerForm" />
          </div>
        </div>

        <div className={styles.formLogin}>
          <img src="/img/imgForm.svg" alt="imgBannerForm" />

          <form onSubmit={onSubmit}>
            <fieldset>
              <span>Faça seu login</span>

              <hr />

              <div className={styles.inputBlock}>
                <label name="username"></label>

                <input
                  placeholder="Digite seu usuario"
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={values.username}
                  onChange={onChange}
                />
              </div>

              <div className={styles.inputBlock}>
                <label name="senha"></label>
                <input
                  placeholder="Digite sua senha"
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={values.password}
                  onChange={onChange}
                />
              </div>

              {/* <div className={styles.esqueceuSenha}>
             Esqueceu sua senha? <a href="">Clique aqui</a>
             </div> */}

              <div className={styles.btnEntrar}>
                <button type="submit">
                  <a>Entrar</a>
                </button>
              </div>

              <Link href="/usuario/registrar">
                <p>
                  Ainda não tem conta ? <a> Cadastre - se</a>
                </p>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
