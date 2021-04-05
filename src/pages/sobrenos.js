import Link from "next/link";
import Head from "next/head";
import styles from "../styles/components/pages/SobreNos.module.css";
import HeaderMain from "../components/HeaderMain";
import Rodape from "../components/Rodape";

const SobreNos = () => {
    return (
        <>
        <div className={styles.container}>
            <Head> <title>Moramigo | Sobre nós</title> </Head>
                <HeaderMain />
        
                    <section>
                        <div className={styles.imagem}>
                            <div> <img src="img/equipemoramigo.png" /> </div>
                        </div>
                    </section>
                    
                    <section>
                        <div className={styles.sntxt}>
                            <span>O moramigo é um dos projetos que nasceu na disciplina de Seminário de Orientação ao Projeto de Desenvolvimento de Sistema Distribuído, o PDS,
                            no curso de Tecnologia em Análise e Desenvolvimento de Sistemas. Uma ideia que foi apresentada pela primeira vez no início de 2020,
                            por um integrante que não faz mais parte da equipe. Durante esse tempo já enfrentamos muitas dificuldades, como por exemplo a pandemia que paralisou
                            por quase 1 (um) ano o andamento das atividades e fez com que precisássemos trabalhar remotamente. Alguns integrantes deixaram o grupo,
                            e por um tempo trabalhamos apenas com 3 integrantes. Mas com dedicação e esforço de todos estamos enfrentando os obstáculos.
                            </span>
                        </div>
                    </section>            
        </div>

        <Rodape />
        </>
        
    );
};
export default SobreNos;
