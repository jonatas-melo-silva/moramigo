import styles from "./Cards.module.css";

import Link from "next/link";

const Cards = ({ perfis }) => {
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
            <span>Bairro: {perfil.localidades[0].nome}</span>

    
            <Link
              key={perfil.pessoa.id}
              href="/usuario/perfil/[id]}"
              as={`/usuario/perfil/${perfil.pessoa.id}`}
            >
              <button className={styles.btn_verPefil}>
                <a>Ver perfil</a>
              </button>
            </Link>



            
          </section>
        </div>
      ))}
    </div>
  );
};

export default Cards;
