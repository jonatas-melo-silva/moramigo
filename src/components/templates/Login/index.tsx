import React, { memo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import Head from '../../elements/Head';
import Header from '../../Header';

import { useAuth } from '../../../contexts/AuthUserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles.module.css';

const defaultFormData = {
  username: '',
  password: ''
};

const Login: React.FC = () => {
  const title = 'Moramigo | Login';

  const { signIn, loading } = useAuth();
  const [formData, setFormData] = useState(defaultFormData);

  const router = useRouter();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setFormData(prevState => ({
      ...prevState,
      [event.target.id]: event.target.value
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.loading('Submetendo login!');

    const { username, password } = formData;
    const status = await signIn(username, password);

    !loading && toast.dismiss();

    console.log(status);
    if (status && status === 200) {
      toast.success('Login realizado com sucesso!');
      setTimeout(() => { return router.push('/'); }, 2000);
    }
    if (status && status === 400) {
      toast.error('Impossível fazer login com as credenciais fornecidas!');
    }
  };
  return (
    <>
      <Head title={title} />
      <Header />
      <ToastContainer autoClose={2000} className={styles.toastContainer} />

      <div className={styles.container}>
        <div className={styles.banner}>
          <h1>Faça seu login na Plataforma</h1>
          <img src="/img/imgLogin.svg" alt="imagem de banner" />
        </div>

        <div className={styles.formLogin}>
          <img src="/img/imgForm.svg" alt="logo Moramigo" />

          <form onSubmit={onSubmit}>
            <fieldset>
              <span>
                <FontAwesomeIcon icon="user-lock" /> Faça seu login
              </span>

              <div className={styles.inputBlock}>
                <label htmlFor="username"></label>
                <input
                  data-cy="nome-do-usuario"
                  placeholder="Digite seu usuario *"
                  id="username"
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={onChange}
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="password"></label>
                <input
                  data-cy="senha-do-usuario"
                  placeholder="Digite sua senha *"
                  id="password"
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={onChange}
                />
              </div>

              {/* <div className={styles.esqueceuSenha}>
             Esqueceu sua senha? <a href="">Clique aqui</a>
             </div> */}

              <div className={styles.btnEntrar}>
                <button type="submit">
                  <a data-cy="entrar-btn">Entrar</a>
                </button>
              </div>

              <Link href="/cadastrese">
                <p>
                  Ainda não tem conta ? <a> Cadastre - se</a>
                </p>
              </Link>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
