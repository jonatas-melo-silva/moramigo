import styles from "../styles/components/pages/Index.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";

const Home = () => {
  return (
    <div className="container">
      <head>
        <title>Moramigo</title>
      </head>
      <HeaderMain />
      <h1 className={styles.textoTitulo}>
        Encontrar uma galera bacana para compartilhar moradia não precisa ser
        uma tarefa difícil.
      </h1>
      <Rodape />
    </div>
  );
};

export default Home;
