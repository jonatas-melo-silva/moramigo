import styles from "../styles/components/Cards.module.css";
import Link from "next/link";

const Cards = ({ perfilUsuarios }) => (
  <div className={styles.cards}>
    {perfilUsuarios.map((perfil) => (
      <div className={styles.card} key={perfil.pessoa.id}>
        <section>
          <div className="foto-perfil">
            <img src="img/pessoa1.svg" alt="Pessoa"></img>
          </div>
          <h3>{perfil.pessoa.nome}</h3>
          <span>Idade: {perfil.pessoa.idade}</span>
          <br />
          <span>valor contribuição: {perfil.valor_contribuicao}</span>
          <br />

          {perfil.localidades.map((local) => (
            <span key={perfil.pessoa.id}>Localidades: {local.nome}</span>
          ))}
        </section>
        <Link
          key={perfil.pessoa.id}
          href="/perfil/[id]}"
          as={`/perfil/${perfil.pessoa.id}`}
        >
          <a>Ver perfil</a>
        </Link>
      </div>
    ))}
  </div>
);

export default Cards;
