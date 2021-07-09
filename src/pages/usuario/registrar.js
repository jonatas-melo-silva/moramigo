import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Link from "next/link";

import {Layout} from "../../components/Layout"

import styles from "../../styles/pages/registrar.module.css";

const title = 'Moramigo | Cadastre - se'

const Registrar = () => {
  return (
    <Layout title={title}>
      <div className={styles.telaRegister}>
        <div className={styles.imglogo}>
          <h1>Faça seu cadastro na Plataforma</h1>

          <div className={styles.imgForm}>
            <img src="/img/imgLogin.svg" alt="imgBannerForm" />
          </div>
        </div>

        <div className={styles.formRegister}>
          <img src="/img/imgForm.svg" alt="imgBannerForm" />

          <form action="">
            <fieldset>
              <span><FontAwesomeIcon icon="user-lock"/> Criar conta</span>

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

              <Link href="/usuario/login">
                <p>
                  ja possui conta?<a> Entre aqui</a>
                </p>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Registrar;
