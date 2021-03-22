import styles from '../styles/components/Cards.module.css';

const Cards = (props) => {

  const perperfilUsuariosfis = props.perfilUsuarios;

  perperfilUsuariosfis.forEach(perfil => {
    const pessoa = perfil.pessoa
    console.log('for', pessoa)
  });

  return (
    <>

        <div className={styles.cards}>

          <div className={styles.card}>
            <section>
              <h1>Jonatas</h1>
            </section>
          </div>
          <div className={styles.card}>
            <section>
              <h1>Rafael</h1>
            </section>
          </div>
          <div className={styles.card}>
            <section>
              <h1>Rômulo</h1>
            </section>
          </div>
        </div>
    
    </>
  );
}

export default Cards;
