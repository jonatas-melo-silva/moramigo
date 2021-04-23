import { Head } from "../../../components/Head";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import styles from "../../../styles/pages/cadastrar-perfil.module.css";

const title = "Moramigo | Cadastrar - Perfil";

const Perfil = () => {
  return (
    <>
      <Head title={title} />
      <Header />
      <div className={styles.pageProfile}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.imgForm}>
              <img src="/img/avatar.png" alt="imgBannerForm" />
            </div>

            <button
              className={styles.button}
              id={styles.btnConversar}
              type="submit"
            >
              Adicionar Imagem
            </button>
          </div>
          <main className={styles.containerMain}>
            <form className={styles.formProfile}>
              <fieldset>
                <legend>Dados do perfil</legend>
                <div className={styles.separator} id={styles.light}></div>

                <div className={styles.inputWrapper}>
                  <label for="name">Nome</label>
                  <input name="name" placeholder="Digite seu nome" id="input" />
                </div>

                <div className={styles.inputWrapper}>
                  <label for="avatar">Descrição</label>

                  <textarea
                    name="name"
                    placeholder="Digite sua descrição"
                    id="input"
                  />
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
                    <input
                      name="name"
                      placeholder="Digite sua idade"
                      id="input"
                    />
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Ocupação / Serviço</label>
                    <input
                      name="name"
                      placeholder="Digite sua ocupação"
                      id="input"
                    />
                  </div>

                  <div className={styles.inputRadio}>
                    <label>Sexo</label>
                    <br></br>
                    <span>Masculino</span>
                    <input
                      name="name"
                      id="input"
                      type="radio"
                      value="Masculino"
                    />
                    <span>Feminino</span>
                    <input
                      name="name"
                      id="input"
                      type="radio"
                      value="Masculino"
                    />
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
                    <select name="name" id="input">
                      <option value="">Selecione</option>
                      <option value="Tirol">Tirol</option>
                      <option value="Bairro Vermelho">Bairro Vermelho</option>
                      <option value="Bernardo Vieira">Bernardo Vieira</option>
                    </select>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Valor que deseja Contribuir</label>
                    <input
                      name="name"
                      placeholder="Digite o valor"
                      id="input"
                    />
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Genero de Pessoas</label>
                    <select
                      name="name"
                      placeholder="Digite seu gênero companheiro"
                      id="input"
                    >
                      <option value="">Selecione</option>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="O">Outro</option>
                      <option value="T">Tanto faz</option>
                    </select>
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
                    <select name="name" placeholder="" id="input">
                      <option value="">Selecione</option>
                      <option value="S">Com animais</option>
                      <option value="N">Sem animais</option>
                      <option value="T">Tanto faz</option>
                    </select>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Bebidas Alcoólicas</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="S">Podem beber</option>
                      <option value="N">Sem bebidas</option>
                      <option value="T">Tanto faz</option>
                    </select>
                  </div>

                  <div className={styles.inputWrapper}>
                    <label>Fumantes</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="S">Podem fumar</option>
                      <option value="N">Sem Fumantes</option>
                      <option value="T">Tanto faz</option>
                    </select>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Visitas</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="S">Podem receber visitas</option>
                      <option value="N">Sem receber visitas</option>
                      <option value="T">Tanto faz</option>
                    </select>
                  </div>
                  <div className={styles.inputWrapper}>
                    <label>Festas</label>
                    <select>
                      <option value="">Selecione</option>
                      <option value="S">Podem ter festa</option>
                      <option value="N">Sem festas</option>
                      <option value="T">Tanto faz</option>
                    </select>
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

export default Perfil;
