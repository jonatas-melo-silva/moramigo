import styles from "../styles/pages/sobre-nos.module.css";
import Layout from "../components/Layout"

const title = 'Moramigo | Sobre nós'

const SobreNos = () => {
    return (
        <Layout title={title}>
        <div className={styles.container}>
                    <section>
                        <div className={styles.imagem}>
                            <div> <img src="img/equipemoramigo.png" /> </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className={styles.textosn}>
                            <span>O moramigo é um dos projetos que nasceu na disciplina de Seminário de Orientação ao Projeto de Desenvolvimento de Sistema Distribuído, o PDS,
                            no curso de Tecnologia em Análise e Desenvolvimento de Sistemas, no IFRN CNAT. Uma ideia que foi apresentada pela primeira vez no início de 2020,
                            por um integrante que não faz mais parte da equipe. Durante esse tempo já enfrentamos muitas dificuldades, como por exemplo a pandemia que paralisou
                            por quase 1 (um) ano o andamento das atividades e fez com que precisássemos trabalhar remotamente. Alguns integrantes deixaram o grupo,
                            e por um tempo trabalhamos apenas com 3 integrantes. Mas com dedicação e esforço de todos estamos enfrentando os obstáculos.
                            Inicialmente a ideia do projeto era a divulgação de imóveis, projeto inicialmente titulado como "Vitrine Imóveis", com a orietação dos professores,
                            a ideia foi mudada para a busca de pessoas para compartilhar moradia. Algo inovador. O problema foi validado por pesquisas nas redes sociais, cartazes de ruas
                            onde as pessoas buscavam umas pelas outras, mas tinham poucas informações e pouco retorno. Mudamos de nome, agora somos o MORAMIGO. E além de conectar pessoas,
                            queremos que elas possam, se desejarem, encontrar pessoas com as quais se identifiquem, usando nossos vastos filtros. Conheça-nos, podemos te ajudar, ou ajudar você
                            a ajudar um colega. Aproveite nosso site. 
                            </span>
                        </div>
                    </section>            
        </div>
    </Layout>
  );
};
export default SobreNos;
