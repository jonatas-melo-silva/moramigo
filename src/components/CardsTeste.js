import styles from "../styles/components/Cards.module.css";

const Cards = ({ perfilUsuarios }) => (
  <div className={styles.cards}>
    {perfilUsuarios.map((perfil) => (
      <div className={styles.card} key={perfil.pessoa.id}>
        <section>
          <h1>{perfil.pessoa.nome}</h1>
          <span>Idade: {perfil.pessoa.idade}</span>
          <br />
          <span>valor contribuição: {perfil.valor_contribuicao}</span>
          <br />

          {perfil.localidades.map((local) => (
            <span key={perfil.pessoa.id}>Localidades: {local.nome}</span>
          ))}
        </section>
      </div>
    ))}
  </div>
);

export default Cards;
