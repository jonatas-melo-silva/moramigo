import Layout from "../../components/Layout";
import NavBar from "../../components/interest/confirmed/NavBar";
import Cards from "../../components/interest/confirmed/Cards";

import styles from "../../styles/pages/confirmados.module.css";

const title = "Moramigo | Meus Interesses";

const Confirmados = () => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <NavBar />

        <Cards />
      </div>
    </Layout>
  );
};

export default Confirmados;
