import { memo } from "react";

import  Card  from "../Card";

import styles from "./Cards.module.css";

export const Cards = ({ perfis }) => {
  console.log("Cards")
  if (!perfis) {
    return <h2>Carregando...</h2>
  }
  return (
    <div className={styles.cardsContainer}>
      {perfis.map((perfil) => (
        <Card perfil={perfil} />
      ))}
    </div>
  );
};

export default memo(Cards)
