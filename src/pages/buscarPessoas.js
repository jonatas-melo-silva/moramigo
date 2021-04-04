import { useState } from "react";
import Head from "next/head";

import styles from "../styles/components/pages/BuscarPessoas.module.css";
import HeaderMain from "../components/HeaderMain";
import Cards from "../components/Cards";
import Rodape from "../components/Rodape";
import api from "../services/api";

const BuscarPessoas = () => {
  const [filtros, setFiltros] = useState({});
  const [perfilUsuarios, setPerfilUsuarios] = useState([]);

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
    setPerfilUsuarios(response.data);
  };

  return (
    <>
      <Head>
        <title>Moramigo | Buscar Pessoas</title>
      </Head>
      <HeaderMain />
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

      <Cards perfilUsuarios={perfilUsuarios} />
      <Rodape />
    </>
  );
};

export default BuscarPessoas;
