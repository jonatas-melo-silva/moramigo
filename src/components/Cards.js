import styles from '../styles/components/Cards.module.css';

const Cards = (props) => {

  const perfis = props.usuarios;

  console.log('cards',perfis)

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
