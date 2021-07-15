import { memo } from "react";

import styles from './Footer.module.css';

export const Footer = () => {
  console.log("Footer")
  return (
      <footer>
        <div className={styles.footerContainer}>
          <p>Copyright © 2021 - Moramigo -
          Todos os direitos reservados.</p>

        </div>
      </footer>
  );
}

export default memo(Footer)
