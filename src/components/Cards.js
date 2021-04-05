import styles from "../styles/components/Cards.module.css";
import Link from "next/link";

const Cards = ({ perfilUsuarios }) => (
  <div className={styles.cards}>
    {perfilUsuarios.map((perfil) => (
      <div className={styles.card} key={perfil.pessoa.id}>
        <section>
        <div className={styles.perfil}>
          <div>         
            <img src="img/pessoa1.svg" alt="Pessoa"></img>
            </div> 
          <h1>{perfil.pessoa.nome}</h1>
          </div>
          <p>Idade: {perfil.pessoa.idade}</p>
          <br />
          <p>valor contribuição: {perfil.valor_contribuicao}</p>
          <br />

          {perfil.localidades.map((local) => (
            <span key={perfil.pessoa.id}>Localidades: {local.nome}</span>
          ))}
        </section>
        <div className={styles.button}>
        <button className={styles.iniciarConversa}>
        <Link
          key={perfil.pessoa.id}
          href="/perfil/[id]}"
          as={`/perfil/${perfil.pessoa.id}`}
        >
          <a>Ver perfil</a>
        </Link>
        </button>
        </div>
      </div>
    ))}
  </div>
);

export default Cards;
