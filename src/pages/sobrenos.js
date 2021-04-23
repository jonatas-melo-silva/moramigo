import { memo } from "react";

import Layout from "../components/Layout";
import Image from "../components/about/Image/Image";
import Text from "../components/about/Text";

import styles from "../styles/pages/sobre-nos.module.css";

const title = "Moramigo | Sobre nós";

const SobreNos = () => {
  return (
    <Layout title={title}>
      <div className={styles.aboutUsContainer}>
        <Image />
        <Text />
      </div>
    </Layout>
  );
};
export default memo(SobreNos);
