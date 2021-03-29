import styles from "../styles/components/Cards.module.css";

const Cards = ({ perfilUsuarios }) => (
  <div className={styles.cards}>
    {perfilUsuarios.map((perfil) => (
      <div className={styles.card} key={perfil.pessoa.id}>
        <section>
          <div class="foto-perfil">
            <img src="img/pessoa1.svg" alt="Person"></img>
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
        <a href="">
            Ver perfil
          </a>
      </div>
    ))}
  </div>
);

export default Cards;
