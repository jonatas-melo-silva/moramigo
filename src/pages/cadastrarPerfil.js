import styles from '../styles/components/pages/CadastrarPerfil.module.css';
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";
import Link from "next/link";
import Head from "next/head";




const Perfil = () => { 
    return (
        <>
       
      <Head>
        <title>Moramigo | Cadastre - se</title>
      </Head>
      <HeaderMain />
  
<div className= {styles.pageProfile}>
    
    
    <div className={styles.container}>
      <div className={styles.card}>
      <div className={styles.imgForm}>
            <img src="./img/avatar.png" alt="imgBannerForm" />
          </div>
        
      
        
        <button className={styles.button} id={styles.btnConversar}  type="submit">Adicionar Imagem</button>
      </div>
      <main className={styles.containerMain}>
        
        <form className={styles.formProfile} >
        <fieldset>
          <legend>Detalhes</legend>
          <div className={styles.separator} id={styles.light}></div>

            <div className={styles.inputWrapper}>
              <label for="name">Usuario</label>
              <input
                  name="name"
                  placeholder="Digite seu nome"
                  id="input"                
                />
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
          <div className={styles.separator} id={styles.light}> </div>
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
              <label>Sexo</label>
              <input
                  name="name"
                  placeholder="Digite seu sexo"
                  id="input"
                                  
                />
          </div>
    
            <div className={styles.inputWrapper}>
              <label>Ocupação/ Serviço</label>
              <input
                  name="name"
                  placeholder="Digite sua ocupação"
                  id="input"                
                />
            </div>
          </div>
        </fieldset>

        
        <fieldset>
          <legend>Interesse</legend>
          <div className={styles.separator} id={styles.light}> </div>

          <div className={styles.dividirForm}>
            <div className={styles.inputWrapper}>
              <label>Bairro</label>
              <input
                  name="name"
                  placeholder="Digite seu bairro"
                  id="input"                
                />
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
              <input
                  name="name"
                  placeholder="Digite seu gênero companheiro"
                  id="input"                
                />
            </div>
          </div> 
        </fieldset>

        
        <fieldset>
          <legend>Restrições</legend>
          <div className={styles.separator} id={styles.light}> </div>

          <div className={styles.dividirForm}>
            <div className={styles.inputWrapper}>
              <label>Animais</label>
              <input
                  name="name"
                  placeholder=""
                  id="input"                
                />
            </div>    
            <div className={styles.inputWrapper}>
              <label>Bebidas Alcolicas</label>
              <input
                  name="name"
                  placeholder=""
                  id="input"                
                />
            </div>  
            
            <div className={styles.inputWrapper}>
              <label>Fumantes</label>
              <input
                  name="name"
                  placeholder=""
                  id="input"                
                />
            </div>    
            <div className={styles.inputWrapper}>
              <label>Visitas</label>
              <input
                  name="name"
                  placeholder=""
                  id="input"                
                />
            </div>    
            <div className={styles.inputWrapper}>
              <label>Festas</label>
              <input
                  name="name"
                  placeholder=""
                  id="input"                
                />
            </div>  
          </div>  
        </fieldset>
        </form>
        
        <br>
        </br>


      </main>


    </div>

</div>
<Rodape/>
  </>
  
    );
};

export default Perfil;