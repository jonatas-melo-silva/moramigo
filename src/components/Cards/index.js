import styles from "./Cards.module.css";
import { useAuth } from "../../contexts/auth";
import Link from "next/link";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const Cards = ({ perfis }) => {
  const { logado, user } = useAuth();

  return (
    <div className={styles.cards}>
      {perfis.map((perfil) => (
        <div className={styles.card} key={perfil.pessoa.id}>
          <section>
            <div className={styles.perfil}>
              <div>
                <img src="/img/pessoa1.svg" alt="MorAmigo | Banner" />
              </div>
              <div className={styles.perfilIdade}>
                <h1> {perfil.pessoa.nome}</h1>
                <p>Idade: {perfil.pessoa.idade}</p>
              </div>
            </div>
    
              <span>Valor contribuição: {perfil.valor_contribuicao}</span>
            <div className={styles.conteudoCard}>
                <span>
                <FontAwesomeIcon icon="home"/>: {" "}
                  {perfil.localidades.map((local) => (
                    <span key={local.nome} > {local.nome },</span>
                  ))}
                </span>
       
            </div>

            {logado && perfil.pessoa.id == user.id ? (
              <Link href="/usuario/[id]}" as={`/usuario/${user.id}`}>
                <button className={styles.btn_verPefil}>
                  <a><FontAwesomeIcon icon="user"/> Ver perfil</a>
                </button>
              </Link>
            ) : (
              <Link
                href="/usuario/perfil/[id]}"
                as={`/usuario/perfil/${perfil.pessoa.id}`}
              >
                <button className={styles.btn_verPefil}>
                  <a><FontAwesomeIcon icon="user"/> Ver perfil</a>
                </button>
              </Link>
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Cards;
