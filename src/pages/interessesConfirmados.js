import Link from "next/link";
import Head from "next/head";
import styles from "../styles/components/pages/interessesConfirmados.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";


const interessesConfirmados = () => {
  return (
  <>
   <div className="container">
      <Head>
      <title>Moramigo | Meus Interesse</title>
      </Head>
      <HeaderMain />
    
      <div className={styles.links}>
            <nav> 
                <a href="/meusInteresses">Solicitação de Interesses</a>
                <a href="/interessesConfirmados"className= {styles.active}>Interesses Confirmados</a>
            </nav>
    
        </div>
        
 


      <div className={styles.cards}>
      
      <div className={styles.card}>
        <section>
          <div className={styles.imgPerfil}>
            <img src="img/pessoa1.svg" alt="MorAmigo | Banner"/>
            <h1>Rafael Rufino</h1>
          </div>
          <p> 22 anos</p>
          <span>Olá moramigo, estou precisando de um colega para dividir uma moradia.</span>  
          <span> Bairro: Alecrim</span>
          <button className = {styles.btn_verPefil}>
              <Link href="/perfil">
                  <a>Ver Perfil</a>
              </Link>
          </button>        
        </section>
       </div>
  
      </div>
    
    </div>
     <Rodape />
  </> 
  );
};

export default interessesConfirmados;
