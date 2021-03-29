
import styles from '../styles/components/Perfil.module.css';
import Rodape from "../components/Rodape";
import Link from "next/link";




//import Link from 'next/link'

const Perfil = () => { 
    return (
        <>
       <head>
        <title>Moramigo | Perfil</title>
      </head>
  
<div className= {styles.pageProfile}>
    <header className={styles.pageHeader} id={styles.inner}>
      <div className={styles.container}>
      <Link href="/">
      <a className={styles.back}>
          <img src="./img/back.svg" alt="voltar"/>
        </a>
      </Link>
     
        <h1>Perfil</h1>
      </div>
    </header>
    
    <div className={styles.container}>
      <div className={styles.card}>
        <img src="https://scontent.fnat16-1.fna.fbcdn.net/v/t1.0-9/107738734_3028137827312498_1482817804595466080_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=s7g1nAsNRDUAX_9MkY4&_nc_ht=scontent.fnat16-1.fna&oh=d015e17a11b7ca8cebb601d7fa763170&oe=6086815B" alt="Jakeliny"></img>
        <h2>Rafael Rufino</h2>
      
        <button className={styles.button} id={styles.btnDemostrarInteresse}>Demostrar Interesse</button>
        <button className={styles.button} id={styles.btnConversar}  type="submit">Iniciar Conversar</button>
      </div>
      <main className={styles.containerMain}>
        
        <form className={styles.formProfile} >
        <fieldset>
          <legend>Dados do perfil</legend>
          <div className={styles.separator} id={styles.light}></div>

            <div className={styles.inputWrapper}>
              <label for="name">Usuario</label>
              <span>Rafael Rufino dos Santos</span>
            </div>

            <div className={styles.inputWrapper}>
              <label for="avatar">Descrição</label>
      
              <p>Procurando uma Pessoa pra dividir um apartamento 
                perto da Ufrn, que aceite meu Animal de estimação (dog).</p>
    
            </div>
        
        </fieldset>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div className={styles.separator} id={styles.light}> </div>
          <div className={styles.dividirForm}>
        
            <div className={styles.inputWrapper}>
              <label>Idade</label>
              <span>25 Anos</span>
            </div>

            <div className={styles.inputWrapper}>
              <label>Sexo</label>
              <span>Masculino</span>
          </div>
    
            <div className={styles.inputWrapper}>
              <label>Ocupação/ Serviço</label>
              <span>Estudante</span>
            </div>
          </div>
        </fieldset>

        
        <fieldset>
          <legend>Interesse</legend>
          <div className={styles.separator} id={styles.light}> </div>

          <div className={styles.dividirForm}>
            <div className={styles.inputWrapper}>
              <label>Bairro</label>
              <span>Tirol</span>
            </div>    
            <div className={styles.inputWrapper}>
              <label>valor que deseja Contribuir</label>
              <span>400 R$</span>
            </div>  
            
            <div className={styles.inputWrapper}>
              <label>Genero de Pessoas</label>
              <span>Tanto Faz</span>
            </div>
          </div> 
        </fieldset>

        
        <fieldset>
          <legend>Restrições</legend>
          <div className={styles.separator} id={styles.light}> </div>

          <div className={styles.dividirForm}>
            <div className={styles.inputWrapper}>
              <label>Animais</label>
              <span>Gatos</span>
            </div>    
            <div className={styles.inputWrapper}>
              <label>Bebidas Alcolicas</label>
              <span>Tanto faz</span>
            </div>  
            
            <div className={styles.inputWrapper}>
              <label>Fumantes</label>
              <span>Tanto Faz</span>
            </div>    
            <div className={styles.inputWrapper}>
              <label>Visitas</label>
              <span>Tanto Faz</span>
            </div>    
            <div className={styles.inputWrapper}>
              <label>Festas</label>
              <span>Tanto Faz</span>
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

