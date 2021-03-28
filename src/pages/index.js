import styles from "../styles/components/pages/Index.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";
import Link from "next/link";



const Home = () => {
  return (
    <div className="container">
      <head>
        <title>Moramigo</title>
      </head>
      <HeaderMain />
   
        <div classname= {styles.banner}>
         <div id={styles.bannerImg}>
            <img src="img/banner.svg" alt="MorAmigo | Banner"/>
            
           <div className={styles.textoTitulo}>
              <h1>
                 Encontrar uma galera bacana
                 <br/> 
                 Para compartilhar moradia 
                 <br/>
                 Não precisa ser uma tarefa difícil.
              </h1>
           </div>
          
         </div>
    
       </div>

       <div className={styles.cards}>
      
          <div className={styles.card}>
            <section>
              <h1>Rafael</h1>
              <span> 22 anos</span>
              <span>Olá moramigo, estou precisando de um colega para dividir uma moradia.</span>  
              <span> Bairro: Alecrim</span>
              <button className = {styles.btn_verPefil}>
                  <Link href="/">
                      <a>Ver Perfil</a>
                  </Link>
              </button>        
            </section>
           </div>
          <div className={styles.card}>
            <section>
              <h1>jonatas</h1>
              <span> 22 anos</span>
              <span>Olá moramigo, estou precisando de um colega para dividir uma moradia.</span>  
              <span> Bairro: Alecrim</span>
              <button className = {styles.btn_verPefil}>
                  <Link href="/">
                      <a>Ver Perfil</a>
                  </Link>
              </button>          
            </section>
           </div>
          <div className={styles.card}>
            <section>
              <h1>Romulo</h1>
              <span> 22 anos</span>
              <span>Olá moramigo, estou precisando de um colega para dividir uma moradia.</span>  
              <span> Bairro: Alecrim</span>
              <button className = {styles.btn_verPefil}>
                  <Link href="/">
                      <a>Ver Perfil</a>
                  </Link>
              
              </button>        
            </section>
           </div>
  
        </div>

    
      <Rodape />
    </div>
  );
};

export default Home;
