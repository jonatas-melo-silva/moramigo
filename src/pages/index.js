import styles from "../styles/pages/index.module.css";
import Layout from "../components/Layout";
import Cards from "../components/Cards";

import { perfilFetch } from '../hooks/perfilFetch'
// import api from "../services/api";

const title = "Moramigo";

const Home = () => {
  const { data } = perfilFetch('busca/')

  return (
    <Layout title={title}>
      <div className={styles.banner}>
        <div id={styles.bannerImg}>
          <img src="img/banner.svg" alt="MorAmigo | Banner" />

          <div className={styles.textoTitulo}>
            <h1>
              Encontrar uma galera bacana
              <br />
              Para compartilhar moradia
              <br />
              Não precisa ser uma tarefa difícil.
            </h1>
          </div>
        </div>
      </div>
      {!data ? (
        <p>Carregando</p>
        ) : (
        <Cards perfis={data} />
      )}
    </Layout>
  );
};

// Home.getInitialProps = async () => {
//   const url = "busca/";
//   const response = await api.get(url);
//   return { perfis: response.data };
// };

export default Home;
