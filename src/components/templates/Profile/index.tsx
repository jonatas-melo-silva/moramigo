import React, { memo } from 'react';

import { Head } from '../../elements';
import { Footer, ShowInterest } from '../../modules';

import Header from '../../../components/Header';
import Chat from '../../modules/Chat';
import styles from '../MyProfile/styles.module.css';

const Profile = ({ User }) => {
  const title = 'Moramigo | Perfil';
  return (
    <>
      <Head title={title} />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      <div className={styles.pageProfile}>
        <Header />

        <div className={styles.container}>
          <div className={styles.card} key={User.id}>
            {User.foto !== null ? (
              <img src={`${User.foto.imagem}`} alt="Foto"></img>
            ) : (
              <img src="/img/pessoa1.svg" alt="Foto"></img>
            )}
            <h2>{User.nome}</h2>

            <div className={styles.buttonProfile}>
              <ShowInterest User={User} />
            </div>
            <br />
            <br />

            <Chat />
          </div>
          <main className={styles.containerMain}>
            <form className={styles.formProfile}>
              <fieldset>
                <legend>Dados do Perfil</legend>
                <div className={styles.separator} id={styles.light}></div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="nome">Usuário</label>
                  <span>{User.nome}</span>
                </div>

                <div className={styles.inputWrapper}>
                  <label htmlFor="descricao">Descrição</label>

                  <p>{User.descricao}</p>
                </div>
              </fieldset>
              <fieldset>
                <legend>Dados Pessoais</legend>
                <div className={styles.separator} id={styles.light}>
                  {' '}
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
                  {' '}
                </div>

                <div className={styles.dividirForm}>
                  <div className={styles.inputWrapper}>
                    <label>Bairro</label>

                    {User.restricoes.localidades.map(local => (
                      <span key={local.nome}>{local.nome}</span>
                    ))}
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Valor que Deseja Contribuir</label>
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
                  {' '}
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
      <Footer />
    </>
  );
};

export default memo(Profile);
