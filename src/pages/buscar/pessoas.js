import styles from "../../styles/pages/buscar-pessoas.module.css";
import Layout from "../../components/Layout";
import Cards from "../../components/Cards";
import api from "../../services/api";

import { useState } from "react";

const title = "Moramigo | Buscar Pessoas";

const BuscarPessoas = ({ data }) => {
  const [filtros, setFiltros] = useState({});
  const [perfis, setPerfis] = useState(data);

  const handleChange = (event) => {
    if (event.target.name == "localidades" && event.target.value == "") {
      setFiltros([]);
    } else {
      setFiltros({ ...filtros, [event.target.name]: event.target.value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = "busca/";
    const response = await api.get(url, { params: filtros });
    setPerfis(response.data);
  };

  return (
    <Layout title={title}>
      <div className={styles.forms}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label id={styles.label}>Gênero</label>
            <select
              id={styles.select}
              name="genero_colega"
              onChange={handleChange}
              value={filtros.genero_colega || ""}
            >
              <option value="">Selecione</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
              <option value="O">Outro</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Animais</label>
            <select
              id={styles.select}
              name="animais"
              onChange={handleChange}
              value={filtros.animais || ""}
            >
              <option value="">Selecione</option>
              <option value="S">Com animais</option>
              <option value="N">Sem animais</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Visitas</label>
            <select
              id={styles.select}
              name="visitas"
              onChange={handleChange}
              value={filtros.visitas || ""}
            >
              <option value="">Selecione</option>
              <option value="S">Podem receber visitas</option>
              <option value="N">Sem receber visitas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Bebidas</label>
            <select
              id={styles.select}
              name="bebidas"
              onChange={handleChange}
              value={filtros.bebidas || ""}
            >
              <option value="">Selecione</option>
              <option value="S">Podem beber</option>
              <option value="N">Sem bebidas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Fumantes</label>
            <select
              id={styles.select}
              name="fumantes"
              onChange={handleChange}
              value={filtros.fumantes || ""}
            >
              <option value="">Selecione</option>
              <option value="S">Podem fumar</option>
              <option value="N">Sem Fumantes</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>Festas</label>
            <select
              id={styles.select}
              name="festas"
              onChange={handleChange}
              value={filtros.festas || ""}
            >
              <option value="">Selecione</option>
              <option value="S">Podem ter festa</option>
              <option value="N">Sem festas</option>
              <option value="T">Tanto faz</option>
            </select>
          </div>
          <div>
            <label id={styles.label}>localidades</label>
            <select
              id={styles.select}
              name="localidades"
              onChange={handleChange}
              value={filtros.localidades || ""}
            >
              <option value="">Selecione</option>
              <option value="1">Bernado Viera</option>
              <option value="2">Bairro Vermelho</option>
              <option value="3">Tirol</option>
            </select>
          </div>

          <button type="submit" className={styles.btnBuscarPessoas}>
            Buscar
          </button>
        </form>
      </div>
      {!perfis ? (
        <p>Carregando</p>
        ) : (
        <Cards perfis={perfis} />
      )}
    </Layout>
  );
};

BuscarPessoas.getInitialProps = async () => {
  const url = "busca/";
  const response = await api.get(url);
  return { data: response.data };
};

export default BuscarPessoas;
