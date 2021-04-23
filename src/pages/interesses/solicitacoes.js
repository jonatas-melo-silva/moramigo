import Layout from "../../components/Layout";
import NavBar from "../../components/interest/pending/NavBar";

import styles from "../../styles/pages/solicitacoes.module.css";
import Cards from "../../components/interest/pending/Cards";

const title = "Moramigo | Meus Interesses";

const Solicitacoes = () => {
  return (
    <Layout title={title}>
      <div className={styles.container}>
        <NavBar />

        <Cards />
      </div>
    </Layout>
  );
};

export default Solicitacoes;
